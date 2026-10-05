### Roster Details<br />
Team Name: Just Players<br />
Roster: em0k1d, rexxie, Something, spirit, sstiNiX<br />
Global Rank: [347](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [229]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  485.0<br />
<br />
Final Rank Value (485.0) = Starting Rank Value (480.5) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.160[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.040<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.5
- 400 + ( ( 0.040 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 480.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4951 | 2026-05-01 | Bebop           | L   | 0.152      | -            | -                | -                | -         |    -1.94 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            7 |     5062 | 2026-04-28 | INOX Division   | L   | 0.134      | -            | -                | -                | -         |    -0.20 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            6 |     5109 | 2026-04-27 | HEROIC Academy  | W   | 0.127      | 0.344        | 0.000 (0.000)    | 0.062 (0.003)    | 0 (0.000) |     2.17 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            5 |     5159 | 2026-04-26 | The Last Resort | L   | 0.121      | -            | -                | -                | -         |    -0.20 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            4 |     5251 | 2026-04-25 | Dripmen         | W   | 0.113      | 0.384        | 0.001 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     2.53 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            3 |     5309 | 2026-04-24 | Endless Journey | W   | 0.106      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            2 |     5326 | 2026-04-23 | aAa             | L   | 0.101      | -            | -                | -                | -         |    -1.39 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            1 |     5357 | 2026-04-22 | brazylijski luz | W   | 0.094      | 0.384        | 0.000 (0.000)    | 0.124 (0.004)    | 0 (0.000) |     2.26 | em0k1d, rexxie, Something, spirit, sstiNiX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
