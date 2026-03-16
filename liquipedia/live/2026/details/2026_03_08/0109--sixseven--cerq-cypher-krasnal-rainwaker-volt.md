### Roster Details<br />
Team Name: SIXSEVEN<br />
Roster: CeRq, CYPHER, kRaSnaL, Rainwaker, volt<br />
Global Rank: [109](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [83]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  935.0<br />
<br />
Final Rank Value (935.0) = Starting Rank Value (825.7) + Head To Head Adjustments (109.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.369[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.138[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 825.7
- 400 + ( ( 0.222 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 825.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.390
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           69 |     1411 | 2026-01-29 | FAVBET Team                               | L   | 0.944      | -            | -                | -                | -         |   -10.90 | CeRq, CYPHER, hampus, pr1metapz, volt  |
|           68 |     1448 | 2026-01-27 | Metizport                                 | L   | 0.932      | -            | -                | -                | -         |   -10.68 | CeRq, CYPHER, hampus, pr1metapz, volt  |
|           67 |     1478 | 2026-01-26 | Magic (Russian team)                      | L   | 0.923      | -            | -                | -                | -         |    -6.05 | CeRq, CYPHER, hampus, pr1metapz, volt  |
|           66 |     2198 | 2025-12-14 | Magic (Russian team)                      | L   | 0.637      | -            | -                | -                | -         |    -5.10 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           65 |     2209 | 2025-12-13 | CYBERSHOKE Esports                        | W   | 0.631      | 0.435        | 0.043 (0.012)    | 0.676 (0.185)    | 0 (0.000) |    15.95 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           64 |     2227 | 2025-12-12 | OG                                        | W   | 0.624      | 0.435        | 0.046 (0.012)    | -                | 0 (0.000) |     9.10 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           63 |     2246 | 2025-12-10 | Sashi Esport                              | W   | 0.612      | 0.435        | 0.015 (0.004)    | 0.569 (0.151)    | 0 (0.000) |    15.26 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           62 |     2282 | 2025-12-08 | Partizan Esports                          | W   | 0.598      | -            | -                | -                | 0 (0.000) |     3.94 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           61 |     2299 | 2025-12-07 | Johnny Speeds                             | L   | 0.591      | -            | -                | -                | -         |    -3.67 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           60 |     2302 | 2025-12-07 | Johnny Speeds                             | L   | 0.590      | -            | -                | -                | -         |    -3.79 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           59 |     2318 | 2025-12-06 | ECSTATIC                                  | L   | 0.585      | -            | -                | -                | -         |    -1.38 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           58 |     2367 | 2025-12-04 | BASEMENT BOYS                             | W   | 0.573      | -            | -                | -                | 0 (0.000) |     3.50 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           57 |     2389 | 2025-12-03 | SPARTA Esports                            | W   | 0.565      | 0.371        | -                | 0.550 (0.115)    | 0 (0.000) |     9.37 | CeRq, CYPHER, kRaSnaL, Rainwaker, volt |
|           56 |     2410 | 2025-12-02 | Sangal Esports                            | L   | 0.557      | -            | -                | -                | -         |    -6.32 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           55 |     2485 | 2025-11-29 | Monte                                     | L   | 0.538      | -            | -                | -                | -         |    -1.42 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           54 |     2623 | 2025-11-23 | AaB esport                                | W   | 0.498      | -            | -                | -                | -         |     3.53 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           53 |     2637 | 2025-11-22 | FAVBET Team                               | L   | 0.493      | -            | -                | -                | -         |    -6.33 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           52 |     2675 | 2025-11-21 | HEROIC                                    | L   | 0.486      | -            | -                | -                | -         |    -0.72 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           51 |     2684 | 2025-11-21 | FORZE Reload                              | L   | 0.485      | -            | -                | -                | -         |   -13.07 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           50 |     2724 | 2025-11-20 | Copenhagen Wolves (American organization) | W   | 0.478      | -            | -                | -                | -         |     4.11 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           49 |     2771 | 2025-11-19 | Ex-Fingers Crossed                        | W   | 0.471      | 0.435        | 0.046 (0.009)    | 0.535 (0.109)    | -         |     7.88 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           48 |     2776 | 2025-11-18 | 33                                        | W   | 0.466      | 0.435        | 0.031 (0.006)    | 0.780 (0.158)    | -         |    10.20 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           47 |     2786 | 2025-11-17 | Ex-RUBY                                   | W   | 0.458      | 0.435        | 0.031 (0.006)    | 1.000 (0.199)    | -         |     8.20 | CeRq, CYPHER, hampus, Rainwaker, volt  |
|           46 |     2819 | 2025-11-15 | Betclic Apogee Esports                    | W   | 0.446      | 0.435        | 0.015 (0.003)    | -                | -         |    11.78 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           45 |     2823 | 2025-11-15 | Leo Team                                  | L   | 0.445      | -            | -                | -                | -         |    -7.54 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           44 |     2863 | 2025-11-13 | SPARTA Esports                            | W   | 0.433      | 0.435        | -                | 0.550 (0.103)    | -         |     5.98 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           43 |     2875 | 2025-11-13 | Monte                                     | L   | 0.431      | -            | -                | -                | -         |    -0.99 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           42 |     2894 | 2025-11-12 | NOVAQ                                     | W   | 0.426      | 0.384        | 0.034 (0.006)    | -                | -         |     9.88 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           41 |     2900 | 2025-11-12 | CYBERSHOKE Esports                        | L   | 0.425      | -            | -                | -                | -         |    -2.13 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           40 |     2909 | 2025-11-12 | Nuclear TigeRES                           | L   | 0.424      | -            | -                | -                | -         |    -0.76 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           39 |     2930 | 2025-11-11 | K27                                       | L   | 0.419      | -            | -                | -                | -         |    -0.69 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           38 |     2932 | 2025-11-11 | TDK                                       | W   | 0.418      | 0.384        | 0.073 (0.012)    | 0.851 (0.137)    | -         |     9.98 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           37 |     2955 | 2025-11-10 | FORZE Reload                              | W   | 0.413      | -            | -                | -                | -         |     5.39 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           36 |     3040 | 2025-11-08 | Magic (Russian team)                      | L   | 0.398      | -            | -                | -                | -         |    -2.80 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           35 |     3130 | 2025-11-07 | ECSTATIC                                  | W   | 0.391      | 0.435        | 0.178 (0.030)    | 0.782 (0.133)    | -         |    11.68 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           34 |     3199 | 2025-11-05 | SPARTA Esports                            | W   | 0.378      | 0.435        | -                | 0.550 (0.090)    | -         |     5.73 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           33 |     3305 | 2025-11-01 | ALLINNERS                                 | W   | 0.352      | -            | -                | -                | -         |     3.22 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           32 |     3352 | 2025-10-30 | The Last Resort                           | W   | 0.338      | -            | -                | -                | -         |     4.40 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           31 |     3378 | 2025-10-29 | Team Nemesis                              | L   | 0.331      | -            | -                | -                | -         |    -0.82 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           30 |     3395 | 2025-10-28 | SINNERS Esports                           | L   | 0.326      | -            | -                | -                | -         |    -0.52 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           29 |     3485 | 2025-10-26 | Nexus Gaming                              | W   | 0.313      | -            | -                | -                | -         |     7.53 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           28 |     3600 | 2025-10-24 | The Last Resort                           | W   | 0.299      | -            | -                | -                | -         |     4.36 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           27 |     3765 | 2025-10-17 | Nuclear TigeRES                           | L   | 0.252      | -            | -                | -                | -         |    -0.28 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           26 |     3841 | 2025-10-15 | ARCRED                                    | W   | 0.237      | -            | -                | -                | -         |     6.95 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           25 |     3893 | 2025-10-13 | Oramond                                   | L   | 0.225      | -            | -                | -                | -         |    -2.33 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           24 |     3994 | 2025-10-09 | Leo Team                                  | W   | 0.199      | -            | -                | -                | -         |     3.30 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           23 |     4073 | 2025-10-08 | Nemiga Gaming                             | L   | 0.190      | -            | -                | -                | -         |    -0.23 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           22 |     4150 | 2025-10-06 | VP.Prodigy                                | W   | 0.179      | -            | -                | -                | -         |     3.98 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           21 |     4161 | 2025-10-06 | KONO.ECF                                  | W   | 0.178      | -            | -                | -                | -         |     2.34 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           20 |     4300 | 2025-10-03 | Sangal Esports                            | W   | 0.159      | -            | -                | -                | -         |     3.48 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           19 |     4373 | 2025-10-01 | SPARTA Esports                            | W   | 0.146      | -            | -                | -                | -         |     2.32 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           18 |     4442 | 2025-09-29 | Friendly Campers                          | L   | 0.133      | -            | -                | -                | -         |    -0.71 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           17 |     4457 | 2025-09-29 | Copenhagen Wolves (American organization) | L   | 0.131      | -            | -                | -                | -         |    -2.59 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           16 |     4508 | 2025-09-28 | Team Liquid                               | L   | 0.123      | -            | -                | -                | -         |    -0.25 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           15 |     4531 | 2025-09-27 | Friendly Campers                          | W   | 0.119      | -            | -                | -                | 1 (0.119) |     3.12 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           14 |     4546 | 2025-09-27 | Betclic Apogee Esports                    | W   | 0.118      | -            | -                | -                | 1 (0.118) |     0.96 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           13 |     4557 | 2025-09-27 | Team Liquid                               | L   | 0.117      | -            | -                | -                | -         |    -0.23 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           12 |     4572 | 2025-09-26 | KONO.ECF                                  | W   | 0.113      | -            | -                | -                | 1 (0.113) |     1.50 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           11 |     4596 | 2025-09-26 | BIG                                       | L   | 0.111      | -            | -                | -                | -         |    -1.50 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|           10 |     4611 | 2025-09-26 | AaB esport                                | W   | 0.110      | -            | -                | -                | 1 (0.110) |     1.06 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            9 |     4662 | 2025-09-24 | ARCRED                                    | W   | 0.099      | -            | -                | -                | -         |     2.96 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            8 |     4703 | 2025-09-22 | Team Nemesis                              | L   | 0.085      | -            | -                | -                | -         |    -0.16 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            7 |     4708 | 2025-09-22 | KHAN                                      | W   | 0.084      | -            | -                | -                | -         |     0.45 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            6 |     4753 | 2025-09-20 | FORZE Reload                              | W   | 0.072      | -            | -                | -                | -         |     1.07 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            5 |     4764 | 2025-09-20 | RUBY                                      | L   | 0.070      | -            | -                | -                | -         |    -1.31 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            4 |     4861 | 2025-09-17 | AMKAL ESPORTS                             | W   | 0.051      | -            | -                | -                | -         |     0.51 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            3 |     4903 | 2025-09-15 | SENZA Esports                             | W   | 0.039      | -            | -                | -                | -         |     0.16 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            2 |     4985 | 2025-09-13 | AMKAL ESPORTS                             | L   | 0.026      | -            | -                | -                | -         |    -0.55 | CeRq, hampus, Rainwaker, REDSTAR, volt |
|            1 |     5158 | 2025-09-10 | SENZA Esports                             | W   | 0.004      | -            | -                | -                | -         |     0.02 | CeRq, hampus, Rainwaker, REDSTAR, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,059.31)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-14 |      0.639 | $5,000.00      | $3,195.95       |
| 2025-11-23 |      0.499 | $500.00        | $249.46         |
| 2025-11-16 |      0.453 | $750.00        | $339.39         |
| 2025-11-13 |      0.432 | $3,000.00      | $1,295.69       |
| 2025-11-09 |      0.406 | $2,000.00      | $811.44         |
| 2025-10-19 |      0.266 | $500.00        | $132.93         |
| 2025-09-28 |      0.125 | $275.00        | $34.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
