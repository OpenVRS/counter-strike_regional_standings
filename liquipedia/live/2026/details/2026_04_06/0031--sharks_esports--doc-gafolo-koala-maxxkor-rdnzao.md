### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, maxxkor, rdnzao<br />
Global Rank: [31](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_05.md)<br />
Regional Rank: [7]( ../../standings_americas_2026_04_05.md)<br />
<br />
Final Rank Value:  1409.5<br />
<br />
Final Rank Value (1409.5) = Starting Rank Value (1385.7) + Head To Head Adjustments (23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.204[<sup>2</sup>](#table1)
- LAN Wins: 0.898[<sup>2</sup>](#table1)

The average of these factors is 0.504<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1385.7
- 400 + ( ( 0.504 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1385.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.532
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |     1422 | 2026-03-08 | Imperial Esports       | W   | 1.000      | 0.384        | 0.043 (0.016)    | 0.529 (0.203)    | 1 (1.000) |    10.68 | doc, gafolo, koala, maxxkor, rdnzao |
|           62 |     1459 | 2026-03-07 | 9z Team                | L   | 1.000      | -            | -                | -                | -         |   -10.49 | doc, gafolo, koala, maxxkor, rdnzao |
|           61 |     1474 | 2026-03-07 | Fluxo W7M              | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.57 | doc, gafolo, koala, maxxkor, rdnzao |
|           60 |     1570 | 2026-03-05 | ODDIK                  | W   | 0.986      | 0.384        | 0.048 (0.018)    | 0.564 (0.214)    | 1 (0.986) |    12.16 | doc, gafolo, koala, maxxkor, rdnzao |
|           59 |     1582 | 2026-03-05 | MIBR Academy           | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.29 | doc, gafolo, koala, maxxkor, rdnzao |
|           58 |     1736 | 2026-03-01 | 9z Team                | L   | 0.962      | -            | -                | -                | -         |   -10.62 | doc, gafolo, koala, maxxkor, rdnzao |
|           57 |     1825 | 2026-02-27 | RED Canids             | W   | 0.949      | 0.435        | -                | 0.483 (0.199)    | 1 (0.949) |    11.05 | doc, gafolo, koala, maxxkor, rdnzao |
|           56 |     1878 | 2026-02-26 | 9z Team                | W   | 0.942      | 0.435        | 0.192 (0.079)    | 0.582 (0.238)    | 1 (0.942) |    19.36 | doc, gafolo, koala, maxxkor, rdnzao |
|           55 |     1946 | 2026-02-25 | Galorys                | W   | 0.936      | -            | -                | -                | 1 (0.936) |     4.87 | doc, gafolo, koala, maxxkor, rdnzao |
|           54 |     2151 | 2026-02-21 | ODDIK                  | L   | 0.908      | -            | -                | -                | -         |   -15.92 | doc, gafolo, koala, maxxkor, rdnzao |
|           53 |     2203 | 2026-02-20 | Imperial Esports       | W   | 0.901      | 0.363        | 0.043 (0.014)    | 0.529 (0.173)    | -         |    10.11 | doc, gafolo, koala, maxxkor, rdnzao |
|           52 |     2256 | 2026-02-19 | Procyon Team           | W   | 0.895      | -            | -                | -                | -         |     2.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           51 |     2304 | 2026-02-18 | ShindeN                | L   | 0.888      | -            | -                | -                | -         |   -14.88 | doc, gafolo, koala, maxxkor, rdnzao |
|           50 |     2364 | 2026-02-17 | FOLHA AMARELA          | W   | 0.881      | -            | -                | -                | -         |     1.53 | doc, gafolo, koala, maxxkor, rdnzao |
|           49 |     2463 | 2026-02-15 | RED Canids             | W   | 0.868      | 0.371        | -                | 0.483 (0.155)    | -         |    11.72 | doc, gafolo, koala, maxxkor, rdnzao |
|           48 |     2467 | 2026-02-15 | ShindeN                | W   | 0.867      | 0.371        | 0.071 (0.023)    | 0.581 (0.187)    | -         |    13.37 | doc, gafolo, koala, maxxkor, rdnzao |
|           47 |     2518 | 2026-02-14 | 9z Team                | W   | 0.861      | 0.371        | 0.192 (0.061)    | 0.582 (0.186)    | -         |    19.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           46 |     2632 | 2026-02-12 | Despedidos             | W   | 0.848      | -            | -                | -                | -         |     2.41 | doc, gafolo, koala, maxxkor, rdnzao |
|           45 |     2780 | 2026-02-08 | 9z Team                | L   | 0.820      | -            | -                | -                | -         |    -7.39 | doc, gafolo, koala, maxxkor, rdnzao |
|           44 |     2797 | 2026-02-07 | RED Canids             | W   | 0.814      | 0.769        | 0.030 (0.019)    | 0.483 (0.302)    | -         |    12.61 | doc, gafolo, koala, maxxkor, rdnzao |
|           43 |     2826 | 2026-02-06 | Galorys                | W   | 0.808      | 0.769        | -                | 0.291 (0.181)    | -         |     3.93 | doc, gafolo, koala, maxxkor, rdnzao |
|           42 |     3003 | 2026-01-31 | 9z Team                | L   | 0.767      | -            | -                | -                | -         |    -7.16 | doc, gafolo, koala, maxxkor, rdnzao |
|           41 |     3038 | 2026-01-30 | MIBR                   | L   | 0.762      | -            | -                | -                | -         |   -11.39 | doc, gafolo, koala, maxxkor, rdnzao |
|           40 |     3041 | 2026-01-30 | LUNA Esports           | W   | 0.761      | -            | -                | -                | 1 (0.761) |     0.24 | doc, gafolo, koala, maxxkor, rdnzao |
|           39 |     3206 | 2026-01-24 | Gaimin Gladiators      | L   | 0.719      | -            | -                | -                | -         |    -9.91 | doc, gafolo, koala, maxxkor, rdnzao |
|           38 |     3245 | 2026-01-23 | Metanoia               | W   | 0.713      | -            | -                | -                | 1 (0.713) |     0.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           37 |     3312 | 2026-01-21 | Galorys                | W   | 0.702      | -            | -                | -                | 1 (0.702) |     3.09 | doc, gafolo, koala, maxxkor, rdnzao |
|           36 |     3318 | 2026-01-21 | 9z Team                | L   | 0.701      | -            | -                | -                | -         |    -5.91 | doc, gafolo, koala, maxxkor, rdnzao |
|           35 |     3319 | 2026-01-21 | Metanoia               | L   | 0.701      | -            | -                | -                | -         |   -21.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           34 |     3331 | 2026-01-21 | RED Canids             | L   | 0.700      | -            | -                | -                | -         |   -13.84 | doc, gafolo, koala, maxxkor, rdnzao |
|           33 |     3389 | 2026-01-18 | MIBR                   | W   | 0.682      | 0.435        | 0.076 (0.022)    | -                | -         |     8.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           32 |     3472 | 2026-01-16 | Legacy                 | W   | 0.669      | 0.435        | 0.258 (0.075)    | -                | -         |    12.51 | doc, gafolo, koala, maxxkor, rdnzao |
|           31 |     3535 | 2026-01-15 | Imperial Esports       | W   | 0.661      | 0.435        | 0.043 (0.012)    | -                | -         |     9.14 | doc, gafolo, koala, maxxkor, rdnzao |
|           30 |     3566 | 2026-01-14 | Keyd Stars             | W   | 0.655      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           29 |     3695 | 2026-01-03 | Wildcard               | L   | 0.583      | -            | -                | -                | -         |   -16.35 | doc, gafolo, koala, maxxkor, rdnzao |
|           28 |     3698 | 2026-01-03 | GamerLegion            | L   | 0.582      | -            | -                | -                | -         |    -5.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           27 |     3703 | 2026-01-03 | Wildcard               | W   | 0.581      | -            | -                | -                | -         |     1.87 | doc, gafolo, koala, maxxkor, rdnzao |
|           26 |     3748 | 2025-12-21 | BC.Game Esports        | L   | 0.493      | -            | -                | -                | -         |    -8.83 | doc, gafolo, koala, maxxkor, rdnzao |
|           25 |     3752 | 2025-12-21 | ASTRAL Esports         | W   | 0.492      | -            | -                | -                | -         |     2.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           24 |     3792 | 2025-12-19 | FC Famalicão Esports   | W   | 0.481      | -            | -                | -                | -         |     1.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           23 |     3795 | 2025-12-19 | Nebula In Chaox        | W   | 0.480      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|           22 |     4481 | 2025-11-16 | Keyd Stars             | W   | 0.261      | -            | -                | -                | -         |     0.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           21 |     4498 | 2025-11-15 | 9z Team                | L   | 0.255      | -            | -                | -                | -         |    -7.79 | doc, gafolo, koala, maxxkor, rdnzao |
|           20 |     4511 | 2025-11-15 | Fake do Biru           | W   | 0.253      | -            | -                | -                | -         |     0.56 | doc, gafolo, koala, maxxkor, rdnzao |
|           19 |     4533 | 2025-11-14 | Gaimin Gladiators      | L   | 0.246      | -            | -                | -                | -         |    -3.77 | doc, gafolo, koala, maxxkor, rdnzao |
|           18 |     4546 | 2025-11-13 | 9z Team                | W   | 0.241      | -            | -                | -                | -         |     0.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           17 |     4581 | 2025-11-12 | DashSkins              | W   | 0.234      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           16 |     4638 | 2025-11-10 | ShindeN                | W   | 0.221      | -            | -                | -                | -         |     3.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           15 |     4663 | 2025-11-09 | Fluxo W7M              | L   | 0.214      | -            | -                | -                | -         |    -3.57 | doc, gafolo, koala, maxxkor, rdnzao |
|           14 |     4701 | 2025-11-08 | Imperial Esports       | W   | 0.208      | -            | -                | -                | -         |     2.52 | doc, gafolo, koala, maxxkor, rdnzao |
|           13 |     4721 | 2025-11-08 | Gaimin Gladiators      | W   | 0.206      | -            | -                | -                | -         |     3.41 | doc, gafolo, koala, maxxkor, rdnzao |
|           12 |     4753 | 2025-11-07 | 9z Team                | W   | 0.202      | -            | -                | -                | -         |     0.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           11 |     4756 | 2025-11-07 | Metanoia Wolves        | W   | 0.202      | -            | -                | -                | -         |     0.15 | doc, gafolo, koala, maxxkor, rdnzao |
|           10 |     5170 | 2025-10-26 | Gaimin Gladiators      | W   | 0.121      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            9 |     5252 | 2025-10-25 | BESTIA                 | W   | 0.113      | -            | -                | -                | -         |     1.71 | doc, gafolo, koala, maxxkor, rdnzao |
|            8 |     5289 | 2025-10-24 | Metanoia Wolves        | W   | 0.108      | -            | -                | -                | -         |     0.08 | doc, gafolo, koala, maxxkor, rdnzao |
|            7 |     5313 | 2025-10-24 | Dusty Roots            | W   | 0.106      | -            | -                | -                | -         |     0.04 | doc, gafolo, koala, maxxkor, rdnzao |
|            6 |     5446 | 2025-10-18 | Bounty Hunters Esports | W   | 0.068      | -            | -                | -                | -         |     0.44 | doc, gafolo, koala, maxxkor, rdnzao |
|            5 |     5448 | 2025-10-18 | Fake do Biru           | W   | 0.067      | -            | -                | -                | -         |     0.15 | doc, gafolo, koala, maxxkor, rdnzao |
|            4 |     5469 | 2025-10-17 | Yawara E-Sports        | W   | 0.061      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, maxxkor, rdnzao |
|            3 |     5501 | 2025-10-16 | MIBR Academy           | W   | 0.055      | -            | -                | -                | -         |     0.02 | doc, gafolo, koala, maxxkor, rdnzao |
|            2 |     5703 | 2025-10-09 | Procyon Team           | L   | 0.008      | -            | -                | -                | -         |    -0.22 | doc, gafolo, koala, maxxkor, rdnzao |
|            1 |     5753 | 2025-10-08 | Dusty Roots            | L   | 0.001      | -            | -                | -                | -         |    -0.04 | doc, gafolo, koala, maxxkor, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49,609.96)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      1.000 | $3,500.00      | $3,500.00       |
| 2026-03-01 |      0.962 | $8,750.00      | $8,415.50       |
| 2026-02-24 |      0.928 | $1,000.00      | $928.16         |
| 2026-02-15 |      0.868 | $10,000.00     | $8,678.83       |
| 2026-02-01 |      0.775 | $800.00        | $620.25         |
| 2026-01-18 |      0.682 | $30,000.00     | $20,453.15      |
| 2025-11-16 |      0.261 | $18,311.89     | $4,779.97       |
| 2025-11-15 |      0.255 | $4,000.00      | $1,019.31       |
| 2025-11-09 |      0.214 | $2,500.00      | $534.58         |
| 2025-10-18 |      0.068 | $10,000.00     | $680.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
