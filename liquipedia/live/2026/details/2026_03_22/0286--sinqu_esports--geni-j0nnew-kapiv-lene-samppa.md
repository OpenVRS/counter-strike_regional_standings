### Roster Details<br />
Team Name: SINQU Esports<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [286](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [178]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  560.0<br />
<br />
Final Rank Value (560.0) = Starting Rank Value (560.5) + Head To Head Adjustments (-0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 560.5
- 400 + ( ( 0.080 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 560.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.048
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     2267 | 2026-01-23 | WOPA Esport             | L   | 0.813      | -            | -                | -                | -         |    -2.42 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           10 |     2270 | 2026-01-23 | Alliance                | L   | 0.813      | -            | -                | -                | -         |    -0.19 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            9 |     2272 | 2026-01-23 | Sidequest               | W   | 0.813      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.813) |     7.38 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            8 |     2725 | 2026-01-04 | Fingers Crossed         | L   | 0.684      | -            | -                | -                | -         |   -13.48 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            7 |     2730 | 2026-01-04 | AaB esport              | L   | 0.683      | -            | -                | -                | -         |    -1.11 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            6 |     2734 | 2026-01-04 | ESC Gaming              | L   | 0.683      | -            | -                | -                | -         |    -1.01 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            5 |     2735 | 2026-01-04 | ASTRAL Esports          | L   | 0.683      | -            | -                | -                | -         |    -1.47 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            4 |     2738 | 2026-01-04 | MINLATE (European team) | L   | 0.682      | -            | -                | -                | -         |    -1.88 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            3 |     2885 | 2025-12-17 | Nexus Gaming            | L   | 0.564      | -            | -                | -                | -         |    -1.17 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            2 |     2889 | 2025-12-17 | Lazer Cats              | L   | 0.564      | -            | -                | -                | -         |    -1.89 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            1 |     2894 | 2025-12-17 | Nexus Gaming            | W   | 0.563      | 0.339        | 0.001 (0.000)    | 0.605 (0.115)    | 1 (0.563) |    16.69 | Geni, J0nneW, KapiV, Lene, Samppa   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
