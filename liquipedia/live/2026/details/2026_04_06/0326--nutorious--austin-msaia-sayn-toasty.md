### Roster Details<br />
Team Name: NuTorious<br />
Roster: Austin, Msaia, sayN, Toasty<br />
Global Rank: [326](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [93]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  501.3<br />
<br />
Final Rank Value (501.3) = Starting Rank Value (498.3) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.3
- 400 + ( ( 0.050 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 498.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.061
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      401 | 2026-03-28 | Life's A Game                    | L   | 1.000      | -            | -                | -                | -         |    -2.23 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            5 |      418 | 2026-03-28 | Demolition (North American team) | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.031 (0.011)    | 1 (1.000) |    13.82 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            4 |      438 | 2026-03-28 | BOSS                             | L   | 1.000      | -            | -                | -                | -         |    -2.49 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            3 |      450 | 2026-03-28 | Full House Gaming                | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    11.77 | Austin, Fruitcupx, Msaia, sayN, Toasty |
|            2 |      776 | 2026-03-21 | Reign Above                      | L   | 1.000      | -            | -                | -                | -         |   -11.54 | Austin, Msaia, sayN, Toasty, tylert69  |
|            1 |      833 | 2026-03-20 | Zomblers                         | L   | 1.000      | -            | -                | -                | -         |    -6.38 | Austin, Msaia, sayN, Toasty, tylert69  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
