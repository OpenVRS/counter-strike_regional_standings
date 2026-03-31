### Roster Details<br />
Team Name: Mousquetaires<br />
Roster: devoduvek, drac, JACKZ, Tarkky<br />
Global Rank: [311](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [185]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  495.5<br />
<br />
Final Rank Value (495.5) = Starting Rank Value (494.4) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 494.4
- 400 + ( ( 0.047 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 494.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.003
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5171 | 2025-10-01 | ESC Gaming   | L   | 0.050      | -            | -                | -                | -         |    -0.06 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|            5 |     5192 | 2025-09-30 | KHAN         | L   | 0.044      | -            | -                | -                | -         |    -0.71 | devoduvek, drac, JACKZ, Kyojin, Tarkky  |
|            4 |     5236 | 2025-09-29 | Leo Team     | W   | 0.037      | 0.384        | 0.020 (0.000)    | 0.528 (0.008)    | 0 (0.000) |     1.08 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            3 |     5263 | 2025-09-28 | ALGO Esports | W   | 0.031      | 0.384        | 0.000 (0.000)    | 0.014 (0.000)    | 0 (0.000) |     0.37 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            2 |     5346 | 2025-09-27 | ARCRED       | W   | 0.023      | 0.384        | 0.020 (0.000)    | 0.873 (0.008)    | 0 (0.000) |     0.72 | devoduvek, drac, JACKZ, rain240, Tarkky |
|            1 |     5382 | 2025-09-26 | ALGO Esports | L   | 0.017      | -            | -                | -                | -         |    -0.34 | devoduvek, drac, JACKZ, rain240, Tarkky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
