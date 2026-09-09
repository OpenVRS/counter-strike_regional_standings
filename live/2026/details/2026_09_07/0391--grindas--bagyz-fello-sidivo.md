### Roster Details<br />
Team Name: Grindas<br />
Roster: BaGyZ, fello, Sidivo<br />
Global Rank: [391](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [247]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  405.4<br />
<br />
Final Rank Value (405.4) = Starting Rank Value (400.0) + Head To Head Adjustments (5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4658 | 2026-04-02 | Atreides   | L   | 0.139      | -            | -                | -                | -         |    -0.47 | BaGyZ, fello, OniX, REL, Sidivo   |
|            4 |     4768 | 2026-04-01 | BIG EQUIPA | W   | 0.132      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     2.06 | BaGyZ, fello, REL, Sidivo, Uzman  |
|            3 |     4896 | 2026-03-30 | THE        | W   | 0.123      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.91 | BaGyZ, fello, OniX, REL, Sidivo   |
|            2 |     4920 | 2026-03-30 | PsychoFace | L   | 0.120      | -            | -                | -                | -         |    -0.18 | BaGyZ, fello, OniX, REL, Sidivo   |
|            1 |     4996 | 2026-03-29 | home       | W   | 0.113      | 0.384        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     2.04 | BaGyZ, fello, OniX, Sidivo, Uzman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
