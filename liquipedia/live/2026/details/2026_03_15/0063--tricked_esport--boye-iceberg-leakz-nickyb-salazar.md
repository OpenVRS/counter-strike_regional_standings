### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: Boye, IceBerg, Leakz, NickyB, salazar<br />
Global Rank: [63](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [46]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  1195.3<br />
<br />
Final Rank Value (1195.3) = Starting Rank Value (1253.5) + Head To Head Adjustments (-58.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.319[<sup>2</sup>](#table1)
- Opponent Network: 0.152[<sup>2</sup>](#table1)
- LAN Wins: 0.890[<sup>2</sup>](#table1)

The average of these factors is 0.436<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1253.5
- 400 + ( ( 0.436 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1253.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.409
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       12 | 2026-03-15 | Sashi Esport           | W   | 1.000      | 0.329        | 0.017 (0.006)    | 0.631 (0.208)    | 1 (1.000) |    13.37 | Boye, IceBerg, Leakz, NickyB, salazar |
|           49 |       22 | 2026-03-15 | ECSTATIC               | W   | 1.000      | 0.329        | 0.122 (0.040)    | 0.729 (0.240)    | 1 (1.000) |    21.93 | Boye, IceBerg, Leakz, NickyB, salazar |
|           48 |       40 | 2026-03-14 | Struggletony           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.29 | Boye, IceBerg, Leakz, NickyB, salazar |
|           47 |       45 | 2026-03-14 | Fortress Esport        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.44 | Boye, IceBerg, Leakz, NickyB, salazar |
|           46 |       52 | 2026-03-14 | Struggletony           | L   | 1.000      | -            | -                | -                | -         |   -30.39 | Boye, IceBerg, Leakz, NickyB, salazar |
|           45 |      465 | 2026-03-05 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -12.70 | Boye, IceBerg, Leakz, NickyB, salazar |
|           44 |      686 | 2026-02-28 | Inner Circle Esports   | L   | 1.000      | -            | -                | -                | -         |   -22.19 | Boye, IceBerg, Leakz, NickyB, salazar |
|           43 |      739 | 2026-02-27 | MOUZ NXT               | W   | 1.000      | 0.143        | 0.043 (0.006)    | 1.000 (0.143)    | -         |    12.99 | Boye, IceBerg, Leakz, NickyB, salazar |
|           42 |      810 | 2026-02-26 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -13.21 | Boye, IceBerg, Leakz, NickyB, salazar |
|           41 |     1339 | 2026-02-15 | AaB esport             | W   | 1.000      | -            | -                | -                | -         |     9.43 | Boye, IceBerg, Leakz, NickyB, salazar |
|           40 |     1360 | 2026-02-15 | Rune Eaters Esports    | W   | 1.000      | 0.143        | 0.007 (0.001)    | -                | -         |     6.31 | Boye, IceBerg, Leakz, NickyB, salazar |
|           39 |     1491 | 2026-02-13 | ENCE                   | L   | 0.998      | -            | -                | -                | -         |   -16.35 | Boye, IceBerg, Leakz, NickyB, salazar |
|           38 |     1495 | 2026-02-13 | Monte                  | L   | 0.997      | -            | -                | -                | -         |    -6.72 | Boye, IceBerg, Leakz, NickyB, salazar |
|           37 |     1584 | 2026-02-10 | EYEBALLERS             | L   | 0.980      | -            | -                | -                | -         |   -12.24 | Boye, IceBerg, Leakz, NickyB, salazar |
|           36 |     1603 | 2026-02-10 | Inner Circle Esports   | L   | 0.978      | -            | -                | -                | -         |   -22.87 | Boye, IceBerg, Leakz, NickyB, salazar |
|           35 |     2303 | 2026-01-17 | Johnny Speeds          | W   | 0.820      | 0.337        | 0.018 (0.005)    | 0.824 (0.228)    | 1 (0.820) |    10.84 | Boye, IceBerg, Leakz, NickyB, salazar |
|           34 |     2331 | 2026-01-17 | Megoshort              | W   | 0.818      | 0.337        | 0.005 (0.002)    | 0.313 (0.086)    | 1 (0.818) |     5.16 | Boye, IceBerg, Leakz, NickyB, salazar |
|           33 |     2339 | 2026-01-17 | AaB esport             | W   | 0.817      | 0.337        | -                | 0.591 (0.163)    | 1 (0.817) |     7.21 | Boye, IceBerg, Leakz, NickyB, salazar |
|           32 |     2361 | 2026-01-16 | Hemmaplan              | W   | 0.813      | -            | -                | -                | 1 (0.813) |     0.22 | Boye, IceBerg, Leakz, NickyB, salazar |
|           31 |     2371 | 2026-01-16 | Sashi Esport           | W   | 0.812      | 0.337        | 0.017 (0.005)    | 0.631 (0.173)    | 1 (0.812) |    13.49 | Boye, IceBerg, Leakz, NickyB, salazar |
|           30 |     2383 | 2026-01-16 | Megoshort              | W   | 0.812      | 0.337        | 0.005 (0.001)    | 0.313 (0.086)    | 1 (0.812) |     5.84 | Boye, IceBerg, Leakz, NickyB, salazar |
|           29 |     2390 | 2026-01-16 | SemperFi Esports       | L   | 0.811      | -            | -                | -                | -         |   -16.55 | Boye, IceBerg, Leakz, NickyB, salazar |
|           28 |     2397 | 2026-01-16 | HEROIC Academy         | W   | 0.811      | -            | -                | -                | -         |     1.88 | Boye, IceBerg, Leakz, NickyB, salazar |
|           27 |     3213 | 2025-11-22 | FUT Esports            | L   | 0.445      | -            | -                | -                | -         |    -1.47 | IceBerg, kroK, Leakz, NickyB, salazar |
|           26 |     3223 | 2025-11-22 | ECSTATIC               | L   | 0.444      | -            | -                | -                | -         |    -3.51 | IceBerg, kroK, Leakz, NickyB, salazar |
|           25 |     3251 | 2025-11-21 | Illwill                | W   | 0.438      | -            | -                | -                | -         |     1.00 | IceBerg, kroK, Leakz, NickyB, salazar |
|           24 |     3265 | 2025-11-21 | Betclic Apogee Esports | W   | 0.437      | 0.338        | 0.024 (0.004)    | 0.618 (0.091)    | -         |     8.81 | IceBerg, kroK, Leakz, NickyB, salazar |
|           23 |     3298 | 2025-11-20 | AM Gaming              | W   | 0.431      | 0.338        | 0.024 (0.004)    | 0.708 (0.103)    | -         |     8.56 | IceBerg, kroK, Leakz, NickyB, salazar |
|           22 |     3313 | 2025-11-20 | ASTRAL Esports         | W   | 0.430      | -            | -                | -                | -         |     3.39 | IceBerg, kroK, Leakz, NickyB, salazar |
|           21 |     4567 | 2025-10-10 | SPARTA Esports         | L   | 0.157      | -            | -                | -                | -         |    -4.50 | IceBerg, kroK, Leakz, NickyB, salazar |
|           20 |     4601 | 2025-10-09 | UNiTY esports          | L   | 0.152      | -            | -                | -                | -         |    -4.15 | IceBerg, kroK, Leakz, NickyB, salazar |
|           19 |     4668 | 2025-10-08 | EYEBALLERS             | L   | 0.144      | -            | -                | -                | -         |    -1.79 | IceBerg, kroK, Leakz, NickyB, salazar |
|           18 |     4670 | 2025-10-08 | JiJieHao               | L   | 0.143      | -            | -                | -                | -         |    -4.30 | IceBerg, kroK, Leakz, NickyB, salazar |
|           17 |     4749 | 2025-10-06 | Leo Team               | L   | 0.133      | -            | -                | -                | -         |    -3.63 | IceBerg, kroK, Leakz, niko, salazar   |
|           16 |     4763 | 2025-10-06 | 33                     | L   | 0.132      | -            | -                | -                | -         |    -2.55 | IceBerg, kroK, Leakz, NickyB, salazar |
|           15 |     4780 | 2025-10-06 | Mousquetaires          | W   | 0.131      | -            | -                | -                | -         |     0.26 | IceBerg, kroK, Leakz, NickyB, salazar |
|           14 |     4849 | 2025-10-05 | 1w Team                | L   | 0.123      | -            | -                | -                | -         |    -1.82 | IceBerg, kroK, Leakz, NickyB, salazar |
|           13 |     4866 | 2025-10-04 | Betclic Apogee Esports | W   | 0.119      | -            | -                | -                | -         |     0.12 | IceBerg, kroK, Leakz, NickyB, salazar |
|           12 |     4947 | 2025-10-02 | Los kogutos            | L   | 0.105      | -            | -                | -                | -         |    -2.52 | IceBerg, kroK, Leakz, Nodios, salazar |
|           11 |     4965 | 2025-10-02 | Dziuseppe              | W   | 0.103      | -            | -                | -                | -         |     0.12 | IceBerg, kroK, Leakz, Nodios, salazar |
|           10 |     4978 | 2025-10-01 | SINNERS Esports        | L   | 0.099      | -            | -                | -                | -         |    -1.01 | IceBerg, kroK, Leakz, Nodios, salazar |
|            9 |     4987 | 2025-10-01 | SINNERS Esports        | L   | 0.098      | -            | -                | -                | -         |    -1.01 | IceBerg, kroK, Leakz, Nodios, salazar |
|            8 |     5023 | 2025-09-30 | Johnny Speeds          | W   | 0.092      | -            | -                | -                | -         |     1.61 | IceBerg, kroK, Leakz, Nodios, salazar |
|            7 |     5200 | 2025-09-26 | Betclic Apogee Esports | L   | 0.065      | -            | -                | -                | -         |    -2.00 | IceBerg, kroK, Leakz, niko, salazar   |
|            6 |     5221 | 2025-09-26 | Phantom Esports        | L   | 0.064      | -            | -                | -                | -         |    -1.22 | IceBerg, kroK, Leakz, niko, salazar   |
|            5 |     5293 | 2025-09-24 | Alliance               | L   | 0.051      | -            | -                | -                | -         |    -0.38 | IceBerg, kroK, Leakz, niko, salazar   |
|            4 |     5301 | 2025-09-23 | 500                    | L   | 0.046      | -            | -                | -                | -         |    -1.39 | IceBerg, kroK, Leakz, niko, salazar   |
|            3 |     5321 | 2025-09-22 | Tung Tung Sahur        | L   | 0.038      | -            | -                | -                | -         |    -1.05 | IceBerg, kroK, Leakz, niko, salazar   |
|            2 |     5353 | 2025-09-21 | FAVBET Team            | L   | 0.031      | -            | -                | -                | -         |    -0.82 | IceBerg, kroK, Leakz, niko, salazar   |
|            1 |     5471 | 2025-09-17 | Oramond                | L   | 0.006      | -            | -                | -                | -         |    -0.16 | IceBerg, kroK, Leakz, niko, salazar   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,558.50)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $6,111.44      | $6,111.44       |
| 2026-01-17 |      0.820 | $5,421.87      | $4,447.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
