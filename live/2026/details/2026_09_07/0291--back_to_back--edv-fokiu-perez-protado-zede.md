### Roster Details<br />
Team Name: Back to Back<br />
Roster: edv, fokiu, perez, protado, zede<br />
Global Rank: [291](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [69]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  602.5<br />
<br />
Final Rank Value (602.5) = Starting Rank Value (599.0) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.219[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.0
- 400 + ( ( 0.105 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 599.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5182 | 2026-03-25 | MEIA NOITE   | L   | 0.094      | -            | -                | -                | -         |    -1.08 | edv, fokiu, perez, protado, RMN  |
|            7 |     5193 | 2026-03-25 | LP           | L   | 0.092      | -            | -                | -                | -         |    -0.39 | edv, fokiu, perez, protado, zede |
|            6 |     5253 | 2026-03-24 | Keyd Stars   | W   | 0.085      | 0.371        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     1.31 | edv, fokiu, perez, protado, zede |
|            5 |     5300 | 2026-03-23 | Yawara       | W   | 0.080      | 0.371        | 0.024 (0.001)    | 0.474 (0.014)    | 0 (0.000) |     1.90 | edv, fokiu, perez, protado, zede |
|            4 |     5487 | 2026-03-20 | Crashers     | W   | 0.060      | 0.371        | 0.001 (0.000)    | 0.061 (0.001)    | 0 (0.000) |     0.99 | edv, fokiu, perez, protado, zede |
|            3 |     5587 | 2026-03-18 | Pugdesonesto | W   | 0.045      | 0.371        | 0.000 (0.000)    | 0.012 (0.000)    | 0 (0.000) |     0.73 | edv, fokiu, perez, protado, zede |
|            2 |     5682 | 2026-03-16 | LP           | L   | 0.032      | -            | -                | -                | -         |    -0.13 | edv, fokiu, perez, protado, zede |
|            1 |     5840 | 2026-03-13 | Isurus       | W   | 0.009      | 0.371        | 0.026 (0.000)    | 0.703 (0.002)    | 0 (0.000) |     0.22 | edv, fokiu, perez, protado, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($139.69)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-25 |      0.093 | $1,500.00      | $139.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
