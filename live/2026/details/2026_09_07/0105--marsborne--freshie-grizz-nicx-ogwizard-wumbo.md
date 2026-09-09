### Roster Details<br />
Team Name: Marsborne<br />
Roster: freshie, Grizz, nicx, ogwizard, WUMBO<br />
Global Rank: [105](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [20]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  911.4<br />
<br />
Final Rank Value (911.4) = Starting Rank Value (870.5) + Head To Head Adjustments (40.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.062[<sup>2</sup>](#table1)
- LAN Wins: 0.281[<sup>2</sup>](#table1)

The average of these factors is 0.247<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 870.5
- 400 + ( ( 0.247 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 870.5


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
|           30 |       42 | 2026-09-04 | Incognito        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.13 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           29 |       47 | 2026-09-04 | The Homies       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.73 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           28 |      154 | 2026-09-01 | Voca             | L   | 1.000      | -            | -                | -                | -         |   -13.56 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           27 |      184 | 2026-08-31 | Overtake Sector  | W   | 1.000      | 0.363        | 0.008 (0.003)    | 0.242 (0.088)    | 0 (0.000) |     8.52 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           26 |      223 | 2026-08-30 | Voca             | L   | 1.000      | -            | -                | -                | -         |   -14.41 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           25 |      341 | 2026-08-28 | Chicken Coop     | W   | 1.000      | 0.363        | 0.027 (0.010)    | 0.330 (0.120)    | 0 (0.000) |    14.58 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           24 |      433 | 2026-08-26 | Iowa Stormboar   | W   | 1.000      | 0.363        | 0.005 (0.002)    | 0.204 (0.074)    | -         |     7.58 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           23 |      482 | 2026-08-25 | Elusive          | W   | 1.000      | -            | -                | -                | -         |     3.37 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           22 |     1156 | 2026-08-01 | SportsBetExpert  | L   | 0.954      | -            | -                | -                | -         |    -7.05 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           21 |     1193 | 2026-07-31 | regain           | W   | 0.947      | 0.143        | 0.009 (0.001)    | 0.303 (0.041)    | -         |    10.97 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           20 |     1262 | 2026-07-29 | NRG              | L   | 0.933      | -            | -                | -                | -         |    -5.37 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           19 |     1286 | 2026-07-28 | LAG              | W   | 0.927      | 0.143        | 0.016 (0.002)    | 0.360 (0.048)    | -         |    16.97 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           18 |     1786 | 2026-07-09 | regain           | L   | 0.799      | -            | -                | -                | -         |   -16.05 | freshie, Grizz, nicx, ogwizard, WUMBO     |
|           17 |     2168 | 2026-06-14 | Iowa Stormboar   | W   | 0.633      | -            | -                | -                | -         |     5.04 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           16 |     2196 | 2026-06-13 | Festina Lente    | W   | 0.627      | -            | -                | -                | -         |     3.55 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           15 |     2245 | 2026-06-12 | Overtake Sector  | W   | 0.621      | 0.303        | 0.008 (0.001)    | 0.242 (0.045)    | -         |     4.78 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           14 |     2281 | 2026-06-11 | NuTorious        | W   | 0.614      | -            | -                | -                | -         |     7.34 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           13 |     2517 | 2026-05-31 | Chicken Coop     | L   | 0.540      | -            | -                | -                | -         |    -8.37 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           12 |     2525 | 2026-05-31 | SportsBetExpert  | W   | 0.538      | 0.294        | 0.009 (0.001)    | 0.430 (0.068)    | 1 (0.538) |    13.75 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           11 |     2533 | 2026-05-31 | Chicken Coop     | L   | 0.538      | -            | -                | -                | -         |    -8.40 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|           10 |     2553 | 2026-05-30 | Reign Above      | W   | 0.533      | -            | -                | -                | 1 (0.533) |     2.87 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            9 |     2568 | 2026-05-30 | LAG              | W   | 0.532      | 0.294        | 0.016 (0.002)    | 0.360 (0.056)    | 1 (0.532) |    11.30 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            8 |     2800 | 2026-05-24 | Overtake Sector  | W   | 0.494      | -            | -                | -                | -         |     4.11 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            7 |     2804 | 2026-05-24 | SportsBetExpert  | L   | 0.493      | -            | -                | -                | -         |    -2.69 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            6 |     3765 | 2026-04-26 | Passion UA       | L   | 0.306      | -            | -                | -                | -         |    -5.42 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            5 |     3780 | 2026-04-26 | Fisher College   | L   | 0.305      | -            | -                | -                | -         |    -5.63 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            4 |     3818 | 2026-04-25 | M80              | W   | 0.302      | 0.371        | 0.130 (0.015)    | 0.353 (0.039)    | 1 (0.302) |     8.34 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            3 |     3822 | 2026-04-25 | Voca             | W   | 0.301      | 0.371        | 0.030 (0.003)    | 0.377 (0.042)    | 1 (0.301) |     4.32 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            2 |     3832 | 2026-04-25 | Unreal Nightmare | W   | 0.299      | -            | -                | -                | 1 (0.299) |     0.78 | freshie, Grizz, marekiew, ogwizard, WUMBO |
|            1 |     3841 | 2026-04-25 | Voca             | L   | 0.299      | -            | -                | -                | -         |    -5.19 | freshie, Grizz, marekiew, ogwizard, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,099.63)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-01 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-06-14 |      0.633 | $3,000.00      | $1,899.63       |
| 2026-05-31 |      0.540 | $1,200.00      | $647.70         |
| 2026-05-24 |      0.494 | $250.00        | $123.45         |
| 2026-04-26 |      0.306 | $1,400.00      | $428.85         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
