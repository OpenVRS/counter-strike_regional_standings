### Roster Details<br />
Team Name: EC BANGA<br />
Roster: blazekinho, Labreenc, m1kketye<br />
Global Rank: [350](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [211]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  413.1<br />
<br />
Final Rank Value (413.1) = Starting Rank Value (403.4) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.4
- 400 + ( ( 0.002 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 403.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.022
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3104 | 2026-03-19 | MANA eSports            | L   | 0.659      | -            | -                | -                | -         |    -1.07 | Akward, blazekinho, danss, Labreenc, m1kketye    |
|            4 |     3147 | 2026-03-18 | Aimclub (Romanian team) | W   | 0.653      | 0.384        | 0.000 (0.000)    | 0.286 (0.072)    | 0 (0.000) |    17.95 | Akward, blazekinho, danss, Labreenc, m1kketye    |
|            3 |     3198 | 2026-03-17 | Dripmen                 | L   | 0.646      | -            | -                | -                | -         |    -2.74 | Akward, blazekinho, danss, Labreenc, m1kketye    |
|            2 |     3220 | 2026-03-16 | FUZOS                   | L   | 0.641      | -            | -                | -                | -         |    -2.57 | Akward, blazekinho, Labreenc, m1kketye, m1kketye |
|            1 |     4229 | 2026-02-24 | FUZOS                   | L   | 0.506      | -            | -                | -                | -         |    -1.91 | blazekinho, danss, Labreenc, m1kketye, sqreet    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
