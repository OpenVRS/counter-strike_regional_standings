### Roster Details<br />
Team Name: 900FPSvsECO<br />
Roster: Gabe, mds, Termina, Valter0k, Zoker<br />
Global Rank: [308](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  582.7<br />
<br />
Final Rank Value (582.7) = Starting Rank Value (594.8) + Head To Head Adjustments (-12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.213[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 594.8
- 400 + ( ( 0.102 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 594.8


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
|           17 |     4237 | 2026-04-10 | Iowa Stormboar | L   | 0.194      | -            | -                | -                | -         |    -2.12 | Gabe, mds, Termina, Valter0k, Zoker      |
|           16 |     4253 | 2026-04-10 | insane players | L   | 0.191      | -            | -                | -                | -         |    -2.46 | carbs, Gabe, Termina, Valter0k, Zoker    |
|           15 |     4285 | 2026-04-08 | Aether         | L   | 0.181      | -            | -                | -                | -         |    -2.52 | carbs, Gabe, Termina, Valter0k, Zoker    |
|           14 |     4316 | 2026-04-07 | Shimmer        | W   | 0.174      | 0.333        | 0.009 (0.001)    | 0.042 (0.002)    | 0 (0.000) |     3.44 | carbs, Gabe, Termina, Valter0k, Zoker    |
|           13 |     4349 | 2026-04-06 | Aether         | L   | 0.168      | -            | -                | -                | -         |    -2.36 | bezymecc, Gabe, Termina, Valter0k, Zoker |
|           12 |     4460 | 2026-04-04 | New Legends    | L   | 0.154      | -            | -                | -                | -         |    -2.93 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|           11 |     4524 | 2026-04-03 | NuTorious      | L   | 0.149      | -            | -                | -                | -         |    -1.02 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|           10 |     4604 | 2026-04-02 | Reign Above    | W   | 0.142      | 0.333        | 0.000 (0.000)    | 0.084 (0.004)    | 0 (0.000) |     2.21 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            9 |     4622 | 2026-04-02 | OverKnight     | W   | 0.141      | 0.363        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.14 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            8 |     4710 | 2026-04-01 | Chicanery      | L   | 0.136      | -            | -                | -                | -         |    -2.72 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            7 |     4715 | 2026-04-01 | Olympus        | L   | 0.135      | -            | -                | -                | -         |    -2.67 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            6 |     4796 | 2026-03-31 | BOSS           | L   | 0.129      | -            | -                | -                | -         |    -1.75 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            5 |     5259 | 2026-03-24 | Aether         | L   | 0.083      | -            | -                | -                | -         |    -1.21 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            4 |     5322 | 2026-03-23 | Reign Above    | W   | 0.075      | 0.363        | 0.000 (0.000)    | 0.084 (0.002)    | 0 (0.000) |     1.16 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            3 |     5408 | 2026-03-22 | regain         | W   | 0.067      | 0.363        | 0.009 (0.000)    | 0.301 (0.007)    | 0 (0.000) |     1.53 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            2 |     5499 | 2026-03-20 | Mythic         | W   | 0.056      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.44 | Gabe, H0NeST, mds, Valter0k, Zoker       |
|            1 |     5504 | 2026-03-20 | Chicken Coop   | L   | 0.056      | -            | -                | -                | -         |    -0.29 | Gabe, H0NeST, mds, Valter0k, Zoker       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($102.27)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.102 | $1,000.00      | $102.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
