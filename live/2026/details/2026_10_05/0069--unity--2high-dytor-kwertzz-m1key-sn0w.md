### Roster Details<br />
Team Name: UNiTY<br />
Roster: 2high, Dytor, KWERTZZ, M1key, Sn0w<br />
Global Rank: [69](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [50]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1167.4<br />
<br />
Final Rank Value (1167.4) = Starting Rank Value (1214.5) + Head To Head Adjustments (-47.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.284[<sup>2</sup>](#table1)
- LAN Wins: 0.643[<sup>2</sup>](#table1)

The average of these factors is 0.407<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1214.5
- 400 + ( ( 0.407 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1214.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |        4 | 2026-10-04 | NT               | W   | 1.000      | -            | -                | -                | 1 (1.000) |    15.89 | 2high, Dytor, KWERTZZ, M1key, Sn0w          |
|           64 |       13 | 2026-10-04 | NT               | W   | 1.000      | -            | -                | -                | 1 (1.000) |    16.26 | 2high, Dytor, KWERTZZ, M1key, Sn0w          |
|           63 |       31 | 2026-10-03 | INFINITE         | W   | 1.000      | 0.349        | 0.038 (0.013)    | -                | 1 (1.000) |    21.74 | 2high, Dytor, KWERTZZ, M1key, Sn0w          |
|           62 |       94 | 2026-10-02 | aimclub          | W   | 1.000      | -            | -                | -                | 1 (1.000) |    16.79 | 2high, Dytor, KWERTZZ, M1key, Sn0w          |
|           61 |      680 | 2026-09-22 | Illyrians        | L   | 1.000      | -            | -                | -                | -         |   -24.96 | 2high, Dytor, KWERTZZ, M1key, Sn0w          |
|           60 |      699 | 2026-09-21 | Leo              | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.625 (0.231)    | 0 (0.000) |     9.83 | 2high, Dytor, KWERTZZ, M1key, Sn0w          |
|           59 |      916 | 2026-09-15 | Phantom Academy  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.14 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           58 |      960 | 2026-09-13 | ex-Zero Tenacity | W   | 1.000      | 0.371        | 0.037 (0.014)    | 1.000 (0.371)    | 0 (0.000) |    14.18 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           57 |     1016 | 2026-09-12 | ENCE             | W   | 1.000      | 0.371        | 0.014 (0.005)    | 0.652 (0.242)    | -         |    12.87 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           56 |     1150 | 2026-09-10 | Leo              | L   | 1.000      | -            | -                | -                | -         |   -20.73 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           55 |     1255 | 2026-09-08 | MOUZ NXT         | W   | 1.000      | -            | -                | -                | -         |     7.77 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           54 |     1268 | 2026-09-07 | EAC              | L   | 1.000      | -            | -                | -                | -         |   -17.58 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           53 |     1427 | 2026-09-04 | Black Phoenix    | W   | 0.993      | 0.384        | 0.035 (0.014)    | 1.000 (0.382)    | -         |    12.25 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           52 |     1508 | 2026-09-02 | INOX Division    | L   | 0.980      | -            | -                | -                | -         |   -12.66 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           51 |     1551 | 2026-09-01 | Misa             | W   | 0.973      | 0.344        | -                | 0.691 (0.232)    | -         |     4.90 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           50 |     1653 | 2026-08-30 | ex-RUSTEC        | W   | 0.959      | 0.344        | 0.025 (0.008)    | 0.778 (0.257)    | -         |    12.30 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           49 |     1702 | 2026-08-29 | Bushido Wildcats | W   | 0.953      | 0.344        | 0.027 (0.009)    | 1.000 (0.328)    | -         |    13.53 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           48 |     1788 | 2026-08-27 | Acend            | L   | 0.940      | -            | -                | -                | -         |    -8.55 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           47 |     1828 | 2026-08-26 | Drip Too Hard    | W   | 0.934      | -            | -                | -                | -         |     3.60 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           46 |     1896 | 2026-08-25 | Leo              | L   | 0.926      | -            | -                | -                | -         |   -19.19 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           45 |     1963 | 2026-08-22 | Black Phoenix    | W   | 0.908      | 0.384        | 0.035 (0.012)    | 1.000 (0.349)    | -         |     9.99 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           44 |     2027 | 2026-08-20 | Lavked           | W   | 0.892      | 0.384        | -                | 0.664 (0.228)    | -         |     8.30 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           43 |     2058 | 2026-08-19 | GenOne           | L   | 0.885      | -            | -                | -                | -         |    -7.77 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           42 |     2101 | 2026-08-17 | Banda Chuya      | W   | 0.872      | 0.344        | 0.013 (0.004)    | 0.727 (0.219)    | -         |     6.14 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           41 |     2121 | 2026-08-16 | Misa             | W   | 0.867      | -            | -                | -                | -         |     5.30 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           40 |     2148 | 2026-08-15 | Enjoy            | L   | 0.860      | -            | -                | -                | -         |   -20.81 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           39 |     2173 | 2026-08-14 | Mai Tai          | W   | 0.854      | -            | -                | -                | -         |     1.39 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           38 |     2269 | 2026-08-09 | WBT              | L   | 0.821      | -            | -                | -                | -         |    -9.10 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           37 |     2280 | 2026-08-09 | Nexus            | W   | 0.819      | -            | -                | -                | 1 (0.819) |    11.22 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           36 |     2305 | 2026-08-08 | WBT              | L   | 0.814      | -            | -                | -                | -         |    -9.27 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           35 |     2347 | 2026-08-07 | NAVI Junior      | W   | 0.807      | -            | -                | -                | 1 (0.807) |    11.01 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           34 |     2371 | 2026-08-07 | eSuba            | W   | 0.806      | -            | -                | -                | 1 (0.806) |     1.64 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           33 |     2413 | 2026-08-06 | Walczaki         | L   | 0.801      | -            | -                | -                | -         |   -14.32 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           32 |     2454 | 2026-08-04 | Drip Too Hard    | W   | 0.787      | -            | -                | -                | -         |     2.48 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           31 |     2477 | 2026-08-03 | GenOne           | L   | 0.781      | -            | -                | -                | -         |    -7.78 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           30 |     2598 | 2026-07-31 | Mai Tai          | W   | 0.759      | -            | -                | -                | -         |     1.22 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           29 |     2629 | 2026-07-30 | Rune Eaters      | L   | 0.753      | -            | -                | -                | -         |   -10.45 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           28 |     2654 | 2026-07-29 | Entropy          | L   | 0.747      | -            | -                | -                | -         |   -19.80 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           27 |     2670 | 2026-07-28 | Banda Chuya      | W   | 0.741      | -            | -                | -                | -         |     2.50 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           26 |     2679 | 2026-07-28 | ex-RUSTEC        | L   | 0.740      | -            | -                | -                | -         |   -16.38 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           25 |     2726 | 2026-07-27 | Mai Tai          | W   | 0.732      | -            | -                | -                | -         |     0.88 | 2high, fnl, KWERTZZ, M1key, Sn0w            |
|           24 |     3909 | 2026-05-31 | ASTRAL           | L   | 0.354      | -            | -                | -                | -         |    -7.32 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           23 |     3975 | 2026-05-30 | ENCE             | L   | 0.345      | -            | -                | -                | -         |    -5.37 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           22 |     3991 | 2026-05-29 | INOX Division    | W   | 0.340      | 0.384        | 0.063 (0.008)    | -                | -         |     3.48 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           21 |     4054 | 2026-05-28 | aAa              | W   | 0.333      | -            | -                | -                | -         |     0.29 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           20 |     4129 | 2026-05-26 | Drama            | L   | 0.319      | -            | -                | -                | -         |    -8.94 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           19 |     4225 | 2026-05-23 | BASEMENT BOYS    | L   | 0.302      | -            | -                | -                | -         |    -5.37 | 2high, juanflatroo, KWERTZZ, M1key, NEOFRAG |
|           18 |     4710 | 2026-05-09 | MOUZ NXT         | L   | 0.208      | -            | -                | -                | -         |    -6.38 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           17 |     4768 | 2026-05-07 | Bebop            | W   | 0.191      | -            | -                | -                | -         |     0.17 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           16 |     4775 | 2026-05-06 | Lavked           | L   | 0.187      | -            | -                | -                | -         |    -4.93 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           15 |     4789 | 2026-05-05 | Omega            | L   | 0.181      | -            | -                | -                | -         |    -2.75 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           14 |     4815 | 2026-05-04 | TNC              | L   | 0.172      | -            | -                | -                | -         |    -5.20 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           13 |     4876 | 2026-05-02 | PsychoFace       | W   | 0.160      | -            | -                | -                | -         |     0.64 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           12 |     4943 | 2026-05-01 | Banda Chuya      | L   | 0.153      | -            | -                | -                | -         |    -4.27 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           11 |     4975 | 2026-04-30 | PsychoFace       | W   | 0.147      | -            | -                | -                | -         |     0.57 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|           10 |     5059 | 2026-04-28 | Young Ninjas     | L   | 0.134      | -            | -                | -                | -         |    -4.13 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            9 |     5107 | 2026-04-27 | MOUZ NXT         | W   | 0.127      | -            | -                | -                | -         |     0.08 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            8 |     5151 | 2026-04-26 | FromPR           | W   | 0.121      | -            | -                | -                | -         |     0.04 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            7 |     5191 | 2026-04-26 | INOX Division    | L   | 0.118      | -            | -                | -                | -         |    -2.77 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            6 |     5247 | 2026-04-25 | FromPR           | W   | 0.113      | -            | -                | -                | -         |     0.04 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            5 |     5364 | 2026-04-22 | KOLESIE          | L   | 0.093      | -            | -                | -                | -         |    -2.65 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            4 |     5536 | 2026-04-12 | EYEBALLERS       | W   | 0.028      | -            | -                | -                | -         |     0.59 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            3 |     5579 | 2026-04-11 | Hashiras         | L   | 0.018      | -            | -                | -                | -         |    -0.55 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            2 |     5602 | 2026-04-10 | Famalicão        | W   | 0.012      | -            | -                | -                | -         |     0.01 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |
|            1 |     5619 | 2026-04-09 | Hashiras         | L   | 0.007      | -            | -                | -                | -         |    -0.23 | 2high, KWERTZZ, M1key, NEOFRAG, woozzzi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,916.50)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-04 |      1.000 | $6,801.00      | $6,801.00       |
| 2026-09-23 |      1.000 | $750.00        | $750.00         |
| 2026-08-09 |      0.821 | $2,883.00      | $2,365.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
