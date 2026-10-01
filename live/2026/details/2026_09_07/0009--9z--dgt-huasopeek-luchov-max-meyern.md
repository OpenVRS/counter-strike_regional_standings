### Roster Details<br />
Team Name: 9z<br />
Roster: dgt, HUASOPEEK, luchov, max, meyern<br />
Global Rank: [9](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [3]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1605.9<br />
<br />
Final Rank Value (1605.9) = Starting Rank Value (1666.5) + Head To Head Adjustments (-60.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.844[<sup>1</sup>](#table2)
- Bounty Collected: 0.656[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.850[<sup>2</sup>](#table1)

The average of these factors is 0.666<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1666.5
- 400 + ( ( 0.666 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1666.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      334 | 2026-08-29 | Vitality           | L   | 1.000      | -            | -                | -                | -         |    -7.83 | dgt, HUASOPEEK, luchov, max, meyern |
|           46 |      418 | 2026-08-27 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -5.93 | dgt, HUASOPEEK, luchov, max, meyern |
|           45 |      736 | 2026-08-16 | magic              | L   | 1.000      | -            | -                | -                | -         |   -24.64 | dgt, HUASOPEEK, luchov, max, meyern |
|           44 |      767 | 2026-08-15 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -10.60 | dgt, HUASOPEEK, luchov, max, meyern |
|           43 |      849 | 2026-08-12 | paiN               | W   | 1.000      | 1.000        | 0.300 (0.300)    | 0.320 (0.320)    | 1 (1.000) |     3.71 | dgt, HUASOPEEK, luchov, max, meyern |
|           42 |     1744 | 2026-07-12 | PARIVISION         | W   | 0.817      | 1.000        | 0.394 (0.322)    | 0.252 (0.206)    | 1 (0.817) |     7.01 | dgt, HUASOPEEK, luchov, max, meyern |
|           41 |     1758 | 2026-07-11 | Alliance           | W   | 0.810      | 1.000        | 0.209 (0.169)    | 0.444 (0.360)    | 1 (0.810) |     5.96 | dgt, HUASOPEEK, luchov, max, meyern |
|           40 |     1804 | 2026-07-09 | TYLOO              | W   | 0.796      | 1.000        | -                | 0.562 (0.448)    | 1 (0.796) |     4.94 | dgt, HUASOPEEK, luchov, max, meyern |
|           39 |     1842 | 2026-07-05 | MIBR               | W   | 0.769      | 1.000        | -                | 0.457 (0.352)    | 1 (0.769) |     6.21 | dgt, HUASOPEEK, luchov, max, meyern |
|           38 |     1853 | 2026-07-04 | Alliance           | L   | 0.764      | -            | -                | -                | -         |   -18.76 | dgt, HUASOPEEK, luchov, max, meyern |
|           37 |     1872 | 2026-07-03 | 3DMAX              | W   | 0.756      | 1.000        | 0.301 (0.228)    | 0.389 (0.294)    | 1 (0.756) |     2.79 | dgt, HUASOPEEK, luchov, max, meyern |
|           36 |     1885 | 2026-07-02 | SINNERS            | W   | 0.751      | 1.000        | -                | 0.477 (0.358)    | 1 (0.751) |     0.95 | dgt, HUASOPEEK, luchov, max, meyern |
|           35 |     1911 | 2026-07-01 | EYEBALLERS         | L   | 0.744      | -            | -                | -                | -         |   -20.58 | dgt, HUASOPEEK, luchov, max, meyern |
|           34 |     2117 | 2026-06-18 | FURIA              | L   | 0.659      | -            | -                | -                | -         |    -7.00 | dgt, HUASOPEEK, luchov, max, meyern |
|           33 |     2159 | 2026-06-15 | The MongolZ        | W   | 0.637      | 1.000        | 0.352 (0.224)    | -                | 1 (0.637) |     4.57 | dgt, HUASOPEEK, luchov, max, meyern |
|           32 |     2179 | 2026-06-14 | Aurora             | L   | 0.631      | -            | -                | -                | -         |   -13.06 | dgt, HUASOPEEK, luchov, max, meyern |
|           31 |     2197 | 2026-06-13 | Spirit             | L   | 0.626      | -            | -                | -                | -         |    -2.58 | dgt, HUASOPEEK, luchov, max, meyern |
|           30 |     2255 | 2026-06-12 | Vitality           | W   | 0.619      | 1.000        | 0.862 (0.533)    | 0.423 (0.262)    | 1 (0.619) |    15.13 | dgt, HUASOPEEK, luchov, max, meyern |
|           29 |     2295 | 2026-06-11 | PARIVISION         | W   | 0.610      | 1.000        | 0.394 (0.240)    | -                | 1 (0.610) |     4.42 | dgt, HUASOPEEK, luchov, max, meyern |
|           28 |     2342 | 2026-06-08 | TYLOO              | W   | 0.591      | 0.809        | -                | 0.562 (0.269)    | -         |     2.77 | dgt, HUASOPEEK, luchov, max, meyern |
|           27 |     2360 | 2026-06-07 | Spirit             | L   | 0.585      | -            | -                | -                | -         |    -2.25 | dgt, HUASOPEEK, luchov, max, meyern |
|           26 |     2391 | 2026-06-06 | Astralis           | W   | 0.578      | 0.809        | 0.378 (0.177)    | -                | -         |     4.30 | dgt, HUASOPEEK, luchov, max, meyern |
|           25 |     2406 | 2026-06-06 | FlyQuest           | W   | 0.576      | -            | -                | -                | -         |     0.95 | dgt, HUASOPEEK, luchov, max, meyern |
|           24 |     2619 | 2026-05-29 | FaZe               | L   | 0.524      | -            | -                | -                | -         |   -10.19 | dgt, HUASOPEEK, luchov, max, meyern |
|           23 |     2656 | 2026-05-28 | HEROIC             | W   | 0.518      | -            | -                | -                | -         |     2.46 | dgt, HUASOPEEK, luchov, max, meyern |
|           22 |     2691 | 2026-05-27 | DENDELE            | L   | 0.512      | -            | -                | -                | -         |   -13.93 | dgt, HUASOPEEK, luchov, max, meyern |
|           21 |     3139 | 2026-05-15 | magic              | L   | 0.431      | -            | -                | -                | -         |   -11.65 | dgt, HUASOPEEK, luchov, max, meyern |
|           20 |     3275 | 2026-05-11 | MOUZ               | W   | 0.404      | 1.000        | 1.000 (0.404)    | 0.635 (0.256)    | -         |    10.26 | dgt, HUASOPEEK, luchov, max, meyern |
|           19 |     3304 | 2026-05-10 | Falcons            | W   | 0.398      | 1.000        | 1.000 (0.398)    | -                | -         |     9.88 | dgt, HUASOPEEK, luchov, max, meyern |
|           18 |     3342 | 2026-05-09 | PARIVISION         | W   | 0.390      | -            | -                | -                | -         |     3.06 | dgt, HUASOPEEK, luchov, max, meyern |
|           17 |     3757 | 2026-04-26 | Legacy             | L   | 0.307      | -            | -                | -                | -         |    -2.85 | dgt, HUASOPEEK, luchov, max, meyern |
|           16 |     3828 | 2026-04-25 | Vasco              | W   | 0.300      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           15 |     3895 | 2026-04-24 | Legacy             | L   | 0.293      | -            | -                | -                | -         |    -2.78 | dgt, HUASOPEEK, luchov, max, meyern |
|           14 |     3937 | 2026-04-23 | Vasco              | W   | 0.287      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           13 |     3980 | 2026-04-22 | ALKA               | W   | 0.279      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           12 |     4509 | 2026-04-03 | Turma do Pagode    | W   | 0.153      | -            | -                | -                | -         |     0.03 | dgt, HUASOPEEK, luchov, max, meyern |
|           11 |     4618 | 2026-04-02 | Turma do Pagode    | W   | 0.145      | -            | -                | -                | -         |     0.03 | dgt, HUASOPEEK, luchov, max, meyern |
|           10 |     4690 | 2026-04-01 | Fake do Biru       | W   | 0.140      | -            | -                | -                | -         |     0.02 | dgt, HUASOPEEK, luchov, max, meyern |
|            9 |     4777 | 2026-03-31 | RED Canids Academy | W   | 0.133      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern |
|            8 |     4873 | 2026-03-30 | Legacy             | W   | 0.127      | -            | -                | -                | -         |     2.92 | dgt, HUASOPEEK, luchov, max, meyern |
|            7 |     4933 | 2026-03-29 | paiN               | W   | 0.120      | -            | -                | -                | -         |     0.45 | dgt, HUASOPEEK, luchov, max, meyern |
|            6 |     4975 | 2026-03-29 | Imperial           | W   | 0.118      | -            | -                | -                | -         |     0.10 | dgt, HUASOPEEK, luchov, max, meyern |
|            5 |     5139 | 2026-03-26 | Marsborne          | W   | 0.101      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern |
|            4 |     5142 | 2026-03-26 | MEIA NOITE         | W   | 0.100      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern |
|            3 |     5378 | 2026-03-22 | Spirit             | L   | 0.073      | -            | -                | -                | -         |    -0.31 | dgt, HUASOPEEK, luchov, max, meyern |
|            2 |     5440 | 2026-03-21 | MOUZ               | W   | 0.065      | -            | -                | -                | -         |     1.69 | dgt, HUASOPEEK, luchov, max, meyern |
|            1 |     5539 | 2026-03-19 | Vitality           | L   | 0.053      | -            | -                | -                | -         |    -0.37 | dgt, HUASOPEEK, luchov, max, meyern |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($330,692.45)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.65) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-06 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-08-23 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-07-12 |      0.817 | $260,000.00    | $212,297.36     |
| 2026-06-21 |      0.678 | $45,000.00     | $30,526.25      |
| 2026-05-30 |      0.532 | $9,000.00      | $4,787.02       |
| 2026-05-17 |      0.444 | $80,000.00     | $35,517.68      |
| 2026-04-26 |      0.307 | $8,750.00      | $2,683.37       |
| 2026-03-30 |      0.127 | $8,442.00      | $1,072.26       |
| 2026-03-29 |      0.117 | $32,500.00     | $3,808.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
