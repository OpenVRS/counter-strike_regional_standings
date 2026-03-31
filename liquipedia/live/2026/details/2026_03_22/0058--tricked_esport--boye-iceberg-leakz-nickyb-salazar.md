### Roster Details<br />
Team Name: Tricked Esport<br />
Roster: Boye, IceBerg, Leakz, NickyB, salazar<br />
Global Rank: [58](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [42]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  1214.6<br />
<br />
Final Rank Value (1214.6) = Starting Rank Value (1257.8) + Head To Head Adjustments (-43.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.861[<sup>2</sup>](#table1)

The average of these factors is 0.430<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1257.8
- 400 + ( ( 0.430 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1257.8


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
|           46 |      128 | 2026-03-15 | Sashi Esport           | W   | 1.000      | 0.329        | 0.016 (0.005)    | 0.624 (0.205)    | 1 (1.000) |    13.21 | Boye, IceBerg, Leakz, NickyB, salazar |
|           45 |      139 | 2026-03-15 | ECSTATIC               | W   | 1.000      | 0.329        | 0.121 (0.040)    | 0.743 (0.245)    | 1 (1.000) |    21.72 | Boye, IceBerg, Leakz, NickyB, salazar |
|           44 |      160 | 2026-03-14 | Hashiras               | W   | 1.000      | 0.329        | -                | 0.549 (0.181)    | 1 (1.000) |     4.92 | Boye, IceBerg, Leakz, NickyB, salazar |
|           43 |      166 | 2026-03-14 | Fortress Esport        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.40 | Boye, IceBerg, Leakz, NickyB, salazar |
|           42 |      174 | 2026-03-14 | Hashiras               | L   | 1.000      | -            | -                | -                | -         |   -26.92 | Boye, IceBerg, Leakz, NickyB, salazar |
|           41 |      630 | 2026-03-05 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -12.94 | Boye, IceBerg, Leakz, NickyB, salazar |
|           40 |      860 | 2026-02-28 | Inner Circle Esports   | L   | 1.000      | -            | -                | -                | -         |   -23.59 | Boye, IceBerg, Leakz, NickyB, salazar |
|           39 |      913 | 2026-02-27 | MOUZ NXT               | W   | 1.000      | 0.143        | 0.044 (0.006)    | 1.000 (0.143)    | -         |    12.93 | Boye, IceBerg, Leakz, NickyB, salazar |
|           38 |      984 | 2026-02-26 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -13.52 | Boye, IceBerg, Leakz, NickyB, salazar |
|           37 |     1514 | 2026-02-15 | AaB esport             | W   | 0.965      | -            | -                | -                | -         |     8.70 | Boye, IceBerg, Leakz, NickyB, salazar |
|           36 |     1535 | 2026-02-15 | Rune Eaters Esports    | W   | 0.965      | 0.143        | 0.007 (0.001)    | -                | -         |     6.33 | Boye, IceBerg, Leakz, NickyB, salazar |
|           35 |     1666 | 2026-02-13 | ENCE                   | L   | 0.950      | -            | -                | -                | -         |   -16.60 | Boye, IceBerg, Leakz, NickyB, salazar |
|           34 |     1670 | 2026-02-13 | Monte                  | L   | 0.949      | -            | -                | -                | -         |    -6.77 | Boye, IceBerg, Leakz, NickyB, salazar |
|           33 |     1759 | 2026-02-10 | EYEBALLERS             | L   | 0.932      | -            | -                | -                | -         |   -12.18 | Boye, IceBerg, Leakz, NickyB, salazar |
|           32 |     1778 | 2026-02-10 | Inner Circle Esports   | L   | 0.930      | -            | -                | -                | -         |   -23.48 | Boye, IceBerg, Leakz, NickyB, salazar |
|           31 |     2478 | 2026-01-17 | Johnny Speeds          | W   | 0.772      | 0.337        | 0.018 (0.005)    | 0.803 (0.209)    | 1 (0.772) |    10.11 | Boye, IceBerg, Leakz, NickyB, salazar |
|           30 |     2506 | 2026-01-17 | Megoshort              | W   | 0.770      | 0.337        | 0.006 (0.001)    | 0.324 (0.084)    | 1 (0.770) |     4.70 | Boye, IceBerg, Leakz, NickyB, salazar |
|           29 |     2514 | 2026-01-17 | AaB esport             | W   | 0.769      | 0.337        | -                | 0.570 (0.148)    | 1 (0.769) |     6.43 | Boye, IceBerg, Leakz, NickyB, salazar |
|           28 |     2536 | 2026-01-16 | Hemmaplan              | W   | 0.765      | -            | -                | -                | 1 (0.765) |     0.19 | Boye, IceBerg, Leakz, NickyB, salazar |
|           27 |     2546 | 2026-01-16 | Sashi Esport           | W   | 0.765      | 0.337        | 0.016 (0.004)    | 0.624 (0.161)    | 1 (0.765) |    12.68 | Boye, IceBerg, Leakz, NickyB, salazar |
|           26 |     2558 | 2026-01-16 | Megoshort              | W   | 0.764      | 0.337        | 0.006 (0.001)    | 0.324 (0.083)    | 1 (0.764) |     5.24 | Boye, IceBerg, Leakz, NickyB, salazar |
|           25 |     2565 | 2026-01-16 | SemperFi Esports       | L   | 0.764      | -            | -                | -                | -         |   -13.75 | Boye, IceBerg, Leakz, NickyB, salazar |
|           24 |     2572 | 2026-01-16 | HEROIC Academy         | W   | 0.763      | -            | -                | -                | -         |     1.65 | Boye, IceBerg, Leakz, NickyB, salazar |
|           23 |     3388 | 2025-11-22 | FUT Esports            | L   | 0.397      | -            | -                | -                | -         |    -1.40 | IceBerg, kroK, Leakz, NickyB, salazar |
|           22 |     3398 | 2025-11-22 | ECSTATIC               | L   | 0.396      | -            | -                | -                | -         |    -3.09 | IceBerg, kroK, Leakz, NickyB, salazar |
|           21 |     3426 | 2025-11-21 | Illwill                | W   | 0.391      | -            | -                | -                | -         |     0.75 | IceBerg, kroK, Leakz, NickyB, salazar |
|           20 |     3440 | 2025-11-21 | Betclic Apogee Esports | W   | 0.389      | 0.338        | 0.025 (0.003)    | -                | -         |     7.90 | IceBerg, kroK, Leakz, NickyB, salazar |
|           19 |     3473 | 2025-11-20 | AM Gaming              | W   | 0.383      | 0.338        | 0.025 (0.003)    | 0.716 (0.093)    | -         |     7.62 | IceBerg, kroK, Leakz, NickyB, salazar |
|           18 |     3488 | 2025-11-20 | ASTRAL Esports         | W   | 0.383      | -            | -                | -                | -         |     2.79 | IceBerg, kroK, Leakz, NickyB, salazar |
|           17 |     4742 | 2025-10-10 | SPARTA Esports         | L   | 0.109      | -            | -                | -                | -         |    -3.15 | IceBerg, kroK, Leakz, NickyB, salazar |
|           16 |     4776 | 2025-10-09 | UNiTY esports          | L   | 0.104      | -            | -                | -                | -         |    -2.86 | IceBerg, kroK, Leakz, NickyB, salazar |
|           15 |     4843 | 2025-10-08 | EYEBALLERS             | L   | 0.096      | -            | -                | -                | -         |    -1.28 | IceBerg, kroK, Leakz, NickyB, salazar |
|           14 |     4845 | 2025-10-08 | JiJieHao               | L   | 0.096      | -            | -                | -                | -         |    -2.89 | IceBerg, kroK, Leakz, NickyB, salazar |
|           13 |     4924 | 2025-10-06 | Leo Team               | L   | 0.085      | -            | -                | -                | -         |    -2.32 | IceBerg, kroK, Leakz, niko, salazar   |
|           12 |     4938 | 2025-10-06 | 33                     | L   | 0.084      | -            | -                | -                | -         |    -1.39 | IceBerg, kroK, Leakz, NickyB, salazar |
|           11 |     4955 | 2025-10-06 | Mousquetaires          | W   | 0.083      | -            | -                | -                | -         |     0.15 | IceBerg, kroK, Leakz, NickyB, salazar |
|           10 |     5024 | 2025-10-05 | 1w Team                | L   | 0.076      | -            | -                | -                | -         |    -1.13 | IceBerg, kroK, Leakz, NickyB, salazar |
|            9 |     5041 | 2025-10-04 | Betclic Apogee Esports | W   | 0.071      | -            | -                | -                | -         |     0.06 | IceBerg, kroK, Leakz, NickyB, salazar |
|            8 |     5122 | 2025-10-02 | Los kogutos            | L   | 0.057      | -            | -                | -                | -         |    -1.39 | IceBerg, kroK, Leakz, Nodios, salazar |
|            7 |     5140 | 2025-10-02 | Dziuseppe              | W   | 0.056      | -            | -                | -                | -         |     0.06 | IceBerg, kroK, Leakz, Nodios, salazar |
|            6 |     5153 | 2025-10-01 | SINNERS Esports        | L   | 0.051      | -            | -                | -                | -         |    -0.52 | IceBerg, kroK, Leakz, Nodios, salazar |
|            5 |     5162 | 2025-10-01 | SINNERS Esports        | L   | 0.051      | -            | -                | -                | -         |    -0.51 | IceBerg, kroK, Leakz, Nodios, salazar |
|            4 |     5198 | 2025-09-30 | Johnny Speeds          | W   | 0.044      | -            | -                | -                | -         |     0.76 | IceBerg, kroK, Leakz, Nodios, salazar |
|            3 |     5375 | 2025-09-26 | Betclic Apogee Esports | L   | 0.018      | -            | -                | -                | -         |    -0.54 | IceBerg, kroK, Leakz, niko, salazar   |
|            2 |     5396 | 2025-09-26 | Phantom Esports        | L   | 0.016      | -            | -                | -                | -         |    -0.31 | IceBerg, kroK, Leakz, niko, salazar   |
|            1 |     5468 | 2025-09-24 | Alliance               | L   | 0.003      | -            | -                | -                | -         |    -0.02 | IceBerg, kroK, Leakz, niko, salazar   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,299.33)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $6,111.44      | $6,111.44       |
| 2026-01-17 |      0.772 | $5,421.87      | $4,187.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
