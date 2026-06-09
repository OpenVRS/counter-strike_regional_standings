### Roster Details<br />
Team Name: Phantom Esports<br />
Roster: KEi, Kunai, Kylar, mwlky, TMB<br />
Global Rank: [116](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [76]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1003.0<br />
<br />
Final Rank Value (1003.0) = Starting Rank Value (1188.4) + Head To Head Adjustments (-185.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.316[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.740[<sup>2</sup>](#table1)

The average of these factors is 0.414<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1188.4
- 400 + ( ( 0.414 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1188.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.736
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       74 | 2026-05-29 | Young Ninjas          | L   | 1.000      | -            | -                | -                | -         |   -21.18 | KEi, Kunai, Kylar, mwlky, TMB       |
|           78 |      116 | 2026-05-28 | Atreides              | L   | 1.000      | -            | -                | -                | -         |   -18.08 | KEi, Kunai, Kylar, mwlky, TMB       |
|           77 |      176 | 2026-05-27 | Johnny Speeds         | L   | 1.000      | -            | -                | -                | -         |   -11.33 | KEi, Kunai, Kylar, mwlky, TMB       |
|           76 |      220 | 2026-05-25 | BRUTE                 | W   | 1.000      | -            | -                | -                | -         |    11.49 | KEi, Kunai, Kylar, mwlky, TMB       |
|           75 |      302 | 2026-05-23 | Ex-RUBY               | L   | 1.000      | -            | -                | -                | -         |   -11.62 | KEi, Kunai, Kylar, mwlky, TMB       |
|           74 |      425 | 2026-05-21 | Leo Team              | W   | 1.000      | 0.384        | -                | 0.532 (0.204)    | -         |    10.43 | KEi, Kunai, Kylar, mwlky, TMB       |
|           73 |      471 | 2026-05-19 | TNC Esport            | W   | 1.000      | 0.384        | 0.022 (0.009)    | 1.000 (0.384)    | -         |     9.52 | KEi, Kunai, Kylar, mwlky, TMB       |
|           72 |      826 | 2026-05-06 | TNC Esport            | L   | 1.000      | -            | -                | -                | -         |   -26.33 | Ayteel, KEi, Kunai, Kylar, mwlky    |
|           71 |      856 | 2026-05-05 | GenOne                | W   | 1.000      | -            | -                | -                | -         |     9.89 | aimy, KEi, Kunai, Kylar, mwlky      |
|           70 |      865 | 2026-05-04 | Lavked                | L   | 1.000      | -            | -                | -                | -         |   -14.30 | aimy, KEi, Kunai, Kylar, mwlky      |
|           69 |      893 | 2026-05-03 | Against All authority | W   | 1.000      | -            | -                | -                | -         |    10.05 | aimy, KEi, Kunai, Kylar, mwlky      |
|           68 |     1027 | 2026-04-30 | Fnatic                | L   | 0.993      | -            | -                | -                | -         |   -13.89 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           67 |     1078 | 2026-04-29 | GenOne                | W   | 0.986      | 0.384        | 0.011 (0.004)    | 0.936 (0.354)    | -         |     9.59 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           66 |     1118 | 2026-04-28 | Against All authority | W   | 0.979      | 0.384        | 0.008 (0.003)    | -                | -         |    10.10 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           65 |     1162 | 2026-04-27 | The Last Resort       | W   | 0.973      | 0.384        | -                | 0.550 (0.205)    | -         |    10.41 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           64 |     1216 | 2026-04-26 | RUSTEC                | W   | 0.966      | 0.384        | -                | 0.578 (0.214)    | -         |    12.53 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           63 |     1295 | 2026-04-25 | Hashiras              | L   | 0.959      | -            | -                | -                | -         |   -21.37 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           62 |     1399 | 2026-04-23 | Atreides              | W   | 0.945      | 0.384        | 0.010 (0.004)    | 0.700 (0.254)    | -         |     9.17 | KEi, Kunai, Kylar, lunAtic, mwlky   |
|           61 |     1496 | 2026-04-18 | FAVBET Team           | L   | 0.912      | -            | -                | -                | -         |   -16.69 | KEi, Kunai, Kylar, mwlky, mynio     |
|           60 |     1525 | 2026-04-16 | GenOne                | L   | 0.899      | -            | -                | -                | -         |   -21.51 | KEi, Kunai, Kylar, mwlky, mynio     |
|           59 |     1547 | 2026-04-15 | Lavked                | L   | 0.890      | -            | -                | -                | -         |   -16.50 | KEi, Kunai, Kylar, mwlky, mynio     |
|           58 |     1561 | 2026-04-14 | Ex-RUBY               | L   | 0.885      | -            | -                | -                | -         |   -14.82 | KEi, Kunai, Kylar, mwlky, mynio     |
|           57 |     1565 | 2026-04-14 | Metizport             | L   | 0.884      | -            | -                | -                | -         |   -16.25 | KEi, Kunai, Kylar, mwlky, mynio     |
|           56 |     1584 | 2026-04-13 | HEROIC Academy        | W   | 0.877      | -            | -                | -                | -         |     6.84 | KEi, Kunai, Kylar, mwlky, mynio     |
|           55 |     1661 | 2026-04-10 | Ursa                  | W   | 0.857      | 0.371        | 0.016 (0.005)    | 0.951 (0.302)    | -         |    10.80 | KEi, Kunai, Kylar, mwlky, mynio     |
|           54 |     2133 | 2026-04-01 | B8                    | L   | 0.799      | -            | -                | -                | -         |    -1.84 | KEi, Kunai, Kylar, mwlky, mynio     |
|           53 |     2178 | 2026-04-01 | AM Gaming             | W   | 0.798      | 0.341        | 0.016 (0.004)    | -                | 1 (0.798) |    17.50 | KEi, Kunai, Kylar, mwlky, mynio     |
|           52 |     2188 | 2026-04-01 | BESTIA                | L   | 0.797      | -            | -                | -                | -         |    -6.38 | KEi, Kunai, Kylar, mwlky, mynio     |
|           51 |     2221 | 2026-03-31 | B8                    | L   | 0.793      | -            | -                | -                | -         |    -1.62 | KEi, Kunai, Kylar, mwlky, mynio     |
|           50 |     2228 | 2026-03-31 | Z7 Esports            | W   | 0.793      | -            | -                | -                | 1 (0.793) |     0.64 | KEi, Kunai, Kylar, mwlky, mynio     |
|           49 |     2245 | 2026-03-31 | Máquinas              | W   | 0.792      | -            | -                | -                | 1 (0.792) |     0.46 | KEi, Kunai, Kylar, mwlky, mynio     |
|           48 |     2263 | 2026-03-31 | AM Gaming             | L   | 0.791      | -            | -                | -                | -         |    -7.20 | KEi, Kunai, Kylar, mwlky, mynio     |
|           47 |     2291 | 2026-03-31 | WAZABI                | W   | 0.791      | -            | -                | -                | 1 (0.791) |     7.41 | KEi, Kunai, Kylar, mwlky, mynio     |
|           46 |     2673 | 2026-03-24 | FOKUS                 | L   | 0.747      | -            | -                | -                | -         |    -3.63 | KEi, Kunai, Kylar, mwlky, mynio     |
|           45 |     2683 | 2026-03-24 | 3DMAX                 | W   | 0.746      | 0.333        | 0.243 (0.060)    | -                | 1 (0.746) |    21.43 | KEi, Kunai, Kylar, mwlky, mynio     |
|           44 |     2720 | 2026-03-24 | ASTRAL Esports        | W   | 0.744      | 0.333        | -                | 0.848 (0.210)    | 1 (0.744) |     8.90 | KEi, Kunai, Kylar, mwlky, mynio     |
|           43 |     2773 | 2026-03-23 | EC BANGA              | W   | 0.739      | -            | -                | -                | 1 (0.739) |     0.51 | KEi, Kunai, Kylar, mwlky, mynio     |
|           42 |     2781 | 2026-03-23 | KUUSAMO.gg            | W   | 0.738      | -            | -                | -                | 1 (0.738) |     2.07 | KEi, Kunai, Kylar, mwlky, mynio     |
|           41 |     2784 | 2026-03-23 | Project 91 Team       | L   | 0.738      | -            | -                | -                | -         |   -20.42 | KEi, Kunai, Kylar, mwlky, mynio     |
|           40 |     3361 | 2026-03-11 | CYBERSHOKE Esports    | L   | 0.657      | -            | -                | -                | -         |    -7.40 | KEi, Kunai, Kylar, mynio, parad17se |
|           39 |     3460 | 2026-03-09 | OMEGA                 | W   | 0.644      | 0.435        | 0.016 (0.005)    | -                | -         |    10.24 | KEi, Kunai, Kylar, mynio, parad17se |
|           38 |     3545 | 2026-03-08 | Leo Team              | L   | 0.638      | -            | -                | -                | -         |   -15.68 | KEi, Kunai, Kylar, mynio, parad17se |
|           37 |     3620 | 2026-03-06 | Oxuji Esports         | L   | 0.625      | -            | -                | -                | -         |    -7.12 | KEi, Kunai, Kylar, mwlky, mynio     |
|           36 |     3658 | 2026-03-05 | ASTRAL Esports        | W   | 0.619      | 0.435        | -                | 0.848 (0.228)    | -         |     7.19 | KEi, Kunai, Kylar, mynio, parad17se |
|           35 |     3789 | 2026-03-03 | Oxuji Esports         | W   | 0.604      | 0.435        | -                | 0.789 (0.207)    | -         |    13.31 | KEi, Kunai, Kylar, mynio, parad17se |
|           34 |     3853 | 2026-03-01 | PsychoFace            | L   | 0.592      | -            | -                | -                | -         |    -9.89 | KEi, Kunai, Kylar, mynio, parad17se |
|           33 |     4029 | 2026-02-26 | Lazer Cats            | L   | 0.570      | -            | -                | -                | -         |   -13.79 | DGL, KEi, Kunai, Kylar, mynio       |
|           32 |     4144 | 2026-02-23 | ECSTATIC              | L   | 0.552      | -            | -                | -                | -         |    -7.62 | DGL, KEi, Kunai, Kylar, mynio       |
|           31 |     4155 | 2026-02-23 | Sashi Esport          | W   | 0.551      | -            | -                | -                | 1 (0.551) |     9.67 | DGL, KEi, Kunai, Kylar, mynio       |
|           30 |     4163 | 2026-02-23 | Illwill               | L   | 0.550      | -            | -                | -                | -         |    -7.20 | DGL, KEi, Kunai, Kylar, mynio       |
|           29 |     4177 | 2026-02-22 | ECSTATIC              | L   | 0.547      | -            | -                | -                | -         |    -7.96 | DGL, KEi, Kunai, Kylar, mynio       |
|           28 |     4179 | 2026-02-22 | SINNERS Esports       | W   | 0.547      | 0.341        | 0.120 (0.022)    | -                | 1 (0.547) |    14.60 | DGL, KEi, Kunai, Kylar, mynio       |
|           27 |     4183 | 2026-02-22 | GamerLegion           | L   | 0.546      | -            | -                | -                | -         |    -0.64 | DGL, KEi, Kunai, Kylar, mynio       |
|           26 |     4200 | 2026-02-22 | Persona Grata         | W   | 0.546      | -            | -                | -                | -         |     2.79 | DGL, KEi, Kunai, Kylar, mynio       |
|           25 |     4210 | 2026-02-22 | Avanti Esport         | W   | 0.545      | -            | -                | -                | -         |     0.32 | DGL, KEi, Kunai, Kylar, mynio       |
|           24 |     4264 | 2026-02-21 | Young Ninjas          | L   | 0.539      | -            | -                | -                | -         |   -13.64 | DGL, KEi, Kunai, Kylar, mynio       |
|           23 |     4279 | 2026-02-21 | Acend                 | L   | 0.538      | -            | -                | -                | -         |    -5.21 | DGL, KEi, Kunai, Kylar, mynio       |
|           22 |     4291 | 2026-02-21 | Tung Tung Sahur       | W   | 0.537      | -            | -                | -                | -         |     1.08 | DGL, KEi, Kunai, Kylar, mynio       |
|           21 |     4512 | 2026-02-17 | Alliance              | L   | 0.510      | -            | -                | -                | -         |    -3.07 | DGL, KEi, Kunai, Kylar, mynio       |
|           20 |     4546 | 2026-02-16 | ALGO Esports          | W   | 0.504      | -            | -                | -                | -         |     1.85 | DGL, KEi, Kunai, Kylar, mynio       |
|           19 |     4631 | 2026-02-14 | Nexus Gaming          | W   | 0.493      | -            | -                | -                | -         |     1.85 | DGL, KEi, Kunai, Kylar, mynio       |
|           18 |     4705 | 2026-02-13 | TNC Esport            | L   | 0.485      | -            | -                | -                | -         |   -10.38 | DGL, KEi, Kunai, Kylar, mynio       |
|           17 |     4782 | 2026-02-11 | VP.Prodigy            | L   | 0.473      | -            | -                | -                | -         |   -14.10 | DGL, KEi, Kunai, Kylar, mynio       |
|           16 |     4857 | 2026-02-09 | SPARTA Esports        | W   | 0.458      | 0.435        | 0.039 (0.008)    | -                | -         |     8.69 | DGL, KEi, Kunai, Kylar, mynio       |
|           15 |     4871 | 2026-02-08 | OG                    | L   | 0.453      | -            | -                | -                | -         |    -5.26 | DGL, KEi, Kunai, Kylar, mynio       |
|           14 |     4879 | 2026-02-08 | Lazer Cats            | W   | 0.453      | -            | -                | -                | -         |     2.62 | DGL, KEi, Kunai, Kylar, mynio       |
|           13 |     5092 | 2026-02-01 | WOPA Esport           | L   | 0.404      | -            | -                | -                | -         |    -6.33 | DGL, KEi, Kunai, Kylar, mynio       |
|           12 |     5314 | 2026-01-24 | AM Gaming             | L   | 0.351      | -            | -                | -                | -         |   -10.37 | DGL, KEi, Kunai, Kylar, mynio       |
|           11 |     5345 | 2026-01-23 | MASONIC               | L   | 0.346      | -            | -                | -                | -         |    -6.39 | DGL, KEi, Kunai, Kylar, mynio       |
|           10 |     5413 | 2026-01-22 | FORZE Reload          | W   | 0.338      | -            | -                | -                | -         |     0.80 | DGL, KEi, Kunai, Kylar, mynio       |
|            9 |     5474 | 2026-01-20 | FAVBET Team           | L   | 0.324      | -            | -                | -                | -         |    -8.66 | DGL, KEi, Kunai, Kylar, mynio       |
|            8 |     5509 | 2026-01-18 | DragonClaw            | L   | 0.312      | -            | -                | -                | -         |    -7.82 | DGL, KEi, Kunai, Kylar, mynio       |
|            7 |     5570 | 2026-01-17 | The Last Resort       | W   | 0.304      | -            | -                | -                | -         |     1.48 | DGL, KEi, Kunai, Kylar, mynio       |
|            6 |     5739 | 2026-01-10 | HYPERSPIRIT           | L   | 0.258      | -            | -                | -                | -         |    -6.37 | DGL, KEi, Kunai, Kylar, mynio       |
|            5 |     5854 | 2025-12-22 | GenOne                | L   | 0.132      | -            | -                | -                | -         |    -3.55 | DGL, KEi, Kunai, Kylar, mynio       |
|            4 |     5858 | 2025-12-21 | TNC Esport            | W   | 0.126      | -            | -                | -                | -         |     1.06 | DGL, KEi, Kunai, Kylar, mynio       |
|            3 |     5872 | 2025-12-21 | Persona Grata         | W   | 0.124      | -            | -                | -                | -         |     0.43 | DGL, KEi, Kunai, Kylar, mynio       |
|            2 |     5884 | 2025-12-20 | VP.Prodigy            | W   | 0.120      | -            | -                | -                | -         |     0.11 | DGL, KEi, Kunai, Kylar, mynio       |
|            1 |     5894 | 2025-12-20 | Project 91 Team       | W   | 0.118      | -            | -                | -                | -         |     0.25 | DGL, KEi, Kunai, Kylar, mynio       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,277.66)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-04-16 |      0.897 | $1,000.00      | $896.67         |
| 2026-03-24 |      0.747 | $2,500.00      | $1,867.48       |
| 2025-12-21 |      0.126 | $2,088.00      | $263.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
