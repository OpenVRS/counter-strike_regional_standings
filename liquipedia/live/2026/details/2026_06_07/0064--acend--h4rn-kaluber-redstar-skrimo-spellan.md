### Roster Details<br />
Team Name: Acend<br />
Roster: h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN<br />
Global Rank: [64](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [45]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1179.2<br />
<br />
Final Rank Value (1179.2) = Starting Rank Value (1327.4) + Head To Head Adjustments (-148.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.353[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.973[<sup>2</sup>](#table1)

The average of these factors is 0.482<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1327.4
- 400 + ( ( 0.482 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1327.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.780
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           75 |        3 | 2026-06-07 | Phantom Esports        | L   | 1.000      | -            | -                | -                | -         |   -21.43 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           74 |      232 | 2026-05-28 | 2007                   | L   | 1.000      | -            | -                | -                | -         |   -25.50 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           73 |      389 | 2026-05-23 | IC Esports             | L   | 1.000      | -            | -                | -                | -         |   -11.97 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           72 |      412 | 2026-05-23 | Betclic Apogee Esports | W   | 1.000      | 0.435        | 0.018 (0.008)    | 0.500 (0.217)    | 1 (1.000) |    11.40 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           71 |      429 | 2026-05-23 | Wildcard               | L   | 1.000      | -            | -                | -                | -         |    -9.23 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           70 |      466 | 2026-05-22 | Gaimin Gladiators      | W   | 1.000      | 0.435        | 0.024 (0.010)    | -                | 1 (1.000) |    16.03 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           69 |      510 | 2026-05-21 | CHAOS (Norwegian team) | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.31 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           68 |      514 | 2026-05-21 | INFINITE               | W   | 1.000      | 0.435        | 0.014 (0.006)    | 0.400 (0.174)    | 1 (1.000) |    18.98 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           67 |      518 | 2026-05-21 | HAVU                   | W   | 1.000      | 0.435        | -                | 0.495 (0.215)    | 1 (1.000) |     5.35 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           66 |      525 | 2026-05-21 | IC Esports             | W   | 1.000      | 0.435        | 0.050 (0.022)    | 0.511 (0.222)    | 1 (1.000) |    20.68 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           65 |      529 | 2026-05-21 | KOLESIE                | L   | 1.000      | -            | -                | -                | -         |   -17.66 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           64 |      810 | 2026-05-11 | BASEMENT BOYS          | L   | 1.000      | -            | -                | -                | -         |   -21.80 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           63 |      819 | 2026-05-11 | 100 Thieves            | L   | 1.000      | -            | -                | -                | -         |   -10.19 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           62 |      848 | 2026-05-10 | Gatorian               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.46 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           61 |      864 | 2026-05-10 | HAFO                   | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.31 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN  |
|           60 |     1481 | 2026-04-24 | BIG                    | L   | 0.898      | -            | -                | -                | -         |    -6.42 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           59 |     1543 | 2026-04-22 | MOUZ NXT               | W   | 0.885      | 0.435        | -                | 0.743 (0.286)    | -         |     7.46 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           58 |     1563 | 2026-04-20 | Nuclear TigeRES        | L   | 0.872      | -            | -                | -                | -         |   -12.94 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           57 |     1614 | 2026-04-18 | GenOne                 | W   | 0.859      | 0.435        | -                | 1.000 (0.373)    | -         |     3.16 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           56 |     1629 | 2026-04-17 | FAVBET Team            | W   | 0.852      | 0.435        | -                | 0.464 (0.172)    | -         |     5.21 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           55 |     1656 | 2026-04-15 | Ursa                   | L   | 0.838      | -            | -                | -                | -         |   -19.40 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           54 |     2418 | 2026-03-30 | G2 Esports             | L   | 0.735      | -            | -                | -                | -         |    -2.40 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           53 |     2425 | 2026-03-30 | BESTIA                 | L   | 0.734      | -            | -                | -                | -         |   -11.48 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           52 |     2457 | 2026-03-30 | HEROIC                 | W   | 0.732      | 0.340        | 0.148 (0.037)    | -                | 1 (0.732) |    17.07 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           51 |     2483 | 2026-03-29 | G2 Esports             | L   | 0.728      | -            | -                | -                | -         |    -2.21 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           50 |     2487 | 2026-03-29 | Walczaki               | W   | 0.727      | 0.340        | 0.087 (0.021)    | 1.000 (0.247)    | 1 (0.727) |     7.23 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           49 |     2494 | 2026-03-29 | Cswalkers              | W   | 0.727      | -            | -                | -                | -         |     0.25 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           48 |     2507 | 2026-03-29 | CarritoSpain           | W   | 0.727      | -            | -                | -                | -         |     0.21 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN    |
|           47 |     3155 | 2026-03-18 | CYBERSHOKE Esports     | L   | 0.652      | -            | -                | -                | -         |   -11.99 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           46 |     3362 | 2026-03-13 | Eternal Fire           | W   | 0.620      | 0.435        | -                | 0.741 (0.200)    | -         |     8.57 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           45 |     3460 | 2026-03-11 | WOPA Esport            | W   | 0.607      | -            | -                | -                | -         |     6.89 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           44 |     3557 | 2026-03-09 | Ex-Zero Tenacity       | L   | 0.593      | -            | -                | -                | -         |   -16.53 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           43 |     3581 | 2026-03-09 | Rune Eaters Esports    | W   | 0.591      | 0.435        | -                | 0.666 (0.171)    | -         |     3.22 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           42 |     3611 | 2026-03-08 | MOUZ NXT               | L   | 0.587      | -            | -                | -                | -         |   -13.22 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           41 |     3639 | 2026-03-08 | Nemiga Gaming          | L   | 0.586      | -            | -                | -                | -         |    -8.84 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           40 |     3664 | 2026-03-08 | Team Nemesis           | L   | 0.585      | -            | -                | -                | -         |    -9.99 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           39 |     3693 | 2026-03-07 | 33                     | W   | 0.579      | 0.396        | 0.033 (0.008)    | -                | -         |     8.65 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           38 |     3739 | 2026-03-06 | OMEGA                  | W   | 0.572      | -            | -                | -                | -         |     5.34 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           37 |     3800 | 2026-03-05 | KOLESIE                | W   | 0.565      | 0.371        | 0.031 (0.006)    | -                | -         |     6.89 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           36 |     3830 | 2026-03-04 | Ex-RUBY                | L   | 0.560      | -            | -                | -                | -         |   -14.25 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           35 |     3940 | 2026-03-02 | NOVAQ                  | W   | 0.545      | -            | -                | -                | -         |     1.91 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           34 |     3951 | 2026-03-01 | G2 Ares                | L   | 0.541      | -            | -                | -                | -         |   -14.09 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           33 |     3973 | 2026-03-01 | OMEGA                  | W   | 0.539      | -            | -                | -                | -         |     5.00 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           32 |     4004 | 2026-02-28 | DragonClaw             | W   | 0.533      | 0.396        | 0.029 (0.006)    | -                | -         |     2.42 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           31 |     4015 | 2026-02-28 | PsychoFace             | L   | 0.532      | -            | -                | -                | -         |   -13.27 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           30 |     4221 | 2026-02-24 | OMEGA                  | W   | 0.506      | -            | -                | -                | -         |     4.80 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           29 |     4375 | 2026-02-21 | Metizport              | W   | 0.487      | -            | -                | -                | -         |     2.88 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           28 |     4389 | 2026-02-21 | Phantom Esports        | W   | 0.486      | -            | -                | -                | -         |     4.81 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           27 |     4400 | 2026-02-21 | ReThink                | W   | 0.485      | -            | -                | -                | -         |     0.20 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           26 |     4479 | 2026-02-19 | SINNERS Esports        | L   | 0.474      | -            | -                | -                | -         |    -5.38 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           25 |     4596 | 2026-02-17 | AM Gaming              | W   | 0.460      | -            | -                | -                | -         |     4.74 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           24 |     4761 | 2026-02-14 | Team Nemesis           | W   | 0.439      | 0.396        | 0.136 (0.024)    | -                | -         |     6.17 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           23 |     4828 | 2026-02-13 | Metizport              | W   | 0.432      | -            | -                | -                | -         |     2.42 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           22 |     4907 | 2026-02-11 | Ex-Zero Tenacity       | W   | 0.419      | -            | -                | -                | -         |     1.21 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           21 |     5001 | 2026-02-08 | Hashiras               | W   | 0.398      | -            | -                | -                | -         |     0.74 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           20 |     5014 | 2026-02-07 | Cirahvi                | W   | 0.393      | -            | -                | -                | -         |     0.69 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           19 |     5194 | 2026-02-01 | BRUTE                  | L   | 0.353      | -            | -                | -                | -         |   -10.38 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           18 |     5366 | 2026-01-26 | MASONIC                | L   | 0.312      | -            | -                | -                | -         |    -7.23 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           17 |     5389 | 2026-01-25 | 777 Esports            | W   | 0.305      | -            | -                | -                | -         |     0.07 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           16 |     5420 | 2026-01-24 | TNC Esport             | L   | 0.299      | -            | -                | -                | -         |    -7.86 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           15 |     5476 | 2026-01-23 | Bebop                  | W   | 0.292      | -            | -                | -                | -         |     0.63 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           14 |     5527 | 2026-01-22 | FORZE Reload           | W   | 0.285      | -            | -                | -                | -         |     0.31 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           13 |     5582 | 2026-01-20 | BASEMENT BOYS          | W   | 0.272      | -            | -                | -                | -         |     3.52 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           12 |     5593 | 2026-01-19 | Ursa                   | L   | 0.266      | -            | -                | -                | -         |    -7.48 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           11 |     5614 | 2026-01-18 | Eternal Fire           | L   | 0.260      | -            | -                | -                | -         |    -8.05 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|           10 |     5626 | 2026-01-18 | Eternal Fire           | L   | 0.259      | -            | -                | -                | -         |    -8.02 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            9 |     5753 | 2026-01-16 | Bebop                  | L   | 0.245      | -            | -                | -                | -         |    -7.27 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            8 |     5821 | 2026-01-13 | Bushido Wildcats       | W   | 0.225      | -            | -                | -                | -         |     0.33 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            7 |     5832 | 2026-01-12 | Ursa                   | L   | 0.218      | -            | -                | -                | -         |    -6.25 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            6 |     5840 | 2026-01-11 | The Last Resort        | W   | 0.212      | -            | -                | -                | -         |     0.48 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            5 |     6025 | 2025-12-19 | Team Venom             | L   | 0.059      | -            | -                | -                | -         |    -1.85 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            4 |     6038 | 2025-12-18 | G2 Ares                | W   | 0.054      | -            | -                | -                | -         |     0.26 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            3 |     6047 | 2025-12-18 | CYBERSHOKE Esports     | L   | 0.052      | -            | -                | -                | -         |    -1.09 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            2 |     6064 | 2025-12-17 | G2 Ares                | W   | 0.046      | -            | -                | -                | -         |     0.22 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |
|            1 |     6072 | 2025-12-17 | Nomix                  | W   | 0.045      | -            | -                | -                | -         |     0.01 | AwaykeN, KalubeR, shaiK, Skrimo, SPELLAN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,989.89)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-05-11 |      1.000 | $1,766.00      | $1,766.00       |
| 2026-03-30 |      0.735 | $1,151.00      | $845.82         |
| 2026-03-08 |      0.586 | $8,000.00      | $4,690.72       |
| 2026-02-21 |      0.487 | $5,600.00      | $2,726.61       |
| 2026-02-20 |      0.480 | $2,000.00      | $960.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
