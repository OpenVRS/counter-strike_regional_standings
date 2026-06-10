### Roster Details<br />
Team Name: JUMBO TEAM<br />
Roster: matusik, reNIK, Snoob<br />
Global Rank: [278](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [177]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  585.7<br />
<br />
Final Rank Value (585.7) = Starting Rank Value (563.4) + Head To Head Adjustments (22.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.114[<sup>2</sup>](#table1)

The average of these factors is 0.085<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 563.4
- 400 + ( ( 0.085 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 563.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.037
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2205 | 2026-04-02 | 1w Team  | L   | 0.752      | -            | -                | -                | -         |    -0.54 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            5 |     2209 | 2026-04-02 | NOVAQ    | W   | 0.751      | 0.435        | 0.008 (0.003)    | 0.240 (0.078)    | 1 (0.751) |    20.58 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            4 |     2220 | 2026-04-01 | 1w Team  | L   | 0.751      | -            | -                | -                | -         |    -0.46 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            3 |     5181 | 2026-02-01 | 33       | L   | 0.354      | -            | -                | -                | -         |    -0.25 | DeDe, matusik, Proper, reNIK, Snoob   |
|            2 |     5187 | 2026-02-01 | GLuck    | W   | 0.354      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.354) |     3.17 | DeDe, matusik, Proper, reNIK, Snoob   |
|            1 |     5203 | 2026-02-01 | 33       | L   | 0.352      | -            | -                | -                | -         |    -0.24 | DeDe, matusik, Proper, reNIK, Snoob   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
