### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [361](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [232]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  492.4<br />
<br />
Final Rank Value (492.4) = Starting Rank Value (494.2) + Head To Head Adjustments (-1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.2
- 400 + ( ( 0.049 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 494.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4995 | 2026-03-29 | Strael Bora      | L   | 0.113      | -            | -                | -                | -         |    -2.20 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     5024 | 2026-03-29 | HAVU             | L   | 0.111      | -            | -                | -                | -         |    -0.38 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     5585 | 2026-03-19 | ex-Zero Tenacity | L   | 0.046      | -            | -                | -                | -         |    -0.12 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     5633 | 2026-03-18 | GenOne           | W   | 0.038      | 0.384        | 0.055 (0.001)    | 1.000 (0.015)    | 0 (0.000) |     1.16 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     5706 | 2026-03-16 | Leo              | L   | 0.027      | -            | -                | -                | -         |    -0.29 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
