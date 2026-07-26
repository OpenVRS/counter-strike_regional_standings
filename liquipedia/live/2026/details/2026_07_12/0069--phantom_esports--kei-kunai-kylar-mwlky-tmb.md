### Roster Details<br />
Team Name: Phantom Esports<br />
Roster: KEi, Kunai, Kylar, mwlky, TMB<br />
Global Rank: [69](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [49]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1083.6<br />
<br />
Final Rank Value (1083.6) = Starting Rank Value (1017.9) + Head To Head Adjustments (65.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.414[<sup>2</sup>](#table1)

The average of these factors is 0.326<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1017.9
- 400 + ( ( 0.326 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1017.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.744
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      331 | 2026-06-21 | FOKUS                    | W   | 1.000      | 0.143        | 0.084 (0.012)    | -                | 0 (0.000) |    23.98 | Altekz, Kunai, Kylar, mwlky, TMB  |
|           52 |      340 | 2026-06-20 | Walczaki                 | W   | 1.000      | 0.143        | 0.106 (0.015)    | -                | 0 (0.000) |    24.36 | Altekz, Kunai, Kylar, mwlky, TMB  |
|           51 |      380 | 2026-06-18 | JiJieHao                 | W   | 1.000      | 0.143        | 0.054 (0.008)    | -                | -         |    23.97 | KEi, Kunai, Kylar, mwlky, TMB     |
|           50 |      620 | 2026-06-07 | Acend                    | W   | 0.964      | 0.143        | 0.072 (0.010)    | -                | -         |    24.06 | KEi, Kunai, Kylar, mwlky, TMB     |
|           49 |      677 | 2026-06-05 | 100 Thieves              | L   | 0.951      | -            | -                | -                | -         |    -5.83 | KEi, Kunai, Kylar, mwlky, TMB     |
|           48 |      720 | 2026-06-03 | Echo                     | W   | 0.938      | 0.384        | 0.057 (0.020)    | 0.651 (0.235)    | -         |    23.15 | KEi, Kunai, Kylar, mwlky, TMB     |
|           47 |      769 | 2026-06-01 | DragonClaw               | W   | 0.923      | 0.384        | 0.026 (0.009)    | 0.526 (0.187)    | -         |    17.23 | KEi, Kunai, Kylar, mwlky, TMB     |
|           46 |      841 | 2026-05-30 | Bushido Wildcats         | W   | 0.910      | -            | -                | -                | -         |     8.07 | KEi, Kunai, Kylar, mwlky, TMB     |
|           45 |      858 | 2026-05-29 | Young Ninjas             | L   | 0.905      | -            | -                | -                | -         |   -17.88 | KEi, Kunai, Kylar, mwlky, TMB     |
|           44 |      907 | 2026-05-28 | Atreides                 | L   | 0.898      | -            | -                | -                | -         |   -19.78 | KEi, Kunai, Kylar, mwlky, TMB     |
|           43 |      939 | 2026-05-28 | Los kogutos              | L   | 0.896      | -            | -                | -                | -         |   -16.79 | KEi, Kunai, Kylar, mwlky, TMB     |
|           42 |      977 | 2026-05-27 | Johnny Speeds            | L   | 0.889      | -            | -                | -                | -         |   -10.64 | KEi, Kunai, Kylar, mwlky, TMB     |
|           41 |     1032 | 2026-05-25 | BRUTE                    | W   | 0.877      | -            | -                | -                | -         |     8.95 | KEi, Kunai, Kylar, mwlky, TMB     |
|           40 |     1044 | 2026-05-25 | Lavked                   | W   | 0.876      | 0.384        | 0.016 (0.005)    | 0.941 (0.317)    | -         |    15.67 | KEi, Kunai, Kylar, mwlky, TMB     |
|           39 |     1121 | 2026-05-23 | Ex-RUBY                  | L   | 0.864      | -            | -                | -                | -         |   -11.44 | KEi, Kunai, Kylar, mwlky, TMB     |
|           38 |     1245 | 2026-05-21 | Leo Team                 | W   | 0.849      | 0.384        | -                | 0.452 (0.148)    | -         |    12.98 | KEi, Kunai, Kylar, mwlky, TMB     |
|           37 |     1291 | 2026-05-19 | Los kogutos              | W   | 0.837      | 0.384        | 0.019 (0.006)    | 0.940 (0.303)    | -         |     9.77 | KEi, Kunai, Kylar, mwlky, TMB     |
|           36 |     1646 | 2026-05-06 | Los kogutos              | L   | 0.752      | -            | -                | -                | -         |   -15.47 | Ayteel, KEi, Kunai, Kylar, mwlky  |
|           35 |     1676 | 2026-05-05 | GenOne                   | W   | 0.742      | 0.384        | 0.010 (0.003)    | 1.000 (0.285)    | -         |     7.48 | aimy, KEi, Kunai, Kylar, mwlky    |
|           34 |     1685 | 2026-05-04 | Lavked                   | L   | 0.737      | -            | -                | -                | -         |   -11.42 | aimy, KEi, Kunai, Kylar, mwlky    |
|           33 |     1713 | 2026-05-03 | Ex-against All authority | W   | 0.731      | -            | -                | -                | -         |     7.21 | aimy, KEi, Kunai, Kylar, mwlky    |
|           32 |     1847 | 2026-04-30 | Fnatic                   | L   | 0.711      | -            | -                | -                | -         |    -8.17 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           31 |     1898 | 2026-04-29 | GenOne                   | W   | 0.705      | 0.384        | -                | 1.000 (0.271)    | -         |     7.07 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           30 |     1938 | 2026-04-28 | Ex-against All authority | W   | 0.698      | -            | -                | -                | -         |     7.06 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           29 |     1982 | 2026-04-27 | The Last Resort          | W   | 0.691      | -            | -                | -                | -         |     7.70 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           28 |     2036 | 2026-04-26 | RUSTEC                   | W   | 0.685      | 0.384        | -                | 0.546 (0.144)    | -         |     8.33 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           27 |     2115 | 2026-04-25 | Hashiras                 | L   | 0.678      | -            | -                | -                | -         |   -15.65 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           26 |     2219 | 2026-04-23 | Atreides                 | W   | 0.664      | 0.384        | -                | 0.766 (0.195)    | -         |     5.17 | KEi, Kunai, Kylar, lunAtic, mwlky |
|           25 |     2316 | 2026-04-18 | FAVBET Team              | L   | 0.631      | -            | -                | -                | -         |   -13.18 | KEi, Kunai, Kylar, mwlky, mynio   |
|           24 |     2345 | 2026-04-16 | GenOne                   | L   | 0.618      | -            | -                | -                | -         |   -14.47 | KEi, Kunai, Kylar, mwlky, mynio   |
|           23 |     2367 | 2026-04-15 | Lavked                   | L   | 0.609      | -            | -                | -                | -         |   -11.66 | KEi, Kunai, Kylar, mwlky, mynio   |
|           22 |     2381 | 2026-04-14 | Ex-RUBY                  | L   | 0.604      | -            | -                | -                | -         |   -10.59 | KEi, Kunai, Kylar, mwlky, mynio   |
|           21 |     2385 | 2026-04-14 | Metizport                | L   | 0.603      | -            | -                | -                | -         |    -8.15 | KEi, Kunai, Kylar, mwlky, mynio   |
|           20 |     2404 | 2026-04-13 | HEROIC Academy           | W   | 0.596      | -            | -                | -                | -         |     4.56 | KEi, Kunai, Kylar, mwlky, mynio   |
|           19 |     2481 | 2026-04-10 | Ursa                     | W   | 0.576      | 0.371        | -                | 0.890 (0.190)    | -         |     6.99 | KEi, Kunai, Kylar, mwlky, mynio   |
|           18 |     2953 | 2026-04-01 | B8                       | L   | 0.518      | -            | -                | -                | -         |    -0.46 | KEi, Kunai, Kylar, mwlky, mynio   |
|           17 |     2998 | 2026-04-01 | AM Gaming                | W   | 0.517      | -            | -                | -                | 1 (0.517) |    10.99 | KEi, Kunai, Kylar, mwlky, mynio   |
|           16 |     3008 | 2026-04-01 | BESTIA                   | L   | 0.516      | -            | -                | -                | -         |    -4.71 | KEi, Kunai, Kylar, mwlky, mynio   |
|           15 |     3041 | 2026-03-31 | B8                       | L   | 0.512      | -            | -                | -                | -         |    -0.41 | KEi, Kunai, Kylar, mwlky, mynio   |
|           14 |     3048 | 2026-03-31 | Z7 Esports               | W   | 0.512      | -            | -                | -                | 1 (0.512) |     0.59 | KEi, Kunai, Kylar, mwlky, mynio   |
|           13 |     3065 | 2026-03-31 | Máquinas                 | W   | 0.511      | -            | -                | -                | 1 (0.511) |     0.48 | KEi, Kunai, Kylar, mwlky, mynio   |
|           12 |     3083 | 2026-03-31 | AM Gaming                | L   | 0.510      | -            | -                | -                | -         |    -5.23 | KEi, Kunai, Kylar, mwlky, mynio   |
|           11 |     3111 | 2026-03-31 | WAZABI                   | W   | 0.509      | -            | -                | -                | 1 (0.509) |     4.89 | KEi, Kunai, Kylar, mwlky, mynio   |
|           10 |     3493 | 2026-03-24 | FOKUS                    | L   | 0.466      | -            | -                | -                | -         |    -2.67 | KEi, Kunai, Kylar, mwlky, mynio   |
|            9 |     3503 | 2026-03-24 | 3DMAX                    | W   | 0.465      | 0.333        | 0.232 (0.036)    | -                | 1 (0.465) |    12.79 | KEi, Kunai, Kylar, mwlky, mynio   |
|            8 |     3540 | 2026-03-24 | ASTRAL Esports           | W   | 0.463      | -            | -                | -                | 1 (0.463) |     8.61 | KEi, Kunai, Kylar, mwlky, mynio   |
|            7 |     3593 | 2026-03-23 | EC BANGA                 | W   | 0.458      | -            | -                | -                | 1 (0.458) |     0.48 | KEi, Kunai, Kylar, mwlky, mynio   |
|            6 |     3601 | 2026-03-23 | KUUSAMO.gg               | W   | 0.457      | -            | -                | -                | 1 (0.457) |     1.69 | KEi, Kunai, Kylar, mwlky, mynio   |
|            5 |     3604 | 2026-03-23 | Wampirki                 | L   | 0.457      | -            | -                | -                | -         |   -13.04 | KEi, Kunai, Kylar, mwlky, mynio   |
|            4 |     4181 | 2026-03-11 | CYBERSHOKE Esports       | L   | 0.376      | -            | -                | -                | -         |    -4.73 | KEi, Kunai, Kylar, mwlky, mynio   |
|            3 |     4280 | 2026-03-09 | OMEGA                    | W   | 0.363      | -            | -                | -                | -         |     6.53 | KEi, Kunai, Kylar, mwlky, mynio   |
|            2 |     4365 | 2026-03-08 | Leo Team                 | L   | 0.357      | -            | -                | -                | -         |    -9.04 | KEi, Kunai, Kylar, mwlky, mynio   |
|            1 |     4440 | 2026-03-06 | Oxuji Esports            | L   | 0.344      | -            | -                | -                | -         |    -3.71 | KEi, Kunai, Kylar, mwlky, mynio   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,891.71)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      0.958 | $1,250.00      | $1,197.22       |
| 2026-05-03 |      0.731 | $1,250.00      | $914.24         |
| 2026-04-16 |      0.616 | $1,000.00      | $615.56         |
| 2026-03-24 |      0.466 | $2,500.00      | $1,164.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
