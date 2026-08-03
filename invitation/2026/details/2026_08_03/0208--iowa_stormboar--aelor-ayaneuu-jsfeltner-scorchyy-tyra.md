### Roster Details<br />
Team Name: Iowa Stormboar<br />
Roster: aelor, ayaneuu, jsfeltner, Scorchyy, TyRa<br />
Global Rank: [208](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [42]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  744.7<br />
<br />
Final Rank Value (744.7) = Starting Rank Value (743.4) + Head To Head Adjustments (1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.268[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.177<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.4
- 400 + ( ( 0.177 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 743.4


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
|           38 |       92 | 2026-07-29 | LAG             | L   | 1.000      | -            | -                | -                | -         |   -11.38 | aelor, ayaneuu, false, Scorchyy, TyRa     |
|           37 |      112 | 2026-07-28 | NRG             | L   | 1.000      | -            | -                | -                | -         |    -2.12 | aelor, ayaneuu, false, Scorchyy, TyRa     |
|           36 |      961 | 2026-06-14 | Marsborne       | L   | 0.868      | -            | -                | -                | -         |    -6.36 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           35 |      963 | 2026-06-14 | Festina Lente   | W   | 0.868      | 0.303        | -                | 0.080 (0.021)    | 0 (0.000) |     8.93 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           34 |     1040 | 2026-06-12 | Club 333        | W   | 0.856      | 0.303        | 0.003 (0.001)    | 0.103 (0.027)    | 0 (0.000) |    10.43 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           33 |     1072 | 2026-06-11 | DETONATE        | L   | 0.850      | -            | -                | -                | -         |   -17.17 | aelor, H0NeST, jsfeltner, Scorchyy, TyRa  |
|           32 |     2275 | 2026-05-02 | Zomblers        | L   | 0.582      | -            | -                | -                | -         |    -9.97 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           31 |     2458 | 2026-04-28 | Incognito       | W   | 0.556      | 0.354        | -                | 0.111 (0.022)    | 0 (0.000) |     3.85 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           30 |     2497 | 2026-04-27 | girl kissers    | W   | 0.549      | -            | -                | -                | 0 (0.000) |     3.10 | aelor, BiNoX, jsfeltner, Scorchyy, TyRa   |
|           29 |     2616 | 2026-04-25 | Chicken Coop    | L   | 0.536      | -            | -                | -                | -         |    -4.17 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           28 |     2628 | 2026-04-25 | M80             | L   | 0.535      | -            | -                | -                | -         |    -0.76 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           27 |     2642 | 2026-04-25 | Chicken Coop    | W   | 0.534      | 0.371        | 0.037 (0.007)    | 0.412 (0.081)    | 1 (0.534) |    12.93 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           26 |     2971 | 2026-04-11 | Zomblers        | L   | 0.443      | -            | -                | -                | -         |    -8.42 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           25 |     3002 | 2026-04-10 | 900FPSvsECO     | W   | 0.434      | 0.333        | -                | 0.099 (0.014)    | 0 (0.000) |     4.28 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           24 |     3020 | 2026-04-09 | NuTorious       | W   | 0.430      | 0.363        | 0.004 (0.001)    | 0.299 (0.047)    | 0 (0.000) |     9.16 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           23 |     3025 | 2026-04-09 | Club 333        | L   | 0.429      | -            | -                | -                | -         |    -8.50 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           22 |     3049 | 2026-04-08 | regain          | W   | 0.423      | 0.363        | 0.014 (0.002)    | 0.508 (0.078)    | 0 (0.000) |     6.68 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           21 |     3054 | 2026-04-08 | Incognito       | L   | 0.421      | -            | -                | -                | -         |   -10.55 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           20 |     3074 | 2026-04-07 | LAG             | W   | 0.416      | 0.363        | 0.014 (0.002)    | 0.434 (0.066)    | 0 (0.000) |     9.55 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           19 |     3111 | 2026-04-06 | FarmVille       | W   | 0.409      | 0.363        | 0.003 (0.001)    | 0.242 (0.036)    | 0 (0.000) |     5.96 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           18 |     3118 | 2026-04-06 | regain          | L   | 0.408      | -            | -                | -                | -         |    -6.58 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           17 |     3148 | 2026-04-05 | NuTorious       | L   | 0.403      | -            | -                | -                | -         |    -4.27 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           16 |     3292 | 2026-04-03 | LAG             | W   | 0.389      | 0.363        | 0.014 (0.002)    | 0.434 (0.061)    | -         |     9.22 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           15 |     3373 | 2026-04-02 | Shimmer         | W   | 0.383      | 0.363        | 0.012 (0.002)    | -                | -         |     5.25 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           14 |     3384 | 2026-04-02 | girl kissers    | W   | 0.382      | -            | -                | -                | -         |     2.44 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           13 |     3565 | 2026-03-31 | Aether          | L   | 0.369      | -            | -                | -                | -         |    -6.83 | aelor, BiNoX, jsfeltner, Scorchyy, TyRa   |
|           12 |     3805 | 2026-03-28 | Fisher College  | L   | 0.349      | -            | -                | -                | -         |    -2.41 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           11 |     3888 | 2026-03-27 | Beneath Reality | W   | 0.343      | -            | -                | -                | -         |     2.29 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|           10 |     4696 | 2026-03-11 | Zomblers        | W   | 0.236      | -            | -                | -                | -         |     3.38 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            9 |     4912 | 2026-03-07 | Fisher College  | W   | 0.210      | 0.143        | 0.036 (0.001)    | -                | -         |     5.12 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            8 |     5655 | 2026-02-20 | Zomblers        | L   | 0.110      | -            | -                | -                | -         |    -1.87 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            7 |     5709 | 2026-02-19 | LAG             | W   | 0.103      | 0.363        | 0.013 (0.000)    | -                | -         |     1.44 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            6 |     5761 | 2026-02-18 | OverKnight      | W   | 0.095      | -            | -                | -                | -         |     0.52 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            5 |     5816 | 2026-02-17 | Marsborne       | L   | 0.090      | -            | -                | -                | -         |    -1.17 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            4 |     5921 | 2026-02-15 | 900FPSvsECO     | L   | 0.076      | -            | -                | -                | -         |    -1.53 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            3 |     6044 | 2026-02-13 | Reign Above     | W   | 0.063      | -            | -                | -                | -         |     0.33 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            2 |     6166 | 2026-02-10 | Shimmer         | W   | 0.042      | -            | -                | -                | -         |     0.62 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |
|            1 |     6280 | 2026-02-06 | Chicken Coop    | L   | 0.016      | -            | -                | -                | -         |    -0.10 | aelor, ayaneuu, jsfeltner, Scorchyy, TyRa |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,015.20)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.868 | $1,000.00      | $868.47         |
| 2026-04-09 |      0.430 | $8,000.00      | $3,437.91       |
| 2026-03-29 |      0.354 | $2,000.00      | $708.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
