### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [211](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  741.9<br />
<br />
Final Rank Value (741.9) = Starting Rank Value (739.3) + Head To Head Adjustments (2.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 739.3
- 400 + ( ( 0.175 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 739.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1998 | 2026-05-13 | Haunted House     | L   | 0.651      | -            | -                | -                | -         |   -10.17 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           24 |     2024 | 2026-05-12 | Last Bullet       | W   | 0.646      | 0.548        | 0.001 (0.000)    | 0.183 (0.065)    | 1 (0.646) |    11.01 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           23 |     2063 | 2026-05-11 | SemperFi          | L   | 0.639      | -            | -                | -                | -         |    -5.75 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           22 |     3263 | 2026-04-04 | 5star             | L   | 0.392      | -            | -                | -                | -         |    -2.46 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           21 |     3266 | 2026-04-04 | TYLOO             | L   | 0.392      | -            | -                | -                | -         |    -0.11 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           20 |     3343 | 2026-04-03 | FengDa            | L   | 0.386      | -            | -                | -                | -         |    -6.92 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           19 |     3351 | 2026-04-03 | Rare Atom         | W   | 0.385      | 0.352        | 0.004 (0.001)    | 0.199 (0.027)    | 1 (0.385) |     7.94 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           18 |     3360 | 2026-04-03 | TYLOO             | L   | 0.385      | -            | -                | -                | -         |    -0.09 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           17 |     3453 | 2026-04-02 | Eruption          | W   | 0.379      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.49 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           16 |     3457 | 2026-04-02 | Last Bullet       | W   | 0.378      | 0.352        | 0.001 (0.000)    | 0.183 (0.024)    | 1 (0.378) |     6.81 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           15 |     3705 | 2026-03-30 | Lynn Vision       | L   | 0.359      | -            | -                | -                | -         |    -0.31 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           14 |     3716 | 2026-03-30 | Last Bullet       | W   | 0.358      | 0.352        | 0.001 (0.000)    | 0.183 (0.023)    | 1 (0.358) |     6.62 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |     4247 | 2026-03-21 | Haunted House     | L   | 0.299      | -            | -                | -                | -         |    -4.66 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     4310 | 2026-03-20 | 5star             | L   | 0.293      | -            | -                | -                | -         |    -1.60 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           11 |     4767 | 2026-03-10 | Kaleido           | L   | 0.225      | -            | -                | -                | -         |    -2.91 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           10 |     4773 | 2026-03-09 | Chaos             | W   | 0.223      | 0.769        | 0.001 (0.000)    | -                | 0 (0.000) |     1.54 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            9 |     4842 | 2026-03-08 | Chinggis Warriors | L   | 0.216      | -            | -                | -                | -         |    -2.55 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            8 |     5459 | 2026-02-24 | Kaleido           | L   | 0.133      | -            | -                | -                | -         |    -1.75 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            7 |     5508 | 2026-02-23 | Last Bullet       | W   | 0.126      | 0.333        | 0.001 (0.000)    | 0.183 (0.008)    | 0 (0.000) |     2.40 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            6 |     5571 | 2026-02-22 | The QUBE          | W   | 0.120      | 0.333        | 0.002 (0.000)    | 0.168 (0.007)    | 0 (0.000) |     1.66 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            5 |     5633 | 2026-02-21 | Chinggis Warriors | W   | 0.113      | 0.333        | 0.006 (0.000)    | 0.217 (0.008)    | 0 (0.000) |     2.25 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            4 |     5683 | 2026-02-20 | Legion            | W   | 0.106      | 0.333        | 0.000 (0.000)    | 0.048 (0.002)    | 0 (0.000) |     0.79 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            3 |     5742 | 2026-02-19 | 100RA             | W   | 0.099      | -            | -                | -                | -         |     0.41 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            2 |     5795 | 2026-02-18 | BORING PLAYERS    | L   | 0.093      | -            | -                | -                | -         |    -1.58 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|            1 |     5851 | 2026-02-17 | Arise             | W   | 0.087      | 0.333        | -                | 0.027 (0.001)    | -         |     0.52 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($906.59)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.399 | $1,438.00      | $573.55         |
| 2026-02-24 |      0.133 | $2,500.00      | $333.04         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
