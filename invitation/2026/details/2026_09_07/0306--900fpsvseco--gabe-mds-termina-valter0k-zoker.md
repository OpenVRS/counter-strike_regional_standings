### Roster Details<br />
Team Name: 900FPSvsECO<br />
Roster: Gabe, mds, Termina, Valter0k, Zoker<br />
Global Rank: [306](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  583.0<br />
<br />
Final Rank Value (583.0) = Starting Rank Value (595.5) + Head To Head Adjustments (-12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.5
- 400 + ( ( 0.103 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 595.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     4209 | 2026-04-10 | Iowa Stormboar | L   | 0.199      | -            | -                | -                | -         |    -2.17 | Gabe, mds, Termina, Valter0k, Zoker      |
|           16 |     4225 | 2026-04-10 | insane players | L   | 0.196      | -            | -                | -                | -         |    -2.52 | carbs, Gabe, Termina, Valter0k, Zoker    |
|           15 |     4257 | 2026-04-08 | Aether         | L   | 0.187      | -            | -                | -                | -         |    -2.58 | carbs, Gabe, Termina, Valter0k, Zoker    |
|           14 |     4288 | 2026-04-07 | Shimmer        | W   | 0.180      | 0.333        | 0.009 (0.001)    | 0.042 (0.003)    | 0 (0.000) |     3.54 | carbs, Gabe, Termina, Valter0k, Zoker    |
|           13 |     4321 | 2026-04-06 | Aether         | L   | 0.174      | -            | -                | -                | -         |    -2.43 | bezymecc, Gabe, Termina, Valter0k, Zoker |
|           12 |     4432 | 2026-04-04 | New Legends    | L   | 0.159      | -            | -                | -                | -         |    -3.04 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|           11 |     4496 | 2026-04-03 | NuTorious      | L   | 0.154      | -            | -                | -                | -         |    -1.06 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|           10 |     4576 | 2026-04-02 | Reign Above    | W   | 0.148      | 0.333        | 0.000 (0.000)    | 0.086 (0.004)    | 0 (0.000) |     2.30 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            9 |     4594 | 2026-04-02 | OverKnight     | W   | 0.146      | 0.363        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.19 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            8 |     4682 | 2026-04-01 | Chicanery      | L   | 0.141      | -            | -                | -                | -         |    -2.83 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            7 |     4687 | 2026-04-01 | Olympus        | L   | 0.140      | -            | -                | -                | -         |    -2.78 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            6 |     4768 | 2026-03-31 | BOSS           | L   | 0.135      | -            | -                | -                | -         |    -1.82 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            5 |     5231 | 2026-03-24 | Aether         | L   | 0.088      | -            | -                | -                | -         |    -1.29 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            4 |     5294 | 2026-03-23 | Reign Above    | W   | 0.081      | 0.363        | 0.000 (0.000)    | 0.086 (0.003)    | 0 (0.000) |     1.24 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            3 |     5380 | 2026-03-22 | regain         | W   | 0.073      | 0.363        | 0.009 (0.000)    | 0.303 (0.008)    | 0 (0.000) |     1.65 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            2 |     5471 | 2026-03-20 | Mythic         | W   | 0.062      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.48 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            1 |     5476 | 2026-03-20 | Chicken Coop   | L   | 0.061      | -            | -                | -                | -         |    -0.32 | Gabe, H0NeST, mds, Valter0k, Zoker       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($107.74)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.108 | $1,000.00      | $107.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
