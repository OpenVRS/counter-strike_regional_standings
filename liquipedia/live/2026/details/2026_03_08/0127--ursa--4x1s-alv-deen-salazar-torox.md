### Roster Details<br />
Team Name: Ursa<br />
Roster: 4X1s, Alv, deeN, Salazar, torox<br />
Global Rank: [127](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [94]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  892.2<br />
<br />
Final Rank Value (892.2) = Starting Rank Value (787.4) + Head To Head Adjustments (104.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.4
- 400 + ( ( 0.202 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 787.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.333
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      147 | 2026-03-02 | FORZE Reload    | L   | 1.000      | -            | -                | -                | -         |   -22.88 | 4X1s, Alv, karnez, Salazar, shalfey |
|           27 |      208 | 2026-02-28 | Los kogutos     | L   | 1.000      | -            | -                | -                | -         |    -9.22 | 4X1s, Alv, karnez, Salazar, turbo   |
|           26 |      293 | 2026-02-26 | 8Sins           | W   | 1.000      | 0.143        | 0.007 (0.001)    | -                | 0 (0.000) |     9.73 | 4X1s, Alv, karnez, Salazar, turbo   |
|           25 |      347 | 2026-02-25 | Rebels Gaming   | W   | 1.000      | 0.143        | 0.018 (0.003)    | -                | 0 (0.000) |    21.52 | 4X1s, Alv, karnez, Salazar, turbo   |
|           24 |      740 | 2026-02-17 | Oxuji Esports   | L   | 1.000      | -            | -                | -                | -         |    -9.91 | 4X1s, Alv, deeN, Salazar, torox     |
|           23 |      946 | 2026-02-13 | FUZOS           | L   | 1.000      | -            | -                | -                | -         |   -16.24 | 4X1s, Alv, deeN, Salazar, torox     |
|           22 |      991 | 2026-02-12 | HYPERSPIRIT     | L   | 1.000      | -            | -                | -                | -         |   -18.59 | 4X1s, Alv, deeN, Salazar, torox     |
|           21 |     1031 | 2026-02-11 | Team Pigeons    | W   | 1.000      | 0.143        | 0.063 (0.009)    | 0.344 (0.049)    | 0 (0.000) |     9.97 | 4X1s, Alv, deeN, Salazar, torox     |
|           20 |     1404 | 2026-01-29 | Johnny Speeds   | L   | 0.945      | -            | -                | -                | -         |    -8.62 | 4X1s, Alv, deeN, Salazar, torox     |
|           19 |     1446 | 2026-01-27 | 1w Team         | L   | 0.933      | -            | -                | -                | -         |    -5.51 | 4X1s, Alv, deeN, Salazar, torox     |
|           18 |     1493 | 2026-01-25 | AM Gaming       | L   | 0.918      | -            | -                | -                | -         |    -7.71 | 4X1s, Alv, deeN, Salazar, torox     |
|           17 |     1522 | 2026-01-24 | Illwill         | W   | 0.912      | 0.384        | 0.107 (0.037)    | 1.000 (0.350)    | 0 (0.000) |    26.20 | 4X1s, Alv, deeN, Salazar, torox     |
|           16 |     1602 | 2026-01-22 | Gentle Mates    | L   | 0.900      | -            | -                | -                | -         |    -1.55 | 4X1s, Alv, deeN, Salazar, torox     |
|           15 |     1614 | 2026-01-22 | BetBoom Team    | L   | 0.899      | -            | -                | -                | -         |    -1.75 | 4X1s, Alv, deeN, Salazar, torox     |
|           14 |     1644 | 2026-01-21 | EYEBALLERS      | W   | 0.893      | 0.143        | 0.185 (0.024)    | 0.645 (0.082)    | 0 (0.000) |    25.23 | 4X1s, Alv, deeN, Salazar, torox     |
|           13 |     1666 | 2026-01-21 | BC.Game Esports | W   | 0.891      | 0.143        | 0.220 (0.028)    | 0.479 (0.061)    | 0 (0.000) |    26.82 | 4X1s, Alv, deeN, Salazar, torox     |
|           12 |     1679 | 2026-01-20 | Bebop           | W   | 0.886      | 0.384        | -                | 0.696 (0.237)    | 0 (0.000) |    14.52 | 4X1s, Alv, deeN, Salazar, torox     |
|           11 |     1698 | 2026-01-19 | Acend           | W   | 0.878      | 0.384        | 0.050 (0.017)    | 0.696 (0.235)    | 0 (0.000) |    22.38 | 4X1s, Alv, deeN, Salazar, torox     |
|           10 |     1754 | 2026-01-17 | Team Nemesis    | L   | 0.866      | -            | -                | -                | -         |    -2.21 | 4X1s, Alv, deeN, Salazar, torox     |
|            9 |     1760 | 2026-01-17 | Leo Team        | W   | 0.866      | 0.143        | 0.012 (0.001)    | 0.458 (0.057)    | 0 (0.000) |    16.63 | 4X1s, Alv, deeN, Salazar, torox     |
|            8 |     1779 | 2026-01-17 | Illwill         | L   | 0.864      | -            | -                | -                | -         |    -1.30 | 4X1s, Alv, deeN, Salazar, torox     |
|            7 |     1912 | 2026-01-13 | Bebop           | W   | 0.838      | 0.384        | -                | 0.696 (0.224)    | 0 (0.000) |    14.38 | 4X1s, Alv, deeN, Salazar, torox     |
|            6 |     1929 | 2026-01-12 | Acend           | W   | 0.830      | 0.384        | 0.050 (0.016)    | 0.696 (0.222)    | -         |    23.38 | 4X1s, Alv, deeN, Salazar, torox     |
|            5 |     2260 | 2025-12-09 | QWENTRY         | L   | 0.605      | -            | -                | -                | -         |    -8.74 | 4X1s, Alv, deeN, Salazar, torox     |
|            4 |     2274 | 2025-12-08 | Nemiga Gaming   | W   | 0.599      | 0.447        | 0.150 (0.040)    | 0.883 (0.237)    | -         |    17.90 | 4X1s, Alv, deeN, Salazar, torox     |
|            3 |     2284 | 2025-12-08 | ALLINNERS       | L   | 0.597      | -            | -                | -                | -         |    -4.17 | 4X1s, Alv, deeN, Salazar, torox     |
|            2 |     2573 | 2025-11-25 | Ex-RUBY         | L   | 0.510      | -            | -                | -                | -         |    -4.51 | 4X1s, Alv, deeN, Salazar, torox     |
|            1 |     2607 | 2025-11-24 | Team Nemesis    | L   | 0.504      | -            | -                | -                | -         |    -0.93 | 4X1s, Alv, deeN, Salazar, torox     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($585.08)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-09 |      0.606 | $966.00        | $585.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
