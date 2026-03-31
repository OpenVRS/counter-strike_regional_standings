### Roster Details<br />
Team Name: Team Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [7](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [6]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  1753.6<br />
<br />
Final Rank Value (1753.6) = Starting Rank Value (1753.5) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.852[<sup>1</sup>](#table2)
- Bounty Collected: 0.718[<sup>2</sup>](#table1)
- Opponent Network: 0.323[<sup>2</sup>](#table1)
- LAN Wins: 0.896[<sup>2</sup>](#table1)

The average of these factors is 0.697<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1753.5
- 400 + ( ( 0.697 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1753.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.311
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |       73 | 2026-03-27 | PARIVISION       | L   | 1.000      | -            | -                | -                | -         |   -14.89 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           38 |      256 | 2026-03-23 | FURIA            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.425 (0.425)    | 1 (1.000) |    16.09 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           37 |      299 | 2026-03-22 | TYLOO            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.77 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           36 |      390 | 2026-03-20 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |   -12.19 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           35 |      487 | 2026-03-18 | NRG              | W   | 1.000      | 1.000        | -                | 0.303 (0.303)    | 1 (1.000) |     2.80 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           34 |     1778 | 2026-02-20 | PARIVISION       | L   | 0.949      | -            | -                | -                | -         |   -12.12 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |     1956 | 2026-02-16 | FURIA            | W   | 0.925      | 1.000        | 1.000 (0.925)    | 0.425 (0.393)    | 1 (0.925) |    19.45 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |     2039 | 2026-02-15 | FaZe Clan        | W   | 0.916      | 1.000        | 0.366 (0.336)    | -                | 1 (0.916) |     4.03 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           31 |     2076 | 2026-02-14 | 3DMAX            | W   | 0.911      | 1.000        | 0.231 (0.210)    | 0.369 (0.336)    | 1 (0.911) |     3.70 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |     2437 | 2026-02-03 | MOUZ             | L   | 0.839      | -            | -                | -                | -         |   -12.50 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |     2451 | 2026-02-03 | 3DMAX            | W   | 0.837      | 1.000        | 0.231 (0.193)    | 0.369 (0.309)    | 1 (0.837) |     3.78 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |     2478 | 2026-02-02 | NRG              | W   | 0.831      | 1.000        | -                | 0.303 (0.252)    | 1 (0.831) |     2.81 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     2513 | 2026-02-01 | Aurora Gaming    | L   | 0.823      | -            | -                | -                | -         |   -11.47 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     2697 | 2026-01-25 | PARIVISION       | L   | 0.777      | -            | -                | -                | -         |    -9.10 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           25 |     2733 | 2026-01-24 | Team Vitality    | W   | 0.771      | 0.899        | 1.000 (0.693)    | 0.435 (0.301)    | 1 (0.771) |    18.67 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           24 |     2827 | 2026-01-22 | Team Liquid      | W   | 0.757      | 0.899        | 0.249 (0.170)    | -                | 1 (0.757) |     2.67 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           23 |     2961 | 2026-01-17 | Monte            | W   | 0.725      | 0.895        | -                | 0.412 (0.267)    | -         |     3.19 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           22 |     3070 | 2026-01-15 | ECSTATIC         | W   | 0.712      | 0.895        | -                | 0.635 (0.405)    | -         |     2.56 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           21 |     3437 | 2025-12-11 | Team Spirit      | L   | 0.478      | -            | -                | -                | -         |    -9.51 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           20 |     3497 | 2025-12-07 | G2 Esports       | W   | 0.452      | -            | -                | -                | -         |     2.77 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     3524 | 2025-12-06 | MOUZ             | L   | 0.444      | -            | -                | -                | -         |    -6.53 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     3554 | 2025-12-05 | Imperial Esports | W   | 0.437      | 1.000        | -                | 0.543 (0.238)    | -         |     0.73 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     3574 | 2025-12-04 | Passion UA       | W   | 0.432      | -            | -                | -                | -         |     0.47 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     3580 | 2025-12-04 | B8               | L   | 0.431      | -            | -                | -                | -         |   -12.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     4025 | 2025-11-16 | FURIA            | L   | 0.309      | -            | -                | -                | -         |    -3.38 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     4048 | 2025-11-15 | Team Vitality    | W   | 0.303      | 0.687        | 1.000 (0.208)    | -                | -         |     7.38 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     4104 | 2025-11-12 | Passion UA       | W   | 0.288      | -            | -                | -                | -         |     0.27 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     4138 | 2025-11-11 | Team Spirit      | W   | 0.281      | -            | -                | -                | -         |     2.93 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     4223 | 2025-11-08 | MOUZ             | W   | 0.261      | 1.000        | 0.667 (0.174)    | -                | -         |     4.40 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     4269 | 2025-11-08 | FURIA            | L   | 0.256      | -            | -                | -                | -         |    -2.83 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     4435 | 2025-11-05 | Astralis         | W   | 0.236      | -            | -                | -                | -         |     2.77 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     4463 | 2025-11-04 | Team Spirit      | W   | 0.229      | 1.000        | 0.642 (0.147)    | -                | -         |     2.50 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     4498 | 2025-11-02 | TYLOO            | W   | 0.220      | -            | -                | -                | -         |     0.08 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     5155 | 2025-10-12 | Team Vitality    | L   | 0.077      | -            | -                | -                | -         |    -0.50 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     5178 | 2025-10-11 | MOUZ             | W   | 0.070      | -            | -                | -                | -         |     1.17 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     5223 | 2025-10-10 | 3DMAX            | W   | 0.062      | -            | -                | -                | -         |     0.31 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     5405 | 2025-10-06 | MOUZ             | W   | 0.038      | -            | -                | -                | -         |     0.64 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     5503 | 2025-10-05 | Natus Vincere    | W   | 0.029      | -            | -                | -                | -         |     0.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     5541 | 2025-10-04 | Astralis         | W   | 0.023      | -            | -                | -                | -         |     0.28 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($329,719.21)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.67) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $75,000.00     | $75,000.00      |
| 2026-02-22 |      0.964 | $50,000.00     | $48,215.28      |
| 2026-02-08 |      0.871 | $38,000.00     | $33,096.94      |
| 2026-01-25 |      0.777 | $111,562.50    | $86,724.35      |
| 2025-12-14 |      0.498 | $45,000.00     | $22,406.25      |
| 2025-11-16 |      0.309 | $75,000.00     | $23,156.25      |
| 2025-11-09 |      0.262 | $120,000.00    | $31,450.00      |
| 2025-10-12 |      0.077 | $125,000.00    | $9,670.14       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
