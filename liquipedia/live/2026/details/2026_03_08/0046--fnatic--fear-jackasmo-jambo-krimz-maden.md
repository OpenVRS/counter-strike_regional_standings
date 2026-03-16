### Roster Details<br />
Team Name: Fnatic<br />
Roster: fear, jackasmo, jambo, KRIMZ, maden<br />
Global Rank: [46](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [35]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1234.0<br />
<br />
Final Rank Value (1234.0) = Starting Rank Value (1287.7) + Head To Head Adjustments (-53.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.511[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.181[<sup>2</sup>](#table1)
- LAN Wins: 0.729[<sup>2</sup>](#table1)

The average of these factors is 0.462<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1287.7
- 400 + ( ( 0.462 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1287.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.463
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       13 | 2026-03-07 | 9INE                 | L   | 1.000      | -            | -                | -                | -         |   -15.42 | fear, jackasmo, jambo, KRIMZ, maden   |
|           56 |       60 | 2026-03-05 | ENCE                 | W   | 1.000      | -            | -                | -                | -         |    13.73 | fear, jackasmo, jambo, KRIMZ, maden   |
|           55 |      245 | 2026-02-27 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -8.14 | fear, jackasmo, jambo, KRIMZ, maden   |
|           54 |      304 | 2026-02-26 | Inner Circle Esports | L   | 1.000      | -            | -                | -                | -         |   -22.81 | fear, jackasmo, jambo, KRIMZ, maden   |
|           53 |      468 | 2026-02-22 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -8.43 | fear, jackasmo, jambo, KRIMZ, maden   |
|           52 |      486 | 2026-02-22 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |   -10.19 | fear, jackasmo, jambo, KRIMZ, maden   |
|           51 |      534 | 2026-02-21 | Monte                | W   | 1.000      | 0.341        | 0.166 (0.057)    | 0.460 (0.157)    | 1 (1.000) |    22.83 | fear, jackasmo, jambo, KRIMZ, maden   |
|           50 |      603 | 2026-02-20 | SAW                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.42 | fear, jackasmo, jambo, KRIMZ, maden   |
|           49 |      609 | 2026-02-20 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -8.26 | fear, jackasmo, jambo, KRIMZ, maden   |
|           48 |      612 | 2026-02-20 | Oramond              | W   | 1.000      | 0.341        | 0.105 (0.036)    | 0.790 (0.270)    | 1 (1.000) |    12.01 | fear, jackasmo, jambo, KRIMZ, maden   |
|           47 |      986 | 2026-02-12 | SINNERS Esports      | L   | 1.000      | -            | -                | -                | -         |    -9.53 | fear, jackasmo, jambo, KRIMZ, maden   |
|           46 |     1013 | 2026-02-11 | ENCE                 | W   | 1.000      | -            | -                | -                | -         |    13.71 | fear, jackasmo, jambo, KRIMZ, maden   |
|           45 |     1021 | 2026-02-11 | 33                   | L   | 1.000      | -            | -                | -                | -         |   -20.98 | fear, jackasmo, jambo, KRIMZ, maden   |
|           44 |     1053 | 2026-02-10 | K27                  | W   | 1.000      | 0.143        | 0.111 (0.016)    | 0.706 (0.101)    | -         |    22.60 | fear, jackasmo, jambo, KRIMZ, maden   |
|           43 |     1067 | 2026-02-10 | OG                   | W   | 1.000      | -            | -                | -                | -         |     5.02 | fear, jackasmo, jambo, KRIMZ, maden   |
|           42 |     1639 | 2026-01-21 | GenOne               | L   | 0.894      | -            | -                | -                | -         |   -20.34 | fear, jackasmo, jambo, KRIMZ, maden   |
|           41 |     1665 | 2026-01-21 | KOLESIE              | L   | 0.892      | -            | -                | -                | -         |   -17.24 | fear, jackasmo, jambo, KRIMZ, maden   |
|           40 |     1911 | 2026-01-13 | Astralis             | L   | 0.839      | -            | -                | -                | -         |    -4.41 | fear, jackasmo, jambo, KRIMZ, maden   |
|           39 |     2090 | 2025-12-20 | Friendly Campers     | L   | 0.679      | -            | -                | -                | -         |   -14.78 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           38 |     2092 | 2025-12-20 | Illwill              | W   | 0.678      | 0.339        | 0.107 (0.025)    | 1.000 (0.230)    | 1 (0.678) |    13.51 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           37 |     2107 | 2025-12-19 | Lazer Cats           | W   | 0.673      | 0.339        | -                | 0.523 (0.119)    | 1 (0.673) |     3.61 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           36 |     2113 | 2025-12-19 | MOUZ NXT             | W   | 0.671      | 0.339        | -                | 1.000 (0.228)    | 1 (0.671) |     8.13 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           35 |     2122 | 2025-12-19 | CYBERSHOKE Esports   | L   | 0.671      | -            | -                | -                | -         |   -12.79 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           34 |     2139 | 2025-12-18 | G2 Ares              | W   | 0.664      | -            | -                | -                | 1 (0.664) |     2.01 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           33 |     2423 | 2025-12-01 | Passion UA           | L   | 0.551      | -            | -                | -                | -         |    -9.23 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           32 |     2434 | 2025-11-30 | Imperial Esports     | L   | 0.545      | -            | -                | -                | -         |    -8.76 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           31 |     2462 | 2025-11-29 | B8                   | L   | 0.540      | -            | -                | -                | -         |    -6.94 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           30 |     2494 | 2025-11-29 | 3DMAX                | W   | 0.538      | 0.769        | 0.393 (0.162)    | 0.264 (0.109)    | 1 (0.538) |    10.79 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           29 |     2540 | 2025-11-26 | NRG                  | W   | 0.519      | 0.624        | 0.077 (0.025)    | 0.503 (0.163)    | 1 (0.519) |     9.74 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           28 |     2564 | 2025-11-25 | Imperial Esports     | W   | 0.512      | 0.624        | 0.085 (0.027)    | 0.703 (0.225)    | 1 (0.512) |     7.79 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           27 |     2577 | 2025-11-24 | Fluxo W7M            | L   | 0.507      | -            | -                | -                | -         |    -8.85 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           26 |     2590 | 2025-11-24 | RED Canids           | W   | 0.505      | 0.624        | 0.052 (0.016)    | 0.674 (0.213)    | -         |     7.80 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           25 |     3377 | 2025-10-29 | GamerLegion          | L   | 0.331      | -            | -                | -                | -         |    -1.83 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           24 |     3390 | 2025-10-28 | MIBR                 | W   | 0.326      | -            | -                | -                | -         |     0.18 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           23 |     3447 | 2025-10-27 | FlyQuest             | L   | 0.318      | -            | -                | -                | -         |    -5.04 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           22 |     3492 | 2025-10-26 | Aurora Gaming        | L   | 0.312      | -            | -                | -                | -         |    -0.77 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           21 |     3779 | 2025-10-16 | 3DMAX                | L   | 0.249      | -            | -                | -                | -         |    -2.47 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           20 |     3811 | 2025-10-15 | HEROIC               | L   | 0.243      | -            | -                | -                | -         |    -2.16 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           19 |     3849 | 2025-10-15 | TYLOO                | W   | 0.236      | 1.000        | 0.055 (0.013)    | -                | -         |     0.67 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           18 |     3879 | 2025-10-13 | PaiN Gaming          | W   | 0.229      | 1.000        | 0.364 (0.084)    | -                | -         |     3.02 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           17 |     4194 | 2025-10-05 | 9INE                 | W   | 0.174      | -            | -                | -                | -         |     3.03 | blameF, CYPHER, fear, jackasmo, jambo |
|           16 |     4220 | 2025-10-05 | OG                   | W   | 0.171      | -            | -                | -                | -         |     0.57 | blameF, CYPHER, fear, jackasmo, jambo |
|           15 |     4251 | 2025-10-04 | BIG                  | W   | 0.167      | -            | -                | -                | -         |     0.51 | blameF, CYPHER, fear, jackasmo, jambo |
|           14 |     4271 | 2025-10-04 | Metizport            | W   | 0.165      | -            | -                | -                | -         |     1.40 | blameF, CYPHER, fear, jackasmo, jambo |
|           13 |     4506 | 2025-09-28 | Phantom Esports      | L   | 0.123      | -            | -                | -                | -         |    -2.52 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           12 |     4547 | 2025-09-27 | Monte                | W   | 0.118      | -            | -                | -                | -         |     2.31 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           11 |     4564 | 2025-09-27 | Phantom Esports      | W   | 0.116      | -            | -                | -                | -         |     0.11 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           10 |     4675 | 2025-09-24 | ENCE                 | L   | 0.097      | -            | -                | -                | -         |    -1.92 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            9 |     4680 | 2025-09-23 | Nemiga Gaming        | W   | 0.092      | -            | -                | -                | -         |     2.03 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            8 |     4698 | 2025-09-22 | Team Nemesis         | W   | 0.086      | -            | -                | -                | -         |     1.45 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            7 |     4779 | 2025-09-19 | Friendly Campers     | L   | 0.066      | -            | -                | -                | -         |    -1.50 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            6 |     4818 | 2025-09-18 | Alliance             | L   | 0.059      | -            | -                | -                | -         |    -0.84 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            5 |     4931 | 2025-09-14 | ECSTATIC             | L   | 0.033      | -            | -                | -                | -         |    -0.32 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            4 |     4962 | 2025-09-14 | Nemiga Gaming        | W   | 0.030      | -            | -                | -                | -         |     0.67 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            3 |     4989 | 2025-09-13 | RUBY                 | W   | 0.026      | -            | -                | -                | -         |     0.04 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            2 |     5017 | 2025-09-13 | Oramond              | W   | 0.023      | -            | -                | -                | -         |     0.11 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            1 |     5094 | 2025-09-11 | Ex-Zero Tenacity     | W   | 0.012      | -            | -                | -                | -         |     0.02 | blameF, CYPHER, fear, jambo, KRIMZ    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,251.19)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $1,178.90      | $1,178.90       |
| 2026-01-18 |      0.873 | $7,500.00      | $6,544.10       |
| 2025-12-21 |      0.685 | $1,124.38      | $770.69         |
| 2025-12-02 |      0.559 | $10,000.00     | $5,594.68       |
| 2025-11-01 |      0.351 | $18,750.00     | $6,580.73       |
| 2025-10-19 |      0.263 | $45,000.00     | $11,826.04      |
| 2025-10-05 |      0.174 | $5,500.00      | $957.66         |
| 2025-09-24 |      0.099 | $5,902.98      | $585.52         |
| 2025-09-23 |      0.092 | $1,250.00      | $115.31         |
| 2025-09-14 |      0.033 | $3,000.00      | $97.57          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
