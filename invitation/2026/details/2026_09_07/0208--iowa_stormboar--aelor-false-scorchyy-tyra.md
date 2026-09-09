### Roster Details<br />
Team Name: Iowa Stormboar<br />
Roster: aelor, false, Scorchyy, TyRa<br />
Global Rank: [208](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [45]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  697.7<br />
<br />
Final Rank Value (697.7) = Starting Rank Value (689.3) + Head To Head Adjustments (8.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.152<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.3
- 400 + ( ( 0.152 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 689.3


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
|           32 |      368 | 2026-08-28 | EMPIRE          | L   | 1.000      | -            | -                | -                | -         |   -17.17 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           31 |      418 | 2026-08-27 | Villainous      | W   | 1.000      | 0.363        | 0.003 (0.001)    | 0.195 (0.071)    | 0 (0.000) |    16.89 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           30 |      461 | 2026-08-26 | Marsborne       | L   | 1.000      | -            | -                | -                | -         |    -7.59 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           29 |      512 | 2026-08-25 | Shimmer         | W   | 1.000      | 0.363        | 0.009 (0.003)    | 0.042 (0.015)    | 0 (0.000) |    13.96 | aelor, false, Scorchyy, TyRa, Valter0k    |
|           28 |     1288 | 2026-07-29 | LAG             | L   | 0.929      | -            | -                | -                | -         |    -5.74 | aelor, ayaneuu, false, Scorchyy, TyRa     |
|           27 |     1315 | 2026-07-28 | NRG             | L   | 0.920      | -            | -                | -                | -         |    -2.02 | aelor, ayaneuu, false, Scorchyy, TyRa     |
|           26 |     2196 | 2026-06-14 | Marsborne       | L   | 0.628      | -            | -                | -                | -         |    -5.00 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           25 |     2198 | 2026-06-14 | Festina Lente   | W   | 0.627      | 0.303        | 0.001 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     7.66 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           24 |     2275 | 2026-06-12 | Club 333        | W   | 0.615      | 0.303        | 0.002 (0.000)    | 0.039 (0.007)    | 0 (0.000) |     7.85 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           23 |     2307 | 2026-06-11 | DETONATE        | L   | 0.609      | -            | -                | -                | -         |    -9.55 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           22 |     3510 | 2026-05-02 | Zomblers        | L   | 0.341      | -            | -                | -                | -         |    -5.60 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           21 |     3693 | 2026-04-28 | Incognito       | W   | 0.315      | 0.354        | -                | 0.064 (0.007)    | 0 (0.000) |     2.44 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           20 |     3732 | 2026-04-27 | girl kissers    | W   | 0.308      | -            | -                | -                | 0 (0.000) |     2.24 | aelor, BiNoX, jsfeltner, Scorchyy, TyRa   |
|           19 |     3851 | 2026-04-25 | Chicken Coop    | L   | 0.295      | -            | -                | -                | -         |    -2.57 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           18 |     3863 | 2026-04-25 | M80             | L   | 0.294      | -            | -                | -                | -         |    -0.48 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           17 |     3877 | 2026-04-25 | Chicken Coop    | W   | 0.293      | 0.371        | 0.027 (0.003)    | 0.329 (0.036)    | 1 (0.293) |     6.79 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           16 |     4206 | 2026-04-11 | Zomblers        | L   | 0.202      | -            | -                | -                | -         |    -3.49 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           15 |     4237 | 2026-04-10 | 900FPSvsECO     | W   | 0.194      | -            | -                | -                | 0 (0.000) |     2.12 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           14 |     4255 | 2026-04-09 | NuTorious       | W   | 0.189      | 0.363        | 0.002 (0.000)    | 0.195 (0.013)    | 0 (0.000) |     4.03 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           13 |     4260 | 2026-04-09 | Club 333        | L   | 0.188      | -            | -                | -                | -         |    -3.54 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           12 |     4284 | 2026-04-08 | regain          | W   | 0.182      | 0.363        | 0.009 (0.001)    | 0.301 (0.020)    | 0 (0.000) |     3.46 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           11 |     4289 | 2026-04-08 | Chicanery       | L   | 0.181      | -            | -                | -                | -         |    -4.32 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           10 |     4309 | 2026-04-07 | LAG             | W   | 0.175      | 0.363        | 0.016 (0.001)    | 0.357 (0.023)    | -         |     4.79 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            9 |     4346 | 2026-04-06 | FarmVille       | W   | 0.169      | -            | -                | -                | -         |     2.35 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            8 |     4353 | 2026-04-06 | regain          | L   | 0.168      | -            | -                | -                | -         |    -2.11 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            7 |     4383 | 2026-04-05 | NuTorious       | L   | 0.162      | -            | -                | -                | -         |    -1.68 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            6 |     4527 | 2026-04-03 | LAG             | W   | 0.148      | 0.363        | 0.016 (0.001)    | 0.357 (0.019)    | -         |     4.10 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            5 |     4608 | 2026-04-02 | Shimmer         | W   | 0.142      | 0.363        | 0.009 (0.000)    | -                | -         |     2.21 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            4 |     4619 | 2026-04-02 | girl kissers    | W   | 0.141      | -            | -                | -                | -         |     1.10 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            3 |     4800 | 2026-03-31 | Aether          | L   | 0.129      | -            | -                | -                | -         |    -2.38 | aelor, BiNoX, jsfeltner, Scorchyy, TyRa   |
|            2 |     5040 | 2026-03-28 | Fisher College  | L   | 0.109      | -            | -                | -                | -         |    -1.21 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            1 |     5123 | 2026-03-27 | Beneath Reality | W   | 0.102      | -            | -                | -                | -         |     0.83 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,367.21)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.628 | $1,000.00      | $627.75         |
| 2026-04-09 |      0.189 | $8,000.00      | $1,512.10       |
| 2026-03-29 |      0.114 | $2,000.00      | $227.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
