### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, Tarkky<br />
Global Rank: [308](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [184]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  504.0<br />
<br />
Final Rank Value (504.0) = Starting Rank Value (501.3) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.3
- 400 + ( ( 0.052 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 501.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.008
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4996 | 2025-10-01 | Friendly Campers | L   | 0.098      | -            | -                | -                | -         |    -0.13 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|            5 |     5017 | 2025-09-30 | KHAN             | L   | 0.092      | -            | -                | -                | -         |    -1.40 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|            4 |     5061 | 2025-09-29 | Leo Team         | W   | 0.085      | 0.384        | 0.020 (0.001)    | 0.532 (0.017)    | 0 (0.000) |     2.42 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            3 |     5088 | 2025-09-28 | ALGO Esports     | W   | 0.079      | 0.384        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     0.90 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            2 |     5171 | 2025-09-27 | ARCRED           | W   | 0.071      | 0.384        | 0.019 (0.001)    | 0.872 (0.024)    | 0 (0.000) |     2.22 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            1 |     5207 | 2025-09-26 | ALGO Esports     | L   | 0.065      | -            | -                | -                | -         |    -1.31 | devoduvek, drac, JACKZ, rain240, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
