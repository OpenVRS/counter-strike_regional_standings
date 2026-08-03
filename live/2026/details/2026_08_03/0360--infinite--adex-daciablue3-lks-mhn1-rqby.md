### Roster Details<br />
Team Name: INFINITE<br />
Roster: adeX, DaciaBlue3, LkS, mhN1, RQBY<br />
Global Rank: [360](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [232]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  506.3<br />
<br />
Final Rank Value (506.3) = Starting Rank Value (501.5) + Head To Head Adjustments (4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.5
- 400 + ( ( 0.052 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 501.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5412 | 2026-02-25 | Betclic  | L   | 0.141      | -            | -                | -                | -         |    -0.20 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            4 |     5428 | 2026-02-25 | HEROIC   | L   | 0.139      | -            | -                | -                | -         |    -0.03 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            3 |     5446 | 2026-02-24 | Mai Tai  | W   | 0.134      | 0.354        | 0.003 (0.000)    | 0.260 (0.012)    | 1 (0.134) |     3.49 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            2 |     5454 | 2026-02-24 | Hermine  | W   | 0.133      | 0.354        | 0.002 (0.000)    | 0.000 (0.000)    | 1 (0.133) |     2.27 | adeX, DaciaBlue3, LkS, mhN1, RQBY |
|            1 |     5475 | 2026-02-24 | Mai Tai  | L   | 0.132      | -            | -                | -                | -         |    -0.72 | adeX, DaciaBlue3, LkS, mhN1, RQBY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
