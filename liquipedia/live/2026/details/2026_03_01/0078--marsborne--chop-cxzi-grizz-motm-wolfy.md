### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [78](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_01.md)<br />
Regional Rank: [18]( ../../standings_americas_2026_03_01.md)<br />
<br />
Final Rank Value:  1069.1<br />
<br />
Final Rank Value (1069.1) = Starting Rank Value (1187.3) + Head To Head Adjustments (-118.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.435[<sup>1</sup>](#table2)
- Bounty Collected: 0.333[<sup>2</sup>](#table1)
- Opponent Network: 0.118[<sup>2</sup>](#table1)
- LAN Wins: 0.779[<sup>2</sup>](#table1)

The average of these factors is 0.416<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1187.3
- 400 + ( ( 0.416 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1187.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.556
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           66 |       63 | 2026-02-27 | 9z Team                 | L   | 1.000      | -            | -                | -                | -         |    -5.47 | chop, Cxzi, Grizz, motm, WolfY |
|           65 |      120 | 2026-02-26 | Fake do Biru            | W   | 1.000      | 0.435        | 0.010 (0.004)    | 0.367 (0.160)    | 1 (1.000) |     8.63 | chop, Cxzi, Grizz, motm, WolfY |
|           64 |      171 | 2026-02-25 | Fluxo W7M               | L   | 1.000      | -            | -                | -                | -         |   -16.19 | chop, Cxzi, Grizz, motm, WolfY |
|           63 |      229 | 2026-02-23 | Team Voca               | L   | 1.000      | -            | -                | -                | -         |   -18.18 | chop, Cxzi, Grizz, motm, WolfY |
|           62 |      258 | 2026-02-22 | SkinRave Esports        | W   | 1.000      | 0.363        | 0.042 (0.015)    | 0.376 (0.136)    | -         |     6.81 | chop, Cxzi, Grizz, motm, WolfY |
|           61 |      322 | 2026-02-21 | Zomblers                | W   | 1.000      | 0.363        | -                | 0.331 (0.120)    | -         |     4.41 | chop, Cxzi, Grizz, motm, WolfY |
|           60 |      360 | 2026-02-20 | Team Voca               | L   | 1.000      | -            | -                | -                | -         |   -19.09 | chop, Cxzi, Grizz, motm, WolfY |
|           59 |      454 | 2026-02-18 | FlyQuest RED            | W   | 1.000      | 0.363        | 0.015 (0.005)    | -                | -         |     2.39 | chop, Cxzi, Grizz, motm, WolfY |
|           58 |      513 | 2026-02-17 | InControl               | W   | 1.000      | -            | -                | -                | -         |     2.13 | chop, Cxzi, Grizz, motm, WolfY |
|           57 |      860 | 2026-02-10 | SkinRave Esports        | W   | 1.000      | 0.333        | 0.042 (0.014)    | 0.376 (0.125)    | -         |     6.62 | chop, Cxzi, Grizz, motm, WolfY |
|           56 |      900 | 2026-02-09 | SportsBetExpert         | W   | 1.000      | 0.333        | -                | 0.299 (0.100)    | -         |     3.67 | chop, Cxzi, Grizz, motm, WolfY |
|           55 |      949 | 2026-02-07 | Zomblers                | W   | 1.000      | 0.333        | -                | 0.331 (0.110)    | -         |     3.85 | chop, Cxzi, Grizz, motm, WolfY |
|           54 |      984 | 2026-02-06 | Team Voca               | L   | 1.000      | -            | -                | -                | -         |   -19.46 | chop, Cxzi, Grizz, motm, WolfY |
|           53 |     1151 | 2026-01-31 | BESTIA                  | L   | 1.000      | -            | -                | -                | -         |    -9.45 | chop, Cxzi, Grizz, motm, WolfY |
|           52 |     1154 | 2026-01-31 | Procyon Team            | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.217 (0.080)    | 1 (1.000) |     5.46 | chop, Cxzi, Grizz, motm, WolfY |
|           51 |     1196 | 2026-01-30 | BESTIA                  | L   | 0.994      | -            | -                | -                | -         |    -9.91 | chop, Cxzi, Grizz, motm, WolfY |
|           50 |     1203 | 2026-01-30 | Procyon Team            | W   | 0.993      | 0.371        | 0.017 (0.006)    | 0.217 (0.080)    | 1 (0.993) |     5.08 | chop, Cxzi, Grizz, motm, WolfY |
|           49 |     1754 | 2026-01-11 | NRG                     | L   | 0.868      | -            | -                | -                | -         |    -4.77 | chop, Cxzi, Grizz, motm, WolfY |
|           48 |     1758 | 2026-01-10 | BOSS                    | W   | 0.863      | 0.396        | 0.017 (0.006)    | 0.455 (0.156)    | 1 (0.863) |     4.77 | chop, Cxzi, Grizz, motm, WolfY |
|           47 |     1760 | 2026-01-10 | Regain                  | W   | 0.861      | 0.396        | -                | 0.318 (0.108)    | 1 (0.861) |     2.31 | chop, Cxzi, Grizz, motm, WolfY |
|           46 |     1766 | 2026-01-09 | BOSS                    | L   | 0.857      | -            | -                | -                | -         |   -22.65 | chop, Cxzi, Grizz, motm, WolfY |
|           45 |     1807 | 2026-01-04 | M80                     | L   | 0.820      | -            | -                | -                | -         |    -6.12 | chop, Cxzi, Grizz, motm, WolfY |
|           44 |     1836 | 2026-01-03 | Reign Above             | W   | 0.815      | -            | -                | -                | 1 (0.815) |     1.20 | chop, Cxzi, Grizz, motm, WolfY |
|           43 |     1842 | 2026-01-03 | NRG                     | L   | 0.814      | -            | -                | -                | -         |    -6.01 | chop, Cxzi, Grizz, motm, WolfY |
|           42 |     1847 | 2026-01-03 | Reign Above             | W   | 0.813      | -            | -                | -                | 1 (0.813) |     1.14 | chop, Cxzi, Grizz, motm, WolfY |
|           41 |     2616 | 2025-11-16 | Team Voca               | L   | 0.494      | -            | -                | -                | -         |   -11.51 | chop, Cxzi, Grizz, viz, WolfY  |
|           40 |     2631 | 2025-11-15 | SkinRave Esports        | L   | 0.489      | -            | -                | -                | -         |   -12.77 | chop, Cxzi, Grizz, viz, WolfY  |
|           39 |     2633 | 2025-11-15 | Zomblers                | W   | 0.488      | -            | -                | -                | -         |     1.01 | chop, Cxzi, Grizz, viz, WolfY  |
|           38 |     2656 | 2025-11-14 | Team Voca               | W   | 0.483      | -            | -                | -                | -         |     1.53 | chop, Cxzi, Grizz, viz, WolfY  |
|           37 |     2709 | 2025-11-12 | BOSS                    | W   | 0.469      | -            | -                | -                | -         |     1.71 | chop, Cxzi, Grizz, viz, WolfY  |
|           36 |     2743 | 2025-11-11 | Mythic                  | W   | 0.463      | -            | -                | -                | -         |     0.90 | chop, Cxzi, Grizz, viz, WolfY  |
|           35 |     2768 | 2025-11-10 | Team Voca               | L   | 0.456      | -            | -                | -                | -         |   -13.00 | chop, Cxzi, Grizz, viz, WolfY  |
|           34 |     2795 | 2025-11-09 | BC.Game Esports         | W   | 0.448      | 0.333        | 0.224 (0.033)    | -                | 1 (0.448) |    11.94 | chop, Cxzi, Grizz, viz, WolfY  |
|           33 |     2802 | 2025-11-09 | M80                     | L   | 0.447      | -            | -                | -                | -         |    -4.27 | chop, Cxzi, Grizz, viz, WolfY  |
|           32 |     2808 | 2025-11-09 | FlyQuest RED            | W   | 0.446      | -            | -                | -                | 1 (0.446) |     1.06 | chop, Cxzi, Grizz, viz, WolfY  |
|           31 |     2833 | 2025-11-08 | F5 Esports              | W   | 0.442      | -            | -                | -                | 1 (0.442) |     0.55 | chop, Cxzi, Grizz, viz, WolfY  |
|           30 |     2837 | 2025-11-08 | Barry pickers           | W   | 0.441      | -            | -                | -                | -         |     0.18 | chop, Cxzi, Grizz, viz, WolfY  |
|           29 |     3018 | 2025-11-05 | Team Voca               | W   | 0.422      | -            | -                | -                | -         |     1.25 | chop, Cxzi, Grizz, viz, WolfY  |
|           28 |     3124 | 2025-11-01 | M80                     | L   | 0.395      | -            | -                | -                | -         |    -3.96 | chop, Cxzi, Grizz, viz, WolfY  |
|           27 |     3130 | 2025-11-01 | Ghost Gaming            | W   | 0.394      | -            | -                | -                | -         |     0.55 | chop, Cxzi, Grizz, viz, WolfY  |
|           26 |     3180 | 2025-10-30 | BOSS                    | W   | 0.383      | -            | -                | -                | -         |     1.30 | chop, Cxzi, Grizz, viz, WolfY  |
|           25 |     3221 | 2025-10-28 | OverKnight              | W   | 0.369      | -            | -                | -                | -         |     0.65 | chop, Cxzi, Grizz, viz, WolfY  |
|           24 |     3293 | 2025-10-26 | Outfit 49               | W   | 0.356      | -            | -                | -                | -         |     0.80 | chop, Cxzi, Grizz, viz, WolfY  |
|           23 |     3311 | 2025-10-26 | NRG                     | L   | 0.355      | -            | -                | -                | -         |    -3.04 | chop, Cxzi, Grizz, viz, WolfY  |
|           22 |     3326 | 2025-10-26 | SkinRave Esports        | W   | 0.354      | 0.303        | 0.042 (0.004)    | -                | -         |     1.72 | chop, Cxzi, Grizz, viz, WolfY  |
|           21 |     3361 | 2025-10-25 | Life's A Game           | W   | 0.348      | -            | -                | -                | -         |     1.15 | chop, Cxzi, Grizz, viz, WolfY  |
|           20 |     3404 | 2025-10-24 | Ex-Nocturnal Esports    | W   | 0.343      | -            | -                | -                | -         |     0.42 | chop, Cxzi, Grizz, viz, WolfY  |
|           19 |     3536 | 2025-10-21 | Life's A Game           | W   | 0.322      | 0.333        | 0.036 (0.004)    | -                | -         |     1.06 | chop, Cxzi, Grizz, viz, WolfY  |
|           18 |     3555 | 2025-10-20 | Chicken Coop Esports    | W   | 0.316      | -            | -                | -                | -         |     0.26 | chop, Cxzi, Grizz, viz, WolfY  |
|           17 |     3579 | 2025-10-18 | Wildcard                | L   | 0.302      | -            | -                | -                | -         |    -8.80 | chop, Cxzi, Grizz, viz, WolfY  |
|           16 |     3600 | 2025-10-17 | SkinRave Esports        | L   | 0.296      | -            | -                | -                | -         |    -8.05 | chop, Cxzi, Grizz, viz, WolfY  |
|           15 |     3704 | 2025-10-14 | Wildcard                | W   | 0.276      | -            | -                | -                | -         |     0.60 | chop, Cxzi, Grizz, viz, WolfY  |
|           14 |     3740 | 2025-10-13 | SportsBetExpert         | W   | 0.269      | -            | -                | -                | -         |     0.49 | chop, Cxzi, Grizz, viz, WolfY  |
|           13 |     3876 | 2025-10-08 | Life's A Game           | W   | 0.236      | -            | -                | -                | -         |     0.72 | chop, Cxzi, Grizz, viz, WolfY  |
|           12 |     3991 | 2025-10-06 | NuTorious               | W   | 0.223      | -            | -                | -                | -         |     0.15 | chop, Cxzi, Grizz, viz, WolfY  |
|           11 |     4125 | 2025-10-04 | BC.Game Esports         | L   | 0.207      | -            | -                | -                | -         |    -1.09 | chop, Cxzi, Grizz, viz, WolfY  |
|           10 |     4575 | 2025-09-22 | Wildcard                | L   | 0.129      | -            | -                | -                | -         |    -3.80 | chop, Cxzi, Grizz, viz, WolfY  |
|            9 |     4625 | 2025-09-20 | Team Voca               | W   | 0.116      | -            | -                | -                | -         |     0.25 | chop, Cxzi, Grizz, viz, WolfY  |
|            8 |     4717 | 2025-09-17 | SkinRave Esports        | W   | 0.096      | -            | -                | -                | -         |     0.40 | chop, Cxzi, Grizz, viz, WolfY  |
|            7 |     4806 | 2025-09-14 | Wildcard                | W   | 0.076      | -            | -                | -                | -         |     0.16 | chop, Cxzi, Grizz, viz, WolfY  |
|            6 |     4808 | 2025-09-14 | Team Voca               | W   | 0.075      | -            | -                | -                | -         |     0.16 | chop, Cxzi, Grizz, viz, WolfY  |
|            5 |     4854 | 2025-09-13 | Fisher College          | W   | 0.069      | -            | -                | -                | -         |     0.05 | chop, Cxzi, Grizz, viz, WolfY  |
|            4 |     4945 | 2025-09-11 | Outfit 49               | W   | 0.056      | -            | -                | -                | -         |     0.03 | chop, Grizz, motm, viz, WolfY  |
|            3 |     5049 | 2025-09-09 | Regain                  | W   | 0.043      | -            | -                | -                | -         |     0.08 | chop, Grizz, motm, viz, WolfY  |
|            2 |     5169 | 2025-09-06 | Ninjas in Pyjamas       | L   | 0.022      | -            | -                | -                | -         |    -0.24 | chop, Grizz, motm, viz, WolfY  |
|            1 |     5177 | 2025-09-06 | Phoenix (American team) | W   | 0.021      | -            | -                | -                | -         |     0.01 | chop, Grizz, motm, viz, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,796.71)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-02-10 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-02-01 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-01-11 |      0.869 | $3,000.00      | $2,607.50       |
| 2025-11-15 |      0.489 | $4,000.00      | $1,957.78       |
| 2025-11-09 |      0.449 | $1,300.00      | $583.38         |
| 2025-11-05 |      0.422 | $5,000.00      | $2,112.50       |
| 2025-11-02 |      0.401 | $1,000.00      | $400.56         |
| 2025-10-19 |      0.309 | $2,000.00      | $618.33         |
| 2025-09-22 |      0.129 | $4,000.00      | $516.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
