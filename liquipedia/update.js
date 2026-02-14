require("dotenv").config({ path: "../.env" });
const fs = require("fs");
const path = require("path");
const axios = require("axios");
const countries = require("i18n-iso-countries");

// Register English
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

// Setup
const DATA_DIR = path.join(__dirname, "..", "data");
const MATCHDATA_PATH = path.join(DATA_DIR, "matchdata.json");
const BLOCKED_PATH = path.join(__dirname, "blocked.json");
const API_KEY = process.env.LIQUIPEDIA_API_KEY;
const WIKI = "counterstrike";
const HEADERS = {
  Authorization: `Apikey ${API_KEY}`,
  "Accept-Encoding": "gzip",
};

const API_MATCH = "https://api.liquipedia.net/api/v3/match";
const API_PLACEMENT = "https://api.liquipedia.net/api/v3/placement";
const API_TOURNAMENT = "https://api.liquipedia.net/api/v3/tournament";
const DEFAULT_IMAGE = "https://liquipedia.net/commons/images/thumb/d/da/Counter-Strike_2_default_darkmode.png/373px-Counter-Strike_2_default_darkmode.png";

const today = new Date();
const lastYear = new Date(today);

// Create end data limit
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1); // can ommit the +1 to use today either, only really an issue if theres a marked finished event but theres a match result error / cache error.

lastYear.setFullYear(today.getFullYear() - 1);
const formatDate = (date) => date.toISOString().split("T")[0];

const blocked = JSON.parse(fs.readFileSync(BLOCKED_PATH, "utf-8"));
const blockedMatches = new Set(blocked.matches);
const blockedEvents = new Set(blocked.events);

const MATCH_CONDITIONS = [
  `[[date::>${formatDate(lastYear)}]]`,
  `[[date::<${formatDate(tomorrow)}]]`,
  `([[publishertier::!]])`,
].join(" AND ");

const TOURNAMENT_CONDITIONS = `([[publishertier::!]])`;

//Counry worker
function getISOCode(countryName) {
  if (countryName === "Non-representing") return "RU"; // catch all, may not be accurate
  if (countryName === "Moldova") return "MD";
  return countries.getAlpha2Code(countryName, "en") || "XX";
}

function formatPlayers(players) {
  return players.map((p) => {
    let country = p.flag;
    let countryIso = getISOCode(country);
    if (country === "Non-representing") {
      country = "Russia";
      countryIso = "RU";
    }
    return {
      playerId: p.name,
      nick: p.displayname,
      country,
      countryIso,
      steamIds: [],
    };
  });
}

function formatMaps(match2games) {
  return match2games.map((game) => ({
    mapName: game.map?.toLowerCase?.() || "",
    team1Score: game.scores[0],
    team2Score: game.scores[1],
  }));
}

function formatMatch(match) {
  const team1 = match.match2opponents.find((t) => t.id === 1);
  const team2 = match.match2opponents.find((t) => t.id === 2);

  return {
    matchStartTime:
      match.extradata?.timestamp ||
      Math.floor(new Date(match.date).getTime() / 1000),
    team1Id: team1?.template,
    team1Name: team1?.name,
    team1Image: team1?.teamtemplate?.imagedarkurl || DEFAULT_IMAGE,
    team2Id: team2?.template,
    team2Name: team2?.name,
    team2Image: team2?.teamtemplate?.imagedarkurl || DEFAULT_IMAGE,
    team1Players: formatPlayers(team1?.match2players || []),
    team2Players: formatPlayers(team2?.match2players || []),
    eventId: match.pageid,
    pagename: match.pagename,
    matchId: match.objectname,
    parentEventPage: match.parent,
    maps: formatMaps(match.match2games || []),
    winningTeam: parseInt(match.winner, 10) || null,
    forfeited: match.walkover == "ff",
    valveRanked: true,
    lan: match.type == "Offline",
  };
}

function hasValidHLTVLink(links) {
  if (!links || !links.hltv) return false;
  return Object.values(links.hltv).some((entry) =>
    Object.values(entry).some(
      (val) => typeof val === "string" && val.toLowerCase().includes("hltv"),
    ),
  );
}

function generateEventId(eventId, isOnline) {
  const id = String(eventId);
  if (isOnline && !id.endsWith("_On")) {
    return `${id}_On`;
  }
  return id;
}

function normalizeEventName(name) {
  return name.replace(/[_/]/g, " ").trim();
}

function groupMatchesByEventLan(matches) {
  const groups = {};
  for (const match of matches) {
    const key = `${match.eventId}__${match.lan}`;
    if (!groups[key]) groups[key] = [];
    groups[key].push(match);
  }
  return groups;
}

