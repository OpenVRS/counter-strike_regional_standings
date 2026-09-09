### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [226](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [156]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  670.9<br />
<br />
Final Rank Value (670.9) = Starting Rank Value (646.2) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.195[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.032[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.2
- 400 + ( ( 0.129 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 646.2


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
|           30 |     3167 | 2026-05-14 | 1win            | L   | 0.423      | -            | -                | -                | -         |    -0.34 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           29 |     3220 | 2026-05-12 | Lavked          | L   | 0.412      | -            | -                | -                | -         |    -2.38 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           28 |     3277 | 2026-05-11 | INOX Division   | L   | 0.403      | -            | -                | -                | -         |    -1.81 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           27 |     3319 | 2026-05-10 | BBL             | L   | 0.396      | -            | -                | -                | -         |    -0.88 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           26 |     3330 | 2026-05-09 | UNiTY           | W   | 0.392      | 0.384        | 0.006 (0.001)    | 0.537 (0.081)    | 0 (0.000) |     9.89 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           25 |     3368 | 2026-05-08 | AM              | W   | 0.384      | 0.435        | 0.002 (0.000)    | 0.100 (0.017)    | 0 (0.000) |     7.35 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           24 |     3380 | 2026-05-07 | Lavked          | L   | 0.378      | -            | -                | -                | -         |    -2.18 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           23 |     3422 | 2026-05-05 | Bebop           | W   | 0.362      | 0.384        | 0.000 (0.000)    | 0.384 (0.053)    | 0 (0.000) |     7.47 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           22 |     3432 | 2026-05-04 | Black Phoenix   | L   | 0.358      | -            | -                | -                | -         |    -2.10 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           21 |     3727 | 2026-04-27 | UNiTY           | L   | 0.312      | -            | -                | -                | -         |    -1.71 | ay0k, Flierax, lmbt, Nikodeon, opdust   |
|           20 |     3955 | 2026-04-23 | ECSTATIC        | W   | 0.285      | 0.363        | 0.002 (0.000)    | 0.030 (0.003)    | 0 (0.000) |     4.51 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           19 |     3991 | 2026-04-22 | Acend           | L   | 0.277      | -            | -                | -                | -         |    -0.17 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           18 |     4021 | 2026-04-20 | CYBERSHOKE      | L   | 0.263      | -            | -                | -                | -         |    -1.31 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           17 |     4031 | 2026-04-19 | EYEBALLERS      | L   | 0.258      | -            | -                | -                | -         |    -0.23 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           16 |     4049 | 2026-04-19 | Black Phoenix   | W   | 0.256      | 0.435        | 0.017 (0.002)    | 0.952 (0.106)    | 0 (0.000) |     6.44 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           15 |     4081 | 2026-04-17 | ex-RUBY         | L   | 0.244      | -            | -                | -                | -         |    -3.72 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           14 |     4119 | 2026-04-14 | Qual4           | W   | 0.225      | 0.363        | 0.000 (0.000)    | -                | 0 (0.000) |     1.39 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           13 |     4131 | 2026-04-14 | GenOne          | W   | 0.223      | 0.435        | 0.055 (0.005)    | 1.000 (0.097)    | 0 (0.000) |     6.46 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           12 |     4142 | 2026-04-13 | Clutchain       | L   | 0.218      | -            | -                | -                | -         |    -4.81 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           11 |     4170 | 2026-04-12 | ARCRED          | L   | 0.209      | -            | -                | -                | -         |    -0.99 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           10 |     4272 | 2026-04-08 | brazylijski luz | W   | 0.184      | 0.371        | 0.002 (0.000)    | 0.076 (0.005)    | -         |     3.20 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|            9 |     4957 | 2026-03-29 | aimclub         | L   | 0.118      | -            | -                | -                | -         |    -2.43 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|            8 |     4985 | 2026-03-29 | Lazer Cats      | L   | 0.117      | -            | -                | -                | -         |    -1.10 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|            7 |     5005 | 2026-03-29 | ADN             | W   | 0.116      | 0.354        | 0.000 (0.000)    | -                | 1 (0.116) |     0.72 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|            6 |     5203 | 2026-03-25 | BIG             | L   | 0.092      | -            | -                | -                | -         |    -0.02 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            5 |     5264 | 2026-03-24 | fnatic          | W   | 0.084      | 0.435        | 0.045 (0.002)    | 0.895 (0.033)    | 1 (0.084) |     2.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            4 |     5285 | 2026-03-24 | Romania         | W   | 0.083      | 0.435        | -                | 0.035 (0.001)    | 1 (0.083) |     0.86 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            3 |     5788 | 2026-03-14 | Nemiga          | L   | 0.016      | -            | -                | -                | -         |    -0.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            2 |     5869 | 2026-03-12 | megoshort       | W   | 0.005      | 0.384        | -                | 0.024 (0.000)    | -         |     0.05 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            1 |     5887 | 2026-03-12 | CYBERSHOKE      | L   | 0.003      | -            | -                | -                | -         |    -0.03 | ay0k, Joey, Nikodeon, opdust, xelex     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($37.59)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.026 | $500.00        | $12.90          |
| 2026-03-13 |      0.012 | $2,000.00      | $24.69          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
