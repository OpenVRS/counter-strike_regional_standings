### Roster Details<br />
Team Name: GamersLab<br />
Roster: LEFI, MAXX, rayqu4za, Tusi, wap0<br />
Global Rank: [326](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [208]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  539.3<br />
<br />
Final Rank Value (539.3) = Starting Rank Value (544.3) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.111[<sup>2</sup>](#table1)

The average of these factors is 0.076<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 544.3
- 400 + ( ( 0.076 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 544.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      973 | 2026-08-08 | LPH         | L   | 0.991      | -            | -                | -                | -         |    -6.92 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            5 |     1037 | 2026-08-07 | Nexus       | L   | 0.985      | -            | -                | -                | -         |    -2.27 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            4 |     1064 | 2026-08-06 | MAYBE       | W   | 0.979      | 0.345        | 0.001 (0.001)    | 0.116 (0.039)    | 1 (0.979) |    21.26 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            3 |     1078 | 2026-08-05 | Jam         | L   | 0.974      | -            | -                | -                | -         |    -1.27 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            2 |     1082 | 2026-08-05 | NAVI Junior | L   | 0.973      | -            | -                | -                | -         |    -3.50 | LEFI, MAXX, rayqu4za, Tusi, wap0 |
|            1 |     1088 | 2026-08-05 | eSuba       | L   | 0.972      | -            | -                | -                | -         |   -12.35 | LEFI, MAXX, rayqu4za, Tusi, wap0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
