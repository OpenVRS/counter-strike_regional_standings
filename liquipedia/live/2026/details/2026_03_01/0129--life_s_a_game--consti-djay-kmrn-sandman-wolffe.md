### Roster Details<br />
Team Name: Life's A Game<br />
Roster: consti, djay, kmrn, Sandman, Wolffe<br />
Global Rank: [129](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_01.md)<br />
Regional Rank: [26]( ../../standings_americas_2026_03_01.md)<br />
<br />
Final Rank Value:  865.0<br />
<br />
Final Rank Value (865.0) = Starting Rank Value (782.2) + Head To Head Adjustments (82.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.104[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.2
- 400 + ( ( 0.202 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 782.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.703
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |        3 | 2026-03-01 | Wildcard              | L   | 1.000      | -            | -                | -                | -         |   -14.03 | consti, djay, kmrn, Sandman, Wolffe  |
|           51 |       20 | 2026-02-28 | BOSS                  | W   | 1.000      | 0.143        | 0.017 (0.002)    | 0.455 (0.065)    | 0 (0.000) |    11.61 | consti, djay, kmrn, Sandman, Wolffe  |
|           50 |       23 | 2026-02-28 | Team Aether           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.92 | consti, djay, kmrn, Sandman, Wolffe  |
|           49 |       54 | 2026-02-27 | Team Voca             | L   | 1.000      | -            | -                | -                | -         |    -8.37 | consti, djay, kmrn, Sandman, Wolffe  |
|           48 |       99 | 2026-02-26 | FlyQuest RED          | W   | 1.000      | 0.143        | 0.015 (0.002)    | -                | 0 (0.000) |     7.33 | consti, djay, kmrn, Sandman, Wolffe  |
|           47 |      259 | 2026-02-22 | FarmVille             | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.229 (0.076)    | 0 (0.000) |    11.18 | consti, djay, kmrn, Sandman, Wolffe  |
|           46 |      364 | 2026-02-20 | Wildcard              | W   | 1.000      | 0.333        | -                | 0.405 (0.135)    | 0 (0.000) |    18.61 | consti, djay, kmrn, Sandman, Wolffe  |
|           45 |      410 | 2026-02-19 | InControl             | L   | 1.000      | -            | -                | -                | -         |   -23.24 | consti, djay, kmrn, Sandman, Wolffe  |
|           44 |      457 | 2026-02-18 | M80                   | L   | 1.000      | -            | -                | -                | -         |    -2.07 | consti, djay, kmrn, Sandman, Wolffe  |
|           43 |      463 | 2026-02-18 | Team Aether           | W   | 1.000      | 0.333        | -                | 0.270 (0.090)    | 0 (0.000) |     7.25 | consti, djay, kmrn, Sandman, Wolffe  |
|           42 |      519 | 2026-02-17 | Regain                | W   | 1.000      | 0.363        | 0.007 (0.003)    | 0.318 (0.115)    | 0 (0.000) |     9.38 | consti, djay, kmrn, Sandman, Wolffe  |
|           41 |      613 | 2026-02-15 | Team mouse            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.33 | consti, djay, kmrn, Sandman, Wolffe  |
|           40 |      622 | 2026-02-15 | BOSS                  | W   | 1.000      | 0.303        | 0.017 (0.005)    | 0.455 (0.138)    | 0 (0.000) |    15.73 | consti, djay, kmrn, Sandman, Wolffe  |
|           39 |      627 | 2026-02-15 | FarmVille             | W   | 1.000      | 0.303        | 0.009 (0.003)    | 0.229 (0.069)    | 0 (0.000) |    11.78 | consti, djay, kmrn, Sandman, Wolffe  |
|           38 |      677 | 2026-02-14 | OverKnight            | W   | 1.000      | -            | -                | -                | -         |     7.45 | consti, djay, kmrn, Sandman, Wolffe  |
|           37 |      785 | 2026-02-12 | SportsBetExpert       | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.299 (0.100)    | -         |    13.67 | consti, djay, kmrn, Sandman, Wolffe  |
|           36 |      855 | 2026-02-10 | Chicken Coop Esports  | W   | 1.000      | -            | -                | -                | -         |     5.38 | consti, djay, kmrn, Sandman, Wolffe  |
|           35 |      898 | 2026-02-09 | SkinRave Esports      | L   | 1.000      | -            | -                | -                | -         |   -10.96 | consti, djay, kmrn, Sandman, Wolffe  |
|           34 |      948 | 2026-02-07 | Sakura Esports        | W   | 1.000      | 0.333        | 0.047 (0.016)    | -                | -         |    13.17 | consti, djay, kmrn, Sandman, Wolffe  |
|           33 |     1011 | 2026-02-05 | Wildcard              | L   | 1.000      | -            | -                | -                | -         |   -12.78 | consti, djay, kmrn, Sandman, Wolffe  |
|           32 |     1034 | 2026-02-04 | Outfit 49             | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.426 (0.142)    | -         |    10.84 | consti, djay, kmrn, Sandman, Wolffe  |
|           31 |     1057 | 2026-02-03 | Zomblers              | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.331 (0.110)    | -         |    12.09 | consti, djay, kmrn, Sandman, Wolffe  |
|           30 |     1088 | 2026-02-02 | Reign Above           | W   | 1.000      | -            | -                | -                | -         |     8.95 | consti, djay, kmrn, Sandman, Wolffe  |
|           29 |     1986 | 2025-12-16 | BOSS                  | L   | 0.696      | -            | -                | -                | -         |    -9.41 | consti, djay, kmrn, Pluto, Sandman   |
|           28 |     1997 | 2025-12-14 | TEAM 33               | W   | 0.682      | -            | -                | -                | -         |     4.57 | consti, djay, kmrn, Sandman, xaler   |
|           27 |     2022 | 2025-12-12 | Kraken Seas           | W   | 0.669      | -            | -                | -                | -         |     2.40 | consti, djay, kmrn, Sandman, xaler   |
|           26 |     2037 | 2025-12-11 | InControl             | W   | 0.663      | -            | -                | -                | -         |     7.60 | consti, djay, kmrn, Pluto, Sandman   |
|           25 |     2058 | 2025-12-09 | Akimbo Esports        | W   | 0.649      | -            | -                | -                | -         |     4.43 | consti, djay, kmrn, Pluto, Sandman   |
|           24 |     2097 | 2025-12-07 | Team Aether           | W   | 0.636      | -            | -                | -                | -         |     5.89 | consti, djay, kmrn, Pluto, Sandman   |
|           23 |     2144 | 2025-12-05 | Pulse (American team) | L   | 0.623      | -            | -                | -                | -         |   -15.38 | consti, djay, kmrn, Pluto, Sandman   |
|           22 |     2212 | 2025-12-02 | Team Aether           | L   | 0.603      | -            | -                | -                | -         |   -13.88 | consti, djay, kmrn, Pluto, Sandman   |
|           21 |     2742 | 2025-11-11 | BOSS                  | L   | 0.463      | -            | -                | -                | -         |    -6.88 | consti, djay, kmrn, mason, Sandman   |
|           20 |     2769 | 2025-11-10 | SkinRave Esports      | L   | 0.456      | -            | -                | -                | -         |    -5.51 | consti, djay, kmrn, mason, Sandman   |
|           19 |     3199 | 2025-10-29 | BOSS                  | L   | 0.376      | -            | -                | -                | -         |    -5.94 | consti, djay, kmrn, mason, Sandman   |
|           18 |     3295 | 2025-10-26 | Mythic                | W   | 0.356      | -            | -                | -                | -         |     3.84 | consti, djay, kmrn, mason, Sandman   |
|           17 |     3353 | 2025-10-25 | OverKnight            | W   | 0.350      | -            | -                | -                | -         |     3.52 | consti, djay, kmrn, mason, Sandman   |
|           16 |     3361 | 2025-10-25 | Marsborne             | L   | 0.348      | -            | -                | -                | -         |    -1.15 | consti, djay, kmrn, mason, Sandman   |
|           15 |     3409 | 2025-10-24 | Wanted Goons          | W   | 0.343      | -            | -                | -                | -         |     1.75 | consti, djay, kmrn, mason, Sandman   |
|           14 |     3536 | 2025-10-21 | Marsborne             | L   | 0.322      | -            | -                | -                | -         |    -1.06 | consti, djay, kmrn, mason, Sandman   |
|           13 |     3631 | 2025-10-16 | Outfit 49             | W   | 0.289      | -            | -                | -                | -         |     3.80 | consti, djay, kmrn, mason, Sandman   |
|           12 |     3742 | 2025-10-13 | Outfit 49             | W   | 0.268      | -            | -                | -                | -         |     1.54 | consti, djay, kmrn, mason, Sandman   |
|           11 |     3831 | 2025-10-09 | BOSS                  | L   | 0.242      | -            | -                | -                | -         |    -3.71 | consti, djay, mason, Sandman, Wolffe |
|           10 |     3876 | 2025-10-08 | Marsborne             | L   | 0.236      | -            | -                | -                | -         |    -0.72 | consti, djay, mason, Sandman, Wolffe |
|            9 |     3990 | 2025-10-06 | FlyQuest RED          | W   | 0.223      | -            | -                | -                | -         |     2.97 | consti, djay, mason, Sandman, Wolffe |
|            8 |     4595 | 2025-09-21 | SportsBetExpert       | W   | 0.122      | -            | -                | -                | -         |     1.44 | consti, djay, mason, Sandman, Wolffe |
|            7 |     4624 | 2025-09-20 | NuTorious             | W   | 0.116      | -            | -                | -                | -         |     0.63 | consti, djay, mason, Sandman, Wolffe |
|            6 |     4684 | 2025-09-18 | SkinRave Esports      | L   | 0.102      | -            | -                | -                | -         |    -1.31 | consti, djay, mason, Sandman, Wolffe |
|            5 |     4716 | 2025-09-17 | Wanted Goons          | W   | 0.096      | -            | -                | -                | -         |     0.50 | consti, djay, mason, Sandman, Wolffe |
|            4 |     4856 | 2025-09-13 | BOSS                  | L   | 0.068      | -            | -                | -                | -         |    -1.01 | consti, djay, mason, Sandman, Wolffe |
|            3 |     4904 | 2025-09-12 | Anything else         | W   | 0.063      | -            | -                | -                | -         |     0.31 | consti, djay, mason, Sandman, Wolffe |
|            2 |     4946 | 2025-09-11 | Team Voca             | L   | 0.056      | -            | -                | -                | -         |    -1.03 | consti, djay, mason, Sandman, Wolffe |
|            1 |     5051 | 2025-09-09 | OverKnight            | W   | 0.043      | -            | -                | -                | -         |     0.41 | consti, djay, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,025.66)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-02-15 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-02-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-12-14 |      0.682 | $1,750.00      | $1,192.92       |
| 2025-11-15 |      0.489 | $1,000.00      | $489.44         |
| 2025-09-22 |      0.129 | $1,000.00      | $129.17         |
| 2025-09-21 |      0.122 | $1,750.00      | $214.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
