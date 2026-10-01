### Roster Details<br />
Team Name: Wanted Goons<br />
Roster: hibui, Johan, killerPandas, Magic, relt<br />
Global Rank: [278](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [63]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  642.9<br />
<br />
Final Rank Value (642.9) = Starting Rank Value (704.2) + Head To Head Adjustments (-61.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.218[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.170[<sup>2</sup>](#table1)

The average of these factors is 0.157<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.2
- 400 + ( ( 0.157 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 704.2


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
|           24 |      710 | 2026-06-30 | Overtake Sector | L   | 0.976      | -            | -                | -                | -         |   -15.47 | febreeze, hibui, Johan, killerPandas, Magic   |
|           23 |      987 | 2026-06-13 | Olympus         | L   | 0.863      | -            | -                | -                | -         |   -17.99 | hibui, Johan, killerPandas, Magic, relt       |
|           22 |      992 | 2026-06-13 | DETONATE        | L   | 0.861      | -            | -                | -                | -         |   -14.76 | hibui, Johan, killerPandas, Magic, relt       |
|           21 |     1036 | 2026-06-12 | NuTorious       | W   | 0.857      | 0.303        | 0.004 (0.001)    | 0.299 (0.078)    | 0 (0.000) |    17.98 | hibui, Johan, killerPandas, Magic, relt       |
|           20 |     1043 | 2026-06-12 | NuTorious       | W   | 0.855      | 0.143        | 0.004 (0.001)    | 0.299 (0.037)    | 0 (0.000) |    19.17 | hibui, Johan, killerPandas, Magic, relt       |
|           19 |     1071 | 2026-06-11 | Overtake Sector | L   | 0.850      | -            | -                | -                | -         |   -14.20 | hibui, Johan, killerPandas, Magic, relt       |
|           18 |     1171 | 2026-06-06 | Brahmas         | L   | 0.816      | -            | -                | -                | -         |   -15.20 | hibui, Johan, killerPandas, Magic, relt       |
|           17 |     1345 | 2026-05-30 | LAG             | L   | 0.768      | -            | -                | -                | -         |    -5.65 | febreeze, hibui, Johan, killerPandas, Magic   |
|           16 |     1349 | 2026-05-30 | NineFly         | W   | 0.768      | 0.294        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.768) |     3.83 | febreeze, hibui, Johan, killerPandas, Magic   |
|           15 |     1355 | 2026-05-30 | Reign Above     | L   | 0.767      | -            | -                | -                | -         |   -13.21 | febreeze, hibui, Johan, killerPandas, Magic   |
|           14 |     2456 | 2026-04-28 | regain          | L   | 0.556      | -            | -                | -                | -         |    -7.19 | febreeze, hibui, Johan, killerPandas, Magic   |
|           13 |     2493 | 2026-04-27 | EMPIRE          | W   | 0.550      | 0.363        | 0.001 (0.000)    | 0.142 (0.028)    | 0 (0.000) |     8.24 | febreeze, hibui, Johan, killerPandas, Magic   |
|           12 |     2544 | 2026-04-26 | Wildcard        | L   | 0.542      | -            | -                | -                | -         |    -0.45 | febreeze, hibui, Johan, killerPandas, Magic   |
|           11 |     3806 | 2026-03-28 | BOSS            | L   | 0.349      | -            | -                | -                | -         |    -4.69 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|           10 |     3827 | 2026-03-28 | EMPIRE          | W   | 0.348      | 0.354        | 0.001 (0.000)    | 0.142 (0.017)    | 1 (0.348) |     5.60 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            9 |     3847 | 2026-03-28 | Zealous         | W   | 0.347      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.347) |     1.75 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            8 |     3857 | 2026-03-28 | EMPIRE          | L   | 0.346      | -            | -                | -                | -         |    -5.38 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            7 |     4084 | 2026-03-23 | NuTorious       | L   | 0.317      | -            | -                | -                | -         |    -2.69 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            6 |     4163 | 2026-03-22 | Zomblers        | W   | 0.310      | 0.363        | 0.008 (0.001)    | 0.259 (0.029)    | 0 (0.000) |     4.95 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            5 |     4204 | 2026-03-21 | FlyQuest RED    | W   | 0.303      | 0.363        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.21 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            4 |     4266 | 2026-03-20 | LAG             | L   | 0.297      | -            | -                | -                | -         |    -1.71 | Jbreezy, Johan, killerPandas, LUKE4k, Magic   |
|            3 |     4458 | 2026-03-16 | EMPIRE          | L   | 0.270      | -            | -                | -                | -         |    -4.35 | Jbreezy, JDubs, Johan, killerPandas, Magic    |
|            2 |     4502 | 2026-03-15 | Desi Boyz       | W   | 0.263      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | febreeze, Jbreezy, Johan, killerPandas, Magic |
|            1 |     4844 | 2026-03-08 | LAG             | L   | 0.216      | -            | -                | -                | -         |    -3.33 | febreeze, Jbreezy, Johan, killerPandas, Magic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($130.27)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.868 | $150.00        | $130.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
