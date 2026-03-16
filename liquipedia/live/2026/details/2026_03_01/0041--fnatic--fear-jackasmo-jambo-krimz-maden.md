### Roster Details<br />
Team Name: Fnatic<br />
Roster: fear, jackasmo, jambo, KRIMZ, maden<br />
Global Rank: [41](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [30]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  1237.4<br />
<br />
Final Rank Value (1237.4) = Starting Rank Value (1303.3) + Head To Head Adjustments (-65.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.515[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.196[<sup>2</sup>](#table1)
- LAN Wins: 0.765[<sup>2</sup>](#table1)

The average of these factors is 0.477<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1303.3
- 400 + ( ( 0.477 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1303.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.504
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           56 |       75 | 2026-02-27 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -8.04 | fear, jackasmo, jambo, KRIMZ, maden   |
|           55 |      128 | 2026-02-26 | Inner Circle Esports | L   | 1.000      | -            | -                | -                | -         |   -22.88 | fear, jackasmo, jambo, KRIMZ, maden   |
|           54 |      269 | 2026-02-22 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -8.32 | fear, jackasmo, jambo, KRIMZ, maden   |
|           53 |      285 | 2026-02-22 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |   -10.59 | fear, jackasmo, jambo, KRIMZ, maden   |
|           52 |      328 | 2026-02-21 | Monte                | W   | 1.000      | 0.341        | 0.161 (0.055)    | 0.510 (0.174)    | 1 (1.000) |    22.60 | fear, jackasmo, jambo, KRIMZ, maden   |
|           51 |      390 | 2026-02-20 | SAW                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.40 | fear, jackasmo, jambo, KRIMZ, maden   |
|           50 |      395 | 2026-02-20 | BetBoom Team         | L   | 1.000      | -            | -                | -                | -         |    -8.15 | fear, jackasmo, jambo, KRIMZ, maden   |
|           49 |      399 | 2026-02-20 | Oramond              | W   | 1.000      | 0.341        | 0.102 (0.035)    | 0.867 (0.296)    | 1 (1.000) |    11.69 | fear, jackasmo, jambo, KRIMZ, maden   |
|           48 |      803 | 2026-02-12 | SINNERS Esports      | L   | 1.000      | -            | -                | -                | -         |   -10.67 | fear, jackasmo, jambo, KRIMZ, maden   |
|           47 |      831 | 2026-02-11 | ENCE                 | W   | 1.000      | -            | -                | -                | -         |    13.07 | fear, jackasmo, jambo, KRIMZ, maden   |
|           46 |      840 | 2026-02-11 | 33                   | L   | 1.000      | -            | -                | -                | -         |   -20.73 | fear, jackasmo, jambo, KRIMZ, maden   |
|           45 |      873 | 2026-02-10 | K27                  | W   | 1.000      | 0.143        | 0.108 (0.015)    | 0.763 (0.109)    | -         |    21.02 | fear, jackasmo, jambo, KRIMZ, maden   |
|           44 |      888 | 2026-02-10 | OG                   | W   | 1.000      | -            | -                | -                | -         |     5.60 | fear, jackasmo, jambo, KRIMZ, maden   |
|           43 |     1460 | 2026-01-21 | GenOne               | L   | 0.935      | -            | -                | -                | -         |   -23.44 | fear, jackasmo, jambo, KRIMZ, maden   |
|           42 |     1486 | 2026-01-21 | KOLESIE              | L   | 0.933      | -            | -                | -                | -         |   -18.72 | fear, jackasmo, jambo, KRIMZ, maden   |
|           41 |     1731 | 2026-01-13 | Astralis             | L   | 0.880      | -            | -                | -                | -         |    -4.47 | fear, jackasmo, jambo, KRIMZ, maden   |
|           40 |     1909 | 2025-12-20 | Friendly Campers     | L   | 0.720      | -            | -                | -                | -         |   -15.27 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           39 |     1912 | 2025-12-20 | Illwill              | W   | 0.719      | 0.339        | 0.094 (0.023)    | 1.000 (0.244)    | 1 (0.719) |    15.55 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           38 |     1927 | 2025-12-19 | Lazer Cats           | W   | 0.714      | 0.339        | -                | 0.466 (0.113)    | 1 (0.714) |     2.81 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           37 |     1933 | 2025-12-19 | MOUZ NXT             | W   | 0.713      | 0.339        | -                | 1.000 (0.242)    | 1 (0.713) |     7.46 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           36 |     1942 | 2025-12-19 | CYBERSHOKE Esports   | L   | 0.712      | -            | -                | -                | -         |   -14.24 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           35 |     1959 | 2025-12-18 | G2 Ares              | W   | 0.705      | -            | -                | -                | 1 (0.705) |     0.31 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           34 |     2238 | 2025-12-01 | Passion UA           | L   | 0.593      | -            | -                | -                | -         |    -9.77 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           33 |     2250 | 2025-11-30 | Imperial Esports     | L   | 0.586      | -            | -                | -                | -         |   -10.82 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           32 |     2278 | 2025-11-29 | B8                   | L   | 0.581      | -            | -                | -                | -         |    -7.08 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           31 |     2310 | 2025-11-29 | 3DMAX                | W   | 0.579      | 0.769        | 0.401 (0.178)    | 0.298 (0.133)    | 1 (0.579) |    11.82 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           30 |     2359 | 2025-11-26 | NRG                  | W   | 0.560      | 0.624        | 0.074 (0.026)    | 0.525 (0.184)    | 1 (0.560) |    10.46 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           29 |     2383 | 2025-11-25 | Imperial Esports     | W   | 0.553      | 0.624        | 0.080 (0.028)    | 0.670 (0.231)    | 1 (0.553) |     6.94 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           28 |     2399 | 2025-11-24 | Fluxo W7M            | L   | 0.548      | -            | -                | -                | -         |   -11.32 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           27 |     2412 | 2025-11-24 | RED Canids           | W   | 0.547      | 0.624        | 0.050 (0.017)    | 0.675 (0.231)    | -         |     7.14 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           26 |     3210 | 2025-10-29 | GamerLegion          | L   | 0.373      | -            | -                | -                | -         |    -2.15 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           25 |     3223 | 2025-10-28 | MIBR                 | W   | 0.367      | -            | -                | -                | -         |     0.34 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           24 |     3282 | 2025-10-27 | FlyQuest             | L   | 0.359      | -            | -                | -                | -         |    -5.84 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           23 |     3327 | 2025-10-26 | Aurora Gaming        | L   | 0.353      | -            | -                | -                | -         |    -0.87 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           22 |     3629 | 2025-10-16 | 3DMAX                | L   | 0.290      | -            | -                | -                | -         |    -2.79 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           21 |     3662 | 2025-10-15 | HEROIC               | L   | 0.284      | -            | -                | -                | -         |    -2.56 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           20 |     3700 | 2025-10-15 | TYLOO                | W   | 0.278      | 1.000        | 0.058 (0.016)    | -                | -         |     0.75 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           19 |     3730 | 2025-10-13 | PaiN Gaming          | W   | 0.271      | 1.000        | 0.369 (0.100)    | -                | -         |     3.83 | blameF, fear, jackasmo, jambo, KRIMZ  |
|           18 |     4057 | 2025-10-05 | 9INE                 | W   | 0.215      | -            | -                | -                | -         |     3.72 | blameF, CYPHER, fear, jackasmo, jambo |
|           17 |     4085 | 2025-10-05 | OG                   | W   | 0.213      | -            | -                | -                | -         |     0.75 | blameF, CYPHER, fear, jackasmo, jambo |
|           16 |     4117 | 2025-10-04 | BIG                  | W   | 0.208      | -            | -                | -                | -         |     3.75 | blameF, CYPHER, fear, jackasmo, jambo |
|           15 |     4137 | 2025-10-04 | Metizport            | W   | 0.206      | -            | -                | -                | -         |     1.67 | blameF, CYPHER, fear, jackasmo, jambo |
|           14 |     4379 | 2025-09-28 | Phantom Esports      | L   | 0.164      | -            | -                | -                | -         |    -3.37 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           13 |     4421 | 2025-09-27 | Monte                | W   | 0.159      | -            | -                | -                | -         |     3.08 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           12 |     4439 | 2025-09-27 | Phantom Esports      | W   | 0.158      | -            | -                | -                | -         |     0.15 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           11 |     4555 | 2025-09-24 | ENCE                 | L   | 0.139      | -            | -                | -                | -         |    -2.77 | blameF, CYPHER, fear, jambo, KRIMZ    |
|           10 |     4560 | 2025-09-23 | Nemiga Gaming        | W   | 0.134      | -            | -                | -                | -         |     2.13 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            9 |     4578 | 2025-09-22 | Team Nemesis         | W   | 0.127      | -            | -                | -                | -         |     2.05 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            8 |     4659 | 2025-09-19 | Friendly Campers     | L   | 0.107      | -            | -                | -                | -         |    -2.40 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            7 |     4698 | 2025-09-18 | Alliance             | L   | 0.100      | -            | -                | -                | -         |    -1.46 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            6 |     4811 | 2025-09-14 | ECSTATIC             | L   | 0.074      | -            | -                | -                | -         |    -0.91 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            5 |     4842 | 2025-09-14 | Nemiga Gaming        | W   | 0.072      | -            | -                | -                | -         |     1.14 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            4 |     4869 | 2025-09-13 | RUBY                 | W   | 0.067      | -            | -                | -                | -         |     0.10 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            3 |     4897 | 2025-09-13 | Oramond              | W   | 0.065      | -            | -                | -                | -         |     0.27 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            2 |     4974 | 2025-09-11 | Ex-Zero Tenacity     | W   | 0.054      | -            | -                | -                | -         |     0.07 | blameF, CYPHER, fear, jambo, KRIMZ    |
|            1 |     5124 | 2025-09-08 | Bebop                | W   | 0.034      | -            | -                | -                | -         |     0.06 | blameF, CYPHER, fear, jambo, KRIMZ    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($38,306.16)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $1,178.90      | $1,178.90       |
| 2026-01-18 |      0.914 | $7,500.00      | $6,854.34       |
| 2025-12-21 |      0.727 | $1,124.38      | $817.21         |
| 2025-12-02 |      0.601 | $10,000.00     | $6,008.33       |
| 2025-11-01 |      0.392 | $18,750.00     | $7,356.34       |
| 2025-10-19 |      0.304 | $45,000.00     | $13,687.50      |
| 2025-10-05 |      0.215 | $5,500.00      | $1,185.17       |
| 2025-09-24 |      0.141 | $5,902.98      | $829.70         |
| 2025-09-23 |      0.134 | $1,250.00      | $167.01         |
| 2025-09-14 |      0.074 | $3,000.00      | $221.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
