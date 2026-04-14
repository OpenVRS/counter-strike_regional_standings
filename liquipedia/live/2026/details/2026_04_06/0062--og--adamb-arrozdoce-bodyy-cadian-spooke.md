### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, bodyy, cadiaN, spooke<br />
Global Rank: [62](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [41]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1253.8<br />
<br />
Final Rank Value (1253.8) = Starting Rank Value (1254.9) + Head To Head Adjustments (-1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.381[<sup>1</sup>](#table2)
- Bounty Collected: 0.372[<sup>2</sup>](#table1)
- Opponent Network: 0.125[<sup>2</sup>](#table1)
- LAN Wins: 0.869[<sup>2</sup>](#table1)

The average of these factors is 0.437<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1254.9
- 400 + ( ( 0.437 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1254.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.311
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      199 | 2026-04-01 | ALGO Esports         | L   | 1.000      | -            | -                | -                | -         |   -24.52 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           26 |      337 | 2026-03-30 | BESTIA               | L   | 1.000      | -            | -                | -                | -         |   -13.79 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           25 |      380 | 2026-03-29 | BIG                  | W   | 1.000      | 0.340        | 0.167 (0.057)    | 0.762 (0.259)    | 1 (1.000) |    24.64 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           24 |      387 | 2026-03-29 | JiJieHao             | W   | 1.000      | 0.340        | 0.025 (0.008)    | 0.437 (0.149)    | 1 (1.000) |    13.69 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           23 |      389 | 2026-03-29 | SINNERS Esports      | L   | 1.000      | -            | -                | -                | -         |    -6.29 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           22 |      606 | 2026-03-24 | 9INE                 | L   | 1.000      | -            | -                | -                | -         |   -13.68 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           21 |      618 | 2026-03-24 | INFINITE Talent      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.23 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           20 |      635 | 2026-03-24 | Inner Circle Esports | L   | 1.000      | -            | -                | -                | -         |   -18.92 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           19 |     1072 | 2026-03-15 | Ninjas in Pyjamas    | L   | 1.000      | -            | -                | -                | -         |    -9.14 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           18 |     1098 | 2026-03-15 | Team Liquid          | W   | 1.000      | 0.349        | 0.237 (0.083)    | 0.312 (0.109)    | 1 (1.000) |    20.32 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           17 |     1115 | 2026-03-14 | JiJieHao             | W   | 1.000      | 0.349        | 0.025 (0.009)    | 0.437 (0.153)    | 1 (1.000) |    12.48 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           16 |     1150 | 2026-03-13 | BC.Game Esports      | W   | 1.000      | 0.349        | 0.077 (0.027)    | 0.310 (0.109)    | 1 (1.000) |    15.93 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           15 |     1153 | 2026-03-13 | Alliance             | L   | 1.000      | -            | -                | -                | -         |    -8.44 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           14 |     1155 | 2026-03-13 | Nexus Gaming         | W   | 1.000      | 0.349        | 0.001 (0.000)    | 0.450 (0.157)    | 1 (1.000) |     6.26 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           13 |     1161 | 2026-03-13 | GRINGOS              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.26 | adamb, arrozdoce, bodyy, cadiaN, spooke    |
|           12 |     2715 | 2026-02-11 | Alliance             | L   | 0.840      | -            | -                | -                | -         |    -6.30 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           11 |     2734 | 2026-02-10 | Team Nemesis         | W   | 0.835      | 0.143        | 0.109 (0.013)    | 1.000 (0.119)    | -         |    16.71 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           10 |     2756 | 2026-02-10 | Fnatic               | L   | 0.833      | -            | -                | -                | -         |   -14.67 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            9 |     2792 | 2026-02-08 | Phantom Esports      | W   | 0.821      | 0.143        | 0.008 (0.001)    | 0.634 (0.074)    | -         |    11.98 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            8 |     2800 | 2026-02-08 | Metizport            | W   | 0.821      | 0.143        | 0.023 (0.003)    | 0.488 (0.057)    | -         |     6.42 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            7 |     3632 | 2026-01-13 | FUT Esports          | L   | 0.646      | -            | -                | -                | -         |    -3.05 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            6 |     3932 | 2025-12-12 | SIXSEVEN             | L   | 0.433      | -            | -                | -                | -         |   -12.53 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            5 |     4164 | 2025-11-30 | Monte                | L   | 0.352      | -            | -                | -                | -         |    -2.32 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            4 |     4185 | 2025-11-29 | KOLESIE              | W   | 0.347      | 0.333        | 0.049 (0.006)    | 0.571 (0.066)    | 1 (0.347) |     4.96 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            3 |     4204 | 2025-11-29 | Infinite Gaming      | W   | 0.346      | -            | -                | -                | 1 (0.346) |     0.29 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|            2 |     5553 | 2025-10-16 | 9z Team              | L   | 0.053      | -            | -                | -                | -         |    -1.57 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            1 |     5598 | 2025-10-15 | FURIA                | L   | 0.045      | -            | -                | -                | -         |    -0.05 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,948.16)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $4,014.00      | $4,014.00       |
| 2026-01-18 |      0.681 | $7,500.00      | $5,107.21       |
| 2025-11-30 |      0.353 | $1,000.00      | $353.09         |
| 2025-10-19 |      0.074 | $20,000.00     | $1,473.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
