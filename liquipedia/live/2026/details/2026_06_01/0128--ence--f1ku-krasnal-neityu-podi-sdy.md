### Roster Details<br />
Team Name: ENCE<br />
Roster: F1KU, kRaSnaL, Neityu, podi, sdy<br />
Global Rank: [128](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [85]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  957.5<br />
<br />
Final Rank Value (957.5) = Starting Rank Value (894.7) + Head To Head Adjustments (62.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.160[<sup>2</sup>](#table1)
- LAN Wins: 0.235[<sup>2</sup>](#table1)

The average of these factors is 0.260<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 894.7
- 400 + ( ( 0.260 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 894.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.145
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     1713 | 2026-04-08 | ASTRAL Esports     | L   | 0.843      | -            | -                | -                | -         |   -11.41 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           23 |     3665 | 2026-03-05 | Fnatic             | L   | 0.619      | -            | -                | -                | -         |    -6.05 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           22 |     3948 | 2026-02-27 | Eternal Fire       | L   | 0.578      | -            | -                | -                | -         |    -4.24 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           21 |     3992 | 2026-02-26 | ASTRAL Esports     | W   | 0.573      | 0.354        | 0.008 (0.002)    | 0.848 (0.172)    | 1 (0.573) |    10.57 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           20 |     3998 | 2026-02-26 | BESTIA             | W   | 0.572      | 0.354        | 0.016 (0.003)    | 0.660 (0.134)    | 1 (0.572) |    14.94 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           19 |     4020 | 2026-02-26 | CYBERSHOKE Esports | L   | 0.571      | -            | -                | -                | -         |    -3.42 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           18 |     4063 | 2026-02-25 | 100 Thieves        | W   | 0.565      | 0.354        | 0.025 (0.005)    | 0.673 (0.135)    | 1 (0.565) |    15.90 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           17 |     4707 | 2026-02-13 | Illwill            | L   | 0.485      | -            | -                | -                | -         |    -3.64 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           16 |     4721 | 2026-02-13 | Tricked Esport     | W   | 0.484      | 0.334        | 0.035 (0.006)    | 0.574 (0.093)    | 1 (0.484) |    13.25 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           15 |     4724 | 2026-02-13 | Illwill            | L   | 0.484      | -            | -                | -                | -         |    -3.51 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           14 |     4777 | 2026-02-11 | Fnatic             | L   | 0.473      | -            | -                | -                | -         |    -4.28 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           13 |     4785 | 2026-02-11 | Alliance           | W   | 0.472      | 0.769        | 0.100 (0.036)    | 0.841 (0.305)    | 0 (0.000) |    13.94 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           12 |     4792 | 2026-02-11 | EYEBALLERS         | W   | 0.471      | 0.769        | 0.127 (0.046)    | 0.535 (0.194)    | 0 (0.000) |    14.00 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           11 |     4827 | 2026-02-10 | BetBoom Team       | L   | 0.466      | -            | -                | -                | -         |    -0.47 | F1KU, kRaSnaL, Neityu, podi, sdy |
|           10 |     4837 | 2026-02-10 | CYBERSHOKE Esports | W   | 0.464      | 0.769        | 0.025 (0.009)    | 0.599 (0.214)    | 0 (0.000) |    12.50 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            9 |     4997 | 2026-02-04 | Ex-RUBY            | L   | 0.425      | -            | -                | -                | -         |    -5.54 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            8 |     5179 | 2026-01-29 | Nemiga Gaming      | L   | 0.386      | -            | -                | -                | -         |    -1.07 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            7 |     5210 | 2026-01-28 | Ex-RUBY            | W   | 0.378      | 0.435        | 0.033 (0.005)    | 0.989 (0.162)    | 0 (0.000) |     6.96 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            6 |     5546 | 2026-01-17 | Nuclear TigeRES    | L   | 0.306      | -            | -                | -                | -         |    -0.70 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            5 |     5552 | 2026-01-17 | INOX Division      | W   | 0.306      | 0.624        | 0.027 (0.005)    | 0.898 (0.171)    | 0 (0.000) |     4.79 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            4 |     5642 | 2026-01-16 | PARIVISION         | L   | 0.297      | -            | -                | -                | -         |    -0.08 | F1KU, kRaSnaL, Neityu, podi, sdy |
|            3 |     5914 | 2025-12-19 | Lazer Cats         | L   | 0.112      | -            | -                | -                | -         |    -1.85 | myltsi, Neityu, podi, rigoN, sdy |
|            2 |     5920 | 2025-12-19 | Walczaki           | L   | 0.111      | -            | -                | -                | -         |    -0.60 | myltsi, Neityu, podi, rigoN, sdy |
|            1 |     5935 | 2025-12-18 | The Huns Esports   | W   | 0.104      | 0.339        | 0.045 (0.002)    | 0.455 (0.016)    | 1 (0.104) |     2.77 | myltsi, Neityu, podi, rigoN, sdy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,131.89)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.393 | $2,000.00      | $785.88         |
| 2026-01-18 |      0.313 | $7,500.00      | $2,346.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
