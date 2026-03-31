### Roster Details<br />
Team Name: UNiTY esports<br />
Roster: K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi<br />
Global Rank: [106](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [77]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  984.0<br />
<br />
Final Rank Value (984.0) = Starting Rank Value (882.4) + Head To Head Adjustments (101.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.332[<sup>2</sup>](#table1)
- Opponent Network: 0.262[<sup>2</sup>](#table1)
- LAN Wins: 0.107[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 882.4
- 400 + ( ( 0.249 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 882.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.479
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      238 | 2026-03-23 | Metizport               | L   | 1.000      | -            | -                | -                | -         |    -9.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           46 |      261 | 2026-03-23 | Metizport               | L   | 1.000      | -            | -                | -                | -         |   -10.65 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           45 |      337 | 2026-03-21 | Sangal Esports          | L   | 1.000      | -            | -                | -                | -         |   -19.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           44 |      389 | 2026-03-20 | G2 Ares                 | W   | 1.000      | 0.384        | 0.002 (0.001)    | -                | 0 (0.000) |     9.04 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           43 |      440 | 2026-03-19 | CSDIILIT                | W   | 1.000      | 0.384        | -                | 0.638 (0.245)    | 0 (0.000) |     8.22 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           42 |      480 | 2026-03-18 | QWENTRY                 | W   | 1.000      | 0.384        | 0.038 (0.015)    | 1.000 (0.384)    | 0 (0.000) |    18.34 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           41 |      504 | 2026-03-17 | MINLATE (European team) | L   | 1.000      | -            | -                | -                | -         |   -17.72 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           40 |     1070 | 2026-03-06 | MOUZ NXT                | L   | 1.000      | -            | -                | -                | -         |    -9.83 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           39 |     1232 | 2026-03-02 | 33                      | L   | 1.000      | -            | -                | -                | -         |    -7.38 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           38 |     1330 | 2026-02-28 | WW Team                 | W   | 1.000      | 0.371        | 0.022 (0.008)    | 0.820 (0.304)    | 0 (0.000) |    24.82 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           37 |     1599 | 2026-02-23 | ENCE Academy            | W   | 0.969      | 0.371        | -                | 0.557 (0.200)    | 0 (0.000) |    10.96 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           36 |     1911 | 2026-02-17 | Alliance                | L   | 0.932      | -            | -                | -                | -         |    -2.91 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           35 |     1970 | 2026-02-16 | JiJieHao                | W   | 0.924      | 0.384        | 0.024 (0.009)    | -                | 0 (0.000) |    18.20 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           34 |     2031 | 2026-02-15 | Ex-Zero Tenacity        | W   | 0.917      | 0.384        | -                | 0.545 (0.192)    | 0 (0.000) |     6.69 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           33 |     2059 | 2026-02-14 | Johnny Speeds           | L   | 0.912      | -            | -                | -                | -         |    -5.90 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           32 |     2120 | 2026-02-13 | SPARTA Esports          | W   | 0.905      | 0.384        | 0.062 (0.022)    | 0.758 (0.264)    | -         |    25.05 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           31 |     2495 | 2026-02-02 | Nuclear TigeRES         | L   | 0.829      | -            | -                | -                | -         |    -2.93 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           30 |     2621 | 2026-01-29 | 1w Team                 | L   | 0.802      | -            | -                | -                | -         |    -3.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           29 |     2644 | 2026-01-28 | Betclic Apogee Esports  | W   | 0.796      | 0.435        | 0.025 (0.009)    | 0.611 (0.211)    | -         |    21.86 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           28 |     2689 | 2026-01-25 | MOUZ NXT                | W   | 0.778      | 0.435        | 0.036 (0.012)    | 1.000 (0.338)    | -         |    19.54 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           27 |     2710 | 2026-01-25 | Japczany                | W   | 0.776      | -            | -                | -                | -         |     4.87 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           26 |     2779 | 2026-01-23 | Hashiras                | W   | 0.764      | -            | -                | -                | -         |     9.84 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           25 |     2784 | 2026-01-23 | BC.Game Esports         | W   | 0.764      | -            | -                | -                | -         |     5.78 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           24 |     2839 | 2026-01-22 | GenOne                  | L   | 0.756      | -            | -                | -                | -         |    -8.78 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           23 |     2900 | 2026-01-20 | Nuclear TigeRES         | L   | 0.742      | -            | -                | -                | -         |    -2.31 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           22 |     2909 | 2026-01-19 | Tung Tung Sahur         | L   | 0.737      | -            | -                | -                | -         |   -12.48 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           21 |     2926 | 2026-01-18 | AM Gaming               | L   | 0.732      | -            | -                | -                | -         |    -2.89 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           20 |     2966 | 2026-01-17 | Bebop                   | W   | 0.725      | 0.384        | 0.005 (0.001)    | 0.750 (0.209)    | -         |    10.78 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           19 |     3076 | 2026-01-15 | Illwill                 | W   | 0.712      | 0.384        | 0.063 (0.017)    | 1.000 (0.273)    | -         |    21.22 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           18 |     3106 | 2026-01-14 | Petardka                | W   | 0.704      | -            | -                | -                | -         |     1.40 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           17 |     3313 | 2025-12-20 | Team Nemesis            | L   | 0.537      | -            | -                | -                | -         |   -11.99 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           16 |     3710 | 2025-11-29 | BRUTE                   | W   | 0.396      | -            | -                | -                | 1 (0.396) |     3.97 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           15 |     3738 | 2025-11-28 | SINNERS Esports         | L   | 0.390      | -            | -                | -                | -         |    -0.38 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           14 |     3914 | 2025-11-21 | FUT Esports             | L   | 0.343      | -            | -                | -                | -         |    -0.32 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           13 |     3920 | 2025-11-21 | ECSTATIC                | L   | 0.343      | -            | -                | -                | -         |    -0.62 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           12 |     3954 | 2025-11-20 | Haemus eSports          | W   | 0.337      | -            | -                | -                | 1 (0.337) |     1.04 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           11 |     3965 | 2025-11-20 | Acend                   | W   | 0.336      | 0.338        | 0.031 (0.004)    | -                | 1 (0.336) |     8.66 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|           10 |     4686 | 2025-10-27 | NOVAQ                   | L   | 0.176      | -            | -                | -                | -         |    -1.26 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            9 |     4893 | 2025-10-23 | ALLINNERS               | W   | 0.151      | -            | -                | -                | -         |     0.98 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            8 |     4925 | 2025-10-22 | HubaBuba                | W   | 0.143      | -            | -                | -                | -         |     0.39 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            7 |     5050 | 2025-10-16 | 1w Team                 | L   | 0.103      | -            | -                | -                | -         |    -0.35 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            6 |     5095 | 2025-10-15 | Nexus Gaming            | W   | 0.095      | -            | -                | -                | -         |     2.35 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            5 |     5146 | 2025-10-13 | FAVBET Team             | L   | 0.083      | -            | -                | -                | -         |    -1.14 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            4 |     5258 | 2025-10-09 | Tricked Esport          | W   | 0.057      | -            | -                | -                | -         |     1.62 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            3 |     5446 | 2025-10-06 | Betera Esports          | L   | 0.035      | -            | -                | -                | -         |    -0.83 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            2 |     5575 | 2025-10-03 | Hashiras                | L   | 0.016      | -            | -                | -                | -         |    -0.32 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |
|            1 |     5620 | 2025-10-02 | KHAN                    | W   | 0.009      | -            | -                | -                | -         |     0.02 | K1-FiDa, M1key, MoriiSko, NEOFRAG, woozzzi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,907.59)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      0.397 | $4,805.96      | $1,907.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
