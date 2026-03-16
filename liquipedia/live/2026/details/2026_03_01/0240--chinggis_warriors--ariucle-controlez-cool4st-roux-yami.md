### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: ariucle, controlez, cool4st, ROUX, yAmi<br />
Global Rank: [240](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_01.md)<br />
Regional Rank: [32]( ../../standings_asia_2026_03_01.md)<br />
<br />
Final Rank Value:  623.9<br />
<br />
Final Rank Value (623.9) = Starting Rank Value (624.0) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.002[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 624.0
- 400 + ( ( 0.118 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 624.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.020
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     4030 | 2025-10-06 | DEPO                       | L   | 0.219      | -            | -                | -                | -         |    -2.03 | ariucle, controlez, cool4st, ROUX, yAmi |
|           13 |     4092 | 2025-10-05 | True Thunder               | W   | 0.212      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.47 | ariucle, controlez, cool4st, ROUX, yAmi |
|           12 |     4372 | 2025-09-28 | The QUBE Esports           | L   | 0.165      | -            | -                | -                | -         |    -2.39 | ariucle, controlez, cool4st, ROUX, yAmi |
|           11 |     4386 | 2025-09-27 | Paranoid (Mongolian team)  | L   | 0.163      | -            | -                | -                | -         |    -2.74 | ariucle, controlez, cool4st, ROUX, yAmi |
|           10 |     4637 | 2025-09-20 | Rare Atom                  | L   | 0.113      | -            | -                | -                | -         |    -0.48 | ariucle, controlez, cool4st, ROUX, yAmi |
|            9 |     4705 | 2025-09-18 | Rare Atom                  | W   | 0.099      | 0.333        | 0.049 (0.002)    | 0.280 (0.009)    | 0 (0.000) |     2.71 | ariucle, controlez, cool4st, ROUX, yAmi |
|            8 |     4847 | 2025-09-14 | The Huns Esports           | L   | 0.071      | -            | -                | -                | -         |    -0.13 | ariucle, controlez, cool4st, ROUX, yAmi |
|            7 |     4896 | 2025-09-13 | Nomads (Mongolian team)    | W   | 0.065      | 0.143        | 0.002 (0.000)    | 0.048 (0.000)    | 0 (0.000) |     1.01 | ariucle, controlez, cool4st, ROUX, yAmi |
|            6 |     4982 | 2025-09-11 | Last Bullet (Chinese team) | W   | 0.052      | 0.333        | 0.008 (0.000)    | 0.171 (0.003)    | 0 (0.000) |     1.04 | ariucle, controlez, cool4st, ROUX, yAmi |
|            5 |     5081 | 2025-09-09 | Just Swing (Chinese team)  | W   | 0.039      | 0.333        | 0.003 (0.000)    | 0.082 (0.001)    | 0 (0.000) |     0.71 | ariucle, controlez, cool4st, ROUX, yAmi |
|            4 |     5131 | 2025-09-08 | MAXXPOWER                  | W   | 0.033      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.23 | ariucle, controlez, cool4st, ROUX, yAmi |
|            3 |     5199 | 2025-09-05 | The Huns Esports           | L   | 0.017      | -            | -                | -                | -         |    -0.03 | ariucle, controlez, cool4st, ROUX, yAmi |
|            2 |     5218 | 2025-09-05 | The Huns Esports           | W   | 0.011      | 0.333        | 0.022 (0.000)    | 0.425 (0.002)    | 1 (0.011) |     0.33 | ariucle, controlez, cool4st, ROUX, yAmi |
|            1 |     5221 | 2025-09-04 | Nomads (Mongolian team)    | W   | 0.009      | 0.333        | 0.002 (0.000)    | 0.048 (0.000)    | 1 (0.009) |     0.15 | ariucle, controlez, cool4st, ROUX, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($448.88)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-28 |      0.166 | $750.00        | $124.17         |
| 2025-09-20 |      0.113 | $2,500.00      | $281.25         |
| 2025-09-05 |      0.017 | $2,500.00      | $43.46          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
