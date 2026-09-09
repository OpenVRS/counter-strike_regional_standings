### Roster Details<br />
Team Name: Just Players<br />
Roster: em0k1d, rexxie, Something, spirit, sstiNiX<br />
Global Rank: [268](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  633.4<br />
<br />
Final Rank Value (633.4) = Starting Rank Value (615.3) + Head To Head Adjustments (18.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.220[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 615.3
- 400 + ( ( 0.113 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 615.3


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
|           13 |     3571 | 2026-05-01 | Bebop           | L   | 0.336      | -            | -                | -                | -         |    -3.46 | em0k1d, rexxie, Something, spirit, sstiNiX |
|           12 |     3682 | 2026-04-28 | INOX Division   | L   | 0.319      | -            | -                | -                | -         |    -1.44 | em0k1d, rexxie, Something, spirit, sstiNiX |
|           11 |     3729 | 2026-04-27 | HEROIC Academy  | W   | 0.311      | 0.344        | 0.001 (0.000)    | 0.146 (0.016)    | 0 (0.000) |     5.50 | em0k1d, rexxie, Something, spirit, sstiNiX |
|           10 |     3779 | 2026-04-26 | The Last Resort | L   | 0.305      | -            | -                | -                | -         |    -1.41 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            9 |     3871 | 2026-04-25 | Privateer       | W   | 0.297      | 0.384        | 0.004 (0.000)    | 0.218 (0.025)    | 0 (0.000) |     6.16 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            8 |     3929 | 2026-04-24 | Endless Journey | W   | 0.290      | 0.384        | 0.007 (0.001)    | 0.504 (0.056)    | 0 (0.000) |     6.17 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            7 |     3946 | 2026-04-23 | aAa             | L   | 0.285      | -            | -                | -                | -         |    -3.35 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            6 |     3977 | 2026-04-22 | Mai Tai         | W   | 0.279      | 0.384        | 0.001 (0.000)    | 0.217 (0.023)    | 0 (0.000) |     5.08 | em0k1d, rexxie, Something, spirit, sstiNiX |
|            5 |     4367 | 2026-04-05 | INOX Division   | L   | 0.165      | -            | -                | -                | -         |    -0.77 | rexxie, shady, Something, spirit, sstiNiX  |
|            4 |     4435 | 2026-04-04 | yngods          | W   | 0.159      | 0.384        | 0.000 (0.000)    | 0.031 (0.002)    | 0 (0.000) |     1.85 | rexxie, shady, Something, spirit, sstiNiX  |
|            3 |     4516 | 2026-04-03 | Permitta        | L   | 0.152      | -            | -                | -                | -         |    -1.14 | rexxie, shady, Something, spirit, sstiNiX  |
|            2 |     4706 | 2026-04-01 | Black Phoenix   | W   | 0.139      | 0.384        | 0.017 (0.001)    | 0.952 (0.051)    | 0 (0.000) |     3.61 | rexxie, shady, Something, spirit, sstiNiX  |
|            1 |     4888 | 2026-03-30 | IDoPieca        | W   | 0.125      | 0.384        | 0.000 (0.000)    | 0.008 (0.000)    | 0 (0.000) |     1.28 | rexxie, shady, Something, spirit, sstiNiX  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($144.12)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.192 | $750.00        | $144.12         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
