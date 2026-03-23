### Roster Details<br />
Team Name: Team Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [8](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [7]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  1745.2<br />
<br />
Final Rank Value (1745.2) = Starting Rank Value (1666.9) + Head To Head Adjustments (78.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.870[<sup>1</sup>](#table2)
- Bounty Collected: 0.735[<sup>2</sup>](#table1)
- Opponent Network: 0.324[<sup>2</sup>](#table1)
- LAN Wins: 0.660[<sup>2</sup>](#table1)

The average of these factors is 0.647<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1666.9
- 400 + ( ( 0.647 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1666.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.338
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |       69 | 2026-03-13 | Astralis             | L   | 1.000      | -            | -                | -                | -         |   -17.54 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |      304 | 2026-03-08 | G2 Esports           | W   | 1.000      | 0.805        | 0.380 (0.306)    | 0.387 (0.311)    | -         |     9.30 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |      353 | 2026-03-07 | B8                   | W   | 1.000      | -            | -                | -                | -         |     4.04 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |      411 | 2026-03-06 | 3DMAX                | W   | 1.000      | 0.805        | 0.331 (0.267)    | 0.337 (0.271)    | -         |     4.03 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     1658 | 2026-02-08 | MOUZ                 | W   | 0.965      | 1.000        | 0.801 (0.772)    | 0.374 (0.361)    | 1 (0.965) |    20.68 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     1678 | 2026-02-07 | FURIA                | L   | 0.959      | -            | -                | -                | -         |    -6.66 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     1790 | 2026-02-03 | G2 Esports           | W   | 0.932      | 1.000        | 0.380 (0.354)    | 0.387 (0.361)    | 1 (0.932) |    10.09 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     1842 | 2026-02-01 | Natus Vincere        | W   | 0.920      | 1.000        | 1.000 (0.920)    | 0.371 (0.342)    | 1 (0.920) |    19.83 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     1884 | 2026-01-31 | Astralis             | W   | 0.912      | 1.000        | 0.576 (0.526)    | 0.418 (0.381)    | 1 (0.912) |    14.87 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     2110 | 2026-01-23 | PARIVISION           | L   | 0.859      | -            | -                | -                | -         |    -7.33 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     2279 | 2026-01-18 | Inner Circle Esports | W   | 0.825      | 0.895        | -                | 0.416 (0.307)    | -         |     0.78 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     2388 | 2026-01-16 | SINNERS Esports      | W   | 0.811      | 0.895        | -                | 0.695 (0.505)    | -         |     4.12 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     2750 | 2025-12-13 | Team Vitality        | L   | 0.586      | -            | -                | -                | -         |    -3.11 | chopper, donk, sh1ro, tN1R, zweih |
|           15 |     2780 | 2025-12-11 | Team Falcons         | W   | 0.572      | 1.000        | 0.725 (0.415)    | 0.344 (0.197)    | 1 (0.572) |    11.17 | chopper, donk, sh1ro, tN1R, zweih |
|           14 |     2892 | 2025-12-05 | MOUZ                 | W   | 0.532      | 1.000        | 0.801 (0.426)    | 0.374 (0.199)    | 1 (0.532) |    13.24 | chopper, donk, sh1ro, tN1R, zweih |
|           13 |     2916 | 2025-12-04 | FaZe Clan            | W   | 0.526      | 1.000        | 0.446 (0.235)    | -                | 1 (0.526) |     5.27 | chopper, donk, sh1ro, tN1R, zweih |
|           12 |     2929 | 2025-12-04 | Team Liquid          | W   | 0.525      | 1.000        | 0.281 (0.147)    | -                | 1 (0.525) |     3.38 | chopper, donk, sh1ro, tN1R, zweih |
|           11 |     3413 | 2025-11-14 | Team Vitality        | L   | 0.391      | -            | -                | -                | -         |    -1.69 | chopper, donk, sh1ro, tN1R, zweih |
|           10 |     3450 | 2025-11-12 | The MongolZ          | W   | 0.382      | -            | -                | -                | 1 (0.382) |     4.89 | chopper, donk, sh1ro, tN1R, zweih |
|            9 |     3481 | 2025-11-11 | Team Falcons         | L   | 0.376      | -            | -                | -                | -         |    -4.00 | chopper, donk, sh1ro, tN1R, zweih |
|            8 |     3777 | 2025-11-05 | The MongolZ          | L   | 0.331      | -            | -                | -                | -         |    -6.20 | chopper, donk, sh1ro, tN1R, zweih |
|            7 |     3786 | 2025-11-04 | HEROIC               | W   | 0.329      | -            | -                | -                | 1 (0.329) |     2.82 | chopper, donk, sh1ro, tN1R, zweih |
|            6 |     3806 | 2025-11-04 | Team Falcons         | L   | 0.324      | -            | -                | -                | -         |    -3.72 | chopper, donk, sh1ro, tN1R, zweih |
|            5 |     3833 | 2025-11-03 | PaiN Gaming          | W   | 0.317      | -            | -                | -                | -         |     0.99 | chopper, donk, sh1ro, tN1R, zweih |
|            4 |     4554 | 2025-10-10 | FaZe Clan            | L   | 0.159      | -            | -                | -                | -         |    -3.49 | chopper, donk, sh1ro, tN1R, zweih |
|            3 |     4761 | 2025-10-06 | G2 Esports           | W   | 0.132      | -            | -                | -                | -         |     1.62 | chopper, donk, sh1ro, tN1R, zweih |
|            2 |     4828 | 2025-10-05 | HOTU                 | W   | 0.125      | -            | -                | -                | -         |     0.85 | chopper, donk, sh1ro, tN1R, zweih |
|            1 |     4887 | 2025-10-04 | Inner Circle Esports | W   | 0.117      | -            | -                | -                | -         |     0.11 | chopper, donk, sh1ro, tN1R, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($302,313.50)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.71) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $48,000.00     | $48,000.00      |
| 2026-02-08 |      0.966 | $131,000.00    | $126,490.81     |
| 2026-01-25 |      0.872 | $50,000.00     | $43,598.38      |
| 2025-12-14 |      0.593 | $80,000.00     | $47,401.85      |
| 2025-11-16 |      0.403 | $25,000.00     | $10,083.91      |
| 2025-11-09 |      0.357 | $47,000.00     | $16,764.42      |
| 2025-10-12 |      0.172 | $58,000.00     | $9,974.12       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
