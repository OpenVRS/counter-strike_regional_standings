### Roster Details<br />
Team Name: SINQU Esports<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [248](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [160]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  612.1<br />
<br />
Final Rank Value (612.1) = Starting Rank Value (610.4) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.191[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.223[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 610.4
- 400 + ( ( 0.110 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 610.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.058
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1543 | 2026-01-23 | WOPA Esport             | L   | 0.907      | -            | -                | -                | -         |    -3.66 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           13 |     1546 | 2026-01-23 | Alliance                | L   | 0.907      | -            | -                | -                | -         |    -0.60 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           12 |     1548 | 2026-01-23 | Sidequest               | W   | 0.907      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.907) |     6.57 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           11 |     1994 | 2026-01-04 | Fingers Crossed         | L   | 0.778      | -            | -                | -                | -         |   -15.34 | Genii, J0nneW, kapiV, Lene, nibzeri |
|           10 |     1999 | 2026-01-04 | AaB esport              | L   | 0.777      | -            | -                | -                | -         |    -4.10 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            9 |     2003 | 2026-01-04 | Friendly Campers        | L   | 0.777      | -            | -                | -                | -         |    -1.16 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            8 |     2004 | 2026-01-04 | ASTRAL Esports          | L   | 0.777      | -            | -                | -                | -         |    -2.53 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            7 |     2007 | 2026-01-04 | MINLATE (European team) | L   | 0.776      | -            | -                | -                | -         |    -1.95 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            6 |     2155 | 2025-12-17 | Nexus Gaming            | L   | 0.659      | -            | -                | -                | -         |    -3.07 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            5 |     2157 | 2025-12-17 | Nexus Gaming            | L   | 0.659      | -            | -                | -                | -         |    -2.98 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            4 |     2164 | 2025-12-17 | Lazer Cats              | L   | 0.658      | -            | -                | -                | -         |    -2.80 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            3 |     2165 | 2025-12-17 | Lazer Cats              | L   | 0.658      | -            | -                | -                | -         |    -2.73 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            2 |     2172 | 2025-12-17 | Nexus Gaming            | W   | 0.658      | 0.308        | 0.001 (0.000)    | 0.558 (0.113)    | 1 (0.658) |    18.29 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            1 |     2174 | 2025-12-17 | Nexus Gaming            | W   | 0.658      | 0.339        | 0.001 (0.000)    | 0.558 (0.124)    | 1 (0.658) |    17.82 | Geni, J0nneW, KapiV, Lene, Samppa   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
