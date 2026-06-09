### Roster Details<br />
Team Name: Sashi Esport<br />
Roster: acoR, Beccie, Cabbi, MistR, Zyphon<br />
Global Rank: [62](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [45]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1197.4<br />
<br />
Final Rank Value (1197.4) = Starting Rank Value (1197.6) + Head To Head Adjustments (-0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.741[<sup>2</sup>](#table1)

The average of these factors is 0.419<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1197.6
- 400 + ( ( 0.419 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1197.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.517
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      295 | 2026-05-23 | Walczaki                  | L   | 1.000      | -            | -                | -                | -         |   -11.24 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           56 |      341 | 2026-05-22 | EYEBALLERS                | L   | 1.000      | -            | -                | -                | -         |    -9.54 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           55 |      473 | 2026-05-19 | HOTU                      | L   | 1.000      | -            | -                | -                | -         |    -8.92 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           54 |      579 | 2026-05-15 | Oxuji Esports             | W   | 1.000      | 0.435        | 0.008 (0.003)    | 0.789 (0.343)    | -         |    12.25 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           53 |      661 | 2026-05-12 | TDK                       | W   | 1.000      | 0.435        | 0.038 (0.017)    | 0.854 (0.371)    | -         |    15.65 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           52 |      747 | 2026-05-10 | Ex-RUBY                   | L   | 1.000      | -            | -                | -                | -         |   -20.29 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           51 |      792 | 2026-05-08 | Lavked                    | W   | 1.000      | 0.435        | 0.019 (0.008)    | 1.000 (0.435)    | -         |    10.20 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           50 |     1449 | 2026-04-20 | SINNERS Esports           | W   | 0.925      | 0.362        | 0.120 (0.040)    | 0.589 (0.198)    | -         |    22.47 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           49 |     1538 | 2026-04-15 | TNC Esport                | W   | 0.892      | 0.362        | 0.022 (0.007)    | 1.000 (0.323)    | -         |     6.79 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           48 |     1595 | 2026-04-12 | Fnatic                    | W   | 0.872      | 0.362        | 0.016 (0.005)    | 0.655 (0.207)    | -         |    11.01 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           47 |     2165 | 2026-04-01 | Passion UA                | L   | 0.798      | -            | -                | -                | -         |    -8.61 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           46 |     2222 | 2026-03-31 | Team Liquid               | W   | 0.793      | 0.354        | 0.137 (0.038)    | -                | 1 (0.793) |    16.65 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           45 |     2252 | 2026-03-31 | Eternal Fire              | W   | 0.792      | 0.354        | -                | 0.774 (0.217)    | 1 (0.792) |    14.46 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           44 |     2281 | 2026-03-31 | Aurora Gaming             | L   | 0.791      | -            | -                | -                | -         |    -0.61 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           43 |     2337 | 2026-03-30 | Fnatic                    | W   | 0.785      | 0.354        | 0.016 (0.004)    | 0.655 (0.182)    | 1 (0.785) |    10.15 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           42 |     2422 | 2026-03-29 | HAVU                      | W   | 0.778      | -            | -                | -                | 1 (0.778) |     5.83 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           41 |     2430 | 2026-03-29 | Strael-Bora               | W   | 0.777      | -            | -                | -                | 1 (0.777) |     1.67 | acoR, Beccie, Cabbi, Fessor, MistR    |
|           40 |     3167 | 2026-03-15 | Tricked Esport            | L   | 0.685      | -            | -                | -                | -         |    -7.88 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           39 |     3178 | 2026-03-15 | Esport Academy Copenhagen | W   | 0.684      | 0.356        | -                | 0.769 (0.187)    | 1 (0.684) |    12.37 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           38 |     3202 | 2026-03-14 | MASONIC                   | W   | 0.679      | -            | -                | -                | 1 (0.679) |     7.24 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           37 |     3214 | 2026-03-14 | Prestige Esport           | W   | 0.678      | -            | -                | -                | 1 (0.678) |     1.78 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           36 |     3220 | 2026-03-14 | MASONIC                   | L   | 0.677      | -            | -                | -                | -         |   -14.29 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           35 |     3395 | 2026-03-10 | Team Nemesis              | L   | 0.652      | -            | -                | -                | -         |    -6.55 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           34 |     3472 | 2026-03-09 | K27                       | L   | 0.644      | -            | -                | -                | -         |    -4.45 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           33 |     3488 | 2026-03-08 | Johnny Speeds             | L   | 0.640      | -            | -                | -                | -         |    -7.86 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           32 |     3493 | 2026-03-08 | Evo Novo                  | W   | 0.640      | -            | -                | -                | 1 (0.640) |     0.30 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           31 |     3513 | 2026-03-08 | MASONIC                   | W   | 0.639      | -            | -                | -                | 1 (0.639) |     6.46 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           30 |     3521 | 2026-03-08 | 100 Thieves               | L   | 0.639      | -            | -                | -                | -         |    -5.03 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           29 |     3538 | 2026-03-08 | Esport Academy Copenhagen | L   | 0.638      | -            | -                | -                | -         |    -9.19 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           28 |     3591 | 2026-03-07 | Oxuji Esports             | W   | 0.631      | 0.371        | -                | 0.789 (0.184)    | -         |    11.59 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           27 |     3737 | 2026-03-04 | ENCE                      | W   | 0.611      | -            | -                | -                | -         |     3.60 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           26 |     3855 | 2026-03-01 | Lazer Cats                | L   | 0.592      | -            | -                | -                | -         |   -14.88 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           25 |     3886 | 2026-02-28 | OMEGA                     | W   | 0.586      | 0.384        | 0.016 (0.004)    | -                | -         |     9.20 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           24 |     3959 | 2026-02-27 | VP.Prodigy                | W   | 0.577      | -            | -                | -                | -         |     1.24 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           23 |     4155 | 2026-02-23 | Phantom Esports           | L   | 0.551      | -            | -                | -                | -         |    -9.67 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           22 |     4164 | 2026-02-23 | GamerLegion               | L   | 0.550      | -            | -                | -                | -         |    -0.81 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           21 |     4180 | 2026-02-22 | Illwill                   | L   | 0.547      | -            | -                | -                | -         |    -8.49 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           20 |     4190 | 2026-02-22 | MASONIC                   | W   | 0.546      | -            | -                | -                | -         |     5.90 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           19 |     4198 | 2026-02-22 | 9INE                      | L   | 0.546      | -            | -                | -                | -         |   -12.75 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           18 |     4206 | 2026-02-22 | BC.Game Esports           | W   | 0.545      | 0.341        | 0.048 (0.009)    | -                | -         |     7.58 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           17 |     4222 | 2026-02-22 | BOSS                      | W   | 0.545      | -            | -                | -                | -         |     3.08 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           16 |     4758 | 2026-02-12 | ECSTATIC                  | L   | 0.478      | -            | -                | -                | -         |    -8.23 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           15 |     4765 | 2026-02-12 | KOLESIE                   | L   | 0.477      | -            | -                | -                | -         |    -7.36 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           14 |     5017 | 2026-02-03 | AM Gaming                 | L   | 0.419      | -            | -                | -                | -         |   -12.38 | Beccie, Cabbi, MistR, n1Xen, Zyphon   |
|           13 |     5091 | 2026-02-01 | DragonClaw                | L   | 0.404      | -            | -                | -                | -         |   -10.05 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           12 |     5168 | 2026-01-30 | MASONIC                   | W   | 0.390      | -            | -                | -                | -         |     4.80 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           11 |     5577 | 2026-01-17 | Johnny Speeds             | L   | 0.304      | -            | -                | -                | -         |    -3.38 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           10 |     5596 | 2026-01-16 | SemperFi Esports          | W   | 0.300      | -            | -                | -                | -         |     3.13 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            9 |     5608 | 2026-01-16 | Tricked Esport            | L   | 0.299      | -            | -                | -                | -         |    -3.69 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            8 |     5621 | 2026-01-16 | HEROIC Academy            | W   | 0.298      | -            | -                | -                | -         |     1.72 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            7 |     5629 | 2026-01-16 | Megoshort                 | W   | 0.298      | -            | -                | -                | -         |     1.48 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            6 |     5633 | 2026-01-16 | Hemmaplan                 | W   | 0.298      | -            | -                | -                | -         |     0.11 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|            5 |     6029 | 2025-12-10 | SIXSEVEN                  | L   | 0.052      | -            | -                | -                | -         |    -1.58 | Beccie, Cabbi, kristou, Lucky, MistR  |
|            4 |     6058 | 2025-12-08 | RUBY                      | W   | 0.040      | -            | -                | -                | -         |     0.02 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            3 |     6108 | 2025-12-06 | Sangal Esports            | L   | 0.025      | -            | -                | -                | -         |    -0.75 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            2 |     6143 | 2025-12-05 | Lavked                    | L   | 0.017      | -            | -                | -                | -         |    -0.45 | Beccie, Cabbi, kristou, MistR, Zyphon |
|            1 |     6177 | 2025-12-03 | FORZE Reload              | W   | 0.007      | -            | -                | -                | -         |     0.01 | Beccie, Cabbi, kristou, MistR, Zyphon |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,853.55)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $1,160.00      | $1,160.00       |
| 2026-03-15 |      0.685 | $3,134.00      | $2,147.44       |
| 2026-03-11 |      0.657 | $1,000.00      | $656.94         |
| 2026-03-01 |      0.593 | $1,500.00      | $889.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
