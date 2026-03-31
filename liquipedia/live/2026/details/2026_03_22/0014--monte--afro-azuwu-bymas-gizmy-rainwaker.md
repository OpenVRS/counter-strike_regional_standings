### Roster Details<br />
Team Name: Monte<br />
Roster: afro, AZUWU, Bymas, Gizmy, Rainwaker<br />
Global Rank: [14](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [12]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  1501.0<br />
<br />
Final Rank Value (1501.0) = Starting Rank Value (1448.3) + Head To Head Adjustments (52.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.533[<sup>1</sup>](#table2)
- Bounty Collected: 0.565[<sup>2</sup>](#table1)
- Opponent Network: 0.242[<sup>2</sup>](#table1)
- LAN Wins: 0.760[<sup>2</sup>](#table1)

The average of these factors is 0.525<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1448.3
- 400 + ( ( 0.525 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1448.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.458
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      502 | 2026-03-08 | FaZe Clan                                 | L   | 1.000      | -            | -                | -                | -         |   -17.28 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           49 |      533 | 2026-03-07 | Legacy                                    | L   | 1.000      | -            | -                | -                | -         |   -19.68 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           48 |      584 | 2026-03-06 | Natus Vincere                             | L   | 1.000      | -            | -                | -                | -         |    -5.57 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           47 |      683 | 2026-03-04 | PARIVISION                                | W   | 1.000      | 0.613        | 1.000 (0.613)    | 0.530 (0.325)    | -         |    26.81 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           46 |      735 | 2026-03-03 | HEROIC                                    | W   | 1.000      | 0.613        | 0.303 (0.185)    | 0.442 (0.271)    | -         |    13.93 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           45 |      777 | 2026-03-02 | NRG                                       | W   | 1.000      | 0.613        | 0.058 (0.036)    | 0.359 (0.220)    | -         |    11.30 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           44 |      814 | 2026-03-01 | Astralis                                  | L   | 1.000      | -            | -                | -                | -         |    -7.55 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           43 |     1203 | 2026-02-21 | Fnatic                                    | L   | 1.000      | -            | -                | -                | -         |   -25.93 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           42 |     1256 | 2026-02-20 | Ninjas in Pyjamas                         | W   | 0.998      | 0.341        | 0.081 (0.028)    | 0.560 (0.191)    | 1 (0.998) |    11.66 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           41 |     1265 | 2026-02-20 | BESTIA                                    | W   | 0.998      | 0.341        | -                | 0.466 (0.159)    | 1 (0.998) |     7.10 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           40 |     1605 | 2026-02-14 | Illwill                                   | W   | 0.957      | 0.334        | 0.079 (0.025)    | 1.000 (0.320)    | 1 (0.957) |    14.03 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           39 |     1620 | 2026-02-14 | ECSTATIC                                  | W   | 0.956      | 0.334        | 0.121 (0.039)    | 0.743 (0.237)    | 1 (0.956) |    10.78 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           38 |     1667 | 2026-02-13 | Illwill                                   | W   | 0.950      | 0.334        | 0.079 (0.025)    | 1.000 (0.317)    | 1 (0.950) |    15.08 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           37 |     1670 | 2026-02-13 | Tricked Esport                            | W   | 0.949      | 0.334        | -                | 0.409 (0.130)    | 1 (0.949) |     6.77 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           36 |     2479 | 2026-01-17 | Team Falcons                              | L   | 0.772      | -            | -                | -                | -         |    -4.15 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           35 |     2623 | 2026-01-14 | Natus Vincere                             | W   | 0.751      | 0.895        | 1.000 (0.672)    | 0.376 (0.253)    | -         |    21.51 | afro, AZUWU, Bymas, Gizmy, Rainwaker |
|           34 |     3172 | 2025-11-30 | FUT Esports                               | W   | 0.450      | 0.333        | 0.414 (0.062)    | -                | 1 (0.450) |    10.70 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           33 |     3178 | 2025-11-30 | OG                                        | W   | 0.449      | -            | -                | -                | 1 (0.449) |     2.43 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           32 |     3200 | 2025-11-29 | GenOne                                    | W   | 0.445      | -            | -                | -                | 1 (0.445) |     1.13 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           31 |     3216 | 2025-11-29 | SIXSEVEN                                  | W   | 0.444      | -            | -                | -                | 1 (0.444) |     0.58 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           30 |     3534 | 2025-11-16 | SINNERS Esports                           | L   | 0.358      | -            | -                | -                | -         |    -6.14 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           29 |     3558 | 2025-11-15 | KOLESIE                                   | W   | 0.352      | -            | -                | -                | -         |     3.57 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           28 |     3602 | 2025-11-13 | 33                                        | W   | 0.338      | -            | -                | -                | -         |     2.75 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           27 |     3606 | 2025-11-13 | Nuclear TigeRES                           | L   | 0.338      | -            | -                | -                | -         |    -5.71 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           26 |     3612 | 2025-11-13 | SIXSEVEN                                  | W   | 0.337      | -            | -                | -                | -         |     0.38 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           25 |     3635 | 2025-11-12 | Nemiga Gaming                             | W   | 0.332      | 0.384        | 0.137 (0.017)    | -                | -         |     5.85 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           24 |     3651 | 2025-11-12 | CYBERSHOKE Esports                        | W   | 0.329      | -            | -                | -                | -         |     2.34 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           23 |     3667 | 2025-11-11 | SINNERS Esports                           | L   | 0.325      | -            | -                | -                | -         |    -5.67 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           22 |     3703 | 2025-11-10 | Oramond                                   | W   | 0.317      | -            | -                | -                | -         |     0.74 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           21 |     3908 | 2025-11-06 | Nuclear TigeRES                           | L   | 0.292      | -            | -                | -                | -         |    -4.97 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           20 |     4104 | 2025-10-30 | CYBERSHOKE Esports                        | L   | 0.243      | -            | -                | -                | -         |    -6.07 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           19 |     4142 | 2025-10-28 | K27                                       | W   | 0.232      | -            | -                | -                | -         |     4.55 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           18 |     4233 | 2025-10-26 | JiJieHao                                  | W   | 0.218      | -            | -                | -                | -         |     0.10 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           17 |     4354 | 2025-10-24 | Phantom Esports                           | W   | 0.205      | -            | -                | -                | -         |     0.08 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           16 |     4599 | 2025-10-15 | Partizan Esports                          | L   | 0.145      | -            | -                | -                | -         |    -4.49 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           15 |     4632 | 2025-10-14 | SINNERS Esports                           | W   | 0.138      | -            | -                | -                | -         |     1.85 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           14 |     4727 | 2025-10-10 | FAVBET Team                               | W   | 0.111      | -            | -                | -                | -         |     0.25 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           13 |     4733 | 2025-10-10 | Inner Circle Esports                      | L   | 0.111      | -            | -                | -                | -         |    -3.41 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           12 |     4743 | 2025-10-10 | Betera Esports                            | L   | 0.109      | -            | -                | -                | -         |    -3.36 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           11 |     4772 | 2025-10-09 | CYBERSHOKE Esports                        | W   | 0.105      | -            | -                | -                | -         |     0.68 | afro, AZUWU, Bymas, Gizmy, ryu       |
|           10 |     4817 | 2025-10-08 | Sangal Esports                            | L   | 0.098      | -            | -                | -                | -         |    -2.98 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            9 |     4879 | 2025-10-07 | Sashi Esport                              | W   | 0.091      | -            | -                | -                | -         |     0.96 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            8 |     4927 | 2025-10-06 | The Glecs                                 | W   | 0.085      | -            | -                | -                | -         |     0.01 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            7 |     5209 | 2025-09-30 | FAVBET Team                               | W   | 0.043      | -            | -                | -                | -         |     0.09 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            6 |     5249 | 2025-09-29 | Copenhagen Wolves (American organization) | L   | 0.036      | -            | -                | -                | -         |    -1.11 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            5 |     5293 | 2025-09-28 | Partizan Esports                          | L   | 0.029      | -            | -                | -                | -         |    -0.89 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            4 |     5318 | 2025-09-27 | KOLESIE                                   | W   | 0.025      | -            | -                | -                | -         |     0.24 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            3 |     5336 | 2025-09-27 | Fnatic                                    | L   | 0.023      | -            | -                | -                | -         |    -0.58 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            2 |     5357 | 2025-09-27 | BIG                                       | W   | 0.022      | -            | -                | -                | -         |     0.02 | afro, AZUWU, Bymas, Gizmy, ryu       |
|            1 |     5471 | 2025-09-24 | Sangal Esports                            | W   | 0.003      | -            | -                | -                | -         |     0.00 | afro, AZUWU, Bymas, Gizmy, ryu       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,966.47)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-10 |      1.000 | $8,500.00      | $8,500.00       |
| 2026-02-14 |      0.957 | $7,626.91      | $7,299.94       |
| 2026-01-18 |      0.778 | $41,250.00     | $32,107.20      |
| 2025-11-30 |      0.450 | $5,000.00      | $2,252.43       |
| 2025-11-16 |      0.358 | $5,000.00      | $1,791.67       |
| 2025-11-13 |      0.338 | $5,000.00      | $1,688.54       |
| 2025-10-20 |      0.178 | $750.00        | $133.54         |
| 2025-10-12 |      0.123 | $1,500.00      | $184.58         |
| 2025-09-28 |      0.031 | $275.00        | $8.56           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
