"use strict";

const path = require("path");
const Ranking = require('./ranking');
const Report = require('./report');
const RegionList = ['Europe', 'Americas', 'Asia'];

const RUN_TYPES = Object.freeze({
  MAIN: "main",
  LIVE: "live",
  SIM: "sim",
  USER: "user",
  SIM_USER: "sim_user",
  SIM_EVENT_CHOICE: "sim_event_choice",
  LEGACY: "legacy",
});

const VALID_TYPES = Object.values(RUN_TYPES);

// Anchoring for container
const DEFAULT_MATCHDATA_PATH = path.join(__dirname, "..", "data", "matchdata.json");

async function run({
    versionTimestampImp,
    filenameImp = DEFAULT_MATCHDATA_PATH,
    type = RUN_TYPES.LIVE,
    chPool
} = {}) {

    if (!VALID_TYPES.includes(type)) {
        throw new Error(`Invalid run type: ${type}. Must be one of: ${VALID_TYPES.join(', ')}`);
    }

    const imported = require.main !== module;
    //const imported = true;
    const mischief = imported ?? false; //these should always be set to false
    const mischiefDb = imported ?? false; //these should always be set to false
    // unless you are me, these will be of no use to you and will fail.
    // i could have a better way to forceset these to false and instead use an environment variable
    // but i dont want to mandate the package for usage.
    //node main.js "" "" "" 1785774864
    let regions = [0,1,2];
    if ( process.argv[2] )
        regions = JSON.parse(process.argv[2]);

    let filename = '../data/matchdata.json';
    if (filenameImp) {
        filename = filenameImp;
    }
    if ( process.argv[3] )
        filename = process.argv[3];

    // Parse matches and generate standings
    let versionTimestamp = -1;
    if (versionTimestampImp) {
        versionTimestamp = versionTimestampImp;
    }
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
     if (mischiefDb) {
        if (require.main === module) {
            require('dotenv').config({ path: '../../.env' });
        }

        const createDB = require('../tools/db');
        const createAnchorRun = require('../tools/anchor_run');
        const createMatchesRun = require('../tools/matches_run');
        const createBasicAnchorRun = require('../tools/anchor_basic_worker');

        const DB = createDB(chPool);
        const { anchorRun } = createAnchorRun(chPool);
        const { matchesRun } = createMatchesRun(chPool);
        const { basicAnchorRun } = createBasicAnchorRun(chPool);

        const runId = await DB.saveRankingRun(teams, type, {
            rankingDate: strDate,
            runName: standings,
            maxSeedVal: vals.seedVals.maxSeedValue
        });
        console.log('Saved run:', runId);

        try {
            await matchesRun(matches, versionTimestamp, filename, runId, 0);
            await anchorRun(vals, runId, 0, filename, mostRecentMatch, versionTimestamp);
            await basicAnchorRun(versionTimestamp, filename, runId, mostRecentMatch, vals.seedVals.maxSeedValue);
            await DB.setRunStage(runId, 1);
        } catch (err) {
            console.error("DB operation failed:", err);
            await DB.setRunStage(runId, 3);
            throw err;
        }

        return { runId, DB };
    }
}

module.exports = { run, VALID_TYPES, RUN_TYPES };

if (require.main === module) {
    run().catch(err => {
        console.error(err);
        process.exit(1);
    });
}

