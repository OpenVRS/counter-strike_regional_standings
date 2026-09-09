### Roster Details<br />
Team Name: Wildcard<br />
Roster: Cxzi, HexT, mhL, nEMANHA, reck<br />
Global Rank: [54](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [10]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1134.8<br />
<br />
Final Rank Value (1134.8) = Starting Rank Value (1098.8) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.407[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1098.8
- 400 + ( ( 0.367 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1098.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      776 | 2026-08-15 | paiN             | L   | 1.000      | -            | -                | -                | -         |    -9.25 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           35 |      853 | 2026-08-12 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -0.95 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           34 |     1369 | 2026-07-26 | The MongolZ      | L   | 0.911      | -            | -                | -                | -         |    -4.28 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           33 |     1512 | 2026-07-21 | Alliance         | W   | 0.879      | 0.903        | 0.209 (0.166)    | 0.444 (0.352)    | -         |    22.89 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           32 |     1662 | 2026-07-16 | K27              | L   | 0.843      | -            | -                | -                | -         |    -6.13 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           31 |     1674 | 2026-07-15 | Iberian Soul     | L   | 0.838      | -            | -                | -                | -         |   -11.96 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           30 |     2810 | 2026-05-24 | FOKUS            | W   | 0.492      | 0.435        | 0.116 (0.025)    | 0.525 (0.112)    | 1 (0.492) |     9.15 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           29 |     2850 | 2026-05-23 | FOKUS            | W   | 0.486      | 0.435        | 0.116 (0.024)    | 0.525 (0.111)    | 1 (0.486) |     9.14 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           28 |     2881 | 2026-05-23 | Acend            | W   | 0.484      | 0.435        | 0.072 (0.015)    | 0.706 (0.148)    | 1 (0.484) |    11.74 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           27 |     2905 | 2026-05-22 | Inner Circle     | W   | 0.479      | 0.435        | 0.178 (0.037)    | 0.556 (0.116)    | 1 (0.479) |    13.61 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           26 |     3442 | 2026-05-03 | M80              | L   | 0.355      | -            | -                | -                | -         |    -3.87 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           25 |     3443 | 2026-05-03 | Voca             | L   | 0.354      | -            | -                | -                | -         |    -9.12 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           24 |     3451 | 2026-05-03 | ex-Aether        | W   | 0.352      | -            | -                | -                | -         |     0.78 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           23 |     3527 | 2026-05-01 | Voca             | W   | 0.341      | 0.363        | 0.030 (0.004)    | 0.377 (0.047)    | -         |     1.94 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           22 |     3548 | 2026-05-01 | FarmVille        | W   | 0.338      | -            | -                | -                | -         |     0.75 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           21 |     3625 | 2026-04-29 | FarmVille        | W   | 0.327      | -            | -                | -                | -         |     0.66 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           20 |     3705 | 2026-04-27 | Aether           | W   | 0.313      | -            | -                | -                | -         |     0.63 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           19 |     3751 | 2026-04-26 | Wanted Goons     | W   | 0.307      | -            | -                | -                | -         |     0.87 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           18 |     3763 | 2026-04-26 | Fisher College   | W   | 0.306      | -            | -                | -                | 1 (0.306) |     1.62 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           17 |     3776 | 2026-04-26 | Passion UA       | W   | 0.306      | -            | -                | -                | 1 (0.306) |     1.69 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           16 |     3819 | 2026-04-25 | Chicken Coop     | W   | 0.301      | 0.371        | -                | 0.330 (0.037)    | 1 (0.301) |     2.08 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           15 |     3830 | 2026-04-25 | Voca             | W   | 0.300      | 0.371        | 0.030 (0.003)    | 0.377 (0.042)    | 1 (0.300) |     1.75 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           14 |     3855 | 2026-04-25 | Unreal Nightmare | W   | 0.299      | -            | -                | -                | 1 (0.299) |     0.22 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           13 |     4270 | 2026-04-08 | PARIVISION       | L   | 0.184      | -            | -                | -                | -         |    -0.65 | HexT, mhL, nEMANHA, Peeping, reck |
|           12 |     4310 | 2026-04-07 | The MongolZ      | L   | 0.176      | -            | -                | -                | -         |    -0.81 | HexT, mhL, nEMANHA, Peeping, reck |
|           11 |     4349 | 2026-04-06 | FOKUS            | W   | 0.169      | 1.000        | 0.116 (0.020)    | 0.525 (0.089)    | 1 (0.169) |     3.49 | HexT, mhL, nEMANHA, Peeping, reck |
|           10 |     4412 | 2026-04-04 | FaZe             | W   | 0.162      | 1.000        | 0.478 (0.077)    | 0.356 (0.058)    | -         |     4.82 | HexT, mhL, nEMANHA, Peeping, reck |
|            9 |     4475 | 2026-04-04 | B8               | L   | 0.157      | -            | -                | -                | -         |    -0.50 | HexT, mhL, nEMANHA, Peeping, reck |
|            8 |     5066 | 2026-03-28 | NOMERCY          | W   | 0.111      | -            | -                | -                | -         |     0.07 | HexT, mhL, nEMANHA, Peeping, reck |
|            7 |     5074 | 2026-03-28 | BETBOOM          | W   | 0.111      | 0.341        | 0.252 (0.010)    | -                | -         |     3.10 | HexT, mhL, nEMANHA, Peeping, reck |
|            6 |     5080 | 2026-03-28 | Sangal           | L   | 0.110      | -            | -                | -                | -         |    -3.13 | HexT, mhL, nEMANHA, Peeping, reck |
|            5 |     5085 | 2026-03-28 | BESTIA           | L   | 0.110      | -            | -                | -                | -         |    -2.48 | HexT, mhL, nEMANHA, Peeping, reck |
|            4 |     5268 | 2026-03-24 | FOKUS            | L   | 0.084      | -            | -                | -                | -         |    -0.92 | HexT, mhL, nEMANHA, Peeping, reck |
|            3 |     5302 | 2026-03-23 | EAC              | L   | 0.080      | -            | -                | -                | -         |    -1.00 | HexT, mhL, nEMANHA, Peeping, reck |
|            2 |     5308 | 2026-03-23 | Fraternity       | W   | 0.080      | -            | -                | -                | -         |     0.05 | HexT, mhL, nEMANHA, Peeping, reck |
|            1 |     5310 | 2026-03-23 | BERG             | W   | 0.079      | -            | -                | -                | -         |     0.05 | HexT, mhL, nEMANHA, Peeping, reck |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,034.18)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-07-26 |      0.912 | $28,750.00     | $26,221.47      |
| 2026-07-18 |      0.859 | $7,500.00      | $6,439.87       |
| 2026-05-24 |      0.492 | $30,000.00     | $14,761.04      |
| 2026-05-03 |      0.355 | $4,000.00      | $1,419.67       |
| 2026-05-03 |      0.354 | $4,000.00      | $1,417.04       |
| 2026-04-26 |      0.306 | $11,000.00     | $3,369.52       |
| 2026-04-11 |      0.205 | $31,250.00     | $6,405.57       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
