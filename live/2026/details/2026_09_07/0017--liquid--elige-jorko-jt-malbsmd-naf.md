### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, Jorko, JT, malbsMd, NAF<br />
Global Rank: [17](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [4]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1464.0<br />
<br />
Final Rank Value (1464.0) = Starting Rank Value (1482.9) + Head To Head Adjustments (-18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.547[<sup>2</sup>](#table1)
- Opponent Network: 0.257[<sup>2</sup>](#table1)
- LAN Wins: 0.878[<sup>2</sup>](#table1)

The average of these factors is 0.569<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1482.9
- 400 + ( ( 0.569 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1482.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      940 | 2026-08-09 | 1win              | L   | 0.998      | -            | -                | -                | -         |   -23.29 | EliGE, Jorko, JT, malbsMd, NAF       |
|           29 |      981 | 2026-08-08 | Metizport         | W   | 0.991      | 0.818        | 0.020 (0.017)    | 0.586 (0.475)    | 1 (0.991) |     2.55 | EliGE, Jorko, JT, malbsMd, NAF       |
|           28 |     1008 | 2026-08-07 | Dhala             | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.06 | EliGE, Jorko, JT, malbsMd, NAF       |
|           27 |     1079 | 2026-08-05 | Betclic           | L   | 0.973      | -            | -                | -                | -         |   -21.05 | EliGE, Jorko, JT, malbsMd, NAF       |
|           26 |     1087 | 2026-08-05 | fnatic            | W   | 0.972      | 0.450        | 0.045 (0.020)    | 0.893 (0.390)    | 1 (0.972) |     8.31 | EliGE, Jorko, JT, malbsMd, NAF       |
|           25 |     1108 | 2026-08-04 | 9INE              | W   | 0.966      | 0.450        | 0.018 (0.008)    | 0.315 (0.137)    | 1 (0.966) |     2.35 | EliGE, Jorko, JT, malbsMd, NAF       |
|           24 |     1200 | 2026-08-01 | Betclic           | W   | 0.946      | 0.450        | 0.059 (0.025)    | 0.355 (0.151)    | 1 (0.946) |     8.69 | EliGE, Jorko, JT, malbsMd, NAF       |
|           23 |     1215 | 2026-08-01 | atputies          | W   | 0.944      | -            | -                | -                | 1 (0.944) |     0.17 | EliGE, Jorko, JT, malbsMd, NAF       |
|           22 |     1274 | 2026-07-30 | Spirit            | L   | 0.932      | -            | -                | -                | -         |    -1.48 | EliGE, Jorko, JT, malbsMd, NAF       |
|           21 |     1435 | 2026-07-25 | G2                | W   | 0.899      | 0.903        | 0.539 (0.437)    | 0.392 (0.318)    | -         |    22.55 | EliGE, Jorko, JT, malbsMd, NAF       |
|           20 |     1468 | 2026-07-24 | Vitality          | W   | 0.893      | 0.903        | 0.858 (0.691)    | 0.422 (0.340)    | -         |    25.71 | EliGE, Jorko, JT, malbsMd, NAF       |
|           19 |     2454 | 2026-06-05 | FlyQuest          | L   | 0.566      | -            | -                | -                | -         |   -15.33 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           18 |     2466 | 2026-06-04 | HEROIC            | W   | 0.560      | 0.624        | 0.114 (0.040)    | 0.695 (0.243)    | 1 (0.560) |     6.01 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           17 |     2499 | 2026-06-03 | MIBR              | L   | 0.552      | -            | -                | -                | -         |    -9.61 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           16 |     2511 | 2026-06-02 | BETBOOM           | L   | 0.547      | -            | -                | -                | -         |    -8.42 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           15 |     2524 | 2026-06-02 | BIG               | W   | 0.545      | 0.624        | 0.150 (0.051)    | 0.566 (0.193)    | 1 (0.545) |    10.80 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           14 |     2998 | 2026-05-21 | The MongolZ       | L   | 0.465      | -            | -                | -                | -         |    -7.94 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           13 |     3021 | 2026-05-20 | 3DMAX             | W   | 0.463      | 1.000        | 0.301 (0.139)    | 0.387 (0.179)    | 1 (0.463) |     4.12 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           12 |     3207 | 2026-05-13 | GamerLegion       | L   | 0.413      | -            | -                | -                | -         |    -7.86 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           11 |     3237 | 2026-05-12 | M80               | W   | 0.409      | 1.000        | 0.131 (0.054)    | 0.350 (0.143)    | 1 (0.409) |     2.57 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           10 |     3281 | 2026-05-11 | Astralis          | L   | 0.401      | -            | -                | -                | -         |    -6.88 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            9 |     4151 | 2026-04-14 | 3DMAX             | L   | 0.220      | -            | -                | -                | -         |    -5.07 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            8 |     4171 | 2026-04-13 | Spirit            | L   | 0.213      | -            | -                | -                | -         |    -0.35 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            7 |     4812 | 2026-03-31 | Sashi             | L   | 0.127      | -            | -                | -                | -         |    -3.17 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            6 |     4834 | 2026-03-31 | HAVU              | W   | 0.126      | -            | -                | -                | -         |     0.13 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            5 |     4868 | 2026-03-31 | M80               | L   | 0.125      | -            | -                | -                | -         |    -3.22 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            4 |     4946 | 2026-03-30 | Inner Circle      | W   | 0.118      | -            | -                | -                | -         |     2.11 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            3 |     5415 | 2026-03-22 | The MongolZ       | L   | 0.067      | -            | -                | -                | -         |    -1.25 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            2 |     5483 | 2026-03-21 | Ninjas in Pyjamas | W   | 0.058      | -            | -                | -                | -         |     0.02 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            1 |     5583 | 2026-03-19 | Spirit            | L   | 0.046      | -            | -                | -                | -         |    -0.07 | EliGE, malbsMd, NAF, siuhy, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($103,429.18)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-05 |      0.973 | $8,000.00      | $7,786.99       |
| 2026-08-02 |      0.952 | $81,250.00     | $77,346.04      |
| 2026-05-24 |      0.484 | $10,000.00     | $4,840.70       |
| 2026-05-17 |      0.441 | $20,000.00     | $8,810.66       |
| 2026-04-19 |      0.253 | $4,000.00      | $1,013.91       |
| 2026-03-29 |      0.112 | $32,500.00     | $3,630.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
