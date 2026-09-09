### Roster Details<br />
Team Name: Iowa Stormboar<br />
Roster: aelor, false, Scorchyy, TyRa<br />
Global Rank: [207](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [45]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  698.5<br />
<br />
Final Rank Value (698.5) = Starting Rank Value (690.1) + Head To Head Adjustments (8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.034[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 690.1
- 400 + ( ( 0.152 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 690.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      340 | 2026-08-28 | EMPIRE          | L   | 1.000      | -            | -                | -                | -         |   -17.21 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           32 |      390 | 2026-08-27 | Villainous      | W   | 1.000      | 0.363        | 0.003 (0.001)    | 0.195 (0.071)    | 0 (0.000) |    16.85 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           31 |      433 | 2026-08-26 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -7.58 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           30 |      484 | 2026-08-25 | Shimmer         | W   | 1.000      | 0.363        | 0.009 (0.003)    | 0.042 (0.015)    | 0 (0.000) |    13.90 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           29 |     1260 | 2026-07-29 | LAG             | L   | 0.934      | -            | -                | -                | -         |    -5.83 | aelor, ayaneuu, false, Scorchyy, TyRa     |
|           28 |     1287 | 2026-07-28 | NRG             | L   | 0.926      | -            | -                | -                | -         |    -2.02 | aelor, ayaneuu, false, Scorchyy, TyRa     |
|           27 |     2168 | 2026-06-14 | Marsborne       | L   | 0.633      | -            | -                | -                | -         |    -5.04 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           26 |     2170 | 2026-06-14 | Festina Lente   | W   | 0.633      | 0.303        | 0.001 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     7.70 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           25 |     2247 | 2026-06-12 | Club 333        | W   | 0.621      | 0.303        | 0.002 (0.000)    | 0.040 (0.007)    | 0 (0.000) |     7.91 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           24 |     2279 | 2026-06-11 | DETONATE        | L   | 0.614      | -            | -                | -                | -         |    -9.67 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           23 |     3482 | 2026-05-02 | Zomblers        | L   | 0.346      | -            | -                | -                | -         |    -5.70 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           22 |     3665 | 2026-04-28 | Incognito       | W   | 0.321      | 0.354        | -                | 0.064 (0.007)    | 0 (0.000) |     2.48 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           21 |     3704 | 2026-04-27 | girl kissers    | W   | 0.314      | -            | -                | -                | 0 (0.000) |     2.27 | aelor, BiNoX, jsfeltner, Scorchyy, TyRa   |
|           20 |     3823 | 2026-04-25 | Chicken Coop    | L   | 0.300      | -            | -                | -                | -         |    -2.62 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           19 |     3835 | 2026-04-25 | M80             | L   | 0.299      | -            | -                | -                | -         |    -0.48 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           18 |     3849 | 2026-04-25 | Chicken Coop    | W   | 0.299      | 0.371        | 0.027 (0.003)    | 0.330 (0.037)    | 1 (0.299) |     6.91 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           17 |     4178 | 2026-04-11 | Zomblers        | L   | 0.207      | -            | -                | -                | -         |    -3.59 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           16 |     4209 | 2026-04-10 | 900FPSvsECO     | W   | 0.199      | -            | -                | -                | 0 (0.000) |     2.17 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           15 |     4227 | 2026-04-09 | NuTorious       | W   | 0.194      | 0.363        | 0.002 (0.000)    | 0.196 (0.014)    | 0 (0.000) |     4.15 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           14 |     4232 | 2026-04-09 | Club 333        | L   | 0.193      | -            | -                | -                | -         |    -3.65 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           13 |     4256 | 2026-04-08 | regain          | W   | 0.187      | 0.363        | 0.009 (0.001)    | 0.303 (0.021)    | 0 (0.000) |     3.56 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           12 |     4261 | 2026-04-08 | Chicanery       | L   | 0.186      | -            | -                | -                | -         |    -4.45 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           11 |     4281 | 2026-04-07 | LAG             | W   | 0.181      | 0.363        | 0.016 (0.001)    | 0.360 (0.024)    | -         |     4.94 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           10 |     4318 | 2026-04-06 | FarmVille       | W   | 0.174      | -            | -                | -                | -         |     2.43 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            9 |     4325 | 2026-04-06 | regain          | L   | 0.173      | -            | -                | -                | -         |    -2.18 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            8 |     4355 | 2026-04-05 | NuTorious       | L   | 0.167      | -            | -                | -                | -         |    -1.73 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            7 |     4499 | 2026-04-03 | LAG             | W   | 0.154      | 0.363        | 0.016 (0.001)    | 0.360 (0.020)    | -         |     4.25 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            6 |     4580 | 2026-04-02 | Shimmer         | W   | 0.148      | 0.363        | 0.009 (0.000)    | -                | -         |     2.29 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            5 |     4591 | 2026-04-02 | girl kissers    | W   | 0.147      | -            | -                | -                | -         |     1.14 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            4 |     4772 | 2026-03-31 | Aether          | L   | 0.134      | -            | -                | -                | -         |    -2.48 | aelor, BiNoX, jsfeltner, Scorchyy, TyRa   |
|            3 |     5012 | 2026-03-28 | Fisher College  | L   | 0.114      | -            | -                | -                | -         |    -1.26 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            2 |     5095 | 2026-03-27 | Beneath Reality | W   | 0.107      | -            | -                | -                | -         |     0.88 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            1 |     5903 | 2026-03-11 | Zomblers        | W   | 0.001      | -            | -                | -                | -         |     0.01 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,427.33)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.633 | $1,000.00      | $633.21         |
| 2026-04-09 |      0.194 | $8,000.00      | $1,555.82       |
| 2026-03-29 |      0.119 | $2,000.00      | $238.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
