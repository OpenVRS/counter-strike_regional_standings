## Purpose

Valve's Regional Standings is an open source model available [here](https://github.com/ValveSoftware/counter-strike_regional_standings) which is used to rank teams based on played meaningful matches and these rankings are used for invitations to ranked events.

While the model is open sourced, it currently isn't possible to utilise the model. The supplied `data/matchdata_sample_20230829.json` no longer runs with the current model and will return an error. Additionally, there has been no updates to sample matchdata and there is no easy way to publicly obtain this data without breaching ToS. VRS uses HLTV as a data source and this data is not publicly accessible. This repository aims to to create an easy and accessible way to replicate the `data/matchdata.json` as close as possible to the true source (HLTV). The data is collected from the [LiquipediaDB](https://liquipedia.net/api) and modifications are made automatically & manually to align it with HLTV's event splitting format as well as modifcations to account for any discrepancies in data handling. Match data samples can be found in the [data folder](data/)

Data is uploaded and displayed on [Liquipedia](https://liquipedia.net/counterstrike/Valve_Regional_Standings)

These rankings are **unofficial**. While they attempt to be as close as possible, official invite lists can be found in the official VRS repo [here](https://github.com/ValveSoftware/counter-strike_regional_standings/tree/main/invitation)
 
Any observed errors with the dataset, please submit a pull request to the most recent match data sample.

## How to run

### Requirements

- [NodeJS](https://nodejs.org/en/about/previous-releases) (v22.19.0 was used in this project)

- npm - Download NodeJS with npm above

1. Register for a LiquipediaDB Free Plan API key [here](https://liquipedia.net/api)

2. Add your API key to the `.env`

3. `npm install`

4. Rename the most recent matchdata_sample_*.json to matchdata.json 

5. (Optional) `cd liquipedia` -> `node update.js` - This will update your matchdata.json to the most recent available data without waiting for a new sample.

6. (Optional) If you have updated the matchdata, you can find a list of changed events within `data/updated_events.json`. Events must have the same splitting structure HLTV use, i.e Blast Bounty Stage 1 and Blast Bounty Finals. This tool should typically align to HLTV's structure but occassionally manual modification must be made, and then the old adjusted event added to the blocked list within `liquipedia/blocked.json`. Liquipedia also does not account for clubShare, so this must be added manually into the matchdata.json for Tier 1 events.

7. `cd model` -> `node main.js` - This will generate the rankings using the Liquipedia supplied matchdata. You can adjust the output directory within `model/report.js`


Further functions to follow.


Contact: mischief@nuselo.uk / mischiefcs on discord
