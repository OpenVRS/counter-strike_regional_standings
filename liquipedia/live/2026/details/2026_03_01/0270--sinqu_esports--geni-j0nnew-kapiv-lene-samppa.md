### Roster Details<br />
Team Name: SINQU Esports<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [270](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [164]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  567.0<br />
<br />
Final Rank Value (567.0) = Starting Rank Value (573.1) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 573.1
- 400 + ( ( 0.092 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 573.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.063
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1364 | 2026-01-23 | WOPA Esport             | L   | 0.949      | -            | -                | -                | -         |    -3.02 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           10 |     1367 | 2026-01-23 | Alliance                | L   | 0.948      | -            | -                | -                | -         |    -0.51 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            9 |     1369 | 2026-01-23 | Sidequest               | W   | 0.948      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.948) |     8.31 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            8 |     1810 | 2026-01-04 | Fingers Crossed         | L   | 0.819      | -            | -                | -                | -         |   -15.85 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            7 |     1815 | 2026-01-04 | AaB esport              | L   | 0.819      | -            | -                | -                | -         |    -3.75 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            6 |     1819 | 2026-01-04 | Friendly Campers        | L   | 0.818      | -            | -                | -                | -         |    -0.85 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            5 |     1820 | 2026-01-04 | ASTRAL Esports          | L   | 0.818      | -            | -                | -                | -         |    -2.02 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            4 |     1823 | 2026-01-04 | MINLATE (European team) | L   | 0.818      | -            | -                | -                | -         |    -2.19 | Genii, J0nneW, kapiV, Lene, nibzeri |
|            3 |     1970 | 2025-12-17 | Nexus Gaming            | L   | 0.700      | -            | -                | -                | -         |    -2.76 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            2 |     1974 | 2025-12-17 | Lazer Cats              | L   | 0.699      | -            | -                | -                | -         |    -3.03 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            1 |     1979 | 2025-12-17 | Nexus Gaming            | W   | 0.699      | 0.339        | 0.001 (0.000)    | 0.685 (0.162)    | 1 (0.699) |    19.50 | Geni, J0nneW, KapiV, Lene, Samppa   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
