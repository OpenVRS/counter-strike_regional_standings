### Roster Details<br />
Team Name: Z7<br />
Roster: BestR1flerEu, Dobo, Gibsand, Valtr1x<br />
Global Rank: [388](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [244]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  407.2<br />
<br />
Final Rank Value (407.2) = Starting Rank Value (407.0) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.015[<sup>2</sup>](#table1)

The average of these factors is 0.004<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 407.0
- 400 + ( ( 0.004 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 407.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4788 | 2026-03-31 | WAZABI   | L   | 0.132      | -            | -                | -                | -         |    -0.67 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            4 |     4798 | 2026-03-31 | Phantom  | L   | 0.132      | -            | -                | -                | -         |    -0.47 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            3 |     4824 | 2026-03-31 | B8       | L   | 0.131      | -            | -                | -                | -         |    -0.01 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            2 |     4832 | 2026-03-31 | maquinas | W   | 0.130      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.130) |     2.02 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            1 |     4845 | 2026-03-31 | AM       | L   | 0.130      | -            | -                | -                | -         |    -0.65 | BestR1flerEu, caravaggio, Dobo, Gibsand, Valtr1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
