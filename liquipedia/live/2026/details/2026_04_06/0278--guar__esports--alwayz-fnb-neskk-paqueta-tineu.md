### Roster Details<br />
Team Name: Guará eSports<br />
Roster: alwayz, fnb, neskk, paqueta, Tineu<br />
Global Rank: [278](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [70]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  599.7<br />
<br />
Final Rank Value (599.7) = Starting Rank Value (536.6) + Head To Head Adjustments (63.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.249[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 536.6
- 400 + ( ( 0.070 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 536.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.122
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      652 | 2026-03-23 | UNO MILLE                | L   | 1.000      | -            | -                | -                | -         |    -7.50 | alwayz, fnb, neskk, paqueta, Tineu |
|            8 |      723 | 2026-03-22 | Atrix Esports            | W   | 1.000      | 0.363        | 0.015 (0.005)    | 0.050 (0.018)    | 0 (0.000) |    22.29 | alwayz, fnb, neskk, paqueta, Tineu |
|            7 |      770 | 2026-03-21 | Vasco eSports            | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.272 (0.099)    | 0 (0.000) |    22.42 | alwayz, fnb, neskk, paqueta, Tineu |
|            6 |      790 | 2026-03-21 | UNO MILLE                | L   | 1.000      | -            | -                | -                | -         |    -7.46 | alwayz, fnb, neskk, paqueta, Tineu |
|            5 |      830 | 2026-03-20 | ShindeN                  | L   | 1.000      | -            | -                | -                | -         |    -0.62 | alwayz, fnb, neskk, paqueta, Tineu |
|            4 |      885 | 2026-03-19 | Metanoia Wolves          | W   | 1.000      | 0.371        | 0.003 (0.001)    | 0.158 (0.059)    | 0 (0.000) |    21.45 | alwayz, fnb, neskk, paqueta, Tineu |
|            3 |      965 | 2026-03-17 | Isurus                   | L   | 1.000      | -            | -                | -                | -         |    -2.20 | alwayz, fnb, neskk, paqueta, Tineu |
|            2 |     1034 | 2026-03-16 | Players (Brazilian team) | L   | 1.000      | -            | -                | -                | -         |   -12.18 | alwayz, fnb, neskk, paqueta, Tineu |
|            1 |     1164 | 2026-03-13 | FOLHA AMARELA            | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.356 (0.132)    | 0 (0.000) |    26.92 | alwayz, fnb, neskk, paqueta, Tineu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
