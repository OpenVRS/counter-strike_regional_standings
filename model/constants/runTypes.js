"use strict";

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

module.exports = { RUN_TYPES, VALID_TYPES };