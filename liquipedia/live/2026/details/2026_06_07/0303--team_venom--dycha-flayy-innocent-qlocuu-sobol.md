### Roster Details<br />
Team Name: Team Venom<br />
Roster: dycha, Flayy, innocent, Qlocuu, Sobol<br />
Global Rank: [303](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [192]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  534.2<br />
<br />
Final Rank Value (534.2) = Starting Rank Value (523.4) + Head To Head Adjustments (10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.4
- 400 + ( ( 0.064 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 523.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.009
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5897 | 2026-01-04 | GamerLegion | L   | 0.166      | -            | -                | -                | -         |    -0.01 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            7 |     5917 | 2026-01-03 | F5 Esports  | W   | 0.163      | 0.323        | 0.006 (0.000)    | 0.320 (0.017)    | 1 (0.163) |     4.61 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            6 |     5919 | 2026-01-03 | 9INE        | L   | 0.162      | -            | -                | -                | -         |    -0.59 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            5 |     5923 | 2026-01-03 | F5 Esports  | W   | 0.162      | 0.323        | 0.006 (0.000)    | 0.320 (0.017)    | 1 (0.162) |     4.59 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            4 |     6017 | 2025-12-19 | 9INE        | L   | 0.061      | -            | -                | -                | -         |    -0.22 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            3 |     6025 | 2025-12-19 | Acend       | W   | 0.059      | 0.339        | 0.021 (0.000)    | 0.780 (0.016)    | 1 (0.059) |     1.85 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            2 |     6028 | 2025-12-19 | Illwill     | L   | 0.059      | -            | -                | -                | -         |    -0.96 | dycha, Flayy, innocent, Qlocuu, Sobol |
|            1 |     6042 | 2025-12-18 | MOUZ NXT    | W   | 0.052      | 0.339        | 0.014 (0.000)    | 0.743 (0.013)    | 1 (0.052) |     1.57 | dycha, Flayy, innocent, Qlocuu, Sobol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
