### Roster Details<br />
Team Name: GenOne<br />
Roster: bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz<br />
Global Rank: [116](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1005.9<br />
<br />
Final Rank Value (1005.9) = Starting Rank Value (927.6) + Head To Head Adjustments (78.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.248[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.6
- 400 + ( ( 0.270 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 927.6


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
|           64 |      213 | 2026-04-01 | Ursa                                      | L   | 1.000      | -            | -                | -                | -         |   -11.04 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           63 |      330 | 2026-03-30 | KOLESIE                                   | L   | 1.000      | -            | -                | -                | -         |    -9.16 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           62 |      622 | 2026-03-24 | ALGO Esports                              | W   | 1.000      | 0.435        | 0.013 (0.006)    | 0.456 (0.198)    | 0 (0.000) |    14.90 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           61 |      753 | 2026-03-22 | Ex-MINLATE                                | W   | 1.000      | 0.435        | -                | 0.445 (0.193)    | 0 (0.000) |    14.87 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           60 |      866 | 2026-03-20 | Leo Team                                  | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.593 (0.258)    | 0 (0.000) |    16.70 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           59 |      946 | 2026-03-18 | SINQU Esports                             | L   | 1.000      | -            | -                | -                | -         |   -28.42 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, Keoz    |
|           58 |      967 | 2026-03-18 | MANA eSports                              | L   | 1.000      | -            | -                | -                | -         |   -16.82 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           57 |     1000 | 2026-03-17 | Rottweilers                               | L   | 1.000      | -            | -                | -                | -         |   -28.46 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, Keoz    |
|           56 |     1462 | 2026-03-08 | MOUZ NXT                                  | L   | 1.000      | -            | -                | -                | -         |   -10.19 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, rain240 |
|           55 |     1551 | 2026-03-06 | TNC Esports                               | W   | 0.992      | 0.371        | 0.026 (0.009)    | 1.000 (0.368)    | 0 (0.000) |    15.46 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, rain240 |
|           54 |     1974 | 2026-02-25 | HYPERSPIRIT                               | L   | 0.934      | -            | -                | -                | -         |   -17.28 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           53 |     1985 | 2026-02-25 | Nexus Gaming                              | L   | 0.933      | -            | -                | -                | -         |   -17.68 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           52 |     2122 | 2026-02-22 | 33                                        | L   | 0.914      | -            | -                | -                | -         |    -5.41 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           51 |     2182 | 2026-02-21 | Alliance                                  | L   | 0.908      | -            | -                | -                | -         |    -3.01 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           50 |     2235 | 2026-02-20 | TDK                                       | L   | 0.901      | -            | -                | -                | -         |    -9.19 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           49 |     2335 | 2026-02-18 | Oramond                                   | W   | 0.888      | 0.384        | 0.049 (0.017)    | -                | 0 (0.000) |    16.80 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           48 |     2447 | 2026-02-16 | FC Famalicão Esports                      | W   | 0.874      | -            | -                | -                | 0 (0.000) |     9.07 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           47 |     2576 | 2026-02-14 | VP.Prodigy                                | W   | 0.860      | -            | -                | -                | -         |    13.73 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           46 |     2691 | 2026-02-12 | ALGO Esports                              | L   | 0.845      | -            | -                | -                | -         |   -16.45 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           45 |     2746 | 2026-02-10 | SPARTA Esports                            | L   | 0.834      | -            | -                | -                | -         |    -4.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           44 |     2807 | 2026-02-08 | VP.Prodigy                                | L   | 0.820      | -            | -                | -                | -         |   -12.61 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           43 |     2902 | 2026-02-05 | ECSTATIC                                  | L   | 0.798      | -            | -                | -                | -         |    -4.01 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           42 |     2924 | 2026-02-04 | AM Gaming                                 | W   | 0.792      | 0.435        | 0.025 (0.009)    | 0.767 (0.264)    | -         |    19.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           41 |     2951 | 2026-02-03 | SINNERS Esports                           | W   | 0.786      | 0.435        | 0.179 (0.061)    | 0.674 (0.230)    | -         |    23.21 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           40 |     3052 | 2026-01-31 | AaB esport                                | W   | 0.766      | 0.435        | -                | 0.706 (0.235)    | -         |    16.29 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           39 |     3105 | 2026-01-29 | AM Gaming                                 | L   | 0.753      | -            | -                | -                | -         |    -3.92 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           38 |     3125 | 2026-01-28 | Eternal Fire                              | W   | 0.747      | 0.435        | -                | 0.761 (0.247)    | -         |    19.04 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           37 |     3173 | 2026-01-26 | Betclic Apogee Esports                    | L   | 0.734      | -            | -                | -                | -         |    -3.89 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           36 |     3188 | 2026-01-25 | Tung Tung Sahur                           | W   | 0.727      | -            | -                | -                | -         |     6.97 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           35 |     3219 | 2026-01-24 | Team Nemesis                              | L   | 0.721      | -            | -                | -                | -         |    -2.42 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           34 |     3233 | 2026-01-24 | ARCRED                                    | W   | 0.719      | 0.435        | 0.017 (0.005)    | 0.704 (0.220)    | -         |    19.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           33 |     3329 | 2026-01-22 | Gentle Mates                              | L   | 0.706      | -            | -                | -                | -         |    -2.81 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           32 |     3338 | 2026-01-22 | UNiTY esports                             | W   | 0.705      | -            | -                | -                | -         |     7.37 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           31 |     3345 | 2026-01-21 | Fnatic                                    | W   | 0.702      | -            | -                | -                | -         |    17.26 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           30 |     3370 | 2026-01-21 | BetBoom Team                              | L   | 0.700      | -            | -                | -                | -         |    -1.31 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           29 |     3387 | 2026-01-20 | 1w Team                                   | L   | 0.694      | -            | -                | -                | -         |    -1.62 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           28 |     3411 | 2026-01-19 | Nemiga Gaming                             | L   | 0.686      | -            | -                | -                | -         |    -2.20 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           27 |     3439 | 2026-01-18 | TNC Esports                               | W   | 0.679      | 0.396        | 0.026 (0.007)    | 1.000 (0.269)    | -         |    10.63 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           26 |     3466 | 2026-01-17 | BIG Academy                               | L   | 0.674      | -            | -                | -                | -         |   -17.39 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           25 |     3475 | 2026-01-17 | QWENTRY                                   | W   | 0.674      | -            | -                | -                | -         |     9.12 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           24 |     3663 | 2026-01-10 | CSDIILIT                                  | W   | 0.626      | -            | -                | -                | -         |     4.01 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           23 |     3772 | 2025-12-23 | Team Nemesis                              | W   | 0.508      | -            | -                | -                | -         |     3.36 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           22 |     3774 | 2025-12-23 | 33                                        | W   | 0.506      | 0.333        | 0.059 (0.010)    | -                | -         |    14.37 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           21 |     3776 | 2025-12-22 | Phantom Esports                           | W   | 0.500      | -            | -                | -                | -         |    14.01 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           20 |     3791 | 2025-12-21 | Eternal Fire                              | W   | 0.493      | -            | -                | -                | -         |     3.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           19 |     4186 | 2025-11-29 | Monte                                     | L   | 0.347      | -            | -                | -                | -         |    -0.49 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           18 |     4198 | 2025-11-29 | 9INE                                      | W   | 0.346      | 0.333        | 0.054 (0.006)    | -                | 1 (0.346) |     9.93 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           17 |     4399 | 2025-11-21 | Inner Circle Esports                      | L   | 0.294      | -            | -                | -                | -         |    -1.84 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           16 |     4405 | 2025-11-21 | Passion UA                                | L   | 0.294      | -            | -                | -                | -         |    -0.73 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           15 |     4433 | 2025-11-21 | BASEMENT BOYS                             | W   | 0.291      | -            | -                | -                | 1 (0.291) |     3.31 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           14 |     4460 | 2025-11-20 | Ex-MINLATE                                | W   | 0.286      | -            | -                | -                | 1 (0.286) |     5.58 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           13 |     4475 | 2025-11-20 | Strael-Bora                               | W   | 0.285      | -            | -                | -                | 1 (0.285) |     0.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           12 |     4693 | 2025-11-10 | Nuclear TigeRES                           | L   | 0.218      | -            | -                | -                | -         |    -0.55 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           11 |     4707 | 2025-11-09 | JiJieHao                                  | L   | 0.213      | -            | -                | -                | -         |    -1.46 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           10 |     4762 | 2025-11-08 | HAVU                                      | W   | 0.207      | -            | -                | -                | -         |     4.74 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            9 |     4863 | 2025-11-07 | AMKAL ESPORTS                             | W   | 0.199      | -            | -                | -                | -         |     1.10 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            8 |     4883 | 2025-11-07 | Nuclear TigeRES                           | L   | 0.198      | -            | -                | -                | -         |    -0.47 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            7 |     4922 | 2025-11-05 | BASEMENT BOYS                             | W   | 0.188      | -            | -                | -                | -         |     0.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            6 |     4986 | 2025-11-03 | AMKAL ESPORTS                             | W   | 0.173      | -            | -                | -                | -         |     0.95 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            5 |     5005 | 2025-11-02 | Copenhagen Wolves (American organization) | L   | 0.168      | -            | -                | -                | -         |    -4.65 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            4 |     5077 | 2025-10-31 | Phantom Esports                           | W   | 0.152      | -            | -                | -                | -         |     0.71 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            3 |     5103 | 2025-10-29 | ENCE Academy                              | W   | 0.141      | -            | -                | -                | -         |     1.55 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            2 |     5137 | 2025-10-28 | HAVU                                      | W   | 0.134      | -            | -                | -                | -         |     3.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            1 |     5451 | 2025-10-21 | Mousquetaires                             | L   | 0.086      | -            | -                | -                | -         |    -2.09 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,699.44)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.928 | $1,250.00      | $1,159.51       |
| 2026-02-05 |      0.800 | $5,000.00      | $4,000.52       |
| 2025-12-23 |      0.508 | $5,000.00      | $2,539.41       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
