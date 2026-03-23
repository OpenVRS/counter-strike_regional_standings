### Roster Details<br />
Team Name: Misa Esports<br />
Roster: Ckanic, Mertowsk1, rim3, souv, Zuedsta<br />
Global Rank: [216](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [144]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  684.0<br />
<br />
Final Rank Value (684.0) = Starting Rank Value (605.9) + Head To Head Adjustments (78.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.099[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 605.9
- 400 + ( ( 0.105 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 605.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.165
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       31 | 2026-03-14 | Young Ninjas         | L   | 1.000      | -            | -                | -                | -         |   -10.65 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            7 |       80 | 2026-03-13 | Inner Circle Academy | W   | 1.000      | 0.278        | 0.004 (0.001)    | 0.066 (0.018)    | 0 (0.000) |    13.01 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            6 |      119 | 2026-03-12 | Donstu Esports       | L   | 1.000      | -            | -                | -                | -         |   -17.23 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            5 |      236 | 2026-03-09 | TNT                  | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.218 (0.031)    | 0 (0.000) |    18.06 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            4 |      296 | 2026-03-08 | Yngods               | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.254 (0.036)    | 0 (0.000) |    19.43 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            3 |      441 | 2026-03-05 | HAVU                 | W   | 1.000      | 0.143        | 0.008 (0.001)    | 0.520 (0.074)    | 0 (0.000) |    27.64 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            2 |     1486 | 2026-02-13 | Magic (Russian team) | L   | 0.998      | -            | -                | -                | -         |    -0.97 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            1 |     1537 | 2026-02-12 | Inner Circle Esports | W   | 0.991      | 0.384        | 0.086 (0.033)    | 0.416 (0.158)    | 1 (0.991) |    28.83 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
