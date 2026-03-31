### Roster Details<br />
Team Name: Team Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [8](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [7]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  1729.4<br />
<br />
Final Rank Value (1729.4) = Starting Rank Value (1650.6) + Head To Head Adjustments (78.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.866[<sup>1</sup>](#table2)
- Bounty Collected: 0.721[<sup>2</sup>](#table1)
- Opponent Network: 0.307[<sup>2</sup>](#table1)
- LAN Wins: 0.612[<sup>2</sup>](#table1)

The average of these factors is 0.627<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1650.6
- 400 + ( ( 0.627 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1650.6


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
|           28 |      191 | 2026-03-13 | Astralis             | L   | 1.000      | -            | -                | -                | -         |   -16.73 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |      458 | 2026-03-08 | G2 Esports           | W   | 1.000      | 0.805        | 0.375 (0.302)    | 0.388 (0.312)    | -         |     9.55 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |      513 | 2026-03-07 | B8                   | W   | 1.000      | 0.805        | 0.174 (0.140)    | -                | -         |     3.93 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |      574 | 2026-03-06 | 3DMAX                | W   | 1.000      | 0.805        | 0.313 (0.252)    | 0.329 (0.265)    | -         |     4.12 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     1833 | 2026-02-08 | MOUZ                 | W   | 0.917      | 1.000        | 0.808 (0.740)    | 0.374 (0.343)    | 1 (0.917) |    20.27 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     1853 | 2026-02-07 | FURIA                | L   | 0.911      | -            | -                | -                | -         |    -6.06 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     1965 | 2026-02-03 | G2 Esports           | W   | 0.884      | 1.000        | 0.375 (0.332)    | 0.388 (0.343)    | 1 (0.884) |     9.77 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     2017 | 2026-02-01 | Natus Vincere        | W   | 0.872      | 1.000        | 1.000 (0.872)    | 0.376 (0.328)    | 1 (0.872) |    19.57 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     2059 | 2026-01-31 | Astralis             | W   | 0.865      | 1.000        | 0.580 (0.501)    | 0.421 (0.364)    | 1 (0.865) |    15.05 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     2285 | 2026-01-23 | PARIVISION           | L   | 0.812      | -            | -                | -                | -         |    -6.34 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     2454 | 2026-01-18 | Inner Circle Esports | W   | 0.777      | 0.895        | -                | 0.425 (0.296)    | -         |     0.61 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     2563 | 2026-01-16 | SINNERS Esports      | W   | 0.764      | 0.895        | -                | 0.677 (0.463)    | -         |     4.42 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     2925 | 2025-12-13 | Team Vitality        | L   | 0.538      | -            | -                | -                | -         |    -2.60 | chopper, donk, sh1ro, tN1R, zweih |
|           15 |     2955 | 2025-12-11 | Team Falcons         | W   | 0.524      | 1.000        | 0.693 (0.364)    | 0.336 (0.176)    | 1 (0.524) |    10.09 | chopper, donk, sh1ro, tN1R, zweih |
|           14 |     3067 | 2025-12-05 | MOUZ                 | W   | 0.485      | 1.000        | 0.808 (0.391)    | 0.374 (0.181)    | 1 (0.485) |    12.28 | chopper, donk, sh1ro, tN1R, zweih |
|           13 |     3091 | 2025-12-04 | FaZe Clan            | W   | 0.479      | 1.000        | 0.433 (0.207)    | -                | 1 (0.479) |     4.65 | chopper, donk, sh1ro, tN1R, zweih |
|           12 |     3104 | 2025-12-04 | Team Liquid          | W   | 0.477      | -            | -                | -                | 1 (0.477) |     2.96 | chopper, donk, sh1ro, tN1R, zweih |
|           11 |     3588 | 2025-11-14 | Team Vitality        | L   | 0.343      | -            | -                | -                | -         |    -1.36 | chopper, donk, sh1ro, tN1R, zweih |
|           10 |     3625 | 2025-11-12 | The MongolZ          | W   | 0.334      | -            | -                | -                | 1 (0.334) |     4.36 | chopper, donk, sh1ro, tN1R, zweih |
|            9 |     3656 | 2025-11-11 | Team Falcons         | L   | 0.328      | -            | -                | -                | -         |    -3.65 | chopper, donk, sh1ro, tN1R, zweih |
|            8 |     3952 | 2025-11-05 | The MongolZ          | L   | 0.283      | -            | -                | -                | -         |    -5.23 | chopper, donk, sh1ro, tN1R, zweih |
|            7 |     3961 | 2025-11-04 | HEROIC               | W   | 0.281      | -            | -                | -                | 1 (0.281) |     2.50 | chopper, donk, sh1ro, tN1R, zweih |
|            6 |     3981 | 2025-11-04 | Team Falcons         | L   | 0.276      | -            | -                | -                | -         |    -3.29 | chopper, donk, sh1ro, tN1R, zweih |
|            5 |     4008 | 2025-11-03 | PaiN Gaming          | W   | 0.269      | -            | -                | -                | -         |     0.81 | chopper, donk, sh1ro, tN1R, zweih |
|            4 |     4729 | 2025-10-10 | FaZe Clan            | L   | 0.111      | -            | -                | -                | -         |    -2.48 | chopper, donk, sh1ro, tN1R, zweih |
|            3 |     4936 | 2025-10-06 | G2 Esports           | W   | 0.084      | -            | -                | -                | -         |     1.05 | chopper, donk, sh1ro, tN1R, zweih |
|            2 |     5003 | 2025-10-05 | HOTU                 | W   | 0.077      | -            | -                | -                | -         |     0.57 | chopper, donk, sh1ro, tN1R, zweih |
|            1 |     5062 | 2025-10-04 | Inner Circle Esports | W   | 0.069      | -            | -                | -                | -         |     0.01 | chopper, donk, sh1ro, tN1R, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($283,623.33)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.70) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $48,000.00     | $48,000.00      |
| 2026-02-08 |      0.918 | $131,000.00    | $120,228.89     |
| 2026-01-25 |      0.824 | $50,000.00     | $41,208.33      |
| 2025-12-14 |      0.545 | $80,000.00     | $43,577.78      |
| 2025-11-16 |      0.356 | $25,000.00     | $8,888.89       |
| 2025-11-09 |      0.309 | $47,000.00     | $14,517.78      |
| 2025-10-12 |      0.124 | $58,000.00     | $7,201.67       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
