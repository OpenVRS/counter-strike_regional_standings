### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: joeski, n0te, rud, tein, Vster<br />
Global Rank: [222](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [152]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  675.8<br />
<br />
Final Rank Value (675.8) = Starting Rank Value (637.2) + Head To Head Adjustments (38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.193[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 637.2
- 400 + ( ( 0.125 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 637.2


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
|           19 |     3635 | 2026-04-29 | EYEBALLERS      | L   | 0.326      | -            | -                | -                | -         |    -0.33 | joeski, n0te, rud, tein, Vster  |
|           18 |     3679 | 2026-04-28 | UNiTY           | W   | 0.319      | 0.363        | 0.006 (0.001)    | 0.537 (0.062)    | 0 (0.000) |     8.19 | joeski, n0te, rud, tein, Vster  |
|           17 |     3918 | 2026-04-24 | playersclub     | L   | 0.291      | -            | -                | -                | -         |    -6.46 | joeski, n0te, rud, tein, Vster  |
|           16 |     3968 | 2026-04-23 | Lilmix          | W   | 0.284      | 0.303        | 0.001 (0.000)    | 0.264 (0.023)    | 0 (0.000) |     5.10 | joeski, rud, tein, Vster, Zitte |
|           15 |     3976 | 2026-04-22 | SINNERS         | W   | 0.279      | 0.363        | 0.102 (0.010)    | 0.477 (0.048)    | 0 (0.000) |     8.09 | joeski, n0te, rud, tein, Vster  |
|           14 |     3986 | 2026-04-22 | The Last Resort | W   | 0.278      | 0.303        | 0.011 (0.001)    | 0.444 (0.037)    | 0 (0.000) |     7.39 | joeski, n0te, rud, tein, Vster  |
|           13 |     4019 | 2026-04-20 | Privateer       | W   | 0.264      | 0.303        | 0.004 (0.000)    | 0.218 (0.017)    | 0 (0.000) |     5.23 | joeski, MisteM, n0te, rud, tein |
|           12 |     4038 | 2026-04-19 | Permitta        | W   | 0.257      | 0.363        | 0.007 (0.001)    | 0.689 (0.064)    | 0 (0.000) |     5.97 | joeski, MisteM, n0te, rud, tein |
|           11 |     4041 | 2026-04-19 | BRUTE           | L   | 0.257      | -            | -                | -                | -         |    -3.75 | joeski, MisteM, n0te, rud, tein |
|           10 |     4121 | 2026-04-14 | BBL             | W   | 0.225      | 0.363        | 0.035 (0.003)    | 0.512 (0.042)    | 0 (0.000) |     6.69 | joeski, MisteM, n0te, rud, tein |
|            9 |     4159 | 2026-04-12 | KOLESIE         | L   | 0.212      | -            | -                | -                | -         |    -1.20 | joeski, MisteM, n0te, rud, tein |
|            8 |     5154 | 2026-03-26 | Alliance        | L   | 0.099      | -            | -                | -                | -         |    -0.04 | joeski, MisteM, n0te, rud, tein |
|            7 |     5164 | 2026-03-26 | ReThink         | W   | 0.098      | 0.396        | 0.009 (0.000)    | 0.231 (0.009)    | 1 (0.098) |     2.19 | joeski, MisteM, n0te, rud, tein |
|            6 |     5172 | 2026-03-26 | EYEBALLERS      | L   | 0.097      | -            | -                | -                | -         |    -0.08 | joeski, MisteM, n0te, rud, tein |
|            5 |     5717 | 2026-03-15 | DONSTU          | W   | 0.026      | 0.278        | 0.004 (0.000)    | -                | 0 (0.000) |     0.61 | joeski, MisteM, n0te, rud, tein |
|            4 |     5725 | 2026-03-15 | Endless Journey | W   | 0.025      | 0.278        | 0.007 (0.000)    | 0.504 (0.004)    | 0 (0.000) |     0.52 | joeski, MisteM, n0te, rud, tein |
|            3 |     5760 | 2026-03-14 | Misa            | W   | 0.019      | 0.278        | -                | 0.642 (0.003)    | -         |     0.38 | joeski, MisteM, n0te, rud, tein |
|            2 |     5799 | 2026-03-13 | Enjoy           | W   | 0.013      | -            | -                | -                | -         |     0.26 | joeski, MisteM, n0te, rud, tein |
|            1 |     5855 | 2026-03-12 | Endless Journey | L   | 0.006      | -            | -                | -                | -         |    -0.11 | joeski, MisteM, n0te, rud, tein |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32.77)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.026 | $1,250.00      | $32.77          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
