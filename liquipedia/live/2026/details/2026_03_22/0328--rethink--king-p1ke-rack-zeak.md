### Roster Details<br />
Team Name: ReThink<br />
Roster: king, p1ke, Rack, zeak<br />
Global Rank: [328](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [192]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  447.9<br />
<br />
Final Rank Value (447.9) = Starting Rank Value (440.5) + Head To Head Adjustments (7.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.081[<sup>2</sup>](#table1)

The average of these factors is 0.020<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 440.5
- 400 + ( ( 0.020 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 440.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.028
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1236 | 2026-02-21 | Acend         | L   | 1.000      | -            | -                | -                | -         |    -0.57 | chucker, king, p1ke, Rack, zeak |
|            4 |     2275 | 2026-01-23 | HAVU          | L   | 0.812      | -            | -                | -                | -         |    -1.08 | king, p1ke, Rack, TIM, zeak     |
|            3 |     2281 | 2026-01-23 | Metizport     | L   | 0.812      | -            | -                | -                | -         |    -0.53 | king, p1ke, Rack, TIM, zeak     |
|            2 |     2287 | 2026-01-23 | Flying Angels | W   | 0.811      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.811) |    11.07 | king, p1ke, Rack, TIM, zeak     |
|            1 |     4057 | 2025-11-01 | Home          | L   | 0.257      | -            | -                | -                | -         |    -1.47 | king, lindeen, p1ke, Rack, zeak |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
