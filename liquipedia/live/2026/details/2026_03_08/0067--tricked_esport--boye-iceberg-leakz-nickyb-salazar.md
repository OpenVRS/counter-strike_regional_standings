### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: Boye, IceBerg, Leakz, NickyB, salazar<br />
Global Rank: [67](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [49]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1118.5<br />
<br />
Final Rank Value (1118.5) = Starting Rank Value (1136.2) + Head To Head Adjustments (-17.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.302[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.751[<sup>2</sup>](#table1)

The average of these factors is 0.384<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1136.2
- 400 + ( ( 0.384 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1136.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.363
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       68 | 2026-03-05 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -10.96 | Boye, IceBerg, Leakz, NickyB, salazar |
|           43 |      209 | 2026-02-28 | Inner Circle Esports   | L   | 1.000      | -            | -                | -                | -         |   -18.50 | Boye, IceBerg, Leakz, NickyB, salazar |
|           42 |      261 | 2026-02-27 | MOUZ NXT               | W   | 1.000      | 0.143        | 0.036 (0.005)    | 1.000 (0.143)    | -         |    15.41 | Boye, IceBerg, Leakz, NickyB, salazar |
|           41 |      330 | 2026-02-26 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -11.03 | Boye, IceBerg, Leakz, NickyB, salazar |
|           40 |      818 | 2026-02-15 | AaB esport             | W   | 1.000      | -            | -                | -                | -         |     9.46 | Boye, IceBerg, Leakz, NickyB, salazar |
|           39 |      838 | 2026-02-15 | Rune Eaters Esports    | W   | 1.000      | -            | -                | -                | -         |     7.86 | Boye, IceBerg, Leakz, NickyB, salazar |
|           38 |      959 | 2026-02-13 | ENCE                   | L   | 1.000      | -            | -                | -                | -         |   -12.70 | Boye, IceBerg, Leakz, NickyB, salazar |
|           37 |      963 | 2026-02-13 | Monte                  | L   | 1.000      | -            | -                | -                | -         |    -6.18 | Boye, IceBerg, Leakz, NickyB, salazar |
|           36 |     1048 | 2026-02-10 | EYEBALLERS             | L   | 1.000      | -            | -                | -                | -         |   -11.36 | Boye, IceBerg, Leakz, NickyB, salazar |
|           35 |     1066 | 2026-02-10 | Inner Circle Esports   | L   | 1.000      | -            | -                | -                | -         |   -18.38 | Boye, IceBerg, Leakz, NickyB, salazar |
|           34 |     1750 | 2026-01-17 | Johnny Speeds          | W   | 0.867      | 0.337        | 0.021 (0.006)    | 0.811 (0.237)    | 1 (0.867) |    12.72 | Boye, IceBerg, Leakz, NickyB, salazar |
|           33 |     1777 | 2026-01-17 | Megoshort              | W   | 0.864      | 0.337        | 0.008 (0.002)    | -                | 1 (0.864) |     6.96 | Boye, IceBerg, Leakz, NickyB, salazar |
|           32 |     1785 | 2026-01-17 | AaB esport             | W   | 0.863      | 0.337        | -                | 0.493 (0.144)    | 1 (0.863) |     6.38 | Boye, IceBerg, Leakz, NickyB, salazar |
|           31 |     1807 | 2026-01-16 | Hemmaplan              | W   | 0.859      | -            | -                | -                | 1 (0.859) |     0.39 | Boye, IceBerg, Leakz, NickyB, salazar |
|           30 |     1817 | 2026-01-16 | Sashi Esport           | W   | 0.859      | 0.337        | 0.015 (0.004)    | 0.569 (0.165)    | 1 (0.859) |    14.47 | Boye, IceBerg, Leakz, NickyB, salazar |
|           29 |     1829 | 2026-01-16 | Megoshort              | W   | 0.858      | 0.337        | 0.008 (0.002)    | -                | 1 (0.858) |     7.93 | Boye, IceBerg, Leakz, NickyB, salazar |
|           28 |     1836 | 2026-01-16 | SemperFi Esports       | L   | 0.858      | -            | -                | -                | -         |   -21.27 | Boye, IceBerg, Leakz, NickyB, salazar |
|           27 |     1843 | 2026-01-16 | HEROIC Academy         | W   | 0.857      | -            | -                | -                | 1 (0.857) |     4.22 | Boye, IceBerg, Leakz, NickyB, salazar |
|           26 |     2649 | 2025-11-22 | FUT Esports            | L   | 0.491      | -            | -                | -                | -         |    -1.82 | IceBerg, kroK, Leakz, NickyB, salazar |
|           25 |     2659 | 2025-11-22 | ECSTATIC               | L   | 0.490      | -            | -                | -                | -         |    -3.16 | IceBerg, kroK, Leakz, NickyB, salazar |
|           24 |     2685 | 2025-11-21 | Illwill                | W   | 0.485      | 0.338        | 0.107 (0.017)    | 1.000 (0.164)    | 1 (0.485) |    13.01 | IceBerg, kroK, Leakz, NickyB, salazar |
|           23 |     2699 | 2025-11-21 | Betclic Apogee Esports | W   | 0.483      | 0.338        | 0.015 (0.002)    | 0.448 (0.073)    | 1 (0.483) |     8.63 | IceBerg, kroK, Leakz, NickyB, salazar |
|           22 |     2738 | 2025-11-20 | AM Gaming              | W   | 0.478      | 0.307        | 0.024 (0.004)    | 0.530 (0.078)    | 1 (0.478) |     7.41 | IceBerg, kroK, Leakz, NickyB, salazar |
|           21 |     2739 | 2025-11-20 | AM Gaming              | W   | 0.478      | 0.338        | 0.024 (0.004)    | 0.530 (0.086)    | -         |     7.10 | IceBerg, kroK, Leakz, NickyB, salazar |
|           20 |     2755 | 2025-11-20 | ASTRAL Esports         | W   | 0.477      | 0.307        | -                | 0.550 (0.080)    | -         |     5.82 | IceBerg, kroK, Leakz, NickyB, salazar |
|           19 |     2760 | 2025-11-20 | ASTRAL Esports         | W   | 0.477      | 0.338        | -                | 0.550 (0.089)    | -         |     5.59 | IceBerg, kroK, Leakz, NickyB, salazar |
|           18 |     3972 | 2025-10-10 | SPARTA Esports         | L   | 0.203      | -            | -                | -                | -         |    -5.27 | IceBerg, kroK, Leakz, NickyB, salazar |
|           17 |     4004 | 2025-10-09 | UNiTY esports          | L   | 0.198      | -            | -                | -                | -         |    -4.58 | IceBerg, kroK, Leakz, NickyB, salazar |
|           16 |     4069 | 2025-10-08 | EYEBALLERS             | L   | 0.191      | -            | -                | -                | -         |    -2.14 | IceBerg, kroK, Leakz, NickyB, salazar |
|           15 |     4071 | 2025-10-08 | JiJieHao               | L   | 0.190      | -            | -                | -                | -         |    -4.04 | IceBerg, kroK, Leakz, NickyB, salazar |
|           14 |     4145 | 2025-10-06 | Leo Team               | L   | 0.179      | -            | -                | -                | -         |    -4.58 | IceBerg, kroK, Leakz, niko, salazar   |
|           13 |     4160 | 2025-10-06 | 33                     | L   | 0.178      | -            | -                | -                | -         |    -3.31 | IceBerg, kroK, Leakz, NickyB, salazar |
|           12 |     4177 | 2025-10-06 | Mousquetaires          | W   | 0.177      | 0.435        | 0.020 (0.002)    | -                | -         |     0.59 | IceBerg, kroK, Leakz, NickyB, salazar |
|           11 |     4243 | 2025-10-05 | 1w Team                | L   | 0.170      | -            | -                | -                | -         |    -1.95 | IceBerg, kroK, Leakz, NickyB, salazar |
|           10 |     4260 | 2025-10-04 | Betclic Apogee Esports | W   | 0.166      | -            | -                | -                | -         |     0.32 | IceBerg, kroK, Leakz, NickyB, salazar |
|            9 |     4341 | 2025-10-02 | Los kogutos            | L   | 0.152      | -            | -                | -                | -         |    -2.91 | IceBerg, kroK, Leakz, Nodios, salazar |
|            8 |     4358 | 2025-10-02 | Dziuseppe              | W   | 0.150      | -            | -                | -                | -         |     0.37 | IceBerg, kroK, Leakz, Nodios, salazar |
|            7 |     4371 | 2025-10-01 | SINNERS Esports        | L   | 0.146      | -            | -                | -                | -         |    -0.82 | IceBerg, kroK, Leakz, Nodios, salazar |
|            6 |     4380 | 2025-10-01 | SINNERS Esports        | L   | 0.145      | -            | -                | -                | -         |    -0.82 | IceBerg, kroK, Leakz, Nodios, salazar |
|            5 |     4415 | 2025-09-30 | Johnny Speeds          | W   | 0.138      | -            | -                | -                | -         |     2.70 | IceBerg, kroK, Leakz, Nodios, salazar |
|            4 |     4585 | 2025-09-26 | Betclic Apogee Esports | L   | 0.112      | -            | -                | -                | -         |    -3.31 | IceBerg, kroK, Leakz, niko, salazar   |
|            3 |     4606 | 2025-09-26 | Phantom Esports        | L   | 0.110      | -            | -                | -                | -         |    -1.52 | IceBerg, kroK, Leakz, niko, salazar   |
|            2 |     4681 | 2025-09-23 | 500                    | L   | 0.092      | -            | -                | -                | -         |    -2.71 | IceBerg, kroK, Leakz, niko, salazar   |
|            1 |     4733 | 2025-09-21 | FAVBET Team            | L   | 0.077      | -            | -                | -                | -         |    -1.76 | IceBerg, kroK, Leakz, niko, salazar   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,698.58)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-17 |      0.867 | $5,421.87      | $4,698.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
