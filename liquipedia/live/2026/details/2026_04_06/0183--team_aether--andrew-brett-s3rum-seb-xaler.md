### Roster Details<br />
Team Name: Team Aether<br />
Roster: Andrew, brett, s3rum, Seb, xaler<br />
Global Rank: [183](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [35]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  777.3<br />
<br />
Final Rank Value (777.3) = Starting Rank Value (755.3) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.077[<sup>2</sup>](#table1)
- LAN Wins: 0.058[<sup>2</sup>](#table1)

The average of these factors is 0.182<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.3
- 400 + ( ( 0.182 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 755.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.260
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      512 | 2026-03-26 | Chicken Coop Esports  | L   | 1.000      | -            | -                | -                | -         |   -17.97 | Andrew, brett, s3rum, Seb, xaler     |
|           22 |      548 | 2026-03-25 | Life's A Game         | W   | 1.000      | 0.363        | 0.060 (0.022)    | 0.714 (0.259)    | 0 (0.000) |    22.99 | Andrew, brett, s3rum, Seb, xaler     |
|           21 |      599 | 2026-03-24 | Outfit 49             | W   | 1.000      | 0.363        | 0.008 (0.003)    | 0.311 (0.113)    | 0 (0.000) |    14.05 | Andrew, brett, s3rum, Seb, xaler     |
|           20 |      658 | 2026-03-23 | Chicken Coop Esports  | L   | 1.000      | -            | -                | -                | -         |   -16.86 | Andrew, brett, s3rum, Seb, xaler     |
|           19 |      772 | 2026-03-21 | Zomblers              | W   | 1.000      | 0.363        | 0.002 (0.001)    | 0.253 (0.092)    | 0 (0.000) |    14.34 | Andrew, brett, s3rum, Seb, xaler     |
|           18 |      834 | 2026-03-20 | Reign Above           | W   | 1.000      | 0.363        | 0.000 (0.000)    | 0.110 (0.040)    | 0 (0.000) |     8.63 | Andrew, brett, s3rum, Seb, xaler     |
|           17 |     1800 | 2026-02-28 | Life's A Game         | L   | 0.955      | -            | -                | -                | -         |    -7.02 | Andrew, brett, s3rum, Seb, xaler     |
|           16 |     1845 | 2026-02-27 | Sakura Esports        | W   | 0.949      | 0.143        | 0.021 (0.003)    | 0.054 (0.007)    | 0 (0.000) |    10.49 | Andrew, brett, s3rum, Seb, xaler     |
|           15 |     1898 | 2026-02-26 | BOSS                  | L   | 0.942      | -            | -                | -                | -         |    -8.15 | Andrew, brett, s3rum, Seb, xaler     |
|           14 |     2326 | 2026-02-18 | Life's A Game         | L   | 0.889      | -            | -                | -                | -         |    -6.91 | Andrew, brett, s3rum, Seb, xaler     |
|           13 |     2374 | 2026-02-17 | Smokepoint            | W   | 0.883      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.21 | Andrew, brett, s3rum, Seb, xaler     |
|           12 |     2653 | 2026-02-12 | FarmVille             | W   | 0.849      | 0.333        | 0.008 (0.002)    | 0.219 (0.062)    | 0 (0.000) |    11.86 | Andrew, brett, s3rum, Seb, xaler     |
|           11 |     2726 | 2026-02-10 | Zomblers              | L   | 0.836      | -            | -                | -                | -         |   -14.13 | Andrew, brett, s3rum, Seb, xaler     |
|           10 |     2818 | 2026-02-07 | OverKnight            | W   | 0.815      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     2.98 | Andrew, brett, s3rum, Seb, xaler     |
|            9 |     2960 | 2026-02-02 | Outfit 49             | W   | 0.783      | 0.333        | 0.008 (0.002)    | 0.311 (0.081)    | 0 (0.000) |     9.99 | Andrew, brett, s3rum, Seb, xaler     |
|            8 |     3739 | 2026-01-03 | Team Voca             | L   | 0.581      | -            | -                | -                | -         |    -0.64 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            7 |     3743 | 2026-01-03 | Dark Knight Esports   | W   | 0.580      | -            | -                | -                | 1 (0.580) |     2.26 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            6 |     3749 | 2026-01-03 | Team Voca             | L   | 0.580      | -            | -                | -                | -         |    -0.61 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            5 |     3936 | 2025-12-11 | Pulse (American team) | L   | 0.429      | -            | -                | -                | -         |   -10.40 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            4 |     3947 | 2025-12-10 | Wanted Goons          | W   | 0.423      | 0.333        | -                | 0.168 (0.024)    | -         |     4.07 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            3 |     3977 | 2025-12-08 | SkinRave Esports      | L   | 0.409      | -            | -                | -                | -         |    -5.37 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            2 |     4070 | 2025-12-04 | BOSS                  | L   | 0.382      | -            | -                | -                | -         |    -3.37 | Andrew, brett, LUKE4k, s3rum, sava9e |
|            1 |     4112 | 2025-12-02 | Life's A Game         | W   | 0.369      | 0.333        | 0.060 (0.007)    | 0.714 (0.088)    | -         |     8.57 | Andrew, brett, LUKE4k, s3rum, sava9e |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,000.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      1.000 | $2,000.00      | $2,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
