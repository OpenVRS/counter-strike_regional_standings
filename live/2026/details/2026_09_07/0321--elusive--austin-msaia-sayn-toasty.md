### Roster Details<br />
Team Name: Elusive<br />
Roster: Austin, Msaia, sayN, Toasty<br />
Global Rank: [321](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [80]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  554.7<br />
<br />
Final Rank Value (554.7) = Starting Rank Value (523.9) + Head To Head Adjustments (30.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.9
- 400 + ( ( 0.065 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 523.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      345 | 2026-08-28 | Zomblers      | L   | 1.000      | -            | -                | -                | -         |    -9.89 | Austin, FRIZZY, Jonji, Msaia, sayN     |
|            9 |      391 | 2026-08-27 | NuTorious     | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.196 (0.071)    | 0 (0.000) |    22.85 | Austin, FRIZZY, Jonji, Msaia, sayN     |
|            8 |      429 | 2026-08-26 | Shimmer       | W   | 1.000      | 0.363        | 0.009 (0.003)    | 0.042 (0.015)    | 0 (0.000) |    20.41 | Austin, FRIZZY, Jonji, Msaia, sayN     |
|            7 |      482 | 2026-08-25 | Marsborne     | L   | 1.000      | -            | -                | -                | -         |    -3.37 | Austin, FRIZZY, Jonji, Msaia, sayN     |
|            6 |     5014 | 2026-03-28 | LAG           | L   | 0.114      | -            | -                | -                | -         |    -0.18 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            5 |     5035 | 2026-03-28 | Demolition    | W   | 0.112      | 0.354        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.112) |     1.55 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            4 |     5051 | 2026-03-28 | BOSS          | L   | 0.112      | -            | -                | -                | -         |    -1.19 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            3 |     5067 | 2026-03-28 | Festina Lente | W   | 0.111      | 0.354        | 0.001 (0.000)    | 0.048 (0.002)    | 1 (0.111) |     2.15 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            2 |     5409 | 2026-03-21 | Reign Above   | L   | 0.068      | -            | -                | -                | -         |    -0.89 | Austin, Msaia, sayN, Toasty, Tylert69  |
|            1 |     5474 | 2026-03-20 | Zomblers      | L   | 0.061      | -            | -                | -                | -         |    -0.59 | Austin, Msaia, sayN, Toasty, Tylert69  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
