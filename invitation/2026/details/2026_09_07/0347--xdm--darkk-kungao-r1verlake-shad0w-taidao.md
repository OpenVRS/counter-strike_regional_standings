### Roster Details<br />
Team Name: XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w, taidao<br />
Global Rank: [347](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  510.9<br />
<br />
Final Rank Value (510.9) = Starting Rank Value (510.1) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.1
- 400 + ( ( 0.058 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 510.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      412 | 2026-08-27 | Nas               | L   | 1.000      | -            | -                | -                | -         |   -15.63 | darkk, Kungao, r1verLaKe, rubeN, Shad0w  |
|            7 |      464 | 2026-08-26 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -11.81 | darkk, Kungao, r1verLaKe, rubeN, Shad0w  |
|            6 |      506 | 2026-08-25 | 5star             | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.322 (0.107)    | 0 (0.000) |    27.07 | darkk, Kungao, r1verLaKe, rubeN, Shad0w  |
|            5 |     4673 | 2026-04-02 | Rare Atom         | L   | 0.143      | -            | -                | -                | -         |    -1.34 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            4 |     4761 | 2026-04-01 | The Huns          | L   | 0.136      | -            | -                | -                | -         |    -0.56 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            3 |     5008 | 2026-03-29 | Just Swing        | W   | 0.116      | 0.320        | 0.003 (0.000)    | 0.267 (0.010)    | 0 (0.000) |     2.72 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            2 |     5010 | 2026-03-28 | Unitronics        | W   | 0.115      | 0.320        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     1.36 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            1 |     5092 | 2026-03-27 | SemperFi          | L   | 0.108      | -            | -                | -                | -         |    -0.94 | darkk, Kungao, r1verLaKe, Shad0w, taidao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
