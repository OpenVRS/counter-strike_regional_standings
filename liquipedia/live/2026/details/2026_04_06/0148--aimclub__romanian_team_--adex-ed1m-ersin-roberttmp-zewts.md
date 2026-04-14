### Roster Details<br />
Team Name: Aimclub (Romanian team)<br />
Roster: adeX, Ed1m, ERSIN, RoberttMP, zewts<br />
Global Rank: [148](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [103]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  883.8<br />
<br />
Final Rank Value (883.8) = Starting Rank Value (987.8) + Head To Head Adjustments (-104.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.786[<sup>2</sup>](#table1)

The average of these factors is 0.301<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.8
- 400 + ( ( 0.301 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 987.8


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
|           37 |      316 | 2026-03-30 | Eternal Fire          | L   | 1.000      | -            | -                | -                | -         |    -3.50 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           36 |      324 | 2026-03-30 | FaZe Clan             | L   | 1.000      | -            | -                | -                | -         |    -1.00 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           35 |      361 | 2026-03-29 | MOUZ NXT              | W   | 1.000      | 0.354        | 0.037 (0.013)    | 1.000 (0.354)    | 1 (1.000) |    27.24 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           34 |      370 | 2026-03-29 | Alpha Dominion Nation | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.21 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           33 |      393 | 2026-03-29 | Lazer Cats            | L   | 1.000      | -            | -                | -                | -         |    -8.85 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           32 |      584 | 2026-03-25 | G2 Esports            | L   | 1.000      | -            | -                | -                | -         |    -0.37 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           31 |      605 | 2026-03-24 | Fnatic                | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.361 (0.157)    | 1 (1.000) |    27.66 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           30 |      619 | 2026-03-24 | Nexus Gaming          | W   | 1.000      | 0.435        | 0.001 (0.000)    | 0.450 (0.195)    | 1 (1.000) |    23.26 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           29 |      644 | 2026-03-24 | Fnatic                | L   | 1.000      | -            | -                | -                | -         |    -2.82 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           28 |      925 | 2026-03-19 | BIG Academy           | L   | 1.000      | -            | -                | -                | -         |   -19.15 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           27 |      958 | 2026-03-18 | EC BANGA              | L   | 1.000      | -            | -                | -                | -         |   -17.50 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           26 |      963 | 2026-03-18 | CSDIILIT              | L   | 1.000      | -            | -                | -                | -         |   -17.73 | adeX, Ed1m, ERSIN, RoberttMP, zewts |
|           25 |     1048 | 2026-03-16 | HYPERSPIRIT           | L   | 1.000      | -            | -                | -                | -         |   -11.06 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           24 |     1280 | 2026-03-11 | NOVAQ                 | L   | 1.000      | -            | -                | -                | -         |    -8.28 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           23 |     1328 | 2026-03-10 | HYPERSPIRIT           | L   | 1.000      | -            | -                | -                | -         |   -11.37 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           22 |     1355 | 2026-03-09 | NOVAQ                 | W   | 1.000      | 0.384        | 0.022 (0.009)    | 0.525 (0.202)    | -         |    23.63 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           21 |     1380 | 2026-03-09 | Fire Flux Esports     | L   | 1.000      | -            | -                | -                | -         |   -25.88 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           20 |     1791 | 2026-03-01 | Metizport             | L   | 0.958      | -            | -                | -                | -         |    -7.67 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           19 |     1976 | 2026-02-25 | 100 Thieves           | L   | 0.934      | -            | -                | -                | -         |    -2.81 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           18 |     1993 | 2026-02-25 | CYBERSHOKE Esports    | L   | 0.932      | -            | -                | -                | -         |    -4.37 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           17 |     2005 | 2026-02-24 | Diamant Esports       | W   | 0.928      | 0.354        | 0.000 (0.000)    | 0.028 (0.009)    | 1 (0.928) |     2.21 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           16 |     2017 | 2026-02-24 | Mindshock             | W   | 0.927      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.927) |     1.50 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           15 |     2046 | 2026-02-24 | Diamant Esports       | L   | 0.925      | -            | -                | -                | -         |   -27.22 | BRK, Ed1m, ERSIN, RoberttMP, zewts  |
|           14 |     3509 | 2026-01-16 | Johnny Speeds         | L   | 0.668      | -            | -                | -                | -         |    -2.56 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           13 |     3512 | 2026-01-16 | Infinite Gaming       | W   | 0.668      | 0.337        | 0.000 (0.000)    | 0.077 (0.017)    | 1 (0.668) |     2.77 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           12 |     3522 | 2026-01-16 | AaB esport            | L   | 0.668      | -            | -                | -                | -         |    -3.26 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           11 |     3532 | 2026-01-16 | Johnny Speeds         | W   | 0.667      | 0.337        | 0.067 (0.015)    | 0.794 (0.179)    | 1 (0.667) |    18.83 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|           10 |     3539 | 2026-01-16 | Prestige Esport       | L   | 0.667      | -            | -                | -                | -         |   -15.76 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|            9 |     3553 | 2026-01-16 | WOPA Esport           | L   | 0.666      | -            | -                | -                | -         |    -9.02 | Ed1m, ERSIN, ra1n, RoberttMP, zewts |
|            8 |     3866 | 2025-12-17 | G2 Ares               | L   | 0.468      | -            | -                | -                | -         |   -10.41 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            7 |     3870 | 2025-12-17 | Nomix                 | W   | 0.467      | 0.339        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.467) |     0.60 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            6 |     3883 | 2025-12-17 | G2 Ares               | L   | 0.465      | -            | -                | -                | -         |   -10.69 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            5 |     4811 | 2025-11-07 | WOPA Esport           | L   | 0.200      | -            | -                | -                | -         |    -2.62 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            4 |     4827 | 2025-11-07 | Boomerdemons          | W   | 0.200      | -            | -                | -                | 1 (0.200) |     0.24 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            3 |     4838 | 2025-11-07 | AM Gaming             | L   | 0.200      | -            | -                | -                | -         |    -4.74 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            2 |     4862 | 2025-11-07 | Alliance              | L   | 0.199      | -            | -                | -                | -         |    -0.31 | Ed1m, ERSIN, RoberttMP, waZz, zewts |
|            1 |     4874 | 2025-11-07 | BC.Game Esports       | L   | 0.199      | -            | -                | -                | -         |    -5.29 | Ed1m, ERSIN, RoberttMP, waZz, zewts |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
