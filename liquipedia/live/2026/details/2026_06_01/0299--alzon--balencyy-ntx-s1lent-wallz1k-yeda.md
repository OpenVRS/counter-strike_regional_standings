### Roster Details<br />
Team Name: Alzon<br />
Roster: balencyy, ntx, s1lent, wallz1k, yeda<br />
Global Rank: [299](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  555.2<br />
<br />
Final Rank Value (555.2) = Starting Rank Value (516.7) + Head To Head Adjustments (38.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.061<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 516.7
- 400 + ( ( 0.061 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 516.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.118
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      808 | 2026-05-07 | Imperial Esports         | L   | 1.000      | -            | -                | -                | -         |    -0.82 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           14 |      829 | 2026-05-06 | Players (Brazilian team) | W   | 1.000      | 0.354        | 0.001 (0.000)    | 0.297 (0.105)    | 0 (0.000) |    20.68 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           13 |      864 | 2026-05-04 | Crashers                 | W   | 1.000      | 0.354        | 0.002 (0.001)    | 0.433 (0.153)    | 0 (0.000) |    22.37 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           12 |      920 | 2026-05-02 | BESTIA Academy           | L   | 1.000      | -            | -                | -                | -         |    -8.15 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           11 |     1037 | 2026-04-30 | Game Hunters             | W   | 0.991      | 0.354        | 0.002 (0.001)    | 0.390 (0.137)    | 0 (0.000) |    26.19 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           10 |     1129 | 2026-04-28 | Yawara E-Sports          | L   | 0.978      | -            | -                | -                | -         |    -1.70 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            9 |     1377 | 2026-04-23 | Crashers                 | L   | 0.946      | -            | -                | -                | -         |    -5.61 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            8 |     1408 | 2026-04-22 | Legacy                   | L   | 0.942      | -            | -                | -                | -         |    -0.02 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            7 |     3015 | 2026-03-18 | BESTIA Academy           | L   | 0.706      | -            | -                | -                | -         |    -4.67 | balencyy, Ianzin, ntx, wallz1k, yeda     |
|            6 |     3061 | 2026-03-17 | Turma do Pagode          | L   | 0.700      | -            | -                | -                | -         |    -0.42 | balencyy, Ianzin, ntx, wallz1k, yeda     |
|            5 |     3944 | 2026-02-27 | Bad Luck                 | L   | 0.579      | -            | -                | -                | -         |    -9.44 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            4 |     4066 | 2026-02-25 | CPC Curralzinho Esports  | W   | 0.565      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.82 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            3 |     4146 | 2026-02-23 | LargadosyPelados         | L   | 0.552      | -            | -                | -                | -         |    -0.42 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            2 |     4174 | 2026-02-22 | Players (Brazilian team) | L   | 0.547      | -            | -                | -                | -         |    -5.29 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            1 |     5534 | 2026-01-17 | 9z Team                  | L   | 0.307      | -            | -                | -                | -         |    -0.02 | balencyy, Ianzin, Luk1nha, wallz1k, yeda |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
