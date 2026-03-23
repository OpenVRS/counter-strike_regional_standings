### Roster Details<br />
Team Name: RUBY<br />
Roster: fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ<br />
Global Rank: [170](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [121]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  780.3<br />
<br />
Final Rank Value (780.3) = Starting Rank Value (729.6) + Head To Head Adjustments (50.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.337[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.045[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.6
- 400 + ( ( 0.168 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 729.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.102
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |     4009 | 2025-10-27 | ARCRED                                    | L   | 0.273      | -            | -                | -                | -         |    -0.35 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           48 |     4023 | 2025-10-27 | AMKAL ESPORTS                             | L   | 0.271      | -            | -                | -                | -         |    -5.12 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           47 |     4062 | 2025-10-26 | KOLESIE                                   | L   | 0.266      | -            | -                | -                | -         |    -0.45 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           46 |     4082 | 2025-10-26 | ENCE Academy                              | W   | 0.265      | 0.384        | -                | 0.469 (0.048)    | 0 (0.000) |     4.88 | fozil, H4SAN4TOR, Jyo, Kaide, maQuein    |
|           45 |     4226 | 2025-10-23 | NOVAQ                                     | W   | 0.246      | 0.384        | 0.027 (0.003)    | 0.687 (0.065)    | 0 (0.000) |     6.81 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           44 |     4247 | 2025-10-23 | NIP Impact                                | W   | 0.244      | 0.384        | 0.031 (0.003)    | -                | 0 (0.000) |     3.95 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           43 |     4265 | 2025-10-22 | Nuclear TigeRES                           | L   | 0.238      | -            | -                | -                | -         |    -0.19 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           42 |     4313 | 2025-10-19 | Los kogutos                               | L   | 0.218      | -            | -                | -                | -         |    -1.25 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           41 |     4333 | 2025-10-18 | 9INE                                      | L   | 0.211      | -            | -                | -                | -         |    -0.26 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           40 |     4361 | 2025-10-17 | M1X                                       | W   | 0.204      | -            | -                | -                | 0 (0.000) |     1.31 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           39 |     4383 | 2025-10-16 | Fire Flux Esports                         | L   | 0.199      | -            | -                | -                | -         |    -3.28 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           38 |     4420 | 2025-10-15 | ALLINNERS                                 | W   | 0.193      | -            | -                | -                | 0 (0.000) |     2.16 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           37 |     4491 | 2025-10-13 | M1X                                       | W   | 0.177      | -            | -                | -                | 0 (0.000) |     1.11 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           36 |     4496 | 2025-10-12 | BetBoom Team                              | W   | 0.172      | 0.435        | 0.102 (0.008)    | 0.723 (0.054)    | 0 (0.000) |     5.26 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           35 |     4505 | 2025-10-12 | Friendly Campers                          | W   | 0.171      | 0.435        | 0.038 (0.003)    | -                | 0 (0.000) |     4.61 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           34 |     4513 | 2025-10-11 | Sashi Esport                              | W   | 0.166      | 0.435        | -                | 0.631 (0.045)    | 0 (0.000) |     4.99 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           33 |     4543 | 2025-10-10 | KOLESIE                                   | W   | 0.159      | 0.435        | 0.062 (0.004)    | 0.698 (0.048)    | 0 (0.000) |     4.79 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           32 |     4594 | 2025-10-09 | ARCRED                                    | L   | 0.153      | -            | -                | -                | -         |    -0.14 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           31 |     4610 | 2025-10-09 | Betera Esports                            | L   | 0.151      | -            | -                | -                | -         |    -2.25 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           30 |     4613 | 2025-10-09 | Nuclear TigeRES                           | W   | 0.150      | 0.384        | 0.058 (0.003)    | 1.000 (0.058)    | -         |     4.62 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           29 |     4646 | 2025-10-08 | Friendly Campers                          | L   | 0.146      | -            | -                | -                | -         |    -0.66 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           28 |     4666 | 2025-10-08 | Friendly Campers                          | L   | 0.144      | -            | -                | -                | -         |    -0.66 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           27 |     4671 | 2025-10-08 | Ex-Zero Tenacity                          | W   | 0.143      | 0.435        | -                | 0.411 (0.026)    | -         |     2.52 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           26 |     4709 | 2025-10-07 | CYBERSHOKE Esports                        | L   | 0.138      | -            | -                | -                | -         |    -0.33 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           25 |     4719 | 2025-10-07 | SPARTA Esports                            | W   | 0.138      | 0.384        | -                | 0.494 (0.026)    | -         |     2.58 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           24 |     4779 | 2025-10-06 | Alliance                                  | W   | 0.131      | 0.435        | 0.095 (0.005)    | 0.882 (0.050)    | -         |     4.05 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           23 |     4811 | 2025-10-05 | Ex-Inner Circle Esports                   | W   | 0.126      | -            | -                | -                | -         |     0.52 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           22 |     4813 | 2025-10-05 | BC.Game Esports                           | W   | 0.126      | -            | -                | -                | -         |     2.01 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           21 |     4943 | 2025-10-02 | ComeBack (Kazakhstani team)               | W   | 0.106      | -            | -                | -                | -         |     1.09 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           20 |     5012 | 2025-09-30 | FAVBET Team                               | L   | 0.093      | -            | -                | -                | -         |    -0.67 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           19 |     5042 | 2025-09-30 | Leo Team                                  | W   | 0.090      | -            | -                | -                | -         |     2.02 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           18 |     5077 | 2025-09-29 | K27                                       | W   | 0.083      | 0.384        | 0.132 (0.004)    | 0.800 (0.026)    | -         |     2.59 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           17 |     5169 | 2025-09-27 | KHAN                                      | L   | 0.071      | -            | -                | -                | -         |    -1.73 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           16 |     5252 | 2025-09-25 | Sashi Esport                              | W   | 0.058      | -            | -                | -                | -         |     1.77 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           15 |     5259 | 2025-09-25 | FORZE Reload                              | W   | 0.058      | -            | -                | -                | -         |     1.16 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           14 |     5285 | 2025-09-24 | SINNERS Esports                           | W   | 0.053      | 0.371        | 0.168 (0.003)    | -                | -         |     1.61 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           13 |     5299 | 2025-09-23 | 1w Team                                   | L   | 0.046      | -            | -                | -                | -         |    -0.07 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           12 |     5304 | 2025-09-23 | Copenhagen Wolves (American organization) | W   | 0.045      | -            | -                | -                | -         |     0.68 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           11 |     5307 | 2025-09-23 | HOTU                                      | L   | 0.045      | -            | -                | -                | -         |    -0.03 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|           10 |     5324 | 2025-09-22 | Oramond                                   | L   | 0.038      | -            | -                | -                | -         |    -0.28 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            9 |     5329 | 2025-09-22 | BC.Game Esports                           | W   | 0.037      | -            | -                | -                | -         |     0.61 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            8 |     5369 | 2025-09-20 | Betera Esports                            | L   | 0.026      | -            | -                | -                | -         |    -0.38 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            7 |     5384 | 2025-09-20 | SIXSEVEN                                  | W   | 0.024      | -            | -                | -                | -         |     0.45 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            6 |     5396 | 2025-09-19 | SINNERS Esports                           | W   | 0.019      | 0.486        | 0.168 (0.002)    | -                | -         |     0.59 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            5 |     5409 | 2025-09-19 | BIG                                       | L   | 0.018      | -            | -                | -                | -         |    -0.21 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            4 |     5419 | 2025-09-19 | M1X                                       | W   | 0.017      | -            | -                | -                | -         |     0.12 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            3 |     5477 | 2025-09-17 | HOTU                                      | L   | 0.006      | -            | -                | -                | -         |    -0.00 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            2 |     5482 | 2025-09-17 | Alliance                                  | W   | 0.005      | -            | -                | -                | -         |     0.16 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |
|            1 |     5485 | 2025-09-17 | Team Nemesis                              | L   | 0.004      | -            | -                | -                | -         |    -0.00 | fozil, H4SAN4TOR, Kaide, maQuein, TruNiQ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,556.08)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.219 | $1,000.00      | $219.47         |
| 2025-10-12 |      0.172 | $22,000.00     | $3,789.40       |
| 2025-10-09 |      0.151 | $2,500.00      | $377.14         |
| 2025-09-25 |      0.057 | $3,000.00      | $170.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
