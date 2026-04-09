### Roster Details<br />
Team Name: GenOne<br />
Roster: bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz<br />
Global Rank: [116](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [79]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1005.8<br />
<br />
Final Rank Value (1005.8) = Starting Rank Value (927.5) + Head To Head Adjustments (78.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.360[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.248[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.5
- 400 + ( ( 0.270 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 927.5


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
|           64 |      213 | 2026-04-01 | Ursa                                      | L   | 1.000      | -            | -                | -                | -         |   -11.03 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           63 |      330 | 2026-03-30 | KOLESIE                                   | L   | 1.000      | -            | -                | -                | -         |    -9.16 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           62 |      622 | 2026-03-24 | ALGO Esports                              | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.456 (0.198)    | 0 (0.000) |    14.90 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           61 |      753 | 2026-03-22 | Ex-MINLATE                                | W   | 1.000      | 0.435        | -                | 0.445 (0.193)    | 0 (0.000) |    14.87 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           60 |      866 | 2026-03-20 | Leo Team                                  | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.593 (0.258)    | 0 (0.000) |    16.70 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           59 |      946 | 2026-03-18 | SINQU Esports                             | L   | 1.000      | -            | -                | -                | -         |   -28.42 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, Keoz    |
|           58 |      967 | 2026-03-18 | MANA eSports                              | L   | 1.000      | -            | -                | -                | -         |   -16.81 | bL4SEZ, Brooxsy, Chuckyy, Djoko, Keoz      |
|           57 |     1000 | 2026-03-17 | Rottweilers                               | L   | 1.000      | -            | -                | -                | -         |   -28.47 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, Keoz    |
|           56 |     1462 | 2026-03-08 | MOUZ NXT                                  | L   | 1.000      | -            | -                | -                | -         |   -10.19 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, rain240 |
|           55 |     1551 | 2026-03-06 | TNC Esports                               | W   | 0.992      | 0.371        | 0.026 (0.009)    | 1.000 (0.368)    | 0 (0.000) |    15.45 | Brooxsy, cHeuuuuk, Chuckyy, Djoko, rain240 |
|           54 |     1974 | 2026-02-25 | HYPERSPIRIT                               | L   | 0.933      | -            | -                | -                | -         |   -17.29 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           53 |     1985 | 2026-02-25 | Nexus Gaming                              | L   | 0.933      | -            | -                | -                | -         |   -17.67 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           52 |     2122 | 2026-02-22 | 33                                        | L   | 0.913      | -            | -                | -                | -         |    -5.40 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           51 |     2182 | 2026-02-21 | Alliance                                  | L   | 0.907      | -            | -                | -                | -         |    -3.00 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           50 |     2235 | 2026-02-20 | TDK                                       | L   | 0.900      | -            | -                | -                | -         |    -9.17 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           49 |     2335 | 2026-02-18 | Oramond                                   | W   | 0.887      | 0.384        | 0.049 (0.017)    | -                | 0 (0.000) |    16.79 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           48 |     2446 | 2026-02-16 | FC Famalicão Esports                      | W   | 0.874      | -            | -                | -                | 0 (0.000) |     9.05 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           47 |     2575 | 2026-02-14 | VP.Prodigy                                | W   | 0.859      | -            | -                | -                | -         |    13.72 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           46 |     2690 | 2026-02-12 | ALGO Esports                              | L   | 0.845      | -            | -                | -                | -         |   -16.43 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           45 |     2745 | 2026-02-10 | SPARTA Esports                            | L   | 0.834      | -            | -                | -                | -         |    -4.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           44 |     2806 | 2026-02-08 | VP.Prodigy                                | L   | 0.820      | -            | -                | -                | -         |   -12.60 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           43 |     2901 | 2026-02-05 | ECSTATIC                                  | L   | 0.798      | -            | -                | -                | -         |    -4.01 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           42 |     2923 | 2026-02-04 | AM Gaming                                 | W   | 0.791      | 0.435        | 0.025 (0.009)    | 0.767 (0.264)    | -         |    19.07 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           41 |     2950 | 2026-02-03 | SINNERS Esports                           | W   | 0.785      | 0.435        | 0.179 (0.061)    | 0.674 (0.230)    | -         |    23.20 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           40 |     3051 | 2026-01-31 | AaB esport                                | W   | 0.765      | 0.435        | -                | 0.706 (0.235)    | -         |    16.28 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           39 |     3104 | 2026-01-29 | AM Gaming                                 | L   | 0.753      | -            | -                | -                | -         |    -3.91 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           38 |     3124 | 2026-01-28 | Eternal Fire                              | W   | 0.746      | 0.435        | -                | 0.761 (0.247)    | -         |    19.03 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           37 |     3172 | 2026-01-26 | Betclic Apogee Esports                    | L   | 0.733      | -            | -                | -                | -         |    -3.88 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           36 |     3187 | 2026-01-25 | Tung Tung Sahur                           | W   | 0.727      | -            | -                | -                | -         |     6.96 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           35 |     3218 | 2026-01-24 | Team Nemesis                              | L   | 0.720      | -            | -                | -                | -         |    -2.42 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           34 |     3232 | 2026-01-24 | ARCRED                                    | W   | 0.719      | 0.435        | 0.017 (0.005)    | 0.704 (0.220)    | -         |    19.07 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           33 |     3328 | 2026-01-22 | Gentle Mates                              | L   | 0.706      | -            | -                | -                | -         |    -2.81 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           32 |     3337 | 2026-01-22 | UNiTY esports                             | W   | 0.705      | -            | -                | -                | -         |     7.36 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           31 |     3344 | 2026-01-21 | Fnatic                                    | W   | 0.702      | -            | -                | -                | -         |    17.25 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           30 |     3369 | 2026-01-21 | BetBoom Team                              | L   | 0.700      | -            | -                | -                | -         |    -1.30 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           29 |     3386 | 2026-01-20 | 1w Team                                   | L   | 0.694      | -            | -                | -                | -         |    -1.62 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           28 |     3410 | 2026-01-19 | Nemiga Gaming                             | L   | 0.685      | -            | -                | -                | -         |    -2.19 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           27 |     3438 | 2026-01-18 | TNC Esports                               | W   | 0.679      | 0.396        | 0.026 (0.007)    | 1.000 (0.269)    | -         |    10.60 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           26 |     3465 | 2026-01-17 | BIG Academy                               | L   | 0.674      | -            | -                | -                | -         |   -17.37 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           25 |     3474 | 2026-01-17 | QWENTRY                                   | W   | 0.673      | -            | -                | -                | -         |     9.12 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           24 |     3662 | 2026-01-10 | CSDIILIT                                  | W   | 0.625      | -            | -                | -                | -         |     4.00 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           23 |     3771 | 2025-12-23 | Team Nemesis                              | W   | 0.507      | -            | -                | -                | -         |     3.36 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           22 |     3773 | 2025-12-23 | 33                                        | W   | 0.505      | 0.333        | 0.059 (0.010)    | -                | -         |    14.35 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           21 |     3775 | 2025-12-22 | Phantom Esports                           | W   | 0.500      | -            | -                | -                | -         |    13.99 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           20 |     3790 | 2025-12-21 | Eternal Fire                              | W   | 0.492      | -            | -                | -                | -         |     3.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           19 |     4185 | 2025-11-29 | Monte                                     | L   | 0.347      | -            | -                | -                | -         |    -0.49 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           18 |     4197 | 2025-11-29 | 9INE                                      | W   | 0.346      | 0.333        | 0.054 (0.006)    | -                | 1 (0.346) |     9.91 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           17 |     4398 | 2025-11-21 | Inner Circle Esports                      | L   | 0.294      | -            | -                | -                | -         |    -1.84 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           16 |     4404 | 2025-11-21 | Passion UA                                | L   | 0.293      | -            | -                | -                | -         |    -0.73 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           15 |     4432 | 2025-11-21 | BASEMENT BOYS                             | W   | 0.291      | -            | -                | -                | 1 (0.291) |     3.30 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           14 |     4459 | 2025-11-20 | Ex-MINLATE                                | W   | 0.285      | -            | -                | -                | 1 (0.285) |     5.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           13 |     4474 | 2025-11-20 | Strael-Bora                               | W   | 0.285      | -            | -                | -                | 1 (0.285) |     0.57 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           12 |     4692 | 2025-11-10 | Nuclear TigeRES                           | L   | 0.218      | -            | -                | -                | -         |    -0.55 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           11 |     4706 | 2025-11-09 | JiJieHao                                  | L   | 0.213      | -            | -                | -                | -         |    -1.45 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|           10 |     4761 | 2025-11-08 | HAVU                                      | W   | 0.206      | -            | -                | -                | -         |     4.72 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            9 |     4862 | 2025-11-07 | AMKAL ESPORTS                             | W   | 0.199      | -            | -                | -                | -         |     1.10 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            8 |     4882 | 2025-11-07 | Nuclear TigeRES                           | L   | 0.198      | -            | -                | -                | -         |    -0.47 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            7 |     4921 | 2025-11-05 | BASEMENT BOYS                             | W   | 0.187      | -            | -                | -                | -         |     0.56 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            6 |     4985 | 2025-11-03 | AMKAL ESPORTS                             | W   | 0.173      | -            | -                | -                | -         |     0.95 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            5 |     5004 | 2025-11-02 | Copenhagen Wolves (American organization) | L   | 0.167      | -            | -                | -                | -         |    -4.64 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            4 |     5076 | 2025-10-31 | Phantom Esports                           | W   | 0.151      | -            | -                | -                | -         |     0.70 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            3 |     5102 | 2025-10-29 | ENCE Academy                              | W   | 0.140      | -            | -                | -                | -         |     1.54 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            2 |     5136 | 2025-10-28 | HAVU                                      | W   | 0.133      | -            | -                | -                | -         |     3.07 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |
|            1 |     5450 | 2025-10-21 | Mousquetaires                             | L   | 0.085      | -            | -                | -                | -         |    -2.08 | Brooxsy, Chuckyy, Djoko, misutaaa, NBK-    |

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
