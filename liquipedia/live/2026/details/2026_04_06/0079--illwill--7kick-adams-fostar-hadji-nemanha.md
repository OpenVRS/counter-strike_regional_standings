### Roster Details<br />
Team Name: Illwill<br />
Roster: 7kick, adamS, fostar, hAdji, nEMANHA<br />
Global Rank: [79](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [54]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  1185.0<br />
<br />
Final Rank Value (1185.0) = Starting Rank Value (1004.4) + Head To Head Adjustments (180.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.420[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.188[<sup>2</sup>](#table1)

The average of these factors is 0.309<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1004.4
- 400 + ( ( 0.309 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1004.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.455
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |     2867 | 2026-02-05 | ECSTATIC                                  | W   | 0.800      | 0.435        | 0.104 (0.036)    | 0.643 (0.223)    | 0 (0.000) |    19.39 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           34 |     2872 | 2026-02-05 | Nuclear TigeRES                           | W   | 0.799      | 0.435        | 0.052 (0.018)    | 0.798 (0.277)    | 0 (0.000) |    19.06 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           33 |     2887 | 2026-02-04 | Betclic Apogee Esports                    | W   | 0.794      | 0.435        | -                | 0.603 (0.208)    | 0 (0.000) |    17.84 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           32 |     2930 | 2026-02-03 | Team Nemesis                              | W   | 0.785      | 0.435        | 0.109 (0.037)    | 1.000 (0.341)    | 0 (0.000) |    20.04 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           31 |     3062 | 2026-01-30 | AaB esport                                | W   | 0.758      | 0.435        | -                | 0.706 (0.232)    | 0 (0.000) |    12.47 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           30 |     3085 | 2026-01-29 | 1w Team                                   | L   | 0.752      | -            | -                | -                | -         |    -3.19 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           29 |     3093 | 2026-01-28 | Ex-RUBY                                   | W   | 0.747      | 0.435        | 0.065 (0.021)    | 1.000 (0.325)    | 0 (0.000) |    11.37 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           28 |     3136 | 2026-01-27 | ECSTATIC                                  | W   | 0.738      | 0.435        | 0.104 (0.033)    | 0.643 (0.206)    | -         |    19.88 | 7kick, adamS, fostar, hAdji, smooya        |
|           27 |     3153 | 2026-01-26 | Nemiga Gaming                             | L   | 0.731      | -            | -                | -                | -         |    -3.33 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           26 |     3196 | 2026-01-24 | Ursa                                      | L   | 0.720      | -            | -                | -                | -         |   -14.17 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           25 |     3214 | 2026-01-24 | FAVBET Team                               | W   | 0.718      | 0.435        | 0.044 (0.014)    | -                | -         |     7.50 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           24 |     3240 | 2026-01-23 | MOUZ NXT                                  | W   | 0.713      | 0.384        | 0.037 (0.010)    | 1.000 (0.274)    | -         |    15.63 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           23 |     3261 | 2026-01-23 | 33                                        | W   | 0.712      | 0.435        | 0.059 (0.018)    | 0.731 (0.226)    | -         |    18.93 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           22 |     3288 | 2026-01-22 | TNC Esports                               | L   | 0.706      | -            | -                | -                | -         |   -13.99 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           21 |     3326 | 2026-01-21 | AM Gaming                                 | W   | 0.700      | 0.435        | -                | 0.767 (0.234)    | -         |    19.34 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           20 |     3343 | 2026-01-21 | ALLINNERS                                 | W   | 0.699      | -            | -                | -                | -         |     5.30 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           19 |     3359 | 2026-01-20 | Team Pigeons                              | W   | 0.693      | 0.384        | 0.037 (0.010)    | -                | -         |     4.25 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           18 |     3407 | 2026-01-18 | Sangal Esports                            | W   | 0.679      | -            | -                | -                | -         |     6.74 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           17 |     3459 | 2026-01-17 | Ursa                                      | W   | 0.672      | -            | -                | -                | -         |     7.66 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           16 |     3485 | 2026-01-16 | Petardka                                  | W   | 0.667      | -            | -                | -                | -         |     0.73 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           15 |     3545 | 2026-01-15 | UNiTY esports                             | L   | 0.660      | -            | -                | -                | -         |   -14.53 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           14 |     3571 | 2026-01-14 | BASEMENT BOYS                             | W   | 0.654      | -            | -                | -                | -         |     4.83 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           13 |     3598 | 2026-01-13 | MASONIC                                   | W   | 0.645      | -            | -                | -                | -         |    10.49 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           12 |     3610 | 2026-01-12 | Universe                                  | W   | 0.638      | -            | -                | -                | -         |     1.88 | 7kick, adamS, fostar, hAdji, nEMANHA       |
|           11 |     3778 | 2025-12-20 | Fnatic                                    | L   | 0.486      | -            | -                | -                | -         |    -3.32 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|           10 |     3790 | 2025-12-19 | BESTIA                                    | L   | 0.481      | -            | -                | -                | -         |    -1.79 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|            9 |     3805 | 2025-12-19 | KOLESIE                                   | W   | 0.478      | -            | -                | -                | 1 (0.478) |    11.43 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|            8 |     3817 | 2025-12-18 | Inner Circle Esports                      | W   | 0.473      | 0.339        | 0.060 (0.010)    | -                | 1 (0.473) |    11.19 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|            7 |     3829 | 2025-12-17 | Fingers Crossed                           | W   | 0.467      | -            | -                | -                | 1 (0.467) |     0.71 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|            6 |     3838 | 2025-12-17 | MOUZ NXT                                  | L   | 0.466      | -            | -                | -                | -         |    -3.37 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|            5 |     3844 | 2025-12-17 | Infinite Gaming                           | W   | 0.465      | -            | -                | -                | 1 (0.465) |     0.96 | 7kick, fostar, hAdji, Jorko, nEMANHA       |
|            4 |     5067 | 2025-10-29 | Copenhagen Wolves (American organization) | L   | 0.140      | -            | -                | -                | -         |    -4.06 | 7kick, fakerealityy, fostar, hAdji, Woro2k |
|            3 |     5105 | 2025-10-28 | Hashiras                                  | L   | 0.133      | -            | -                | -                | -         |    -3.10 | 7kick, fakerealityy, fostar, hAdji, Woro2k |
|            2 |     5200 | 2025-10-26 | Copenhagen Wolves (American organization) | W   | 0.120      | -            | -                | -                | -         |     0.31 | 7kick, fakerealityy, fostar, hAdji, Woro2k |
|            1 |     5415 | 2025-10-21 | AaB esport                                | L   | 0.085      | -            | -                | -                | -         |    -2.52 | 7kick, fakerealityy, fostar, hAdji, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,111.18)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-05 |      0.800 | $22,000.00     | $17,590.09      |
| 2026-01-30 |      0.761 | $2,000.00      | $1,521.09       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
