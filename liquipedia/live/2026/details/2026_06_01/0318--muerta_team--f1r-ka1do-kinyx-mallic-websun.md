### Roster Details<br />
Team Name: MUERTA TEAM<br />
Roster: f1R, ka1do, kinyx, MaLLiC, WebSun<br />
Global Rank: [318](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [199]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  522.7<br />
<br />
Final Rank Value (522.7) = Starting Rank Value (510.3) + Head To Head Adjustments (12.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.167[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.3
- 400 + ( ( 0.058 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 510.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.020
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3424 | 2026-03-09 | Oxuji Esports   | L   | 0.646      | -            | -                | -                | -         |    -0.51 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            4 |     3442 | 2026-03-09 | WW TEAM         | L   | 0.645      | -            | -                | -                | -         |    -0.62 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            3 |     3701 | 2026-03-04 | 1w Team         | L   | 0.613      | -            | -                | -                | -         |    -0.29 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            2 |     3715 | 2026-03-04 | Eternal premium | W   | 0.612      | 0.333        | 0.000 (0.000)    | 0.126 (0.026)    | 1 (0.612) |    14.17 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            1 |     3740 | 2026-03-04 | TDK             | L   | 0.610      | -            | -                | -                | -         |    -0.32 | f1R, ka1do, kinyx, MaLLiC, WebSun |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
