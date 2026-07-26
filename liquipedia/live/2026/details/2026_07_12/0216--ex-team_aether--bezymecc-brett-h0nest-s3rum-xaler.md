### Roster Details<br />
Team Name: Ex-Team Aether<br />
Roster: bezymecc, brett, H0NeST, s3rum, xaler<br />
Global Rank: [216](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [47]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  710.5<br />
<br />
Final Rank Value (710.5) = Starting Rank Value (660.1) + Head To Head Adjustments (50.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 660.1
- 400 + ( ( 0.137 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 660.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.143
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1056 | 2026-05-24 | SportsBetExpert        | L   | 0.873      | -            | -                | -                | -         |    -5.99 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            8 |     1058 | 2026-05-24 | Overtake Sector        | W   | 0.872      | 0.278        | 0.005 (0.001)    | 0.117 (0.028)    | 0 (0.000) |    11.03 | Andrew, bezymecc, H0NeST, kAAdory, s3rum |
|            7 |     1703 | 2026-05-03 | Wildcard               | L   | 0.732      | -            | -                | -                | -         |    -0.74 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            6 |     1783 | 2026-05-01 | BOSS                   | W   | 0.720      | 0.354        | 0.002 (0.000)    | 0.214 (0.055)    | 0 (0.000) |    14.38 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            5 |     1920 | 2026-04-28 | Fisher College         | L   | 0.700      | -            | -                | -                | -         |    -2.93 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            4 |     1924 | 2026-04-28 | FarmVille              | W   | 0.699      | 0.354        | 0.005 (0.001)    | 0.274 (0.068)    | 0 (0.000) |    13.01 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            3 |     1956 | 2026-04-27 | Wildcard               | L   | 0.694      | -            | -                | -                | -         |    -0.64 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            2 |     1964 | 2026-04-27 | Shimmer                | W   | 0.693      | 0.354        | 0.011 (0.003)    | 0.084 (0.021)    | 0 (0.000) |     9.89 | bezymecc, brett, H0NeST, s3rum, xaler    |
|            1 |     2004 | 2026-04-26 | EMPIRE (American team) | W   | 0.687      | 0.363        | 0.002 (0.000)    | 0.162 (0.040)    | 0 (0.000) |    12.35 | bezymecc, brett, H0NeST, s3rum, xaler    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,939.69)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      0.873 | $750.00        | $654.90         |
| 2026-05-03 |      0.734 | $1,750.00      | $1,284.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
