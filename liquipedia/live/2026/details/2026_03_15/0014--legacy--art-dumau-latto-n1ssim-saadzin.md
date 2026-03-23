### Roster Details<br />
Team Name: Legacy<br />
Roster: arT, dumau, latto, n1ssim, saadzin<br />
Global Rank: [14](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [2]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  1507.5<br />
<br />
Final Rank Value (1507.5) = Starting Rank Value (1410.3) + Head To Head Adjustments (97.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.752[<sup>1</sup>](#table2)
- Bounty Collected: 0.637[<sup>2</sup>](#table1)
- Opponent Network: 0.256[<sup>2</sup>](#table1)
- LAN Wins: 0.419[<sup>2</sup>](#table1)

The average of these factors is 0.516<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1410.3
- 400 + ( ( 0.516 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1410.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.354
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       92 | 2026-03-13 | Aurora Gaming     | L   | 1.000      | -            | -                | -                | -         |    -5.87 | arT, dumau, latto, n1ssim, saadzin |
|           37 |      254 | 2026-03-09 | Natus Vincere     | W   | 1.000      | 0.805        | 1.000 (0.805)    | 0.371 (0.299)    | -         |    26.07 | arT, dumau, latto, n1ssim, saadzin |
|           36 |      322 | 2026-03-08 | Astralis          | W   | 1.000      | 0.805        | 0.576 (0.464)    | 0.418 (0.336)    | -         |    24.13 | arT, dumau, latto, n1ssim, saadzin |
|           35 |      373 | 2026-03-07 | Monte             | W   | 1.000      | 0.805        | 0.134 (0.108)    | 0.473 (0.381)    | -         |    18.94 | arT, dumau, latto, n1ssim, saadzin |
|           34 |      413 | 2026-03-06 | Aurora Gaming     | L   | 1.000      | -            | -                | -                | -         |    -4.25 | arT, dumau, latto, n1ssim, saadzin |
|           33 |      557 | 2026-03-03 | PARIVISION        | W   | 1.000      | 0.613        | 1.000 (0.613)    | 0.541 (0.331)    | -         |    28.96 | arT, dumau, latto, n1ssim, saadzin |
|           32 |      578 | 2026-03-02 | G2 Esports        | W   | 1.000      | 0.613        | 0.380 (0.233)    | 0.387 (0.237)    | -         |    23.20 | arT, dumau, latto, n1ssim, saadzin |
|           31 |      629 | 2026-03-01 | Ninjas in Pyjamas | W   | 1.000      | 0.613        | -                | 0.555 (0.340)    | -         |    15.99 | arT, dumau, latto, n1ssim, saadzin |
|           30 |     1943 | 2026-01-29 | FUT Esports       | L   | 0.900      | -            | -                | -                | -         |    -7.33 | dumau, latto, lux, n1ssim, saadzin |
|           29 |     1975 | 2026-01-28 | BC.Game Esports   | L   | 0.892      | -            | -                | -                | -         |   -13.96 | dumau, latto, lux, n1ssim, saadzin |
|           28 |     2291 | 2026-01-17 | MIBR              | L   | 0.821      | -            | -                | -                | -         |   -15.23 | dumau, latto, lux, n1ssim, saadzin |
|           27 |     2346 | 2026-01-16 | Sharks Esports    | L   | 0.815      | -            | -                | -                | -         |   -13.94 | dumau, latto, lux, n1ssim, saadzin |
|           26 |     2407 | 2026-01-15 | MIBR              | W   | 0.808      | 0.435        | -                | 0.528 (0.186)    | 1 (0.808) |    10.16 | dumau, latto, lux, n1ssim, saadzin |
|           25 |     2439 | 2026-01-14 | Game Hunters      | W   | 0.801      | 0.435        | -                | 0.405 (0.141)    | 1 (0.801) |     0.61 | dumau, latto, lux, n1ssim, saadzin |
|           24 |     3087 | 2025-11-27 | PARIVISION        | L   | 0.480      | -            | -                | -                | -         |    -1.00 | dumau, latto, lux, n1ssim, saadzin |
|           23 |     3103 | 2025-11-26 | B8                | L   | 0.472      | -            | -                | -                | -         |    -8.78 | dumau, latto, lux, n1ssim, saadzin |
|           22 |     3126 | 2025-11-25 | RED Canids        | W   | 0.465      | 0.624        | -                | 0.574 (0.167)    | 1 (0.465) |     4.20 | dumau, latto, lux, n1ssim, saadzin |
|           21 |     3147 | 2025-11-24 | Rare Atom         | W   | 0.460      | -            | -                | -                | 1 (0.460) |     0.84 | dumau, latto, lux, n1ssim, saadzin |
|           20 |     3162 | 2025-11-24 | FlyQuest          | L   | 0.458      | -            | -                | -                | -         |   -10.45 | dumau, latto, lux, n1ssim, saadzin |
|           19 |     3887 | 2025-11-01 | Aurora Gaming     | L   | 0.305      | -            | -                | -                | -         |    -0.91 | dumau, latto, lux, n1ssim, saadzin |
|           18 |     3903 | 2025-10-31 | BC.Game Esports   | W   | 0.299      | -            | -                | -                | 1 (0.299) |     5.00 | dumau, latto, lux, n1ssim, saadzin |
|           17 |     3914 | 2025-10-31 | PaiN Gaming       | W   | 0.297      | 1.000        | 0.286 (0.085)    | -                | 1 (0.297) |     2.78 | dumau, latto, lux, n1ssim, saadzin |
|           16 |     3934 | 2025-10-30 | FlyQuest          | W   | 0.291      | -            | -                | -                | 1 (0.291) |     2.60 | dumau, latto, lux, n1ssim, saadzin |
|           15 |     3949 | 2025-10-29 | B8                | L   | 0.285      | -            | -                | -                | -         |    -5.53 | dumau, latto, lux, n1ssim, saadzin |
|           14 |     3988 | 2025-10-28 | Astralis          | W   | 0.277      | 1.000        | 0.576 (0.160)    | -                | 1 (0.277) |     7.65 | dumau, latto, lux, n1ssim, saadzin |
|           13 |     4031 | 2025-10-27 | Gentle Mates      | W   | 0.270      | 1.000        | -                | 0.541 (0.146)    | 1 (0.270) |     4.26 | dumau, latto, lux, n1ssim, saadzin |
|           12 |     4091 | 2025-10-26 | Team Liquid       | L   | 0.263      | -            | -                | -                | -         |    -4.41 | dumau, latto, lux, n1ssim, saadzin |
|           11 |     4315 | 2025-10-19 | 3DMAX             | W   | 0.216      | 1.000        | 0.331 (0.072)    | -                | 1 (0.216) |     3.84 | dumau, latto, lux, n1ssim, saadzin |
|           10 |     4336 | 2025-10-18 | HEROIC            | W   | 0.210      | -            | -                | -                | -         |     3.89 | dumau, latto, lux, n1ssim, saadzin |
|            9 |     4365 | 2025-10-17 | FUT Esports       | W   | 0.204      | 1.000        | 0.413 (0.084)    | -                | -         |     5.09 | dumau, latto, lux, n1ssim, saadzin |
|            8 |     4401 | 2025-10-15 | Team Liquid       | L   | 0.196      | -            | -                | -                | -         |    -3.25 | dumau, latto, lux, n1ssim, saadzin |
|            7 |     4462 | 2025-10-14 | 3DMAX             | W   | 0.185      | -            | -                | -                | -         |     3.34 | dumau, latto, lux, n1ssim, saadzin |
|            6 |     4473 | 2025-10-13 | Virtus.pro        | W   | 0.182      | -            | -                | -                | -         |     0.22 | dumau, latto, lux, n1ssim, saadzin |
|            5 |     4952 | 2025-10-02 | Astralis          | L   | 0.105      | -            | -                | -                | -         |    -0.36 | dumau, latto, lux, n1ssim, saadzin |
|            4 |     4977 | 2025-10-01 | Gentle Mates      | L   | 0.099      | -            | -                | -                | -         |    -1.52 | dumau, latto, lux, n1ssim, saadzin |
|            3 |     5015 | 2025-09-30 | FURIA             | W   | 0.092      | 0.769        | 1.000 (0.071)    | -                | -         |     2.76 | dumau, latto, lux, n1ssim, saadzin |
|            2 |     5064 | 2025-09-29 | NRG               | W   | 0.085      | -            | -                | -                | -         |     0.95 | dumau, latto, lux, n1ssim, saadzin |
|            1 |     5101 | 2025-09-28 | B8                | L   | 0.078      | -            | -                | -                | -         |    -1.48 | dumau, latto, lux, n1ssim, saadzin |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($199,799.94)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.47) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      1.000 | $48,000.00     | $48,000.00      |
| 2026-01-30 |      0.906 | $2,500.00      | $2,265.51       |
| 2026-01-18 |      0.828 | $6,250.00      | $5,172.02       |
| 2025-11-01 |      0.305 | $187,500.00    | $57,109.38      |
| 2025-10-19 |      0.216 | $400,000.00    | $86,564.81      |
| 2025-10-02 |      0.106 | $6,500.00      | $688.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
