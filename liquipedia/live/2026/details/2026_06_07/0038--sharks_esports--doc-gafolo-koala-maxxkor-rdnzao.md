### Roster Details<br />
Team Name: Sharks Esports<br />
Roster: doc, gafolo, koala, maxxkor, rdnzao<br />
Global Rank: [38](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [9]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  1329.3<br />
<br />
Final Rank Value (1329.3) = Starting Rank Value (1305.9) + Head To Head Adjustments (23.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.444[<sup>1</sup>](#table2)
- Bounty Collected: 0.430[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.795[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1305.9
- 400 + ( ( 0.471 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1305.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.458
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           58 |       21 | 2026-06-04 | TYLOO                         | L   | 1.000      | -            | -                | -                | -         |   -12.65 | doc, gafolo, koala, maxxkor, rdnzao |
|           57 |       33 | 2026-06-03 | Lynn Vision Gaming            | L   | 1.000      | -            | -                | -                | -         |   -11.10 | doc, gafolo, koala, maxxkor, rdnzao |
|           56 |       41 | 2026-06-02 | M80                           | L   | 1.000      | -            | -                | -                | -         |   -13.21 | doc, gafolo, koala, maxxkor, rdnzao |
|           55 |       52 | 2026-06-02 | HEROIC                        | W   | 1.000      | 0.143        | 0.148 (0.021)    | -                | 1 (1.000) |    17.67 | doc, gafolo, koala, maxxkor, rdnzao |
|           54 |      147 | 2026-05-29 | FaZe Clan                     | L   | 1.000      | -            | -                | -                | -         |    -9.92 | doc, gafolo, koala, maxxkor, rdnzao |
|           53 |      157 | 2026-05-29 | Alliance                      | W   | 1.000      | 0.500        | 0.097 (0.049)    | 0.787 (0.393)    | 1 (1.000) |    18.20 | doc, gafolo, koala, maxxkor, rdnzao |
|           52 |      191 | 2026-05-28 | Ninjas in Pyjamas             | L   | 1.000      | -            | -                | -                | -         |   -12.58 | doc, gafolo, koala, maxxkor, rdnzao |
|           51 |      245 | 2026-05-27 | 9z Team                       | W   | 1.000      | 0.500        | 0.248 (0.124)    | 0.555 (0.278)    | 1 (1.000) |    26.87 | doc, gafolo, koala, maxxkor, rdnzao |
|           50 |      402 | 2026-05-23 | IC Esports                    | L   | 1.000      | -            | -                | -                | -         |   -17.06 | doc, gafolo, koala, maxxkor, rdnzao |
|           49 |      428 | 2026-05-23 | FOKUS                         | L   | 1.000      | -            | -                | -                | -         |   -15.66 | doc, gafolo, koala, maxxkor, rdnzao |
|           48 |      464 | 2026-05-22 | Betclic Apogee Esports        | W   | 1.000      | 0.435        | -                | 0.500 (0.217)    | 1 (1.000) |     6.81 | doc, gafolo, koala, maxxkor, rdnzao |
|           47 |     1002 | 2026-05-03 | 100 Thieves                   | W   | 0.960      | 0.435        | 0.041 (0.017)    | 0.757 (0.316)    | -         |    15.28 | doc, gafolo, koala, maxxkor, rdnzao |
|           46 |     1032 | 2026-05-02 | 33                            | W   | 0.954      | 0.435        | 0.033 (0.014)    | 0.599 (0.248)    | -         |     9.39 | doc, gafolo, koala, maxxkor, rdnzao |
|           45 |     1191 | 2026-04-29 | Falcons Force                 | W   | 0.933      | -            | -                | -                | -         |     1.92 | doc, gafolo, koala, maxxkor, rdnzao |
|           44 |     1430 | 2026-04-25 | BIG                           | L   | 0.904      | -            | -                | -                | -         |   -10.04 | doc, gafolo, koala, maxxkor, rdnzao |
|           43 |     1479 | 2026-04-24 | Betclic Apogee Esports        | W   | 0.899      | 0.471        | -                | 0.500 (0.212)    | 1 (0.899) |     9.03 | doc, gafolo, koala, maxxkor, rdnzao |
|           42 |     1486 | 2026-04-23 | Ninjas in Pyjamas             | L   | 0.894      | -            | -                | -                | -         |   -11.09 | doc, gafolo, koala, maxxkor, rdnzao |
|           41 |     3629 | 2026-03-08 | Imperial Esports              | W   | 0.587      | -            | -                | -                | 1 (0.587) |     5.09 | doc, gafolo, koala, maxxkor, rdnzao |
|           40 |     3666 | 2026-03-07 | 9z Team                       | L   | 0.582      | -            | -                | -                | -         |    -3.75 | doc, gafolo, koala, maxxkor, rdnzao |
|           39 |     3681 | 2026-03-07 | Fluxo W7M                     | W   | 0.580      | -            | -                | -                | 1 (0.580) |     5.23 | doc, gafolo, koala, maxxkor, rdnzao |
|           38 |     3777 | 2026-03-05 | Turma do Pagode               | W   | 0.567      | 0.384        | -                | 0.517 (0.113)    | 1 (0.567) |     5.94 | doc, gafolo, koala, maxxkor, rdnzao |
|           37 |     3789 | 2026-03-05 | MIBR Academy                  | W   | 0.566      | -            | -                | -                | 1 (0.566) |     0.71 | doc, gafolo, koala, maxxkor, rdnzao |
|           36 |     3943 | 2026-03-01 | 9z Team                       | L   | 0.542      | -            | -                | -                | -         |    -3.49 | doc, gafolo, koala, maxxkor, rdnzao |
|           35 |     4032 | 2026-02-27 | RED Canids                    | W   | 0.529      | -            | -                | -                | 1 (0.529) |     5.15 | doc, gafolo, koala, maxxkor, rdnzao |
|           34 |     4085 | 2026-02-26 | 9z Team                       | W   | 0.523      | 0.435        | 0.248 (0.056)    | 0.555 (0.126)    | -         |    13.37 | doc, gafolo, koala, maxxkor, rdnzao |
|           33 |     4153 | 2026-02-25 | Galorys                       | W   | 0.516      | 0.435        | -                | 0.460 (0.103)    | -         |     4.43 | doc, gafolo, koala, maxxkor, rdnzao |
|           32 |     4363 | 2026-02-21 | Turma do Pagode               | L   | 0.488      | -            | -                | -                | -         |   -10.32 | doc, gafolo, koala, maxxkor, rdnzao |
|           31 |     4416 | 2026-02-20 | Imperial Esports              | W   | 0.482      | -            | -                | -                | -         |     4.04 | doc, gafolo, koala, maxxkor, rdnzao |
|           30 |     4469 | 2026-02-19 | Procyon Team                  | W   | 0.475      | -            | -                | -                | -         |     0.77 | doc, gafolo, koala, maxxkor, rdnzao |
|           29 |     4517 | 2026-02-18 | ShindeN                       | L   | 0.468      | -            | -                | -                | -         |    -9.66 | doc, gafolo, koala, maxxkor, rdnzao |
|           28 |     4577 | 2026-02-17 | FOLHA AMARELA                 | W   | 0.462      | -            | -                | -                | -         |     0.68 | doc, gafolo, koala, maxxkor, rdnzao |
|           27 |     4676 | 2026-02-15 | RED Canids                    | W   | 0.448      | -            | -                | -                | -         |     4.59 | doc, gafolo, koala, maxxkor, rdnzao |
|           26 |     4682 | 2026-02-15 | ShindeN                       | W   | 0.447      | -            | -                | -                | -         |     5.01 | doc, gafolo, koala, maxxkor, rdnzao |
|           25 |     4732 | 2026-02-14 | 9z Team                       | W   | 0.442      | 0.371        | 0.248 (0.041)    | -                | -         |    11.56 | doc, gafolo, koala, maxxkor, rdnzao |
|           24 |     4846 | 2026-02-12 | Despedidos                    | W   | 0.428      | -            | -                | -                | -         |     0.72 | doc, gafolo, koala, maxxkor, rdnzao |
|           23 |     4994 | 2026-02-08 | 9z Team                       | L   | 0.400      | -            | -                | -                | -         |    -2.11 | doc, gafolo, koala, maxxkor, rdnzao |
|           22 |     5011 | 2026-02-07 | RED Canids                    | W   | 0.394      | 0.769        | 0.040 (0.012)    | -                | -         |     4.25 | doc, gafolo, koala, maxxkor, rdnzao |
|           21 |     5040 | 2026-02-06 | Galorys                       | W   | 0.388      | 0.769        | -                | 0.460 (0.137)    | -         |     3.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           20 |     5218 | 2026-01-31 | 9z Team                       | L   | 0.348      | -            | -                | -                | -         |    -1.79 | doc, gafolo, koala, maxxkor, rdnzao |
|           19 |     5253 | 2026-01-30 | MIBR                          | L   | 0.342      | -            | -                | -                | -         |    -1.82 | doc, gafolo, koala, maxxkor, rdnzao |
|           18 |     5256 | 2026-01-30 | SUPERMATCH (Argentinian team) | W   | 0.341      | -            | -                | -                | -         |     0.13 | doc, gafolo, koala, maxxkor, rdnzao |
|           17 |     5422 | 2026-01-24 | Gaimin Gladiators             | L   | 0.299      | -            | -                | -                | -         |    -6.22 | doc, gafolo, koala, maxxkor, rdnzao |
|           16 |     5463 | 2026-01-23 | RED FEET                      | W   | 0.293      | -            | -                | -                | -         |     0.13 | doc, gafolo, koala, maxxkor, rdnzao |
|           15 |     5530 | 2026-01-21 | Galorys                       | W   | 0.282      | -            | -                | -                | -         |     2.38 | doc, gafolo, koala, maxxkor, rdnzao |
|           14 |     5536 | 2026-01-21 | 9z Team                       | L   | 0.281      | -            | -                | -                | -         |    -1.33 | doc, gafolo, koala, maxxkor, rdnzao |
|           13 |     5537 | 2026-01-21 | RED FEET                      | L   | 0.281      | -            | -                | -                | -         |    -8.74 | doc, gafolo, koala, maxxkor, rdnzao |
|           12 |     5549 | 2026-01-21 | RED Canids                    | L   | 0.280      | -            | -                | -                | -         |    -6.31 | doc, gafolo, koala, maxxkor, rdnzao |
|           11 |     5607 | 2026-01-18 | MIBR                          | W   | 0.262      | 0.435        | 0.250 (0.028)    | -                | -         |     6.77 | doc, gafolo, koala, maxxkor, rdnzao |
|           10 |     5691 | 2026-01-16 | Legacy                        | W   | 0.249      | 0.435        | 1.000 (0.108)    | -                | -         |     7.64 | doc, gafolo, koala, maxxkor, rdnzao |
|            9 |     5756 | 2026-01-15 | Imperial Esports              | W   | 0.242      | -            | -                | -                | -         |     2.17 | doc, gafolo, koala, maxxkor, rdnzao |
|            8 |     5787 | 2026-01-14 | Keyd Stars                    | W   | 0.235      | -            | -                | -                | -         |     0.05 | doc, gafolo, koala, maxxkor, rdnzao |
|            7 |     5918 | 2026-01-03 | Wildcard                      | L   | 0.163      | -            | -                | -                | -         |    -5.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            6 |     5921 | 2026-01-03 | GamerLegion                   | L   | 0.162      | -            | -                | -                | -         |    -0.37 | doc, gafolo, koala, maxxkor, rdnzao |
|            5 |     5926 | 2026-01-03 | Wildcard                      | W   | 0.161      | -            | -                | -                | -         |     0.06 | doc, gafolo, koala, maxxkor, rdnzao |
|            4 |     5971 | 2025-12-21 | SAW                           | L   | 0.073      | -            | -                | -                | -         |    -2.27 | doc, gafolo, koala, maxxkor, rdnzao |
|            3 |     5975 | 2025-12-21 | ASTRAL Esports                | W   | 0.072      | -            | -                | -                | -         |     0.56 | doc, gafolo, koala, maxxkor, rdnzao |
|            2 |     6015 | 2025-12-19 | FC Famalicão Esports          | W   | 0.061      | -            | -                | -                | -         |     0.10 | doc, gafolo, koala, maxxkor, rdnzao |
|            1 |     6018 | 2025-12-19 | Nebula In Chaox               | W   | 0.060      | -            | -                | -                | -         |     0.01 | doc, gafolo, koala, maxxkor, rdnzao |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,710.65)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      1.000 | $11,000.00     | $11,000.00      |
| 2026-05-24 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-04-26 |      0.913 | $3,000.00      | $2,739.85       |
| 2026-03-08 |      0.587 | $3,500.00      | $2,056.08       |
| 2026-03-01 |      0.542 | $8,750.00      | $4,741.58       |
| 2026-02-24 |      0.508 | $1,000.00      | $508.28         |
| 2026-02-15 |      0.448 | $10,000.00     | $4,480.06       |
| 2026-02-01 |      0.355 | $800.00        | $284.35         |
| 2026-01-18 |      0.262 | $30,000.00     | $7,856.85       |
| 2025-12-21 |      0.074 | $586.00        | $43.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
