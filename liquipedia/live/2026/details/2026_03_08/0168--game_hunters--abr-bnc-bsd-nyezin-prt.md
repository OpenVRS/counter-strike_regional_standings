### Roster Details<br />
Team Name: Game Hunters<br />
Roster: abr, bnc, bsd, nyezin, prt<br />
Global Rank: [168](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [36]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  777.5<br />
<br />
Final Rank Value (777.5) = Starting Rank Value (781.3) + Head To Head Adjustments (-3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.3
- 400 + ( ( 0.199 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 781.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.435
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       47 | 2026-03-05 | Galorys                  | L   | 1.000      | -            | -                | -                | -         |    -7.91 | abr, bnc, bsd, nyezin, prt     |
|           29 |       53 | 2026-03-05 | RED Canids               | L   | 1.000      | -            | -                | -                | -         |    -2.30 | abr, bnc, bsd, nyezin, prt     |
|           28 |      125 | 2026-03-03 | Ex-KRÜ Esports           | L   | 1.000      | -            | -                | -                | -         |   -19.93 | abr, bnc, bsd, nyezin, prt     |
|           27 |      280 | 2026-02-26 | R2 Esports Club          | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.195 (0.072)    | 0 (0.000) |    11.63 | abr, bnc, bsd, nyezin, prt     |
|           26 |      402 | 2026-02-24 | Vasco eSports            | W   | 1.000      | 0.371        | 0.004 (0.002)    | 0.424 (0.157)    | 0 (0.000) |    16.64 | abr, bnc, nyezin, prt, rkt     |
|           25 |      484 | 2026-02-22 | PaiN Gaming Academy      | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.191 (0.071)    | 0 (0.000) |     5.33 | abr, bnc, bsd, nyezin, prt     |
|           24 |      870 | 2026-02-14 | LargadosyPelados         | L   | 1.000      | -            | -                | -                | -         |   -12.58 | abr, bnc, bsd, nyezin, prt     |
|           23 |     1017 | 2026-02-11 | Bad Luck                 | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.208 (0.077)    | 0 (0.000) |     7.75 | abr, bnc, bsd, nyezin, prt     |
|           22 |     1086 | 2026-02-09 | Players (Brazilian team) | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.208 (0.077)    | 0 (0.000) |     7.17 | abr, bnc, bsd, nyezin, prt     |
|           21 |     1131 | 2026-02-07 | ShindeN                  | L   | 1.000      | -            | -                | -                | -         |    -2.77 | abr, bnc, bsd, nyezin, prt     |
|           20 |     1195 | 2026-02-05 | CPC Curralzinho Esports  | W   | 0.994      | 0.371        | 0.001 (0.000)    | -                | 0 (0.000) |     8.56 | abr, bnc, bsd, nyezin, prt     |
|           19 |     1217 | 2026-02-04 | FOLHA AMARELA            | L   | 0.986      | -            | -                | -                | -         |   -15.26 | abr, bnc, bsd, nyezin, prt     |
|           18 |     1520 | 2026-01-24 | RED Canids               | L   | 0.912      | -            | -                | -                | -         |    -1.39 | abr, bnc, nyezin, prt, RCF     |
|           17 |     1580 | 2026-01-23 | ODDIK                    | L   | 0.904      | -            | -                | -                | -         |    -3.80 | abr, bnc, nyezin, prt, RCF     |
|           16 |     1638 | 2026-01-21 | Metanoia                 | W   | 0.894      | -            | -                | -                | 1 (0.894) |     8.53 | abr, bnc, nyezin, prt, RCF     |
|           15 |     1646 | 2026-01-21 | Galorys                  | W   | 0.893      | 0.384        | 0.009 (0.003)    | 0.337 (0.116)    | 1 (0.893) |    19.58 | abr, bnc, nyezin, prt, RCF     |
|           14 |     1663 | 2026-01-21 | HereWeGoAgain            | W   | 0.892      | 0.371        | -                | 0.065 (0.022)    | 0 (0.000) |     3.42 | abr, bnc, nyezin, prt, RCF     |
|           13 |     1681 | 2026-01-20 | Vasco eSports            | L   | 0.886      | -            | -                | -                | -         |   -15.50 | abr, bnc, nyezin, prt, RCF     |
|           12 |     1725 | 2026-01-18 | Satriales                | W   | 0.871      | -            | -                | -                | 0 (0.000) |     3.14 | abr, bnc, nyezin, prt, RCF     |
|           11 |     1741 | 2026-01-17 | ODDIK                    | L   | 0.867      | -            | -                | -                | -         |    -3.48 | abr, bnc, nyezin, prt, RCF     |
|           10 |     1748 | 2026-01-17 | Keyd Stars               | W   | 0.867      | 0.143        | 0.042 (0.005)    | 0.282 (0.035)    | -         |    18.23 | abr, bnc, nyezin, prt, RCF     |
|            9 |     1860 | 2026-01-15 | Gaimin Gladiators        | L   | 0.853      | -            | -                | -                | -         |    -3.63 | abr, bnc, nyezin, prt, RCF     |
|            8 |     1872 | 2026-01-15 | Lospegadinhas            | W   | 0.851      | -            | -                | -                | -         |     3.09 | abr, bnc, nyezin, prt, RCF     |
|            7 |     1885 | 2026-01-14 | Legacy                   | L   | 0.848      | -            | -                | -                | -         |    -0.89 | abr, bnc, nyezin, prt, RCF     |
|            6 |     1898 | 2026-01-14 | Isurus                   | L   | 0.844      | -            | -                | -                | -         |   -10.41 | abr, bnc, nyezin, prt, RCF     |
|            5 |     2923 | 2025-11-11 | Bad Luck                 | L   | 0.420      | -            | -                | -                | -         |   -10.19 | abr, nyezin, prt, RCF, RICIOLI |
|            4 |     2950 | 2025-11-10 | Prison Breakers          | L   | 0.413      | -            | -                | -                | -         |   -10.43 | abr, nyezin, prt, RCF, RICIOLI |
|            3 |     3017 | 2025-11-08 | Dusty Roots              | L   | 0.399      | -            | -                | -                | -         |    -7.31 | abr, nyezin, prt, RCF, RICIOLI |
|            2 |     3171 | 2025-11-06 | LargadosyPelados         | W   | 0.385      | 0.371        | 0.014 (0.002)    | 0.635 (0.091)    | -         |     6.22 | abr, nyezin, prt, RCF, RICIOLI |
|            1 |     3250 | 2025-11-03 | Vasco eSports            | W   | 0.365      | 0.371        | 0.004 (0.001)    | 0.424 (0.057)    | -         |     4.71 | abr, nyezin, prt, RCF, RICIOLI |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($750.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      1.000 | $750.00        | $750.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
