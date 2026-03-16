### Roster Details<br />
Team Name: Life's A Game<br />
Roster: consti, djay, kmrn, Sandman, Wolffe<br />
Global Rank: [138](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [29]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  860.3<br />
<br />
Final Rank Value (860.3) = Starting Rank Value (781.4) + Head To Head Adjustments (78.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.414[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.095[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.4
- 400 + ( ( 0.199 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 781.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.654
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      156 | 2026-03-01 | Wildcard              | L   | 1.000      | -            | -                | -                | -         |   -13.94 | consti, djay, kmrn, Sandman, Wolffe  |
|           46 |      179 | 2026-02-28 | BOSS                  | W   | 1.000      | 0.143        | 0.018 (0.003)    | -                | 0 (0.000) |    12.58 | consti, djay, kmrn, Sandman, Wolffe  |
|           45 |      182 | 2026-02-28 | Team Aether           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.96 | consti, djay, kmrn, Sandman, Wolffe  |
|           44 |      221 | 2026-02-27 | Team Voca             | L   | 1.000      | -            | -                | -                | -         |    -8.12 | consti, djay, kmrn, Sandman, Wolffe  |
|           43 |      272 | 2026-02-26 | FlyQuest RED          | W   | 1.000      | 0.143        | 0.008 (0.001)    | -                | 0 (0.000) |     6.86 | consti, djay, kmrn, Sandman, Wolffe  |
|           42 |      456 | 2026-02-22 | FarmVille             | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.224 (0.075)    | 0 (0.000) |    11.30 | consti, djay, kmrn, Sandman, Wolffe  |
|           41 |      575 | 2026-02-20 | Wildcard              | W   | 1.000      | 0.333        | -                | 0.393 (0.131)    | 0 (0.000) |    18.70 | consti, djay, kmrn, Sandman, Wolffe  |
|           40 |      623 | 2026-02-19 | InControl             | L   | 1.000      | -            | -                | -                | -         |   -22.97 | consti, djay, kmrn, Sandman, Wolffe  |
|           39 |      663 | 2026-02-18 | M80                   | L   | 1.000      | -            | -                | -                | -         |    -2.15 | consti, djay, kmrn, Sandman, Wolffe  |
|           38 |      668 | 2026-02-18 | Team Aether           | W   | 1.000      | 0.333        | -                | 0.259 (0.086)    | 0 (0.000) |     7.27 | consti, djay, kmrn, Sandman, Wolffe  |
|           37 |      717 | 2026-02-17 | Regain                | W   | 1.000      | 0.363        | 0.007 (0.003)    | 0.280 (0.102)    | 0 (0.000) |     9.60 | consti, djay, kmrn, Sandman, Wolffe  |
|           36 |      805 | 2026-02-15 | Team mouse            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.45 | consti, djay, kmrn, Sandman, Wolffe  |
|           35 |      814 | 2026-02-15 | BOSS                  | W   | 1.000      | 0.303        | 0.018 (0.005)    | 0.386 (0.117)    | 0 (0.000) |    15.93 | consti, djay, kmrn, Sandman, Wolffe  |
|           34 |      819 | 2026-02-15 | FarmVille             | W   | 1.000      | 0.303        | 0.010 (0.003)    | 0.224 (0.068)    | 0 (0.000) |    11.96 | consti, djay, kmrn, Sandman, Wolffe  |
|           33 |      866 | 2026-02-14 | OverKnight            | W   | 1.000      | -            | -                | -                | -         |     7.47 | consti, djay, kmrn, Sandman, Wolffe  |
|           32 |      969 | 2026-02-12 | SportsBetExpert       | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.286 (0.095)    | -         |    13.85 | consti, djay, kmrn, Sandman, Wolffe  |
|           31 |     1035 | 2026-02-10 | Chicken Coop Esports  | W   | 1.000      | 0.333        | -                | 0.175 (0.058)    | -         |     6.19 | consti, djay, kmrn, Sandman, Wolffe  |
|           30 |     1077 | 2026-02-09 | SkinRave Esports      | L   | 1.000      | -            | -                | -                | -         |   -11.16 | consti, djay, kmrn, Sandman, Wolffe  |
|           29 |     1126 | 2026-02-07 | Sakura Esports        | W   | 1.000      | 0.333        | 0.024 (0.008)    | -                | -         |    12.54 | consti, djay, kmrn, Sandman, Wolffe  |
|           28 |     1191 | 2026-02-05 | Wildcard              | L   | 0.994      | -            | -                | -                | -         |   -12.55 | consti, djay, kmrn, Sandman, Wolffe  |
|           27 |     1212 | 2026-02-04 | Outfit 49             | W   | 0.988      | 0.333        | 0.010 (0.003)    | 0.373 (0.123)    | -         |    10.71 | consti, djay, kmrn, Sandman, Wolffe  |
|           26 |     1234 | 2026-02-03 | Zomblers              | W   | 0.981      | 0.333        | 0.005 (0.002)    | 0.277 (0.091)    | -         |    11.72 | consti, djay, kmrn, Sandman, Wolffe  |
|           25 |     1263 | 2026-02-02 | Reign Above           | W   | 0.975      | -            | -                | -                | -         |     8.61 | consti, djay, kmrn, Sandman, Wolffe  |
|           24 |     2186 | 2025-12-16 | BOSS                  | L   | 0.654      | -            | -                | -                | -         |    -8.78 | consti, djay, kmrn, Pluto, Sandman   |
|           23 |     2193 | 2025-12-14 | TEAM 33               | W   | 0.640      | -            | -                | -                | -         |     4.47 | consti, djay, kmrn, Sandman, xaler   |
|           22 |     2218 | 2025-12-12 | Kraken Seas           | W   | 0.628      | -            | -                | -                | -         |     2.33 | consti, djay, kmrn, Sandman, xaler   |
|           21 |     2233 | 2025-12-11 | InControl             | W   | 0.621      | -            | -                | -                | -         |     7.37 | consti, djay, kmrn, Pluto, Sandman   |
|           20 |     2253 | 2025-12-09 | Akimbo Esports        | W   | 0.608      | -            | -                | -                | -         |     4.26 | consti, djay, kmrn, Pluto, Sandman   |
|           19 |     2287 | 2025-12-07 | Team Aether           | W   | 0.595      | -            | -                | -                | -         |     5.22 | consti, djay, kmrn, Pluto, Sandman   |
|           18 |     2333 | 2025-12-05 | Pulse (American team) | L   | 0.582      | -            | -                | -                | -         |   -14.25 | consti, djay, kmrn, Pluto, Sandman   |
|           17 |     2399 | 2025-12-02 | Team Aether           | L   | 0.561      | -            | -                | -                | -         |   -12.89 | consti, djay, kmrn, Pluto, Sandman   |
|           16 |     2918 | 2025-11-11 | BOSS                  | L   | 0.421      | -            | -                | -                | -         |    -6.17 | consti, djay, kmrn, mason, Sandman   |
|           15 |     2943 | 2025-11-10 | SkinRave Esports      | L   | 0.415      | -            | -                | -                | -         |    -5.05 | consti, djay, kmrn, mason, Sandman   |
|           14 |     3366 | 2025-10-29 | BOSS                  | L   | 0.334      | -            | -                | -                | -         |    -5.19 | consti, djay, kmrn, mason, Sandman   |
|           13 |     3460 | 2025-10-26 | Mythic                | W   | 0.315      | -            | -                | -                | -         |     3.25 | consti, djay, kmrn, mason, Sandman   |
|           12 |     3522 | 2025-10-25 | Marsborne             | L   | 0.307      | -            | -                | -                | -         |    -0.50 | consti, djay, kmrn, mason, Sandman   |
|           11 |     3976 | 2025-10-09 | BOSS                  | L   | 0.201      | -            | -                | -                | -         |    -3.06 | consti, djay, mason, Sandman, Wolffe |
|           10 |     4019 | 2025-10-08 | Marsborne             | L   | 0.194      | -            | -                | -                | -         |    -0.30 | consti, djay, mason, Sandman, Wolffe |
|            9 |     4126 | 2025-10-06 | FlyQuest RED          | W   | 0.181      | -            | -                | -                | -         |     2.21 | consti, djay, mason, Sandman, Wolffe |
|            8 |     4715 | 2025-09-21 | SportsBetExpert       | W   | 0.081      | -            | -                | -                | -         |     0.95 | consti, djay, mason, Sandman, Wolffe |
|            7 |     4744 | 2025-09-20 | NuTorious             | W   | 0.074      | -            | -                | -                | -         |     0.37 | consti, djay, mason, Sandman, Wolffe |
|            6 |     4804 | 2025-09-18 | SkinRave Esports      | L   | 0.061      | -            | -                | -                | -         |    -0.81 | consti, djay, mason, Sandman, Wolffe |
|            5 |     4836 | 2025-09-17 | Wanted Goons          | W   | 0.055      | -            | -                | -                | -         |     0.27 | consti, djay, mason, Sandman, Wolffe |
|            4 |     4976 | 2025-09-13 | BOSS                  | L   | 0.027      | -            | -                | -                | -         |    -0.40 | consti, djay, mason, Sandman, Wolffe |
|            3 |     5024 | 2025-09-12 | Anything else         | W   | 0.021      | -            | -                | -                | -         |     0.10 | consti, djay, mason, Sandman, Wolffe |
|            2 |     5066 | 2025-09-11 | Team Voca             | L   | 0.014      | -            | -                | -                | -         |    -0.26 | consti, djay, mason, Sandman, Wolffe |
|            1 |     5173 | 2025-09-09 | OverKnight            | W   | 0.001      | -            | -                | -                | -         |     0.01 | consti, djay, mason, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,798.15)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-02-15 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-02-10 |      1.000 | $1,000.00      | $1,000.00       |
| 2025-12-14 |      0.640 | $1,750.00      | $1,120.53       |
| 2025-11-15 |      0.448 | $1,000.00      | $448.08         |
| 2025-09-22 |      0.088 | $1,000.00      | $87.80          |
| 2025-09-21 |      0.081 | $1,750.00      | $141.74         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
