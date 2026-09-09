### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: DemQQ, EMSTAR, jottAAA, rigoN, Woro2k<br />
Global Rank: [271](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [182]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  632.9<br />
<br />
Final Rank Value (632.9) = Starting Rank Value (624.1) + Head To Head Adjustments (8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.192[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.1
- 400 + ( ( 0.118 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 624.1


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
|           16 |     4831 | 2026-03-31 | Sashi       | L   | 0.126      | -            | -                | -                | -         |    -0.13 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           15 |     4907 | 2026-03-30 | aimclub     | W   | 0.120      | 0.354        | 0.000 (0.000)    | 0.059 (0.002)    | 1 (0.120) |     1.42 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           14 |     4938 | 2026-03-30 | Passion UA  | L   | 0.118      | -            | -                | -                | -         |    -1.02 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           13 |     5008 | 2026-03-29 | INFINITE    | W   | 0.112      | 0.354        | 0.031 (0.001)    | 0.650 (0.026)    | 1 (0.112) |     3.39 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           12 |     5021 | 2026-03-29 | Drama       | W   | 0.111      | 0.354        | 0.000 (0.000)    | 0.010 (0.000)    | 1 (0.111) |     1.11 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           11 |     5247 | 2026-03-25 | BETBOOM     | L   | 0.085      | -            | -                | -                | -         |    -0.03 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           10 |     5295 | 2026-03-24 | ECSTATIC    | W   | 0.079      | 0.435        | 0.002 (0.000)    | 0.029 (0.001)    | 1 (0.079) |     1.32 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            9 |     5325 | 2026-03-23 | CYBERSHOKE  | W   | 0.075      | 0.435        | 0.006 (0.000)    | 0.244 (0.008)    | 1 (0.075) |     1.80 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            8 |     5522 | 2026-03-20 | HYPERSPIRIT | L   | 0.054      | -            | -                | -                | -         |    -0.53 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            7 |     5572 | 2026-03-19 | Color       | L   | 0.047      | -            | -                | -                | -         |    -0.18 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            6 |     5640 | 2026-03-18 | K27         | L   | 0.038      | -            | -                | -                | -         |    -0.01 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            5 |     5656 | 2026-03-17 | ex-MANA     | W   | 0.034      | 0.384        | 0.004 (0.000)    | 0.549 (0.007)    | 0 (0.000) |     0.71 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            4 |     5755 | 2026-03-15 | Omega       | W   | 0.019      | 0.435        | 0.027 (0.000)    | 0.395 (0.003)    | 0 (0.000) |     0.59 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            3 |     5767 | 2026-03-15 | Nemiga      | L   | 0.018      | -            | -                | -                | -         |    -0.07 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            2 |     5798 | 2026-03-14 | Nemesis     | W   | 0.013      | 0.384        | 0.167 (0.001)    | 0.572 (0.003)    | 0 (0.000) |     0.38 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            1 |     5842 | 2026-03-13 | Acend       | L   | 0.006      | -            | -                | -                | -         |    -0.00 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30.51)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.020 | $1,500.00      | $30.51          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
