### Roster Details<br />
Team Name: Abyssal<br />
Roster: blood, dangeR, foggers, gump, vinhy<br />
Global Rank: [259](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [31]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  666.1<br />
<br />
Final Rank Value (666.1) = Starting Rank Value (654.9) + Head To Head Adjustments (11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.283[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 654.9
- 400 + ( ( 0.132 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 654.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      437 | 2026-07-16 | Mindfreak         | L   | 1.000      | -            | -                | -                | -         |   -12.29 | blood, dangeR, foggers, gump, vinhy |
|           34 |      440 | 2026-07-16 | Rooster           | L   | 1.000      | -            | -                | -                | -         |    -9.79 | blood, dangeR, foggers, gump, vinhy |
|           33 |     1066 | 2026-06-12 | MARKandLARRY      | L   | 0.852      | -            | -                | -                | -         |   -15.98 | blood, dangeR, foggers, gump, vinhy |
|           32 |     1118 | 2026-06-09 | Rooster           | L   | 0.832      | -            | -                | -                | -         |   -10.32 | blood, dangeR, foggers, gump, vinhy |
|           31 |     1146 | 2026-06-08 | MGLBROS           | W   | 0.825      | -            | -                | -                | 0 (0.000) |     3.73 | blood, dangeR, foggers, gump, vinhy |
|           30 |     2303 | 2026-05-02 | Ground Zero       | L   | 0.579      | -            | -                | -                | -         |    -3.21 | dpr, foggers, gump, TRIPLUS, vinhy  |
|           29 |     2366 | 2026-05-01 | FURY              | W   | 0.571      | -            | -                | -                | 0 (0.000) |     4.81 | dangeR, dpr, foggers, gump, vinhy   |
|           28 |     2405 | 2026-04-30 | Ding Cuts         | W   | 0.565      | 0.278        | 0.001 (0.000)    | 0.112 (0.018)    | 0 (0.000) |     7.01 | dangeR, dpr, foggers, gump, vinhy   |
|           27 |     2449 | 2026-04-29 | THUNDER dOWNUNDER | L   | 0.559      | -            | -                | -                | -         |    -1.11 | dangeR, dpr, foggers, gump, vinhy   |
|           26 |     2536 | 2026-04-27 | Ding Cuts         | W   | 0.545      | 0.278        | 0.001 (0.000)    | 0.112 (0.017)    | 0 (0.000) |     6.77 | dangeR, dpr, foggers, gump, vinhy   |
|           25 |     2838 | 2026-04-19 | Rooster           | W   | 0.492      | 0.305        | 0.008 (0.001)    | 0.379 (0.057)    | 0 (0.000) |    10.48 | damyo, dangeR, foggers, gump, vinhy |
|           24 |     2847 | 2026-04-18 | Ding Cuts         | W   | 0.490      | 0.305        | -                | 0.112 (0.017)    | 0 (0.000) |     6.60 | damyo, dangeR, foggers, gump, vinhy |
|           23 |     2864 | 2026-04-17 | DXA               | W   | 0.484      | 0.305        | 0.002 (0.000)    | 0.162 (0.024)    | 0 (0.000) |     6.45 | damyo, dangeR, foggers, gump, vinhy |
|           22 |     2867 | 2026-04-17 | Rooster           | L   | 0.483      | -            | -                | -                | -         |    -4.79 | damyo, dangeR, foggers, gump, vinhy |
|           21 |     2994 | 2026-04-11 | Arcade            | W   | 0.437      | 0.305        | 0.001 (0.000)    | 0.166 (0.022)    | 0 (0.000) |     7.79 | dangeR, foggers, gump, Kiyo, vinhy  |
|           20 |     2996 | 2026-04-10 | DXA               | W   | 0.436      | 0.305        | 0.002 (0.000)    | 0.162 (0.022)    | 0 (0.000) |     6.04 | dangeR, foggers, gump, Kiyo, vinhy  |
|           19 |     3068 | 2026-04-08 | Rooster           | L   | 0.418      | -            | -                | -                | -         |    -3.88 | dangeR, foggers, gump, Kiyo, vinhy  |
|           18 |     3100 | 2026-04-07 | Ground Zero       | L   | 0.412      | -            | -                | -                | -         |    -1.90 | dangeR, foggers, gump, Kiyo, vinhy  |
|           17 |     3190 | 2026-04-05 | Mindfreak         | W   | 0.399      | 0.278        | 0.002 (0.000)    | -                | 0 (0.000) |     6.53 | dangeR, foggers, gump, Kiyo, vinhy  |
|           16 |     3347 | 2026-04-03 | Arcade            | W   | 0.385      | 0.278        | -                | 0.166 (0.018)    | -         |     7.15 | dangeR, foggers, gump, Kiyo, vinhy  |
|           15 |     3547 | 2026-04-01 | Ground Zero       | L   | 0.372      | -            | -                | -                | -         |    -1.65 | dangeR, foggers, gump, Kiyo, vinhy  |
|           14 |     3558 | 2026-03-31 | 11mins            | W   | 0.370      | -            | -                | -                | -         |     3.42 | dangeR, foggers, gump, Kiyo, vinhy  |
|           13 |     3659 | 2026-03-31 | Mindfreak         | W   | 0.364      | 0.624        | 0.002 (0.000)    | 0.084 (0.019)    | -         |     6.27 | dangeR, foggers, gump, Kiyo, vinhy  |
|           12 |     3660 | 2026-03-31 | Ground Zero       | L   | 0.364      | -            | -                | -                | -         |    -1.57 | dangeR, foggers, gump, Kiyo, vinhy  |
|           11 |     4503 | 2026-03-15 | Arcade            | L   | 0.263      | -            | -                | -                | -         |    -3.36 | dangeR, foggers, gump, Kiyo, vinhy  |
|           10 |     4506 | 2026-03-15 | Mindfreak         | L   | 0.262      | -            | -                | -                | -         |    -3.68 | dangeR, foggers, gump, Kiyo, vinhy  |
|            9 |     5321 | 2026-02-27 | Mindfreak         | L   | 0.152      | -            | -                | -                | -         |    -2.22 | dangeR, foggers, gump, Kiyo, vinhy  |
|            8 |     5333 | 2026-02-26 | Mindfreak         | L   | 0.149      | -            | -                | -                | -         |    -3.42 | dangeR, foggers, gump, Kiyo, vinhy  |
|            7 |     5383 | 2026-02-26 | Arcade            | W   | 0.145      | -            | -                | -                | -         |     2.75 | dangeR, foggers, gump, Kiyo, vinhy  |
|            6 |     5400 | 2026-02-25 | Ground Zero       | W   | 0.143      | 0.624        | 0.002 (0.000)    | -                | -         |     2.69 | dangeR, foggers, gump, Kiyo, vinhy  |
|            5 |     5402 | 2026-02-25 | Mindfreak         | L   | 0.143      | -            | -                | -                | -         |    -2.11 | dangeR, foggers, gump, Kiyo, vinhy  |
|            4 |     5437 | 2026-02-25 | THUNDER dOWNUNDER | L   | 0.138      | -            | -                | -                | -         |    -0.21 | dangeR, foggers, gump, Kiyo, vinhy  |
|            3 |     5604 | 2026-02-22 | Rooster           | W   | 0.118      | 0.317        | 0.008 (0.000)    | 0.379 (0.014)    | -         |     2.71 | dangeR, foggers, gump, Kiyo, vinhy  |
|            2 |     5743 | 2026-02-19 | Skele             | W   | 0.099      | -            | -                | -                | -         |     0.93 | dangeR, foggers, gump, Kiyo, vinhy  |
|            1 |     5808 | 2026-02-18 | JFT               | W   | 0.091      | -            | -                | -                | -         |     0.56 | dangeR, foggers, gump, Kiyo, vinhy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,438.33)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.492 | $2,812.00      | $1,382.53       |
| 2026-02-28 |      0.158 | $354.00        | $55.80          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
