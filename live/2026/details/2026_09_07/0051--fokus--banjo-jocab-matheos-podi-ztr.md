### Roster Details<br />
Team Name: FOKUS<br />
Roster: Banjo, jocab, Matheos, podi, ztr<br />
Global Rank: [51](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [39]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1160.4<br />
<br />
Final Rank Value (1160.4) = Starting Rank Value (1205.6) + Head To Head Adjustments (-45.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.216[<sup>2</sup>](#table1)
- LAN Wins: 0.517[<sup>2</sup>](#table1)

The average of these factors is 0.423<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1205.6
- 400 + ( ( 0.423 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1205.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       45 | 2026-09-06 | ASTRAL           | L   | 1.000      | -            | -                | -                | -         |   -20.87 | Banjo, jocab, Matheos, podi, ztr |
|           45 |       54 | 2026-09-06 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |   -17.09 | Banjo, jocab, Matheos, podi, ztr |
|           44 |       66 | 2026-09-05 | HOTU             | W   | 1.000      | 0.143        | 0.144 (0.021)    | 1.000 (0.143)    | -         |    23.62 | Banjo, jocab, Matheos, podi, ztr |
|           43 |       81 | 2026-09-04 | BET-M            | L   | 1.000      | -            | -                | -                | -         |   -24.46 | Banjo, jocab, Matheos, podi, ztr |
|           42 |       88 | 2026-09-04 | BC.Game          | W   | 1.000      | -            | -                | -                | -         |    20.26 | Banjo, jocab, Matheos, podi, ztr |
|           41 |      104 | 2026-09-04 | aimclub          | W   | 1.000      | -            | -                | -                | -         |     2.40 | Banjo, jocab, Matheos, podi, ztr |
|           40 |      130 | 2026-09-03 | SINNERS          | W   | 1.000      | 0.143        | 0.102 (0.015)    | -                | -         |    11.91 | Banjo, jocab, Matheos, podi, ztr |
|           39 |      431 | 2026-08-27 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -25.51 | Banjo, jocab, Matheos, podi, ztr |
|           38 |      936 | 2026-08-09 | Acend            | L   | 0.998      | -            | -                | -                | -         |   -13.02 | Banjo, jocab, Matheos, podi, ztr |
|           37 |      979 | 2026-08-08 | Sashi            | W   | 0.991      | 0.818        | 0.055 (0.045)    | 0.621 (0.504)    | 1 (0.991) |    17.25 | Banjo, jocab, Matheos, podi, ztr |
|           36 |     1000 | 2026-08-07 | Partizan         | W   | 0.986      | -            | -                | -                | 1 (0.986) |     1.00 | Banjo, jocab, Matheos, podi, ztr |
|           35 |     1420 | 2026-07-25 | MOUZ             | L   | 0.900      | -            | -                | -                | -         |    -0.56 | Banjo, jocab, Matheos, podi, ztr |
|           34 |     1493 | 2026-07-23 | HEROIC           | L   | 0.886      | -            | -                | -                | -         |    -7.70 | Banjo, jocab, Matheos, podi, ztr |
|           33 |     1508 | 2026-07-23 | Aurora           | W   | 0.885      | 0.903        | 0.413 (0.330)    | 0.425 (0.339)    | -         |    25.05 | Banjo, jocab, Matheos, podi, ztr |
|           32 |     1543 | 2026-07-21 | Astralis         | L   | 0.873      | -            | -                | -                | -         |    -5.29 | Banjo, jocab, Matheos, podi, ztr |
|           31 |     2061 | 2026-06-25 | INFINITE         | L   | 0.697      | -            | -                | -                | -         |   -10.13 | Banjo, Jorko, Matheos, volt, ztr |
|           30 |     2075 | 2026-06-24 | BBL              | L   | 0.693      | -            | -                | -                | -         |   -11.81 | Banjo, Jorko, Matheos, volt, ztr |
|           29 |     2086 | 2026-06-23 | OG               | W   | 0.686      | 0.548        | 0.024 (0.009)    | 0.441 (0.166)    | 1 (0.686) |     5.87 | Banjo, Jorko, Matheos, volt, ztr |
|           28 |     2102 | 2026-06-21 | Phantom          | L   | 0.672      | -            | -                | -                | -         |   -18.98 | Banjo, Jorko, Matheos, volt, ztr |
|           27 |     2123 | 2026-06-20 | CYBERSHOKE       | W   | 0.664      | -            | -                | -                | -         |     2.90 | Banjo, Jorko, Matheos, volt, ztr |
|           26 |     2157 | 2026-06-18 | Noir Verse       | W   | 0.651      | 0.435        | -                | 0.519 (0.147)    | -         |     3.09 | Banjo, Jorko, Matheos, volt, ztr |
|           25 |     2548 | 2026-05-31 | Nemesis          | L   | 0.534      | -            | -                | -                | -         |    -9.50 | Banjo, Jorko, Matheos, volt, ztr |
|           24 |     2558 | 2026-05-31 | Nemiga           | W   | 0.533      | 0.435        | 0.058 (0.013)    | 0.717 (0.166)    | -         |     5.06 | Banjo, Jorko, Matheos, volt, ztr |
|           23 |     2599 | 2026-05-30 | fnatic           | W   | 0.526      | 0.435        | 0.045 (0.010)    | 0.893 (0.204)    | -         |    10.80 | Banjo, Jorko, Matheos, volt, ztr |
|           22 |     2711 | 2026-05-28 | Black Phoenix    | W   | 0.511      | 0.435        | -                | 0.948 (0.210)    | -         |     2.62 | Banjo, Jorko, Matheos, volt, ztr |
|           21 |     2838 | 2026-05-24 | Wildcard         | L   | 0.487      | -            | -                | -                | -         |    -9.07 | Banjo, Jorko, Matheos, volt, ztr |
|           20 |     2853 | 2026-05-24 | Inner Circle     | W   | 0.485      | 0.435        | 0.179 (0.038)    | 0.553 (0.117)    | 1 (0.485) |    12.92 | Banjo, Jorko, Matheos, volt, ztr |
|           19 |     2878 | 2026-05-23 | Wildcard         | L   | 0.480      | -            | -                | -                | -         |    -9.05 | Banjo, Jorko, Matheos, volt, ztr |
|           18 |     2902 | 2026-05-23 | DENDELE          | W   | 0.478      | 0.435        | 0.130 (0.027)    | -                | 1 (0.478) |    10.73 | Banjo, Jorko, Matheos, volt, ztr |
|           17 |     2940 | 2026-05-22 | RBLS             | W   | 0.473      | -            | -                | -                | 1 (0.473) |     2.01 | Banjo, Jorko, Matheos, volt, ztr |
|           16 |     3033 | 2026-05-20 | Color            | L   | 0.459      | -            | -                | -                | -         |   -11.01 | Banjo, Jorko, Matheos, volt, ztr |
|           15 |     3056 | 2026-05-19 | Butterfly        | W   | 0.454      | 0.435        | -                | 0.839 (0.165)    | -         |     4.76 | Banjo, Jorko, Matheos, volt, ztr |
|           14 |     3544 | 2026-05-02 | Iberian Soul     | L   | 0.338      | -            | -                | -                | -         |    -6.23 | Banjo, Jorko, Matheos, volt, ztr |
|           13 |     3616 | 2026-04-30 | Passion UA       | W   | 0.327      | -            | -                | -                | -         |     1.16 | Banjo, Jorko, Matheos, volt, ztr |
|           12 |     3878 | 2026-04-25 | KOLESIE          | L   | 0.293      | -            | -                | -                | -         |    -7.67 | Banjo, Jorko, Matheos, volt, ztr |
|           11 |     4305 | 2026-04-08 | EYEBALLERS       | L   | 0.177      | -            | -                | -                | -         |    -2.13 | Banjo, Jorko, Matheos, volt, ztr |
|           10 |     4334 | 2026-04-07 | BC.Game          | W   | 0.171      | -            | -                | -                | 1 (0.171) |     0.26 | Banjo, Jorko, Matheos, volt, ztr |
|            9 |     4377 | 2026-04-06 | Wildcard         | L   | 0.164      | -            | -                | -                | -         |    -3.38 | Banjo, Jorko, Matheos, volt, ztr |
|            8 |     4416 | 2026-04-05 | PARIVISION       | L   | 0.158      | -            | -                | -                | -         |    -0.94 | Banjo, Jorko, Matheos, volt, ztr |
|            7 |     4511 | 2026-04-04 | 3DMAX            | W   | 0.151      | 1.000        | 0.301 (0.045)    | -                | 1 (0.151) |     2.91 | Banjo, Jorko, Matheos, volt, ztr |
|            6 |     5264 | 2026-03-24 | Phantom          | W   | 0.081      | -            | -                | -                | 1 (0.081) |     0.21 | Banjo, Jorko, Matheos, volt, ztr |
|            5 |     5283 | 2026-03-24 | OlyBet           | W   | 0.079      | -            | -                | -                | 1 (0.079) |     0.08 | Banjo, Jorko, Matheos, volt, ztr |
|            4 |     5296 | 2026-03-24 | Wildcard         | W   | 0.079      | -            | -                | -                | -         |     0.86 | Banjo, Jorko, Matheos, volt, ztr |
|            3 |     5389 | 2026-03-23 | 3DMAX            | W   | 0.071      | -            | -                | -                | -         |     1.40 | Banjo, Jorko, Matheos, volt, ztr |
|            2 |     5392 | 2026-03-23 | FOKUS REALITY    | W   | 0.071      | -            | -                | -                | -         |     0.02 | Banjo, Jorko, Matheos, volt, ztr |
|            1 |     5394 | 2026-03-23 | GAMEHARMONY      | W   | 0.070      | -            | -                | -                | -         |     0.03 | Banjo, Jorko, Matheos, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,021.98)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.907 | $41,250.00     | $37,396.66      |
| 2026-06-28 |      0.721 | $2,500.00      | $1,801.93       |
| 2026-05-31 |      0.534 | $10,000.00     | $5,335.03       |
| 2026-05-24 |      0.487 | $10,000.00     | $4,865.69       |
| 2026-05-21 |      0.466 | $2,000.00      | $931.29         |
| 2026-04-26 |      0.300 | $3,500.00      | $1,050.23       |
| 2026-04-11 |      0.200 | $31,250.00     | $6,234.77       |
| 2026-03-24 |      0.081 | $5,000.00      | $406.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
