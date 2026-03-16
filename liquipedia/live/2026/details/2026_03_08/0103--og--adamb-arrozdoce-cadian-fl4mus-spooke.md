### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, cadiaN, FL4MUS, spooke<br />
Global Rank: [103](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [78]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  968.3<br />
<br />
Final Rank Value (968.3) = Starting Rank Value (888.6) + Head To Head Adjustments (79.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.427[<sup>1</sup>](#table2)
- Bounty Collected: 0.314[<sup>2</sup>](#table1)
- Opponent Network: 0.057[<sup>2</sup>](#table1)
- LAN Wins: 0.220[<sup>2</sup>](#table1)

The average of these factors is 0.255<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.6
- 400 + ( ( 0.255 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 888.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.195
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |     1028 | 2026-02-11 | Alliance          | L   | 1.000      | -            | -                | -                | -         |    -4.55 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           31 |     1046 | 2026-02-10 | Team Nemesis      | W   | 1.000      | 0.143        | 0.044 (0.006)    | 0.849 (0.121)    | -         |    25.39 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           30 |     1067 | 2026-02-10 | Fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.02 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           29 |     1102 | 2026-02-08 | Phantom Esports   | W   | 1.000      | 0.143        | -                | 0.505 (0.072)    | -         |    21.52 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           28 |     1110 | 2026-02-08 | Metizport         | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.485 (0.069)    | -         |    18.98 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           27 |     1919 | 2026-01-13 | FUT Esports       | L   | 0.837      | -            | -                | -                | -         |    -0.82 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           26 |     2227 | 2025-12-12 | SIXSEVEN          | L   | 0.624      | -            | -                | -                | -         |    -9.10 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           25 |     2447 | 2025-11-30 | Monte             | L   | 0.543      | -            | -                | -                | -         |    -1.38 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           24 |     2468 | 2025-11-29 | KOLESIE           | W   | 0.539      | 0.333        | 0.090 (0.016)    | 0.674 (0.121)    | 1 (0.539) |    14.40 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           23 |     2487 | 2025-11-29 | Infinite Gaming   | W   | 0.538      | 0.333        | -                | 0.107 (0.019)    | 1 (0.538) |     2.78 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           22 |     3801 | 2025-10-16 | 9z Team           | L   | 0.244      | -            | -                | -                | -         |    -4.34 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           21 |     3846 | 2025-10-15 | FURIA             | L   | 0.237      | -            | -                | -                | -         |    -0.03 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           20 |     4093 | 2025-10-07 | Team Nemesis      | L   | 0.186      | -            | -                | -                | -         |    -0.57 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           19 |     4204 | 2025-10-05 | ECSTATIC          | W   | 0.173      | 0.333        | 0.178 (0.010)    | 0.782 (0.045)    | 1 (0.173) |     5.17 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           18 |     4220 | 2025-10-05 | Fnatic            | L   | 0.171      | -            | -                | -                | -         |    -0.57 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           17 |     4253 | 2025-10-04 | Wildcard          | W   | 0.166      | -            | -                | -                | 1 (0.166) |     1.29 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           16 |     4268 | 2025-10-04 | SkinRave Esports  | W   | 0.165      | 0.333        | 0.042 (0.002)    | -                | 1 (0.165) |     2.14 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           15 |     4419 | 2025-09-30 | BIG               | L   | 0.138      | -            | -                | -                | -         |    -2.31 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           14 |     4420 | 2025-09-30 | Alliance          | W   | 0.137      | 0.323        | 0.130 (0.006)    | 0.882 (0.039)    | 1 (0.137) |     3.94 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           13 |     4435 | 2025-09-30 | MOUZ NXT          | L   | 0.136      | -            | -                | -                | -         |    -0.40 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           12 |     4474 | 2025-09-28 | Passion UA        | W   | 0.126      | 0.339        | 0.118 (0.005)    | 0.447 (0.019)    | 1 (0.126) |     3.49 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           11 |     4535 | 2025-09-27 | BASEMENT BOYS     | W   | 0.119      | -            | -                | -                | 1 (0.119) |     0.86 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           10 |     4581 | 2025-09-26 | ECSTATIC          | W   | 0.112      | 0.339        | 0.178 (0.007)    | 0.782 (0.030)    | 1 (0.112) |     3.36 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            9 |     4607 | 2025-09-26 | SINNERS Esports   | W   | 0.110      | 0.339        | 0.251 (0.009)    | 0.808 (0.030)    | 1 (0.110) |     3.29 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            8 |     4637 | 2025-09-25 | AM Gaming         | W   | 0.105      | 0.339        | 0.024 (0.001)    | -                | -         |     2.48 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            7 |     4798 | 2025-09-19 | B8                | L   | 0.063      | -            | -                | -                | -         |    -0.15 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            6 |     4826 | 2025-09-18 | Ninjas in Pyjamas | L   | 0.058      | -            | -                | -                | -         |    -0.19 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            5 |     4993 | 2025-09-13 | HOTU              | L   | 0.026      | -            | -                | -                | -         |    -0.04 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            4 |     5042 | 2025-09-12 | Tricked Esport    | W   | 0.019      | -            | -                | -                | -         |     0.05 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            3 |     5088 | 2025-09-11 | BC.Game Esports   | L   | 0.012      | -            | -                | -                | -         |    -0.26 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            2 |     5099 | 2025-09-11 | BIG               | W   | 0.011      | -            | -                | -                | -         |     0.17 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            1 |     5159 | 2025-09-10 | M80               | W   | 0.004      | -            | -                | -                | -         |     0.12 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,114.45)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-18 |      0.873 | $7,500.00      | $6,544.10       |
| 2025-11-30 |      0.545 | $1,000.00      | $544.68         |
| 2025-10-19 |      0.265 | $20,000.00     | $5,305.56       |
| 2025-10-05 |      0.174 | $1,300.00      | $226.36         |
| 2025-09-28 |      0.126 | $5,617.22      | $706.96         |
| 2025-09-21 |      0.079 | $10,000.00     | $786.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
