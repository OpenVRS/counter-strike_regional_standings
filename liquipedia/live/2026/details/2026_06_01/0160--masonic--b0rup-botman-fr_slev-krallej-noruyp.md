### Roster Details<br />
Team Name: MASONIC<br />
Roster: b0RUP, Botman, Frøslev, KralleJ, Noruyp<br />
Global Rank: [160](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [106]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  856.1<br />
<br />
Final Rank Value (856.1) = Starting Rank Value (1156.7) + Head To Head Adjustments (-300.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.156[<sup>2</sup>](#table1)
- LAN Wins: 0.825[<sup>2</sup>](#table1)

The average of these factors is 0.398<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1156.7
- 400 + ( ( 0.398 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1156.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.605
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           82 |      289 | 2026-05-23 | ASTRAL Esports            | L   | 1.000      | -            | -                | -                | -         |   -11.27 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           81 |      435 | 2026-05-20 | CYBERSHOKE Prospects      | L   | 1.000      | -            | -                | -                | -         |   -10.71 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           80 |      465 | 2026-05-19 | Project 91 Team           | W   | 1.000      | -            | -                | -                | -         |     9.51 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           79 |      512 | 2026-05-17 | IC Academy                | L   | 1.000      | -            | -                | -                | -         |   -15.95 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           78 |      519 | 2026-05-17 | Honvéd Esport             | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.00 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           77 |      530 | 2026-05-16 | A Great Chaos             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.76 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           76 |      538 | 2026-05-16 | BASEMENT BOYS             | L   | 1.000      | -            | -                | -                | -         |    -8.20 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           75 |      547 | 2026-05-16 | Rune Eaters Esports       | L   | 1.000      | -            | -                | -                | -         |   -17.04 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           74 |      549 | 2026-05-16 | PURE                      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.43 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           73 |      615 | 2026-05-13 | G2 Ares                   | L   | 1.000      | -            | -                | -                | -         |   -10.27 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           72 |      655 | 2026-05-12 | Rune Eaters Esports       | W   | 1.000      | 0.143        | -                | 0.687 (0.098)    | -         |    13.19 | b0RUP, Botman, Frøslev, KralleJ, Noruyp |
|           71 |     1226 | 2026-04-26 | WOPA Esport               | L   | 0.965      | -            | -                | -                | -         |    -8.47 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           70 |     1249 | 2026-04-26 | WAZABI                    | W   | 0.963      | -            | -                | -                | 1 (0.963) |    17.08 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           69 |     1283 | 2026-04-25 | Linx Legacy Esport        | W   | 0.960      | -            | -                | -                | 1 (0.960) |     1.95 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           68 |     1307 | 2026-04-25 | G2 Ares                   | L   | 0.958      | -            | -                | -                | -         |   -10.06 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           67 |     1348 | 2026-04-24 | TNC Esport                | W   | 0.953      | 0.384        | 0.022 (0.008)    | 1.000 (0.366)    | -         |    15.88 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           66 |     1417 | 2026-04-22 | OLDBOYS                   | L   | 0.939      | -            | -                | -                | -         |   -20.60 | Avou, b0RUP, Botman, KralleJ, Noruyp    |
|           65 |     1711 | 2026-04-08 | Persona Grata             | L   | 0.843      | -            | -                | -                | -         |   -16.45 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           64 |     1741 | 2026-04-07 | EC BANGA                  | W   | 0.838      | -            | -                | -                | -         |     1.35 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           63 |     2571 | 2026-03-27 | Rottweilers               | L   | 0.764      | -            | -                | -                | -         |   -19.72 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           62 |     2693 | 2026-03-24 | Ex-Zero Tenacity          | L   | 0.745      | -            | -                | -                | -         |   -14.69 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           61 |     2788 | 2026-03-23 | Home                      | W   | 0.738      | -            | -                | -                | -         |     1.87 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           60 |     2999 | 2026-03-19 | Ex-Zero Tenacity          | L   | 0.711      | -            | -                | -                | -         |   -14.55 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           59 |     3019 | 2026-03-18 | Home                      | L   | 0.706      | -            | -                | -                | -         |   -20.73 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           58 |     3023 | 2026-03-18 | ENCE                      | L   | 0.706      | -            | -                | -                | -         |   -15.07 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           57 |     3082 | 2026-03-17 | OMEGA                     | L   | 0.698      | -            | -                | -                | -         |    -8.62 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           56 |     3128 | 2026-03-16 | Players (European team)   | W   | 0.692      | -            | -                | -                | -         |     1.63 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           55 |     3202 | 2026-03-14 | Sashi Esport              | L   | 0.679      | -            | -                | -                | -         |    -7.24 | Avou, Botman, KralleJ, N4XX1S, Noruyp   |
|           54 |     3215 | 2026-03-14 | ECSTATIC                  | L   | 0.678      | -            | -                | -                | -         |    -5.69 | Avou, Botman, KralleJ, N4XX1S, Noruyp   |
|           53 |     3220 | 2026-03-14 | Sashi Esport              | W   | 0.677      | 0.356        | 0.008 (0.002)    | 0.517 (0.125)    | 1 (0.677) |    14.29 | Avou, Botman, KralleJ, N4XX1S, Noruyp   |
|           52 |     3431 | 2026-03-09 | Eternal premium           | L   | 0.646      | -            | -                | -                | -         |   -17.48 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           51 |     3439 | 2026-03-09 | Team Voca                 | L   | 0.646      | -            | -                | -                | -         |    -3.43 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           50 |     3451 | 2026-03-09 | Betclic Apogee Esports    | L   | 0.645      | -            | -                | -                | -         |    -5.00 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           49 |     3466 | 2026-03-09 | AM Gaming                 | W   | 0.644      | 0.341        | 0.016 (0.003)    | 0.724 (0.159)    | 1 (0.644) |    16.23 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           48 |     3492 | 2026-03-08 | 100 Thieves               | L   | 0.640      | -            | -                | -                | -         |    -2.54 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           47 |     3503 | 2026-03-08 | Evo Novo                  | W   | 0.640      | -            | -                | -                | 1 (0.640) |     0.65 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           46 |     3513 | 2026-03-08 | Sashi Esport              | L   | 0.639      | -            | -                | -                | -         |    -6.46 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           45 |     3522 | 2026-03-08 | Esport Academy Copenhagen | L   | 0.639      | -            | -                | -                | -         |    -5.46 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           44 |     3546 | 2026-03-08 | Johnny Speeds             | W   | 0.638      | 0.341        | 0.048 (0.010)    | 0.813 (0.177)    | 1 (0.638) |    16.05 | Avou, Botman, KralleJ, N4XX1$, Noruyp   |
|           43 |     3683 | 2026-03-05 | Ex-Zero Tenacity          | L   | 0.618      | -            | -                | -                | -         |   -16.11 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           42 |     3708 | 2026-03-04 | BASEMENT BOYS             | L   | 0.613      | -            | -                | -                | -         |    -6.30 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           41 |     3943 | 2026-02-27 | ENCE                      | W   | 0.579      | 0.384        | 0.010 (0.002)    | 0.573 (0.127)    | -         |     5.16 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           40 |     4003 | 2026-02-26 | Aurora Young Blud         | L   | 0.572      | -            | -                | -                | -         |   -15.94 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           39 |     4068 | 2026-02-25 | Cirahvi                   | W   | 0.564      | 0.384        | -                | 0.562 (0.122)    | -         |     3.75 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           38 |     4156 | 2026-02-23 | BC.Game Esports           | L   | 0.551      | -            | -                | -                | -         |    -6.94 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           37 |     4166 | 2026-02-23 | SINNERS Esports           | L   | 0.550      | -            | -                | -                | -         |    -1.94 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           36 |     4190 | 2026-02-22 | Sashi Esport              | L   | 0.546      | -            | -                | -                | -         |    -5.90 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           35 |     4196 | 2026-02-22 | BOSS                      | W   | 0.546      | -            | -                | -                | 1 (0.546) |     5.00 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           34 |     4215 | 2026-02-22 | Illwill                   | L   | 0.545      | -            | -                | -                | -         |    -6.18 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           33 |     4223 | 2026-02-22 | 9INE                      | W   | 0.545      | 0.341        | 0.010 (0.002)    | -                | -         |     7.27 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           32 |     4226 | 2026-02-22 | BC.Game Esports           | L   | 0.545      | -            | -                | -                | -         |    -6.90 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           31 |     4278 | 2026-02-21 | ECSTATIC                  | L   | 0.538      | -            | -                | -                | -         |    -6.33 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           30 |     4516 | 2026-02-16 | Bushido Wildcats          | L   | 0.506      | -            | -                | -                | -         |   -14.92 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           29 |     4752 | 2026-02-12 | ECSTATIC                  | L   | 0.479      | -            | -                | -                | -         |    -6.11 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           28 |     4759 | 2026-02-12 | KOLESIE                   | L   | 0.478      | -            | -                | -                | -         |    -5.26 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           27 |     4766 | 2026-02-12 | ECSTATIC                  | W   | 0.477      | 0.334        | 0.040 (0.006)    | -                | -         |     8.88 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           26 |     4841 | 2026-02-10 | VP.Prodigy                | L   | 0.464      | -            | -                | -                | -         |   -13.59 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           25 |     4856 | 2026-02-09 | PsychoFace                | L   | 0.458      | -            | -                | -                | -         |    -8.90 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           24 |     4909 | 2026-02-07 | TNC Esport                | W   | 0.445      | 0.396        | 0.022 (0.004)    | 1.000 (0.176)    | -         |     5.42 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           23 |     4913 | 2026-02-07 | VP.Prodigy                | L   | 0.444      | -            | -                | -                | -         |   -13.20 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           22 |     4970 | 2026-02-05 | Bushido Wildcats          | W   | 0.432      | -            | -                | -                | -         |     0.73 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           21 |     4998 | 2026-02-04 | Players (European team)   | W   | 0.424      | -            | -                | -                | -         |     0.53 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           20 |     5078 | 2026-02-01 | Eternal Fire              | L   | 0.406      | -            | -                | -                | -         |   -11.99 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           19 |     5168 | 2026-01-30 | Sashi Esport              | L   | 0.390      | -            | -                | -                | -         |    -4.80 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           18 |     5256 | 2026-01-26 | Acend                     | W   | 0.364      | 0.371        | 0.022 (0.003)    | 0.828 (0.112)    | -         |     8.27 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           17 |     5345 | 2026-01-23 | Phantom Esports           | W   | 0.346      | 0.396        | -                | 0.736 (0.101)    | -         |     6.39 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           16 |     5410 | 2026-01-22 | Persona Grata             | L   | 0.338      | -            | -                | -                | -         |    -8.95 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           15 |     5414 | 2026-01-22 | Eternal Fire              | L   | 0.338      | -            | -                | -                | -         |   -10.03 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           14 |     5444 | 2026-01-21 | FORZE Reload              | L   | 0.332      | -            | -                | -                | -         |    -9.54 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           13 |     5464 | 2026-01-20 | BRUTE                     | L   | 0.326      | -            | -                | -                | -         |    -9.96 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           12 |     5523 | 2026-01-18 | FORZE Reload              | W   | 0.310      | -            | -                | -                | -         |     0.83 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           11 |     5562 | 2026-01-17 | WOPA Esport               | W   | 0.305      | 0.396        | 0.020 (0.002)    | -                | -         |     5.26 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           10 |     5630 | 2026-01-16 | TNC Esport                | L   | 0.298      | -            | -                | -                | -         |    -6.47 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            9 |     5669 | 2026-01-15 | HYPERSPIRIT               | W   | 0.291      | -            | -                | -                | -         |     2.46 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            8 |     5691 | 2026-01-14 | Cirahvi                   | W   | 0.284      | -            | -                | -                | -         |     1.07 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            7 |     5700 | 2026-01-13 | Eternal Fire              | L   | 0.279      | -            | -                | -                | -         |    -8.44 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            6 |     5709 | 2026-01-13 | Illwill                   | L   | 0.278      | -            | -                | -                | -         |    -5.09 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            5 |     5714 | 2026-01-12 | ALLINNERS                 | W   | 0.273      | -            | -                | -                | -         |     0.56 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            4 |     5717 | 2026-01-12 | Cirahvi                   | W   | 0.272      | -            | -                | -                | -         |     0.97 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            3 |     5738 | 2026-01-10 | AaB esport                | L   | 0.259      | -            | -                | -                | -         |    -7.84 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            2 |     5740 | 2026-01-10 | Japczany                  | W   | 0.258      | -            | -                | -                | -         |     0.19 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            1 |     5755 | 2026-01-06 | Ex-FUT Academy            | W   | 0.231      | -            | -                | -                | -         |     0.10 | Avou, Botman, Bukhavez, KralleJ, Noruyp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,792.32)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $1,743.00      | $1,743.00       |
| 2026-04-26 |      0.965 | $1,568.60      | $1,513.48       |
| 2026-03-15 |      0.685 | $782.00        | $535.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
