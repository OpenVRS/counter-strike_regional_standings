### Roster Details<br />
Team Name: OverKnight<br />
Roster: 4TAYLOR, AMC, b1, Majesticzz, spamzzy<br />
Global Rank: [295](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [81]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  554.8<br />
<br />
Final Rank Value (554.8) = Starting Rank Value (604.5) + Head To Head Adjustments (-49.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.180[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.5
- 400 + ( ( 0.105 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 604.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.090
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      276 | 2026-03-22 | F5 Esports                | L   | 1.000      | -            | -                | -                | -         |    -8.68 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           31 |      307 | 2026-03-21 | Chicken Coop Esports      | L   | 1.000      | -            | -                | -                | -         |    -9.34 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           30 |      365 | 2026-03-20 | Mythic                    | W   | 1.000      | 0.363        | 0.001 (0.000)    | 0.056 (0.020)    | 0 (0.000) |    17.34 | 4TAYLOR, AMC, cruzN, Majesticzz, points        |
|           29 |     1828 | 2026-02-18 | InControl                 | L   | 0.940      | -            | -                | -                | -         |    -9.88 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           28 |     1884 | 2026-02-17 | FlyQuest RED              | L   | 0.934      | -            | -                | -                | -         |   -12.00 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           27 |     2048 | 2026-02-14 | Life's A Game             | L   | 0.913      | -            | -                | -                | -         |    -4.02 | 4TAYLOR, AMC, Majesticzz, SecretAgent, spamzzy |
|           26 |     2156 | 2026-02-12 | Blitzkrieg (Mexican team) | L   | 0.901      | -            | -                | -                | -         |   -16.21 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           25 |     2198 | 2026-02-11 | FarmVille                 | L   | 0.894      | -            | -                | -                | -         |    -9.99 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           24 |     2324 | 2026-02-07 | Team Aether               | L   | 0.866      | -            | -                | -                | -         |    -8.39 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           23 |     2386 | 2026-02-05 | Zomblers                  | L   | 0.854      | -            | -                | -                | -         |   -10.65 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |
|           22 |     2411 | 2026-02-04 | F5 Esports                | W   | 0.847      | 0.333        | 0.002 (0.001)    | 0.213 (0.060)    | 0 (0.000) |    19.80 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           21 |     2432 | 2026-02-03 | Outfit 49                 | L   | 0.840      | -            | -                | -                | -         |   -10.73 | 4TAYLOR, AMC, Majesticzz, spamzzy, vanilla     |
|           20 |     4167 | 2025-11-10 | BOSS                      | L   | 0.274      | -            | -                | -                | -         |    -1.38 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           19 |     4618 | 2025-10-28 | Marsborne                 | L   | 0.187      | -            | -                | -                | -         |    -0.19 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           18 |     4650 | 2025-10-27 | Outfit 49                 | W   | 0.180      | 0.363        | 0.008 (0.000)    | 0.337 (0.022)    | 0 (0.000) |     3.55 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           17 |     4694 | 2025-10-26 | Sakura Esports            | W   | 0.174      | 0.363        | 0.022 (0.001)    | 0.063 (0.004)    | 0 (0.000) |     3.70 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           16 |     4699 | 2025-10-26 | Outfit 49                 | W   | 0.173      | 0.333        | 0.000 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     1.95 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           15 |     4750 | 2025-10-25 | Life's A Game             | L   | 0.167      | -            | -                | -                | -         |    -0.80 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           14 |     4751 | 2025-10-25 | NYX (American team)       | W   | 0.167      | -            | -                | -                | 0 (0.000) |     1.23 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           13 |     4808 | 2025-10-24 | SkinRave Esports          | L   | 0.160      | -            | -                | -                | -         |    -1.30 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           12 |     4871 | 2025-10-23 | Zomblers                  | W   | 0.153      | 0.363        | 0.003 (0.000)    | 0.279 (0.016)    | 0 (0.000) |     2.95 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           11 |     4932 | 2025-10-21 | Sakura Esports            | W   | 0.141      | 0.333        | 0.022 (0.001)    | 0.063 (0.003)    | 0 (0.000) |     3.11 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|           10 |     4998 | 2025-10-17 | Nocturnal Esports         | W   | 0.113      | -            | -                | -                | 0 (0.000) |     0.86 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            9 |     5135 | 2025-10-13 | BOSS                      | L   | 0.087      | -            | -                | -                | -         |    -0.39 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            8 |     5229 | 2025-10-09 | Team Kiri                 | L   | 0.060      | -            | -                | -                | -         |    -1.21 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            7 |     5274 | 2025-10-08 | Team Voca                 | L   | 0.053      | -            | -                | -                | -         |    -0.67 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            6 |     5390 | 2025-10-06 | BOSS                      | W   | 0.040      | 0.363        | 0.009 (0.000)    | 0.296 (0.004)    | 0 (0.000) |     1.08 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            5 |     5451 | 2025-10-05 | Team Kiri                 | W   | 0.033      | 0.363        | -                | 0.021 (0.000)    | -         |     0.38 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            4 |     5455 | 2025-10-05 | Team Voca                 | L   | 0.033      | -            | -                | -                | -         |    -0.41 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            3 |     5510 | 2025-10-04 | Sakura Esports            | W   | 0.027      | 0.333        | 0.022 (0.000)    | 0.063 (0.001)    | -         |     0.59 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            2 |     5586 | 2025-10-02 | Regain                    | L   | 0.013      | -            | -                | -                | -         |    -0.17 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |
|            1 |     5625 | 2025-10-01 | Sakura Esports            | W   | 0.007      | 0.333        | 0.022 (0.000)    | -                | -         |     0.15 | 4TAYLOR, AMC, b1, Majesticzz, spamzzy          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13.19)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-08 |      0.053 | $250.00        | $13.19          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
