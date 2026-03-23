### Roster Details<br />
Team Name: WhiteBird<br />
Roster: El1an, Forester, Lack1, NickelBack, TRAVIS<br />
Global Rank: [43](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [34]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  1271.3<br />
<br />
Final Rank Value (1271.3) = Starting Rank Value (1397.7) + Head To Head Adjustments (-126.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.470[<sup>1</sup>](#table2)
- Bounty Collected: 0.399[<sup>2</sup>](#table1)
- Opponent Network: 0.331[<sup>2</sup>](#table1)
- LAN Wins: 0.839[<sup>2</sup>](#table1)

The average of these factors is 0.510<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1397.7
- 400 + ( ( 0.510 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1397.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.845
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      396 | 2026-03-06 | WW Team              | L   | 1.000      | -            | -                | -                | -         |   -22.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           48 |      404 | 2026-03-06 | VP.Prodigy           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.32 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           47 |      414 | 2026-03-06 | 1w Team              | W   | 1.000      | -            | -                | -                | 1 (1.000) |    12.90 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           46 |      426 | 2026-03-05 | TDK                  | W   | 1.000      | 0.333        | 0.052 (0.017)    | 0.744 (0.248)    | 1 (1.000) |    13.61 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           45 |      450 | 2026-03-05 | VP.Prodigy           | L   | 1.000      | -            | -                | -                | -         |   -24.26 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           44 |      531 | 2026-03-03 | Younglings           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.33 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           43 |      548 | 2026-03-03 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |   -16.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           42 |      566 | 2026-03-03 | 5Actors              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.49 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           41 |      612 | 2026-03-02 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |   -10.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           40 |      687 | 2026-02-28 | MOUZ NXT             | W   | 1.000      | 0.435        | 0.043 (0.019)    | 1.000 (0.435)    | 0 (0.000) |     9.04 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           39 |      717 | 2026-02-27 | TDK                  | W   | 1.000      | 0.435        | 0.052 (0.023)    | 0.744 (0.323)    | -         |    13.95 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           38 |      725 | 2026-02-27 | SINNERS Esports      | W   | 1.000      | 0.435        | 0.168 (0.073)    | 0.695 (0.302)    | -         |    20.77 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           37 |      784 | 2026-02-26 | BASEMENT BOYS        | W   | 1.000      | -            | -                | -                | -         |     1.91 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           36 |      794 | 2026-02-26 | Alliance             | W   | 1.000      | 0.435        | 0.095 (0.041)    | 0.882 (0.383)    | -         |    22.06 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           35 |      876 | 2026-02-24 | Leo Team             | L   | 1.000      | -            | -                | -                | -         |   -26.14 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |      895 | 2026-02-24 | Magic (Russian team) | W   | 1.000      | 0.435        | 0.098 (0.043)    | 0.650 (0.282)    | -         |    13.79 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |      924 | 2026-02-23 | CSDIILIT             | W   | 1.000      | -            | -                | -                | -         |     2.87 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |      963 | 2026-02-22 | Los kogutos          | W   | 1.000      | 0.435        | 0.029 (0.012)    | 1.000 (0.435)    | -         |    10.80 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |     1120 | 2026-02-20 | Ex-RUBY              | L   | 1.000      | -            | -                | -                | -         |   -18.25 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |     1140 | 2026-02-19 | OMEGA                | W   | 1.000      | 0.435        | 0.030 (0.013)    | 0.630 (0.274)    | -         |    11.24 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |     1152 | 2026-02-19 | Los kogutos          | L   | 1.000      | -            | -                | -                | -         |   -22.43 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |     1199 | 2026-02-18 | HAVU                 | W   | 1.000      | -            | -                | -                | -         |     6.21 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |     1247 | 2026-02-17 | Ex-Zero Tenacity     | W   | 1.000      | -            | -                | -                | -         |     1.60 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |     1270 | 2026-02-17 | Inner Circle Esports | W   | 1.000      | 0.435        | 0.086 (0.037)    | -                | -         |     7.93 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |     1316 | 2026-02-16 | FUZOS                | W   | 1.000      | -            | -                | -                | -         |     3.89 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |     1323 | 2026-02-16 | ARCRED               | L   | 1.000      | -            | -                | -                | -         |   -17.24 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |     1342 | 2026-02-15 | Lazer Cats           | W   | 1.000      | -            | -                | -                | -         |     4.00 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |     1345 | 2026-02-15 | KONO.ECF             | L   | 1.000      | -            | -                | -                | -         |   -28.83 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |     1380 | 2026-02-15 | MASONIC              | W   | 1.000      | -            | -                | -                | -         |     5.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |     1436 | 2026-02-14 | Oxuji Esports        | L   | 1.000      | -            | -                | -                | -         |   -26.29 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |     1447 | 2026-02-14 | K27                  | L   | 1.000      | -            | -                | -                | -         |   -10.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |     1463 | 2026-02-13 | UNiTY esports        | L   | 0.999      | -            | -                | -                | -         |   -27.65 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |     1525 | 2026-02-12 | Leo Team             | W   | 0.992      | -            | -                | -                | -         |     2.66 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |     1594 | 2026-02-10 | GenOne               | W   | 0.979      | 0.435        | -                | 0.623 (0.265)    | -         |     6.48 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |     1627 | 2026-02-09 | Phantom Esports      | L   | 0.971      | -            | -                | -                | -         |   -24.74 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |     1677 | 2026-02-07 | Rebels Gaming        | W   | 0.959      | -            | -                | -                | -         |     7.61 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     1737 | 2026-02-05 | Los kogutos          | W   | 0.946      | 0.384        | -                | 1.000 (0.364)    | -         |     4.22 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     1760 | 2026-02-04 | FUZOS                | W   | 0.940      | -            | -                | -                | -         |     2.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     1802 | 2026-02-03 | Nuclear TigeRES      | L   | 0.930      | -            | -                | -                | -         |   -14.65 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     1824 | 2026-02-02 | RUSTEC               | W   | 0.925      | -            | -                | -                | 1 (0.925) |     0.63 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     1836 | 2026-02-02 | ARCRED               | L   | 0.924      | -            | -                | -                | -         |   -20.31 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     1876 | 2026-01-31 | FORZE Reload         | W   | 0.913      | -            | -                | -                | 1 (0.913) |     2.34 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     1895 | 2026-01-31 | K27                  | L   | 0.912      | -            | -                | -                | -         |   -11.75 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     1902 | 2026-01-31 | FORZE Reload         | W   | 0.911      | -            | -                | -                | 1 (0.911) |     2.19 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     2628 | 2025-12-21 | K27                  | L   | 0.638      | -            | -                | -                | -         |    -8.04 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            4 |     2636 | 2025-12-21 | Oxuji Esports        | W   | 0.637      | -            | -                | -                | 1 (0.637) |     2.72 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            3 |     2803 | 2025-12-09 | K27                  | L   | 0.559      | -            | -                | -                | -         |    -7.36 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            2 |     2812 | 2025-12-09 | ALLINNERS            | W   | 0.558      | -            | -                | -                | -         |     1.08 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            1 |     2834 | 2025-12-08 | Nemiga Gaming        | W   | 0.551      | 0.447        | 0.136 (0.033)    | -                | -         |     8.16 | El1an, Forester, Lack1, NickelBack, sugaR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($31,664.59)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-06 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-02-27 |      1.000 | $22,000.00     | $22,000.00      |
| 2026-02-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-12-21 |      0.638 | $9,661.17      | $6,164.59       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
