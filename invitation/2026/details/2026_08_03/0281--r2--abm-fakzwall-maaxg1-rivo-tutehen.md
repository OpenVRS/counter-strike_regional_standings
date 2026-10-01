### Roster Details<br />
Team Name: R2<br />
Roster: ABM, fakzwall, maaxg1, Rivo, tutehen<br />
Global Rank: [281](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [65]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  640.4<br />
<br />
Final Rank Value (640.4) = Starting Rank Value (641.8) + Head To Head Adjustments (-1.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.243[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.8
- 400 + ( ( 0.125 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 641.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |     1795 | 2026-05-20 | MIBR Academy    | L   | 0.700      | -            | -                | -                | -         |    -6.79 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           42 |     1825 | 2026-05-19 | METANOIA Wolves | L   | 0.694      | -            | -                | -                | -         |    -7.66 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           41 |     1873 | 2026-05-17 | HereWeGoAgain   | W   | 0.679      | 0.354        | -                | 0.031 (0.007)    | 0 (0.000) |     6.05 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           40 |     1926 | 2026-05-15 | Procyon         | L   | 0.667      | -            | -                | -                | -         |    -9.52 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           39 |     2007 | 2026-05-12 | Blitzkrieg      | W   | 0.648      | 0.354        | -                | 0.104 (0.024)    | 0 (0.000) |     6.64 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           38 |     2183 | 2026-05-06 | Isurus          | L   | 0.608      | -            | -                | -                | -         |    -4.22 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           37 |     2200 | 2026-05-05 | paiN Academy    | L   | 0.601      | -            | -                | -                | -         |    -8.51 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           36 |     2268 | 2026-05-03 | Crashers        | W   | 0.584      | 0.354        | 0.001 (0.000)    | 0.229 (0.047)    | 0 (0.000) |     9.25 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           35 |     2355 | 2026-05-01 | Keyd Stars      | L   | 0.573      | -            | -                | -                | -         |    -4.17 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           34 |     2438 | 2026-04-29 | Players         | W   | 0.560      | 0.354        | 0.000 (0.000)    | 0.145 (0.029)    | 0 (0.000) |     8.10 | ABM, fakzwall, maaxg1, Rivo, tutehen |
|           33 |     3155 | 2026-04-05 | ShindeN         | L   | 0.402      | -            | -                | -                | -         |    -1.20 | ABM, guidimon, maaxg1, toto, tutehen |
|           32 |     3227 | 2026-04-04 | BESTIA Academy  | W   | 0.394      | 0.363        | 0.002 (0.000)    | 0.504 (0.072)    | 0 (0.000) |     7.38 | ABM, guidimon, maaxg1, toto, tutehen |
|           31 |     3296 | 2026-04-03 | paiN Academy    | L   | 0.389      | -            | -                | -                | -         |    -5.21 | ABM, guidimon, maaxg1, toto, tutehen |
|           30 |     3397 | 2026-04-02 | GameHunters     | W   | 0.381      | 0.363        | 0.001 (0.000)    | 0.460 (0.064)    | 0 (0.000) |     7.84 | ABM, guidimon, maaxg1, toto, tutehen |
|           29 |     3489 | 2026-04-01 | Vasco           | L   | 0.375      | -            | -                | -                | -         |    -4.34 | ABM, guidimon, maaxg1, toto, tutehen |
|           28 |     3585 | 2026-03-31 | paiN Academy    | L   | 0.367      | -            | -                | -                | -         |    -5.12 | ABM, guidimon, maaxg1, toto, tutehen |
|           27 |     3818 | 2026-03-28 | METANOIA Wolves | W   | 0.348      | 0.333        | 0.001 (0.000)    | 0.059 (0.007)    | 0 (0.000) |     5.55 | ABM, guidimon, maaxg1, toto, tutehen |
|           26 |     3893 | 2026-03-27 | Fake do Biru    | L   | 0.342      | -            | -                | -                | -         |    -2.90 | ABM, guidimon, maaxg1, toto, tutehen |
|           25 |     4167 | 2026-03-22 | Fake do Biru    | L   | 0.309      | -            | -                | -                | -         |    -2.80 | ABM, guidimon, maaxg1, toto, tutehen |
|           24 |     4215 | 2026-03-21 | MAGICOS         | W   | 0.302      | 0.371        | -                | 0.306 (0.034)    | 0 (0.000) |     3.40 | ABM, guidimon, maaxg1, toto, tutehen |
|           23 |     4345 | 2026-03-19 | HereWeGoAgain   | W   | 0.287      | -            | -                | -                | 0 (0.000) |     2.54 | ABM, guidimon, maaxg1, toto, tutehen |
|           22 |     4462 | 2026-03-16 | FOLHA AMARELA   | W   | 0.269      | 0.371        | 0.001 (0.000)    | -                | 0 (0.000) |     4.32 | ABM, guidimon, maaxg1, toto, tutehen |
|           21 |     4515 | 2026-03-15 | MIBR Academy    | L   | 0.261      | -            | -                | -                | -         |    -2.71 | ABM, guidimon, maaxg1, toto, tutehen |
|           20 |     4550 | 2026-03-14 | Crashers        | L   | 0.255      | -            | -                | -                | -         |    -3.68 | ABM, guidimon, maaxg1, toto, tutehen |
|           19 |     4554 | 2026-03-14 | Isurus          | L   | 0.254      | -            | -                | -                | -         |    -1.59 | ABM, guidimon, maaxg1, toto, tutehen |
|           18 |     4654 | 2026-03-12 | ex-KRÜ          | W   | 0.241      | 0.320        | 0.005 (0.000)    | 0.187 (0.014)    | -         |     4.47 | ABM, guidimon, maaxg1, toto, tutehen |
|           17 |     4705 | 2026-03-11 | SUPERMATCH      | W   | 0.234      | -            | -                | -                | -         |     1.50 | ABM, guidimon, maaxg1, toto, tutehen |
|           16 |     4708 | 2026-03-11 | LP              | L   | 0.234      | -            | -                | -                | -         |    -0.55 | ABM, guidimon, maaxg1, toto, tutehen |
|           15 |     4739 | 2026-03-10 | ex-KRÜ          | L   | 0.228      | -            | -                | -                | -         |    -2.97 | ABM, guidimon, maaxg1, toto, tutehen |
|           14 |     4796 | 2026-03-09 | Pugdesonesto    | W   | 0.220      | -            | -                | -                | -         |     1.94 | ABM, guidimon, maaxg1, toto, tutehen |
|           13 |     4852 | 2026-03-08 | FURIA fe        | W   | 0.215      | -            | -                | -                | -         |     2.96 | ABM, guidimon, maaxg1, toto, tutehen |
|           12 |     4994 | 2026-03-05 | Prison Breakers | W   | 0.196      | -            | -                | -                | -         |     1.25 | ABM, guidimon, maaxg1, toto, tutehen |
|           11 |     5001 | 2026-03-05 | Procyon         | L   | 0.195      | -            | -                | -                | -         |    -2.52 | ABM, guidimon, maaxg1, toto, tutehen |
|           10 |     5031 | 2026-03-05 | Isurus          | L   | 0.193      | -            | -                | -                | -         |    -1.07 | ABM, guidimon, maaxg1, toto, tutehen |
|            9 |     5056 | 2026-03-04 | FOLHA AMARELA   | W   | 0.188      | 0.371        | 0.001 (0.000)    | -                | -         |     3.12 | ABM, guidimon, maaxg1, toto, tutehen |
|            8 |     5164 | 2026-03-02 | FOLHA AMARELA   | L   | 0.174      | -            | -                | -                | -         |    -2.65 | ABM, guidimon, maaxg1, toto, tutehen |
|            7 |     5178 | 2026-03-02 | MIBR fe         | W   | 0.173      | 0.371        | 0.037 (0.002)    | -                | -         |     4.01 | ABM, guidimon, maaxg1, toto, tutehen |
|            6 |     5194 | 2026-03-01 | Players         | W   | 0.169      | -            | -                | -                | -         |     1.47 | ABM, guidimon, maaxg1, toto, tutehen |
|            5 |     5258 | 2026-02-28 | paiN Academy    | L   | 0.160      | -            | -                | -                | -         |    -2.67 | ABM, guidimon, maaxg1, toto, tutehen |
|            4 |     5337 | 2026-02-26 | GameHunters     | L   | 0.149      | -            | -                | -                | -         |    -3.27 | ABM, guidimon, maaxg1, toto, tutehen |
|            3 |     5452 | 2026-02-24 | Bad Luck        | W   | 0.134      | -            | -                | -                | -         |     1.13 | ABM, guidimon, maaxg1, toto, tutehen |
|            2 |     5570 | 2026-02-22 | Crashers        | W   | 0.120      | 0.371        | 0.001 (0.000)    | 0.229 (0.010)    | -         |     2.05 | ABM, guidimon, maaxg1, toto, tutehen |
|            1 |     5919 | 2026-02-15 | Bounty Hunters  | L   | 0.076      | -            | -                | -                | -         |    -0.17 | ABM, guidimon, maaxg1, toto, tutehen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($385.94)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-13 |      0.249 | $375.00        | $93.32          |
| 2026-03-05 |      0.195 | $1,500.00      | $292.62         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
