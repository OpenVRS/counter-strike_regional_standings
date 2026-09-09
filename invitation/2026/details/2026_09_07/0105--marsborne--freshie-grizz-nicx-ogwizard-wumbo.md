### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, nicx, ogwizard, WUMBO<br />
Global Rank: [105](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [20]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  910.2<br />
<br />
Final Rank Value (910.2) = Starting Rank Value (869.3) + Head To Head Adjustments (40.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.279[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 869.3
- 400 + ( ( 0.246 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 869.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       70 | 2026-09-04 | Incognito        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.14 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           29 |       75 | 2026-09-04 | The Homies       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.74 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           28 |      182 | 2026-09-01 | Voca             | L   | 1.000      | -            | -                | -                | -         |   -13.64 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           27 |      212 | 2026-08-31 | Overtake Sector  | W   | 1.000      | 0.363        | 0.008 (0.003)    | 0.242 (0.088)    | 0 (0.000) |     8.56 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           26 |      251 | 2026-08-30 | Voca             | L   | 1.000      | -            | -                | -                | -         |   -14.49 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           25 |      369 | 2026-08-28 | Chicken Coop     | W   | 1.000      | 0.363        | 0.027 (0.010)    | 0.329 (0.119)    | 0 (0.000) |    14.59 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           24 |      461 | 2026-08-26 | Iowa Stormboar   | W   | 1.000      | 0.363        | 0.005 (0.002)    | 0.203 (0.073)    | -         |     7.59 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           23 |      510 | 2026-08-25 | Elusive          | W   | 1.000      | -            | -                | -                | -         |     3.38 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           22 |     1184 | 2026-08-01 | SportsBetExpert  | L   | 0.948      | -            | -                | -                | -         |    -6.95 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           21 |     1221 | 2026-07-31 | regain           | W   | 0.942      | 0.143        | 0.009 (0.001)    | 0.301 (0.040)    | -         |    10.92 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           20 |     1290 | 2026-07-29 | NRG              | L   | 0.928      | -            | -                | -                | -         |    -5.37 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           19 |     1314 | 2026-07-28 | LAG              | W   | 0.921      | 0.143        | 0.016 (0.002)    | 0.357 (0.047)    | -         |    16.98 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           18 |     1814 | 2026-07-09 | regain           | L   | 0.794      | -            | -                | -                | -         |   -15.91 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           17 |     2196 | 2026-06-14 | Iowa Stormboar   | W   | 0.628      | 0.303        | -                | 0.203 (0.039)    | -         |     5.00 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           16 |     2224 | 2026-06-13 | Festina Lente    | W   | 0.621      | -            | -                | -                | -         |     3.54 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           15 |     2273 | 2026-06-12 | Overtake Sector  | W   | 0.615      | 0.303        | 0.008 (0.001)    | 0.242 (0.045)    | -         |     4.77 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           14 |     2309 | 2026-06-11 | NuTorious        | W   | 0.609      | -            | -                | -                | -         |     7.29 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           13 |     2545 | 2026-05-31 | Chicken Coop     | L   | 0.534      | -            | -                | -                | -         |    -8.28 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           12 |     2553 | 2026-05-31 | SportsBetExpert  | W   | 0.533      | 0.294        | 0.009 (0.001)    | 0.431 (0.068)    | 1 (0.533) |    13.64 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           11 |     2561 | 2026-05-31 | Chicken Coop     | L   | 0.532      | -            | -                | -                | -         |    -8.31 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           10 |     2581 | 2026-05-30 | Reign Above      | W   | 0.527      | -            | -                | -                | 1 (0.527) |     2.85 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            9 |     2596 | 2026-05-30 | LAG              | W   | 0.526      | 0.294        | 0.016 (0.002)    | 0.357 (0.055)    | 1 (0.526) |    11.23 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            8 |     2828 | 2026-05-24 | Overtake Sector  | W   | 0.488      | -            | -                | -                | -         |     4.09 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            7 |     2832 | 2026-05-24 | SportsBetExpert  | L   | 0.487      | -            | -                | -                | -         |    -2.63 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            6 |     3793 | 2026-04-26 | Passion UA       | L   | 0.301      | -            | -                | -                | -         |    -5.35 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |     3808 | 2026-04-26 | Fisher College   | L   | 0.300      | -            | -                | -                | -         |    -5.56 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |     3846 | 2026-04-25 | M80              | W   | 0.296      | 0.371        | 0.131 (0.014)    | -                | 1 (0.296) |     8.18 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |     3850 | 2026-04-25 | Voca             | W   | 0.295      | 0.371        | 0.030 (0.003)    | 0.375 (0.041)    | 1 (0.295) |     4.21 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |     3860 | 2026-04-25 | Unreal Nightmare | W   | 0.294      | -            | -                | -                | 1 (0.294) |     0.77 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |     3869 | 2026-04-25 | Voca             | L   | 0.294      | -            | -                | -                | -         |    -5.12 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,067.66)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-01 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-06-14 |      0.628 | $3,000.00      | $1,883.24       |
| 2026-05-31 |      0.534 | $1,200.00      | $641.15         |
| 2026-05-24 |      0.488 | $250.00        | $122.08         |
| 2026-04-26 |      0.301 | $1,400.00      | $421.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
