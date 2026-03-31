### Roster Details<br />
Team Name: 9BoomPro<br />
Roster: FL4MUS, shalfey, sugaR<br />
Global Rank: [306](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  504.8<br />
<br />
Final Rank Value (504.8) = Starting Rank Value (498.8) + Head To Head Adjustments (6.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.193[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.049<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.8
- 400 + ( ( 0.049 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 498.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.015
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3518 | 2025-11-17 | Partizan Esports | L   | 0.365      | -            | -                | -                | -         |    -2.89 | FL4MUS, forkyz, shalfey, sugaR, zorte |
|            4 |     4146 | 2025-10-28 | Sangal Esports   | L   | 0.232      | -            | -                | -                | -         |    -0.73 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            3 |     4181 | 2025-10-27 | HAVU             | W   | 0.225      | 0.384        | 0.007 (0.001)    | 0.520 (0.045)    | 0 (0.000) |     6.69 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            2 |     4292 | 2025-10-25 | Phantom Esports  | W   | 0.211      | 0.384        | 0.000 (0.000)    | 0.025 (0.002)    | 0 (0.000) |     4.64 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |
|            1 |     4355 | 2025-10-24 | JiJieHao         | L   | 0.205      | -            | -                | -                | -         |    -1.65 | Ax1Le, FL4MUS, Krad, shalfey, sugaR   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
