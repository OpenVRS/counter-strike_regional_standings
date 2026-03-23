### Roster Details<br />
Team Name: Donstu Esports<br />
Roster: Due1yant, gleb86rus, LAKSHERi, maQuein, NeoLife<br />
Global Rank: [223](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [147]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  668.0<br />
<br />
Final Rank Value (668.0) = Starting Rank Value (674.9) + Head To Head Adjustments (-6.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.182[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.140<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.9
- 400 + ( ( 0.140 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 674.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.133
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        2 | 2026-03-15 | Young Ninjas    | L   | 1.000      | -            | -                | -                | -         |    -9.32 | Due1yant, gleb86rus, LAKSHERi, maQuein, NeoLife  |
|           13 |       10 | 2026-03-15 | QWENTRY         | L   | 1.000      | -            | -                | -                | -         |    -2.49 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|           12 |       38 | 2026-03-14 | Endless Journey | W   | 1.000      | 0.278        | 0.001 (0.000)    | 0.033 (0.009)    | 0 (0.000) |    14.45 | Due1yant, gleb86rus, LAKSHERi, maQuein, NeoLife  |
|           11 |      119 | 2026-03-12 | Misa Esports    | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.165 (0.046)    | 0 (0.000) |    17.23 | Due1yant, gleb86rus, LAKSHERi, maQuein, NeoLife  |
|           10 |      235 | 2026-03-09 | OLDBOYS         | L   | 1.000      | -            | -                | -                | -         |   -20.82 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            9 |      269 | 2026-03-09 | Nuclear TigeRES | L   | 1.000      | -            | -                | -                | -         |    -1.26 | Due1yant, gleb86rus, LAKSHERi, maQuein, NeoLife  |
|            8 |      281 | 2026-03-08 | 1w Team         | L   | 1.000      | -            | -                | -                | -         |    -1.48 | Due1yant, gleb86rus, LAKSHERi, maQuein, NeoLife  |
|            7 |      356 | 2026-03-07 | CSDIILIT        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.534 (0.076)    | 0 (0.000) |    21.65 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            6 |      732 | 2026-02-27 | HOTU            | L   | 1.000      | -            | -                | -                | -         |    -0.41 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            5 |      745 | 2026-02-26 | NOVAQ           | L   | 1.000      | -            | -                | -                | -         |    -3.53 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            4 |      786 | 2026-02-26 | The Continental | W   | 1.000      | 0.351        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.12 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            3 |     1651 | 2026-02-08 | Team L00m1      | L   | 0.966      | -            | -                | -                | -         |   -21.64 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            2 |     1883 | 2026-01-31 | FORZE Reload    | L   | 0.913      | -            | -                | -                | -         |    -4.97 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |
|            1 |     1906 | 2026-01-30 | K27             | L   | 0.910      | -            | -                | -                | -         |    -0.37 | Due1yant, gleb86rus, LAKSHERi, NeoLife, SEXYVOVA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $750.00        | $750.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
