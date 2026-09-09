### Roster Details<br />
Team Name: HYPERSPIRIT<br />
Roster: Ciocardau, d1maje, Q-Q, Scr0b, starplajerz<br />
Global Rank: [134](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [103]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  832.6<br />
<br />
Final Rank Value (832.6) = Starting Rank Value (765.3) + Head To Head Adjustments (67.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 765.3
- 400 + ( ( 0.192 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 765.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      337 | 2026-08-29 | UPGRADE          | L   | 1.000      | -            | -                | -                | -         |    -8.29 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           51 |      377 | 2026-08-28 | Color            | L   | 1.000      | -            | -                | -                | -         |    -6.52 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           50 |      454 | 2026-08-26 | Black Phoenix    | L   | 1.000      | -            | -                | -                | -         |   -11.18 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           49 |      467 | 2026-08-26 | ex-Zero Tenacity | W   | 1.000      | 0.435        | 0.031 (0.013)    | 1.000 (0.435)    | 0 (0.000) |    18.55 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           48 |      547 | 2026-08-24 | MASONIC          | W   | 1.000      | 0.384        | 0.006 (0.002)    | -                | 0 (0.000) |    16.41 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           47 |      553 | 2026-08-24 | BET-M            | L   | 1.000      | -            | -                | -                | -         |   -11.64 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           46 |      574 | 2026-08-23 | G2 Ares          | L   | 1.000      | -            | -                | -                | -         |   -11.95 | Ciocardau, d1maje, Q-Q, S3NSEY, starplajerz    |
|           45 |      607 | 2026-08-21 | Just Players     | L   | 1.000      | -            | -                | -                | -         |   -12.22 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           44 |      617 | 2026-08-21 | ex-RUBY          | W   | 1.000      | 0.435        | 0.017 (0.007)    | 0.766 (0.333)    | 0 (0.000) |    25.54 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           43 |      657 | 2026-08-19 | Drip Too Hard    | W   | 1.000      | 0.384        | 0.001 (0.001)    | 0.356 (0.137)    | 0 (0.000) |    13.20 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           42 |      670 | 2026-08-19 | Permitta         | W   | 1.000      | 0.384        | 0.007 (0.003)    | 0.689 (0.265)    | 0 (0.000) |    16.64 | Ciocardau, d1maje, Q-Q, Scr0b, starplajerz     |
|           41 |      823 | 2026-08-14 | Bebop            | W   | 1.000      | 0.384        | -                | 0.384 (0.148)    | 0 (0.000) |    15.85 | ADRON, d1maje, Q-Q, Scr0b, starplajerz         |
|           40 |      840 | 2026-08-13 | The Last Resort  | W   | 1.000      | 0.384        | 0.011 (0.004)    | 0.444 (0.171)    | 0 (0.000) |    22.00 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           39 |     2148 | 2026-06-16 | Sashi            | L   | 0.643      | -            | -                | -                | -         |    -1.40 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           38 |     2265 | 2026-06-12 | Mai Tai          | W   | 0.618      | 0.371        | -                | 0.353 (0.081)    | 0 (0.000) |     6.11 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           37 |     2348 | 2026-06-08 | INOX Division    | L   | 0.590      | -            | -                | -                | -         |    -3.82 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           36 |     2352 | 2026-06-08 | 6666             | L   | 0.589      | -            | -                | -                | -         |   -11.39 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           35 |     2376 | 2026-06-07 | Atreides         | W   | 0.582      | 0.344        | -                | 0.533 (0.107)    | -         |    10.54 | Ciocardau, d1maje, GEOHYPE, ragga, starplajerz |
|           34 |     2439 | 2026-06-04 | HEROIC Academy   | L   | 0.565      | -            | -                | -                | -         |   -11.50 | Ciocardau, d1maje, GEOHYPE, ragga, starplajerz |
|           33 |     2454 | 2026-06-04 | PsychoFace       | W   | 0.563      | 0.371        | 0.009 (0.002)    | 0.383 (0.080)    | -         |    11.92 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           32 |     2468 | 2026-06-03 | Atreides         | W   | 0.558      | 0.344        | -                | 0.533 (0.102)    | -         |    10.38 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           31 |     2616 | 2026-05-29 | CYBERSHOKE       | L   | 0.524      | -            | -                | -                | -         |    -5.94 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           30 |     2731 | 2026-05-26 | DragonClaw       | W   | 0.505      | 0.396        | 0.013 (0.003)    | -                | -         |     9.70 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           29 |     2768 | 2026-05-25 | Bebop            | W   | 0.499      | -            | -                | -                | -         |     8.18 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           28 |     3416 | 2026-05-05 | RBLS             | L   | 0.364      | -            | -                | -                | -         |    -4.55 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           27 |     3439 | 2026-05-04 | Black Phoenix    | L   | 0.356      | -            | -                | -                | -         |    -3.18 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           26 |     3452 | 2026-05-03 | RBLS             | W   | 0.352      | -            | -                | -                | -         |     6.70 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           25 |     3467 | 2026-05-03 | aAa              | L   | 0.350      | -            | -                | -                | -         |    -6.09 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           24 |     3554 | 2026-05-01 | ex-MANA          | L   | 0.338      | -            | -                | -                | -         |    -5.38 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           23 |     3607 | 2026-04-30 | Walczaki         | L   | 0.330      | -            | -                | -                | -         |    -1.91 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           22 |     3620 | 2026-04-30 | Clutchain fe     | W   | 0.329      | 0.344        | 0.004 (0.000)    | -                | -         |     3.83 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           21 |     3660 | 2026-04-29 | ex-MANA          | L   | 0.323      | -            | -                | -                | -         |    -5.25 | ADRON, BRK, Ciocardau, d1maje, starplajerz     |
|           20 |     3688 | 2026-04-28 | HEROIC Academy   | L   | 0.318      | -            | -                | -                | -         |    -6.35 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           19 |     3883 | 2026-04-25 | 9INE             | L   | 0.296      | -            | -                | -                | -         |    -1.61 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           18 |     4244 | 2026-04-09 | bond1e           | W   | 0.191      | -            | -                | -                | -         |     1.10 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           17 |     4335 | 2026-04-06 | KOLESIE          | W   | 0.171      | 0.384        | 0.016 (0.001)    | -                | -         |     3.77 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           16 |     4936 | 2026-03-29 | DALUYONG         | W   | 0.119      | -            | -                | -                | -         |     0.44 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           15 |     4965 | 2026-03-29 | Drama            | L   | 0.118      | -            | -                | -                | -         |    -3.06 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           14 |     4997 | 2026-03-29 | INFINITE         | L   | 0.117      | -            | -                | -                | -         |    -0.28 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           13 |     5118 | 2026-03-27 | ASTRAL           | L   | 0.105      | -            | -                | -                | -         |    -0.27 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           12 |     5144 | 2026-03-26 | Drama            | W   | 0.100      | -            | -                | -                | -         |     0.56 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           11 |     5202 | 2026-03-25 | Iberian Soul     | L   | 0.092      | -            | -                | -                | -         |    -0.32 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|           10 |     5249 | 2026-03-24 | ECSTATIC         | W   | 0.085      | -            | -                | -                | 1 (0.085) |     0.93 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            9 |     5273 | 2026-03-24 | CYBERSHOKE       | W   | 0.084      | -            | -                | -                | 1 (0.084) |     1.58 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            8 |     5275 | 2026-03-24 | ECSTATIC         | L   | 0.084      | -            | -                | -                | -         |    -1.72 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            7 |     5431 | 2026-03-21 | HAVU             | L   | 0.066      | -            | -                | -                | -         |    -0.76 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            6 |     5494 | 2026-03-20 | Eternal Fire     | W   | 0.059      | -            | -                | -                | -         |     0.60 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            5 |     5560 | 2026-03-19 | Rune Eaters      | W   | 0.051      | -            | -                | -                | -         |     0.26 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            4 |     5611 | 2026-03-18 | AIRLYA           | W   | 0.043      | -            | -                | -                | -         |     0.16 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            3 |     5643 | 2026-03-17 | TDK              | L   | 0.038      | -            | -                | -                | -         |    -0.76 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            2 |     5686 | 2026-03-16 | aimclub          | W   | 0.031      | -            | -                | -                | -         |     0.21 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |
|            1 |     5744 | 2026-03-15 | cirahvi          | L   | 0.023      | -            | -                | -                | -         |    -0.50 | ADRON, Ciocardau, d1maje, ragga, starplajerz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,069.36)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-26 |      0.306 | $3,500.00      | $1,069.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
