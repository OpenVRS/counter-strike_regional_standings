### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, bodyy, cadiaN, spooke<br />
Global Rank: [69](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [49]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  1164.0<br />
<br />
Final Rank Value (1164.0) = Starting Rank Value (1133.4) + Head To Head Adjustments (30.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.351[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.686[<sup>2</sup>](#table1)

The average of these factors is 0.378<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1133.4
- 400 + ( ( 0.378 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1133.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.298
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      162 | 2026-03-24 | 9INE                 | L   | 1.000      | -            | -                | -                | -         |   -12.11 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           26 |      173 | 2026-03-24 | INFINITE Talent      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.40 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           25 |      188 | 2026-03-24 | Inner Circle Esports | L   | 1.000      | -            | -                | -                | -         |   -18.85 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           24 |      585 | 2026-03-15 | Ninjas in Pyjamas    | L   | 1.000      | -            | -                | -                | -         |    -8.73 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           23 |      611 | 2026-03-15 | Team Liquid          | W   | 1.000      | 0.349        | 0.249 (0.087)    | 0.273 (0.096)    | 1 (1.000) |    20.61 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           22 |      628 | 2026-03-14 | JiJieHao             | W   | 1.000      | 0.349        | 0.024 (0.009)    | 0.428 (0.150)    | 1 (1.000) |    13.71 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           21 |      663 | 2026-03-13 | BC.Game Esports      | W   | 1.000      | 0.349        | 0.089 (0.031)    | 0.350 (0.122)    | 1 (1.000) |    19.19 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           20 |      666 | 2026-03-13 | Alliance             | L   | 1.000      | -            | -                | -                | -         |    -6.57 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           19 |      668 | 2026-03-13 | Nexus Gaming         | W   | 1.000      | 0.349        | 0.001 (0.000)    | 0.504 (0.176)    | 1 (1.000) |     8.86 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           18 |      674 | 2026-03-13 | GRINGOS              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.47 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           17 |     2220 | 2026-02-11 | Alliance             | L   | 0.890      | -            | -                | -                | -         |    -5.04 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           16 |     2239 | 2026-02-10 | Team Nemesis         | W   | 0.886      | 0.143        | 0.037 (0.005)    | 0.917 (0.116)    | -         |    18.74 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           15 |     2261 | 2026-02-10 | Fnatic               | L   | 0.883      | -            | -                | -                | -         |   -13.97 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           14 |     2297 | 2026-02-08 | Phantom Esports      | W   | 0.872      | 0.143        | 0.007 (0.001)    | 0.549 (0.068)    | -         |    15.38 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           13 |     2305 | 2026-02-08 | Metizport            | W   | 0.871      | 0.143        | 0.022 (0.003)    | 0.520 (0.065)    | -         |    10.29 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           12 |     3130 | 2026-01-13 | FUT Esports          | L   | 0.696      | -            | -                | -                | -         |    -1.99 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           11 |     3428 | 2025-12-12 | SIXSEVEN             | L   | 0.483      | -            | -                | -                | -         |   -12.79 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           10 |     3660 | 2025-11-30 | Monte                | L   | 0.402      | -            | -                | -                | -         |    -2.44 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            9 |     3681 | 2025-11-29 | KOLESIE              | W   | 0.398      | 0.333        | 0.047 (0.006)    | 0.596 (0.079)    | 1 (0.398) |     7.79 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            8 |     3700 | 2025-11-29 | Infinite Gaming      | W   | 0.397      | 0.333        | -                | 0.084 (0.011)    | 1 (0.397) |     0.41 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            7 |     5049 | 2025-10-16 | 9z Team              | L   | 0.103      | -            | -                | -                | -         |    -2.90 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            6 |     5094 | 2025-10-15 | FURIA                | L   | 0.096      | -            | -                | -                | -         |    -0.05 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            5 |     5351 | 2025-10-07 | Team Nemesis         | L   | 0.045      | -            | -                | -                | -         |    -0.31 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            4 |     5464 | 2025-10-05 | ECSTATIC             | W   | 0.032      | 0.333        | 0.093 (0.001)    | 0.635 (0.007)    | 1 (0.032) |     0.84 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            3 |     5482 | 2025-10-05 | Fnatic               | L   | 0.030      | -            | -                | -                | -         |    -0.43 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            2 |     5516 | 2025-10-04 | Wildcard             | W   | 0.025      | -            | -                | -                | 1 (0.025) |     0.04 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            1 |     5531 | 2025-10-04 | SkinRave Esports     | W   | 0.024      | 0.333        | 0.019 (0.000)    | -                | -         |     0.10 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,432.60)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $4,013.58      | $4,013.58       |
| 2026-01-18 |      0.732 | $7,500.00      | $5,486.63       |
| 2025-11-30 |      0.404 | $1,000.00      | $403.68         |
| 2025-10-19 |      0.124 | $20,000.00     | $2,485.65       |
| 2025-10-05 |      0.033 | $1,300.00      | $43.06          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
