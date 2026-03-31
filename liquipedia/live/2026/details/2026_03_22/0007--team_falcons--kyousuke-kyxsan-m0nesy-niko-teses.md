### Roster Details<br />
Team Name: Team Falcons<br />
Roster: kyousuke, kyxsan, m0NESY, NiKo, TeSeS<br />
Global Rank: [7](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [6]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  1768.3<br />
<br />
Final Rank Value (1768.3) = Starting Rank Value (1731.5) + Head To Head Adjustments (36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.863[<sup>1</sup>](#table2)
- Bounty Collected: 0.701[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.774[<sup>2</sup>](#table1)

The average of these factors is 0.667<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1731.5
- 400 + ( ( 0.667 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1731.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.336
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1296 | 2026-02-20 | PARIVISION       | L   | 0.996      | -            | -                | -                | -         |   -11.61 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           33 |     1474 | 2026-02-16 | FURIA            | W   | 0.971      | 1.000        | 1.000 (0.971)    | 0.432 (0.420)    | 1 (0.971) |    21.87 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           32 |     1557 | 2026-02-15 | FaZe Clan        | W   | 0.963      | 1.000        | 0.433 (0.417)    | 0.282 (0.272)    | 1 (0.963) |     6.28 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           31 |     1594 | 2026-02-14 | 3DMAX            | W   | 0.957      | 1.000        | 0.313 (0.300)    | 0.329 (0.315)    | 1 (0.957) |     3.85 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           30 |     1955 | 2026-02-03 | MOUZ             | L   | 0.885      | -            | -                | -                | -         |    -9.18 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           29 |     1969 | 2026-02-03 | 3DMAX            | W   | 0.884      | 1.000        | 0.313 (0.277)    | 0.329 (0.291)    | 1 (0.884) |     4.05 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           28 |     1996 | 2026-02-02 | NRG              | W   | 0.878      | 1.000        | -                | 0.359 (0.315)    | 1 (0.878) |     3.29 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           27 |     2031 | 2026-02-01 | Aurora Gaming    | L   | 0.870      | -            | -                | -                | -         |   -11.90 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           26 |     2215 | 2026-01-25 | PARIVISION       | L   | 0.824      | -            | -                | -                | -         |    -8.54 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           25 |     2251 | 2026-01-24 | Team Vitality    | W   | 0.818      | 0.899        | 1.000 (0.735)    | 0.456 (0.335)    | 1 (0.818) |    19.88 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           24 |     2345 | 2026-01-22 | Team Liquid      | W   | 0.804      | 0.899        | 0.254 (0.183)    | 0.315 (0.228)    | 1 (0.804) |     3.16 | kyxsan, m0NESY, NiKo, Nucleonz, TeSeS |
|           23 |     2479 | 2026-01-17 | Monte            | W   | 0.772      | 0.895        | -                | 0.458 (0.317)    | -         |     4.15 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           22 |     2588 | 2026-01-15 | ECSTATIC         | W   | 0.759      | 0.895        | -                | 0.743 (0.505)    | -         |     3.75 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           21 |     2955 | 2025-12-11 | Team Spirit      | L   | 0.524      | -            | -                | -                | -         |   -10.09 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           20 |     3015 | 2025-12-07 | G2 Esports       | W   | 0.499      | 1.000        | 0.375 (0.187)    | -                | 1 (0.499) |     4.22 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           19 |     3042 | 2025-12-06 | MOUZ             | L   | 0.491      | -            | -                | -                | -         |    -4.66 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           18 |     3072 | 2025-12-05 | Imperial Esports | W   | 0.484      | 1.000        | -                | 0.633 (0.306)    | 1 (0.484) |     1.11 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           17 |     3092 | 2025-12-04 | Passion UA       | W   | 0.479      | -            | -                | -                | 1 (0.479) |     0.84 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           16 |     3098 | 2025-12-04 | B8               | L   | 0.478      | -            | -                | -                | -         |   -13.53 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           15 |     3543 | 2025-11-16 | FURIA            | L   | 0.356      | -            | -                | -                | -         |    -2.97 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           14 |     3566 | 2025-11-15 | Team Vitality    | W   | 0.350      | 0.687        | 1.000 (0.240)    | -                | -         |     8.66 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           13 |     3622 | 2025-11-12 | Passion UA       | W   | 0.335      | -            | -                | -                | -         |     0.51 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           12 |     3656 | 2025-11-11 | Team Spirit      | W   | 0.328      | -            | -                | -                | -         |     3.65 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           11 |     3741 | 2025-11-08 | MOUZ             | W   | 0.308      | 1.000        | 0.808 (0.249)    | -                | -         |     6.91 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|           10 |     3787 | 2025-11-08 | FURIA            | L   | 0.303      | -            | -                | -                | -         |    -2.51 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            9 |     3953 | 2025-11-05 | Astralis         | W   | 0.283      | -            | -                | -                | -         |     4.88 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            8 |     3981 | 2025-11-04 | Team Spirit      | W   | 0.276      | 1.000        | 0.701 (0.194)    | -                | -         |     3.29 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            7 |     4016 | 2025-11-02 | TYLOO            | W   | 0.267      | -            | -                | -                | -         |     0.06 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            6 |     4673 | 2025-10-12 | Team Vitality    | L   | 0.124      | -            | -                | -                | -         |    -0.74 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            5 |     4696 | 2025-10-11 | MOUZ             | W   | 0.117      | -            | -                | -                | -         |     2.65 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            4 |     4741 | 2025-10-10 | 3DMAX            | W   | 0.109      | -            | -                | -                | -         |     0.55 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            3 |     4923 | 2025-10-06 | MOUZ             | W   | 0.085      | -            | -                | -                | -         |     1.93 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            2 |     5021 | 2025-10-05 | Natus Vincere    | W   | 0.076      | -            | -                | -                | -         |     1.69 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |
|            1 |     5059 | 2025-10-04 | Astralis         | W   | 0.070      | -            | -                | -                | -         |     1.27 | kyousuke, kyxsan, m0NESY, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($280,588.32)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.69) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $50,000.00     | $50,000.00      |
| 2026-02-08 |      0.918 | $38,000.00     | $34,875.56      |
| 2026-01-25 |      0.824 | $111,562.50    | $91,946.09      |
| 2025-12-14 |      0.545 | $45,000.00     | $24,512.50      |
| 2025-11-16 |      0.356 | $75,000.00     | $26,666.67      |
| 2025-11-09 |      0.309 | $120,000.00    | $37,066.67      |
| 2025-10-12 |      0.124 | $125,000.00    | $15,520.83      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
