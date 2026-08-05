### Roster Details<br />
Team Name: Omega<br />
Roster: adai, Aldikon, Botpa1, dan4o, def1zer<br />
Global Rank: [63](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [45]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1140.1<br />
<br />
Final Rank Value (1140.1) = Starting Rank Value (1312.2) + Head To Head Adjustments (-172.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1312.2
- 400 + ( ( 0.471 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1312.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |       11 | 2026-08-02 | DEPO             | W   | 1.000      | 0.342        | 0.016 (0.005)    | 0.481 (0.165)    | 1 (1.000) |    13.91 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           79 |       15 | 2026-08-02 | DONSTU           | W   | 1.000      | 0.342        | -                | 0.678 (0.232)    | 1 (1.000) |     3.51 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           78 |       35 | 2026-08-01 | THE UNIT         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.23 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           77 |       39 | 2026-08-01 | ZWAW             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.08 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           76 |      215 | 2026-07-25 | Rune Eaters      | L   | 1.000      | -            | -                | -                | -         |   -19.02 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           75 |      221 | 2026-07-25 | Orda             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.36 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           74 |      225 | 2026-07-25 | NOVAQ            | L   | 1.000      | -            | -                | -                | -         |   -18.50 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           73 |      231 | 2026-07-24 | AimAssasins      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.94 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           72 |      626 | 2026-07-05 | Rune Eaters      | W   | 1.000      | 0.288        | 0.022 (0.006)    | 0.895 (0.257)    | 1 (1.000) |    10.95 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           71 |     1336 | 2026-05-31 | Rune Eaters      | L   | 0.772      | -            | -                | -                | -         |   -15.54 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           70 |     1371 | 2026-05-30 | DEPO             | W   | 0.766      | 0.354        | 0.016 (0.004)    | 0.481 (0.130)    | 1 (0.766) |    12.54 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           69 |     1380 | 2026-05-30 | Rune Eaters      | L   | 0.766      | -            | -                | -                | -         |   -15.88 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           68 |     1389 | 2026-05-30 | TDK              | L   | 0.764      | -            | -                | -                | -         |   -12.55 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           67 |     1417 | 2026-05-29 | DEPO             | W   | 0.759      | 0.354        | 0.016 (0.004)    | 0.481 (0.129)    | 1 (0.759) |    12.51 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           66 |     1430 | 2026-05-29 | Dark Moon        | W   | 0.758      | -            | -                | -                | 1 (0.758) |     1.25 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           65 |     1461 | 2026-05-28 | ex-RUBY          | W   | 0.752      | 0.396        | 0.022 (0.007)    | 0.891 (0.266)    | -         |    12.41 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           64 |     1599 | 2026-05-24 | ALGO             | W   | 0.728      | 0.396        | -                | 0.314 (0.090)    | -         |     2.48 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           63 |     1670 | 2026-05-23 | ASTRAL           | W   | 0.719      | 0.396        | 0.014 (0.004)    | 1.000 (0.285)    | -         |     9.45 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           62 |     2128 | 2026-05-09 | HAVU             | L   | 0.627      | -            | -                | -                | -         |   -16.12 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           61 |     2159 | 2026-05-08 | INOX Division    | L   | 0.619      | -            | -                | -                | -         |   -13.55 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           60 |     2202 | 2026-05-05 | UNiTY            | W   | 0.601      | -            | -                | -                | -         |     1.02 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           59 |     2263 | 2026-05-03 | Lavked           | L   | 0.585      | -            | -                | -                | -         |   -14.10 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           58 |     2596 | 2026-04-26 | DEPO             | L   | 0.539      | -            | -                | -                | -         |    -8.59 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           57 |     2608 | 2026-04-26 | Rune Eaters      | W   | 0.538      | 0.297        | 0.022 (0.003)    | 0.895 (0.143)    | -         |     7.44 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           56 |     3085 | 2026-04-07 | EYEBALLERS       | L   | 0.414      | -            | -                | -                | -         |    -3.18 | adai, Botpa1, dan4o, Maison, modeSavage |
|           55 |     3141 | 2026-04-06 | megoshort        | W   | 0.405      | -            | -                | -                | -         |     0.82 | adai, Botpa1, dan4o, Maison, modeSavage |
|           54 |     3165 | 2026-04-05 | ASTRAL           | L   | 0.400      | -            | -                | -                | -         |    -6.28 | adai, Botpa1, dan4o, Maison, modeSavage |
|           53 |     3357 | 2026-04-03 | Rune Eaters      | W   | 0.385      | 0.435        | 0.022 (0.004)    | 0.895 (0.150)    | -         |     6.11 | adai, Botpa1, dan4o, Maison, modeSavage |
|           52 |     3612 | 2026-03-31 | M1X KS           | L   | 0.366      | -            | -                | -                | -         |   -11.19 | adai, Botpa1, dan4o, Maison, modeSavage |
|           51 |     3658 | 2026-03-31 | OlyBet           | W   | 0.364      | -            | -                | -                | -         |     0.61 | adai, Botpa1, dan4o, Maison, modeSavage |
|           50 |     3676 | 2026-03-30 | G2 Ares          | L   | 0.361      | -            | -                | -                | -         |    -9.05 | adai, Botpa1, dan4o, Maison, modeSavage |
|           49 |     3709 | 2026-03-30 | Black Phoenix    | L   | 0.359      | -            | -                | -                | -         |    -9.41 | adai, Botpa1, dan4o, Maison, modeSavage |
|           48 |     3959 | 2026-03-26 | megoshort        | L   | 0.333      | -            | -                | -                | -         |    -9.99 | adai, Botpa1, dan4o, Maison, modeSavage |
|           47 |     4062 | 2026-03-24 | ALGO             | L   | 0.319      | -            | -                | -                | -         |    -9.38 | adai, Botpa1, dan4o, Maison, modeSavage |
|           46 |     4189 | 2026-03-22 | los kogutos      | L   | 0.306      | -            | -                | -                | -         |    -8.32 | adai, Botpa1, dan4o, Maison, noni       |
|           45 |     4295 | 2026-03-20 | Sangal           | L   | 0.294      | -            | -                | -                | -         |    -8.40 | adai, Botpa1, dan4o, Maison, noni       |
|           44 |     4338 | 2026-03-19 | ex-RUBY          | L   | 0.288      | -            | -                | -                | -         |    -8.32 | adai, Botpa1, dan4o, Maison, noni       |
|           43 |     4434 | 2026-03-17 | MASONIC          | W   | 0.273      | -            | -                | -                | -         |     2.00 | adai, Botpa1, dan4o, Maison, noni       |
|           42 |     4470 | 2026-03-16 | ex-Zero Tenacity | L   | 0.267      | -            | -                | -                | -         |    -7.80 | adai, Botpa1, dan4o, Maison, modeSavage |
|           41 |     4520 | 2026-03-15 | Eternal Fire     | L   | 0.260      | -            | -                | -                | -         |    -7.33 | adai, Botpa1, dan4o, Maison, modeSavage |
|           40 |     4534 | 2026-03-15 | DEPO             | W   | 0.259      | -            | -                | -                | -         |     3.26 | adai, Botpa1, dan4o, Maison, modeSavage |
|           39 |     4538 | 2026-03-15 | NOVAQ            | W   | 0.258      | -            | -                | -                | -         |     2.44 | adai, Botpa1, dan4o, Maison, modeSavage |
|           38 |     4663 | 2026-03-12 | FAVBET           | W   | 0.240      | -            | -                | -                | -         |     0.47 | adai, Botpa1, dan4o, Maison, modeSavage |
|           37 |     4710 | 2026-03-11 | Black Phoenix    | L   | 0.233      | -            | -                | -                | -         |    -6.61 | adai, Botpa1, dan4o, Maison, modeSavage |
|           36 |     4820 | 2026-03-09 | Phantom          | L   | 0.219      | -            | -                | -                | -         |    -4.99 | adai, Botpa1, dan4o, Maison, modeSavage |
|           35 |     4865 | 2026-03-08 | TNC              | W   | 0.214      | -            | -                | -                | -         |     0.24 | adai, Botpa1, dan4o, Maison, modeSavage |
|           34 |     4873 | 2026-03-08 | TNC              | L   | 0.214      | -            | -                | -                | -         |    -6.50 | adai, Botpa1, dan4o, Maison, modeSavage |
|           33 |     4934 | 2026-03-07 | ASTRAL           | W   | 0.207      | -            | -                | -                | -         |     2.93 | adai, Botpa1, dan4o, Maison, modeSavage |
|           32 |     4945 | 2026-03-07 | ex-Zero Tenacity | L   | 0.206      | -            | -                | -                | -         |    -6.10 | adai, Botpa1, dan4o, Maison, modeSavage |
|           31 |     4979 | 2026-03-06 | Bulgaria         | L   | 0.199      | -            | -                | -                | -         |    -2.12 | adai, Botpa1, dan4o, Maison, modeSavage |
|           30 |     5093 | 2026-03-04 | Fuzos            | W   | 0.185      | -            | -                | -                | -         |     0.15 | adai, Botpa1, dan4o, Maison, noni       |
|           29 |     5115 | 2026-03-03 | NOVAQ            | W   | 0.181      | -            | -                | -                | -         |     1.64 | adai, Botpa1, dan4o, Maison, noni       |
|           28 |     5180 | 2026-03-02 | ENCE             | L   | 0.172      | -            | -                | -                | -         |    -4.62 | adai, Botpa1, dan4o, Maison, SNk        |
|           27 |     5217 | 2026-03-01 | Bulgaria         | L   | 0.166      | -            | -                | -                | -         |    -1.75 | adai, Botpa1, dan4o, Maison, SNk        |
|           26 |     5229 | 2026-03-01 | ex-RUBY          | L   | 0.165      | -            | -                | -                | -         |    -4.93 | adai, Botpa1, dan4o, Maison, SNk        |
|           25 |     5243 | 2026-02-28 | Sashi            | L   | 0.161      | -            | -                | -                | -         |    -3.71 | adai, Botpa1, dan4o, Maison, SNk        |
|           24 |     5269 | 2026-02-28 | ALGO             | W   | 0.159      | -            | -                | -                | -         |     0.23 | adai, Botpa1, dan4o, Maison, SNk        |
|           23 |     5307 | 2026-02-27 | NOVAQ            | L   | 0.153      | -            | -                | -                | -         |    -3.54 | adai, Botpa1, dan4o, Maison, SNk        |
|           22 |     5323 | 2026-02-27 | HOTU             | W   | 0.151      | 0.351        | 0.134 (0.007)    | -                | -         |     2.56 | adai, Botpa1, dan4o, Maison, SNk        |
|           21 |     5371 | 2026-02-26 | ASTRAL           | W   | 0.146      | -            | -                | -                | -         |     2.06 | adai, Botpa1, dan4o, Maison, SNk        |
|           20 |     5381 | 2026-02-26 | Sangal           | W   | 0.146      | -            | -                | -                | -         |     0.34 | adai, Botpa1, dan4o, Maison, SNk        |
|           19 |     5469 | 2026-02-24 | Bulgaria         | L   | 0.133      | -            | -                | -                | -         |    -1.42 | adai, Botpa1, dan4o, Maison, SNk        |
|           18 |     5514 | 2026-02-23 | ARCRED           | L   | 0.126      | -            | -                | -                | -         |    -2.76 | adai, Botpa1, dan4o, Maison, SNk        |
|           17 |     5562 | 2026-02-22 | Nemesis          | L   | 0.120      | -            | -                | -                | -         |    -1.74 | adai, Botpa1, dan4o, Maison, SNk        |
|           16 |     5586 | 2026-02-22 | Nemiga           | W   | 0.119      | 0.333        | 0.102 (0.004)    | -                | -         |     1.21 | adai, Botpa1, dan4o, Maison, SNk        |
|           15 |     5663 | 2026-02-20 | illwill          | W   | 0.108      | -            | -                | -                | -         |     0.16 | adai, Botpa1, dan4o, Maison, SNk        |
|           14 |     5689 | 2026-02-20 | Fuzos            | W   | 0.106      | -            | -                | -                | -         |     0.08 | adai, Botpa1, dan4o, Maison, SNk        |
|           13 |     5720 | 2026-02-19 | SPARTA           | L   | 0.101      | -            | -                | -                | -         |    -2.71 | adai, Botpa1, dan4o, Maison, SNk        |
|           12 |     5741 | 2026-02-19 | VP.Prodigy       | W   | 0.099      | -            | -                | -                | -         |     0.04 | adai, Botpa1, dan4o, Maison, SNk        |
|           11 |     5793 | 2026-02-18 | cirahvi          | L   | 0.093      | -            | -                | -                | -         |    -2.83 | adai, Botpa1, dan4o, Maison, SNk        |
|           10 |     5806 | 2026-02-18 | WW               | L   | 0.091      | -            | -                | -                | -         |    -1.50 | adai, Botpa1, dan4o, Maison, SNk        |
|            9 |     5842 | 2026-02-17 | Sangal           | L   | 0.087      | -            | -                | -                | -         |    -2.56 | adai, Botpa1, dan4o, Maison, SNk        |
|            8 |     5852 | 2026-02-17 | los kogutos      | W   | 0.087      | -            | -                | -                | -         |     0.24 | adai, Botpa1, dan4o, Maison, SNk        |
|            7 |     5879 | 2026-02-16 | MOUZ NXT         | L   | 0.081      | -            | -                | -                | -         |    -2.29 | adai, Botpa1, dan4o, Maison, SNk        |
|            6 |     5971 | 2026-02-15 | Just Players     | W   | 0.072      | -            | -                | -                | -         |     0.05 | adai, Botpa1, dan4o, Maison, SNk        |
|            5 |     5991 | 2026-02-14 | AM               | W   | 0.067      | -            | -                | -                | -         |     0.23 | adai, Botpa1, dan4o, Maison, SNk        |
|            4 |     6063 | 2026-02-13 | BASEMENT BOYS    | W   | 0.060      | -            | -                | -                | -         |     0.59 | adai, Botpa1, dan4o, Maison, SNk        |
|            3 |     6072 | 2026-02-13 | cirahvi          | W   | 0.059      | -            | -                | -                | -         |     0.06 | adai, Botpa1, dan4o, Maison, SNk        |
|            2 |     6115 | 2026-02-12 | home             | W   | 0.053      | -            | -                | -                | -         |     0.02 | adai, Botpa1, dan4o, Maison, SNk        |
|            1 |     6275 | 2026-02-07 | Romania          | L   | 0.018      | -            | -                | -                | -         |    -0.56 | adai, Botpa1, dan4o, Maison, SNk        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,150.64)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $6,000.00      | $6,000.00       |
| 2026-07-26 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-07-05 |      1.000 | $2,088.00      | $2,088.00       |
| 2026-05-31 |      0.774 | $1,000.00      | $774.07         |
| 2026-05-31 |      0.773 | $2,000.00      | $1,545.51       |
| 2026-04-26 |      0.539 | $1,072.00      | $577.71         |
| 2026-03-15 |      0.259 | $2,036.00      | $527.34         |
| 2026-03-01 |      0.167 | $500.00        | $83.74          |
| 2026-02-27 |      0.153 | $5,095.00      | $777.78         |
| 2026-02-22 |      0.120 | $2,300.00      | $276.48         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
