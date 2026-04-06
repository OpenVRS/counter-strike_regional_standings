### Roster Details<br />
Team Name: GenOne<br />
Roster: bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz<br />
Global Rank: [116](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_05.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_04_05.md)<br />
<br />
Final Rank Value:  1002.5<br />
<br />
Final Rank Value (1002.5) = Starting Rank Value (927.0) + Head To Head Adjustments (75.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.247[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.0
- 400 + ( ( 0.269 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 927.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.540
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      197 | 2026-04-01 | Ursa                                      | L   | 1.000      | -            | -                | -                | -         |   -11.11 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           63 |      312 | 2026-03-30 | KOLESIE                                   | L   | 1.000      | -            | -                | -                | -         |    -9.13 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           62 |      605 | 2026-03-24 | ALGO Esports                              | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.456 (0.198)    | 0 (0.000) |    14.94 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           61 |      736 | 2026-03-22 | Ex-MINLATE                                | W   | 1.000      | 0.435        | -                | 0.445 (0.193)    | 0 (0.000) |    14.56 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           60 |      848 | 2026-03-20 | Leo Team                                  | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.565 (0.246)    | 0 (0.000) |    16.67 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           59 |      928 | 2026-03-18 | SINQU Esports                             | L   | 1.000      | -            | -                | -                | -         |   -28.38 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, Keoz    |
|           58 |      949 | 2026-03-18 | MANA eSports                              | L   | 1.000      | -            | -                | -                | -         |   -17.17 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           57 |      982 | 2026-03-17 | Rottweilers                               | L   | 1.000      | -            | -                | -                | -         |   -28.45 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, Keoz    |
|           56 |     1444 | 2026-03-08 | MOUZ NXT                                  | L   | 1.000      | -            | -                | -                | -         |   -10.12 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, rain240 |
|           55 |     1533 | 2026-03-06 | TNC Esports                               | W   | 0.992      | 0.371        | 0.026 (0.009)    | 1.000 (0.368)    | 0 (0.000) |    15.48 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, rain240 |
|           54 |     1956 | 2026-02-25 | HYPERSPIRIT                               | L   | 0.933      | -            | -                | -                | -         |   -17.34 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           53 |     1967 | 2026-02-25 | Nexus Gaming                              | L   | 0.933      | -            | -                | -                | -         |   -17.61 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           52 |     2100 | 2026-02-22 | 33                                        | L   | 0.913      | -            | -                | -                | -         |    -5.34 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           51 |     2159 | 2026-02-21 | Alliance                                  | L   | 0.907      | -            | -                | -                | -         |    -2.97 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           50 |     2211 | 2026-02-20 | TDK                                       | L   | 0.900      | -            | -                | -                | -         |    -9.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           49 |     2311 | 2026-02-18 | Oramond                                   | W   | 0.887      | 0.384        | 0.049 (0.017)    | -                | 0 (0.000) |    16.74 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           48 |     2422 | 2026-02-16 | FC Famalicão Esports                      | W   | 0.874      | -            | -                | -                | 0 (0.000) |     9.12 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           47 |     2550 | 2026-02-14 | VP.Prodigy                                | W   | 0.859      | -            | -                | -                | -         |    13.64 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           46 |     2665 | 2026-02-12 | ALGO Esports                              | L   | 0.845      | -            | -                | -                | -         |   -16.43 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           45 |     2720 | 2026-02-10 | SPARTA Esports                            | L   | 0.834      | -            | -                | -                | -         |    -4.52 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           44 |     2781 | 2026-02-08 | VP.Prodigy                                | L   | 0.820      | -            | -                | -                | -         |   -12.60 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           43 |     2876 | 2026-02-05 | ECSTATIC                                  | L   | 0.798      | -            | -                | -                | -         |    -3.95 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           42 |     2898 | 2026-02-04 | AM Gaming                                 | W   | 0.791      | 0.435        | 0.025 (0.009)    | 0.767 (0.264)    | -         |    19.13 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           41 |     2925 | 2026-02-03 | SINNERS Esports                           | W   | 0.785      | 0.435        | 0.179 (0.061)    | 0.674 (0.230)    | -         |    23.22 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           40 |     3025 | 2026-01-31 | AaB esport                                | W   | 0.765      | 0.435        | -                | 0.706 (0.235)    | -         |    14.04 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           39 |     3078 | 2026-01-29 | AM Gaming                                 | L   | 0.753      | -            | -                | -                | -         |    -3.90 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           38 |     3098 | 2026-01-28 | Eternal Fire                              | W   | 0.746      | 0.435        | -                | 0.761 (0.247)    | -         |    18.99 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           37 |     3146 | 2026-01-26 | Betclic Apogee Esports                    | L   | 0.733      | -            | -                | -                | -         |    -3.87 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           36 |     3161 | 2026-01-25 | Tung Tung Sahur                           | W   | 0.727      | -            | -                | -                | -         |     6.80 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           35 |     3192 | 2026-01-24 | Team Nemesis                              | L   | 0.720      | -            | -                | -                | -         |    -2.42 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           34 |     3205 | 2026-01-24 | ARCRED                                    | W   | 0.719      | 0.435        | 0.017 (0.005)    | 0.704 (0.220)    | -         |    19.07 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           33 |     3299 | 2026-01-22 | Gentle Mates                              | L   | 0.706      | -            | -                | -                | -         |    -2.80 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           32 |     3308 | 2026-01-22 | UNiTY esports                             | W   | 0.705      | -            | -                | -                | -         |     7.35 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           31 |     3315 | 2026-01-21 | Fnatic                                    | W   | 0.702      | -            | -                | -                | -         |    17.26 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           30 |     3340 | 2026-01-21 | BetBoom Team                              | L   | 0.700      | -            | -                | -                | -         |    -1.30 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           29 |     3357 | 2026-01-20 | 1w Team                                   | L   | 0.694      | -            | -                | -                | -         |    -1.62 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           28 |     3381 | 2026-01-19 | Nemiga Gaming                             | L   | 0.685      | -            | -                | -                | -         |    -2.19 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           27 |     3409 | 2026-01-18 | TNC Esports                               | W   | 0.679      | 0.396        | 0.026 (0.007)    | 1.000 (0.269)    | -         |    10.47 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           26 |     3436 | 2026-01-17 | BIG Academy                               | L   | 0.674      | -            | -                | -                | -         |   -17.36 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           25 |     3445 | 2026-01-17 | QWENTRY                                   | W   | 0.673      | -            | -                | -                | -         |     9.13 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           24 |     3629 | 2026-01-10 | CSDIILIT                                  | W   | 0.625      | -            | -                | -                | -         |     3.91 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           23 |     3737 | 2025-12-23 | Team Nemesis                              | W   | 0.507      | -            | -                | -                | -         |     3.30 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           22 |     3739 | 2025-12-23 | 33                                        | W   | 0.505      | 0.333        | 0.059 (0.010)    | -                | -         |    14.36 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           21 |     3741 | 2025-12-22 | Phantom Esports                           | W   | 0.500      | -            | -                | -                | -         |    14.00 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           20 |     3756 | 2025-12-21 | Eternal Fire                              | W   | 0.492      | -            | -                | -                | -         |     3.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           19 |     4151 | 2025-11-29 | Monte                                     | L   | 0.347      | -            | -                | -                | -         |    -0.49 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           18 |     4163 | 2025-11-29 | 9INE                                      | W   | 0.346      | 0.333        | 0.054 (0.006)    | -                | 1 (0.346) |     9.91 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           17 |     4364 | 2025-11-21 | Inner Circle Esports                      | L   | 0.294      | -            | -                | -                | -         |    -1.83 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           16 |     4370 | 2025-11-21 | Passion UA                                | L   | 0.293      | -            | -                | -                | -         |    -0.73 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           15 |     4398 | 2025-11-21 | BASEMENT BOYS                             | W   | 0.291      | -            | -                | -                | 1 (0.291) |     3.30 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           14 |     4425 | 2025-11-20 | Ex-MINLATE                                | W   | 0.285      | -            | -                | -                | 1 (0.285) |     5.58 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           13 |     4440 | 2025-11-20 | Strael-Bora                               | W   | 0.285      | -            | -                | -                | 1 (0.285) |     0.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           12 |     4658 | 2025-11-10 | Nuclear TigeRES                           | L   | 0.218      | -            | -                | -                | -         |    -0.55 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           11 |     4672 | 2025-11-09 | JiJieHao                                  | L   | 0.213      | -            | -                | -                | -         |    -1.45 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           10 |     4727 | 2025-11-08 | HAVU                                      | W   | 0.206      | -            | -                | -                | -         |     4.72 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            9 |     4828 | 2025-11-07 | AMKAL ESPORTS                             | W   | 0.199      | -            | -                | -                | -         |     1.10 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            8 |     4848 | 2025-11-07 | Nuclear TigeRES                           | L   | 0.198      | -            | -                | -                | -         |    -0.47 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            7 |     4887 | 2025-11-05 | BASEMENT BOYS                             | W   | 0.187      | -            | -                | -                | -         |     0.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            6 |     4951 | 2025-11-03 | AMKAL ESPORTS                             | W   | 0.173      | -            | -                | -                | -         |     0.95 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            5 |     4970 | 2025-11-02 | Copenhagen Wolves (American organization) | L   | 0.167      | -            | -                | -                | -         |    -4.63 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            4 |     5042 | 2025-10-31 | Phantom Esports                           | W   | 0.151      | -            | -                | -                | -         |     0.71 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            3 |     5068 | 2025-10-29 | ENCE Academy                              | W   | 0.140      | -            | -                | -                | -         |     1.53 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            2 |     5102 | 2025-10-28 | HAVU                                      | W   | 0.133      | -            | -                | -                | -         |     3.07 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            1 |     5416 | 2025-10-21 | Mousquetaires                             | L   | 0.085      | -            | -                | -                | -         |    -1.92 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,693.19)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.927 | $1,250.00      | $1,158.81       |
| 2026-02-05 |      0.800 | $5,000.00      | $3,997.75       |
| 2025-12-23 |      0.507 | $5,000.00      | $2,536.64       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
