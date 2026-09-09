### Roster Details<br />
Team Name: FOKUS<br />
Roster: Banjo, jocab, Matheos, podi, ztr<br />
Global Rank: [51](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [39]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1162.0<br />
<br />
Final Rank Value (1162.0) = Starting Rank Value (1208.5) + Head To Head Adjustments (-46.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.516[<sup>1</sup>](#table2)
- Bounty Collected: 0.444[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.521[<sup>2</sup>](#table1)

The average of these factors is 0.425<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1208.5
- 400 + ( ( 0.425 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1208.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |       21 | 2026-09-06 | ASTRAL           | L   | 1.000      | -            | -                | -                | -         |   -20.94 | Banjo, jocab, Matheos, podi, ztr |
|           45 |       27 | 2026-09-06 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |   -17.11 | Banjo, jocab, Matheos, podi, ztr |
|           44 |       38 | 2026-09-05 | HOTU             | W   | 1.000      | 0.143        | 0.144 (0.021)    | 1.000 (0.143)    | -         |    23.59 | Banjo, jocab, Matheos, podi, ztr |
|           43 |       53 | 2026-09-04 | BET-M            | L   | 1.000      | -            | -                | -                | -         |   -24.53 | Banjo, jocab, Matheos, podi, ztr |
|           42 |       60 | 2026-09-04 | BC.Game          | W   | 1.000      | -            | -                | -                | -         |    19.83 | Banjo, jocab, Matheos, podi, ztr |
|           41 |       76 | 2026-09-04 | aimclub          | W   | 1.000      | -            | -                | -                | -         |     2.37 | Banjo, jocab, Matheos, podi, ztr |
|           40 |      102 | 2026-09-03 | SINNERS          | W   | 1.000      | 0.143        | 0.102 (0.015)    | -                | -         |    11.91 | Banjo, jocab, Matheos, podi, ztr |
|           39 |      403 | 2026-08-27 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -25.57 | Banjo, jocab, Matheos, podi, ztr |
|           38 |      908 | 2026-08-09 | Acend            | L   | 1.000      | -            | -                | -                | -         |   -13.11 | Banjo, jocab, Matheos, podi, ztr |
|           37 |      951 | 2026-08-08 | Sashi            | W   | 0.996      | 0.818        | 0.055 (0.045)    | 0.623 (0.508)    | 1 (0.996) |    17.27 | Banjo, jocab, Matheos, podi, ztr |
|           36 |      972 | 2026-08-07 | Partizan         | W   | 0.992      | -            | -                | -                | 1 (0.992) |     1.00 | Banjo, jocab, Matheos, podi, ztr |
|           35 |     1392 | 2026-07-25 | MOUZ             | L   | 0.905      | -            | -                | -                | -         |    -0.58 | Banjo, jocab, Matheos, podi, ztr |
|           34 |     1465 | 2026-07-23 | HEROIC           | L   | 0.892      | -            | -                | -                | -         |    -7.78 | Banjo, jocab, Matheos, podi, ztr |
|           33 |     1480 | 2026-07-23 | Aurora           | W   | 0.890      | 0.903        | 0.415 (0.333)    | 0.427 (0.343)    | -         |    25.20 | Banjo, jocab, Matheos, podi, ztr |
|           32 |     1515 | 2026-07-21 | Astralis         | L   | 0.879      | -            | -                | -                | -         |    -5.30 | Banjo, jocab, Matheos, podi, ztr |
|           31 |     2033 | 2026-06-25 | INFINITE         | L   | 0.703      | -            | -                | -                | -         |   -10.23 | Banjo, Jorko, Matheos, volt, ztr |
|           30 |     2047 | 2026-06-24 | BBL              | L   | 0.698      | -            | -                | -                | -         |   -11.92 | Banjo, Jorko, Matheos, volt, ztr |
|           29 |     2058 | 2026-06-23 | OG               | W   | 0.692      | 0.548        | 0.024 (0.009)    | 0.442 (0.167)    | 1 (0.692) |     5.91 | Banjo, Jorko, Matheos, volt, ztr |
|           28 |     2074 | 2026-06-21 | Phantom          | L   | 0.678      | -            | -                | -                | -         |   -19.10 | Banjo, Jorko, Matheos, volt, ztr |
|           27 |     2095 | 2026-06-20 | CYBERSHOKE       | W   | 0.670      | -            | -                | -                | -         |     2.93 | Banjo, Jorko, Matheos, volt, ztr |
|           26 |     2129 | 2026-06-18 | Noir Verse       | W   | 0.656      | 0.435        | -                | 0.519 (0.148)    | -         |     3.05 | Banjo, Jorko, Matheos, volt, ztr |
|           25 |     2520 | 2026-05-31 | Nemesis          | L   | 0.539      | -            | -                | -                | -         |    -9.63 | Banjo, Jorko, Matheos, volt, ztr |
|           24 |     2530 | 2026-05-31 | Nemiga           | W   | 0.538      | 0.435        | 0.058 (0.014)    | 0.719 (0.168)    | -         |     5.11 | Banjo, Jorko, Matheos, volt, ztr |
|           23 |     2571 | 2026-05-30 | fnatic           | W   | 0.531      | 0.435        | 0.045 (0.010)    | 0.895 (0.207)    | -         |    10.81 | Banjo, Jorko, Matheos, volt, ztr |
|           22 |     2683 | 2026-05-28 | Black Phoenix    | W   | 0.516      | 0.435        | -                | 0.952 (0.213)    | -         |     2.64 | Banjo, Jorko, Matheos, volt, ztr |
|           21 |     2810 | 2026-05-24 | Wildcard         | L   | 0.492      | -            | -                | -                | -         |    -9.15 | Banjo, Jorko, Matheos, volt, ztr |
|           20 |     2825 | 2026-05-24 | Inner Circle     | W   | 0.491      | 0.435        | 0.178 (0.038)    | 0.556 (0.119)    | 1 (0.491) |    13.04 | Banjo, Jorko, Matheos, volt, ztr |
|           19 |     2850 | 2026-05-23 | Wildcard         | L   | 0.486      | -            | -                | -                | -         |    -9.14 | Banjo, Jorko, Matheos, volt, ztr |
|           18 |     2874 | 2026-05-23 | DENDELE          | W   | 0.484      | 0.435        | 0.130 (0.027)    | -                | 1 (0.484) |    10.84 | Banjo, Jorko, Matheos, volt, ztr |
|           17 |     2912 | 2026-05-22 | RBLS             | W   | 0.478      | -            | -                | -                | 1 (0.478) |     2.03 | Banjo, Jorko, Matheos, volt, ztr |
|           16 |     3005 | 2026-05-20 | Color            | L   | 0.465      | -            | -                | -                | -         |   -11.15 | Banjo, Jorko, Matheos, volt, ztr |
|           15 |     3028 | 2026-05-19 | Butterfly        | W   | 0.459      | 0.435        | -                | 0.841 (0.168)    | -         |     4.80 | Banjo, Jorko, Matheos, volt, ztr |
|           14 |     3516 | 2026-05-02 | Iberian Soul     | L   | 0.343      | -            | -                | -                | -         |    -6.34 | Banjo, Jorko, Matheos, volt, ztr |
|           13 |     3588 | 2026-04-30 | Passion UA       | W   | 0.332      | -            | -                | -                | -         |     1.18 | Banjo, Jorko, Matheos, volt, ztr |
|           12 |     3850 | 2026-04-25 | KOLESIE          | L   | 0.299      | -            | -                | -                | -         |    -7.82 | Banjo, Jorko, Matheos, volt, ztr |
|           11 |     4277 | 2026-04-08 | EYEBALLERS       | L   | 0.183      | -            | -                | -                | -         |    -2.20 | Banjo, Jorko, Matheos, volt, ztr |
|           10 |     4306 | 2026-04-07 | BC.Game          | W   | 0.177      | -            | -                | -                | 1 (0.177) |     0.27 | Banjo, Jorko, Matheos, volt, ztr |
|            9 |     4349 | 2026-04-06 | Wildcard         | L   | 0.169      | -            | -                | -                | -         |    -3.49 | Banjo, Jorko, Matheos, volt, ztr |
|            8 |     4388 | 2026-04-05 | PARIVISION       | L   | 0.164      | -            | -                | -                | -         |    -0.97 | Banjo, Jorko, Matheos, volt, ztr |
|            7 |     4483 | 2026-04-04 | 3DMAX            | W   | 0.156      | 1.000        | 0.301 (0.047)    | -                | 1 (0.156) |     3.01 | Banjo, Jorko, Matheos, volt, ztr |
|            6 |     5236 | 2026-03-24 | Phantom          | W   | 0.087      | -            | -                | -                | 1 (0.087) |     0.22 | Banjo, Jorko, Matheos, volt, ztr |
|            5 |     5255 | 2026-03-24 | OlyBet           | W   | 0.085      | -            | -                | -                | 1 (0.085) |     0.09 | Banjo, Jorko, Matheos, volt, ztr |
|            4 |     5268 | 2026-03-24 | Wildcard         | W   | 0.084      | -            | -                | -                | -         |     0.92 | Banjo, Jorko, Matheos, volt, ztr |
|            3 |     5361 | 2026-03-23 | 3DMAX            | W   | 0.076      | -            | -                | -                | -         |     1.51 | Banjo, Jorko, Matheos, volt, ztr |
|            2 |     5364 | 2026-03-23 | FOKUS REALITY    | W   | 0.076      | -            | -                | -                | -         |     0.03 | Banjo, Jorko, Matheos, volt, ztr |
|            1 |     5366 | 2026-03-23 | GAMEHARMONY      | W   | 0.076      | -            | -                | -                | -         |     0.03 | Banjo, Jorko, Matheos, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,598.58)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.912 | $41,250.00     | $37,622.11      |
| 2026-06-28 |      0.726 | $2,500.00      | $1,815.60       |
| 2026-05-31 |      0.539 | $10,000.00     | $5,389.69       |
| 2026-05-24 |      0.492 | $10,000.00     | $4,920.35       |
| 2026-05-21 |      0.471 | $2,000.00      | $942.23         |
| 2026-04-26 |      0.306 | $3,500.00      | $1,069.36       |
| 2026-04-11 |      0.205 | $31,250.00     | $6,405.57       |
| 2026-03-24 |      0.087 | $5,000.00      | $433.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
