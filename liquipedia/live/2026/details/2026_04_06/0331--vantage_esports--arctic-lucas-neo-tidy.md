### Roster Details<br />
Team Name: Vantage Esports<br />
Roster: Arctic, lucas, neo, tidy<br />
Global Rank: [331](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  487.2<br />
<br />
Final Rank Value (487.2) = Starting Rank Value (483.8) + Head To Head Adjustments (3.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.8
- 400 + ( ( 0.043 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 483.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      724 | 2026-03-23 | MARKnLARRY                       | L   | 1.000      | -            | -                | -                | -         |   -14.68 | Arctic, BaN4na, lucas, neo, tidy  |
|            8 |      824 | 2026-03-21 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |    -2.13 | Arctic, BaN4na, lucas, neo, tidy  |
|            7 |     2208 | 2026-02-21 | Ding Cuts                        | W   | 0.906      | 0.318        | 0.000 (0.000)    | 0.051 (0.015)    | 0 (0.000) |    13.77 | Arctic, lucas, motion, neo, Oath  |
|            6 |     2307 | 2026-02-19 | Team Abyssal                     | L   | 0.892      | -            | -                | -                | -         |    -7.91 | lucas, neo, Oath, sunshinez, tidy |
|            5 |     2372 | 2026-02-18 | Ding Cuts                        | W   | 0.885      | 0.318        | 0.000 (0.000)    | 0.051 (0.014)    | 0 (0.000) |    13.51 | lucas, neo, Oath, sunshinez, tidy |
|            4 |     4355 | 2025-11-23 | Arcade Esports (Australian team) | L   | 0.306      | -            | -                | -                | -         |    -0.78 | Arctic, Kiyo, lzj, neo, tidy      |
|            3 |     4422 | 2025-11-21 | THUNDERdOWNUNDER                 | L   | 0.292      | -            | -                | -                | -         |    -0.10 | Arctic, Kiyo, lzj, neo, tidy      |
|            2 |     5300 | 2025-10-25 | Rooster                          | L   | 0.112      | -            | -                | -                | -         |    -1.11 | Arctic, Kiyo, motion, neo, tidy   |
|            1 |     5413 | 2025-10-23 | Arcade Esports (Australian team) | W   | 0.098      | 0.278        | 0.004 (0.000)    | 0.279 (0.008)    | 0 (0.000) |     2.87 | Arctic, Kiyo, motion, neo, tidy   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
