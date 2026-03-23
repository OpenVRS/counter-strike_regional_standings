### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: kwezz, Patti, SinK, thamlike, Zanto<br />
Global Rank: [117](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [87]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  935.3<br />
<br />
Final Rank Value (935.3) = Starting Rank Value (1060.1) + Head To Head Adjustments (-124.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.264[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.701[<sup>2</sup>](#table1)

The average of these factors is 0.337<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1060.1
- 400 + ( ( 0.337 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1060.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.314
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      630 | 2026-03-01 | Ex-Zero Tenacity        | L   | 1.000      | -            | -                | -                | -         |   -22.39 | kwezz, Patti, sL1m3, thamlike, Zanto  |
|           34 |     1684 | 2026-02-07 | AaB esport              | L   | 0.958      | -            | -                | -                | -         |   -10.95 | kwezz, Patti, SinK, thamlike, Zanto   |
|           33 |     1861 | 2026-02-01 | Phantom Esports         | W   | 0.918      | 0.396        | 0.004 (0.001)    | 0.528 (0.192)    | -         |    19.93 | kwezz, Patti, SinK, thamlike, Zanto   |
|           32 |     2073 | 2026-01-24 | HAVU                    | L   | 0.865      | -            | -                | -                | -         |   -11.62 | kwezz, Patti, SinK, thamlike, Zanto   |
|           31 |     2092 | 2026-01-23 | SINQU Esports           | W   | 0.861      | 0.333        | 0.000 (0.000)    | -                | 1 (0.861) |     2.68 | kwezz, Patti, SinK, thamlike, Zanto   |
|           30 |     2094 | 2026-01-23 | Sidequest               | W   | 0.861      | 0.333        | 0.000 (0.000)    | -                | 1 (0.861) |     1.10 | kwezz, Patti, SinK, thamlike, Zanto   |
|           29 |     2098 | 2026-01-23 | Alliance                | L   | 0.860      | -            | -                | -                | -         |    -1.86 | kwezz, Patti, SinK, thamlike, Zanto   |
|           28 |     2274 | 2026-01-18 | Lilmix                  | L   | 0.825      | -            | -                | -                | -         |   -13.43 | kwezz, Patti, SinK, thamlike, Zanto   |
|           27 |     2314 | 2026-01-17 | Megoshort               | W   | 0.819      | 0.337        | 0.005 (0.002)    | 0.313 (0.086)    | 1 (0.819) |    14.08 | kwezz, Patti, SinK, thamlike, Zanto   |
|           26 |     2327 | 2026-01-17 | MASONIC                 | L   | 0.818      | -            | -                | -                | -         |    -9.70 | kwezz, Patti, SinK, thamlike, Zanto   |
|           25 |     2332 | 2026-01-17 | Johnny Speeds           | L   | 0.818      | -            | -                | -                | -         |    -5.51 | kwezz, Patti, SinK, thamlike, Zanto   |
|           24 |     2341 | 2026-01-17 | HEROIC Academy          | W   | 0.817      | 0.337        | 0.000 (0.000)    | 0.287 (0.079)    | 1 (0.817) |     7.94 | kwezz, Patti, SinK, thamlike, Zanto   |
|           23 |     2355 | 2026-01-16 | Prestige Esport         | L   | 0.813      | -            | -                | -                | -         |   -21.95 | kwezz, Patti, SinK, thamlike, Zanto   |
|           22 |     2365 | 2026-01-16 | Johnny Speeds           | W   | 0.813      | 0.337        | 0.018 (0.005)    | 0.824 (0.226)    | 1 (0.813) |    19.59 | kwezz, Patti, SinK, thamlike, Zanto   |
|           21 |     2378 | 2026-01-16 | Infinite Gaming         | W   | 0.812      | 0.337        | -                | 0.093 (0.026)    | 1 (0.812) |     1.92 | kwezz, Patti, SinK, thamlike, Zanto   |
|           20 |     2389 | 2026-01-16 | AaB esport              | L   | 0.811      | -            | -                | -                | -         |    -8.16 | kwezz, Patti, SinK, thamlike, Zanto   |
|           19 |     2394 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.811      | 0.337        | -                | 0.185 (0.051)    | 1 (0.811) |     5.08 | kwezz, Patti, SinK, thamlike, Zanto   |
|           18 |     2400 | 2026-01-16 | MANA eSports            | L   | 0.811      | -            | -                | -                | -         |   -17.03 | kwezz, Patti, SinK, thamlike, Zanto   |
|           17 |     2418 | 2026-01-15 | Bebop                   | L   | 0.806      | -            | -                | -                | -         |   -17.12 | kwezz, Patti, SinK, thamlike, Zanto   |
|           16 |     2437 | 2026-01-15 | MINLATE (European team) | L   | 0.804      | -            | -                | -                | -         |   -13.91 | kwezz, Patti, SinK, thamlike, Zanto   |
|           15 |     2450 | 2026-01-14 | Los kogutos             | W   | 0.798      | 0.333        | 0.029 (0.008)    | 1.000 (0.266)    | -         |    12.16 | kwezz, Patti, SinK, thamlike, Zanto   |
|           14 |     2458 | 2026-01-14 | FORZE Reload            | L   | 0.797      | -            | -                | -                | -         |   -17.68 | kwezz, Patti, SinK, thamlike, Zanto   |
|           13 |     2509 | 2026-01-09 | Eternal Fire            | L   | 0.767      | -            | -                | -                | -         |    -9.33 | kwezz, Patti, SinK, thamlike, Zanto   |
|           12 |     2511 | 2026-01-09 | Universe                | W   | 0.764      | 0.333        | 0.002 (0.000)    | -                | -         |     2.74 | Dengzoe, kwezz, SinK, thamlike, Zanto |
|           11 |     2520 | 2026-01-05 | Los kogutos             | L   | 0.738      | -            | -                | -                | -         |   -12.43 | kwezz, Patti, SinK, thamlike, Zanto   |
|           10 |     3258 | 2025-11-21 | ENCE                    | L   | 0.438      | -            | -                | -                | -         |    -4.38 | kwezz, Patti, SinK, thamlike, Zanto   |
|            9 |     3271 | 2025-11-21 | Friendly Campers        | L   | 0.437      | -            | -                | -                | -         |    -6.26 | kwezz, Patti, SinK, thamlike, Zanto   |
|            8 |     3300 | 2025-11-20 | Nexus Gaming            | W   | 0.431      | 0.338        | 0.001 (0.000)    | 0.619 (0.090)    | 1 (0.431) |     7.94 | kwezz, Patti, SinK, thamlike, Zanto   |
|            7 |     3309 | 2025-11-20 | G2 Ares                 | W   | 0.431      | 0.338        | 0.002 (0.000)    | 0.101 (0.015)    | 1 (0.431) |     2.52 | kwezz, Patti, SinK, thamlike, Zanto   |
|            6 |     3650 | 2025-11-07 | Aimclub (Romanian team) | W   | 0.346      | 0.336        | -                | 0.185 (0.021)    | 1 (0.346) |     1.86 | kwezz, Patti, SinK, thamlike, Zanto   |
|            5 |     3667 | 2025-11-07 | BC.Game Esports         | L   | 0.345      | -            | -                | -                | -         |    -9.01 | kwezz, Patti, SinK, thamlike, Zanto   |
|            4 |     3683 | 2025-11-07 | Alliance                | L   | 0.345      | -            | -                | -                | -         |    -1.08 | kwezz, Patti, SinK, thamlike, Zanto   |
|            3 |     3694 | 2025-11-07 | Boomerdemons            | W   | 0.345      | -            | -                | -                | -         |     0.28 | kwezz, Patti, SinK, thamlike, Zanto   |
|            2 |     3712 | 2025-11-07 | AM Gaming               | L   | 0.344      | -            | -                | -                | -         |    -1.94 | kwezz, Patti, SinK, thamlike, Zanto   |
|            1 |     3828 | 2025-11-03 | Yngods                  | L   | 0.318      | -            | -                | -                | -         |    -8.85 | kwezz, Patti, SinK, thamlike, Zanto   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,111.77)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-17 |      0.820 | $1,355.47      | $1,111.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
