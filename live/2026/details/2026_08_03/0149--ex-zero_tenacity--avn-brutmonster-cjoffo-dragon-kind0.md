### Roster Details<br />
Team Name: ex-Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, Dragon, Kind0<br />
Global Rank: [149](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [108]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  859.6<br />
<br />
Final Rank Value (859.6) = Starting Rank Value (789.7) + Head To Head Adjustments (69.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.300[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.7
- 400 + ( ( 0.201 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 789.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           98 |     1139 | 2026-06-08 | brazylijski luz      | L   | 0.826      | -            | -                | -                | -         |   -17.87 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           97 |     1176 | 2026-06-06 | BIG Academy          | W   | 0.814      | -            | -                | -                | 0 (0.000) |     6.74 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           96 |     1217 | 2026-06-05 | aAa                  | W   | 0.807      | -            | -                | -                | 0 (0.000) |     8.96 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           95 |     1228 | 2026-06-05 | Johnny Speeds        | L   | 0.805      | -            | -                | -                | -         |    -6.35 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           94 |     1272 | 2026-06-03 | illwill              | W   | 0.792      | 0.384        | 0.015 (0.004)    | -                | 0 (0.000) |    14.01 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           93 |     1293 | 2026-06-02 | Rebels               | W   | 0.786      | 0.384        | -                | 0.522 (0.158)    | 0 (0.000) |    17.31 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           92 |     1306 | 2026-06-01 | Black Phoenix        | L   | 0.780      | -            | -                | -                | -         |    -8.29 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           91 |     1369 | 2026-05-30 | ex-RUBY              | L   | 0.766      | -            | -                | -                | -         |    -3.88 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           90 |     1414 | 2026-05-29 | aAa                  | L   | 0.759      | -            | -                | -                | -         |   -15.30 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           89 |     1442 | 2026-05-28 | KOLESIE              | W   | 0.754      | 0.384        | 0.024 (0.007)    | 0.893 (0.259)    | 0 (0.000) |    18.26 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           88 |     1477 | 2026-05-28 | INOX Division        | L   | 0.751      | -            | -                | -                | -         |    -6.20 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           87 |     1496 | 2026-05-27 | los kogutos          | L   | 0.747      | -            | -                | -                | -         |   -11.48 | aVN, Cjoffo, Dragon, Kind0, RiiL3          |
|           86 |     1530 | 2026-05-26 | Just Players         | L   | 0.740      | -            | -                | -                | -         |    -7.26 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           85 |     1563 | 2026-05-25 | ASTRAL               | L   | 0.734      | -            | -                | -                | -         |    -5.29 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           84 |     1571 | 2026-05-25 | Leo                  | W   | 0.733      | 0.384        | -                | 0.535 (0.151)    | 0 (0.000) |    14.72 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           83 |     1583 | 2026-05-25 | los kogutos          | W   | 0.732      | 0.396        | 0.014 (0.004)    | 0.673 (0.195)    | 0 (0.000) |    11.42 | aVN, brutmonster, Cjoffo, Dragon, Kind0    |
|           82 |     1626 | 2026-05-24 | CYBERSHOKE Prospects | W   | 0.725      | 0.344        | 0.013 (0.003)    | 0.722 (0.180)    | 0 (0.000) |    19.08 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           81 |     1660 | 2026-05-23 | Julie&Cie            | W   | 0.720      | -            | -                | -                | 0 (0.000) |     1.81 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           80 |     1672 | 2026-05-23 | ALGO                 | W   | 0.719      | -            | -                | -                | -         |     9.94 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           79 |     1707 | 2026-05-22 | SAW Youngsters       | L   | 0.713      | -            | -                | -                | -         |   -13.09 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           78 |     1767 | 2026-05-21 | Subtop De France     | W   | 0.705      | -            | -                | -                | -         |     7.66 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           77 |     1802 | 2026-05-20 | Lavked               | L   | 0.699      | -            | -                | -                | -         |    -5.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           76 |     1852 | 2026-05-18 | fnatic               | L   | 0.685      | -            | -                | -                | -         |    -4.18 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           75 |     1869 | 2026-05-17 | GenOne               | L   | 0.680      | -            | -                | -                | -         |    -9.19 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           74 |     1891 | 2026-05-16 | Young Ninjas         | W   | 0.674      | 0.344        | -                | 0.583 (0.135)    | -         |    11.02 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           73 |     1922 | 2026-05-15 | Just Players         | L   | 0.667      | -            | -                | -                | -         |    -6.10 | andr1x, aVN, brutmonster, Cjoffo, Kind0    |
|           72 |     1950 | 2026-05-14 | Young Ninjas         | W   | 0.660      | 0.344        | -                | 0.583 (0.133)    | -         |    11.02 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           71 |     2170 | 2026-05-07 | Nuclear TigeRES      | L   | 0.614      | -            | -                | -                | -         |    -2.01 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           70 |     2196 | 2026-05-06 | benched gods         | L   | 0.606      | -            | -                | -                | -         |   -12.88 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           69 |     2206 | 2026-05-05 | INOX Division        | L   | 0.600      | -            | -                | -                | -         |    -5.86 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           68 |     2269 | 2026-05-03 | Lilmix               | W   | 0.584      | -            | -                | -                | -         |     8.05 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           67 |     2299 | 2026-05-02 | ASTRAL               | W   | 0.579      | 0.435        | 0.014 (0.004)    | 1.000 (0.252)    | -         |    15.77 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           66 |     2358 | 2026-05-01 | Lavked               | W   | 0.572      | 0.435        | -                | 0.889 (0.221)    | -         |    12.45 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           65 |     2479 | 2026-04-28 | CYBERSHOKE           | W   | 0.553      | 0.435        | 0.029 (0.007)    | 0.880 (0.211)    | -         |    15.36 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           64 |     2697 | 2026-04-24 | brazylijski luz      | L   | 0.527      | -            | -                | -                | -         |   -11.06 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           63 |     2755 | 2026-04-23 | The Last Resort      | L   | 0.519      | -            | -                | -                | -         |    -4.36 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           62 |     2792 | 2026-04-22 | Endless Journey      | W   | 0.512      | -            | -                | -                | -         |     4.22 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           61 |     3182 | 2026-04-05 | BIG                  | L   | 0.399      | -            | -                | -                | -         |    -0.22 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           60 |     3204 | 2026-04-05 | Mai Tai              | L   | 0.397      | -            | -                | -                | -         |    -6.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           59 |     3322 | 2026-04-03 | illwill              | L   | 0.387      | -            | -                | -                | -         |    -4.95 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           58 |     3335 | 2026-04-03 | Deorum               | W   | 0.386      | -            | -                | -                | 1 (0.386) |     1.06 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           57 |     3344 | 2026-04-03 | STATE                | L   | 0.385      | -            | -                | -                | -         |    -1.76 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           56 |     3417 | 2026-04-02 | ex-RUSTEC            | L   | 0.380      | -            | -                | -                | -         |    -5.12 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           55 |     3540 | 2026-04-01 | Voracity             | W   | 0.372      | -            | -                | -                | -         |     3.26 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           54 |     3674 | 2026-03-30 | Black Phoenix        | L   | 0.361      | -            | -                | -                | -         |    -4.07 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           53 |     3715 | 2026-03-30 | Mai Tai              | W   | 0.358      | -            | -                | -                | -         |     5.01 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           52 |     3737 | 2026-03-29 | ReThink              | W   | 0.354      | -            | -                | -                | -         |     6.51 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           51 |     3870 | 2026-03-28 | Bebop                | L   | 0.346      | -            | -                | -                | -         |    -5.24 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           50 |     4050 | 2026-03-24 | MASONIC              | W   | 0.320      | -            | -                | -                | -         |     7.62 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           49 |     4148 | 2026-03-23 | rottweilers          | W   | 0.312      | -            | -                | -                | -         |     1.90 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           48 |     4259 | 2026-03-21 | Hashiras             | L   | 0.298      | -            | -                | -                | -         |    -5.70 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           47 |     4284 | 2026-03-20 | HAVU                 | L   | 0.295      | -            | -                | -                | -         |    -3.80 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           46 |     4298 | 2026-03-20 | home                 | W   | 0.294      | -            | -                | -                | -         |     1.31 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           45 |     4350 | 2026-03-19 | SINQU                | W   | 0.286      | -            | -                | -                | -         |     1.43 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           44 |     4356 | 2026-03-19 | MASONIC              | W   | 0.286      | -            | -                | -                | -         |     6.89 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           43 |     4377 | 2026-03-18 | BIG                  | L   | 0.281      | -            | -                | -                | -         |    -0.14 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           42 |     4383 | 2026-03-18 | Clutchain fe         | W   | 0.280      | -            | -                | -                | -         |     3.08 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           41 |     4384 | 2026-03-18 | yngods               | L   | 0.280      | -            | -                | -                | -         |    -6.38 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           40 |     4432 | 2026-03-17 | Nemesis              | L   | 0.273      | -            | -                | -                | -         |    -0.46 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           39 |     4470 | 2026-03-16 | Omega                | W   | 0.267      | 0.435        | 0.030 (0.004)    | -                | -         |     7.80 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           38 |     4480 | 2026-03-16 | HEROIC Academy       | W   | 0.267      | -            | -                | -                | -         |     3.92 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           37 |     4529 | 2026-03-15 | ex-RUBY              | L   | 0.259      | -            | -                | -                | -         |    -4.00 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           36 |     4616 | 2026-03-13 | Sangal               | W   | 0.246      | -            | -                | -                | -         |     4.29 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           35 |     4714 | 2026-03-11 | HOTU                 | L   | 0.233      | -            | -                | -                | -         |    -4.42 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           34 |     4752 | 2026-03-10 | HAVU                 | W   | 0.226      | -            | -                | -                | -         |     4.50 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           33 |     4754 | 2026-03-10 | HEROIC Academy       | L   | 0.226      | -            | -                | -                | -         |    -3.85 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           32 |     4794 | 2026-03-09 | megoshort            | L   | 0.221      | -            | -                | -                | -         |    -4.62 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           31 |     4799 | 2026-03-09 | Bulgaria             | W   | 0.220      | 0.435        | 0.069 (0.007)    | -                | -         |     6.69 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           30 |     4816 | 2026-03-09 | FAVBET               | L   | 0.219      | -            | -                | -                | -         |    -3.83 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           29 |     4922 | 2026-03-07 | HAVU                 | W   | 0.208      | -            | -                | -                | -         |     4.19 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           28 |     4936 | 2026-03-07 | Butterfly            | W   | 0.207      | -            | -                | -                | -         |     5.62 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           27 |     4945 | 2026-03-07 | Omega                | W   | 0.206      | 0.384        | 0.030 (0.002)    | -                | -         |     6.10 | andr1x, aVN, brutmonster, Cjoffo, Kind0    |
|           26 |     4964 | 2026-03-06 | BASEMENT BOYS        | W   | 0.201      | -            | -                | -                | -         |     5.64 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           25 |     5007 | 2026-03-05 | NOVAQ                | L   | 0.194      | -            | -                | -                | -         |    -0.81 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           24 |     5029 | 2026-03-05 | Leo                  | L   | 0.193      | -            | -                | -                | -         |    -3.64 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           23 |     5040 | 2026-03-05 | MASONIC              | W   | 0.192      | -            | -                | -                | -         |     4.99 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           22 |     5098 | 2026-03-04 | PsychoFace           | L   | 0.185      | -            | -                | -                | -         |    -0.92 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           21 |     5099 | 2026-03-04 | FAVBET               | L   | 0.185      | -            | -                | -                | -         |    -3.15 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           20 |     5124 | 2026-03-03 | PsychoFace           | L   | 0.180      | -            | -                | -                | -         |    -0.92 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           19 |     5143 | 2026-03-03 | WW                   | W   | 0.179      | 0.384        | 0.056 (0.004)    | -                | -         |     5.27 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           18 |     5206 | 2026-03-01 | STATE                | W   | 0.167      | -            | -                | -                | -         |     4.74 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           17 |     5222 | 2026-03-01 | ASTRAL               | W   | 0.166      | -            | -                | -                | -         |     4.88 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           16 |     5435 | 2026-02-25 | ex-RUBY              | L   | 0.139      | -            | -                | -                | -         |    -2.21 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           15 |     5471 | 2026-02-24 | ARCRED               | L   | 0.133      | -            | -                | -                | -         |    -0.45 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           14 |     5509 | 2026-02-23 | Fuzos                | L   | 0.126      | -            | -                | -                | -         |    -2.74 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           13 |     5637 | 2026-02-21 | Butterfly            | L   | 0.113      | -            | -                | -                | -         |    -0.43 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           12 |     5670 | 2026-02-20 | OlyBet               | W   | 0.108      | -            | -                | -                | -         |     1.33 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           11 |     5740 | 2026-02-19 | Just Players         | L   | 0.099      | -            | -                | -                | -         |    -2.14 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|           10 |     5783 | 2026-02-18 | Bushido Wildcats     | W   | 0.093      | -            | -                | -                | -         |     1.38 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            9 |     5833 | 2026-02-17 | SPARTA               | L   | 0.088      | -            | -                | -                | -         |    -0.66 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            8 |     5888 | 2026-02-16 | los kogutos          | L   | 0.080      | -            | -                | -                | -         |    -0.88 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            7 |     5903 | 2026-02-16 | home                 | L   | 0.079      | -            | -                | -                | -         |    -2.06 | aVN, brutmonster, Cjoffo, emi, Kind0       |
|            6 |     5970 | 2026-02-15 | UNiTY                | L   | 0.072      | -            | -                | -                | -         |    -1.46 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            5 |     6004 | 2026-02-14 | ALGO                 | L   | 0.067      | -            | -                | -                | -         |    -1.75 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            4 |     6066 | 2026-02-13 | Hashiras             | L   | 0.060      | -            | -                | -                | -         |    -1.09 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            3 |     6078 | 2026-02-13 | Lazer Cats           | L   | 0.059      | -            | -                | -                | -         |    -0.72 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            2 |     6156 | 2026-02-11 | Bulgaria             | L   | 0.046      | -            | -                | -                | -         |    -0.04 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |
|            1 |     6230 | 2026-02-08 | ASTRAL               | W   | 0.028      | -            | -                | -                | -         |     0.82 | aVN, brutmonster, Cjoffo, KiMaRR, skizzyee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,017.32)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      0.814 | $1,250.00      | $1,017.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
