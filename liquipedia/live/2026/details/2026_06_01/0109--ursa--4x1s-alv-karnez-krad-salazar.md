### Roster Details<br />
Team Name: Ursa<br />
Roster: 4X1s, Alv, karnez, Krad, Salazar<br />
Global Rank: [109](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [73]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1026.7<br />
<br />
Final Rank Value (1026.7) = Starting Rank Value (910.6) + Head To Head Adjustments (116.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.374[<sup>2</sup>](#table1)
- Opponent Network: 0.340[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.268<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.6
- 400 + ( ( 0.268 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 910.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.951
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           96 |      141 | 2026-05-28 | FOKUS                 | L   | 1.000      | -            | -                | -                | -         |    -4.20 | 4X1s, Alv, karnez, Krad, Salazar     |
|           95 |      226 | 2026-05-25 | Ex-RUBY               | W   | 1.000      | 0.435        | 0.033 (0.014)    | 0.989 (0.430)    | 0 (0.000) |    21.18 | 4X1s, Alv, karnez, Krad, Salazar     |
|           94 |      349 | 2026-05-22 | ASTRAL Esports        | W   | 1.000      | 0.435        | -                | 0.848 (0.368)    | 0 (0.000) |    14.96 | 4X1s, Alv, karnez, Krad, Salazar     |
|           93 |      359 | 2026-05-22 | TNC Esport            | L   | 1.000      | -            | -                | -                | -         |   -20.81 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           92 |      421 | 2026-05-21 | PsychoFace            | L   | 1.000      | -            | -                | -                | -         |   -13.07 | 4X1s, Alv, karnez, Krad, Salazar     |
|           91 |      439 | 2026-05-20 | DragonClaw            | L   | 1.000      | -            | -                | -                | -         |   -18.39 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           90 |      463 | 2026-05-19 | ALGO Esports          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.40 | 4X1s, Alv, karnez, Krad, Salazar     |
|           89 |      494 | 2026-05-18 | Lazer Cats            | L   | 1.000      | -            | -                | -                | -         |   -21.12 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           88 |      780 | 2026-05-09 | GenOne                | L   | 1.000      | -            | -                | -                | -         |   -22.07 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           87 |      812 | 2026-05-07 | Oxuji Esports         | L   | 1.000      | -            | -                | -                | -         |   -13.45 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           86 |      830 | 2026-05-06 | FAVBET Team           | L   | 1.000      | -            | -                | -                | -         |   -19.11 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           85 |      836 | 2026-05-06 | Oxuji Esports         | L   | 1.000      | -            | -                | -                | -         |   -14.69 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           84 |      866 | 2026-05-04 | MOUZ NXT              | W   | 1.000      | 0.384        | -                | 0.817 (0.314)    | 0 (0.000) |    12.46 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           83 |      875 | 2026-05-04 | HYPERSPIRIT           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.04 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           82 |      909 | 2026-05-03 | HAVU                  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.63 | 4X1s, Alv, karnez, riskyb0b, Salazar |
|           81 |      943 | 2026-05-02 | PsychoFace            | W   | 1.000      | 0.344        | 0.036 (0.012)    | 1.000 (0.344)    | 0 (0.000) |    16.84 | 4X1s, Alv, karnez, robo, Salazar     |
|           80 |     1008 | 2026-05-01 | WOPA Esport           | W   | 0.997      | 0.344        | 0.020 (0.007)    | -                | 0 (0.000) |    14.12 | 4X1s, Alv, karnez, robo, Salazar     |
|           79 |     1125 | 2026-04-28 | Lilmix                | L   | 0.978      | -            | -                | -                | -         |   -25.80 | 4X1s, Alv, karnez, robo, Salazar     |
|           78 |     1174 | 2026-04-27 | BRUTE                 | W   | 0.971      | -            | -                | -                | 0 (0.000) |     5.91 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           77 |     1242 | 2026-04-26 | Walczaki              | L   | 0.964      | -            | -                | -                | -         |   -12.22 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           76 |     1355 | 2026-04-24 | BetBoom Team          | W   | 0.952      | 0.435        | 0.203 (0.084)    | -                | 0 (0.000) |    27.60 | 4X1s, Alv, k0s, karnez, Salazar      |
|           75 |     1436 | 2026-04-22 | GenOne                | W   | 0.937      | 0.435        | -                | 0.936 (0.381)    | -         |     8.00 | 4X1s, Alv, k0s, karnez, Salazar      |
|           74 |     1445 | 2026-04-21 | Bebop                 | W   | 0.930      | 0.435        | -                | 0.845 (0.342)    | -         |    11.31 | 4X1s, Alv, k0s, karnez, Salazar      |
|           73 |     1489 | 2026-04-19 | MOUZ NXT              | L   | 0.917      | -            | -                | -                | -         |   -13.87 | 4X1s, Alv, k0s, karnez, Salazar      |
|           72 |     1527 | 2026-04-16 | Walczaki              | L   | 0.897      | -            | -                | -                | -         |   -11.97 | 4X1s, Alv, k0s, karnez, Salazar      |
|           71 |     1546 | 2026-04-15 | Acend                 | W   | 0.890      | 0.435        | 0.022 (0.009)    | 0.828 (0.320)    | -         |    20.08 | 4X1s, Alv, k0s, karnez, Salazar      |
|           70 |     1602 | 2026-04-12 | Leo Team              | W   | 0.871      | -            | -                | -                | -         |     8.50 | 4X1s, Alv, k0s, karnez, Salazar      |
|           69 |     1628 | 2026-04-11 | ASTRAL Esports        | W   | 0.864      | 0.384        | -                | 0.848 (0.281)    | -         |    12.50 | 4X1s, Alv, k0s, karnez, Salazar      |
|           68 |     1647 | 2026-04-10 | Megoshort             | W   | 0.859      | -            | -                | -                | -         |     6.71 | 4X1s, Alv, k0s, karnez, Salazar      |
|           67 |     1661 | 2026-04-10 | Phantom Esports       | L   | 0.857      | -            | -                | -                | -         |   -10.80 | 4X1s, Alv, k0s, karnez, Salazar      |
|           66 |     1678 | 2026-04-09 | BIG                   | L   | 0.852      | -            | -                | -                | -         |    -2.56 | 4X1s, Alv, k0s, karnez, Salazar      |
|           65 |     1682 | 2026-04-09 | ASTRAL Esports        | L   | 0.851      | -            | -                | -                | -         |   -14.73 | 4X1s, Alv, k0s, karnez, Salazar      |
|           64 |     1742 | 2026-04-07 | Johnny Speeds         | W   | 0.838      | 0.435        | 0.048 (0.017)    | 0.813 (0.296)    | -         |    19.80 | 4X1s, Alv, k0s, karnez, Salazar      |
|           63 |     1974 | 2026-04-03 | Persona Grata         | W   | 0.812      | -            | -                | -                | -         |     6.65 | 4X1s, Alv, k0s, karnez, Salazar      |
|           62 |     2056 | 2026-04-02 | NEW VISION            | L   | 0.806      | -            | -                | -                | -         |   -19.99 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           61 |     2071 | 2026-04-02 | ECSTATIC              | L   | 0.805      | -            | -                | -                | -         |    -9.36 | 4X1s, Alv, k0s, karnez, Salazar      |
|           60 |     2094 | 2026-04-02 | Megoshort             | W   | 0.804      | -            | -                | -                | -         |     6.29 | 4X1s, Alv, k0s, karnez, Salazar      |
|           59 |     2145 | 2026-04-01 | 2007                  | L   | 0.799      | -            | -                | -                | -         |   -19.67 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           58 |     2183 | 2026-04-01 | GenOne                | W   | 0.797      | 0.435        | -                | 0.936 (0.324)    | -         |     6.20 | 4X1s, Alv, k0s, karnez, Salazar      |
|           57 |     2259 | 2026-03-31 | Megoshort             | W   | 0.792      | -            | -                | -                | -         |     6.16 | 4X1s, Alv, k0s, karnez, Salazar      |
|           56 |     2324 | 2026-03-30 | Ex-Zero Tenacity      | W   | 0.786      | -            | -                | -                | -         |     6.00 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           55 |     2355 | 2026-03-30 | OMEGA                 | W   | 0.784      | -            | -                | -                | -         |    10.61 | 4X1s, Alv, k0s, karnez, Salazar      |
|           54 |     2411 | 2026-03-29 | Bebop                 | W   | 0.778      | -            | -                | -                | -         |     8.23 | 4X1s, Alv, k0s, karnez, Salazar      |
|           53 |     2557 | 2026-03-27 | WOPA Esport           | W   | 0.765      | -            | -                | -                | -         |    13.83 | 4X1s, Alv, k0s, karnez, Salazar      |
|           52 |     2632 | 2026-03-25 | Nemiga Gaming         | L   | 0.753      | -            | -                | -                | -         |    -4.05 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           51 |     2645 | 2026-03-25 | Leo Team              | W   | 0.752      | -            | -                | -                | -         |     7.43 | 4X1s, Alv, k0s, karnez, Salazar      |
|           50 |     2651 | 2026-03-25 | Rebels Gaming         | L   | 0.751      | -            | -                | -                | -         |    -8.77 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           49 |     2681 | 2026-03-24 | TDK                   | W   | 0.746      | 0.384        | 0.038 (0.011)    | -                | -         |    17.97 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           48 |     2709 | 2026-03-24 | Rune Eaters Esports   | W   | 0.744      | -            | -                | -                | -         |     9.62 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           47 |     2756 | 2026-03-23 | 1w Team               | L   | 0.739      | -            | -                | -                | -         |    -4.42 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           46 |     2802 | 2026-03-23 | Hypewrld              | W   | 0.737      | -            | -                | -                | -         |     5.41 | 4X1s, Alv, k0s, karnez, Salazar      |
|           45 |     2873 | 2026-03-21 | Against All authority | W   | 0.726      | -            | -                | -                | -         |     8.81 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           44 |     2883 | 2026-03-21 | Ex-RUBY               | L   | 0.725      | -            | -                | -                | -         |    -8.63 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           43 |     2946 | 2026-03-20 | K27                   | L   | 0.718      | -            | -                | -                | -         |    -2.28 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           42 |     2956 | 2026-03-20 | BIG EQUIPA            | W   | 0.718      | -            | -                | -                | -         |     2.19 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           41 |     2973 | 2026-03-19 | TNC Esport            | W   | 0.713      | -            | -                | -                | -         |    10.71 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           40 |     3000 | 2026-03-19 | Bebop                 | W   | 0.711      | -            | -                | -                | -         |     9.98 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           39 |     3068 | 2026-03-17 | Sangal Esports        | W   | 0.699      | -            | -                | -                | -         |    11.27 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           38 |     3075 | 2026-03-17 | ASTRAL Esports        | L   | 0.699      | -            | -                | -                | -         |   -10.35 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           37 |     3093 | 2026-03-17 | ECSTATIC              | W   | 0.697      | 0.435        | 0.040 (0.012)    | -                | -         |    16.93 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           36 |     3114 | 2026-03-16 | BIG Academy           | W   | 0.693      | -            | -                | -                | -         |     4.74 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           35 |     3241 | 2026-03-13 | Brazylijski luz       | W   | 0.673      | -            | -                | -                | -         |    10.17 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           34 |     3273 | 2026-03-13 | Illwill               | L   | 0.670      | -            | -                | -                | -         |    -3.89 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           33 |     3351 | 2026-03-11 | OMEGA                 | W   | 0.659      | -            | -                | -                | -         |    14.18 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           32 |     3400 | 2026-03-10 | Tung Tung Sahur       | W   | 0.651      | -            | -                | -                | -         |     3.54 | 4X1s, Alv, karnez, Salazar, shalfey  |
|           31 |     3457 | 2026-03-09 | ENCE                  | L   | 0.644      | -            | -                | -                | -         |   -11.74 | 4X1s, Alv, karnez, Salazar, shalfey  |
|           30 |     3528 | 2026-03-08 | Hypewrld              | W   | 0.639      | -            | -                | -                | -         |     6.45 | 4X1s, Alv, Jyo, karnez, Salazar      |
|           29 |     3617 | 2026-03-06 | TNC Esport            | W   | 0.625      | -            | -                | -                | -         |    11.81 | 4X1s, Alv, karnez, Salazar, shalfey  |
|           28 |     3717 | 2026-03-04 | Lilmix                | W   | 0.612      | -            | -                | -                | -         |     6.54 | 4X1s, Alv, karnez, Salazar, shalfey  |
|           27 |     3812 | 2026-03-02 | Eternal Fire          | L   | 0.599      | -            | -                | -                | -         |    -3.47 | 4X1s, Alv, karnez, Salazar, shalfey  |
|           26 |     3821 | 2026-03-02 | FORZE Reload          | L   | 0.598      | -            | -                | -                | -         |   -13.82 | 4X1s, Alv, karnez, Salazar, shalfey  |
|           25 |     3907 | 2026-02-28 | TNC Esport            | L   | 0.584      | -            | -                | -                | -         |    -6.84 | 4X1s, Alv, karnez, Salazar, turbo    |
|           24 |     3994 | 2026-02-26 | Dripmen               | W   | 0.573      | -            | -                | -                | -         |     4.33 | 4X1s, Alv, karnez, Salazar, turbo    |
|           23 |     4050 | 2026-02-25 | Rebels Gaming         | W   | 0.566      | -            | -                | -                | -         |    14.26 | 4X1s, Alv, karnez, Salazar, turbo    |
|           22 |     4484 | 2026-02-17 | Oxuji Esports         | L   | 0.512      | -            | -                | -                | -         |    -2.23 | 4X1s, Alv, deeN, Salazar, torox      |
|           21 |     4704 | 2026-02-13 | FUZOS                 | L   | 0.485      | -            | -                | -                | -         |   -11.32 | 4X1s, Alv, deeN, Salazar, torox      |
|           20 |     4754 | 2026-02-12 | HYPERSPIRIT           | L   | 0.479      | -            | -                | -                | -         |    -7.23 | 4X1s, Alv, deeN, Salazar, torox      |
|           19 |     4796 | 2026-02-11 | Clutchain Female      | W   | 0.471      | -            | -                | -                | -         |     2.69 | 4X1s, Alv, deeN, Salazar, torox      |
|           18 |     5181 | 2026-01-29 | Johnny Speeds         | L   | 0.385      | -            | -                | -                | -         |    -1.61 | 4X1s, Alv, deeN, Salazar, torox      |
|           17 |     5223 | 2026-01-27 | 1w Team               | L   | 0.373      | -            | -                | -                | -         |    -1.54 | 4X1s, Alv, deeN, Salazar, torox      |
|           16 |     5272 | 2026-01-25 | AM Gaming             | L   | 0.358      | -            | -                | -                | -         |    -9.24 | 4X1s, Alv, deeN, Salazar, torox      |
|           15 |     5301 | 2026-01-24 | Illwill               | W   | 0.352      | -            | -                | -                | -         |     7.83 | 4X1s, Alv, deeN, Salazar, torox      |
|           14 |     5386 | 2026-01-22 | Gentle Mates          | L   | 0.340      | -            | -                | -                | -         |    -0.79 | 4X1s, Alv, deeN, Salazar, torox      |
|           13 |     5398 | 2026-01-22 | BetBoom Team          | L   | 0.339      | -            | -                | -                | -         |    -0.41 | 4X1s, Alv, deeN, Salazar, torox      |
|           12 |     5428 | 2026-01-21 | EYEBALLERS            | W   | 0.333      | 0.769        | 0.127 (0.033)    | -                | -         |     9.88 | 4X1s, Alv, deeN, Salazar, torox      |
|           11 |     5450 | 2026-01-21 | BC.Game Esports       | W   | 0.332      | 0.769        | 0.048 (0.012)    | -                | -         |     7.36 | 4X1s, Alv, deeN, Salazar, torox      |
|           10 |     5463 | 2026-01-20 | Bebop                 | W   | 0.326      | -            | -                | -                | -         |     3.79 | 4X1s, Alv, deeN, Salazar, torox      |
|            9 |     5483 | 2026-01-19 | Acend                 | W   | 0.319      | -            | -                | -                | -         |     8.91 | 4X1s, Alv, deeN, Salazar, torox      |
|            8 |     5541 | 2026-01-17 | Team Nemesis          | L   | 0.306      | -            | -                | -                | -         |    -1.10 | 4X1s, Alv, deeN, Salazar, torox      |
|            7 |     5547 | 2026-01-17 | Leo Team              | W   | 0.306      | -            | -                | -                | -         |     3.47 | 4X1s, Alv, deeN, Salazar, torox      |
|            6 |     5568 | 2026-01-17 | Illwill               | L   | 0.304      | -            | -                | -                | -         |    -2.64 | 4X1s, Alv, deeN, Salazar, torox      |
|            5 |     5703 | 2026-01-13 | Bebop                 | W   | 0.279      | -            | -                | -                | -         |     3.12 | 4X1s, Alv, deeN, Salazar, torox      |
|            4 |     5722 | 2026-01-12 | Acend                 | W   | 0.270      | -            | -                | -                | -         |     7.76 | 4X1s, Alv, deeN, Salazar, torox      |
|            3 |     6046 | 2025-12-09 | PsychoFace            | L   | 0.045      | -            | -                | -                | -         |    -0.51 | 4X1s, Alv, deeN, Salazar, torox      |
|            2 |     6062 | 2025-12-08 | Nemiga Gaming         | W   | 0.039      | -            | -                | -                | -         |     1.13 | 4X1s, Alv, deeN, Salazar, torox      |
|            1 |     6072 | 2025-12-08 | Rune Eaters Esports   | L   | 0.038      | -            | -                | -                | -         |    -0.46 | 4X1s, Alv, deeN, Salazar, torox      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,266.45)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-27 |      0.972 | $2,000.00      | $1,943.33       |
| 2026-04-10 |      0.859 | $2,000.00      | $1,717.78       |
| 2026-04-03 |      0.812 | $2,000.00      | $1,624.44       |
| 2026-03-27 |      0.766 | $1,750.00      | $1,340.69       |
| 2026-03-20 |      0.719 | $5,000.00      | $3,595.83       |
| 2025-12-09 |      0.046 | $966.00        | $44.36          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
