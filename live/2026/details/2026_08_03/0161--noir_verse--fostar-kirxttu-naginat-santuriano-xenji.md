### Roster Details<br />
Team Name: Noir Verse<br />
Roster: fostar, kirxttu, Naginat, Santuriano, xeNji<br />
Global Rank: [161](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  830.0<br />
<br />
Final Rank Value (830.0) = Starting Rank Value (882.0) + Head To Head Adjustments (-52.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.075[<sup>2</sup>](#table1)
- LAN Wins: 0.417[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.0
- 400 + ( ( 0.249 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 882.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      132 | 2026-07-28 | MOUZ NXT | L   | 1.000      | -            | -                | -                | -         |   -14.57 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|           12 |      153 | 2026-07-27 | PURE     | L   | 1.000      | -            | -                | -                | -         |   -14.14 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|           11 |      156 | 2026-07-27 | atputies | L   | 1.000      | -            | -                | -                | -         |   -27.02 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|           10 |      159 | 2026-07-27 | ASTRAL   | W   | 1.000      | 0.303        | 0.014 (0.004)    | 1.000 (0.303)    | 1 (1.000) |    22.16 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            9 |      516 | 2026-07-12 | MOUZ NXT | L   | 1.000      | -            | -                | -                | -         |   -14.93 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            8 |      527 | 2026-07-12 | SPARTA   | L   | 1.000      | -            | -                | -                | -         |   -13.36 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            7 |      922 | 2026-06-18 | FOKUS    | L   | 0.892      | -            | -                | -                | -         |    -2.47 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            6 |      985 | 2026-06-14 | Nexus    | L   | 0.865      | -            | -                | -                | -         |   -13.45 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            5 |      994 | 2026-06-13 | aimclub  | W   | 0.861      | 0.373        | 0.003 (0.001)    | 0.175 (0.056)    | 1 (0.861) |     8.33 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            4 |     1003 | 2026-06-13 | Entropy  | W   | 0.860      | 0.373        | 0.004 (0.001)    | 0.823 (0.264)    | 1 (0.860) |    13.01 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            3 |     1018 | 2026-06-13 | atputies | W   | 0.859      | 0.373        | 0.000 (0.000)    | 0.047 (0.015)    | 1 (0.859) |     3.53 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            2 |     1026 | 2026-06-13 | EAC      | L   | 0.858      | -            | -                | -                | -         |    -7.55 | fostar, kirxttu, Naginat, Santuriano, xeNji |
|            1 |     1150 | 2026-06-07 | WBT      | W   | 0.821      | 0.384        | 0.007 (0.002)    | 0.369 (0.116)    | 0 (0.000) |     8.46 | fostar, kirxttu, Naginat, Santuriano, xeNji |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($650.73)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.868 | $750.00        | $650.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
