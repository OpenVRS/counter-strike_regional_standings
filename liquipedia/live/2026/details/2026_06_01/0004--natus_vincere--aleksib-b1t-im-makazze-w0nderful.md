### Roster Details<br />
Team Name: Natus Vincere<br />
Roster: Aleksib, b1t, iM, makazze, w0nderful<br />
Global Rank: [4](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [4]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1941.2<br />
<br />
Final Rank Value (1941.2) = Starting Rank Value (1953.4) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.807[<sup>2</sup>](#table1)
- Opponent Network: 0.458[<sup>2</sup>](#table1)
- LAN Wins: 0.999[<sup>2</sup>](#table1)

The average of these factors is 0.816<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1953.4
- 400 + ( ( 0.816 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1953.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.427
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      504 | 2026-05-17 | GamerLegion   | W   | 1.000      | 1.000        | 0.551 (0.551)    | 0.476 (0.476)    | 1 (1.000) |     7.47 | Aleksib, b1t, iM, makazze, w0nderful |
|           44 |      525 | 2026-05-16 | BetBoom Team  | W   | 1.000      | 1.000        | -                | 0.599 (0.599)    | 1 (1.000) |     3.68 | Aleksib, b1t, iM, makazze, w0nderful |
|           43 |      558 | 2026-05-15 | Team Vitality | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.469 (0.469)    | 1 (1.000) |    20.73 | Aleksib, b1t, iM, makazze, w0nderful |
|           42 |      605 | 2026-05-13 | Legacy        | L   | 1.000      | -            | -                | -                | -         |   -19.76 | Aleksib, b1t, iM, makazze, w0nderful |
|           41 |      650 | 2026-05-12 | GamerLegion   | W   | 1.000      | 1.000        | 0.551 (0.551)    | 0.476 (0.476)    | 1 (1.000) |     6.49 | Aleksib, b1t, iM, makazze, w0nderful |
|           40 |      690 | 2026-05-11 | Passion UA    | W   | 1.000      | 1.000        | -                | 0.419 (0.419)    | 1 (1.000) |     0.75 | Aleksib, b1t, iM, makazze, w0nderful |
|           39 |      887 | 2026-05-03 | Team Vitality | L   | 1.000      | -            | -                | -                | -         |    -9.82 | Aleksib, b1t, iM, makazze, w0nderful |
|           38 |      925 | 2026-05-02 | FaZe Clan     | W   | 1.000      | 1.000        | 0.391 (0.391)    | 0.391 (0.391)    | 1 (1.000) |     2.44 | Aleksib, b1t, iM, makazze, w0nderful |
|           37 |     1016 | 2026-04-30 | GamerLegion   | W   | 0.994      | 1.000        | 0.551 (0.548)    | 0.476 (0.473)    | 1 (0.994) |     6.04 | Aleksib, b1t, iM, makazze, w0nderful |
|           36 |     1069 | 2026-04-29 | FaZe Clan     | W   | 0.987      | 1.000        | -                | 0.391 (0.386)    | 1 (0.987) |     1.96 | Aleksib, b1t, iM, makazze, w0nderful |
|           35 |     1515 | 2026-04-17 | Team Vitality | L   | 0.906      | -            | -                | -                | -         |   -10.28 | Aleksib, b1t, iM, makazze, w0nderful |
|           34 |     1532 | 2026-04-15 | Aurora Gaming | W   | 0.893      | 1.000        | 0.607 (0.542)    | -                | 1 (0.893) |     7.89 | Aleksib, b1t, iM, makazze, w0nderful |
|           33 |     1540 | 2026-04-15 | HOTU          | W   | 0.892      | 1.000        | -                | 0.537 (0.479)    | 1 (0.892) |     1.41 | Aleksib, b1t, iM, makazze, w0nderful |
|           32 |     1553 | 2026-04-14 | FURIA         | L   | 0.886      | -            | -                | -                | -         |   -20.90 | Aleksib, b1t, iM, makazze, w0nderful |
|           31 |     1575 | 2026-04-13 | B8            | W   | 0.879      | 1.000        | -                | 0.468 (0.412)    | -         |     3.17 | Aleksib, b1t, iM, makazze, w0nderful |
|           30 |     2432 | 2026-03-29 | Team Vitality | L   | 0.777      | -            | -                | -                | -         |    -9.34 | Aleksib, b1t, iM, makazze, w0nderful |
|           29 |     2487 | 2026-03-28 | PARIVISION    | W   | 0.772      | 1.000        | 0.676 (0.522)    | -                | -         |     7.30 | Aleksib, b1t, iM, makazze, w0nderful |
|           28 |     2791 | 2026-03-23 | Aurora Gaming | W   | 0.738      | 1.000        | 0.607 (0.447)    | -                | -         |     7.40 | Aleksib, b1t, iM, makazze, w0nderful |
|           27 |     2940 | 2026-03-20 | Team Falcons  | W   | 0.719      | 1.000        | 1.000 (0.719)    | -                | -         |    12.66 | Aleksib, b1t, iM, makazze, w0nderful |
|           26 |     3044 | 2026-03-18 | B8            | W   | 0.705      | -            | -                | -                | -         |     3.43 | Aleksib, b1t, iM, makazze, w0nderful |
|           25 |     3161 | 2026-03-15 | Aurora Gaming | W   | 0.686      | -            | -                | -                | -         |     7.33 | Aleksib, b1t, iM, makazze, w0nderful |
|           24 |     3207 | 2026-03-14 | FUT Esports   | W   | 0.679      | 0.901        | 0.816 (0.499)    | -                | -         |     5.33 | Aleksib, b1t, iM, makazze, w0nderful |
|           23 |     3276 | 2026-03-13 | The MongolZ   | W   | 0.670      | -            | -                | -                | -         |     7.87 | Aleksib, b1t, iM, makazze, w0nderful |
|           22 |     3399 | 2026-03-10 | 3DMAX         | W   | 0.651      | -            | -                | -                | -         |     2.29 | Aleksib, b1t, iM, makazze, w0nderful |
|           21 |     3448 | 2026-03-09 | Legacy        | L   | 0.645      | -            | -                | -                | -         |   -10.15 | Aleksib, b1t, iM, makazze, w0nderful |
|           20 |     3535 | 2026-03-08 | B8            | W   | 0.638      | -            | -                | -                | -         |     3.55 | Aleksib, b1t, iM, makazze, w0nderful |
|           19 |     3587 | 2026-03-07 | G2 Esports    | L   | 0.631      | -            | -                | -                | -         |   -15.27 | Aleksib, b1t, iM, makazze, w0nderful |
|           18 |     3632 | 2026-03-06 | Monte         | W   | 0.624      | -            | -                | -                | -         |     1.84 | Aleksib, b1t, iM, makazze, w0nderful |
|           17 |     4332 | 2026-02-20 | MOUZ          | L   | 0.531      | -            | -                | -                | -         |    -7.97 | Aleksib, b1t, iM, makazze, w0nderful |
|           16 |     4426 | 2026-02-18 | G2 Esports    | W   | 0.519      | -            | -                | -                | -         |     3.69 | Aleksib, b1t, iM, makazze, w0nderful |
|           15 |     4500 | 2026-02-17 | The MongolZ   | L   | 0.511      | -            | -                | -                | -         |   -10.93 | Aleksib, b1t, iM, makazze, w0nderful |
|           14 |     4554 | 2026-02-16 | Aurora Gaming | W   | 0.503      | -            | -                | -                | -         |     4.27 | Aleksib, b1t, iM, makazze, w0nderful |
|           13 |     4619 | 2026-02-15 | MOUZ          | L   | 0.497      | -            | -                | -                | -         |    -7.79 | Aleksib, b1t, iM, makazze, w0nderful |
|           12 |     4684 | 2026-02-14 | Astralis      | W   | 0.490      | -            | -                | -                | -         |     3.75 | Aleksib, b1t, iM, makazze, w0nderful |
|           11 |     5045 | 2026-02-02 | FURIA         | L   | 0.413      | -            | -                | -                | -         |    -9.90 | Aleksib, b1t, iM, makazze, w0nderful |
|           10 |     5072 | 2026-02-01 | Team Spirit   | L   | 0.407      | -            | -                | -                | -         |    -6.09 | Aleksib, b1t, iM, makazze, w0nderful |
|            9 |     5127 | 2026-01-31 | PARIVISION    | W   | 0.398      | -            | -                | -                | -         |     3.67 | Aleksib, b1t, iM, makazze, w0nderful |
|            8 |     5685 | 2026-01-14 | Monte         | L   | 0.285      | -            | -                | -                | -         |    -8.41 | Aleksib, b1t, iM, makazze, w0nderful |
|            7 |     5987 | 2025-12-13 | FaZe Clan     | L   | 0.073      | -            | -                | -                | -         |    -2.03 | Aleksib, b1t, iM, makazze, w0nderful |
|            6 |     6003 | 2025-12-12 | FURIA         | W   | 0.066      | -            | -                | -                | -         |     0.46 | Aleksib, b1t, iM, makazze, w0nderful |
|            5 |     6086 | 2025-12-07 | B8            | W   | 0.032      | -            | -                | -                | -         |     0.15 | Aleksib, b1t, iM, makazze, w0nderful |
|            4 |     6111 | 2025-12-06 | Team Vitality | L   | 0.025      | -            | -                | -                | -         |    -0.37 | Aleksib, b1t, iM, makazze, w0nderful |
|            3 |     6135 | 2025-12-05 | PaiN Gaming   | W   | 0.019      | -            | -                | -                | -         |     0.00 | Aleksib, b1t, iM, makazze, w0nderful |
|            2 |     6152 | 2025-12-04 | PARIVISION    | W   | 0.014      | -            | -                | -                | -         |     0.11 | Aleksib, b1t, iM, makazze, w0nderful |
|            1 |     6161 | 2025-12-04 | FURIA         | L   | 0.012      | -            | -                | -                | -         |    -0.30 | Aleksib, b1t, iM, makazze, w0nderful |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($899,186.01)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $295,000.00    | $295,000.00     |
| 2026-05-03 |      1.000 | $200,000.00    | $200,000.00     |
| 2026-04-19 |      0.919 | $67,500.00     | $62,043.75      |
| 2026-03-29 |      0.777 | $160,000.00    | $124,377.78     |
| 2026-03-15 |      0.686 | $250,000.00    | $171,406.25     |
| 2026-02-22 |      0.546 | $50,000.00     | $27,277.78      |
| 2026-02-08 |      0.452 | $23,000.00     | $10,401.11      |
| 2026-01-18 |      0.313 | $7,500.00      | $2,346.01       |
| 2025-12-14 |      0.079 | $80,000.00     | $6,333.33       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
