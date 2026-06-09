### Roster Details<br />
Team Name: Low cortisol gaming<br />
Roster: kairo, phoebe, void<br />
Global Rank: [353](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  425.0<br />
<br />
Final Rank Value (425.0) = Starting Rank Value (402.4) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 402.4
- 400 + ( ( 0.001 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 402.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.064
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1095 | 2026-04-29 | Ding Cuts        | L   | 0.984      | -            | -                | -                | -         |    -9.08 | Bay, kairo, phoebe, void, zune        |
|            5 |     1132 | 2026-04-28 | Time Waves       | W   | 0.977      | 0.278        | 0.000 (0.000)    | 0.090 (0.024)    | 0 (0.000) |    14.44 | Bay, kairo, phoebe, void, zune        |
|            4 |     1179 | 2026-04-27 | THUNDERdOWNUNDER | L   | 0.970      | -            | -                | -                | -         |    -0.39 | Bay, kairo, phoebe, void, zune        |
|            3 |     1245 | 2026-04-26 | Ex-FURY          | W   | 0.964      | 0.278        | 0.000 (0.000)    | 0.099 (0.026)    | 0 (0.000) |    18.05 | Bay, kairo, phoebe, void, zune        |
|            2 |     6096 | 2025-12-06 | Rooster          | L   | 0.029      | -            | -                | -                | -         |    -0.07 | foggers, kairo, phoebe, TRIPLUS, void |
|            1 |     6098 | 2025-12-06 | Ex-FURY          | L   | 0.028      | -            | -                | -                | -         |    -0.32 | foggers, kairo, phoebe, TRIPLUS, void |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
