### Roster Details<br />
Team Name: Team Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [9](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [7]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1721.1<br />
<br />
Final Rank Value (1721.1) = Starting Rank Value (1653.3) + Head To Head Adjustments (67.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.840[<sup>1</sup>](#table2)
- Bounty Collected: 0.679[<sup>2</sup>](#table1)
- Opponent Network: 0.371[<sup>2</sup>](#table1)
- LAN Wins: 0.672[<sup>2</sup>](#table1)

The average of these factors is 0.641<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1653.3
- 400 + ( ( 0.641 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1653.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.309
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      673 | 2026-03-23 | The MongolZ          | L   | 1.000      | -            | -                | -                | -         |   -14.73 | donk, magixx, sh1ro, tN1R, zont1x |
|           28 |      743 | 2026-03-22 | 9z Team              | W   | 1.000      | 1.000        | 0.192 (0.192)    | 0.582 (0.582)    | 1 (1.000) |     8.59 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |      792 | 2026-03-21 | PARIVISION           | L   | 1.000      | -            | -                | -                | -         |   -13.07 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |      918 | 2026-03-19 | Team Liquid          | W   | 1.000      | 1.000        | 0.238 (0.238)    | 0.312 (0.312)    | 1 (1.000) |     3.60 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |     1157 | 2026-03-13 | Astralis             | L   | 1.000      | -            | -                | -                | -         |   -18.82 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     1427 | 2026-03-08 | G2 Esports           | W   | 1.000      | 0.805        | 0.348 (0.280)    | 0.582 (0.469)    | -         |    13.48 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     1482 | 2026-03-07 | B8                   | W   | 1.000      | 0.805        | -                | 0.349 (0.281)    | -         |     9.00 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     1543 | 2026-03-06 | 3DMAX                | W   | 0.993      | 0.805        | 0.215 (0.172)    | 0.492 (0.393)    | -         |     7.22 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     2809 | 2026-02-08 | MOUZ                 | W   | 0.819      | 1.000        | 0.666 (0.545)    | -                | 1 (0.819) |    14.67 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     2829 | 2026-02-07 | FURIA                | L   | 0.813      | -            | -                | -                | -         |    -6.98 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     2941 | 2026-02-03 | G2 Esports           | W   | 0.786      | 1.000        | 0.348 (0.274)    | 0.582 (0.458)    | 1 (0.786) |    12.69 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     2993 | 2026-02-01 | Natus Vincere        | W   | 0.774      | 1.000        | 1.000 (0.774)    | 0.344 (0.266)    | 1 (0.774) |    19.39 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     3036 | 2026-01-31 | Astralis             | W   | 0.767      | 1.000        | 0.466 (0.357)    | 0.337 (0.258)    | 1 (0.767) |    10.44 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     3265 | 2026-01-23 | PARIVISION           | L   | 0.714      | -            | -                | -                | -         |    -6.50 | donk, magixx, sh1ro, tN1R, zont1x |
|           15 |     3434 | 2026-01-18 | Inner Circle Esports | W   | 0.679      | 0.895        | -                | 0.484 (0.294)    | -         |     1.32 | donk, magixx, sh1ro, tN1R, zont1x |
|           14 |     3546 | 2026-01-16 | SINNERS Esports      | W   | 0.666      | 0.895        | -                | 0.674 (0.402)    | -         |     6.48 | donk, magixx, sh1ro, tN1R, zont1x |
|           13 |     3910 | 2025-12-13 | Team Vitality        | L   | 0.440      | -            | -                | -                | -         |    -2.09 | chopper, donk, sh1ro, tN1R, zweih |
|           12 |     3940 | 2025-12-11 | Team Falcons         | W   | 0.426      | 1.000        | 0.657 (0.280)    | -                | 1 (0.426) |     8.17 | chopper, donk, sh1ro, tN1R, zweih |
|           11 |     4052 | 2025-12-05 | MOUZ                 | W   | 0.387      | 1.000        | 0.666 (0.257)    | -                | 1 (0.387) |     7.82 | chopper, donk, sh1ro, tN1R, zweih |
|           10 |     4076 | 2025-12-04 | FaZe Clan            | W   | 0.381      | -            | -                | -                | 1 (0.381) |     4.15 | chopper, donk, sh1ro, tN1R, zweih |
|            9 |     4089 | 2025-12-04 | Team Liquid          | W   | 0.379      | -            | -                | -                | 1 (0.379) |     2.98 | chopper, donk, sh1ro, tN1R, zweih |
|            8 |     4573 | 2025-11-14 | Team Vitality        | L   | 0.245      | -            | -                | -                | -         |    -1.02 | chopper, donk, sh1ro, tN1R, zweih |
|            7 |     4610 | 2025-11-12 | The MongolZ          | W   | 0.236      | -            | -                | -                | -         |     4.15 | chopper, donk, sh1ro, tN1R, zweih |
|            6 |     4641 | 2025-11-11 | Team Falcons         | L   | 0.230      | -            | -                | -                | -         |    -2.66 | chopper, donk, sh1ro, tN1R, zweih |
|            5 |     4937 | 2025-11-05 | The MongolZ          | L   | 0.185      | -            | -                | -                | -         |    -2.56 | chopper, donk, sh1ro, tN1R, zweih |
|            4 |     4946 | 2025-11-04 | HEROIC               | W   | 0.183      | -            | -                | -                | -         |     2.33 | chopper, donk, sh1ro, tN1R, zweih |
|            3 |     4966 | 2025-11-04 | Team Falcons         | L   | 0.178      | -            | -                | -                | -         |    -2.12 | chopper, donk, sh1ro, tN1R, zweih |
|            2 |     4993 | 2025-11-03 | PaiN Gaming          | W   | 0.171      | -            | -                | -                | -         |     2.11 | chopper, donk, sh1ro, tN1R, zweih |
|            1 |     5714 | 2025-10-10 | FaZe Clan            | L   | 0.013      | -            | -                | -                | -         |    -0.27 | chopper, donk, sh1ro, tN1R, zweih |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($295,324.64)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.65) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $50,000.00     | $50,000.00      |
| 2026-03-15 |      1.000 | $48,000.00     | $48,000.00      |
| 2026-02-08 |      0.820 | $131,000.00    | $107,397.36     |
| 2026-01-25 |      0.726 | $50,000.00     | $36,310.80      |
| 2025-12-14 |      0.447 | $80,000.00     | $35,741.73      |
| 2025-11-16 |      0.258 | $25,000.00     | $6,440.12       |
| 2025-11-09 |      0.211 | $47,000.00     | $9,914.10       |
| 2025-10-12 |      0.026 | $58,000.00     | $1,520.53       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
