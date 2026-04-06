### Roster Details<br />
Team Name: ASTRAL Esports<br />
Roster: gxx-, meowpop, Neqy, RaY5ive, swiz<br />
Global Rank: [123](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [86]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  970.2<br />
<br />
Final Rank Value (970.2) = Starting Rank Value (1067.7) + Head To Head Adjustments (-97.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.293[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.889[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1067.7
- 400 + ( ( 0.341 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1067.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.533
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |       33 | 2026-04-04 | Sangal Esports             | L   | 1.000      | -            | -                | -                | -         |   -10.91 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           52 |       41 | 2026-04-04 | Passion UA                 | L   | 1.000      | -            | -                | -                | -         |    -4.06 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           51 |       51 | 2026-04-04 | Sangal Esports             | W   | 1.000      | 0.333        | 0.017 (0.006)    | 0.475 (0.158)    | 1 (1.000) |    20.81 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           50 |      632 | 2026-03-24 | Phantom Esports            | L   | 1.000      | -            | -                | -                | -         |    -9.54 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           49 |      661 | 2026-03-23 | Matrix (Ukrainian team)    | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.75 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           48 |      664 | 2026-03-23 | Hypewrld                   | W   | 1.000      | 0.333        | 0.004 (0.001)    | -                | 1 (1.000) |    13.62 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           47 |      674 | 2026-03-23 | Wave Esports               | W   | 1.000      | 0.333        | 0.001 (0.000)    | -                | 1 (1.000) |     5.78 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           46 |      711 | 2026-03-23 | Leo Team                   | L   | 1.000      | -            | -                | -                | -         |   -13.45 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           45 |      749 | 2026-03-22 | Rebels Gaming              | L   | 1.000      | -            | -                | -                | -         |   -10.17 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           44 |      886 | 2026-03-19 | AM Gaming                  | L   | 1.000      | -            | -                | -                | -         |    -4.68 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           43 |      980 | 2026-03-17 | Ursa                       | W   | 1.000      | 0.435        | 0.020 (0.009)    | 0.700 (0.304)    | -         |    18.82 | gxx-, meowpop, Neqy, RaY5ive, swiz |
|           42 |     1479 | 2026-03-07 | OMEGA                      | L   | 1.000      | -            | -                | -                | -         |    -9.69 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           41 |     1561 | 2026-03-05 | Phantom Esports            | L   | 0.987      | -            | -                | -                | -         |    -7.81 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           40 |     1682 | 2026-03-03 | HAVU                       | W   | 0.972      | 0.435        | 0.005 (0.002)    | 0.569 (0.240)    | -         |    19.11 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           39 |     1768 | 2026-03-01 | Ex-Zero Tenacity           | L   | 0.959      | -            | -                | -                | -         |   -21.91 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           38 |     1805 | 2026-02-28 | Leo Team                   | L   | 0.953      | -            | -                | -                | -         |   -15.83 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           37 |     1844 | 2026-02-27 | Hypewrld                   | W   | 0.946      | 0.435        | 0.004 (0.002)    | -                | -         |    14.27 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           36 |     1895 | 2026-02-26 | ENCE                       | L   | 0.940      | -            | -                | -                | -         |    -7.42 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           35 |     1905 | 2026-02-26 | OMEGA                      | L   | 0.940      | -            | -                | -                | -         |    -7.99 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           34 |     1910 | 2026-02-26 | HYPERSPIRIT                | W   | 0.940      | 0.354        | -                | 0.479 (0.159)    | 1 (0.940) |    14.85 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           33 |     1924 | 2026-02-26 | HEROIC                     | L   | 0.939      | -            | -                | -                | -         |    -1.22 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           32 |     1955 | 2026-02-25 | Lavked                     | L   | 0.934      | -            | -                | -                | -         |   -13.54 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           31 |     1975 | 2026-02-25 | Betclic Apogee Esports     | W   | 0.932      | 0.354        | 0.026 (0.009)    | 0.603 (0.199)    | 1 (0.932) |    24.56 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           30 |     2011 | 2026-02-24 | Japczany                   | W   | 0.926      | -            | -                | -                | 1 (0.926) |     4.60 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           29 |     2018 | 2026-02-24 | Hermine Esports Club       | W   | 0.925      | -            | -                | -                | 1 (0.925) |     1.16 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           28 |     2039 | 2026-02-23 | Bebop                      | L   | 0.921      | -            | -                | -                | -         |   -15.97 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           27 |     2104 | 2026-02-22 | BASEMENT BOYS              | W   | 0.913      | 0.435        | -                | 0.338 (0.134)    | -         |     8.73 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           26 |     2155 | 2026-02-21 | Hashiras                   | W   | 0.907      | 0.435        | -                | 0.454 (0.179)    | -         |     9.98 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           25 |     2214 | 2026-02-20 | Hashiras                   | L   | 0.900      | -            | -                | -                | -         |   -18.75 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           24 |     2291 | 2026-02-19 | BRUTE                      | W   | 0.891      | 0.435        | 0.002 (0.001)    | -                | -         |     8.16 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           23 |     2387 | 2026-02-17 | QWENTRY                    | L   | 0.880      | -            | -                | -                | -         |   -15.01 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           22 |     2415 | 2026-02-16 | VP.Prodigy                 | L   | 0.874      | -            | -                | -                | -         |   -11.76 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           21 |     2472 | 2026-02-15 | TNT                        | L   | 0.867      | -            | -                | -                | -         |   -22.26 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           20 |     2490 | 2026-02-15 | TNC Esports                | L   | 0.866      | -            | -                | -                | -         |   -14.52 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           19 |     2507 | 2026-02-15 | TDK                        | L   | 0.865      | -            | -                | -                | -         |    -7.70 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           18 |     2590 | 2026-02-13 | Ex-Flame Sharks            | L   | 0.854      | -            | -                | -                | -         |   -24.04 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           17 |     2640 | 2026-02-12 | Nexus Gaming               | W   | 0.847      | 0.435        | -                | 0.450 (0.166)    | -         |    11.74 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           16 |     2738 | 2026-02-10 | Hashiras                   | W   | 0.831      | 0.435        | -                | 0.454 (0.164)    | -         |     5.23 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           15 |     2767 | 2026-02-08 | Ex-Zero Tenacity           | L   | 0.820      | -            | -                | -                | -         |   -20.36 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           14 |     3644 | 2026-01-05 | Hypewrld                   | L   | 0.593      | -            | -                | -                | -         |   -10.32 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           13 |     3648 | 2026-01-05 | MOUZ NXT                   | L   | 0.592      | -            | -                | -                | -         |    -6.07 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           12 |     3677 | 2026-01-04 | Ex-MINLATE                 | W   | 0.586      | -            | -                | -                | 1 (0.586) |     7.02 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           11 |     3682 | 2026-01-04 | ESC Gaming                 | W   | 0.585      | 0.314        | 0.042 (0.008)    | -                | 1 (0.585) |    11.38 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|           10 |     3684 | 2026-01-04 | Fingers Crossed            | W   | 0.585      | -            | -                | -                | -         |     0.58 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            9 |     3686 | 2026-01-04 | SINQU Esports              | W   | 0.585      | -            | -                | -                | -         |     1.21 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            8 |     3690 | 2026-01-04 | AaB esport                 | W   | 0.584      | 0.314        | -                | 0.706 (0.129)    | -         |    11.12 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            7 |     3752 | 2025-12-21 | Sharks Esports             | L   | 0.492      | -            | -                | -                | -         |    -2.17 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            6 |     3766 | 2025-12-20 | Team USA (Portuguese team) | W   | 0.488      | -            | -                | -                | -         |     0.44 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            5 |     3768 | 2025-12-20 | Ninjas in Pyjamas          | L   | 0.487      | -            | -                | -                | -         |    -1.61 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            4 |     3772 | 2025-12-20 | Underground Esports        | W   | 0.487      | -            | -                | -                | -         |     0.37 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            3 |     4405 | 2025-11-20 | AM Gaming                  | L   | 0.287      | -            | -                | -                | -         |    -7.36 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            2 |     4417 | 2025-11-20 | Lazer Cats                 | W   | 0.286      | 0.338        | 0.011 (0.001)    | -                | -         |     3.92 | ASTR, meowpop, Neqy, r1ch, RaY5ive |
|            1 |     4439 | 2025-11-20 | Tricked Esport             | L   | 0.285      | -            | -                | -                | -         |    -1.63 | ASTR, meowpop, Neqy, r1ch, RaY5ive |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
