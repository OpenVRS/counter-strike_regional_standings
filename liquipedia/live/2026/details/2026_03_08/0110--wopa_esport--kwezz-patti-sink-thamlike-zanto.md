### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: kwezz, Patti, SinK, thamlike, Zanto<br />
Global Rank: [110](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [84]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  928.0<br />
<br />
Final Rank Value (928.0) = Starting Rank Value (1076.6) + Head To Head Adjustments (-148.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.292[<sup>1</sup>](#table2)
- Bounty Collected: 0.266[<sup>2</sup>](#table1)
- Opponent Network: 0.093[<sup>2</sup>](#table1)
- LAN Wins: 0.759[<sup>2</sup>](#table1)

The average of these factors is 0.352<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1076.6
- 400 + ( ( 0.352 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1076.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.377
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      164 | 2026-03-01 | Ex-Zero Tenacity        | L   | 1.000      | -            | -                | -                | -         |   -23.52 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|           36 |     1145 | 2026-02-07 | AaB esport              | L   | 1.000      | -            | -                | -                | -         |   -15.16 | kwezz, Patti, SinK, thamlike, Zanto   |
|           35 |     1317 | 2026-02-01 | Phantom Esports         | W   | 0.964      | 0.396        | 0.006 (0.002)    | 0.505 (0.193)    | -         |    20.56 | kwezz, Patti, SinK, thamlike, Zanto   |
|           34 |     1525 | 2026-01-24 | HAVU                    | L   | 0.912      | -            | -                | -                | -         |   -12.65 | kwezz, Patti, SinK, thamlike, Zanto   |
|           33 |     1543 | 2026-01-23 | SINQU Esports           | W   | 0.907      | 0.333        | 0.000 (0.000)    | -                | 1 (0.907) |     3.66 | kwezz, Patti, SinK, thamlike, Zanto   |
|           32 |     1545 | 2026-01-23 | Sidequest               | W   | 0.907      | -            | -                | -                | 1 (0.907) |     1.18 | kwezz, Patti, SinK, thamlike, Zanto   |
|           31 |     1549 | 2026-01-23 | Alliance                | L   | 0.907      | -            | -                | -                | -         |    -3.62 | kwezz, Patti, SinK, thamlike, Zanto   |
|           30 |     1721 | 2026-01-18 | Lilmix                  | L   | 0.872      | -            | -                | -                | -         |   -14.37 | kwezz, Patti, SinK, thamlike, Zanto   |
|           29 |     1761 | 2026-01-17 | Megoshort               | W   | 0.866      | 0.337        | 0.008 (0.002)    | 0.171 (0.050)    | 1 (0.866) |    13.38 | kwezz, Patti, SinK, thamlike, Zanto   |
|           28 |     1773 | 2026-01-17 | MASONIC                 | L   | 0.865      | -            | -                | -                | -         |   -16.05 | kwezz, Patti, SinK, thamlike, Zanto   |
|           27 |     1778 | 2026-01-17 | Johnny Speeds           | L   | 0.864      | -            | -                | -                | -         |    -7.72 | kwezz, Patti, SinK, thamlike, Zanto   |
|           26 |     1787 | 2026-01-17 | HEROIC Academy          | W   | 0.863      | 0.337        | -                | 0.183 (0.053)    | 1 (0.863) |     9.60 | kwezz, Patti, SinK, thamlike, Zanto   |
|           25 |     1801 | 2026-01-16 | Prestige Esport         | L   | 0.860      | -            | -                | -                | -         |   -20.44 | kwezz, Patti, SinK, thamlike, Zanto   |
|           24 |     1811 | 2026-01-16 | Johnny Speeds           | W   | 0.859      | 0.337        | 0.021 (0.006)    | 0.811 (0.235)    | 1 (0.859) |    18.72 | kwezz, Patti, SinK, thamlike, Zanto   |
|           23 |     1824 | 2026-01-16 | Infinite Gaming         | W   | 0.858      | 0.337        | -                | 0.107 (0.031)    | 1 (0.858) |     2.73 | kwezz, Patti, SinK, thamlike, Zanto   |
|           22 |     1835 | 2026-01-16 | AaB esport              | L   | 0.858      | -            | -                | -                | -         |   -14.45 | kwezz, Patti, SinK, thamlike, Zanto   |
|           21 |     1840 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.857      | 0.337        | -                | 0.178 (0.052)    | 1 (0.857) |     5.36 | kwezz, Patti, SinK, thamlike, Zanto   |
|           20 |     1846 | 2026-01-16 | MANA eSports            | L   | 0.857      | -            | -                | -                | -         |   -18.73 | kwezz, Patti, SinK, thamlike, Zanto   |
|           19 |     1864 | 2026-01-15 | Bebop                   | L   | 0.853      | -            | -                | -                | -         |   -18.64 | kwezz, Patti, SinK, thamlike, Zanto   |
|           18 |     1883 | 2026-01-15 | MINLATE (European team) | L   | 0.850      | -            | -                | -                | -         |   -13.16 | kwezz, Patti, SinK, thamlike, Zanto   |
|           17 |     1896 | 2026-01-14 | Los kogutos             | W   | 0.845      | 0.143        | 0.040 (0.005)    | 1.000 (0.121)    | -         |    12.97 | kwezz, Patti, SinK, thamlike, Zanto   |
|           16 |     1904 | 2026-01-14 | FORZE Reload            | L   | 0.843      | -            | -                | -                | -         |   -20.35 | kwezz, Patti, SinK, thamlike, Zanto   |
|           15 |     1953 | 2026-01-09 | Eternal Fire            | L   | 0.813      | -            | -                | -                | -         |   -12.02 | kwezz, Patti, SinK, thamlike, Zanto   |
|           14 |     1955 | 2026-01-09 | Universe                | W   | 0.810      | 0.143        | 0.003 (0.000)    | -                | -         |     2.86 | Dengzoe, kwezz, SinK, thamlike, Zanto |
|           13 |     1964 | 2026-01-05 | Los kogutos             | L   | 0.784      | -            | -                | -                | -         |   -13.19 | kwezz, Patti, SinK, thamlike, Zanto   |
|           12 |     2692 | 2025-11-21 | ENCE                    | L   | 0.484      | -            | -                | -                | -         |    -4.91 | kwezz, Patti, SinK, thamlike, Zanto   |
|           11 |     2705 | 2025-11-21 | Friendly Campers        | L   | 0.483      | -            | -                | -                | -         |    -6.14 | kwezz, Patti, SinK, thamlike, Zanto   |
|           10 |     2741 | 2025-11-20 | Nexus Gaming            | W   | 0.478      | 0.307        | 0.001 (0.000)    | 0.558 (0.082)    | 1 (0.478) |     6.97 | kwezz, Patti, SinK, thamlike, Zanto   |
|            9 |     2743 | 2025-11-20 | Nexus Gaming            | W   | 0.478      | 0.338        | 0.001 (0.000)    | 0.558 (0.090)    | 1 (0.478) |     6.68 | kwezz, Patti, SinK, thamlike, Zanto   |
|            8 |     2749 | 2025-11-20 | G2 Ares                 | W   | 0.477      | 0.307        | 0.003 (0.000)    | -                | 1 (0.477) |     4.06 | kwezz, Patti, SinK, thamlike, Zanto   |
|            7 |     2753 | 2025-11-20 | G2 Ares                 | W   | 0.477      | 0.338        | 0.003 (0.001)    | -                | -         |     3.93 | kwezz, Patti, SinK, thamlike, Zanto   |
|            6 |     3084 | 2025-11-07 | Aimclub (Romanian team) | W   | 0.392      | 0.336        | -                | 0.178 (0.023)    | -         |     2.26 | kwezz, Patti, SinK, thamlike, Zanto   |
|            5 |     3101 | 2025-11-07 | BC.Game Esports         | L   | 0.392      | -            | -                | -                | -         |    -9.99 | kwezz, Patti, SinK, thamlike, Zanto   |
|            4 |     3117 | 2025-11-07 | Alliance                | L   | 0.391      | -            | -                | -                | -         |    -2.48 | kwezz, Patti, SinK, thamlike, Zanto   |
|            3 |     3128 | 2025-11-07 | Boomerdemons            | W   | 0.391      | -            | -                | -                | -         |     0.30 | kwezz, Patti, SinK, thamlike, Zanto   |
|            2 |     3146 | 2025-11-07 | AM Gaming               | L   | 0.391      | -            | -                | -                | -         |    -5.81 | kwezz, Patti, SinK, thamlike, Zanto   |
|            1 |     3256 | 2025-11-03 | Ex-Flame Sharks         | L   | 0.365      | -            | -                | -                | -         |   -10.46 | kwezz, Patti, SinK, thamlike, Zanto   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,174.65)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-17 |      0.867 | $1,355.47      | $1,174.65       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
