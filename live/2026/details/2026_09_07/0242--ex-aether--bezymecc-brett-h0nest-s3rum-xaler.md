### Roster Details<br />
Team Name: ex-Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [242](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [53]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  657.6<br />
<br />
Final Rank Value (657.6) = Starting Rank Value (633.4) + Head To Head Adjustments (24.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.4
- 400 + ( ( 0.123 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 633.4


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
|            8 |     2829 | 2026-05-24 | SportsBetExpert | L   | 0.488      | -            | -                | -                | -         |    -0.92 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            7 |     2830 | 2026-05-24 | Overtake Sector | W   | 0.488      | 0.278        | 0.008 (0.001)    | 0.242 (0.033)    | 0 (0.000) |     8.51 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            6 |     3479 | 2026-05-03 | Wildcard        | L   | 0.347      | -            | -                | -                | -         |    -0.78 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            5 |     3607 | 2026-04-30 | BOSS            | W   | 0.328      | 0.354        | 0.000 (0.000)    | 0.052 (0.006)    | 0 (0.000) |     5.21 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            4 |     3692 | 2026-04-28 | Fisher College  | L   | 0.315      | -            | -                | -                | -         |    -2.81 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            3 |     3698 | 2026-04-28 | FarmVille       | W   | 0.314      | 0.354        | 0.001 (0.000)    | 0.085 (0.009)    | 0 (0.000) |     5.03 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            2 |     3740 | 2026-04-27 | Shimmer         | W   | 0.308      | 0.354        | 0.009 (0.001)    | 0.042 (0.005)    | 0 (0.000) |     5.28 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            1 |     3778 | 2026-04-26 | EMPIRE          | W   | 0.302      | 0.363        | 0.000 (0.000)    | 0.043 (0.005)    | 0 (0.000) |     4.69 | bezymecc, brett, H0NeST, s3rum, xaler    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($977.78)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.488 | $750.00        | $366.24         |
| 2026-05-03 |      0.349 | $1,750.00      | $611.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
