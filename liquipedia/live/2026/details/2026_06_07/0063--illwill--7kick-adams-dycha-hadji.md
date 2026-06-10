### Roster Details<br />
Team Name: Illwill<br />
Roster: 7kick, adamS, dycha, hAdji<br />
Global Rank: [63](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [44]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1179.7<br />
<br />
Final Rank Value (1179.7) = Starting Rank Value (1059.1) + Head To Head Adjustments (120.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.154[<sup>2</sup>](#table1)
- LAN Wins: 0.505[<sup>2</sup>](#table1)

The average of these factors is 0.342<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1059.1
- 400 + ( ( 0.342 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1059.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.504
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |     3278 | 2026-03-15 | Metizport                 | L   | 0.633      | -            | -                | -                | -         |   -13.84 | 7kick, adamS, dycha, FinigaN, hAdji  |
|           60 |     3307 | 2026-03-14 | NOVAQ                     | W   | 0.627      | -            | -                | -                | -         |     3.89 | 7kick, adamS, dycha, FinigaN, hAdji  |
|           59 |     3383 | 2026-03-13 | Ursa                      | W   | 0.618      | 0.384        | -                | 0.952 (0.226)    | -         |     4.06 | 7kick, adamS, dycha, FinigaN, hAdji  |
|           58 |     3846 | 2026-03-04 | BIG                       | L   | 0.559      | -            | -                | -                | -         |    -3.98 | 7kick, adamS, dycha, fostar, hAdji   |
|           57 |     3901 | 2026-03-03 | DragonClaw                | W   | 0.551      | 0.435        | 0.029 (0.007)    | 0.556 (0.133)    | -         |     3.76 | 7kick, adamS, dycha, fostar, hAdji   |
|           56 |     4213 | 2026-02-24 | GamerLegion               | L   | 0.506      | -            | -                | -                | -         |    -0.78 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           55 |     4225 | 2026-02-24 | SINNERS Esports           | W   | 0.506      | 0.341        | 0.114 (0.020)    | -                | 1 (0.506) |    12.13 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           54 |     4242 | 2026-02-24 | AM Gaming                 | W   | 0.505      | 0.435        | -                | 0.749 (0.164)    | -         |     7.67 | 7kick, adamS, dycha, fostar, hAdji   |
|           53 |     4247 | 2026-02-23 | ECSTATIC                  | W   | 0.501      | 0.341        | 0.037 (0.006)    | -                | 1 (0.501) |     7.38 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           52 |     4255 | 2026-02-23 | BC.Game Esports           | W   | 0.500      | 0.341        | 0.046 (0.008)    | -                | 1 (0.500) |     6.30 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           51 |     4263 | 2026-02-23 | GamerLegion               | L   | 0.499      | -            | -                | -                | -         |    -0.65 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           50 |     4273 | 2026-02-23 | Phantom Esports           | W   | 0.498      | 0.341        | -                | 0.859 (0.146)    | 1 (0.498) |     7.42 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           49 |     4290 | 2026-02-22 | Sashi Esport              | W   | 0.494      | -            | -                | -                | 1 (0.494) |     7.93 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           48 |     4298 | 2026-02-22 | 9INE                      | W   | 0.494      | -            | -                | -                | 1 (0.494) |     3.98 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           47 |     4304 | 2026-02-22 | Alliance                  | L   | 0.494      | -            | -                | -                | -         |    -2.84 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           46 |     4307 | 2026-02-22 | BC.Game Esports           | W   | 0.494      | 0.341        | 0.046 (0.008)    | -                | 1 (0.494) |     6.76 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           45 |     4317 | 2026-02-22 | BOSS                      | W   | 0.493      | -            | -                | -                | 1 (0.493) |     2.94 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           44 |     4325 | 2026-02-22 | MASONIC                   | W   | 0.493      | -            | -                | -                | 1 (0.493) |     6.07 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           43 |     4354 | 2026-02-22 | Hypewrld                  | W   | 0.491      | -            | -                | -                | -         |     2.49 | 7kick, adamS, dycha, fostar, hAdji   |
|           42 |     4369 | 2026-02-21 | Leo Team                  | W   | 0.487      | -            | -                | -                | -         |     2.51 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           41 |     4394 | 2026-02-21 | OMEGA                     | L   | 0.486      | -            | -                | -                | -         |    -7.37 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           40 |     4425 | 2026-02-20 | Lavked                    | W   | 0.481      | 0.384        | -                | 0.979 (0.181)    | -         |     3.85 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           39 |     4433 | 2026-02-20 | Cirahvi                   | W   | 0.480      | -            | -                | -                | -         |     2.14 | 7kick, adamS, dycha, fostar, hAdji   |
|           38 |     4481 | 2026-02-19 | DragonClaw                | W   | 0.474      | 0.384        | 0.029 (0.005)    | -                | -         |     4.81 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           37 |     4485 | 2026-02-19 | PsychoFace                | L   | 0.473      | -            | -                | -                | -         |    -9.51 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           36 |     4532 | 2026-02-18 | INOX Division             | W   | 0.467      | 0.384        | -                | 0.862 (0.155)    | -         |     3.47 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           35 |     4589 | 2026-02-17 | KOLESIE                   | W   | 0.461      | 0.384        | 0.031 (0.005)    | 0.707 (0.125)    | -         |     8.51 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           34 |     4621 | 2026-02-17 | BRUTE                     | W   | 0.458      | -            | -                | -                | -         |     2.40 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           33 |     4627 | 2026-02-16 | Bebop                     | L   | 0.454      | -            | -                | -                | -         |   -11.89 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           32 |     4647 | 2026-02-16 | VP.Prodigy                | W   | 0.453      | -            | -                | -                | -         |     0.94 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           31 |     4687 | 2026-02-15 | FUZOS                     | W   | 0.447      | -            | -                | -                | -         |     1.51 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           30 |     4765 | 2026-02-14 | FC Famalicão Esports      | L   | 0.439      | -            | -                | -                | -         |   -12.06 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           29 |     4770 | 2026-02-14 | Monte                     | L   | 0.439      | -            | -                | -                | -         |    -1.89 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           28 |     4786 | 2026-02-14 | KOLESIE                   | W   | 0.438      | -            | -                | -                | 1 (0.438) |     8.23 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           27 |     4817 | 2026-02-13 | ENCE                      | W   | 0.433      | -            | -                | -                | -         |     3.28 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           26 |     4832 | 2026-02-13 | Monte                     | L   | 0.432      | -            | -                | -                | -         |    -1.80 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           25 |     4834 | 2026-02-13 | ENCE                      | W   | 0.431      | -            | -                | -                | -         |     3.17 | 7kick, adamS, dycha, hAdji, nEMANHA  |
|           24 |     5081 | 2026-02-05 | ECSTATIC                  | W   | 0.380      | 0.435        | 0.037 (0.006)    | -                | -         |     6.19 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           23 |     5086 | 2026-02-05 | Nuclear TigeRES           | W   | 0.379      | 0.435        | 0.045 (0.007)    | 0.711 (0.117)    | -         |     9.24 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           22 |     5101 | 2026-02-04 | Betclic Apogee Esports    | W   | 0.374      | -            | -                | -                | -         |     7.80 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           21 |     5144 | 2026-02-03 | Team Nemesis              | W   | 0.365      | 0.435        | 0.136 (0.022)    | 0.920 (0.146)    | -         |     8.26 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           20 |     5277 | 2026-01-30 | Esport Academy Copenhagen | W   | 0.338      | -            | -                | -                | -         |     7.13 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           19 |     5300 | 2026-01-29 | 1w Team                   | L   | 0.332      | -            | -                | -                | -         |    -2.53 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           18 |     5308 | 2026-01-28 | Ex-RUBY                   | W   | 0.327      | 0.435        | -                | 1.000 (0.142)    | -         |     3.56 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           17 |     5351 | 2026-01-27 | ECSTATIC                  | W   | 0.318      | -            | -                | -                | -         |     5.66 | 7kick, adamS, fostar, hAdji, smooya  |
|           16 |     5368 | 2026-01-26 | Nemiga Gaming             | L   | 0.311      | -            | -                | -                | -         |    -2.17 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           15 |     5411 | 2026-01-24 | Ursa                      | L   | 0.300      | -            | -                | -                | -         |    -6.46 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           14 |     5431 | 2026-01-24 | FAVBET Team               | W   | 0.298      | -            | -                | -                | -         |     2.12 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           13 |     5458 | 2026-01-23 | MOUZ NXT                  | W   | 0.293      | -            | -                | -                | -         |     4.42 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           12 |     5479 | 2026-01-23 | 33                        | W   | 0.292      | -            | -                | -                | -         |     6.67 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           11 |     5506 | 2026-01-22 | TNC Esport                | L   | 0.287      | -            | -                | -                | -         |    -5.47 | 7kick, adamS, fostar, hAdji, nEMANHA |
|           10 |     5544 | 2026-01-21 | AM Gaming                 | W   | 0.281      | -            | -                | -                | -         |     6.17 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            9 |     5561 | 2026-01-21 | ALLINNERS                 | W   | 0.279      | -            | -                | -                | -         |     0.82 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            8 |     5577 | 2026-01-20 | Clutchain Female          | W   | 0.273      | -            | -                | -                | -         |     0.87 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            7 |     5625 | 2026-01-18 | Sangal Esports            | W   | 0.259      | -            | -                | -                | -         |     0.90 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            6 |     5678 | 2026-01-17 | Ursa                      | W   | 0.252      | -            | -                | -                | -         |     2.45 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            5 |     5705 | 2026-01-16 | Petardka                  | W   | 0.247      | -            | -                | -                | -         |     0.33 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            4 |     5766 | 2026-01-15 | UNiTY esports             | L   | 0.241      | -            | -                | -                | -         |    -6.23 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            3 |     5792 | 2026-01-14 | BASEMENT BOYS             | W   | 0.234      | -            | -                | -                | -         |     5.50 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            2 |     5819 | 2026-01-13 | MASONIC                   | W   | 0.226      | -            | -                | -                | -         |     4.29 | 7kick, adamS, fostar, hAdji, nEMANHA |
|            1 |     5831 | 2026-01-12 | Universe                  | W   | 0.218      | -            | -                | -                | -         |     0.17 | 7kick, adamS, fostar, hAdji, nEMANHA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,615.54)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.634 | $1,500.00      | $950.76         |
| 2026-03-05 |      0.567 | $2,000.00      | $1,133.70       |
| 2026-02-24 |      0.507 | $1,750.00      | $887.55         |
| 2026-02-24 |      0.506 | $2,948.00      | $1,492.69       |
| 2026-02-14 |      0.439 | $2,542.00      | $1,116.71       |
| 2026-02-05 |      0.380 | $22,000.00     | $8,352.80       |
| 2026-01-30 |      0.341 | $2,000.00      | $681.34         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
