### Roster Details<br />
Team Name: Life's A Game<br />
Roster: consti, djay, kmrn, Sandman, Wolffe<br />
Global Rank: [130](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [25]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  964.3<br />
<br />
Final Rank Value (964.3) = Starting Rank Value (953.4) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.450[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.283<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 953.4
- 400 + ( ( 0.283 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 953.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.714
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           62 |       76 | 2026-04-03 | Fisher College         | L   | 1.000      | -            | -                | -                | -         |   -15.57 | consti, djay, kmrn, Sandman, Wolffe  |
|           61 |      122 | 2026-04-02 | FarmVille              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.72 | consti, djay, kmrn, Sandman, Wolffe  |
|           60 |      174 | 2026-04-01 | BOSS                   | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.99 | consti, djay, kmrn, Sandman, Wolffe  |
|           59 |      233 | 2026-03-31 | BEBRA1769              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.37 | consti, djay, kmrn, Sandman, Wolffe  |
|           58 |      342 | 2026-03-29 | Fisher College         | W   | 1.000      | 0.404        | 0.025 (0.010)    | 0.385 (0.156)    | 0 (0.000) |    16.71 | consti, djay, kmrn, Sandman, Wolffe  |
|           57 |      345 | 2026-03-29 | BOSS                   | L   | 1.000      | -            | -                | -                | -         |   -16.00 | consti, Cryptic, djay, kmrn, Sandman |
|           56 |      357 | 2026-03-29 | Fisher College         | L   | 1.000      | -            | -                | -                | -         |   -15.25 | consti, Cryptic, djay, kmrn, Sandman |
|           55 |      400 | 2026-03-28 | EMPIRE (American team) | W   | 1.000      | 0.404        | 0.004 (0.002)    | -                | 0 (0.000) |     6.37 | consti, djay, kmrn, Sandman, Wolffe  |
|           54 |      401 | 2026-03-28 | NuTorious              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.23 | consti, Cryptic, djay, kmrn, Sandman |
|           53 |      434 | 2026-03-28 | EMPIRE (American team) | W   | 1.000      | -            | -                | -                | 1 (1.000) |     7.46 | consti, Cryptic, djay, kmrn, Sandman |
|           52 |      449 | 2026-03-28 | Zealous                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.45 | consti, Cryptic, djay, kmrn, Sandman |
|           51 |      479 | 2026-03-27 | Sola Gaming            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.76 | consti, djay, kmrn, Sandman, Wolffe  |
|           50 |      548 | 2026-03-25 | Team Aether            | L   | 1.000      | -            | -                | -                | -         |   -22.99 | consti, Cryptic, djay, kmrn, Sandman |
|           49 |      600 | 2026-03-24 | F5 Esports             | W   | 1.000      | 0.363        | -                | 0.203 (0.073)    | 0 (0.000) |     6.91 | consti, Cryptic, djay, kmrn, Sandman |
|           48 |      659 | 2026-03-23 | SportsBetExpert        | L   | 1.000      | -            | -                | -                | -         |   -25.25 | consti, Cryptic, djay, kmrn, Sandman |
|           47 |      775 | 2026-03-21 | Sakura Esports         | W   | 1.000      | 0.363        | 0.021 (0.008)    | -                | -         |     4.14 | consti, Cryptic, djay, kmrn, Sandman |
|           46 |      840 | 2026-03-20 | Wanted Goons           | W   | 1.000      | 0.363        | -                | 0.168 (0.061)    | -         |     3.23 | consti, Cryptic, djay, kmrn, Sandman |
|           45 |     1290 | 2026-03-10 | Chicken Coop Esports   | W   | 1.000      | 0.143        | 0.017 (0.002)    | -                | -         |     5.98 | consti, djay, kmrn, Sandman, Wolffe  |
|           44 |     1407 | 2026-03-08 | Wanted Goons           | W   | 1.000      | -            | -                | -                | -         |     3.51 | consti, djay, kmrn, Sandman, Wolffe  |
|           43 |     1758 | 2026-03-01 | Wildcard               | L   | 0.961      | -            | -                | -                | -         |   -11.53 | consti, djay, kmrn, Sandman, Wolffe  |
|           42 |     1797 | 2026-02-28 | BOSS                   | W   | 0.956      | -            | -                | -                | -         |    13.06 | consti, djay, kmrn, Sandman, Wolffe  |
|           41 |     1800 | 2026-02-28 | Team Aether            | W   | 0.955      | -            | -                | -                | -         |     7.02 | consti, djay, kmrn, Sandman, Wolffe  |
|           40 |     1842 | 2026-02-27 | Team Voca              | L   | 0.950      | -            | -                | -                | -         |    -4.08 | consti, djay, kmrn, Sandman, Wolffe  |
|           39 |     1894 | 2026-02-26 | FlyQuest RED           | W   | 0.943      | -            | -                | -                | -         |     4.02 | consti, djay, kmrn, Sandman, Wolffe  |
|           38 |     2094 | 2026-02-22 | FarmVille              | W   | 0.915      | 0.333        | 0.008 (0.002)    | 0.219 (0.067)    | -         |     6.92 | consti, djay, kmrn, Sandman, Wolffe  |
|           37 |     2223 | 2026-02-20 | Wildcard               | W   | 0.902      | 0.333        | -                | 0.399 (0.120)    | -         |    18.72 | consti, djay, kmrn, Sandman, Wolffe  |
|           36 |     2273 | 2026-02-19 | InControl              | L   | 0.896      | -            | -                | -                | -         |   -22.55 | consti, djay, kmrn, Sandman, Wolffe  |
|           35 |     2320 | 2026-02-18 | M80                    | L   | 0.889      | -            | -                | -                | -         |    -1.77 | consti, djay, kmrn, Sandman, Wolffe  |
|           34 |     2326 | 2026-02-18 | Team Aether            | W   | 0.889      | 0.333        | -                | 0.260 (0.077)    | -         |     6.91 | consti, djay, kmrn, Sandman, Wolffe  |
|           33 |     2382 | 2026-02-17 | Regain                 | W   | 0.883      | 0.363        | -                | 0.237 (0.076)    | -         |     5.11 | consti, djay, kmrn, Sandman, Wolffe  |
|           32 |     2476 | 2026-02-15 | Team mouse             | W   | 0.870      | -            | -                | -                | -         |     2.15 | consti, djay, kmrn, Sandman, Wolffe  |
|           31 |     2485 | 2026-02-15 | BOSS                   | W   | 0.868      | -            | -                | -                | -         |     7.25 | consti, djay, kmrn, Sandman, Wolffe  |
|           30 |     2490 | 2026-02-15 | FarmVille              | W   | 0.867      | 0.303        | 0.008 (0.002)    | -                | -         |     6.25 | consti, djay, kmrn, Sandman, Wolffe  |
|           29 |     2542 | 2026-02-14 | OverKnight             | W   | 0.862      | -            | -                | -                | -         |     2.46 | consti, djay, kmrn, Sandman, Wolffe  |
|           28 |     2652 | 2026-02-12 | SportsBetExpert        | W   | 0.849      | 0.333        | 0.011 (0.003)    | 0.255 (0.072)    | -         |     8.07 | consti, djay, kmrn, Sandman, Wolffe  |
|           27 |     2722 | 2026-02-10 | Chicken Coop Esports   | W   | 0.836      | 0.333        | 0.017 (0.005)    | -                | -         |     6.16 | consti, djay, kmrn, Sandman, Wolffe  |
|           26 |     2765 | 2026-02-09 | SkinRave Esports       | L   | 0.829      | -            | -                | -                | -         |   -15.93 | consti, djay, kmrn, Sandman, Wolffe  |
|           25 |     2815 | 2026-02-07 | Sakura Esports         | W   | 0.816      | 0.333        | 0.021 (0.006)    | -                | -         |     5.73 | consti, djay, kmrn, Sandman, Wolffe  |
|           24 |     2881 | 2026-02-05 | Wildcard               | L   | 0.802      | -            | -                | -                | -         |    -9.81 | consti, djay, kmrn, Sandman, Wolffe  |
|           23 |     2904 | 2026-02-04 | Outfit 49              | W   | 0.796      | 0.333        | 0.008 (0.002)    | 0.311 (0.083)    | -         |     4.91 | consti, djay, kmrn, Sandman, Wolffe  |
|           22 |     2927 | 2026-02-03 | Zomblers               | W   | 0.788      | 0.333        | -                | 0.253 (0.066)    | -         |     4.93 | consti, djay, kmrn, Sandman, Wolffe  |
|           21 |     2958 | 2026-02-02 | Reign Above            | W   | 0.783      | -            | -                | -                | -         |     3.25 | consti, djay, kmrn, Sandman, Wolffe  |
|           20 |     3886 | 2025-12-16 | BOSS                   | L   | 0.462      | -            | -                | -                | -         |    -7.17 | consti, djay, kmrn, Pluto, Sandman   |
|           19 |     3897 | 2025-12-14 | TEAM 33                | W   | 0.448      | -            | -                | -                | -         |     2.22 | consti, djay, kmrn, Sandman, xaler   |
|           18 |     3922 | 2025-12-12 | EMPIRE (American team) | W   | 0.436      | -            | -                | -                | -         |     3.06 | consti, djay, kmrn, Sandman, xaler   |
|           17 |     3937 | 2025-12-11 | InControl              | W   | 0.429      | -            | -                | -                | -         |     3.09 | consti, djay, kmrn, Pluto, Sandman   |
|           16 |     3958 | 2025-12-09 | Akimbo Esports         | W   | 0.416      | -            | -                | -                | -         |     1.17 | consti, djay, kmrn, Pluto, Sandman   |
|           15 |     3997 | 2025-12-07 | Team Aether            | W   | 0.402      | -            | -                | -                | -         |     0.62 | consti, djay, kmrn, Pluto, Sandman   |
|           14 |     4044 | 2025-12-05 | Pulse (American team)  | L   | 0.390      | -            | -                | -                | -         |   -11.11 | consti, djay, kmrn, Pluto, Sandman   |
|           13 |     4112 | 2025-12-02 | Team Aether            | L   | 0.369      | -            | -                | -                | -         |    -8.57 | consti, djay, kmrn, Pluto, Sandman   |
|           12 |     4642 | 2025-11-11 | BOSS                   | L   | 0.229      | -            | -                | -                | -         |    -3.75 | consti, djay, kmrn, mason, Sandman   |
|           11 |     4669 | 2025-11-10 | SkinRave Esports       | L   | 0.223      | -            | -                | -                | -         |    -4.94 | consti, djay, kmrn, mason, Sandman   |
|           10 |     5099 | 2025-10-29 | BOSS                   | L   | 0.142      | -            | -                | -                | -         |    -2.39 | consti, djay, kmrn, mason, Sandman   |
|            9 |     5195 | 2025-10-26 | Mythic                 | W   | 0.123      | -            | -                | -                | -         |     0.57 | consti, djay, kmrn, mason, Sandman   |
|            8 |     5253 | 2025-10-25 | OverKnight             | W   | 0.116      | -            | -                | -                | -         |     0.29 | consti, djay, kmrn, mason, Sandman   |
|            7 |     5261 | 2025-10-25 | Marsborne              | L   | 0.115      | -            | -                | -                | -         |    -0.51 | consti, djay, kmrn, mason, Sandman   |
|            6 |     5309 | 2025-10-24 | Wanted Goons           | W   | 0.109      | -            | -                | -                | -         |     0.46 | consti, djay, kmrn, mason, Sandman   |
|            5 |     5436 | 2025-10-21 | Marsborne              | L   | 0.089      | -            | -                | -                | -         |    -0.40 | consti, djay, kmrn, mason, Sandman   |
|            4 |     5531 | 2025-10-16 | Outfit 49              | W   | 0.055      | -            | -                | -                | -         |     0.35 | consti, djay, kmrn, mason, Sandman   |
|            3 |     5642 | 2025-10-13 | Outfit 49              | W   | 0.035      | -            | -                | -                | -         |     0.08 | consti, djay, kmrn, mason, Sandman   |
|            2 |     5731 | 2025-10-09 | BOSS                   | L   | 0.009      | -            | -                | -                | -         |    -0.15 | consti, djay, mason, Sandman, Wolffe |
|            1 |     5776 | 2025-10-08 | Marsborne              | L   | 0.002      | -            | -                | -                | -         |    -0.01 | consti, djay, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,475.25)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $15,000.00     | $15,000.00      |
| 2026-03-29 |      1.000 | $1,050.00      | $1,050.00       |
| 2026-03-27 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-02-22 |      0.915 | $5,000.00      | $4,575.76       |
| 2026-02-15 |      0.868 | $4,000.00      | $3,473.75       |
| 2026-02-10 |      0.836 | $1,000.00      | $835.52         |
| 2025-12-14 |      0.448 | $1,750.00      | $784.28         |
| 2025-11-15 |      0.256 | $1,000.00      | $255.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
