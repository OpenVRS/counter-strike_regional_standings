### Roster Details<br />
Team Name: Phantom<br />
Roster: KEi, Kunai, Kylar, mwlky, TMB<br />
Global Rank: [64](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [46]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1129.9<br />
<br />
Final Rank Value (1129.9) = Starting Rank Value (1121.0) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.411[<sup>2</sup>](#table1)
- Opponent Network: 0.247[<sup>2</sup>](#table1)
- LAN Wins: 0.450[<sup>2</sup>](#table1)

The average of these factors is 0.372<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1121.0
- 400 + ( ( 0.372 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1121.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |      420 | 2026-07-17 | K27                | L   | 1.000      | -            | -                | -                | -         |    -7.51 | KEi, Kunai, Kylar, nicoodoz, TMB    |
|           78 |      442 | 2026-07-16 | HEROIC             | L   | 1.000      | -            | -                | -                | -         |    -5.85 | KEi, Kunai, Kylar, nicoodoz, TMB    |
|           77 |      463 | 2026-07-15 | paiN               | W   | 1.000      | 0.500        | 0.311 (0.155)    | 0.524 (0.262)    | 1 (1.000) |    27.29 | KEi, Kunai, Kylar, nicoodoz, TMB    |
|           76 |      867 | 2026-06-21 | FOKUS              | W   | 0.913      | 0.435        | 0.155 (0.062)    | 0.608 (0.241)    | -         |    21.89 | Altekz, Kunai, Kylar, mwlky, TMB    |
|           75 |      880 | 2026-06-20 | Walczaki           | W   | 0.907      | 0.435        | 0.096 (0.038)    | 1.000 (0.394)    | -         |    20.96 | Altekz, Kunai, Kylar, mwlky, TMB    |
|           74 |      918 | 2026-06-18 | JiJieHao           | W   | 0.893      | 0.435        | 0.048 (0.019)    | -                | -         |    19.63 | KEi, Kunai, Kylar, mwlky, TMB       |
|           73 |     1155 | 2026-06-07 | Bulgaria           | W   | 0.820      | 0.384        | 0.069 (0.022)    | 0.881 (0.278)    | -         |    20.49 | KEi, Kunai, Kylar, mwlky, TMB       |
|           72 |     1216 | 2026-06-05 | 100 Thieves        | L   | 0.807      | -            | -                | -                | -         |    -4.50 | KEi, Kunai, Kylar, mwlky, TMB       |
|           71 |     1256 | 2026-06-03 | Echo               | W   | 0.794      | 0.384        | 0.053 (0.016)    | 0.746 (0.228)    | -         |    18.65 | KEi, Kunai, Kylar, mwlky, TMB       |
|           70 |     1307 | 2026-06-01 | DragonClaw         | W   | 0.779      | -            | -                | -                | -         |    12.07 | KEi, Kunai, Kylar, mwlky, TMB       |
|           69 |     1378 | 2026-05-30 | Bushido Wildcats   | W   | 0.766      | -            | -                | -                | -         |     5.76 | KEi, Kunai, Kylar, mwlky, TMB       |
|           68 |     1393 | 2026-05-29 | Young Ninjas       | L   | 0.761      | -            | -                | -                | -         |   -17.38 | KEi, Kunai, Kylar, mwlky, TMB       |
|           67 |     1447 | 2026-05-28 | Atreides           | L   | 0.754      | -            | -                | -                | -         |   -17.11 | KEi, Kunai, Kylar, mwlky, TMB       |
|           66 |     1474 | 2026-05-28 | los kogutos        | L   | 0.752      | -            | -                | -                | -         |   -16.67 | KEi, Kunai, Kylar, mwlky, TMB       |
|           65 |     1517 | 2026-05-27 | Johnny Speeds      | L   | 0.745      | -            | -                | -                | -         |   -11.75 | KEi, Kunai, Kylar, mwlky, TMB       |
|           64 |     1572 | 2026-05-25 | BRUTE              | W   | 0.733      | 0.384        | -                | 0.672 (0.189)    | -         |    12.00 | KEi, Kunai, Kylar, mwlky, TMB       |
|           63 |     1577 | 2026-05-25 | Lavked             | W   | 0.732      | 0.384        | -                | 0.889 (0.250)    | -         |    10.92 | KEi, Kunai, Kylar, mwlky, TMB       |
|           62 |     1658 | 2026-05-23 | ex-RUBY            | L   | 0.720      | -            | -                | -                | -         |    -7.94 | KEi, Kunai, Kylar, mwlky, TMB       |
|           61 |     1770 | 2026-05-21 | Leo                | W   | 0.705      | -            | -                | -                | -         |     9.30 | KEi, Kunai, Kylar, mwlky, TMB       |
|           60 |     1828 | 2026-05-19 | los kogutos        | W   | 0.693      | -            | -                | -                | -         |     5.74 | KEi, Kunai, Kylar, mwlky, TMB       |
|           59 |     2184 | 2026-05-06 | los kogutos        | L   | 0.608      | -            | -                | -                | -         |   -17.02 | Ayteel, KEi, Kunai, Kylar, mwlky    |
|           58 |     2213 | 2026-05-05 | GenOne             | W   | 0.598      | 0.384        | 0.033 (0.007)    | 1.000 (0.230)    | -         |     5.37 | aimy, KEi, Kunai, Kylar, mwlky      |
|           57 |     2224 | 2026-05-04 | Lavked             | L   | 0.593      | -            | -                | -                | -         |   -11.16 | aimy, KEi, Kunai, Kylar, mwlky      |
|           56 |     2252 | 2026-05-03 | aAa                | W   | 0.586      | -            | -                | -                | -         |     3.86 | aimy, KEi, Kunai, Kylar, mwlky      |
|           55 |     2386 | 2026-04-30 | fnatic             | L   | 0.567      | -            | -                | -                | -         |    -8.36 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           54 |     2433 | 2026-04-29 | GenOne             | W   | 0.561      | 0.384        | 0.033 (0.007)    | 1.000 (0.215)    | -         |     4.91 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           53 |     2470 | 2026-04-28 | aAa                | W   | 0.554      | -            | -                | -                | -         |     3.60 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           52 |     2513 | 2026-04-27 | The Last Resort    | W   | 0.547      | -            | -                | -                | -         |     7.49 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           51 |     2576 | 2026-04-26 | ex-RUSTEC          | W   | 0.540      | -            | -                | -                | -         |     5.45 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           50 |     2637 | 2026-04-25 | Hashiras           | L   | 0.534      | -            | -                | -                | -         |   -14.01 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           49 |     2752 | 2026-04-23 | Atreides           | W   | 0.520      | 0.384        | -                | 0.900 (0.180)    | -         |     3.58 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           48 |     2852 | 2026-04-18 | FAVBET             | L   | 0.487      | -            | -                | -                | -         |   -12.49 | KEi, Kunai, Kylar, mwlky, mynio     |
|           47 |     2882 | 2026-04-16 | GenOne             | L   | 0.474      | -            | -                | -                | -         |   -11.40 | KEi, Kunai, Kylar, mwlky, mynio     |
|           46 |     2904 | 2026-04-15 | Lavked             | L   | 0.465      | -            | -                | -                | -         |   -12.53 | KEi, Kunai, Kylar, mwlky, mynio     |
|           45 |     2918 | 2026-04-14 | ex-RUBY            | L   | 0.460      | -            | -                | -                | -         |   -11.53 | KEi, Kunai, Kylar, mwlky, mynio     |
|           44 |     2923 | 2026-04-14 | Metizport          | L   | 0.459      | -            | -                | -                | -         |    -8.29 | KEi, Kunai, Kylar, mwlky, mynio     |
|           43 |     2942 | 2026-04-13 | HEROIC Academy     | W   | 0.451      | -            | -                | -                | -         |     2.17 | KEi, Kunai, Kylar, mwlky, mynio     |
|           42 |     3017 | 2026-04-10 | Black Phoenix      | W   | 0.432      | -            | -                | -                | -         |     3.71 | KEi, Kunai, Kylar, mwlky, mynio     |
|           41 |     3490 | 2026-04-01 | B8                 | L   | 0.374      | -            | -                | -                | -         |    -0.54 | KEi, Kunai, Kylar, mwlky, mynio     |
|           40 |     3530 | 2026-04-01 | AM                 | W   | 0.373      | -            | -                | -                | 1 (0.373) |     4.10 | KEi, Kunai, Kylar, mwlky, mynio     |
|           39 |     3548 | 2026-04-01 | BESTIA             | L   | 0.371      | -            | -                | -                | -         |    -5.38 | KEi, Kunai, Kylar, mwlky, mynio     |
|           38 |     3580 | 2026-03-31 | B8                 | L   | 0.367      | -            | -                | -                | -         |    -0.51 | KEi, Kunai, Kylar, mwlky, mynio     |
|           37 |     3591 | 2026-03-31 | Z7                 | W   | 0.367      | -            | -                | -                | 1 (0.367) |     0.26 | KEi, Kunai, Kylar, mwlky, mynio     |
|           36 |     3604 | 2026-03-31 | maquinas           | W   | 0.367      | -            | -                | -                | 1 (0.367) |     0.21 | KEi, Kunai, Kylar, mwlky, mynio     |
|           35 |     3627 | 2026-03-31 | AM                 | L   | 0.366      | -            | -                | -                | -         |    -7.74 | KEi, Kunai, Kylar, mwlky, mynio     |
|           34 |     3648 | 2026-03-31 | WAZABI             | W   | 0.365      | -            | -                | -                | 1 (0.365) |     2.04 | KEi, Kunai, Kylar, mwlky, mynio     |
|           33 |     4029 | 2026-03-24 | FOKUS              | L   | 0.322      | -            | -                | -                | -         |    -2.37 | KEi, Kunai, Kylar, mwlky, mynio     |
|           32 |     4040 | 2026-03-24 | 3DMAX              | W   | 0.321      | 0.333        | 0.337 (0.036)    | -                | 1 (0.321) |     8.98 | KEi, Kunai, Kylar, mwlky, mynio     |
|           31 |     4074 | 2026-03-24 | ASTRAL             | W   | 0.318      | -            | -                | -                | 1 (0.318) |     6.63 | KEi, Kunai, Kylar, mwlky, mynio     |
|           30 |     4134 | 2026-03-23 | EC BANGA           | W   | 0.313      | -            | -                | -                | 1 (0.313) |     0.19 | KEi, Kunai, Kylar, mwlky, mynio     |
|           29 |     4138 | 2026-03-23 | KUUSAMO            | W   | 0.313      | -            | -                | -                | 1 (0.313) |     0.93 | KEi, Kunai, Kylar, mwlky, mynio     |
|           28 |     4144 | 2026-03-23 | Wampirki           | L   | 0.312      | -            | -                | -                | -         |    -9.32 | KEi, Kunai, Kylar, mwlky, mynio     |
|           27 |     4718 | 2026-03-11 | CYBERSHOKE         | L   | 0.232      | -            | -                | -                | -         |    -2.95 | KEi, Kunai, Kylar, mwlky, mynio     |
|           26 |     4820 | 2026-03-09 | Omega              | W   | 0.219      | -            | -                | -                | -         |     4.99 | KEi, Kunai, Kylar, mwlky, mynio     |
|           25 |     4889 | 2026-03-08 | Leo                | L   | 0.213      | -            | -                | -                | -         |    -6.00 | KEi, Kunai, Kylar, mwlky, mynio     |
|           24 |     4976 | 2026-03-06 | Butterfly          | L   | 0.200      | -            | -                | -                | -         |    -2.97 | KEi, Kunai, Kylar, mynio, parad17se |
|           23 |     5021 | 2026-03-05 | ASTRAL             | W   | 0.194      | -            | -                | -                | -         |     4.18 | KEi, Kunai, Kylar, mwlky, mynio     |
|           22 |     5144 | 2026-03-03 | Butterfly          | W   | 0.179      | -            | -                | -                | -         |     3.09 | KEi, Kunai, Kylar, mynio, parad17se |
|           21 |     5216 | 2026-03-01 | PsychoFace         | L   | 0.166      | -            | -                | -                | -         |    -2.76 | KEi, Kunai, Kylar, mynio, parad17se |
|           20 |     5384 | 2026-02-26 | Lazer Cats         | L   | 0.145      | -            | -                | -                | -         |    -3.62 | DGL, KEi, Kunai, Kylar, mynio       |
|           19 |     5504 | 2026-02-23 | ECSTATIC           | L   | 0.127      | -            | -                | -                | -         |    -3.24 | DGL, KEi, Kunai, Kylar, mynio       |
|           18 |     5510 | 2026-02-23 | Sashi              | W   | 0.126      | -            | -                | -                | 1 (0.126) |     2.05 | DGL, KEi, Kunai, Kylar, mynio       |
|           17 |     5518 | 2026-02-23 | illwill            | L   | 0.125      | -            | -                | -                | -         |    -3.42 | DGL, KEi, Kunai, Kylar, mynio       |
|           16 |     5535 | 2026-02-22 | ECSTATIC           | L   | 0.121      | -            | -                | -                | -         |    -3.13 | DGL, KEi, Kunai, Kylar, mynio       |
|           15 |     5537 | 2026-02-22 | SINNERS            | W   | 0.121      | 0.342        | 0.147 (0.006)    | -                | -         |     2.34 | DGL, KEi, Kunai, Kylar, mynio       |
|           14 |     5547 | 2026-02-22 | GamerLegion        | L   | 0.121      | -            | -                | -                | -         |    -0.29 | DGL, KEi, Kunai, Kylar, mynio       |
|           13 |     5563 | 2026-02-22 | Persona Grata      | W   | 0.120      | -            | -                | -                | -         |     0.15 | DGL, KEi, Kunai, Kylar, mynio       |
|           12 |     5569 | 2026-02-22 | Avanti             | W   | 0.120      | -            | -                | -                | -         |     0.07 | DGL, KEi, Kunai, Kylar, mynio       |
|           11 |     5618 | 2026-02-21 | Young Ninjas       | L   | 0.114      | -            | -                | -                | -         |    -3.09 | DGL, KEi, Kunai, Kylar, mynio       |
|           10 |     5634 | 2026-02-21 | Bulgaria           | L   | 0.113      | -            | -                | -                | -         |    -0.57 | DGL, KEi, Kunai, Kylar, mynio       |
|            9 |     5646 | 2026-02-21 | ex-Fingers Crossed | W   | 0.112      | -            | -                | -                | -         |     0.10 | DGL, KEi, Kunai, Kylar, mynio       |
|            8 |     5864 | 2026-02-17 | Alliance           | L   | 0.085      | -            | -                | -                | -         |    -0.11 | DGL, KEi, Kunai, Kylar, mynio       |
|            7 |     5901 | 2026-02-16 | ALGO               | W   | 0.079      | -            | -                | -                | -         |     0.08 | DGL, KEi, Kunai, Kylar, mynio       |
|            6 |     5989 | 2026-02-14 | Romania            | W   | 0.068      | -            | -                | -                | -         |     0.12 | DGL, KEi, Kunai, Kylar, mynio       |
|            5 |     6062 | 2026-02-13 | los kogutos        | L   | 0.060      | -            | -                | -                | -         |    -1.47 | DGL, KEi, Kunai, Kylar, mynio       |
|            4 |     6138 | 2026-02-11 | VP.Prodigy         | L   | 0.048      | -            | -                | -                | -         |    -1.46 | DGL, KEi, Kunai, Kylar, mynio       |
|            3 |     6216 | 2026-02-09 | SPARTA             | W   | 0.033      | -            | -                | -                | -         |     0.34 | DGL, KEi, Kunai, Kylar, mynio       |
|            2 |     6228 | 2026-02-08 | OG                 | L   | 0.028      | -            | -                | -                | -         |    -0.55 | DGL, KEi, Kunai, Kylar, mynio       |
|            1 |     6235 | 2026-02-08 | Lazer Cats         | W   | 0.027      | -            | -                | -                | -         |     0.17 | DGL, KEi, Kunai, Kylar, mynio       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,028.35)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-18 |      1.000 | $9,000.00      | $9,000.00       |
| 2026-06-06 |      0.814 | $1,250.00      | $1,017.32       |
| 2026-05-03 |      0.587 | $1,250.00      | $734.18         |
| 2026-04-16 |      0.472 | $1,000.00      | $471.85         |
| 2026-03-24 |      0.322 | $2,500.00      | $805.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
