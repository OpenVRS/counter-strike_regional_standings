### Roster Details<br />
Team Name: Life's A Game<br />
Roster: consti, djay, kmrn, Sandman, Wolffe<br />
Global Rank: [143](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [30]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  860.6<br />
<br />
Final Rank Value (860.6) = Starting Rank Value (768.6) + Head To Head Adjustments (92.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 768.6
- 400 + ( ( 0.188 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 768.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.574
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      617 | 2026-03-01 | Wildcard              | L   | 1.000      | -            | -                | -                | -         |   -13.80 | consti, djay, kmrn, Sandman, Wolffe  |
|           47 |      654 | 2026-02-28 | BOSS                  | W   | 1.000      | 0.143        | 0.012 (0.002)    | 0.356 (0.051)    | 0 (0.000) |    11.88 | consti, djay, kmrn, Sandman, Wolffe  |
|           46 |      657 | 2026-02-28 | Team Aether           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.81 | consti, djay, kmrn, Sandman, Wolffe  |
|           45 |      699 | 2026-02-27 | Team Voca             | L   | 1.000      | -            | -                | -                | -         |    -3.47 | consti, djay, kmrn, Sandman, Wolffe  |
|           44 |      751 | 2026-02-26 | FlyQuest RED          | W   | 1.000      | 0.143        | 0.010 (0.001)    | -                | 0 (0.000) |     7.28 | consti, djay, kmrn, Sandman, Wolffe  |
|           43 |      947 | 2026-02-22 | FarmVille             | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.196 (0.065)    | 0 (0.000) |    11.26 | consti, djay, kmrn, Sandman, Wolffe  |
|           42 |     1073 | 2026-02-20 | Wildcard              | W   | 1.000      | 0.333        | -                | 0.342 (0.114)    | 0 (0.000) |    18.84 | consti, djay, kmrn, Sandman, Wolffe  |
|           41 |     1123 | 2026-02-19 | InControl             | L   | 1.000      | -            | -                | -                | -         |   -23.05 | consti, djay, kmrn, Sandman, Wolffe  |
|           40 |     1170 | 2026-02-18 | M80                   | L   | 1.000      | -            | -                | -                | -         |    -1.76 | consti, djay, kmrn, Sandman, Wolffe  |
|           39 |     1176 | 2026-02-18 | Team Aether           | W   | 1.000      | 0.333        | -                | 0.222 (0.074)    | 0 (0.000) |     7.31 | consti, djay, kmrn, Sandman, Wolffe  |
|           38 |     1232 | 2026-02-17 | Regain                | W   | 1.000      | 0.363        | 0.005 (0.002)    | 0.235 (0.085)    | 0 (0.000) |     9.40 | consti, djay, kmrn, Sandman, Wolffe  |
|           37 |     1326 | 2026-02-15 | Team mouse            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.48 | consti, djay, kmrn, Sandman, Wolffe  |
|           36 |     1335 | 2026-02-15 | BOSS                  | W   | 1.000      | 0.303        | 0.012 (0.004)    | 0.356 (0.108)    | 0 (0.000) |    15.97 | consti, djay, kmrn, Sandman, Wolffe  |
|           35 |     1340 | 2026-02-15 | FarmVille             | W   | 1.000      | 0.303        | 0.007 (0.002)    | 0.196 (0.060)    | 0 (0.000) |    11.91 | consti, djay, kmrn, Sandman, Wolffe  |
|           34 |     1391 | 2026-02-14 | OverKnight            | W   | 1.000      | -            | -                | -                | -         |     7.32 | consti, djay, kmrn, Sandman, Wolffe  |
|           33 |     1501 | 2026-02-12 | SportsBetExpert       | W   | 0.995      | 0.333        | 0.004 (0.001)    | 0.241 (0.080)    | -         |    13.67 | consti, djay, kmrn, Sandman, Wolffe  |
|           32 |     1571 | 2026-02-10 | Chicken Coop Esports  | W   | 0.982      | -            | -                | -                | -         |     5.33 | consti, djay, kmrn, Sandman, Wolffe  |
|           31 |     1614 | 2026-02-09 | SkinRave Esports      | L   | 0.975      | -            | -                | -                | -         |   -10.57 | consti, djay, kmrn, Sandman, Wolffe  |
|           30 |     1664 | 2026-02-07 | Sakura Esports        | W   | 0.962      | 0.333        | 0.032 (0.010)    | -                | -         |    12.72 | consti, djay, kmrn, Sandman, Wolffe  |
|           29 |     1730 | 2026-02-05 | Wildcard              | L   | 0.948      | -            | -                | -                | -         |   -12.40 | consti, djay, kmrn, Sandman, Wolffe  |
|           28 |     1753 | 2026-02-04 | Outfit 49             | W   | 0.942      | 0.333        | 0.007 (0.002)    | 0.354 (0.111)    | -         |    10.44 | consti, djay, kmrn, Sandman, Wolffe  |
|           27 |     1776 | 2026-02-03 | Zomblers              | W   | 0.934      | 0.333        | 0.003 (0.001)    | 0.265 (0.082)    | -         |    11.47 | consti, djay, kmrn, Sandman, Wolffe  |
|           26 |     1807 | 2026-02-02 | Reign Above           | W   | 0.928      | -            | -                | -                | -         |     8.23 | consti, djay, kmrn, Sandman, Wolffe  |
|           25 |     2726 | 2025-12-16 | BOSS                  | L   | 0.608      | -            | -                | -                | -         |    -8.42 | consti, djay, kmrn, Pluto, Sandman   |
|           24 |     2737 | 2025-12-14 | TEAM 33               | W   | 0.594      | -            | -                | -                | -         |     4.12 | consti, djay, kmrn, Sandman, xaler   |
|           23 |     2762 | 2025-12-12 | Kraken Seas           | W   | 0.581      | -            | -                | -                | -         |     2.19 | consti, djay, kmrn, Sandman, xaler   |
|           22 |     2777 | 2025-12-11 | InControl             | W   | 0.575      | -            | -                | -                | -         |     6.68 | consti, djay, kmrn, Pluto, Sandman   |
|           21 |     2798 | 2025-12-09 | Akimbo Esports        | W   | 0.562      | -            | -                | -                | -         |     3.92 | consti, djay, kmrn, Pluto, Sandman   |
|           20 |     2837 | 2025-12-07 | Team Aether           | W   | 0.548      | -            | -                | -                | -         |     4.89 | consti, djay, kmrn, Pluto, Sandman   |
|           19 |     2884 | 2025-12-05 | Pulse (American team) | L   | 0.535      | -            | -                | -                | -         |   -13.16 | consti, djay, kmrn, Pluto, Sandman   |
|           18 |     2952 | 2025-12-02 | Team Aether           | L   | 0.515      | -            | -                | -                | -         |   -11.87 | consti, djay, kmrn, Pluto, Sandman   |
|           17 |     3482 | 2025-11-11 | BOSS                  | L   | 0.375      | -            | -                | -                | -         |    -5.62 | consti, djay, kmrn, mason, Sandman   |
|           16 |     3509 | 2025-11-10 | SkinRave Esports      | L   | 0.368      | -            | -                | -                | -         |    -4.69 | consti, djay, kmrn, mason, Sandman   |
|           15 |     3939 | 2025-10-29 | BOSS                  | L   | 0.288      | -            | -                | -                | -         |    -4.54 | consti, djay, kmrn, mason, Sandman   |
|           14 |     4035 | 2025-10-26 | Mythic                | W   | 0.268      | -            | -                | -                | -         |     2.94 | consti, djay, kmrn, mason, Sandman   |
|           13 |     4093 | 2025-10-25 | OverKnight            | W   | 0.262      | -            | -                | -                | -         |     2.60 | consti, djay, kmrn, mason, Sandman   |
|           12 |     4101 | 2025-10-25 | Marsborne             | L   | 0.261      | -            | -                | -                | -         |    -0.47 | consti, djay, kmrn, mason, Sandman   |
|           11 |     4149 | 2025-10-24 | Wanted Goons          | W   | 0.255      | -            | -                | -                | -         |     1.26 | consti, djay, kmrn, mason, Sandman   |
|           10 |     4276 | 2025-10-21 | Marsborne             | L   | 0.234      | -            | -                | -                | -         |    -0.42 | consti, djay, kmrn, mason, Sandman   |
|            9 |     4371 | 2025-10-16 | Outfit 49             | W   | 0.201      | -            | -                | -                | -         |     2.65 | consti, djay, kmrn, mason, Sandman   |
|            8 |     4482 | 2025-10-13 | Outfit 49             | W   | 0.180      | -            | -                | -                | -         |     1.08 | consti, djay, kmrn, mason, Sandman   |
|            7 |     4571 | 2025-10-09 | BOSS                  | L   | 0.155      | -            | -                | -                | -         |    -2.37 | consti, djay, mason, Sandman, Wolffe |
|            6 |     4616 | 2025-10-08 | Marsborne             | L   | 0.148      | -            | -                | -                | -         |    -0.25 | consti, djay, mason, Sandman, Wolffe |
|            5 |     4730 | 2025-10-06 | FlyQuest RED          | W   | 0.135      | -            | -                | -                | -         |     1.78 | consti, djay, mason, Sandman, Wolffe |
|            4 |     5335 | 2025-09-21 | SportsBetExpert       | W   | 0.035      | -            | -                | -                | -         |     0.41 | consti, djay, mason, Sandman, Wolffe |
|            3 |     5364 | 2025-09-20 | NuTorious             | W   | 0.028      | -            | -                | -                | -         |     0.16 | consti, djay, mason, Sandman, Wolffe |
|            2 |     5424 | 2025-09-18 | SkinRave Esports      | L   | 0.015      | -            | -                | -                | -         |    -0.20 | consti, djay, mason, Sandman, Wolffe |
|            1 |     5456 | 2025-09-17 | Wanted Goons          | W   | 0.008      | -            | -                | -                | -         |     0.04 | consti, djay, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,524.28)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-02-15 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-02-10 |      0.981 | $1,000.00      | $981.27         |
| 2025-12-14 |      0.594 | $1,750.00      | $1,039.35       |
| 2025-11-15 |      0.402 | $1,000.00      | $401.69         |
| 2025-09-22 |      0.041 | $1,000.00      | $41.41          |
| 2025-09-21 |      0.035 | $1,750.00      | $60.56          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
