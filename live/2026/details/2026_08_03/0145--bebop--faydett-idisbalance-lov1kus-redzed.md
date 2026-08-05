### Roster Details<br />
Team Name: Bebop<br />
Roster: faydett, iDISBALANCE, lov1kus, redzed<br />
Global Rank: [145](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [104]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  869.6<br />
<br />
Final Rank Value (869.6) = Starting Rank Value (802.9) + Head To Head Adjustments (66.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.255[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.9
- 400 + ( ( 0.208 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 802.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |       75 | 2026-07-30 | Walczaki         | L   | 1.000      | -            | -                | -                | -         |    -4.04 | faydett, iDISBALANCE, lov1kus, redzed, wh1teout |
|           74 |       99 | 2026-07-29 | Misa             | W   | 1.000      | 0.396        | -                | 0.728 (0.288)    | 0 (0.000) |    11.02 | faydett, iDISBALANCE, lov1kus, redzed, wh1teout |
|           73 |      128 | 2026-07-28 | Black Phoenix    | W   | 1.000      | 0.396        | 0.015 (0.006)    | 1.000 (0.396)    | 0 (0.000) |    18.92 | faydett, iDISBALANCE, lov1kus, redzed, wh1teout |
|           72 |      140 | 2026-07-27 | Falcons Force    | L   | 1.000      | -            | -                | -                | -         |   -19.51 | faydett, iDISBALANCE, lov1kus, redzed, z3ndeR   |
|           71 |      343 | 2026-07-19 | Endless Journey  | L   | 1.000      | -            | -                | -                | -         |   -15.28 | faydett, fozil, iDISBALANCE, lov1kus, redzed    |
|           70 |      390 | 2026-07-18 | DONSTU           | W   | 1.000      | 0.344        | -                | 0.678 (0.234)    | 0 (0.000) |    10.07 | faydett, fozil, iDISBALANCE, lov1kus, redzed    |
|           69 |      428 | 2026-07-17 | Endless Journey  | L   | 1.000      | -            | -                | -                | -         |   -15.20 | faydett, fozil, iDISBALANCE, lov1kus, redzed    |
|           68 |      913 | 2026-06-18 | Nemesis          | L   | 0.894      | -            | -                | -                | -         |    -1.82 | danistzz, faydett, iDISBALANCE, lov1kus, Norwi  |
|           67 |      927 | 2026-06-17 | SPARTA           | W   | 0.886      | 0.384        | 0.023 (0.008)    | 0.994 (0.338)    | 0 (0.000) |    17.00 | danistzz, faydett, iDISBALANCE, lov1kus, Norwi  |
|           66 |      951 | 2026-06-15 | ex-RUSTEC        | W   | 0.873      | 0.384        | -                | 0.713 (0.239)    | 0 (0.000) |    14.47 | danistzz, faydett, iDISBALANCE, lov1kus, Norwi  |
|           65 |      996 | 2026-06-13 | KOLESIE          | L   | 0.861      | -            | -                | -                | -         |    -6.09 | danistzz, faydett, iDISBALANCE, lov1kus, Norwi  |
|           64 |     1079 | 2026-06-11 | Butterfly        | W   | 0.847      | 0.384        | 0.007 (0.002)    | 0.889 (0.289)    | 0 (0.000) |    20.77 | danistzz, faydett, iDISBALANCE, lov1kus, Norwi  |
|           63 |     1122 | 2026-06-09 | INOX Division    | L   | 0.831      | -            | -                | -                | -         |    -6.02 | faydett, iDISBALANCE, lov1kus, Norwi, yiksrezo  |
|           62 |     1490 | 2026-05-27 | DragonClaw       | L   | 0.747      | -            | -                | -                | -         |    -9.26 | faydett, iDISBALANCE, lov1kus, Norwi, yiksrezo  |
|           61 |     1546 | 2026-05-26 | Rune Eaters      | W   | 0.739      | 0.396        | 0.022 (0.006)    | 0.895 (0.262)    | 0 (0.000) |    18.25 | faydett, iDISBALANCE, lov1kus, Norwi, yiksrezo  |
|           60 |     1561 | 2026-05-25 | HYPERSPIRIT      | L   | 0.734      | -            | -                | -                | -         |   -12.79 | faydett, h1kaN, iDISBALANCE, lov1kus, Norwi     |
|           59 |     1598 | 2026-05-24 | Rune Eaters      | L   | 0.728      | -            | -                | -                | -         |    -4.56 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           58 |     1671 | 2026-05-23 | Misa             | W   | 0.719      | 0.344        | -                | 0.728 (0.180)    | 0 (0.000) |     7.97 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           57 |     1797 | 2026-05-20 | Hashiras         | L   | 0.700      | -            | -                | -                | -         |   -13.05 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           56 |     1832 | 2026-05-19 | Misa             | W   | 0.692      | 0.344        | -                | 0.728 (0.173)    | 0 (0.000) |     7.76 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           55 |     2181 | 2026-05-07 | UNiTY            | L   | 0.611      | -            | -                | -                | -         |   -14.67 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           54 |     2215 | 2026-05-05 | MOUZ NXT         | L   | 0.598      | -            | -                | -                | -         |    -8.46 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           53 |     2234 | 2026-05-04 | FAVBET           | L   | 0.591      | -            | -                | -                | -         |   -10.97 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           52 |     2291 | 2026-05-02 | ASTRAL           | W   | 0.580      | 0.344        | 0.014 (0.003)    | 1.000 (0.200)    | 0 (0.000) |    14.97 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           51 |     2364 | 2026-05-01 | Just Players     | W   | 0.571      | -            | -                | -                | -         |     4.81 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           50 |     2410 | 2026-04-30 | Walczaki         | L   | 0.564      | -            | -                | -                | -         |    -2.90 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           49 |     2519 | 2026-04-27 | INOX Division    | L   | 0.547      | -            | -                | -                | -         |    -7.22 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           48 |     2801 | 2026-04-21 | Black Phoenix    | L   | 0.505      | -            | -                | -                | -         |    -6.54 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           47 |     2823 | 2026-04-19 | ex-MANA          | W   | 0.494      | -            | -                | -                | -         |     6.03 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           46 |     2887 | 2026-04-16 | Lavked           | L   | 0.471      | -            | -                | -                | -         |    -6.41 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           45 |     2953 | 2026-04-12 | Hashiras         | W   | 0.447      | -            | -                | -                | -         |     4.38 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           44 |     2961 | 2026-04-12 | Lavked           | L   | 0.445      | -            | -                | -                | -         |    -9.43 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           43 |     3045 | 2026-04-09 | Walczaki         | W   | 0.425      | 0.371        | 0.096 (0.015)    | -                | -         |    11.08 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           42 |     3056 | 2026-04-08 | BIG              | L   | 0.421      | -            | -                | -                | -         |    -0.32 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           41 |     3089 | 2026-04-07 | Persona Grata    | W   | 0.414      | -            | -                | -                | -         |     2.09 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           40 |     3120 | 2026-04-06 | Persona Grata    | W   | 0.408      | -            | -                | -                | -         |     2.10 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           39 |     3139 | 2026-04-06 | MASONIC          | W   | 0.405      | -            | -                | -                | -         |     0.85 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           38 |     3144 | 2026-04-06 | megoshort        | W   | 0.404      | -            | -                | -                | -         |     3.66 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           37 |     3241 | 2026-04-04 | Metizport        | W   | 0.393      | 0.435        | 0.023 (0.004)    | -                | -         |     9.24 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           36 |     3458 | 2026-04-02 | ALGO             | W   | 0.378      | -            | -                | -                | -         |     4.76 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           35 |     3557 | 2026-04-01 | WW               | W   | 0.371      | 0.371        | 0.056 (0.008)    | -                | -         |    10.50 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           34 |     3776 | 2026-03-29 | Black Phoenix    | L   | 0.353      | -            | -                | -                | -         |    -4.48 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           33 |     3823 | 2026-03-28 | Rune Eaters      | W   | 0.348      | 0.435        | 0.022 (0.003)    | -                | -         |     9.87 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           32 |     3870 | 2026-03-28 | ex-Zero Tenacity | W   | 0.346      | -            | -                | -                | -         |     5.24 | faydett, h1kaN, iDISBALANCE, lov1kus, Norwi     |
|           31 |     3905 | 2026-03-27 | Privateer        | W   | 0.341      | -            | -                | -                | -         |     4.92 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           30 |     3923 | 2026-03-27 | ALGO             | L   | 0.339      | -            | -                | -                | -         |    -6.35 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           29 |     3942 | 2026-03-26 | ENCE             | L   | 0.335      | -            | -                | -                | -         |    -3.51 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           28 |     3967 | 2026-03-26 | Off Site         | L   | 0.332      | -            | -                | -                | -         |    -9.21 | dwushka, faydett, iDISBALANCE, lov1kus, Norwi   |
|           27 |     3998 | 2026-03-25 | Privateer        | W   | 0.327      | -            | -                | -                | -         |     4.57 | faydett, h1kaN, iDISBALANCE, lov1kus, Norwi     |
|           26 |     4250 | 2026-03-21 | BIG Academy      | W   | 0.299      | -            | -                | -                | -         |     2.30 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           25 |     4351 | 2026-03-19 | Black Phoenix    | L   | 0.286      | -            | -                | -                | -         |    -3.92 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           24 |     4427 | 2026-03-17 | HOTU             | W   | 0.274      | 0.435        | 0.134 (0.016)    | -                | -         |     8.09 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           23 |     4437 | 2026-03-17 | Fuzos            | W   | 0.273      | -            | -                | -                | -         |     2.17 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           22 |     4478 | 2026-03-16 | Privateer        | W   | 0.267      | -            | -                | -                | -         |     3.95 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           21 |     4484 | 2026-03-16 | Mai Tai          | W   | 0.266      | -            | -                | -                | -         |     3.73 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           20 |     4564 | 2026-03-14 | STATE            | W   | 0.253      | -            | -                | -                | -         |     6.97 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           19 |     4570 | 2026-03-14 | Lilmix           | W   | 0.253      | -            | -                | -                | -         |     2.49 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           18 |     4600 | 2026-03-13 | ENCE             | W   | 0.248      | -            | -                | -                | -         |     5.54 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           17 |     4674 | 2026-03-12 | HAVU             | W   | 0.239      | -            | -                | -                | -         |     4.69 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           16 |     4683 | 2026-03-12 | The Last Resort  | L   | 0.239      | -            | -                | -                | -         |    -1.66 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           15 |     4753 | 2026-03-10 | Sangal           | L   | 0.226      | -            | -                | -                | -         |    -3.28 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           14 |     4909 | 2026-03-08 | ex-RUBY          | L   | 0.212      | -            | -                | -                | -         |    -3.58 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           13 |     4953 | 2026-03-07 | cirahvi          | W   | 0.205      | -            | -                | -                | -         |     2.23 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|           12 |     5112 | 2026-03-03 | Mai Tai          | W   | 0.181      | -            | -                | -                | -         |     2.60 | faydett, h1kaN, iDISBALANCE, lov1kus, riskyb0b  |
|           11 |     5163 | 2026-03-02 | Clutchain fe     | W   | 0.174      | -            | -                | -                | -         |     1.96 | faydett, h1kaN, iDISBALANCE, lov1kus, riskyb0b  |
|           10 |     5480 | 2026-02-24 | K27              | L   | 0.132      | -            | -                | -                | -         |    -0.13 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            9 |     5498 | 2026-02-23 | ASTRAL           | W   | 0.128      | -            | -                | -                | -         |     3.75 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            8 |     5628 | 2026-02-21 | Just Players     | W   | 0.114      | -            | -                | -                | -         |     1.05 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            7 |     5686 | 2026-02-20 | ARCRED           | L   | 0.106      | -            | -                | -                | -         |    -0.41 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            6 |     5786 | 2026-02-18 | ex-RUBY          | L   | 0.093      | -            | -                | -                | -         |    -1.62 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            5 |     5876 | 2026-02-16 | illwill          | W   | 0.081      | -            | -                | -                | -         |     1.10 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            4 |     6038 | 2026-02-14 | HYPERSPIRIT      | W   | 0.065      | -            | -                | -                | -         |     1.07 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            3 |     6081 | 2026-02-13 | home             | W   | 0.058      | -            | -                | -                | -         |     0.29 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            2 |     6196 | 2026-02-10 | The Last Resort  | W   | 0.039      | -            | -                | -                | -         |     0.97 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |
|            1 |     6212 | 2026-02-09 | BRUTE            | L   | 0.034      | -            | -                | -                | -         |    -0.91 | dwushka, faydett, h1kaN, iDISBALANCE, lov1kus   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($588.37)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-20 |      0.294 | $2,000.00      | $588.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
