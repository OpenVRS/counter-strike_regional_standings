### Roster Details<br />
Team Name: Eternal Fire<br />
Roster: DemQQ, EMSTAR, jottAAA, rigoN, Woro2k<br />
Global Rank: [130](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [92]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  904.8<br />
<br />
Final Rank Value (904.8) = Starting Rank Value (839.5) + Head To Head Adjustments (65.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.257[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.280[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 839.5
- 400 + ( ( 0.227 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 839.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |     3596 | 2026-03-31 | Sashi         | L   | 0.367      | -            | -                | -                | -         |    -2.60 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           36 |     3672 | 2026-03-30 | aimclub       | W   | 0.361      | -            | -                | -                | 1 (0.361) |     2.08 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           35 |     3703 | 2026-03-30 | Passion UA    | L   | 0.359      | -            | -                | -                | -         |    -3.98 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           34 |     3773 | 2026-03-29 | INFINITE      | W   | 0.353      | 0.354        | 0.031 (0.004)    | 0.681 (0.085)    | 1 (0.353) |    10.10 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           33 |     3786 | 2026-03-29 | Drama         | W   | 0.352      | -            | -                | -                | 1 (0.352) |     1.25 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           32 |     4012 | 2026-03-25 | BetBoom       | L   | 0.326      | -            | -                | -                | -         |    -0.08 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           31 |     4060 | 2026-03-24 | ECSTATIC      | W   | 0.319      | 0.435        | 0.013 (0.002)    | -                | 1 (0.319) |     4.86 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           30 |     4090 | 2026-03-23 | CYBERSHOKE    | W   | 0.316      | 0.435        | 0.029 (0.004)    | 0.880 (0.121)    | 1 (0.316) |     8.31 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           29 |     4287 | 2026-03-20 | HYPERSPIRIT   | L   | 0.294      | -            | -                | -                | -         |    -5.53 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           28 |     4337 | 2026-03-19 | ex-1win       | L   | 0.288      | -            | -                | -                | -         |    -1.94 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           27 |     4405 | 2026-03-18 | K27           | L   | 0.279      | -            | -                | -                | -         |    -0.45 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           26 |     4421 | 2026-03-17 | ex-MANA       | W   | 0.274      | 0.384        | -                | 0.637 (0.067)    | -         |     2.87 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           25 |     4520 | 2026-03-15 | Omega         | W   | 0.260      | 0.435        | 0.030 (0.003)    | 0.635 (0.072)    | -         |     7.33 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           24 |     4532 | 2026-03-15 | Nemiga        | L   | 0.259      | -            | -                | -                | -         |    -1.35 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           23 |     4563 | 2026-03-14 | Nemesis       | W   | 0.253      | 0.384        | 0.230 (0.022)    | 0.899 (0.088)    | -         |     7.41 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           22 |     4607 | 2026-03-13 | Bulgaria      | L   | 0.247      | -            | -                | -                | -         |    -0.42 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           21 |     4677 | 2026-03-12 | ex-RUBY       | W   | 0.239      | 0.384        | 0.011 (0.001)    | -                | -         |     2.93 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           20 |     4713 | 2026-03-11 | FAVBET        | W   | 0.233      | -            | -                | -                | -         |     2.67 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           19 |     4805 | 2026-03-09 | HAVU          | W   | 0.220      | 0.435        | -                | 0.399 (0.038)    | -         |     3.81 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           18 |     4946 | 2026-03-07 | PsychoFace    | W   | 0.206      | 0.384        | 0.023 (0.002)    | 0.987 (0.078)    | -         |     5.01 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           17 |     4989 | 2026-03-06 | megoshort     | W   | 0.198      | -            | -                | -                | -         |     1.71 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           16 |     4991 | 2026-03-06 | WW            | W   | 0.198      | 0.384        | 0.056 (0.004)    | 0.557 (0.042)    | -         |     5.63 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           15 |     5035 | 2026-03-05 | Rune Eaters   | W   | 0.193      | 0.384        | 0.022 (0.002)    | 0.895 (0.066)    | -         |     5.59 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           14 |     5123 | 2026-03-03 | Butterfly     | L   | 0.180      | -            | -                | -                | -         |    -0.95 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           13 |     5173 | 2026-03-02 | Black Phoenix | W   | 0.173      | 0.384        | -                | 1.000 (0.067)    | -         |     2.94 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           12 |     5187 | 2026-03-02 | Fuzos         | W   | 0.172      | -            | -                | -                | -         |     1.34 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           11 |     5295 | 2026-02-27 | 100 Thieves   | L   | 0.154      | -            | -                | -                | -         |    -0.26 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|           10 |     5304 | 2026-02-27 | ENCE          | W   | 0.153      | -            | -                | -                | 1 (0.153) |     0.94 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            9 |     5345 | 2026-02-26 | FlyQuest      | L   | 0.148      | -            | -                | -                | -         |    -0.33 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            8 |     5380 | 2026-02-26 | ex-MANA       | W   | 0.146      | -            | -                | -                | 1 (0.146) |     1.71 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            7 |     5421 | 2026-02-25 | DragonClaw    | W   | 0.140      | 0.354        | 0.020 (0.001)    | -                | 1 (0.140) |     2.33 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            6 |     5462 | 2026-02-24 | HYPERSPIRIT   | W   | 0.133      | -            | -                | -                | 1 (0.133) |     1.97 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            5 |     5478 | 2026-02-24 | Insiders      | W   | 0.132      | -            | -                | -                | 1 (0.132) |     0.33 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            4 |     5926 | 2026-02-15 | Inner Circle  | L   | 0.075      | -            | -                | -                | -         |    -0.06 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            3 |     5937 | 2026-02-15 | yngods        | W   | 0.074      | -            | -                | -                | -         |     0.57 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |
|            2 |     5975 | 2026-02-15 | Nemiga        | L   | 0.071      | -            | -                | -                | -         |    -0.30 | Calyx, EMSTAR, lugseN, rigoN, Woro2k  |
|            1 |     6096 | 2026-02-12 | JiJieHao      | L   | 0.054      | -            | -                | -                | -         |    -0.20 | DemQQ, EMSTAR, jottAAA, rigoN, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($633.16)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.261 | $1,500.00      | $391.60         |
| 2026-02-28 |      0.161 | $1,500.00      | $241.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
