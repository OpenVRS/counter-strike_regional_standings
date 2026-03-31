### Roster Details<br />
Team Name: Rebels Gaming<br />
Roster: Icarus, NOPEEj, snapy, stadodo, TMKj<br />
Global Rank: [93](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [67]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  1049.3<br />
<br />
Final Rank Value (1049.3) = Starting Rank Value (1165.2) + Head To Head Adjustments (-115.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.148[<sup>2</sup>](#table1)
- LAN Wins: 0.772[<sup>2</sup>](#table1)

The average of these factors is 0.394<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1165.2
- 400 + ( ( 0.394 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1165.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.351
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      387 | 2026-03-20 | MANA eSports         | L   | 1.000      | -            | -                | -                | -         |   -20.33 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           34 |      423 | 2026-03-19 | TDK                  | L   | 1.000      | -            | -                | -                | -         |   -10.35 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           33 |      516 | 2026-03-17 | Rune Eaters Esports  | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.349 (0.134)    | -         |    11.40 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           32 |      741 | 2026-03-12 | M80                  | W   | 1.000      | 0.349        | 0.071 (0.025)    | 0.474 (0.166)    | 1 (1.000) |    25.37 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           31 |      745 | 2026-03-12 | 9INE                 | L   | 1.000      | -            | -                | -                | -         |    -6.83 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           30 |      747 | 2026-03-12 | JiJieHao             | L   | 1.000      | -            | -                | -                | -         |   -13.65 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           29 |      755 | 2026-03-12 | Nebula In Chaox      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.75 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           28 |     1290 | 2026-03-01 | FUZOS                | W   | 1.000      | 0.318        | 0.005 (0.002)    | 0.449 (0.143)    | 1 (1.000) |     9.87 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           27 |     1329 | 2026-02-28 | SAW                  | W   | 1.000      | 0.318        | 0.002 (0.001)    | -                | 1 (1.000) |     8.68 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           26 |     1449 | 2026-02-26 | Team Pigeons         | L   | 0.990      | -            | -                | -                | -         |   -26.03 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           25 |     1484 | 2026-02-25 | Ursa                 | L   | 0.985      | -            | -                | -                | -         |   -20.67 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           24 |     1784 | 2026-02-19 | Passion UA           | L   | 0.946      | -            | -                | -                | -         |   -11.15 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           23 |     1789 | 2026-02-19 | HOTU                 | L   | 0.946      | -            | -                | -                | -         |    -5.99 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           22 |     1791 | 2026-02-19 | Passion UA           | W   | 0.945      | 0.341        | 0.062 (0.020)    | 0.309 (0.100)    | 1 (0.945) |    18.54 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           21 |     1853 | 2026-02-18 | Alliance             | L   | 0.938      | -            | -                | -                | -         |    -4.77 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           20 |     1910 | 2026-02-17 | ENCE Academy         | W   | 0.932      | 0.384        | -                | 0.557 (0.200)    | -         |     6.86 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           19 |     1954 | 2026-02-16 | TDK                  | L   | 0.925      | -            | -                | -                | -         |   -15.53 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           18 |     1958 | 2026-02-16 | CSDIILIT             | L   | 0.924      | -            | -                | -                | -         |   -26.01 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           17 |     2022 | 2026-02-15 | VP.Prodigy           | L   | 0.917      | -            | -                | -                | -         |   -18.61 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           16 |     2083 | 2026-02-14 | 1w Team              | W   | 0.910      | 0.384        | 0.033 (0.012)    | 0.591 (0.207)    | -         |    18.77 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           15 |     2139 | 2026-02-13 | BASEMENT BOYS        | W   | 0.904      | 0.384        | -                | 0.301 (0.104)    | -         |     3.38 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           14 |     2334 | 2026-02-07 | SPARTA Esports       | L   | 0.864      | -            | -                | -                | -         |    -6.71 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           13 |     2382 | 2026-02-06 | WW Team              | W   | 0.856      | 0.384        | 0.022 (0.007)    | 0.820 (0.270)    | -         |    19.58 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           12 |     2448 | 2026-02-03 | Aurora Young Blud    | L   | 0.837      | -            | -                | -                | -         |   -25.02 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           11 |     2489 | 2026-02-02 | Team Pigeons         | W   | 0.830      | 0.384        | 0.038 (0.012)    | 0.276 (0.088)    | -         |     3.10 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|           10 |     2930 | 2026-01-18 | BIG                  | L   | 0.731      | -            | -                | -                | -         |    -4.75 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|            9 |     2968 | 2026-01-17 | BASEMENT BOYS        | W   | 0.725      | -            | -                | -                | 1 (0.725) |     2.31 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|            8 |     3039 | 2026-01-16 | SAW                  | W   | 0.717      | 0.341        | 0.002 (0.000)    | -                | 1 (0.717) |     4.11 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|            7 |     3058 | 2026-01-16 | DimoniX Esports      | W   | 0.716      | -            | -                | -                | 1 (0.716) |     0.36 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|            6 |     3060 | 2026-01-16 | SAW                  | L   | 0.716      | -            | -                | -                | -         |   -18.68 | Icarus, NOPEEj, snapy, stadodo, TMKj  |
|            5 |     3308 | 2025-12-20 | FUZOS                | L   | 0.537      | -            | -                | -                | -         |   -13.57 | Icarus, nesto, NOPEEj, snapy, stadodo |
|            4 |     3315 | 2025-12-20 | Gentle Mates         | L   | 0.536      | -            | -                | -                | -         |    -4.59 | Icarus, nesto, NOPEEj, snapy, stadodo |
|            3 |     3316 | 2025-12-20 | FUZOS                | W   | 0.536      | 0.309        | 0.005 (0.001)    | 0.449 (0.074)    | 1 (0.536) |     3.23 | Icarus, nesto, NOPEEj, snapy, stadodo |
|            2 |     5157 | 2025-10-12 | FC Famalicão Esports | W   | 0.077      | -            | -                | -                | 1 (0.077) |     0.58 | Icarus, NOPEEj, rmn, snapy, stadodo   |
|            1 |     5173 | 2025-10-11 | FUZOS                | W   | 0.071      | -            | -                | -                | -         |     0.44 | Icarus, NOPEEj, rmn, snapy, stadodo   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,829.82)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $3,545.24      | $3,545.24       |
| 2026-01-18 |      0.732 | $1,450.78      | $1,061.49       |
| 2025-10-12 |      0.077 | $2,904.60      | $223.09         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
