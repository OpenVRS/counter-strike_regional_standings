### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: kwezz, Patti, SinK, thamlike, Zanto<br />
Global Rank: [100](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [75]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  947.3<br />
<br />
Final Rank Value (947.3) = Starting Rank Value (1087.3) + Head To Head Adjustments (-140.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.092[<sup>2</sup>](#table1)
- LAN Wins: 0.799[<sup>2</sup>](#table1)

The average of these factors is 0.363<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1087.3
- 400 + ( ( 0.363 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1087.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.367
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     1345 | 2026-01-24 | HAVU                    | L   | 0.953      | -            | -                | -                | -         |   -13.38 | kwezz, Patti, SinK, thamlike, Zanto   |
|           29 |     1364 | 2026-01-23 | SINQU Esports           | W   | 0.949      | 0.333        | 0.000 (0.000)    | 0.063 (0.020)    | 1 (0.949) |     3.02 | kwezz, Patti, SinK, thamlike, Zanto   |
|           28 |     1366 | 2026-01-23 | Sidequest               | W   | 0.948      | 0.333        | 0.000 (0.000)    | -                | 1 (0.948) |     1.21 | kwezz, Patti, SinK, thamlike, Zanto   |
|           27 |     1370 | 2026-01-23 | Alliance                | L   | 0.948      | -            | -                | -                | -         |    -3.97 | kwezz, Patti, SinK, thamlike, Zanto   |
|           26 |     1544 | 2026-01-18 | Lilmix                  | L   | 0.913      | -            | -                | -                | -         |   -21.61 | kwezz, Patti, SinK, thamlike, Zanto   |
|           25 |     1582 | 2026-01-17 | Megoshort               | W   | 0.907      | 0.337        | 0.004 (0.001)    | 0.121 (0.037)    | 1 (0.907) |     9.89 | kwezz, Patti, SinK, thamlike, Zanto   |
|           24 |     1599 | 2026-01-17 | Johnny Speeds           | L   | 0.906      | -            | -                | -                | -         |    -8.04 | kwezz, Patti, SinK, thamlike, Zanto   |
|           23 |     1607 | 2026-01-17 | HEROIC Academy          | W   | 0.905      | 0.337        | 0.000 (0.000)    | 0.156 (0.048)    | 1 (0.905) |     7.28 | kwezz, Patti, SinK, thamlike, Zanto   |
|           22 |     1621 | 2026-01-16 | Prestige Esport         | L   | 0.901      | -            | -                | -                | -         |   -21.38 | kwezz, Patti, SinK, thamlike, Zanto   |
|           21 |     1631 | 2026-01-16 | Johnny Speeds           | W   | 0.901      | 0.337        | 0.021 (0.006)    | 0.909 (0.276)    | 1 (0.901) |    19.55 | kwezz, Patti, SinK, thamlike, Zanto   |
|           20 |     1644 | 2026-01-16 | Infinite Gaming         | W   | 0.900      | 0.337        | 0.000 (0.000)    | 0.111 (0.034)    | 1 (0.900) |     2.96 | kwezz, Patti, SinK, thamlike, Zanto   |
|           19 |     1655 | 2026-01-16 | AaB esport              | L   | 0.899      | -            | -                | -                | -         |   -16.34 | kwezz, Patti, SinK, thamlike, Zanto   |
|           18 |     1660 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.899      | 0.337        | 0.000 (0.000)    | 0.188 (0.057)    | 1 (0.899) |     4.81 | kwezz, Patti, SinK, thamlike, Zanto   |
|           17 |     1666 | 2026-01-16 | MANA eSports            | L   | 0.899      | -            | -                | -                | -         |   -19.49 | kwezz, Patti, SinK, thamlike, Zanto   |
|           16 |     1684 | 2026-01-15 | Bebop                   | L   | 0.894      | -            | -                | -                | -         |   -19.20 | kwezz, Patti, SinK, thamlike, Zanto   |
|           15 |     1703 | 2026-01-15 | MINLATE (European team) | L   | 0.891      | -            | -                | -                | -         |   -16.30 | kwezz, Patti, SinK, thamlike, Zanto   |
|           14 |     1716 | 2026-01-14 | Los kogutos             | W   | 0.886      | 0.333        | 0.037 (0.011)    | 1.000 (0.295)    | -         |    13.45 | kwezz, Patti, SinK, thamlike, Zanto   |
|           13 |     1724 | 2026-01-14 | FORZE Reload            | L   | 0.885      | -            | -                | -                | -         |   -18.08 | kwezz, Patti, SinK, thamlike, Zanto   |
|           12 |     1771 | 2026-01-09 | Universe                | W   | 0.851      | 0.333        | 0.003 (0.001)    | 0.034 (0.010)    | -         |     3.25 | Dengzoe, kwezz, SinK, thamlike, Zanto |
|           11 |     1780 | 2026-01-05 | Los kogutos             | L   | 0.825      | -            | -                | -                | -         |   -13.28 | kwezz, Patti, SinK, thamlike, Zanto   |
|           10 |     2518 | 2025-11-21 | ENCE                    | L   | 0.525      | -            | -                | -                | -         |    -5.04 | kwezz, Patti, SinK, thamlike, Zanto   |
|            9 |     2531 | 2025-11-21 | Friendly Campers        | L   | 0.524      | -            | -                | -                | -         |    -5.79 | kwezz, Patti, SinK, thamlike, Zanto   |
|            8 |     2560 | 2025-11-20 | Nexus Gaming            | W   | 0.519      | 0.338        | 0.001 (0.000)    | 0.685 (0.120)    | 1 (0.519) |     6.88 | kwezz, Patti, SinK, thamlike, Zanto   |
|            7 |     2569 | 2025-11-20 | G2 Ares                 | W   | 0.518      | -            | -                | -                | 1 (0.518) |     0.68 | kwezz, Patti, SinK, thamlike, Zanto   |
|            6 |     2910 | 2025-11-07 | Aimclub (Romanian team) | W   | 0.433      | 0.336        | -                | 0.188 (0.027)    | 1 (0.433) |     2.17 | kwezz, Patti, SinK, thamlike, Zanto   |
|            5 |     2927 | 2025-11-07 | BC.Game Esports         | L   | 0.433      | -            | -                | -                | -         |   -10.85 | kwezz, Patti, SinK, thamlike, Zanto   |
|            4 |     2943 | 2025-11-07 | Alliance                | L   | 0.433      | -            | -                | -                | -         |    -2.85 | kwezz, Patti, SinK, thamlike, Zanto   |
|            3 |     2954 | 2025-11-07 | Boomerdemons            | W   | 0.432      | -            | -                | -                | -         |     0.32 | kwezz, Patti, SinK, thamlike, Zanto   |
|            2 |     2972 | 2025-11-07 | AM Gaming               | L   | 0.432      | -            | -                | -                | -         |    -8.25 | kwezz, Patti, SinK, thamlike, Zanto   |
|            1 |     3088 | 2025-11-03 | Ex-Flame Sharks         | L   | 0.406      | -            | -                | -                | -         |   -11.61 | kwezz, Patti, SinK, thamlike, Zanto   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,230.72)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-17 |      0.908 | $1,355.47      | $1,230.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
