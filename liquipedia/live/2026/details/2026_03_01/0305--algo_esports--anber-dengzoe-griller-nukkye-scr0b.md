### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, Dengzoe, Griller, nukkye, Scr0b<br />
Global Rank: [305](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [181]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  494.1<br />
<br />
Final Rank Value (494.1) = Starting Rank Value (497.2) + Head To Head Adjustments (-3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.2
- 400 + ( ( 0.051 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 497.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.037
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |     3078 | 2025-11-03 | Nuclear TigeRES    | L   | 0.407      | -            | -                | -                | -         |    -0.14 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           16 |     3277 | 2025-10-27 | MASONIC            | L   | 0.360      | -            | -                | -                | -         |    -1.37 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           15 |     3314 | 2025-10-26 | NOVAQ              | L   | 0.354      | -            | -                | -                | -         |    -0.38 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           14 |     3375 | 2025-10-25 | ENCE Academy       | L   | 0.347      | -            | -                | -                | -         |    -1.66 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           13 |     3396 | 2025-10-25 | Square Sausages    | W   | 0.345      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.02 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           12 |     3438 | 2025-10-24 | The Glecs          | L   | 0.340      | -            | -                | -                | -         |    -5.22 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           11 |     3566 | 2025-10-19 | The Last Resort    | L   | 0.307      | -            | -                | -                | -         |    -1.40 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           10 |     3594 | 2025-10-18 | M1X                | W   | 0.299      | 0.384        | 0.000 (0.000)    | 0.047 (0.005)    | 0 (0.000) |     5.61 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            9 |     3614 | 2025-10-17 | The Last Resort    | L   | 0.293      | -            | -                | -                | -         |    -1.29 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            8 |     4348 | 2025-09-28 | Mousquetaires      | L   | 0.167      | -            | -                | -                | -         |    -2.58 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            7 |     4406 | 2025-09-27 | THE (Russian team) | L   | 0.160      | -            | -                | -                | -         |    -2.52 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            6 |     4467 | 2025-09-26 | Mousquetaires      | W   | 0.153      | 0.384        | 0.000 (0.000)    | 0.019 (0.001)    | 0 (0.000) |     2.43 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            5 |     4693 | 2025-09-18 | M1X                | L   | 0.101      | -            | -                | -                | -         |    -1.41 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            4 |     4751 | 2025-09-17 | Square Sausages    | W   | 0.091      | 0.384        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.43 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            3 |     4835 | 2025-09-14 | NIP Impact         | W   | 0.072      | 0.384        | 0.047 (0.001)    | 0.113 (0.003)    | 0 (0.000) |     1.93 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            2 |     4891 | 2025-09-13 | Mousquetaires      | L   | 0.065      | -            | -                | -                | -         |    -0.36 | anber, Dengzoe, Few, Scr0b, St0m4k     |
|            1 |     5152 | 2025-09-07 | Ex-Zero Tenacity   | L   | 0.026      | -            | -                | -                | -         |    -0.17 | anber, Dengzoe, Few, Scr0b, St0m4k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
