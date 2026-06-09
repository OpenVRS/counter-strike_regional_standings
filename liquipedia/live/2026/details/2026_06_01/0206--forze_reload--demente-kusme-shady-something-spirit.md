### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: demente, KusMe, shady, Something, spirit<br />
Global Rank: [206](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [132]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  740.3<br />
<br />
Final Rank Value (740.3) = Starting Rank Value (684.7) + Head To Head Adjustments (55.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.215[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.100[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.150<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.7
- 400 + ( ( 0.150 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 684.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.099
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     3035 | 2026-03-18 | Leo Team          | L   | 0.705      | -            | -                | -                | -         |    -6.91 | demente, KusMe, shady, Something, spirit      |
|           30 |     3125 | 2026-03-16 | Rottweilers       | L   | 0.692      | -            | -                | -                | -         |   -15.82 | demente, KusMe, shady, Something, spirit      |
|           29 |     3790 | 2026-03-03 | K27               | L   | 0.604      | -            | -                | -                | -         |    -0.65 | aloneintokyo, floyd, KusMe, Something, spirit |
|           28 |     3821 | 2026-03-02 | Ursa              | W   | 0.598      | 0.333        | 0.016 (0.003)    | 0.951 (0.190)    | 0 (0.000) |    13.82 | aloneintokyo, floyd, Goody, KusMe, Something  |
|           27 |     3831 | 2026-03-02 | Ex-RUBY           | W   | 0.597      | 0.371        | 0.033 (0.007)    | 0.989 (0.219)    | 0 (0.000) |    15.67 | aloneintokyo, floyd, KusMe, Something, spirit |
|           26 |     4069 | 2026-02-25 | Oxuji Esports     | L   | 0.564      | -            | -                | -                | -         |    -0.94 | aloneintokyo, floyd, KusMe, Something, spirit |
|           25 |     4295 | 2026-02-21 | Ex-RUBY           | W   | 0.537      | 0.371        | 0.033 (0.007)    | 0.989 (0.197)    | 0 (0.000) |    14.13 | aloneintokyo, floyd, KusMe, Something, spirit |
|           24 |     5390 | 2026-01-22 | Eternal Fire      | W   | 0.340      | -            | -                | -                | 0 (0.000) |     4.01 | demente, KusMe, shady, Something, spirit      |
|           23 |     5413 | 2026-01-22 | Phantom Esports   | L   | 0.338      | -            | -                | -                | -         |    -0.80 | demente, KusMe, shady, Something, spirit      |
|           22 |     5417 | 2026-01-22 | Acend             | L   | 0.337      | -            | -                | -                | -         |    -0.42 | demente, KusMe, shady, Something, spirit      |
|           21 |     5444 | 2026-01-21 | MASONIC           | W   | 0.332      | 0.384        | 0.006 (0.001)    | 0.605 (0.077)    | 0 (0.000) |     9.54 | demente, KusMe, shady, Something, spirit      |
|           20 |     5469 | 2026-01-20 | Sangal Esports    | L   | 0.325      | -            | -                | -                | -         |    -5.30 | demente, KusMe, shady, Something, spirit      |
|           19 |     5481 | 2026-01-19 | Team Nemesis      | L   | 0.319      | -            | -                | -                | -         |    -0.39 | demente, KusMe, shady, Something, spirit      |
|           18 |     5523 | 2026-01-18 | MASONIC           | L   | 0.310      | -            | -                | -                | -         |    -0.83 | demente, KusMe, shady, Something, spirit      |
|           17 |     5560 | 2026-01-17 | TNC Esport        | W   | 0.305      | 0.384        | 0.022 (0.003)    | 1.000 (0.117)    | 0 (0.000) |     8.06 | demente, KusMe, shady, Something, spirit      |
|           16 |     5661 | 2026-01-15 | ARCRED            | W   | 0.292      | 0.384        | 0.025 (0.003)    | 0.577 (0.065)    | 0 (0.000) |     8.80 | demente, KusMe, shady, Something, spirit      |
|           15 |     5695 | 2026-01-14 | WOPA Esport       | W   | 0.284      | 0.384        | 0.020 (0.002)    | 0.633 (0.069)    | 0 (0.000) |     8.46 | demente, KusMe, shady, Something, spirit      |
|           14 |     5853 | 2025-12-22 | TNC Esport        | W   | 0.133      | 0.333        | 0.022 (0.001)    | 1.000 (0.044)    | 0 (0.000) |     3.59 | demente, KusMe, noni, Something, spirit       |
|           13 |     5859 | 2025-12-21 | Partizan Esports  | W   | 0.126      | -            | -                | -                | 0 (0.000) |     0.67 | demente, KusMe, noni, Something, spirit       |
|           12 |     6009 | 2025-12-12 | Lavked            | L   | 0.064      | -            | -                | -                | -         |    -0.47 | Goody, KusMe, Something, spirit, youka        |
|           11 |     6028 | 2025-12-10 | Lavked            | L   | 0.053      | -            | -                | -                | -         |    -0.39 | Goody, KusMe, Something, spirit, youka        |
|           10 |     6033 | 2025-12-10 | BASEMENT BOYS     | W   | 0.050      | 0.384        | 0.016 (0.000)    | 0.510 (0.010)    | -         |     1.52 | Goody, KusMe, Something, spirit, youka        |
|            9 |     6043 | 2025-12-09 | Fire Flux Esports | L   | 0.045      | -            | -                | -                | -         |    -0.83 | Goody, KusMe, Something, spirit, youka        |
|            8 |     6065 | 2025-12-08 | Nemiga Gaming     | W   | 0.039      | 0.435        | 0.136 (0.002)    | 1.000 (0.017)    | -         |     1.18 | Goody, KusMe, Something, spirit, youka        |
|            7 |     6114 | 2025-12-06 | VP.Prodigy        | L   | 0.025      | -            | -                | -                | -         |    -0.52 | Goody, KusMe, Something, spirit, youka        |
|            6 |     6118 | 2025-12-06 | Nexus Gaming      | W   | 0.024      | -            | -                | -                | -         |     0.45 | Goody, KusMe, Something, spirit, youka        |
|            5 |     6144 | 2025-12-05 | IC Esports        | L   | 0.017      | -            | -                | -                | -         |    -0.01 | Goody, KusMe, Something, spirit, youka        |
|            4 |     6163 | 2025-12-04 | Johnny Speeds     | L   | 0.012      | -            | -                | -                | -         |    -0.01 | Goody, KusMe, Something, spirit, youka        |
|            3 |     6170 | 2025-12-04 | NOVAQ             | L   | 0.011      | -            | -                | -                | -         |    -0.08 | Goody, KusMe, Something, spirit, youka        |
|            2 |     6177 | 2025-12-03 | Sashi Esport      | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Goody, KusMe, Something, spirit, youka        |
|            1 |     6186 | 2025-12-03 | Partizan Esports  | W   | 0.004      | -            | -                | -                | -         |     0.02 | Goody, KusMe, Something, spirit, youka        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($139.72)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      0.140 | $1,000.00      | $139.72         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
