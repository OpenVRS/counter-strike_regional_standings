### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: Calyx, EMSTAR, imoRR, jresy, lugseN<br />
Global Rank: [225](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [143]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  696.7<br />
<br />
Final Rank Value (696.7) = Starting Rank Value (650.3) + Head To Head Adjustments (46.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.214[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.3
- 400 + ( ( 0.128 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 650.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.097
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |     3756 | 2025-12-21 | GenOne                                    | L   | 0.492      | -            | -                | -                | -         |    -3.08 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           35 |     3855 | 2025-12-16 | EYEBALLERS                                | L   | 0.459      | -            | -                | -                | -         |    -0.25 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           34 |     3893 | 2025-12-12 | NOVAQ                                     | W   | 0.433      | 0.384        | 0.022 (0.004)    | 0.524 (0.087)    | 0 (0.000) |    12.10 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           33 |     3917 | 2025-12-10 | Ex-RUBY                                   | L   | 0.420      | -            | -                | -                | -         |    -1.91 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           32 |     3934 | 2025-12-09 | Copenhagen Wolves (American organization) | W   | 0.412      | 0.384        | -                | 0.119 (0.019)    | 0 (0.000) |     5.72 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           31 |     4052 | 2025-12-04 | Nexus Gaming                              | W   | 0.380      | 0.384        | 0.001 (0.000)    | 0.450 (0.066)    | 0 (0.000) |    10.74 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           30 |     4089 | 2025-12-02 | Oramond                                   | L   | 0.365      | -            | -                | -                | -         |    -1.86 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           29 |     4107 | 2025-12-01 | Nuclear TigeRES                           | L   | 0.359      | -            | -                | -                | -         |    -0.24 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           28 |     4174 | 2025-11-29 | Ex-RUBY                                   | L   | 0.345      | -            | -                | -                | -         |    -1.53 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           27 |     4196 | 2025-11-28 | Lavked                                    | L   | 0.340      | -            | -                | -                | -         |    -2.41 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           26 |     4219 | 2025-11-27 | HAVU                                      | W   | 0.331      | 0.371        | 0.005 (0.001)    | 0.569 (0.070)    | 0 (0.000) |     9.52 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           25 |     4262 | 2025-11-25 | Hypewrld                                  | L   | 0.318      | -            | -                | -                | -         |    -1.03 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           24 |     4275 | 2025-11-24 | Leo Team                                  | W   | 0.314      | 0.344        | 0.017 (0.002)    | 0.565 (0.061)    | 0 (0.000) |     8.04 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           23 |     4291 | 2025-11-24 | K27                                       | L   | 0.312      | -            | -                | -                | -         |    -0.10 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           22 |     4304 | 2025-11-23 | Fire Flux Esports                         | L   | 0.307      | -            | -                | -                | -         |    -3.46 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           21 |     4323 | 2025-11-23 | Copenhagen Wolves (American organization) | L   | 0.305      | -            | -                | -                | -         |    -5.61 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           20 |     4326 | 2025-11-22 | AaB esport                                | W   | 0.301      | 0.299        | 0.000 (0.000)    | -                | 0 (0.000) |     4.96 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           19 |     4374 | 2025-11-21 | FAVBET Team                               | L   | 0.293      | -            | -                | -                | -         |    -1.68 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           18 |     4404 | 2025-11-20 | The Last Resort                           | L   | 0.287      | -            | -                | -                | -         |    -1.69 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           17 |     4451 | 2025-11-19 | MANA eSports                              | W   | 0.279      | 0.344        | -                | 0.637 (0.061)    | 0 (0.000) |     6.79 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           16 |     4457 | 2025-11-18 | HYPERSPIRIT                               | W   | 0.274      | 0.344        | -                | 0.479 (0.045)    | 0 (0.000) |     7.25 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           15 |     4468 | 2025-11-17 | MANA eSports                              | L   | 0.267      | -            | -                | -                | -         |    -1.84 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           14 |     4664 | 2025-11-09 | Lavked                                    | L   | 0.214      | -            | -                | -                | -         |    -1.65 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           13 |     4737 | 2025-11-08 | RED Canids                                | W   | 0.205      | 0.384        | 0.030 (0.002)    | 0.483 (0.038)    | 0 (0.000) |     6.29 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           12 |     4782 | 2025-11-07 | Lavked                                    | L   | 0.200      | -            | -                | -                | -         |    -1.46 | Calyx, EMSTAR, imoRR, jresy, lugseN |
|           11 |     5059 | 2025-10-30 | ENCE Academy                              | L   | 0.145      | -            | -                | -                | -         |    -1.34 | Calyx, imoRR, jresy, lugseN, rim3   |
|           10 |     5072 | 2025-10-29 | HAVU                                      | W   | 0.140      | 0.344        | 0.005 (0.000)    | 0.569 (0.027)    | 0 (0.000) |     4.07 | Calyx, imoRR, jresy, lugseN, rim3   |
|            9 |     5100 | 2025-10-28 | 1w Team                                   | L   | 0.134      | -            | -                | -                | -         |    -0.04 | Calyx, imoRR, jresy, lugseN, rim3   |
|            8 |     5116 | 2025-10-28 | ENCE Academy                              | L   | 0.131      | -            | -                | -                | -         |    -1.19 | Calyx, imoRR, jresy, lugseN, rim3   |
|            7 |     5137 | 2025-10-27 | Home                                      | W   | 0.127      | 0.384        | 0.000 (0.000)    | -                | -         |     2.15 | Calyx, imoRR, jresy, lugseN, rim3   |
|            6 |     5249 | 2025-10-25 | Lavked                                    | W   | 0.113      | 0.384        | 0.007 (0.000)    | 0.538 (0.023)    | -         |     2.76 | Calyx, imoRR, jresy, lugseN, rim3   |
|            5 |     5356 | 2025-10-23 | 33                                        | L   | 0.100      | -            | -                | -                | -         |    -0.05 | Calyx, imoRR, jresy, lugseN, rim3   |
|            4 |     5417 | 2025-10-21 | MOLO                                      | L   | 0.085      | -            | -                | -                | -         |    -1.97 | Calyx, imoRR, jresy, lugseN, rim3   |
|            3 |     5625 | 2025-10-12 | ECSTATIC                                  | L   | 0.026      | -            | -                | -                | -         |    -0.01 | bnox, Calyx, imoRR, lugseN, mASKED  |
|            2 |     5644 | 2025-10-11 | BC.Game Esports                           | W   | 0.019      | 0.485        | 0.001 (0.000)    | -                | -         |     0.33 | bnox, Calyx, imoRR, lugseN, mASKED  |
|            1 |     5767 | 2025-10-08 | Inner Circle Esports                      | L   | 0.000      | -            | -                | -                | -         |    -0.00 | bnox, Calyx, imoRR, jresy, mASKED   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($97.98)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-13 |      0.034 | $2,901.95      | $97.98          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
