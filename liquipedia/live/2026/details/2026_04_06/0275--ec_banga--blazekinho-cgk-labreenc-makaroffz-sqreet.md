### Roster Details<br />
Team Name: EC BANGA<br />
Roster: blazekinho, cgk, Labreenc, makaroffz, sqreet<br />
Global Rank: [275](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [175]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  600.7<br />
<br />
Final Rank Value (600.7) = Starting Rank Value (578.9) + Head To Head Adjustments (21.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.117[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 578.9
- 400 + ( ( 0.091 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 578.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.036
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2020 | 2026-02-24 | FUZOS            | L   | 0.925      | -            | -                | -                | -         |    -4.46 | blazekinho, danss, Labreenc, m1kketye, sqreet |
|            5 |     3656 | 2026-01-04 | MOUZ NXT         | L   | 0.587      | -            | -                | -                | -         |    -0.61 | blazekinho, cgk, Labreenc, makaroffz, sqreet  |
|            4 |     3659 | 2026-01-04 | Hypewrld         | L   | 0.587      | -            | -                | -                | -         |    -1.63 | blazekinho, cgk, Labreenc, makaroffz, sqreet  |
|            3 |     3663 | 2026-01-04 | SemperFi Esports | W   | 0.587      | 0.314        | 0.023 (0.004)    | 0.443 (0.082)    | 1 (0.587) |    18.04 | blazekinho, cgk, Labreenc, makaroffz, sqreet  |
|            2 |     3667 | 2026-01-04 | CSDIILIT         | W   | 0.586      | 0.314        | 0.000 (0.000)    | 0.634 (0.117)    | 1 (0.586) |    12.18 | blazekinho, cgk, Labreenc, makaroffz, sqreet  |
|            1 |     3670 | 2026-01-04 | ALGO Esports     | L   | 0.586      | -            | -                | -                | -         |    -1.71 | blazekinho, cgk, Labreenc, makaroffz, sqreet  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
