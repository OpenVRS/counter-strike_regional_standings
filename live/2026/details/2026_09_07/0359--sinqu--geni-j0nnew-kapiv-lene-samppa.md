### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [359](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [230]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  493.4<br />
<br />
Final Rank Value (493.4) = Starting Rank Value (495.3) + Head To Head Adjustments (-1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.199[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.3
- 400 + ( ( 0.050 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 495.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4967 | 2026-03-29 | Strael Bora      | L   | 0.118      | -            | -                | -                | -         |    -2.31 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     4996 | 2026-03-29 | HAVU             | L   | 0.117      | -            | -                | -                | -         |    -0.42 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     5557 | 2026-03-19 | ex-Zero Tenacity | L   | 0.051      | -            | -                | -                | -         |    -0.14 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     5605 | 2026-03-18 | GenOne           | W   | 0.044      | 0.384        | 0.055 (0.001)    | 1.000 (0.017)    | 0 (0.000) |     1.33 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     5678 | 2026-03-16 | Leo              | L   | 0.032      | -            | -                | -                | -         |    -0.34 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