function extractEventsFromMatches(matches) {
  const grouped = groupMatchesByEventLan(matches);
  const events = [];
  const parentEventLMT = {};

  for (const key in grouped) {
    const [eventIdBase, lanStr] = key.split("__");
    const lan = lanStr === "true";
    const group = grouped[key];

    if (group[0].parentEventPage?.toLowerCase().includes("showmatch")) {
      //this does not catch all showmatches due to how the cs wiki works
      continue;
    }

    const eventId = eventIdBase;

    const sortedMatches = group.sort(
      (a, b) => a.matchStartTime - b.matchStartTime,
    );
    const fmt = sortedMatches[0].matchStartTime;
    const lmt = sortedMatches[sortedMatches.length - 1].matchStartTime;

    let differingParent = false;
    if (group[0].parentEventPage !== group[0].pagename) {
      differingParent = true;
    }

    const event = {
      eventId,
      eventPage: group[0].pagename,
      parent: group[0].parentEventPage,
      eventName: normalizeEventName(group[0].pagename),
      prizePool: "$1",
      lan,
      location: "",
      valveRanked: true,
      finished: true,
      fmt,
      lmt,
      differingParent,
      prizeDistribution: [],
    };

    const teamMap = new Map();
    for (const match of group) {
      [match.team1Id, match.team2Id].forEach((teamId) => {
        if (teamId && !teamMap.has(teamId)) {
          teamMap.set(teamId, {
            placement: "",
            teamId,
            prize: 0,
            clubShare: 0,
            shared: false,
            progress: false,
            qualifiedEvents: [],
          });
        }
      });
    }

    event.prizeDistribution = [...teamMap.values()];
    events.push(event);

    if (!parentEventLMT[event.parent] || parentEventLMT[event.parent] < lmt) {
      parentEventLMT[event.parent] = lmt;
    }
  }

  for (const event of events) {
    const currentLmt = event.lmt;
    const parent = event.parent;
    const maxLmt = parentEventLMT[parent];
    if (currentLmt < maxLmt) {
      for (const prizeItem of event.prizeDistribution) {
        prizeItem.progress = true;
      }
    }
  }

  return events;
}

async function fetchMatches() {
  const LIMIT = 1000;
  let offset = 0;
  const all = [];

  while (true) {
    const params = {
      wiki: WIKI,
      conditions: MATCH_CONDITIONS,
      limit: LIMIT,
      offset,
      order: "date desc",
    };

    console.log(`Fetching matches offset ${offset}`);
    const res = await axios.get(API_MATCH, { headers: HEADERS, params });
    const data = res.data.result;

    if (!data.length) break;

    const valid = data.filter((match) => hasValidHLTVLink(match.links));
    const formatted = valid.map(formatMatch);

    // Remove Showmatch parents (this is now unused and does not work due to cs wiki setup, DeadlockVRS might work one day using this)
    const filtered = formatted.filter(
      (m) => !m.parentEventPage?.toLowerCase().includes("showmatch"),
    );

    all.push(...formatted);

    if (data.length < LIMIT) break;
    offset += LIMIT;
    await new Promise((r) => setTimeout(r, 1000));
  }

  return all;
}

async function fetchPlacements() {
  const all = [];
  const LIMIT = 1000;
  let offset = 0;

  while (true) {
    const params = {
      wiki: WIKI,
      conditions: MATCH_CONDITIONS,
      limit: LIMIT,
      offset,
    };

    const res = await axios.get(API_PLACEMENT, { headers: HEADERS, params });
    const data = res.data.result;
    if (!data.length) break;
    all.push(...data);
    offset += LIMIT;
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`Fetched ${all.length} placements`);

  return all;
}

async function fetchTournaments() {
  const all = [];
  const LIMIT = 1000;
  let offset = 0;

  while (true) {
    const params = {
      wiki: WIKI,
      conditions: TOURNAMENT_CONDITIONS,
      limit: LIMIT,
      offset,
    };

    const res = await axios.get(API_TOURNAMENT, { headers: HEADERS, params });
    const data = res.data.result;
    if (!data.length) break;
    all.push(...data);
    offset += LIMIT;
    await new Promise((r) => setTimeout(r, 1000));
  }

  console.log(`Fetched ${all.length} tournaments`);

  return all;
}

function applyPlacements(events, placements) {
  const placementMap = {};
  for (const p of placements) {
    const key = `${p.pagename}__${p.opponenttemplate}`;
    placementMap[key] = p;
  }

  for (const event of events) {
    if (!event.finished) continue;

    for (const item of event.prizeDistribution) {
      if (item.progress) continue;
      const key = `${event.parent}__${item.teamId}`;
      const placement = placementMap[key];
      if (placement) {
        item.prize = placement.prizemoney || 0;
        item.placement = placement.placement || "";
        item.shared = (placement.placement || "").includes("-");
      }
    }
  }
}

