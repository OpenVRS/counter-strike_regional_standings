### Roster Details<br />
Team Name: UNiTY esports<br />
Roster: K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi<br />
Global Rank: [119](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [82]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  993.9<br />
<br />
Final Rank Value (993.9) = Starting Rank Value (865.8) + Head To Head Adjustments (128.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.8
- 400 + ( ( 0.238 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 865.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.435
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      690 | 2026-03-23 | Metizport              | L   | 1.000      | -            | -                | -                | -         |    -9.24 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           43 |      717 | 2026-03-23 | Metizport              | L   | 1.000      | -            | -                | -                | -         |    -9.84 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           42 |      804 | 2026-03-21 | Sangal Esports         | L   | 1.000      | -            | -                | -                | -         |   -13.74 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           41 |      860 | 2026-03-20 | G2 Ares                | W   | 1.000      | 0.384        | 0.002 (0.001)    | -                | 0 (0.000) |     9.45 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           40 |      917 | 2026-03-19 | CSDIILIT               | W   | 1.000      | 0.384        | -                | 0.654 (0.251)    | 0 (0.000) |     8.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           39 |      961 | 2026-03-18 | QWENTRY                | W   | 1.000      | 0.384        | 0.045 (0.017)    | 1.000 (0.384)    | 0 (0.000) |    19.88 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           38 |      987 | 2026-03-17 | Ex-MINLATE             | L   | 1.000      | -            | -                | -                | -         |   -14.86 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           37 |     1557 | 2026-03-06 | MOUZ NXT               | L   | 0.992      | -            | -                | -                | -         |    -8.00 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           36 |     1719 | 2026-03-02 | 33                     | L   | 0.968      | -            | -                | -                | -         |    -3.84 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           35 |     1817 | 2026-02-28 | WW Team                | W   | 0.954      | 0.371        | 0.034 (0.012)    | 0.865 (0.306)    | 0 (0.000) |    25.41 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           34 |     2089 | 2026-02-23 | ENCE Academy           | W   | 0.918      | 0.371        | -                | 0.513 (0.175)    | 0 (0.000) |    11.08 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           33 |     2405 | 2026-02-17 | Alliance               | L   | 0.881      | -            | -                | -                | -         |    -2.07 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           32 |     2464 | 2026-02-16 | JiJieHao               | W   | 0.873      | 0.384        | 0.025 (0.008)    | 0.437 (0.147)    | 0 (0.000) |    19.92 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           31 |     2526 | 2026-02-15 | Ex-Zero Tenacity       | W   | 0.866      | 0.384        | -                | 0.547 (0.182)    | 0 (0.000) |     8.37 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           30 |     2554 | 2026-02-14 | Johnny Speeds          | L   | 0.861      | -            | -                | -                | -         |    -3.49 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           29 |     2615 | 2026-02-13 | SPARTA Esports         | W   | 0.854      | 0.384        | 0.063 (0.021)    | 0.732 (0.240)    | -         |    24.47 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           28 |     2990 | 2026-02-02 | Nuclear TigeRES        | L   | 0.778      | -            | -                | -                | -         |    -2.02 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           27 |     3117 | 2026-01-29 | 1w Team                | L   | 0.752      | -            | -                | -                | -         |    -1.40 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           26 |     3140 | 2026-01-28 | Betclic Apogee Esports | W   | 0.745      | 0.435        | 0.026 (0.008)    | 0.602 (0.195)    | -         |    21.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           25 |     3185 | 2026-01-25 | MOUZ NXT               | W   | 0.728      | 0.435        | 0.037 (0.012)    | 1.000 (0.316)    | -         |    19.26 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           24 |     3206 | 2026-01-25 | Japczany               | W   | 0.725      | -            | -                | -                | -         |     5.17 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           23 |     3278 | 2026-01-23 | Hashiras               | W   | 0.713      | -            | -                | -                | -         |    10.44 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           22 |     3283 | 2026-01-23 | BC.Game Esports        | W   | 0.713      | -            | -                | -                | -         |     5.51 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           21 |     3338 | 2026-01-22 | GenOne                 | L   | 0.705      | -            | -                | -                | -         |    -7.37 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           20 |     3399 | 2026-01-20 | Nuclear TigeRES        | L   | 0.692      | -            | -                | -                | -         |    -1.56 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           19 |     3408 | 2026-01-19 | Tung Tung Sahur        | L   | 0.686      | -            | -                | -                | -         |   -11.47 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           18 |     3425 | 2026-01-18 | AM Gaming              | L   | 0.681      | -            | -                | -                | -         |    -1.19 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           17 |     3465 | 2026-01-17 | Bebop                  | W   | 0.674      | 0.384        | 0.005 (0.001)    | 0.764 (0.198)    | -         |    10.84 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           16 |     3578 | 2026-01-15 | Illwill                | W   | 0.661      | 0.384        | 0.042 (0.011)    | -                | -         |    14.61 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           15 |     3608 | 2026-01-14 | Petardka               | W   | 0.653      | -            | -                | -                | -         |     1.42 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           14 |     3817 | 2025-12-20 | Team Nemesis           | L   | 0.486      | -            | -                | -                | -         |   -10.79 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           13 |     4214 | 2025-11-29 | BRUTE                  | W   | 0.345      | -            | -                | -                | 1 (0.345) |     4.00 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           12 |     4242 | 2025-11-28 | SINNERS Esports        | L   | 0.339      | -            | -                | -                | -         |    -0.26 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           11 |     4418 | 2025-11-21 | FUT Esports            | L   | 0.293      | -            | -                | -                | -         |    -0.23 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           10 |     4424 | 2025-11-21 | ECSTATIC               | L   | 0.292      | -            | -                | -                | -         |    -0.44 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            9 |     4458 | 2025-11-20 | Haemus eSports         | W   | 0.286      | -            | -                | -                | 1 (0.286) |     0.94 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            8 |     4469 | 2025-11-20 | Acend                  | W   | 0.286      | 0.338        | 0.035 (0.003)    | -                | 1 (0.286) |     8.26 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            7 |     5190 | 2025-10-27 | NOVAQ                  | L   | 0.125      | -            | -                | -                | -         |    -0.86 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            6 |     5397 | 2025-10-23 | ALLINNERS              | W   | 0.100      | -            | -                | -                | -         |     0.70 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            5 |     5429 | 2025-10-22 | HubaBuba               | W   | 0.092      | -            | -                | -                | -         |     0.20 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            4 |     5554 | 2025-10-16 | 1w Team                | L   | 0.052      | -            | -                | -                | -         |    -0.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            3 |     5599 | 2025-10-15 | Nexus Gaming           | W   | 0.045      | -            | -                | -                | -         |     1.11 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            2 |     5650 | 2025-10-13 | FAVBET Team            | L   | 0.032      | -            | -                | -                | -         |    -0.41 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            1 |     5762 | 2025-10-09 | Tricked Esport         | W   | 0.007      | -            | -                | -                | -         |     0.19 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,664.47)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      0.346 | $4,806.00      | $1,664.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
