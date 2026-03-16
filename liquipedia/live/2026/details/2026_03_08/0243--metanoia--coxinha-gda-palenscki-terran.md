### Roster Details<br />
Team Name: Metanoia<br />
Roster: coxinha, GdA, palenscki, terran<br />
Global Rank: [243](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [57]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  625.2<br />
<br />
Final Rank Value (625.2) = Starting Rank Value (609.1) + Head To Head Adjustments (16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.090[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 609.1
- 400 + ( ( 0.109 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 609.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       85 | 2026-03-04 | ShindeN          | L   | 1.000      | -            | -                | -                | -         |    -1.83 | coxinha, GdA, Kaiserzy, palenscki, terran |
|            4 |       96 | 2026-03-04 | Imperial Esports | L   | 1.000      | -            | -                | -                | -         |    -1.00 | coxinha, GdA, Kaiserzy, palenscki, terran |
|            3 |     1570 | 2026-01-23 | Sharks Esports   | L   | 0.905      | -            | -                | -                | -         |    -0.41 | coxinha, GdA, palenscki, spy1337, terran  |
|            2 |     1638 | 2026-01-21 | Game Hunters     | L   | 0.894      | -            | -                | -                | -         |    -8.53 | coxinha, GdA, palenscki, spy1337, terran  |
|            1 |     1643 | 2026-01-21 | Sharks Esports   | W   | 0.893      | 0.384        | 0.207 (0.071)    | 0.827 (0.284)    | 1 (0.893) |    27.80 | coxinha, GdA, palenscki, spy1337, terran  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
