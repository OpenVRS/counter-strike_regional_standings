### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, marekiew, SLIGHT, WUMBO<br />
Global Rank: [132](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_05.md)<br />
Regional Rank: [26]( ../../standings_americas_2026_04_05.md)<br />
<br />
Final Rank Value:  932.6<br />
<br />
Final Rank Value (932.6) = Starting Rank Value (920.9) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.327[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.066[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 920.9
- 400 + ( ( 0.266 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 920.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.269
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      327 | 2026-03-29 | Life's A Game                    | W   | 1.000      | 0.354        | 0.027 (0.010)    | 0.679 (0.241)    | 1 (1.000) |    15.97 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           40 |      349 | 2026-03-29 | Team Voca                        | L   | 1.000      | -            | -                | -                | -         |    -3.20 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           39 |      384 | 2026-03-28 | Wanted Goons                     | W   | 1.000      | 0.354        | -                | 0.168 (0.059)    | 1 (1.000) |     5.37 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           38 |      420 | 2026-03-28 | NuTorious                        | W   | 1.000      | 0.354        | -                | 0.061 (0.022)    | 1 (1.000) |     2.71 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           37 |      433 | 2026-03-28 | Demolition (North American team) | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.19 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           36 |      639 | 2026-03-23 | Chicanery                        | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.67 | ben1337, Bwills, marekiew, SLIGHT, WUMBO  |
|           35 |     1779 | 2026-02-28 | Life's A Game                    | L   | 0.956      | -            | -                | -                | -         |   -13.22 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           34 |     1783 | 2026-02-28 | Fisher College                   | W   | 0.955      | 0.143        | 0.008 (0.001)    | 0.324 (0.044)    | 0 (0.000) |    14.70 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           33 |     1823 | 2026-02-27 | Wildcard                         | L   | 0.950      | -            | -                | -                | -         |    -9.21 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           32 |     1880 | 2026-02-26 | Team Aether                      | W   | 0.942      | 0.143        | 0.004 (0.001)    | 0.260 (0.035)    | 0 (0.000) |     8.46 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           31 |     2082 | 2026-02-22 | BC.Game Esports                  | L   | 0.914      | -            | -                | -                | -         |    -2.53 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           30 |     2096 | 2026-02-22 | MASONIC                          | L   | 0.913      | -            | -                | -                | -         |   -10.73 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           29 |     2106 | 2026-02-22 | Illwill                          | L   | 0.913      | -            | -                | -                | -         |    -2.54 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           28 |     2121 | 2026-02-22 | Sashi Esport                     | L   | 0.912      | -            | -                | -                | -         |    -4.09 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           27 |     2128 | 2026-02-22 | 9INE                             | L   | 0.912      | -            | -                | -                | -         |    -2.74 | ben1337, Bwills, FaNg, SLIGHT, stanislaw  |
|           26 |     3788 | 2025-12-19 | Team Voca                        | L   | 0.482      | -            | -                | -                | -         |    -1.35 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           25 |     3827 | 2025-12-17 | Regain                           | W   | 0.469      | 0.333        | 0.003 (0.000)    | 0.210 (0.033)    | 0 (0.000) |     2.94 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           24 |     3852 | 2025-12-16 | Life's A Game                    | W   | 0.462      | 0.333        | 0.027 (0.004)    | 0.679 (0.105)    | 0 (0.000) |     6.83 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           23 |     3941 | 2025-12-08 | Take Flyte                       | W   | 0.410      | -            | -                | -                | 0 (0.000) |     1.15 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           22 |     4036 | 2025-12-04 | Team Aether                      | W   | 0.382      | 0.333        | 0.004 (0.001)    | 0.260 (0.033)    | -         |     3.45 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           21 |     4092 | 2025-12-01 | Pulse (American team)            | W   | 0.362      | -            | -                | -                | -         |     0.60 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           20 |     4486 | 2025-11-16 | SkinRave Esports                 | L   | 0.260      | -            | -                | -                | -         |    -5.35 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           19 |     4502 | 2025-11-15 | Regain                           | W   | 0.254      | 0.303        | 0.003 (0.000)    | -                | -         |     1.58 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           18 |     4575 | 2025-11-12 | Marsborne                        | L   | 0.236      | -            | -                | -                | -         |    -0.91 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           17 |     4608 | 2025-11-11 | Life's A Game                    | W   | 0.229      | 0.363        | 0.027 (0.002)    | 0.679 (0.056)    | -         |     3.57 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           16 |     4636 | 2025-11-10 | OverKnight                       | W   | 0.223      | -            | -                | -                | -         |     0.71 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           15 |     5046 | 2025-10-30 | Marsborne                        | L   | 0.149      | -            | -                | -                | -         |    -0.55 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           14 |     5065 | 2025-10-29 | Life's A Game                    | W   | 0.142      | 0.333        | 0.027 (0.001)    | 0.679 (0.032)    | -         |     2.27 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           13 |     5120 | 2025-10-27 | Chicanery                        | W   | 0.129      | -            | -                | -                | -         |     0.34 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           12 |     5164 | 2025-10-26 | Ghost Gaming                     | W   | 0.123      | -            | -                | -                | -         |     0.55 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           11 |     5222 | 2025-10-25 | Ex-Arrival Seven                 | W   | 0.116      | -            | -                | -                | -         |     0.19 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|           10 |     5236 | 2025-10-25 | Team Voca                        | L   | 0.114      | -            | -                | -                | -         |    -2.86 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            9 |     5274 | 2025-10-24 | Mythic                           | L   | 0.109      | -            | -                | -                | -         |    -2.84 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            8 |     5284 | 2025-10-24 | MONEY CREW                       | W   | 0.108      | -            | -                | -                | -         |     0.28 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            7 |     5386 | 2025-10-22 | Team Voca                        | L   | 0.095      | -            | -                | -                | -         |    -2.42 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            6 |     5470 | 2025-10-17 | Sakura Esports                   | W   | 0.061      | 0.333        | 0.021 (0.000)    | -                | -         |     0.54 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            5 |     5533 | 2025-10-15 | Team Voca                        | L   | 0.049      | -            | -                | -                | -         |    -1.24 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            4 |     5572 | 2025-10-14 | Phoenix (American team)          | W   | 0.042      | -            | -                | -                | -         |     0.10 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            3 |     5604 | 2025-10-13 | OverKnight                       | W   | 0.035      | -            | -                | -                | -         |     0.10 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            2 |     5697 | 2025-10-09 | Life's A Game                    | W   | 0.009      | -            | -                | -                | -         |     0.14 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |
|            1 |     5746 | 2025-10-08 | Zomblers                         | W   | 0.002      | -            | -                | -                | -         |     0.02 | ben1337, Bwills, d4rty, Fruitcupx, SLIGHT |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,045.96)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $1,950.00      | $1,950.00       |
| 2025-12-19 |      0.482 | $3,000.00      | $1,447.40       |
| 2025-11-15 |      0.256 | $1,500.00      | $383.91         |
| 2025-11-05 |      0.189 | $1,000.00      | $188.99         |
| 2025-10-19 |      0.076 | $1,000.00      | $75.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
