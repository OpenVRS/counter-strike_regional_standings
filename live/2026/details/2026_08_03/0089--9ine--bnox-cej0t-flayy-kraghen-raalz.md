### Roster Details<br />
Team Name: 9INE<br />
Roster: bnox, cej0t, flayy, kraghen, raalz<br />
Global Rank: [89](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [66]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1009.1<br />
<br />
Final Rank Value (1009.1) = Starting Rank Value (981.4) + Head To Head Adjustments (27.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.366[<sup>1</sup>](#table2)
- Bounty Collected: 0.391[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.373[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 981.4
- 400 + ( ( 0.300 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 981.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      818 | 2026-06-25 | Inner Circle    | L   | 0.940      | -            | -                | -                | -         |    -3.16 | b1elany, cej0t, flayy, raalz, St0m4k |
|           21 |      837 | 2026-06-24 | GamerLegion     | W   | 0.934      | 0.548        | 0.436 (0.223)    | 0.379 (0.194)    | 1 (0.934) |    28.11 | b1elany, cej0t, flayy, raalz, St0m4k |
|           20 |      856 | 2026-06-23 | Sashi           | L   | 0.926      | -            | -                | -                | -         |    -8.96 | b1elany, cej0t, flayy, raalz, St0m4k |
|           19 |     2598 | 2026-04-26 | Gentle Mates    | L   | 0.539      | -            | -                | -                | -         |    -3.63 | bnox, cej0t, flayy, kraghen, raalz   |
|           18 |     2676 | 2026-04-25 | HYPERSPIRIT     | W   | 0.532      | 0.435        | 0.004 (0.001)    | 0.427 (0.099)    | 1 (0.532) |     4.92 | bnox, cej0t, flayy, kraghen, raalz   |
|           17 |     2713 | 2026-04-24 | Privateer       | L   | 0.526      | -            | -                | -                | -         |   -13.00 | bnox, cej0t, flayy, kraghen, raalz   |
|           16 |     2732 | 2026-04-23 | Misa            | L   | 0.521      | -            | -                | -                | -         |   -13.24 | bnox, cej0t, flayy, kraghen, raalz   |
|           15 |     3349 | 2026-04-03 | BetBoom         | L   | 0.385      | -            | -                | -                | -         |    -0.21 | bnox, cej0t, flayy, kraghen, raalz   |
|           14 |     3437 | 2026-04-02 | Gentle Mates    | W   | 0.379      | 0.500        | 0.136 (0.026)    | 0.552 (0.105)    | 1 (0.379) |     9.37 | bnox, cej0t, flayy, kraghen, raalz   |
|           13 |     3511 | 2026-04-01 | GamerLegion     | L   | 0.373      | -            | -                | -                | -         |    -0.52 | bnox, cej0t, flayy, kraghen, raalz   |
|           12 |     4006 | 2026-03-25 | Luminosity      | L   | 0.326      | -            | -                | -                | -         |    -0.71 | bnox, cej0t, flayy, kraghen, raalz   |
|           11 |     4031 | 2026-03-24 | OG              | W   | 0.322      | 0.435        | 0.026 (0.004)    | 0.270 (0.038)    | 1 (0.322) |     5.43 | bnox, cej0t, flayy, kraghen, raalz   |
|           10 |     4056 | 2026-03-24 | Inner Circle    | L   | 0.319      | -            | -                | -                | -         |    -0.66 | bnox, cej0t, flayy, kraghen, raalz   |
|            9 |     4067 | 2026-03-24 | INFINITE Talent | W   | 0.319      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.319) |     0.33 | bnox, cej0t, flayy, kraghen, raalz   |
|            8 |     4549 | 2026-03-14 | Alliance        | L   | 0.255      | -            | -                | -                | -         |    -0.19 | bnox, cej0t, flayy, kraghen, raalz   |
|            7 |     4670 | 2026-03-12 | Rebels          | W   | 0.240      | 0.350        | 0.006 (0.001)    | 0.522 (0.044)    | 1 (0.240) |     3.89 | bnox, cej0t, flayy, kraghen, raalz   |
|            6 |     4676 | 2026-03-12 | NIC             | W   | 0.239      | -            | -                | -                | 1 (0.239) |     0.25 | bnox, cej0t, flayy, kraghen, raalz   |
|            5 |     4682 | 2026-03-12 | M80             | L   | 0.239      | -            | -                | -                | -         |    -1.22 | bnox, cej0t, flayy, kraghen, raalz   |
|            4 |     4687 | 2026-03-12 | JiJieHao        | W   | 0.238      | 0.350        | 0.048 (0.004)    | 0.426 (0.036)    | 1 (0.238) |     5.71 | bnox, cej0t, flayy, kraghen, raalz   |
|            3 |     4846 | 2026-03-08 | FOKUS           | W   | 0.215      | 0.435        | 0.155 (0.015)    | 0.608 (0.057)    | 0 (0.000) |     5.86 | bnox, cej0t, flayy, kraghen, raalz   |
|            2 |     4923 | 2026-03-07 | fnatic          | W   | 0.208      | 0.435        | 0.021 (0.002)    | 0.824 (0.074)    | 0 (0.000) |     4.22 | bnox, cej0t, flayy, kraghen, raalz   |
|            1 |     5033 | 2026-03-05 | Echo            | W   | 0.193      | 0.435        | 0.053 (0.004)    | 0.746 (0.063)    | -         |     5.10 | bnox, cej0t, flayy, kraghen, raalz   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,193.55)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      0.961 | $2,500.00      | $2,403.75       |
| 2026-04-26 |      0.541 | $6,000.00      | $3,244.75       |
| 2026-04-04 |      0.394 | $9,000.00      | $3,545.05       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
