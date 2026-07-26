### Roster Details<br />
Team Name: SINQU Esports<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [343](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [216]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  511.2<br />
<br />
Final Rank Value (511.2) = Starting Rank Value (509.7) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.007[<sup>2</sup>](#table1)

The average of these factors is 0.058<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.7
- 400 + ( ( 0.058 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 509.7


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


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3226 | 2026-03-29 | Strael-Bora      | L   | 0.497      | -            | -                | -                | -         |    -3.64 | Geni, J0nneW, KapiV, Lene, Samppa |
|            7 |     3246 | 2026-03-29 | HAVU             | L   | 0.496      | -            | -                | -                | -         |    -2.66 | Geni, J0nneW, KapiV, Lene, Samppa |
|            6 |     3812 | 2026-03-19 | Ex-Zero Tenacity | L   | 0.431      | -            | -                | -                | -         |    -1.94 | Geni, J0nneW, KapiV, Lene, Samppa |
|            5 |     3846 | 2026-03-18 | GenOne           | W   | 0.425      | 0.384        | 0.010 (0.002)    | 1.000 (0.163)    | 0 (0.000) |    11.39 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     3938 | 2026-03-16 | Leo Team         | L   | 0.412      | -            | -                | -                | -         |    -2.38 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     6146 | 2026-01-23 | WOPA Esport      | L   | 0.066      | -            | -                | -                | -         |    -0.04 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     6149 | 2026-01-23 | Alliance         | L   | 0.066      | -            | -                | -                | -         |    -0.00 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     6151 | 2026-01-23 | Sidequest        | W   | 0.066      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.066) |     0.73 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
