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
Final Rank Value (652.1) = Starting Rank Value (698.2) + Head To Head Adjustments (-46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.197[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 698.2
- 400 + ( ( 0.157 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 698.2


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
|           26 |      246 | 2026-08-30 | For Fun         | L   | 1.000      | -            | -                | -                | -         |    -9.45 | febreeze, hibui, Johan, killerPandas, Magic   |
|           25 |      296 | 2026-08-29 | Without a Roof  | L   | 1.000      | -            | -                | -                | -         |   -10.62 | febreeze, hibui, Johan, killerPandas, Magic   |
|           24 |      299 | 2026-08-29 | NuTorious       | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.196 (0.065)    | 1 (1.000) |    17.62 | febreeze, hibui, Johan, killerPandas, Magic   |
|           23 |     1917 | 2026-06-30 | Overtake Sector | L   | 0.741      | -            | -                | -                | -         |   -11.03 | febreeze, hibui, Johan, killerPandas, Magic   |
|           22 |     2194 | 2026-06-13 | Olympus         | L   | 0.627      | -            | -                | -                | -         |   -13.79 | hibui, Johan, killerPandas, Magic, relt       |
|           21 |     2199 | 2026-06-13 | DETONATE        | L   | 0.626      | -            | -                | -                | -         |    -9.63 | hibui, Johan, killerPandas, Magic, relt       |
|           20 |     2243 | 2026-06-12 | NuTorious       | W   | 0.621      | 0.303        | 0.002 (0.000)    | 0.196 (0.037)    | 0 (0.000) |    12.26 | hibui, Johan, killerPandas, Magic, relt       |
|           19 |     2250 | 2026-06-12 | NuTorious       | W   | 0.620      | 0.143        | 0.002 (0.000)    | 0.196 (0.017)    | 0 (0.000) |    12.88 | hibui, Johan, killerPandas, Magic, relt       |
|           18 |     2278 | 2026-06-11 | Overtake Sector | L   | 0.615      | -            | -                | -                | -         |    -9.34 | hibui, Johan, killerPandas, Magic, relt       |
|           17 |     2378 | 2026-06-06 | Brahmas         | L   | 0.581      | -            | -                | -                | -         |   -11.28 | hibui, Johan, killerPandas, Magic, relt       |
|           16 |     2552 | 2026-05-30 | LAG             | L   | 0.533      | -            | -                | -                | -         |    -2.53 | febreeze, hibui, Johan, killerPandas, Magic   |
|           15 |     2556 | 2026-05-30 | NineFly         | W   | 0.532      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.532) |     2.72 | febreeze, hibui, Johan, killerPandas, Magic   |
|           14 |     2562 | 2026-05-30 | Reign Above     | L   | 0.532      | -            | -                | -                | -         |   -10.66 | febreeze, hibui, Johan, killerPandas, Magic   |
|           13 |     3663 | 2026-04-28 | regain          | L   | 0.321      | -            | -                | -                | -         |    -4.09 | febreeze, hibui, Johan, killerPandas, Magic   |
|           12 |     3700 | 2026-04-27 | EMPIRE          | W   | 0.314      | 0.363        | 0.000 (0.000)    | 0.044 (0.005)    | 0 (0.000) |     4.00 | febreeze, hibui, Johan, killerPandas, Magic   |
|           11 |     3751 | 2026-04-26 | Wildcard        | L   | 0.307      | -            | -                | -                | -         |    -0.87 | febreeze, hibui, Johan, killerPandas, Magic   |
|           10 |     5013 | 2026-03-28 | BOSS            | L   | 0.114      | -            | -                | -                | -         |    -2.05 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            9 |     5034 | 2026-03-28 | EMPIRE          | W   | 0.112      | 0.354        | 0.000 (0.000)    | 0.044 (0.002)    | 1 (0.112) |     1.45 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            8 |     5054 | 2026-03-28 | Zealous         | W   | 0.112      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.112) |     0.56 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            7 |     5064 | 2026-03-28 | EMPIRE          | L   | 0.111      | -            | -                | -                | -         |    -2.08 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            6 |     5291 | 2026-03-23 | NuTorious       | L   | 0.081      | -            | -                | -                | -         |    -0.85 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            5 |     5370 | 2026-03-22 | Zomblers        | W   | 0.075      | 0.363        | 0.006 (0.000)    | 0.209 (0.006)    | 0 (0.000) |     1.09 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            4 |     5411 | 2026-03-21 | FlyQuest RED    | W   | 0.068      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.34 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            3 |     5473 | 2026-03-20 | LAG             | L   | 0.061      | -            | -                | -                | -         |    -0.23 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            2 |     5665 | 2026-03-16 | EMPIRE          | L   | 0.034      | -            | -                | -                | -         |    -0.65 | Jbreezy, JDubs, Johan, killerPandas, Magic    |
|            1 |     5709 | 2026-03-15 | Desi Boyz       | W   | 0.028      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.14 | febreeze, Jbreezy, Johan, killerPandas, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($94.98)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.633 | $150.00        | $94.98          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
