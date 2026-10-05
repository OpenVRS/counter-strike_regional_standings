### Roster Details<br />
Team Name: aimclub<br />
Roster: Ed1m, ERSIN, RoberttMP, XELLOW, zewts<br />
Global Rank: [336](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [223]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  504.1<br />
<br />
Final Rank Value (504.1) = Starting Rank Value (499.7) + Head To Head Adjustments (4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 499.7
- 400 + ( ( 0.050 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 499.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     5150 | 2026-04-26 | BASEMENT BOYS  | L   | 0.121      | -            | -                | -                | -         |    -0.12 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            9 |     5207 | 2026-04-25 | megoshort      | W   | 0.115      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            8 |     5253 | 2026-04-25 | ex-RUSTEC      | L   | 0.113      | -            | -                | -                | -         |    -0.64 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            7 |     5264 | 2026-04-25 | EAC            | L   | 0.112      | -            | -                | -                | -         |    -0.13 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            6 |     5299 | 2026-04-24 | BASEMENT BOYS  | W   | 0.107      | 0.384        | 0.020 (0.001)    | 0.735 (0.030)    | 0 (0.000) |     3.26 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            5 |     5328 | 2026-04-23 | RBLS           | L   | 0.101      | -            | -                | -                | -         |    -0.66 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            4 |     5355 | 2026-04-22 | yngods         | W   | 0.094      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.08 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            3 |     5372 | 2026-04-22 | BRUTE          | L   | 0.093      | -            | -                | -                | -         |    -0.87 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            2 |     5398 | 2026-04-20 | HEROIC Academy | W   | 0.079      | 0.303        | 0.000 (0.000)    | 0.062 (0.001)    | 0 (0.000) |     1.31 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |
|            1 |     5416 | 2026-04-19 | INOX Division  | L   | 0.073      | -            | -                | -                | -         |    -0.12 | Ed1m, ERSIN, RoberttMP, XELLOW, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
