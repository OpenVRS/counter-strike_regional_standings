### Roster Details<br />
Team Name: ex-Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [251](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [54]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  642.0<br />
<br />
Final Rank Value (642.0) = Starting Rank Value (630.9) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.116<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 630.9
- 400 + ( ( 0.116 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 630.9


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
|            8 |     4181 | 2026-05-24 | SportsBetExpert | L   | 0.309      | -            | -                | -                | -         |    -0.28 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            7 |     4182 | 2026-05-24 | Overtake Sector | W   | 0.309      | 0.278        | 0.010 (0.001)    | 0.329 (0.028)    | 0 (0.000) |     6.12 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            6 |     4831 | 2026-05-03 | Wildcard        | L   | 0.168      | -            | -                | -                | -         |    -0.21 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            5 |     4959 | 2026-04-30 | BOSS            | W   | 0.149      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.27 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            4 |     5044 | 2026-04-28 | Fisher College  | L   | 0.136      | -            | -                | -                | -         |    -1.71 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            3 |     5050 | 2026-04-28 | FarmVille       | W   | 0.135      | 0.354        | 0.004 (0.000)    | 0.281 (0.013)    | 0 (0.000) |     2.54 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            2 |     5092 | 2026-04-27 | Shimmer         | W   | 0.129      | 0.354        | 0.007 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     2.27 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            1 |     5130 | 2026-04-26 | EMPIRE          | W   | 0.123      | 0.363        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     1.11 | bezymecc, brett, H0NeST, s3rum, xaler    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($530.21)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.309 | $750.00        | $231.97         |
| 2026-05-03 |      0.170 | $1,750.00      | $298.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
