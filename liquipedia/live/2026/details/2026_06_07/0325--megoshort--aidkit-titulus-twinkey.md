### Roster Details<br />
Team Name: Megoshort<br />
Roster: aidKiT, titulus, Twinkey<br />
Global Rank: [325](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [202]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  503.6<br />
<br />
Final Rank Value (503.6) = Starting Rank Value (506.6) + Head To Head Adjustments (-3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.6
- 400 + ( ( 0.055 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 506.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.024
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1346 | 2026-04-26 | Aimclub (Romanian team) | L   | 0.912      | -            | -                | -                | -         |    -4.94 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            4 |     1425 | 2026-04-25 | BASEMENT BOYS           | L   | 0.905      | -            | -                | -                | -         |    -1.32 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            3 |     1469 | 2026-04-24 | BankaPEPSI              | L   | 0.899      | -            | -                | -                | -         |    -8.13 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            2 |     1536 | 2026-04-22 | Aurora Young Blud       | L   | 0.886      | -            | -                | -                | -         |    -7.71 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            1 |     2602 | 2026-03-28 | Cirahvi                 | W   | 0.720      | 0.435        | 0.004 (0.001)    | 0.520 (0.163)    | 0 (0.000) |    19.11 | 2high, aidKiT, robiin, titulus, Twinkey     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
