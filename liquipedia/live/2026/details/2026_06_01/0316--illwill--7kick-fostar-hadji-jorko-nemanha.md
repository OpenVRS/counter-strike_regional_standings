### Roster Details<br />
Team Name: Illwill<br />
Roster: 7kick, fostar, hAdji, Jorko, nEMANHA<br />
Global Rank: [316](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  530.3<br />
<br />
Final Rank Value (530.3) = Starting Rank Value (522.3) + Head To Head Adjustments (8.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.042[<sup>2</sup>](#table1)

The average of these factors is 0.064<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 522.3
- 400 + ( ( 0.064 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 522.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.014
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     5891 | 2025-12-20 | Fnatic          | L   | 0.118      | -            | -                | -                | -         |    -0.15 | 7kick, fostar, hAdji, Jorko, nEMANHA |
|            6 |     5903 | 2025-12-19 | BESTIA          | L   | 0.113      | -            | -                | -                | -         |    -0.06 | 7kick, fostar, hAdji, Jorko, nEMANHA |
|            5 |     5918 | 2025-12-19 | Team Venom      | W   | 0.111      | 0.339        | 0.000 (0.000)    | 0.014 (0.001)    | 1 (0.111) |     1.81 | 7kick, fostar, hAdji, Jorko, nEMANHA |
|            4 |     5930 | 2025-12-18 | IC Esports      | W   | 0.105      | 0.339        | 0.054 (0.002)    | 0.534 (0.019)    | 1 (0.105) |     3.29 | 7kick, fostar, hAdji, Jorko, nEMANHA |
|            3 |     5942 | 2025-12-17 | Grindas         | W   | 0.100      | 0.339        | 0.000 (0.000)    | 0.089 (0.003)    | 1 (0.100) |     1.50 | 7kick, fostar, hAdji, Jorko, nEMANHA |
|            2 |     5951 | 2025-12-17 | MOUZ NXT        | L   | 0.098      | -            | -                | -                | -         |    -0.14 | 7kick, fostar, hAdji, Jorko, nEMANHA |
|            1 |     5957 | 2025-12-17 | Infinite Gaming | W   | 0.098      | 0.339        | 0.000 (0.000)    | 0.047 (0.002)    | 1 (0.098) |     1.74 | 7kick, fostar, hAdji, Jorko, nEMANHA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
