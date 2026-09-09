### Roster Details<br />
Team Name: NEXVOID<br />
Roster: AccuracyTG, erkaSt, MiQ, xerolte, Zesta<br />
Global Rank: [136](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [9]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  832.0<br />
<br />
Final Rank Value (832.0) = Starting Rank Value (764.5) + Head To Head Adjustments (67.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.286[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.5
- 400 + ( ( 0.192 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 764.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      116 | 2026-09-03 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -23.32 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           45 |      146 | 2026-09-02 | Lynn Vision       | L   | 1.000      | -            | -                | -                | -         |    -2.48 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           44 |      150 | 2026-09-02 | FlyQuest          | L   | 1.000      | -            | -                | -                | -         |    -4.95 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           43 |      155 | 2026-09-01 | Kaleido           | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.267 (0.038)    | 0 (0.000) |     9.81 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           42 |      169 | 2026-09-01 | Rare Atom         | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.337 (0.112)    | 0 (0.000) |    14.04 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           41 |      175 | 2026-09-01 | 5star             | L   | 1.000      | -            | -                | -                | -         |   -16.24 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           40 |      215 | 2026-08-31 | Just Swing        | W   | 1.000      | 0.143        | -                | 0.267 (0.038)    | 0 (0.000) |    11.45 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           39 |      262 | 2026-08-30 | Rare Atom         | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.337 (0.112)    | -         |    13.15 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           38 |      366 | 2026-08-28 | Chinggis Warriors | W   | 1.000      | 0.333        | -                | 0.234 (0.078)    | -         |     7.72 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           37 |      458 | 2026-08-26 | Alter Ego         | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.279 (0.093)    | -         |    15.12 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           36 |      512 | 2026-08-25 | NSN               | W   | 1.000      | -            | -                | -                | -         |     4.82 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           35 |      551 | 2026-08-24 | Chinggis Warriors | W   | 1.000      | -            | -                | -                | -         |     7.87 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           34 |      575 | 2026-08-23 | Kaleido           | L   | 1.000      | -            | -                | -                | -         |   -18.80 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           33 |      592 | 2026-08-22 | Alter Ego         | L   | 1.000      | -            | -                | -                | -         |   -18.85 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           32 |     1418 | 2026-07-25 | The Huns          | W   | 0.903      | 0.281        | 0.025 (0.006)    | 0.361 (0.092)    | -         |    16.16 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           31 |     1457 | 2026-07-24 | The Huns          | W   | 0.896      | 0.281        | 0.025 (0.006)    | 0.361 (0.091)    | -         |    16.76 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           30 |     1485 | 2026-07-23 | 5star             | W   | 0.889      | 0.281        | 0.008 (0.002)    | 0.322 (0.081)    | -         |    17.66 | AccuracyTG, erkaSt, MiQ, xerolte, Zesta      |
|           29 |     3239 | 2026-05-12 | FlyQuest          | L   | 0.410      | -            | -                | -                | -         |    -1.63 | AccuracyTG, erkaSt, MiQ, sergelen19k, Zesta  |
|           28 |     3285 | 2026-05-11 | Chinggis Warriors | L   | 0.402      | -            | -                | -                | -         |    -6.53 | AccuracyTG, Diesen, erkaSt, MiQ, sergelen19k |
|           27 |     3458 | 2026-05-03 | TYLOO             | L   | 0.351      | -            | -                | -                | -         |    -0.55 | AccuracyTG, erkaSt, MiQ, sergelen19k, Zesta  |
|           26 |     3559 | 2026-05-01 | Chinggis Warriors | W   | 0.337      | -            | -                | -                | -         |     5.24 | AccuracyTG, erkaSt, MiQ, sergelen19k, Zesta  |
|           25 |     3652 | 2026-04-29 | The Huns          | W   | 0.324      | 0.333        | 0.025 (0.003)    | 0.361 (0.039)    | -         |     6.19 | AccuracyTG, erkaSt, MiQ, sergelen19k, Zesta  |
|           24 |     3730 | 2026-04-27 | Kaleido           | W   | 0.311      | -            | -                | -                | -         |     4.30 | AccuracyTG, erkaSt, MiQ, sergelen19k, Zesta  |
|           23 |     3797 | 2026-04-26 | BORING PLAYERS    | W   | 0.304      | -            | -                | -                | -         |     3.03 | AccuracyTG, erkaSt, MiQ, sergelen19k, Zesta  |
|           22 |     4267 | 2026-04-08 | Chinggis Warriors | L   | 0.185      | -            | -                | -                | -         |    -2.96 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           21 |     4302 | 2026-04-07 | Banzai            | W   | 0.177      | -            | -                | -                | -         |     1.98 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           20 |     4341 | 2026-04-06 | NSN               | W   | 0.170      | -            | -                | -                | -         |     0.97 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           19 |     4386 | 2026-04-05 | 5star             | W   | 0.164      | -            | -                | -                | -         |     3.24 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           18 |     4469 | 2026-04-04 | TYLOO             | W   | 0.157      | 0.333        | 0.145 (0.008)    | -                | -         |     4.74 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           17 |     4486 | 2026-04-04 | 5star             | L   | 0.156      | -            | -                | -                | -         |    -1.83 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           16 |     4540 | 2026-04-03 | Vitalem Aerem     | W   | 0.151      | -            | -                | -                | -         |     1.97 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           15 |     4562 | 2026-04-03 | LEGAM             | W   | 0.150      | -            | -                | -                | 1 (0.150) |     1.28 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           14 |     4649 | 2026-04-02 | NSN               | L   | 0.144      | -            | -                | -                | -         |    -3.71 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           13 |     4661 | 2026-04-02 | 5star             | L   | 0.144      | -            | -                | -                | -         |    -1.68 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           12 |     4729 | 2026-04-01 | The Huns          | L   | 0.138      | -            | -                | -                | -         |    -1.67 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           11 |     4815 | 2026-03-31 | The Huns          | W   | 0.131      | 0.624        | 0.025 (0.002)    | -                | -         |     2.55 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|           10 |     4846 | 2026-03-31 | Chinggis Warriors | W   | 0.130      | -            | -                | -                | -         |     2.06 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            9 |     5456 | 2026-03-21 | Banzai            | L   | 0.064      | -            | -                | -                | -         |    -1.30 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            8 |     5469 | 2026-03-21 | The Huns          | W   | 0.062      | -            | -                | -                | 1 (0.062) |     1.22 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            7 |     5525 | 2026-03-20 | 5star             | L   | 0.056      | -            | -                | -                | -         |    -0.65 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            6 |     5531 | 2026-03-19 | fullw             | W   | 0.055      | -            | -                | -                | 1 (0.055) |     0.41 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            5 |     5569 | 2026-03-19 | Chinggis Warriors | L   | 0.050      | -            | -                | -                | -         |    -0.79 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            4 |     5571 | 2026-03-19 | QuantumX          | W   | 0.049      | -            | -                | -                | 1 (0.049) |     0.46 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            3 |     5617 | 2026-03-18 | 5star             | W   | 0.043      | -            | -                | -                | 1 (0.043) |     0.85 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            2 |     5658 | 2026-03-17 | Sensation         | W   | 0.036      | -            | -                | -                | 1 (0.036) |     0.29 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |
|            1 |     5706 | 2026-03-15 | 100RA             | W   | 0.028      | -            | -                | -                | 1 (0.028) |     0.10 | AccuracyTG, erkaSt, MiQ, OCEANA, Zesta       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,755.37)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-01 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-07-25 |      0.903 | $1,395.00      | $1,259.70       |
| 2026-05-03 |      0.351 | $2,500.00      | $877.95         |
| 2026-04-09 |      0.191 | $1,500.00      | $286.35         |
| 2026-04-04 |      0.156 | $375.00        | $58.65          |
| 2026-03-22 |      0.070 | $679.00        | $47.33          |
| 2026-03-20 |      0.056 | $4,000.00      | $225.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
