### Roster Details<br />
Team Name: B8 Academy<br />
Roster: k1n, La1roN, r0se, segukawa, sherman<br />
Global Rank: [256](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [172]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  643.5<br />
<br />
Final Rank Value (643.5) = Starting Rank Value (622.5) + Head To Head Adjustments (21.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 622.5
- 400 + ( ( 0.117 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 622.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      890 | 2026-08-09 | LFO 7                | W   | 1.000      | 0.274        | 0.002 (0.000)    | 0.039 (0.011)    | 0 (0.000) |    14.21 | k1n, kloberg, r0se, segukawa, sherman |
|            6 |      899 | 2026-08-09 | winstonblue          | W   | 1.000      | 0.274        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.64 | k1n, kloberg, r0se, segukawa, sherman |
|            5 |     2303 | 2026-06-10 | DONSTU               | L   | 0.606      | -            | -                | -                | -         |    -5.36 | k1n, La1roN, r0se, segukawa, sherman  |
|            4 |     2457 | 2026-06-03 | ReThink              | L   | 0.559      | -            | -                | -                | -         |    -4.87 | k1n, La1roN, r0se, segukawa, sherman  |
|            3 |     2511 | 2026-06-01 | XI                   | W   | 0.545      | 0.143        | 0.001 (0.000)    | 0.079 (0.006)    | 0 (0.000) |     8.39 | k1n, La1roN, r0se, segukawa, sherman  |
|            2 |     5204 | 2026-03-25 | ACROBATS             | L   | 0.092      | -            | -                | -                | -         |    -1.87 | k1n, La1roN, r0se, segukawa, sherman  |
|            1 |     5747 | 2026-03-15 | Inner Circle Academy | L   | 0.022      | -            | -                | -                | -         |    -0.12 | k1n, La1roN, r0se, segukawa, sherman  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,126.47)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-09 |      1.000 | $1,121.00      | $1,121.00       |
| 2026-03-15 |      0.024 | $227.00        | $5.47           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
