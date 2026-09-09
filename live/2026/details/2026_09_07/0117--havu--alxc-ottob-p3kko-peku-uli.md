### Roster Details<br />
Team Name: HAVU<br />
Roster: Alxc, ottob, p3kko, peku, uli<br />
Global Rank: [117](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [90]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  873.6<br />
<br />
Final Rank Value (873.6) = Starting Rank Value (870.3) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.120[<sup>2</sup>](#table1)
- LAN Wins: 0.303[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 870.3
- 400 + ( ( 0.247 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 870.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |        6 | 2026-09-07 | Dark Moon         | L   | 1.000      | -            | -                | -                | -         |   -23.07 | Alxc, ottob, p3kko, peku, uli   |
|           48 |       30 | 2026-09-06 | mellren           | W   | 1.000      | 0.317        | 0.008 (0.003)    | 0.328 (0.104)    | 0 (0.000) |    14.13 | Alxc, ottob, p3kko, peku, uli   |
|           47 |       49 | 2026-09-06 | Privateer         | W   | 1.000      | 0.317        | 0.004 (0.001)    | 0.216 (0.068)    | 0 (0.000) |     6.64 | Alxc, ottob, p3kko, peku, uli   |
|           46 |      192 | 2026-09-01 | Noir Verse        | W   | 1.000      | 0.143        | -                | 0.519 (0.074)    | 0 (0.000) |    12.65 | Alxc, ottob, p3kko, peku, uli   |
|           45 |      248 | 2026-08-31 | Endless Journey   | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.504 (0.072)    | 0 (0.000) |    14.00 | Alxc, ottob, p3kko, peku, uli   |
|           44 |      386 | 2026-08-28 | ex-Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -11.38 | 8Juho8, Alxc, ottob, p3kko, uli |
|           43 |      448 | 2026-08-27 | Endless Journey   | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.504 (0.072)    | -         |    14.51 | 8Juho8, Alxc, ottob, p3kko, uli |
|           42 |      556 | 2026-08-24 | Black Phoenix     | L   | 1.000      | -            | -                | -                | -         |   -11.72 | 8Juho8, Alxc, ottob, p3kko, uli |
|           41 |      615 | 2026-08-22 | Leo               | L   | 1.000      | -            | -                | -                | -         |   -15.49 | 8Juho8, Alxc, ottob, p3kko, uli |
|           40 |      646 | 2026-08-21 | GenOne            | L   | 1.000      | -            | -                | -                | -         |    -6.45 | 8Juho8, Alxc, ottob, p3kko, uli |
|           39 |      713 | 2026-08-18 | Lavked            | W   | 1.000      | 0.384        | 0.009 (0.004)    | 0.826 (0.317)    | -         |    18.55 | 8Juho8, Alxc, ottob, p3kko, uli |
|           38 |      737 | 2026-08-17 | Enjoy             | W   | 1.000      | 0.344        | 0.004 (0.001)    | 0.535 (0.184)    | -         |    16.85 | 8Juho8, Alxc, ottob, p3kko, uli |
|           37 |      774 | 2026-08-16 | BERG              | W   | 1.000      | -            | -                | -                | -         |    14.31 | 8Juho8, Alxc, ottob, p3kko, uli |
|           36 |      857 | 2026-08-13 | Permitta          | L   | 1.000      | -            | -                | -                | -         |   -17.09 | 8Juho8, Alxc, ottob, p3kko, uli |
|           35 |      876 | 2026-08-12 | Endless Journey   | W   | 1.000      | 0.344        | 0.007 (0.002)    | 0.504 (0.174)    | -         |    14.31 | 8Juho8, Alxc, ottob, p3kko, uli |
|           34 |     1216 | 2026-08-01 | ENCE              | L   | 0.944      | -            | -                | -                | -         |   -12.65 | 8Juho8, Alxc, ottob, p3kko, uli |
|           33 |     1231 | 2026-07-31 | ROUNDS            | W   | 0.939      | 0.362        | -                | 0.221 (0.075)    | 1 (0.939) |     6.91 | 8Juho8, Alxc, ottob, p3kko, uli |
|           32 |     1244 | 2026-07-31 | BC.Game           | L   | 0.938      | -            | -                | -                | -         |    -2.34 | 8Juho8, Alxc, ottob, p3kko, uli |
|           31 |     1253 | 2026-07-31 | Trainwrecks       | W   | 0.937      | -            | -                | -                | 1 (0.937) |     4.39 | 8Juho8, Alxc, ottob, p3kko, uli |
|           30 |     2550 | 2026-05-31 | RBLS              | L   | 0.533      | -            | -                | -                | -         |    -8.24 | Alxc, ottob, p3kko, puuha, uli  |
|           29 |     2661 | 2026-05-29 | aAa               | W   | 0.517      | -            | -                | -                | -         |     4.83 | Alxc, ottob, p3kko, puuha, uli  |
|           28 |     2728 | 2026-05-27 | 6666              | L   | 0.506      | -            | -                | -                | -         |   -11.77 | Alxc, ottob, p3kko, puuha, uli  |
|           27 |     2770 | 2026-05-26 | DragonClaw        | L   | 0.499      | -            | -                | -                | -         |    -8.50 | Alxc, ottob, p3kko, puuha, uli  |
|           26 |     2990 | 2026-05-21 | KOLESIE           | L   | 0.465      | -            | -                | -                | -         |    -5.96 | Alxc, ottob, p3kko, puuha, uli  |
|           25 |     2999 | 2026-05-21 | Acend             | L   | 0.465      | -            | -                | -                | -         |    -1.02 | Alxc, ottob, p3kko, puuha, uli  |
|           24 |     3004 | 2026-05-21 | INFINITE          | L   | 0.464      | -            | -                | -                | -         |    -1.85 | Alxc, ottob, p3kko, puuha, uli  |
|           23 |     3010 | 2026-05-21 | Inner Circle      | L   | 0.464      | -            | -                | -                | -         |    -0.36 | Alxc, ottob, p3kko, puuha, uli  |
|           22 |     3017 | 2026-05-21 | CHAOS             | W   | 0.463      | -            | -                | -                | 1 (0.463) |     0.98 | Alxc, ottob, p3kko, puuha, uli  |
|           21 |     3265 | 2026-05-12 | fnatic            | L   | 0.405      | -            | -                | -                | -         |    -0.79 | Alxc, ottob, p3kko, puuha, uli  |
|           20 |     3310 | 2026-05-11 | FAVBET            | W   | 0.397      | -            | -                | -                | -         |     3.18 | Alxc, ottob, p3kko, puuha, uli  |
|           19 |     3363 | 2026-05-09 | Omega             | W   | 0.386      | 0.384        | 0.027 (0.004)    | 0.395 (0.059)    | -         |    10.69 | Alxc, ottob, p3kko, puuha, uli  |
|           18 |     3414 | 2026-05-07 | Famalicão         | W   | 0.371      | -            | -                | -                | -         |     1.50 | Alxc, ottob, p3kko, puuha, uli  |
|           17 |     3443 | 2026-05-05 | GenOne            | L   | 0.359      | -            | -                | -                | -         |    -3.02 | Alxc, ottob, p3kko, puuha, uli  |
|           16 |     3462 | 2026-05-04 | RBLS              | L   | 0.352      | -            | -                | -                | -         |    -6.28 | Alxc, ottob, p3kko, puuha, uli  |
|           15 |     3492 | 2026-05-03 | ex-RUBY           | L   | 0.345      | -            | -                | -                | -         |    -2.94 | Alxc, ottob, p3kko, puuha, uli  |
|           14 |     3499 | 2026-05-03 | Black Phoenix     | L   | 0.344      | -            | -                | -                | -         |    -4.82 | Alxc, ottob, p3kko, puuha, uli  |
|           13 |     4834 | 2026-03-31 | Liquid            | L   | 0.126      | -            | -                | -                | -         |    -0.13 | Alxc, ottob, p3kko, puuha, uli  |
|           12 |     4910 | 2026-03-30 | Lazer Cats        | W   | 0.120      | 0.354        | 0.014 (0.001)    | -                | 1 (0.120) |     1.56 | Alxc, ottob, p3kko, puuha, uli  |
|           11 |     4942 | 2026-03-30 | Luminosity        | L   | 0.118      | -            | -                | -                | -         |    -0.52 | Alxc, ottob, p3kko, puuha, uli  |
|           10 |     4976 | 2026-03-29 | Strael Bora       | W   | 0.113      | -            | -                | -                | 1 (0.113) |     0.25 | Alxc, ottob, p3kko, puuha, uli  |
|            9 |     5015 | 2026-03-29 | Sashi             | L   | 0.112      | -            | -                | -                | -         |    -0.40 | Alxc, ottob, p3kko, puuha, uli  |
|            8 |     5024 | 2026-03-29 | SINQU             | W   | 0.111      | -            | -                | -                | 1 (0.111) |     0.38 | Alxc, ottob, p3kko, puuha, uli  |
|            7 |     5412 | 2026-03-22 | TDK               | L   | 0.067      | -            | -                | -                | -         |    -1.61 | Alxc, ottob, p3kko, puuha, uli  |
|            6 |     5459 | 2026-03-21 | HYPERSPIRIT       | W   | 0.060      | -            | -                | -                | -         |     0.67 | Alxc, ottob, p3kko, puuha, uli  |
|            5 |     5519 | 2026-03-20 | ex-Zero Tenacity  | W   | 0.054      | 0.384        | 0.031 (0.001)    | -                | -         |     0.97 | Alxc, ottob, p3kko, puuha, uli  |
|            4 |     5565 | 2026-03-19 | Nemiga            | L   | 0.047      | -            | -                | -                | -         |    -0.51 | Aerial, Alxc, ottob, puuha, uli |
|            3 |     5666 | 2026-03-17 | Leo               | W   | 0.033      | -            | -                | -                | -         |     0.20 | Aerial, Alxc, ottob, puuha, uli |
|            2 |     5846 | 2026-03-13 | Aurora Young Blud | L   | 0.006      | -            | -                | -                | -         |    -0.16 | Aerial, Alxc, ottob, puuha, uli |
|            1 |     5885 | 2026-03-12 | NOVAQ             | L   | 0.000      | -            | -                | -                | -         |    -0.00 | Aerial, Alxc, ottob, puuha, uli |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,165.70)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-01 |      0.947 | $2,288.00      | $2,165.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
