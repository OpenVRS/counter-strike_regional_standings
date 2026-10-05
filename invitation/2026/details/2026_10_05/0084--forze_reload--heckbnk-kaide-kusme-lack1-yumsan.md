### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: HeCkBNk, Kaide, KusMe, Lack1, YumsaN<br />
Global Rank: [84](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [63]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1100.0<br />
<br />
Final Rank Value (1100.0) = Starting Rank Value (1105.5) + Head To Head Adjustments (-5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.339[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.486[<sup>2</sup>](#table1)

The average of these factors is 0.353<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1105.5
- 400 + ( ( 0.353 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1105.5


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
|           26 |        7 | 2026-10-04 | Spirit Academy  | L   | 1.000      | -            | -                | -                | -         |   -21.66 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           25 |       37 | 2026-10-03 | mellren         | W   | 1.000      | 0.303        | 0.031 (0.010)    | 0.626 (0.190)    | 0 (0.000) |     8.94 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           24 |      157 | 2026-10-01 | Fire Flux       | W   | 1.000      | 0.303        | 0.039 (0.012)    | 0.546 (0.165)    | 0 (0.000) |     7.92 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           23 |      273 | 2026-09-28 | megoshort       | W   | 1.000      | 0.303        | -                | 0.405 (0.123)    | 0 (0.000) |     5.74 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           22 |      364 | 2026-09-26 | Banda Chuya     | W   | 1.000      | 0.303        | 0.013 (0.004)    | 0.727 (0.220)    | 0 (0.000) |     4.60 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           21 |      899 | 2026-09-15 | UPGRADE         | L   | 1.000      | -            | -                | -                | -         |   -11.17 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           20 |      975 | 2026-09-13 | INOX Division   | W   | 1.000      | 0.417        | 0.063 (0.026)    | 1.000 (0.417)    | 1 (1.000) |    18.76 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           19 |      987 | 2026-09-13 | BAKS            | L   | 1.000      | -            | -                | -                | -         |   -15.24 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           18 |      999 | 2026-09-13 | INOX Division   | W   | 1.000      | 0.417        | 0.063 (0.026)    | 1.000 (0.417)    | 1 (1.000) |    19.27 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           17 |     1285 | 2026-09-07 | Nemesis         | L   | 1.000      | -            | -                | -                | -         |    -3.61 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           16 |     1630 | 2026-08-30 | ex-RUSTEC       | W   | 0.960      | 0.337        | 0.025 (0.008)    | 0.778 (0.252)    | 1 (0.960) |    13.18 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           15 |     1657 | 2026-08-30 | UPGRADE         | L   | 0.959      | -            | -                | -                | -         |   -10.66 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           14 |     1691 | 2026-08-29 | ex-RUSTEC       | W   | 0.954      | 0.337        | 0.025 (0.008)    | 0.778 (0.250)    | 1 (0.954) |    13.79 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           13 |     1713 | 2026-08-29 | Color           | L   | 0.952      | -            | -                | -                | -         |   -12.87 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           12 |     1730 | 2026-08-28 | DONSTU          | W   | 0.948      | 0.337        | 0.004 (0.001)    | -                | 1 (0.948) |     3.72 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           11 |     1776 | 2026-08-27 | Black Phoenix   | W   | 0.941      | 0.143        | 0.035 (0.005)    | 1.000 (0.134)    | 0 (0.000) |    12.08 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|           10 |     1932 | 2026-08-24 | Nuclear TigeRES | W   | 0.919      | 0.143        | 0.091 (0.012)    | 0.827 (0.109)    | -         |    22.16 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            9 |     1937 | 2026-08-23 | MAYBE           | W   | 0.914      | -            | -                | -                | -         |     5.37 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            8 |     1939 | 2026-08-23 | Younglings      | W   | 0.914      | -            | -                | -                | -         |     1.71 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            7 |     1966 | 2026-08-22 | Nemiga          | L   | 0.907      | -            | -                | -                | -         |    -2.29 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            6 |     1991 | 2026-08-21 | MAYBE           | L   | 0.900      | -            | -                | -                | -         |   -23.60 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            5 |     2008 | 2026-08-20 | Younglings      | W   | 0.894      | -            | -                | -                | -         |     1.32 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            4 |     2090 | 2026-08-17 | Revise          | L   | 0.874      | -            | -                | -                | -         |   -25.81 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            3 |     2131 | 2026-08-16 | DONSTU          | W   | 0.866      | -            | -                | -                | -         |     3.51 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            2 |     2227 | 2026-08-13 | benched gods    | L   | 0.845      | -            | -                | -                | -         |   -23.66 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |
|            1 |     2251 | 2026-08-12 | DONSTU          | W   | 0.838      | -            | -                | -                | -         |     2.97 | HeCkBNk, Kaide, KusMe, Lack1, YumsaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,869.71)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-04 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-09-16 |      1.000 | $750.00        | $750.00         |
| 2026-08-30 |      0.960 | $4,662.00      | $4,476.78       |
| 2026-08-23 |      0.914 | $1,250.00      | $1,142.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
