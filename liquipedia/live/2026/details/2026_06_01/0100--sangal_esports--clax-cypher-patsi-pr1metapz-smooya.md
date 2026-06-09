### Roster Details<br />
Team Name: Sangal Esports<br />
Roster: clax, CYPHER, Patsi, pr1metapz, smooya<br />
Global Rank: [100](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [67]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1061.8<br />
<br />
Final Rank Value (1061.8) = Starting Rank Value (1026.8) + Head To Head Adjustments (34.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.329[<sup>1</sup>](#table2)
- Bounty Collected: 0.318[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.494[<sup>2</sup>](#table1)

The average of these factors is 0.329<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1026.8
- 400 + ( ( 0.329 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1026.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.357
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1808 | 2026-04-05 | Passion UA                | W   | 0.826      | 0.333        | 0.035 (0.009)    | 0.419 (0.115)    | 1 (0.826) |    20.81 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           29 |     1833 | 2026-04-05 | Tricked Esport            | W   | 0.824      | 0.333        | 0.035 (0.009)    | 0.574 (0.158)    | 1 (0.824) |    20.17 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           28 |     1881 | 2026-04-04 | ASTRAL Esports            | W   | 0.819      | 0.333        | 0.008 (0.002)    | 0.848 (0.231)    | 1 (0.819) |    12.49 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           27 |     1889 | 2026-04-04 | PURE                      | W   | 0.818      | -            | -                | -                | 1 (0.818) |     1.08 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           26 |     1911 | 2026-04-04 | ASTRAL Esports            | L   | 0.817      | -            | -                | -                | -         |   -13.28 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           25 |     2495 | 2026-03-28 | BetBoom Team              | L   | 0.772      | -            | -                | -                | -         |    -1.76 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           24 |     2508 | 2026-03-28 | BESTIA                    | L   | 0.772      | -            | -                | -                | -         |    -5.24 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           23 |     2512 | 2026-03-28 | Wildcard                  | W   | 0.771      | 0.340        | 0.122 (0.032)    | 0.607 (0.159)    | 1 (0.771) |    21.26 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           22 |     2516 | 2026-03-28 | NOMERCY (European team)   | W   | 0.771      | -            | -                | -                | 1 (0.771) |     0.79 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           21 |     2759 | 2026-03-23 | Nemiga Gaming             | L   | 0.739      | -            | -                | -                | -         |    -3.88 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           20 |     2824 | 2026-03-22 | Against All authority     | W   | 0.733      | 0.384        | 0.008 (0.002)    | -                | 0 (0.000) |     8.41 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           19 |     2880 | 2026-03-21 | UNiTY esports             | W   | 0.726      | 0.384        | -                | 0.619 (0.173)    | 0 (0.000) |     7.88 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           18 |     2937 | 2026-03-20 | OMEGA                     | W   | 0.719      | 0.384        | 0.016 (0.005)    | 0.599 (0.166)    | 0 (0.000) |    13.78 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           17 |     2995 | 2026-03-19 | IDoPieca                  | W   | 0.712      | -            | -                | -                | 0 (0.000) |     1.75 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           16 |     3039 | 2026-03-18 | Fingers Crossed Female    | W   | 0.705      | -            | -                | -                | -         |     2.24 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           15 |     3068 | 2026-03-17 | Ursa                      | L   | 0.699      | -            | -                | -                | -         |   -11.27 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           14 |     3122 | 2026-03-16 | FAVBET Team               | L   | 0.692      | -            | -                | -                | -         |   -12.16 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           13 |     3216 | 2026-03-14 | TNC Esport                | W   | 0.678      | 0.435        | 0.022 (0.007)    | 1.000 (0.295)    | -         |    10.57 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           12 |     3267 | 2026-03-13 | Ex-Zero Tenacity          | L   | 0.671      | -            | -                | -                | -         |   -15.76 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           11 |     3394 | 2026-03-10 | Bebop                     | W   | 0.652      | 0.435        | 0.002 (0.001)    | 0.845 (0.239)    | -         |     6.99 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           10 |     3544 | 2026-03-08 | Brazylijski luz           | L   | 0.638      | -            | -                | -                | -         |   -12.42 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|            9 |     4026 | 2026-02-26 | OMEGA                     | L   | 0.571      | -            | -                | -                | -         |    -5.97 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            8 |     4247 | 2026-02-21 | Team Nemesis              | L   | 0.543      | -            | -                | -                | -         |    -3.75 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            7 |     4370 | 2026-02-19 | Lavked                    | L   | 0.526      | -            | -                | -                | -         |   -10.67 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            6 |     4421 | 2026-02-18 | Playersclub               | W   | 0.519      | -            | -                | -                | -         |     1.64 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            5 |     4478 | 2026-02-17 | OMEGA                     | W   | 0.513      | 0.384        | 0.016 (0.003)    | 0.599 (0.118)    | -         |    11.26 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            4 |     4575 | 2026-02-15 | Cirahvi                   | W   | 0.499      | 0.384        | 0.004 (0.001)    | 0.562 (0.108)    | -         |     3.22 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            3 |     4605 | 2026-02-15 | Esport Academy Copenhagen | L   | 0.498      | -            | -                | -                | -         |    -4.09 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            2 |     4657 | 2026-02-14 | TDK                       | L   | 0.492      | -            | -                | -                | -         |    -4.74 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            1 |     4999 | 2026-02-04 | ECSTATIC                  | L   | 0.424      | -            | -                | -                | -         |    -4.42 | clax, danistzz, Patsi, pr1metapz, R4DYX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,757.14)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.826 | $5,000.00      | $4,127.78       |
| 2026-03-27 |      0.766 | $750.00        | $574.58         |
| 2026-02-22 |      0.545 | $350.00        | $190.89         |
| 2026-02-05 |      0.432 | $2,000.00      | $863.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
