### Roster Details<br />
Team Name: Strael-Bora<br />
Roster: 5-Star, maddeN, newhope<br />
Global Rank: [336](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [196]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  468.7<br />
<br />
Final Rank Value (468.7) = Starting Rank Value (450.1) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.026<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 450.1
- 400 + ( ( 0.026 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 450.1


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


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      336 | 2026-03-29 | HAVU          | L   | 1.000      | -            | -                | -                | -         |    -1.67 | 5-Star, Cher1on, Heroic, maddeN, newhope |
|            4 |      351 | 2026-03-29 | SINQU Esports | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.067 (0.024)    | 1 (1.000) |    21.46 | 5-Star, Cher1on, Heroic, maddeN, newhope |
|            3 |      366 | 2026-03-29 | Sashi Esport  | L   | 1.000      | -            | -                | -                | -         |    -0.55 | 5-Star, Cher1on, Heroic, maddeN, newhope |
|            2 |     4421 | 2025-11-20 | Illwill       | L   | 0.286      | -            | -                | -                | -         |    -0.04 | 5-Star, LUXBRUUU, maddeN, newhope, Spiri |
|            1 |     4440 | 2025-11-20 | GenOne        | L   | 0.285      | -            | -                | -                | -         |    -0.57 | 5-Star, LUXBRUUU, maddeN, newhope, Spiri |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
