### Roster Details<br />
Team Name: SINQU Esports<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [271](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [173]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  607.7<br />
<br />
Final Rank Value (607.7) = Starting Rank Value (592.1) + Head To Head Adjustments (15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.128[<sup>2</sup>](#table1)

The average of these factors is 0.099<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 592.1
- 400 + ( ( 0.099 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 592.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.072
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      436 | 2026-03-19 | Ex-Zero Tenacity        | L   | 1.000      | -            | -                | -                | -         |    -4.35 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           13 |      467 | 2026-03-18 | GenOne                  | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.511 (0.196)    | 0 (0.000) |    28.24 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           12 |      552 | 2026-03-16 | Leo Team                | L   | 1.000      | -            | -                | -                | -         |    -2.38 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           11 |     2749 | 2026-01-23 | WOPA Esport             | L   | 0.766      | -            | -                | -                | -         |    -2.84 | Geni, J0nneW, KapiV, Lene, Samppa   |
|           10 |     2752 | 2026-01-23 | Alliance                | L   | 0.766      | -            | -                | -                | -         |    -0.19 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            9 |     2754 | 2026-01-23 | Sidequest               | W   | 0.766      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.766) |     6.25 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            8 |     3207 | 2026-01-04 | Fingers Crossed         | L   | 0.637      | -            | -                | -                | -         |   -13.46 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            7 |     3212 | 2026-01-04 | AaB esport              | L   | 0.636      | -            | -                | -                | -         |    -1.20 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            6 |     3216 | 2026-01-04 | ESC Gaming              | L   | 0.636      | -            | -                | -                | -         |    -1.51 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            5 |     3217 | 2026-01-04 | ASTRAL Esports          | L   | 0.636      | -            | -                | -                | -         |    -1.54 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            4 |     3220 | 2026-01-04 | MINLATE (European team) | L   | 0.635      | -            | -                | -                | -         |    -2.45 | Genii, J0nneW, KapiV, Lene, nibzeri |
|            3 |     3367 | 2025-12-17 | Nexus Gaming            | L   | 0.518      | -            | -                | -                | -         |    -1.46 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            2 |     3371 | 2025-12-17 | Lazer Cats              | L   | 0.517      | -            | -                | -                | -         |    -2.46 | Geni, J0nneW, KapiV, Lene, Samppa   |
|            1 |     3376 | 2025-12-17 | Nexus Gaming            | W   | 0.517      | 0.339        | 0.001 (0.000)    | 0.504 (0.088)    | 1 (0.517) |    14.94 | Geni, J0nneW, KapiV, Lene, Samppa   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
