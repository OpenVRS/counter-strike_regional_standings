### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, Tarkky<br />
Global Rank: [299](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [177]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  509.0<br />
<br />
Final Rank Value (509.0) = Starting Rank Value (501.9) + Head To Head Adjustments (7.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.054<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.9
- 400 + ( ( 0.054 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 501.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.019
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4256 | 2025-10-01 | Friendly Campers | L   | 0.185      | -            | -                | -                | -         |    -0.15 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|            5 |     4277 | 2025-09-30 | KHAN             | L   | 0.180      | -            | -                | -                | -         |    -2.42 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|            4 |     4321 | 2025-09-29 | Leo Team         | W   | 0.173      | 0.384        | 0.012 (0.001)    | 0.437 (0.029)    | 0 (0.000) |     4.71 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            3 |     4348 | 2025-09-28 | ALGO Esports     | W   | 0.167      | 0.384        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     2.58 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            2 |     4431 | 2025-09-27 | ARCRED           | W   | 0.159      | 0.384        | 0.011 (0.001)    | 0.942 (0.057)    | 0 (0.000) |     4.78 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            1 |     4467 | 2025-09-26 | ALGO Esports     | L   | 0.153      | -            | -                | -                | -         |    -2.43 | devoduvek, drac, JACKZ, rain240, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
