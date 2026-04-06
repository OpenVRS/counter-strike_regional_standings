### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, bnc, bsd, nyezin, prt<br />
Global Rank: [149](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [29]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  873.7<br />
<br />
Final Rank Value (873.7) = Starting Rank Value (841.0) + Head To Head Adjustments (32.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.240[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.0
- 400 + ( ( 0.225 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 841.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.512
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |       64 | 2026-04-03 | Gaimin Gladiators        | L   | 1.000      | -            | -                | -                | -         |    -1.88 | abr, bnc, bsd, nyezin, prt     |
|           49 |      112 | 2026-04-02 | Yawara E-Sports          | W   | 1.000      | 0.435        | 0.001 (0.001)    | 0.195 (0.085)    | 1 (1.000) |    15.68 | abr, bnc, bsd, nyezin, prt     |
|           48 |      115 | 2026-04-02 | ODDIK                    | L   | 1.000      | -            | -                | -                | -         |    -2.61 | abr, bnc, bsd, nyezin, prt     |
|           47 |      133 | 2026-04-02 | Keyd Stars               | L   | 1.000      | -            | -                | -                | -         |   -14.03 | abr, bnc, bsd, nyezin, prt     |
|           46 |      177 | 2026-04-01 | RED Canids Academy       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.40 | abr, bnc, bsd, nyezin, prt     |
|           45 |      219 | 2026-03-31 | Fake do Biru             | L   | 1.000      | -            | -                | -                | -         |   -11.41 | abr, bnc, bsd, nyezin, prt     |
|           44 |      401 | 2026-03-28 | ODDIK                    | L   | 1.000      | -            | -                | -                | -         |    -3.11 | abr, bnc, bsd, nyezin, prt     |
|           43 |      498 | 2026-03-26 | 9z Team                  | L   | 1.000      | -            | -                | -                | -         |    -0.74 | abr, bnc, bsd, nyezin, prt     |
|           42 |      531 | 2026-03-25 | Back to Back             | W   | 1.000      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |    11.79 | abr, bnc, bsd, nyezin, prt     |
|           41 |      590 | 2026-03-24 | Fake do Biru             | L   | 1.000      | -            | -                | -                | -         |   -12.53 | abr, bnc, bsd, nyezin, prt     |
|           40 |      648 | 2026-03-23 | Keyd Stars               | L   | 1.000      | -            | -                | -                | -         |   -15.19 | abr, bnc, bsd, nyezin, prt     |
|           39 |      651 | 2026-03-23 | Bounty Hunters Esports   | L   | 1.000      | -            | -                | -                | -         |    -7.43 | abr, bnc, bsd, nyezin, prt     |
|           38 |      720 | 2026-03-22 | Vexa E-Sports            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.06 | abr, bnc, bsd, nyezin, prt     |
|           37 |      726 | 2026-03-22 | Procyon Team             | W   | 1.000      | 0.371        | 0.014 (0.005)    | 0.341 (0.126)    | 0 (0.000) |    15.07 | abr, bnc, bsd, nyezin, prt     |
|           36 |      766 | 2026-03-21 | ShindeN                  | L   | 1.000      | -            | -                | -                | -         |    -3.40 | abr, bnc, bsd, nyezin, prt     |
|           35 |      829 | 2026-03-20 | Vasco eSports            | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.272 (0.099)    | 0 (0.000) |     9.90 | abr, bnc, bsd, nyezin, prt     |
|           34 |      919 | 2026-03-18 | Players (Brazilian team) | W   | 1.000      | 0.371        | -                | 0.297 (0.110)    | 0 (0.000) |     6.54 | abr, bnc, bsd, nyezin, prt     |
|           33 |     1011 | 2026-03-16 | PaiN Gaming Academy      | W   | 1.000      | 0.371        | -                | 0.249 (0.092)    | 0 (0.000) |     9.81 | abr, bnc, bsd, nyezin, prt     |
|           32 |     1105 | 2026-03-14 | MAGICOS                  | W   | 1.000      | -            | -                | -                | -         |     3.73 | abr, bnc, bsd, nyezin, prt     |
|           31 |     1543 | 2026-03-05 | Galorys                  | L   | 0.988      | -            | -                | -                | -         |    -7.46 | abr, bnc, bsd, nyezin, prt     |
|           30 |     1550 | 2026-03-05 | RED Canids               | L   | 0.988      | -            | -                | -                | -         |    -2.84 | abr, bnc, bsd, nyezin, prt     |
|           29 |     1677 | 2026-03-03 | Despedidos               | L   | 0.972      | -            | -                | -                | -         |   -14.43 | abr, bnc, bsd, nyezin, prt     |
|           28 |     1884 | 2026-02-26 | R2 Esports Club          | W   | 0.941      | 0.371        | 0.004 (0.001)    | 0.360 (0.126)    | -         |     8.55 | abr, bnc, bsd, nyezin, prt     |
|           27 |     2013 | 2026-02-24 | Vasco eSports            | W   | 0.926      | 0.371        | 0.002 (0.001)    | 0.272 (0.093)    | -         |    12.28 | abr, bnc, nyezin, prt, rkt     |
|           26 |     2101 | 2026-02-22 | PaiN Gaming Academy      | W   | 0.913      | 0.371        | -                | 0.249 (0.084)    | -         |     6.62 | abr, bnc, bsd, nyezin, prt     |
|           25 |     2521 | 2026-02-14 | DashSkins                | L   | 0.861      | -            | -                | -                | -         |    -8.02 | abr, bnc, bsd, nyezin, prt     |
|           24 |     2613 | 2026-02-13 | Fluxo W7M                | W   | 0.852      | 0.371        | 0.028 (0.009)    | 0.362 (0.114)    | -         |    24.54 | abr, bnc, bsd, nyezin, prt     |
|           23 |     2678 | 2026-02-11 | Bad Luck                 | W   | 0.840      | -            | -                | -                | -         |     4.05 | abr, bnc, bsd, nyezin, prt     |
|           22 |     2750 | 2026-02-09 | Players (Brazilian team) | W   | 0.826      | 0.371        | -                | 0.297 (0.091)    | -         |     7.37 | abr, bnc, bsd, nyezin, prt     |
|           21 |     2796 | 2026-02-07 | ShindeN                  | L   | 0.814      | -            | -                | -                | -         |    -1.26 | abr, bnc, bsd, nyezin, prt     |
|           20 |     2860 | 2026-02-05 | CPC Curralzinho Esports  | W   | 0.801      | -            | -                | -                | -         |     4.83 | abr, bnc, bsd, nyezin, prt     |
|           19 |     2884 | 2026-02-04 | FOLHA AMARELA            | L   | 0.794      | -            | -                | -                | -         |   -14.11 | abr, bnc, bsd, nyezin, prt     |
|           18 |     3194 | 2026-01-24 | RED Canids               | L   | 0.720      | -            | -                | -                | -         |    -1.49 | abr, bnc, nyezin, prt, RCF     |
|           17 |     3256 | 2026-01-23 | ODDIK                    | L   | 0.712      | -            | -                | -                | -         |    -1.53 | abr, bnc, nyezin, prt, RCF     |
|           16 |     3314 | 2026-01-21 | Metanoia                 | W   | 0.702      | -            | -                | -                | 1 (0.702) |     4.47 | abr, bnc, nyezin, prt, RCF     |
|           15 |     3322 | 2026-01-21 | Galorys                  | W   | 0.701      | 0.384        | 0.006 (0.002)    | -                | 1 (0.701) |    16.74 | abr, bnc, nyezin, prt, RCF     |
|           14 |     3339 | 2026-01-21 | HereWeGoAgain            | W   | 0.700      | -            | -                | -                | -         |     3.29 | abr, bnc, nyezin, prt, RCF     |
|           13 |     3358 | 2026-01-20 | Vasco eSports            | L   | 0.694      | -            | -                | -                | -         |   -14.17 | abr, bnc, nyezin, prt, RCF     |
|           12 |     3404 | 2026-01-18 | Satriales                | W   | 0.679      | -            | -                | -                | -         |     1.75 | abr, bnc, nyezin, prt, RCF     |
|           11 |     3420 | 2026-01-17 | ODDIK                    | L   | 0.675      | -            | -                | -                | -         |    -1.32 | abr, bnc, nyezin, prt, RCF     |
|           10 |     3427 | 2026-01-17 | Keyd Stars               | W   | 0.675      | 0.143        | 0.004 (0.000)    | -                | -         |     8.05 | abr, bnc, nyezin, prt, RCF     |
|            9 |     3540 | 2026-01-15 | Gaimin Gladiators        | L   | 0.661      | -            | -                | -                | -         |    -0.82 | abr, bnc, nyezin, prt, RCF     |
|            8 |     3552 | 2026-01-15 | Lospegadinhas            | W   | 0.659      | -            | -                | -                | -         |     1.66 | abr, bnc, nyezin, prt, RCF     |
|            7 |     3565 | 2026-01-14 | Legacy                   | L   | 0.656      | -            | -                | -                | -         |    -0.66 | abr, bnc, nyezin, prt, RCF     |
|            6 |     3578 | 2026-01-14 | Isurus                   | L   | 0.652      | -            | -                | -                | -         |    -2.59 | abr, bnc, nyezin, prt, RCF     |
|            5 |     4613 | 2025-11-11 | Metanoia Wolves          | L   | 0.228      | -            | -                | -                | -         |    -4.61 | abr, nyezin, prt, RCF, RICIOLI |
|            4 |     4642 | 2025-11-10 | Prison Breakers          | L   | 0.221      | -            | -                | -                | -         |    -5.93 | abr, nyezin, prt, RCF, RICIOLI |
|            3 |     4709 | 2025-11-08 | Dusty Roots              | L   | 0.207      | -            | -                | -                | -         |    -5.05 | abr, nyezin, prt, RCF, RICIOLI |
|            2 |     4864 | 2025-11-06 | DashSkins                | W   | 0.193      | 0.371        | 0.041 (0.003)    | -                | -         |     4.24 | abr, nyezin, prt, RCF, RICIOLI |
|            1 |     4948 | 2025-11-03 | Vasco eSports            | W   | 0.173      | -            | -                | -                | -         |     1.87 | abr, nyezin, prt, RCF, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,400.91)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-25 |      1.000 | $750.00        | $750.00         |
| 2026-02-15 |      0.868 | $750.00        | $650.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
