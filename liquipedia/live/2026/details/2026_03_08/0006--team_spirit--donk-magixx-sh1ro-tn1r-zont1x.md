### Roster Details<br />
Team Name: Team Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [6](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [5]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1752.1<br />
<br />
Final Rank Value (1752.1) = Starting Rank Value (1689.8) + Head To Head Adjustments (62.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.946[<sup>1</sup>](#table2)
- Bounty Collected: 0.749[<sup>2</sup>](#table1)
- Opponent Network: 0.284[<sup>2</sup>](#table1)
- LAN Wins: 0.708[<sup>2</sup>](#table1)

The average of these factors is 0.672<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1689.8
- 400 + ( ( 0.672 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1689.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.326
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1120 | 2026-02-08 | MOUZ                 | W   | 1.000      | 1.000        | 0.993 (0.993)    | 0.365 (0.365)    | 1 (1.000) |    21.56 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     1139 | 2026-02-07 | FURIA                | L   | 1.000      | -            | -                | -                | -         |    -8.49 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     1247 | 2026-02-03 | G2 Esports           | W   | 0.978      | 1.000        | 0.445 (0.436)    | 0.277 (0.271)    | 1 (0.978) |     9.14 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     1298 | 2026-02-01 | Natus Vincere        | W   | 0.966      | 1.000        | 0.649 (0.627)    | 0.279 (0.270)    | 1 (0.966) |    13.09 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     1340 | 2026-01-31 | Astralis             | W   | 0.959      | 1.000        | 0.477 (0.457)    | 0.346 (0.332)    | 1 (0.959) |     9.14 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     1561 | 2026-01-23 | PARIVISION           | L   | 0.906      | -            | -                | -                | -         |    -8.67 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     1726 | 2026-01-18 | Inner Circle Esports | W   | 0.871      | 0.708        | -                | 0.497 (0.306)    | -         |     0.98 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     1834 | 2026-01-16 | SINNERS Esports      | W   | 0.858      | 0.708        | -                | 0.808 (0.491)    | -         |     4.00 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     2206 | 2025-12-13 | Team Vitality        | L   | 0.632      | -            | -                | -                | -         |    -3.85 | chopper, donk, sh1ro, tN1R, zweih |
|           15 |     2236 | 2025-12-11 | Team Falcons         | W   | 0.619      | 1.000        | 1.000 (0.619)    | 0.414 (0.256)    | 1 (0.619) |    13.06 | chopper, donk, sh1ro, tN1R, zweih |
|           14 |     2341 | 2025-12-05 | MOUZ                 | W   | 0.579      | 1.000        | 0.993 (0.574)    | 0.365 (0.211)    | 1 (0.579) |    14.30 | chopper, donk, sh1ro, tN1R, zweih |
|           13 |     2365 | 2025-12-04 | FaZe Clan            | W   | 0.573      | 1.000        | 0.560 (0.321)    | 0.324 (0.186)    | 1 (0.573) |     5.86 | chopper, donk, sh1ro, tN1R, zweih |
|           12 |     2377 | 2025-12-04 | Team Liquid          | W   | 0.571      | 1.000        | 0.423 (0.241)    | -                | 1 (0.571) |     2.52 | chopper, donk, sh1ro, tN1R, zweih |
|           11 |     2851 | 2025-11-14 | Team Vitality        | L   | 0.437      | -            | -                | -                | -         |    -2.12 | chopper, donk, sh1ro, tN1R, zweih |
|           10 |     2888 | 2025-11-12 | The MongolZ          | W   | 0.428      | 0.687        | 0.663 (0.195)    | -                | 1 (0.428) |     4.66 | chopper, donk, sh1ro, tN1R, zweih |
|            9 |     2917 | 2025-11-11 | Team Falcons         | L   | 0.422      | -            | -                | -                | -         |    -3.72 | chopper, donk, sh1ro, tN1R, zweih |
|            8 |     3208 | 2025-11-05 | The MongolZ          | L   | 0.377      | -            | -                | -                | -         |    -7.80 | chopper, donk, sh1ro, tN1R, zweih |
|            7 |     3217 | 2025-11-04 | HEROIC               | W   | 0.375      | 1.000        | 0.445 (0.167)    | 0.405 (0.152)    | 1 (0.375) |     2.70 | chopper, donk, sh1ro, tN1R, zweih |
|            6 |     3235 | 2025-11-04 | Team Falcons         | L   | 0.370      | -            | -                | -                | -         |    -3.50 | chopper, donk, sh1ro, tN1R, zweih |
|            5 |     3261 | 2025-11-03 | PaiN Gaming          | W   | 0.364      | -            | -                | -                | -         |     0.92 | chopper, donk, sh1ro, tN1R, zweih |
|            4 |     3959 | 2025-10-10 | FaZe Clan            | L   | 0.205      | -            | -                | -                | -         |    -4.44 | chopper, donk, sh1ro, tN1R, zweih |
|            3 |     4158 | 2025-10-06 | G2 Esports           | W   | 0.179      | -            | -                | -                | -         |     1.80 | chopper, donk, sh1ro, tN1R, zweih |
|            2 |     4223 | 2025-10-05 | HOTU                 | W   | 0.171      | -            | -                | -                | -         |     1.01 | chopper, donk, sh1ro, tN1R, zweih |
|            1 |     4280 | 2025-10-04 | Inner Circle Esports | W   | 0.163      | -            | -                | -                | -         |     0.17 | chopper, donk, sh1ro, tN1R, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($270,883.80)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.88) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      1.000 | $131,000.00    | $131,000.00     |
| 2026-01-25 |      0.918 | $50,000.00     | $45,917.82      |
| 2025-12-14 |      0.639 | $80,000.00     | $51,112.96      |
| 2025-11-16 |      0.450 | $25,000.00     | $11,243.63      |
| 2025-11-09 |      0.403 | $47,000.00     | $18,944.70      |
| 2025-10-12 |      0.218 | $58,000.00     | $12,664.68      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
