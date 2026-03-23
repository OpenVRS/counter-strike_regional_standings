### Roster Details<br />
Team Name: FC Famalicão Esports<br />
Roster: h0t, M1KA, P3R3IIRA, seabraez, Sprayy<br />
Global Rank: [110](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [82]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  950.9<br />
<br />
Final Rank Value (950.9) = Starting Rank Value (997.8) + Head To Head Adjustments (-46.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.505[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 997.8
- 400 + ( ( 0.305 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 997.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.225
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |       82 | 2026-03-13 | Hypewrld               | W   | 1.000      | 0.349        | 0.003 (0.001)    | 0.212 (0.074)    | 1 (1.000) |    13.49 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           25 |       89 | 2026-03-13 | Team Liquid            | W   | 1.000      | 0.349        | 0.281 (0.098)    | 0.321 (0.112)    | 1 (1.000) |    29.20 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           24 |       90 | 2026-03-13 | Gaimin Gladiators      | L   | 1.000      | -            | -                | -                | -         |    -4.62 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           23 |       98 | 2026-03-13 | BESTIA                 | L   | 1.000      | -            | -                | -                | -         |    -4.93 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           22 |      475 | 2026-03-05 | HEROIC Academy         | L   | 1.000      | -            | -                | -                | -         |   -20.15 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           21 |      516 | 2026-03-04 | CSDIILIT               | L   | 1.000      | -            | -                | -                | -         |   -21.14 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           20 |      688 | 2026-02-28 | FUZOS                  | L   | 1.000      | -            | -                | -                | -         |   -16.99 | h0t, M1KA, P3R3IIRA, seabraez, Sprayy  |
|           19 |     1154 | 2026-02-19 | Betclic Apogee Esports | L   | 1.000      | -            | -                | -                | -         |    -5.07 | h0t, HS, M1KA, P3R3IIRA, seabraez      |
|           18 |     1159 | 2026-02-19 | Gentle Mates           | L   | 1.000      | -            | -                | -                | -         |    -2.12 | h0t, HS, M1KA, P3R3IIRA, seabraez      |
|           17 |     1195 | 2026-02-18 | Ex-RUBY                | L   | 1.000      | -            | -                | -                | -         |    -8.74 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           16 |     1252 | 2026-02-17 | ALGO Esports           | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.315 (0.121)    | 0 (0.000) |    15.26 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           15 |     1296 | 2026-02-16 | GenOne                 | L   | 1.000      | -            | -                | -                | -         |   -10.60 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           14 |     1425 | 2026-02-14 | Illwill                | W   | 1.000      | 0.384        | 0.078 (0.030)    | 1.000 (0.384)    | 0 (0.000) |    29.37 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           13 |     1462 | 2026-02-13 | ALLINNERS              | L   | 0.999      | -            | -                | -                | -         |   -20.02 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           12 |     1481 | 2026-02-13 | ALLINNERS              | W   | 0.998      | 0.384        | 0.006 (0.002)    | 0.140 (0.054)    | 0 (0.000) |    11.10 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           11 |     1540 | 2026-02-12 | TDK                    | L   | 0.990      | -            | -                | -                | -         |   -14.14 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|           10 |     2336 | 2026-01-17 | MOUZ NXT               | L   | 0.818      | -            | -                | -                | -         |    -5.64 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            9 |     2351 | 2026-01-16 | HYPERSPIRIT            | W   | 0.814      | 0.341        | 0.000 (0.000)    | 0.438 (0.122)    | 1 (0.814) |     8.23 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            8 |     2362 | 2026-01-16 | EXSAD Gaming           | W   | 0.813      | 0.341        | 0.000 (0.000)    | 0.021 (0.006)    | 1 (0.813) |     1.18 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            7 |     2367 | 2026-01-16 | HYPERSPIRIT            | L   | 0.813      | -            | -                | -                | -         |   -17.74 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            6 |     2631 | 2025-12-21 | Ninjas in Pyjamas      | L   | 0.637      | -            | -                | -                | -         |    -1.96 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            5 |     2663 | 2025-12-19 | EXSAD Gaming           | W   | 0.627      | 0.309        | 0.000 (0.000)    | 0.021 (0.004)    | 1 (0.627) |     0.83 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            4 |     2666 | 2025-12-19 | Sharks Esports         | L   | 0.626      | -            | -                | -                | -         |    -1.74 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            3 |     2670 | 2025-12-19 | EXSAD Gaming           | W   | 0.626      | 0.309        | 0.000 (0.000)    | 0.021 (0.004)    | 1 (0.626) |     0.79 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            2 |     4500 | 2025-10-12 | Rebels Gaming          | L   | 0.171      | -            | -                | -                | -         |    -1.23 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |
|            1 |     4523 | 2025-10-11 | Leça FC Esports        | W   | 0.165      | 0.317        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.165) |     0.47 | h0t, M1KA, P3R3IIRA, seabraez, snowiee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,185.04)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $886.31        | $886.31         |
| 2025-10-12 |      0.171 | $1,742.76      | $298.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
