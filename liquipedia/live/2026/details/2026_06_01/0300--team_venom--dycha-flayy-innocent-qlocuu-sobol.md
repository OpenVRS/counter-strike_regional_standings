### Roster Details<br />
Team Name: Team Venom<br />
Roster: dycha, Flayy, innocent, Qlocuu, Sobol<br />
Global Rank: [300](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [190]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  555.0<br />
<br />
Final Rank Value (555.0) = Starting Rank Value (539.2) + Head To Head Adjustments (15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.066[<sup>2</sup>](#table1)

The average of these factors is 0.073<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.2
- 400 + ( ( 0.073 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 539.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.014
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     5787 | 2026-01-04 | GamerLegion | L   | 0.219      | -            | -                | -                | -         |    -0.01 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            8 |     5807 | 2026-01-03 | F5 Esports  | W   | 0.215      | 0.323        | 0.007 (0.000)    | 0.335 (0.023)    | 1 (0.215) |     6.03 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            7 |     5809 | 2026-01-03 | 9INE        | L   | 0.215      | -            | -                | -                | -         |    -0.70 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            6 |     5813 | 2026-01-03 | F5 Esports  | W   | 0.214      | 0.323        | 0.007 (0.000)    | 0.335 (0.023)    | 1 (0.214) |     6.04 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            5 |     5907 | 2025-12-19 | 9INE        | L   | 0.113      | -            | -                | -                | -         |    -0.36 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            4 |     5915 | 2025-12-19 | Acend       | W   | 0.112      | 0.339        | 0.022 (0.001)    | 0.828 (0.031)    | 1 (0.112) |     3.48 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            3 |     5918 | 2025-12-19 | Illwill     | L   | 0.111      | -            | -                | -                | -         |    -1.81 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            2 |     5932 | 2025-12-18 | MOUZ NXT    | W   | 0.105      | 0.339        | 0.016 (0.001)    | 0.817 (0.029)    | 1 (0.105) |     3.14 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            1 |     6133 | 2025-12-05 | DragonClaw  | L   | 0.019      | -            | -                | -                | -         |    -0.06 | Flayy, hfah, innocent, Qlocuu, Sobol  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
