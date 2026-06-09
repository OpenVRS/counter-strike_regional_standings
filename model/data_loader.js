"use strict";

const fs = require('fs');
const Region = require('./util/region');
const Team = require('./team');
const remapValueClamped = require('./util/remap_value_clamped');

const __highValueEvents = [6372,6711,6712,6713,6714,6586,6588]; //explicitly include RMR events, Majors

function parsePrizePool( prizePool ) {
    if ( prizePool === undefined )
        return 0;

    prizePool = prizePool.replaceAll(',','').replace('$','');
    if ( /^[0-9]+$/.test(prizePool) )
        return Math.min( Number(prizePool), 1000000 ); //cap event prize pool at $1m

    return 0; 
}

function sortMatches( matches, order = 'desc' ) {
    if ( order === 'asc' )
        matches.sort( (a, b) => a.matchStartTime - b.matchStartTime );
    else 
        matches.sort( (a, b) => b.matchStartTime - a.matchStartTime );
}

function filterIncompleteMatches( matches ) {
    return matches.filter( match => ( match.team1Players.length === 5 && match.team2Players.length === 5 ) );
}

function filterInProgressEvents( matches, events ){
    matches = matches.filter( match => {
        return events[ match.eventId ].finished;
    })

    return matches;
}

function filterMatchesByTime( matches, startTime, endTime )
{
    return matches.filter( match =>
        ( endTime < 0 || match.matchStartTime <= endTime )
        && (startTime < 0 || match.matchStartTime >= startTime ) );
}

function filterShowmatches( matches, events ){
    return matches.filter( match => {
        let eventName = events[ match.eventId ].name;

        if ( eventName.toLowerCase().includes('showmatch') )
            return false;

        return true;
    });
}

function filterUnrankedMatches( matches ) {

    return matches.filter( match => {
        if ( match.matchStartTime < 1735689600 )
            return true;

        if ( match.valveRanked === undefined )
            return false;

        return match.valveRanked;        
    });
}

class EventTeam {
    constructor( prizeJson, partial, teamUsed, teamTotal, lowestCompletedPrize ) {
        this.placement = prizeJson.placement;
        if ( partial !== true ) {
            this.prize = prizeJson.prize + prizeJson.clubShare;
        } else if ( teamUsed === teamTotal ) {
            this.prize = prizeJson.prize + prizeJson.clubShare;
        } else if ((prizeJson.prize + prizeJson.clubShare) == 0) {
            this.prize = prizeJson.prize + prizeJson.clubShare;
        } else {
            //actual partial       
            this.prize = lowestCompletedPrize;
        }
        this.shared = prizeJson.shared;
    }
}

class Event {
    constructor( eventJson, partial, endTime, teamUsageMap, maxLimit ) {
        this.eventId = eventJson.eventId;
        this.name = eventJson.eventName;
        this.prizePool = parsePrizePool( eventJson.prizePool );
        this.prizeDistributionByTeamId = {};
        this.lan = eventJson.lan;
        this.lastMatchTime = -1;
        this.lmt = eventJson.lmt;
        if (endTime >= 0 && eventJson.lmt > endTime) {
            this.finished = false; //mNote, check this further
        }
        else if (maxLimit && eventJson.lmt > maxLimit) {
            this.finished = false;
        } else {
            this.finished = eventJson.finished;
        }

        // connect qualified events
        let qualifiedEvents = [];

        // If partial evet, find the highest non-zero prize among teams whose matches have completed
        let lowestCompletedPrize = 0;
        if ( partial && teamUsageMap ) {
            const completedPrizes = eventJson.prizeDistribution
                .filter( teamJson => {
                    const { used, total } = teamUsageMap[teamJson.teamId] || { used: 0, total: 0 };
                    return used !== total && (teamJson.prize + teamJson.clubShare) > 0;
                })
                .map( teamJson => teamJson.prize + teamJson.clubShare );

            if ( completedPrizes.length > 0 )
                lowestCompletedPrize = Math.min( ...completedPrizes );
        }

        eventJson.prizeDistribution.forEach( teamJson => {
            const { used = 0, total = 0 } = teamUsageMap ? (teamUsageMap[teamJson.teamId] || {}) : {};
            this.prizeDistributionByTeamId[teamJson.teamId] = new EventTeam(
                teamJson, partial, used, total, lowestCompletedPrize
            );

            if ( teamJson.qualifiedEvents.length > 0 )
                qualifiedEvents.push( teamJson.qualifiedEvents );
        } );

        this.qualifiedEvents = qualifiedEvents.length > 0 ? qualifiedEvents[qualifiedEvents.length - 1] : -1;
    }

    accumulateMatch( match )
    {
        this.lastMatchTime = Math.max( this.lastMatchTime, match.matchStartTime );
    }
}

