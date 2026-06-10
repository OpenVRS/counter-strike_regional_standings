### Roster Details<br />
Team Name: MASONIC<br />
Roster: b0RUP, Botman, Frøslev, KralleJ, Noruyp<br />
Global Rank: [159](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [107]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  854.8<br />
<br />
Final Rank Value (854.8) = Starting Rank Value (1140.2) + Head To Head Adjustments (-285.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.143[<sup>2</sup>](#table1)
- LAN Wins: 0.792[<sup>2</sup>](#table1)

The average of these factors is 0.385<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1140.2
- 400 + ( ( 0.385 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1140.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.568
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           82 |      398 | 2026-05-23 | ASTRAL Esports            | L   | 1.000      | -            | -                | -                | -         |   -11.66 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           81 |      545 | 2026-05-20 | CYBERSHOKE Prospects      | L   | 1.000      | -            | -                | -                | -         |   -10.60 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           80 |      575 | 2026-05-19 | Project 91 Team           | W   | 1.000      | -            | -                | -                | -         |     3.52 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           79 |      622 | 2026-05-17 | IC Academy                | L   | 1.000      | -            | -                | -                | -         |   -16.06 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           78 |      629 | 2026-05-17 | Honvéd Esport             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     9.98 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           77 |      640 | 2026-05-16 | A Great Chaos             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.73 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           76 |      648 | 2026-05-16 | BASEMENT BOYS             | L   | 1.000      | -            | -                | -                | -         |    -7.91 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           75 |      657 | 2026-05-16 | Rune Eaters Esports       | L   | 1.000      | -            | -                | -                | -         |   -17.31 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           74 |      659 | 2026-05-16 | PURE                      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.38 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           73 |      725 | 2026-05-13 | G2 Ares                   | L   | 1.000      | -            | -                | -                | -         |   -10.93 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           72 |      765 | 2026-05-12 | Rune Eaters Esports       | W   | 1.000      | 0.143        | -                | 0.666 (0.095)    | -         |    12.89 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           71 |     1336 | 2026-04-26 | WOPA Esport               | L   | 0.913      | -            | -                | -                | -         |    -8.16 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           70 |     1359 | 2026-04-26 | WAZABI                    | W   | 0.911      | -            | -                | -                | 1 (0.911) |    15.56 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           69 |     1393 | 2026-04-25 | Linx Legacy Esport        | W   | 0.907      | -            | -                | -                | 1 (0.907) |     1.77 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           68 |     1417 | 2026-04-25 | G2 Ares                   | L   | 0.906      | -            | -                | -                | -         |   -10.28 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           67 |     1458 | 2026-04-24 | TNC Esport                | W   | 0.900      | 0.384        | 0.021 (0.007)    | 1.000 (0.346)    | -         |    14.70 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           66 |     1527 | 2026-04-22 | OLDBOYS                   | L   | 0.887      | -            | -                | -                | -         |   -19.93 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           65 |     1821 | 2026-04-08 | Persona Grata             | L   | 0.791      | -            | -                | -                | -         |   -16.14 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           64 |     1851 | 2026-04-07 | EC BANGA                  | W   | 0.785      | -            | -                | -                | -         |     1.21 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           63 |     2681 | 2026-03-27 | Rottweilers               | L   | 0.711      | -            | -                | -                | -         |   -18.63 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           62 |     2803 | 2026-03-24 | Ex-Zero Tenacity          | L   | 0.693      | -            | -                | -                | -         |   -12.37 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           61 |     2898 | 2026-03-23 | Home                      | W   | 0.686      | -            | -                | -                | -         |     1.69 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           60 |     3109 | 2026-03-19 | Ex-Zero Tenacity          | L   | 0.659      | -            | -                | -                | -         |   -11.99 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           59 |     3129 | 2026-03-18 | Home                      | L   | 0.654      | -            | -                | -                | -         |   -19.21 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           58 |     3133 | 2026-03-18 | ENCE                      | L   | 0.654      | -            | -                | -                | -         |   -14.28 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           57 |     3192 | 2026-03-17 | OMEGA                     | L   | 0.646      | -            | -                | -                | -         |    -7.90 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           56 |     3238 | 2026-03-16 | Players (European team)   | W   | 0.639      | -            | -                | -                | -         |     1.50 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           55 |     3312 | 2026-03-14 | Sashi Esport              | L   | 0.627      | -            | -                | -                | -         |    -6.90 | Avou, Botman, KralleJ, N4XX1S, Noruyp   |
|           54 |     3325 | 2026-03-14 | ECSTATIC                  | L   | 0.626      | -            | -                | -                | -         |    -5.82 | Avou, Botman, KralleJ, N4XX1S, Noruyp   |
|           53 |     3330 | 2026-03-14 | Sashi Esport              | W   | 0.625      | 0.356        | 0.007 (0.002)    | 0.484 (0.108)    | 1 (0.625) |    12.96 | Avou, Botman, KralleJ, N4XX1S, Noruyp   |
|           52 |     3541 | 2026-03-09 | Eternal premium           | L   | 0.594      | -            | -                | -                | -         |   -16.07 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           51 |     3549 | 2026-03-09 | Team Voca                 | L   | 0.594      | -            | -                | -                | -         |    -3.54 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           50 |     3561 | 2026-03-09 | Betclic Apogee Esports    | L   | 0.592      | -            | -                | -                | -         |    -4.67 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           49 |     3576 | 2026-03-09 | AM Gaming                 | W   | 0.591      | 0.341        | 0.016 (0.003)    | 0.749 (0.151)    | 1 (0.591) |    13.52 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           48 |     3602 | 2026-03-08 | 100 Thieves               | L   | 0.588      | -            | -                | -                | -         |    -1.95 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           47 |     3613 | 2026-03-08 | Evo Novo                  | W   | 0.587      | -            | -                | -                | 1 (0.587) |     0.59 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           46 |     3623 | 2026-03-08 | Sashi Esport              | L   | 0.587      | -            | -                | -                | -         |    -6.23 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           45 |     3632 | 2026-03-08 | Esport Academy Copenhagen | L   | 0.586      | -            | -                | -                | -         |    -5.31 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           44 |     3656 | 2026-03-08 | Johnny Speeds             | W   | 0.585      | 0.341        | 0.053 (0.011)    | 0.855 (0.170)    | 1 (0.585) |    14.82 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           43 |     3793 | 2026-03-05 | Ex-Zero Tenacity          | L   | 0.566      | -            | -                | -                | -         |   -13.04 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           42 |     3818 | 2026-03-04 | BASEMENT BOYS             | L   | 0.561      | -            | -                | -                | -         |    -5.45 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           41 |     4053 | 2026-02-27 | ENCE                      | W   | 0.526      | 0.384        | 0.010 (0.002)    | 0.548 (0.111)    | -         |     4.48 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           40 |     4113 | 2026-02-26 | Aurora Young Blud         | L   | 0.520      | -            | -                | -                | -         |   -14.55 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           39 |     4178 | 2026-02-25 | Cirahvi                   | W   | 0.512      | 0.384        | -                | 0.520 (0.102)    | -         |     3.23 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           38 |     4266 | 2026-02-23 | BC.Game Esports           | L   | 0.499      | -            | -                | -                | -         |    -6.88 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           37 |     4276 | 2026-02-23 | SINNERS Esports           | L   | 0.498      | -            | -                | -                | -         |    -1.95 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           36 |     4300 | 2026-02-22 | Sashi Esport              | L   | 0.494      | -            | -                | -                | -         |    -5.61 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           35 |     4306 | 2026-02-22 | BOSS                      | W   | 0.494      | -            | -                | -                | 1 (0.494) |     4.24 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           34 |     4325 | 2026-02-22 | Illwill                   | L   | 0.493      | -            | -                | -                | -         |    -6.07 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           33 |     4333 | 2026-02-22 | 9INE                      | W   | 0.493      | 0.341        | 0.009 (0.001)    | -                | -         |     5.67 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           32 |     4336 | 2026-02-22 | BC.Game Esports           | L   | 0.492      | -            | -                | -                | -         |    -6.91 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           31 |     4388 | 2026-02-21 | ECSTATIC                  | L   | 0.486      | -            | -                | -                | -         |    -6.27 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           30 |     4626 | 2026-02-16 | Bushido Wildcats          | L   | 0.454      | -            | -                | -                | -         |   -12.14 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           29 |     4862 | 2026-02-12 | ECSTATIC                  | L   | 0.427      | -            | -                | -                | -         |    -5.90 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           28 |     4869 | 2026-02-12 | KOLESIE                   | L   | 0.426      | -            | -                | -                | -         |    -4.55 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           27 |     4876 | 2026-02-12 | ECSTATIC                  | W   | 0.425      | 0.334        | 0.037 (0.005)    | -                | -         |     7.46 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           26 |     4951 | 2026-02-10 | VP.Prodigy                | L   | 0.411      | -            | -                | -                | -         |   -12.07 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           25 |     4966 | 2026-02-09 | PsychoFace                | L   | 0.406      | -            | -                | -                | -         |    -7.86 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           24 |     5019 | 2026-02-07 | TNC Esport                | W   | 0.393      | 0.396        | 0.021 (0.003)    | 1.000 (0.156)    | -         |     4.92 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           23 |     5023 | 2026-02-07 | VP.Prodigy                | L   | 0.392      | -            | -                | -                | -         |   -11.64 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           22 |     5080 | 2026-02-05 | Bushido Wildcats          | W   | 0.380      | -            | -                | -                | -         |     1.70 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           21 |     5108 | 2026-02-04 | Players (European team)   | W   | 0.372      | -            | -                | -                | -         |     0.48 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           20 |     5188 | 2026-02-01 | Eternal Fire              | L   | 0.353      | -            | -                | -                | -         |   -10.48 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           19 |     5278 | 2026-01-30 | Sashi Esport              | L   | 0.338      | -            | -                | -                | -         |    -4.39 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           18 |     5366 | 2026-01-26 | Acend                     | W   | 0.312      | 0.371        | 0.021 (0.002)    | 0.780 (0.090)    | -         |     7.23 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           17 |     5455 | 2026-01-23 | Phantom Esports           | W   | 0.294      | 0.396        | -                | 0.859 (0.100)    | -         |     5.63 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           16 |     5520 | 2026-01-22 | Persona Grata             | L   | 0.286      | -            | -                | -                | -         |    -7.67 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           15 |     5524 | 2026-01-22 | Eternal Fire              | L   | 0.285      | -            | -                | -                | -         |    -8.50 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           14 |     5554 | 2026-01-21 | FORZE Reload              | L   | 0.280      | -            | -                | -                | -         |    -8.07 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           13 |     5574 | 2026-01-20 | BRUTE                     | L   | 0.274      | -            | -                | -                | -         |    -8.35 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           12 |     5633 | 2026-01-18 | FORZE Reload              | W   | 0.258      | -            | -                | -                | -         |     0.67 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           11 |     5672 | 2026-01-17 | WOPA Esport               | W   | 0.253      | 0.396        | 0.019 (0.002)    | -                | -         |     4.46 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           10 |     5740 | 2026-01-16 | TNC Esport                | L   | 0.246      | -            | -                | -                | -         |    -5.20 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            9 |     5779 | 2026-01-15 | HYPERSPIRIT               | W   | 0.239      | -            | -                | -                | -         |     2.04 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            8 |     5801 | 2026-01-14 | Cirahvi                   | W   | 0.232      | -            | -                | -                | -         |     0.86 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            7 |     5810 | 2026-01-13 | Eternal Fire              | L   | 0.227      | -            | -                | -                | -         |    -6.86 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            6 |     5819 | 2026-01-13 | Illwill                   | L   | 0.226      | -            | -                | -                | -         |    -4.29 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            5 |     5824 | 2026-01-12 | ALLINNERS                 | W   | 0.221      | -            | -                | -                | -         |     0.47 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            4 |     5827 | 2026-01-12 | Cirahvi                   | W   | 0.220      | -            | -                | -                | -         |     0.78 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            3 |     5848 | 2026-01-10 | AaB esport                | L   | 0.207      | -            | -                | -                | -         |    -6.26 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            2 |     5850 | 2026-01-10 | Zajezdzacze               | W   | 0.205      | -            | -                | -                | -         |     0.29 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            1 |     5865 | 2026-01-06 | Ex-FUT Academy            | W   | 0.179      | -            | -                | -                | -         |     0.09 | Avou, Botman, Bukhavez, KralleJ, Noruyp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,669.45)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $1,743.00      | $1,743.00       |
| 2026-04-26 |      0.913 | $1,568.60      | $1,431.49       |
| 2026-03-15 |      0.633 | $782.00        | $494.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
