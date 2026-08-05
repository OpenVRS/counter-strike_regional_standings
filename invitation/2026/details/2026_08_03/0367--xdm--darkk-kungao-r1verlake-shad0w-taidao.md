### Roster Details<br />
Team Name: XDM<br />
Roster: darkk, Kungao, r1verLaKe, Shad0w, taidao<br />
Global Rank: [367](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [42]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  491.3<br />
<br />
Final Rank Value (491.3) = Starting Rank Value (480.8) + Head To Head Adjustments (10.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.164[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.8
- 400 + ( ( 0.042 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 480.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3466 | 2026-04-02 | Rare Atom  | L   | 0.378      | -            | -                | -                | -         |    -1.34 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            4 |     3554 | 2026-04-01 | The Huns   | L   | 0.371      | -            | -                | -                | -         |    -0.58 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            3 |     3801 | 2026-03-29 | Just Swing | W   | 0.351      | 0.320        | 0.001 (0.000)    | 0.212 (0.024)    | 0 (0.000) |     8.62 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            2 |     3803 | 2026-03-28 | Unitronics | W   | 0.350      | 0.320        | 0.000 (0.000)    | 0.026 (0.003)    | 0 (0.000) |     4.74 | darkk, Kungao, r1verLaKe, Shad0w, taidao |
|            1 |     3885 | 2026-03-27 | SemperFi   | L   | 0.343      | -            | -                | -                | -         |    -0.94 | darkk, Kungao, r1verLaKe, Shad0w, taidao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
