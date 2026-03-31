### Roster Details<br />
Team Name: MUERTA TEAM<br />
Roster: f1R, ka1do, kinyx, MaLLiC, WebSun<br />
Global Rank: [340](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [196]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  460.5<br />
<br />
Final Rank Value (460.5) = Starting Rank Value (450.1) + Head To Head Adjustments (10.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.026<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 450.1
- 400 + ( ( 0.026 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 450.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      858 | 2026-03-09 | Oxuji Esports   | L   | 1.000      | -            | -                | -                | -         |    -1.26 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            4 |      876 | 2026-03-09 | WW Team         | L   | 1.000      | -            | -                | -                | -         |    -0.75 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            3 |     1135 | 2026-03-04 | 1w Team         | L   | 1.000      | -            | -                | -                | -         |    -0.48 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            2 |     1149 | 2026-03-04 | Eternal premium | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.094 (0.031)    | 1 (1.000) |    13.35 | f1R, ka1do, kinyx, MaLLiC, WebSun |
|            1 |     1174 | 2026-03-04 | TDK             | L   | 1.000      | -            | -                | -                | -         |    -0.44 | f1R, ka1do, kinyx, MaLLiC, WebSun |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
