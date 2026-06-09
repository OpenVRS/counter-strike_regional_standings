### Roster Details<br />
Team Name: Metizport<br />
Roster: F1KU, forsyy, isak, Plopski, stanislaw<br />
Global Rank: [98](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [65]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1067.4<br />
<br />
Final Rank Value (1067.4) = Starting Rank Value (1045.0) + Head To Head Adjustments (22.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.320[<sup>2</sup>](#table1)
- Opponent Network: 0.211[<sup>2</sup>](#table1)
- LAN Wins: 0.434[<sup>2</sup>](#table1)

The average of these factors is 0.339<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1045.0
- 400 + ( ( 0.339 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1045.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.472
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      382 | 2026-05-21 | Betclic Apogee Esports    | L   | 1.000      | -            | -                | -                | -         |   -14.18 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           49 |      389 | 2026-05-21 | Rebels Gaming             | L   | 1.000      | -            | -                | -                | -         |   -15.88 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           48 |      391 | 2026-05-21 | Passion UA                | W   | 1.000      | 0.435        | 0.035 (0.015)    | 0.419 (0.182)    | 1 (1.000) |    22.04 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           47 |      393 | 2026-05-21 | OG                        | L   | 1.000      | -            | -                | -                | -         |    -9.46 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           46 |     1529 | 2026-04-16 | ARCRED                    | W   | 0.897      | 0.371        | 0.025 (0.008)    | 0.577 (0.192)    | 0 (0.000) |    19.45 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           45 |     1565 | 2026-04-14 | Phantom Esports           | W   | 0.884      | 0.371        | -                | 0.736 (0.241)    | 0 (0.000) |    16.25 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           44 |     1583 | 2026-04-13 | Ex-RUBY                   | W   | 0.877      | 0.371        | 0.033 (0.011)    | 0.989 (0.322)    | 0 (0.000) |    15.35 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           43 |     1625 | 2026-04-11 | Basement Bobs             | W   | 0.864      | -            | -                | -                | -         |     2.08 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           42 |     1886 | 2026-04-04 | Bebop                     | L   | 0.818      | -            | -                | -                | -         |   -16.68 | Dragon, forsyy, isak, Plopski, stanislaw |
|           41 |     2046 | 2026-04-02 | PsychoFace                | L   | 0.806      | -            | -                | -                | -         |   -10.13 | Dragon, forsyy, isak, Plopski, stanislaw |
|           40 |     2197 | 2026-04-01 | ENCE                      | W   | 0.797      | 0.435        | 0.010 (0.004)    | 0.573 (0.198)    | -         |     6.73 | Dragon, forsyy, isak, Plopski, stanislaw |
|           39 |     2442 | 2026-03-29 | RUSTEC                    | L   | 0.777      | -            | -                | -                | -         |   -17.82 | Dragon, forsyy, isak, Plopski, stanislaw |
|           38 |     2539 | 2026-03-27 | EYEBALLERS                | L   | 0.767      | -            | -                | -                | -         |    -3.58 | Dragon, forsyy, isak, Plopski, stanislaw |
|           37 |     2762 | 2026-03-23 | UNiTY esports             | W   | 0.739      | 0.396        | -                | 0.619 (0.182)    | 1 (0.739) |     5.69 | Dragon, forsyy, isak, Plopski, stanislaw |
|           36 |     2776 | 2026-03-23 | GamerLegion               | L   | 0.738      | -            | -                | -                | -         |    -0.66 | Dragon, forsyy, isak, Plopski, stanislaw |
|           35 |     2790 | 2026-03-23 | UNiTY esports             | W   | 0.738      | 0.396        | -                | 0.619 (0.181)    | 1 (0.738) |     5.95 | Dragon, forsyy, isak, Plopski, stanislaw |
|           34 |     3156 | 2026-03-15 | Nemiga Gaming             | L   | 0.686      | -            | -                | -                | -         |    -4.65 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           33 |     3168 | 2026-03-15 | Illwill                   | W   | 0.685      | 0.384        | 0.026 (0.007)    | -                | -         |    15.37 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           32 |     3212 | 2026-03-14 | KOLESIE                   | W   | 0.678      | 0.384        | 0.033 (0.009)    | 0.644 (0.168)    | -         |    13.74 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           31 |     3325 | 2026-03-12 | ENCE                      | W   | 0.664      | 0.384        | 0.010 (0.003)    | -                | -         |     6.52 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           30 |     3381 | 2026-03-10 | K27                       | L   | 0.653      | -            | -                | -                | -         |    -2.77 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           29 |     3426 | 2026-03-09 | NOVAQ                     | W   | 0.646      | 0.435        | 0.009 (0.003)    | -                | -         |     7.83 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           28 |     3520 | 2026-03-08 | PsychoFace                | L   | 0.639      | -            | -                | -                | -         |    -9.14 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           27 |     3616 | 2026-03-06 | FAVBET Team               | L   | 0.625      | -            | -                | -                | -         |   -12.77 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           26 |     3769 | 2026-03-03 | Leo Team                  | W   | 0.605      | -            | -                | -                | -         |     5.05 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           25 |     3787 | 2026-03-03 | JiJieHao                  | L   | 0.604      | -            | -                | -                | -         |    -3.36 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           24 |     3823 | 2026-03-02 | TNC Esport                | W   | 0.598      | 0.435        | 0.022 (0.006)    | 1.000 (0.260)    | -         |     9.64 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           23 |     3870 | 2026-03-01 | Aimclub (Romanian team)   | W   | 0.590      | -            | -                | -                | -         |     4.02 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           22 |     4265 | 2026-02-21 | Acend                     | L   | 0.539      | -            | -                | -                | -         |    -3.52 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           21 |     4280 | 2026-02-21 | Young Ninjas              | W   | 0.538      | -            | -                | -                | 1 (0.538) |     4.78 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           20 |     4293 | 2026-02-21 | Esport Academy Copenhagen | W   | 0.537      | -            | -                | -                | 1 (0.537) |    12.30 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           19 |     4372 | 2026-02-19 | Alliance                  | L   | 0.526      | -            | -                | -                | -         |    -1.83 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           18 |     4430 | 2026-02-18 | Johnny Speeds             | W   | 0.519      | 0.435        | 0.048 (0.011)    | 0.813 (0.183)    | -         |    13.56 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           17 |     4610 | 2026-02-15 | VP.Prodigy                | W   | 0.498      | -            | -                | -                | -         |     1.76 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           16 |     4718 | 2026-02-13 | Acend                     | L   | 0.485      | -            | -                | -                | -         |    -2.95 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           15 |     4799 | 2026-02-11 | Lazer Cats                | W   | 0.470      | -            | -                | -                | -         |     4.92 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           14 |     4859 | 2026-02-09 | ALGO Esports              | W   | 0.457      | -            | -                | -                | -         |     2.66 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           13 |     4878 | 2026-02-08 | OG                        | L   | 0.453      | -            | -                | -                | -         |    -3.03 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           12 |     5129 | 2026-01-31 | Johnny Speeds             | L   | 0.398      | -            | -                | -                | -         |    -2.18 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           11 |     5192 | 2026-01-29 | 2007                      | L   | 0.384      | -            | -                | -                | -         |    -8.90 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           10 |     5207 | 2026-01-28 | Bebop                     | L   | 0.379      | -            | -                | -                | -         |    -8.83 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            9 |     5226 | 2026-01-27 | SIXSEVEN                  | W   | 0.372      | -            | -                | -                | -         |     1.11 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            8 |     5261 | 2026-01-25 | Tung Tung Sahur           | L   | 0.360      | -            | -                | -                | -         |   -10.44 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            7 |     5303 | 2026-01-24 | Alliance                  | L   | 0.352      | -            | -                | -                | -         |    -1.11 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            6 |     5335 | 2026-01-23 | Entropy Gaming            | W   | 0.346      | -            | -                | -                | 1 (0.346) |     2.32 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            5 |     5340 | 2026-01-23 | ReThink                   | W   | 0.346      | -            | -                | -                | 1 (0.346) |     0.57 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            4 |     5347 | 2026-01-23 | HAVU                      | L   | 0.346      | -            | -                | -                | -         |    -6.28 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            3 |     5490 | 2026-01-19 | Ex-RUBY                   | L   | 0.318      | -            | -                | -                | -         |    -6.33 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            2 |     5556 | 2026-01-17 | KOLESIE                   | L   | 0.306      | -            | -                | -                | -         |    -3.08 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            1 |     5579 | 2026-01-17 | Bebop                     | W   | 0.304      | -            | -                | -                | -         |     2.21 | Dragon, forsyy, isak, Jackinho, Plopski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,153.08)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-16 |      0.897 | $11,000.00     | $9,863.33       |
| 2026-03-28 |      0.773 | $2,500.00      | $1,931.25       |
| 2026-03-15 |      0.686 | $5,000.00      | $3,430.56       |
| 2026-02-21 |      0.539 | $1,600.00      | $862.67         |
| 2026-02-20 |      0.533 | $2,000.00      | $1,065.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
