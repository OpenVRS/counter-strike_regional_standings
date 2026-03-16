### Roster Details<br />
Team Name: Phoenix (American team)<br />
Roster: Gabe, jchancE, mds, REKMEISTER<br />
Global Rank: [326](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [94]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  403.1<br />
<br />
Final Rank Value (403.1) = Starting Rank Value (400.6) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.6
- 400 + ( ( 0.000 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 400.6


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


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3855 | 2025-10-14 | BOSS                 | L   | 0.234      | -            | -                | -                | -         |    -0.73 | Gabe, jchancE, mds, Redman, REKMEISTER |
|            4 |     3975 | 2025-10-09 | Chicken Coop Esports | W   | 0.201      | 0.363        | 0.000 (0.000)    | 0.175 (0.013)    | 0 (0.000) |     4.29 | Gabe, jchancE, mds, Redman, REKMEISTER |
|            3 |     4018 | 2025-10-08 | Wildcard             | L   | 0.194      | -            | -                | -                | -         |    -0.95 | Gabe, jchancE, mds, Redman, REKMEISTER |
|            2 |     5121 | 2025-09-10 | NYX (American team)  | L   | 0.008      | -            | -                | -                | -         |    -0.12 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            1 |     5170 | 2025-09-09 | Outfit 49            | L   | 0.001      | -            | -                | -                | -         |    -0.02 | cbass, Gabe, jchancE, mds, REKMEISTER  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