function initTeams( matches, events, rankingContext, constants, globalMatches ) {
    let teams = [];

    function insertTeam( name, players, isForfeitMatch, teamId, teamImage ) {

        let team = teams.find( team => team.sharesRoster(players) );
        if( team !== undefined ){
            if ( team.isPendingUpdate === true ){
                team.name = name;
                team.players = players;
                team.isPendingUpdate = isForfeitMatch;
                team.teamId = teamId;
                team.teamImage = teamImage;
            }
            
            return team;            
        }

        let rosterId = teams.length;
        team = new Team( rosterId, name, players, isForfeitMatch, teamId, teamImage );
        teams.push( team );
        return team;
    }

    matches.forEach( (match, idx) => {
        match.umid = idx;

        match.team1 = insertTeam( match.team1Name, match.team1Players, match.forfeited, match.team1Id, match.team1Image );
        match.team2 = insertTeam( match.team2Name, match.team2Players, match.forfeited, match.team2Id, match.team2Image );

        match.team1.accumulateMatch( match );
        match.team2.accumulateMatch( match );

        // If we have event data for this match, give the teams a shot at it.
        // This is the only point where the teamId for the team matches the data
        // for that event.
        if( match.eventId !== undefined )
        {
            match.team1.recordEventParticipation( events[match.eventId], match.team1Id );
            match.team2.recordEventParticipation( events[match.eventId], match.team2Id );
        }
    } );

    teams.forEach( team => { 
            team.setActiveRoster();
            team.setPluralityRegion();
        } );

    // Calculate seeding data for each team based on professional performance
    // (quantity/quality of professional teams defeated and prizes won)
    Team.initializeSeedingModifiers( teams, rankingContext, constants, globalMatches );

    return teams;
}

function calculateMatchInformationContent( match, rankingContext, events ){
    let informationContent = 1.0;
    informationContent *= rankingContext.getTimestampModifier( match.matchStartTime );

    return informationContent;
}

function findTimeWindow( matches, filterEnd, dataWindow )
{
    let endTime = filterEnd;
    if ( endTime < 0 )
        endTime = Math.max( ...matches.map( match => match.matchStartTime ) );

    let startTime = endTime - dataWindow;

    return [startTime, endTime];
}

class DataLoader
{
    constructor( rankingContext ) {
        this.matches = [];
        this.events = {};
        this.teams = {};
        this.filterEndTime = -1;
        this.filterWindow = 6*30*24*3600;
        this.rankingContext = rankingContext;
    }

    setTimeFilter( endTime = -1, dataWindow = 6*30*24*3600 ) {
        this.filterEndTime = endTime;
        this.filterWindow = dataWindow;
        return this;
    }

    clearTimeFilter() {
        this.filterEndTime = -1;
        this.filterWindow = -1;
        return this;
    }

    getContext() {
        return this.context;
    }

    // How much extra weight do we put on RMR/major events
    setHveMod( value ) { this.rankingContext.setHveMod( value ); }

    // When looking at data about a team's performance, how many outliers do we ignore?
    // e.g. the team with the most prize winnings is not treated differently than the team
    // with the nth most prize winnings.
    setNthHighest( nth ) { this.rankingContext.setOutlierCount( nth ); }

