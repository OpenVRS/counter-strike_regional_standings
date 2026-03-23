### Roster Details<br />
Team Name: ReThink<br />
Roster: king, p1ke, Rack, zeak<br />
Global Rank: [327](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [192]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  449.5<br />
<br />
Final Rank Value (449.5) = Starting Rank Value (442.1) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.021<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 442.1
- 400 + ( ( 0.021 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 442.1


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
|            5 |     1061 | 2026-02-21 | Acend         | L   | 1.000      | -            | -                | -                | -         |    -0.64 | chucker, king, p1ke, Rack, zeak |
|            4 |     2100 | 2026-01-23 | HAVU          | L   | 0.860      | -            | -                | -                | -         |    -1.18 | king, p1ke, Rack, TIM, zeak     |
|            3 |     2106 | 2026-01-23 | Metizport     | L   | 0.860      | -            | -                | -                | -         |    -0.59 | king, p1ke, Rack, TIM, zeak     |
|            2 |     2112 | 2026-01-23 | Flying Angels | W   | 0.859      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.859) |    11.64 | king, p1ke, Rack, TIM, zeak     |
|            1 |     3882 | 2025-11-01 | Home          | L   | 0.305      | -            | -                | -                | -         |    -1.78 | king, lindeen, p1ke, Rack, zeak |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
