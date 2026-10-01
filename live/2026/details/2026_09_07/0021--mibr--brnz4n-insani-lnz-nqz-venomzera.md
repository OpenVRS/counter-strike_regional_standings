### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, insani, LNZ, nqz, venomzera<br />
Global Rank: [21](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [5]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1408.0<br />
<br />
Final Rank Value (1408.0) = Starting Rank Value (1413.3) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.595[<sup>1</sup>](#table2)
- Bounty Collected: 0.571[<sup>2</sup>](#table1)
- Opponent Network: 0.273[<sup>2</sup>](#table1)
- LAN Wins: 0.691[<sup>2</sup>](#table1)

The average of these factors is 0.533<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1413.3
- 400 + ( ( 0.533 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1413.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |       97 | 2026-09-03 | K27               | L   | 1.000      | -            | -                | -                | -         |   -20.31 | insani, LNZ, nqz, tomaszin, venomzera |
|           36 |      103 | 2026-09-03 | EYEBALLERS        | W   | 1.000      | -            | -                | -                | -         |    10.34 | insani, LNZ, nqz, tomaszin, venomzera |
|           35 |      128 | 2026-09-02 | 3DMAX             | W   | 1.000      | -            | -                | -                | -         |     9.52 | insani, LNZ, nqz, tomaszin, venomzera |
|           34 |      142 | 2026-09-02 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |   -28.14 | insani, LNZ, nqz, tomaszin, venomzera |
|           33 |      729 | 2026-08-16 | Legacy            | L   | 1.000      | -            | -                | -                | -         |    -4.71 | brnz4n, insani, LNZ, nqz, venomzera   |
|           32 |      802 | 2026-08-14 | K27               | W   | 1.000      | 1.000        | 0.079 (0.079)    | 0.807 (0.807)    | 1 (1.000) |    11.73 | brnz4n, insani, LNZ, nqz, venomzera   |
|           31 |      856 | 2026-08-12 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -15.89 | brnz4n, insani, LNZ, nqz, venomzera   |
|           30 |     1118 | 2026-08-02 | BESTIA            | W   | 0.960      | -            | -                | -                | -         |     2.56 | brnz4n, insani, LNZ, nqz, venomzera   |
|           29 |     1161 | 2026-08-01 | ShindeN           | W   | 0.952      | -            | -                | -                | -         |     1.66 | brnz4n, insani, LNZ, nqz, venomzera   |
|           28 |     1263 | 2026-07-29 | LP                | W   | 0.933      | -            | -                | -                | -         |     2.03 | brnz4n, insani, LNZ, nqz, venomzera   |
|           27 |     1298 | 2026-07-28 | Fluxo             | W   | 0.925      | -            | -                | -                | -         |     3.89 | brnz4n, insani, LNZ, nqz, venomzera   |
|           26 |     1842 | 2026-07-05 | 9z                | L   | 0.769      | -            | -                | -                | -         |    -6.21 | brnz4n, insani, LNZ, nqz, venomzera   |
|           25 |     1857 | 2026-07-04 | PARIVISION        | L   | 0.763      | -            | -                | -                | -         |   -12.45 | brnz4n, insani, LNZ, nqz, venomzera   |
|           24 |     1871 | 2026-07-03 | BIG               | W   | 0.757      | 1.000        | 0.151 (0.114)    | 0.569 (0.431)    | 1 (0.757) |    13.93 | brnz4n, insani, LNZ, nqz, venomzera   |
|           23 |     1895 | 2026-07-02 | FaZe              | W   | 0.750      | 1.000        | 0.478 (0.358)    | 0.356 (0.267)    | 1 (0.750) |    15.66 | brnz4n, insani, LNZ, nqz, venomzera   |
|           22 |     1900 | 2026-07-01 | B8                | L   | 0.745      | -            | -                | -                | -         |    -9.73 | brnz4n, insani, LNZ, nqz, venomzera   |
|           21 |     2344 | 2026-06-08 | B8                | L   | 0.591      | -            | -                | -                | -         |    -8.02 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           20 |     2369 | 2026-06-07 | BIG               | L   | 0.584      | -            | -                | -                | -         |    -7.17 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           19 |     2381 | 2026-06-06 | Spirit            | L   | 0.579      | -            | -                | -                | -         |    -0.75 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           18 |     2395 | 2026-06-06 | Legacy            | W   | 0.577      | 0.809        | 1.000 (0.467)    | 0.456 (0.213)    | 1 (0.577) |    16.30 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           17 |     2443 | 2026-06-04 | Lynn Vision       | W   | 0.565      | 0.624        | 0.205 (0.072)    | 0.330 (0.116)    | 1 (0.565) |     6.14 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           16 |     2471 | 2026-06-03 | Liquid            | W   | 0.557      | 0.624        | 0.206 (0.072)    | 0.388 (0.135)    | 1 (0.557) |     9.68 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           15 |     2488 | 2026-06-02 | TYLOO             | W   | 0.552      | 0.624        | -                | 0.562 (0.194)    | 1 (0.552) |     6.27 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           14 |     2502 | 2026-06-02 | THUNDER dOWNUNDER | L   | 0.550      | -            | -                | -                | -         |   -15.70 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           13 |     2840 | 2026-05-23 | MOUZ              | L   | 0.488      | -            | -                | -                | -         |    -0.99 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           12 |     2886 | 2026-05-23 | Legacy            | L   | 0.483      | -            | -                | -                | -         |    -1.56 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           11 |     2939 | 2026-05-21 | B8                | W   | 0.475      | 1.000        | 0.263 (0.125)    | 0.570 (0.271)    | 1 (0.475) |     8.95 | brnz4n, insani, kl1m, LNZ, venomzera  |
|           10 |     3017 | 2026-05-20 | PARIVISION        | W   | 0.463      | 1.000        | 0.394 (0.182)    | 0.252 (0.117)    | 1 (0.463) |     8.15 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            9 |     3024 | 2026-05-19 | 3DMAX             | W   | 0.461      | 1.000        | 0.301 (0.139)    | 0.389 (0.179)    | 1 (0.461) |     5.16 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            8 |     4254 | 2026-04-09 | 3DMAX             | L   | 0.189      | -            | -                | -                | -         |    -3.89 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            7 |     4316 | 2026-04-07 | EYEBALLERS        | W   | 0.176      | -            | -                | -                | -         |     1.91 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            6 |     4350 | 2026-04-06 | Legacy            | W   | 0.169      | 1.000        | 1.000 (0.169)    | -                | -         |     4.90 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            5 |     4393 | 2026-04-05 | BC.Game           | W   | 0.164      | -            | -                | -                | -         |     0.09 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            4 |     4463 | 2026-04-04 | Astralis          | L   | 0.157      | -            | -                | -                | -         |    -2.33 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            3 |     5057 | 2026-03-28 | ShindeN           | L   | 0.112      | -            | -                | -                | -         |    -3.34 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            2 |     5153 | 2026-03-26 | Gaimin Gladiators | L   | 0.099      | -            | -                | -                | -         |    -3.05 | brnz4n, insani, kl1m, LNZ, venomzera  |
|            1 |     5168 | 2026-03-26 | MAGNA             | W   | 0.097      | -            | -                | -                | -         |     0.01 | brnz4n, insani, kl1m, LNZ, venomzera  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($105,311.70)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-07-12 |      0.817 | $27,500.00     | $22,454.53      |
| 2026-06-09 |      0.599 | $10,000.00     | $5,987.81       |
| 2026-05-24 |      0.490 | $90,000.00     | $44,058.23      |
| 2026-04-11 |      0.205 | $62,500.00     | $12,811.14      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
