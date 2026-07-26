### Roster Details<br />
Team Name: WOPA Esport<br />
Roster: kwezz, Patti, sL1m3, thamlike, Zanto<br />
Global Rank: [65](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [45]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1096.3<br />
<br />
Final Rank Value (1096.3) = Starting Rank Value (1215.0) + Head To Head Adjustments (-118.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.372[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.151[<sup>2</sup>](#table1)
- LAN Wins: 0.906[<sup>2</sup>](#table1)

The average of these factors is 0.430<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1215.0
- 400 + ( ( 0.430 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1215.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.550
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |      459 | 2026-06-13 | MASQ                      | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.30 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           61 |      475 | 2026-06-13 | MASONIC                   | L   | 1.000      | -            | -                | -                | -         |   -23.67 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           60 |      509 | 2026-06-12 | Washed (Danish team)      | W   | 0.998      | 0.357        | 0.013 (0.005)    | -                | 1 (0.998) |     7.16 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           59 |      514 | 2026-06-12 | Ex-Sashi Academy          | W   | 0.998      | 0.357        | 0.003 (0.001)    | -                | 1 (0.998) |     4.88 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           58 |     1063 | 2026-05-24 | 100 Thieves               | W   | 0.871      | 0.341        | 0.049 (0.015)    | 0.767 (0.228)    | 1 (0.871) |    19.54 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           57 |     1072 | 2026-05-24 | Fortress Esport           | W   | 0.871      | 0.341        | 0.003 (0.001)    | -                | 1 (0.871) |     4.24 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           56 |     1080 | 2026-05-24 | 100 Thieves               | L   | 0.870      | -            | -                | -                | -         |    -7.51 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           55 |     1117 | 2026-05-23 | Invicta (Danish team)     | W   | 0.864      | -            | -                | -                | 1 (0.864) |     2.45 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           54 |     1143 | 2026-05-23 | 95 Vikings                | W   | 0.862      | -            | -                | -                | 1 (0.862) |     0.57 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           53 |     1828 | 2026-05-01 | Ursa                      | L   | 0.716      | -            | -                | -                | -         |   -14.73 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           52 |     1954 | 2026-04-28 | BRUTE                     | W   | 0.696      | 0.344        | 0.003 (0.001)    | 0.407 (0.097)    | -         |     3.11 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           51 |     2000 | 2026-04-27 | Lilmix                    | L   | 0.689      | -            | -                | -                | -         |   -18.36 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           50 |     2046 | 2026-04-26 | MASONIC                   | W   | 0.684      | 0.322        | 0.011 (0.002)    | 0.493 (0.109)    | 1 (0.684) |     5.99 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           49 |     2070 | 2026-04-26 | Ex-Sashi Academy          | W   | 0.682      | -            | -                | -                | 1 (0.682) |     3.55 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           48 |     2105 | 2026-04-25 | XI Esport                 | W   | 0.678      | -            | -                | -                | 1 (0.678) |     1.70 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           47 |     2455 | 2026-04-11 | Ex-RUBY                   | L   | 0.582      | -            | -                | -                | -         |   -12.51 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           46 |     2569 | 2026-04-07 | Walczaki                  | L   | 0.556      | -            | -                | -                | -         |    -7.91 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           45 |     2592 | 2026-04-06 | ENCE                      | W   | 0.551      | 0.435        | 0.010 (0.002)    | 0.485 (0.116)    | -         |     2.68 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           44 |     2635 | 2026-04-05 | Ex-RUBY                   | L   | 0.544      | -            | -                | -                | -         |   -12.24 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           43 |     2775 | 2026-04-03 | RUSTEC                    | L   | 0.532      | -            | -                | -                | -         |   -14.19 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           42 |     2813 | 2026-04-03 | Ex-Zero Tenacity          | W   | 0.530      | 0.371        | -                | 0.866 (0.170)    | -         |     2.48 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           41 |     3002 | 2026-04-01 | PsychoFace                | W   | 0.516      | 0.435        | 0.027 (0.006)    | 0.974 (0.219)    | -         |     5.85 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           40 |     3115 | 2026-03-31 | Team Nemesis              | L   | 0.509      | -            | -                | -                | -         |    -4.56 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           39 |     3140 | 2026-03-30 | Bebop                     | W   | 0.505      | 0.435        | -                | 0.689 (0.151)    | -         |     2.31 | anarkez, kwezz, Patti, thamlike, Zanto |
|           38 |     3156 | 2026-03-30 | Bebop                     | W   | 0.504      | 0.435        | -                | 0.689 (0.151)    | -         |     2.35 | anarkez, kwezz, Patti, thamlike, Zanto |
|           37 |     3182 | 2026-03-30 | Hypewrld                  | W   | 0.502      | -            | -                | -                | -         |     1.28 | anarkez, kwezz, Patti, thamlike, Zanto |
|           36 |     3230 | 2026-03-29 | PsychoFace                | L   | 0.497      | -            | -                | -                | -         |   -10.61 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           35 |     3377 | 2026-03-27 | Ursa                      | L   | 0.484      | -            | -                | -                | -         |   -12.01 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           34 |     3472 | 2026-03-25 | Los kogutos               | W   | 0.470      | 0.435        | 0.019 (0.004)    | 0.940 (0.192)    | -         |     3.12 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           33 |     3591 | 2026-03-23 | Cirahvi                   | W   | 0.458      | 0.435        | 0.004 (0.001)    | -                | -         |     1.17 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           32 |     3697 | 2026-03-21 | Los kogutos               | L   | 0.445      | -            | -                | -                | -         |   -11.43 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           31 |     3751 | 2026-03-20 | Persona Grata             | W   | 0.438      | -            | -                | -                | -         |     0.53 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           30 |     3809 | 2026-03-19 | Bushido Wildcats          | W   | 0.431      | -            | -                | -                | -         |     1.22 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           29 |     3841 | 2026-03-18 | KHAN                      | W   | 0.425      | -            | -                | -                | -         |     0.18 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           28 |     3904 | 2026-03-17 | G2 Ares                   | L   | 0.417      | -            | -                | -                | -         |   -10.02 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           27 |     4025 | 2026-03-14 | Bebop                     | L   | 0.398      | -            | -                | -                | -         |   -11.15 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           26 |     4095 | 2026-03-13 | Rune Eaters Esports       | L   | 0.389      | -            | -                | -                | -         |    -8.51 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           25 |     4170 | 2026-03-11 | Acend                     | L   | 0.378      | -            | -                | -                | -         |    -3.39 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           24 |     4255 | 2026-03-09 | Hashiras                  | W   | 0.365      | 0.435        | -                | 0.487 (0.077)    | -         |     0.82 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           23 |     4672 | 2026-03-01 | Ex-Zero Tenacity          | L   | 0.311      | -            | -                | -                | -         |    -8.92 | kwezz, Patti, sL1m3, thamlike, Zanto   |
|           22 |     5735 | 2026-02-07 | Esport Academy Copenhagen | L   | 0.163      | -            | -                | -                | -         |    -2.86 | kwezz, Patti, SinK, thamlike, Zanto    |
|           21 |     5913 | 2026-02-01 | Phantom Esports           | W   | 0.123      | -            | -                | -                | -         |     0.13 | kwezz, Patti, SinK, thamlike, Zanto    |
|           20 |     6125 | 2026-01-24 | HAVU                      | L   | 0.071      | -            | -                | -                | -         |    -2.02 | kwezz, Patti, SinK, thamlike, Zanto    |
|           19 |     6146 | 2026-01-23 | SINQU Esports             | W   | 0.066      | -            | -                | -                | -         |     0.04 | kwezz, Patti, SinK, thamlike, Zanto    |
|           18 |     6148 | 2026-01-23 | Sidequest                 | W   | 0.066      | -            | -                | -                | -         |     0.02 | kwezz, Patti, SinK, thamlike, Zanto    |
|           17 |     6152 | 2026-01-23 | Alliance                  | L   | 0.066      | -            | -                | -                | -         |    -0.15 | kwezz, Patti, SinK, thamlike, Zanto    |
|           16 |     6153 | 2026-01-23 | Universe                  | W   | 0.066      | -            | -                | -                | -         |     0.02 | kwezz, Patti, SinK, thamlike, Zanto    |
|           15 |     6329 | 2026-01-18 | Lilmix                    | L   | 0.031      | -            | -                | -                | -         |    -0.92 | kwezz, Patti, SinK, thamlike, Zanto    |
|           14 |     6369 | 2026-01-17 | Megoshort                 | W   | 0.025      | -            | -                | -                | -         |     0.05 | kwezz, Patti, SinK, thamlike, Zanto    |
|           13 |     6383 | 2026-01-17 | MASONIC                   | L   | 0.024      | -            | -                | -                | -         |    -0.46 | kwezz, Patti, SinK, thamlike, Zanto    |
|           12 |     6388 | 2026-01-17 | Johnny Speeds             | L   | 0.023      | -            | -                | -                | -         |    -0.42 | kwezz, Patti, SinK, thamlike, Zanto    |
|           11 |     6397 | 2026-01-17 | HEROIC Academy            | W   | 0.023      | -            | -                | -                | -         |     0.07 | kwezz, Patti, SinK, thamlike, Zanto    |
|           10 |     6412 | 2026-01-16 | Prestige Esport           | L   | 0.019      | -            | -                | -                | -         |    -0.57 | kwezz, Patti, SinK, thamlike, Zanto    |
|            9 |     6422 | 2026-01-16 | Johnny Speeds             | W   | 0.018      | -            | -                | -                | -         |     0.25 | kwezz, Patti, SinK, thamlike, Zanto    |
|            8 |     6436 | 2026-01-16 | Infinite Gaming           | W   | 0.018      | -            | -                | -                | -         |     0.01 | kwezz, Patti, SinK, thamlike, Zanto    |
|            7 |     6448 | 2026-01-16 | AaB esport                | L   | 0.017      | -            | -                | -                | -         |    -0.52 | kwezz, Patti, SinK, thamlike, Zanto    |
|            6 |     6455 | 2026-01-16 | Aimclub (Romanian team)   | W   | 0.017      | -            | -                | -                | -         |     0.07 | kwezz, Patti, SinK, thamlike, Zanto    |
|            5 |     6458 | 2026-01-16 | Ex-MANA eSports           | L   | 0.017      | -            | -                | -                | -         |    -0.48 | kwezz, Patti, SinK, thamlike, Zanto    |
|            4 |     6476 | 2026-01-15 | Bebop                     | L   | 0.012      | -            | -                | -                | -         |    -0.36 | kwezz, Patti, SinK, thamlike, Zanto    |
|            3 |     6495 | 2026-01-15 | Persona Grata             | L   | 0.009      | -            | -                | -                | -         |    -0.28 | kwezz, Patti, SinK, thamlike, Zanto    |
|            2 |     6508 | 2026-01-14 | Los kogutos               | W   | 0.004      | -            | -                | -                | -         |     0.02 | kwezz, Patti, SinK, thamlike, Zanto    |
|            1 |     6516 | 2026-01-14 | Just Players              | L   | 0.003      | -            | -                | -                | -         |    -0.08 | kwezz, Patti, SinK, thamlike, Zanto    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,945.55)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      1.000 | $1,563.00      | $1,563.00       |
| 2026-05-24 |      0.871 | $5,804.00      | $5,057.54       |
| 2026-04-26 |      0.684 | $6,274.41      | $4,290.13       |
| 2026-01-17 |      0.026 | $1,355.00      | $34.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
