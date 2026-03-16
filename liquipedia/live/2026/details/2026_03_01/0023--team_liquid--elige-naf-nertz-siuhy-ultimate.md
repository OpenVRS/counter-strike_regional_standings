### Roster Details<br />
Team Name: Team Liquid<br />
Roster: EliGE, NAF, NertZ, siuhy, ultimate<br />
Global Rank: [23](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [19]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  1398.9<br />
<br />
Final Rank Value (1398.9) = Starting Rank Value (1354.6) + Head To Head Adjustments (44.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.738[<sup>1</sup>](#table2)
- Bounty Collected: 0.537[<sup>2</sup>](#table1)
- Opponent Network: 0.266[<sup>2</sup>](#table1)
- LAN Wins: 0.478[<sup>2</sup>](#table1)

The average of these factors is 0.505<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1354.6
- 400 + ( ( 0.505 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1354.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.229
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     1194 | 2026-01-30 | FUT Esports       | L   | 0.994      | -            | -                | -                | -         |   -12.11 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           36 |     1221 | 2026-01-29 | G2 Esports        | L   | 0.987      | -            | -                | -                | -         |    -9.09 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           35 |     1245 | 2026-01-28 | Ninjas in Pyjamas | W   | 0.980      | 0.783        | 0.120 (0.092)    | 0.423 (0.325)    | 1 (0.980) |    11.86 | EliGE, Krimbo, NertZ, siuhy, ultimate |
|           34 |     1441 | 2026-01-22 | Team Falcons      | L   | 0.940      | -            | -                | -                | -         |    -2.30 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           33 |     1595 | 2026-01-17 | Gentle Mates      | W   | 0.906      | 0.895        | 0.206 (0.167)    | 0.686 (0.556)    | -         |    16.06 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           32 |     1688 | 2026-01-15 | Ninjas in Pyjamas | W   | 0.893      | 0.895        | 0.120 (0.096)    | 0.423 (0.338)    | -         |    12.29 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           31 |     2153 | 2025-12-05 | Passion UA        | L   | 0.620      | -            | -                | -                | -         |   -12.01 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           30 |     2175 | 2025-12-04 | The MongolZ       | L   | 0.614      | -            | -                | -                | -         |    -5.48 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           29 |     2189 | 2025-12-04 | Team Spirit       | L   | 0.613      | -            | -                | -                | -         |    -2.97 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           28 |     2216 | 2025-12-02 | Astralis          | W   | 0.600      | 0.769        | 0.468 (0.216)    | 0.375 (0.173)    | 1 (0.600) |    14.34 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           27 |     2230 | 2025-12-01 | TYLOO             | W   | 0.594      | -            | -                | -                | 1 (0.594) |     1.17 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           26 |     2245 | 2025-11-30 | MIBR              | W   | 0.587      | 0.769        | 0.153 (0.069)    | 0.666 (0.301)    | 1 (0.587) |     9.95 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           25 |     2277 | 2025-11-29 | PARIVISION        | L   | 0.581      | -            | -                | -                | -         |    -0.98 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           24 |     2291 | 2025-11-29 | B8                | L   | 0.580      | -            | -                | -                | -         |    -8.76 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           23 |     3173 | 2025-10-31 | BC.Game Esports   | L   | 0.385      | -            | -                | -                | -         |    -4.53 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           22 |     3215 | 2025-10-29 | FlyQuest          | W   | 0.372      | 1.000        | -                | 0.360 (0.134)    | 1 (0.372) |     4.59 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           21 |     3251 | 2025-10-28 | BetBoom Team      | W   | 0.364      | 1.000        | -                | 0.931 (0.339)    | 1 (0.364) |     6.43 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           20 |     3281 | 2025-10-27 | Aurora Gaming     | L   | 0.359      | -            | -                | -                | -         |    -1.26 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           19 |     3351 | 2025-10-26 | Legacy            | W   | 0.351      | 1.000        | 0.619 (0.217)    | -                | 1 (0.351) |     5.60 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           18 |     3576 | 2025-10-18 | HEROIC            | W   | 0.303      | 1.000        | 0.443 (0.134)    | 0.433 (0.131)    | 1 (0.303) |     6.11 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           17 |     3599 | 2025-10-17 | 3DMAX             | L   | 0.297      | -            | -                | -                | -         |    -3.52 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           16 |     3661 | 2025-10-15 | Legacy            | W   | 0.284      | 1.000        | 0.619 (0.176)    | -                | 1 (0.284) |     4.45 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           15 |     3720 | 2025-10-14 | MIBR              | W   | 0.273      | 1.000        | -                | 0.666 (0.181)    | 1 (0.273) |     5.29 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           14 |     3734 | 2025-10-13 | GamerLegion       | W   | 0.270      | 1.000        | 0.368 (0.099)    | 0.663 (0.179)    | -         |     6.76 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           13 |     4353 | 2025-09-28 | Partizan Esports  | W   | 0.167      | -            | -                | -                | -         |     0.16 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           12 |     4367 | 2025-09-28 | 9INE              | L   | 0.165      | -            | -                | -                | -         |    -2.82 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           11 |     4381 | 2025-09-28 | SIXSEVEN          | W   | 0.164      | -            | -                | -                | -         |     0.28 | EliGE, NAF, NertZ, siuhy, ultimate    |
|           10 |     4410 | 2025-09-27 | ENCE              | W   | 0.160      | -            | -                | -                | -         |     1.53 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            9 |     4427 | 2025-09-27 | 9INE              | L   | 0.159      | -            | -                | -                | -         |    -2.75 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            8 |     4432 | 2025-09-27 | SIXSEVEN          | W   | 0.158      | -            | -                | -                | -         |     0.26 | EliGE, NAF, NertZ, siuhy, ultimate    |
|            7 |     4640 | 2025-09-20 | The MongolZ       | L   | 0.112      | -            | -                | -                | -         |    -0.76 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            6 |     4671 | 2025-09-19 | Aurora Gaming     | W   | 0.106      | 1.000        | 1.000 (0.106)    | -                | -         |     3.04 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            5 |     4749 | 2025-09-17 | FaZe Clan         | W   | 0.091      | -            | -                | -                | -         |     2.25 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            4 |     4767 | 2025-09-16 | TYLOO             | W   | 0.086      | -            | -                | -                | -         |     0.18 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            3 |     4796 | 2025-09-15 | HEROIC            | W   | 0.079      | -            | -                | -                | -         |     1.65 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            2 |     4829 | 2025-09-14 | GamerLegion       | L   | 0.073      | -            | -                | -                | -         |    -0.45 | NAF, NertZ, siuhy, Twistzz, ultimate  |
|            1 |     4864 | 2025-09-13 | FURIA             | L   | 0.067      | -            | -                | -                | -         |    -0.08 | NAF, NertZ, siuhy, Twistzz, ultimate  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($147,174.14)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.44) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.994 | $4,500.00      | $4,472.81       |
| 2026-01-25 |      0.960 | $51,250.00     | $49,185.76      |
| 2025-12-14 |      0.680 | $20,000.00     | $13,605.56      |
| 2025-11-01 |      0.392 | $62,500.00     | $24,521.12      |
| 2025-10-19 |      0.304 | $130,000.00    | $39,541.67      |
| 2025-09-28 |      0.167 | $1,700.00      | $283.33         |
| 2025-09-21 |      0.120 | $130,000.00    | $15,563.89      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
