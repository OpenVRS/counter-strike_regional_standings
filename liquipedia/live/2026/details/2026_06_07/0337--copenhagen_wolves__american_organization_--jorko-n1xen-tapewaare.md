### Roster Details<br />
Team Name: Copenhagen Wolves (American organization)<br />
Roster: Jorko, n1Xen, Tapewaare<br />
Global Rank: [337](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [205]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  469.5<br />
<br />
Final Rank Value (469.5) = Starting Rank Value (474.6) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 474.6
- 400 + ( ( 0.039 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 474.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.000
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5418 | 2026-01-24 | The Last Resort | L   | 0.299      | -            | -                | -                | -         |    -0.94 | Jorko, n1Xen, REDSTAR, SHiPZ, Tapewaare   |
|            4 |     5713 | 2026-01-16 | Cirahvi         | L   | 0.247      | -            | -                | -                | -         |    -1.29 | Jorko, n1Xen, REDSTAR, SHiPZ, Tapewaare   |
|            3 |     5837 | 2026-01-11 | BRUTE           | L   | 0.213      | -            | -                | -                | -         |    -3.07 | Jorko, n1Xen, REDSTAR, SHiPZ, Tapewaare   |
|            2 |     6122 | 2025-12-12 | Magic           | L   | 0.011      | -            | -                | -                | -         |    -0.00 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |
|            1 |     6130 | 2025-12-11 | MOUZ NXT        | W   | 0.006      | 0.384        | 0.014 (0.000)    | 0.743 (0.002)    | 0 (0.000) |     0.19 | b1elany, Jorko, Matheos, n1Xen, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
