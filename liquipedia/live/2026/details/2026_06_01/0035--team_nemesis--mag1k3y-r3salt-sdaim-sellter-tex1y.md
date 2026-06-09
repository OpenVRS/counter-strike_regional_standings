### Roster Details<br />
Team Name: Team Nemesis<br />
Roster: mag1k3Y, r3salt, Sdaim, SELLTER, tex1y<br />
Global Rank: [35](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [25]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1377.3<br />
<br />
Final Rank Value (1377.3) = Starting Rank Value (1283.7) + Head To Head Adjustments (93.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.540[<sup>1</sup>](#table2)
- Bounty Collected: 0.417[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.569[<sup>2</sup>](#table1)

The average of these factors is 0.464<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1283.7
- 400 + ( ( 0.464 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1283.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.979
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           84 |        3 | 2026-06-01 | FOKUS                | W   | 1.000      | 0.435        | 0.090 (0.039)    | -                | -         |    16.11 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           83 |       15 | 2026-06-01 | Gentle Mates         | W   | 1.000      | 0.435        | 0.145 (0.063)    | -                | -         |    18.45 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           82 |       38 | 2026-05-30 | 100 Thieves          | W   | 1.000      | 0.435        | -                | 0.673 (0.293)    | -         |    13.34 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           81 |       90 | 2026-05-29 | Lavked               | W   | 1.000      | 0.435        | -                | 1.000 (0.435)    | -         |     7.83 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           80 |      118 | 2026-05-28 | TDK                  | L   | 1.000      | -            | -                | -                | -         |   -19.93 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           79 |      186 | 2026-05-26 | INOX Division        | W   | 1.000      | -            | -                | -                | -         |     7.48 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           78 |      496 | 2026-05-18 | Walczaki             | L   | 1.000      | -            | -                | -                | -         |   -16.55 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           77 |      801 | 2026-05-08 | CYBERSHOKE Esports   | L   | 1.000      | -            | -                | -                | -         |   -23.35 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           76 |      890 | 2026-05-03 | SPARTA Esports       | W   | 1.000      | 0.384        | -                | 0.828 (0.318)    | -         |     8.22 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           75 |      987 | 2026-05-01 | SPARTA Esports       | W   | 0.999      | 0.384        | -                | 0.828 (0.318)    | -         |     8.19 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           74 |     1076 | 2026-04-29 | Fnatic               | W   | 0.986      | -            | -                | -                | -         |     5.95 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           73 |     1158 | 2026-04-27 | Hashiras             | W   | 0.973      | -            | -                | -                | -         |     2.16 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           72 |     1296 | 2026-04-25 | The Last Resort      | W   | 0.959      | -            | -                | -                | -         |     2.29 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           71 |     1401 | 2026-04-23 | CYBERSHOKE Prospects | W   | 0.945      | -            | -                | -                | -         |     3.10 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           70 |     1650 | 2026-04-10 | BIG                  | W   | 0.859      | 0.435        | 0.104 (0.039)    | 0.726 (0.271)    | -         |    17.59 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           69 |     1656 | 2026-04-10 | Walczaki             | W   | 0.858      | 0.435        | 0.089 (0.033)    | 1.000 (0.373)    | -         |     6.95 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           68 |     1673 | 2026-04-09 | EYEBALLERS           | W   | 0.853      | 0.435        | 0.127 (0.047)    | -                | -         |    16.60 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           67 |     1703 | 2026-04-08 | RUSTEC               | W   | 0.845      | -            | -                | -                | -         |     2.88 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           66 |     1967 | 2026-04-03 | Walczaki             | W   | 0.812      | 0.435        | 0.089 (0.031)    | 1.000 (0.353)    | -         |     7.27 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           65 |     1977 | 2026-04-03 | ECSTATIC             | W   | 0.811      | -            | -                | -                | -         |     8.31 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           64 |     2050 | 2026-04-02 | Rebels Gaming        | W   | 0.806      | 0.435        | -                | 0.722 (0.253)    | -         |     7.20 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           63 |     2097 | 2026-04-02 | HEROIC               | L   | 0.804      | -            | -                | -                | -         |    -7.59 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           62 |     2104 | 2026-04-02 | Johnny Speeds        | L   | 0.803      | -            | -                | -                | -         |   -14.84 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           61 |     2140 | 2026-04-01 | Nemiga Gaming        | W   | 0.799      | 0.435        | 0.136 (0.047)    | 1.000 (0.347)    | -         |    14.08 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           60 |     2186 | 2026-04-01 | G2 Esports           | L   | 0.797      | -            | -                | -                | -         |    -2.81 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           59 |     2295 | 2026-03-31 | WOPA Esport          | W   | 0.790      | -            | -                | -                | -         |     6.01 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           58 |     2332 | 2026-03-30 | PsychoFace           | W   | 0.785      | 0.435        | -                | 1.000 (0.341)    | -         |     7.89 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           57 |     2682 | 2026-03-24 | Nemiga Gaming        | L   | 0.746      | -            | -                | -                | -         |   -11.07 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           56 |     2757 | 2026-03-23 | K27                  | L   | 0.739      | -            | -                | -                | -         |    -7.76 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           55 |     2875 | 2026-03-21 | TDK                  | W   | 0.726      | -            | -                | -                | -         |     9.74 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           54 |     2976 | 2026-03-19 | Rottweilers          | W   | 0.713      | -            | -                | -                | -         |     0.51 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           53 |     3078 | 2026-03-17 | Ex-Zero Tenacity     | W   | 0.698      | -            | -                | -                | -         |     1.74 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           52 |     3204 | 2026-03-14 | Eternal Fire         | L   | 0.679      | -            | -                | -                | -         |   -12.90 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           51 |     3255 | 2026-03-13 | WW TEAM              | W   | 0.672      | -            | -                | -                | -         |     7.50 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           50 |     3304 | 2026-03-12 | Nemiga Gaming        | W   | 0.666      | 0.371        | 0.136 (0.033)    | -                | 1 (0.666) |    10.58 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           49 |     3326 | 2026-03-12 | K27                  | L   | 0.664      | -            | -                | -                | -         |    -7.59 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           48 |     3357 | 2026-03-11 | ARCRED               | W   | 0.658      | -            | -                | -                | 1 (0.658) |     9.26 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           47 |     3395 | 2026-03-10 | Sashi Esport         | W   | 0.652      | -            | -                | -                | -         |     6.55 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           46 |     3396 | 2026-03-10 | QUAZAR               | W   | 0.651      | -            | -                | -                | 1 (0.651) |     0.63 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           45 |     3404 | 2026-03-10 | 33                   | L   | 0.650      | -            | -                | -                | -         |   -10.29 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           44 |     3414 | 2026-03-09 | RUSTEC               | W   | 0.649      | -            | -                | -                | 1 (0.649) |     1.72 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           43 |     3461 | 2026-03-09 | MOUZ NXT             | L   | 0.644      | -            | -                | -                | -         |   -14.32 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           42 |     3516 | 2026-03-08 | BIG                  | W   | 0.639      | -            | -                | -                | -         |    13.86 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           41 |     3554 | 2026-03-08 | Acend                | W   | 0.637      | -            | -                | -                | -         |    10.05 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           40 |     3592 | 2026-03-07 | SINNERS Esports      | W   | 0.631      | 0.435        | 0.120 (0.033)    | -                | -         |    13.19 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           39 |     3681 | 2026-03-05 | Hashiras             | W   | 0.618      | -            | -                | -                | -         |     1.36 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           38 |     3726 | 2026-03-04 | EYEBALLERS           | W   | 0.612      | 0.435        | 0.127 (0.034)    | -                | -         |    12.95 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           37 |     3744 | 2026-03-04 | AM Gaming            | L   | 0.610      | -            | -                | -                | -         |    -9.78 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           36 |     3780 | 2026-03-03 | Lazer Cats           | W   | 0.604      | -            | -                | -                | -         |     2.41 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           35 |     4059 | 2026-02-25 | WW TEAM              | L   | 0.565      | -            | -                | -                | -         |    -9.57 | mag1k3Y, r3salt, Sdaim, SELLTER, tex1y   |
|           34 |     4208 | 2026-02-22 | OMEGA                | W   | 0.545      | -            | -                | -                | 1 (0.545) |     6.32 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           33 |     4236 | 2026-02-22 | NOVAQ                | W   | 0.544      | -            | -                | -                | 1 (0.544) |     1.96 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           32 |     4247 | 2026-02-21 | Sangal Esports       | W   | 0.543      | -            | -                | -                | 1 (0.543) |     3.75 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           31 |     4642 | 2026-02-14 | Oxuji Esports        | L   | 0.492      | -            | -                | -                | -         |    -7.84 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           30 |     4651 | 2026-02-14 | Acend                | L   | 0.492      | -            | -                | -                | -         |    -7.53 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           29 |     4665 | 2026-02-14 | Nuclear TigeRES      | L   | 0.491      | -            | -                | -                | -         |    -6.51 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           28 |     4680 | 2026-02-14 | 33                   | W   | 0.490      | -            | -                | -                | 1 (0.490) |     8.27 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           27 |     4812 | 2026-02-10 | OG                   | L   | 0.467      | -            | -                | -                | -         |    -7.91 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           26 |     4831 | 2026-02-10 | K27                  | L   | 0.465      | -            | -                | -                | -         |    -4.82 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           25 |     5031 | 2026-02-03 | K27                  | L   | 0.417      | -            | -                | -                | -         |    -4.75 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           24 |     5034 | 2026-02-03 | Illwill              | L   | 0.417      | -            | -                | -                | -         |    -9.42 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           23 |     5047 | 2026-02-02 | 33                   | W   | 0.413      | -            | -                | -                | 1 (0.413) |     6.09 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           22 |     5059 | 2026-02-02 | Nuclear TigeRES      | L   | 0.411      | -            | -                | -                | -         |    -5.23 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           21 |     5073 | 2026-02-01 | Oxuji Esports        | W   | 0.406      | -            | -                | -                | 1 (0.406) |     6.36 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           20 |     5086 | 2026-02-01 | Nemiga Gaming        | L   | 0.405      | -            | -                | -                | -         |    -5.46 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           19 |     5098 | 2026-01-31 | BankaPEPSI           | W   | 0.403      | -            | -                | -                | -         |     0.34 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           18 |     5194 | 2026-01-29 | SINNERS Esports      | L   | 0.384      | -            | -                | -                | -         |    -4.06 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           17 |     5233 | 2026-01-27 | IC Esports           | W   | 0.371      | -            | -                | -                | -         |     7.88 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           16 |     5252 | 2026-01-26 | FAVBET Team          | W   | 0.365      | -            | -                | -                | -         |     1.05 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           15 |     5297 | 2026-01-24 | GenOne               | W   | 0.353      | -            | -                | -                | -         |     1.27 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           14 |     5395 | 2026-01-22 | Gentle Mates         | L   | 0.339      | -            | -                | -                | -         |    -3.60 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           13 |     5403 | 2026-01-22 | Nemiga Gaming        | L   | 0.339      | -            | -                | -                | -         |    -4.95 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           12 |     5406 | 2026-01-22 | BIG Academy          | W   | 0.338      | -            | -                | -                | -         |     0.51 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           11 |     5419 | 2026-01-21 | BC.Game Esports      | W   | 0.335      | -            | -                | -                | -         |     2.62 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|           10 |     5446 | 2026-01-21 | EYEBALLERS           | L   | 0.332      | -            | -                | -                | -         |    -3.12 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            9 |     5460 | 2026-01-21 | ARCRED               | L   | 0.330      | -            | -                | -                | -         |    -5.70 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            8 |     5481 | 2026-01-19 | FORZE Reload         | W   | 0.319      | -            | -                | -                | -         |     0.39 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            7 |     5541 | 2026-01-17 | Ursa                 | W   | 0.306      | -            | -                | -                | -         |     1.10 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            6 |     5550 | 2026-01-17 | 1w Team              | W   | 0.306      | -            | -                | -                | -         |     5.21 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            5 |     5966 | 2025-12-16 | Magic                | L   | 0.093      | -            | -                | -                | -         |    -0.40 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            4 |     6083 | 2025-12-07 | K27                  | L   | 0.032      | -            | -                | -                | -         |    -0.37 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            3 |     6087 | 2025-12-07 | WW TEAM              | W   | 0.031      | -            | -                | -                | -         |     0.48 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            2 |     6094 | 2025-12-07 | K27                  | L   | 0.030      | -            | -                | -                | -         |    -0.34 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |
|            1 |     6116 | 2025-12-06 | WW TEAM              | W   | 0.024      | -            | -                | -                | -         |     0.37 | mag1k3Y, Sdaim, SELLTER, tex1y, yiksrezo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($88,200.77)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-01 |      1.000 | $22,000.00     | $22,000.00      |
| 2026-05-03 |      1.000 | $12,000.00     | $12,000.00      |
| 2026-04-10 |      0.859 | $22,000.00     | $18,895.56      |
| 2026-04-04 |      0.819 | $7,500.00      | $6,141.67       |
| 2026-04-03 |      0.812 | $22,000.00     | $17,868.89      |
| 2026-04-02 |      0.805 | $5,000.00      | $4,026.39       |
| 2026-03-12 |      0.666 | $2,000.00      | $1,332.22       |
| 2026-03-11 |      0.657 | $3,000.00      | $1,970.83       |
| 2026-03-05 |      0.619 | $2,000.00      | $1,238.24       |
| 2026-02-22 |      0.545 | $5,000.00      | $2,726.97       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
