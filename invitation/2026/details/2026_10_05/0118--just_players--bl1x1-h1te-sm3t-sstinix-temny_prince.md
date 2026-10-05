### Roster Details<br />
Team Name: Just Players<br />
Roster: bl1x1, h1te, sm3t, sstiNiX, Temny Prince<br />
Global Rank: [118](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [86]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  974.2<br />
<br />
Final Rank Value (974.2) = Starting Rank Value (943.5) + Head To Head Adjustments (30.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.328[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.284[<sup>2</sup>](#table1)
- LAN Wins: 0.133[<sup>2</sup>](#table1)

The average of these factors is 0.272<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.5
- 400 + ( ( 0.272 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 943.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |      523 | 2026-09-24 | fnatic               | L   | 1.000      | -            | -                | -                | -         |    -2.59 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           78 |      539 | 2026-09-24 | Nemiga               | L   | 1.000      | -            | -                | -                | -         |    -1.41 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           77 |      582 | 2026-09-23 | Bushido Wildcats     | W   | 1.000      | 0.384        | 0.027 (0.010)    | 1.000 (0.384)    | 0 (0.000) |    18.40 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           76 |      606 | 2026-09-23 | SPARTA               | L   | 1.000      | -            | -                | -                | -         |   -11.95 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           75 |      633 | 2026-09-22 | UPGRADE              | L   | 1.000      | -            | -                | -                | -         |    -7.46 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           74 |      672 | 2026-09-22 | ENCE                 | L   | 1.000      | -            | -                | -                | -         |   -16.30 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           73 |      735 | 2026-09-19 | Spirit Academy       | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.91 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           72 |      745 | 2026-09-19 | Leo                  | W   | 1.000      | 0.396        | 0.017 (0.007)    | 0.625 (0.248)    | 0 (0.000) |    15.67 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           71 |      783 | 2026-09-18 | BET-M                | L   | 1.000      | -            | -                | -                | -         |   -10.13 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           70 |      851 | 2026-09-17 | Banda Chuya          | W   | 1.000      | 0.384        | -                | 0.727 (0.280)    | 0 (0.000) |     8.00 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           69 |      883 | 2026-09-16 | NAVI Junior          | L   | 1.000      | -            | -                | -                | -         |   -14.16 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           68 |      905 | 2026-09-15 | Aritmije             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.16 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           67 |      910 | 2026-09-15 | Black Phoenix        | W   | 1.000      | 0.396        | 0.035 (0.014)    | 1.000 (0.396)    | 0 (0.000) |    17.31 | bl1x1, h1te, sm3t, sstiNiX, Temny Prince  |
|           66 |     1018 | 2026-09-12 | Nemiga               | L   | 1.000      | -            | -                | -                | -         |    -1.41 | bl1x1, h1te, sm3t, Something, sstiNiX     |
|           65 |     1196 | 2026-09-09 | EAC                  | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.596 (0.229)    | 0 (0.000) |    20.28 | bl1x1, h1te, sm3t, Something, sstiNiX     |
|           64 |     1324 | 2026-09-06 | PsychoFace           | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.83 | bl1x1, h1te, sm3t, Something, sstiNiX     |
|           63 |     1375 | 2026-09-05 | Lavked               | L   | 1.000      | -            | -                | -                | -         |   -15.84 | bl1x1, h1te, sm3t, Something, sstiNiX     |
|           62 |     1536 | 2026-09-01 | SPARTA               | W   | 0.976      | 0.384        | -                | 0.788 (0.296)    | -         |    18.23 | h1te, shg, sm3t, Something, sstiNiX       |
|           61 |     1707 | 2026-08-29 | Spirit Academy       | L   | 0.952      | -            | -                | -                | -         |   -14.27 | D9D9VOLODYA, faydett, h1te, sm3t, sstiNiX |
|           60 |     1739 | 2026-08-28 | ex-RUSTEC            | L   | 0.947      | -            | -                | -                | -         |   -10.74 | D9D9VOLODYA, faydett, h1te, sm3t, sstiNiX |
|           59 |     1781 | 2026-08-27 | INOX Division        | L   | 0.941      | -            | -                | -                | -         |    -8.55 | h1te, shg, sm3t, Something, sstiNiX       |
|           58 |     1878 | 2026-08-25 | Drip Too Hard        | W   | 0.928      | -            | -                | -                | -         |     6.63 | h1te, shg, sm3t, Something, sstiNiX       |
|           57 |     1936 | 2026-08-23 | ex-Zero Tenacity     | L   | 0.914      | -            | -                | -                | -         |   -14.82 | h1te, shg, sm3t, Something, sstiNiX       |
|           56 |     1987 | 2026-08-21 | HYPERSPIRIT          | W   | 0.901      | -            | -                | -                | -         |     9.70 | h1te, sm3t, Something, sowalio, sstiNiX   |
|           55 |     2088 | 2026-08-18 | PCIFIC               | W   | 0.878      | -            | -                | -                | -         |    12.61 | h1te, sm3t, Something, sowalio, sstiNiX   |
|           54 |     2171 | 2026-08-14 | ENCE                 | L   | 0.855      | -            | -                | -                | -         |    -8.63 | h1te, sm3t, Something, spirit, sstiNiX    |
|           53 |     2226 | 2026-08-13 | MOUZ NXT             | L   | 0.845      | -            | -                | -                | -         |   -14.31 | h1te, sm3t, Something, spirit, sstiNiX    |
|           52 |     2406 | 2026-08-07 | Butterfly            | L   | 0.805      | -            | -                | -                | -         |    -8.89 | h1te, sm3t, Something, spirit, sstiNiX    |
|           51 |     2447 | 2026-08-05 | Gothic               | W   | 0.792      | -            | -                | -                | -         |     5.45 | h1te, sm3t, Something, spirit, sstiNiX    |
|           50 |     2457 | 2026-08-04 | Enjoy                | W   | 0.787      | -            | -                | -                | -         |     7.68 | h1te, sm3t, Something, spirit, sstiNiX    |
|           49 |     2467 | 2026-08-04 | Nuclear TigeRES      | L   | 0.785      | -            | -                | -                | -         |    -3.90 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           48 |     2490 | 2026-08-03 | Banda Chuya          | L   | 0.779      | -            | -                | -                | -         |   -17.54 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           47 |     2543 | 2026-08-01 | Black Phoenix        | L   | 0.768      | -            | -                | -                | -         |   -11.83 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           46 |     2547 | 2026-08-01 | Sashi                | L   | 0.767      | -            | -                | -                | -         |    -6.35 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           45 |     2587 | 2026-07-31 | K27                  | W   | 0.760      | 0.384        | 0.121 (0.035)    | 0.840 (0.245)    | -         |    22.17 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           44 |     2614 | 2026-07-30 | Inner Circle Academy | W   | 0.754      | 0.384        | -                | 0.802 (0.233)    | -         |    15.97 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           43 |     2617 | 2026-07-30 | Drama                | W   | 0.754      | -            | -                | -                | -         |     7.56 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           42 |     2648 | 2026-07-29 | G2 Ares              | W   | 0.747      | -            | -                | -                | -         |    11.43 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           41 |     2684 | 2026-07-28 | Butterfly            | L   | 0.740      | -            | -                | -                | -         |    -9.25 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           40 |     2705 | 2026-07-27 | Inner Circle Academy | W   | 0.734      | 0.435        | -                | 0.802 (0.256)    | -         |    16.72 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           39 |     2731 | 2026-07-27 | Drip Too Hard        | W   | 0.732      | -            | -                | -                | -         |     5.07 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           38 |     2785 | 2026-07-25 | Black Phoenix        | W   | 0.720      | 0.384        | 0.035 (0.010)    | 1.000 (0.277)    | -         |    13.11 | h1te, kAlash, sm3t, spirit, sstiNiX       |
|           37 |     2788 | 2026-07-25 | ex-RUSTEC            | L   | 0.719      | -            | -                | -                | -         |   -10.23 | h1te, sm3t, Something, spirit, sstiNiX    |
|           36 |     2846 | 2026-07-23 | Butterfly            | L   | 0.707      | -            | -                | -                | -         |    -8.32 | h1te, kAlash, reNIK, sm3t, sstiNiX        |
|           35 |     2852 | 2026-07-23 | Saint Sinners        | W   | 0.707      | -            | -                | -                | -         |     1.01 | h1te, kAlash, reNIK, sm3t, sstiNiX        |
|           34 |     2863 | 2026-07-23 | CYBERSHOKE           | L   | 0.705      | -            | -                | -                | -         |    -3.96 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           33 |     2887 | 2026-07-22 | Color                | L   | 0.699      | -            | -                | -                | -         |    -9.03 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           32 |     2893 | 2026-07-21 | ex-RUSTEC            | L   | 0.694      | -            | -                | -                | -         |   -16.71 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           31 |     2922 | 2026-07-20 | Walczaki             | W   | 0.685      | 0.371        | 0.044 (0.011)    | -                | -         |    14.54 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           30 |     2973 | 2026-07-18 | QUAZAR               | L   | 0.673      | -            | -                | -                | -         |    -8.54 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           29 |     2990 | 2026-07-17 | Spirit Academy       | W   | 0.669      | -            | -                | -                | 1 (0.669) |     9.57 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           28 |     3012 | 2026-07-17 | NEW VISION           | W   | 0.666      | -            | -                | -                | 1 (0.666) |     2.27 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           27 |     3017 | 2026-07-17 | PRIVATE              | L   | 0.665      | -            | -                | -                | -         |    -8.23 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           26 |     3043 | 2026-07-16 | WW                   | W   | 0.659      | 0.371        | 0.042 (0.010)    | -                | -         |    15.42 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           25 |     3062 | 2026-07-15 | Lavked               | W   | 0.652      | -            | -                | -                | -         |    10.08 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           24 |     3087 | 2026-07-13 | Entropy              | L   | 0.640      | -            | -                | -                | -         |   -13.51 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           23 |     3108 | 2026-07-12 | GenOne               | L   | 0.634      | -            | -                | -                | -         |    -3.29 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           22 |     3115 | 2026-07-12 | Drama                | W   | 0.633      | -            | -                | -                | -         |     6.85 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           21 |     3155 | 2026-07-10 | WBT Academy          | L   | 0.619      | -            | -                | -                | -         |   -12.95 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           20 |     3207 | 2026-07-06 | Lavked               | W   | 0.592      | -            | -                | -                | -         |     8.97 | h1te, reNIK, sm3t, spirit, sstiNiX        |
|           19 |     3283 | 2026-07-01 | SAW Youngsters       | L   | 0.560      | -            | -                | -                | -         |   -10.96 | em0k1d, h1te, sm3t, spirit, sstiNiX       |
|           18 |     3324 | 2026-06-29 | Drama                | L   | 0.546      | -            | -                | -                | -         |   -11.89 | h1te, sm3t, Something, spirit, sstiNiX    |
|           17 |     3378 | 2026-06-27 | OlyBet               | W   | 0.532      | -            | -                | -                | -         |     1.06 | h1te, sm3t, Something, spirit, sstiNiX    |
|           16 |     3972 | 2026-05-30 | OG                   | L   | 0.345      | -            | -                | -                | -         |    -5.65 | h1te, sm3t, Something, spirit, sstiNiX    |
|           15 |     3981 | 2026-05-29 | GenOne               | L   | 0.341      | -            | -                | -                | -         |    -1.75 | h1te, sm3t, Something, spirit, sstiNiX    |
|           14 |     4046 | 2026-05-28 | BBL                  | W   | 0.333      | 0.384        | 0.048 (0.006)    | -                | -         |     9.78 | h1te, sm3t, Something, spirit, sstiNiX    |
|           13 |     4062 | 2026-05-28 | Acend                | W   | 0.332      | 0.396        | 0.061 (0.008)    | -                | -         |     8.63 | h1te, sm3t, Something, spirit, sstiNiX    |
|           12 |     4117 | 2026-05-26 | ex-Zero Tenacity     | W   | 0.320      | -            | -                | -                | -         |     5.01 | h1te, sm3t, Something, spirit, sstiNiX    |
|           11 |     4152 | 2026-05-25 | ALGO                 | W   | 0.314      | -            | -                | -                | -         |     1.54 | h1te, sm3t, Something, spirit, sstiNiX    |
|           10 |     4173 | 2026-05-25 | Lazer Cats           | W   | 0.312      | -            | -                | -                | -         |     6.83 | h1te, sm3t, Something, spirit, sstiNiX    |
|            9 |     4256 | 2026-05-23 | Nordic Partners      | W   | 0.299      | -            | -                | -                | -         |     5.68 | h1te, sm3t, Something, spirit, sstiNiX    |
|            8 |     4272 | 2026-05-23 | Bushido Wildcats     | L   | 0.298      | -            | -                | -                | -         |    -3.57 | h1te, sm3t, Something, spirit, sstiNiX    |
|            7 |     4288 | 2026-05-22 | Rune Eaters          | L   | 0.294      | -            | -                | -                | -         |    -1.46 | h1te, sm3t, Something, spirit, sstiNiX    |
|            6 |     4327 | 2026-05-21 | ex-RUBY              | L   | 0.288      | -            | -                | -                | -         |    -6.15 | h1te, sm3t, Something, spirit, sstiNiX    |
|            5 |     4334 | 2026-05-21 | Lilmix               | W   | 0.287      | -            | -                | -                | -         |     1.66 | h1te, sm3t, Something, spirit, sstiNiX    |
|            4 |     4441 | 2026-05-18 | SPARTA               | W   | 0.265      | -            | -                | -                | -         |     3.60 | h1te, sm3t, Something, spirit, sstiNiX    |
|            3 |     4465 | 2026-05-17 | OlyBet               | W   | 0.259      | -            | -                | -                | -         |     0.62 | h1te, sm3t, Something, spirit, sstiNiX    |
|            2 |     4509 | 2026-05-15 | ex-Zero Tenacity     | W   | 0.247      | -            | -                | -                | -         |     4.00 | h1te, sm3t, Something, spirit, sstiNiX    |
|            1 |     4532 | 2026-05-14 | Hashiras             | W   | 0.241      | -            | -                | -                | -         |     1.26 | h1te, sm3t, Something, spirit, sstiNiX    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,268.23)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      0.960 | $638.00        | $612.65         |
| 2026-08-08 |      0.814 | $1,250.00      | $1,017.91       |
| 2026-08-02 |      0.774 | $1,250.00      | $968.04         |
| 2026-07-24 |      0.713 | $1,000.00      | $712.68         |
| 2026-07-18 |      0.674 | $250.00        | $168.54         |
| 2026-05-31 |      0.354 | $1,000.00      | $354.32         |
| 2026-05-30 |      0.347 | $1,250.00      | $434.10         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
