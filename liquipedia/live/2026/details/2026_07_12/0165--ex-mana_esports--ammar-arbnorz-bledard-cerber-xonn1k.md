### Roster Details<br />
Team Name: Ex-MANA eSports<br />
Roster: ammar, arbnorz, BledarD, cerber, xonn1k<br />
Global Rank: [165](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  803.3<br />
<br />
Final Rank Value (803.3) = Starting Rank Value (764.3) + Head To Head Adjustments (39.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.131[<sup>2</sup>](#table1)
- LAN Wins: 0.113[<sup>2</sup>](#table1)

The average of these factors is 0.192<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 764.3
- 400 + ( ( 0.192 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 764.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.580
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           68 |      107 | 2026-07-04 | WBT                       | L   | 1.000      | -            | -                | -                | -         |   -19.08 | ammar, BledarD, cerber, vAloN, xonn1k   |
|           67 |      234 | 2026-06-28 | Subtop De France          | W   | 1.000      | -            | -                | -                | 0 (0.000) |    10.85 | ammar, BledarD, cerber, vAloN, xonn1k   |
|           66 |      309 | 2026-06-24 | Honvéd Esport             | W   | 1.000      | 0.143        | 0.014 (0.002)    | -                | 0 (0.000) |    14.36 | ammar, BledarD, cerber, vAloN, xonn1k   |
|           65 |      583 | 2026-06-09 | Oxuji Esports             | L   | 0.976      | -            | -                | -                | -         |    -5.68 | ammar, arbnorz, BledarD, cerber, xonn1k |
|           64 |      690 | 2026-06-05 | Lavked                    | L   | 0.949      | -            | -                | -                | -         |    -6.61 | ammar, arbnorz, BledarD, cerber, xonn1k |
|           63 |      776 | 2026-05-31 | INOX Division             | L   | 0.918      | -            | -                | -                | -         |    -6.64 | ammar, arbnorz, BledarD, cerber, xonn1k |
|           62 |      986 | 2026-05-26 | ASTRAL Esports            | W   | 0.885      | 0.384        | 0.012 (0.004)    | 0.873 (0.297)    | 0 (0.000) |    20.58 | ammar, arbnorz, BledarD, cerber, xonn1k |
|           61 |     1031 | 2026-05-25 | Falcons Force             | W   | 0.877      | -            | -                | -                | 0 (0.000) |    14.13 | ammar, arbnorz, BledarD, cerber, xonn1k |
|           60 |     1093 | 2026-05-24 | Hashiras                  | L   | 0.869      | -            | -                | -                | -         |   -12.09 | ammar, BledarD, cerber, deb0, xonn1k    |
|           59 |     1150 | 2026-05-23 | GenOne                    | L   | 0.862      | -            | -                | -                | -         |    -9.25 | ammar, BledarD, cerber, deb0, xonn1k    |
|           58 |     1400 | 2026-05-15 | Falcons Force             | L   | 0.809      | -            | -                | -                | -         |   -13.79 | ammar, BledarD, cerber, SENER1, xonn1k  |
|           57 |     1422 | 2026-05-14 | BRUTE                     | L   | 0.802      | -            | -                | -                | -         |   -13.05 | ammar, BledarD, cerber, SENER1, xonn1k  |
|           56 |     1746 | 2026-05-02 | INOX Division             | L   | 0.725      | -            | -                | -                | -         |    -6.67 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           55 |     1814 | 2026-05-01 | HYPERSPIRIT               | W   | 0.717      | 0.344        | 0.004 (0.001)    | 0.488 (0.121)    | -         |    12.20 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           54 |     1855 | 2026-04-30 | ASTRAL Esports            | L   | 0.711      | -            | -                | -                | -         |    -5.25 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           53 |     1917 | 2026-04-29 | HYPERSPIRIT               | W   | 0.702      | 0.344        | 0.004 (0.001)    | 0.488 (0.118)    | -         |    12.49 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           52 |     2055 | 2026-04-26 | The Last Resort           | L   | 0.683      | -            | -                | -                | -         |    -9.81 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           51 |     2186 | 2026-04-24 | Atreides                  | L   | 0.670      | -            | -                | -                | -         |   -12.22 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           50 |     2225 | 2026-04-23 | The Last Resort           | W   | 0.663      | 0.303        | 0.008 (0.002)    | 0.509 (0.102)    | -         |    10.82 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           49 |     2286 | 2026-04-19 | Bebop                     | L   | 0.638      | -            | -                | -                | -         |    -8.94 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           48 |     2336 | 2026-04-17 | CYBERSHOKE Esports        | L   | 0.625      | -            | -                | -                | -         |    -4.52 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           47 |     2357 | 2026-04-15 | TDK                       | L   | 0.611      | -            | -                | -                | -         |    -2.87 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           46 |     2426 | 2026-04-12 | Persona Grata             | W   | 0.589      | -            | -                | -                | -         |     4.48 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           45 |     2474 | 2026-04-10 | Hashiras                  | W   | 0.577      | 0.384        | -                | 0.487 (0.108)    | -         |     7.20 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           44 |     2507 | 2026-04-09 | FC Famalicão Esports      | W   | 0.569      | -            | -                | -                | -         |     5.82 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           43 |     2585 | 2026-04-06 | Los kogutos               | L   | 0.551      | -            | -                | -                | -         |    -7.28 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           42 |     2624 | 2026-04-05 | UNiTY esports             | W   | 0.545      | 0.384        | -                | 0.432 (0.091)    | -         |     7.84 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           41 |     2692 | 2026-04-04 | HEROIC Academy            | W   | 0.538      | 0.384        | -                | 0.409 (0.085)    | -         |     8.53 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           40 |     2780 | 2026-04-03 | Johnny Speeds             | L   | 0.531      | -            | -                | -                | -         |    -2.18 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           39 |     2957 | 2026-04-01 | RUSTEC                    | W   | 0.518      | 0.384        | -                | 0.546 (0.109)    | -         |     8.86 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           38 |     3114 | 2026-03-31 | ECSTATIC                  | L   | 0.509      | -            | -                | -                | -         |    -4.76 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           37 |     3164 | 2026-03-30 | NEW VISION                | W   | 0.504      | 0.384        | 0.007 (0.001)    | -                | -         |     6.67 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           36 |     3295 | 2026-03-28 | RUSTEC                    | L   | 0.492      | -            | -                | -                | -         |    -8.03 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           35 |     3376 | 2026-03-27 | Lilmix                    | W   | 0.484      | -            | -                | -                | -         |     4.97 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           34 |     3430 | 2026-03-26 | KAJO                      | W   | 0.476      | -            | -                | -                | -         |     1.33 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           33 |     3477 | 2026-03-25 | Cirahvi                   | L   | 0.470      | -            | -                | -                | -         |    -9.08 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           32 |     3482 | 2026-03-25 | Leo Team                  | W   | 0.469      | -            | -                | -                | -         |     6.76 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           31 |     3607 | 2026-03-23 | Ex-RUBY                   | L   | 0.457      | -            | -                | -                | -         |    -4.33 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           30 |     3643 | 2026-03-22 | Nemiga Gaming             | L   | 0.452      | -            | -                | -                | -         |    -1.99 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           29 |     3699 | 2026-03-21 | Rottweilers               | W   | 0.445      | -            | -                | -                | -         |     2.95 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           28 |     3724 | 2026-03-21 | The Last Resort           | L   | 0.443      | -            | -                | -                | -         |    -6.14 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           27 |     3756 | 2026-03-20 | Rebels Gaming             | W   | 0.438      | 0.384        | 0.008 (0.001)    | 0.597 (0.101)    | -         |    10.86 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           26 |     3782 | 2026-03-20 | Persona Grata             | W   | 0.436      | -            | -                | -                | -         |     3.16 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           25 |     3814 | 2026-03-19 | EC BANGA                  | W   | 0.431      | -            | -                | -                | -         |     1.95 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           24 |     3856 | 2026-03-18 | KAJO                      | W   | 0.424      | -            | -                | -                | -         |     1.24 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           23 |     3866 | 2026-03-18 | GenOne                    | W   | 0.423      | 0.435        | 0.010 (0.002)    | 1.000 (0.184)    | -         |     7.21 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           22 |     3891 | 2026-03-17 | Eternal Fire              | L   | 0.418      | -            | -                | -                | -         |    -2.42 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           21 |     3937 | 2026-03-16 | Hindsight                 | W   | 0.412      | -            | -                | -                | -         |     2.78 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           20 |     3977 | 2026-03-15 | NOVAQ                     | W   | 0.405      | -            | -                | -                | -         |     7.61 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           19 |     4094 | 2026-03-13 | Cirahvi                   | W   | 0.389      | -            | -                | -                | -         |     4.82 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           18 |     4139 | 2026-03-12 | Ex-against All authority  | W   | 0.383      | -            | -                | -                | -         |     6.86 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           17 |     4252 | 2026-03-09 | PsychoFace                | L   | 0.365      | -            | -                | -                | -         |    -2.97 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           16 |     4820 | 2026-02-26 | 100 Thieves               | L   | 0.291      | -            | -                | -                | -         |    -0.57 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           15 |     4839 | 2026-02-26 | Eternal Fire              | L   | 0.290      | -            | -                | -                | -         |    -1.81 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           14 |     4882 | 2026-02-25 | BESTIA                    | W   | 0.284      | 0.354        | 0.021 (0.002)    | -                | 1 (0.284) |     7.89 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           13 |     4905 | 2026-02-24 | BRUTE                     | W   | 0.279      | -            | -                | -                | 1 (0.279) |     4.28 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           12 |     4915 | 2026-02-24 | LAGUNA                    | W   | 0.278      | -            | -                | -                | 1 (0.278) |     1.12 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           11 |     4943 | 2026-02-24 | 100 Thieves               | L   | 0.276      | -            | -                | -                | -         |    -0.50 | ammar, BledarD, Caleyy, cerber, SENER1  |
|           10 |     5510 | 2026-02-13 | HOTU                      | L   | 0.205      | -            | -                | -                | -         |    -0.34 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            9 |     5560 | 2026-02-12 | Esport Academy Copenhagen | W   | 0.199      | 0.384        | 0.015 (0.001)    | -                | 1 (0.199) |     5.67 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            8 |     6099 | 2026-01-25 | MOUZ NXT                  | L   | 0.077      | -            | -                | -                | -         |    -0.86 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            7 |     6143 | 2026-01-24 | BASEMENT BOYS             | W   | 0.069      | -            | -                | -                | -         |     1.99 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            6 |     6292 | 2026-01-20 | Magic                     | L   | 0.044      | -            | -                | -                | -         |    -0.03 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            5 |     6370 | 2026-01-17 | BIG                       | L   | 0.025      | -            | -                | -                | -         |    -0.01 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            4 |     6458 | 2026-01-16 | WOPA Esport               | W   | 0.017      | -            | -                | -                | -         |     0.48 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            3 |     6483 | 2026-01-15 | FUZOS                     | W   | 0.011      | -            | -                | -                | 1 (0.011) |     0.12 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            2 |     6488 | 2026-01-15 | Matrix (Ukrainian team)   | W   | 0.010      | -            | -                | -                | 1 (0.010) |     0.09 | ammar, BledarD, Caleyy, cerber, SENER1  |
|            1 |     6492 | 2026-01-15 | FUZOS                     | L   | 0.009      | -            | -                | -                | -         |    -0.19 | ammar, BledarD, Caleyy, cerber, SENER1  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($714.24)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-09 |      0.571 | $1,250.00      | $714.24         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
