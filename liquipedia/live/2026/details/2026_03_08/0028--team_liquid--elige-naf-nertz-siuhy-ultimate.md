### Roster Details<br />
Team Name: Team Liquid<br />
Roster: EliGE, NAF, NertZ, siuhy, ultimate<br />
Global Rank: [28](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [22]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1359.6<br />
<br />
Final Rank Value (1359.6) = Starting Rank Value (1309.2) + Head To Head Adjustments (50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.728[<sup>1</sup>](#table2)
- Bounty Collected: 0.516[<sup>2</sup>](#table1)
- Opponent Network: 0.219[<sup>2</sup>](#table1)
- LAN Wins: 0.432[<sup>2</sup>](#table1)

The average of these factors is 0.474<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1309.2
- 400 + ( ( 0.474 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1309.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.202
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     1373 | 2026-01-30 | FUT Esports       | L   | 0.953      | -            | -                | -                | -         |   -10.31 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           36 |     1399 | 2026-01-29 | G2 Esports        | L   | 0.946      | -            | -                | -                | -         |    -7.99 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           35 |     1423 | 2026-01-28 | Ninjas in Pyjamas | W   | 0.939      | 1.000        | 0.107 (0.100)    | 0.392 (0.368)    | 1 (0.939) |    12.04 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           34 |     1620 | 2026-01-22 | Team Falcons      | L   | 0.898      | -            | -                | -                | -         |    -1.98 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           33 |     1774 | 2026-01-17 | Gentle Mates      | W   | 0.865      | 0.708        | 0.205 (0.125)    | 0.643 (0.393)    | -         |    16.46 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           32 |     1868 | 2026-01-15 | Ninjas in Pyjamas | W   | 0.852      | 0.708        | 0.107 (0.064)    | 0.392 (0.236)    | -         |    12.40 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           31 |     2342 | 2025-12-05 | Passion UA        | L   | 0.579      | -            | -                | -                | -         |   -10.62 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           30 |     2364 | 2025-12-04 | The MongolZ       | L   | 0.573      | -            | -                | -                | -         |    -4.54 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           29 |     2377 | 2025-12-04 | Team Spirit       | L   | 0.571      | -            | -                | -                | -         |    -2.52 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           28 |     2401 | 2025-12-02 | Astralis          | W   | 0.559      | 0.769        | 0.477 (0.205)    | 0.346 (0.149)    | 1 (0.559) |    13.85 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           27 |     2415 | 2025-12-01 | TYLOO             | W   | 0.553      | -            | -                | -                | 1 (0.553) |     1.29 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           26 |     2429 | 2025-11-30 | MIBR              | W   | 0.546      | 0.769        | 0.156 (0.065)    | 0.625 (0.262)    | 1 (0.546) |    10.30 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           25 |     2461 | 2025-11-29 | PARIVISION        | L   | 0.540      | -            | -                | -                | -         |    -0.74 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           24 |     2475 | 2025-11-29 | B8                | L   | 0.538      | -            | -                | -                | -         |    -7.75 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           23 |     3340 | 2025-10-31 | BC.Game Esports   | L   | 0.344      | -            | -                | -                | -         |    -3.48 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           22 |     3382 | 2025-10-29 | FlyQuest          | W   | 0.331      | 1.000        | -                | 0.336 (0.111)    | 1 (0.331) |     4.61 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           21 |     3417 | 2025-10-28 | BetBoom Team      | W   | 0.323      | 1.000        | -                | 0.869 (0.281)    | 1 (0.323) |     6.11 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           20 |     3446 | 2025-10-27 | Aurora Gaming     | L   | 0.318      | -            | -                | -                | -         |    -0.96 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           19 |     3516 | 2025-10-26 | Legacy            | W   | 0.310      | 1.000        | 0.585 (0.181)    | -                | 1 (0.310) |     5.09 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           18 |     3727 | 2025-10-18 | HEROIC            | W   | 0.262      | 1.000        | 0.445 (0.116)    | 0.405 (0.106)    | 1 (0.262) |     5.60 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           17 |     3749 | 2025-10-17 | 3DMAX             | L   | 0.256      | -            | -                | -                | -         |    -2.82 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           16 |     3810 | 2025-10-15 | Legacy            | W   | 0.243      | 1.000        | 0.585 (0.142)    | -                | 1 (0.243) |     3.93 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           15 |     3869 | 2025-10-14 | MIBR              | W   | 0.231      | 1.000        | -                | 0.625 (0.145)    | 1 (0.231) |     4.88 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           14 |     3883 | 2025-10-13 | GamerLegion       | W   | 0.229      | 1.000        | 0.370 (0.085)    | 0.625 (0.143)    | -         |     5.94 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           13 |     4482 | 2025-09-28 | Partizan Esports  | W   | 0.125      | -            | -                | -                | -         |     0.13 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           12 |     4494 | 2025-09-28 | 9INE              | L   | 0.124      | -            | -                | -                | -         |    -1.93 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           11 |     4508 | 2025-09-28 | SIXSEVEN          | W   | 0.123      | -            | -                | -                | -         |     0.25 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           10 |     4537 | 2025-09-27 | ENCE              | W   | 0.119      | -            | -                | -                | -         |     1.30 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            9 |     4552 | 2025-09-27 | 9INE              | L   | 0.117      | -            | -                | -                | -         |    -1.84 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            8 |     4557 | 2025-09-27 | SIXSEVEN          | W   | 0.117      | -            | -                | -                | -         |     0.23 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            7 |     4760 | 2025-09-20 | The MongolZ       | L   | 0.071      | -            | -                | -                | -         |    -0.42 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            6 |     4791 | 2025-09-19 | Aurora Gaming     | W   | 0.064      | 1.000        | 1.000 (0.064)    | -                | -         |     1.87 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            5 |     4869 | 2025-09-17 | FaZe Clan         | W   | 0.050      | -            | -                | -                | -         |     1.25 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            4 |     4887 | 2025-09-16 | TYLOO             | W   | 0.045      | -            | -                | -                | -         |     0.11 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            3 |     4916 | 2025-09-15 | HEROIC            | W   | 0.037      | -            | -                | -                | -         |     0.82 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            2 |     4949 | 2025-09-14 | GamerLegion       | L   | 0.031      | -            | -                | -                | -         |    -0.17 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            1 |     4984 | 2025-09-13 | FURIA             | L   | 0.026      | -            | -                | -                | -         |    -0.03 | NAF, NertZ, siuhy, Twistzz, ultimate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130,629.92)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.42) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.953 | $4,500.00      | $4,286.67       |
| 2026-01-25 |      0.918 | $51,250.00     | $47,065.77      |
| 2025-12-14 |      0.639 | $20,000.00     | $12,778.24      |
| 2025-11-01 |      0.351 | $62,500.00     | $21,935.76      |
| 2025-10-19 |      0.263 | $130,000.00    | $34,164.12      |
| 2025-09-28 |      0.125 | $1,700.00      | $213.01         |
| 2025-09-21 |      0.078 | $130,000.00    | $10,186.34      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
