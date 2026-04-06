### Roster Details<br />
Team Name: JUMBO TEAM<br />
Roster: matusik, reNIK, Snoob<br />
Global Rank: [246](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_05.md)<br />
Regional Rank: [157]( ../../standings_europe_2026_04_05.md)<br />
<br />
Final Rank Value:  651.3<br />
<br />
Final Rank Value (651.3) = Starting Rank Value (619.8) + Head To Head Adjustments (31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.112<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 619.8
- 400 + ( ( 0.112 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 619.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.054
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      146 | 2026-04-02 | 1w Team  | L   | 1.000      | -            | -                | -                | -         |    -0.72 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            6 |      150 | 2026-04-02 | NOVAQ    | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.524 (0.228)    | 1 (1.000) |    28.42 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            5 |      159 | 2026-04-01 | 1w Team  | L   | 1.000      | -            | -                | -                | -         |    -0.59 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            4 |     2967 | 2026-02-01 | 33       | L   | 0.774      | -            | -                | -                | -         |    -0.43 | DeDe, matusik, Proper, reNIK, Snoob   |
|            3 |     2973 | 2026-02-01 | GLuck    | W   | 0.774      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.774) |     5.42 | DeDe, matusik, Proper, reNIK, Snoob   |
|            2 |     2988 | 2026-02-01 | 33       | L   | 0.772      | -            | -                | -                | -         |    -0.39 | DeDe, matusik, Proper, reNIK, Snoob   |
|            1 |     5413 | 2025-10-21 | NOVAQ    | L   | 0.085      | -            | -                | -                | -         |    -0.17 | DeDe, fiction, matusik, reNIK, Snoob  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
