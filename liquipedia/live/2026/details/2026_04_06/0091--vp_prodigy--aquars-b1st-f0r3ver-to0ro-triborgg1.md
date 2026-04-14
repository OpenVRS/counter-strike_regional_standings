### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1<br />
Global Rank: [91](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [65]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1135.0<br />
<br />
Final Rank Value (1135.0) = Starting Rank Value (1106.5) + Head To Head Adjustments (28.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.341[<sup>2</sup>](#table1)
- Opponent Network: 0.225[<sup>2</sup>](#table1)
- LAN Wins: 0.594[<sup>2</sup>](#table1)

The average of these factors is 0.361<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1106.5
- 400 + ( ( 0.361 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1106.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.441
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |     1274 | 2026-03-11 | K27                                       | L   | 1.000      | -            | -                | -                | -         |    -4.52 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           46 |     1386 | 2026-03-09 | 1w Team                                   | W   | 1.000      | 0.371        | 0.098 (0.036)    | 0.660 (0.244)    | 1 (1.000) |    23.17 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           45 |     1401 | 2026-03-08 | Nuclear TigeRES                           | W   | 1.000      | 0.371        | 0.052 (0.019)    | 0.798 (0.296)    | 1 (1.000) |    22.83 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           44 |     1536 | 2026-03-06 | SPARTA Esports                            | L   | 0.994      | -            | -                | -                | -         |    -6.98 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           43 |     1547 | 2026-03-06 | Nuclear TigeRES                           | W   | 0.993      | 0.333        | 0.052 (0.017)    | 0.798 (0.264)    | 1 (0.993) |    23.99 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           42 |     1560 | 2026-03-05 | WW Team                                   | L   | 0.989      | -            | -                | -                | -         |   -11.31 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           41 |     1582 | 2026-03-05 | SPARTA Esports                            | W   | 0.987      | 0.333        | 0.063 (0.021)    | 0.732 (0.241)    | 1 (0.987) |    24.13 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           40 |     1649 | 2026-03-04 | ARCRED                                    | W   | 0.980      | 0.333        | 0.017 (0.005)    | 0.704 (0.230)    | 1 (0.980) |    21.32 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           39 |     1660 | 2026-03-04 | Oxuji Esports                             | W   | 0.979      | 0.333        | 0.011 (0.004)    | -                | 1 (0.979) |    19.32 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1     |
|           38 |     1880 | 2026-02-27 | Sashi Esport                              | L   | 0.945      | -            | -                | -                | -         |    -7.02 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           37 |     2025 | 2026-02-24 | Home                                      | W   | 0.927      | -            | -                | -                | 0 (0.000) |     3.66 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           36 |     2154 | 2026-02-22 | Bushido Wildcats                          | W   | 0.913      | -            | -                | -                | 0 (0.000) |     6.55 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           35 |     2204 | 2026-02-21 | TNC Esports                               | L   | 0.906      | -            | -                | -                | -         |   -10.82 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           34 |     2303 | 2026-02-19 | OMEGA                                     | L   | 0.893      | -            | -                | -                | -         |   -10.07 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           33 |     2336 | 2026-02-18 | ECSTATIC                                  | L   | 0.888      | -            | -                | -                | -         |    -4.38 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           32 |     2424 | 2026-02-17 | CSDIILIT                                  | L   | 0.879      | -            | -                | -                | -         |   -22.53 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           31 |     2434 | 2026-02-17 | Hashiras                                  | W   | 0.878      | -            | -                | -                | 0 (0.000) |     6.83 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           30 |     2440 | 2026-02-16 | ASTRAL Esports                            | W   | 0.874      | 0.435        | -                | 0.533 (0.203)    | 0 (0.000) |    11.72 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           29 |     2459 | 2026-02-16 | Illwill                                   | L   | 0.873      | -            | -                | -                | -         |    -3.92 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           28 |     2472 | 2026-02-16 | ENCE Academy                              | L   | 0.872      | -            | -                | -                | -         |   -20.70 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           27 |     2501 | 2026-02-15 | Bushido Wildcats                          | W   | 0.868      | -            | -                | -                | -         |     4.48 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           26 |     2517 | 2026-02-15 | Rebels Gaming                             | W   | 0.867      | 0.384        | 0.014 (0.005)    | 0.540 (0.180)    | -         |    18.75 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           25 |     2531 | 2026-02-15 | Metizport                                 | L   | 0.866      | -            | -                | -                | -         |   -13.49 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           24 |     2576 | 2026-02-14 | GenOne                                    | L   | 0.860      | -            | -                | -                | -         |   -13.73 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           23 |     2613 | 2026-02-13 | FAVBET Team                               | L   | 0.854      | -            | -                | -                | -         |   -13.18 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           22 |     2632 | 2026-02-13 | Team Nemesis                              | W   | 0.853      | 0.384        | 0.004 (0.001)    | -                | -         |     3.33 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           21 |     2648 | 2026-02-13 | ENJOY (Russian team)                      | L   | 0.852      | -            | -                | -                | -         |   -24.52 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           20 |     2705 | 2026-02-11 | Phantom Esports                           | W   | 0.841      | 0.435        | 0.008 (0.003)    | 0.634 (0.232)    | -         |    17.78 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           19 |     2763 | 2026-02-10 | MASONIC                                   | W   | 0.832      | 0.384        | -                | 0.520 (0.166)    | -         |    12.88 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           18 |     2780 | 2026-02-09 | ENJOY (Russian team)                      | L   | 0.825      | -            | -                | -                | -         |   -23.90 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           17 |     2807 | 2026-02-08 | GenOne                                    | W   | 0.820      | 0.435        | 0.017 (0.006)    | 0.540 (0.192)    | -         |    12.61 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           16 |     2835 | 2026-02-07 | MASONIC                                   | W   | 0.813      | -            | -                | -                | -         |    13.44 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           15 |     2872 | 2026-02-06 | QUAZAR                                    | W   | 0.806      | -            | -                | -                | -         |     1.71 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           14 |     2936 | 2026-02-03 | OMEGA                                     | L   | 0.788      | -            | -                | -                | -         |    -9.44 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           13 |     2970 | 2026-02-02 | QUAZAR                                    | W   | 0.781      | -            | -                | -                | -         |     1.43 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           12 |     3806 | 2025-12-20 | Phantom Esports                           | L   | 0.488      | -            | -                | -                | -         |    -3.26 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           11 |     3975 | 2025-12-09 | Johnny Speeds                             | L   | 0.412      | -            | -                | -                | -         |    -2.52 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|           10 |     3996 | 2025-12-08 | Magic (Russian team)                      | L   | 0.405      | -            | -                | -                | -         |    -4.15 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            9 |     4036 | 2025-12-06 | FORZE Reload                              | W   | 0.393      | -            | -                | -                | -         |     2.90 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            8 |     4105 | 2025-12-03 | Copenhagen Wolves (American organization) | W   | 0.373      | -            | -                | -                | -         |     0.89 | AquaRS, F0R3VER, kaito, sun, TriBorgg1      |
|            7 |     4915 | 2025-11-06 | FAVBET Team                               | L   | 0.192      | -            | -                | -                | -         |    -4.22 | AquaRS, F0R3VER, lasfas, ProbLeM, TriBorgg1 |
|            6 |     5179 | 2025-10-27 | 33                                        | L   | 0.127      | -            | -                | -                | -         |    -0.65 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|            5 |     5250 | 2025-10-26 | Nexus Gaming                              | L   | 0.118      | -            | -                | -                | -         |    -1.86 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|            4 |     5279 | 2025-10-25 | Tung Tung Sahur                           | L   | 0.114      | -            | -                | -                | -         |    -2.93 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            3 |     5343 | 2025-10-24 | Home                                      | L   | 0.107      | -            | -                | -                | -         |    -3.09 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            2 |     5385 | 2025-10-23 | Fire Flux Esports                         | W   | 0.101      | -            | -                | -                | -         |     0.35 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |
|            1 |     5428 | 2025-10-22 | Lavked                                    | L   | 0.093      | -            | -                | -                | -         |    -2.38 | AquaRS, F0R3VER, lasfas, TriBorgg1, turbo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,413.54)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-06 |      0.995 | $1,000.00      | $995.10         |
| 2025-12-10 |      0.418 | $1,000.00      | $418.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
