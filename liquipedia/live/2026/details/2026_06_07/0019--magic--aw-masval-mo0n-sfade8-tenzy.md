### Roster Details<br />
Team Name: Magic<br />
Roster: AW, MaSvAl, mo0N, sFade8, tenzy<br />
Global Rank: [19](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [14]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1546.6<br />
<br />
Final Rank Value (1546.6) = Starting Rank Value (1604.5) + Head To Head Adjustments (-57.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.615[<sup>1</sup>](#table2)
- Bounty Collected: 0.515[<sup>2</sup>](#table1)
- Opponent Network: 0.417[<sup>2</sup>](#table1)
- LAN Wins: 0.956[<sup>2</sup>](#table1)

The average of these factors is 0.626<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1604.5
- 400 + ( ( 0.626 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1604.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.690
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      118 | 2026-05-30 | Ninjas in Pyjamas                         | L   | 1.000      | -            | -                | -                | -         |   -20.56 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           60 |      154 | 2026-05-29 | Ninjas in Pyjamas                         | W   | 1.000      | 0.500        | 0.117 (0.058)    | -                | 1 (1.000) |     9.82 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           59 |      194 | 2026-05-28 | FaZe Clan                                 | W   | 1.000      | 0.500        | 0.364 (0.182)    | -                | 1 (1.000) |    12.27 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           58 |      266 | 2026-05-27 | 3DMAX                                     | W   | 1.000      | 0.500        | 0.228 (0.114)    | -                | 1 (1.000) |    11.49 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           57 |      632 | 2026-05-17 | MOUZ                                      | L   | 1.000      | -            | -                | -                | -         |    -4.08 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           56 |      652 | 2026-05-16 | Team Falcons                              | L   | 1.000      | -            | -                | -                | -         |    -2.69 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           55 |      684 | 2026-05-15 | 9z Team                                   | W   | 1.000      | 1.000        | 0.248 (0.248)    | 0.555 (0.555)    | 1 (1.000) |    21.92 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           54 |      751 | 2026-05-12 | Gentle Mates                              | W   | 1.000      | 1.000        | 0.141 (0.141)    | 0.492 (0.492)    | 1 (1.000) |    10.20 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           53 |      793 | 2026-05-11 | HEROIC                                    | W   | 1.000      | 1.000        | 0.148 (0.148)    | 0.460 (0.460)    | 1 (1.000) |    13.05 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           52 |      824 | 2026-05-11 | K27                                       | W   | 1.000      | 1.000        | 0.090 (0.090)    | 0.646 (0.646)    | 1 (1.000) |     9.17 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           51 |      853 | 2026-05-10 | Monte                                     | L   | 1.000      | -            | -                | -                | -         |   -15.49 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           50 |      895 | 2026-05-08 | The MongolZ                               | L   | 0.997      | -            | -                | -                | -         |    -5.40 | AW, MaSvAl, mo0N, sFade8, tenzy      |
|           49 |     1009 | 2026-05-03 | Gentle Mates                              | W   | 0.959      | 0.435        | 0.141 (0.059)    | -                | -         |     9.56 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           48 |     1051 | 2026-05-02 | Eternal Fire                              | W   | 0.952      | 0.435        | -                | 0.741 (0.307)    | -         |     3.95 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           47 |     1151 | 2026-04-30 | Looking for Org                           | W   | 0.939      | 0.435        | -                | 0.548 (0.224)    | -         |     4.98 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           46 |     1422 | 2026-04-25 | Nuclear TigeRES                           | L   | 0.906      | -            | -                | -                | -         |   -22.45 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           45 |     1909 | 2026-04-05 | Illwill                                   | L   | 0.774      | -            | -                | -                | -         |   -22.86 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           44 |     1920 | 2026-04-05 | BIG                                       | L   | 0.773      | -            | -                | -                | -         |   -16.27 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           43 |     1950 | 2026-04-05 | Drama Esports                             | W   | 0.771      | -            | -                | -                | 1 (0.771) |     0.11 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           42 |     2015 | 2026-04-04 | CYBERSHOKE Esports                        | W   | 0.765      | -            | -                | -                | 1 (0.765) |     2.32 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           41 |     2026 | 2026-04-04 | PIVOSQUAD                                 | W   | 0.765      | -            | -                | -                | 1 (0.765) |     0.05 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           40 |     2033 | 2026-04-04 | Re`Di                                     | W   | 0.764      | -            | -                | -                | -         |     0.04 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           39 |     2085 | 2026-04-03 | K27                                       | W   | 0.759      | 0.769        | 0.090 (0.053)    | 0.646 (0.377)    | -         |     7.12 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           38 |     2179 | 2026-04-02 | K27                                       | W   | 0.753      | 0.769        | 0.090 (0.052)    | 0.646 (0.374)    | -         |     7.15 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           37 |     2261 | 2026-04-01 | AKPO6ATbI                                 | W   | 0.747      | -            | -                | -                | -         |     0.14 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           36 |     2370 | 2026-03-31 | 100 Thieves                               | W   | 0.739      | 0.769        | -                | 0.757 (0.430)    | -         |     6.79 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           35 |     2863 | 2026-03-23 | Nuclear TigeRES                           | W   | 0.687      | 0.624        | -                | 0.711 (0.305)    | -         |     3.85 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           34 |     2878 | 2026-03-23 | IC Academy                                | W   | 0.687      | -            | -                | -                | -         |     0.48 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           33 |     3519 | 2026-03-10 | PsychoFace                                | L   | 0.598      | -            | -                | -                | -         |   -17.49 | AW, MaSvAl, mo0N, sFade8, tENZY      |
|           32 |     3795 | 2026-03-05 | ECSTATIC                                  | L   | 0.566      | -            | -                | -                | -         |   -16.05 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           31 |     3831 | 2026-03-04 | HOTU                                      | W   | 0.560      | -            | -                | -                | -         |     5.09 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           30 |     3880 | 2026-03-03 | TDK                                       | W   | 0.553      | -            | -                | -                | -         |     2.36 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           29 |     4230 | 2026-02-24 | SPARTA Esports                            | L   | 0.506      | -            | -                | -                | -         |   -14.32 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           28 |     4598 | 2026-02-17 | MOUZ NXT                                  | L   | 0.460      | -            | -                | -                | -         |   -13.71 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           27 |     4774 | 2026-02-14 | Gentle Mates                              | L   | 0.439      | -            | -                | -                | -         |   -10.30 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           26 |     4826 | 2026-02-13 | Misa Esports                              | W   | 0.433      | -            | -                | -                | -         |     0.12 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           25 |     4866 | 2026-02-12 | Fire Flux Esports                         | W   | 0.426      | -            | -                | -                | -         |     0.03 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           24 |     5048 | 2026-02-06 | BetBoom Team                              | W   | 0.387      | -            | -                | -                | -         |     5.54 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           23 |     5056 | 2026-02-06 | FAVBET Team                               | W   | 0.386      | -            | -                | -                | -         |     0.27 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           22 |     5079 | 2026-02-05 | EYEBALLERS                                | W   | 0.380      | -            | -                | -                | -         |     3.13 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           21 |     5123 | 2026-02-03 | SINNERS Esports                           | W   | 0.367      | -            | -                | -                | -         |     2.89 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           20 |     5145 | 2026-02-03 | Ex-RUBY                                   | L   | 0.365      | -            | -                | -                | -         |   -11.14 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           19 |     5174 | 2026-02-02 | DragonClaw                                | L   | 0.359      | -            | -                | -                | -         |   -10.98 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           18 |     5199 | 2026-02-01 | Persona Grata                             | W   | 0.352      | -            | -                | -                | -         |     0.14 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           17 |     5205 | 2026-02-01 | 1w Team                                   | W   | 0.351      | -            | -                | -                | -         |     1.58 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           16 |     5258 | 2026-01-30 | DragonClaw                                | L   | 0.341      | -            | -                | -                | -         |   -10.47 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           15 |     5301 | 2026-01-29 | Johnny Speeds                             | W   | 0.332      | -            | -                | -                | -         |     1.54 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           14 |     5312 | 2026-01-28 | Tung Tung Sahur                           | W   | 0.326      | -            | -                | -                | -         |     0.04 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           13 |     5367 | 2026-01-26 | SIXSEVEN                                  | W   | 0.311      | -            | -                | -                | -         |     0.03 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           12 |     5425 | 2026-01-24 | MOUZ NXT                                  | W   | 0.299      | -            | -                | -                | -         |     0.42 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           11 |     5581 | 2026-01-20 | MANA eSports                              | W   | 0.273      | -            | -                | -                | -         |     0.14 | AW, h1te, MaSvAl, sFade8, tENZY      |
|           10 |     6039 | 2025-12-18 | DragonClaw                                | L   | 0.053      | -            | -                | -                | -         |    -1.63 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            9 |     6044 | 2025-12-18 | ARCRED                                    | W   | 0.052      | -            | -                | -                | -         |     0.18 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            8 |     6051 | 2025-12-17 | Johnny Speeds                             | W   | 0.048      | -            | -                | -                | -         |     0.25 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            7 |     6076 | 2025-12-16 | Team Nemesis                              | W   | 0.041      | -            | -                | -                | -         |     0.16 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            6 |     6087 | 2025-12-14 | BIG                                       | L   | 0.027      | -            | -                | -                | -         |    -0.65 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            5 |     6091 | 2025-12-14 | SIXSEVEN                                  | W   | 0.025      | -            | -                | -                | -         |     0.00 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            4 |     6100 | 2025-12-13 | BetBoom Team                              | W   | 0.020      | -            | -                | -                | -         |     0.27 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            3 |     6122 | 2025-12-12 | Copenhagen Wolves (American organization) | W   | 0.011      | -            | -                | -                | -         |     0.00 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            2 |     6131 | 2025-12-11 | Walczaki                                  | W   | 0.006      | -            | -                | -                | -         |     0.01 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |
|            1 |     6134 | 2025-12-11 | Nexus Gaming                              | W   | 0.005      | -            | -                | -                | -         |     0.00 | h1te, MaSvAl, sFade8, sstiNiX, tENZY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($146,230.56)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.24) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      1.000 | $17,500.00     | $17,500.00      |
| 2026-05-17 |      1.000 | $112,000.00    | $112,000.00     |
| 2026-04-05 |      0.774 | $4,000.00      | $3,095.36       |
| 2026-03-05 |      0.567 | $5,000.00      | $2,834.24       |
| 2026-02-14 |      0.441 | $3,125.00      | $1,376.58       |
| 2026-02-06 |      0.387 | $22,000.00     | $8,516.27       |
| 2026-02-04 |      0.371 | $1,000.00      | $371.34         |
| 2025-12-18 |      0.053 | $5,000.00      | $265.03         |
| 2025-12-14 |      0.027 | $10,000.00     | $271.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
