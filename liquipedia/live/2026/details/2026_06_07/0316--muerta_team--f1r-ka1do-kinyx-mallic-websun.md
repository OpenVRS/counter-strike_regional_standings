### Roster Details<br />
Team Name: MUERTA TEAM<br />
Roster: f1R, ka1do, kinyx, MaLLiC, WebSun<br />
Global Rank: [316](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  519.5<br />
<br />
Final Rank Value (519.5) = Starting Rank Value (508.1) + Head To Head Adjustments (11.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.165[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 508.1
- 400 + ( ( 0.056 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 508.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.019
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3534 | 2026-03-09 | Oxuji Esports   | L   | 0.594      | -            | -                | -                | -         |    -0.43 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            4 |     3552 | 2026-03-09 | WW TEAM         | L   | 0.593      | -            | -                | -                | -         |    -0.58 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            3 |     3811 | 2026-03-04 | 1w Team         | L   | 0.561      | -            | -                | -                | -         |    -0.27 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            2 |     3825 | 2026-03-04 | Eternal premium | W   | 0.560      | 0.333        | 0.000 (0.000)    | 0.120 (0.022)    | 1 (0.560) |    13.01 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            1 |     3850 | 2026-03-04 | TDK             | L   | 0.558      | -            | -                | -                | -         |    -0.33 | f1R, ka1do, kinyx, MaLLiC, WebSun |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
