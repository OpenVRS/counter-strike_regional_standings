### Roster Details<br />
Team Name: Just Players<br />
Roster: em0k1d, rexxie, Something, spirit, sstiNiX<br />
Global Rank: [272](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [183]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  631.6<br />
<br />
Final Rank Value (631.6) = Starting Rank Value (614.7) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 614.7
- 400 + ( ( 0.113 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 614.7


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
|           13 |     3599 | 2026-05-01 | Bebop           | L   | 0.331      | -            | -                | -                | -         |    -3.42 | em0k1d, rexxie, Something, spirit, sstiNiX |
|           12 |     3710 | 2026-04-28 | INOX Division   | L   | 0.313      | -            | -                | -                | -         |    -1.41 | em0k1d, rexxie, Something, spirit, sstiNiX |
|           11 |     3757 | 2026-04-27 | HEROIC Academy  | W   | 0.306      | 0.344        | 0.001 (0.000)    | 0.144 (0.015)    | 0 (0.000) |     5.38 | em0k1d, rexxie, Something, spirit, sstiNiX |
|           10 |     3807 | 2026-04-26 | The Last Resort | L   | 0.300      | -            | -                | -                | -         |    -1.38 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            9 |     3899 | 2026-04-25 | Privateer       | W   | 0.292      | 0.384        | 0.004 (0.000)    | 0.216 (0.024)    | 0 (0.000) |     6.07 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            8 |     3957 | 2026-04-24 | Endless Journey | W   | 0.285      | 0.384        | 0.007 (0.001)    | 0.504 (0.055)    | 0 (0.000) |     6.05 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            7 |     3974 | 2026-04-23 | aAa             | L   | 0.280      | -            | -                | -                | -         |    -3.29 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            6 |     4005 | 2026-04-22 | Mai Tai         | W   | 0.273      | 0.384        | 0.001 (0.000)    | 0.216 (0.023)    | 0 (0.000) |     5.00 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            5 |     4395 | 2026-04-05 | INOX Division   | L   | 0.160      | -            | -                | -                | -         |    -0.73 | rexxie, shady, Something, spirit, sstiNiX  |
|            4 |     4463 | 2026-04-04 | yngods          | W   | 0.153      | 0.384        | 0.000 (0.000)    | 0.029 (0.002)    | 0 (0.000) |     1.79 | rexxie, shady, Something, spirit, sstiNiX  |
|            3 |     4544 | 2026-04-03 | los kogutos     | L   | 0.147      | -            | -                | -                | -         |    -1.85 | rexxie, shady, Something, spirit, sstiNiX  |
|            2 |     4734 | 2026-04-01 | Black Phoenix   | W   | 0.133      | 0.384        | 0.017 (0.001)    | 0.948 (0.049)    | 0 (0.000) |     3.47 | rexxie, shady, Something, spirit, sstiNiX  |
|            1 |     4916 | 2026-03-30 | IDoPieca        | W   | 0.120      | 0.384        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.22 | rexxie, shady, Something, spirit, sstiNiX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($140.02)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.187 | $750.00        | $140.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
