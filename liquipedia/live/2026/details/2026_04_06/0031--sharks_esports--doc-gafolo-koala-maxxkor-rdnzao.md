### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, maxxkor, rdnzao<br />
Global Rank: [31](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [7]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  1408.1<br />
<br />
Final Rank Value (1408.1) = Starting Rank Value (1386.1) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.509[<sup>1</sup>](#table2)
- Bounty Collected: 0.405[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.898[<sup>2</sup>](#table1)

The average of these factors is 0.504<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1386.1
- 400 + ( ( 0.504 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1386.1


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


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           63 |     1440 | 2026-03-08 | Imperial Esports              | W   | 1.000      | 0.384        | 0.043 (0.016)    | 0.529 (0.203)    | 1 (1.000) |    10.71 | doc, gafolo, koala, maxxkor, rdnzao |
|           62 |     1477 | 2026-03-07 | 9z Team                       | L   | 1.000      | -            | -                | -                | -         |   -10.47 | doc, gafolo, koala, maxxkor, rdnzao |
|           61 |     1492 | 2026-03-07 | Fluxo W7M                     | W   | 1.000      | -            | -                | -                | 1 (1.000) |    10.62 | doc, gafolo, koala, maxxkor, rdnzao |
|           60 |     1588 | 2026-03-05 | ODDIK                         | W   | 0.987      | 0.384        | 0.048 (0.018)    | 0.564 (0.214)    | 1 (0.987) |    12.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           59 |     1600 | 2026-03-05 | MIBR Academy                  | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.29 | doc, gafolo, koala, maxxkor, rdnzao |
|           58 |     1754 | 2026-03-01 | 9z Team                       | L   | 0.962      | -            | -                | -                | -         |   -10.60 | doc, gafolo, koala, maxxkor, rdnzao |
|           57 |     1843 | 2026-02-27 | RED Canids                    | W   | 0.950      | 0.435        | -                | 0.483 (0.200)    | 1 (0.950) |    11.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           56 |     1896 | 2026-02-26 | 9z Team                       | W   | 0.943      | 0.435        | 0.192 (0.079)    | 0.582 (0.238)    | 1 (0.943) |    19.40 | doc, gafolo, koala, maxxkor, rdnzao |
|           55 |     1964 | 2026-02-25 | Galorys                       | W   | 0.936      | -            | -                | -                | 1 (0.936) |     4.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           54 |     2173 | 2026-02-21 | ODDIK                         | L   | 0.909      | -            | -                | -                | -         |   -15.91 | doc, gafolo, koala, maxxkor, rdnzao |
|           53 |     2227 | 2026-02-20 | Imperial Esports              | W   | 0.902      | 0.363        | 0.043 (0.014)    | 0.529 (0.173)    | -         |    10.16 | doc, gafolo, koala, maxxkor, rdnzao |
|           52 |     2280 | 2026-02-19 | Procyon Team                  | W   | 0.895      | -            | -                | -                | -         |     1.50 | doc, gafolo, koala, maxxkor, rdnzao |
|           51 |     2328 | 2026-02-18 | ShindeN                       | L   | 0.889      | -            | -                | -                | -         |   -14.90 | doc, gafolo, koala, maxxkor, rdnzao |
|           50 |     2388 | 2026-02-17 | FOLHA AMARELA                 | W   | 0.882      | -            | -                | -                | -         |     1.47 | doc, gafolo, koala, maxxkor, rdnzao |
|           49 |     2488 | 2026-02-15 | RED Canids                    | W   | 0.868      | 0.371        | -                | 0.483 (0.156)    | -         |    11.76 | doc, gafolo, koala, maxxkor, rdnzao |
|           48 |     2492 | 2026-02-15 | ShindeN                       | W   | 0.868      | 0.371        | 0.071 (0.023)    | 0.607 (0.195)    | -         |    13.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           47 |     2544 | 2026-02-14 | 9z Team                       | W   | 0.862      | 0.371        | 0.192 (0.061)    | 0.582 (0.186)    | -         |    19.18 | doc, gafolo, koala, maxxkor, rdnzao |
|           46 |     2658 | 2026-02-12 | Despedidos                    | W   | 0.849      | -            | -                | -                | -         |     1.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           45 |     2806 | 2026-02-08 | 9z Team                       | L   | 0.820      | -            | -                | -                | -         |    -7.41 | doc, gafolo, koala, maxxkor, rdnzao |
|           44 |     2823 | 2026-02-07 | RED Canids                    | W   | 0.814      | 0.769        | 0.030 (0.019)    | 0.483 (0.303)    | -         |    12.61 | doc, gafolo, koala, maxxkor, rdnzao |
|           43 |     2852 | 2026-02-06 | Galorys                       | W   | 0.809      | 0.769        | -                | 0.291 (0.181)    | -         |     3.88 | doc, gafolo, koala, maxxkor, rdnzao |
|           42 |     3030 | 2026-01-31 | 9z Team                       | L   | 0.768      | -            | -                | -                | -         |    -7.18 | doc, gafolo, koala, maxxkor, rdnzao |
|           41 |     3065 | 2026-01-30 | MIBR                          | L   | 0.763      | -            | -                | -                | -         |   -11.47 | doc, gafolo, koala, maxxkor, rdnzao |
|           40 |     3068 | 2026-01-30 | SUPERMATCH (Argentinian team) | W   | 0.761      | -            | -                | -                | 1 (0.761) |     0.24 | doc, gafolo, koala, maxxkor, rdnzao |
|           39 |     3234 | 2026-01-24 | Gaimin Gladiators             | L   | 0.719      | -            | -                | -                | -         |    -9.92 | doc, gafolo, koala, maxxkor, rdnzao |
|           38 |     3275 | 2026-01-23 | Metanoia                      | W   | 0.713      | -            | -                | -                | 1 (0.713) |     0.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           37 |     3342 | 2026-01-21 | Galorys                       | W   | 0.703      | -            | -                | -                | 1 (0.703) |     3.05 | doc, gafolo, koala, maxxkor, rdnzao |
|           36 |     3348 | 2026-01-21 | 9z Team                       | L   | 0.702      | -            | -                | -                | -         |    -5.93 | doc, gafolo, koala, maxxkor, rdnzao |
|           35 |     3349 | 2026-01-21 | Metanoia                      | L   | 0.702      | -            | -                | -                | -         |   -21.83 | doc, gafolo, koala, maxxkor, rdnzao |
|           34 |     3361 | 2026-01-21 | RED Canids                    | L   | 0.701      | -            | -                | -                | -         |   -13.85 | doc, gafolo, koala, maxxkor, rdnzao |
|           33 |     3419 | 2026-01-18 | MIBR                          | W   | 0.682      | 0.435        | 0.076 (0.022)    | -                | -         |     8.22 | doc, gafolo, koala, maxxkor, rdnzao |
|           32 |     3503 | 2026-01-16 | Legacy                        | W   | 0.670      | 0.435        | 0.258 (0.075)    | -                | -         |    12.51 | doc, gafolo, koala, maxxkor, rdnzao |
|           31 |     3568 | 2026-01-15 | Imperial Esports              | W   | 0.662      | 0.435        | 0.043 (0.012)    | -                | -         |     9.13 | doc, gafolo, koala, maxxkor, rdnzao |
|           30 |     3599 | 2026-01-14 | Keyd Stars                    | W   | 0.655      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           29 |     3730 | 2026-01-03 | Wildcard                      | L   | 0.583      | -            | -                | -                | -         |   -16.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           28 |     3733 | 2026-01-03 | GamerLegion                   | L   | 0.582      | -            | -                | -                | -         |    -5.69 | doc, gafolo, koala, maxxkor, rdnzao |
|           27 |     3738 | 2026-01-03 | Wildcard                      | W   | 0.582      | -            | -                | -                | -         |     1.92 | doc, gafolo, koala, maxxkor, rdnzao |
|           26 |     3783 | 2025-12-21 | BC.Game Esports               | L   | 0.494      | -            | -                | -                | -         |    -8.83 | doc, gafolo, koala, maxxkor, rdnzao |
|           25 |     3787 | 2025-12-21 | ASTRAL Esports                | W   | 0.493      | -            | -                | -                | -         |     2.16 | doc, gafolo, koala, maxxkor, rdnzao |
|           24 |     3827 | 2025-12-19 | FC Famalicão Esports          | W   | 0.481      | -            | -                | -                | -         |     1.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           23 |     3830 | 2025-12-19 | Nebula In Chaox               | W   | 0.481      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|           22 |     4516 | 2025-11-16 | Keyd Stars                    | W   | 0.262      | -            | -                | -                | -         |     0.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           21 |     4533 | 2025-11-15 | 9z Team                       | L   | 0.255      | -            | -                | -                | -         |    -7.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           20 |     4546 | 2025-11-15 | Fake do Biru                  | W   | 0.254      | -            | -                | -                | -         |     0.56 | doc, gafolo, koala, maxxkor, rdnzao |
|           19 |     4568 | 2025-11-14 | Gaimin Gladiators             | L   | 0.247      | -            | -                | -                | -         |    -3.78 | doc, gafolo, koala, maxxkor, rdnzao |
|           18 |     4581 | 2025-11-13 | 9z Team                       | W   | 0.242      | -            | -                | -                | -         |     0.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           17 |     4616 | 2025-11-12 | DashSkins                     | W   | 0.235      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           16 |     4673 | 2025-11-10 | ShindeN                       | W   | 0.222      | -            | -                | -                | -         |     3.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           15 |     4698 | 2025-11-09 | Fluxo W7M                     | L   | 0.214      | -            | -                | -                | -         |    -3.57 | doc, gafolo, koala, maxxkor, rdnzao |
|           14 |     4736 | 2025-11-08 | Imperial Esports              | W   | 0.209      | -            | -                | -                | -         |     2.52 | doc, gafolo, koala, maxxkor, rdnzao |
|           13 |     4756 | 2025-11-08 | Gaimin Gladiators             | W   | 0.207      | -            | -                | -                | -         |     3.42 | doc, gafolo, koala, maxxkor, rdnzao |
|           12 |     4788 | 2025-11-07 | 9z Team                       | W   | 0.203      | -            | -                | -                | -         |     0.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           11 |     4791 | 2025-11-07 | Metanoia Wolves               | W   | 0.202      | -            | -                | -                | -         |     0.15 | doc, gafolo, koala, maxxkor, rdnzao |
|           10 |     5205 | 2025-10-26 | Gaimin Gladiators             | W   | 0.122      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            9 |     5287 | 2025-10-25 | BESTIA                        | W   | 0.114      | -            | -                | -                | -         |     1.71 | doc, gafolo, koala, maxxkor, rdnzao |
|            8 |     5324 | 2025-10-24 | Metanoia Wolves               | W   | 0.108      | -            | -                | -                | -         |     0.08 | doc, gafolo, koala, maxxkor, rdnzao |
|            7 |     5348 | 2025-10-24 | Dusty Roots                   | W   | 0.107      | -            | -                | -                | -         |     0.05 | doc, gafolo, koala, maxxkor, rdnzao |
|            6 |     5481 | 2025-10-18 | Bounty Hunters Esports        | W   | 0.069      | -            | -                | -                | -         |     0.44 | doc, gafolo, koala, maxxkor, rdnzao |
|            5 |     5483 | 2025-10-18 | Fake do Biru                  | W   | 0.068      | -            | -                | -                | -         |     0.16 | doc, gafolo, koala, maxxkor, rdnzao |
|            4 |     5504 | 2025-10-17 | Yawara E-Sports               | W   | 0.062      | -            | -                | -                | -         |     0.11 | doc, gafolo, koala, maxxkor, rdnzao |
|            3 |     5536 | 2025-10-16 | MIBR Academy                  | W   | 0.055      | -            | -                | -                | -         |     0.02 | doc, gafolo, koala, maxxkor, rdnzao |
|            2 |     5738 | 2025-10-09 | Procyon Team                  | L   | 0.008      | -            | -                | -                | -         |    -0.25 | doc, gafolo, koala, maxxkor, rdnzao |
|            1 |     5788 | 2025-10-08 | Dusty Roots                   | L   | 0.002      | -            | -                | -                | -         |    -0.06 | doc, gafolo, koala, maxxkor, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($49,657.41)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      1.000 | $3,500.00      | $3,500.00       |
| 2026-03-01 |      0.962 | $8,750.00      | $8,420.36       |
| 2026-02-24 |      0.929 | $1,000.00      | $928.72         |
| 2026-02-15 |      0.868 | $10,000.00     | $8,684.38       |
| 2026-02-01 |      0.776 | $800.00        | $620.70         |
| 2026-01-18 |      0.682 | $30,000.00     | $20,469.81      |
| 2025-11-16 |      0.262 | $18,312.00     | $4,790.17       |
| 2025-11-15 |      0.255 | $4,000.00      | $1,021.53       |
| 2025-11-09 |      0.214 | $2,500.00      | $535.97         |
| 2025-10-18 |      0.069 | $10,000.00     | $685.77         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
