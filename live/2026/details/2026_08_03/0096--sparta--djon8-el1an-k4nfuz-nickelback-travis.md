### Roster Details<br />
Team Name: SPARTA<br />
Roster: Djon8, El1an, k4nfuz, NickelBack, TRAVIS<br />
Global Rank: [96](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [70]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  992.9<br />
<br />
Final Rank Value (992.9) = Starting Rank Value (991.7) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.331[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.241[<sup>2</sup>](#table1)

The average of these factors is 0.306<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 991.7
- 400 + ( ( 0.306 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 991.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           98 |        8 | 2026-08-02 | SINNERS              | L   | 1.000      | -            | -                | -                | -         |    -7.34 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           97 |       20 | 2026-08-01 | ex-RUSTEC            | W   | 1.000      | 0.384        | -                | 0.713 (0.274)    | 0 (0.000) |    13.03 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           96 |       64 | 2026-07-31 | INFINITE             | W   | 1.000      | 0.384        | 0.031 (0.012)    | 0.681 (0.262)    | 0 (0.000) |    26.85 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           95 |      115 | 2026-07-28 | G2 Ares              | W   | 1.000      | 0.384        | -                | 0.756 (0.290)    | 0 (0.000) |    16.54 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           94 |      188 | 2026-07-26 | benched gods         | W   | 1.000      | -            | -                | -                | -         |     8.32 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           93 |      250 | 2026-07-24 | Atreides             | L   | 1.000      | -            | -                | -                | -         |   -17.47 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           92 |      295 | 2026-07-22 | SAW Youngsters       | W   | 1.000      | 0.384        | -                | 0.622 (0.239)    | -         |    10.78 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           91 |      450 | 2026-07-16 | Walczaki             | L   | 1.000      | -            | -                | -                | -         |    -4.56 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           90 |      491 | 2026-07-14 | ENCE                 | W   | 1.000      | 0.371        | 0.016 (0.006)    | 0.634 (0.235)    | -         |    14.24 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           89 |      497 | 2026-07-13 | fnatic               | L   | 1.000      | -            | -                | -                | -         |    -9.04 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           88 |      498 | 2026-07-13 | MOUZ NXT             | W   | 1.000      | -            | -                | -                | -         |    13.80 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           87 |      512 | 2026-07-12 | Bushido Wildcats     | L   | 1.000      | -            | -                | -                | -         |   -18.84 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           86 |      527 | 2026-07-12 | Noir Verse           | W   | 1.000      | -            | -                | -                | -         |    13.36 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           85 |      536 | 2026-07-12 | Atreides             | L   | 1.000      | -            | -                | -                | -         |   -18.13 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           84 |      607 | 2026-07-08 | ENCE                 | W   | 1.000      | 0.371        | 0.016 (0.006)    | 0.634 (0.235)    | -         |    14.29 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           83 |      926 | 2026-06-17 | INOX Division        | L   | 0.886      | -            | -                | -                | -         |    -8.40 | El1an, Forester, Krad, NickelBack, TRAVIS  |
|           82 |      927 | 2026-06-17 | Bebop                | L   | 0.886      | -            | -                | -                | -         |   -17.00 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           81 |      946 | 2026-06-15 | G2 Ares              | W   | 0.874      | 0.384        | -                | 0.756 (0.254)    | -         |    12.97 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           80 |      977 | 2026-06-14 | Leo                  | L   | 0.866      | -            | -                | -                | -         |   -13.35 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           79 |     1057 | 2026-06-12 | GenOne               | L   | 0.853      | -            | -                | -                | -         |   -11.69 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           78 |     1081 | 2026-06-11 | KOLESIE              | L   | 0.846      | -            | -                | -                | -         |   -10.19 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           77 |     1103 | 2026-06-10 | Atreides             | W   | 0.839      | 0.435        | -                | 0.900 (0.328)    | -         |     9.33 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           76 |     1107 | 2026-06-10 | brazylijski luz      | W   | 0.838      | -            | -                | -                | -         |     5.61 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           75 |     1167 | 2026-06-07 | Nordic Partners      | L   | 0.818      | -            | -                | -                | -         |   -14.30 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           74 |     1220 | 2026-06-05 | CYBERSHOKE           | L   | 0.806      | -            | -                | -                | -         |    -6.98 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           73 |     1248 | 2026-06-04 | Black Phoenix        | W   | 0.798      | 0.435        | -                | 1.000 (0.347)    | -         |    11.82 | Djon8, El1an, k4nfuz, NickelBack, TRAVIS   |
|           72 |     1573 | 2026-05-25 | Butterfly            | L   | 0.733      | -            | -                | -                | -         |    -7.89 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           71 |     1578 | 2026-05-25 | Nuclear TigeRES      | L   | 0.732      | -            | -                | -                | -         |    -4.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           70 |     1591 | 2026-05-25 | Athlon               | W   | 0.731      | -            | -                | -                | 1 (0.731) |     0.79 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           69 |     1609 | 2026-05-24 | Lazer Cats           | L   | 0.727      | -            | -                | -                | -         |   -15.45 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           68 |     1727 | 2026-05-22 | Falcons Force        | W   | 0.711      | -            | -                | -                | -         |     5.31 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           67 |     1801 | 2026-05-20 | GenOne               | L   | 0.699      | -            | -                | -                | -         |   -13.88 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           66 |     1854 | 2026-05-18 | Just Players         | L   | 0.685      | -            | -                | -                | -         |   -11.23 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           65 |     1906 | 2026-05-16 | Walczaki             | L   | 0.672      | -            | -                | -                | -         |    -5.36 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           64 |     1934 | 2026-05-15 | AM                   | W   | 0.666      | -            | -                | -                | -         |     9.55 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           63 |     1962 | 2026-05-14 | Nemiga               | L   | 0.658      | -            | -                | -                | -         |    -4.98 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           62 |     1988 | 2026-05-13 | los kogutos          | W   | 0.652      | -            | -                | -                | -         |     2.62 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           61 |     2035 | 2026-05-12 | Butterfly            | W   | 0.645      | -            | -                | -                | -         |    12.55 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           60 |     2093 | 2026-05-10 | Lavked               | L   | 0.633      | -            | -                | -                | -         |   -11.02 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           59 |     2153 | 2026-05-08 | BET-M                | L   | 0.620      | -            | -                | -                | -         |    -9.63 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           58 |     2164 | 2026-05-08 | ex-RUBY              | L   | 0.618      | -            | -                | -                | -         |    -7.05 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           57 |     2204 | 2026-05-05 | GenOne               | W   | 0.600      | 0.435        | 0.033 (0.008)    | 1.000 (0.261)    | -         |     5.73 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           56 |     2247 | 2026-05-03 | Nemesis              | L   | 0.587      | -            | -                | -                | -         |    -2.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           55 |     2259 | 2026-05-03 | HEROIC Academy       | W   | 0.585      | -            | -                | -                | -         |     3.10 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           54 |     2282 | 2026-05-02 | fnatic               | W   | 0.581      | -            | -                | -                | -         |    10.79 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           53 |     2343 | 2026-05-01 | INOX Division        | L   | 0.574      | -            | -                | -                | -         |   -10.95 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           52 |     2345 | 2026-05-01 | Nemesis              | L   | 0.573      | -            | -                | -                | -         |    -2.61 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           51 |     2429 | 2026-04-29 | Rebels               | W   | 0.561      | -            | -                | -                | -         |     7.99 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           50 |     2466 | 2026-04-28 | megoshort            | W   | 0.554      | -            | -                | -                | -         |     2.61 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           49 |     2516 | 2026-04-27 | GenOne               | W   | 0.547      | 0.384        | 0.033 (0.007)    | -                | -         |     5.47 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           48 |     2603 | 2026-04-26 | BIG                  | L   | 0.538      | -            | -                | -                | -         |    -0.94 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           47 |     2632 | 2026-04-25 | Lavked               | W   | 0.534      | -            | -                | -                | -         |     6.25 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           46 |     2674 | 2026-04-25 | TDK                  | W   | 0.532      | 0.435        | 0.049 (0.011)    | -                | -         |    11.25 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           45 |     2737 | 2026-04-23 | DONSTU               | W   | 0.521      | -            | -                | -                | -         |     4.78 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           44 |     3388 | 2026-04-02 | CYBERSHOKE Prospects | L   | 0.382      | -            | -                | -                | -         |    -3.28 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           43 |     3395 | 2026-04-02 | TDK                  | L   | 0.381      | -            | -                | -                | -         |    -7.71 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           42 |     3432 | 2026-04-02 | CYBERSHOKE Prospects | W   | 0.380      | -            | -                | -                | 1 (0.380) |     8.76 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           41 |     3992 | 2026-03-25 | WW                   | L   | 0.327      | -            | -                | -                | -         |    -2.07 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           40 |     4401 | 2026-03-18 | cirahvi              | L   | 0.279      | -            | -                | -                | -         |    -7.49 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           39 |     4466 | 2026-03-16 | aAa                  | L   | 0.268      | -            | -                | -                | -         |    -6.56 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           38 |     4962 | 2026-03-06 | WW                   | L   | 0.201      | -            | -                | -                | -         |    -1.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           37 |     4969 | 2026-03-06 | Virtus.pro           | W   | 0.200      | -            | -                | -                | 1 (0.200) |     5.59 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           36 |     4981 | 2026-03-06 | ex-1win              | W   | 0.199      | 0.333        | 0.082 (0.005)    | -                | 1 (0.199) |     4.17 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           35 |     4992 | 2026-03-05 | TDK                  | W   | 0.197      | -            | -                | -                | 1 (0.197) |     2.10 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |     5006 | 2026-03-05 | Virtus.pro           | L   | 0.195      | -            | -                | -                | -         |    -0.68 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |     5104 | 2026-03-03 | Younglings           | W   | 0.182      | -            | -                | -                | 1 (0.182) |     0.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |     5125 | 2026-03-03 | Nuclear TigeRES      | L   | 0.180      | -            | -                | -                | -         |    -1.46 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |     5136 | 2026-03-03 | 5Actors              | W   | 0.179      | -            | -                | -                | 1 (0.179) |     0.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |     5184 | 2026-03-02 | HOTU                 | L   | 0.172      | -            | -                | -                | -         |    -0.80 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |     5267 | 2026-02-28 | MOUZ NXT             | W   | 0.159      | -            | -                | -                | -         |     1.99 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |     5290 | 2026-02-27 | TDK                  | W   | 0.154      | -            | -                | -                | -         |     1.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |     5303 | 2026-02-27 | SINNERS              | W   | 0.153      | 0.435        | 0.147 (0.010)    | -                | -         |     3.60 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |     5363 | 2026-02-26 | BASEMENT BOYS        | W   | 0.147      | -            | -                | -                | -         |     3.33 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |     5374 | 2026-02-26 | Alliance             | W   | 0.146      | 0.435        | 0.279 (0.018)    | -                | -         |     4.50 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |     5461 | 2026-02-24 | Leo                  | L   | 0.133      | -            | -                | -                | -         |    -3.50 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |     5465 | 2026-02-24 | magic                | W   | 0.133      | 0.435        | 0.201 (0.012)    | -                | -         |     3.84 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |     5528 | 2026-02-23 | cirahvi              | W   | 0.124      | -            | -                | -                | -         |     0.62 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |     5542 | 2026-02-22 | los kogutos          | W   | 0.121      | -            | -                | -                | -         |     1.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |     5702 | 2026-02-20 | ex-RUBY              | L   | 0.105      | -            | -                | -                | -         |    -2.56 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |     5720 | 2026-02-19 | Omega                | W   | 0.101      | -            | -                | -                | -         |     2.71 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |     5737 | 2026-02-19 | los kogutos          | L   | 0.100      | -            | -                | -                | -         |    -1.97 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |     5780 | 2026-02-18 | HAVU                 | W   | 0.094      | -            | -                | -                | -         |     1.16 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |     5833 | 2026-02-17 | ex-Zero Tenacity     | W   | 0.088      | -            | -                | -                | -         |     0.66 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |     5854 | 2026-02-17 | Inner Circle         | W   | 0.087      | -            | -                | -                | -         |     2.57 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |     5899 | 2026-02-16 | Fuzos                | W   | 0.080      | -            | -                | -                | -         |     0.30 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     5909 | 2026-02-16 | ARCRED               | L   | 0.078      | -            | -                | -                | -         |    -0.68 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     5934 | 2026-02-15 | Lazer Cats           | W   | 0.074      | -            | -                | -                | -         |     0.80 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     5944 | 2026-02-15 | Hashiras             | L   | 0.074      | -            | -                | -                | -         |    -1.88 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     5966 | 2026-02-15 | MASONIC              | W   | 0.072      | -            | -                | -                | -         |     0.08 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     6015 | 2026-02-14 | Butterfly            | L   | 0.066      | -            | -                | -                | -         |    -0.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     6032 | 2026-02-14 | K27                  | L   | 0.065      | -            | -                | -                | -         |    -0.17 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     6053 | 2026-02-13 | UNiTY                | L   | 0.061      | -            | -                | -                | -         |    -1.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     6114 | 2026-02-12 | Leo                  | W   | 0.053      | -            | -                | -                | -         |     0.28 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     6181 | 2026-02-10 | GenOne               | W   | 0.041      | -            | -                | -                | -         |     0.49 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            4 |     6216 | 2026-02-09 | Phantom              | L   | 0.033      | -            | -                | -                | -         |    -0.34 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            3 |     6264 | 2026-02-07 | Rebels               | W   | 0.020      | -            | -                | -                | -         |     0.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            2 |     6326 | 2026-02-05 | los kogutos          | W   | 0.008      | -            | -                | -                | -         |     0.09 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            1 |     6347 | 2026-02-04 | Fuzos                | W   | 0.002      | -            | -                | -                | -         |     0.01 | El1an, Forester, Lack1, NickelBack, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,276.51)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-05-15 |      0.667 | $1,250.00      | $833.71         |
| 2026-05-03 |      0.587 | $5,000.00      | $2,936.71       |
| 2026-04-27 |      0.547 | $2,000.00      | $1,093.32       |
| 2026-03-06 |      0.202 | $1,500.00      | $302.73         |
| 2026-02-27 |      0.154 | $22,000.00     | $3,395.40       |
| 2026-02-20 |      0.107 | $2,000.00      | $214.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
