### Roster Details<br />
Team Name: 9z Team<br />
Roster: dgt, HUASOPEEK, luchov, max, meyern<br />
Global Rank: [13](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_05.md)<br />
Regional Rank: [2]( ../../standings_americas_2026_04_05.md)<br />
<br />
Final Rank Value:  1604.1<br />
<br />
Final Rank Value (1604.1) = Starting Rank Value (1551.1) + Head To Head Adjustments (53.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.583[<sup>1</sup>](#table2)
- Bounty Collected: 0.514[<sup>2</sup>](#table1)
- Opponent Network: 0.258[<sup>2</sup>](#table1)
- LAN Wins: 0.998[<sup>2</sup>](#table1)

The average of these factors is 0.588<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1551.1
- 400 + ( ( 0.588 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1551.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.582
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       69 | 2026-04-03 | ODDIK                  | W   | 1.000      | -            | -                | -                | -         |     5.22 | dgt, HUASOPEEK, luchov, max, meyern    |
|           46 |      117 | 2026-04-02 | ODDIK                  | W   | 1.000      | -            | -                | -                | -         |     4.83 | dgt, HUASOPEEK, luchov, max, meyern    |
|           45 |      166 | 2026-04-01 | Fake do Biru           | W   | 1.000      | -            | -                | -                | -         |     1.00 | dgt, HUASOPEEK, luchov, max, meyern    |
|           44 |      218 | 2026-03-31 | RED Canids Academy     | W   | 1.000      | -            | -                | -                | -         |     0.09 | dgt, HUASOPEEK, luchov, max, meyern    |
|           43 |      293 | 2026-03-30 | Legacy                 | W   | 1.000      | 0.393        | 0.258 (0.101)    | -                | 1 (1.000) |    13.59 | dgt, HUASOPEEK, luchov, max, meyern    |
|           42 |      326 | 2026-03-29 | PaiN Gaming            | W   | 1.000      | 0.393        | 0.272 (0.107)    | -                | 1 (1.000) |    15.70 | dgt, HUASOPEEK, luchov, max, meyern    |
|           41 |      355 | 2026-03-29 | Imperial Esports       | W   | 1.000      | 0.393        | -                | 0.529 (0.208)    | 1 (1.000) |     4.73 | dgt, HUASOPEEK, luchov, max, meyern    |
|           40 |      495 | 2026-03-26 | Marsborne              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.26 | dgt, HUASOPEEK, luchov, max, meyern    |
|           39 |      498 | 2026-03-26 | Game Hunters           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.74 | dgt, HUASOPEEK, luchov, max, meyern    |
|           38 |      725 | 2026-03-22 | Team Spirit            | L   | 1.000      | -            | -                | -                | -         |    -8.62 | dgt, HUASOPEEK, luchov, max, meyern    |
|           37 |      792 | 2026-03-21 | MOUZ                   | W   | 1.000      | 1.000        | 0.666 (0.666)    | 0.291 (0.291)    | 1 (1.000) |    24.79 | dgt, HUASOPEEK, luchov, max, meyern    |
|           36 |      873 | 2026-03-19 | Team Vitality          | L   | 1.000      | -            | -                | -                | -         |    -1.84 | dgt, HUASOPEEK, luchov, max, meyern    |
|           35 |     1402 | 2026-03-08 | Marsborne              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.48 | dgt, HUASOPEEK, luchov, max, meyern    |
|           34 |     1459 | 2026-03-07 | Sharks Esports         | W   | 1.000      | 0.384        | 0.108 (0.042)    | 0.532 (0.205)    | 1 (1.000) |    10.49 | dgt, HUASOPEEK, luchov, max, meyern    |
|           33 |     1471 | 2026-03-07 | RED Canids             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.30 | dgt, HUASOPEEK, luchov, max, meyern    |
|           32 |     1595 | 2026-03-04 | BESTIA                 | W   | 0.984      | 0.384        | -                | 0.817 (0.309)    | 1 (0.984) |     7.69 | dgt, HUASOPEEK, luchov, max, meyern    |
|           31 |     1597 | 2026-03-04 | Fake do Biru           | W   | 0.982      | -            | -                | -                | -         |     1.26 | dgt, HUASOPEEK, luchov, max, meyern    |
|           30 |     1736 | 2026-03-01 | Sharks Esports         | W   | 0.962      | 0.435        | 0.108 (0.045)    | 0.532 (0.222)    | -         |    10.62 | dgt, HUASOPEEK, luchov, max, meyern    |
|           29 |     1780 | 2026-02-28 | RED Canids             | W   | 0.956      | -            | -                | -                | -         |     7.20 | dgt, HUASOPEEK, luchov, max, meyern    |
|           28 |     1788 | 2026-02-28 | Fluxo W7M              | W   | 0.954      | -            | -                | -                | -         |     7.07 | dgt, HUASOPEEK, luchov, max, meyern    |
|           27 |     1834 | 2026-02-27 | Marsborne              | W   | 0.947      | 0.435        | -                | 0.491 (0.202)    | -         |     5.10 | dgt, HUASOPEEK, luchov, max, meyern    |
|           26 |     1878 | 2026-02-26 | Sharks Esports         | L   | 0.942      | -            | -                | -                | -         |   -19.36 | dgt, HUASOPEEK, luchov, max, meyern    |
|           25 |     1949 | 2026-02-25 | ODDIK                  | W   | 0.935      | 0.435        | -                | 0.564 (0.229)    | -         |     8.57 | dgt, HUASOPEEK, luchov, max, meyern    |
|           24 |     2518 | 2026-02-14 | Sharks Esports         | L   | 0.861      | -            | -                | -                | -         |   -19.17 | dgt, HUASOPEEK, luchov, max, meyern    |
|           23 |     2582 | 2026-02-13 | Bounty Hunters Esports | W   | 0.855      | -            | -                | -                | -         |     2.73 | dgt, HUASOPEEK, luchov, max, meyern    |
|           22 |     2762 | 2026-02-08 | Despedidos             | W   | 0.821      | -            | -                | -                | -         |     1.00 | dgt, HUASOPEEK, luchov, max, meyern    |
|           21 |     2780 | 2026-02-08 | Sharks Esports         | W   | 0.820      | 0.769        | 0.108 (0.068)    | 0.532 (0.335)    | -         |     7.39 | dgt, HUASOPEEK, luchov, max, meyern    |
|           20 |     2802 | 2026-02-07 | Imperial Esports       | W   | 0.813      | 0.769        | 0.043 (0.027)    | 0.529 (0.330)    | -         |     6.22 | dgt, HUASOPEEK, luchov, max, meyern    |
|           19 |     2827 | 2026-02-06 | Fake do Biru           | W   | 0.808      | -            | -                | -                | -         |     1.26 | dgt, HUASOPEEK, luchov, max, meyern    |
|           18 |     2835 | 2026-02-06 | Gaimin Gladiators      | W   | 0.807      | 0.769        | 0.048 (0.030)    | 0.406 (0.252)    | -         |     9.64 | dgt, HUASOPEEK, luchov, max, meyern    |
|           17 |     2912 | 2026-02-03 | ShindeN                | W   | 0.786      | 0.371        | 0.071 (0.021)    | -                | -         |     8.80 | dgt, HUASOPEEK, luchov, max, meyern    |
|           16 |     2999 | 2026-01-31 | MIBR                   | L   | 0.769      | -            | -                | -                | -         |   -15.77 | dgt, HUASOPEEK, luchov, max, meyern    |
|           15 |     3003 | 2026-01-31 | Sharks Esports         | W   | 0.767      | 0.371        | 0.108 (0.031)    | -                | -         |     7.16 | dgt, HUASOPEEK, luchov, max, meyern    |
|           14 |     3039 | 2026-01-30 | LUNA Esports           | W   | 0.762      | -            | -                | -                | -         |     0.11 | dgt, HUASOPEEK, luchov, max, meyern    |
|           13 |     3040 | 2026-01-30 | MIBR                   | L   | 0.761      | -            | -                | -                | -         |   -16.71 | dgt, HUASOPEEK, luchov, max, meyern    |
|           12 |     3162 | 2026-01-25 | RED Canids             | W   | 0.726      | -            | -                | -                | -         |     6.01 | dgt, HUASOPEEK, luchov, max, meyern    |
|           11 |     3186 | 2026-01-24 | Gaimin Gladiators      | L   | 0.721      | -            | -                | -                | -         |   -14.31 | dgt, HUASOPEEK, luchov, max, meyern    |
|           10 |     3207 | 2026-01-24 | Fake do Biru           | W   | 0.719      | -            | -                | -                | -         |     1.02 | dgt, HUASOPEEK, luchov, max, meyern    |
|            9 |     3234 | 2026-01-23 | Keyd Stars             | W   | 0.714      | -            | -                | -                | -         |     0.31 | dgt, HUASOPEEK, luchov, max, meyern    |
|            8 |     3286 | 2026-01-22 | ShindeN                | L   | 0.707      | -            | -                | -                | -         |   -15.20 | dgt, HUASOPEEK, luchov, max, meyern    |
|            7 |     3294 | 2026-01-22 | MIBR                   | L   | 0.706      | -            | -                | -                | -         |   -17.43 | dgt, HUASOPEEK, luchov, max, meyern    |
|            6 |     3303 | 2026-01-22 | Keyd Stars             | W   | 0.705      | -            | -                | -                | -         |     0.25 | dgt, HUASOPEEK, luchov, max, meyern    |
|            5 |     3318 | 2026-01-21 | Sharks Esports         | W   | 0.701      | -            | -                | -                | -         |     5.91 | dgt, HUASOPEEK, luchov, max, meyern    |
|            4 |     3332 | 2026-01-21 | Imperial Esports       | L   | 0.700      | -            | -                | -                | -         |   -17.09 | dgt, HUASOPEEK, luchov, max, meyern    |
|            3 |     3419 | 2026-01-17 | Galorys                | W   | 0.675      | -            | -                | -                | -         |     1.20 | dgt, HUASOPEEK, luchov, meyern, urban0 |
|            2 |     3426 | 2026-01-17 | Alzon                  | W   | 0.675      | -            | -                | -                | -         |     0.04 | dgt, HUASOPEEK, luchov, meyern, urban0 |
|            1 |     4402 | 2025-11-20 | Gaimin Gladiators      | L   | 0.288      | -            | -                | -                | -         |    -6.25 | HUASOPEEK, luchov, Luken, max, meyern  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87,913.61)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-30 |      1.000 | $8,587.94      | $8,587.94       |
| 2026-03-29 |      1.000 | $32,500.00     | $32,500.00      |
| 2026-03-08 |      1.000 | $14,000.00     | $14,000.00      |
| 2026-03-01 |      0.962 | $30,000.00     | $28,853.15      |
| 2026-02-15 |      0.868 | $750.00        | $650.91         |
| 2026-02-01 |      0.775 | $1,000.00      | $775.31         |
| 2026-01-25 |      0.728 | $3,500.00      | $2,546.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
