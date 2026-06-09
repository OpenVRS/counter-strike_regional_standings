### Roster Details<br />
Team Name: Akimbo Esports<br />
Roster: laxiee, Marro, mason, N2o, obi<br />
Global Rank: [201](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  749.1<br />
<br />
Final Rank Value (749.1) = Starting Rank Value (700.5) + Head To Head Adjustments (48.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.158<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 700.5
- 400 + ( ( 0.158 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 700.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.143
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     1460 | 2026-04-19 | Insane players            | L   | 0.921      | -            | -                | -                | -         |   -12.75 | laxiee, Marro, mason, N2o, obi   |
|           15 |     1492 | 2026-04-18 | Regain                    | W   | 0.914      | 0.333        | 0.012 (0.004)    | 0.473 (0.144)    | 0 (0.000) |    16.88 | laxiee, Marro, mason, N2o, obi   |
|           14 |     1522 | 2026-04-16 | Incognito (American team) | W   | 0.901      | 0.333        | 0.000 (0.000)    | 0.149 (0.045)    | 0 (0.000) |     7.78 | laxiee, Marro, mason, N2o, obi   |
|           13 |     1586 | 2026-04-12 | Team Voca                 | L   | 0.875      | -            | -                | -                | -         |    -1.42 | laxiee, Marro, mason, N2o, obi   |
|           12 |     1640 | 2026-04-10 | Incognito (American team) | W   | 0.861      | 0.333        | 0.000 (0.000)    | 0.149 (0.043)    | 0 (0.000) |     7.44 | laxiee, Marro, mason, N2o, obi   |
|           11 |     1644 | 2026-04-10 | FarmVille                 | W   | 0.860      | 0.333        | 0.007 (0.002)    | 0.357 (0.102)    | 0 (0.000) |    16.28 | laxiee, Marro, mason, N2o, obi   |
|           10 |     1667 | 2026-04-09 | Iowa Stormboar            | W   | 0.854      | 0.333        | 0.013 (0.004)    | 0.367 (0.104)    | 0 (0.000) |    18.00 | laxiee, Marro, mason, N2o, obi   |
|            9 |     1752 | 2026-04-06 | Regain                    | L   | 0.835      | -            | -                | -                | -         |    -9.49 | laxiee, Marro, mason, N2o, obi   |
|            8 |     1758 | 2026-04-06 | FarmVille                 | L   | 0.834      | -            | -                | -                | -         |   -10.04 | laxiee, Marro, mason, N2o, obi   |
|            7 |     1855 | 2026-04-04 | FarmVille                 | W   | 0.821      | 0.333        | 0.007 (0.002)    | 0.357 (0.098)    | 0 (0.000) |    15.78 | laxiee, Marro, mason, N2o, obi   |
|            6 |     2211 | 2026-03-31 | BOSS                      | W   | 0.794      | 0.333        | 0.003 (0.001)    | 0.286 (0.076)    | 0 (0.000) |    19.48 | laxiee, Marro, mason, N2o, obi   |
|            5 |     2612 | 2026-03-25 | Regain                    | L   | 0.755      | -            | -                | -                | -         |   -10.05 | laxiee, Marro, mason, N2o, obi   |
|            4 |     4355 | 2026-02-19 | FlyQuest RED              | L   | 0.528      | -            | -                | -                | -         |   -10.80 | Marro, N2o, obi, Oczarka, Zamgaa |
|            3 |     4403 | 2026-02-18 | Regain                    | W   | 0.522      | 0.363        | 0.012 (0.002)    | 0.473 (0.089)    | 0 (0.000) |     9.63 | Marro, N2o, obi, Oczarka, Zamgaa |
|            2 |     4462 | 2026-02-17 | M80                       | L   | 0.515      | -            | -                | -                | -         |    -0.42 | Marro, N2o, obi, Oczarka, Zamgaa |
|            1 |     4623 | 2026-02-14 | BOSS                      | L   | 0.493      | -            | -                | -                | -         |    -7.67 | AJ, Marro, N2o, obi, Oczarka     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,985.24)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.921 | $3,000.00      | $2,763.33       |
| 2026-04-14 |      0.888 | $250.00        | $221.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
