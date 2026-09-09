### Roster Details<br />
Team Name: EMPIRE<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [278](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [65]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  621.5<br />
<br />
Final Rank Value (621.5) = Starting Rank Value (625.8) + Head To Head Adjustments (-4.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.197[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.045[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 625.8
- 400 + ( ( 0.119 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 625.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3728 | 2026-04-27 | Wanted Goons   | L   | 0.309      | -            | -                | -                | -         |    -3.92 | BAGEL, C0C0, KmZ, no1nx, Shawta |
|           18 |     3778 | 2026-04-26 | ex-Aether      | L   | 0.302      | -            | -                | -                | -         |    -4.69 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           17 |     3848 | 2026-04-25 | LAG            | L   | 0.295      | -            | -                | -                | -         |    -0.98 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           16 |     3852 | 2026-04-25 | Kodex          | W   | 0.294      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.294) |     2.01 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           15 |     3868 | 2026-04-25 | LAG            | L   | 0.294      | -            | -                | -                | -         |    -0.96 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           14 |     4123 | 2026-04-15 | regain         | L   | 0.228      | -            | -                | -                | -         |    -2.32 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           13 |     4178 | 2026-04-12 | Aether         | W   | 0.209      | 0.333        | 0.001 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     3.36 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           12 |     4256 | 2026-04-09 | Clockwork      | W   | 0.189      | 0.333        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     1.31 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           11 |     4312 | 2026-04-07 | FarmVille      | L   | 0.175      | -            | -                | -                | -         |    -2.63 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           10 |     4612 | 2026-04-02 | Zomblers       | L   | 0.142      | -            | -                | -                | -         |    -2.01 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            9 |     4714 | 2026-04-01 | LAG            | W   | 0.135      | 0.333        | 0.016 (0.001)    | 0.357 (0.016)    | 0 (0.000) |     3.88 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            8 |     5046 | 2026-03-28 | LAG            | L   | 0.108      | -            | -                | -                | -         |    -0.30 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            7 |     5062 | 2026-03-28 | Wanted Goons   | L   | 0.107      | -            | -                | -                | -         |    -1.38 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            6 |     5077 | 2026-03-28 | LAG            | L   | 0.106      | -            | -                | -                | -         |    -0.29 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            5 |     5092 | 2026-03-28 | Wanted Goons   | W   | 0.106      | 0.354        | 0.000 (0.000)    | 0.082 (0.003)    | 1 (0.106) |     1.98 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            4 |     5127 | 2026-03-27 | ClayMakers     | W   | 0.101      | 0.398        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.06 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            3 |     5602 | 2026-03-18 | Zomblers       | W   | 0.043      | 0.143        | 0.006 (0.000)    | 0.208 (0.001)    | 0 (0.000) |     0.76 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            2 |     5693 | 2026-03-16 | Wanted Goons   | W   | 0.029      | 0.143        | 0.000 (0.000)    | 0.082 (0.000)    | 0 (0.000) |     0.55 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            1 |     5778 | 2026-03-14 | insane players | W   | 0.015      | 0.143        | 0.003 (0.000)    | 0.065 (0.000)    | 0 (0.000) |     0.26 | BAGEL, C0C0, KmZ, no1nx, twigs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($227.36)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.114 | $2,000.00      | $227.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
