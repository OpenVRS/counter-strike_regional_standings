### Roster Details<br />
Team Name: Passion UA<br />
Roster: JT, Kvem, nicx, sdy, try<br />
Global Rank: [150](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [27]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  803.1<br />
<br />
Final Rank Value (803.1) = Starting Rank Value (807.9) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.228[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.9
- 400 + ( ( 0.214 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 807.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     3012 | 2026-05-21 | Betclic        | L   | 0.463      | -            | -                | -                | -         |    -7.74 | JT, Kvem, nicx, sdy, try   |
|           25 |     3013 | 2026-05-21 | OG             | L   | 0.463      | -            | -                | -                | -         |    -3.83 | JT, Kvem, nicx, sdy, try   |
|           24 |     3014 | 2026-05-21 | RBLS           | L   | 0.463      | -            | -                | -                | -         |    -7.25 | JT, Kvem, nicx, sdy, try   |
|           23 |     3015 | 2026-05-21 | Metizport      | L   | 0.463      | -            | -                | -                | -         |    -2.94 | JT, Kvem, nicx, sdy, try   |
|           22 |     3240 | 2026-05-12 | SINNERS        | L   | 0.408      | -            | -                | -                | -         |    -2.35 | JT, Kvem, nicx, sdy, try   |
|           21 |     3283 | 2026-05-11 | Natus Vincere  | L   | 0.401      | -            | -                | -                | -         |    -0.19 | JT, Kvem, nicx, sdy, try   |
|           20 |     3616 | 2026-04-30 | FOKUS          | L   | 0.327      | -            | -                | -                | -         |    -1.16 | JT, Kvem, nicx, sdy, try   |
|           19 |     3793 | 2026-04-26 | Marsborne      | W   | 0.301      | 0.371        | 0.014 (0.002)    | 0.432 (0.048)    | 1 (0.301) |     5.35 | JT, Kvem, nicx, Senzu, try |
|           18 |     3804 | 2026-04-26 | Wildcard       | L   | 0.300      | -            | -                | -                | -         |    -1.65 | JT, Kvem, nicx, Senzu, try |
|           17 |     3845 | 2026-04-25 | NRG            | W   | 0.296      | 0.371        | 0.028 (0.003)    | 0.356 (0.039)    | 1 (0.296) |     8.07 | JT, Kvem, nicx, Senzu, try |
|           16 |     3853 | 2026-04-25 | NuTorious      | W   | 0.294      | 0.371        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.294) |     0.91 | JT, Kvem, nicx, Senzu, try |
|           15 |     3862 | 2026-04-25 | Fisher College | L   | 0.294      | -            | -                | -                | -         |    -4.88 | JT, Kvem, nicx, Senzu, try |
|           14 |     3880 | 2026-04-25 | Celestial      | W   | 0.293      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.293) |     0.80 | JT, Kvem, nicx, Senzu, try |
|           13 |     4146 | 2026-04-14 | B8             | L   | 0.220      | -            | -                | -                | -         |    -0.17 | FaNg, JT, Kvem, nicx, try  |
|           12 |     4165 | 2026-04-13 | FURIA          | L   | 0.214      | -            | -                | -                | -         |    -0.03 | FaNg, JT, Kvem, nicx, try  |
|           11 |     4397 | 2026-04-05 | Sangal         | L   | 0.160      | -            | -                | -                | -         |    -3.30 | JT, Kvem, nicx, Senzu, try |
|           10 |     4415 | 2026-04-05 | BESTIA         | W   | 0.159      | 0.333        | 0.014 (0.001)    | 0.475 (0.025)    | 1 (0.159) |     3.37 | JT, Kvem, nicx, Senzu, try |
|            9 |     4486 | 2026-04-04 | ASTRAL         | W   | 0.152      | 0.333        | 0.010 (0.001)    | 0.765 (0.039)    | 1 (0.152) |     4.27 | JT, Kvem, nicx, Senzu, try |
|            8 |     4500 | 2026-04-04 | PURE           | W   | 0.151      | 0.333        | 0.000 (0.000)    | 0.017 (0.001)    | 1 (0.151) |     0.48 | JT, Kvem, nicx, Senzu, try |
|            7 |     4737 | 2026-04-01 | Alliance       | L   | 0.133      | -            | -                | -                | -         |    -0.14 | JT, Kvem, nicx, Senzu, try |
|            6 |     4760 | 2026-04-01 | Sashi          | W   | 0.132      | 0.354        | 0.055 (0.003)    | 0.621 (0.029)    | 1 (0.132) |     3.82 | JT, Kvem, nicx, Senzu, try |
|            5 |     4810 | 2026-03-31 | Luminosity     | L   | 0.127      | -            | -                | -                | -         |    -0.41 | JT, Kvem, nicx, Senzu, try |
|            4 |     4853 | 2026-03-31 | FaZe           | W   | 0.125      | 0.354        | 0.477 (0.021)    | 0.354 (0.016)    | 1 (0.125) |     3.90 | JT, Kvem, nicx, Senzu, try |
|            3 |     4938 | 2026-03-30 | Eternal Fire   | W   | 0.118      | 0.354        | 0.000 (0.000)    | 0.022 (0.001)    | 1 (0.118) |     1.02 | JT, Kvem, nicx, Senzu, try |
|            2 |     5279 | 2026-03-24 | BBL            | L   | 0.080      | -            | -                | -                | -         |    -0.32 | JT, Kvem, nicx, Senzu, try |
|            1 |     5312 | 2026-03-24 | BASEMENT BOYS  | L   | 0.078      | -            | -                | -                | -         |    -0.43 | JT, Kvem, nicx, Senzu, try |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,247.88)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.441 | $4,000.00      | $1,762.13       |
| 2026-04-26 |      0.301 | $2,600.00      | $782.22         |
| 2026-04-19 |      0.253 | $4,000.00      | $1,013.91       |
| 2026-04-05 |      0.160 | $3,000.00      | $479.46         |
| 2026-04-02 |      0.140 | $1,500.00      | $210.16         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
