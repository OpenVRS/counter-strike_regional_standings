### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, maxxkor, rdnzao<br />
Global Rank: [24](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [5]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  1378.6<br />
<br />
Final Rank Value (1378.6) = Starting Rank Value (1485.4) + Head To Head Adjustments (-106.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.594[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.243[<sup>2</sup>](#table1)
- LAN Wins: 0.980[<sup>2</sup>](#table1)

The average of these factors is 0.565<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1485.4
- 400 + ( ( 0.565 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1485.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.827
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           77 |        4 | 2026-03-08 | Imperial Esports       | W   | 1.000      | 0.384        | 0.085 (0.033)    | 0.703 (0.270)    | 1 (1.000) |     9.78 | doc, gafolo, koala, maxxkor, rdnzao |
|           76 |       10 | 2026-03-07 | 9z Team                | L   | 1.000      | -            | -                | -                | -         |   -12.13 | doc, gafolo, koala, maxxkor, rdnzao |
|           75 |       17 | 2026-03-07 | Fluxo W7M              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           74 |       62 | 2026-03-05 | ODDIK                  | W   | 1.000      | 0.384        | 0.052 (0.020)    | 0.531 (0.204)    | 1 (1.000) |     8.22 | doc, gafolo, koala, maxxkor, rdnzao |
|           73 |       69 | 2026-03-05 | MIBR Academy           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.25 | doc, gafolo, koala, maxxkor, rdnzao |
|           72 |      152 | 2026-03-01 | 9z Team                | L   | 1.000      | -            | -                | -                | -         |   -13.21 | doc, gafolo, koala, maxxkor, rdnzao |
|           71 |      222 | 2026-02-27 | RED Canids             | W   | 1.000      | 0.435        | 0.052 (0.023)    | 0.674 (0.293)    | 1 (1.000) |    10.64 | doc, gafolo, koala, maxxkor, rdnzao |
|           70 |      274 | 2026-02-26 | 9z Team                | W   | 1.000      | 0.435        | 0.158 (0.069)    | 0.582 (0.253)    | 1 (1.000) |    18.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           69 |      340 | 2026-02-25 | Galorys                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           68 |      531 | 2026-02-21 | ODDIK                  | L   | 1.000      | -            | -                | -                | -         |   -22.90 | doc, gafolo, koala, maxxkor, rdnzao |
|           67 |      579 | 2026-02-20 | Imperial Esports       | W   | 1.000      | 0.363        | 0.085 (0.031)    | 0.703 (0.255)    | -         |     9.53 | doc, gafolo, koala, maxxkor, rdnzao |
|           66 |      629 | 2026-02-19 | Procyon Team           | W   | 1.000      | -            | -                | -                | -         |     1.34 | doc, gafolo, koala, maxxkor, rdnzao |
|           65 |      670 | 2026-02-18 | ShindeN                | L   | 1.000      | -            | -                | -                | -         |   -22.72 | doc, gafolo, koala, maxxkor, rdnzao |
|           64 |      723 | 2026-02-17 | FOLHA AMARELA          | W   | 1.000      | -            | -                | -                | -         |     1.50 | doc, gafolo, koala, maxxkor, rdnzao |
|           63 |      816 | 2026-02-15 | RED Canids             | W   | 1.000      | 0.371        | 0.052 (0.019)    | 0.674 (0.250)    | -         |    12.22 | doc, gafolo, koala, maxxkor, rdnzao |
|           62 |      820 | 2026-02-15 | ShindeN                | W   | 1.000      | 0.371        | -                | 0.527 (0.195)    | -         |     8.80 | doc, gafolo, koala, maxxkor, rdnzao |
|           61 |      867 | 2026-02-14 | 9z Team                | W   | 1.000      | 0.371        | 0.158 (0.059)    | 0.582 (0.216)    | -         |    18.97 | doc, gafolo, koala, maxxkor, rdnzao |
|           60 |      974 | 2026-02-12 | Ex-KRÜ Esports         | W   | 1.000      | -            | -                | -                | -         |     0.94 | doc, gafolo, koala, maxxkor, rdnzao |
|           59 |     1116 | 2026-02-08 | 9z Team                | L   | 1.000      | -            | -                | -                | -         |   -12.30 | doc, gafolo, koala, maxxkor, rdnzao |
|           58 |     1132 | 2026-02-07 | RED Canids             | W   | 1.000      | -            | -                | -                | -         |    13.76 | doc, gafolo, koala, maxxkor, rdnzao |
|           57 |     1161 | 2026-02-06 | Galorys                | W   | 1.000      | -            | -                | -                | -         |     2.53 | doc, gafolo, koala, maxxkor, rdnzao |
|           56 |     1333 | 2026-01-31 | 9z Team                | L   | 0.960      | -            | -                | -                | -         |   -12.59 | doc, gafolo, koala, maxxkor, rdnzao |
|           55 |     1367 | 2026-01-30 | MIBR                   | L   | 0.954      | -            | -                | -                | -         |   -12.55 | doc, gafolo, koala, maxxkor, rdnzao |
|           54 |     1370 | 2026-01-30 | LUNA Esports           | W   | 0.953      | -            | -                | -                | 1 (0.953) |     0.29 | doc, gafolo, koala, maxxkor, rdnzao |
|           53 |     1532 | 2026-01-24 | Gaimin Gladiators      | L   | 0.911      | -            | -                | -                | -         |   -23.69 | doc, gafolo, koala, maxxkor, rdnzao |
|           52 |     1570 | 2026-01-23 | Metanoia               | W   | 0.905      | -            | -                | -                | 1 (0.905) |     0.41 | doc, gafolo, koala, maxxkor, rdnzao |
|           51 |     1636 | 2026-01-21 | Galorys                | W   | 0.894      | -            | -                | -                | 1 (0.894) |     1.80 | doc, gafolo, koala, maxxkor, rdnzao |
|           50 |     1642 | 2026-01-21 | 9z Team                | L   | 0.893      | -            | -                | -                | -         |   -11.52 | doc, gafolo, koala, maxxkor, rdnzao |
|           49 |     1643 | 2026-01-21 | Metanoia               | L   | 0.893      | -            | -                | -                | -         |   -27.80 | doc, gafolo, koala, maxxkor, rdnzao |
|           48 |     1655 | 2026-01-21 | RED Canids             | L   | 0.892      | -            | -                | -                | -         |   -19.43 | doc, gafolo, koala, maxxkor, rdnzao |
|           47 |     1711 | 2026-01-18 | MIBR                   | W   | 0.874      | 0.435        | 0.156 (0.059)    | 0.625 (0.237)    | -         |    11.94 | doc, gafolo, koala, maxxkor, rdnzao |
|           46 |     1792 | 2026-01-16 | Legacy                 | W   | 0.861      | 0.435        | 0.585 (0.219)    | -                | -         |    11.43 | doc, gafolo, koala, maxxkor, rdnzao |
|           45 |     1855 | 2026-01-15 | Imperial Esports       | W   | 0.854      | 0.435        | 0.085 (0.031)    | 0.703 (0.261)    | -         |     9.84 | doc, gafolo, koala, maxxkor, rdnzao |
|           44 |     1886 | 2026-01-14 | Keyd Stars             | W   | 0.847      | -            | -                | -                | -         |     1.53 | doc, gafolo, koala, maxxkor, rdnzao |
|           43 |     2013 | 2026-01-03 | Wildcard               | L   | 0.775      | -            | -                | -                | -         |   -23.57 | doc, gafolo, koala, maxxkor, rdnzao |
|           42 |     2016 | 2026-01-03 | GamerLegion            | L   | 0.774      | -            | -                | -                | -         |    -8.77 | doc, gafolo, koala, maxxkor, rdnzao |
|           41 |     2021 | 2026-01-03 | Wildcard               | W   | 0.773      | -            | -                | -                | -         |     0.72 | doc, gafolo, koala, maxxkor, rdnzao |
|           40 |     2064 | 2025-12-21 | BC.Game Esports        | L   | 0.685      | -            | -                | -                | -         |   -10.56 | doc, gafolo, koala, maxxkor, rdnzao |
|           39 |     2067 | 2025-12-21 | ASTRAL Esports         | W   | 0.684      | -            | -                | -                | -         |     1.72 | doc, gafolo, koala, maxxkor, rdnzao |
|           38 |     2106 | 2025-12-19 | FC Famalicão Esports   | W   | 0.673      | -            | -                | -                | -         |     0.83 | doc, gafolo, koala, maxxkor, rdnzao |
|           37 |     2109 | 2025-12-19 | Nebula In Chaox        | W   | 0.672      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|           36 |     2794 | 2025-11-16 | Keyd Stars             | W   | 0.453      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           35 |     2809 | 2025-11-15 | 9z Team                | L   | 0.447      | -            | -                | -                | -         |   -13.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           34 |     2822 | 2025-11-15 | Fake do Biru           | W   | 0.445      | -            | -                | -                | -         |     0.70 | doc, gafolo, koala, maxxkor, rdnzao |
|           33 |     2845 | 2025-11-14 | Gaimin Gladiators      | L   | 0.439      | -            | -                | -                | -         |   -12.55 | doc, gafolo, koala, maxxkor, rdnzao |
|           32 |     2858 | 2025-11-13 | 9z Team                | W   | 0.434      | -            | -                | -                | -         |     0.50 | doc, gafolo, koala, maxxkor, rdnzao |
|           31 |     2892 | 2025-11-12 | LargadosyPelados       | W   | 0.426      | -            | -                | -                | -         |     0.29 | doc, gafolo, koala, maxxkor, rdnzao |
|           30 |     2946 | 2025-11-10 | ShindeN                | W   | 0.414      | -            | -                | -                | -         |     1.95 | doc, gafolo, koala, maxxkor, rdnzao |
|           29 |     2971 | 2025-11-09 | Fluxo W7M              | L   | 0.406      | -            | -                | -                | -         |   -10.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           28 |     3009 | 2025-11-08 | Imperial Esports       | W   | 0.400      | -            | -                | -                | -         |     3.38 | doc, gafolo, koala, maxxkor, rdnzao |
|           27 |     3029 | 2025-11-08 | Gaimin Gladiators      | W   | 0.398      | -            | -                | -                | -         |     1.08 | doc, gafolo, koala, maxxkor, rdnzao |
|           26 |     3061 | 2025-11-07 | 9z Team                | W   | 0.394      | -            | -                | -                | -         |     0.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           25 |     3064 | 2025-11-07 | Bad Luck               | W   | 0.394      | -            | -                | -                | -         |     0.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           24 |     3469 | 2025-10-26 | Gaimin Gladiators      | W   | 0.314      | -            | -                | -                | -         |     0.19 | doc, gafolo, koala, maxxkor, rdnzao |
|           23 |     3545 | 2025-10-25 | BESTIA                 | W   | 0.305      | -            | -                | -                | -         |     2.51 | doc, gafolo, koala, maxxkor, rdnzao |
|           22 |     3580 | 2025-10-24 | Bad Luck               | W   | 0.300      | -            | -                | -                | -         |     0.05 | doc, gafolo, koala, maxxkor, rdnzao |
|           21 |     3603 | 2025-10-24 | Dusty Roots            | W   | 0.299      | -            | -                | -                | -         |     0.15 | doc, gafolo, koala, maxxkor, rdnzao |
|           20 |     3730 | 2025-10-18 | Bounty Hunters Esports | W   | 0.260      | -            | -                | -                | -         |     0.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           19 |     3732 | 2025-10-18 | Fake do Biru           | W   | 0.259      | -            | -                | -                | -         |     0.41 | doc, gafolo, koala, maxxkor, rdnzao |
|           18 |     3753 | 2025-10-17 | Yawara E-Sports        | W   | 0.254      | -            | -                | -                | -         |     0.39 | doc, gafolo, koala, maxxkor, rdnzao |
|           17 |     3784 | 2025-10-16 | MIBR Academy           | W   | 0.247      | -            | -                | -                | -         |     0.04 | doc, gafolo, koala, maxxkor, rdnzao |
|           16 |     3982 | 2025-10-09 | Procyon Team           | L   | 0.200      | -            | -                | -                | -         |    -6.05 | doc, gafolo, koala, maxxkor, rdnzao |
|           15 |     4029 | 2025-10-08 | Dusty Roots            | L   | 0.193      | -            | -                | -                | -         |    -6.00 | doc, gafolo, koala, maxxkor, rdnzao |
|           14 |     4134 | 2025-10-06 | Crashers               | W   | 0.180      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, maxxkor, rdnzao |
|           13 |     4246 | 2025-10-04 | ECSTATIC               | L   | 0.168      | -            | -                | -                | -         |    -3.09 | doc, gafolo, koala, maxxkor, rdnzao |
|           12 |     4257 | 2025-10-04 | Team Voca              | W   | 0.166      | -            | -                | -                | -         |     0.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           11 |     4441 | 2025-09-29 | Imperial Esports       | L   | 0.134      | -            | -                | -                | -         |    -3.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           10 |     4518 | 2025-09-27 | 9z Team                | W   | 0.121      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, maxxkor, rdnzao |
|            9 |     4519 | 2025-09-27 | Gaimin Gladiators      | W   | 0.121      | -            | -                | -                | -         |     0.05 | doc, gafolo, koala, maxxkor, rdnzao |
|            8 |     4874 | 2025-09-16 | BESTIA                 | W   | 0.047      | -            | -                | -                | -         |     0.36 | doc, gafolo, koala, maxxkor, rdnzao |
|            7 |     4883 | 2025-09-16 | ODDIK                  | W   | 0.045      | -            | -                | -                | -         |     0.20 | doc, gafolo, koala, maxxkor, rdnzao |
|            6 |     4912 | 2025-09-15 | Fake do Biru           | W   | 0.038      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            5 |     4980 | 2025-09-13 | Bounty Hunters Esports | W   | 0.026      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, maxxkor, rdnzao |
|            4 |     5029 | 2025-09-12 | ODDIK                  | L   | 0.020      | -            | -                | -                | -         |    -0.54 | doc, gafolo, koala, maxxkor, rdnzao |
|            3 |     5078 | 2025-09-11 | Game Hunters           | W   | 0.013      | -            | -                | -                | -         |     0.00 | doc, gafolo, koala, maxxkor, rdnzao |
|            2 |     5131 | 2025-09-10 | Crashers               | W   | 0.007      | -            | -                | -                | -         |     0.00 | doc, gafolo, koala, maxxkor, rdnzao |
|            1 |     5180 | 2025-09-09 | ShindeN                | L   | 0.000      | -            | -                | -                | -         |    -0.00 | doc, gafolo, koala, maxxkor, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($63,944.17)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      1.000 | $3,500.00      | $3,500.00       |
| 2026-03-01 |      1.000 | $8,750.00      | $8,750.00       |
| 2026-02-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-02-15 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-02-01 |      0.967 | $800.00        | $773.96         |
| 2026-01-18 |      0.874 | $30,000.00     | $26,217.36      |
| 2025-11-16 |      0.453 | $18,311.89     | $8,298.42       |
| 2025-11-15 |      0.447 | $4,000.00      | $1,787.87       |
| 2025-11-09 |      0.406 | $2,500.00      | $1,014.93       |
| 2025-10-18 |      0.260 | $10,000.00     | $2,601.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
