### Roster Details<br />
Team Name: TEAM XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w<br />
Global Rank: [308](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [37]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  528.6<br />
<br />
Final Rank Value (528.6) = Starting Rank Value (492.8) + Head To Head Adjustments (35.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.8
- 400 + ( ( 0.047 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 492.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.061
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      160 | 2026-04-01 | Rare Atom                 | L   | 1.000      | -            | -                | -                | -         |    -1.10 | darkk, Kungao, r1verLaKe, Shad0w, taidao    |
|            5 |      213 | 2026-04-01 | The Huns Esports          | L   | 1.000      | -            | -                | -                | -         |    -0.94 | darkk, Kungao, r1verLaKe, Shad0w, taidao    |
|            4 |      377 | 2026-03-29 | Just Swing (Chinese team) | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.145 (0.021)    | 0 (0.000) |    23.84 | darkk, Kungao, r1verLaKe, Shad0w, Tw1nk1e17 |
|            3 |      380 | 2026-03-28 | Team Unitronic            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.006 (0.001)    | 0 (0.000) |    14.99 | darkk, Kungao, r1verLaKe, Shad0w, Tw1nk1e17 |
|            2 |      456 | 2026-03-27 | SemperFi Esports          | L   | 1.000      | -            | -                | -                | -         |    -0.60 | darkk, Kungao, r1verLaKe, Shad0w, Tw1nk1e17 |
|            1 |     3455 | 2026-01-17 | The Huns Esports          | L   | 0.672      | -            | -                | -                | -         |    -0.40 | darkk, Kungao, r1verLaKe, Shad0w, taidao    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
