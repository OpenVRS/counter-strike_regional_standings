### Roster Details<br />
Team Name: 9BoomPro<br />
Roster: FL4MUS, shalfey, sugaR<br />
Global Rank: [323](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [189]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  495.3<br />
<br />
Final Rank Value (495.3) = Starting Rank Value (491.6) + Head To Head Adjustments (3.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.6
- 400 + ( ( 0.047 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 491.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.011
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4000 | 2025-11-17 | Partizan Esports | L   | 0.318      | -            | -                | -                | -         |    -2.85 | FL4MUS, forkyz, shalfey, sugaR, zorte |
|            4 |     4628 | 2025-10-28 | Sangal Esports   | L   | 0.185      | -            | -                | -                | -         |    -0.75 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            3 |     4663 | 2025-10-27 | HAVU             | W   | 0.178      | 0.384        | 0.006 (0.000)    | 0.518 (0.035)    | 0 (0.000) |     5.26 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            2 |     4774 | 2025-10-25 | Phantom Esports  | W   | 0.165      | 0.384        | 0.000 (0.000)    | 0.017 (0.001)    | 0 (0.000) |     3.52 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            1 |     4837 | 2025-10-24 | JiJieHao         | L   | 0.158      | -            | -                | -                | -         |    -1.48 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
