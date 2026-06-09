### Roster Details<br />
Team Name: Bond1e<br />
Roster: MAGILA, PrelideN, REL, StreakN<br />
Global Rank: [291](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [185]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  580.6<br />
<br />
Final Rank Value (580.6) = Starting Rank Value (529.0) + Head To Head Adjustments (51.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.232[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.0
- 400 + ( ( 0.068 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 529.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.078
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1645 | 2026-04-10 | IC Academy         | L   | 0.860      | -            | -                | -                | -         |    -4.79 | MAGILA, PrelideN, REL, smooya, StreakN |
|            4 |     1680 | 2026-04-09 | HYPERSPIRIT        | L   | 0.851      | -            | -                | -                | -         |    -2.69 | MAGILA, PrelideN, REL, smooya, StreakN |
|            3 |     1732 | 2026-04-07 | M1x (Kosovar team) | W   | 0.839      | 0.384        | 0.000 (0.000)    | 0.175 (0.056)    | 0 (0.000) |    15.86 | MAGILA, PrelideN, REL, smooya, StreakN |
|            2 |     2563 | 2026-03-27 | UNiTY esports      | W   | 0.765      | 0.384        | 0.001 (0.000)    | 0.619 (0.182)    | 0 (0.000) |    20.29 | MAGILA, PrelideN, REL, StreakN, Uzman  |
|            1 |     2599 | 2026-03-26 | BASEMENT BOYS      | W   | 0.758      | 0.384        | 0.016 (0.005)    | 0.510 (0.149)    | 0 (0.000) |    22.98 | MAGILA, PrelideN, REL, smooya, StreakN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
