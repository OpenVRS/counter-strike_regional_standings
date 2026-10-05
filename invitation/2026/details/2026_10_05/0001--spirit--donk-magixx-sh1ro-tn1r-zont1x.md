### Roster Details<br />
Team Name: Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [1](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [1]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  2046.2<br />
<br />
Final Rank Value (2046.2) = Starting Rank Value (2000.0) + Head To Head Adjustments (46.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.872[<sup>2</sup>](#table1)
- Opponent Network: 0.398[<sup>2</sup>](#table1)
- LAN Wins: 0.932[<sup>2</sup>](#table1)

The average of these factors is 0.800<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.800 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 2000.0


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
|           38 |     1319 | 2026-09-06 | MOUZ          | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.480 (0.480)    | 1 (1.000) |    10.35 | donk, magixx, sh1ro, tN1R, zont1x |
|           37 |     1377 | 2026-09-05 | Falcons       | W   | 1.000      | 1.000        | 1.000 (1.000)    | -                | 1 (1.000) |     8.26 | donk, magixx, sh1ro, tN1R, zont1x |
|           36 |     1598 | 2026-08-31 | FURIA         | W   | 0.965      | 1.000        | 0.914 (0.882)    | 0.377 (0.364)    | 1 (0.965) |     8.84 | donk, magixx, sh1ro, tN1R, zont1x |
|           35 |     1753 | 2026-08-28 | G2            | W   | 0.946      | 1.000        | 0.775 (0.733)    | 0.383 (0.362)    | 1 (0.946) |     8.83 | donk, magixx, sh1ro, tN1R, zont1x |
|           34 |     1850 | 2026-08-26 | DENDELE       | W   | 0.933      | 1.000        | -                | 0.431 (0.402)    | 1 (0.933) |     0.81 | donk, magixx, sh1ro, tN1R, zont1x |
|           33 |     1943 | 2026-08-23 | FUT           | W   | 0.914      | 1.000        | 0.866 (0.791)    | -                | 1 (0.914) |     7.50 | donk, magixx, sh1ro, tN1R, zont1x |
|           32 |     1965 | 2026-08-22 | Legacy        | W   | 0.908      | 1.000        | 1.000 (0.908)    | 0.399 (0.362)    | 1 (0.908) |    11.00 | donk, magixx, sh1ro, tN1R, zont1x |
|           31 |     1986 | 2026-08-21 | Vitality      | W   | 0.901      | 1.000        | 1.000 (0.901)    | 0.358 (0.323)    | 1 (0.901) |    10.88 | donk, magixx, sh1ro, tN1R, zont1x |
|           30 |     2021 | 2026-08-20 | B8            | W   | 0.893      | 1.000        | -                | 0.596 (0.532)    | 1 (0.893) |     2.21 | donk, magixx, sh1ro, tN1R, zont1x |
|           29 |     2138 | 2026-08-15 | BIG           | W   | 0.861      | 1.000        | -                | 0.365 (0.314)    | 1 (0.861) |     2.17 | donk, magixx, sh1ro, tN1R, zont1x |
|           28 |     2219 | 2026-08-13 | Luminosity    | W   | 0.846      | -            | -                | -                | -         |     1.94 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |     2247 | 2026-08-12 | JiJieHao      | L   | 0.839      | -            | -                | -                | -         |   -24.88 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |     2520 | 2026-08-02 | MOUZ          | L   | 0.773      | -            | -                | -                | -         |   -15.64 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |     2558 | 2026-08-01 | FaZe          | W   | 0.766      | 0.884        | 0.409 (0.277)    | -                | -         |     1.31 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     2626 | 2026-07-30 | Liquid        | W   | 0.753      | 0.884        | -                | 0.547 (0.364)    | -         |     1.86 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     2742 | 2026-07-26 | 100 Thieves   | W   | 0.728      | 0.903        | -                | 0.726 (0.477)    | -         |     1.26 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     2840 | 2026-07-23 | OG            | W   | 0.708      | -            | -                | -                | -         |     0.06 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     3464 | 2026-06-20 | Falcons       | L   | 0.488      | -            | -                | -                | -         |   -11.43 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     3488 | 2026-06-19 | G2            | W   | 0.481      | 1.000        | 0.775 (0.372)    | -                | -         |     4.68 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     3577 | 2026-06-13 | 9z            | W   | 0.442      | -            | -                | -                | -         |     1.06 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     3634 | 2026-06-12 | Aurora        | W   | 0.434      | -            | -                | -                | -         |     1.98 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     3662 | 2026-06-11 | Natus Vincere | W   | 0.428      | -            | -                | -                | -         |     0.42 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     3740 | 2026-06-07 | 9z            | W   | 0.401      | -            | -                | -                | -         |     0.89 | donk, magixx, sh1ro, tN1R, zont1x |
|           15 |     3761 | 2026-06-06 | MIBR          | W   | 0.394      | -            | -                | -                | -         |     1.26 | donk, magixx, sh1ro, tN1R, zont1x |
|           14 |     3777 | 2026-06-06 | BETBOOM       | W   | 0.393      | -            | -                | -                | -         |     0.83 | donk, magixx, sh1ro, tN1R, zont1x |
|           13 |     4461 | 2026-05-17 | Falcons       | W   | 0.259      | 1.000        | 1.000 (0.259)    | -                | -         |     1.98 | donk, magixx, sh1ro, tN1R, zont1x |
|           12 |     4491 | 2026-05-16 | MOUZ          | W   | 0.252      | -            | -                | -                | -         |     2.98 | donk, magixx, sh1ro, tN1R, zont1x |
|           11 |     4524 | 2026-05-15 | G2            | W   | 0.245      | -            | -                | -                | -         |     2.63 | donk, magixx, sh1ro, tN1R, zont1x |
|           10 |     4648 | 2026-05-11 | FURIA         | W   | 0.220      | -            | -                | -                | -         |     2.40 | donk, magixx, sh1ro, tN1R, zont1x |
|            9 |     4697 | 2026-05-10 | The MongolZ   | W   | 0.212      | -            | -                | -                | -         |     0.11 | donk, magixx, sh1ro, tN1R, zont1x |
|            8 |     4727 | 2026-05-09 | The Huns      | W   | 0.205      | -            | -                | -                | -         |     0.00 | donk, magixx, sh1ro, tN1R, zont1x |
|            7 |     5408 | 2026-04-19 | Vitality      | L   | 0.074      | -            | -                | -                | -         |    -1.30 | donk, magixx, sh1ro, tN1R, zont1x |
|            6 |     5440 | 2026-04-18 | Falcons       | W   | 0.067      | -            | -                | -                | -         |     0.52 | donk, magixx, sh1ro, tN1R, zont1x |
|            5 |     5460 | 2026-04-17 | MOUZ          | W   | 0.060      | -            | -                | -                | -         |     0.73 | donk, magixx, sh1ro, tN1R, zont1x |
|            4 |     5479 | 2026-04-15 | G2            | W   | 0.048      | -            | -                | -                | -         |     0.55 | donk, magixx, sh1ro, tN1R, zont1x |
|            3 |     5487 | 2026-04-15 | RED Canids    | W   | 0.047      | -            | -                | -                | -         |     0.00 | donk, magixx, sh1ro, tN1R, zont1x |
|            2 |     5502 | 2026-04-14 | Falcons       | L   | 0.041      | -            | -                | -                | -         |    -0.97 | donk, magixx, sh1ro, tN1R, zont1x |
|            1 |     5523 | 2026-04-13 | Liquid        | W   | 0.034      | -            | -                | -                | -         |     0.08 | donk, magixx, sh1ro, tN1R, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,058,245.04)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-06 |      1.000 | $250,000.00    | $250,000.00     |
| 2026-08-23 |      0.914 | $600,000.00    | $548,109.03     |
| 2026-08-02 |      0.773 | $97,188.00     | $75,118.75      |
| 2026-06-21 |      0.494 | $80,000.00     | $39,509.32      |
| 2026-05-17 |      0.259 | $512,000.00    | $132,851.91     |
| 2026-04-19 |      0.074 | $170,000.00    | $12,656.03      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