async function updateData() {
  const oldData = JSON.parse(fs.readFileSync(MATCHDATA_PATH, "utf-8"));
  const oldMatches = oldData.matches;
  const oldEvents = oldData.events;

  const oldMatchIds = new Set(oldMatches.map((m) => m.matchId));
  const oldEventIds = new Set(oldEvents.map((e) => e.eventId));
  const unfinishedEventIds = new Set(
    oldEvents.filter((e) => e.finished === false).map((e) => e.eventId),
  );

  const allNewMatches = await fetchMatches();
  const newMatches = allNewMatches.filter((m) => !oldMatchIds.has(m.matchId));
  const updatedMatches = [...oldMatches, ...newMatches];

  // Update eventId with online marker, split events in accordance to HLTV. accurate most of the time. May require some manual tinkerring
  const updatedWithEventId = updatedMatches.map((m) => ({
    ...m,
    eventId: generateEventId(m.eventId, !m.lan),
  }));

  const extractedEvents = extractEventsFromMatches(updatedWithEventId);
  const placements = await fetchPlacements();
  applyPlacements(extractedEvents, placements);
  const tournaments = await fetchTournaments();

  const tournamentMap = Object.fromEntries(
    tournaments.map((t) => [t.pagename, t]),
  );

  for (const event of extractedEvents) {
    const tournament = tournamentMap[event.eventPage];

    if (tournament?.enddate) {
      const end = new Date(tournament.enddate);
      const todayOnly = new Date(today.toISOString().split("T")[0]);
      if (todayOnly <= end) {
        event.finished = false;
      }
    }

    if (tournament?.publishertier) {
      event.tier = tournament.publishertier;
    }

    if (tournament?.prizepool) {
      const eventPrize = tournament.prizepool; // important to note , Liquipedia does not necessarily display the true event prizepool due to the lack of handling of clubshare. This must be manually added after
      const formattedPrize = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(eventPrize);// issue is also most prevalent with Tier 1 events.
      event.prizePool = formattedPrize;
    }
  }

  // data production

  // Get latest match start time
  const latestMatch = oldMatches.reduce((max, m) => {
    return m.matchStartTime > max ? m.matchStartTime : max;
  }, 0);

  const latestDate = new Date(latestMatch * 1000);

  // Format YYYYMMDD
  const pad = (n) => n.toString().padStart(2, "0");
  const dateStr = `${latestDate.getFullYear()}${pad(latestDate.getMonth() + 1)}${pad(latestDate.getDate())}`;

  const snapshotName = `matchdata_sample_${dateStr}.json`;
  const SNAPSHOT_PATH = path.join(DATA_DIR, snapshotName);

  fs.renameSync(MATCHDATA_PATH, SNAPSHOT_PATH);

  console.log(`Previous sample snapshot created: ${snapshotName}`);

  const EVENTS_REPORT_PATH = path.join(DATA_DIR, "updated_events.json");

  // update log to track for changes, potential needed fixes &/ club share
  const newOrUpdatedEvents = extractedEvents.filter(
    (e) => !oldEventIds.has(e.eventId) || unfinishedEventIds.has(e.eventId),
  );

  const slimUpdate = newOrUpdatedEvents.map((e) => ({
    eventId: e.eventId,
    eventName: e.eventName,
    eventPage: e.eventPage,
    tier: e.tier,
    lan: e.lan,
    prizePool: e.prizePool,
    differingParent: e.differingParent,
    finished: e.finished,
  }));

  const filteredSlim = slimUpdate.filter((e) => !blockedEvents.has(e.eventId));

  fs.writeFileSync(EVENTS_REPORT_PATH, JSON.stringify(filteredSlim, null, 2));

  console.log("Updated events report saved");

  const mergedEventMap = new Map(
    [...oldEvents, ...newOrUpdatedEvents].map((e) => [e.eventId, e]),
  );

  const finalEvents = [...mergedEventMap.values()];

  const finishedEventIds = new Set(finalEvents.filter(e => e.finished).map(e => e.eventId));

  const filteredMatches = updatedWithEventId.filter(
  (m) =>
    !blockedMatches.has(m.matchId) &&
    !blockedEvents.has(m.eventId) &&
    finishedEventIds.has(m.eventId) 
  );

  const filteredEvents = finalEvents.filter(
    (e) => !blockedEvents.has(e.eventId) && e.finished
  );

  fs.writeFileSync(
    MATCHDATA_PATH,
    JSON.stringify(
      {
        matches: filteredMatches,
        events: filteredEvents,
      },
      null,
      2,
    ),
  );

  console.log(
    `Updated matchdata.json: ${newMatches.length} new matches, ${newOrUpdatedEvents.length} new/updated events`,
  );
}

updateData().catch((err) => {
  console.error("Update failed:", err.message);
});
