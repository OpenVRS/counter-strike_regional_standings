### Roster Details<br />
Team Name: OMEGA<br />
Roster: adai, Botpa1, dan4o, Maison, modeSavage<br />
Global Rank: [112](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [77]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  1011.3<br />
<br />
Final Rank Value (1011.3) = Starting Rank Value (1258.8) + Head To Head Adjustments (-247.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.280[<sup>2</sup>](#table1)
- LAN Wins: 0.734[<sup>2</sup>](#table1)

The average of these factors is 0.439<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1258.8
- 400 + ( ( 0.439 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1258.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.588
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           65 |      515 | 2026-03-26 | Megoshort           | L   | 1.000      | -            | -                | -                | -         |   -20.39 | adai, Botpa1, dan4o, Maison, modeSavage |
|           64 |      620 | 2026-03-24 | ALGO Esports        | L   | 1.000      | -            | -                | -                | -         |   -17.74 | adai, Botpa1, dan4o, Maison, modeSavage |
|           63 |      735 | 2026-03-22 | TNC Esports         | L   | 1.000      | -            | -                | -                | -         |   -16.79 | adai, Botpa1, dan4o, Maison, modeSavage |
|           62 |      841 | 2026-03-20 | Sangal Esports      | L   | 1.000      | -            | -                | -                | -         |   -15.31 | adai, Botpa1, dan4o, Maison, noni       |
|           61 |      881 | 2026-03-19 | Ex-RUBY             | L   | 1.000      | -            | -                | -                | -         |   -10.59 | adai, Botpa1, dan4o, Maison, noni       |
|           60 |      985 | 2026-03-17 | MASONIC             | W   | 1.000      | -            | -                | -                | -         |    10.07 | adai, Botpa1, dan4o, Maison, noni       |
|           59 |     1014 | 2026-03-16 | Ex-Zero Tenacity    | L   | 1.000      | -            | -                | -                | -         |   -20.54 | adai, Botpa1, dan4o, Maison, modeSavage |
|           58 |     1068 | 2026-03-15 | Eternal Fire        | L   | 1.000      | -            | -                | -                | -         |    -8.60 | adai, Botpa1, dan4o, Maison, modeSavage |
|           57 |     1075 | 2026-03-15 | DEPO                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.92 | adai, Botpa1, dan4o, Maison, modeSavage |
|           56 |     1084 | 2026-03-15 | NOVAQ               | W   | 1.000      | 0.295        | 0.022 (0.007)    | -                | 1 (1.000) |    14.69 | adai, Botpa1, dan4o, Maison, modeSavage |
|           55 |     1213 | 2026-03-12 | FAVBET Team         | W   | 1.000      | 0.435        | 0.044 (0.019)    | 0.583 (0.253)    | -         |    17.28 | adai, Botpa1, dan4o, Maison, modeSavage |
|           54 |     1254 | 2026-03-11 | Ursa                | L   | 1.000      | -            | -                | -                | -         |   -19.21 | adai, Botpa1, dan4o, Maison, modeSavage |
|           53 |     1363 | 2026-03-09 | Phantom Esports     | L   | 1.000      | -            | -                | -                | -         |   -14.09 | adai, Botpa1, dan4o, Maison, modeSavage |
|           52 |     1410 | 2026-03-08 | TNC Esports         | W   | 1.000      | 0.435        | 0.026 (0.011)    | 1.000 (0.435)    | -         |    12.83 | adai, Botpa1, dan4o, Maison, modeSavage |
|           51 |     1429 | 2026-03-08 | TNC Esports         | L   | 1.000      | -            | -                | -                | -         |   -18.93 | adai, Botpa1, dan4o, Maison, modeSavage |
|           50 |     1479 | 2026-03-07 | ASTRAL Esports      | W   | 1.000      | 0.435        | -                | 0.533 (0.232)    | -         |     9.69 | adai, Botpa1, dan4o, Maison, modeSavage |
|           49 |     1492 | 2026-03-07 | Ex-Zero Tenacity    | L   | 0.999      | -            | -                | -                | -         |   -25.21 | adai, Botpa1, dan4o, Maison, modeSavage |
|           48 |     1532 | 2026-03-06 | Acend               | L   | 0.992      | -            | -                | -                | -         |   -11.23 | adai, Botpa1, dan4o, Maison, modeSavage |
|           47 |     1636 | 2026-03-04 | FUZOS               | W   | 0.979      | -            | -                | -                | -         |     6.06 | adai, Botpa1, dan4o, Maison, modeSavage |
|           46 |     1662 | 2026-03-03 | NOVAQ               | W   | 0.974      | 0.435        | 0.022 (0.009)    | 0.524 (0.222)    | -         |    12.40 | adai, Botpa1, dan4o, Maison, modeSavage |
|           45 |     1723 | 2026-03-02 | ENCE Academy        | L   | 0.965      | -            | -                | -                | -         |   -23.29 | adai, Botpa1, dan4o, Maison, modeSavage |
|           44 |     1766 | 2026-03-01 | Acend               | L   | 0.959      | -            | -                | -                | -         |   -11.02 | adai, Botpa1, dan4o, Maison, SNk        |
|           43 |     1774 | 2026-03-01 | Ex-RUBY             | L   | 0.958      | -            | -                | -                | -         |   -15.23 | adai, Botpa1, dan4o, Maison, modeSavage |
|           42 |     1789 | 2026-02-28 | Sashi Esport        | L   | 0.954      | -            | -                | -                | -         |   -12.54 | adai, Botpa1, dan4o, Maison, SNk        |
|           41 |     1817 | 2026-02-28 | ALGO Esports        | W   | 0.951      | -            | -                | -                | -         |     7.08 | adai, Botpa1, dan4o, Maison, SNk        |
|           40 |     1858 | 2026-02-27 | NOVAQ               | L   | 0.945      | -            | -                | -                | -         |   -20.50 | adai, Botpa1, dan4o, Maison, SNk        |
|           39 |     1869 | 2026-02-26 | HOTU                | W   | 0.944      | 0.351        | 0.078 (0.026)    | 0.666 (0.220)    | 1 (0.944) |    23.10 | adai, Botpa1, dan4o, Maison, SNk        |
|           38 |     1905 | 2026-02-26 | ASTRAL Esports      | W   | 0.940      | -            | -                | -                | -         |     7.99 | adai, Botpa1, dan4o, Maison, SNk        |
|           37 |     1929 | 2026-02-26 | Sangal Esports      | W   | 0.938      | 0.351        | 0.017 (0.006)    | -                | 1 (0.938) |    13.95 | adai, Botpa1, dan4o, Maison, SNk        |
|           36 |     2012 | 2026-02-24 | Acend               | L   | 0.926      | -            | -                | -                | -         |   -10.86 | adai, Botpa1, dan4o, Maison, SNk        |
|           35 |     2059 | 2026-02-23 | ARCRED              | L   | 0.919      | -            | -                | -                | -         |   -12.66 | adai, Botpa1, dan4o, Maison, SNk        |
|           34 |     2107 | 2026-02-22 | Team Nemesis        | L   | 0.913      | -            | -                | -                | -         |    -9.21 | adai, Botpa1, dan4o, Maison, SNk        |
|           33 |     2137 | 2026-02-22 | Nemiga Gaming       | W   | 0.912      | 0.333        | 0.138 (0.042)    | 0.935 (0.284)    | 1 (0.912) |    22.14 | adai, Botpa1, dan4o, Maison, SNk        |
|           32 |     2181 | 2026-02-21 | Illwill             | W   | 0.905      | 0.435        | 0.057 (0.022)    | 0.835 (0.329)    | -         |    21.01 | adai, Botpa1, dan4o, Maison, SNk        |
|           31 |     2230 | 2026-02-20 | FUZOS               | W   | 0.899      | -            | -                | -                | -         |     6.28 | adai, Botpa1, dan4o, Maison, SNk        |
|           30 |     2266 | 2026-02-19 | SPARTA Esports      | L   | 0.894      | -            | -                | -                | -         |    -8.91 | adai, Botpa1, dan4o, Maison, SNk        |
|           29 |     2279 | 2026-02-19 | VP.Prodigy          | W   | 0.892      | -            | -                | -                | -         |     9.86 | adai, Botpa1, dan4o, Maison, SNk        |
|           28 |     2336 | 2026-02-18 | CSDIILIT            | L   | 0.885      | -            | -                | -                | -         |   -24.34 | adai, Botpa1, dan4o, Maison, SNk        |
|           27 |     2347 | 2026-02-18 | WW Team             | L   | 0.885      | -            | -                | -                | -         |    -8.21 | adai, Botpa1, dan4o, Maison, SNk        |
|           26 |     2375 | 2026-02-17 | Sangal Esports      | L   | 0.880      | -            | -                | -                | -         |   -14.28 | adai, Botpa1, dan4o, Maison, SNk        |
|           25 |     2388 | 2026-02-17 | TNC Esports         | W   | 0.880      | 0.384        | 0.026 (0.009)    | 1.000 (0.338)    | -         |     8.54 | adai, Botpa1, dan4o, Maison, SNk        |
|           24 |     2418 | 2026-02-16 | MOUZ NXT            | L   | 0.874      | -            | -                | -                | -         |   -14.00 | adai, Botpa1, dan4o, Maison, SNk        |
|           23 |     2513 | 2026-02-15 | FORZE Reload        | W   | 0.865      | -            | -                | -                | -         |     6.06 | adai, Botpa1, dan4o, Maison, SNk        |
|           22 |     2530 | 2026-02-14 | AM Gaming           | W   | 0.860      | 0.384        | 0.025 (0.008)    | 0.767 (0.254)    | -         |    17.42 | adai, Botpa1, dan4o, Maison, SNk        |
|           21 |     2591 | 2026-02-13 | CSDIILIT            | W   | 0.854      | -            | -                | -                | -         |     2.45 | adai, Botpa1, dan4o, Maison, SNk        |
|           20 |     2602 | 2026-02-13 | BASEMENT BOYS       | W   | 0.853      | -            | -                | -                | -         |     3.54 | adai, Botpa1, dan4o, Maison, SNk        |
|           19 |     2649 | 2026-02-12 | Home                | W   | 0.846      | -            | -                | -                | -         |     1.75 | adai, Botpa1, dan4o, Maison, SNk        |
|           18 |     2813 | 2026-02-07 | Nexus Gaming        | L   | 0.811      | -            | -                | -                | -         |   -17.79 | adai, Botpa1, dan4o, Maison, SNk        |
|           17 |     2910 | 2026-02-03 | VP.Prodigy          | W   | 0.787      | -            | -                | -                | -         |     9.45 | adai, Botpa1, dan4o, Maison, SNk        |
|           16 |     2951 | 2026-02-02 | Bebop               | W   | 0.780      | 0.384        | -                | 0.764 (0.229)    | -         |     4.69 | adai, Botpa1, dan4o, Maison, SNk        |
|           15 |     3125 | 2026-01-27 | ALLINNERS           | L   | 0.739      | -            | -                | -                | -         |   -20.61 | adai, Botpa1, dan4o, Maison, SNk        |
|           14 |     3130 | 2026-01-27 | BetBoom Team        | L   | 0.739      | -            | -                | -                | -         |    -4.13 | adai, Botpa1, dan4o, Maison, SNk        |
|           13 |     3140 | 2026-01-27 | ALLINNERS           | W   | 0.738      | -            | -                | -                | 1 (0.738) |     2.60 | adai, Botpa1, dan4o, Maison, SNk        |
|           12 |     3711 | 2026-01-03 | ALLINNERS           | L   | 0.580      | -            | -                | -                | -         |   -17.20 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           11 |     3718 | 2026-01-03 | BetBoom Team        | L   | 0.579      | -            | -                | -                | -         |   -16.43 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           10 |     3722 | 2026-01-02 | Haunted House       | W   | 0.577      | -            | -                | -                | 1 (0.577) |     1.16 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            9 |     3733 | 2025-12-27 | Rune Eaters Esports | L   | 0.533      | -            | -                | -                | -         |   -14.23 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            8 |     3869 | 2025-12-14 | HOTU                | L   | 0.445      | -            | -                | -                | -         |    -3.83 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            7 |     3870 | 2025-12-13 | NOVAQ               | W   | 0.444      | -            | -                | -                | 1 (0.444) |     3.68 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            6 |     3881 | 2025-12-13 | ALLINNERS           | W   | 0.438      | -            | -                | -                | 1 (0.438) |     1.55 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            5 |     3901 | 2025-12-11 | HOTU                | L   | 0.431      | -            | -                | -                | -         |    -3.77 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            4 |     4126 | 2025-11-30 | ALLINNERS           | L   | 0.352      | -            | -                | -                | -         |    -9.95 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            3 |     4128 | 2025-11-30 | WINNERS Esports     | W   | 0.351      | -            | -                | -                | 1 (0.351) |     0.20 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            2 |     4178 | 2025-11-29 | ALLINNERS           | L   | 0.345      | -            | -                | -                | -         |    -9.86 | adai, Aldikon, Botpa1, dan4o, Maison    |
|            1 |     4670 | 2025-11-09 | ALLINNERS           | L   | 0.213      | -            | -                | -                | -         |    -6.50 | adai, Aldikon, Botpa1, dan4o, Maison    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,592.72)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $2,042.80      | $2,042.80       |
| 2026-03-01 |      0.960 | $500.00        | $480.19         |
| 2026-02-27 |      0.945 | $5,011.08      | $4,735.99       |
| 2026-02-22 |      0.913 | $2,300.00      | $2,099.90       |
| 2025-12-27 |      0.533 | $1,361.79      | $725.30         |
| 2025-12-14 |      0.445 | $2,500.00      | $1,112.30       |
| 2025-11-30 |      0.353 | $488.47        | $172.35         |
| 2025-11-09 |      0.213 | $1,050.00      | $223.89         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
