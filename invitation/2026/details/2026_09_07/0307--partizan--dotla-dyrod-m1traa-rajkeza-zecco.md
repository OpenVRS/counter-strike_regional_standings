### Roster Details<br />
Team Name: Partizan<br />
Roster: DotlA, Dyrod, m1traa, rajkeza, zecco<br />
Global Rank: [307](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [200]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  584.3<br />
<br />
Final Rank Value (584.3) = Starting Rank Value (574.8) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 574.8
- 400 + ( ( 0.092 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 574.8


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
|            6 |      972 | 2026-08-08 | Sashi           | L   | 0.991      | -            | -                | -                | -         |    -0.85 | DotlA, Dyrod, m1traa, rajkeza, zecco |
|            5 |      980 | 2026-08-08 | Orion Wanderers | W   | 0.991      | 0.818        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.991) |     8.16 | DotlA, Dyrod, m1traa, rajkeza, zecco |
|            4 |     1000 | 2026-08-07 | FOKUS           | L   | 0.986      | -            | -                | -                | -         |    -1.00 | DotlA, Dyrod, m1traa, rajkeza, zecco |
|            3 |     4970 | 2026-03-29 | Inner Circle    | L   | 0.113      | -            | -                | -                | -         |    -0.02 | DotlA, Dyrod, m1traa, rajkeza, zecco |
|            2 |     5018 | 2026-03-29 | BASEMENT BOYS   | L   | 0.112      | -            | -                | -                | -         |    -0.20 | DotlA, Dyrod, m1traa, rajkeza, zecco |
|            1 |     5034 | 2026-03-29 | Inner Circle    | W   | 0.111      | 0.354        | 0.179 (0.007)    | 0.553 (0.022)    | 1 (0.111) |     3.47 | DotlA, Dyrod, m1traa, rajkeza, zecco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
