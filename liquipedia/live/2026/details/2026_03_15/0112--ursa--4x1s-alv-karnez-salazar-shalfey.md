### Roster Details<br />
Team Name: Ursa<br />
Roster: 4X1s, Alv, karnez, Salazar, shalfey<br />
Global Rank: [112](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [84]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  944.4<br />
<br />
Final Rank Value (944.4) = Starting Rank Value (808.2) + Head To Head Adjustments (136.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.221[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 808.2
- 400 + ( ( 0.209 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 808.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.384
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      100 | 2026-03-13 | Illwill         | L   | 1.000      | -            | -                | -                | -         |    -2.11 | 4X1s, Alv, Jyo, karnez, Salazar     |
|           33 |      211 | 2026-03-10 | Tung Tung Sahur | W   | 1.000      | 0.384        | 0.029 (0.011)    | 0.512 (0.197)    | 0 (0.000) |    16.30 | 4X1s, Alv, karnez, Salazar, shalfey |
|           32 |      262 | 2026-03-09 | ENCE Academy    | L   | 1.000      | -            | -                | -                | -         |   -14.79 | 4X1s, Alv, karnez, Salazar, shalfey |
|           31 |      406 | 2026-03-06 | Los kogutos     | W   | 1.000      | 0.384        | 0.029 (0.011)    | 1.000 (0.384)    | 0 (0.000) |    20.01 | 4X1s, Alv, karnez, Salazar, shalfey |
|           30 |      502 | 2026-03-04 | Lilmix          | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.273 (0.105)    | 0 (0.000) |    14.87 | 4X1s, Alv, karnez, Salazar, shalfey |
|           29 |      592 | 2026-03-02 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -7.68 | 4X1s, Alv, karnez, Salazar, shalfey |
|           28 |      601 | 2026-03-02 | FORZE Reload    | L   | 1.000      | -            | -                | -                | -         |   -19.96 | 4X1s, Alv, karnez, Salazar, shalfey |
|           27 |      685 | 2026-02-28 | Los kogutos     | L   | 1.000      | -            | -                | -                | -         |    -8.32 | 4X1s, Alv, karnez, Salazar, turbo   |
|           26 |      772 | 2026-02-26 | 8Sins           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.79 | 4X1s, Alv, karnez, Salazar, turbo   |
|           25 |      828 | 2026-02-25 | Rebels Gaming   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    23.39 | 4X1s, Alv, karnez, Salazar, turbo   |
|           24 |     1255 | 2026-02-17 | Oxuji Esports   | L   | 1.000      | -            | -                | -                | -         |    -9.23 | 4X1s, Alv, deeN, Salazar, torox     |
|           23 |     1474 | 2026-02-13 | FUZOS           | L   | 0.999      | -            | -                | -                | -         |   -16.29 | 4X1s, Alv, deeN, Salazar, torox     |
|           22 |     1524 | 2026-02-12 | HYPERSPIRIT     | L   | 0.992      | -            | -                | -                | -         |   -17.29 | 4X1s, Alv, deeN, Salazar, torox     |
|           21 |     1566 | 2026-02-11 | Team Pigeons    | W   | 0.985      | 0.384        | 0.049 (0.019)    | 0.328 (0.124)    | 0 (0.000) |     9.21 | 4X1s, Alv, deeN, Salazar, torox     |
|           20 |     1950 | 2026-01-29 | Johnny Speeds   | L   | 0.899      | -            | -                | -                | -         |    -7.03 | 4X1s, Alv, deeN, Salazar, torox     |
|           19 |     1992 | 2026-01-27 | 1w Team         | L   | 0.886      | -            | -                | -                | -         |    -4.72 | 4X1s, Alv, deeN, Salazar, torox     |
|           18 |     2041 | 2026-01-25 | AM Gaming       | L   | 0.872      | -            | -                | -                | -         |    -3.50 | 4X1s, Alv, deeN, Salazar, torox     |
|           17 |     2070 | 2026-01-24 | Illwill         | W   | 0.865      | 0.384        | 0.078 (0.026)    | 1.000 (0.333)    | 0 (0.000) |    25.73 | 4X1s, Alv, deeN, Salazar, torox     |
|           16 |     2152 | 2026-01-22 | Gentle Mates    | L   | 0.853      | -            | -                | -                | -         |    -1.69 | 4X1s, Alv, deeN, Salazar, torox     |
|           15 |     2164 | 2026-01-22 | BetBoom Team    | L   | 0.852      | -            | -                | -                | -         |    -1.84 | 4X1s, Alv, deeN, Salazar, torox     |
|           14 |     2194 | 2026-01-21 | EYEBALLERS      | W   | 0.847      | 0.143        | 0.125 (0.015)    | -                | 0 (0.000) |    24.53 | 4X1s, Alv, deeN, Salazar, torox     |
|           13 |     2216 | 2026-01-21 | BC.Game Esports | W   | 0.845      | 0.143        | 0.141 (0.017)    | -                | 0 (0.000) |    25.25 | 4X1s, Alv, deeN, Salazar, torox     |
|           12 |     2229 | 2026-01-20 | Bebop           | W   | 0.840      | 0.384        | -                | 0.645 (0.208)    | 0 (0.000) |    13.42 | 4X1s, Alv, deeN, Salazar, torox     |
|           11 |     2249 | 2026-01-19 | Acend           | W   | 0.832      | 0.384        | 0.037 (0.012)    | 0.708 (0.226)    | -         |    20.97 | 4X1s, Alv, deeN, Salazar, torox     |
|           10 |     2307 | 2026-01-17 | Team Nemesis    | L   | 0.820      | -            | -                | -                | -         |    -1.45 | 4X1s, Alv, deeN, Salazar, torox     |
|            9 |     2313 | 2026-01-17 | Leo Team        | W   | 0.819      | -            | -                | -                | -         |    16.07 | 4X1s, Alv, deeN, Salazar, torox     |
|            8 |     2333 | 2026-01-17 | Illwill         | L   | 0.818      | -            | -                | -                | -         |    -0.77 | 4X1s, Alv, deeN, Salazar, torox     |
|            7 |     2466 | 2026-01-13 | Bebop           | W   | 0.792      | 0.384        | -                | 0.645 (0.196)    | -         |    13.03 | 4X1s, Alv, deeN, Salazar, torox     |
|            6 |     2485 | 2026-01-12 | Acend           | W   | 0.784      | 0.384        | 0.037 (0.011)    | 0.708 (0.213)    | -         |    21.82 | 4X1s, Alv, deeN, Salazar, torox     |
|            5 |     2807 | 2025-12-09 | QWENTRY         | L   | 0.558      | -            | -                | -                | -         |    -6.97 | 4X1s, Alv, deeN, Salazar, torox     |
|            4 |     2823 | 2025-12-08 | Nemiga Gaming   | W   | 0.553      | 0.447        | 0.136 (0.034)    | 0.890 (0.220)    | -         |    16.64 | 4X1s, Alv, deeN, Salazar, torox     |
|            3 |     2833 | 2025-12-08 | ALLINNERS       | L   | 0.551      | -            | -                | -                | -         |    -6.03 | 4X1s, Alv, deeN, Salazar, torox     |
|            2 |     3134 | 2025-11-25 | Ex-RUBY         | L   | 0.463      | -            | -                | -                | -         |    -3.60 | 4X1s, Alv, deeN, Salazar, torox     |
|            1 |     3170 | 2025-11-24 | Team Nemesis    | L   | 0.457      | -            | -                | -                | -         |    -0.58 | 4X1s, Alv, deeN, Salazar, torox     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($540.27)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-09 |      0.559 | $966.00        | $540.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
