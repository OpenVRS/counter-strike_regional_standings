### Roster Details<br />
Team Name: THE (Russian team)<br />
Roster: 1Drezz, d0RREN, krc, Sange, vt0rnikk<br />
Global Rank: [311](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [185]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  496.2<br />
<br />
Final Rank Value (496.2) = Starting Rank Value (493.3) + Head To Head Adjustments (3.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 493.3
- 400 + ( ( 0.048 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 493.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.005
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5058 | 2025-09-29 | 1w Team                     | L   | 0.086      | -            | -                | -                | -         |    -0.04 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            4 |     5146 | 2025-09-27 | ALGO Esports                | W   | 0.073      | 0.384        | 0.000 (0.000)    | 0.018 (0.000)    | 0 (0.000) |     0.85 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            3 |     5194 | 2025-09-26 | ARCRED                      | W   | 0.066      | 0.384        | 0.019 (0.000)    | 0.872 (0.022)    | 0 (0.000) |     2.06 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            2 |     5453 | 2025-09-18 | Oramond                     | L   | 0.010      | -            | -                | -                | -         |    -0.02 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            1 |     5470 | 2025-09-17 | ComeBack (Kazakhstani team) | W   | 0.006      | 0.384        | 0.000 (0.000)    | 0.028 (0.000)    | 0 (0.000) |     0.12 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
