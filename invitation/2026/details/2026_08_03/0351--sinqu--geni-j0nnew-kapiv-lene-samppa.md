### Roster Details<br />
Team Name: SINQU<br />
Roster: Geni, J0nneW, KapiV, Lene, Samppa<br />
Global Rank: [351](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [226]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  515.9<br />
<br />
Final Rank Value (515.9) = Starting Rank Value (513.8) + Head To Head Adjustments (2.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 513.8
- 400 + ( ( 0.059 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 513.8


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
|            5 |     3760 | 2026-03-29 | Strael Bora      | L   | 0.353      | -            | -                | -                | -         |    -1.10 | Geni, J0nneW, KapiV, Lene, Samppa |
|            4 |     3789 | 2026-03-29 | HAVU             | L   | 0.352      | -            | -                | -                | -         |    -1.24 | Geni, J0nneW, KapiV, Lene, Samppa |
|            3 |     4350 | 2026-03-19 | ex-Zero Tenacity | L   | 0.286      | -            | -                | -                | -         |    -1.43 | Geni, J0nneW, KapiV, Lene, Samppa |
|            2 |     4398 | 2026-03-18 | GenOne           | W   | 0.279      | 0.384        | 0.033 (0.003)    | 1.000 (0.107)    | 0 (0.000) |     7.79 | Geni, J0nneW, KapiV, Lene, Samppa |
|            1 |     4471 | 2026-03-16 | Leo              | L   | 0.267      | -            | -                | -                | -         |    -1.88 | Geni, J0nneW, KapiV, Lene, Samppa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
