### Roster Details<br />
Team Name: ex-Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [240](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [52]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  698.2<br />
<br />
Final Rank Value (698.2) = Starting Rank Value (657.4) + Head To Head Adjustments (40.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.133<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 657.4
- 400 + ( ( 0.133 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 657.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1594 | 2026-05-24 | SportsBetExpert | L   | 0.729      | -            | -                | -                | -         |    -4.41 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            7 |     1595 | 2026-05-24 | Overtake Sector | W   | 0.728      | 0.278        | 0.005 (0.001)    | 0.135 (0.027)    | 0 (0.000) |     9.80 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            6 |     2244 | 2026-05-03 | Wildcard        | L   | 0.587      | -            | -                | -                | -         |    -0.46 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            5 |     2372 | 2026-04-30 | BOSS            | W   | 0.569      | 0.354        | 0.001 (0.000)    | 0.183 (0.037)    | 0 (0.000) |    10.67 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            4 |     2457 | 2026-04-28 | Fisher College  | L   | 0.556      | -            | -                | -                | -         |    -2.83 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            3 |     2463 | 2026-04-28 | FarmVille       | W   | 0.555      | 0.354        | 0.003 (0.001)    | 0.242 (0.048)    | 0 (0.000) |     9.89 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            2 |     2505 | 2026-04-27 | Shimmer         | W   | 0.548      | 0.354        | 0.012 (0.002)    | 0.084 (0.016)    | 0 (0.000) |     8.75 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            1 |     2543 | 2026-04-26 | EMPIRE          | W   | 0.543      | 0.363        | 0.001 (0.000)    | 0.142 (0.028)    | 0 (0.000) |     9.30 | bezymecc, brett, H0NeST, s3rum, xaler    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,579.60)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.729 | $750.00        | $546.79         |
| 2026-05-03 |      0.590 | $1,750.00      | $1,032.81       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
