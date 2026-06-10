### Roster Details<br />
Team Name: ReThink<br />
Roster: chucker, king, p1ke, Rack, zeak<br />
Global Rank: [328](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [203]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  501.2<br />
<br />
Final Rank Value (501.2) = Starting Rank Value (504.0) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.030[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 504.0
- 400 + ( ( 0.054 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 504.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.010
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2345 | 2026-03-31 | NEW VISION       | L   | 0.740      | -            | -                | -                | -         |    -4.13 | chucker, hechtikal, king, Rack, zeak |
|            7 |     2499 | 2026-03-29 | Ex-Zero Tenacity | L   | 0.727      | -            | -                | -                | -         |    -2.40 | chucker, king, p1ke, Rack, zeak      |
|            6 |     2704 | 2026-03-26 | Young Ninjas     | L   | 0.706      | -            | -                | -                | -         |    -2.50 | chucker, king, p1ke, Rack, zeak      |
|            5 |     2717 | 2026-03-26 | Alliance         | L   | 0.705      | -            | -                | -                | -         |    -0.19 | chucker, king, p1ke, Rack, zeak      |
|            4 |     4400 | 2026-02-21 | Acend            | L   | 0.485      | -            | -                | -                | -         |    -0.20 | chucker, king, p1ke, Rack, zeak      |
|            3 |     5444 | 2026-01-23 | HAVU             | L   | 0.294      | -            | -                | -                | -         |    -0.66 | king, p1ke, Rack, TIM, zeak          |
|            2 |     5450 | 2026-01-23 | Metizport        | L   | 0.294      | -            | -                | -                | -         |    -0.52 | king, p1ke, Rack, TIM, zeak          |
|            1 |     5456 | 2026-01-23 | Entropy Gaming   | W   | 0.294      | 0.333        | 0.004 (0.000)    | 0.148 (0.015)    | 1 (0.294) |     7.81 | king, p1ke, Rack, TIM, zeak          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
