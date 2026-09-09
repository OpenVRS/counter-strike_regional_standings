### Roster Details<br />
Team Name: Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [1](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [1]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  2031.3<br />
<br />
Final Rank Value (2031.3) = Starting Rank Value (2000.0) + Head To Head Adjustments (31.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.887[<sup>2</sup>](#table1)
- Opponent Network: 0.474[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.840<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.840 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       32 | 2026-09-06 | MOUZ          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.634 (0.634)    | 1 (1.000) |    10.71 | donk, magixx, sh1ro, tN1R, zont1x |
|           42 |       64 | 2026-09-05 | Falcons       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.446 (0.446)    | 1 (1.000) |    10.29 | donk, magixx, sh1ro, tN1R, zont1x |
|           41 |      246 | 2026-08-31 | FURIA         | W   | 1.000      | 1.000        | 0.779 (0.779)    | 0.375 (0.375)    | 1 (1.000) |     6.57 | donk, magixx, sh1ro, tN1R, zont1x |
|           40 |      401 | 2026-08-28 | G2            | W   | 1.000      | 1.000        | 0.539 (0.539)    | 0.392 (0.392)    | 1 (1.000) |     5.31 | donk, magixx, sh1ro, tN1R, zont1x |
|           39 |      498 | 2026-08-26 | DENDELE       | W   | 1.000      | 1.000        | -                | 0.407 (0.407)    | 1 (1.000) |     0.81 | donk, magixx, sh1ro, tN1R, zont1x |
|           38 |      591 | 2026-08-23 | FUT           | W   | 1.000      | 1.000        | 1.000 (1.000)    | -                | 1 (1.000) |    11.08 | donk, magixx, sh1ro, tN1R, zont1x |
|           37 |      613 | 2026-08-22 | Legacy        | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.454 (0.454)    | 1 (1.000) |     7.64 | donk, magixx, sh1ro, tN1R, zont1x |
|           36 |      634 | 2026-08-21 | Vitality      | W   | 1.000      | 1.000        | 0.858 (0.858)    | 0.422 (0.422)    | 1 (1.000) |     9.92 | donk, magixx, sh1ro, tN1R, zont1x |
|           35 |      669 | 2026-08-20 | B8            | W   | 1.000      | 1.000        | -                | 0.567 (0.567)    | 1 (1.000) |     1.97 | donk, magixx, sh1ro, tN1R, zont1x |
|           34 |      786 | 2026-08-15 | BIG           | W   | 1.000      | 1.000        | -                | 0.566 (0.566)    | 1 (1.000) |     2.42 | donk, magixx, sh1ro, tN1R, zont1x |
|           33 |      867 | 2026-08-13 | Luminosity    | W   | 1.000      | -            | -                | -                | -         |     0.49 | donk, magixx, sh1ro, tN1R, zont1x |
|           32 |      895 | 2026-08-12 | JiJieHao      | L   | 1.000      | -            | -                | -                | -         |   -30.43 | donk, magixx, sh1ro, tN1R, zont1x |
|           31 |     1168 | 2026-08-02 | MOUZ          | L   | 0.952      | -            | -                | -                | -         |   -19.53 | donk, magixx, sh1ro, tN1R, zont1x |
|           30 |     1206 | 2026-08-01 | FaZe          | W   | 0.945      | -            | -                | -                | -         |     2.29 | donk, magixx, sh1ro, tN1R, zont1x |
|           29 |     1274 | 2026-07-30 | Liquid        | W   | 0.932      | -            | -                | -                | -         |     1.48 | donk, magixx, sh1ro, tN1R, zont1x |
|           28 |     1390 | 2026-07-26 | 100 Thieves   | W   | 0.907      | 0.903        | -                | 0.587 (0.480)    | -         |     0.69 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |     1488 | 2026-07-23 | OG            | W   | 0.887      | -            | -                | -                | -         |     0.10 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |     2112 | 2026-06-20 | Falcons       | L   | 0.667      | -            | -                | -                | -         |   -13.59 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |     2136 | 2026-06-19 | G2            | W   | 0.660      | -            | -                | -                | -         |     3.42 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     2225 | 2026-06-13 | 9z            | W   | 0.621      | 1.000        | 0.653 (0.405)    | -                | -         |     2.53 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     2282 | 2026-06-12 | Aurora        | W   | 0.613      | -            | -                | -                | -         |     1.25 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     2310 | 2026-06-11 | Natus Vincere | W   | 0.607      | -            | -                | -                | -         |     1.66 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     2388 | 2026-06-07 | 9z            | W   | 0.580      | -            | -                | -                | -         |     2.20 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     2409 | 2026-06-06 | MIBR          | W   | 0.573      | -            | -                | -                | -         |     0.73 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     2425 | 2026-06-06 | BETBOOM       | W   | 0.572      | -            | -                | -                | -         |     0.91 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     3109 | 2026-05-17 | Falcons       | W   | 0.439      | 1.000        | 1.000 (0.439)    | -                | -         |     4.97 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     3139 | 2026-05-16 | MOUZ          | W   | 0.431      | 1.000        | 1.000 (0.431)    | -                | -         |     5.43 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     3172 | 2026-05-15 | G2            | W   | 0.424      | -            | -                | -                | -         |     2.31 | donk, magixx, sh1ro, tN1R, zont1x |
|           15 |     3296 | 2026-05-11 | FURIA         | W   | 0.399      | -            | -                | -                | -         |     2.79 | donk, magixx, sh1ro, tN1R, zont1x |
|           14 |     3345 | 2026-05-10 | The MongolZ   | W   | 0.391      | -            | -                | -                | -         |     0.49 | donk, magixx, sh1ro, tN1R, zont1x |
|           13 |     3375 | 2026-05-09 | The Huns      | W   | 0.384      | -            | -                | -                | -         |     0.02 | donk, magixx, sh1ro, tN1R, zont1x |
|           12 |     4056 | 2026-04-19 | Vitality      | L   | 0.253      | -            | -                | -                | -         |    -5.15 | donk, magixx, sh1ro, tN1R, zont1x |
|           11 |     4088 | 2026-04-18 | Falcons       | W   | 0.246      | -            | -                | -                | -         |     2.92 | donk, magixx, sh1ro, tN1R, zont1x |
|           10 |     4108 | 2026-04-17 | MOUZ          | W   | 0.239      | -            | -                | -                | -         |     3.17 | donk, magixx, sh1ro, tN1R, zont1x |
|            9 |     4127 | 2026-04-15 | G2            | W   | 0.227      | -            | -                | -                | -         |     1.39 | donk, magixx, sh1ro, tN1R, zont1x |
|            8 |     4135 | 2026-04-15 | RED Canids    | W   | 0.226      | -            | -                | -                | -         |     0.01 | donk, magixx, sh1ro, tN1R, zont1x |
|            7 |     4150 | 2026-04-14 | Falcons       | L   | 0.220      | -            | -                | -                | -         |    -4.36 | donk, magixx, sh1ro, tN1R, zont1x |
|            6 |     4171 | 2026-04-13 | Liquid        | W   | 0.213      | -            | -                | -                | -         |     0.35 | donk, magixx, sh1ro, tN1R, zont1x |
|            5 |     5334 | 2026-03-23 | The MongolZ   | L   | 0.074      | -            | -                | -                | -         |    -2.25 | donk, magixx, sh1ro, tN1R, zont1x |
|            4 |     5406 | 2026-03-22 | 9z            | W   | 0.067      | -            | -                | -                | -         |     0.28 | donk, magixx, sh1ro, tN1R, zont1x |
|            3 |     5458 | 2026-03-21 | PARIVISION    | L   | 0.060      | -            | -                | -                | -         |    -1.81 | donk, magixx, sh1ro, tN1R, zont1x |
|            2 |     5583 | 2026-03-19 | Liquid        | W   | 0.046      | -            | -                | -                | -         |     0.07 | donk, magixx, sh1ro, tN1R, zont1x |
|            1 |     5826 | 2026-03-13 | Astralis      | L   | 0.007      | -            | -                | -                | -         |    -0.23 | donk, magixx, sh1ro, tN1R, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,270,517.21)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-06 |      1.000 | $250,000.00    | $250,000.00     |
| 2026-08-23 |      1.000 | $600,000.00    | $600,000.00     |
| 2026-08-02 |      0.952 | $97,188.00     | $92,518.24      |
| 2026-06-21 |      0.673 | $80,000.00     | $53,831.65      |
| 2026-05-17 |      0.439 | $512,000.00    | $224,514.84     |
| 2026-04-19 |      0.253 | $170,000.00    | $43,090.99      |
| 2026-03-29 |      0.112 | $50,000.00     | $5,585.97       |
| 2026-03-15 |      0.020 | $48,000.00     | $975.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
