### Roster Details<br />
Team Name: Never Say Never-<br />
Roster: Niko, reason, z1ayr<br />
Global Rank: [301](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [35]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  540.5<br />
<br />
Final Rank Value (540.5) = Starting Rank Value (521.9) + Head To Head Adjustments (18.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 521.9
- 400 + ( ( 0.062 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 521.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.034
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      740 | 2026-03-22 | Haunted House           | L   | 1.000      | -            | -                | -                | -         |    -6.89 | Niko, reason, Yuxz, z1ayr, zzi        |
|            5 |      794 | 2026-03-21 | FengDa Gaming           | L   | 1.000      | -            | -                | -                | -         |    -6.41 | Niko, reason, Yuxz, z1ayr, zzi        |
|            4 |      853 | 2026-03-20 | Chinggis Warriors       | W   | 1.000      | 0.333        | 0.017 (0.006)    | 0.384 (0.128)    | 0 (0.000) |    30.47 | Niko, reason, Yuxz, z1ayr, zzi        |
|            3 |     5261 | 2025-10-25 | The QUBE Esports        | L   | 0.112      | -            | -                | -                | -         |    -0.52 | Melai, Niko, reason, Tw1nk1e17, z1ayr |
|            2 |     5319 | 2025-10-24 | BMZ                     | L   | 0.106      | -            | -                | -                | -         |    -0.18 | Melai, Niko, reason, Tw1nk1e17, z1ayr |
|            1 |     5367 | 2025-10-23 | Legion (Pakistani team) | W   | 0.099      | 0.333        | 0.003 (0.000)    | 0.241 (0.008)    | 0 (0.000) |     2.18 | Melai, Niko, reason, Tw1nk1e17, z1ayr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
