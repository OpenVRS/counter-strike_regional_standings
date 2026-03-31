### Roster Details<br />
Team Name: Zealous<br />
Roster: borb, JAKEY, terrk1s, Yaboduulio<br />
Global Rank: [350](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [100]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  405.5<br />
<br />
Final Rank Value (405.5) = Starting Rank Value (412.5) + Head To Head Adjustments (-7.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.006<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 412.5
- 400 + ( ( 0.006 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 412.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.008
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       32 | 2026-03-28 | Wanted Goons                 | L   | 1.000      | -            | -                | -                | -         |    -7.71 | borb, JAKEY, laea, terrk1s, Yaboduulio |
|            4 |       43 | 2026-03-28 | Life's A Game                | L   | 1.000      | -            | -                | -                | -         |    -1.67 | borb, JAKEY, laea, terrk1s, Yaboduulio |
|            3 |     4235 | 2025-11-08 | FlyQuest RED                 | L   | 0.259      | -            | -                | -                | -         |    -1.51 | borb, JAKEY, leae, terrk1s, Yaboduulio |
|            2 |     4247 | 2025-11-08 | AURA Esports (American team) | W   | 0.258      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.258) |     3.89 | borb, JAKEY, leae, terrk1s, Yaboduulio |
|            1 |     4257 | 2025-11-08 | BC.Game Esports              | L   | 0.257      | -            | -                | -                | -         |    -0.04 | borb, JAKEY, leae, terrk1s, Yaboduulio |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
