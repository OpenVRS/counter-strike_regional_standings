"use strict";
require("dotenv").config({ path: "../.env" });
const fs = require('fs');
const path = require('path');
const Ranking = require('../model/ranking');
const Report = require('../model/report');
const RegionList = ['Europe', 'Americas', 'Asia'];

// NOTE, this only runs off the most recent ranking data. You must have already generated a teams.json by running model/main.js
// After generating the teams.json, do not make any changes to the matchdata.json. If you have done so, regenerate the rankings by running model/main.js

// Within teams.json search for the team you want to test a roster move on and select the corresponding "teamId"
const chosenTeamId = "heroic sep 2024";

function sortCaseInsensitive( list ){
    return list.sort( (a,b) => {
        if ( a.toLowerCase() < b.toLowerCase() ) return -1;
        if ( a.toLowerCase() > b.toLowerCase() ) return 1;
        return 0;
    });
}

async function run(insertedTeamId = null, options = {}) {
    const rosterMode = process.env.MODE || options.mode || "default";
    const teamId = insertedTeamId || chosenTeamId;
    if(!teamId) {
        if (rosterMode === "return") return { status: "failed", message: "No teamId specified" };
        console.log("No teamId specified");
        return;
    }
    let regions = [0,1,2];
    if ( process.argv[2] !== undefined )
        regions = JSON.parse(process.argv[2]);

    let filename = options.matchFile || '../data/matchdata.json';
    if ( process.argv[3] !== undefined )
        filename = process.argv[3];

    // Parse matches and generate standings
    let [matches,teams] = Ranking.generateRanking( -1, filename );

    // Get date of most recent match
    let mostRecentMatch = Math.max( ...matches.map( m => m.matchStartTime ) );

    const bestRankedTeam = teams
        .filter(team => team.teamId === teamId)
        .sort((a, b) => a.globalRank - b.globalRank)[0];

    if (!bestRankedTeam) {
        if (rosterMode === "return") return { status: "failed", message: "Team not found" };
        console.log("Team not found");
        return;
    }

    if (rosterMode !== "return") console.log("Using team:", bestRankedTeam.teamId);

    // load matchdata json
    const matchDataPath = path.resolve(__dirname, filename);
    const simData = JSON.parse(fs.readFileSync(matchDataPath));

    // load sim data
    const testEvent = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./tools/json/testEvent.json")));
    const testMatch = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./tools/json/testMatch.json")));
    const replacements = JSON.parse(fs.readFileSync(path.resolve(__dirname, "./tools/replaceTeam.json")));

    testEvent.prizeDistribution.push({
        placement: "1",
        teamId: bestRankedTeam.teamId,
        prize: 1,
        clubShare: 0,
        shared: false,
        progress: false,
        qualifiedEvents: []
    });

    simData.events.push(testEvent);

    testMatch.matchStartTime = mostRecentMatch + 1000;
    testMatch.team2Id = bestRankedTeam.teamId;
    testMatch.team2Name = bestRankedTeam.teamId;

    const updatedPlayers = bestRankedTeam.players.map((player, i) => ({
        playerIndex: i + 1,
        playerId: player.playerId,
        nick: player.nick,
        countryIso: player.countryIso,
        steamIds: []
    }));

    replacements.team2Players.forEach(repl => {
        const index = repl.playerIndex - 1;

        if (updatedPlayers[index]) {
            updatedPlayers[index] = {
                ...updatedPlayers[index],
                ...repl
            };
        }
    });

    testMatch.team2Players = updatedPlayers;

    simData.matches.push(testMatch);

    const outputPath = path.resolve(__dirname, "../data/sim_roster.json");
    fs.writeFileSync(outputPath, JSON.stringify(simData, null, 2));


    let filename2 = outputPath;

    // Parse matches and generate standings
    let [matches2,teams2] = Ranking.generateRanking( -1, filename2 );

    const bestRankedTeam2 = teams2
        .filter(team => team.teamId === teamId)
        .reduce((closest, team) => {
            const diff = Math.abs(Number(team.lastPlayed) - (mostRecentMatch + 1000));

            if (!closest || diff < closest.diff) {
                return { team, diff };
            }

            return closest;
        }, null)?.team;

    if (!bestRankedTeam2) {
        if (rosterMode === "return") return { status: "failed", message: "Team not found on second pass" };
        console.log("Team not found on second pass");
        return;
    }
    let roster1 = sortCaseInsensitive( bestRankedTeam.players.map( el=> el.nick ) ).join(', ');
    let roster2 = sortCaseInsensitive( bestRankedTeam2.players.map( el=> el.nick ) ).join(', ');

    if (rosterMode !== "return") {
        console.log("VRS Fork Sim");
        console.log(`Team pre change: ${bestRankedTeam.name} - Rank: ${bestRankedTeam.globalRank} - Points: ${bestRankedTeam.rankValue.toFixed(1)} - Roster: ${roster1}`);
        console.log(`Team post change: ${bestRankedTeam2.name} - Rank: ${bestRankedTeam2.globalRank} - Points: ${bestRankedTeam2.rankValue.toFixed(1)} - Roster: ${roster2}`);
    }
    

    if (rosterMode !== "return") {
        // format date as YYYY-MM-DD
        let d = new Date( 0 );
        d.setUTCSeconds( mostRecentMatch );
        let strDate = d.toLocaleString( 'fr-CA', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'America/Los_Angeles' } );
    
        // Get the region we are doing standings for
        let standings = 'Standings';
        if( regions.length === 1 )
        {
            standings = `Regional Standings for ${RegionList[regions[0]]}`;
        }
    
        if ( process.argv[4] !== undefined )
            strDate = process.argv[4];
    
        // Print markdown table for results
        Report.generateOutput( teams2, regions, strDate, true );
    } else {
        return {
            status: "success",
            preChange: bestRankedTeam,
            postChange: bestRankedTeam2
        };
    }
}


if (require.main === module) {
    (async () => {
        try {
            await run();
        } catch (err) {
            console.error("Error:", err);
        }
    })();
}
module.exports = { run };

