### Roster Details<br />
Team Name: Ursa<br />
Roster: 4X1s, Alv, k0s, karnez, Salazar<br />
Global Rank: [96](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [68]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  1112.3<br />
<br />
Final Rank Value (1112.3) = Starting Rank Value (895.9) + Head To Head Adjustments (216.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.370[<sup>1</sup>](#table2)
- Bounty Collected: 0.364[<sup>2</sup>](#table1)
- Opponent Network: 0.279[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.9
- 400 + ( ( 0.253 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 895.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.700
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      132 | 2026-04-02 | ECSTATIC            | L   | 1.000      | -            | -                | -                | -         |    -9.62 | 4X1s, Alv, k0s, karnez, Salazar     |
|           56 |      197 | 2026-04-01 | GenOne              | W   | 1.000      | 0.435        | -                | 0.540 (0.235)    | 0 (0.000) |    11.11 | 4X1s, Alv, k0s, karnez, Salazar     |
|           55 |      479 | 2026-03-27 | WOPA Esport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.96 | 4X1s, Alv, k0s, karnez, Salazar     |
|           54 |      546 | 2026-03-25 | Nemiga Gaming       | L   | 1.000      | -            | -                | -                | -         |    -5.54 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           53 |      557 | 2026-03-25 | Leo Team            | W   | 1.000      | 0.435        | -                | 0.565 (0.246)    | 0 (0.000) |    11.84 | 4X1s, Alv, k0s, karnez, Salazar     |
|           52 |      565 | 2026-03-25 | Rebels Gaming       | L   | 1.000      | -            | -                | -                | -         |   -15.13 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           51 |      593 | 2026-03-24 | TDK                 | W   | 1.000      | 0.384        | 0.048 (0.018)    | 0.706 (0.271)    | 0 (0.000) |    23.45 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           50 |      622 | 2026-03-24 | Rune Eaters Esports | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.98 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           49 |      666 | 2026-03-23 | 1w Team             | L   | 1.000      | -            | -                | -                | -         |    -6.57 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           48 |      707 | 2026-03-23 | Hypewrld            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.30 | 4X1s, Alv, k0s, karnez, Salazar     |
|           47 |      779 | 2026-03-21 | Mousquetaires       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.99 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           46 |      791 | 2026-03-21 | Ex-RUBY             | L   | 1.000      | -            | -                | -                | -         |    -9.68 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           45 |      849 | 2026-03-20 | K27                 | L   | 1.000      | -            | -                | -                | -         |    -3.20 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           44 |      860 | 2026-03-20 | BIG EQUIPA          | W   | 1.000      | 0.435        | 0.063 (0.027)    | -                | 0 (0.000) |     4.96 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           43 |      876 | 2026-03-19 | TNC Esports         | W   | 1.000      | 0.384        | 0.026 (0.010)    | 1.000 (0.384)    | 0 (0.000) |    13.05 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           42 |      903 | 2026-03-19 | Bebop               | W   | 1.000      | 0.435        | -                | 0.764 (0.332)    | 0 (0.000) |    14.43 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           41 |      970 | 2026-03-17 | Sangal Esports      | W   | 1.000      | -            | -                | -                | -         |    17.55 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           40 |      980 | 2026-03-17 | ASTRAL Esports      | L   | 1.000      | -            | -                | -                | -         |   -18.82 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           39 |      996 | 2026-03-17 | ECSTATIC            | W   | 1.000      | 0.435        | 0.104 (0.045)    | 0.643 (0.279)    | -         |    26.09 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           38 |     1017 | 2026-03-16 | BIG Academy         | W   | 1.000      | -            | -                | -                | -         |     5.16 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           37 |     1144 | 2026-03-13 | Japczany            | W   | 1.000      | -            | -                | -                | -         |     6.10 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           36 |     1176 | 2026-03-13 | Illwill             | L   | 1.000      | -            | -                | -                | -         |    -3.22 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           35 |     1254 | 2026-03-11 | OMEGA               | W   | 1.000      | 0.435        | 0.025 (0.011)    | 0.588 (0.256)    | -         |    19.21 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           34 |     1303 | 2026-03-10 | Tung Tung Sahur     | W   | 1.000      | -            | -                | -                | -         |    12.22 | 4X1s, Alv, karnez, Salazar, shalfey |
|           33 |     1360 | 2026-03-09 | ENCE Academy        | L   | 1.000      | -            | -                | -                | -         |   -17.56 | 4X1s, Alv, karnez, Salazar, shalfey |
|           32 |     1432 | 2026-03-08 | Hypewrld            | W   | 1.000      | -            | -                | -                | -         |    14.20 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           31 |     1520 | 2026-03-06 | TNC Esports         | W   | 0.993      | 0.384        | 0.026 (0.010)    | 1.000 (0.382)    | -         |    17.99 | 4X1s, Alv, karnez, Salazar, shalfey |
|           30 |     1620 | 2026-03-04 | Lilmix              | W   | 0.980      | -            | -                | -                | -         |    13.04 | 4X1s, Alv, karnez, Salazar, shalfey |
|           29 |     1715 | 2026-03-02 | Eternal Fire        | L   | 0.966      | -            | -                | -                | -         |    -5.03 | 4X1s, Alv, karnez, Salazar, shalfey |
|           28 |     1724 | 2026-03-02 | FORZE Reload        | L   | 0.965      | -            | -                | -                | -         |   -14.47 | 4X1s, Alv, karnez, Salazar, shalfey |
|           27 |     1810 | 2026-02-28 | TNC Esports         | L   | 0.952      | -            | -                | -                | -         |    -9.38 | 4X1s, Alv, karnez, Salazar, turbo   |
|           26 |     1897 | 2026-02-26 | 8Sins               | W   | 0.940      | -            | -                | -                | -         |     7.70 | 4X1s, Alv, karnez, Salazar, turbo   |
|           25 |     1953 | 2026-02-25 | Rebels Gaming       | W   | 0.934      | -            | -                | -                | -         |    21.63 | 4X1s, Alv, karnez, Salazar, turbo   |
|           24 |     2381 | 2026-02-17 | Oxuji Esports       | L   | 0.880      | -            | -                | -                | -         |    -9.04 | 4X1s, Alv, deeN, Salazar, torox     |
|           23 |     2600 | 2026-02-13 | FUZOS               | L   | 0.853      | -            | -                | -                | -         |   -16.49 | 4X1s, Alv, deeN, Salazar, torox     |
|           22 |     2650 | 2026-02-12 | HYPERSPIRIT         | L   | 0.846      | -            | -                | -                | -         |   -13.41 | 4X1s, Alv, deeN, Salazar, torox     |
|           21 |     2692 | 2026-02-11 | Team Pigeons        | W   | 0.839      | 0.384        | 0.037 (0.012)    | -                | -         |     6.00 | 4X1s, Alv, deeN, Salazar, torox     |
|           20 |     3076 | 2026-01-29 | Johnny Speeds       | L   | 0.753      | -            | -                | -                | -         |    -4.39 | 4X1s, Alv, deeN, Salazar, torox     |
|           19 |     3118 | 2026-01-27 | 1w Team             | L   | 0.741      | -            | -                | -                | -         |    -2.03 | 4X1s, Alv, deeN, Salazar, torox     |
|           18 |     3167 | 2026-01-25 | AM Gaming           | L   | 0.726      | -            | -                | -                | -         |    -2.38 | 4X1s, Alv, deeN, Salazar, torox     |
|           17 |     3196 | 2026-01-24 | Illwill             | W   | 0.720      | 0.384        | 0.042 (0.012)    | -                | -         |    14.17 | 4X1s, Alv, deeN, Salazar, torox     |
|           16 |     3278 | 2026-01-22 | Gentle Mates        | L   | 0.708      | -            | -                | -                | -         |    -2.35 | 4X1s, Alv, deeN, Salazar, torox     |
|           15 |     3290 | 2026-01-22 | BetBoom Team        | L   | 0.706      | -            | -                | -                | -         |    -1.30 | 4X1s, Alv, deeN, Salazar, torox     |
|           14 |     3320 | 2026-01-21 | EYEBALLERS          | W   | 0.701      | 0.143        | 0.097 (0.010)    | -                | -         |    20.46 | 4X1s, Alv, deeN, Salazar, torox     |
|           13 |     3342 | 2026-01-21 | BC.Game Esports     | W   | 0.699      | -            | -                | -                | -         |    19.64 | 4X1s, Alv, deeN, Salazar, torox     |
|           12 |     3355 | 2026-01-20 | Bebop               | W   | 0.694      | 0.384        | -                | 0.764 (0.204)    | -         |     9.61 | 4X1s, Alv, deeN, Salazar, torox     |
|           11 |     3375 | 2026-01-19 | Acend               | W   | 0.686      | 0.384        | -                | 0.771 (0.203)    | -         |    18.10 | 4X1s, Alv, deeN, Salazar, torox     |
|           10 |     3433 | 2026-01-17 | Team Nemesis        | L   | 0.674      | -            | -                | -                | -         |    -1.08 | 4X1s, Alv, deeN, Salazar, torox     |
|            9 |     3439 | 2026-01-17 | Leo Team            | W   | 0.674      | -            | -                | -                | -         |    10.70 | 4X1s, Alv, deeN, Salazar, torox     |
|            8 |     3459 | 2026-01-17 | Illwill             | L   | 0.672      | -            | -                | -                | -         |    -7.66 | 4X1s, Alv, deeN, Salazar, torox     |
|            7 |     3592 | 2026-01-13 | Bebop               | W   | 0.646      | -            | -                | -                | -         |     8.74 | 4X1s, Alv, deeN, Salazar, torox     |
|            6 |     3611 | 2026-01-12 | Acend               | W   | 0.638      | -            | -                | -                | -         |    17.86 | 4X1s, Alv, deeN, Salazar, torox     |
|            5 |     3933 | 2025-12-09 | QWENTRY             | L   | 0.413      | -            | -                | -                | -         |    -5.68 | 4X1s, Alv, deeN, Salazar, torox     |
|            4 |     3949 | 2025-12-08 | Nemiga Gaming       | W   | 0.407      | 0.447        | 0.138 (0.025)    | -                | -         |    12.13 | 4X1s, Alv, deeN, Salazar, torox     |
|            3 |     3959 | 2025-12-08 | ALLINNERS           | L   | 0.405      | -            | -                | -                | -         |    -6.89 | 4X1s, Alv, deeN, Salazar, torox     |
|            2 |     4260 | 2025-11-25 | Ex-RUBY             | L   | 0.318      | -            | -                | -                | -         |    -3.56 | 4X1s, Alv, deeN, Salazar, torox     |
|            1 |     4296 | 2025-11-24 | Team Nemesis        | L   | 0.311      | -            | -                | -                | -         |    -0.42 | 4X1s, Alv, deeN, Salazar, torox     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,149.47)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-03 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-03-27 |      1.000 | $1,750.00      | $1,750.00       |
| 2026-03-20 |      1.000 | $5,000.00      | $5,000.00       |
| 2025-12-09 |      0.414 | $966.00        | $399.47         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
