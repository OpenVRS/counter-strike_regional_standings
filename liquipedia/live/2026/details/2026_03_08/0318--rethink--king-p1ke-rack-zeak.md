### Roster Details<br />
Team Name: ReThink<br />
Roster: king, p1ke, Rack, zeak<br />
Global Rank: [318](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [186]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  450.9<br />
<br />
Final Rank Value (450.9) = Starting Rank Value (443.7) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.091[<sup>2</sup>](#table1)

The average of these factors is 0.023<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 443.7
- 400 + ( ( 0.023 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 443.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.034
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      564 | 2026-02-21 | Acend         | L   | 1.000      | -            | -                | -                | -         |    -0.72 | chucker, king, p1ke, Rack, zeak |
|            4 |     1551 | 2026-01-23 | HAVU          | L   | 0.906      | -            | -                | -                | -         |    -1.34 | king, p1ke, Rack, TIM, zeak     |
|            3 |     1557 | 2026-01-23 | Metizport     | L   | 0.906      | -            | -                | -                | -         |    -0.88 | king, p1ke, Rack, TIM, zeak     |
|            2 |     1563 | 2026-01-23 | Flying Angels | W   | 0.906      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.906) |    12.17 | king, p1ke, Rack, TIM, zeak     |
|            1 |     3309 | 2025-11-01 | Home          | L   | 0.352      | -            | -                | -                | -         |    -2.01 | king, lindeen, p1ke, Rack, zeak |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
