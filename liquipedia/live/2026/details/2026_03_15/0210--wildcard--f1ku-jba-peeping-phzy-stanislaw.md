### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [210](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [46]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  687.0<br />
<br />
Final Rank Value (687.0) = Starting Rank Value (670.8) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.018[<sup>2</sup>](#table1)

The average of these factors is 0.138<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.8
- 400 + ( ( 0.138 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 670.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.037
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     4303 | 2025-10-19 | SkinRave Esports                          | L   | 0.221      | -            | -                | -                | -         |    -2.14 | F1KU, JBa, Peeping, phzy, stanislaw |
|           17 |     4319 | 2025-10-18 | Marsborne                                 | W   | 0.215      | 0.363        | 0.048 (0.004)    | 0.561 (0.044)    | 0 (0.000) |     6.53 | F1KU, JBa, Peeping, phzy, stanislaw |
|           16 |     4370 | 2025-10-16 | Team Voca                                 | W   | 0.201      | 0.363        | 0.009 (0.001)    | 0.100 (0.007)    | 0 (0.000) |     3.47 | F1KU, JBa, Peeping, phzy, stanislaw |
|           15 |     4408 | 2025-10-15 | Regain                                    | W   | 0.195      | 0.363        | 0.005 (0.000)    | 0.235 (0.017)    | 0 (0.000) |     3.20 | F1KU, JBa, Peeping, phzy, stanislaw |
|           14 |     4444 | 2025-10-14 | Marsborne                                 | L   | 0.188      | -            | -                | -                | -         |    -0.19 | F1KU, JBa, Peeping, phzy, stanislaw |
|           13 |     4615 | 2025-10-08 | Phoenix (American team)                   | W   | 0.148      | 0.363        | -                | 0.010 (0.001)    | 0 (0.000) |     1.30 | F1KU, JBa, Peeping, phzy, stanislaw |
|           12 |     4728 | 2025-10-06 | Mythic                                    | W   | 0.135      | 0.363        | 0.001 (0.000)    | 0.080 (0.004)    | 0 (0.000) |     2.02 | F1KU, JBa, Peeping, phzy, stanislaw |
|           11 |     4738 | 2025-10-06 | Zomblers                                  | L   | 0.134      | -            | -                | -                | -         |    -1.94 | F1KU, JBa, Peeping, phzy, stanislaw |
|           10 |     4859 | 2025-10-04 | OG                                        | L   | 0.120      | -            | -                | -                | -         |    -0.24 | F1KU, JBa, Peeping, phzy, stanislaw |
|            9 |     4875 | 2025-10-04 | Copenhagen Wolves (American organization) | W   | 0.118      | 0.333        | 0.000 (0.000)    | 0.218 (0.009)    | 1 (0.118) |     2.10 | F1KU, JBa, Peeping, phzy, stanislaw |
|            8 |     5188 | 2025-09-26 | Betclic Apogee Esports                    | L   | 0.066      | -            | -                | -                | -         |    -1.16 | F1KU, JBa, Peeping, phzy, stanislaw |
|            7 |     5208 | 2025-09-26 | Phantom Esports                           | L   | 0.065      | -            | -                | -                | -         |    -1.08 | F1KU, JBa, Peeping, phzy, stanislaw |
|            6 |     5230 | 2025-09-26 | MOUZ NXT                                  | W   | 0.063      | 0.378        | 0.043 (0.001)    | 1.000 (0.024)    | 1 (0.063) |     1.95 | F1KU, JBa, Peeping, phzy, stanislaw |
|            5 |     5315 | 2025-09-22 | Marsborne                                 | W   | 0.041      | 0.363        | 0.048 (0.001)    | 0.561 (0.008)    | 0 (0.000) |     1.26 | F1KU, JBa, Peeping, phzy, stanislaw |
|            4 |     5334 | 2025-09-21 | Team Voca                                 | W   | 0.035      | 0.363        | 0.009 (0.000)    | 0.100 (0.001)    | 0 (0.000) |     0.59 | F1KU, JBa, Peeping, phzy, stanislaw |
|            3 |     5392 | 2025-09-19 | SkinRave Esports                          | W   | 0.021      | 0.363        | 0.028 (0.000)    | 0.287 (0.002)    | 0 (0.000) |     0.47 | F1KU, JBa, Peeping, phzy, stanislaw |
|            2 |     5423 | 2025-09-18 | Team Aether                               | W   | 0.015      | 0.363        | 0.000 (0.000)    | -                | -         |     0.18 | F1KU, JBa, Peeping, phzy, stanislaw |
|            1 |     5458 | 2025-09-17 | Team Voca                                 | L   | 0.008      | -            | -                | -                | -         |    -0.12 | F1KU, JBa, Peeping, phzy, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,253.79)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.221 | $4,000.00      | $885.65         |
| 2025-10-08 |      0.147 | $250.00        | $36.85          |
| 2025-09-22 |      0.041 | $8,000.00      | $331.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
