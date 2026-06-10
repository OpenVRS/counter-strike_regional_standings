### Roster Details<br />
Team Name: Sangal Esports<br />
Roster: clax, CYPHER, Patsi, pr1metapz, smooya<br />
Global Rank: [102](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [69]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1042.3<br />
<br />
Final Rank Value (1042.3) = Starting Rank Value (1006.4) + Head To Head Adjustments (35.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.157[<sup>2</sup>](#table1)
- LAN Wins: 0.464[<sup>2</sup>](#table1)

The average of these factors is 0.315<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1006.4
- 400 + ( ( 0.315 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1006.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.333
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1918 | 2026-04-05 | Passion UA                | W   | 0.773      | 0.333        | 0.030 (0.008)    | 0.390 (0.101)    | 1 (0.773) |    19.41 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           29 |     1943 | 2026-04-05 | Looking for Org           | W   | 0.771      | 0.333        | 0.034 (0.009)    | 0.548 (0.141)    | 1 (0.771) |    18.84 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           28 |     1991 | 2026-04-04 | ASTRAL Esports            | W   | 0.767      | 0.333        | 0.008 (0.002)    | 0.888 (0.227)    | 1 (0.767) |    12.04 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           27 |     1999 | 2026-04-04 | PURE                      | W   | 0.766      | -            | -                | -                | 1 (0.766) |     1.11 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           26 |     2021 | 2026-04-04 | ASTRAL Esports            | L   | 0.765      | -            | -                | -                | -         |   -12.09 | clax, CYPHER, Patsi, pr1metapz, smooya  |
|           25 |     2605 | 2026-03-28 | BetBoom Team              | L   | 0.720      | -            | -                | -                | -         |    -1.36 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           24 |     2618 | 2026-03-28 | BESTIA                    | L   | 0.719      | -            | -                | -                | -         |    -4.85 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           23 |     2622 | 2026-03-28 | Wildcard                  | W   | 0.719      | 0.340        | 0.119 (0.029)    | 0.577 (0.141)    | 1 (0.719) |    19.92 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           22 |     2626 | 2026-03-28 | NOMERCY (European team)   | W   | 0.719      | -            | -                | -                | 1 (0.719) |     0.81 | CYPHER, Patsi, pr1metapz, R4DYX, smooya |
|           21 |     2869 | 2026-03-23 | Nemiga Gaming             | L   | 0.687      | -            | -                | -                | -         |    -3.54 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           20 |     2934 | 2026-03-22 | Against All authority     | W   | 0.681      | 0.384        | 0.007 (0.002)    | -                | 0 (0.000) |     7.97 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           19 |     2990 | 2026-03-21 | UNiTY esports             | W   | 0.674      | 0.384        | -                | 0.582 (0.151)    | 0 (0.000) |     7.99 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           18 |     3047 | 2026-03-20 | OMEGA                     | W   | 0.667      | 0.384        | 0.015 (0.004)    | 0.565 (0.145)    | 0 (0.000) |    13.33 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           17 |     3105 | 2026-03-19 | IDoPieca                  | W   | 0.659      | -            | -                | -                | 0 (0.000) |     1.74 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           16 |     3149 | 2026-03-18 | Fingers Crossed Female    | W   | 0.653      | -            | -                | -                | -         |     2.26 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           15 |     3178 | 2026-03-17 | Ursa                      | L   | 0.647      | -            | -                | -                | -         |   -10.28 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           14 |     3232 | 2026-03-16 | FAVBET Team               | L   | 0.640      | -            | -                | -                | -         |   -10.93 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           13 |     3326 | 2026-03-14 | TNC Esport                | W   | 0.626      | 0.435        | 0.021 (0.006)    | 1.000 (0.272)    | -         |    10.40 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           12 |     3377 | 2026-03-13 | Ex-Zero Tenacity          | L   | 0.619      | -            | -                | -                | -         |   -12.43 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           11 |     3504 | 2026-03-10 | Bebop                     | W   | 0.600      | 0.435        | 0.002 (0.001)    | 0.788 (0.205)    | -         |     6.49 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|           10 |     3654 | 2026-03-08 | Zajezdzacze               | L   | 0.586      | -            | -                | -                | -         |   -16.27 | clax, CYPHER, Patsi, pr1metapz, R4DYX   |
|            9 |     4136 | 2026-02-26 | OMEGA                     | L   | 0.518      | -            | -                | -                | -         |    -5.13 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            8 |     4357 | 2026-02-21 | Team Nemesis              | L   | 0.491      | -            | -                | -                | -         |    -3.41 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            7 |     4480 | 2026-02-19 | Lavked                    | L   | 0.474      | -            | -                | -                | -         |    -9.20 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            6 |     4531 | 2026-02-18 | Playersclub               | W   | 0.467      | -            | -                | -                | -         |     1.56 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            5 |     4588 | 2026-02-17 | OMEGA                     | W   | 0.461      | 0.384        | 0.015 (0.003)    | 0.565 (0.100)    | -         |    10.38 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            4 |     4685 | 2026-02-15 | Cirahvi                   | W   | 0.447      | 0.384        | 0.004 (0.001)    | 0.520 (0.089)    | -         |     2.97 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            3 |     4715 | 2026-02-15 | Esport Academy Copenhagen | L   | 0.446      | -            | -                | -                | -         |    -3.59 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            2 |     4767 | 2026-02-14 | TDK                       | L   | 0.439      | -            | -                | -                | -         |    -4.21 | clax, danistzz, Patsi, pr1metapz, R4DYX |
|            1 |     5109 | 2026-02-04 | ECSTATIC                  | L   | 0.372      | -            | -                | -                | -         |    -4.03 | clax, danistzz, Patsi, pr1metapz, R4DYX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,333.74)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.773 | $5,000.00      | $3,866.42       |
| 2026-03-27 |      0.714 | $750.00        | $535.38         |
| 2026-02-22 |      0.493 | $350.00        | $172.59         |
| 2026-02-05 |      0.380 | $2,000.00      | $759.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
