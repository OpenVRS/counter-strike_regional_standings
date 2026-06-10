### Roster Details<br />
Team Name: Metizport<br />
Roster: F1KU, forsyy, isak, Plopski, stanislaw<br />
Global Rank: [97](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [65]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1054.2<br />
<br />
Final Rank Value (1054.2) = Starting Rank Value (1027.9) + Head To Head Adjustments (26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.387[<sup>1</sup>](#table2)
- Bounty Collected: 0.316[<sup>2</sup>](#table1)
- Opponent Network: 0.198[<sup>2</sup>](#table1)
- LAN Wins: 0.404[<sup>2</sup>](#table1)

The average of these factors is 0.326<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1027.9
- 400 + ( ( 0.326 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1027.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.437
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      492 | 2026-05-21 | Betclic Apogee Esports    | L   | 1.000      | -            | -                | -                | -         |   -13.87 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           49 |      499 | 2026-05-21 | Rebels Gaming             | L   | 1.000      | -            | -                | -                | -         |   -15.34 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           48 |      501 | 2026-05-21 | Passion UA                | W   | 1.000      | 0.435        | 0.030 (0.013)    | 0.390 (0.170)    | 1 (1.000) |    21.90 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           47 |      503 | 2026-05-21 | OG                        | L   | 1.000      | -            | -                | -                | -         |    -9.42 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           46 |     1639 | 2026-04-16 | ARCRED                    | W   | 0.844      | 0.371        | 0.024 (0.007)    | 0.535 (0.168)    | 0 (0.000) |    18.37 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           45 |     1675 | 2026-04-14 | Phantom Esports           | W   | 0.832      | 0.371        | 0.008 (0.003)    | 0.859 (0.265)    | 0 (0.000) |    15.84 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           44 |     1693 | 2026-04-13 | Ex-RUBY                   | W   | 0.825      | 0.371        | 0.035 (0.011)    | 1.000 (0.306)    | 0 (0.000) |    14.53 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           43 |     1735 | 2026-04-11 | Basement Bobs             | W   | 0.812      | -            | -                | -                | -         |     2.02 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           42 |     1996 | 2026-04-04 | Bebop                     | L   | 0.766      | -            | -                | -                | -         |   -15.85 | Dragon, forsyy, isak, Plopski, stanislaw |
|           41 |     2156 | 2026-04-02 | PsychoFace                | L   | 0.754      | -            | -                | -                | -         |    -9.33 | Dragon, forsyy, isak, Plopski, stanislaw |
|           40 |     2307 | 2026-04-01 | ENCE                      | W   | 0.744      | 0.435        | 0.010 (0.003)    | 0.548 (0.177)    | -         |     6.30 | Dragon, forsyy, isak, Plopski, stanislaw |
|           39 |     2552 | 2026-03-29 | RUSTEC                    | L   | 0.724      | -            | -                | -                | -         |   -16.65 | Dragon, forsyy, isak, Plopski, stanislaw |
|           38 |     2649 | 2026-03-27 | EYEBALLERS                | L   | 0.714      | -            | -                | -                | -         |    -3.50 | Dragon, forsyy, isak, Plopski, stanislaw |
|           37 |     2872 | 2026-03-23 | UNiTY esports             | W   | 0.687      | 0.396        | -                | 0.582 (0.158)    | 1 (0.687) |     5.79 | Dragon, forsyy, isak, Plopski, stanislaw |
|           36 |     2886 | 2026-03-23 | GamerLegion               | L   | 0.686      | -            | -                | -                | -         |    -0.51 | Dragon, forsyy, isak, Plopski, stanislaw |
|           35 |     2900 | 2026-03-23 | UNiTY esports             | W   | 0.685      | 0.396        | -                | 0.582 (0.158)    | 1 (0.685) |     6.04 | Dragon, forsyy, isak, Plopski, stanislaw |
|           34 |     3266 | 2026-03-15 | Nemiga Gaming             | L   | 0.634      | -            | -                | -                | -         |    -4.27 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           33 |     3278 | 2026-03-15 | Illwill                   | W   | 0.633      | 0.384        | 0.024 (0.006)    | -                | -         |    13.84 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           32 |     3322 | 2026-03-14 | KOLESIE                   | W   | 0.626      | 0.384        | 0.031 (0.007)    | 0.707 (0.170)    | -         |    13.04 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           31 |     3435 | 2026-03-12 | ENCE                      | W   | 0.611      | 0.384        | 0.010 (0.002)    | -                | -         |     5.95 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           30 |     3491 | 2026-03-10 | K27                       | L   | 0.601      | -            | -                | -                | -         |    -2.62 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           29 |     3536 | 2026-03-09 | NOVAQ                     | W   | 0.594      | -            | -                | -                | -         |     7.01 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           28 |     3630 | 2026-03-08 | PsychoFace                | L   | 0.587      | -            | -                | -                | -         |    -8.24 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           27 |     3726 | 2026-03-06 | FAVBET Team               | L   | 0.573      | -            | -                | -                | -         |   -11.56 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           26 |     3879 | 2026-03-03 | Leo Team                  | W   | 0.553      | -            | -                | -                | -         |     4.75 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           25 |     3897 | 2026-03-03 | JiJieHao                  | L   | 0.551      | -            | -                | -                | -         |    -2.80 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           24 |     3933 | 2026-03-02 | TNC Esport                | W   | 0.546      | 0.435        | 0.021 (0.005)    | 1.000 (0.237)    | -         |     9.19 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           23 |     3980 | 2026-03-01 | Aimclub (Romanian team)   | W   | 0.538      | -            | -                | -                | -         |     3.52 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           22 |     4375 | 2026-02-21 | Acend                     | L   | 0.487      | -            | -                | -                | -         |    -2.88 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           21 |     4390 | 2026-02-21 | Young Ninjas              | W   | 0.486      | -            | -                | -                | 1 (0.486) |     4.44 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           20 |     4403 | 2026-02-21 | Esport Academy Copenhagen | W   | 0.485      | -            | -                | -                | 1 (0.485) |    11.08 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           19 |     4482 | 2026-02-19 | Alliance                  | L   | 0.473      | -            | -                | -                | -         |    -1.61 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           18 |     4540 | 2026-02-18 | Johnny Speeds             | W   | 0.466      | 0.435        | 0.053 (0.011)    | 0.855 (0.173)    | -         |    12.37 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           17 |     4720 | 2026-02-15 | VP.Prodigy                | W   | 0.446      | -            | -                | -                | -         |     1.60 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           16 |     4828 | 2026-02-13 | Acend                     | L   | 0.432      | -            | -                | -                | -         |    -2.42 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           15 |     4909 | 2026-02-11 | Lazer Cats                | W   | 0.418      | -            | -                | -                | -         |     4.22 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           14 |     4969 | 2026-02-09 | ALGO Esports              | W   | 0.405      | -            | -                | -                | -         |     2.25 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           13 |     4988 | 2026-02-08 | OG                        | L   | 0.400      | -            | -                | -                | -         |    -2.77 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           12 |     5239 | 2026-01-31 | Johnny Speeds             | L   | 0.346      | -            | -                | -                | -         |    -1.74 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           11 |     5302 | 2026-01-29 | 2007                      | L   | 0.331      | -            | -                | -                | -         |    -7.58 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           10 |     5317 | 2026-01-28 | Bebop                     | L   | 0.326      | -            | -                | -                | -         |    -7.58 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            9 |     5336 | 2026-01-27 | SIXSEVEN                  | W   | 0.320      | -            | -                | -                | -         |     0.89 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            8 |     5371 | 2026-01-25 | Tung Tung Sahur           | L   | 0.308      | -            | -                | -                | -         |    -8.90 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            7 |     5413 | 2026-01-24 | Alliance                  | L   | 0.300      | -            | -                | -                | -         |    -0.93 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            6 |     5445 | 2026-01-23 | Entropy Gaming            | W   | 0.294      | -            | -                | -                | 1 (0.294) |     2.09 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            5 |     5450 | 2026-01-23 | ReThink                   | W   | 0.294      | -            | -                | -                | 1 (0.294) |     0.52 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            4 |     5457 | 2026-01-23 | HAVU                      | L   | 0.294      | -            | -                | -                | -         |    -5.39 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            3 |     5600 | 2026-01-19 | Ex-RUBY                   | L   | 0.265      | -            | -                | -                | -         |    -5.02 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            2 |     5666 | 2026-01-17 | KOLESIE                   | L   | 0.254      | -            | -                | -                | -         |    -2.33 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            1 |     5689 | 2026-01-17 | Bebop                     | W   | 0.251      | -            | -                | -                | -         |     1.89 | Dragon, forsyy, isak, Jackinho, Plopski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,997.88)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-16 |      0.844 | $11,000.00     | $9,288.34       |
| 2026-03-28 |      0.720 | $2,500.00      | $1,800.57       |
| 2026-03-15 |      0.634 | $5,000.00      | $3,169.20       |
| 2026-02-21 |      0.487 | $1,600.00      | $779.03         |
| 2026-02-20 |      0.480 | $2,000.00      | $960.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
