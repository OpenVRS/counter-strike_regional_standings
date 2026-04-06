### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: kwezz, Patti, sL1m3, thamlike, Zanto<br />
Global Rank: [125](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [88]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  968.7<br />
<br />
Final Rank Value (968.7) = Starting Rank Value (1053.1) + Head To Head Adjustments (-84.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.216[<sup>2</sup>](#table1)
- LAN Wins: 0.554[<sup>2</sup>](#table1)

The average of these factors is 0.334<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1053.1
- 400 + ( ( 0.334 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1053.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.426
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      282 | 2026-03-31 | Team Nemesis            | L   | 1.000      | -            | -                | -                | -         |    -3.30 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           49 |      307 | 2026-03-30 | Bebop                   | W   | 1.000      | 0.435        | 0.005 (0.002)    | 0.764 (0.332)    | -         |    17.02 | anarkez, kwezz, Patti, thamlike, Zanto |
|           48 |      353 | 2026-03-29 | QWENTRY                 | L   | 1.000      | -            | -                | -                | -         |    -8.33 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           47 |      479 | 2026-03-27 | Ursa                    | L   | 1.000      | -            | -                | -                | -         |    -9.96 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           46 |      564 | 2026-03-25 | TNC Esports             | W   | 1.000      | 0.435        | 0.026 (0.011)    | 1.000 (0.435)    | -         |    19.43 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           45 |      680 | 2026-03-23 | CSDIILIT                | W   | 1.000      | 0.435        | -                | 0.634 (0.275)    | -         |    11.08 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           44 |      783 | 2026-03-21 | TNC Esports             | L   | 1.000      | -            | -                | -                | -         |   -12.68 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           43 |      835 | 2026-03-20 | Ex-MINLATE              | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.445 (0.171)    | -         |    16.83 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           42 |      892 | 2026-03-19 | Bushido Wildcats        | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.228 (0.088)    | -         |    11.08 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           41 |      923 | 2026-03-18 | KHAN                    | W   | 1.000      | -            | -                | -                | -         |     1.55 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           40 |      987 | 2026-03-17 | G2 Ares                 | L   | 1.000      | -            | -                | -                | -         |   -18.78 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           39 |     1108 | 2026-03-14 | Bebop                   | L   | 1.000      | -            | -                | -                | -         |   -14.29 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           38 |     1179 | 2026-03-13 | Rune Eaters Esports     | L   | 1.000      | -            | -                | -                | -         |   -14.89 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           37 |     1253 | 2026-03-11 | Acend                   | L   | 1.000      | -            | -                | -                | -         |    -6.81 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           36 |     1338 | 2026-03-09 | Hashiras                | W   | 1.000      | 0.435        | -                | 0.454 (0.197)    | -         |    10.71 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           35 |     1755 | 2026-03-01 | Ex-Zero Tenacity        | L   | 0.960      | -            | -                | -                | -         |   -21.54 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           34 |     2810 | 2026-02-07 | AaB esport              | L   | 0.812      | -            | -                | -                | -         |    -9.05 | kwezz, Patti, SinK, thamlike, Zanto    |
|           33 |     2987 | 2026-02-01 | Phantom Esports         | W   | 0.772      | 0.396        | 0.008 (0.002)    | 0.634 (0.194)    | -         |    19.40 | kwezz, Patti, SinK, thamlike, Zanto    |
|           32 |     3199 | 2026-01-24 | HAVU                    | L   | 0.720      | -            | -                | -                | -         |    -7.92 | kwezz, Patti, SinK, thamlike, Zanto    |
|           31 |     3218 | 2026-01-23 | SINQU Esports           | W   | 0.715      | -            | -                | -                | 1 (0.715) |     2.16 | kwezz, Patti, SinK, thamlike, Zanto    |
|           30 |     3220 | 2026-01-23 | Sidequest               | W   | 0.715      | -            | -                | -                | 1 (0.715) |     0.79 | kwezz, Patti, SinK, thamlike, Zanto    |
|           29 |     3224 | 2026-01-23 | Alliance                | L   | 0.715      | -            | -                | -                | -         |    -1.27 | kwezz, Patti, SinK, thamlike, Zanto    |
|           28 |     3400 | 2026-01-18 | Lilmix                  | L   | 0.680      | -            | -                | -                | -         |   -11.96 | kwezz, Patti, SinK, thamlike, Zanto    |
|           27 |     3440 | 2026-01-17 | Megoshort               | W   | 0.673      | 0.337        | 0.004 (0.001)    | 0.336 (0.076)    | 1 (0.673) |    11.22 | kwezz, Patti, SinK, thamlike, Zanto    |
|           26 |     3453 | 2026-01-17 | MASONIC                 | L   | 0.673      | -            | -                | -                | -         |    -9.81 | kwezz, Patti, SinK, thamlike, Zanto    |
|           25 |     3458 | 2026-01-17 | Johnny Speeds           | L   | 0.672      | -            | -                | -                | -         |    -3.18 | kwezz, Patti, SinK, thamlike, Zanto    |
|           24 |     3467 | 2026-01-17 | HEROIC Academy          | W   | 0.671      | 0.337        | 0.007 (0.001)    | -                | 1 (0.671) |    13.43 | kwezz, Patti, SinK, thamlike, Zanto    |
|           23 |     3481 | 2026-01-16 | Prestige Esport         | L   | 0.667      | -            | -                | -                | -         |   -18.63 | kwezz, Patti, SinK, thamlike, Zanto    |
|           22 |     3491 | 2026-01-16 | Johnny Speeds           | W   | 0.667      | 0.337        | 0.067 (0.015)    | 0.794 (0.179)    | 1 (0.667) |    17.82 | kwezz, Patti, SinK, thamlike, Zanto    |
|           21 |     3504 | 2026-01-16 | Infinite Gaming         | W   | 0.666      | -            | -                | -                | 1 (0.666) |     1.36 | kwezz, Patti, SinK, thamlike, Zanto    |
|           20 |     3515 | 2026-01-16 | AaB esport              | L   | 0.666      | -            | -                | -                | -         |    -6.10 | kwezz, Patti, SinK, thamlike, Zanto    |
|           19 |     3520 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.665      | -            | -                | -                | 1 (0.665) |     9.04 | kwezz, Patti, SinK, thamlike, Zanto    |
|           18 |     3526 | 2026-01-16 | MANA eSports            | L   | 0.665      | -            | -                | -                | -         |   -13.68 | kwezz, Patti, SinK, thamlike, Zanto    |
|           17 |     3544 | 2026-01-15 | Bebop                   | L   | 0.660      | -            | -                | -                | -         |   -14.11 | kwezz, Patti, SinK, thamlike, Zanto    |
|           16 |     3563 | 2026-01-15 | Ex-MINLATE              | L   | 0.658      | -            | -                | -                | -         |   -11.10 | kwezz, Patti, SinK, thamlike, Zanto    |
|           15 |     3576 | 2026-01-14 | TNC Esports             | W   | 0.653      | 0.333        | 0.026 (0.006)    | 1.000 (0.218)    | -         |     9.27 | kwezz, Patti, SinK, thamlike, Zanto    |
|           14 |     3584 | 2026-01-14 | FORZE Reload            | L   | 0.651      | -            | -                | -                | -         |   -13.83 | kwezz, Patti, SinK, thamlike, Zanto    |
|           13 |     3635 | 2026-01-09 | Eternal Fire            | L   | 0.621      | -            | -                | -                | -         |    -2.63 | kwezz, Patti, SinK, thamlike, Zanto    |
|           12 |     3637 | 2026-01-09 | Universe                | W   | 0.618      | -            | -                | -                | -         |     1.68 | Dengzoe, kwezz, SinK, thamlike, Zanto  |
|           11 |     3646 | 2026-01-05 | TNC Esports             | L   | 0.592      | -            | -                | -                | -         |   -10.62 | kwezz, Patti, SinK, thamlike, Zanto    |
|           10 |     4384 | 2025-11-21 | ENCE                    | L   | 0.292      | -            | -                | -                | -         |    -4.04 | kwezz, Patti, SinK, thamlike, Zanto    |
|            9 |     4397 | 2025-11-21 | ESC Gaming              | L   | 0.291      | -            | -                | -                | -         |    -3.40 | kwezz, Patti, SinK, thamlike, Zanto    |
|            8 |     4426 | 2025-11-20 | Nexus Gaming            | W   | 0.285      | -            | -                | -                | 1 (0.285) |     5.01 | kwezz, Patti, SinK, thamlike, Zanto    |
|            7 |     4435 | 2025-11-20 | G2 Ares                 | W   | 0.285      | 0.338        | 0.002 (0.000)    | -                | 1 (0.285) |     1.81 | kwezz, Patti, SinK, thamlike, Zanto    |
|            6 |     4776 | 2025-11-07 | Aimclub (Romanian team) | W   | 0.200      | -            | -                | -                | 1 (0.200) |     2.62 | kwezz, Patti, SinK, thamlike, Zanto    |
|            5 |     4793 | 2025-11-07 | BC.Game Esports         | L   | 0.200      | -            | -                | -                | -         |    -5.51 | kwezz, Patti, SinK, thamlike, Zanto    |
|            4 |     4809 | 2025-11-07 | Alliance                | L   | 0.199      | -            | -                | -                | -         |    -0.43 | kwezz, Patti, SinK, thamlike, Zanto    |
|            3 |     4820 | 2025-11-07 | Boomerdemons            | W   | 0.199      | -            | -                | -                | -         |     0.17 | kwezz, Patti, SinK, thamlike, Zanto    |
|            2 |     4838 | 2025-11-07 | AM Gaming               | L   | 0.198      | -            | -                | -                | -         |    -5.13 | kwezz, Patti, SinK, thamlike, Zanto    |
|            1 |     4954 | 2025-11-03 | Ex-Flame Sharks         | L   | 0.173      | -            | -                | -                | -         |    -4.89 | kwezz, Patti, SinK, thamlike, Zanto    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($914.20)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-17 |      0.674 | $1,355.47      | $914.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
