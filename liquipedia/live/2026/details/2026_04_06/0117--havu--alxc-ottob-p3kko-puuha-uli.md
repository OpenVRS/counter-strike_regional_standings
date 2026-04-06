### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, puuha, uli<br />
Global Rank: [117](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [80]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  998.7<br />
<br />
Final Rank Value (998.7) = Starting Rank Value (1112.5) + Head To Head Adjustments (-113.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.297[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.670[<sup>2</sup>](#table1)

The average of these factors is 0.364<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1112.5
- 400 + ( ( 0.364 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1112.5


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
|           66 |      250 | 2026-03-31 | Team Liquid       | L   | 1.000      | -            | -                | -                | -         |    -3.36 | Alxc, ottob, p3kko, puuha, uli  |
|           65 |      295 | 2026-03-30 | Lazer Cats        | W   | 1.000      | 0.354        | 0.011 (0.004)    | 0.461 (0.163)    | 1 (1.000) |    18.34 | Alxc, ottob, p3kko, puuha, uli  |
|           64 |      316 | 2026-03-30 | Monte             | L   | 1.000      | -            | -                | -                | -         |    -1.42 | Alxc, ottob, p3kko, puuha, uli  |
|           63 |      336 | 2026-03-29 | Strael-Bora       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.67 | Alxc, ottob, p3kko, puuha, uli  |
|           62 |      360 | 2026-03-29 | Sashi Esport      | L   | 1.000      | -            | -                | -                | -         |    -8.17 | Alxc, ottob, p3kko, puuha, uli  |
|           61 |      364 | 2026-03-29 | SINQU Esports     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.30 | Alxc, ottob, p3kko, puuha, uli  |
|           60 |      729 | 2026-03-22 | TDK               | L   | 1.000      | -            | -                | -                | -         |    -4.96 | Aerial, Alxc, ottob, puuha, uli |
|           59 |      784 | 2026-03-21 | HYPERSPIRIT       | W   | 1.000      | 0.384        | -                | 0.479 (0.184)    | -         |    17.24 | Aerial, Alxc, ottob, puuha, uli |
|           58 |      838 | 2026-03-20 | Ex-Zero Tenacity  | W   | 1.000      | 0.384        | -                | 0.547 (0.210)    | -         |    16.20 | Aerial, Alxc, ottob, puuha, uli |
|           57 |      878 | 2026-03-19 | Nemiga Gaming     | L   | 1.000      | -            | -                | -                | -         |    -2.93 | Aerial, Alxc, ottob, puuha, uli |
|           56 |      974 | 2026-03-17 | Leo Team          | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.565 (0.217)    | -         |    19.80 | Aerial, Alxc, ottob, puuha, uli |
|           55 |     1161 | 2026-03-13 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -25.89 | Aerial, Alxc, ottob, puuha, uli |
|           54 |     1203 | 2026-03-12 | NOVAQ             | L   | 1.000      | -            | -                | -                | -         |   -11.09 | Alxc, ottob, p3kko, puuha, uli  |
|           53 |     1223 | 2026-03-12 | Bebop             | L   | 1.000      | -            | -                | -                | -         |   -17.78 | Aerial, Alxc, ottob, puuha, uli |
|           52 |     1248 | 2026-03-11 | ENRAGE            | W   | 1.000      | -            | -                | -                | -         |     1.96 | Aerial, Alxc, ottob, puuha, uli |
|           51 |     1302 | 2026-03-10 | Ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -18.56 | Aerial, Alxc, ottob, puuha, uli |
|           50 |     1332 | 2026-03-09 | Imperial Academy  | W   | 1.000      | -            | -                | -                | -         |     1.58 | Aerial, Alxc, ottob, puuha, uli |
|           49 |     1351 | 2026-03-09 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |    -6.21 | Aerial, Alxc, ottob, puuha, uli |
|           48 |     1468 | 2026-03-07 | Ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -20.57 | Aerial, Alxc, ottob, puuha, uli |
|           47 |     1555 | 2026-03-05 | Misa Esports      | L   | 0.987      | -            | -                | -                | -         |   -25.62 | Aerial, Alxc, ottob, puuha, uli |
|           46 |     1587 | 2026-03-05 | TNC Esports       | W   | 0.985      | 0.435        | 0.026 (0.011)    | 1.000 (0.428)    | -         |    15.88 | Aerial, Alxc, ottob, puuha, uli |
|           45 |     1682 | 2026-03-03 | ASTRAL Esports    | L   | 0.972      | -            | -                | -                | -         |   -19.11 | Aerial, Alxc, ottob, puuha, uli |
|           44 |     1718 | 2026-03-02 | FAVBET Team       | L   | 0.966      | -            | -                | -                | -         |   -15.24 | Aerial, Alxc, ottob, puuha, uli |
|           43 |     1801 | 2026-02-28 | Aurora Young Blud | W   | 0.953      | -            | -                | -                | -         |     2.82 | Aerial, Alxc, ottob, puuha, uli |
|           42 |     1855 | 2026-02-27 | FUZOS             | W   | 0.945      | 0.384        | 0.005 (0.002)    | 0.414 (0.150)    | -         |     9.27 | Aerial, Alxc, ottob, puuha, uli |
|           41 |     1992 | 2026-02-24 | QWENTRY           | L   | 0.927      | -            | -                | -                | -         |   -16.19 | Aerial, Alxc, ottob, puuha, uli |
|           40 |     2048 | 2026-02-23 | EC BANGA          | W   | 0.920      | -            | -                | -                | -         |     3.83 | Aerial, Alxc, ottob, puuha, uli |
|           39 |     2325 | 2026-02-18 | SPARTA Esports    | L   | 0.886      | -            | -                | -                | -         |    -6.70 | Aerial, Alxc, ottob, puuha, uli |
|           38 |     2377 | 2026-02-17 | Ex-RUBY           | L   | 0.880      | -            | -                | -                | -         |   -12.94 | Aerial, Alxc, ottob, puuha, uli |
|           37 |     2421 | 2026-02-16 | Oramond           | L   | 0.874      | -            | -                | -                | -         |   -11.84 | Alxc, ottob, p3kko, puuha, uli  |
|           36 |     2549 | 2026-02-14 | FORZE Reload      | W   | 0.859      | 0.384        | -                | 0.472 (0.156)    | -         |     8.46 | Alxc, ottob, p3kko, puuha, uli  |
|           35 |     2578 | 2026-02-14 | ALLINNERS         | W   | 0.858      | -            | -                | -                | -         |     5.00 | Alxc, ottob, p3kko, puuha, uli  |
|           34 |     2624 | 2026-02-13 | TDK               | L   | 0.851      | -            | -                | -                | -         |   -10.80 | Alxc, ottob, p3kko, puuha, uli  |
|           33 |     2641 | 2026-02-12 | ALLINNERS         | W   | 0.847      | -            | -                | -                | -         |     4.73 | Alxc, ottob, p3kko, puuha, uli  |
|           32 |     2773 | 2026-02-08 | Nuclear TigeRES   | L   | 0.820      | -            | -                | -                | -         |    -5.42 | Alxc, ottob, p3kko, puuha, uli  |
|           31 |     3169 | 2026-01-25 | BIG               | L   | 0.726      | -            | -                | -                | -         |    -2.22 | Alxc, ottob, p3kko, puuha, uli  |
|           30 |     3187 | 2026-01-24 | SemperFi Esports  | W   | 0.721      | 0.333        | 0.023 (0.006)    | 0.443 (0.106)    | 1 (0.721) |    13.37 | Alxc, ottob, p3kko, puuha, uli  |
|           29 |     3199 | 2026-01-24 | WOPA Esport       | W   | 0.720      | 0.333        | -                | 0.426 (0.102)    | 1 (0.720) |     7.92 | Alxc, ottob, p3kko, puuha, uli  |
|           28 |     3226 | 2026-01-23 | ReThink           | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.57 | Alxc, ottob, p3kko, puuha, uli  |
|           27 |     3231 | 2026-01-23 | Flying Angels     | W   | 0.714      | -            | -                | -                | 1 (0.714) |     0.43 | Alxc, ottob, p3kko, puuha, uli  |
|           26 |     3239 | 2026-01-23 | Metizport         | W   | 0.713      | 0.333        | 0.023 (0.006)    | 0.488 (0.116)    | 1 (0.713) |    11.93 | Alxc, ottob, p3kko, puuha, uli  |
|           25 |     4115 | 2025-11-30 | ARCRED            | L   | 0.353      | -            | -                | -                | -         |    -2.71 | Alxc, ottob, p3kko, puuha, uli  |
|           24 |     4158 | 2025-11-29 | Mousquetaires     | L   | 0.346      | -            | -                | -                | -         |    -9.47 | Alxc, ottob, p3kko, puuha, uli  |
|           23 |     4195 | 2025-11-28 | CSDIILIT          | W   | 0.341      | -            | -                | -                | -         |     0.74 | Alxc, ottob, p3kko, puuha, uli  |
|           22 |     4200 | 2025-11-28 | ENCE Academy      | W   | 0.340      | -            | -                | -                | -         |     1.94 | Alxc, ottob, p3kko, puuha, uli  |
|           21 |     4205 | 2025-11-28 | ARCRED            | W   | 0.339      | 0.384        | 0.017 (0.002)    | -                | -         |     8.13 | Alxc, ottob, p3kko, puuha, uli  |
|           20 |     4219 | 2025-11-27 | Eternal Fire      | L   | 0.331      | -            | -                | -                | -         |    -9.52 | Alxc, ottob, p3kko, puuha, uli  |
|           19 |     4299 | 2025-11-24 | Fire Flux Esports | L   | 0.311      | -            | -                | -                | -         |    -8.44 | Alxc, ottob, p3kko, peku, uli   |
|           18 |     4306 | 2025-11-23 | CSDIILIT          | L   | 0.307      | -            | -                | -                | -         |    -9.08 | Alxc, ottob, p3kko, puuha, uli  |
|           17 |     4318 | 2025-11-23 | Nuclear TigeRES   | L   | 0.306      | -            | -                | -                | -         |    -1.82 | Alxc, ottob, p3kko, puuha, uli  |
|           16 |     4334 | 2025-11-22 | ENCE Academy      | W   | 0.300      | -            | -                | -                | -         |     1.56 | Alxc, ottob, p3kko, puuha, uli  |
|           15 |     4418 | 2025-11-20 | Leo Team          | W   | 0.286      | 0.333        | 0.017 (0.002)    | -                | -         |     2.24 | Alxc, ottob, p3kko, puuha, uli  |
|           14 |     4463 | 2025-11-18 | MANA eSports      | W   | 0.272      | -            | -                | -                | -         |     1.94 | Alxc, ottob, p3kko, puuha, uli  |
|           13 |     4477 | 2025-11-17 | HYPERSPIRIT       | W   | 0.265      | -            | -                | -                | -         |     2.56 | Alxc, ottob, p3kko, puuha, uli  |
|           12 |     4655 | 2025-11-10 | K27               | L   | 0.219      | -            | -                | -                | -         |    -0.62 | Alxc, ottob, p3kko, puuha, uli  |
|           11 |     4678 | 2025-11-09 | ARCRED            | W   | 0.213      | 0.384        | 0.017 (0.001)    | -                | -         |     5.18 | Alxc, ottob, p3kko, puuha, uli  |
|           10 |     4727 | 2025-11-08 | GenOne            | L   | 0.206      | -            | -                | -                | -         |    -4.72 | Alxc, ottob, p3kko, puuha, uli  |
|            9 |     4849 | 2025-11-07 | ARCRED            | W   | 0.198      | -            | -                | -                | -         |     4.87 | Alxc, ottob, p3kko, puuha, uli  |
|            8 |     5072 | 2025-10-29 | Eternal Fire      | L   | 0.140      | -            | -                | -                | -         |    -4.07 | Alxc, ottob, p3kko, puuha, uli  |
|            7 |     5102 | 2025-10-28 | GenOne            | L   | 0.133      | -            | -                | -                | -         |    -3.07 | Alxc, ottob, p3kko, puuha, uli  |
|            6 |     5132 | 2025-10-27 | 9BoomPro          | L   | 0.127      | -            | -                | -                | -         |    -3.87 | Alxc, ottob, p3kko, puuha, uli  |
|            5 |     5191 | 2025-10-26 | BASEMENT BOYS     | L   | 0.120      | -            | -                | -                | -         |    -3.66 | Alxc, ottob, p3kko, puuha, uli  |
|            4 |     5358 | 2025-10-23 | ECSTATIC          | W   | 0.100      | 0.384        | 0.104 (0.004)    | -                | -         |     2.67 | Alxc, ottob, p3kko, puuha, uli  |
|            3 |     5458 | 2025-10-18 | Universe          | L   | 0.066      | -            | -                | -                | -         |    -1.96 | Alxc, ottob, p3kko, puuha, uli  |
|            2 |     5473 | 2025-10-17 | TOOMUCHVIDEOGAMES | W   | 0.061      | -            | -                | -                | 1 (0.061) |     0.09 | Alxc, ottob, p3kko, puuha, uli  |
|            1 |     5489 | 2025-10-17 | KAJO              | W   | 0.058      | -            | -                | -                | 1 (0.058) |     0.09 | Alxc, ottob, p3kko, puuha, uli  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,477.64)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.726 | $2,000.00      | $1,451.32       |
| 2025-11-28 |      0.341 | $2,898.92      | $987.15         |
| 2025-10-18 |      0.067 | $583.02        | $39.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
