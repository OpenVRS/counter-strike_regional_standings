### Roster Details<br />
Team Name: XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w, taidao<br />
Global Rank: [349](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  510.7<br />
<br />
Final Rank Value (510.7) = Starting Rank Value (509.9) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.9
- 400 + ( ( 0.058 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 509.9


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
|            8 |      440 | 2026-08-27 | Nas               | L   | 1.000      | -            | -                | -                | -         |   -15.64 | darkk, Kungao, r1verLaKe, rubeN, Shad0w  |
|            7 |      492 | 2026-08-26 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -11.80 | darkk, Kungao, r1verLaKe, rubeN, Shad0w  |
|            6 |      534 | 2026-08-25 | 5star             | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.321 (0.107)    | 0 (0.000) |    27.03 | darkk, Kungao, r1verLaKe, rubeN, Shad0w  |
|            5 |     4701 | 2026-04-02 | Rare Atom         | L   | 0.137      | -            | -                | -                | -         |    -1.30 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            4 |     4789 | 2026-04-01 | The Huns          | L   | 0.131      | -            | -                | -                | -         |    -0.54 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            3 |     5036 | 2026-03-29 | Just Swing        | W   | 0.110      | 0.320        | 0.003 (0.000)    | 0.266 (0.009)    | 0 (0.000) |     2.59 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            2 |     5038 | 2026-03-28 | Unitronics        | W   | 0.110      | 0.320        | 0.000 (0.000)    | 0.013 (0.000)    | 0 (0.000) |     1.29 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            1 |     5120 | 2026-03-27 | SemperFi          | L   | 0.102      | -            | -                | -                | -         |    -0.91 | darkk, Kungao, r1verLaKe, Shad0w, taidao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
