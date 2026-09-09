### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [240](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [164]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  660.5<br />
<br />
Final Rank Value (660.5) = Starting Rank Value (635.5) + Head To Head Adjustments (25.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.176[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 635.5
- 400 + ( ( 0.124 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 635.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     3195 | 2026-05-14 | 1win            | L   | 0.417      | -            | -                | -                | -         |    -0.30 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           27 |     3248 | 2026-05-12 | Lavked          | L   | 0.407      | -            | -                | -                | -         |    -2.24 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           26 |     3305 | 2026-05-11 | INOX Division   | L   | 0.398      | -            | -                | -                | -         |    -1.71 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           25 |     3347 | 2026-05-10 | BBL             | L   | 0.391      | -            | -                | -                | -         |    -0.83 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           24 |     3358 | 2026-05-09 | UNiTY           | W   | 0.387      | 0.384        | 0.006 (0.001)    | 0.537 (0.080)    | 0 (0.000) |     9.86 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           23 |     3396 | 2026-05-08 | AM              | W   | 0.378      | 0.435        | 0.002 (0.000)    | 0.098 (0.016)    | 0 (0.000) |     7.37 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           22 |     3408 | 2026-05-07 | Lavked          | L   | 0.372      | -            | -                | -                | -         |    -2.04 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           21 |     3450 | 2026-05-05 | Bebop           | W   | 0.357      | 0.384        | 0.000 (0.000)    | 0.381 (0.052)    | 0 (0.000) |     7.47 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           20 |     3460 | 2026-05-04 | Black Phoenix   | L   | 0.352      | -            | -                | -                | -         |    -1.98 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           19 |     3755 | 2026-04-27 | UNiTY           | L   | 0.306      | -            | -                | -                | -         |    -1.60 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           18 |     3983 | 2026-04-23 | ECSTATIC        | W   | 0.279      | 0.363        | 0.002 (0.000)    | 0.029 (0.003)    | 0 (0.000) |     4.51 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           17 |     4019 | 2026-04-22 | Acend           | L   | 0.272      | -            | -                | -                | -         |    -0.16 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           16 |     4049 | 2026-04-20 | CYBERSHOKE      | L   | 0.258      | -            | -                | -                | -         |    -1.21 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           15 |     4059 | 2026-04-19 | EYEBALLERS      | L   | 0.253      | -            | -                | -                | -         |    -0.21 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           14 |     4077 | 2026-04-19 | Black Phoenix   | W   | 0.251      | 0.435        | 0.017 (0.002)    | 0.948 (0.103)    | 0 (0.000) |     6.37 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           13 |     4109 | 2026-04-17 | ex-RUBY         | L   | 0.239      | -            | -                | -                | -         |    -3.64 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           12 |     4147 | 2026-04-14 | Qual4           | W   | 0.220      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.43 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           11 |     4159 | 2026-04-14 | GenOne          | W   | 0.217      | 0.435        | 0.055 (0.005)    | 1.000 (0.095)    | 0 (0.000) |     6.33 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           10 |     4170 | 2026-04-13 | Clutchain       | L   | 0.213      | -            | -                | -                | -         |    -4.68 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            9 |     4198 | 2026-04-12 | ARCRED          | L   | 0.204      | -            | -                | -                | -         |    -1.56 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            8 |     4300 | 2026-04-08 | brazylijski luz | W   | 0.178      | 0.371        | 0.002 (0.000)    | 0.075 (0.005)    | -         |     3.12 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            7 |     4985 | 2026-03-29 | aimclub         | L   | 0.113      | -            | -                | -                | -         |    -2.26 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|            6 |     5013 | 2026-03-29 | Lazer Cats      | L   | 0.112      | -            | -                | -                | -         |    -0.99 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|            5 |     5033 | 2026-03-29 | ADN             | W   | 0.111      | 0.354        | 0.000 (0.000)    | -                | 1 (0.111) |     0.72 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|            4 |     5231 | 2026-03-25 | BIG             | L   | 0.086      | -            | -                | -                | -         |    -0.01 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            3 |     5292 | 2026-03-24 | fnatic          | W   | 0.079      | 0.435        | 0.045 (0.002)    | 0.893 (0.031)    | 1 (0.079) |     2.44 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            2 |     5313 | 2026-03-24 | Romania         | W   | 0.078      | 0.435        | -                | 0.034 (0.001)    | 1 (0.078) |     0.83 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            1 |     5816 | 2026-03-14 | Nemiga          | L   | 0.011      | -            | -                | -                | -         |    -0.04 | ay0k, Joey, Nikodeon, opdust, xelex     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10.17)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.020 | $500.00        | $10.17          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
