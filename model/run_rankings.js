"use strict";

const path = require("path");
const { execFile } = require("child_process");
const { promisify } = require("util");
const execFileAsync = promisify(execFile);

const { run } = require("./main");

async function runPython(runId) {
    const scriptPath = path.join(__dirname, "..", "pywikibot", "bot.py");

    try {
        const { stdout, stderr } = await execFileAsync("python3", [scriptPath, runId]);
        if (stdout) console.log("[bot.py]", stdout);
        if (stderr) console.error("[bot.py stderr]", stderr);
    } catch (err) {
        console.error("Wiki publish failed:", err.stderr || err.message);
        throw err;
    }
}

async function runRankings({ versionTimestampImp, filenameImp, type, chPool, publish = false }) {
    const result = await run({
        versionTimestampImp,
        filenameImp,
        type,
        chPool
    });

    const { runId, DB } = result;

    if (publish) {
        try {
            await runPython(runId);
            await DB.setRunStage(runId, 2); //publish
        } catch (err) {
            await DB.setRunStage(runId, 3); // failed
            throw err;
        }
    }

    return { runId, published: publish };
}

module.exports = { runRankings };