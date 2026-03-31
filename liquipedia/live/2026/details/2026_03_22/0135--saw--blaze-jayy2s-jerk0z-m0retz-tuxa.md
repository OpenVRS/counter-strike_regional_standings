### Roster Details<br />
Team Name: SAW<br />
Roster: blaze, Jayy2s, jERK0z, m0retz, tuxa<br />
Global Rank: [135](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [97]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  903.5<br />
<br />
Final Rank Value (903.5) = Starting Rank Value (888.2) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.392[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.2
- 400 + ( ( 0.245 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 888.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.116
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      236 | 2026-03-12 | Dziuseppe               | W   | 1.000      | 0.349        | 0.000 (0.000)    | 0.021 (0.007)    | 1 (1.000) |     5.64 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|           14 |      239 | 2026-03-12 | Ninjas in Pyjamas       | L   | 1.000      | -            | -                | -                | -         |    -2.15 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|           13 |      240 | 2026-03-12 | Team Voca               | L   | 1.000      | -            | -                | -                | -         |    -3.66 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|           12 |      251 | 2026-03-12 | EYEBALLERS              | L   | 1.000      | -            | -                | -                | -         |    -3.99 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|           11 |      847 | 2026-02-28 | Rebels Gaming           | L   | 1.000      | -            | -                | -                | -         |    -8.57 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|           10 |     1276 | 2026-02-20 | Fnatic                  | L   | 0.997      | -            | -                | -                | -         |    -4.83 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|            9 |     1281 | 2026-02-20 | Oramond                 | W   | 0.997      | 0.341        | 0.068 (0.023)    | 0.672 (0.229)    | 1 (0.997) |    25.25 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|            8 |     1287 | 2026-02-20 | BetBoom Team            | L   | 0.996      | -            | -                | -                | -         |    -1.41 | blaze, Jayy2s, jERK0z, m0retz, tuxa |
|            7 |     2557 | 2026-01-16 | Rebels Gaming           | L   | 0.764      | -            | -                | -                | -         |    -4.10 | blaze, jERK0z, m0retz, SYDOX, tuxa  |
|            6 |     2577 | 2026-01-16 | MINLATE (European team) | L   | 0.763      | -            | -                | -                | -         |    -9.43 | blaze, jERK0z, m0retz, SYDOX, tuxa  |
|            5 |     2578 | 2026-01-16 | Rebels Gaming           | W   | 0.763      | 0.341        | 0.012 (0.003)    | 0.367 (0.095)    | 1 (0.763) |    20.17 | blaze, jERK0z, m0retz, SYDOX, tuxa  |
|            4 |     2807 | 2025-12-21 | Gentle Mates            | L   | 0.589      | -            | -                | -                | -         |    -0.97 | blaze, jERK0z, m0retz, rafity, tuxa |
|            3 |     2849 | 2025-12-19 | CALAOSCORNOS            | W   | 0.577      | 0.309        | 0.000 (0.000)    | 0.020 (0.004)    | 1 (0.577) |     2.16 | blaze, jERK0z, m0retz, rafity, tuxa |
|            2 |     2853 | 2025-12-19 | BC.Game Esports         | L   | 0.576      | -            | -                | -                | -         |    -0.88 | blaze, jERK0z, m0retz, rafity, tuxa |
|            1 |     2858 | 2025-12-19 | CALAOSCORNOS            | W   | 0.576      | 0.309        | 0.000 (0.000)    | 0.020 (0.004)    | 1 (0.576) |     2.13 | blaze, jERK0z, m0retz, rafity, tuxa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($886.31)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $886.31        | $886.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
