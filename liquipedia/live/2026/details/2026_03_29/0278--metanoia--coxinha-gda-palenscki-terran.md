### Roster Details<br />
Team Name: Metanoia<br />
Roster: coxinha, GdA, palenscki, terran<br />
Global Rank: [278](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [70]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  598.0<br />
<br />
Final Rank Value (598.0) = Starting Rank Value (583.6) + Head To Head Adjustments (14.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.075[<sup>2</sup>](#table1)

The average of these factors is 0.095<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 583.6
- 400 + ( ( 0.095 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 583.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.024
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1139 | 2026-03-04 | ShindeN          | L   | 1.000      | -            | -                | -                | -         |    -1.42 | coxinha, GdA, Kaiserzy, palenscki, terran |
|            4 |     1158 | 2026-03-04 | Imperial Esports | L   | 1.000      | -            | -                | -                | -         |    -1.07 | coxinha, GdA, Kaiserzy, palenscki, terran |
|            3 |     2776 | 2026-01-23 | Sharks Esports   | L   | 0.764      | -            | -                | -                | -         |    -0.42 | coxinha, GdA, palenscki, spy1337, terran  |
|            2 |     2845 | 2026-01-21 | Game Hunters     | L   | 0.753      | -            | -                | -                | -         |    -6.09 | coxinha, GdA, palenscki, spy1337, terran  |
|            1 |     2850 | 2026-01-21 | Sharks Esports   | W   | 0.752      | 0.384        | 0.110 (0.032)    | 0.601 (0.174)    | 1 (0.752) |    23.35 | coxinha, GdA, palenscki, spy1337, terran  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
