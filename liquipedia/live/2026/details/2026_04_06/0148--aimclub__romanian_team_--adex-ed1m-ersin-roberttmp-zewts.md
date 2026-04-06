### Roster Details<br />
Team Name: Aimclub (Romanian team)<br />
Roster: adeX, Ed1m, ERSIN, RoberttMP, zewts<br />
Global Rank: [148](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [103]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  877.8<br />
<br />
Final Rank Value (877.8) = Starting Rank Value (987.7) + Head To Head Adjustments (-110.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.785[<sup>2</sup>](#table1)

The average of these factors is 0.300<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.7
- 400 + ( ( 0.300 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 987.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.271
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      298 | 2026-03-30 | Eternal Fire          | L   | 1.000      | -            | -                | -                | -         |    -3.40 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           36 |      306 | 2026-03-30 | FaZe Clan             | L   | 1.000      | -            | -                | -                | -         |    -0.97 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           35 |      343 | 2026-03-29 | MOUZ NXT              | W   | 1.000      | 0.354        | 0.037 (0.013)    | 1.000 (0.354)    | 1 (1.000) |    27.36 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           34 |      352 | 2026-03-29 | Alpha Dominion Nation | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.29 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           33 |      375 | 2026-03-29 | Lazer Cats            | L   | 1.000      | -            | -                | -                | -         |    -8.40 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           32 |      566 | 2026-03-25 | G2 Esports            | L   | 1.000      | -            | -                | -                | -         |    -0.35 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           31 |      587 | 2026-03-24 | Fnatic                | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.360 (0.157)    | 1 (1.000) |    27.78 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           30 |      601 | 2026-03-24 | Nexus Gaming          | W   | 1.000      | 0.435        | 0.001 (0.000)    | 0.450 (0.195)    | 1 (1.000) |    23.46 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           29 |      626 | 2026-03-24 | Fnatic                | L   | 1.000      | -            | -                | -                | -         |    -2.72 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           28 |      907 | 2026-03-19 | BIG Academy           | L   | 1.000      | -            | -                | -                | -         |   -18.82 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           27 |      940 | 2026-03-18 | EC BANGA              | L   | 1.000      | -            | -                | -                | -         |   -20.10 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           26 |      945 | 2026-03-18 | CSDIILIT              | L   | 1.000      | -            | -                | -                | -         |   -18.12 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           25 |     1030 | 2026-03-16 | HYPERSPIRIT           | L   | 1.000      | -            | -                | -                | -         |   -11.07 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           24 |     1262 | 2026-03-11 | NOVAQ                 | L   | 1.000      | -            | -                | -                | -         |    -8.12 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           23 |     1310 | 2026-03-10 | HYPERSPIRIT           | L   | 1.000      | -            | -                | -                | -         |   -11.36 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           22 |     1337 | 2026-03-09 | NOVAQ                 | W   | 1.000      | 0.384        | 0.022 (0.009)    | 0.524 (0.202)    | -         |    23.81 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           21 |     1362 | 2026-03-09 | Fire Flux Esports     | L   | 1.000      | -            | -                | -                | -         |   -25.75 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           20 |     1773 | 2026-03-01 | Metizport             | L   | 0.958      | -            | -                | -                | -         |    -7.57 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           19 |     1958 | 2026-02-25 | 100 Thieves           | L   | 0.933      | -            | -                | -                | -         |    -2.74 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           18 |     1974 | 2026-02-25 | CYBERSHOKE Esports    | L   | 0.932      | -            | -                | -                | -         |    -4.26 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           17 |     1986 | 2026-02-24 | Diamant Esports       | W   | 0.927      | 0.354        | 0.000 (0.000)    | 0.028 (0.009)    | 1 (0.927) |     2.27 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           16 |     1997 | 2026-02-24 | Mindshock             | W   | 0.927      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.927) |     1.54 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           15 |     2026 | 2026-02-24 | Diamant Esports       | L   | 0.925      | -            | -                | -                | -         |   -27.15 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           14 |     3478 | 2026-01-16 | Johnny Speeds         | L   | 0.668      | -            | -                | -                | -         |    -2.54 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           13 |     3480 | 2026-01-16 | Infinite Gaming       | W   | 0.667      | 0.337        | 0.000 (0.000)    | 0.077 (0.017)    | 1 (0.667) |     1.84 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           12 |     3490 | 2026-01-16 | AaB esport            | L   | 0.667      | -            | -                | -                | -         |    -5.35 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           11 |     3499 | 2026-01-16 | Johnny Speeds         | W   | 0.667      | 0.337        | 0.067 (0.015)    | 0.794 (0.179)    | 1 (0.667) |    18.83 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           10 |     3506 | 2026-01-16 | Prestige Esport       | L   | 0.666      | -            | -                | -                | -         |   -18.12 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|            9 |     3520 | 2026-01-16 | WOPA Esport           | L   | 0.665      | -            | -                | -                | -         |    -9.04 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|            8 |     3831 | 2025-12-17 | G2 Ares               | L   | 0.467      | -            | -                | -                | -         |   -10.41 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            7 |     3835 | 2025-12-17 | Nomix                 | W   | 0.466      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.466) |     0.60 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            6 |     3848 | 2025-12-17 | G2 Ares               | L   | 0.465      | -            | -                | -                | -         |   -10.69 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            5 |     4776 | 2025-11-07 | WOPA Esport           | L   | 0.200      | -            | -                | -                | -         |    -2.62 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            4 |     4792 | 2025-11-07 | Boomerdemons          | W   | 0.200      | -            | -                | -                | 1 (0.200) |     0.24 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            3 |     4803 | 2025-11-07 | AM Gaming             | L   | 0.199      | -            | -                | -                | -         |    -4.73 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            2 |     4827 | 2025-11-07 | Alliance              | L   | 0.199      | -            | -                | -                | -         |    -0.31 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            1 |     4839 | 2025-11-07 | BC.Game Esports       | L   | 0.198      | -            | -                | -                | -         |    -5.27 | Ed1m, ERSIN, RoberttMP, waZz, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
