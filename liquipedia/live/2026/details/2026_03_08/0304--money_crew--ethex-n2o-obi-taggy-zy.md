### Roster Details<br />
Team Name: MONEY CREW<br />
Roster: Ethex, N2o, obi, taggy, zy<br />
Global Rank: [304](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_08.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_03_08.md)<br />
<br />
Final Rank Value:  500.0<br />
<br />
Final Rank Value (500.0) = Starting Rank Value (497.4) + Head To Head Adjustments (2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.4
- 400 + ( ( 0.051 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 497.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.020
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3466 | 2025-10-26 | Chicken Coop Esports | L   | 0.315      | -            | -                | -                | -         |    -4.63 | Ethex, N2o, obi, taggy, zy |
|            4 |     3575 | 2025-10-24 | BOSS                 | L   | 0.300      | -            | -                | -                | -         |    -1.58 | Ethex, N2o, obi, taggy, zy |
|            3 |     3688 | 2025-10-21 | Outfit 49            | W   | 0.281      | 0.333        | 0.010 (0.001)    | 0.373 (0.035)    | 0 (0.000) |     6.72 | Ethex, N2o, obi, taggy, zy |
|            2 |     3728 | 2025-10-18 | Anything else        | W   | 0.261      | 0.333        | 0.000 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     3.78 | Ethex, N2o, obi, taggy, zy |
|            1 |     3885 | 2025-10-13 | Regain               | L   | 0.228      | -            | -                | -                | -         |    -1.72 | Ethex, N2o, obi, taggy, zy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
