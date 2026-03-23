### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, Dengzoe, Griller, nukkye, Scr0b<br />
Global Rank: [332](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [195]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  403.0<br />
<br />
Final Rank Value (403.0) = Starting Rank Value (400.1) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.018
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     3818 | 2025-11-03 | Nuclear TigeRES    | L   | 0.320      | -            | -                | -                | -         |    -0.04 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           13 |     4017 | 2025-10-27 | MASONIC            | L   | 0.272      | -            | -                | -                | -         |    -0.20 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           12 |     4054 | 2025-10-26 | NOVAQ              | L   | 0.266      | -            | -                | -                | -         |    -0.15 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           11 |     4115 | 2025-10-25 | ENCE Academy       | L   | 0.259      | -            | -                | -                | -         |    -0.64 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           10 |     4136 | 2025-10-25 | Square Sausages    | W   | 0.258      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.05 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            9 |     4178 | 2025-10-24 | The Glecs          | L   | 0.253      | -            | -                | -                | -         |    -2.85 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            8 |     4306 | 2025-10-19 | The Last Resort    | L   | 0.219      | -            | -                | -                | -         |    -0.60 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            7 |     4334 | 2025-10-18 | M1X                | W   | 0.211      | 0.384        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     4.44 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            6 |     4354 | 2025-10-17 | The Last Resort    | L   | 0.205      | -            | -                | -                | -         |    -0.55 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            5 |     5088 | 2025-09-28 | Mousquetaires      | L   | 0.079      | -            | -                | -                | -         |    -0.90 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            4 |     5146 | 2025-09-27 | THE (Russian team) | L   | 0.073      | -            | -                | -                | -         |    -0.85 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            3 |     5207 | 2025-09-26 | Mousquetaires      | W   | 0.065      | 0.384        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.31 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            2 |     5433 | 2025-09-18 | M1X                | L   | 0.013      | -            | -                | -                | -         |    -0.14 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            1 |     5491 | 2025-09-17 | Square Sausages    | W   | 0.003      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.06 | anber, Dengzoe, Few, Scr0b, St0m4k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
