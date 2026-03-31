### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, bnc, bsd, nyezin, prt<br />
Global Rank: [153](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [29]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  834.1<br />
<br />
Final Rank Value (834.1) = Starting Rank Value (793.3) + Head To Head Adjustments (40.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.151[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 793.3
- 400 + ( ( 0.203 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 793.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.480
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      112 | 2026-03-25 | Back to Back             | W   | 1.000      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |    13.06 | abr, bnc, bsd, nyezin, prt     |
|           41 |      164 | 2026-03-24 | Fake do Biru             | L   | 1.000      | -            | -                | -                | -         |   -11.83 | abr, bnc, bsd, nyezin, prt     |
|           40 |      215 | 2026-03-23 | Keyd Stars               | L   | 1.000      | -            | -                | -                | -         |   -14.32 | abr, bnc, bsd, nyezin, prt     |
|           39 |      218 | 2026-03-23 | Bounty Hunters Esports   | L   | 1.000      | -            | -                | -                | -         |    -9.08 | abr, bnc, bsd, nyezin, prt     |
|           38 |      280 | 2026-03-22 | Vexa E-Sports            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.91 | abr, bnc, bsd, nyezin, prt     |
|           37 |      286 | 2026-03-22 | Procyon Team             | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.301 (0.112)    | 0 (0.000) |    13.11 | abr, bnc, bsd, nyezin, prt     |
|           36 |      318 | 2026-03-21 | ShindeN                  | L   | 1.000      | -            | -                | -                | -         |    -4.87 | abr, bnc, bsd, nyezin, prt     |
|           35 |      376 | 2026-03-20 | Vasco eSports            | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.301 (0.109)    | 0 (0.000) |    11.03 | abr, bnc, bsd, nyezin, prt     |
|           34 |      458 | 2026-03-18 | Players (Brazilian team) | W   | 1.000      | 0.371        | -                | 0.320 (0.119)    | 0 (0.000) |     7.86 | abr, bnc, bsd, nyezin, prt     |
|           33 |      542 | 2026-03-16 | PaiN Gaming Academy      | W   | 1.000      | 0.371        | 0.001 (0.000)    | 0.264 (0.098)    | 0 (0.000) |    10.92 | abr, bnc, bsd, nyezin, prt     |
|           32 |      636 | 2026-03-14 | MAGICOS                  | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.87 | abr, bnc, bsd, nyezin, prt     |
|           31 |     1074 | 2026-03-05 | Galorys                  | L   | 1.000      | -            | -                | -                | -         |   -10.29 | abr, bnc, bsd, nyezin, prt     |
|           30 |     1081 | 2026-03-05 | RED Canids               | L   | 1.000      | -            | -                | -                | -         |    -3.35 | abr, bnc, bsd, nyezin, prt     |
|           29 |     1208 | 2026-03-03 | Despedidos               | L   | 1.000      | -            | -                | -                | -         |   -21.42 | abr, bnc, bsd, nyezin, prt     |
|           28 |     1415 | 2026-02-26 | R2 Esports Club          | W   | 0.993      | 0.371        | 0.004 (0.001)    | 0.377 (0.139)    | 0 (0.000) |    10.53 | abr, bnc, bsd, nyezin, prt     |
|           27 |     1544 | 2026-02-24 | Vasco eSports            | W   | 0.977      | 0.371        | 0.002 (0.001)    | 0.301 (0.109)    | -         |    14.44 | abr, bnc, nyezin, prt, rkt     |
|           26 |     1632 | 2026-02-22 | PaiN Gaming Academy      | W   | 0.964      | 0.371        | -                | 0.264 (0.094)    | -         |     8.20 | abr, bnc, bsd, nyezin, prt     |
|           25 |     2052 | 2026-02-14 | LargadosyPelados         | L   | 0.912      | -            | -                | -                | -         |   -12.03 | abr, bnc, bsd, nyezin, prt     |
|           24 |     2144 | 2026-02-13 | Fluxo W7M                | W   | 0.903      | 0.371        | 0.017 (0.006)    | 0.239 (0.080)    | -         |    23.08 | abr, bnc, bsd, nyezin, prt     |
|           23 |     2209 | 2026-02-11 | Bad Luck                 | W   | 0.892      | -            | -                | -                | -         |     5.29 | abr, bnc, bsd, nyezin, prt     |
|           22 |     2281 | 2026-02-09 | Players (Brazilian team) | W   | 0.877      | 0.371        | -                | 0.320 (0.104)    | -         |     9.35 | abr, bnc, bsd, nyezin, prt     |
|           21 |     2327 | 2026-02-07 | ShindeN                  | L   | 0.865      | -            | -                | -                | -         |    -2.05 | abr, bnc, bsd, nyezin, prt     |
|           20 |     2391 | 2026-02-05 | CPC Curralzinho Esports  | W   | 0.853      | -            | -                | -                | -         |     6.53 | abr, bnc, bsd, nyezin, prt     |
|           19 |     2415 | 2026-02-04 | FOLHA AMARELA            | L   | 0.845      | -            | -                | -                | -         |   -13.24 | abr, bnc, bsd, nyezin, prt     |
|           18 |     2725 | 2026-01-24 | RED Canids               | L   | 0.771      | -            | -                | -                | -         |    -1.74 | abr, bnc, nyezin, prt, RCF     |
|           17 |     2787 | 2026-01-23 | ODDIK                    | L   | 0.763      | -            | -                | -                | -         |    -2.98 | abr, bnc, nyezin, prt, RCF     |
|           16 |     2845 | 2026-01-21 | Metanoia                 | W   | 0.753      | -            | -                | -                | 1 (0.753) |     6.09 | abr, bnc, nyezin, prt, RCF     |
|           15 |     2853 | 2026-01-21 | Galorys                  | W   | 0.752      | 0.384        | 0.005 (0.001)    | 0.284 (0.082)    | 1 (0.752) |    14.66 | abr, bnc, nyezin, prt, RCF     |
|           14 |     2870 | 2026-01-21 | HereWeGoAgain            | W   | 0.751      | -            | -                | -                | -         |     4.42 | abr, bnc, nyezin, prt, RCF     |
|           13 |     2889 | 2026-01-20 | Vasco eSports            | L   | 0.745      | -            | -                | -                | -         |   -13.81 | abr, bnc, nyezin, prt, RCF     |
|           12 |     2935 | 2026-01-18 | Satriales                | W   | 0.730      | -            | -                | -                | -         |     2.43 | abr, bnc, nyezin, prt, RCF     |
|           11 |     2951 | 2026-01-17 | ODDIK                    | L   | 0.726      | -            | -                | -                | -         |    -2.64 | abr, bnc, nyezin, prt, RCF     |
|           10 |     2958 | 2026-01-17 | Keyd Stars               | W   | 0.726      | 0.143        | 0.028 (0.003)    | -                | -         |    12.73 | abr, bnc, nyezin, prt, RCF     |
|            9 |     3071 | 2026-01-15 | Gaimin Gladiators        | L   | 0.712      | -            | -                | -                | -         |    -2.01 | abr, bnc, nyezin, prt, RCF     |
|            8 |     3083 | 2026-01-15 | Lospegadinhas            | W   | 0.710      | -            | -                | -                | -         |     2.35 | abr, bnc, nyezin, prt, RCF     |
|            7 |     3096 | 2026-01-14 | Legacy                   | L   | 0.707      | -            | -                | -                | -         |    -1.18 | abr, bnc, nyezin, prt, RCF     |
|            6 |     3109 | 2026-01-14 | Isurus                   | L   | 0.703      | -            | -                | -                | -         |    -7.40 | abr, bnc, nyezin, prt, RCF     |
|            5 |     4144 | 2025-11-11 | Metanoia Wolves          | L   | 0.279      | -            | -                | -                | -         |    -5.09 | abr, nyezin, prt, RCF, RICIOLI |
|            4 |     4173 | 2025-11-10 | Prison Breakers          | L   | 0.272      | -            | -                | -                | -         |    -6.96 | abr, nyezin, prt, RCF, RICIOLI |
|            3 |     4240 | 2025-11-08 | Dusty Roots              | L   | 0.258      | -            | -                | -                | -         |    -5.68 | abr, nyezin, prt, RCF, RICIOLI |
|            2 |     4395 | 2025-11-06 | LargadosyPelados         | W   | 0.244      | 0.371        | 0.034 (0.003)    | -                | -         |     4.15 | abr, nyezin, prt, RCF, RICIOLI |
|            1 |     4479 | 2025-11-03 | Vasco eSports            | W   | 0.224      | -            | -                | -                | -         |     2.82 | abr, nyezin, prt, RCF, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,439.27)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-25 |      1.000 | $750.00        | $750.00         |
| 2026-02-15 |      0.919 | $750.00        | $689.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
