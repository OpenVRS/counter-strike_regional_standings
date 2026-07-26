### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [121](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [28]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  905.5<br />
<br />
Final Rank Value (905.5) = Starting Rank Value (876.6) + Head To Head Adjustments (29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.309[<sup>2</sup>](#table1)

The average of these factors is 0.251<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 876.6
- 400 + ( ( 0.251 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 876.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.222
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1918 | 2026-04-28 | Chicken Coop Esports | L   | 0.700      | -            | -                | -                | -         |    -8.86 | chop, Grizz, Lucid, Minus, motm |
|           33 |     1959 | 2026-04-27 | Insane players       | W   | 0.694      | 0.363        | 0.010 (0.003)    | 0.263 (0.066)    | 0 (0.000) |     5.72 | chop, Grizz, Lucid, Minus, motm |
|           32 |     2002 | 2026-04-26 | Reign Above          | L   | 0.687      | -            | -                | -                | -         |   -17.84 | chop, Grizz, Lucid, Minus, motm |
|           31 |     2369 | 2026-04-14 | Team Voca            | W   | 0.607      | 0.333        | 0.038 (0.008)    | 0.470 (0.095)    | -         |    13.85 | chop, Cxzi, Grizz, motm, WolfY  |
|           30 |     2390 | 2026-04-13 | Team Aether          | W   | 0.599      | -            | -                | -                | -         |     5.20 | chop, Cxzi, Grizz, motm, WolfY  |
|           29 |     2434 | 2026-04-11 | Insane players       | W   | 0.586      | 0.333        | 0.010 (0.002)    | 0.263 (0.051)    | -         |     5.06 | chop, Cxzi, Grizz, motm, WolfY  |
|           28 |     2791 | 2026-04-03 | Galorys              | L   | 0.531      | -            | -                | -                | -         |    -5.81 | chop, Cxzi, Grizz, motm, WolfY  |
|           27 |     2972 | 2026-04-01 | ALKA GAMING          | W   | 0.518      | 0.435        | -                | 0.240 (0.054)    | 1 (0.518) |     3.03 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     2983 | 2026-04-01 | Galorys              | L   | 0.517      | -            | -                | -                | -         |    -5.82 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     3279 | 2026-03-28 | Turma do Pagode      | L   | 0.493      | -            | -                | -                | -         |    -5.42 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     3394 | 2026-03-26 | 9z Team              | L   | 0.480      | -            | -                | -                | -         |    -0.06 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     3397 | 2026-03-26 | Turma do Pagode      | W   | 0.479      | 0.393        | 0.015 (0.003)    | 0.390 (0.073)    | 1 (0.479) |    10.00 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     4319 | 2026-03-08 | 9z Team              | L   | 0.359      | -            | -                | -                | -         |    -0.04 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     4378 | 2026-03-07 | Imperial Esports     | W   | 0.352      | 0.384        | 0.051 (0.007)    | 0.502 (0.068)    | 1 (0.352) |     7.90 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     4405 | 2026-03-07 | BESTIA               | W   | 0.350      | 0.384        | 0.021 (0.003)    | 0.561 (0.075)    | 1 (0.350) |     8.68 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     4461 | 2026-03-05 | RED Canids           | W   | 0.340      | 0.384        | 0.031 (0.004)    | -                | 1 (0.340) |     6.99 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4466 | 2026-03-05 | Galorys              | W   | 0.339      | 0.384        | 0.013 (0.002)    | 0.435 (0.057)    | 1 (0.339) |     7.50 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4751 | 2026-02-27 | 9z Team              | L   | 0.299      | -            | -                | -                | -         |    -0.03 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4816 | 2026-02-26 | Fake do Biru         | W   | 0.291      | 0.435        | 0.019 (0.002)    | 0.492 (0.062)    | 1 (0.291) |     4.29 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4877 | 2026-02-25 | Fluxo W7M            | L   | 0.285      | -            | -                | -                | -         |    -2.26 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     4954 | 2026-02-23 | Team Voca            | L   | 0.274      | -            | -                | -                | -         |    -6.54 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     4992 | 2026-02-22 | SkinRave Esports     | W   | 0.267      | -            | -                | -                | -         |     1.77 | chop, Cxzi, Grizz, motm, WolfY  |
|           12 |     5068 | 2026-02-21 | Zomblers             | W   | 0.261      | -            | -                | -                | -         |     2.59 | chop, Cxzi, Grizz, motm, WolfY  |
|           11 |     5118 | 2026-02-20 | Team Voca            | L   | 0.254      | -            | -                | -                | -         |    -6.13 | chop, Cxzi, Grizz, motm, WolfY  |
|           10 |     5216 | 2026-02-18 | FlyQuest RED         | W   | 0.241      | -            | -                | -                | -         |     1.17 | chop, Cxzi, Grizz, motm, WolfY  |
|            9 |     5275 | 2026-02-17 | Iowa Stormboar       | W   | 0.234      | 0.363        | 0.012 (0.001)    | 0.432 (0.037)    | -         |     2.55 | chop, Cxzi, Grizz, motm, WolfY  |
|            8 |     5627 | 2026-02-10 | SkinRave Esports     | W   | 0.187      | -            | -                | -                | -         |     1.21 | chop, Cxzi, Grizz, motm, WolfY  |
|            7 |     5667 | 2026-02-09 | Insane players       | W   | 0.180      | -            | -                | -                | -         |     1.67 | chop, Cxzi, Grizz, motm, WolfY  |
|            6 |     5716 | 2026-02-07 | Zomblers             | W   | 0.166      | -            | -                | -                | -         |     1.65 | chop, Cxzi, Grizz, motm, WolfY  |
|            5 |     5754 | 2026-02-06 | Team Voca            | L   | 0.159      | -            | -                | -                | -         |    -3.91 | chop, Cxzi, Grizz, motm, WolfY  |
|            4 |     5924 | 2026-01-31 | BESTIA               | L   | 0.120      | -            | -                | -                | -         |    -0.70 | chop, Cxzi, Grizz, motm, WolfY  |
|            3 |     5927 | 2026-01-31 | Procyon Team         | W   | 0.119      | -            | -                | -                | 1 (0.119) |     1.15 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     5972 | 2026-01-30 | BESTIA               | L   | 0.111      | -            | -                | -                | -         |    -0.65 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     5979 | 2026-01-30 | Procyon Team         | W   | 0.111      | -            | -                | -                | 1 (0.111) |     1.06 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,806.04)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.607 | $5,000.00      | $3,032.64       |
| 2026-03-08 |      0.359 | $6,000.00      | $2,151.67       |
| 2026-02-24 |      0.281 | $2,000.00      | $561.11         |
| 2026-02-10 |      0.187 | $5,000.00      | $934.03         |
| 2026-02-01 |      0.127 | $1,000.00      | $126.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
