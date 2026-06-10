### Roster Details<br />
Team Name: ENCE<br />
Roster: F1KU, kRaSnaL, Neityu, podi, sdy<br />
Global Rank: [131](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [87]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  929.6<br />
<br />
Final Rank Value (929.6) = Starting Rank Value (870.7) + Head To Head Adjustments (58.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.297[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.137[<sup>2</sup>](#table1)
- LAN Wins: 0.209[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 870.7
- 400 + ( ( 0.245 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 870.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.129
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1823 | 2026-04-08 | ASTRAL Esports     | L   | 0.791      | -            | -                | -                | -         |   -10.01 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           23 |     3775 | 2026-03-05 | Fnatic             | L   | 0.567      | -            | -                | -                | -         |    -5.45 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           22 |     4058 | 2026-02-27 | Eternal Fire       | L   | 0.526      | -            | -                | -                | -         |    -3.67 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           21 |     4102 | 2026-02-26 | ASTRAL Esports     | W   | 0.521      | 0.354        | 0.008 (0.001)    | 0.888 (0.164)    | 1 (0.521) |    10.07 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           20 |     4108 | 2026-02-26 | BESTIA             | W   | 0.520      | 0.354        | 0.015 (0.003)    | 0.614 (0.113)    | 1 (0.520) |    13.72 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           19 |     4130 | 2026-02-26 | CYBERSHOKE Esports | L   | 0.519      | -            | -                | -                | -         |    -2.97 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           18 |     4173 | 2026-02-25 | 100 Thieves        | W   | 0.513      | 0.354        | 0.041 (0.007)    | 0.757 (0.137)    | 1 (0.513) |    14.99 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           17 |     4817 | 2026-02-13 | Illwill            | L   | 0.433      | -            | -                | -                | -         |    -3.28 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           16 |     4831 | 2026-02-13 | Looking for Org    | W   | 0.432      | 0.334        | 0.034 (0.005)    | 0.548 (0.079)    | 1 (0.432) |    11.86 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           15 |     4834 | 2026-02-13 | Illwill            | L   | 0.431      | -            | -                | -                | -         |    -3.17 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           14 |     4887 | 2026-02-11 | Fnatic             | L   | 0.421      | -            | -                | -                | -         |    -3.77 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           13 |     4895 | 2026-02-11 | Alliance           | W   | 0.420      | 0.769        | 0.097 (0.031)    | 0.787 (0.254)    | 0 (0.000) |    12.47 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           12 |     4902 | 2026-02-11 | EYEBALLERS         | W   | 0.419      | 0.769        | 0.118 (0.038)    | 0.498 (0.160)    | 0 (0.000) |    12.42 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           11 |     4937 | 2026-02-10 | BetBoom Team       | L   | 0.413      | -            | -                | -                | -         |    -0.32 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           10 |     4947 | 2026-02-10 | CYBERSHOKE Esports | W   | 0.412      | 0.769        | 0.023 (0.007)    | 0.566 (0.179)    | 0 (0.000) |    11.13 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            9 |     5107 | 2026-02-04 | Ex-RUBY            | L   | 0.372      | -            | -                | -                | -         |    -4.34 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            8 |     5289 | 2026-01-29 | Nemiga Gaming      | L   | 0.333      | -            | -                | -                | -         |    -0.89 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            7 |     5320 | 2026-01-28 | Ex-RUBY            | W   | 0.326      | 0.435        | 0.035 (0.005)    | 1.000 (0.142)    | 0 (0.000) |     6.48 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            6 |     5656 | 2026-01-17 | Nuclear TigeRES    | L   | 0.254      | -            | -                | -                | -         |    -0.55 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            5 |     5662 | 2026-01-17 | INOX Division      | W   | 0.254      | 0.624        | 0.026 (0.004)    | 0.862 (0.136)    | 0 (0.000) |     4.20 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            4 |     5752 | 2026-01-16 | PARIVISION         | L   | 0.245      | -            | -                | -                | -         |    -0.07 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            3 |     6024 | 2025-12-19 | Lazer Cats         | L   | 0.059      | -            | -                | -                | -         |    -0.97 | myltsi, Neityu, podi, rigoN, sdy |
|            2 |     6030 | 2025-12-19 | Walczaki           | L   | 0.059      | -            | -                | -                | -         |    -0.32 | myltsi, Neityu, podi, rigoN, sdy |
|            1 |     6045 | 2025-12-18 | The Huns Esports   | W   | 0.052      | 0.339        | 0.045 (0.001)    | 0.423 (0.007)    | 1 (0.052) |     1.38 | myltsi, Neityu, podi, rigoN, sdy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,635.31)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.341 | $2,000.00      | $681.34         |
| 2026-01-18 |      0.261 | $7,500.00      | $1,953.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
