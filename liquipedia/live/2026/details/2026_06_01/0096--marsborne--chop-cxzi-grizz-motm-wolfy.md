### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [96](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [23]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1074.4<br />
<br />
Final Rank Value (1074.4) = Starting Rank Value (1064.6) + Head To Head Adjustments (9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.373[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.582[<sup>2</sup>](#table1)

The average of these factors is 0.349<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1064.6
- 400 + ( ( 0.349 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1064.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.353
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |     1098 | 2026-04-28 | Chicken Coop Esports | L   | 0.981      | -            | -                | -                | -         |   -19.35 | chop, Grizz, Lucid, Minus, motm |
|           41 |     1139 | 2026-04-27 | Insane players       | W   | 0.975      | 0.363        | 0.013 (0.005)    | 0.373 (0.132)    | -         |     4.26 | chop, Grizz, Lucid, Minus, motm |
|           40 |     1182 | 2026-04-26 | Reign Above          | L   | 0.968      | -            | -                | -                | -         |   -28.21 | chop, Grizz, Lucid, Minus, motm |
|           39 |     1549 | 2026-04-14 | Team Voca            | W   | 0.888      | 0.333        | 0.053 (0.016)    | 0.662 (0.196)    | -         |    19.40 | chop, Cxzi, Grizz, motm, WolfY  |
|           38 |     1570 | 2026-04-13 | Team Aether          | W   | 0.880      | -            | -                | -                | -         |     4.40 | chop, Cxzi, Grizz, motm, WolfY  |
|           37 |     1614 | 2026-04-11 | Insane players       | W   | 0.867      | 0.333        | 0.013 (0.004)    | 0.373 (0.108)    | -         |     3.84 | chop, Cxzi, Grizz, motm, WolfY  |
|           36 |     1971 | 2026-04-03 | Galorys              | L   | 0.812      | -            | -                | -                | -         |   -11.80 | chop, Cxzi, Grizz, motm, WolfY  |
|           35 |     2152 | 2026-04-01 | ALKA GAMING          | W   | 0.799      | -            | -                | -                | 1 (0.799) |     1.77 | chop, Cxzi, Grizz, motm, WolfY  |
|           34 |     2163 | 2026-04-01 | Galorys              | L   | 0.798      | -            | -                | -                | -         |   -12.32 | chop, Cxzi, Grizz, motm, WolfY  |
|           33 |     2459 | 2026-03-28 | Turma do Pagode      | L   | 0.774      | -            | -                | -                | -         |    -8.84 | chop, Cxzi, Grizz, motm, WolfY  |
|           32 |     2574 | 2026-03-26 | 9z Team              | L   | 0.761      | -            | -                | -                | -         |    -1.50 | chop, Cxzi, Grizz, motm, WolfY  |
|           31 |     2577 | 2026-03-26 | Turma do Pagode      | W   | 0.760      | 0.393        | 0.024 (0.007)    | 0.549 (0.164)    | 1 (0.760) |    15.52 | chop, Cxzi, Grizz, motm, WolfY  |
|           30 |     3499 | 2026-03-08 | 9z Team              | L   | 0.640      | -            | -                | -                | -         |    -1.27 | chop, Cxzi, Grizz, motm, WolfY  |
|           29 |     3558 | 2026-03-07 | Imperial Esports     | W   | 0.634      | 0.384        | 0.027 (0.007)    | 0.486 (0.118)    | 1 (0.634) |    12.75 | chop, Cxzi, Grizz, motm, WolfY  |
|           28 |     3585 | 2026-03-07 | BESTIA               | W   | 0.631      | 0.384        | 0.016 (0.004)    | 0.660 (0.160)    | 1 (0.631) |    13.65 | chop, Cxzi, Grizz, motm, WolfY  |
|           27 |     3641 | 2026-03-05 | RED Canids           | W   | 0.621      | 0.384        | 0.042 (0.010)    | 0.341 (0.081)    | 1 (0.621) |    13.17 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     3646 | 2026-03-05 | Galorys              | W   | 0.620      | 0.384        | 0.014 (0.003)    | 0.470 (0.112)    | 1 (0.620) |    11.72 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     3931 | 2026-02-27 | 9z Team              | L   | 0.580      | -            | -                | -                | -         |    -0.97 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     3996 | 2026-02-26 | Fake do Biru         | W   | 0.572      | 0.435        | 0.021 (0.005)    | 0.551 (0.137)    | 1 (0.572) |     6.75 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     4057 | 2026-02-25 | Fluxo W7M            | L   | 0.566      | -            | -                | -                | -         |    -6.04 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     4134 | 2026-02-23 | Team Voca            | L   | 0.555      | -            | -                | -                | -         |    -4.67 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     4172 | 2026-02-22 | SkinRave Esports     | W   | 0.548      | -            | -                | -                | -         |     2.20 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     4248 | 2026-02-21 | Zomblers             | W   | 0.542      | 0.363        | -                | 0.436 (0.086)    | -         |     3.15 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     4298 | 2026-02-20 | Team Voca            | L   | 0.535      | -            | -                | -                | -         |    -4.45 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4396 | 2026-02-18 | FlyQuest RED         | W   | 0.522      | -            | -                | -                | -         |     1.08 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4455 | 2026-02-17 | Iowa Stormboar       | W   | 0.515      | 0.363        | 0.013 (0.003)    | -                | -         |     2.98 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4806 | 2026-02-10 | SkinRave Esports     | W   | 0.468      | -            | -                | -                | -         |     1.81 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4846 | 2026-02-09 | Insane players       | W   | 0.461      | -            | -                | -                | -         |     2.39 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     4895 | 2026-02-07 | Zomblers             | W   | 0.447      | -            | -                | -                | -         |     2.52 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     4933 | 2026-02-06 | Team Voca            | L   | 0.440      | -            | -                | -                | -         |    -3.47 | chop, Cxzi, Grizz, motm, WolfY  |
|           12 |     5103 | 2026-01-31 | BESTIA               | L   | 0.401      | -            | -                | -                | -         |    -2.90 | chop, Cxzi, Grizz, motm, WolfY  |
|           11 |     5106 | 2026-01-31 | Procyon Team         | W   | 0.401      | -            | -                | -                | 1 (0.401) |     2.57 | chop, Cxzi, Grizz, motm, WolfY  |
|           10 |     5151 | 2026-01-30 | BESTIA               | L   | 0.392      | -            | -                | -                | -         |    -2.88 | chop, Cxzi, Grizz, motm, WolfY  |
|            9 |     5158 | 2026-01-30 | Procyon Team         | W   | 0.392      | -            | -                | -                | 1 (0.392) |     2.43 | chop, Cxzi, Grizz, motm, WolfY  |
|            8 |     5725 | 2026-01-11 | NRG                  | L   | 0.267      | -            | -                | -                | -         |    -2.35 | chop, Cxzi, Grizz, motm, WolfY  |
|            7 |     5732 | 2026-01-10 | BOSS                 | W   | 0.262      | -            | -                | -                | 1 (0.262) |     0.94 | chop, Cxzi, Grizz, motm, WolfY  |
|            6 |     5734 | 2026-01-10 | Regain               | W   | 0.260      | -            | -                | -                | -         |     1.39 | chop, Cxzi, Grizz, motm, WolfY  |
|            5 |     5743 | 2026-01-09 | BOSS                 | L   | 0.256      | -            | -                | -                | -         |    -7.19 | chop, Cxzi, Grizz, motm, WolfY  |
|            4 |     5786 | 2026-01-04 | M80                  | L   | 0.219      | -            | -                | -                | -         |    -1.19 | chop, Cxzi, Grizz, motm, WolfY  |
|            3 |     5815 | 2026-01-03 | Reign Above          | W   | 0.214      | -            | -                | -                | -         |     0.28 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     5821 | 2026-01-03 | NRG                  | L   | 0.213      | -            | -                | -                | -         |    -2.08 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     5826 | 2026-01-03 | Reign Above          | W   | 0.212      | -            | -                | -                | -         |     0.26 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,951.32)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.888 | $5,000.00      | $4,438.19       |
| 2026-03-08 |      0.640 | $6,000.00      | $3,838.33       |
| 2026-02-24 |      0.562 | $2,000.00      | $1,123.33       |
| 2026-02-10 |      0.468 | $5,000.00      | $2,339.58       |
| 2026-02-01 |      0.408 | $1,000.00      | $407.71         |
| 2026-01-11 |      0.268 | $3,000.00      | $804.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
