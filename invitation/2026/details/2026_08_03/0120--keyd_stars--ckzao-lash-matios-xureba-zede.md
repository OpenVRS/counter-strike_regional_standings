### Roster Details<br />
Team Name: Keyd Stars<br />
Roster: ckzao, lash, matios, xureba, zede<br />
Global Rank: [120](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [26]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  929.5<br />
<br />
Final Rank Value (929.5) = Starting Rank Value (844.4) + Head To Head Adjustments (85.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.333[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.060[<sup>2</sup>](#table1)

The average of these factors is 0.229<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 844.4
- 400 + ( ( 0.229 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 844.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      193 | 2026-07-25 | Fluxo           | L   | 1.000      | -            | -                | -                | -         |    -6.45 | ckzao, matios, naitte, xureba, zede    |
|           49 |      234 | 2026-07-24 | ALKA            | W   | 1.000      | 0.354        | -                | 0.394 (0.140)    | 0 (0.000) |     6.96 | ckzao, matios, naitte, xureba, zede    |
|           48 |      412 | 2026-07-17 | Imperial        | L   | 1.000      | -            | -                | -                | -         |    -5.85 | ckzao, lash, matios, xureba, zede      |
|           47 |      464 | 2026-07-15 | Bounty Hunters  | L   | 1.000      | -            | -                | -                | -         |   -11.68 | ckzao, lash, matios, xureba, zede      |
|           46 |      513 | 2026-07-12 | BESTIA          | L   | 1.000      | -            | -                | -                | -         |    -7.74 | ckzao, lash, matios, xureba, zede      |
|           45 |      549 | 2026-07-11 | Bounty Hunters  | W   | 1.000      | 0.371        | 0.046 (0.017)    | 0.600 (0.222)    | 0 (0.000) |    19.84 | ckzao, lash, matios, xureba, zede      |
|           44 |      585 | 2026-07-09 | Yawara          | W   | 1.000      | 0.371        | 0.035 (0.013)    | 0.556 (0.206)    | 0 (0.000) |    14.59 | ckzao, lash, matios, xureba, zede      |
|           43 |      599 | 2026-07-08 | MIBR Academy    | W   | 1.000      | 0.371        | -                | 0.573 (0.212)    | 0 (0.000) |    10.18 | ckzao, lash, matios, xureba, zede      |
|           42 |      604 | 2026-07-08 | Bounty Hunters  | L   | 1.000      | -            | -                | -                | -         |   -10.67 | ckzao, lash, matios, xureba, zede      |
|           41 |      616 | 2026-07-06 | GameHunters     | W   | 1.000      | 0.354        | -                | 0.460 (0.163)    | 0 (0.000) |     8.21 | ckzao, lash, matios, xureba, zede      |
|           40 |      773 | 2026-06-27 | Fluxo           | L   | 0.955      | -            | -                | -                | -         |    -5.77 | ckzao, lash, matios, xureba, zede      |
|           39 |      793 | 2026-06-26 | Yawara          | W   | 0.948      | 0.371        | 0.035 (0.012)    | 0.556 (0.195)    | 0 (0.000) |    14.94 | ckzao, lash, matios, xureba, zede      |
|           38 |      814 | 2026-06-25 | UNO MILLE       | L   | 0.940      | -            | -                | -                | -         |   -15.69 | ckzao, lash, matios, xureba, zede      |
|           37 |      836 | 2026-06-24 | Yawara          | W   | 0.934      | 0.371        | 0.035 (0.012)    | 0.556 (0.193)    | 0 (0.000) |    15.02 | ckzao, lash, matios, xureba, zede      |
|           36 |     1601 | 2026-05-24 | Bounty Hunters  | L   | 0.727      | -            | -                | -                | -         |    -6.99 | CutzMeretz, lash, matios, xureba, zede |
|           35 |     1634 | 2026-05-23 | LP              | L   | 0.722      | -            | -                | -                | -         |    -6.18 | KAOS, lash, matios, xureba, zede       |
|           34 |     1639 | 2026-05-23 | paiN Academy    | W   | 0.721      | 0.354        | -                | 0.532 (0.136)    | 0 (0.000) |     6.13 | lash, matios, naitte, xureba, zede     |
|           33 |     1690 | 2026-05-22 | Isurus          | W   | 0.716      | 0.333        | 0.039 (0.009)    | 0.766 (0.183)    | 0 (0.000) |    11.58 | CutzMeretz, lash, matios, xureba, zede |
|           32 |     1697 | 2026-05-22 | METANOIA Wolves | W   | 0.714      | -            | -                | -                | -         |     7.34 | CutzMeretz, lash, matios, xureba, zede |
|           31 |     1860 | 2026-05-17 | Galorys         | W   | 0.681      | 0.333        | 0.010 (0.002)    | -                | -         |    13.96 | CutzMeretz, lash, matios, xureba, zede |
|           30 |     1914 | 2026-05-15 | METANOIA Wolves | W   | 0.669      | -            | -                | -                | -         |     7.54 | CutzMeretz, lash, matios, xureba, zede |
|           29 |     1952 | 2026-05-14 | Fake do Biru    | L   | 0.660      | -            | -                | -                | -         |    -9.94 | CutzMeretz, lash, matios, xureba, zede |
|           28 |     2016 | 2026-05-12 | Vasco           | W   | 0.647      | -            | -                | -                | -         |     6.88 | CutzMeretz, lash, matios, xureba, zede |
|           27 |     2156 | 2026-05-08 | Bounty Hunters  | L   | 0.620      | -            | -                | -                | -         |    -4.82 | CutzMeretz, lash, matios, xureba, zede |
|           26 |     2238 | 2026-05-03 | paiN Academy    | W   | 0.588      | -            | -                | -                | -         |     5.05 | CutzMeretz, lash, matios, xureba, zede |
|           25 |     2241 | 2026-05-03 | UNO MILLE       | L   | 0.588      | -            | -                | -                | -         |   -10.32 | CutzMeretz, lash, matios, xureba, zede |
|           24 |     2273 | 2026-05-02 | MIBR Academy    | W   | 0.582      | -            | -                | -                | -         |     7.46 | CutzMeretz, lash, matios, xureba, zede |
|           23 |     2355 | 2026-05-01 | R2              | W   | 0.573      | -            | -                | -                | -         |     4.17 | CutzMeretz, lash, matios, xureba, zede |
|           22 |     2422 | 2026-04-29 | Bounty Hunters  | L   | 0.562      | -            | -                | -                | -         |    -4.54 | CutzMeretz, lash, matios, xureba, zede |
|           21 |     2427 | 2026-04-29 | BESTIA Academy  | W   | 0.561      | -            | -                | -                | -         |     4.89 | CutzMeretz, lash, matios, xureba, zede |
|           20 |     2459 | 2026-04-28 | Turma do Pagode | W   | 0.555      | 0.363        | 0.013 (0.003)    | -                | -         |    10.69 | CutzMeretz, lash, matios, xureba, zede |
|           19 |     2500 | 2026-04-27 | Fluxo           | W   | 0.549      | 0.363        | 0.078 (0.015)    | -                | -         |    15.55 | CutzMeretz, lash, matios, xureba, zede |
|           18 |     2554 | 2026-04-26 | Galorys         | L   | 0.542      | -            | -                | -                | -         |    -4.79 | CutzMeretz, lash, matios, xureba, zede |
|           17 |     2640 | 2026-04-25 | Turma do Pagode | L   | 0.534      | -            | -                | -                | -         |    -6.17 | CutzMeretz, lash, matios, xureba, zede |
|           16 |     2686 | 2026-04-24 | Fluxo           | L   | 0.528      | -            | -                | -                | -         |    -1.46 | CutzMeretz, lash, matios, xureba, zede |
|           15 |     2694 | 2026-04-24 | Fake do Biru    | W   | 0.528      | 0.362        | 0.016 (0.003)    | -                | -         |     8.96 | CutzMeretz, lash, matios, xureba, zede |
|           14 |     2706 | 2026-04-24 | METANOIA Wolves | L   | 0.527      | -            | -                | -                | -         |   -10.29 | CutzMeretz, lash, matios, xureba, zede |
|           13 |     2728 | 2026-04-23 | Legacy          | L   | 0.523      | -            | -                | -                | -         |    -0.10 | CutzMeretz, lash, matios, xureba, zede |
|           12 |     2766 | 2026-04-22 | Crashers        | W   | 0.516      | -            | -                | -                | 1 (0.516) |     4.60 | CutzMeretz, lash, matios, xureba, zede |
|           11 |     3029 | 2026-04-09 | Fake do Biru    | L   | 0.428      | -            | -                | -                | -         |    -6.35 | CutzMeretz, lash, matios, xureba, zede |
|           10 |     3057 | 2026-04-08 | UNO MILLE       | W   | 0.421      | -            | -                | -                | -         |     5.08 | CutzMeretz, lash, matios, xureba, zede |
|            9 |     3113 | 2026-04-06 | Crashers        | W   | 0.409      | -            | -                | -                | -         |     3.75 | CutzMeretz, lash, matios, xureba, zede |
|            8 |     3378 | 2026-04-02 | Fake do Biru    | L   | 0.382      | -            | -                | -                | -         |    -6.13 | CutzMeretz, lash, matios, xureba, zede |
|            7 |     3439 | 2026-04-02 | GameHunters     | W   | 0.379      | -            | -                | -                | -         |     4.46 | CutzMeretz, lash, matios, xureba, zede |
|            6 |     3487 | 2026-04-01 | Turma do Pagode | L   | 0.375      | -            | -                | -                | -         |    -4.46 | CutzMeretz, lash, matios, xureba, zede |
|            5 |     3521 | 2026-04-01 | paiN Academy    | W   | 0.373      | -            | -                | -                | -         |     3.42 | CutzMeretz, lash, matios, xureba, zede |
|            4 |     3569 | 2026-03-31 | Vasco           | W   | 0.369      | -            | -                | -                | -         |     4.14 | CutzMeretz, lash, matios, xureba, zede |
|            3 |     3603 | 2026-03-31 | LP              | W   | 0.367      | 0.769        | 0.057 (0.016)    | 0.910 (0.256)    | -         |     9.20 | CutzMeretz, lash, matios, xureba, zede |
|            2 |     3725 | 2026-03-29 | ALKA            | W   | 0.356      | -            | -                | -                | -         |     3.02 | CutzMeretz, lash, matios, xureba, zede |
|            1 |     3936 | 2026-03-26 | MIBR Academy    | L   | 0.335      | -            | -                | -                | -         |    -6.16 | CutzMeretz, lash, matios, xureba, zede |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,898.74)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-06-28 |      0.963 | $750.00        | $721.96         |
| 2026-05-24 |      0.729 | $750.00        | $547.04         |
| 2026-05-24 |      0.728 | $1,750.00      | $1,274.43       |
| 2026-04-09 |      0.428 | $2,000.00      | $855.31         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
