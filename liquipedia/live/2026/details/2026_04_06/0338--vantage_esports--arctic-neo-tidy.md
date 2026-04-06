### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Arctic, neo, tidy<br />
Global Rank: [338](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_05.md)<br />
Regional Rank: [45]( ../../standings_asia_2026_04_05.md)<br />
<br />
Final Rank Value:  467.5<br />
<br />
Final Rank Value (467.5) = Starting Rank Value (482.3) + Head To Head Adjustments (-14.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.3
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 482.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.003
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      706 | 2026-03-23 | MARKnLARRY                       | L   | 1.000      | -            | -                | -                | -         |   -13.83 | Arctic, BaN4na, lucas222, neo, tidy |
|            5 |      806 | 2026-03-21 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |    -1.91 | Arctic, BaN4na, lucas222, neo, tidy |
|            4 |     4320 | 2025-11-23 | Arcade Esports (Australian team) | L   | 0.305      | -            | -                | -                | -         |    -0.77 | Arctic, Kiyo, lzj, neo, tidy        |
|            3 |     4387 | 2025-11-21 | THUNDERdOWNUNDER                 | L   | 0.292      | -            | -                | -                | -         |    -0.10 | Arctic, Kiyo, lzj, neo, tidy        |
|            2 |     5265 | 2025-10-25 | Rooster                          | L   | 0.111      | -            | -                | -                | -         |    -1.10 | Arctic, Kiyo, motion, neo, tidy     |
|            1 |     5378 | 2025-10-23 | Arcade Esports (Australian team) | W   | 0.098      | 0.278        | 0.004 (0.000)    | 0.279 (0.008)    | 0 (0.000) |     2.85 | Arctic, Kiyo, motion, neo, tidy     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
