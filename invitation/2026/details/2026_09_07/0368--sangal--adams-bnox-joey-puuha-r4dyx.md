### Roster Details<br />
Team Name: Sangal<br />
Roster: adamS, bnox, Joey, puuha, R4DYX<br />
Global Rank: [368](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [234]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  477.7<br />
<br />
Final Rank Value (477.7) = Starting Rank Value (453.2) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.112[<sup>2</sup>](#table1)

The average of these factors is 0.028<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 453.2
- 400 + ( ( 0.028 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 453.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       91 | 2026-09-03 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.25 | adamS, bnox, Joey, puuha, R4DYX |
|            4 |      253 | 2026-08-30 | PURE              | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    12.37 | adamS, bnox, Joey, puuha, R4DYX |
|            3 |      936 | 2026-08-08 | JiJieHao          | L   | 0.997      | -            | -                | -                | -         |    -0.25 | adamS, bnox, Joey, puuha, R4DYX |
|            2 |      962 | 2026-08-08 | Zeste             | W   | 0.996      | 0.818        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.996) |    12.82 | adamS, bnox, Joey, puuha, R4DYX |
|            1 |      975 | 2026-08-07 | Virtus.pro        | L   | 0.992      | -            | -                | -                | -         |    -0.26 | adamS, bnox, Joey, puuha, R4DYX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
