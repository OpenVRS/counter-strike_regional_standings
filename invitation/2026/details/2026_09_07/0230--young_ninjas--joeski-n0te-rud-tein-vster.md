### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: joeski, n0te, rud, tein, Vster<br />
Global Rank: [230](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [159]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  668.3<br />
<br />
Final Rank Value (668.3) = Starting Rank Value (631.5) + Head To Head Adjustments (36.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.189[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.010[<sup>2</sup>](#table1)

The average of these factors is 0.122<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.5
- 400 + ( ( 0.122 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 631.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3663 | 2026-04-29 | EYEBALLERS      | L   | 0.320      | -            | -                | -                | -         |    -0.32 | joeski, n0te, rud, tein, Vster  |
|           18 |     3707 | 2026-04-28 | UNiTY           | W   | 0.313      | 0.363        | 0.006 (0.001)    | 0.537 (0.061)    | 0 (0.000) |     8.11 | joeski, n0te, rud, tein, Vster  |
|           17 |     3946 | 2026-04-24 | playersclub     | L   | 0.286      | -            | -                | -                | -         |    -6.27 | joeski, n0te, rud, tein, Vster  |
|           16 |     3996 | 2026-04-23 | Lilmix          | W   | 0.278      | 0.303        | 0.001 (0.000)    | 0.262 (0.022)    | 0 (0.000) |     5.08 | joeski, rud, tein, Vster, Zitte |
|           15 |     4004 | 2026-04-22 | SINNERS         | W   | 0.273      | 0.363        | 0.102 (0.010)    | 0.475 (0.047)    | 0 (0.000) |     7.94 | joeski, n0te, rud, tein, Vster  |
|           14 |     4014 | 2026-04-22 | The Last Resort | W   | 0.272      | 0.303        | 0.011 (0.001)    | 0.441 (0.036)    | 0 (0.000) |     7.29 | joeski, n0te, rud, tein, Vster  |
|           13 |     4047 | 2026-04-20 | Privateer       | W   | 0.258      | 0.303        | 0.004 (0.000)    | 0.216 (0.017)    | 0 (0.000) |     5.20 | joeski, MisteM, n0te, rud, tein |
|           12 |     4066 | 2026-04-19 | los kogutos     | W   | 0.252      | 0.363        | 0.003 (0.000)    | 0.080 (0.007)    | 0 (0.000) |     4.61 | joeski, MisteM, n0te, rud, tein |
|           11 |     4069 | 2026-04-19 | BRUTE           | L   | 0.252      | -            | -                | -                | -         |    -3.61 | joeski, MisteM, n0te, rud, tein |
|           10 |     4149 | 2026-04-14 | BBL             | W   | 0.220      | 0.363        | 0.034 (0.003)    | 0.509 (0.041)    | 0 (0.000) |     6.54 | joeski, MisteM, n0te, rud, tein |
|            9 |     4187 | 2026-04-12 | KOLESIE         | L   | 0.206      | -            | -                | -                | -         |    -1.15 | joeski, MisteM, n0te, rud, tein |
|            8 |     5182 | 2026-03-26 | Alliance        | L   | 0.093      | -            | -                | -                | -         |    -0.04 | joeski, MisteM, n0te, rud, tein |
|            7 |     5192 | 2026-03-26 | ReThink         | W   | 0.092      | 0.396        | 0.009 (0.000)    | 0.230 (0.008)    | 1 (0.092) |     2.09 | joeski, MisteM, n0te, rud, tein |
|            6 |     5200 | 2026-03-26 | EYEBALLERS      | L   | 0.091      | -            | -                | -                | -         |    -0.07 | joeski, MisteM, n0te, rud, tein |
|            5 |     5745 | 2026-03-15 | DONSTU          | W   | 0.021      | 0.278        | 0.004 (0.000)    | 0.449 (0.003)    | 0 (0.000) |     0.49 | joeski, MisteM, n0te, rud, tein |
|            4 |     5753 | 2026-03-15 | Endless Journey | W   | 0.020      | 0.278        | 0.007 (0.000)    | 0.504 (0.003)    | 0 (0.000) |     0.41 | joeski, MisteM, n0te, rud, tein |
|            3 |     5788 | 2026-03-14 | Misa            | W   | 0.014      | -            | -                | -                | -         |     0.28 | joeski, MisteM, n0te, rud, tein |
|            2 |     5827 | 2026-03-13 | Enjoy           | W   | 0.007      | -            | -                | -                | -         |     0.15 | joeski, MisteM, n0te, rud, tein |
|            1 |     5883 | 2026-03-12 | Endless Journey | L   | 0.001      | -            | -                | -                | -         |    -0.01 | joeski, MisteM, n0te, rud, tein |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25.94)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.021 | $1,250.00      | $25.94          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
