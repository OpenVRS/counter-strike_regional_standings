### Roster Details<br />
Team Name: UNiTY esports<br />
Roster: K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi<br />
Global Rank: [119](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [82]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  992.9<br />
<br />
Final Rank Value (992.9) = Starting Rank Value (865.4) + Head To Head Adjustments (127.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.239[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 865.4
- 400 + ( ( 0.238 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 865.4


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
|           44 |      672 | 2026-03-23 | Metizport              | L   | 1.000      | -            | -                | -                | -         |    -9.28 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           43 |      699 | 2026-03-23 | Metizport              | L   | 1.000      | -            | -                | -                | -         |    -9.89 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           42 |      786 | 2026-03-21 | Sangal Esports         | L   | 1.000      | -            | -                | -                | -         |   -12.30 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           41 |      842 | 2026-03-20 | G2 Ares                | W   | 1.000      | 0.384        | 0.002 (0.001)    | -                | 0 (0.000) |     9.49 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           40 |      899 | 2026-03-19 | CSDIILIT               | W   | 1.000      | 0.384        | -                | 0.634 (0.243)    | 0 (0.000) |     8.59 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           39 |      943 | 2026-03-18 | QWENTRY                | W   | 1.000      | 0.384        | 0.045 (0.017)    | 1.000 (0.384)    | 0 (0.000) |    19.80 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           38 |      969 | 2026-03-17 | Ex-MINLATE             | L   | 1.000      | -            | -                | -                | -         |   -14.99 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           37 |     1539 | 2026-03-06 | MOUZ NXT               | L   | 0.991      | -            | -                | -                | -         |    -7.96 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           36 |     1701 | 2026-03-02 | 33                     | L   | 0.967      | -            | -                | -                | -         |    -3.83 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           35 |     1799 | 2026-02-28 | WW Team                | W   | 0.953      | 0.371        | 0.034 (0.012)    | 0.865 (0.305)    | 0 (0.000) |    25.46 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           34 |     2068 | 2026-02-23 | ENCE Academy           | W   | 0.918      | 0.371        | -                | 0.513 (0.175)    | 0 (0.000) |    11.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           33 |     2380 | 2026-02-17 | Alliance               | L   | 0.880      | -            | -                | -                | -         |    -2.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           32 |     2439 | 2026-02-16 | JiJieHao               | W   | 0.873      | 0.384        | 0.025 (0.008)    | 0.437 (0.146)    | 0 (0.000) |    19.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           31 |     2500 | 2026-02-15 | Ex-Zero Tenacity       | W   | 0.866      | 0.384        | -                | 0.547 (0.182)    | 0 (0.000) |     8.41 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           30 |     2528 | 2026-02-14 | Johnny Speeds          | L   | 0.860      | -            | -                | -                | -         |    -3.50 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           29 |     2589 | 2026-02-13 | SPARTA Esports         | W   | 0.854      | 0.384        | 0.063 (0.021)    | 0.732 (0.240)    | -         |    24.47 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           28 |     2964 | 2026-02-02 | Nuclear TigeRES        | L   | 0.778      | -            | -                | -                | -         |    -2.02 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           27 |     3090 | 2026-01-29 | 1w Team                | L   | 0.751      | -            | -                | -                | -         |    -1.39 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           26 |     3113 | 2026-01-28 | Betclic Apogee Esports | W   | 0.745      | 0.435        | 0.026 (0.008)    | 0.603 (0.195)    | -         |    21.06 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           25 |     3158 | 2026-01-25 | MOUZ NXT               | W   | 0.727      | 0.435        | 0.037 (0.012)    | 1.000 (0.316)    | -         |    19.19 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           24 |     3179 | 2026-01-25 | Japczany               | W   | 0.725      | -            | -                | -                | -         |     5.18 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           23 |     3248 | 2026-01-23 | Hashiras               | W   | 0.713      | -            | -                | -                | -         |     9.64 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           22 |     3253 | 2026-01-23 | BC.Game Esports        | W   | 0.713      | -            | -                | -                | -         |     5.53 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           21 |     3308 | 2026-01-22 | GenOne                 | L   | 0.705      | -            | -                | -                | -         |    -7.35 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           20 |     3369 | 2026-01-20 | Nuclear TigeRES        | L   | 0.691      | -            | -                | -                | -         |    -1.57 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           19 |     3378 | 2026-01-19 | Tung Tung Sahur        | L   | 0.686      | -            | -                | -                | -         |   -11.65 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           18 |     3395 | 2026-01-18 | AM Gaming              | L   | 0.680      | -            | -                | -                | -         |    -1.18 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           17 |     3435 | 2026-01-17 | Bebop                  | W   | 0.674      | 0.384        | 0.005 (0.001)    | 0.764 (0.198)    | -         |    10.83 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           16 |     3545 | 2026-01-15 | Illwill                | W   | 0.660      | 0.384        | 0.042 (0.011)    | -                | -         |    14.53 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           15 |     3575 | 2026-01-14 | Petardka               | W   | 0.653      | -            | -                | -                | -         |     1.42 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           14 |     3782 | 2025-12-20 | Team Nemesis           | L   | 0.485      | -            | -                | -                | -         |   -10.84 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           13 |     4179 | 2025-11-29 | BRUTE                  | W   | 0.345      | -            | -                | -                | 1 (0.345) |     3.60 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           12 |     4207 | 2025-11-28 | SINNERS Esports        | L   | 0.339      | -            | -                | -                | -         |    -0.26 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           11 |     4383 | 2025-11-21 | FUT Esports            | L   | 0.292      | -            | -                | -                | -         |    -0.23 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           10 |     4389 | 2025-11-21 | ECSTATIC               | L   | 0.292      | -            | -                | -                | -         |    -0.44 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            9 |     4423 | 2025-11-20 | Haemus eSports         | W   | 0.286      | -            | -                | -                | 1 (0.286) |     0.94 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            8 |     4434 | 2025-11-20 | Acend                  | W   | 0.285      | 0.338        | 0.035 (0.003)    | -                | 1 (0.285) |     8.24 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            7 |     5155 | 2025-10-27 | NOVAQ                  | L   | 0.125      | -            | -                | -                | -         |    -0.85 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            6 |     5362 | 2025-10-23 | ALLINNERS              | W   | 0.099      | -            | -                | -                | -         |     0.70 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            5 |     5394 | 2025-10-22 | HubaBuba               | W   | 0.092      | -            | -                | -                | -         |     0.20 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            4 |     5519 | 2025-10-16 | 1w Team                | L   | 0.052      | -            | -                | -                | -         |    -0.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            3 |     5564 | 2025-10-15 | Nexus Gaming           | W   | 0.044      | -            | -                | -                | -         |     1.10 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            2 |     5615 | 2025-10-13 | FAVBET Team            | L   | 0.032      | -            | -                | -                | -         |    -0.40 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            1 |     5727 | 2025-10-09 | Tricked Esport         | W   | 0.006      | -            | -                | -                | -         |     0.18 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,661.79)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      0.346 | $4,805.96      | $1,661.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
