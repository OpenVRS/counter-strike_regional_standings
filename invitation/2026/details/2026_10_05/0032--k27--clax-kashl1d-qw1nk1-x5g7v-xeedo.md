### Roster Details<br />
Team Name: K27<br />
Roster: clax, kashl1d, qw1nk1, X5G7V, xeedo<br />
Global Rank: [32](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [26]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1435.2<br />
<br />
Final Rank Value (1435.2) = Starting Rank Value (1511.0) + Head To Head Adjustments (-75.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.522[<sup>1</sup>](#table2)
- Bounty Collected: 0.456[<sup>2</sup>](#table1)
- Opponent Network: 0.318[<sup>2</sup>](#table1)
- LAN Wins: 0.927[<sup>2</sup>](#table1)

The average of these factors is 0.556<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1511.0
- 400 + ( ( 0.556 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1511.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |       48 | 2026-10-02 | Nemesis           | W   | 1.000      | 0.417        | 0.157 (0.066)    | 0.774 (0.323)    | 1 (1.000) |    17.38 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           62 |      115 | 2026-10-02 | UPGRADE           | W   | 1.000      | 0.417        | -                | 0.755 (0.315)    | 1 (1.000) |     6.94 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           61 |      160 | 2026-10-01 | PRIVATE           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.03 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           60 |      190 | 2026-09-30 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.86 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           59 |      195 | 2026-09-30 | BAKS              | W   | 1.000      | 0.417        | -                | 0.497 (0.207)    | 1 (1.000) |     4.04 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           58 |      303 | 2026-09-27 | Eternal Fire      | L   | 1.000      | -            | -                | -                | -         |   -16.21 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           57 |      326 | 2026-09-27 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -18.13 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           56 |      344 | 2026-09-26 | PRIVATE           | W   | 1.000      | -            | -                | -                | -         |     3.83 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           55 |      373 | 2026-09-26 | EYEBALLERS        | W   | 1.000      | 0.500        | 0.088 (0.044)    | -                | 1 (1.000) |    12.71 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           54 |      413 | 2026-09-25 | GamerLegion       | L   | 1.000      | -            | -                | -                | -         |   -14.26 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           53 |      503 | 2026-09-24 | CYBERSHOKE        | W   | 1.000      | -            | -                | -                | -         |     7.44 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           52 |     1096 | 2026-09-11 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -22.34 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           51 |     1132 | 2026-09-10 | Nemiga            | W   | 1.000      | 0.435        | 0.149 (0.065)    | 1.000 (0.435)    | -         |    17.69 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           50 |     1155 | 2026-09-10 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -12.34 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           49 |     1176 | 2026-09-09 | WW                | W   | 1.000      | -            | -                | -                | -         |     5.13 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           48 |     1220 | 2026-09-09 | Virtus.pro        | W   | 1.000      | -            | -                | -                | -         |     8.60 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           47 |     1244 | 2026-09-08 | LP                | W   | 1.000      | 0.435        | -                | 0.457 (0.199)    | -         |     4.49 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           46 |     1312 | 2026-09-06 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -20.04 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           45 |     1327 | 2026-09-06 | Nordic Partners   | W   | 1.000      | -            | -                | -                | -         |     2.41 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           44 |     1339 | 2026-09-06 | Butterfly         | W   | 1.000      | -            | -                | -                | -         |     4.14 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           43 |     1461 | 2026-09-03 | Eternal Fire      | L   | 0.988      | -            | -                | -                | -         |   -18.55 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           42 |     1470 | 2026-09-03 | MIBR              | W   | 0.987      | 0.143        | 0.421 (0.059)    | -                | -         |    21.06 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           41 |     1480 | 2026-09-03 | Nemiga            | W   | 0.986      | -            | -                | -                | -         |    14.71 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           40 |     1507 | 2026-09-02 | GamerLegion       | W   | 0.980      | 0.143        | 0.299 (0.042)    | -                | -         |    19.32 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           39 |     1526 | 2026-09-02 | magic             | L   | 0.978      | -            | -                | -                | -         |   -10.21 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           38 |     1628 | 2026-08-30 | Nuclear TigeRES   | L   | 0.960      | -            | -                | -                | -         |   -19.60 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           37 |     1684 | 2026-08-29 | PRIVATE           | L   | 0.955      | -            | -                | -                | -         |   -26.76 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           36 |     1835 | 2026-08-26 | HOTU              | L   | 0.934      | -            | -                | -                | -         |   -15.53 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           35 |     1876 | 2026-08-25 | SPARTA            | W   | 0.928      | -            | -                | -                | -         |     2.02 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           34 |     1947 | 2026-08-23 | Rune Eaters       | W   | 0.913      | -            | -                | -                | -         |     4.35 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           33 |     2182 | 2026-08-14 | MIBR              | L   | 0.854      | -            | -                | -                | -         |    -9.11 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           32 |     2241 | 2026-08-12 | Falcons           | L   | 0.840      | -            | -                | -                | -         |    -3.17 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           31 |     2266 | 2026-08-09 | fnatic            | W   | 0.821      | 0.818        | 0.068 (0.046)    | 0.766 (0.515)    | 1 (0.821) |    12.07 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           30 |     2276 | 2026-08-09 | EYEBALLERS        | W   | 0.820      | 0.818        | 0.088 (0.059)    | 0.292 (0.196)    | 1 (0.820) |     9.84 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           29 |     2282 | 2026-08-09 | SAW               | W   | 0.819      | 0.818        | -                | 0.441 (0.295)    | 1 (0.819) |    10.50 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           28 |     2337 | 2026-08-08 | SINNERS           | W   | 0.812      | 0.818        | 0.106 (0.071)    | 0.705 (0.469)    | 1 (0.812) |    10.16 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           27 |     2366 | 2026-08-07 | Dark Tigre        | W   | 0.807      | -            | -                | -                | -         |     0.10 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           26 |     2587 | 2026-07-31 | Just Players      | L   | 0.760      | -            | -                | -                | -         |   -22.17 | azukay, kashl1d, qw1nk1, X5G7V, xeedo  |
|           25 |     2843 | 2026-07-23 | INFINITE          | L   | 0.708      | -            | -                | -                | -         |   -14.69 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           24 |     2884 | 2026-07-22 | Aurora            | L   | 0.699      | -            | -                | -                | -         |    -4.53 | clax, kashl1d, qw1nk1, X5G7V, xeedo    |
|           23 |     2962 | 2026-07-18 | HEROIC            | L   | 0.674      | -            | -                | -                | -         |   -10.69 | kashl1d, qw1nk1, shalfey, X5G7V, xeedo |
|           22 |     2970 | 2026-07-18 | Ninjas in Pyjamas | W   | 0.673      | 0.500        | 0.238 (0.080)    | 0.675 (0.227)    | -         |    13.41 | kashl1d, qw1nk1, shalfey, X5G7V, xeedo |
|           21 |     2995 | 2026-07-17 | 3DMAX             | W   | 0.667      | 0.500        | 0.330 (0.110)    | -                | -         |    12.93 | kashl1d, qw1nk1, shalfey, X5G7V, xeedo |
|           20 |     3007 | 2026-07-17 | Phantom           | W   | 0.666      | -            | -                | -                | -         |     3.07 | kashl1d, qw1nk1, shalfey, X5G7V, xeedo |
|           19 |     3042 | 2026-07-16 | Wildcard          | W   | 0.659      | -            | -                | -                | -         |     4.38 | kashl1d, qw1nk1, shalfey, X5G7V, xeedo |
|           18 |     3061 | 2026-07-15 | Ninjas in Pyjamas | L   | 0.652      | -            | -                | -                | -         |    -6.73 | kashl1d, qw1nk1, shalfey, X5G7V, xeedo |
|           17 |     3441 | 2026-06-23 | INFINITE          | L   | 0.507      | -            | -                | -                | -         |   -10.77 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           16 |     3442 | 2026-06-23 | Walczaki          | L   | 0.507      | -            | -                | -                | -         |   -14.42 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           15 |     3459 | 2026-06-21 | BBL               | W   | 0.492      | -            | -                | -                | -         |     6.74 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           14 |     3470 | 2026-06-20 | Acend             | W   | 0.487      | -            | -                | -                | -         |     2.75 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           13 |     3483 | 2026-06-19 | Virtus.pro        | L   | 0.481      | -            | -                | -                | -         |   -12.32 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           12 |     3493 | 2026-06-19 | SHISHKA           | W   | 0.479      | -            | -                | -                | -         |     0.12 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           11 |     3519 | 2026-06-17 | Nuclear TigeRES   | L   | 0.465      | -            | -                | -                | -         |   -11.47 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|           10 |     3523 | 2026-06-16 | 100 Thieves       | W   | 0.460      | -            | -                | -                | -         |     7.98 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            9 |     3570 | 2026-06-14 | Walczaki          | W   | 0.445      | -            | -                | -                | -         |     1.07 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            8 |     4037 | 2026-05-28 | Nuclear TigeRES   | L   | 0.334      | -            | -                | -                | -         |    -8.34 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            7 |     4047 | 2026-05-28 | Virtus.pro        | L   | 0.333      | -            | -                | -                | -         |    -8.62 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            6 |     4079 | 2026-05-27 | Butterfly         | W   | 0.327      | -            | -                | -                | -         |     0.80 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            5 |     4145 | 2026-05-25 | WW                | W   | 0.315      | -            | -                | -                | -         |     1.21 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            4 |     4153 | 2026-05-25 | PsychoFace        | W   | 0.314      | -            | -                | -                | -         |     0.24 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            3 |     4656 | 2026-05-11 | magic             | L   | 0.219      | -            | -                | -                | -         |    -3.63 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            2 |     4705 | 2026-05-10 | Iberian Soul      | L   | 0.211      | -            | -                | -                | -         |    -5.48 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |
|            1 |     4726 | 2026-05-09 | Falcons           | L   | 0.206      | -            | -                | -                | -         |    -1.07 | fame, kashl1d, qw1nk1, X5G7V, xeedo    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58,174.12)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-02 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-09-28 |      1.000 | $9,000.00      | $9,000.00       |
| 2026-08-23 |      0.914 | $10,000.00     | $9,135.15       |
| 2026-07-18 |      0.674 | $17,500.00     | $11,797.72      |
| 2026-06-28 |      0.542 | $2,000.00      | $1,083.49       |
| 2026-06-17 |      0.467 | $5,000.00      | $2,336.56       |
| 2026-05-28 |      0.335 | $2,000.00      | $669.58         |
| 2026-05-17 |      0.259 | $16,000.00     | $4,151.62       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
