### Roster Details<br />
Team Name: Vitalem Aerem<br />
Roster: B1NGO, BZA, lan, rain, Roninbaby<br />
Global Rank: [210](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [21]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  694.9<br />
<br />
Final Rank Value (694.9) = Starting Rank Value (713.7) + Head To Head Adjustments (-18.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.224[<sup>1</sup>](#table2)
- Bounty Collected: 0.231[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.179[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 713.7
- 400 + ( ( 0.165 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 713.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      369 | 2026-08-28 | Just Swing        | L   | 1.000      | -            | -                | -                | -         |   -15.07 | B1NGO, BZA, lan, rain, Roninbaby   |
|           29 |      417 | 2026-08-27 | 5star             | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.322 (0.107)    | 0 (0.000) |    21.34 | B1NGO, BZA, lan, rain, Roninbaby   |
|           28 |      465 | 2026-08-26 | The Huns          | L   | 1.000      | -            | -                | -                | -         |    -9.18 | B1NGO, BZA, lan, rain, Roninbaby   |
|           27 |      508 | 2026-08-25 | Banzai            | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.049 (0.016)    | 0 (0.000) |    13.75 | B1NGO, BZA, lan, rain, Roninbaby   |
|           26 |      554 | 2026-08-24 | The Huns          | L   | 1.000      | -            | -                | -                | -         |    -8.94 | B1NGO, BZA, lan, rain, Roninbaby   |
|           25 |      577 | 2026-08-23 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -13.84 | B1NGO, BZA, lan, rain, Roninbaby   |
|           24 |      603 | 2026-08-22 | Chinggis Warriors | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.234 (0.033)    | 0 (0.000) |    12.22 | B1NGO, BZA, lan, rain, Roninbaby   |
|           23 |     3231 | 2026-05-12 | Change The Game   | L   | 0.411      | -            | -                | -                | -         |    -7.58 | B1NGO, lan, Miami, rain, Roninbaby |
|           22 |     3266 | 2026-05-11 | Kaleido           | L   | 0.405      | -            | -                | -                | -         |    -6.06 | B1NGO, lan, Miami, rain, Roninbaby |
|           21 |     3469 | 2026-05-03 | Rooster           | W   | 0.350      | 0.471        | 0.006 (0.001)    | 0.273 (0.045)    | 1 (0.350) |     6.08 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           20 |     3503 | 2026-05-02 | Just Swing        | W   | 0.344      | 0.471        | 0.003 (0.001)    | 0.267 (0.043)    | 1 (0.344) |     5.50 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           19 |     3523 | 2026-05-02 | Banzai            | W   | 0.342      | 0.471        | 0.001 (0.000)    | 0.049 (0.008)    | 1 (0.342) |     4.84 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           18 |     3574 | 2026-05-01 | Alter Ego         | L   | 0.336      | -            | -                | -                | -         |    -4.57 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           17 |     3605 | 2026-04-30 | Chaos             | W   | 0.330      | 0.471        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.330) |     2.64 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           16 |     3648 | 2026-04-29 | Just Swing        | L   | 0.324      | -            | -                | -                | -         |    -5.06 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           15 |     3693 | 2026-04-28 | Alter Ego         | W   | 0.317      | 0.333        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     2.30 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           14 |     3732 | 2026-04-27 | Arise             | W   | 0.311      | 0.333        | -                | 0.006 (0.001)    | -         |     1.58 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           13 |     3789 | 2026-04-26 | Banzai            | L   | 0.304      | -            | -                | -                | -         |    -5.25 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           12 |     4540 | 2026-04-03 | NEXVOID           | L   | 0.151      | -            | -                | -                | -         |    -1.97 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           11 |     4652 | 2026-04-02 | QuantumX          | L   | 0.144      | -            | -                | -                | -         |    -2.81 | B1NGO, BZA, lan, Miami, Roninbaby  |
|           10 |     4664 | 2026-04-02 | Change The Game   | L   | 0.143      | -            | -                | -                | -         |    -2.67 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            9 |     4760 | 2026-04-01 | Chaos             | W   | 0.136      | 0.352        | 0.000 (0.000)    | -                | 1 (0.136) |     1.04 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            8 |     4923 | 2026-03-30 | Change The Game   | L   | 0.123      | -            | -                | -                | -         |    -2.31 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            7 |     5228 | 2026-03-25 | Rare Atom         | L   | 0.090      | -            | -                | -                | -         |    -1.60 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            6 |     5233 | 2026-03-24 | Just Swing        | W   | 0.088      | 0.284        | 0.003 (0.000)    | 0.267 (0.007)    | 1 (0.088) |     1.36 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            5 |     5287 | 2026-03-24 | Rare Atom         | L   | 0.082      | -            | -                | -                | -         |    -1.47 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            4 |     5392 | 2026-03-22 | Alter Ego         | L   | 0.071      | -            | -                | -                | -         |    -1.05 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            3 |     5459 | 2026-03-21 | Take Me Away      | W   | 0.064      | -            | -                | -                | -         |     0.30 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            2 |     5468 | 2026-03-21 | Rare Atom         | L   | 0.063      | -            | -                | -                | -         |    -1.13 | B1NGO, BZA, lan, Miami, Roninbaby  |
|            1 |     5518 | 2026-03-20 | BMZ               | L   | 0.057      | -            | -                | -                | -         |    -1.19 | B1NGO, BZA, lan, Miami, Roninbaby  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($174.12)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.164 | $719.00        | $117.62         |
| 2026-03-25 |      0.095 | $375.00        | $35.72          |
| 2026-03-22 |      0.069 | $300.00        | $20.77          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
