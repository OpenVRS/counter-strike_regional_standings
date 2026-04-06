### Roster Details<br />
Team Name: Sangal Esports<br />
Roster: clax, danistzz, h0kz, Patsi, R4DYX<br />
Global Rank: [143](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [100]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  895.7<br />
<br />
Final Rank Value (895.7) = Starting Rank Value (809.8) + Head To Head Adjustments (85.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.094[<sup>2</sup>](#table1)
- LAN Wins: 0.124[<sup>2</sup>](#table1)

The average of these factors is 0.209<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 809.8
- 400 + ( ( 0.209 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 809.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.222
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |     3150 | 2026-01-26 | 1w Team             | L   | 0.732      | -            | -                | -                | -         |    -1.21 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           48 |     3172 | 2026-01-25 | Ex-RUBY             | L   | 0.725      | -            | -                | -                | -         |    -6.68 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           47 |     3249 | 2026-01-23 | FAVBET Team         | W   | 0.713      | 0.435        | 0.044 (0.014)    | 0.583 (0.181)    | 0 (0.000) |    13.47 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           46 |     3328 | 2026-01-21 | Nuclear TigeRES     | L   | 0.700      | -            | -                | -                | -         |    -1.75 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           45 |     3348 | 2026-01-21 | HOTU                | L   | 0.698      | -            | -                | -                | -         |    -1.36 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           44 |     3361 | 2026-01-20 | FORZE Reload        | W   | 0.693      | 0.435        | -                | 0.472 (0.142)    | 0 (0.000) |    11.98 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           43 |     3407 | 2026-01-18 | Illwill             | L   | 0.679      | -            | -                | -                | -         |    -6.74 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           42 |     3434 | 2026-01-17 | KOLESIE             | W   | 0.674      | 0.143        | 0.050 (0.005)    | 0.571 (0.055)    | 0 (0.000) |    18.32 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           41 |     3447 | 2026-01-17 | BULGARIAPEEK        | W   | 0.673      | -            | -                | -                | 0 (0.000) |     1.43 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           40 |     3743 | 2025-12-22 | Team Nemesis        | L   | 0.498      | -            | -                | -                | -         |   -10.93 | danistzz, h0kz, Norwi, Patsi, R4DYX  |
|           39 |     3761 | 2025-12-21 | Mousquetaires       | W   | 0.491      | -            | -                | -                | 0 (0.000) |     5.12 | danistzz, h0kz, Norwi, Patsi, R4DYX  |
|           38 |     3894 | 2025-12-12 | BIG                 | L   | 0.433      | -            | -                | -                | -         |    -0.37 | clax, danistzz, Norwi, Patsi, r3salt |
|           37 |     3926 | 2025-12-09 | Tung Tung Sahur     | W   | 0.414      | 0.435        | 0.013 (0.002)    | 0.335 (0.060)    | 0 (0.000) |     6.35 | clax, danistzz, Norwi, Patsi, r3salt |
|           36 |     3977 | 2025-12-07 | EYEBALLERS          | L   | 0.399      | -            | -                | -                | -         |    -0.57 | clax, danistzz, Norwi, Patsi, r3salt |
|           35 |     3995 | 2025-12-06 | Sashi Esport        | W   | 0.393      | 0.435        | 0.013 (0.002)    | 0.631 (0.108)    | -         |    11.49 | clax, danistzz, Norwi, Patsi, r3salt |
|           34 |     4021 | 2025-12-05 | Alliance            | L   | 0.386      | -            | -                | -                | -         |    -0.33 | clax, danistzz, Norwi, Patsi, r3salt |
|           33 |     4026 | 2025-12-05 | Oramond             | W   | 0.385      | 0.371        | 0.049 (0.007)    | 0.473 (0.068)    | -         |     8.31 | clax, danistzz, Norwi, Patsi, r3salt |
|           32 |     4091 | 2025-12-02 | SIXSEVEN            | W   | 0.365      | -            | -                | -                | -         |     4.89 | clax, danistzz, Norwi, Patsi, r3salt |
|           31 |     4233 | 2025-11-26 | CYBERSHOKE Esports  | L   | 0.325      | -            | -                | -                | -         |    -1.03 | clax, danistzz, Norwi, Patsi, r3salt |
|           30 |     4243 | 2025-11-25 | Nemiga Gaming       | W   | 0.320      | 0.371        | 0.138 (0.016)    | 0.935 (0.111)    | 1 (0.320) |     9.78 | clax, danistzz, Norwi, Patsi, r3salt |
|           29 |     4277 | 2025-11-24 | WW Team             | W   | 0.313      | 0.371        | 0.034 (0.004)    | 0.865 (0.100)    | 1 (0.313) |     9.60 | clax, danistzz, Norwi, Patsi, r3salt |
|           28 |     4297 | 2025-11-24 | Infinite Gaming     | W   | 0.311      | -            | -                | -                | 1 (0.311) |     1.55 | clax, danistzz, Norwi, Patsi, r3salt |
|           27 |     4341 | 2025-11-22 | AaB esport          | L   | 0.299      | -            | -                | -                | -         |    -6.57 | clax, danistzz, Norwi, Patsi, r3salt |
|           26 |     4353 | 2025-11-22 | Team Nemesis        | L   | 0.298      | -            | -                | -                | -         |    -0.29 | clax, danistzz, Norwi, Patsi, r3salt |
|           25 |     4359 | 2025-11-21 | BAKS Esports        | W   | 0.294      | -            | -                | -                | 1 (0.294) |     0.76 | clax, danistzz, Norwi, Patsi, r3salt |
|           24 |     4470 | 2025-11-17 | Tung Tung Sahur     | L   | 0.267      | -            | -                | -                | -         |    -4.11 | clax, danistzz, Norwi, Patsi, r3salt |
|           23 |     4488 | 2025-11-16 | ARCRED              | W   | 0.260      | 0.435        | 0.017 (0.002)    | 0.704 (0.079)    | -         |     7.66 | clax, danistzz, Norwi, Patsi, r3salt |
|           22 |     4596 | 2025-11-12 | Lavked              | L   | 0.232      | -            | -                | -                | -         |    -3.27 | clax, danistzz, Norwi, Patsi, r3salt |
|           21 |     4646 | 2025-11-10 | K27                 | L   | 0.220      | -            | -                | -                | -         |    -0.14 | clax, danistzz, Norwi, Patsi, r3salt |
|           20 |     4876 | 2025-11-06 | Team Spirit Academy | W   | 0.192      | -            | -                | -                | -         |     1.77 | clax, danistzz, Norwi, Patsi, r3salt |
|           19 |     4894 | 2025-11-05 | ECSTATIC            | L   | 0.186      | -            | -                | -                | -         |    -0.22 | clax, danistzz, Norwi, Patsi, r3salt |
|           18 |     4930 | 2025-11-04 | Betera Esports      | W   | 0.179      | -            | -                | -                | -         |     1.80 | clax, danistzz, Norwi, Patsi, r3salt |
|           17 |     5050 | 2025-10-30 | Partizan Esports    | L   | 0.147      | -            | -                | -                | -         |    -3.44 | clax, danistzz, Norwi, Patsi, r3salt |
|           16 |     5097 | 2025-10-28 | 9BoomPro            | W   | 0.134      | -            | -                | -                | -         |     0.58 | clax, danistzz, Norwi, Patsi, r3salt |
|           15 |     5133 | 2025-10-27 | Tung Tung Sahur     | W   | 0.127      | -            | -                | -                | -         |     2.07 | clax, danistzz, Norwi, Patsi, r3salt |
|           14 |     5190 | 2025-10-26 | 33                  | L   | 0.120      | -            | -                | -                | -         |    -0.16 | clax, danistzz, Norwi, Patsi, r3salt |
|           13 |     5201 | 2025-10-26 | Sashi Esport        | W   | 0.120      | -            | -                | -                | -         |     3.56 | clax, danistzz, Norwi, Patsi, r3salt |
|           12 |     5303 | 2025-10-24 | Ex-Zero Tenacity    | W   | 0.107      | -            | -                | -                | -         |     1.74 | clax, danistzz, Norwi, Patsi, r3salt |
|           11 |     5355 | 2025-10-23 | Lavked              | W   | 0.100      | -            | -                | -                | -         |     1.78 | clax, danistzz, Norwi, Patsi, r3salt |
|           10 |     5364 | 2025-10-23 | Nemiga Gaming       | W   | 0.099      | 0.435        | 0.138 (0.006)    | 0.935 (0.040)    | -         |     3.05 | clax, danistzz, Norwi, Patsi, r3salt |
|            9 |     5411 | 2025-10-21 | CYBERSHOKE Esports  | W   | 0.085      | -            | -                | -                | -         |     2.47 | clax, danistzz, Norwi, Patsi, r3salt |
|            8 |     5423 | 2025-10-20 | ESC Gaming          | L   | 0.080      | -            | -                | -                | -         |    -0.35 | clax, danistzz, Norwi, Patsi, r3salt |
|            7 |     5424 | 2025-10-20 | Johnny Speeds       | W   | 0.079      | 0.435        | 0.067 (0.002)    | -                | -         |     2.40 | clax, danistzz, Norwi, Patsi, r3salt |
|            6 |     5453 | 2025-10-18 | ESC Gaming          | W   | 0.067      | -            | -                | -                | -         |     1.82 | clax, danistzz, Norwi, Patsi, r3salt |
|            5 |     5547 | 2025-10-15 | Johnny Speeds       | W   | 0.047      | -            | -                | -                | -         |     1.42 | clax, danistzz, Norwi, Patsi, r3salt |
|            4 |     5671 | 2025-10-10 | 500                 | W   | 0.013      | -            | -                | -                | -         |     0.10 | clax, danistzz, Norwi, Patsi, r3salt |
|            3 |     5683 | 2025-10-10 | BetBoom Team        | L   | 0.013      | -            | -                | -                | -         |    -0.01 | clax, danistzz, Norwi, Patsi, r3salt |
|            2 |     5737 | 2025-10-09 | JiJieHao            | W   | 0.005      | -            | -                | -                | -         |     0.14 | clax, danistzz, Norwi, Patsi, r3salt |
|            1 |     5768 | 2025-10-08 | Monte               | W   | 0.000      | -            | -                | -                | -         |     0.00 | clax, danistzz, Norwi, Patsi, r3salt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,651.09)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-26 |      0.326 | $2,000.00      | $652.71         |
| 2025-11-22 |      0.300 | $500.00        | $149.84         |
| 2025-11-06 |      0.193 | $7,500.00      | $1,448.01       |
| 2025-10-20 |      0.080 | $5,000.00      | $400.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
