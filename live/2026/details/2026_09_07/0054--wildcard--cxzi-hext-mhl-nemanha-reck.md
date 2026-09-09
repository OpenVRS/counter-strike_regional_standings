### Roster Details<br />
Team Name: Wildcard<br />
Roster: Cxzi, HexT, mhL, nEMANHA, reck<br />
Global Rank: [54](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [10]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1131.6<br />
<br />
Final Rank Value (1131.6) = Starting Rank Value (1095.6) + Head To Head Adjustments (36.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.538[<sup>1</sup>](#table2)
- Bounty Collected: 0.412[<sup>2</sup>](#table1)
- Opponent Network: 0.109[<sup>2</sup>](#table1)
- LAN Wins: 0.402[<sup>2</sup>](#table1)

The average of these factors is 0.365<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1095.6
- 400 + ( ( 0.365 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1095.6


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
|           36 |      804 | 2026-08-15 | paiN             | L   | 1.000      | -            | -                | -                | -         |    -9.22 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           35 |      881 | 2026-08-12 | FURIA            | L   | 1.000      | -            | -                | -                | -         |    -0.93 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           34 |     1397 | 2026-07-26 | The MongolZ      | L   | 0.906      | -            | -                | -                | -         |    -4.25 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           33 |     1540 | 2026-07-21 | Alliance         | W   | 0.873      | 0.903        | 0.209 (0.165)    | 0.439 (0.346)    | -         |    22.81 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           32 |     1690 | 2026-07-16 | K27              | L   | 0.838      | -            | -                | -                | -         |    -6.01 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           31 |     1702 | 2026-07-15 | Iberian Soul     | L   | 0.833      | -            | -                | -                | -         |   -11.85 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           30 |     2838 | 2026-05-24 | FOKUS            | W   | 0.487      | 0.435        | 0.115 (0.024)    | 0.523 (0.111)    | 1 (0.487) |     9.07 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           29 |     2878 | 2026-05-23 | FOKUS            | W   | 0.480      | 0.435        | 0.115 (0.024)    | 0.523 (0.109)    | 1 (0.480) |     9.05 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           28 |     2909 | 2026-05-23 | Acend            | W   | 0.478      | 0.435        | 0.072 (0.015)    | 0.703 (0.146)    | 1 (0.478) |    11.65 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           27 |     2933 | 2026-05-22 | Inner Circle     | W   | 0.474      | 0.435        | 0.179 (0.037)    | 0.553 (0.114)    | 1 (0.474) |    13.48 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           26 |     3470 | 2026-05-03 | M80              | L   | 0.349      | -            | -                | -                | -         |    -3.79 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           25 |     3471 | 2026-05-03 | Voca             | L   | 0.349      | -            | -                | -                | -         |    -8.98 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           24 |     3479 | 2026-05-03 | ex-Aether        | W   | 0.347      | -            | -                | -                | -         |     0.78 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           23 |     3555 | 2026-05-01 | Voca             | W   | 0.335      | 0.363        | 0.030 (0.004)    | 0.375 (0.046)    | -         |     1.91 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           22 |     3576 | 2026-05-01 | FarmVille        | W   | 0.333      | -            | -                | -                | -         |     0.74 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           21 |     3653 | 2026-04-29 | FarmVille        | W   | 0.322      | -            | -                | -                | -         |     0.66 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           20 |     3733 | 2026-04-27 | Aether           | W   | 0.308      | -            | -                | -                | -         |     0.62 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           19 |     3779 | 2026-04-26 | Wanted Goons     | W   | 0.302      | -            | -                | -                | -         |     0.87 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           18 |     3791 | 2026-04-26 | Fisher College   | W   | 0.301      | -            | -                | -                | 1 (0.301) |     1.59 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           17 |     3804 | 2026-04-26 | Passion UA       | W   | 0.300      | -            | -                | -                | 1 (0.300) |     1.65 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           16 |     3847 | 2026-04-25 | Chicken Coop     | W   | 0.296      | 0.371        | -                | 0.329 (0.036)    | 1 (0.296) |     2.06 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           15 |     3858 | 2026-04-25 | Voca             | W   | 0.294      | 0.371        | 0.030 (0.003)    | 0.375 (0.041)    | 1 (0.294) |     1.72 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           14 |     3883 | 2026-04-25 | Unreal Nightmare | W   | 0.293      | -            | -                | -                | 1 (0.293) |     0.22 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           13 |     4298 | 2026-04-08 | PARIVISION       | L   | 0.179      | -            | -                | -                | -         |    -0.63 | HexT, mhL, nEMANHA, Peeping, reck |
|           12 |     4338 | 2026-04-07 | The MongolZ      | L   | 0.171      | -            | -                | -                | -         |    -0.78 | HexT, mhL, nEMANHA, Peeping, reck |
|           11 |     4377 | 2026-04-06 | FOKUS            | W   | 0.164      | 1.000        | 0.115 (0.019)    | 0.523 (0.086)    | 1 (0.164) |     3.38 | HexT, mhL, nEMANHA, Peeping, reck |
|           10 |     4440 | 2026-04-04 | FaZe             | W   | 0.156      | 1.000        | 0.477 (0.075)    | 0.354 (0.055)    | -         |     4.66 | HexT, mhL, nEMANHA, Peeping, reck |
|            9 |     4503 | 2026-04-04 | B8               | L   | 0.151      | -            | -                | -                | -         |    -0.48 | HexT, mhL, nEMANHA, Peeping, reck |
|            8 |     5094 | 2026-03-28 | NOMERCY          | W   | 0.106      | -            | -                | -                | -         |     0.07 | HexT, mhL, nEMANHA, Peeping, reck |
|            7 |     5102 | 2026-03-28 | BETBOOM          | W   | 0.105      | 0.341        | 0.252 (0.009)    | -                | -         |     2.94 | HexT, mhL, nEMANHA, Peeping, reck |
|            6 |     5108 | 2026-03-28 | Sangal           | L   | 0.105      | -            | -                | -                | -         |    -2.98 | HexT, mhL, nEMANHA, Peeping, reck |
|            5 |     5113 | 2026-03-28 | BESTIA           | L   | 0.104      | -            | -                | -                | -         |    -2.36 | HexT, mhL, nEMANHA, Peeping, reck |
|            4 |     5296 | 2026-03-24 | FOKUS            | L   | 0.079      | -            | -                | -                | -         |    -0.86 | HexT, mhL, nEMANHA, Peeping, reck |
|            3 |     5330 | 2026-03-23 | EAC              | L   | 0.075      | -            | -                | -                | -         |    -0.92 | HexT, mhL, nEMANHA, Peeping, reck |
|            2 |     5336 | 2026-03-23 | Fraternity       | W   | 0.074      | -            | -                | -                | -         |     0.05 | HexT, mhL, nEMANHA, Peeping, reck |
|            1 |     5338 | 2026-03-23 | BERG             | W   | 0.074      | -            | -                | -                | -         |     0.05 | HexT, mhL, nEMANHA, Peeping, reck |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($69,397.46)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-07-26 |      0.907 | $28,750.00     | $26,064.34      |
| 2026-07-18 |      0.853 | $7,500.00      | $6,398.88       |
| 2026-05-24 |      0.487 | $30,000.00     | $14,597.07      |
| 2026-05-03 |      0.349 | $4,000.00      | $1,397.81       |
| 2026-05-03 |      0.349 | $4,000.00      | $1,395.18       |
| 2026-04-26 |      0.301 | $11,000.00     | $3,309.41       |
| 2026-04-11 |      0.200 | $31,250.00     | $6,234.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
