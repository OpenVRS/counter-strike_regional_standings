### Roster Details<br />
Team Name: Alzon<br />
Roster: balencyy, ntx, s1lent, wallz1k, yeda<br />
Global Rank: [296](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  552.0<br />
<br />
Final Rank Value (552.0) = Starting Rank Value (515.1) + Head To Head Adjustments (36.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.1
- 400 + ( ( 0.060 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 515.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.113
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      918 | 2026-05-07 | Imperial Esports         | L   | 0.988      | -            | -                | -                | -         |    -0.92 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           14 |      939 | 2026-05-06 | Players (Brazilian team) | W   | 0.980      | 0.354        | 0.000 (0.000)    | 0.275 (0.096)    | 0 (0.000) |    20.16 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           13 |      974 | 2026-05-04 | Crashers                 | W   | 0.967      | 0.354        | 0.002 (0.001)    | 0.401 (0.137)    | 0 (0.000) |    21.56 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           12 |     1030 | 2026-05-02 | BESTIA Academy           | L   | 0.954      | -            | -                | -                | -         |    -7.90 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           11 |     1147 | 2026-04-30 | Game Hunters             | W   | 0.939      | 0.354        | 0.001 (0.000)    | 0.366 (0.122)    | 0 (0.000) |    24.66 | balencyy, ntx, s1lent, wallz1k, yeda     |
|           10 |     1239 | 2026-04-28 | Yawara E-Sports          | L   | 0.926      | -            | -                | -                | -         |    -1.73 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            9 |     1487 | 2026-04-23 | Crashers                 | L   | 0.894      | -            | -                | -                | -         |    -5.50 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            8 |     1518 | 2026-04-22 | Legacy                   | L   | 0.890      | -            | -                | -                | -         |    -0.02 | balencyy, ntx, s1lent, wallz1k, yeda     |
|            7 |     3125 | 2026-03-18 | BESTIA Academy           | L   | 0.654      | -            | -                | -                | -         |    -4.47 | balencyy, Ianzin, ntx, wallz1k, yeda     |
|            6 |     3171 | 2026-03-17 | Turma do Pagode          | L   | 0.647      | -            | -                | -                | -         |    -0.45 | balencyy, Ianzin, ntx, wallz1k, yeda     |
|            5 |     4054 | 2026-02-27 | Bad Luck                 | L   | 0.526      | -            | -                | -                | -         |    -8.63 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            4 |     4176 | 2026-02-25 | CPC Curralzinho Esports  | W   | 0.513      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.34 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            3 |     4256 | 2026-02-23 | LargadosyPelados         | L   | 0.500      | -            | -                | -                | -         |    -0.39 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            2 |     4284 | 2026-02-22 | Players (Brazilian team) | L   | 0.495      | -            | -                | -                | -         |    -4.86 | balencyy, busan, Ianzin, wallz1k, yeda   |
|            1 |     5644 | 2026-01-17 | 9z Team                  | L   | 0.255      | -            | -                | -                | -         |    -0.02 | balencyy, Ianzin, Luk1nha, wallz1k, yeda |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
