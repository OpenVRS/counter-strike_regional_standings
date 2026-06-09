### Roster Details<br />
Team Name: M80<br />
Roster: JBa, Lake, s1n, slaxz-, Swisher<br />
Global Rank: [33](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [7]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1385.7<br />
<br />
Final Rank Value (1385.7) = Starting Rank Value (1340.2) + Head To Head Adjustments (45.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.461[<sup>1</sup>](#table2)
- Bounty Collected: 0.462[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.850[<sup>2</sup>](#table1)

The average of these factors is 0.494<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1340.2
- 400 + ( ( 0.494 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1340.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.543
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           46 |      105 | 2026-05-28 | Team Voca                 | W   | 1.000      | -            | -                | -                | -         |    10.01 | JBa, Lake, s1n, slaxz-, Swisher |
|           45 |      178 | 2026-05-26 | Iowa Stormboar            | W   | 1.000      | -            | -                | -                | -         |     1.41 | JBa, Lake, s1n, slaxz-, Swisher |
|           44 |      416 | 2026-05-21 | MOUZ                      | L   | 1.000      | -            | -                | -                | -         |    -2.00 | JBa, Lake, s1n, slaxz-, Swisher |
|           43 |      447 | 2026-05-20 | Team Falcons              | L   | 1.000      | -            | -                | -                | -         |    -1.20 | JBa, Lake, s1n, slaxz-, Swisher |
|           42 |      453 | 2026-05-19 | PaiN Gaming               | W   | 1.000      | 1.000        | 0.251 (0.251)    | 0.401 (0.401)    | 1 (1.000) |    23.46 | JBa, Lake, s1n, slaxz-, Swisher |
|           41 |      644 | 2026-05-12 | Team Liquid               | L   | 1.000      | -            | -                | -                | -         |   -19.32 | JBa, Lake, s1n, slaxz-, Swisher |
|           40 |      686 | 2026-05-11 | Legacy                    | L   | 1.000      | -            | -                | -                | -         |    -2.63 | JBa, Lake, s1n, slaxz-, Swisher |
|           39 |      877 | 2026-05-03 | Wildcard                  | W   | 1.000      | 0.354        | 0.122 (0.043)    | 0.607 (0.215)    | -         |    16.87 | JBa, Lake, s1n, slaxz-, Swisher |
|           38 |      879 | 2026-05-03 | Zomblers                  | W   | 1.000      | 0.354        | -                | 0.436 (0.155)    | -         |     1.52 | JBa, Lake, s1n, slaxz-, Swisher |
|           37 |      913 | 2026-05-02 | Incognito (American team) | W   | 1.000      | -            | -                | -                | -         |     0.43 | JBa, Lake, s1n, slaxz-, Swisher |
|           36 |     1253 | 2026-04-25 | Marsborne                 | L   | 0.962      | -            | -                | -                | -         |   -26.19 | JBa, Lake, s1n, slaxz-, Swisher |
|           35 |     1267 | 2026-04-25 | Iowa Stormboar            | W   | 0.960      | -            | -                | -                | 1 (0.960) |     1.43 | JBa, Lake, s1n, slaxz-, Swisher |
|           34 |     1280 | 2026-04-25 | It's a Secret             | W   | 0.960      | -            | -                | -                | 1 (0.960) |     0.12 | JBa, Lake, s1n, slaxz-, Swisher |
|           33 |     2047 | 2026-04-02 | Monte                     | W   | 0.806      | 0.354        | 0.152 (0.043)    | -                | 1 (0.806) |    17.28 | JBa, Lake, s1n, slaxz-, Swisher |
|           32 |     2080 | 2026-04-02 | Alliance                  | W   | 0.805      | 0.354        | 0.100 (0.029)    | 0.841 (0.240)    | 1 (0.805) |    15.22 | JBa, Lake, s1n, slaxz-, Swisher |
|           31 |     2139 | 2026-04-01 | Monte                     | L   | 0.799      | -            | -                | -                | -         |    -7.44 | JBa, Lake, s1n, slaxz-, Swisher |
|           30 |     2224 | 2026-03-31 | Aurora Gaming             | W   | 0.793      | 0.354        | 0.607 (0.170)    | -                | 1 (0.793) |    23.16 | JBa, Lake, s1n, slaxz-, Swisher |
|           29 |     2287 | 2026-03-31 | Team Liquid               | W   | 0.791      | 0.354        | 0.137 (0.038)    | -                | 1 (0.791) |    11.59 | JBa, Lake, s1n, slaxz-, Swisher |
|           28 |     2331 | 2026-03-30 | BASEMENT BOYS             | W   | 0.785      | 0.354        | -                | 0.510 (0.142)    | 1 (0.785) |     5.28 | JBa, Lake, s1n, slaxz-, Swisher |
|           27 |     2551 | 2026-03-27 | HEROIC Academy            | L   | 0.766      | -            | -                | -                | -         |   -22.06 | JBa, Lake, s1n, slaxz-, Swisher |
|           26 |     2697 | 2026-03-24 | Johnny Speeds             | W   | 0.745      | 0.396        | 0.048 (0.014)    | 0.813 (0.240)    | 1 (0.745) |     8.13 | JBa, Lake, s1n, slaxz-, Swisher |
|           25 |     3307 | 2026-03-12 | Rebels Gaming             | L   | 0.665      | -            | -                | -                | -         |   -15.74 | JBa, Lake, s1n, slaxz-, Swisher |
|           24 |     3312 | 2026-03-12 | JiJieHao                  | L   | 0.665      | -            | -                | -                | -         |   -11.23 | JBa, Lake, s1n, slaxz-, Swisher |
|           23 |     3322 | 2026-03-12 | 9INE                      | W   | 0.664      | -            | -                | -                | 1 (0.664) |     4.39 | JBa, Lake, s1n, slaxz-, Swisher |
|           22 |     3324 | 2026-03-12 | Nebula In Chaox           | W   | 0.664      | -            | -                | -                | -         |     0.10 | JBa, Lake, s1n, slaxz-, Swisher |
|           21 |     3704 | 2026-03-04 | Team Liquid               | L   | 0.613      | -            | -                | -                | -         |   -11.09 | JBa, Lake, s1n, slaxz-, Swisher |
|           20 |     3755 | 2026-03-03 | G2 Esports                | L   | 0.606      | -            | -                | -                | -         |    -2.60 | JBa, Lake, s1n, slaxz-, Swisher |
|           19 |     3811 | 2026-03-02 | Ninjas in Pyjamas         | W   | 0.599      | 0.613        | 0.121 (0.044)    | 0.436 (0.160)    | -         |    10.95 | JBa, Lake, s1n, slaxz-, Swisher |
|           18 |     3850 | 2026-03-01 | FUT Esports               | L   | 0.592      | -            | -                | -                | -         |    -2.62 | JBa, Lake, s1n, slaxz-, Swisher |
|           17 |     4081 | 2026-02-24 | Team Voca                 | W   | 0.562      | 0.363        | 0.053 (0.011)    | 0.662 (0.135)    | -         |     6.18 | JBa, Lake, s1n, slaxz-, Swisher |
|           16 |     4171 | 2026-02-22 | Team Voca                 | W   | 0.548      | 0.363        | -                | 0.662 (0.132)    | -         |     6.21 | JBa, Lake, s1n, slaxz-, Swisher |
|           15 |     4299 | 2026-02-20 | SkinRave Esports          | W   | 0.535      | -            | -                | -                | -         |     0.47 | JBa, Lake, s1n, slaxz-, Swisher |
|           14 |     4399 | 2026-02-18 | Life's A Game             | W   | 0.522      | -            | -                | -                | -         |     4.15 | JBa, Lake, s1n, slaxz-, Swisher |
|           13 |     4462 | 2026-02-17 | Akimbo Esports            | W   | 0.515      | -            | -                | -                | -         |     0.42 | JBa, Lake, s1n, slaxz-, Swisher |
|           12 |     4898 | 2026-02-07 | Passion UA                | L   | 0.447      | -            | -                | -                | -         |    -8.19 | JBa, Lake, s1n, slaxz-, Swisher |
|           11 |     4926 | 2026-02-06 | Wildcard                  | W   | 0.441      | 0.769        | 0.122 (0.041)    | 0.607 (0.206)    | -         |     9.40 | JBa, Lake, s1n, slaxz-, Swisher |
|           10 |     5670 | 2026-01-15 | Gentle Mates              | L   | 0.291      | -            | -                | -                | -         |    -3.83 | JBa, Lake, s1n, slaxz-, Swisher |
|            9 |     5724 | 2026-01-11 | NRG                       | W   | 0.268      | -            | -                | -                | -         |     2.92 | JBa, Lake, s1n, slaxz-, Swisher |
|            8 |     5726 | 2026-01-11 | Team Voca                 | W   | 0.266      | -            | -                | -                | -         |     3.19 | JBa, Lake, s1n, slaxz-, Swisher |
|            7 |     5735 | 2026-01-10 | BOSS                      | W   | 0.260      | -            | -                | -                | -         |     0.21 | JBa, Lake, s1n, slaxz-, Swisher |
|            6 |     5744 | 2026-01-09 | Regain                    | W   | 0.256      | -            | -                | -                | -         |     0.32 | JBa, Lake, s1n, slaxz-, Swisher |
|            5 |     5766 | 2026-01-04 | GamerLegion               | L   | 0.221      | -            | -                | -                | -         |    -0.68 | JBa, Lake, s1n, slaxz-, Swisher |
|            4 |     5770 | 2026-01-04 | 9INE                      | L   | 0.220      | -            | -                | -                | -         |    -6.27 | JBa, Lake, s1n, slaxz-, Swisher |
|            3 |     5786 | 2026-01-04 | Marsborne                 | W   | 0.219      | -            | -                | -                | -         |     1.19 | JBa, Lake, s1n, slaxz-, Swisher |
|            2 |     5823 | 2026-01-03 | Team Voca                 | W   | 0.213      | -            | -                | -                | -         |     2.62 | JBa, Lake, s1n, slaxz-, Swisher |
|            1 |     5829 | 2026-01-03 | Dark Knight Esports       | W   | 0.212      | -            | -                | -                | -         |     0.03 | JBa, Lake, s1n, slaxz-, Swisher |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42,453.13)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-23 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-05-17 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-05-03 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-04-02 |      0.806 | $7,500.00      | $6,044.44       |
| 2026-03-28 |      0.773 | $2,500.00      | $1,931.25       |
| 2026-03-05 |      0.619 | $4,500.00      | $2,787.40       |
| 2026-02-24 |      0.562 | $8,000.00      | $4,493.33       |
| 2026-01-18 |      0.313 | $7,500.00      | $2,346.01       |
| 2026-01-11 |      0.268 | $12,500.00     | $3,350.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
