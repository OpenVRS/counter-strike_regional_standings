### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: aloneintokyo, KusMe, Something, spirit<br />
Global Rank: [354](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [229]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  513.6<br />
<br />
Final Rank Value (513.6) = Starting Rank Value (507.6) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.6
- 400 + ( ( 0.056 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 507.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4403 | 2026-03-18 | Leo           | L   | 0.279      | -            | -                | -                | -         |    -1.98 | demente, KusMe, shady, Something, spirit       |
|            6 |     4491 | 2026-03-16 | rottweilers   | L   | 0.266      | -            | -                | -                | -         |    -3.98 | demente, KusMe, shady, Something, spirit       |
|            5 |     5146 | 2026-03-03 | K27           | L   | 0.178      | -            | -                | -                | -         |    -0.04 | aloneintokyo, KusMe, maloii, Something, spirit |
|            4 |     5176 | 2026-03-02 | Black Phoenix | W   | 0.173      | 0.333        | 0.015 (0.001)    | 1.000 (0.058)    | 0 (0.000) |     4.82 | aloneintokyo, floyd, Goody, KusMe, Something   |
|            3 |     5185 | 2026-03-02 | ex-RUBY       | W   | 0.172      | 0.371        | 0.011 (0.001)    | 0.310 (0.020)    | 0 (0.000) |     4.44 | aloneintokyo, floyd, KusMe, Something, spirit  |
|            2 |     5425 | 2026-02-25 | Butterfly     | L   | 0.139      | -            | -                | -                | -         |    -0.13 | aloneintokyo, floyd, KusMe, Something, spirit  |
|            1 |     5643 | 2026-02-21 | ex-RUBY       | W   | 0.112      | 0.371        | 0.011 (0.000)    | 0.310 (0.013)    | 0 (0.000) |     2.89 | aloneintokyo, floyd, KusMe, Something, spirit  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
