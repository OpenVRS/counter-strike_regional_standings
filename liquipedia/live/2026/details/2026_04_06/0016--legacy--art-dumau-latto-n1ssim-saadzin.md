### Roster Details<br />
Team Name: Legacy<br />
Roster: arT, dumau, latto, n1ssim, saadzin<br />
Global Rank: [16](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [4]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  1530.1<br />
<br />
Final Rank Value (1530.1) = Starting Rank Value (1432.3) + Head To Head Adjustments (97.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.629[<sup>1</sup>](#table2)
- Bounty Collected: 0.610[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.626[<sup>2</sup>](#table1)

The average of these factors is 0.528<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1432.3
- 400 + ( ( 0.528 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1432.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.387
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |      293 | 2026-03-30 | 9z Team           | L   | 1.000      | -            | -                | -                | -         |   -13.59 | arT, dumau, latto, n1ssim, saadzin |
|           37 |      323 | 2026-03-29 | Gaimin Gladiators | W   | 1.000      | 0.393        | -                | 0.406 (0.160)    | 1 (1.000) |     9.78 | arT, dumau, latto, n1ssim, saadzin |
|           36 |      342 | 2026-03-29 | ODDIK             | W   | 1.000      | 0.393        | -                | 0.564 (0.222)    | 1 (1.000) |     6.58 | arT, dumau, latto, n1ssim, saadzin |
|           35 |      478 | 2026-03-27 | Galorys           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.35 | arT, dumau, latto, n1ssim, saadzin |
|           34 |      486 | 2026-03-27 | Yawara E-Sports   | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.83 | arT, dumau, latto, n1ssim, saadzin |
|           33 |     1167 | 2026-03-13 | Aurora Gaming     | L   | 1.000      | -            | -                | -                | -         |    -5.03 | arT, dumau, latto, n1ssim, saadzin |
|           32 |     1350 | 2026-03-09 | Natus Vincere     | W   | 1.000      | 0.805        | 1.000 (0.805)    | 0.344 (0.277)    | -         |    27.32 | arT, dumau, latto, n1ssim, saadzin |
|           31 |     1428 | 2026-03-08 | Astralis          | W   | 1.000      | 0.805        | 0.466 (0.375)    | 0.337 (0.271)    | -         |    22.15 | arT, dumau, latto, n1ssim, saadzin |
|           30 |     1484 | 2026-03-07 | Monte             | W   | 0.999      | 0.805        | 0.114 (0.091)    | 0.487 (0.392)    | -         |    19.95 | arT, dumau, latto, n1ssim, saadzin |
|           29 |     1527 | 2026-03-06 | Aurora Gaming     | L   | 0.992      | -            | -                | -                | -         |    -3.68 | arT, dumau, latto, n1ssim, saadzin |
|           28 |     1678 | 2026-03-03 | PARIVISION        | W   | 0.972      | 0.613        | 1.000 (0.596)    | 0.426 (0.254)    | -         |    27.68 | arT, dumau, latto, n1ssim, saadzin |
|           27 |     1700 | 2026-03-02 | G2 Esports        | W   | 0.968      | 0.613        | 0.348 (0.206)    | 0.582 (0.345)    | -         |    24.94 | arT, dumau, latto, n1ssim, saadzin |
|           26 |     1754 | 2026-03-01 | Ninjas in Pyjamas | W   | 0.960      | 0.613        | 0.127 (0.074)    | 0.454 (0.267)    | -         |    16.29 | arT, dumau, latto, n1ssim, saadzin |
|           25 |     3069 | 2026-01-29 | FUT Esports       | L   | 0.754      | -            | -                | -                | -         |    -8.08 | dumau, latto, lux, n1ssim, saadzin |
|           24 |     3101 | 2026-01-28 | BC.Game Esports   | L   | 0.746      | -            | -                | -                | -         |   -14.85 | dumau, latto, lux, n1ssim, saadzin |
|           23 |     3417 | 2026-01-17 | MIBR              | L   | 0.676      | -            | -                | -                | -         |   -14.49 | dumau, latto, lux, n1ssim, saadzin |
|           22 |     3472 | 2026-01-16 | Sharks Esports    | L   | 0.669      | -            | -                | -                | -         |   -12.51 | dumau, latto, lux, n1ssim, saadzin |
|           21 |     3533 | 2026-01-15 | MIBR              | W   | 0.663      | 0.435        | 0.076 (0.022)    | 0.436 (0.126)    | 1 (0.663) |     6.17 | dumau, latto, lux, n1ssim, saadzin |
|           20 |     3565 | 2026-01-14 | Game Hunters      | W   | 0.656      | 0.435        | -                | 0.512 (0.146)    | 1 (0.656) |     0.66 | dumau, latto, lux, n1ssim, saadzin |
|           19 |     4213 | 2025-11-27 | PARIVISION        | L   | 0.334      | -            | -                | -                | -         |    -0.93 | dumau, latto, lux, n1ssim, saadzin |
|           18 |     4229 | 2025-11-26 | B8                | L   | 0.326      | -            | -                | -                | -         |    -3.42 | dumau, latto, lux, n1ssim, saadzin |
|           17 |     4252 | 2025-11-25 | RED Canids        | W   | 0.319      | -            | -                | -                | 1 (0.319) |     3.03 | dumau, latto, lux, n1ssim, saadzin |
|           16 |     4273 | 2025-11-24 | Rare Atom         | W   | 0.314      | -            | -                | -                | 1 (0.314) |     2.35 | dumau, latto, lux, n1ssim, saadzin |
|           15 |     4288 | 2025-11-24 | FlyQuest          | L   | 0.312      | -            | -                | -                | -         |    -7.13 | dumau, latto, lux, n1ssim, saadzin |
|           14 |     5013 | 2025-11-01 | Aurora Gaming     | L   | 0.159      | -            | -                | -                | -         |    -0.39 | dumau, latto, lux, n1ssim, saadzin |
|           13 |     5029 | 2025-10-31 | BC.Game Esports   | W   | 0.153      | -            | -                | -                | 1 (0.153) |     1.70 | dumau, latto, lux, n1ssim, saadzin |
|           12 |     5040 | 2025-10-31 | PaiN Gaming       | W   | 0.152      | 1.000        | 0.272 (0.041)    | -                | 1 (0.152) |     3.27 | dumau, latto, lux, n1ssim, saadzin |
|           11 |     5060 | 2025-10-30 | FlyQuest          | W   | 0.145      | -            | -                | -                | -         |     1.28 | dumau, latto, lux, n1ssim, saadzin |
|           10 |     5075 | 2025-10-29 | B8                | L   | 0.139      | -            | -                | -                | -         |    -1.48 | dumau, latto, lux, n1ssim, saadzin |
|            9 |     5114 | 2025-10-28 | Astralis          | W   | 0.132      | 1.000        | 0.466 (0.061)    | -                | -         |     3.19 | dumau, latto, lux, n1ssim, saadzin |
|            8 |     5157 | 2025-10-27 | Gentle Mates      | W   | 0.124      | -            | -                | -                | -         |     1.46 | dumau, latto, lux, n1ssim, saadzin |
|            7 |     5217 | 2025-10-26 | Team Liquid       | L   | 0.118      | -            | -                | -                | -         |    -1.82 | dumau, latto, lux, n1ssim, saadzin |
|            6 |     5441 | 2025-10-19 | 3DMAX             | W   | 0.071      | -            | -                | -                | -         |     1.58 | dumau, latto, lux, n1ssim, saadzin |
|            5 |     5462 | 2025-10-18 | HEROIC            | W   | 0.065      | -            | -                | -                | -         |     1.41 | dumau, latto, lux, n1ssim, saadzin |
|            4 |     5491 | 2025-10-17 | FUT Esports       | W   | 0.058      | 1.000        | 0.331 (0.019)    | -                | -         |     1.19 | dumau, latto, lux, n1ssim, saadzin |
|            3 |     5527 | 2025-10-15 | Team Liquid       | L   | 0.051      | -            | -                | -                | -         |    -0.78 | dumau, latto, lux, n1ssim, saadzin |
|            2 |     5588 | 2025-10-14 | 3DMAX             | W   | 0.039      | -            | -                | -                | -         |     0.87 | dumau, latto, lux, n1ssim, saadzin |
|            1 |     5599 | 2025-10-13 | Virtus.pro        | W   | 0.037      | -            | -                | -                | -         |     0.03 | dumau, latto, lux, n1ssim, saadzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($117,932.66)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.26) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-30 |      1.000 | $5,725.30      | $5,725.30       |
| 2026-03-15 |      1.000 | $48,000.00     | $48,000.00      |
| 2026-01-30 |      0.760 | $2,500.00      | $1,901.13       |
| 2026-01-18 |      0.682 | $6,250.00      | $4,261.07       |
| 2025-11-01 |      0.159 | $187,500.00    | $29,780.96      |
| 2025-10-19 |      0.071 | $400,000.00    | $28,264.20      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
