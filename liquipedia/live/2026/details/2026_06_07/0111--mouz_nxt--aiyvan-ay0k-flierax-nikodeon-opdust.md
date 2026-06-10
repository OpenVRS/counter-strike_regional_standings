### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [111](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [75]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1011.6<br />
<br />
Final Rank Value (1011.6) = Starting Rank Value (1044.1) + Head To Head Adjustments (-32.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.362[<sup>2</sup>](#table1)

The average of these factors is 0.335<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1044.1
- 400 + ( ( 0.335 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1044.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.743
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           95 |      711 | 2026-05-14 | TDK                                       | L   | 1.000      | -            | -                | -                | -         |    -8.21 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           94 |      764 | 2026-05-12 | Lavked                                    | L   | 1.000      | -            | -                | -                | -         |   -12.89 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           93 |      821 | 2026-05-11 | INOX Division                             | L   | 1.000      | -            | -                | -                | -         |   -12.28 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           92 |      868 | 2026-05-10 | Looking for Org                           | L   | 1.000      | -            | -                | -                | -         |    -9.13 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           91 |      876 | 2026-05-09 | UNiTY esports                             | W   | 1.000      | 0.384        | -                | 0.582 (0.223)    | -         |     9.36 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           90 |      912 | 2026-05-08 | AM Gaming                                 | W   | 0.992      | 0.435        | 0.016 (0.007)    | 0.749 (0.323)    | -         |    21.36 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           89 |      925 | 2026-05-07 | Lavked                                    | L   | 0.986      | -            | -                | -                | -         |   -13.60 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           88 |      967 | 2026-05-05 | Bebop                                     | W   | 0.971      | 0.384        | -                | 0.788 (0.294)    | -         |    12.05 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           87 |      976 | 2026-05-04 | Ursa                                      | L   | 0.966      | -            | -                | -                | -         |   -11.92 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           86 |     1273 | 2026-04-27 | UNiTY esports                             | L   | 0.920      | -            | -                | -                | -         |   -20.42 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           85 |     1450 | 2026-04-24 | ECSTATIC                                  | W   | 0.900      | 0.362        | 0.037 (0.012)    | -                | -         |    15.69 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           84 |     1543 | 2026-04-22 | Acend                                     | L   | 0.885      | -            | -                | -                | -         |    -7.46 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           83 |     1568 | 2026-04-20 | CYBERSHOKE Esports                        | L   | 0.871      | -            | -                | -                | -         |    -9.76 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           82 |     1575 | 2026-04-19 | EYEBALLERS                                | L   | 0.867      | -            | -                | -                | -         |    -4.53 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           81 |     1599 | 2026-04-19 | Ursa                                      | W   | 0.864      | 0.435        | -                | 0.952 (0.358)    | -         |    13.41 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           80 |     1628 | 2026-04-17 | Ex-RUBY                                   | L   | 0.853      | -            | -                | -                | -         |   -12.50 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           79 |     1662 | 2026-04-14 | Qual4                                     | W   | 0.834      | -            | -                | -                | -         |     0.62 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           78 |     1676 | 2026-04-14 | GenOne                                    | W   | 0.831      | 0.435        | -                | 1.000 (0.361)    | -         |     6.41 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           77 |     1686 | 2026-04-13 | Clutchain                                 | L   | 0.827      | -            | -                | -                | -         |   -24.76 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           76 |     1717 | 2026-04-12 | ARCRED                                    | L   | 0.818      | -            | -                | -                | -         |    -8.90 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           75 |     1817 | 2026-04-08 | Zajezdzacze                               | W   | 0.792      | -            | -                | -                | -         |     2.32 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           74 |     2506 | 2026-03-29 | Aimclub (Romanian team)                   | L   | 0.727      | -            | -                | -                | -         |   -20.00 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           73 |     2530 | 2026-03-29 | Lazer Cats                                | L   | 0.726      | -            | -                | -                | -         |   -17.71 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           72 |     2550 | 2026-03-29 | Alpha Dominion Nation                     | W   | 0.725      | -            | -                | -                | 1 (0.725) |     0.39 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           71 |     2744 | 2026-03-25 | BIG                                       | L   | 0.700      | -            | -                | -                | -         |    -3.67 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           70 |     2810 | 2026-03-24 | Fnatic                                    | W   | 0.693      | -            | -                | -                | 1 (0.693) |     9.75 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           69 |     2824 | 2026-03-24 | Nexus Gaming                              | W   | 0.692      | -            | -                | -                | 1 (0.692) |     3.05 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           68 |     3332 | 2026-03-14 | Nemiga Gaming                             | L   | 0.625      | -            | -                | -                | -         |    -5.91 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           67 |     3418 | 2026-03-12 | Megoshort                                 | W   | 0.613      | -            | -                | -                | -         |     4.04 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           66 |     3439 | 2026-03-12 | CYBERSHOKE Esports                        | L   | 0.611      | -            | -                | -                | -         |    -7.84 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           65 |     3472 | 2026-03-11 | K27                                       | L   | 0.605      | -            | -                | -                | -         |    -4.25 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           64 |     3512 | 2026-03-10 | Nuclear TigeRES                           | W   | 0.599      | 0.435        | 0.045 (0.012)    | -                | -         |    13.25 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           63 |     3571 | 2026-03-09 | Team Nemesis                              | W   | 0.592      | 0.371        | 0.136 (0.030)    | 0.920 (0.202)    | -         |    13.17 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           62 |     3611 | 2026-03-08 | Acend                                     | W   | 0.587      | -            | -                | -                | -         |    13.22 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           61 |     3651 | 2026-03-08 | GenOne                                    | W   | 0.586      | 0.371        | -                | 1.000 (0.217)    | -         |     4.79 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           60 |     3721 | 2026-03-06 | Ex-RUBY                                   | L   | 0.574      | -            | -                | -                | -         |   -10.70 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           59 |     3746 | 2026-03-06 | UNiTY esports                             | W   | 0.571      | -            | -                | -                | -         |     3.97 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           58 |     3845 | 2026-03-04 | PsychoFace                                | W   | 0.559      | 0.435        | 0.034 (0.008)    | 1.000 (0.243)    | -         |     8.36 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           57 |     3955 | 2026-03-01 | Oxuji Esports                             | W   | 0.541      | -            | -                | -                | -         |    12.53 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           56 |     4018 | 2026-02-28 | SPARTA Esports                            | L   | 0.532      | -            | -                | -                | -         |    -5.38 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           55 |     4073 | 2026-02-27 | Looking for Org                           | L   | 0.525      | -            | -                | -                | -         |    -4.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           54 |     4098 | 2026-02-26 | TNC Esport                                | L   | 0.521      | -            | -                | -                | -         |    -9.57 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           53 |     4114 | 2026-02-26 | K27                                       | L   | 0.520      | -            | -                | -                | -         |    -3.15 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           52 |     4127 | 2026-02-26 | EYEBALLERS                                | L   | 0.519      | -            | -                | -                | -         |    -3.02 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           51 |     4143 | 2026-02-26 | Hashiras                                  | W   | 0.518      | -            | -                | -                | -         |     2.54 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           50 |     4177 | 2026-02-25 | Nuclear TigeRES                           | W   | 0.512      | 0.435        | 0.045 (0.010)    | -                | -         |    12.30 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           49 |     4203 | 2026-02-24 | BC.Game Esports                           | W   | 0.507      | -            | -                | -                | -         |     0.32 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           48 |     4252 | 2026-02-23 | Alliance                                  | L   | 0.501      | -            | -                | -                | -         |    -2.21 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           47 |     4303 | 2026-02-22 | TDK                                       | L   | 0.494      | -            | -                | -                | -         |    -5.82 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           46 |     4344 | 2026-02-22 | SPARTA Esports                            | L   | 0.492      | -            | -                | -                | -         |   -14.45 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           45 |     4395 | 2026-02-21 | TDK                                       | L   | 0.486      | -            | -                | -                | -         |    -6.37 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           44 |     4423 | 2026-02-20 | Leo Team                                  | W   | 0.481      | -            | -                | -                | -         |     2.70 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           43 |     4431 | 2026-02-20 | TNC Esport                                | W   | 0.480      | 0.435        | -                | 1.000 (0.209)    | -         |     6.42 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           42 |     4504 | 2026-02-19 | ECSTATIC                                  | L   | 0.471      | -            | -                | -                | -         |    -7.16 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           41 |     4528 | 2026-02-18 | Johnny Speeds                             | W   | 0.467      | 0.384        | 0.053 (0.010)    | -                | -         |    10.89 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           40 |     4546 | 2026-02-18 | TDK                                       | W   | 0.466      | 0.435        | 0.036 (0.007)    | -                | -         |     8.87 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           39 |     4559 | 2026-02-18 | FAVBET Team                               | W   | 0.465      | -            | -                | -                | -         |     4.13 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           38 |     4582 | 2026-02-17 | Oxuji Esports                             | W   | 0.461      | 0.624        | -                | 0.759 (0.218)    | -         |    10.74 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           37 |     4598 | 2026-02-17 | Magic                                     | W   | 0.460      | 0.624        | 0.236 (0.068)    | -                | -         |    13.71 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           36 |     4631 | 2026-02-16 | OMEGA                                     | W   | 0.454      | -            | -                | -                | -         |     9.42 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           35 |     4655 | 2026-02-16 | BRUTE                                     | W   | 0.452      | -            | -                | -                | -         |     3.16 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           34 |     4745 | 2026-02-14 | ENCE                                      | W   | 0.441      | -            | -                | -                | -         |     2.78 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           33 |     4982 | 2026-02-08 | Nuclear TigeRES                           | L   | 0.401      | -            | -                | -                | -         |    -2.24 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           32 |     4986 | 2026-02-08 | Virtus.pro                                | W   | 0.400      | 0.624        | 0.025 (0.006)    | -                | -         |     9.45 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           31 |     5173 | 2026-02-02 | 9INE                                      | L   | 0.359      | -            | -                | -                | -         |    -7.56 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           30 |     5245 | 2026-01-31 | ARCRED                                    | W   | 0.345      | -            | -                | -                | -         |     7.97 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           29 |     5266 | 2026-01-30 | Eternal Fire                              | W   | 0.340      | -            | -                | -                | -         |     0.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           28 |     5324 | 2026-01-28 | FAVBET Team                               | L   | 0.325      | -            | -                | -                | -         |    -7.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           27 |     5337 | 2026-01-27 | FAVBET Team                               | L   | 0.320      | -            | -                | -                | -         |    -7.53 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           26 |     5373 | 2026-01-25 | UNiTY esports                             | L   | 0.307      | -            | -                | -                | -         |    -7.81 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           25 |     5388 | 2026-01-25 | MANA eSports                              | W   | 0.305      | -            | -                | -                | -         |     2.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           24 |     5425 | 2026-01-24 | Magic                                     | L   | 0.299      | -            | -                | -                | -         |    -0.42 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           23 |     5458 | 2026-01-23 | Illwill                                   | L   | 0.293      | -            | -                | -                | -         |    -4.42 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           22 |     5485 | 2026-01-23 | Esport Academy Copenhagen                 | W   | 0.291      | -            | -                | -                | -         |     6.49 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           21 |     5525 | 2026-01-22 | ALLINNERS                                 | W   | 0.285      | -            | -                | -                | -         |     0.89 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           20 |     5569 | 2026-01-21 | TNC Esport                                | L   | 0.278      | -            | -                | -                | -         |    -5.19 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           19 |     5588 | 2026-01-20 | BASEMENT BOYS                             | W   | 0.271      | -            | -                | -                | -         |     6.28 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           18 |     5628 | 2026-01-18 | Betclic Apogee Esports                    | L   | 0.259      | -            | -                | -                | -         |    -2.34 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           17 |     5681 | 2026-01-17 | FC Famalicão Esports                      | W   | 0.252      | -            | -                | -                | 1 (0.252) |     1.44 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           16 |     5778 | 2026-01-15 | FUZOS                                     | W   | 0.239      | -            | -                | -                | 1 (0.239) |     1.12 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           15 |     5782 | 2026-01-15 | Matrix (Ukrainian team)                   | W   | 0.238      | -            | -                | -                | 1 (0.238) |     0.62 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           14 |     5868 | 2026-01-05 | ALGO Esports                              | W   | 0.173      | -            | -                | -                | 1 (0.173) |     0.72 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           13 |     5871 | 2026-01-05 | ASTRAL Esports                            | W   | 0.172      | -            | -                | -                | 1 (0.172) |     3.17 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           12 |     5873 | 2026-01-05 | Walczaki                                  | W   | 0.171      | -            | -                | -                | 1 (0.171) |     3.43 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           11 |     5879 | 2026-01-04 | EC BANGA                                  | W   | 0.168      | -            | -                | -                | 1 (0.168) |     0.70 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           10 |     5883 | 2026-01-04 | Cirahvi                                   | W   | 0.167      | -            | -                | -                | -         |     0.89 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            9 |     5885 | 2026-01-04 | ALGO Esports                              | L   | 0.167      | -            | -                | -                | -         |    -4.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            8 |     5889 | 2026-01-04 | SemperFi Esports                          | W   | 0.167      | -            | -                | -                | -         |     2.87 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            7 |     5891 | 2026-01-04 | Hypewrld                                  | W   | 0.166      | -            | -                | -                | -         |     1.24 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            6 |     6022 | 2025-12-19 | Fnatic                                    | L   | 0.059      | -            | -                | -                | -         |    -0.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            5 |     6035 | 2025-12-18 | IC Esports                                | W   | 0.054      | -            | -                | -                | -         |     1.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            4 |     6042 | 2025-12-18 | Team Venom                                | L   | 0.052      | -            | -                | -                | -         |    -1.57 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            3 |     6061 | 2025-12-17 | Illwill                                   | W   | 0.046      | -            | -                | -                | -         |     0.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            2 |     6066 | 2025-12-17 | Grindas                                   | W   | 0.046      | -            | -                | -                | -         |     0.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            1 |     6130 | 2025-12-11 | Copenhagen Wolves (American organization) | L   | 0.006      | -            | -                | -                | -         |    -0.19 | ay0k, Joey, Nikodeon, opdust, xelex     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,720.47)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.634 | $500.00        | $316.92         |
| 2026-03-13 |      0.621 | $2,000.00      | $1,241.29       |
| 2026-03-11 |      0.605 | $5,000.00      | $3,023.36       |
| 2026-02-27 |      0.527 | $2,000.00      | $1,053.79       |
| 2026-02-24 |      0.507 | $2,250.00      | $1,141.14       |
| 2026-02-20 |      0.480 | $2,000.00      | $960.73         |
| 2026-01-18 |      0.261 | $1,451.00      | $378.20         |
| 2026-01-05 |      0.173 | $3,500.00      | $605.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
