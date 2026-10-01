### Roster Details<br />
Team Name: Z7<br />
Roster: BestR1flerEu, Dobo, Gibsand, Valtr1x<br />
Global Rank: [390](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [242]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  424.2<br />
<br />
Final Rank Value (424.2) = Starting Rank Value (420.6) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.011<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 420.6
- 400 + ( ( 0.011 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 420.6


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
|            5 |     3581 | 2026-03-31 | WAZABI   | L   | 0.367      | -            | -                | -                | -         |    -1.02 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            4 |     3591 | 2026-03-31 | Phantom  | L   | 0.367      | -            | -                | -                | -         |    -0.26 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            3 |     3617 | 2026-03-31 | B8       | L   | 0.366      | -            | -                | -                | -         |    -0.01 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            2 |     3625 | 2026-03-31 | maquinas | W   | 0.366      | 0.340        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.366) |     5.40 | BestR1flerEu, Dobo, Gibsand, T1mpa, Valtr1x      |
|            1 |     3638 | 2026-03-31 | AM       | L   | 0.365      | -            | -                | -                | -         |    -0.48 | BestR1flerEu, caravaggio, Dobo, Gibsand, Valtr1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