    loadData( versionTimestamp = -1, filename = '../data/matchdata.json', constants, matchItem, globalMatches, partialEvents, maxLimit )
    {
        const data = fs.readFileSync( filename );
        const dataJson = JSON.parse( data );

        // initialize match list
        let matches = dataJson.matches;
        let earlyMatches = matches;

        // Filter matches to only the data we are interested in.
        this.setTimeFilter( versionTimestamp );

        matches = filterIncompleteMatches( matches );

        // Remove unranked matches
        matches = filterUnrankedMatches( matches );
        
        const [startTime,endTime] = findTimeWindow( matches, this.filterEndTime, this.filterWindow );
        let graceperiod = 30 * 24 * 3600; // 1 month
        this.rankingContext.setTimeWindow( startTime, endTime - graceperiod );
        matches = filterMatchesByTime( matches, startTime, endTime );
        let events = {};
        if(partialEvents) {

            sortMatches( matches, 'asc' );
            // If matchItem is provided, filter matches according to its value:
            // Used for anchor calcs
            if(matchItem) {
                if ( matchItem !== undefined && matchItem !== null ) {
                    const mi = Number(matchItem);
                    if (!Number.isFinite(mi)) {
                        // ignore non-numeric values
                    } else if (mi === -1) {
                        // no-op: keep all matches
                    } else if (mi < 0) {
                        const keep = Math.max(0, Math.abs(Math.trunc(mi)));
                        matches = matches.slice(0, Math.min(keep, matches.length));
                    } else { // mi >= 0 → keep first match index matches
                        const keep = Math.max(0, Math.trunc(mi));
                        matches = matches.slice(0, Math.min(keep, matches.length));
                    }
                }
            }
            
            // count total matches per event in the original data and how many are kept after filtering
            let totalMatchesByEvent = {};
            let totalMatchesByEventTeam = {}; 
            (earlyMatches || []).forEach(m => {
                if (m.eventId === undefined) return;
                totalMatchesByEvent[m.eventId] = (totalMatchesByEvent[m.eventId] || 0) + 1;
                if (!totalMatchesByEventTeam[m.eventId]) totalMatchesByEventTeam[m.eventId] = {};
                const et = totalMatchesByEventTeam[m.eventId];
                if (m.team1Id) et[m.team1Id] = (et[m.team1Id] || 0) + 1;
                if (m.team2Id) et[m.team2Id] = (et[m.team2Id] || 0) + 1;
            });

            let usedMatchesByEvent = {};
            let usedMatchesByEventTeam = {}; 
            (matches || []).forEach(m => {
                if (m.eventId === undefined) return;
                usedMatchesByEvent[m.eventId] = (usedMatchesByEvent[m.eventId] || 0) + 1;
                if (!usedMatchesByEventTeam[m.eventId]) usedMatchesByEventTeam[m.eventId] = {};
                const et = usedMatchesByEventTeam[m.eventId];
                if (m.team1Id) et[m.team1Id] = (et[m.team1Id] || 0) + 1;
                if (m.team2Id) et[m.team2Id] = (et[m.team2Id] || 0) + 1;
            });

            // initialize event list
            dataJson.events.forEach( eventJson => {
                const total = totalMatchesByEvent[eventJson.eventId] || 0;
                const used = usedMatchesByEvent[eventJson.eventId] || 0;
                const partial = (total > 0 && used !== total);

                // Build per-team usage map: { teamId: { used, total } }
                const teamUsageMap = {};
                const totalTeams = totalMatchesByEventTeam[eventJson.eventId] || {};
                const usedTeams  = usedMatchesByEventTeam[eventJson.eventId]  || {};
                const allTeamIds = new Set([
                    ...Object.keys(totalTeams),
                    ...eventJson.prizeDistribution.map(t => t.teamId)
                ]);
                allTeamIds.forEach(teamId => {
                    teamUsageMap[teamId] = {
                        used:  usedTeams[teamId]  || 0,
                        total: totalTeams[teamId] || 0
                    };
                });

                const ev = new Event( eventJson, partial, -1, teamUsageMap, maxLimit );
                events[eventJson.eventId] = ev;
            } );
        } else {
            // init event list
            dataJson.events.forEach( eventJson => events[eventJson.eventId] = new Event( eventJson, false, endTime ) );
        }
        

        // link the prize pool of events that are connected (e.g., winning in event A qualifies a roster to participate in event B)        
        let getLinkedPrizePool = function( id, counter = 0, prizePool = 0 ) {
            let qualifiedEvent = events[id].qualifiedEvents;
            let isQualifiedEventDataAvailable = events[qualifiedEvent] === undefined ? false : true;    

            if ( qualifiedEvent !== -1 && isQualifiedEventDataAvailable ){
                let isQualifiedEventComplete = events[qualifiedEvent].finished;
                if ( isQualifiedEventComplete ){
                    return getLinkedPrizePool( qualifiedEvent, counter + 1, Math.min( events[qualifiedEvent].prizePool, 1000000 ) );
                }
            }
            return [ counter, prizePool ];
        }

        for ( const id in events ){
            let [counter, linkedPrizePool] = getLinkedPrizePool( id );
            if ( counter > 0 ){
                events[id].prizePool += linkedPrizePool * Math.pow(0.5,counter);
                events[id].prizePool = Math.min( events[id].prizePool, 1000000 );
            }
        }

        // Let each event know what matches were part of it
        matches.forEach( match => {
            let event = events[match.eventId];
            if( event !== undefined )
                event.accumulateMatch( match );
        } );

        // Remove showmatches
        matches = filterShowmatches( matches, events );  
        
        // Remove events that are in-progress
        matches = filterInProgressEvents( matches, events );

        // Estimate the information content of each match (for example, recent matches may be considered
        // to have more accurate data about the current skill of players than old ones)
        matches.forEach( match => {
            match.informationContent = calculateMatchInformationContent( match, this.rankingContext, events );
        } );

        // Now that we have events ready, we can initialize teams.  We are going to translate from the
        // input data `teamId` to a more granular `rosterId` that is based on the players that play in
        // the teams (similarly to Major qualification rules).  Rosters that share enough players with
        // a more recent match are considered the "same" team for the purposes of ranking.

        // When initializing the teams, sort matches by reverse start time so we always see the
        // most recent match for a particular roster as the 'base' roster for that team.
        sortMatches( matches, 'desc' );

        let teams = initTeams( matches, events, this.rankingContext, constants, globalMatches );

        // For processing the games and calculating ratings, we will go in forward order in time.  This
        // also has the effect of making sure that recent data is considered the most strongly, and also
        // with as much context as possible given past results.
        sortMatches( matches, 'asc' );

        this.matches = matches;
        this.teams = teams;
        this.events = events;
    }
}

module.exports = DataLoader;