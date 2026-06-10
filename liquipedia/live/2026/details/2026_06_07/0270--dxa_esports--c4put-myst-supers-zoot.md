### Roster Details<br />
Team Name: DXA Esports<br />
Roster: c4put, Myst, Supers, Zoot<br />
Global Rank: [270](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_07.md)<br />
Regional Rank: [33]( ../../standings_asia_2026_06_07.md)<br />
<br />
Final Rank Value:  595.2<br />
<br />
Final Rank Value (595.2) = Starting Rank Value (603.9) + Head To Head Adjustments (-8.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.233[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.106<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 603.9
- 400 + ( ( 0.106 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 603.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.054
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1619 | 2026-04-17 | Team Abyssal                     | L   | 0.856      | -            | -                | -                | -         |    -8.94 | c4put, JiNxZiE, Myst, Supers, Zoot |
|            4 |     1620 | 2026-04-17 | Ding Cuts                        | L   | 0.856      | -            | -                | -                | -         |   -13.96 | c4put, JiNxZiE, Myst, Supers, Zoot |
|            3 |     1743 | 2026-04-11 | Arcade Esports (Australian team) | W   | 0.811      | 0.306        | 0.002 (0.000)    | 0.209 (0.052)    | 0 (0.000) |    16.83 | c4put, Mingovi, Myst, Supers, Zoot |
|            2 |     1746 | 2026-04-10 | MGLBROS                          | W   | 0.810      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.19 | c4put, Mingovi, Myst, Supers, Zoot |
|            1 |     1748 | 2026-04-10 | Team Abyssal                     | L   | 0.809      | -            | -                | -                | -         |    -8.84 | c4put, Mingovi, Myst, Supers, Zoot |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($310.11)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.864 | $358.76        | $310.11         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
