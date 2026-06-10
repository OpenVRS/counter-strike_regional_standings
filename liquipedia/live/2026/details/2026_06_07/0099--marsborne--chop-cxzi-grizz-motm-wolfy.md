### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [99](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [23]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  1051.3<br />
<br />
Final Rank Value (1051.3) = Starting Rank Value (1034.2) + Head To Head Adjustments (17.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.112[<sup>2</sup>](#table1)
- LAN Wins: 0.531[<sup>2</sup>](#table1)

The average of these factors is 0.330<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1034.2
- 400 + ( ( 0.330 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1034.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.324
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |     1208 | 2026-04-28 | Chicken Coop Esports | L   | 0.929      | -            | -                | -                | -         |   -17.48 | chop, Grizz, Lucid, Minus, motm |
|           41 |     1249 | 2026-04-27 | Insane players       | W   | 0.922      | 0.363        | 0.013 (0.004)    | 0.348 (0.116)    | -         |     4.41 | chop, Grizz, Lucid, Minus, motm |
|           40 |     1292 | 2026-04-26 | Reign Above          | L   | 0.916      | -            | -                | -                | -         |   -26.38 | chop, Grizz, Lucid, Minus, motm |
|           39 |     1659 | 2026-04-14 | Team Voca            | W   | 0.835      | 0.333        | 0.050 (0.014)    | 0.617 (0.172)    | -         |    18.46 | chop, Cxzi, Grizz, motm, WolfY  |
|           38 |     1680 | 2026-04-13 | Team Aether          | W   | 0.828      | -            | -                | -                | -         |     4.46 | chop, Cxzi, Grizz, motm, WolfY  |
|           37 |     1724 | 2026-04-11 | Insane players       | W   | 0.815      | 0.333        | 0.013 (0.003)    | 0.348 (0.094)    | -         |     3.97 | chop, Cxzi, Grizz, motm, WolfY  |
|           36 |     2081 | 2026-04-03 | Galorys              | L   | 0.760      | -            | -                | -                | -         |   -10.64 | chop, Cxzi, Grizz, motm, WolfY  |
|           35 |     2262 | 2026-04-01 | ALKA GAMING          | W   | 0.747      | -            | -                | -                | 1 (0.747) |     1.91 | chop, Cxzi, Grizz, motm, WolfY  |
|           34 |     2273 | 2026-04-01 | Galorys              | L   | 0.746      | -            | -                | -                | -         |   -11.03 | chop, Cxzi, Grizz, motm, WolfY  |
|           33 |     2569 | 2026-03-28 | Turma do Pagode      | L   | 0.722      | -            | -                | -                | -         |    -8.14 | chop, Cxzi, Grizz, motm, WolfY  |
|           32 |     2684 | 2026-03-26 | 9z Team              | L   | 0.709      | -            | -                | -                | -         |    -1.26 | chop, Cxzi, Grizz, motm, WolfY  |
|           31 |     2687 | 2026-03-26 | Turma do Pagode      | W   | 0.708      | 0.393        | 0.023 (0.006)    | 0.517 (0.144)    | 1 (0.708) |    14.57 | chop, Cxzi, Grizz, motm, WolfY  |
|           30 |     3609 | 2026-03-08 | 9z Team              | L   | 0.587      | -            | -                | -                | -         |    -1.05 | chop, Cxzi, Grizz, motm, WolfY  |
|           29 |     3668 | 2026-03-07 | Imperial Esports     | W   | 0.581      | 0.384        | 0.023 (0.005)    | 0.456 (0.102)    | 1 (0.581) |    11.65 | chop, Cxzi, Grizz, motm, WolfY  |
|           28 |     3695 | 2026-03-07 | BESTIA               | W   | 0.579      | 0.384        | 0.015 (0.003)    | 0.614 (0.137)    | 1 (0.579) |    12.76 | chop, Cxzi, Grizz, motm, WolfY  |
|           27 |     3751 | 2026-03-05 | RED Canids           | W   | 0.568      | 0.384        | 0.040 (0.009)    | 0.309 (0.067)    | 1 (0.568) |    12.00 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     3756 | 2026-03-05 | Galorys              | W   | 0.568      | 0.384        | 0.013 (0.003)    | 0.460 (0.100)    | 1 (0.568) |    11.05 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     4041 | 2026-02-27 | 9z Team              | L   | 0.527      | -            | -                | -                | -         |    -0.80 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     4106 | 2026-02-26 | Fake do Biru         | W   | 0.520      | 0.435        | 0.020 (0.004)    | 0.527 (0.119)    | 1 (0.520) |     6.23 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     4167 | 2026-02-25 | Fluxo W7M            | L   | 0.513      | -            | -                | -                | -         |    -5.33 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     4244 | 2026-02-23 | Team Voca            | L   | 0.503      | -            | -                | -                | -         |    -4.20 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     4282 | 2026-02-22 | SkinRave Esports     | W   | 0.496      | -            | -                | -                | -         |     2.12 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     4358 | 2026-02-21 | Zomblers             | W   | 0.489      | 0.363        | -                | 0.408 (0.072)    | -         |     3.07 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     4408 | 2026-02-20 | Team Voca            | L   | 0.483      | -            | -                | -                | -         |    -4.00 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4506 | 2026-02-18 | FlyQuest RED         | W   | 0.469      | -            | -                | -                | -         |     1.12 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4565 | 2026-02-17 | Iowa Stormboar       | W   | 0.463      | 0.363        | 0.013 (0.002)    | -                | -         |     2.95 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4916 | 2026-02-10 | SkinRave Esports     | W   | 0.416      | -            | -                | -                | -         |     1.73 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4956 | 2026-02-09 | Insane players       | W   | 0.408      | -            | -                | -                | -         |     2.31 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     5005 | 2026-02-07 | Zomblers             | W   | 0.395      | -            | -                | -                | -         |     2.42 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     5043 | 2026-02-06 | Team Voca            | L   | 0.388      | -            | -                | -                | -         |    -3.07 | chop, Cxzi, Grizz, motm, WolfY  |
|           12 |     5213 | 2026-01-31 | BESTIA               | L   | 0.349      | -            | -                | -                | -         |    -2.48 | chop, Cxzi, Grizz, motm, WolfY  |
|           11 |     5216 | 2026-01-31 | Procyon Team         | W   | 0.348      | -            | -                | -                | 1 (0.348) |     2.38 | chop, Cxzi, Grizz, motm, WolfY  |
|           10 |     5261 | 2026-01-30 | BESTIA               | L   | 0.340      | -            | -                | -                | -         |    -2.44 | chop, Cxzi, Grizz, motm, WolfY  |
|            9 |     5268 | 2026-01-30 | Procyon Team         | W   | 0.339      | -            | -                | -                | 1 (0.339) |     2.26 | chop, Cxzi, Grizz, motm, WolfY  |
|            8 |     5835 | 2026-01-11 | NRG                  | L   | 0.215      | -            | -                | -                | -         |    -1.41 | chop, Cxzi, Grizz, motm, WolfY  |
|            7 |     5842 | 2026-01-10 | BOSS                 | W   | 0.210      | -            | -                | -                | 1 (0.210) |     0.83 | chop, Cxzi, Grizz, motm, WolfY  |
|            6 |     5844 | 2026-01-10 | Regain               | W   | 0.208      | -            | -                | -                | -         |     1.22 | chop, Cxzi, Grizz, motm, WolfY  |
|            5 |     5853 | 2026-01-09 | BOSS                 | L   | 0.204      | -            | -                | -                | -         |    -5.64 | chop, Cxzi, Grizz, motm, WolfY  |
|            4 |     5896 | 2026-01-04 | M80                  | L   | 0.166      | -            | -                | -                | -         |    -0.71 | chop, Cxzi, Grizz, motm, WolfY  |
|            3 |     5925 | 2026-01-03 | Reign Above          | W   | 0.161      | -            | -                | -                | -         |     0.24 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     5931 | 2026-01-03 | NRG                  | L   | 0.160      | -            | -                | -                | -         |    -1.14 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     5936 | 2026-01-03 | Reign Above          | W   | 0.160      | -            | -                | -                | -         |     0.23 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,801.34)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.835 | $5,000.00      | $4,176.84       |
| 2026-03-08 |      0.587 | $6,000.00      | $3,524.70       |
| 2026-02-24 |      0.509 | $2,000.00      | $1,018.79       |
| 2026-02-10 |      0.416 | $5,000.00      | $2,078.22       |
| 2026-02-01 |      0.355 | $1,000.00      | $355.44         |
| 2026-01-11 |      0.216 | $3,000.00      | $647.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
