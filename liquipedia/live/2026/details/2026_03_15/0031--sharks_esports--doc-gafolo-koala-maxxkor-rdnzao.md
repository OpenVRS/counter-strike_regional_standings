### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, maxxkor, rdnzao<br />
Global Rank: [31](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [6]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  1364.5<br />
<br />
Final Rank Value (1364.5) = Starting Rank Value (1442.1) + Head To Head Adjustments (-77.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.418[<sup>2</sup>](#table1)
- Opponent Network: 0.208[<sup>2</sup>](#table1)
- LAN Wins: 0.962[<sup>2</sup>](#table1)

The average of these factors is 0.532<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1442.1
- 400 + ( ( 0.532 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1442.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.714
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           70 |      316 | 2026-03-08 | Imperial Esports              | W   | 1.000      | 0.384        | 0.056 (0.021)    | 0.597 (0.230)    | 1 (1.000) |     9.46 | doc, gafolo, koala, maxxkor, rdnzao |
|           69 |      349 | 2026-03-07 | 9z Team                       | L   | 1.000      | -            | -                | -                | -         |   -12.13 | doc, gafolo, koala, maxxkor, rdnzao |
|           68 |      363 | 2026-03-07 | Fluxo W7M                     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           67 |      456 | 2026-03-05 | ODDIK                         | W   | 1.000      | 0.384        | 0.036 (0.014)    | 0.448 (0.172)    | 1 (1.000) |     7.84 | doc, gafolo, koala, maxxkor, rdnzao |
|           66 |      466 | 2026-03-05 | MIBR Academy                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.26 | doc, gafolo, koala, maxxkor, rdnzao |
|           65 |      613 | 2026-03-01 | 9z Team                       | L   | 1.000      | -            | -                | -                | -         |   -13.27 | doc, gafolo, koala, maxxkor, rdnzao |
|           64 |      700 | 2026-02-27 | RED Canids                    | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.574 (0.249)    | 1 (1.000) |    10.58 | doc, gafolo, koala, maxxkor, rdnzao |
|           63 |      753 | 2026-02-26 | 9z Team                       | W   | 1.000      | 0.435        | 0.114 (0.050)    | 0.504 (0.219)    | 1 (1.000) |    18.00 | doc, gafolo, koala, maxxkor, rdnzao |
|           62 |      821 | 2026-02-25 | Galorys                       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.31 | doc, gafolo, koala, maxxkor, rdnzao |
|           61 |     1025 | 2026-02-21 | ODDIK                         | L   | 1.000      | -            | -                | -                | -         |   -23.38 | doc, gafolo, koala, maxxkor, rdnzao |
|           60 |     1077 | 2026-02-20 | Imperial Esports              | W   | 1.000      | 0.363        | 0.056 (0.020)    | 0.597 (0.217)    | -         |     8.97 | doc, gafolo, koala, maxxkor, rdnzao |
|           59 |     1130 | 2026-02-19 | Procyon Team                  | W   | 1.000      | -            | -                | -                | -         |     1.48 | doc, gafolo, koala, maxxkor, rdnzao |
|           58 |     1178 | 2026-02-18 | ShindeN                       | L   | 1.000      | -            | -                | -                | -         |   -20.69 | doc, gafolo, koala, maxxkor, rdnzao |
|           57 |     1238 | 2026-02-17 | FOLHA AMARELA                 | W   | 1.000      | -            | -                | -                | -         |     1.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           56 |     1337 | 2026-02-15 | RED Canids                    | W   | 1.000      | 0.371        | -                | 0.574 (0.213)    | -         |    12.25 | doc, gafolo, koala, maxxkor, rdnzao |
|           55 |     1341 | 2026-02-15 | ShindeN                       | W   | 1.000      | 0.371        | 0.054 (0.020)    | 0.513 (0.190)    | -         |    11.00 | doc, gafolo, koala, maxxkor, rdnzao |
|           54 |     1392 | 2026-02-14 | 9z Team                       | W   | 1.000      | 0.371        | 0.114 (0.042)    | 0.504 (0.187)    | -         |    19.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           53 |     1506 | 2026-02-12 | Despedidos                    | W   | 0.994      | -            | -                | -                | -         |     0.96 | doc, gafolo, koala, maxxkor, rdnzao |
|           52 |     1654 | 2026-02-08 | 9z Team                       | L   | 0.965      | -            | -                | -                | -         |   -11.79 | doc, gafolo, koala, maxxkor, rdnzao |
|           51 |     1671 | 2026-02-07 | RED Canids                    | W   | 0.960      | -            | -                | -                | -         |    13.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           50 |     1700 | 2026-02-06 | Galorys                       | W   | 0.954      | -            | -                | -                | -         |     2.41 | doc, gafolo, koala, maxxkor, rdnzao |
|           49 |     1877 | 2026-01-31 | 9z Team                       | L   | 0.913      | -            | -                | -                | -         |   -12.10 | doc, gafolo, koala, maxxkor, rdnzao |
|           48 |     1912 | 2026-01-30 | MIBR                          | L   | 0.908      | -            | -                | -                | -         |   -12.40 | doc, gafolo, koala, maxxkor, rdnzao |
|           47 |     1915 | 2026-01-30 | SUPERMATCH (Argentinian team) | W   | 0.907      | -            | -                | -                | 1 (0.907) |     0.29 | doc, gafolo, koala, maxxkor, rdnzao |
|           46 |     2080 | 2026-01-24 | Gaimin Gladiators             | L   | 0.864      | -            | -                | -                | -         |   -17.62 | doc, gafolo, koala, maxxkor, rdnzao |
|           45 |     2119 | 2026-01-23 | Metanoia                      | W   | 0.859      | -            | -                | -                | 1 (0.859) |     0.42 | doc, gafolo, koala, maxxkor, rdnzao |
|           44 |     2186 | 2026-01-21 | Galorys                       | W   | 0.848      | -            | -                | -                | 1 (0.848) |     1.77 | doc, gafolo, koala, maxxkor, rdnzao |
|           43 |     2192 | 2026-01-21 | 9z Team                       | L   | 0.847      | -            | -                | -                | -         |   -11.10 | doc, gafolo, koala, maxxkor, rdnzao |
|           42 |     2193 | 2026-01-21 | Metanoia                      | L   | 0.847      | -            | -                | -                | -         |   -26.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           41 |     2205 | 2026-01-21 | RED Canids                    | L   | 0.846      | -            | -                | -                | -         |   -18.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           40 |     2263 | 2026-01-18 | MIBR                          | W   | 0.828      | 0.435        | 0.105 (0.038)    | 0.528 (0.190)    | -         |    11.01 | doc, gafolo, koala, maxxkor, rdnzao |
|           39 |     2346 | 2026-01-16 | Legacy                        | W   | 0.815      | 0.435        | 0.468 (0.166)    | -                | -         |    13.94 | doc, gafolo, koala, maxxkor, rdnzao |
|           38 |     2409 | 2026-01-15 | Imperial Esports              | W   | 0.807      | 0.435        | 0.056 (0.019)    | 0.597 (0.210)    | -         |     8.70 | doc, gafolo, koala, maxxkor, rdnzao |
|           37 |     2440 | 2026-01-14 | Keyd Stars                    | W   | 0.801      | -            | -                | -                | -         |     1.01 | doc, gafolo, koala, maxxkor, rdnzao |
|           36 |     2569 | 2026-01-03 | Wildcard                      | L   | 0.728      | -            | -                | -                | -         |   -22.11 | doc, gafolo, koala, maxxkor, rdnzao |
|           35 |     2572 | 2026-01-03 | GamerLegion                   | L   | 0.728      | -            | -                | -                | -         |    -7.97 | doc, gafolo, koala, maxxkor, rdnzao |
|           34 |     2577 | 2026-01-03 | Wildcard                      | W   | 0.727      | -            | -                | -                | -         |     0.73 | doc, gafolo, koala, maxxkor, rdnzao |
|           33 |     2622 | 2025-12-21 | BC.Game Esports               | L   | 0.639      | -            | -                | -                | -         |    -9.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           32 |     2626 | 2025-12-21 | ASTRAL Esports                | W   | 0.638      | -            | -                | -                | -         |     2.02 | doc, gafolo, koala, maxxkor, rdnzao |
|           31 |     2666 | 2025-12-19 | FC Famalicão Esports          | W   | 0.626      | -            | -                | -                | -         |     1.74 | doc, gafolo, koala, maxxkor, rdnzao |
|           30 |     2669 | 2025-12-19 | Nebula In Chaox               | W   | 0.626      | -            | -                | -                | -         |     0.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           29 |     3355 | 2025-11-16 | Keyd Stars                    | W   | 0.407      | -            | -                | -                | -         |     0.42 | doc, gafolo, koala, maxxkor, rdnzao |
|           28 |     3372 | 2025-11-15 | 9z Team                       | L   | 0.401      | -            | -                | -                | -         |   -12.07 | doc, gafolo, koala, maxxkor, rdnzao |
|           27 |     3385 | 2025-11-15 | Fake do Biru                  | W   | 0.399      | -            | -                | -                | -         |     0.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           26 |     3407 | 2025-11-14 | Gaimin Gladiators             | L   | 0.392      | -            | -                | -                | -         |    -9.26 | doc, gafolo, koala, maxxkor, rdnzao |
|           25 |     3420 | 2025-11-13 | 9z Team                       | W   | 0.387      | -            | -                | -                | -         |     0.44 | doc, gafolo, koala, maxxkor, rdnzao |
|           24 |     3455 | 2025-11-12 | DashSkins                     | W   | 0.380      | -            | -                | -                | -         |     0.31 | doc, gafolo, koala, maxxkor, rdnzao |
|           23 |     3512 | 2025-11-10 | ShindeN                       | W   | 0.367      | -            | -                | -                | -         |     2.98 | doc, gafolo, koala, maxxkor, rdnzao |
|           22 |     3537 | 2025-11-09 | Fluxo W7M                     | L   | 0.360      | -            | -                | -                | -         |    -9.02 | doc, gafolo, koala, maxxkor, rdnzao |
|           21 |     3575 | 2025-11-08 | Imperial Esports              | W   | 0.354      | -            | -                | -                | -         |     2.93 | doc, gafolo, koala, maxxkor, rdnzao |
|           20 |     3595 | 2025-11-08 | Gaimin Gladiators             | W   | 0.352      | -            | -                | -                | -         |     2.74 | doc, gafolo, koala, maxxkor, rdnzao |
|           19 |     3627 | 2025-11-07 | 9z Team                       | W   | 0.348      | -            | -                | -                | -         |     0.38 | doc, gafolo, koala, maxxkor, rdnzao |
|           18 |     3630 | 2025-11-07 | Bad Luck                      | W   | 0.347      | -            | -                | -                | -         |     0.08 | doc, gafolo, koala, maxxkor, rdnzao |
|           17 |     4044 | 2025-10-26 | Gaimin Gladiators             | W   | 0.267      | -            | -                | -                | -         |     0.17 | doc, gafolo, koala, maxxkor, rdnzao |
|           16 |     4126 | 2025-10-25 | BESTIA                        | W   | 0.259      | -            | -                | -                | -         |     2.38 | doc, gafolo, koala, maxxkor, rdnzao |
|           15 |     4163 | 2025-10-24 | Bad Luck                      | W   | 0.254      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|           14 |     4187 | 2025-10-24 | Dusty Roots                   | W   | 0.252      | -            | -                | -                | -         |     0.13 | doc, gafolo, koala, maxxkor, rdnzao |
|           13 |     4320 | 2025-10-18 | Bounty Hunters Esports        | W   | 0.214      | -            | -                | -                | -         |     0.35 | doc, gafolo, koala, maxxkor, rdnzao |
|           12 |     4322 | 2025-10-18 | Fake do Biru                  | W   | 0.213      | -            | -                | -                | -         |     0.37 | doc, gafolo, koala, maxxkor, rdnzao |
|           11 |     4343 | 2025-10-17 | Yawara E-Sports               | W   | 0.207      | -            | -                | -                | -         |     0.35 | doc, gafolo, koala, maxxkor, rdnzao |
|           10 |     4375 | 2025-10-16 | MIBR Academy                  | W   | 0.201      | -            | -                | -                | -         |     0.04 | doc, gafolo, koala, maxxkor, rdnzao |
|            9 |     4577 | 2025-10-09 | Procyon Team                  | L   | 0.154      | -            | -                | -                | -         |    -4.60 | doc, gafolo, koala, maxxkor, rdnzao |
|            8 |     4627 | 2025-10-08 | Dusty Roots                   | L   | 0.147      | -            | -                | -                | -         |    -4.56 | doc, gafolo, koala, maxxkor, rdnzao |
|            7 |     4739 | 2025-10-06 | Crashers                      | W   | 0.134      | -            | -                | -                | -         |     0.03 | doc, gafolo, koala, maxxkor, rdnzao |
|            6 |     4852 | 2025-10-04 | ECSTATIC                      | L   | 0.121      | -            | -                | -                | -         |    -1.77 | doc, gafolo, koala, maxxkor, rdnzao |
|            5 |     4863 | 2025-10-04 | Team Voca                     | W   | 0.119      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            4 |     5051 | 2025-09-29 | Imperial Esports              | L   | 0.087      | -            | -                | -                | -         |    -2.01 | doc, gafolo, koala, maxxkor, rdnzao |
|            3 |     5131 | 2025-09-27 | 9z Team                       | W   | 0.075      | -            | -                | -                | -         |     0.07 | doc, gafolo, koala, maxxkor, rdnzao |
|            2 |     5132 | 2025-09-27 | Gaimin Gladiators             | W   | 0.074      | -            | -                | -                | -         |     0.04 | doc, gafolo, koala, maxxkor, rdnzao |
|            1 |     5494 | 2025-09-16 | BESTIA                        | W   | 0.000      | -            | -                | -                | -         |     0.00 | doc, gafolo, koala, maxxkor, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($60,900.51)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      1.000 | $3,500.00      | $3,500.00       |
| 2026-03-01 |      1.000 | $8,750.00      | $8,750.00       |
| 2026-02-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-02-15 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-02-01 |      0.921 | $800.00        | $736.85         |
| 2026-01-18 |      0.828 | $30,000.00     | $24,825.69      |
| 2025-11-16 |      0.407 | $18,311.89     | $7,448.96       |
| 2025-11-15 |      0.401 | $4,000.00      | $1,602.31       |
| 2025-11-09 |      0.360 | $2,500.00      | $898.96         |
| 2025-10-18 |      0.214 | $10,000.00     | $2,137.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
