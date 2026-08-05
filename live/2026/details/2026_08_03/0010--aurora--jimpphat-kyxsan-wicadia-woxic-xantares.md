### Roster Details<br />
Team Name: Aurora<br />
Roster: Jimpphat, kyxsan, Wicadia, woxic, XANTARES<br />
Global Rank: [10](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [7]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1689.7<br />
<br />
Final Rank Value (1689.7) = Starting Rank Value (1646.6) + Head To Head Adjustments (43.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.764[<sup>1</sup>](#table2)
- Bounty Collected: 0.652[<sup>2</sup>](#table1)
- Opponent Network: 0.382[<sup>2</sup>](#table1)
- LAN Wins: 0.777[<sup>2</sup>](#table1)

The average of these factors is 0.644<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1646.6
- 400 + ( ( 0.644 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1646.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |      178 | 2026-07-26 | HOTU          | W   | 1.000      | -            | -                | -                | -         |     4.49 | Jimpphat, kyxsan, Wicadia, woxic, XANTARES |
|           43 |      209 | 2026-07-25 | Echo          | W   | 1.000      | -            | -                | -                | -         |     3.13 | Jimpphat, kyxsan, Wicadia, woxic, XANTARES |
|           42 |      274 | 2026-07-23 | FOKUS         | L   | 1.000      | -            | -                | -                | -         |   -28.70 | Jimpphat, kyxsan, Wicadia, woxic, XANTARES |
|           41 |      284 | 2026-07-22 | Nemesis       | W   | 1.000      | -            | -                | -                | -         |     4.65 | Jimpphat, kyxsan, Wicadia, woxic, XANTARES |
|           40 |      297 | 2026-07-22 | K27           | W   | 1.000      | -            | -                | -                | -         |     4.14 | Jimpphat, kyxsan, Wicadia, woxic, XANTARES |
|           39 |      884 | 2026-06-20 | FURIA         | L   | 0.906      | -            | -                | -                | -         |   -10.66 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           38 |      917 | 2026-06-18 | BetBoom       | W   | 0.893      | 1.000        | 0.335 (0.299)    | 0.706 (0.630)    | 1 (0.893) |    16.27 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           37 |      972 | 2026-06-14 | 9z            | W   | 0.867      | 1.000        | 0.783 (0.678)    | 0.758 (0.657)    | 1 (0.867) |    20.75 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           36 |     1013 | 2026-06-13 | G2            | W   | 0.859      | 1.000        | 0.439 (0.377)    | 0.600 (0.516)    | 1 (0.859) |    14.40 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           35 |     1047 | 2026-06-12 | Spirit        | L   | 0.854      | -            | -                | -                | -         |    -3.04 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           34 |     1078 | 2026-06-11 | Luminosity    | W   | 0.847      | 1.000        | 0.187 (0.159)    | 0.397 (0.336)    | 1 (0.847) |     8.47 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           33 |     1939 | 2026-05-15 | MOUZ          | L   | 0.664      | -            | -                | -                | -         |    -4.30 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           32 |     1989 | 2026-05-13 | The MongolZ   | W   | 0.652      | 1.000        | 0.492 (0.321)    | 0.447 (0.292)    | 1 (0.652) |     9.88 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           31 |     2040 | 2026-05-12 | MOUZ          | L   | 0.644      | -            | -                | -                | -         |    -4.14 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           30 |     2079 | 2026-05-11 | PARIVISION    | W   | 0.637      | 1.000        | 0.582 (0.371)    | 0.425 (0.271)    | 1 (0.637) |    12.53 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           29 |     2111 | 2026-05-10 | The Huns      | W   | 0.631      | 1.000        | -                | 0.502 (0.317)    | 1 (0.631) |     0.60 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           28 |     2144 | 2026-05-08 | HEROIC        | L   | 0.624      | -            | -                | -                | -         |   -14.80 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           27 |     2890 | 2026-04-15 | Natus Vincere | L   | 0.468      | -            | -                | -                | -         |    -4.84 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           26 |     2896 | 2026-04-15 | B8            | W   | 0.467      | 1.000        | -                | 0.670 (0.313)    | 1 (0.467) |     6.91 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           25 |     2908 | 2026-04-14 | MOUZ          | L   | 0.462      | -            | -                | -                | -         |    -2.79 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           24 |     2929 | 2026-04-13 | HOTU          | W   | 0.455      | 1.000        | -                | 0.729 (0.332)    | 1 (0.455) |     1.92 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           23 |     3519 | 2026-04-01 | Alliance      | L   | 0.373      | -            | -                | -                | -         |    -6.06 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           22 |     3574 | 2026-03-31 | M80           | L   | 0.368      | -            | -                | -                | -         |   -10.35 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           21 |     3632 | 2026-03-31 | Sashi         | W   | 0.365      | -            | -                | -                | 1 (0.365) |     0.53 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           20 |     3691 | 2026-03-30 | INFINITE      | W   | 0.360      | -            | -                | -                | -         |     1.30 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           19 |     3858 | 2026-03-28 | Vitality      | L   | 0.346      | -            | -                | -                | -         |    -3.27 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           18 |     3919 | 2026-03-27 | The MongolZ   | W   | 0.340      | 1.000        | 0.492 (0.167)    | 0.447 (0.152)    | -         |     4.81 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           17 |     4146 | 2026-03-23 | Natus Vincere | L   | 0.312      | -            | -                | -                | -         |    -3.38 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           16 |     4279 | 2026-03-20 | FURIA         | W   | 0.295      | 1.000        | 0.677 (0.200)    | -                | -         |     5.83 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           15 |     4376 | 2026-03-18 | FaZe          | W   | 0.281      | 1.000        | 0.565 (0.159)    | -                | -         |     5.63 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           14 |     4514 | 2026-03-15 | Natus Vincere | L   | 0.261      | -            | -                | -                | -         |    -2.87 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           13 |     4552 | 2026-03-14 | Astralis      | W   | 0.255      | -            | -                | -                | -         |     3.20 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           12 |     4617 | 2026-03-13 | Legacy        | W   | 0.246      | 0.901        | 0.884 (0.196)    | -                | -         |     5.64 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           11 |     4781 | 2026-03-09 | G2            | W   | 0.221      | -            | -                | -                | -         |     3.90 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|           10 |     4904 | 2026-03-08 | paiN          | W   | 0.212      | -            | -                | -                | -         |     1.94 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            9 |     4951 | 2026-03-07 | The MongolZ   | L   | 0.205      | -            | -                | -                | -         |    -3.56 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            8 |     4973 | 2026-03-06 | Legacy        | W   | 0.200      | -            | -                | -                | -         |     4.64 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            7 |     5676 | 2026-02-20 | Vitality      | L   | 0.107      | -            | -                | -                | -         |    -0.98 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            6 |     5799 | 2026-02-18 | Astralis      | W   | 0.092      | -            | -                | -                | -         |     1.12 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            5 |     5862 | 2026-02-17 | B8            | W   | 0.086      | -            | -                | -                | -         |     1.48 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            4 |     5907 | 2026-02-16 | Natus Vincere | L   | 0.078      | -            | -                | -                | -         |    -0.82 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            3 |     5957 | 2026-02-15 | paiN          | W   | 0.073      | -            | -                | -                | -         |     0.65 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            2 |     6036 | 2026-02-14 | FUT           | L   | 0.065      | -            | -                | -                | -         |    -0.98 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |
|            1 |     6305 | 2026-02-06 | FURIA         | L   | 0.013      | -            | -                | -                | -         |    -0.14 | MAJ3R, soulfly, Wicadia, woxic, XANTARES   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($244,781.31)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.49) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-06-21 |      0.914 | $80,000.00     | $73,089.79      |
| 2026-05-17 |      0.679 | $80,000.00     | $54,338.58      |
| 2026-04-19 |      0.494 | $42,000.00     | $20,756.53      |
| 2026-03-29 |      0.352 | $115,000.00    | $40,531.31      |
| 2026-03-15 |      0.261 | $156,500.00    | $40,854.33      |
| 2026-02-22 |      0.121 | $50,000.00     | $6,029.76       |
| 2026-02-08 |      0.028 | $61,000.00     | $1,681.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
