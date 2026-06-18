"use strict";

const { run } = require("./main");

async function runRankings({ versionTimestampImp, filenameImp }) {
    const result = await run({
        versionTimestampImp,
        filenameImp
    });

    return {
        runId: result.runId
    };
}

module.exports = { runRankings };