### Roster Details<br />
Team Name: MOUZ<br />
Roster: Brollan, Jimpphat, Spinx, torzsi, xertioN<br />
Global Rank: [7](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [6]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1769.1<br />
<br />
Final Rank Value (1769.1) = Starting Rank Value (1752.6) + Head To Head Adjustments (16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.850[<sup>1</sup>](#table2)
- Bounty Collected: 0.790[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.796[<sup>2</sup>](#table1)

The average of these factors is 0.691<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1752.6
- 400 + ( ( 0.691 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1752.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.291
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      810 | 2026-03-21 | 9z Team       | L   | 1.000      | -            | -                | -                | -         |   -24.81 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           32 |      905 | 2026-03-19 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |   -18.68 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           31 |     1171 | 2026-03-13 | FUT Esports   | L   | 1.000      | -            | -                | -                | -         |   -23.69 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           30 |     1439 | 2026-03-08 | The MongolZ   | W   | 1.000      | 0.805        | 0.556 (0.447)    | 0.295 (0.238)    | -         |    11.64 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           29 |     1495 | 2026-03-07 | Astralis      | W   | 1.000      | 0.805        | 0.466 (0.375)    | 0.337 (0.271)    | -         |     9.12 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           28 |     1530 | 2026-03-06 | HEROIC        | W   | 0.994      | 0.805        | -                | 0.491 (0.393)    | -         |     6.60 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           27 |     2153 | 2026-02-22 | The MongolZ   | W   | 0.912      | 1.000        | 0.556 (0.507)    | 0.295 (0.269)    | 1 (0.912) |    11.01 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           26 |     2192 | 2026-02-21 | PARIVISION    | L   | 0.906      | -            | -                | -                | -         |   -12.19 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           25 |     2252 | 2026-02-20 | Natus Vincere | W   | 0.899      | 1.000        | 1.000 (0.899)    | 0.344 (0.309)    | 1 (0.899) |    17.46 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           24 |     2427 | 2026-02-17 | FUT Esports   | W   | 0.878      | 1.000        | 0.331 (0.291)    | 0.467 (0.410)    | 1 (0.878) |     6.29 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           23 |     2452 | 2026-02-16 | Team Vitality | L   | 0.873      | -            | -                | -                | -         |    -6.21 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           22 |     2540 | 2026-02-15 | Natus Vincere | W   | 0.864      | 1.000        | 1.000 (0.864)    | 0.344 (0.297)    | 1 (0.864) |    18.18 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           21 |     2594 | 2026-02-14 | PARIVISION    | W   | 0.858      | 1.000        | 1.000 (0.858)    | 0.426 (0.366)    | 1 (0.858) |    16.47 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           20 |     2809 | 2026-02-08 | Team Spirit   | L   | 0.819      | -            | -                | -                | -         |   -14.67 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           19 |     2820 | 2026-02-07 | Team Vitality | L   | 0.814      | -            | -                | -                | -         |    -6.04 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           18 |     2858 | 2026-02-06 | G2 Esports    | W   | 0.807      | 1.000        | -                | 0.582 (0.470)    | 1 (0.807) |    10.42 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           17 |     2931 | 2026-02-03 | Team Falcons  | W   | 0.787      | 1.000        | 0.657 (0.518)    | -                | 1 (0.787) |    12.30 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           16 |     2946 | 2026-02-03 | FaZe Clan     | W   | 0.786      | 1.000        | 0.375 (0.294)    | 0.350 (0.275)    | 1 (0.786) |     5.95 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           15 |     2978 | 2026-02-02 | Aurora Gaming | L   | 0.779      | -            | -                | -                | -         |    -8.88 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           14 |     3009 | 2026-02-01 | NRG           | W   | 0.772      | -            | -                | -                | 1 (0.772) |     3.11 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           13 |     3926 | 2025-12-12 | FaZe Clan     | L   | 0.433      | -            | -                | -                | -         |   -10.49 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           12 |     4027 | 2025-12-06 | Team Falcons  | W   | 0.393      | -            | -                | -                | 1 (0.393) |     5.99 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           11 |     4052 | 2025-12-05 | Team Spirit   | L   | 0.387      | -            | -                | -                | -         |    -7.82 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|           10 |     4074 | 2025-12-04 | B8            | W   | 0.381      | -            | -                | -                | -         |     3.22 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            9 |     4093 | 2025-12-04 | PARIVISION    | W   | 0.379      | 1.000        | 1.000 (0.379)    | -                | -         |     7.50 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            8 |     4726 | 2025-11-08 | Team Falcons  | L   | 0.210      | -            | -                | -                | -         |    -3.43 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            7 |     4784 | 2025-11-07 | Team Vitality | L   | 0.204      | -            | -                | -                | -         |    -1.35 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            6 |     4943 | 2025-11-05 | FURIA         | W   | 0.184      | -            | -                | -                | -         |     3.65 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            5 |     4972 | 2025-11-03 | Team Vitality | W   | 0.177      | -            | -                | -                | -         |     4.45 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            4 |     4999 | 2025-11-02 | FaZe Clan     | W   | 0.170      | -            | -                | -                | -         |     1.20 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |     5662 | 2025-10-12 | FaZe Clan     | W   | 0.025      | -            | -                | -                | -         |     0.18 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |     5681 | 2025-10-11 | Team Falcons  | L   | 0.019      | -            | -                | -                | -         |    -0.31 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |     5721 | 2025-10-10 | Natus Vincere | W   | 0.012      | -            | -                | -                | -         |     0.29 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($304,641.06)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.67) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-03-15 |      1.000 | $48,000.00     | $48,000.00      |
| 2026-02-22 |      0.913 | $137,500.00    | $125,559.57     |
| 2026-02-08 |      0.820 | $85,000.00     | $69,685.31      |
| 2025-12-14 |      0.447 | $45,000.00     | $20,104.72      |
| 2025-11-09 |      0.211 | $90,000.00     | $18,984.44      |
| 2025-10-12 |      0.026 | $88,000.00     | $2,307.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
