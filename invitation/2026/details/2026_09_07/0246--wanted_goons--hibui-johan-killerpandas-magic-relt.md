### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: hibui, Johan, killerPandas, Magic, relt<br />
Global Rank: [246](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [55]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  652.1<br />
<br />
Final Rank Value (652.1) = Starting Rank Value (697.6) + Head To Head Adjustments (-45.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.196[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.6
- 400 + ( ( 0.156 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 697.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      274 | 2026-08-30 | For Fun         | L   | 1.000      | -            | -                | -                | -         |    -9.41 | febreeze, hibui, Johan, killerPandas, Magic   |
|           25 |      324 | 2026-08-29 | Without a Roof  | L   | 1.000      | -            | -                | -                | -         |   -10.58 | febreeze, hibui, Johan, killerPandas, Magic   |
|           24 |      327 | 2026-08-29 | NuTorious       | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.195 (0.065)    | 1 (1.000) |    17.61 | febreeze, hibui, Johan, killerPandas, Magic   |
|           23 |     1945 | 2026-06-30 | Overtake Sector | L   | 0.735      | -            | -                | -                | -         |   -10.94 | febreeze, hibui, Johan, killerPandas, Magic   |
|           22 |     2222 | 2026-06-13 | Olympus         | L   | 0.622      | -            | -                | -                | -         |   -13.68 | hibui, Johan, killerPandas, Magic, relt       |
|           21 |     2227 | 2026-06-13 | DETONATE        | L   | 0.621      | -            | -                | -                | -         |    -9.53 | hibui, Johan, killerPandas, Magic, relt       |
|           20 |     2271 | 2026-06-12 | NuTorious       | W   | 0.616      | 0.303        | 0.002 (0.000)    | 0.195 (0.036)    | 0 (0.000) |    12.15 | hibui, Johan, killerPandas, Magic, relt       |
|           19 |     2278 | 2026-06-12 | NuTorious       | W   | 0.615      | 0.143        | 0.002 (0.000)    | 0.195 (0.017)    | 0 (0.000) |    12.76 | hibui, Johan, killerPandas, Magic, relt       |
|           18 |     2306 | 2026-06-11 | Overtake Sector | L   | 0.609      | -            | -                | -                | -         |    -9.25 | hibui, Johan, killerPandas, Magic, relt       |
|           17 |     2406 | 2026-06-06 | Brahmas         | L   | 0.576      | -            | -                | -                | -         |   -11.17 | hibui, Johan, killerPandas, Magic, relt       |
|           16 |     2580 | 2026-05-30 | LAG             | L   | 0.528      | -            | -                | -                | -         |    -2.48 | febreeze, hibui, Johan, killerPandas, Magic   |
|           15 |     2584 | 2026-05-30 | NineFly         | W   | 0.527      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.527) |     2.70 | febreeze, hibui, Johan, killerPandas, Magic   |
|           14 |     2590 | 2026-05-30 | Reign Above     | L   | 0.526      | -            | -                | -                | -         |   -10.56 | febreeze, hibui, Johan, killerPandas, Magic   |
|           13 |     3691 | 2026-04-28 | regain          | L   | 0.315      | -            | -                | -                | -         |    -4.02 | febreeze, hibui, Johan, killerPandas, Magic   |
|           12 |     3728 | 2026-04-27 | EMPIRE          | W   | 0.309      | 0.363        | 0.000 (0.000)    | 0.043 (0.005)    | 0 (0.000) |     3.92 | febreeze, hibui, Johan, killerPandas, Magic   |
|           11 |     3779 | 2026-04-26 | Wildcard        | L   | 0.302      | -            | -                | -                | -         |    -0.87 | febreeze, hibui, Johan, killerPandas, Magic   |
|           10 |     5041 | 2026-03-28 | BOSS            | L   | 0.108      | -            | -                | -                | -         |    -1.96 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            9 |     5062 | 2026-03-28 | EMPIRE          | W   | 0.107      | 0.354        | 0.000 (0.000)    | 0.043 (0.002)    | 1 (0.107) |     1.38 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            8 |     5082 | 2026-03-28 | Zealous         | W   | 0.106      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.106) |     0.54 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            7 |     5092 | 2026-03-28 | EMPIRE          | L   | 0.106      | -            | -                | -                | -         |    -1.98 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            6 |     5319 | 2026-03-23 | NuTorious       | L   | 0.076      | -            | -                | -                | -         |    -0.80 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            5 |     5398 | 2026-03-22 | Zomblers        | W   | 0.069      | 0.363        | 0.006 (0.000)    | 0.208 (0.005)    | 0 (0.000) |     1.01 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            4 |     5439 | 2026-03-21 | FlyQuest RED    | W   | 0.062      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.31 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            3 |     5501 | 2026-03-20 | LAG             | L   | 0.056      | -            | -                | -                | -         |    -0.21 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            2 |     5693 | 2026-03-16 | EMPIRE          | L   | 0.029      | -            | -                | -                | -         |    -0.55 | Jbreezy, JDubs, Johan, killerPandas, Magic    |
|            1 |     5737 | 2026-03-15 | Desi Boyz       | W   | 0.023      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.11 | febreeze, Jbreezy, Johan, killerPandas, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94.16)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.628 | $150.00        | $94.16          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
