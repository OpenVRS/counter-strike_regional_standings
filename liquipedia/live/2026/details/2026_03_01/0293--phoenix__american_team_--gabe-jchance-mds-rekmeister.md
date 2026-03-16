### Roster Details<br />
Team Name: Phoenix (American team)<br />
Roster: Gabe, jchancE, mds, REKMEISTER<br />
Global Rank: [293](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_01.md)<br />
Regional Rank: [79]( ../../standings_americas_2026_03_01.md)<br />
<br />
Final Rank Value:  512.8<br />
<br />
Final Rank Value (512.8) = Starting Rank Value (508.0) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.226[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.0
- 400 + ( ( 0.057 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 508.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.018
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3706 | 2025-10-14 | BOSS                 | L   | 0.276      | -            | -                | -                | -         |    -1.46 | Gabe, jchancE, mds, Redman, REKMEISTER |
|            6 |     3830 | 2025-10-09 | Chicken Coop Esports | W   | 0.242      | 0.363        | 0.000 (0.000)    | 0.137 (0.012)    | 0 (0.000) |     3.90 | Gabe, jchancE, mds, Redman, REKMEISTER |
|            5 |     3875 | 2025-10-08 | Wildcard             | L   | 0.236      | -            | -                | -                | -         |    -1.76 | Gabe, jchancE, mds, Redman, REKMEISTER |
|            4 |     3989 | 2025-10-06 | Sakura Esports       | W   | 0.223      | 0.363        | 0.047 (0.004)    | 0.094 (0.008)    | 0 (0.000) |     5.92 | Gabe, jchancE, jchancE, mds, Redman    |
|            3 |     5000 | 2025-09-10 | NYX (American team)  | L   | 0.049      | -            | -                | -                | -         |    -1.00 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            2 |     5048 | 2025-09-09 | Outfit 49            | L   | 0.043      | -            | -                | -                | -         |    -0.75 | cbass, Gabe, jchancE, mds, REKMEISTER  |
|            1 |     5177 | 2025-09-06 | Marsborne            | L   | 0.021      | -            | -                | -                | -         |    -0.01 | cbass, Gabe, jchancE, mds, REKMEISTER  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
