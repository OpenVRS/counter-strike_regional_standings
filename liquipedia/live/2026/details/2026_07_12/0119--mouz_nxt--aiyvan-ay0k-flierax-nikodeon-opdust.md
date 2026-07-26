### Roster Details<br />
Team Name: MOUZ NXT<br />
Roster: AiyvaN, ay0k, Flierax, Nikodeon, opdust<br />
Global Rank: [119](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [81]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  909.6<br />
<br />
Final Rank Value (909.6) = Starting Rank Value (872.4) + Head To Head Adjustments (37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.342[<sup>2</sup>](#table1)
- Opponent Network: 0.172[<sup>2</sup>](#table1)
- LAN Wins: 0.156[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 872.4
- 400 + ( ( 0.249 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 872.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.477
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           81 |     1421 | 2026-05-14 | TDK                     | L   | 0.802      | -            | -                | -                | -         |    -5.52 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           80 |     1474 | 2026-05-12 | Lavked                  | L   | 0.792      | -            | -                | -                | -         |    -9.31 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           79 |     1531 | 2026-05-11 | INOX Division           | L   | 0.783      | -            | -                | -                | -         |    -8.67 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           78 |     1578 | 2026-05-10 | Echo                    | L   | 0.776      | -            | -                | -                | -         |    -4.06 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           77 |     1586 | 2026-05-09 | UNiTY esports           | W   | 0.771      | 0.384        | -                | 0.432 (0.128)    | 0 (0.000) |     8.27 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           76 |     1622 | 2026-05-08 | AM Gaming               | W   | 0.763      | 0.435        | 0.014 (0.005)    | 0.666 (0.221)    | 0 (0.000) |    18.45 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           75 |     1635 | 2026-05-07 | Lavked                  | L   | 0.757      | -            | -                | -                | -         |    -9.24 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           74 |     1677 | 2026-05-05 | Bebop                   | W   | 0.742      | 0.384        | -                | 0.689 (0.197)    | 0 (0.000) |    10.36 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           73 |     1686 | 2026-05-04 | Ursa                    | L   | 0.737      | -            | -                | -                | -         |    -8.33 | AiyvaN, ay0k, Flierax, Nikodeon, opdust |
|           72 |     1983 | 2026-04-27 | UNiTY esports           | L   | 0.691      | -            | -                | -                | -         |   -14.51 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           71 |     2160 | 2026-04-24 | ECSTATIC                | W   | 0.672      | 0.362        | 0.023 (0.005)    | -                | 0 (0.000) |    11.50 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           70 |     2253 | 2026-04-22 | Acend                   | L   | 0.657      | -            | -                | -                | -         |    -1.98 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           69 |     2278 | 2026-04-20 | CYBERSHOKE Esports      | L   | 0.642      | -            | -                | -                | -         |    -6.18 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           68 |     2285 | 2026-04-19 | EYEBALLERS              | L   | 0.638      | -            | -                | -                | -         |    -1.57 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           67 |     2309 | 2026-04-19 | Ursa                    | W   | 0.636      | 0.435        | -                | 0.890 (0.246)    | -         |    11.18 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           66 |     2338 | 2026-04-17 | Ex-RUBY                 | L   | 0.624      | -            | -                | -                | -         |    -8.04 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           65 |     2372 | 2026-04-14 | Qual4                   | W   | 0.605      | -            | -                | -                | -         |     0.94 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           64 |     2386 | 2026-04-14 | GenOne                  | W   | 0.602      | 0.435        | -                | 1.000 (0.262)    | -         |     6.57 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           63 |     2396 | 2026-04-13 | Clutchain               | L   | 0.598      | -            | -                | -                | -         |   -17.09 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           62 |     2427 | 2026-04-12 | ARCRED                  | L   | 0.589      | -            | -                | -                | -         |    -5.54 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           61 |     2527 | 2026-04-08 | Mai tai                 | W   | 0.563      | -            | -                | -                | -         |     6.25 | ay0k, Flierax, Nikodeon, opdust, xelex  |
|           60 |     3216 | 2026-03-29 | Aimclub (Romanian team) | L   | 0.498      | -            | -                | -                | -         |   -10.12 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           59 |     3240 | 2026-03-29 | Lazer Cats              | L   | 0.497      | -            | -                | -                | -         |   -11.33 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           58 |     3260 | 2026-03-29 | Alpha Dominion Nation   | W   | 0.496      | -            | -                | -                | 1 (0.496) |     0.66 | ay0k, lmbt, Nikodeon, opdust, xelex     |
|           57 |     3454 | 2026-03-25 | BIG                     | L   | 0.471      | -            | -                | -                | -         |    -0.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           56 |     3520 | 2026-03-24 | Fnatic                  | W   | 0.464      | 0.435        | -                | 0.644 (0.130)    | 1 (0.464) |    10.21 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           55 |     3534 | 2026-03-24 | Nexus Gaming            | W   | 0.463      | -            | -                | -                | 1 (0.463) |     2.82 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           54 |     4042 | 2026-03-14 | Nemiga Gaming           | L   | 0.396      | -            | -                | -                | -         |    -3.25 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           53 |     4128 | 2026-03-12 | Megoshort               | W   | 0.384      | -            | -                | -                | -         |     3.16 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           52 |     4149 | 2026-03-12 | CYBERSHOKE Esports      | L   | 0.383      | -            | -                | -                | -         |    -3.77 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           51 |     4182 | 2026-03-11 | K27                     | L   | 0.376      | -            | -                | -                | -         |    -1.96 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           50 |     4222 | 2026-03-10 | Nuclear TigeRES         | W   | 0.370      | 0.435        | 0.079 (0.013)    | -                | -         |     9.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           49 |     4281 | 2026-03-09 | Team Nemesis            | W   | 0.363      | 0.371        | 0.229 (0.031)    | 0.950 (0.128)    | -         |    10.39 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           48 |     4321 | 2026-03-08 | Acend                   | W   | 0.359      | 0.435        | 0.072 (0.011)    | 0.898 (0.140)    | -         |    10.49 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           47 |     4361 | 2026-03-08 | GenOne                  | W   | 0.357      | 0.371        | -                | 1.000 (0.132)    | -         |     4.52 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           46 |     4431 | 2026-03-06 | Ex-RUBY                 | L   | 0.345      | -            | -                | -                | -         |    -5.24 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           45 |     4456 | 2026-03-06 | UNiTY esports           | W   | 0.343      | -            | -                | -                | -         |     3.40 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           44 |     4555 | 2026-03-04 | PsychoFace              | W   | 0.330      | 0.435        | 0.027 (0.004)    | 0.974 (0.140)    | -         |     5.98 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           43 |     4665 | 2026-03-01 | Oxuji Esports           | W   | 0.312      | -            | -                | -                | -         |     7.95 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           42 |     4728 | 2026-02-28 | SPARTA Esports          | L   | 0.303      | -            | -                | -                | -         |    -2.65 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           41 |     4783 | 2026-02-27 | Echo                    | L   | 0.296      | -            | -                | -                | -         |    -1.02 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           40 |     4808 | 2026-02-26 | Los kogutos             | L   | 0.292      | -            | -                | -                | -         |    -4.35 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           39 |     4824 | 2026-02-26 | K27                     | L   | 0.291      | -            | -                | -                | -         |    -1.32 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           38 |     4837 | 2026-02-26 | EYEBALLERS              | L   | 0.290      | -            | -                | -                | -         |    -0.61 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           37 |     4853 | 2026-02-26 | Hashiras                | W   | 0.289      | -            | -                | -                | -         |     2.57 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           36 |     4887 | 2026-02-25 | Nuclear TigeRES         | W   | 0.283      | 0.435        | 0.079 (0.010)    | -                | -         |     7.71 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           35 |     4913 | 2026-02-24 | DuNdu                   | W   | 0.278      | -            | -                | -                | -         |     0.48 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           34 |     4962 | 2026-02-23 | Alliance                | L   | 0.272      | -            | -                | -                | -         |    -0.13 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           33 |     5013 | 2026-02-22 | TDK                     | L   | 0.265      | -            | -                | -                | -         |    -1.87 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           32 |     5054 | 2026-02-22 | SPARTA Esports          | L   | 0.263      | -            | -                | -                | -         |    -7.50 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           31 |     5105 | 2026-02-21 | TDK                     | L   | 0.257      | -            | -                | -                | -         |    -1.92 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           30 |     5133 | 2026-02-20 | Leo Team                | W   | 0.252      | -            | -                | -                | -         |     2.21 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           29 |     5141 | 2026-02-20 | Los kogutos             | W   | 0.251      | -            | -                | -                | -         |     4.28 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           28 |     5214 | 2026-02-19 | ECSTATIC                | L   | 0.242      | -            | -                | -                | -         |    -3.46 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           27 |     5238 | 2026-02-18 | Johnny Speeds           | W   | 0.238      | 0.384        | 0.047 (0.004)    | -                | -         |     6.08 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           26 |     5256 | 2026-02-18 | TDK                     | W   | 0.237      | 0.435        | 0.058 (0.006)    | -                | -         |     5.79 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           25 |     5269 | 2026-02-18 | FAVBET Team             | W   | 0.236      | -            | -                | -                | -         |     2.90 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           24 |     5292 | 2026-02-17 | Oxuji Esports           | W   | 0.233      | -            | -                | -                | -         |     6.03 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           23 |     5309 | 2026-02-17 | Magic                   | W   | 0.231      | 0.624        | 0.217 (0.031)    | -                | -         |     7.01 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           22 |     5342 | 2026-02-16 | OMEGA                   | W   | 0.225      | -            | -                | -                | -         |     5.49 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           21 |     5366 | 2026-02-16 | BRUTE                   | W   | 0.223      | -            | -                | -                | -         |     2.54 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           20 |     5456 | 2026-02-14 | ENCE                    | W   | 0.212      | -            | -                | -                | -         |     2.20 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           19 |     5693 | 2026-02-08 | Nuclear TigeRES         | L   | 0.172      | -            | -                | -                | -         |    -0.59 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           18 |     5697 | 2026-02-08 | Virtus.pro              | W   | 0.171      | -            | -                | -                | -         |     4.68 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           17 |     5884 | 2026-02-02 | 9INE                    | L   | 0.130      | -            | -                | -                | -         |    -2.79 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           16 |     5956 | 2026-01-31 | ARCRED                  | W   | 0.116      | -            | -                | -                | -         |     2.88 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           15 |     5977 | 2026-01-30 | Eternal Fire            | W   | 0.111      | -            | -                | -                | -         |     0.42 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           14 |     6035 | 2026-01-28 | FAVBET Team             | L   | 0.097      | -            | -                | -                | -         |    -1.82 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           13 |     6048 | 2026-01-27 | FAVBET Team             | L   | 0.091      | -            | -                | -                | -         |    -1.73 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           12 |     6084 | 2026-01-25 | UNiTY esports           | L   | 0.078      | -            | -                | -                | -         |    -1.64 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           11 |     6099 | 2026-01-25 | Ex-MANA eSports         | W   | 0.077      | -            | -                | -                | -         |     0.86 | ay0k, Joey, Nikodeon, opdust, xelex     |
|           10 |     6136 | 2026-01-24 | Magic                   | L   | 0.070      | -            | -                | -                | -         |    -0.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            9 |     6169 | 2026-01-23 | Illwill                 | L   | 0.065      | -            | -                | -                | -         |    -1.02 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            8 |     6196 | 2026-01-23 | AaB esport              | W   | 0.063      | -            | -                | -                | -         |     0.22 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            7 |     6236 | 2026-01-22 | ALLINNERS               | W   | 0.056      | -            | -                | -                | -         |     0.32 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            6 |     6280 | 2026-01-21 | Los kogutos             | L   | 0.049      | -            | -                | -                | -         |    -0.68 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            5 |     6299 | 2026-01-20 | BASEMENT BOYS           | W   | 0.043      | -            | -                | -                | -         |     1.14 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            4 |     6339 | 2026-01-18 | Betclic Apogee Esports  | L   | 0.030      | -            | -                | -                | -         |    -0.12 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            3 |     6392 | 2026-01-17 | FC Famalicão Esports    | W   | 0.023      | -            | -                | -                | 1 (0.023) |     0.20 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            2 |     6489 | 2026-01-15 | FUZOS                   | W   | 0.010      | -            | -                | -                | 1 (0.010) |     0.07 | ay0k, Joey, Nikodeon, opdust, xelex     |
|            1 |     6493 | 2026-01-15 | Matrix (Ukrainian team) | W   | 0.009      | -            | -                | -                | 1 (0.009) |     0.05 | ay0k, Joey, Nikodeon, opdust, xelex     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,636.84)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.405 | $500.00        | $202.50         |
| 2026-03-13 |      0.392 | $2,000.00      | $783.61         |
| 2026-03-11 |      0.376 | $5,000.00      | $1,879.17       |
| 2026-02-27 |      0.298 | $2,000.00      | $596.11         |
| 2026-02-24 |      0.278 | $2,250.00      | $626.25         |
| 2026-02-20 |      0.252 | $2,000.00      | $503.06         |
| 2026-01-18 |      0.032 | $1,451.00      | $46.15          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
