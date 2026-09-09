### Roster Details<br />
Team Name: Romania<br />
Roster: Blytz, fNk, fnl, s0und, XELLOW<br />
Global Rank: [329](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [211]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  537.7<br />
<br />
Final Rank Value (537.7) = Starting Rank Value (516.1) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.1
- 400 + ( ( 0.061 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 516.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1592 | 2026-07-19 | ex-Zero Tenacity | W   | 0.858      | 0.143        | 0.031 (0.004)    | 1.000 (0.123)    | 0 (0.000) |    23.35 | fNk, HOLY, lauNX, s0und, XELLOW |
|            8 |     4990 | 2026-03-29 | Inner Circle     | L   | 0.113      | -            | -                | -                | -         |    -0.01 | Blytz, fNk, fnl, s0und, XELLOW  |
|            7 |     5031 | 2026-03-29 | BASEMENT BOYS    | L   | 0.111      | -            | -                | -                | -         |    -0.14 | Blytz, fNk, fnl, s0und, XELLOW  |
|            6 |     5278 | 2026-03-24 | aimclub          | L   | 0.080      | -            | -                | -                | -         |    -1.19 | Blytz, fNk, fnl, s0und, XELLOW  |
|            5 |     5313 | 2026-03-24 | MOUZ NXT         | L   | 0.078      | -            | -                | -                | -         |    -0.83 | Blytz, fNk, fnl, s0und, XELLOW  |
|            4 |     5824 | 2026-03-13 | GRINGOS          | W   | 0.007      | 0.350        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.007) |     0.08 | Blytz, fNk, fnl, s0und, XELLOW  |
|            3 |     5825 | 2026-03-13 | BC.Game          | W   | 0.007      | 0.350        | 0.007 (0.000)    | 0.007 (0.000)    | 1 (0.007) |     0.17 | Blytz, fNk, fnl, s0und, XELLOW  |
|            2 |     5828 | 2026-03-13 | OG               | L   | 0.007      | -            | -                | -                | -         |    -0.01 | Blytz, fNk, fnl, s0und, XELLOW  |
|            1 |     5840 | 2026-03-13 | Alliance         | W   | 0.007      | 0.350        | 0.209 (0.000)    | 0.439 (0.001)    | 1 (0.007) |     0.20 | Blytz, fNk, fnl, s0und, XELLOW  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
