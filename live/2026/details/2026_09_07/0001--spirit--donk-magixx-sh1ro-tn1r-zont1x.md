### Roster Details<br />
Team Name: Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [1](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [1]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  2031.2<br />
<br />
Final Rank Value (2031.2) = Starting Rank Value (2000.0) + Head To Head Adjustments (31.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.887[<sup>2</sup>](#table1)
- Opponent Network: 0.476[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.841<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.841 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |       12 | 2026-09-06 | MOUZ          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.635 (0.635)    | 1 (1.000) |    10.72 | donk, magixx, sh1ro, tN1R, zont1x |
|           42 |       36 | 2026-09-05 | Falcons       | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.447 (0.447)    | 1 (1.000) |    10.30 | donk, magixx, sh1ro, tN1R, zont1x |
|           41 |      218 | 2026-08-31 | FURIA         | W   | 1.000      | 1.000        | 0.779 (0.779)    | 0.375 (0.375)    | 1 (1.000) |     6.58 | donk, magixx, sh1ro, tN1R, zont1x |
|           40 |      373 | 2026-08-28 | G2            | W   | 1.000      | 1.000        | 0.538 (0.538)    | 0.394 (0.394)    | 1 (1.000) |     5.31 | donk, magixx, sh1ro, tN1R, zont1x |
|           39 |      470 | 2026-08-26 | DENDELE       | W   | 1.000      | 1.000        | -                | 0.409 (0.409)    | 1 (1.000) |     0.82 | donk, magixx, sh1ro, tN1R, zont1x |
|           38 |      563 | 2026-08-23 | FUT           | W   | 1.000      | 1.000        | 1.000 (1.000)    | -                | 1 (1.000) |    11.02 | donk, magixx, sh1ro, tN1R, zont1x |
|           37 |      585 | 2026-08-22 | Legacy        | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.456 (0.456)    | 1 (1.000) |     7.62 | donk, magixx, sh1ro, tN1R, zont1x |
|           36 |      606 | 2026-08-21 | Vitality      | W   | 1.000      | 1.000        | 0.862 (0.862)    | 0.423 (0.423)    | 1 (1.000) |     9.93 | donk, magixx, sh1ro, tN1R, zont1x |
|           35 |      641 | 2026-08-20 | B8            | W   | 1.000      | 1.000        | -                | 0.570 (0.570)    | 1 (1.000) |     1.99 | donk, magixx, sh1ro, tN1R, zont1x |
|           34 |      758 | 2026-08-15 | BIG           | W   | 1.000      | 1.000        | -                | 0.569 (0.569)    | 1 (1.000) |     2.43 | donk, magixx, sh1ro, tN1R, zont1x |
|           33 |      839 | 2026-08-13 | Luminosity    | W   | 1.000      | -            | -                | -                | -         |     0.50 | donk, magixx, sh1ro, tN1R, zont1x |
|           32 |      867 | 2026-08-12 | JiJieHao      | L   | 1.000      | -            | -                | -                | -         |   -30.45 | donk, magixx, sh1ro, tN1R, zont1x |
|           31 |     1140 | 2026-08-02 | MOUZ          | L   | 0.957      | -            | -                | -                | -         |   -19.64 | donk, magixx, sh1ro, tN1R, zont1x |
|           30 |     1178 | 2026-08-01 | FaZe          | W   | 0.950      | -            | -                | -                | -         |     2.32 | donk, magixx, sh1ro, tN1R, zont1x |
|           29 |     1246 | 2026-07-30 | Liquid        | W   | 0.937      | -            | -                | -                | -         |     1.50 | donk, magixx, sh1ro, tN1R, zont1x |
|           28 |     1362 | 2026-07-26 | 100 Thieves   | W   | 0.912      | 0.903        | -                | 0.589 (0.485)    | -         |     0.69 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |     1460 | 2026-07-23 | OG            | W   | 0.893      | -            | -                | -                | -         |     0.10 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |     2084 | 2026-06-20 | Falcons       | L   | 0.672      | -            | -                | -                | -         |   -13.70 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |     2108 | 2026-06-19 | G2            | W   | 0.665      | -            | -                | -                | -         |     3.44 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     2197 | 2026-06-13 | 9z            | W   | 0.626      | 1.000        | 0.653 (0.409)    | -                | -         |     2.58 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     2254 | 2026-06-12 | Aurora        | W   | 0.619      | -            | -                | -                | -         |     1.27 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     2282 | 2026-06-11 | Natus Vincere | W   | 0.612      | -            | -                | -                | -         |     1.72 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     2360 | 2026-06-07 | 9z            | W   | 0.585      | -            | -                | -                | -         |     2.25 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     2381 | 2026-06-06 | MIBR          | W   | 0.579      | -            | -                | -                | -         |     0.75 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     2397 | 2026-06-06 | BETBOOM       | W   | 0.577      | -            | -                | -                | -         |     0.93 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     3081 | 2026-05-17 | Falcons       | W   | 0.444      | 1.000        | 1.000 (0.444)    | -                | -         |     5.03 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     3111 | 2026-05-16 | MOUZ          | W   | 0.437      | 1.000        | 1.000 (0.437)    | -                | -         |     5.51 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     3144 | 2026-05-15 | G2            | W   | 0.430      | -            | -                | -                | -         |     2.34 | donk, magixx, sh1ro, tN1R, zont1x |
|           15 |     3268 | 2026-05-11 | FURIA         | W   | 0.405      | -            | -                | -                | -         |     2.83 | donk, magixx, sh1ro, tN1R, zont1x |
|           14 |     3317 | 2026-05-10 | The MongolZ   | W   | 0.396      | -            | -                | -                | -         |     0.51 | donk, magixx, sh1ro, tN1R, zont1x |
|           13 |     3347 | 2026-05-09 | The Huns      | W   | 0.390      | -            | -                | -                | -         |     0.02 | donk, magixx, sh1ro, tN1R, zont1x |
|           12 |     4028 | 2026-04-19 | Vitality      | L   | 0.259      | -            | -                | -                | -         |    -5.26 | donk, magixx, sh1ro, tN1R, zont1x |
|           11 |     4060 | 2026-04-18 | Falcons       | W   | 0.251      | -            | -                | -                | -         |     2.99 | donk, magixx, sh1ro, tN1R, zont1x |
|           10 |     4080 | 2026-04-17 | MOUZ          | W   | 0.245      | -            | -                | -                | -         |     3.25 | donk, magixx, sh1ro, tN1R, zont1x |
|            9 |     4099 | 2026-04-15 | G2            | W   | 0.232      | -            | -                | -                | -         |     1.43 | donk, magixx, sh1ro, tN1R, zont1x |
|            8 |     4107 | 2026-04-15 | RED Canids    | W   | 0.231      | -            | -                | -                | -         |     0.01 | donk, magixx, sh1ro, tN1R, zont1x |
|            7 |     4122 | 2026-04-14 | Falcons       | L   | 0.225      | -            | -                | -                | -         |    -4.47 | donk, magixx, sh1ro, tN1R, zont1x |
|            6 |     4143 | 2026-04-13 | Liquid        | W   | 0.218      | -            | -                | -                | -         |     0.36 | donk, magixx, sh1ro, tN1R, zont1x |
|            5 |     5306 | 2026-03-23 | The MongolZ   | L   | 0.080      | -            | -                | -                | -         |    -2.42 | donk, magixx, sh1ro, tN1R, zont1x |
|            4 |     5378 | 2026-03-22 | 9z            | W   | 0.073      | -            | -                | -                | -         |     0.31 | donk, magixx, sh1ro, tN1R, zont1x |
|            3 |     5430 | 2026-03-21 | PARIVISION    | L   | 0.066      | -            | -                | -                | -         |    -1.97 | donk, magixx, sh1ro, tN1R, zont1x |
|            2 |     5555 | 2026-03-19 | Liquid        | W   | 0.051      | -            | -                | -                | -         |     0.09 | donk, magixx, sh1ro, tN1R, zont1x |
|            1 |     5798 | 2026-03-13 | Astralis      | L   | 0.013      | -            | -                | -                | -         |    -0.39 | donk, magixx, sh1ro, tN1R, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,275,748.66)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-06 |      1.000 | $250,000.00    | $250,000.00     |
| 2026-08-23 |      1.000 | $600,000.00    | $600,000.00     |
| 2026-08-02 |      0.957 | $97,188.00     | $93,049.41      |
| 2026-06-21 |      0.678 | $80,000.00     | $54,268.89      |
| 2026-05-17 |      0.444 | $512,000.00    | $227,313.15     |
| 2026-04-19 |      0.259 | $170,000.00    | $44,020.11      |
| 2026-03-29 |      0.117 | $50,000.00     | $5,859.24       |
| 2026-03-15 |      0.026 | $48,000.00     | $1,237.86       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
