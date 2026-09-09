### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: DemQQ, EMSTAR, jottAAA, rigoN, Woro2k<br />
Global Rank: [263](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [175]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  638.6<br />
<br />
Final Rank Value (638.6) = Starting Rank Value (629.2) + Head To Head Adjustments (9.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.195[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.2
- 400 + ( ( 0.120 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 629.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     4803 | 2026-03-31 | Sashi       | L   | 0.132      | -            | -                | -                | -         |    -0.14 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           16 |     4879 | 2026-03-30 | aimclub     | W   | 0.126      | 0.354        | 0.000 (0.000)    | 0.060 (0.003)    | 1 (0.126) |     1.45 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           15 |     4910 | 2026-03-30 | Passion UA  | L   | 0.124      | -            | -                | -                | -         |    -1.08 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           14 |     4980 | 2026-03-29 | INFINITE    | W   | 0.117      | 0.354        | 0.031 (0.001)    | 0.652 (0.027)    | 1 (0.117) |     3.56 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           13 |     4993 | 2026-03-29 | Drama       | W   | 0.117      | 0.354        | 0.000 (0.000)    | 0.010 (0.000)    | 1 (0.117) |     1.14 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           12 |     5219 | 2026-03-25 | BETBOOM     | L   | 0.091      | -            | -                | -                | -         |    -0.03 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           11 |     5267 | 2026-03-24 | ECSTATIC    | W   | 0.084      | 0.435        | 0.002 (0.000)    | 0.030 (0.001)    | 1 (0.084) |     1.40 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           10 |     5297 | 2026-03-23 | CYBERSHOKE  | W   | 0.080      | 0.435        | 0.006 (0.000)    | 0.246 (0.009)    | 1 (0.080) |     1.92 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            9 |     5494 | 2026-03-20 | HYPERSPIRIT | L   | 0.059      | -            | -                | -                | -         |    -0.60 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            8 |     5544 | 2026-03-19 | Color       | L   | 0.052      | -            | -                | -                | -         |    -0.20 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            7 |     5612 | 2026-03-18 | K27         | L   | 0.043      | -            | -                | -                | -         |    -0.01 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            6 |     5628 | 2026-03-17 | ex-MANA     | W   | 0.039      | 0.384        | 0.004 (0.000)    | 0.553 (0.008)    | 0 (0.000) |     0.81 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            5 |     5727 | 2026-03-15 | Omega       | W   | 0.025      | 0.435        | 0.027 (0.000)    | 0.397 (0.004)    | 0 (0.000) |     0.76 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            4 |     5739 | 2026-03-15 | Nemiga      | L   | 0.024      | -            | -                | -                | -         |    -0.09 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            3 |     5770 | 2026-03-14 | Nemesis     | W   | 0.018      | 0.384        | 0.168 (0.001)    | 0.575 (0.004)    | 0 (0.000) |     0.54 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            2 |     5814 | 2026-03-13 | Acend       | L   | 0.012      | -            | -                | -                | -         |    -0.01 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            1 |     5884 | 2026-03-12 | ex-RUBY     | W   | 0.004      | 0.384        | 0.001 (0.000)    | 0.060 (0.000)    | 0 (0.000) |     0.06 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38.70)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.026 | $1,500.00      | $38.70          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
