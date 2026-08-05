### Roster Details<br />
Team Name: Skele<br />
Roster: Arctic, lucas222, motion, neo, tidy<br />
Global Rank: [364](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  497.0<br />
<br />
Final Rank Value (497.0) = Starting Rank Value (497.9) + Head To Head Adjustments (-0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.9
- 400 + ( ( 0.051 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 497.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2488 | 2026-04-28 | FURY              | L   | 0.552      | -            | -                | -                | -         |    -8.78 | Arctic, lucas222, motion, neo, tidy  |
|           15 |     2534 | 2026-04-27 | Ground Zero       | L   | 0.545      | -            | -                | -                | -         |    -1.08 | Arctic, lucas222, motion, neo, tidy  |
|           14 |     2601 | 2026-04-26 | Time Waves        | W   | 0.538      | 0.278        | 0.000 (0.000)    | 0.047 (0.007)    | 0 (0.000) |     6.21 | Arctic, lucas222, motion, neo, tidy  |
|           13 |     3140 | 2026-04-06 | Rooster           | L   | 0.405      | -            | -                | -                | -         |    -1.87 | BaN4na, lucas222, motion, neo, tidy  |
|           12 |     4150 | 2026-03-23 | MARKandLARRY      | L   | 0.312      | -            | -                | -                | -         |    -3.32 | Arctic, BaN4na, lucas222, neo, tidy  |
|           11 |     4258 | 2026-03-21 | Ground Zero       | L   | 0.299      | -            | -                | -                | -         |    -2.10 | Arctic, BaN4na, lucas222, neo, tidy  |
|           10 |     5396 | 2026-02-25 | Mindfreak         | L   | 0.144      | -            | -                | -                | -         |    -1.25 | motion, neo, Oath, sunshinez, tidy   |
|            9 |     5489 | 2026-02-24 | Rooster           | W   | 0.131      | 0.317        | 0.008 (0.000)    | 0.379 (0.016)    | 0 (0.000) |     3.56 | motion, neo, Oath, sunshinez, tidy   |
|            8 |     5527 | 2026-02-23 | THUNDER dOWNUNDER | L   | 0.124      | -            | -                | -                | -         |    -0.08 | motion, neo, Oath, sunshinez, tidy   |
|            7 |     5598 | 2026-02-22 | Mindfreak         | L   | 0.119      | -            | -                | -                | -         |    -1.01 | motion, neo, Oath, sunshinez, tidy   |
|            6 |     5644 | 2026-02-21 | Ding Cuts         | W   | 0.112      | 0.317        | 0.001 (0.000)    | 0.112 (0.004)    | 0 (0.000) |     2.34 | Arctic, lucas222, motion, neo, Oath  |
|            5 |     5650 | 2026-02-21 | Rooster           | W   | 0.111      | 0.278        | 0.008 (0.000)    | 0.379 (0.012)    | 0 (0.000) |     3.05 | motion, neo, Oath, sunshinez, tidy   |
|            4 |     5699 | 2026-02-20 | THUNDER dOWNUNDER | L   | 0.105      | -            | -                | -                | -         |    -0.07 | motion, neo, Oath, sunshinez, tidy   |
|            3 |     5743 | 2026-02-19 | Abyssal           | L   | 0.099      | -            | -                | -                | -         |    -0.93 | lucas222, neo, Oath, sunshinez, tidy |
|            2 |     5805 | 2026-02-18 | Rooster           | W   | 0.092      | 0.278        | 0.008 (0.000)    | 0.379 (0.010)    | 0 (0.000) |     2.51 | motion, neo, Oath, sunshinez, tidy   |
|            1 |     5807 | 2026-02-18 | Ding Cuts         | W   | 0.091      | 0.317        | 0.001 (0.000)    | 0.112 (0.003)    | 0 (0.000) |     1.93 | lucas222, neo, Oath, sunshinez, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
