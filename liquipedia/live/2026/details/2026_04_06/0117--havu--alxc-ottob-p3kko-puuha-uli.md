### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [117](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [80]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1001.0<br />
<br />
Final Rank Value (1001.0) = Starting Rank Value (1113.0) + Head To Head Adjustments (-112.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.185[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.364<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1113.0
- 400 + ( ( 0.364 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1113.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.569
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |      268 | 2026-03-31 | Team Liquid       | L   | 1.000      | -            | -                | -                | -         |    -3.39 | Alxc, ottob, p3kko, puuha, uli  |
|           65 |      313 | 2026-03-30 | Lazer Cats        | W   | 1.000      | 0.354        | 0.011 (0.004)    | 0.461 (0.163)    | 1 (1.000) |    17.99 | Alxc, ottob, p3kko, puuha, uli  |
|           64 |      333 | 2026-03-30 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -1.44 | Alxc, ottob, p3kko, puuha, uli  |
|           63 |      354 | 2026-03-29 | Strael-Bora       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.65 | Alxc, ottob, p3kko, puuha, uli  |
|           62 |      378 | 2026-03-29 | Sashi Esport      | L   | 1.000      | -            | -                | -                | -         |    -7.85 | Alxc, ottob, p3kko, puuha, uli  |
|           61 |      382 | 2026-03-29 | SINQU Esports     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.27 | Alxc, ottob, p3kko, puuha, uli  |
|           60 |      746 | 2026-03-22 | TDK               | L   | 1.000      | -            | -                | -                | -         |    -4.99 | Aerial, Alxc, ottob, puuha, uli |
|           59 |      802 | 2026-03-21 | HYPERSPIRIT       | W   | 1.000      | 0.384        | -                | 0.479 (0.184)    | -         |    17.32 | Aerial, Alxc, ottob, puuha, uli |
|           58 |      856 | 2026-03-20 | Ex-Zero Tenacity  | W   | 1.000      | 0.384        | -                | 0.547 (0.210)    | -         |    16.21 | Aerial, Alxc, ottob, puuha, uli |
|           57 |      896 | 2026-03-19 | Nemiga Gaming     | L   | 1.000      | -            | -                | -                | -         |    -2.96 | Aerial, Alxc, ottob, puuha, uli |
|           56 |      992 | 2026-03-17 | Leo Team          | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.593 (0.228)    | -         |    19.86 | Aerial, Alxc, ottob, puuha, uli |
|           55 |     1179 | 2026-03-13 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -25.91 | Aerial, Alxc, ottob, puuha, uli |
|           54 |     1221 | 2026-03-12 | NOVAQ             | L   | 1.000      | -            | -                | -                | -         |   -11.16 | Alxc, ottob, p3kko, puuha, uli  |
|           53 |     1241 | 2026-03-12 | Bebop             | L   | 1.000      | -            | -                | -                | -         |   -17.78 | Aerial, Alxc, ottob, puuha, uli |
|           52 |     1266 | 2026-03-11 | ENRAGE            | W   | 1.000      | -            | -                | -                | -         |     1.94 | Aerial, Alxc, ottob, puuha, uli |
|           51 |     1320 | 2026-03-10 | Ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -18.54 | Aerial, Alxc, ottob, puuha, uli |
|           50 |     1350 | 2026-03-09 | Imperial Academy  | W   | 1.000      | -            | -                | -                | -         |     1.56 | Aerial, Alxc, ottob, puuha, uli |
|           49 |     1369 | 2026-03-09 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -6.30 | Aerial, Alxc, ottob, puuha, uli |
|           48 |     1486 | 2026-03-07 | Ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -20.55 | Aerial, Alxc, ottob, puuha, uli |
|           47 |     1573 | 2026-03-05 | Misa Esports      | L   | 0.987      | -            | -                | -                | -         |   -25.69 | Aerial, Alxc, ottob, puuha, uli |
|           46 |     1605 | 2026-03-05 | TNC Esports       | W   | 0.985      | 0.435        | 0.026 (0.011)    | 1.000 (0.428)    | -         |    15.86 | Aerial, Alxc, ottob, puuha, uli |
|           45 |     1700 | 2026-03-03 | ASTRAL Esports    | L   | 0.972      | -            | -                | -                | -         |   -19.43 | Aerial, Alxc, ottob, puuha, uli |
|           44 |     1736 | 2026-03-02 | FAVBET Team       | L   | 0.966      | -            | -                | -                | -         |   -15.27 | Aerial, Alxc, ottob, puuha, uli |
|           43 |     1819 | 2026-02-28 | Aurora Young Blud | W   | 0.953      | -            | -                | -                | -         |     2.80 | Aerial, Alxc, ottob, puuha, uli |
|           42 |     1873 | 2026-02-27 | FUZOS             | W   | 0.945      | 0.384        | 0.005 (0.002)    | 0.414 (0.150)    | -         |     9.17 | Aerial, Alxc, ottob, puuha, uli |
|           41 |     2011 | 2026-02-24 | QWENTRY           | L   | 0.927      | -            | -                | -                | -         |   -16.21 | Aerial, Alxc, ottob, puuha, uli |
|           40 |     2069 | 2026-02-23 | EC BANGA          | W   | 0.920      | -            | -                | -                | -         |     5.81 | Aerial, Alxc, ottob, puuha, uli |
|           39 |     2349 | 2026-02-18 | SPARTA Esports    | L   | 0.886      | -            | -                | -                | -         |    -6.66 | Aerial, Alxc, ottob, puuha, uli |
|           38 |     2401 | 2026-02-17 | Ex-RUBY           | L   | 0.880      | -            | -                | -                | -         |   -12.90 | Aerial, Alxc, ottob, puuha, uli |
|           37 |     2445 | 2026-02-16 | Oramond           | L   | 0.874      | -            | -                | -                | -         |   -11.71 | Alxc, ottob, p3kko, puuha, uli  |
|           36 |     2574 | 2026-02-14 | FORZE Reload      | W   | 0.859      | 0.384        | -                | 0.472 (0.156)    | -         |     8.60 | Alxc, ottob, p3kko, puuha, uli  |
|           35 |     2603 | 2026-02-14 | ALLINNERS         | W   | 0.858      | -            | -                | -                | -         |     5.06 | Alxc, ottob, p3kko, puuha, uli  |
|           34 |     2649 | 2026-02-13 | TDK               | L   | 0.851      | -            | -                | -                | -         |   -10.77 | Alxc, ottob, p3kko, puuha, uli  |
|           33 |     2666 | 2026-02-12 | ALLINNERS         | W   | 0.847      | -            | -                | -                | -         |     4.80 | Alxc, ottob, p3kko, puuha, uli  |
|           32 |     2798 | 2026-02-08 | Nuclear TigeRES   | L   | 0.820      | -            | -                | -                | -         |    -5.38 | Alxc, ottob, p3kko, puuha, uli  |
|           31 |     3195 | 2026-01-25 | BIG               | L   | 0.726      | -            | -                | -                | -         |    -2.22 | Alxc, ottob, p3kko, puuha, uli  |
|           30 |     3213 | 2026-01-24 | SemperFi Esports  | W   | 0.721      | 0.333        | 0.023 (0.006)    | 0.443 (0.106)    | 1 (0.721) |    13.39 | Alxc, ottob, p3kko, puuha, uli  |
|           29 |     3225 | 2026-01-24 | WOPA Esport       | W   | 0.720      | 0.333        | -                | 0.429 (0.103)    | 1 (0.720) |     8.20 | Alxc, ottob, p3kko, puuha, uli  |
|           28 |     3255 | 2026-01-23 | ReThink           | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.57 | Alxc, ottob, p3kko, puuha, uli  |
|           27 |     3260 | 2026-01-23 | Flying Angels     | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.43 | Alxc, ottob, p3kko, puuha, uli  |
|           26 |     3268 | 2026-01-23 | Metizport         | W   | 0.713      | 0.333        | 0.023 (0.006)    | 0.488 (0.116)    | 1 (0.713) |    11.94 | Alxc, ottob, p3kko, puuha, uli  |
|           25 |     4149 | 2025-11-30 | ARCRED            | L   | 0.353      | -            | -                | -                | -         |    -2.71 | Alxc, ottob, p3kko, puuha, uli  |
|           24 |     4192 | 2025-11-29 | Mousquetaires     | L   | 0.346      | -            | -                | -                | -         |    -9.78 | Alxc, ottob, p3kko, puuha, uli  |
|           23 |     4229 | 2025-11-28 | CSDIILIT          | W   | 0.341      | -            | -                | -                | -         |     0.74 | Alxc, ottob, p3kko, puuha, uli  |
|           22 |     4234 | 2025-11-28 | ENCE Academy      | W   | 0.340      | -            | -                | -                | -         |     1.94 | Alxc, ottob, p3kko, puuha, uli  |
|           21 |     4239 | 2025-11-28 | ARCRED            | W   | 0.339      | 0.384        | 0.017 (0.002)    | -                | -         |     8.13 | Alxc, ottob, p3kko, puuha, uli  |
|           20 |     4253 | 2025-11-27 | Eternal Fire      | L   | 0.331      | -            | -                | -                | -         |    -9.53 | Alxc, ottob, p3kko, puuha, uli  |
|           19 |     4333 | 2025-11-24 | Fire Flux Esports | L   | 0.311      | -            | -                | -                | -         |    -8.45 | Alxc, ottob, p3kko, peku, uli   |
|           18 |     4340 | 2025-11-23 | CSDIILIT          | L   | 0.307      | -            | -                | -                | -         |    -9.08 | Alxc, ottob, p3kko, puuha, uli  |
|           17 |     4352 | 2025-11-23 | Nuclear TigeRES   | L   | 0.306      | -            | -                | -                | -         |    -1.81 | Alxc, ottob, p3kko, puuha, uli  |
|           16 |     4368 | 2025-11-22 | ENCE Academy      | W   | 0.300      | -            | -                | -                | -         |     1.56 | Alxc, ottob, p3kko, puuha, uli  |
|           15 |     4452 | 2025-11-20 | Leo Team          | W   | 0.286      | 0.333        | 0.017 (0.002)    | -                | -         |     2.23 | Alxc, ottob, p3kko, puuha, uli  |
|           14 |     4497 | 2025-11-18 | MANA eSports      | W   | 0.272      | -            | -                | -                | -         |     1.95 | Alxc, ottob, p3kko, puuha, uli  |
|           13 |     4511 | 2025-11-17 | HYPERSPIRIT       | W   | 0.265      | -            | -                | -                | -         |     2.55 | Alxc, ottob, p3kko, puuha, uli  |
|           12 |     4689 | 2025-11-10 | K27               | L   | 0.219      | -            | -                | -                | -         |    -0.63 | Alxc, ottob, p3kko, puuha, uli  |
|           11 |     4712 | 2025-11-09 | ARCRED            | W   | 0.213      | 0.384        | 0.017 (0.001)    | -                | -         |     5.18 | Alxc, ottob, p3kko, puuha, uli  |
|           10 |     4761 | 2025-11-08 | GenOne            | L   | 0.206      | -            | -                | -                | -         |    -4.72 | Alxc, ottob, p3kko, puuha, uli  |
|            9 |     4883 | 2025-11-07 | ARCRED            | W   | 0.198      | -            | -                | -                | -         |     4.87 | Alxc, ottob, p3kko, puuha, uli  |
|            8 |     5106 | 2025-10-29 | Eternal Fire      | L   | 0.140      | -            | -                | -                | -         |    -4.07 | Alxc, ottob, p3kko, puuha, uli  |
|            7 |     5136 | 2025-10-28 | GenOne            | L   | 0.133      | -            | -                | -                | -         |    -3.07 | Alxc, ottob, p3kko, puuha, uli  |
|            6 |     5166 | 2025-10-27 | 9BoomPro          | L   | 0.127      | -            | -                | -                | -         |    -3.87 | Alxc, ottob, p3kko, puuha, uli  |
|            5 |     5225 | 2025-10-26 | BASEMENT BOYS     | L   | 0.120      | -            | -                | -                | -         |    -3.66 | Alxc, ottob, p3kko, puuha, uli  |
|            4 |     5392 | 2025-10-23 | ECSTATIC          | W   | 0.100      | 0.384        | 0.104 (0.004)    | -                | -         |     2.67 | Alxc, ottob, p3kko, puuha, uli  |
|            3 |     5492 | 2025-10-18 | Universe          | L   | 0.066      | -            | -                | -                | -         |    -1.96 | Alxc, ottob, p3kko, puuha, uli  |
|            2 |     5507 | 2025-10-17 | TOOMUCHVIDEOGAMES | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.09 | Alxc, ottob, p3kko, puuha, uli  |
|            1 |     5523 | 2025-10-17 | KAJO              | W   | 0.058      | -            | -                | -                | 1 (0.058) |     0.09 | Alxc, ottob, p3kko, puuha, uli  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,477.66)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.726 | $2,000.00      | $1,451.32       |
| 2025-11-28 |      0.341 | $2,899.00      | $987.17         |
| 2025-10-18 |      0.067 | $583.00        | $39.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
