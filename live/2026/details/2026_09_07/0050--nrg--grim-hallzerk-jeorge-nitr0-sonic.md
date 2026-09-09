### Roster Details<br />
Team Name: NRG<br />
Roster: Grim, hallzerk, Jeorge, nitr0, Sonic<br />
Global Rank: [50](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [9]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1164.3<br />
<br />
Final Rank Value (1164.3) = Starting Rank Value (1147.4) + Head To Head Adjustments (16.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.391[<sup>1</sup>](#table2)
- Bounty Collected: 0.346[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.706[<sup>2</sup>](#table1)

The average of these factors is 0.393<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1147.4
- 400 + ( ( 0.393 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1147.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      938 | 2026-08-09 | Phantom         | L   | 0.998      | -            | -                | -                | -         |   -19.17 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           29 |      978 | 2026-08-08 | Acend           | W   | 0.991      | 0.818        | 0.072 (0.059)    | 0.703 (0.571)    | 1 (0.991) |    19.38 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           28 |     1005 | 2026-08-07 | Spirit HU       | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.51 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           27 |     1144 | 2026-08-02 | Voca            | W   | 0.955      | 0.143        | 0.030 (0.004)    | 0.375 (0.051)    | -         |     6.42 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           26 |     1145 | 2026-08-02 | SportsBetExpert | W   | 0.955      | 0.143        | 0.009 (0.001)    | 0.431 (0.059)    | -         |    13.48 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           25 |     1185 | 2026-08-01 | Voca            | L   | 0.948      | -            | -                | -                | -         |   -23.66 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           24 |     1290 | 2026-07-29 | Marsborne       | W   | 0.928      | 0.143        | 0.014 (0.002)    | 0.432 (0.057)    | -         |     5.37 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           23 |     1315 | 2026-07-28 | Iowa Stormboar  | W   | 0.920      | -            | -                | -                | -         |     2.02 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           22 |     1743 | 2026-07-12 | SportsBetExpert | W   | 0.814      | 0.303        | 0.009 (0.002)    | 0.431 (0.106)    | 1 (0.814) |    11.90 | daps, Grim, Jeorge, nitr0, Sonic     |
|           21 |     1757 | 2026-07-12 | NuTorious       | W   | 0.813      | 0.303        | -                | 0.195 (0.048)    | 1 (0.813) |     2.60 | daps, Grim, Jeorge, nitr0, Sonic     |
|           20 |     1767 | 2026-07-12 | Eh              | W   | 0.812      | -            | -                | -                | 1 (0.812) |     0.39 | daps, Grim, Jeorge, nitr0, Sonic     |
|           19 |     2445 | 2026-06-05 | BIG             | L   | 0.567      | -            | -                | -                | -         |    -1.82 | br0, Grim, nitr0, oSee, Sonic        |
|           18 |     2468 | 2026-06-04 | M80             | L   | 0.560      | -            | -                | -                | -         |    -6.53 | br0, Grim, nitr0, oSee, Sonic        |
|           17 |     2502 | 2026-06-03 | FlyQuest        | W   | 0.552      | 0.624        | 0.019 (0.006)    | 0.350 (0.120)    | 1 (0.552) |     8.05 | br0, Grim, nitr0, oSee, Sonic        |
|           16 |     2517 | 2026-06-02 | SINNERS         | W   | 0.546      | 0.624        | 0.102 (0.035)    | 0.475 (0.162)    | 1 (0.546) |     7.27 | br0, Grim, nitr0, oSee, Sonic        |
|           15 |     2526 | 2026-06-02 | GamerLegion     | L   | 0.545      | -            | -                | -                | -         |    -2.97 | br0, Grim, nitr0, oSee, Sonic        |
|           14 |     3022 | 2026-05-20 | MOUZ            | L   | 0.463      | -            | -                | -                | -         |    -0.19 | daps, Grim, nitr0, oSee, Sonic       |
|           13 |     3048 | 2026-05-19 | Legacy          | L   | 0.456      | -            | -                | -                | -         |    -0.31 | br0, Grim, nitr0, oSee, Sonic        |
|           12 |     3253 | 2026-05-12 | FaZe            | L   | 0.406      | -            | -                | -                | -         |    -1.00 | br0, Grim, nitr0, oSee, Sonic        |
|           11 |     3285 | 2026-05-11 | FUT             | L   | 0.400      | -            | -                | -                | -         |    -0.17 | br0, Grim, nitr0, oSee, Sonic        |
|           10 |     3845 | 2026-04-25 | Passion UA      | L   | 0.296      | -            | -                | -                | -         |    -8.07 | br0, Grim, nitr0, oSee, Sonic        |
|            9 |     3859 | 2026-04-25 | LAG             | W   | 0.294      | 0.371        | 0.016 (0.002)    | 0.357 (0.039)    | 1 (0.294) |     2.98 | br0, Grim, nitr0, oSee, Sonic        |
|            8 |     3884 | 2026-04-25 | Kodex           | W   | 0.293      | -            | -                | -                | 1 (0.293) |     0.14 | br0, Grim, nitr0, oSee, Sonic        |
|            7 |     4343 | 2026-04-07 | Legacy          | L   | 0.170      | -            | -                | -                | -         |    -0.11 | br0, Grim, nitr0, oSee, Sonic        |
|            6 |     4372 | 2026-04-06 | EYEBALLERS      | L   | 0.165      | -            | -                | -                | -         |    -1.62 | br0, Grim, nitr0, oSee, Sonic        |
|            5 |     4438 | 2026-04-05 | FUT             | L   | 0.157      | -            | -                | -                | -         |    -0.06 | br0, Grim, nitr0, oSee, Sonic        |
|            4 |     4504 | 2026-04-04 | Voca            | W   | 0.151      | 1.000        | 0.030 (0.004)    | 0.375 (0.057)    | 1 (0.151) |     0.70 | br0, Grim, nitr0, oSee, Sonic        |
|            3 |     5421 | 2026-03-22 | FURIA           | L   | 0.066      | -            | -                | -                | -         |    -0.06 | br0, Grim, nitr0, oSee, Sonic        |
|            2 |     5549 | 2026-03-20 | B8              | W   | 0.051      | 1.000        | 0.262 (0.013)    | -                | -         |     1.41 | br0, Grim, nitr0, oSee, Sonic        |
|            1 |     5641 | 2026-03-18 | Falcons         | L   | 0.038      | -            | -                | -                | -         |    -0.02 | br0, Grim, nitr0, oSee, Sonic        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,997.10)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      0.814 | $3,000.00      | $2,442.87       |
| 2026-05-24 |      0.484 | $5,000.00      | $2,420.35       |
| 2026-05-17 |      0.441 | $4,000.00      | $1,762.13       |
| 2026-04-11 |      0.200 | $18,750.00     | $3,740.86       |
| 2026-03-29 |      0.112 | $32,500.00     | $3,630.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
