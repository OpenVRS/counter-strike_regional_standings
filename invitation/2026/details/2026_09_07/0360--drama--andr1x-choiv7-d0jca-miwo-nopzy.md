### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, choiv7, d0jca, miwo, nopzy<br />
Global Rank: [360](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [231]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  493.8<br />
<br />
Final Rank Value (493.8) = Starting Rank Value (492.9) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.9
- 400 + ( ( 0.049 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 492.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4435 | 2026-04-05 | magic        | L   | 0.157      | -            | -                | -                | -         |    -0.04 | andr1x, choiv7, d0jca, miwo, nopzy |
|            7 |     4583 | 2026-04-03 | FaZe         | L   | 0.145      | -            | -                | -                | -         |    -0.01 | andr1x, choiv7, d0jca, miwo, nopzy |
|            6 |     4599 | 2026-04-03 | BEE          | W   | 0.144      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.144) |     1.69 | andr1x, choiv7, d0jca, miwo, nopzy |
|            5 |     4971 | 2026-03-29 | INFINITE     | L   | 0.113      | -            | -                | -                | -         |    -0.06 | andr1x, choiv7, d0jca, miwo, nopzy |
|            4 |     4993 | 2026-03-29 | HYPERSPIRIT  | W   | 0.113      | 0.354        | 0.002 (0.000)    | 0.423 (0.017)    | 1 (0.113) |     2.92 | andr1x, choiv7, d0jca, miwo, nopzy |
|            3 |     5021 | 2026-03-29 | Eternal Fire | L   | 0.111      | -            | -                | -                | -         |    -1.11 | andr1x, choiv7, d0jca, miwo, nopzy |
|            2 |     5135 | 2026-03-27 | DALUYONG     | L   | 0.100      | -            | -                | -                | -         |    -1.98 | andr1x, choiv7, d0jca, miwo, nopzy |
|            1 |     5172 | 2026-03-26 | HYPERSPIRIT  | L   | 0.094      | -            | -                | -                | -         |    -0.53 | andr1x, choiv7, d0jca, miwo, nopzy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
