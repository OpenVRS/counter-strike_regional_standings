### Roster Details<br />
Team Name: Sashi Academy<br />
Roster: Bl4zE, Damsi, Half, rosen, Thom<br />
Global Rank: [389](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [241]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  426.3<br />
<br />
Final Rank Value (426.3) = Starting Rank Value (420.9) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.043[<sup>2</sup>](#table1)

The average of these factors is 0.011<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 420.9
- 400 + ( ( 0.011 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 420.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3606 | 2026-03-31 | BESTIA        | L   | 0.366      | -            | -                | -                | -         |    -0.22 | Bl4zE, Damsi, Half, rosen, Thom |
|            4 |     3615 | 2026-03-31 | EAC           | L   | 0.366      | -            | -                | -                | -         |    -0.19 | Bl4zE, Damsi, Half, rosen, Thom |
|            3 |     3623 | 2026-03-31 | Falcons Force | L   | 0.366      | -            | -                | -                | -         |    -1.46 | Bl4zE, Damsi, Half, rosen, Thom |
|            2 |     3641 | 2026-03-31 | Aimhaus       | W   | 0.365      | 0.340        | 0.000 (0.000)    | 0.045 (0.006)    | 1 (0.365) |     7.36 | Bl4zE, Damsi, Half, rosen, Thom |
|            1 |     3649 | 2026-03-31 | 3DMAX         | L   | 0.365      | -            | -                | -                | -         |    -0.03 | Bl4zE, Damsi, Half, rosen, Thom |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
