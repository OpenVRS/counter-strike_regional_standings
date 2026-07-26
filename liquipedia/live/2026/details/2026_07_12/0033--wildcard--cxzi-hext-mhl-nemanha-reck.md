### Roster Details<br />
Team Name: Wildcard<br />
Roster: Cxzi, HexT, mhL, nEMANHA, reck<br />
Global Rank: [33](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [8]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  1340.4<br />
<br />
Final Rank Value (1340.4) = Starting Rank Value (1324.9) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.441[<sup>2</sup>](#table1)
- Opponent Network: 0.213[<sup>2</sup>](#table1)
- LAN Wins: 0.789[<sup>2</sup>](#table1)

The average of these factors is 0.488<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1324.9
- 400 + ( ( 0.488 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1324.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.487
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |     1068 | 2026-05-24 | FOKUS                     | W   | 0.871      | 0.435        | 0.084 (0.032)    | 0.599 (0.227)    | 1 (0.871) |    11.52 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           47 |     1102 | 2026-05-23 | FOKUS                     | W   | 0.865      | 0.435        | 0.084 (0.032)    | 0.599 (0.225)    | 1 (0.865) |    11.62 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           46 |     1139 | 2026-05-23 | Acend                     | W   | 0.863      | 0.435        | 0.072 (0.027)    | 0.898 (0.337)    | 1 (0.863) |    13.25 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           45 |     1160 | 2026-05-22 | IC Esports                | W   | 0.858      | 0.435        | 0.145 (0.054)    | 0.688 (0.257)    | 1 (0.858) |    16.82 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           44 |     1697 | 2026-05-03 | M80                       | L   | 0.734      | -            | -                | -                | -         |   -10.19 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           43 |     1698 | 2026-05-03 | Team Voca                 | L   | 0.734      | -            | -                | -                | -         |   -17.95 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           42 |     1703 | 2026-05-03 | Ex-Team Aether            | W   | 0.732      | -            | -                | -                | -         |     0.74 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           41 |     1781 | 2026-05-01 | Team Voca                 | W   | 0.720      | 0.363        | 0.038 (0.010)    | 0.470 (0.123)    | -         |     4.86 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           40 |     1788 | 2026-05-01 | FarmVille                 | W   | 0.719      | -            | -                | -                | -         |     0.90 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           39 |     1877 | 2026-04-29 | FarmVille                 | W   | 0.707      | -            | -                | -                | -         |     0.90 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           38 |     1956 | 2026-04-27 | Ex-Team Aether            | W   | 0.694      | -            | -                | -                | -         |     0.64 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           37 |     2005 | 2026-04-26 | Wanted Goons              | W   | 0.687      | -            | -                | -                | -         |     0.77 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           36 |     2021 | 2026-04-26 | Fisher College            | W   | 0.686      | 0.371        | 0.043 (0.011)    | -                | 1 (0.686) |     4.07 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           35 |     2028 | 2026-04-26 | Passion UA                | W   | 0.685      | -            | -                | -                | 1 (0.685) |     5.86 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           34 |     2074 | 2026-04-25 | Chicken Coop Esports      | W   | 0.681      | 0.371        | 0.039 (0.010)    | -                | 1 (0.681) |     3.17 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           33 |     2084 | 2026-04-25 | Team Voca                 | W   | 0.679      | 0.371        | -                | 0.470 (0.118)    | 1 (0.679) |     5.18 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           32 |     2106 | 2026-04-25 | FRZ Unit                  | W   | 0.678      | -            | -                | -                | 1 (0.678) |     0.22 | Cxzi, HexT, mhL, nEMANHA, reck    |
|           31 |     2525 | 2026-04-08 | PARIVISION                | L   | 0.563      | -            | -                | -                | -         |    -1.05 | HexT, mhL, nEMANHA, Peeping, reck |
|           30 |     2566 | 2026-04-07 | The MongolZ               | L   | 0.556      | -            | -                | -                | -         |    -1.81 | HexT, mhL, nEMANHA, Peeping, reck |
|           29 |     2606 | 2026-04-06 | FOKUS                     | W   | 0.549      | 1.000        | 0.084 (0.046)    | 0.599 (0.329)    | 1 (0.549) |     8.85 | HexT, mhL, nEMANHA, Peeping, reck |
|           28 |     2629 | 2026-04-05 | FaZe Clan                 | W   | 0.544      | 1.000        | 0.472 (0.257)    | 0.478 (0.260)    | -         |    14.80 | HexT, mhL, nEMANHA, Peeping, reck |
|           27 |     2730 | 2026-04-04 | B8                        | L   | 0.536      | -            | -                | -                | -         |    -1.72 | HexT, mhL, nEMANHA, Peeping, reck |
|           26 |     3314 | 2026-03-28 | NOMERCY (European team)   | W   | 0.491      | -            | -                | -                | -         |     0.12 | HexT, mhL, nEMANHA, Peeping, reck |
|           25 |     3329 | 2026-03-28 | BetBoom Team              | W   | 0.490      | 0.340        | 0.357 (0.060)    | 0.761 (0.127)    | -         |    14.45 | HexT, mhL, nEMANHA, Peeping, reck |
|           24 |     3332 | 2026-03-28 | Sangal Esports            | L   | 0.490      | -            | -                | -                | -         |   -13.72 | HexT, mhL, nEMANHA, Peeping, reck |
|           23 |     3342 | 2026-03-28 | BESTIA                    | L   | 0.489      | -            | -                | -                | -         |   -10.83 | HexT, mhL, nEMANHA, Peeping, reck |
|           22 |     3525 | 2026-03-24 | FOKUS                     | L   | 0.463      | -            | -                | -                | -         |    -7.43 | HexT, mhL, nEMANHA, Peeping, reck |
|           21 |     3555 | 2026-03-23 | Esport Academy Copenhagen | L   | 0.460      | -            | -                | -                | -         |   -10.07 | HexT, mhL, nEMANHA, Peeping, reck |
|           20 |     3563 | 2026-03-23 | Exilium                   | W   | 0.459      | -            | -                | -                | -         |     0.10 | HexT, mhL, nEMANHA, Peeping, reck |
|           19 |     3566 | 2026-03-23 | Esport BERG               | W   | 0.459      | -            | -                | -                | -         |     0.64 | HexT, mhL, nEMANHA, Peeping, reck |
|           18 |     4654 | 2026-03-01 | Team Voca                 | L   | 0.313      | -            | -                | -                | -         |    -7.74 | CLASIA, HexT, mhL, Peeping, reck  |
|           17 |     4657 | 2026-03-01 | Life's A Game             | W   | 0.312      | 0.769        | -                | 0.540 (0.130)    | -         |     1.77 | CLASIA, HexT, mhL, Peeping, reck  |
|           16 |     4695 | 2026-02-28 | Team Voca                 | L   | 0.308      | -            | -                | -                | -         |    -7.73 | CLASIA, HexT, mhL, Peeping, reck  |
|           15 |     4740 | 2026-02-27 | BOSS                      | W   | 0.301      | -            | -                | -                | -         |     0.47 | CLASIA, HexT, mhL, Peeping, reck  |
|           14 |     4799 | 2026-02-26 | Shimmer                   | W   | 0.293      | -            | -                | -                | -         |     0.27 | CLASIA, HexT, mhL, Peeping, reck  |
|           13 |     5122 | 2026-02-20 | Life's A Game             | L   | 0.253      | -            | -                | -                | -         |    -6.67 | CLASIA, HexT, mhL, Peeping, reck  |
|           12 |     5224 | 2026-02-18 | Blitzkrieg (Mexican team) | W   | 0.240      | -            | -                | -                | -         |     0.09 | CLASIA, HexT, mhL, Peeping, reck  |
|           11 |     5377 | 2026-02-15 | ClayMakers Reborn         | W   | 0.222      | -            | -                | -                | -         |     0.08 | CLASIA, HexT, mhL, Peeping, reck  |
|           10 |     5555 | 2026-02-12 | Passion UA                | L   | 0.200      | -            | -                | -                | -         |    -4.88 | CLASIA, HexT, mhL, Peeping, reck  |
|            9 |     5593 | 2026-02-11 | Team Voca                 | W   | 0.194      | -            | -                | -                | -         |     0.15 | CLASIA, HexT, mhL, Peeping, reck  |
|            8 |     5594 | 2026-02-11 | Passion UA                | L   | 0.193      | -            | -                | -                | -         |    -4.75 | CLASIA, HexT, mhL, Peeping, reck  |
|            7 |     5625 | 2026-02-10 | Fisher College            | W   | 0.187      | -            | -                | -                | -         |     0.97 | CLASIA, HexT, mhL, Peeping, reck  |
|            6 |     5636 | 2026-02-10 | Team Voca                 | W   | 0.185      | -            | -                | -                | -         |     0.13 | CLASIA, HexT, mhL, Peeping, reck  |
|            5 |     5666 | 2026-02-09 | Regain                    | W   | 0.180      | -            | -                | -                | -         |     0.22 | CLASIA, HexT, mhL, Peeping, reck  |
|            4 |     5682 | 2026-02-08 | ClayMakers Reborn         | W   | 0.173      | -            | -                | -                | -         |     0.06 | CLASIA, HexT, mhL, Peeping, reck  |
|            3 |     5747 | 2026-02-06 | M80                       | L   | 0.160      | -            | -                | -                | -         |    -2.49 | CLASIA, HexT, mhL, Peeping, reck  |
|            2 |     5781 | 2026-02-05 | Life's A Game             | W   | 0.154      | -            | -                | -                | -         |     0.77 | CLASIA, HexT, mhL, Peeping, reck  |
|            1 |     5862 | 2026-02-02 | FlyQuest RED              | W   | 0.134      | -            | -                | -                | -         |     0.06 | CLASIA, HexT, mhL, Peeping, reck  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,060.05)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.871 | $30,000.00     | $26,133.33      |
| 2026-05-03 |      0.734 | $4,000.00      | $2,936.67       |
| 2026-05-03 |      0.734 | $4,000.00      | $2,934.44       |
| 2026-04-26 |      0.686 | $11,000.00     | $7,542.64       |
| 2026-04-11 |      0.584 | $31,250.00     | $18,246.53      |
| 2026-02-22 |      0.266 | $1,000.00      | $266.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
