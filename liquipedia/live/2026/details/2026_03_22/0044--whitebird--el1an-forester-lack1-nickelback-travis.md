### Roster Details<br />
Team Name: WhiteBird<br />
Roster: El1an, Forester, Lack1, NickelBack, TRAVIS<br />
Global Rank: [44](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [34]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  1286.6<br />
<br />
Final Rank Value (1286.6) = Starting Rank Value (1410.3) + Head To Head Adjustments (-123.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.473[<sup>1</sup>](#table2)
- Bounty Collected: 0.398[<sup>2</sup>](#table1)
- Opponent Network: 0.334[<sup>2</sup>](#table1)
- LAN Wins: 0.820[<sup>2</sup>](#table1)

The average of these factors is 0.506<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1410.3
- 400 + ( ( 0.506 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1410.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.869
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      558 | 2026-03-06 | WW Team              | L   | 1.000      | -            | -                | -                | -         |   -22.01 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           48 |      567 | 2026-03-06 | VP.Prodigy           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           47 |      577 | 2026-03-06 | 1w Team              | W   | 1.000      | -            | -                | -                | 1 (1.000) |    12.71 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           46 |      589 | 2026-03-05 | TDK                  | W   | 1.000      | 0.333        | 0.055 (0.018)    | 0.757 (0.252)    | 1 (1.000) |    13.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           45 |      613 | 2026-03-05 | VP.Prodigy           | L   | 1.000      | -            | -                | -                | -         |   -24.21 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           44 |      700 | 2026-03-03 | Younglings           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.30 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           43 |      718 | 2026-03-03 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |   -16.42 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           42 |      736 | 2026-03-03 | 5Actors              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.46 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           41 |      784 | 2026-03-02 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |   -10.89 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           40 |      861 | 2026-02-28 | MOUZ NXT             | W   | 1.000      | 0.435        | 0.044 (0.019)    | 1.000 (0.435)    | 0 (0.000) |     8.93 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           39 |      891 | 2026-02-27 | TDK                  | W   | 1.000      | 0.435        | 0.055 (0.024)    | 0.757 (0.329)    | -         |    13.62 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           38 |      899 | 2026-02-27 | SINNERS Esports      | W   | 1.000      | 0.435        | 0.162 (0.070)    | 0.677 (0.294)    | -         |    20.58 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           37 |      958 | 2026-02-26 | BASEMENT BOYS        | W   | 1.000      | -            | -                | -                | -         |     1.83 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           36 |      968 | 2026-02-26 | Alliance             | W   | 1.000      | 0.435        | 0.097 (0.042)    | 0.886 (0.385)    | -         |    21.97 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           35 |     1051 | 2026-02-24 | Leo Team             | L   | 1.000      | -            | -                | -                | -         |   -26.32 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |     1070 | 2026-02-24 | Magic (Russian team) | W   | 1.000      | 0.435        | 0.098 (0.043)    | 0.656 (0.285)    | -         |    13.11 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |     1099 | 2026-02-23 | CSDIILIT             | W   | 1.000      | 0.435        | -                | 0.654 (0.284)    | -         |     2.75 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |     1138 | 2026-02-22 | Los kogutos          | W   | 1.000      | 0.435        | 0.030 (0.013)    | 1.000 (0.435)    | -         |    10.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |     1295 | 2026-02-20 | Ex-RUBY              | L   | 0.996      | -            | -                | -                | -         |   -18.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |     1315 | 2026-02-19 | OMEGA                | W   | 0.992      | 0.435        | 0.031 (0.013)    | 0.682 (0.294)    | -         |    11.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |     1327 | 2026-02-19 | Los kogutos          | L   | 0.990      | -            | -                | -                | -         |   -22.70 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |     1374 | 2026-02-18 | HAVU                 | W   | 0.984      | -            | -                | -                | -         |     5.74 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |     1422 | 2026-02-17 | Ex-Zero Tenacity     | W   | 0.978      | -            | -                | -                | -         |     1.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |     1445 | 2026-02-17 | Inner Circle Esports | W   | 0.977      | 0.435        | 0.078 (0.033)    | -                | -         |     6.22 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |     1491 | 2026-02-16 | FUZOS                | W   | 0.970      | -            | -                | -                | -         |     3.60 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |     1498 | 2026-02-16 | ARCRED               | L   | 0.969      | -            | -                | -                | -         |   -16.16 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |     1517 | 2026-02-15 | Lazer Cats           | W   | 0.965      | -            | -                | -                | -         |     3.68 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |     1520 | 2026-02-15 | Hashiras             | L   | 0.965      | -            | -                | -                | -         |   -27.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |     1555 | 2026-02-15 | MASONIC              | W   | 0.963      | -            | -                | -                | -         |     5.17 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |     1611 | 2026-02-14 | Oxuji Esports        | L   | 0.957      | -            | -                | -                | -         |   -25.18 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |     1622 | 2026-02-14 | K27                  | L   | 0.956      | -            | -                | -                | -         |    -9.27 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |     1638 | 2026-02-13 | UNiTY esports        | L   | 0.952      | -            | -                | -                | -         |   -26.58 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |     1700 | 2026-02-12 | Leo Team             | W   | 0.944      | -            | -                | -                | -         |     2.46 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |     1769 | 2026-02-10 | GenOne               | W   | 0.932      | -            | -                | -                | -         |     5.62 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |     1802 | 2026-02-09 | Phantom Esports      | L   | 0.923      | -            | -                | -                | -         |   -23.87 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |     1852 | 2026-02-07 | Rebels Gaming        | W   | 0.911      | -            | -                | -                | -         |     6.89 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     1912 | 2026-02-05 | Los kogutos          | W   | 0.898      | 0.384        | -                | 1.000 (0.345)    | -         |     3.81 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     1935 | 2026-02-04 | FUZOS                | W   | 0.892      | -            | -                | -                | -         |     2.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     1977 | 2026-02-03 | Nuclear TigeRES      | L   | 0.882      | -            | -                | -                | -         |   -14.14 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     1999 | 2026-02-02 | RUSTEC               | W   | 0.878      | -            | -                | -                | 1 (0.878) |     0.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     2011 | 2026-02-02 | ARCRED               | L   | 0.876      | -            | -                | -                | -         |   -18.67 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     2051 | 2026-01-31 | FORZE Reload         | W   | 0.866      | -            | -                | -                | 1 (0.866) |     2.02 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     2070 | 2026-01-31 | K27                  | L   | 0.864      | -            | -                | -                | -         |   -10.08 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     2077 | 2026-01-31 | FORZE Reload         | W   | 0.863      | -            | -                | -                | 1 (0.863) |     1.89 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     2803 | 2025-12-21 | K27                  | L   | 0.590      | -            | -                | -                | -         |    -6.62 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            4 |     2811 | 2025-12-21 | Oxuji Esports        | W   | 0.589      | -            | -                | -                | 1 (0.589) |     2.55 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            3 |     2978 | 2025-12-09 | K27                  | L   | 0.511      | -            | -                | -                | -         |    -5.95 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            2 |     2987 | 2025-12-09 | ALLINNERS            | W   | 0.510      | -            | -                | -                | -         |     0.94 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            1 |     3009 | 2025-12-08 | Nemiga Gaming        | W   | 0.503      | 0.447        | 0.137 (0.031)    | -                | -         |     7.75 | El1an, Forester, Lack1, NickelBack, sugaR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,199.16)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-06 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-02-27 |      1.000 | $22,000.00     | $22,000.00      |
| 2026-02-20 |      0.998 | $2,000.00      | $1,996.39       |
| 2025-12-21 |      0.590 | $9,661.17      | $5,702.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
