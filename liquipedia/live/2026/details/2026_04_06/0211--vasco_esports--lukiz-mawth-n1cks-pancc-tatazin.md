### Roster Details<br />
Team Name: Vasco eSports<br />
Roster: lukiz, mawth, n1cks, pancc, tatazin<br />
Global Rank: [211](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [51]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  723.3<br />
<br />
Final Rank Value (723.3) = Starting Rank Value (727.8) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.168<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.8
- 400 + ( ( 0.168 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 727.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.272
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      770 | 2026-03-21 | Guará eSports          | L   | 1.000      | -            | -                | -                | -         |   -22.42 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           33 |      829 | 2026-03-20 | Game Hunters           | L   | 1.000      | -            | -                | -                | -         |    -9.90 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           32 |     1503 | 2026-03-06 | FURIA Female           | L   | 0.995      | -            | -                | -                | -         |   -20.09 | lukiz, mawth, n1cks, pancc, tatazin      |
|           31 |     1579 | 2026-03-05 | Crashers               | L   | 0.986      | -            | -                | -                | -         |   -21.93 | lukiz, mawth, n1cks, pancc, tatazin      |
|           30 |     1649 | 2026-03-03 | Bounty Hunters Esports | L   | 0.975      | -            | -                | -                | -         |    -5.26 | lukiz, mawth, n1cks, pancc, tatazin      |
|           29 |     1711 | 2026-03-02 | Keyd Stars             | L   | 0.966      | -            | -                | -                | -         |   -15.56 | lukiz, mawth, n1cks, pancc, tatazin      |
|           28 |     1757 | 2026-03-01 | Bad Luck               | W   | 0.960      | 0.371        | 0.000 (0.000)    | 0.106 (0.038)    | 0 (0.000) |     5.16 | lukiz, mawth, n1cks, pancc, tatazin      |
|           27 |     1785 | 2026-02-28 | Isurus                 | L   | 0.955      | -            | -                | -                | -         |    -4.65 | lukiz, mawth, n1cks, pancc, tatazin      |
|           26 |     1914 | 2026-02-26 | Crashers               | W   | 0.939      | 0.371        | 0.000 (0.000)    | 0.303 (0.105)    | 0 (0.000) |     6.72 | lukiz, mawth, n1cks, pancc, tatazin      |
|           25 |     2013 | 2026-02-24 | Game Hunters           | L   | 0.926      | -            | -                | -                | -         |   -12.28 | lukiz, mawth, n1cks, pancc, tatazin      |
|           24 |     2084 | 2026-02-22 | UNO MILLE              | W   | 0.914      | 0.371        | 0.010 (0.004)    | 0.375 (0.127)    | 0 (0.000) |    13.09 | lukiz, mawth, n1cks, pancc, tatazin      |
|           23 |     2637 | 2026-02-12 | RED Canids             | L   | 0.847      | -            | -                | -                | -         |    -1.47 | lukiz, mawth, n1cks, pancc, tatazin      |
|           22 |     2706 | 2026-02-10 | ShindeN                | W   | 0.835      | 0.371        | 0.071 (0.022)    | 0.581 (0.180)    | 0 (0.000) |    25.19 | lukiz, mawth, n1cks, pancc, tatazin      |
|           21 |     2764 | 2026-02-08 | DashSkins              | L   | 0.821      | -            | -                | -                | -         |    -6.07 | lukiz, mawth, n1cks, pancc, tatazin      |
|           20 |     2838 | 2026-02-06 | FOLHA AMARELA          | W   | 0.806      | 0.371        | 0.005 (0.002)    | 0.356 (0.106)    | 0 (0.000) |    13.12 | lukiz, mawth, n1cks, pancc, tatazin      |
|           19 |     2905 | 2026-02-03 | FURIA Female           | W   | 0.788      | 0.371        | 0.005 (0.002)    | 0.114 (0.033)    | 0 (0.000) |    10.21 | lukiz, mawth, n1cks, pancc, tatazin      |
|           18 |     3159 | 2026-01-25 | ODDIK                  | L   | 0.727      | -            | -                | -                | -         |    -1.01 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           17 |     3203 | 2026-01-24 | Bounty Hunters Esports | W   | 0.719      | 0.371        | 0.034 (0.009)    | 0.562 (0.150)    | 0 (0.000) |    20.14 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           16 |     3241 | 2026-01-23 | Procyon Team           | W   | 0.713      | 0.371        | 0.014 (0.004)    | 0.341 (0.090)    | 0 (0.000) |    17.80 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           15 |     3358 | 2026-01-20 | Game Hunters           | W   | 0.694      | 0.371        | 0.003 (0.001)    | 0.512 (0.132)    | 0 (0.000) |    14.17 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           14 |     3391 | 2026-01-18 | UNO MILLE              | L   | 0.681      | -            | -                | -                | -         |    -9.23 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           13 |     3476 | 2026-01-16 | Prison Breakers        | W   | 0.668      | 0.371        | 0.000 (0.000)    | 0.080 (0.020)    | 0 (0.000) |     5.47 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           12 |     3573 | 2026-01-14 | Charrados FC           | W   | 0.653      | -            | -                | -                | -         |     2.92 | lukiz, mawth, n1cks, tatazin, vinaabEAST |
|           11 |     4679 | 2025-11-09 | Procyon Team           | L   | 0.213      | -            | -                | -                | -         |    -1.20 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|           10 |     4757 | 2025-11-07 | KRÜ Esports            | L   | 0.201      | -            | -                | -                | -         |    -3.84 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            9 |     4872 | 2025-11-06 | MIBR Academy           | W   | 0.192      | -            | -                | -                | -         |     1.72 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            8 |     4948 | 2025-11-03 | Game Hunters           | L   | 0.173      | -            | -                | -                | -         |    -1.87 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            7 |     5233 | 2025-10-25 | Bounty Hunters Esports | L   | 0.115      | -            | -                | -                | -         |    -0.32 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            6 |     5347 | 2025-10-23 | Game Hunters           | L   | 0.101      | -            | -                | -                | -         |    -2.55 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            5 |     5584 | 2025-10-14 | Bounty Hunters Esports | L   | 0.040      | -            | -                | -                | -         |    -0.11 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            4 |     5618 | 2025-10-12 | MAGICOS                | W   | 0.028      | -            | -                | -                | -         |     0.12 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            3 |     5648 | 2025-10-11 | KRÜ Esports            | L   | 0.019      | -            | -                | -                | -         |    -0.37 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            2 |     5724 | 2025-10-09 | Game Hunters           | L   | 0.006      | -            | -                | -                | -         |    -0.16 | CloN7, mawth, n1cks, RenanZin, tatazin   |
|            1 |     5759 | 2025-10-08 | DashSkins              | L   | 0.001      | -            | -                | -                | -         |    -0.01 | CloN7, mawth, n1cks, RenanZin, tatazin   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,091.82)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.728 | $1,500.00      | $1,091.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
