### Roster Details<br />
Team Name: EC BANGA<br />
Roster: blazekinho, Labreenc, m1kketye<br />
Global Rank: [356](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [222]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  486.6<br />
<br />
Final Rank Value (486.6) = Starting Rank Value (485.2) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.045<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.2
- 400 + ( ( 0.045 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 485.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.017
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3814 | 2026-03-19 | Ex-MANA eSports         | L   | 0.431      | -            | -                | -                | -         |    -1.95 | Akward, blazekinho, danss, Labreenc, m1kketye    |
|            4 |     3857 | 2026-03-18 | Aimclub (Romanian team) | W   | 0.424      | 0.384        | 0.001 (0.000)    | 0.294 (0.048)    | 0 (0.000) |    11.85 | Akward, blazekinho, danss, Labreenc, m1kketye    |
|            3 |     3908 | 2026-03-17 | Dripmen                 | L   | 0.417      | -            | -                | -                | -         |    -2.93 | Akward, blazekinho, danss, Labreenc, m1kketye    |
|            2 |     3930 | 2026-03-16 | FUZOS                   | L   | 0.412      | -            | -                | -                | -         |    -3.35 | Akward, blazekinho, Labreenc, m1kketye, m1kketye |
|            1 |     4939 | 2026-02-24 | FUZOS                   | L   | 0.277      | -            | -                | -                | -         |    -2.18 | blazekinho, danss, Labreenc, m1kketye, sqreet    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
