"use strict";

const Ranking = require('./ranking');
const Report = require('./report');
const RegionList = ['Europe', 'Americas', 'Asia'];
const mischief = false; //these should always be set to false
const mischiefDb = false; //these should always be set to false
// unless you are me, these will be of no use to you and will fail.
// i could have a better way to forceset these to false and instead use an environment variable
// but i dont want to mandate the package for usage.
//node main.js "" "" "" 1780935041
async function run()
{
    let regions = [0,1,2];
    if ( process.argv[2] )
        regions = JSON.parse(process.argv[2]);

    let filename = '../data/matchdata.json';
    if ( process.argv[3] )
        filename = process.argv[3];

    // Parse matches and generate standings
    let versionTimestamp = -1;
    if (process.argv[5])
        versionTimestamp = parseInt(process.argv[5], 10);

    let matches, teams, vals;

    if (versionTimestamp > 0) {
        [matches, teams, vals] = Ranking.generateRanking(
            versionTimestamp,
            filename,
            mischiefDb,
            undefined,
            undefined,
            undefined,
            false,
            versionTimestamp
        );
    } else {
        [matches, teams, vals] = Ranking.generateRanking(
            versionTimestamp,
            filename,
            mischiefDb
        );
    }

    // const match = matches.find(
    // m => m.matchId === "377006_mXCPV1YCjA_R01-M003"
    // );

    // if (match) {

    //     console.log(
    //         match
    //     );
    // }
    

    // Get date of most recent match
    let mostRecentMatch = Math.max( ...matches.map( m => m.matchStartTime ) );

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

    if ( process.argv[4] )
        strDate = process.argv[4];

    // Print markdown table for results
    if(!mischiefDb) {
        Report.generateOutput( teams, regions, strDate , false, matches, mischief);
    }
    // again, if youre not me you can ignore the below.
    // if future me is reading this and has forgotten how it works, tough luck.
    if(mischiefDb) {
        require('dotenv').config({
            path: '../../.env'
        });
        const DB = require('../tools/db');
        const { anchorRun } = require('../tools/anchor_run');
        const { matchesRun } = require('../tools/matches_run');
        const { basicAnchorRun } = require('../tools/anchor_basic_worker');

        const runId = await DB.saveRankingRun(teams, 'live', {
            rankingDate: strDate,
            runName:     standings,
            maxSeedVal:  vals.seedVals.maxSeedValue
        });
        console.log('Saved run:', runId);
        try {
            await matchesRun(matches, versionTimestamp, filename, runId, 0);
            await anchorRun(vals, runId, 0, filename, mostRecentMatch, versionTimestamp);
            await basicAnchorRun(versionTimestamp, filename, runId, mostRecentMatch, vals.seedVals.maxSeedValue);
            await DB.setRunStage(runId, 1);
        } catch (err) {
            console.error("DB operation failed:", err);
            await DB.setRunStage(runId, 3); // failed
            throw err;
        }
        

    }
}

run();

