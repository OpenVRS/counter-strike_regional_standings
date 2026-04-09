### Roster Details<br />
Team Name: Team Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [6](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [5]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1769.4<br />
<br />
Final Rank Value (1769.4) = Starting Rank Value (1743.6) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.846[<sup>1</sup>](#table2)
- Bounty Collected: 0.704[<sup>2</sup>](#table1)
- Opponent Network: 0.338[<sup>2</sup>](#table1)
- LAN Wins: 0.859[<sup>2</sup>](#table1)

The average of these factors is 0.687<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1743.6
- 400 + ( ( 0.687 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1743.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.284
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      494 | 2026-03-27 | PARIVISION       | L   | 1.000      | -            | -                | -                | -         |   -14.62 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           35 |      710 | 2026-03-23 | FURIA            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.388 (0.388)    | 1 (1.000) |    16.32 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           34 |      763 | 2026-03-22 | TYLOO            | W   | 1.000      | 1.000        | -                | 0.342 (0.342)    | 1 (1.000) |     5.40 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |      862 | 2026-03-20 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |   -10.86 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |      969 | 2026-03-18 | NRG              | W   | 1.000      | 1.000        | -                | 0.269 (0.269)    | 1 (1.000) |     3.42 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           31 |     2271 | 2026-02-20 | PARIVISION       | L   | 0.898      | -            | -                | -                | -         |   -11.43 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |     2449 | 2026-02-16 | FURIA            | W   | 0.873      | 1.000        | 1.000 (0.873)    | 0.388 (0.339)    | 1 (0.873) |    18.01 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |     2533 | 2026-02-15 | FaZe Clan        | W   | 0.865      | 1.000        | 0.375 (0.324)    | 0.350 (0.303)    | 1 (0.865) |     6.56 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |     2570 | 2026-02-14 | 3DMAX            | W   | 0.859      | 1.000        | 0.215 (0.185)    | 0.492 (0.423)    | 1 (0.859) |     6.31 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     2931 | 2026-02-03 | MOUZ             | L   | 0.787      | -            | -                | -                | -         |   -12.30 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     2945 | 2026-02-03 | 3DMAX            | W   | 0.786      | 1.000        | 0.215 (0.169)    | 0.492 (0.386)    | 1 (0.786) |     6.45 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           25 |     2972 | 2026-02-02 | NRG              | W   | 0.780      | -            | -                | -                | 1 (0.780) |     3.13 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           24 |     3008 | 2026-02-01 | Aurora Gaming    | L   | 0.772      | -            | -                | -                | -         |    -9.20 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           23 |     3192 | 2026-01-25 | PARIVISION       | L   | 0.726      | -            | -                | -                | -         |    -8.55 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           22 |     3228 | 2026-01-24 | Team Vitality    | W   | 0.720      | 0.899        | 1.000 (0.647)    | 0.399 (0.258)    | 1 (0.720) |    17.64 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           21 |     3325 | 2026-01-22 | Team Liquid      | W   | 0.706      | 0.899        | 0.238 (0.151)    | -                | 1 (0.706) |     3.69 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           20 |     3459 | 2026-01-17 | Monte            | W   | 0.674      | 0.895        | -                | 0.487 (0.294)    | -         |     4.68 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     3571 | 2026-01-15 | ECSTATIC         | W   | 0.661      | 0.895        | -                | 0.643 (0.380)    | -         |     2.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     3940 | 2025-12-11 | Team Spirit      | L   | 0.426      | -            | -                | -                | -         |    -8.17 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     4000 | 2025-12-07 | G2 Esports       | W   | 0.401      | 1.000        | 0.348 (0.140)    | -                | -         |     5.54 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     4027 | 2025-12-06 | MOUZ             | L   | 0.393      | -            | -                | -                | -         |    -5.99 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     4057 | 2025-12-05 | Imperial Esports | W   | 0.386      | -            | -                | -                | -         |     1.03 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     4077 | 2025-12-04 | Passion UA       | W   | 0.381      | -            | -                | -                | -         |     1.35 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     4083 | 2025-12-04 | B8               | L   | 0.380      | -            | -                | -                | -         |    -8.71 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     4528 | 2025-11-16 | FURIA            | L   | 0.258      | -            | -                | -                | -         |    -2.88 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     4551 | 2025-11-15 | Team Vitality    | W   | 0.252      | 0.687        | 1.000 (0.173)    | -                | -         |     6.25 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     4607 | 2025-11-12 | Passion UA       | W   | 0.237      | -            | -                | -                | -         |     0.81 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     4641 | 2025-11-11 | Team Spirit      | W   | 0.230      | -            | -                | -                | -         |     2.66 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     4726 | 2025-11-08 | MOUZ             | W   | 0.210      | 1.000        | 0.666 (0.140)    | -                | -         |     3.43 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     4772 | 2025-11-08 | FURIA            | L   | 0.205      | -            | -                | -                | -         |    -2.32 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     4938 | 2025-11-05 | Astralis         | W   | 0.185      | -            | -                | -                | -         |     2.19 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     4966 | 2025-11-04 | Team Spirit      | W   | 0.178      | -            | -                | -                | -         |     2.12 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     5001 | 2025-11-02 | TYLOO            | W   | 0.169      | -            | -                | -                | -         |     0.89 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     5658 | 2025-10-12 | Team Vitality    | L   | 0.026      | -            | -                | -                | -         |    -0.16 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     5681 | 2025-10-11 | MOUZ             | W   | 0.019      | -            | -                | -                | -         |     0.31 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     5726 | 2025-10-10 | 3DMAX            | W   | 0.011      | -            | -                | -                | -         |     0.10 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($300,844.99)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.66) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $75,000.00     | $75,000.00      |
| 2026-02-22 |      0.913 | $50,000.00     | $45,658.02      |
| 2026-02-08 |      0.820 | $38,000.00     | $31,153.43      |
| 2026-01-25 |      0.726 | $111,563.00    | $81,018.84      |
| 2025-12-14 |      0.447 | $45,000.00     | $20,104.72      |
| 2025-11-16 |      0.258 | $75,000.00     | $19,320.37      |
| 2025-11-09 |      0.211 | $120,000.00    | $25,312.59      |
| 2025-10-12 |      0.026 | $125,000.00    | $3,277.01       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
