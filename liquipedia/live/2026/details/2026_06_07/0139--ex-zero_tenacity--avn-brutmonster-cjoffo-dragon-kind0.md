### Roster Details<br />
Team Name: Ex-Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, Dragon, Kind0<br />
Global Rank: [139](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [92]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  908.5<br />
<br />
Final Rank Value (908.5) = Starting Rank Value (850.9) + Head To Head Adjustments (57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.078[<sup>2</sup>](#table1)

The average of these factors is 0.234<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 850.9
- 400 + ( ( 0.234 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 850.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.910
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           96 |       14 | 2026-06-05 | Johnny Speeds           | L   | 1.000      | -            | -                | -                | -         |    -6.63 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           95 |       37 | 2026-06-03 | Illwill                 | W   | 1.000      | 0.384        | 0.023 (0.009)    | -                | 0 (0.000) |    20.93 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           94 |       55 | 2026-06-02 | Rebels Gaming           | W   | 1.000      | 0.384        | 0.011 (0.004)    | 0.720 (0.277)    | 0 (0.000) |    23.09 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           93 |       61 | 2026-06-01 | Ursa                    | L   | 1.000      | -            | -                | -                | -         |    -9.47 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           92 |      126 | 2026-05-30 | Ex-RUBY                 | L   | 1.000      | -            | -                | -                | -         |    -6.82 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           91 |      169 | 2026-05-29 | Against All authority   | L   | 1.000      | -            | -                | -                | -         |   -19.24 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           90 |      196 | 2026-05-28 | KOLESIE                 | W   | 1.000      | 0.384        | 0.031 (0.012)    | 0.707 (0.272)    | 0 (0.000) |    25.19 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           89 |      228 | 2026-05-28 | INOX Division           | L   | 1.000      | -            | -                | -                | -         |    -6.80 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           88 |      253 | 2026-05-27 | TNC Esport              | L   | 1.000      | -            | -                | -                | -         |   -14.75 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           87 |      290 | 2026-05-26 | 2007                    | L   | 1.000      | -            | -                | -                | -         |   -14.62 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           86 |      313 | 2026-05-25 | ASTRAL Esports          | L   | 1.000      | -            | -                | -                | -         |   -12.63 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           85 |      323 | 2026-05-25 | Leo Team                | W   | 1.000      | 0.384        | -                | 0.533 (0.205)    | 0 (0.000) |    14.92 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           84 |      335 | 2026-05-25 | TNC Esport              | W   | 1.000      | 0.396        | 0.021 (0.008)    | 1.000 (0.396)    | 0 (0.000) |    15.05 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           83 |      381 | 2026-05-24 | CYBERSHOKE Prospects    | W   | 1.000      | -            | -                | -                | 0 (0.000) |    20.72 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           82 |      410 | 2026-05-23 | Julie&cie               | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.11 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           81 |      422 | 2026-05-23 | ALGO Esports            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    15.00 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           80 |      461 | 2026-05-22 | SAW                     | L   | 1.000      | -            | -                | -                | -         |   -21.50 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           79 |      533 | 2026-05-21 | Clair Obscur            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.66 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           78 |      554 | 2026-05-20 | Lavked                  | L   | 1.000      | -            | -                | -                | -         |    -6.85 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           77 |      605 | 2026-05-18 | Fnatic                  | L   | 1.000      | -            | -                | -                | -         |    -6.80 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           76 |      623 | 2026-05-17 | GenOne                  | L   | 1.000      | -            | -                | -                | -         |   -13.63 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           75 |      643 | 2026-05-16 | Young Ninjas            | W   | 1.000      | -            | -                | -                | -         |    17.44 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           74 |      673 | 2026-05-15 | 2007                    | L   | 1.000      | -            | -                | -                | -         |   -16.35 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           73 |      702 | 2026-05-14 | Young Ninjas            | W   | 1.000      | -            | -                | -                | -         |    17.68 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           72 |      921 | 2026-05-07 | Nuclear TigeRES         | L   | 0.987      | -            | -                | -                | -         |    -2.90 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           71 |      948 | 2026-05-06 | Benched gods            | L   | 0.979      | -            | -                | -                | -         |   -23.56 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           70 |      959 | 2026-05-05 | INOX Division           | L   | 0.973      | -            | -                | -                | -         |    -7.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           69 |     1005 | 2026-05-03 | Lilmix                  | W   | 0.959      | -            | -                | -                | -         |    10.00 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           68 |     1054 | 2026-05-02 | ASTRAL Esports          | W   | 0.952      | 0.435        | -                | 0.888 (0.367)    | -         |    20.56 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           67 |     1110 | 2026-05-01 | Lavked                  | W   | 0.945      | 0.435        | 0.018 (0.007)    | 0.979 (0.402)    | -         |    22.17 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           66 |     1234 | 2026-04-28 | CYBERSHOKE Esports      | W   | 0.926      | 0.435        | 0.023 (0.009)    | 0.566 (0.228)    | -         |    25.10 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           65 |     1454 | 2026-04-24 | Brazylijski luz         | L   | 0.900      | -            | -                | -                | -         |   -12.77 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           64 |     1510 | 2026-04-23 | The Last Resort         | L   | 0.892      | -            | -                | -                | -         |   -13.05 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           63 |     1541 | 2026-04-22 | Endless Journey         | W   | 0.886      | -            | -                | -                | -         |     6.81 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           62 |     1938 | 2026-04-05 | BIG                     | L   | 0.772      | -            | -                | -                | -         |    -1.00 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           61 |     1954 | 2026-04-05 | Zajezdzacze             | L   | 0.771      | -            | -                | -                | -         |   -18.09 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           60 |     2066 | 2026-04-03 | Illwill                 | L   | 0.760      | -            | -                | -                | -         |    -7.54 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           59 |     2086 | 2026-04-03 | Deorum                  | W   | 0.759      | -            | -                | -                | 1 (0.759) |     1.56 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           58 |     2103 | 2026-04-03 | WOPA Esport             | L   | 0.758      | -            | -                | -                | -         |    -5.45 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           57 |     2171 | 2026-04-02 | RUSTEC                  | L   | 0.754      | -            | -                | -                | -         |   -11.29 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           56 |     2283 | 2026-04-01 | Nigel Mirage            | W   | 0.746      | -            | -                | -                | -         |     1.49 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           55 |     2434 | 2026-03-30 | Ursa                    | L   | 0.734      | -            | -                | -                | -         |    -6.91 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           54 |     2467 | 2026-03-30 | Zajezdzacze             | W   | 0.732      | -            | -                | -                | -         |     4.80 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           53 |     2499 | 2026-03-29 | ReThink                 | W   | 0.727      | -            | -                | -                | -         |     2.40 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           52 |     2624 | 2026-03-28 | Bebop                   | L   | 0.719      | -            | -                | -                | -         |   -11.74 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           51 |     2803 | 2026-03-24 | MASONIC                 | W   | 0.693      | -            | -                | -                | -         |    12.37 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           50 |     2911 | 2026-03-23 | Rottweilers             | W   | 0.685      | -            | -                | -                | -         |     4.05 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           49 |     3015 | 2026-03-21 | Hashiras                | L   | 0.671      | -            | -                | -                | -         |   -12.97 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           48 |     3039 | 2026-03-20 | Home                    | W   | 0.667      | -            | -                | -                | -         |     2.13 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           47 |     3044 | 2026-03-20 | HAVU                    | L   | 0.667      | -            | -                | -                | -         |   -10.49 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           46 |     3102 | 2026-03-19 | SINQU Esports           | W   | 0.659      | -            | -                | -                | -         |     2.45 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           45 |     3109 | 2026-03-19 | MASONIC                 | W   | 0.659      | -            | -                | -                | -         |    11.99 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           44 |     3127 | 2026-03-18 | BIG                     | L   | 0.654      | -            | -                | -                | -         |    -1.03 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           43 |     3137 | 2026-03-18 | Clutchain Female        | W   | 0.654      | -            | -                | -                | -         |     4.36 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           42 |     3142 | 2026-03-18 | Yngods                  | L   | 0.653      | -            | -                | -                | -         |   -15.36 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           41 |     3188 | 2026-03-17 | Team Nemesis            | L   | 0.646      | -            | -                | -                | -         |    -2.44 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           40 |     3221 | 2026-03-16 | OMEGA                   | W   | 0.641      | 0.435        | 0.015 (0.004)    | -                | -         |    14.94 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           39 |     3234 | 2026-03-16 | HEROIC Academy          | W   | 0.639      | -            | -                | -                | -         |    10.16 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           38 |     3285 | 2026-03-15 | Ex-RUBY                 | L   | 0.632      | -            | -                | -                | -         |    -5.10 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           37 |     3377 | 2026-03-13 | Sangal Esports          | W   | 0.619      | -            | -                | -                | -         |    12.43 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           36 |     3466 | 2026-03-11 | HOTU                    | L   | 0.606      | -            | -                | -                | -         |   -11.28 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           35 |     3502 | 2026-03-10 | HEROIC Academy          | L   | 0.600      | -            | -                | -                | -         |    -9.37 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           34 |     3508 | 2026-03-10 | HAVU                    | W   | 0.599      | -            | -                | -                | -         |    10.65 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           33 |     3543 | 2026-03-09 | Megoshort               | L   | 0.594      | -            | -                | -                | -         |    -9.82 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           32 |     3557 | 2026-03-09 | Acend                   | W   | 0.593      | 0.435        | 0.021 (0.005)    | 0.780 (0.201)    | -         |    16.53 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           31 |     3566 | 2026-03-09 | FAVBET Team             | L   | 0.592      | -            | -                | -                | -         |    -7.86 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           30 |     3675 | 2026-03-07 | HAVU                    | W   | 0.581      | -            | -                | -                | -         |    10.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           29 |     3690 | 2026-03-07 | Oxuji Esports           | W   | 0.580      | 0.384        | -                | 0.759 (0.169)    | -         |    15.93 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           28 |     3699 | 2026-03-07 | OMEGA                   | W   | 0.579      | -            | -                | -                | -         |    14.74 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           27 |     3718 | 2026-03-06 | BASEMENT BOYS           | W   | 0.574      | 0.384        | 0.016 (0.004)    | -                | -         |    15.50 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           26 |     3765 | 2026-03-05 | NOVAQ                   | L   | 0.567      | -            | -                | -                | -         |    -6.77 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           25 |     3781 | 2026-03-05 | Leo Team                | L   | 0.566      | -            | -                | -                | -         |    -8.58 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           24 |     3793 | 2026-03-05 | MASONIC                 | W   | 0.566      | -            | -                | -                | -         |    13.04 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           23 |     3829 | 2026-03-04 | PsychoFace              | L   | 0.560      | -            | -                | -                | -         |    -3.87 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           22 |     3853 | 2026-03-04 | FAVBET Team             | L   | 0.558      | -            | -                | -                | -         |    -6.82 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           21 |     3875 | 2026-03-03 | PsychoFace              | L   | 0.553      | -            | -                | -                | -         |    -3.88 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           20 |     3886 | 2026-03-03 | WW TEAM                 | W   | 0.552      | 0.384        | 0.024 (0.005)    | -                | -         |    14.97 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           19 |     3962 | 2026-03-01 | WOPA Esport             | W   | 0.540      | -            | -                | -                | -         |    14.64 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           18 |     3975 | 2026-03-01 | ASTRAL Esports          | W   | 0.539      | 0.435        | -                | 0.888 (0.208)    | -         |    12.79 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           17 |     4187 | 2026-02-25 | Ex-RUBY                 | L   | 0.511      | -            | -                | -                | -         |    -3.95 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           16 |     4228 | 2026-02-24 | ARCRED                  | L   | 0.506      | -            | -                | -                | -         |    -1.68 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           15 |     4267 | 2026-02-23 | FUZOS                   | L   | 0.499      | -            | -                | -                | -         |    -9.17 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           14 |     4392 | 2026-02-21 | Oxuji Esports           | L   | 0.486      | -            | -                | -                | -         |    -1.22 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           13 |     4421 | 2026-02-20 | Hypewrld                | W   | 0.481      | -            | -                | -                | -         |     7.95 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           12 |     4490 | 2026-02-19 | 2007                    | L   | 0.472      | -            | -                | -                | -         |    -7.12 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           11 |     4537 | 2026-02-18 | Bushido Wildcats        | W   | 0.467      | -            | -                | -                | -         |     6.42 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           10 |     4586 | 2026-02-17 | SPARTA Esports          | L   | 0.461      | -            | -                | -                | -         |    -1.76 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            9 |     4643 | 2026-02-16 | TNC Esport              | L   | 0.453      | -            | -                | -                | -         |    -3.62 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            8 |     4654 | 2026-02-16 | Players (European team) | L   | 0.452      | -            | -                | -                | -         |   -11.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            7 |     4714 | 2026-02-15 | UNiTY esports           | L   | 0.446      | -            | -                | -                | -         |    -7.11 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            6 |     4760 | 2026-02-14 | ALGO Esports            | L   | 0.440      | -            | -                | -                | -         |    -9.04 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            5 |     4825 | 2026-02-13 | Hashiras                | L   | 0.433      | -            | -                | -                | -         |    -8.21 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            4 |     4837 | 2026-02-13 | Lazer Cats              | L   | 0.431      | -            | -                | -                | -         |    -6.79 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            3 |     4907 | 2026-02-11 | Acend                   | L   | 0.419      | -            | -                | -                | -         |    -1.21 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            2 |     4980 | 2026-02-08 | ASTRAL Esports          | W   | 0.401      | -            | -                | -                | -         |    10.09 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            1 |     6083 | 2025-12-15 | DragonClaw              | L   | 0.032      | -            | -                | -                | -         |    -0.40 | aVN, brutmonster, Cjoffo, maden, nEMANHA   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      1.000 | $1,250.00      | $1,250.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
