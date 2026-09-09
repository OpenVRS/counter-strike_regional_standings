### Roster Details<br />
Team Name: 9z<br />
Roster: dgt, HUASOPEEK, luchov, max, meyern<br />
Global Rank: [9](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [3]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1603.9<br />
<br />
Final Rank Value (1603.9) = Starting Rank Value (1663.9) + Head To Head Adjustments (-60.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.844[<sup>1</sup>](#table2)
- Bounty Collected: 0.654[<sup>2</sup>](#table1)
- Opponent Network: 0.309[<sup>2</sup>](#table1)
- LAN Wins: 0.848[<sup>2</sup>](#table1)

The average of these factors is 0.664<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1663.9
- 400 + ( ( 0.664 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1663.9


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
|           47 |      362 | 2026-08-29 | Vitality           | L   | 1.000      | -            | -                | -                | -         |    -7.77 | dgt, HUASOPEEK, luchov, max, meyern |
|           46 |      446 | 2026-08-27 | MOUZ               | L   | 1.000      | -            | -                | -                | -         |    -5.87 | dgt, HUASOPEEK, luchov, max, meyern |
|           45 |      764 | 2026-08-16 | magic              | L   | 1.000      | -            | -                | -                | -         |   -24.65 | dgt, HUASOPEEK, luchov, max, meyern |
|           44 |      795 | 2026-08-15 | FURIA              | L   | 1.000      | -            | -                | -                | -         |   -10.52 | dgt, HUASOPEEK, luchov, max, meyern |
|           43 |      877 | 2026-08-12 | paiN               | W   | 1.000      | 1.000        | 0.300 (0.300)    | 0.318 (0.318)    | 1 (1.000) |     3.70 | dgt, HUASOPEEK, luchov, max, meyern |
|           42 |     1772 | 2026-07-12 | PARIVISION         | W   | 0.811      | 1.000        | 0.393 (0.319)    | 0.250 (0.203)    | 1 (0.811) |     6.95 | dgt, HUASOPEEK, luchov, max, meyern |
|           41 |     1786 | 2026-07-11 | Alliance           | W   | 0.804      | 1.000        | 0.209 (0.168)    | 0.439 (0.353)    | 1 (0.804) |     5.96 | dgt, HUASOPEEK, luchov, max, meyern |
|           40 |     1832 | 2026-07-09 | TYLOO              | W   | 0.791      | 1.000        | -                | 0.560 (0.443)    | 1 (0.791) |     4.90 | dgt, HUASOPEEK, luchov, max, meyern |
|           39 |     1870 | 2026-07-05 | MIBR               | W   | 0.764      | 1.000        | -                | 0.456 (0.349)    | 1 (0.764) |     6.15 | dgt, HUASOPEEK, luchov, max, meyern |
|           38 |     1881 | 2026-07-04 | Alliance           | L   | 0.758      | -            | -                | -                | -         |   -18.58 | dgt, HUASOPEEK, luchov, max, meyern |
|           37 |     1900 | 2026-07-03 | 3DMAX              | W   | 0.751      | 1.000        | 0.301 (0.226)    | 0.387 (0.291)    | 1 (0.751) |     2.77 | dgt, HUASOPEEK, luchov, max, meyern |
|           36 |     1913 | 2026-07-02 | SINNERS            | W   | 0.746      | 1.000        | -                | 0.475 (0.354)    | 1 (0.746) |     0.94 | dgt, HUASOPEEK, luchov, max, meyern |
|           35 |     1939 | 2026-07-01 | EYEBALLERS         | L   | 0.738      | -            | -                | -                | -         |   -20.43 | dgt, HUASOPEEK, luchov, max, meyern |
|           34 |     2145 | 2026-06-18 | FURIA              | L   | 0.653      | -            | -                | -                | -         |    -6.88 | dgt, HUASOPEEK, luchov, max, meyern |
|           33 |     2187 | 2026-06-15 | The MongolZ        | W   | 0.632      | 1.000        | 0.350 (0.221)    | -                | 1 (0.632) |     4.52 | dgt, HUASOPEEK, luchov, max, meyern |
|           32 |     2207 | 2026-06-14 | Aurora             | L   | 0.626      | -            | -                | -                | -         |   -12.94 | dgt, HUASOPEEK, luchov, max, meyern |
|           31 |     2225 | 2026-06-13 | Spirit             | L   | 0.621      | -            | -                | -                | -         |    -2.53 | dgt, HUASOPEEK, luchov, max, meyern |
|           30 |     2283 | 2026-06-12 | Vitality           | W   | 0.613      | 1.000        | 0.858 (0.526)    | 0.422 (0.259)    | 1 (0.613) |    15.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           29 |     2323 | 2026-06-11 | PARIVISION         | W   | 0.604      | 1.000        | 0.393 (0.237)    | -                | 1 (0.604) |     4.37 | dgt, HUASOPEEK, luchov, max, meyern |
|           28 |     2370 | 2026-06-08 | TYLOO              | W   | 0.586      | 0.809        | -                | 0.560 (0.265)    | -         |     2.75 | dgt, HUASOPEEK, luchov, max, meyern |
|           27 |     2388 | 2026-06-07 | Spirit             | L   | 0.580      | -            | -                | -                | -         |    -2.20 | dgt, HUASOPEEK, luchov, max, meyern |
|           26 |     2419 | 2026-06-06 | Astralis           | W   | 0.572      | 0.809        | 0.375 (0.174)    | -                | -         |     4.25 | dgt, HUASOPEEK, luchov, max, meyern |
|           25 |     2434 | 2026-06-06 | FlyQuest           | W   | 0.571      | -            | -                | -                | -         |     0.95 | dgt, HUASOPEEK, luchov, max, meyern |
|           24 |     2647 | 2026-05-29 | FaZe               | L   | 0.518      | -            | -                | -                | -         |   -10.05 | dgt, HUASOPEEK, luchov, max, meyern |
|           23 |     2684 | 2026-05-28 | HEROIC             | W   | 0.513      | -            | -                | -                | -         |     2.45 | dgt, HUASOPEEK, luchov, max, meyern |
|           22 |     2719 | 2026-05-27 | DENDELE            | L   | 0.507      | -            | -                | -                | -         |   -13.78 | dgt, HUASOPEEK, luchov, max, meyern |
|           21 |     3167 | 2026-05-15 | magic              | L   | 0.425      | -            | -                | -                | -         |   -11.50 | dgt, HUASOPEEK, luchov, max, meyern |
|           20 |     3303 | 2026-05-11 | MOUZ               | W   | 0.398      | 1.000        | 1.000 (0.398)    | 0.634 (0.253)    | -         |    10.14 | dgt, HUASOPEEK, luchov, max, meyern |
|           19 |     3332 | 2026-05-10 | Falcons            | W   | 0.392      | 1.000        | 1.000 (0.392)    | -                | -         |     9.78 | dgt, HUASOPEEK, luchov, max, meyern |
|           18 |     3370 | 2026-05-09 | PARIVISION         | W   | 0.385      | -            | -                | -                | -         |     3.01 | dgt, HUASOPEEK, luchov, max, meyern |
|           17 |     3785 | 2026-04-26 | Legacy             | L   | 0.301      | -            | -                | -                | -         |    -2.75 | dgt, HUASOPEEK, luchov, max, meyern |
|           16 |     3856 | 2026-04-25 | Vasco              | W   | 0.294      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           15 |     3923 | 2026-04-24 | Legacy             | L   | 0.287      | -            | -                | -                | -         |    -2.68 | dgt, HUASOPEEK, luchov, max, meyern |
|           14 |     3965 | 2026-04-23 | Vasco              | W   | 0.281      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           13 |     4008 | 2026-04-22 | ALKA               | W   | 0.273      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, max, meyern |
|           12 |     4537 | 2026-04-03 | Turma do Pagode    | W   | 0.148      | -            | -                | -                | -         |     0.03 | dgt, HUASOPEEK, luchov, max, meyern |
|           11 |     4646 | 2026-04-02 | Turma do Pagode    | W   | 0.140      | -            | -                | -                | -         |     0.02 | dgt, HUASOPEEK, luchov, max, meyern |
|           10 |     4718 | 2026-04-01 | Fake do Biru       | W   | 0.135      | -            | -                | -                | -         |     0.02 | dgt, HUASOPEEK, luchov, max, meyern |
|            9 |     4805 | 2026-03-31 | RED Canids Academy | W   | 0.128      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern |
|            8 |     4901 | 2026-03-30 | Legacy             | W   | 0.122      | -            | -                | -                | -         |     2.81 | dgt, HUASOPEEK, luchov, max, meyern |
|            7 |     4961 | 2026-03-29 | paiN               | W   | 0.115      | -            | -                | -                | -         |     0.42 | dgt, HUASOPEEK, luchov, max, meyern |
|            6 |     5003 | 2026-03-29 | Imperial           | W   | 0.112      | -            | -                | -                | -         |     0.10 | dgt, HUASOPEEK, luchov, max, meyern |
|            5 |     5167 | 2026-03-26 | Marsborne          | W   | 0.095      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern |
|            4 |     5170 | 2026-03-26 | MEIA NOITE         | W   | 0.094      | -            | -                | -                | -         |     0.01 | dgt, HUASOPEEK, luchov, max, meyern |
|            3 |     5406 | 2026-03-22 | Spirit             | L   | 0.067      | -            | -                | -                | -         |    -0.28 | dgt, HUASOPEEK, luchov, max, meyern |
|            2 |     5468 | 2026-03-21 | MOUZ               | W   | 0.060      | -            | -                | -                | -         |     1.55 | dgt, HUASOPEEK, luchov, max, meyern |
|            1 |     5567 | 2026-03-19 | Vitality           | L   | 0.047      | -            | -                | -                | -         |    -0.33 | dgt, HUASOPEEK, luchov, max, meyern |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($328,267.48)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.65) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-06 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-08-23 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-07-12 |      0.811 | $260,000.00    | $210,876.35     |
| 2026-06-21 |      0.673 | $45,000.00     | $30,280.31      |
| 2026-05-30 |      0.526 | $9,000.00      | $4,737.83       |
| 2026-05-17 |      0.439 | $80,000.00     | $35,080.44      |
| 2026-04-26 |      0.301 | $8,750.00      | $2,635.55       |
| 2026-03-30 |      0.122 | $8,442.00      | $1,026.12       |
| 2026-03-29 |      0.112 | $32,500.00     | $3,630.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
