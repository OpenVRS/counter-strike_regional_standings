### Roster Details<br />
Team Name: Butterfly<br />
Roster: ayano, Forester, k1ssly, Kurama, nitzie<br />
Global Rank: [80](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [58]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1056.0<br />
<br />
Final Rank Value (1056.0) = Starting Rank Value (1140.1) + Head To Head Adjustments (-84.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.336[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.630[<sup>2</sup>](#table1)

The average of these factors is 0.382<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1140.1
- 400 + ( ( 0.382 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1140.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           80 |       38 | 2026-08-01 | Black Phoenix        | L   | 1.000      | -            | -                | -                | -         |   -20.11 | ayano, Forester, k1ssly, Kurama, nitzie  |
|           79 |       84 | 2026-07-30 | ex-1win              | W   | 1.000      | 0.384        | 0.082 (0.031)    | 0.673 (0.259)    | -         |    19.05 | ax1nty, Forester, k1ssly, Kurama, nitzie |
|           78 |      125 | 2026-07-28 | Just Players         | W   | 1.000      | 0.384        | -                | 0.819 (0.315)    | -         |    13.25 | ayano, Forester, k1ssly, Kurama, nitzie  |
|           77 |      181 | 2026-07-26 | SAW Youngsters       | W   | 1.000      | 0.384        | -                | 0.622 (0.239)    | -         |     6.93 | ayano, Forester, k1ssly, Kurama, nitzie  |
|           76 |      236 | 2026-07-24 | G2 Ares              | L   | 1.000      | -            | -                | -                | -         |   -18.66 | ayano, Forester, k1ssly, Kurama, nitzie  |
|           75 |      286 | 2026-07-22 | benched gods         | W   | 1.000      | -            | -                | -                | -         |     5.14 | ayano, Forester, k1ssly, Kurama, nitzie  |
|           74 |      909 | 2026-06-19 | Walczaki             | L   | 0.898      | -            | -                | -                | -         |    -6.99 | ayano, k1ssly, Kurama, nitzie, smith     |
|           73 |      915 | 2026-06-18 | INFINITE             | L   | 0.893      | -            | -                | -                | -         |    -5.47 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           72 |      979 | 2026-06-14 | Nuclear TigeRES      | W   | 0.866      | 0.371        | 0.083 (0.027)    | 0.733 (0.235)    | -         |    20.82 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           71 |     1022 | 2026-06-13 | Misa                 | W   | 0.859      | 0.371        | -                | 0.728 (0.231)    | -         |     4.93 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           70 |     1030 | 2026-06-13 | brazylijski luz      | L   | 0.858      | -            | -                | -                | -         |   -23.19 | ayano, k1ssly, K1yotaka, Kurama, nitzie  |
|           69 |     1079 | 2026-06-11 | Bebop                | L   | 0.847      | -            | -                | -                | -         |   -20.77 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           68 |     1112 | 2026-06-09 | Virtus.pro           | L   | 0.833      | -            | -                | -                | -         |    -3.69 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           67 |     1120 | 2026-06-09 | ex-MANA              | W   | 0.831      | 0.371        | -                | 0.637 (0.196)    | -         |     4.25 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           66 |     1222 | 2026-06-05 | Misa                 | L   | 0.806      | -            | -                | -                | -         |   -21.72 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           65 |     1492 | 2026-05-27 | K27                  | L   | 0.747      | -            | -                | -                | -         |    -4.08 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           64 |     1573 | 2026-05-25 | SPARTA               | W   | 0.733      | 0.396        | 0.023 (0.007)    | 0.994 (0.289)    | 1 (0.733) |     7.89 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           63 |     1585 | 2026-05-25 | Athlon               | W   | 0.732      | -            | -                | -                | 1 (0.732) |     0.44 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           62 |     1590 | 2026-05-25 | Nuclear TigeRES      | L   | 0.731      | -            | -                | -                | -         |    -7.36 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           61 |     1640 | 2026-05-23 | CYBERSHOKE Prospects | W   | 0.721      | -            | -                | -                | 1 (0.721) |    12.81 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           60 |     1653 | 2026-05-23 | BAKS                 | W   | 0.720      | -            | -                | -                | 1 (0.720) |     7.96 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           59 |     1668 | 2026-05-23 | Spirit Academy Black | W   | 0.719      | -            | -                | -                | 1 (0.719) |     1.52 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           58 |     1695 | 2026-05-22 | eternal premium      | W   | 0.714      | -            | -                | -                | 1 (0.714) |     2.41 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           57 |     1704 | 2026-05-22 | Aurora Young Blud    | W   | 0.714      | -            | -                | -                | 1 (0.714) |     1.26 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           56 |     1713 | 2026-05-22 | CYBERSHOKE Prospects | L   | 0.713      | -            | -                | -                | -         |    -9.72 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           55 |     1821 | 2026-05-19 | FOKUS                | L   | 0.694      | -            | -                | -                | -         |    -5.19 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           54 |     1901 | 2026-05-16 | Johnny Speeds        | W   | 0.672      | 0.435        | 0.039 (0.011)    | -                | -         |     9.80 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           53 |     1938 | 2026-05-15 | Sashi                | L   | 0.665      | -            | -                | -                | -         |    -8.53 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           52 |     2035 | 2026-05-12 | SPARTA               | L   | 0.645      | -            | -                | -                | -         |   -12.55 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           51 |     2043 | 2026-05-11 | FAVBET               | W   | 0.643      | -            | -                | -                | -         |     3.43 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           50 |     2053 | 2026-05-11 | los kogutos          | W   | 0.640      | -            | -                | -                | -         |     1.78 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           49 |     2096 | 2026-05-10 | FAVBET               | W   | 0.633      | -            | -                | -                | -         |     3.80 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           48 |     2142 | 2026-05-09 | Nuclear TigeRES      | L   | 0.625      | -            | -                | -                | -         |    -6.75 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           47 |     2169 | 2026-05-07 | Black Phoenix        | W   | 0.614      | 0.384        | 0.015 (0.003)    | 1.000 (0.236)    | -         |     6.71 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           46 |     2185 | 2026-05-06 | ex-RUBY              | L   | 0.608      | -            | -                | -                | -         |    -8.84 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           45 |     2194 | 2026-05-06 | Black Phoenix        | W   | 0.606      | 0.384        | 0.015 (0.003)    | 1.000 (0.233)    | -         |     7.08 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           44 |     2256 | 2026-05-03 | GenOne               | W   | 0.586      | 0.384        | 0.033 (0.007)    | 1.000 (0.225)    | -         |     4.38 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           43 |     2313 | 2026-05-02 | Bebop                | W   | 0.577      | -            | -                | -                | -         |     0.76 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           42 |     2365 | 2026-05-01 | Walczaki             | L   | 0.571      | -            | -                | -                | -         |    -7.31 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           41 |     2399 | 2026-04-30 | HEROIC Academy       | W   | 0.566      | -            | -                | -                | -         |     2.40 | ayano, HeCkBNk, k1ssly, Kurama, nitzie   |
|           40 |     2719 | 2026-04-24 | Alliance             | L   | 0.526      | -            | -                | -                | -         |    -0.74 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           39 |     2776 | 2026-04-22 | FAVBET               | W   | 0.513      | -            | -                | -                | -         |     2.78 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           38 |     2807 | 2026-04-20 | ex-RUBY              | L   | 0.500      | -            | -                | -                | -         |   -12.42 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           37 |     2862 | 2026-04-18 | Lavked               | W   | 0.485      | -            | -                | -                | -         |     4.22 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           36 |     2876 | 2026-04-17 | TDK                  | L   | 0.478      | -            | -                | -                | -         |    -7.13 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           35 |     2899 | 2026-04-15 | CYBERSHOKE           | W   | 0.466      | 0.435        | 0.029 (0.006)    | -                | -         |     8.32 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           34 |     3925 | 2026-03-27 | PsychoFace           | L   | 0.339      | -            | -                | -                | -         |    -5.79 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           33 |     4037 | 2026-03-24 | ex-RUSTEC            | L   | 0.321      | -            | -                | -                | -         |    -8.32 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           32 |     4152 | 2026-03-23 | PsychoFace           | W   | 0.312      | -            | -                | -                | -         |     4.45 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           31 |     4316 | 2026-03-20 | PsychoFace           | L   | 0.292      | -            | -                | -                | -         |    -5.23 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           30 |     4428 | 2026-03-17 | Hashiras             | L   | 0.274      | -            | -                | -                | -         |    -7.76 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           29 |     4487 | 2026-03-16 | PsychoFace           | W   | 0.266      | -            | -                | -                | -         |     3.71 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           28 |     4778 | 2026-03-09 | K27                  | L   | 0.222      | -            | -                | -                | -         |    -1.17 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           27 |     4785 | 2026-03-09 | Arch                 | W   | 0.221      | -            | -                | -                | 1 (0.221) |     0.43 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           26 |     4798 | 2026-03-09 | K27                  | L   | 0.220      | -            | -                | -                | -         |    -1.14 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           25 |     4936 | 2026-03-07 | ex-Zero Tenacity     | L   | 0.207      | -            | -                | -                | -         |    -5.62 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           24 |     4949 | 2026-03-07 | Sashi                | L   | 0.206      | -            | -                | -                | -         |    -3.33 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           23 |     4976 | 2026-03-06 | Phantom              | W   | 0.200      | -            | -                | -                | -         |     2.97 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           22 |     5044 | 2026-03-05 | NOVAQ                | L   | 0.192      | -            | -                | -                | -         |    -3.13 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           21 |     5070 | 2026-03-04 | ARCRED               | L   | 0.187      | -            | -                | -                | -         |    -2.83 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           20 |     5095 | 2026-03-04 | Virtus.pro           | L   | 0.185      | -            | -                | -                | -         |    -1.20 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           19 |     5123 | 2026-03-03 | Eternal Fire         | W   | 0.180      | -            | -                | -                | -         |     0.95 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           18 |     5144 | 2026-03-03 | Phantom              | L   | 0.179      | -            | -                | -                | -         |    -3.09 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           17 |     5189 | 2026-03-02 | WW                   | W   | 0.172      | 0.384        | 0.056 (0.004)    | -                | -         |     3.71 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           16 |     5204 | 2026-03-01 | MOUZ NXT             | L   | 0.167      | -            | -                | -                | -         |    -4.02 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           15 |     5249 | 2026-02-28 | Privateer            | W   | 0.161      | -            | -                | -                | -         |     0.69 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           14 |     5425 | 2026-02-25 | FORZE Reload         | W   | 0.139      | -            | -                | -                | -         |     0.13 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           13 |     5458 | 2026-02-24 | brazylijski luz      | W   | 0.133      | -            | -                | -                | -         |     0.32 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           12 |     5519 | 2026-02-23 | home                 | W   | 0.125      | -            | -                | -                | -         |     0.11 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           11 |     5637 | 2026-02-21 | ex-Zero Tenacity     | W   | 0.113      | -            | -                | -                | -         |     0.43 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|           10 |     5750 | 2026-02-19 | aAa                  | W   | 0.098      | -            | -                | -                | -         |     0.40 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            9 |     5823 | 2026-02-17 | MOUZ NXT             | L   | 0.089      | -            | -                | -                | -         |    -2.13 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            8 |     5847 | 2026-02-17 | Ursa                 | W   | 0.087      | -            | -                | -                | -         |     0.07 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            7 |     5960 | 2026-02-15 | Nuclear TigeRES      | L   | 0.073      | -            | -                | -                | -         |    -0.94 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            6 |     5969 | 2026-02-15 | K27                  | W   | 0.072      | -            | -                | -                | 1 (0.072) |     1.88 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            5 |     5990 | 2026-02-14 | Nemesis              | W   | 0.067      | 0.371        | 0.230 (0.006)    | -                | 1 (0.067) |     1.59 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            4 |     6015 | 2026-02-14 | SPARTA               | W   | 0.066      | -            | -                | -                | -         |     0.64 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            3 |     6041 | 2026-02-14 | ex-1win              | L   | 0.065      | -            | -                | -                | -         |    -1.03 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            2 |     6123 | 2026-02-12 | Atreides             | L   | 0.052      | -            | -                | -                | -         |    -1.40 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |
|            1 |     6140 | 2026-02-11 | cirahvi              | L   | 0.048      | -            | -                | -                | -         |    -1.39 | ayano, fluffy, HeCkBNk, k1ssly, Kurama   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,477.64)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-05-28 |      0.755 | $750.00        | $565.91         |
| 2026-05-23 |      0.721 | $2,000.00      | $1,441.94       |
| 2026-02-15 |      0.073 | $3,000.00      | $219.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
