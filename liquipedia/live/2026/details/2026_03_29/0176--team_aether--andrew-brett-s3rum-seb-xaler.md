### Roster Details<br />
Team Name: Team Aether<br />
Roster: Andrew, brett, s3rum, Seb, xaler<br />
Global Rank: [176](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [34]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  773.5<br />
<br />
Final Rank Value (773.5) = Starting Rank Value (749.1) + Head To Head Adjustments (24.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.084[<sup>2</sup>](#table1)
- LAN Wins: 0.063[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 749.1
- 400 + ( ( 0.180 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 749.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.276
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |       85 | 2026-03-26 | Chicken Coop Esports  | L   | 1.000      | -            | -                | -                | -         |   -18.12 | Andrew, brett, s3rum, Seb, xaler     |
|           22 |      111 | 2026-03-25 | Life's A Game         | W   | 1.000      | 0.363        | 0.027 (0.010)    | 0.728 (0.264)    | 0 (0.000) |    22.21 | Andrew, brett, s3rum, Seb, xaler     |
|           21 |      155 | 2026-03-24 | Outfit 49             | W   | 1.000      | 0.363        | 0.008 (0.003)    | 0.337 (0.122)    | 0 (0.000) |    14.23 | Andrew, brett, s3rum, Seb, xaler     |
|           20 |      207 | 2026-03-23 | Chicken Coop Esports  | L   | 1.000      | -            | -                | -                | -         |   -17.00 | Andrew, brett, s3rum, Seb, xaler     |
|           19 |      306 | 2026-03-21 | Zomblers              | W   | 1.000      | 0.363        | 0.003 (0.001)    | 0.279 (0.101)    | 0 (0.000) |    14.59 | Andrew, brett, s3rum, Seb, xaler     |
|           18 |      364 | 2026-03-20 | Reign Above           | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.118 (0.043)    | 0 (0.000) |     8.98 | Andrew, brett, s3rum, Seb, xaler     |
|           17 |     1313 | 2026-02-28 | Life's A Game         | L   | 1.000      | -            | -                | -                | -         |    -8.10 | Andrew, brett, s3rum, Seb, xaler     |
|           16 |     1358 | 2026-02-27 | Sakura Esports        | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.063 (0.009)    | 0 (0.000) |    10.90 | Andrew, brett, s3rum, Seb, xaler     |
|           15 |     1411 | 2026-02-26 | BOSS                  | L   | 0.993      | -            | -                | -                | -         |    -9.19 | Andrew, brett, s3rum, Seb, xaler     |
|           14 |     1833 | 2026-02-18 | Life's A Game         | L   | 0.940      | -            | -                | -                | -         |    -8.07 | Andrew, brett, s3rum, Seb, xaler     |
|           13 |     1881 | 2026-02-17 | Smokepoint            | W   | 0.934      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.41 | Andrew, brett, s3rum, Seb, xaler     |
|           12 |     2159 | 2026-02-12 | FarmVille             | W   | 0.900      | 0.333        | 0.008 (0.002)    | 0.171 (0.051)    | 0 (0.000) |    12.47 | Andrew, brett, s3rum, Seb, xaler     |
|           11 |     2232 | 2026-02-10 | Zomblers              | L   | 0.887      | -            | -                | -                | -         |   -14.74 | Andrew, brett, s3rum, Seb, xaler     |
|           10 |     2324 | 2026-02-07 | OverKnight            | W   | 0.866      | 0.333        | 0.000 (0.000)    | 0.090 (0.026)    | 0 (0.000) |     8.39 | Andrew, brett, s3rum, Seb, xaler     |
|            9 |     2466 | 2026-02-02 | Outfit 49             | W   | 0.834      | 0.333        | 0.008 (0.002)    | 0.337 (0.094)    | 0 (0.000) |    10.79 | Andrew, brett, s3rum, Seb, xaler     |
|            8 |     3236 | 2026-01-03 | Team Voca             | L   | 0.632      | -            | -                | -                | -         |    -0.77 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            7 |     3240 | 2026-01-03 | Dark Knight Esports   | W   | 0.631      | -            | -                | -                | 1 (0.631) |     2.54 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            6 |     3246 | 2026-01-03 | Team Voca             | L   | 0.631      | -            | -                | -                | -         |    -0.73 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            5 |     3433 | 2025-12-11 | Pulse (American team) | L   | 0.480      | -            | -                | -                | -         |   -11.62 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            4 |     3444 | 2025-12-10 | Wanted Goons          | W   | 0.474      | 0.333        | -                | 0.175 (0.028)    | -         |     4.61 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            3 |     3474 | 2025-12-08 | SkinRave Esports      | L   | 0.460      | -            | -                | -                | -         |    -5.68 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            2 |     3567 | 2025-12-04 | BOSS                  | L   | 0.434      | -            | -                | -                | -         |    -3.99 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            1 |     3609 | 2025-12-02 | Life's A Game         | W   | 0.420      | 0.333        | 0.027 (0.004)    | 0.728 (0.102)    | -         |     9.29 | Andrew, brett, LUKE4k, s3rum, sava9e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
