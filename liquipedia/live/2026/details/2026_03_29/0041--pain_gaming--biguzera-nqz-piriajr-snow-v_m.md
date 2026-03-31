### Roster Details<br />
Team Name: PaiN Gaming<br />
Roster: biguzera, nqz, piriajr, snow, v$m<br />
Global Rank: [41](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [9]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  1262.5<br />
<br />
Final Rank Value (1262.5) = Starting Rank Value (1143.4) + Head To Head Adjustments (119.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.499[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.267[<sup>2</sup>](#table1)

The average of these factors is 0.383<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1143.4
- 400 + ( ( 0.383 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1143.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.196
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      870 | 2026-03-09 | FURIA         | L   | 1.000      | -            | -                | -                | -         |    -1.40 | biguzera, nqz, piriajr, snow, v$m  |
|           33 |      983 | 2026-03-08 | Aurora Gaming | L   | 1.000      | -            | -                | -                | -         |    -1.89 | biguzera, nqz, piriajr, snow, v$m  |
|           32 |     1029 | 2026-03-07 | FaZe Clan     | W   | 1.000      | 0.805        | 0.366 (0.295)    | 0.230 (0.185)    | 0 (0.000) |    21.55 | biguzera, nqz, piriajr, snow, v$m  |
|           31 |     1044 | 2026-03-06 | The MongolZ   | L   | 1.000      | -            | -                | -                | -         |    -2.63 | biguzera, nqz, piriajr, snow, v$m  |
|           30 |     1144 | 2026-03-04 | G2 Esports    | W   | 1.000      | 0.613        | 0.293 (0.179)    | 0.364 (0.223)    | -         |    25.85 | biguzera, nqz, piriajr, snow, v$m  |
|           29 |     1195 | 2026-03-03 | Passion UA    | W   | 1.000      | 0.613        | 0.062 (0.038)    | 0.309 (0.190)    | -         |    15.09 | biguzera, nqz, piriajr, snow, v$m  |
|           28 |     1250 | 2026-03-02 | PARIVISION    | L   | 1.000      | -            | -                | -                | -         |    -0.84 | biguzera, nqz, piriajr, snow, v$m  |
|           27 |     1276 | 2026-03-01 | 3DMAX         | W   | 1.000      | 0.613        | 0.231 (0.141)    | 0.369 (0.226)    | -         |    22.96 | biguzera, nqz, piriajr, snow, v$m  |
|           26 |     1957 | 2026-02-16 | G2 Esports    | L   | 0.924      | -            | -                | -                | -         |    -3.85 | biguzera, nqz, piriajr, snow, v$m  |
|           25 |     2034 | 2026-02-15 | Aurora Gaming | L   | 0.917      | -            | -                | -                | -         |    -1.03 | biguzera, nqz, piriajr, snow, v$m  |
|           24 |     2068 | 2026-02-14 | The MongolZ   | L   | 0.911      | -            | -                | -                | -         |    -2.14 | biguzera, nqz, piriajr, snow, v$m  |
|           23 |     2579 | 2026-01-30 | Aurora Gaming | L   | 0.811      | -            | -                | -                | -         |    -0.84 | biguzera, nqz, piriajr, snow, v$m  |
|           22 |     2613 | 2026-01-29 | B8            | W   | 0.803      | 0.783        | 0.174 (0.109)    | 0.166 (0.104)    | 1 (0.803) |    16.27 | biguzera, nqz, piriajr, snow, v$m  |
|           21 |     2637 | 2026-01-28 | Astralis      | L   | 0.797      | -            | -                | -                | -         |    -1.77 | biguzera, nqz, piriajr, snow, v$m  |
|           20 |     2994 | 2026-01-17 | HEROIC        | L   | 0.723      | -            | -                | -                | -         |    -5.29 | biguzera, nqz, piriajr, snow, v$m  |
|           19 |     3036 | 2026-01-16 | BetBoom Team  | W   | 0.717      | 0.895        | 0.075 (0.048)    | 0.634 (0.407)    | -         |    16.63 | biguzera, nqz, piriajr, snow, v$m  |
|           18 |     3530 | 2025-12-06 | B8            | L   | 0.444      | -            | -                | -                | -         |    -4.53 | biguzera, dav1deuS, dgt, nqz, snow |
|           17 |     3553 | 2025-12-05 | Natus Vincere | L   | 0.437      | -            | -                | -                | -         |    -0.18 | biguzera, dav1deuS, dgt, nqz, snow |
|           16 |     3578 | 2025-12-04 | G2 Esports    | L   | 0.431      | -            | -                | -                | -         |    -1.83 | biguzera, dav1deuS, dgt, nqz, snow |
|           15 |     3585 | 2025-12-04 | 3DMAX         | W   | 0.431      | 1.000        | 0.231 (0.099)    | 0.369 (0.159)    | 1 (0.431) |    11.04 | biguzera, dav1deuS, dgt, nqz, snow |
|           14 |     4050 | 2025-11-14 | FURIA         | L   | 0.302      | -            | -                | -                | -         |    -0.16 | biguzera, dav1deuS, dgt, nqz, snow |
|           13 |     4072 | 2025-11-14 | Passion UA    | W   | 0.295      | 0.687        | -                | 0.309 (0.063)    | 1 (0.295) |     4.43 | biguzera, dav1deuS, dgt, nqz, snow |
|           12 |     4102 | 2025-11-12 | TYLOO         | W   | 0.288      | -            | -                | -                | 1 (0.288) |     2.33 | biguzera, dav1deuS, dgt, nqz, snow |
|           11 |     4137 | 2025-11-12 | FURIA         | L   | 0.282      | -            | -                | -                | -         |    -0.15 | biguzera, dav1deuS, dgt, nqz, snow |
|           10 |     4442 | 2025-11-04 | The MongolZ   | L   | 0.235      | -            | -                | -                | -         |    -0.37 | biguzera, dav1deuS, dgt, nqz, snow |
|            9 |     4465 | 2025-11-04 | TYLOO         | W   | 0.229      | 1.000        | 0.088 (0.020)    | -                | 1 (0.229) |     1.88 | biguzera, dav1deuS, dgt, nqz, snow |
|            8 |     4490 | 2025-11-03 | Team Spirit   | L   | 0.223      | -            | -                | -                | -         |    -0.43 | biguzera, dav1deuS, dgt, nqz, snow |
|            7 |     4571 | 2025-10-31 | Legacy        | L   | 0.203      | -            | -                | -                | -         |    -2.04 | biguzera, dav1deuS, dgt, nqz, snow |
|            6 |     4638 | 2025-10-28 | B8            | W   | 0.184      | 1.000        | 0.174 (0.032)    | -                | 1 (0.184) |     3.66 | biguzera, dav1deuS, dgt, nqz, snow |
|            5 |     4689 | 2025-10-27 | GamerLegion   | W   | 0.175      | 1.000        | 0.182 (0.032)    | 0.477 (0.084)    | 1 (0.175) |     4.84 | biguzera, dav1deuS, dgt, nqz, snow |
|            4 |     4747 | 2025-10-26 | Gentle Mates  | W   | 0.169      | 1.000        | -                | 0.476 (0.080)    | 1 (0.169) |     4.04 | biguzera, dav1deuS, dgt, nqz, snow |
|            3 |     5060 | 2025-10-15 | FUT Esports   | L   | 0.101      | -            | -                | -                | -         |    -0.32 | biguzera, dav1deuS, dgt, nqz, snow |
|            2 |     5100 | 2025-10-14 | Fluxo W7M     | W   | 0.094      | -            | -                | -                | 1 (0.094) |     1.45 | biguzera, dav1deuS, dgt, nqz, snow |
|            1 |     5127 | 2025-10-13 | Fnatic        | L   | 0.088      | -            | -                | -                | -         |    -1.29 | biguzera, dav1deuS, dgt, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($101,440.12)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-10 |      1.000 | $21,500.00     | $21,500.00      |
| 2026-02-22 |      0.964 | $12,500.00     | $12,053.82      |
| 2026-01-30 |      0.812 | $4,500.00      | $3,652.19       |
| 2026-01-18 |      0.732 | $28,750.00     | $21,032.09      |
| 2025-12-14 |      0.498 | $20,000.00     | $9,958.33       |
| 2025-11-16 |      0.309 | $40,000.00     | $12,350.00      |
| 2025-11-09 |      0.262 | $25,000.00     | $6,552.08       |
| 2025-11-01 |      0.210 | $62,500.00     | $13,123.55      |
| 2025-10-19 |      0.122 | $10,000.00     | $1,218.06       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
