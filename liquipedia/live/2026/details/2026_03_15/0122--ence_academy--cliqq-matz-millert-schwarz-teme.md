### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: Cliqq, Matz, millert, Schwarz, teme<br />
Global Rank: [122](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [92]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  923.1<br />
<br />
Final Rank Value (923.1) = Starting Rank Value (844.0) + Head To Head Adjustments (79.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.261[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.0
- 400 + ( ( 0.227 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 844.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.469
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       77 | 2026-03-13 | Bebop             | L   | 1.000      | -            | -                | -                | -         |   -15.11 | Cliqq, Matz, millert, Schwarz, teme  |
|           62 |      127 | 2026-03-12 | Lilmix            | L   | 1.000      | -            | -                | -                | -         |   -18.36 | Cliqq, Matz, millert, Schwarz, teme  |
|           61 |      148 | 2026-03-12 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -10.27 | Cliqq, Matz, millert, Schwarz, teme  |
|           60 |      262 | 2026-03-09 | Ursa              | W   | 1.000      | 0.384        | -                | 0.384 (0.148)    | 0 (0.000) |    14.79 | Cliqq, Matz, millert, Schwarz, teme  |
|           59 |      416 | 2026-03-06 | NOVAQ             | L   | 1.000      | -            | -                | -                | -         |   -12.06 | Cliqq, Matz, millert, Schwarz, teme  |
|           58 |      474 | 2026-03-05 | Los kogutos       | W   | 1.000      | 0.384        | 0.029 (0.011)    | 1.000 (0.384)    | 0 (0.000) |    21.46 | Cliqq, Matz, millert, Schwarz, teme  |
|           57 |      521 | 2026-03-04 | Sashi Esport      | L   | 1.000      | -            | -                | -                | -         |    -6.58 | Cliqq, Matz, millert, Schwarz, teme  |
|           56 |      600 | 2026-03-02 | OMEGA             | W   | 1.000      | 0.384        | 0.030 (0.012)    | 0.630 (0.242)    | 0 (0.000) |    23.33 | Cliqq, Matz, millert, Schwarz, teme  |
|           55 |      650 | 2026-03-01 | WW Team           | W   | 1.000      | 0.371        | 0.026 (0.010)    | 0.859 (0.318)    | 0 (0.000) |    27.09 | Cliqq, Matz, millert, Schwarz, teme  |
|           54 |      720 | 2026-02-27 | Tung Tung Sahur   | L   | 1.000      | -            | -                | -                | -         |   -12.85 | Cliqq, Matz, millert, Schwarz, teme  |
|           53 |      721 | 2026-02-27 | MASONIC           | L   | 1.000      | -            | -                | -                | -         |   -12.33 | Cliqq, Matz, millert, Schwarz, teme  |
|           52 |      740 | 2026-02-27 | Lazer Cats        | W   | 1.000      | 0.371        | 0.012 (0.004)    | 0.489 (0.181)    | 0 (0.000) |    19.98 | Cliqq, Matz, millert, Schwarz, teme  |
|           51 |      808 | 2026-02-26 | CSDIILIT          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.26 | Cliqq, Matz, millert, Schwarz, teme  |
|           50 |      853 | 2026-02-25 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -25.91 | Cliqq, Matz, millert, Schwarz, teme  |
|           49 |      914 | 2026-02-23 | Los kogutos       | W   | 1.000      | 0.384        | 0.029 (0.011)    | 1.000 (0.384)    | 0 (0.000) |    23.60 | Cliqq, Matz, millert, Schwarz, teme  |
|           48 |      942 | 2026-02-23 | UNiTY esports     | L   | 1.000      | -            | -                | -                | -         |   -10.65 | Cliqq, Matz, millert, Schwarz, teme  |
|           47 |     1093 | 2026-02-20 | Home              | W   | 1.000      | -            | -                | -                | -         |     6.98 | Cliqq, Matz, millert, Schwarz, teme  |
|           46 |     1117 | 2026-02-20 | Home              | W   | 1.000      | -            | -                | -                | -         |     7.43 | Cliqq, Matz, millert, Schwarz, teme  |
|           45 |     1187 | 2026-02-18 | BASEMENT BOYS     | L   | 1.000      | -            | -                | -                | -         |   -21.71 | Cliqq, Matz, millert, Schwarz, teme  |
|           44 |     1211 | 2026-02-18 | ARCRED            | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.872 (0.335)    | -         |    26.45 | Cliqq, Matz, millert, Schwarz, teme  |
|           43 |     1253 | 2026-02-17 | Rebels Gaming     | L   | 1.000      | -            | -                | -                | -         |    -6.71 | Cliqq, HENU, millert, Schwarz, teme  |
|           42 |     1274 | 2026-02-17 | Lazer Cats        | L   | 1.000      | -            | -                | -                | -         |   -12.85 | Cliqq, Matz, millert, Schwarz, teme  |
|           41 |     1312 | 2026-02-16 | Hypewrld          | W   | 1.000      | -            | -                | -                | -         |    18.68 | Cliqq, HENU, millert, Schwarz, teme  |
|           40 |     1321 | 2026-02-16 | VP.Prodigy        | W   | 1.000      | -            | -                | -                | -         |    22.78 | Cliqq, Matz, millert, Schwarz, teme  |
|           39 |     1371 | 2026-02-15 | BASEMENT BOYS     | W   | 1.000      | 0.384        | -                | 0.312 (0.120)    | -         |    11.29 | Cliqq, HENU, millert, Schwarz, teme  |
|           38 |     1386 | 2026-02-15 | CSDIILIT          | W   | 1.000      | -            | -                | -                | -         |    11.26 | Cliqq, Matz, millert, Schwarz, teme  |
|           37 |     1405 | 2026-02-14 | MOUZ NXT          | L   | 1.000      | -            | -                | -                | -         |    -5.06 | Cliqq, HENU, millert, Schwarz, teme  |
|           36 |     1466 | 2026-02-13 | Los kogutos       | W   | 0.999      | 0.384        | 0.029 (0.011)    | 1.000 (0.384)    | -         |    23.62 | Cliqq, HENU, millert, Schwarz, teme  |
|           35 |     2999 | 2025-11-30 | BASEMENT BOYS     | L   | 0.498      | -            | -                | -                | -         |   -10.98 | blick, Cliqq, millert, Schwarz, teme |
|           34 |     3074 | 2025-11-28 | HAVU              | L   | 0.485      | -            | -                | -                | -         |    -4.53 | blick, Cliqq, millert, Schwarz, teme |
|           33 |     3092 | 2025-11-27 | The Last Resort   | W   | 0.478      | 0.384        | 0.013 (0.002)    | -                | -         |     6.17 | blick, Cliqq, millert, Schwarz, teme |
|           32 |     3100 | 2025-11-26 | BASEMENT BOYS     | L   | 0.472      | -            | -                | -                | -         |   -10.65 | blick, Cliqq, millert, Schwarz, teme |
|           31 |     3166 | 2025-11-24 | MOUZ NXT          | L   | 0.458      | -            | -                | -                | -         |    -1.08 | blick, Cliqq, millert, Schwarz, teme |
|           30 |     3184 | 2025-11-23 | Smuuttikusilkki   | W   | 0.452      | -            | -                | -                | -         |     1.93 | blick, Cliqq, millert, Schwarz, teme |
|           29 |     3208 | 2025-11-22 | HAVU              | L   | 0.445      | -            | -                | -                | -         |    -3.95 | blick, Cliqq, millert, Schwarz, teme |
|           28 |     3228 | 2025-11-22 | The Last Resort   | W   | 0.444      | -            | -                | -                | -         |     6.01 | blick, Cliqq, millert, Schwarz, teme |
|           27 |     3246 | 2025-11-21 | AaB esport        | L   | 0.439      | -            | -                | -                | -         |    -9.31 | blick, Cliqq, millert, Schwarz, teme |
|           26 |     3280 | 2025-11-20 | Square Sausages   | W   | 0.433      | -            | -                | -                | -         |     1.01 | blick, Cliqq, millert, Schwarz, teme |
|           25 |     3665 | 2025-11-07 | JiJieHao          | L   | 0.345      | -            | -                | -                | -         |    -1.77 | blick, Cliqq, millert, Schwarz, teme |
|           24 |     3743 | 2025-11-06 | ARCRED            | W   | 0.339      | 0.384        | 0.019 (0.003)    | 0.872 (0.113)    | -         |     9.86 | blick, Cliqq, millert, Schwarz, teme |
|           23 |     3832 | 2025-11-03 | Nuclear TigeRES   | L   | 0.318      | -            | -                | -                | -         |    -0.42 | blick, Cliqq, millert, Schwarz, teme |
|           22 |     3857 | 2025-11-02 | Oramond           | L   | 0.310      | -            | -                | -                | -         |    -3.75 | blick, Cliqq, millert, Schwarz, teme |
|           21 |     3911 | 2025-10-31 | KONO.ECF          | W   | 0.298      | -            | -                | -                | -         |     4.51 | blick, Cliqq, millert, Schwarz, teme |
|           20 |     3933 | 2025-10-30 | Eternal Fire      | W   | 0.291      | -            | -                | -                | -         |     3.14 | blick, Cliqq, millert, Schwarz, teme |
|           19 |     3942 | 2025-10-29 | GenOne            | L   | 0.286      | -            | -                | -                | -         |    -2.72 | blick, Cliqq, millert, Schwarz, teme |
|           18 |     3947 | 2025-10-29 | MASONIC           | L   | 0.285      | -            | -                | -                | -         |    -1.93 | blick, Cliqq, millert, Schwarz, teme |
|           17 |     3990 | 2025-10-28 | Eternal Fire      | W   | 0.277      | -            | -                | -                | -         |     2.93 | blick, Cliqq, millert, Schwarz, teme |
|           16 |     4004 | 2025-10-27 | Team Nemesis      | L   | 0.273      | -            | -                | -                | -         |    -0.37 | blick, Cliqq, millert, Schwarz, teme |
|           15 |     4082 | 2025-10-26 | RUBY              | L   | 0.265      | -            | -                | -                | -         |    -4.88 | blick, Cliqq, millert, Schwarz, teme |
|           14 |     4115 | 2025-10-25 | ALGO Esports      | W   | 0.259      | -            | -                | -                | -         |     0.64 | blick, Cliqq, millert, Schwarz, teme |
|           13 |     4223 | 2025-10-23 | Nuclear TigeRES   | L   | 0.246      | -            | -                | -                | -         |    -0.29 | blick, Cliqq, millert, Schwarz, teme |
|           12 |     4261 | 2025-10-22 | NIP Impact        | W   | 0.239      | 0.384        | 0.031 (0.003)    | -                | -         |     3.17 | blick, Cliqq, millert, Schwarz, teme |
|           11 |     4323 | 2025-10-18 | Universe          | L   | 0.213      | -            | -                | -                | -         |    -4.90 | blick, Cliqq, millert, Schwarz, teme |
|           10 |     4335 | 2025-10-18 | TOOMUCHVIDEOGAMES | W   | 0.211      | -            | -                | -                | 1 (0.211) |     1.33 | blick, Cliqq, millert, Schwarz, teme |
|            9 |     4351 | 2025-10-17 | Universe          | W   | 0.206      | -            | -                | -                | 1 (0.206) |     1.73 | blick, Cliqq, millert, Schwarz, teme |
|            8 |     4364 | 2025-10-17 | CSDIILIT          | W   | 0.204      | -            | -                | -                | 1 (0.204) |     1.53 | blick, Cliqq, millert, Schwarz, teme |
|            7 |     5097 | 2025-09-28 | Dziuseppe         | L   | 0.078      | -            | -                | -                | -         |    -1.82 | blick, Cliqq, millert, Schwarz, teme |
|            6 |     5178 | 2025-09-27 | FORZE Reload      | L   | 0.070      | -            | -                | -                | -         |    -1.14 | blick, Cliqq, millert, Schwarz, teme |
|            5 |     5229 | 2025-09-26 | QMISTRY           | W   | 0.063      | -            | -                | -                | -         |     0.28 | blick, Cliqq, millert, Schwarz, teme |
|            4 |     5349 | 2025-09-21 | HAVU              | L   | 0.032      | -            | -                | -                | -         |    -0.28 | blick, Cliqq, millert, Schwarz, teme |
|            3 |     5357 | 2025-09-21 | CSDIILIT          | W   | 0.030      | -            | -                | -                | -         |     0.23 | blick, Cliqq, millert, Schwarz, teme |
|            2 |     5378 | 2025-09-20 | HAVU              | L   | 0.025      | -            | -                | -                | -         |    -0.22 | blick, Cliqq, millert, Schwarz, teme |
|            1 |     5397 | 2025-09-19 | Team spargo-      | W   | 0.019      | -            | -                | -                | -         |     0.07 | blick, Cliqq, millert, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($717.45)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-28 |      0.486 | $869.68        | $422.90         |
| 2025-10-18 |      0.213 | $1,166.04      | $248.30         |
| 2025-09-21 |      0.032 | $1,468.20      | $46.25          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
