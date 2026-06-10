### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Andrew, brett, LUKE4k, s3rum, sava9e<br />
Global Rank: [351](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [97]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  410.3<br />
<br />
Final Rank Value (410.3) = Starting Rank Value (407.9) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.004<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 407.9
- 400 + ( ( 0.004 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 407.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.005
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5928 | 2026-01-03 | Team Voca             | L   | 0.161      | -            | -                | -                | -         |    -0.05 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            4 |     5932 | 2026-01-03 | Dark Knight Esports   | W   | 0.160      | 0.323        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.160) |     2.47 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            3 |     5938 | 2026-01-03 | Team Voca             | L   | 0.160      | -            | -                | -                | -         |    -0.05 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            2 |     6125 | 2025-12-11 | Surge (American team) | L   | 0.009      | -            | -                | -                | -         |    -0.10 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            1 |     6136 | 2025-12-10 | Wanted Goons          | W   | 0.003      | 0.333        | 0.000 (0.000)    | 0.155 (0.000)    | 0 (0.000) |     0.07 | Andrew, brett, LUKE4k, s3rum, sava9e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
