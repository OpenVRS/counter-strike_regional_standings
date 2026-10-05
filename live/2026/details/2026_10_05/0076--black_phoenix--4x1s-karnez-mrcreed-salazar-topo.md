### Roster Details<br />
Team Name: Black Phoenix<br />
Roster: 4X1s, karnez, MRcreed, Salazar, topo<br />
Global Rank: [76](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [56]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1115.7<br />
<br />
Final Rank Value (1115.7) = Starting Rank Value (1009.1) + Head To Head Adjustments (106.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.408[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.305<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1009.1
- 400 + ( ( 0.305 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1009.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|          108 |      242 | 2026-09-29 | HOTU             | L   | 1.000      | -            | -                | -                | -         |    -4.24 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          107 |      250 | 2026-09-29 | UPGRADE          | L   | 1.000      | -            | -                | -                | -         |   -13.31 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          106 |      257 | 2026-09-29 | HOTU             | W   | 1.000      | 0.417        | 0.119 (0.049)    | 0.910 (0.379)    | 1 (1.000) |    27.49 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          105 |      299 | 2026-09-27 | ex-RUSTEC        | W   | 1.000      | 0.384        | -                | 0.778 (0.299)    | 0 (0.000) |    14.66 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          104 |      316 | 2026-09-27 | Leo              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.53 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          103 |      328 | 2026-09-27 | Nexus            | L   | 1.000      | -            | -                | -                | -         |   -18.70 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          102 |      375 | 2026-09-26 | Nemiga           | W   | 1.000      | 0.384        | 0.149 (0.057)    | 1.000 (0.384)    | 0 (0.000) |    28.92 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          101 |      455 | 2026-09-25 | Acend            | L   | 1.000      | -            | -                | -                | -         |    -9.95 | 4X1s, karnez, MRcreed, Salazar, topo  |
|          100 |      495 | 2026-09-24 | INOX Division    | W   | 1.000      | 0.384        | 0.063 (0.024)    | 1.000 (0.384)    | 0 (0.000) |    16.62 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           99 |      518 | 2026-09-24 | ex-RUSTEC        | W   | 1.000      | 0.371        | -                | 0.778 (0.288)    | 0 (0.000) |    14.80 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           98 |      579 | 2026-09-23 | Drama            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.96 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           97 |      653 | 2026-09-22 | G2 Ares          | W   | 1.000      | 0.384        | -                | 0.731 (0.281)    | 0 (0.000) |    11.35 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           96 |      673 | 2026-09-22 | ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -14.37 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           95 |      693 | 2026-09-21 | QUAZAR           | L   | 1.000      | -            | -                | -                | -         |   -12.61 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           94 |      705 | 2026-09-20 | BAKS             | L   | 1.000      | -            | -                | -                | -         |   -13.95 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           93 |      724 | 2026-09-20 | benched gods     | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.37 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           92 |      734 | 2026-09-19 | BAKS             | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.10 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           91 |      798 | 2026-09-18 | Lavked           | W   | 1.000      | -            | -                | -                | -         |    11.06 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           90 |      830 | 2026-09-17 | ex-RUSTEC        | W   | 1.000      | 0.396        | 0.025 (0.010)    | 0.778 (0.308)    | -         |    16.51 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           89 |      893 | 2026-09-16 | ENCE             | W   | 1.000      | -            | -                | -                | -         |    15.30 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           88 |      910 | 2026-09-15 | Just Players     | L   | 1.000      | -            | -                | -                | -         |   -17.31 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           87 |      927 | 2026-09-14 | WW               | L   | 1.000      | -            | -                | -                | -         |   -11.73 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           86 |      934 | 2026-09-14 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |    -2.08 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           85 |     1126 | 2026-09-10 | INOX Division    | L   | 1.000      | -            | -                | -                | -         |   -10.46 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           84 |     1236 | 2026-09-08 | PsychoFace       | W   | 1.000      | -            | -                | -                | -         |     7.80 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           83 |     1347 | 2026-09-06 | HAVU             | W   | 1.000      | -            | -                | -                | -         |    11.64 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           82 |     1427 | 2026-09-04 | UNiTY            | L   | 0.993      | -            | -                | -                | -         |   -12.25 | 4X1s, karnez, MRcreed, Salazar, topo  |
|           81 |     1510 | 2026-09-02 | INFINITE         | L   | 0.980      | -            | -                | -                | -         |    -4.65 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           80 |     1518 | 2026-09-02 | ex-Zero Tenacity | L   | 0.979      | -            | -                | -                | -         |   -12.98 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           79 |     1599 | 2026-08-31 | BBL              | W   | 0.965      | 0.435        | 0.048 (0.020)    | 0.779 (0.327)    | -         |    26.58 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           78 |     1643 | 2026-08-30 | SPARTA           | L   | 0.960      | -            | -                | -                | -         |   -16.01 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           77 |     1734 | 2026-08-28 | UPGRADE          | W   | 0.948      | 0.435        | 0.026 (0.011)    | 0.755 (0.311)    | -         |    21.17 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           76 |     1754 | 2026-08-28 | Rune Eaters      | W   | 0.946      | -            | -                | -                | -         |    19.84 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           75 |     1776 | 2026-08-27 | FORZE Reload     | L   | 0.941      | -            | -                | -                | -         |   -12.08 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           74 |     1802 | 2026-08-27 | Nemiga           | L   | 0.939      | -            | -                | -                | -         |    -2.18 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           73 |     1834 | 2026-08-26 | HYPERSPIRIT      | W   | 0.934      | -            | -                | -                | -         |     8.71 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           72 |     1895 | 2026-08-25 | ex-Zero Tenacity | L   | 0.926      | -            | -                | -                | -         |   -16.55 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           71 |     1900 | 2026-08-25 | PRIVATE          | W   | 0.925      | -            | -                | -                | -         |    14.52 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           70 |     1908 | 2026-08-24 | HAVU             | W   | 0.921      | -            | -                | -                | -         |    12.70 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           69 |     1923 | 2026-08-24 | HOTU             | L   | 0.919      | -            | -                | -                | -         |    -2.32 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           68 |     1935 | 2026-08-23 | PRIVATE          | W   | 0.915      | -            | -                | -                | -         |    16.18 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           67 |     1945 | 2026-08-23 | Lavked           | L   | 0.913      | -            | -                | -                | -         |   -17.16 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           66 |     1948 | 2026-08-23 | Nordic Partners  | W   | 0.913      | -            | -                | -                | -         |    13.58 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           65 |     1963 | 2026-08-22 | UNiTY            | L   | 0.908      | -            | -                | -                | -         |    -9.99 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           64 |     1974 | 2026-08-22 | Butterfly        | L   | 0.906      | -            | -                | -                | -         |   -10.39 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           63 |     1994 | 2026-08-21 | Bebop            | W   | 0.900      | -            | -                | -                | -         |     3.50 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           62 |     2005 | 2026-08-21 | ex-RUSTEC        | L   | 0.898      | -            | -                | -                | -         |   -14.01 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           61 |     2042 | 2026-08-19 | Bushido Wildcats | W   | 0.887      | 0.384        | -                | 1.000 (0.341)    | -         |    17.77 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           60 |     2054 | 2026-08-19 | Raccoons         | L   | 0.886      | -            | -                | -                | -         |   -24.85 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           59 |     2311 | 2026-08-08 | CYBERSHOKE       | L   | 0.813      | -            | -                | -                | -         |    -6.84 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           58 |     2370 | 2026-08-07 | Walczaki         | W   | 0.806      | 0.384        | 0.044 (0.013)    | -                | -         |    14.12 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           57 |     2424 | 2026-08-06 | Lavked           | W   | 0.799      | -            | -                | -                | -         |     8.77 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           56 |     2531 | 2026-08-02 | Sashi            | L   | 0.772      | -            | -                | -                | -         |    -6.33 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           55 |     2543 | 2026-08-01 | Just Players     | W   | 0.768      | -            | -                | -                | -         |    11.83 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           54 |     2565 | 2026-08-01 | Butterfly        | W   | 0.765      | -            | -                | -                | -         |    13.97 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           53 |     2579 | 2026-07-31 | JiJieHao         | W   | 0.761      | 0.384        | 0.069 (0.020)    | -                | -         |    22.79 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           52 |     2637 | 2026-07-30 | Mai Tai          | W   | 0.751      | -            | -                | -                | -         |     2.70 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           51 |     2657 | 2026-07-29 | Entropy          | W   | 0.746      | -            | -                | -                | -         |     8.02 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           50 |     2687 | 2026-07-28 | Bebop            | L   | 0.739      | -            | -                | -                | -         |   -19.89 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           49 |     2694 | 2026-07-28 | Enjoy            | W   | 0.739      | -            | -                | -                | -         |     7.09 | 4X1s, karnez, Salazar, topo, yiksrezo |
|           48 |     2712 | 2026-07-27 | Misa             | L   | 0.734      | -            | -                | -                | -         |   -16.63 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           47 |     2722 | 2026-07-27 | benched gods     | W   | 0.733      | -            | -                | -                | -         |     4.14 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           46 |     2785 | 2026-07-25 | Just Players     | L   | 0.720      | -            | -                | -                | -         |   -13.11 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           45 |     2823 | 2026-07-24 | EAC              | L   | 0.713      | -            | -                | -                | -         |    -9.30 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           44 |     2888 | 2026-07-22 | Rune Eaters      | W   | 0.698      | 0.384        | 0.046 (0.012)    | -                | -         |    16.13 | 4X1s, karnez, Sa1nTy, Salazar, topo   |
|           43 |     3510 | 2026-06-18 | 1win             | L   | 0.471      | -            | -                | -                | -         |    -2.47 | 4X1s, Alv, karnez, Krad, Salazar      |
|           42 |     3553 | 2026-06-14 | GenOne           | W   | 0.448      | -            | -                | -                | -         |    11.64 | 4X1s, Alv, karnez, Krad, Salazar      |
|           41 |     3638 | 2026-06-12 | 6666             | W   | 0.434      | -            | -                | -                | -         |     5.47 | 4X1s, Alv, karnez, Krad, Salazar      |
|           40 |     3720 | 2026-06-08 | ex-RUSTEC        | L   | 0.407      | -            | -                | -                | -         |    -9.63 | 4X1s, Alv, karnez, MRcreed, Salazar   |
|           39 |     3811 | 2026-06-05 | Acend            | L   | 0.386      | -            | -                | -                | -         |    -2.49 | 4X1s, Alv, karnez, MRcreed, Salazar   |
|           38 |     3825 | 2026-06-04 | 100 Thieves      | L   | 0.380      | -            | -                | -                | -         |    -0.55 | 4X1s, Alv, karnez, Krad, Salazar      |
|           37 |     3835 | 2026-06-04 | SPARTA           | L   | 0.378      | -            | -                | -                | -         |    -7.48 | 4X1s, Alv, karnez, Krad, Salazar      |
|           36 |     3893 | 2026-06-01 | ex-Zero Tenacity | W   | 0.360      | -            | -                | -                | -         |     4.75 | 4X1s, Alv, karnez, Krad, Salazar      |
|           35 |     3950 | 2026-05-30 | Banda Chuya      | L   | 0.347      | -            | -                | -                | -         |    -7.37 | 4X1s, Alv, karnez, Norwi, Salazar     |
|           34 |     4063 | 2026-05-28 | FOKUS            | L   | 0.332      | -            | -                | -                | -         |    -1.12 | 4X1s, Alv, karnez, Krad, Salazar      |
|           33 |     4065 | 2026-05-28 | DragonClaw       | W   | 0.331      | -            | -                | -                | -         |     2.57 | 4X1s, Alv, karnez, Krad, Salazar      |
|           32 |     4161 | 2026-05-25 | ex-RUBY          | W   | 0.313      | -            | -                | -                | -         |     3.00 | 4X1s, Alv, karnez, Krad, Salazar      |
|           31 |     4176 | 2026-05-25 | aAa              | W   | 0.312      | -            | -                | -                | -         |     0.71 | 4X1s, Alv, karnez, Krad, Salazar      |
|           30 |     4293 | 2026-05-22 | ASTRAL           | W   | 0.294      | -            | -                | -                | -         |     5.84 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           29 |     4305 | 2026-05-22 | Banda Chuya      | L   | 0.292      | -            | -                | -                | -         |    -6.48 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           28 |     4358 | 2026-05-21 | PsychoFace       | L   | 0.285      | -            | -                | -                | -         |    -6.16 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           27 |     4386 | 2026-05-20 | DragonClaw       | L   | 0.280      | -            | -                | -                | -         |    -7.12 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           26 |     4409 | 2026-05-19 | ALGO             | W   | 0.274      | -            | -                | -                | -         |     1.06 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           25 |     4436 | 2026-05-18 | Lazer Cats       | L   | 0.266      | -            | -                | -                | -         |    -2.99 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           24 |     4720 | 2026-05-09 | GenOne           | L   | 0.206      | -            | -                | -                | -         |    -0.97 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           23 |     4756 | 2026-05-07 | Butterfly        | L   | 0.194      | -            | -                | -                | -         |    -2.68 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           22 |     4778 | 2026-05-06 | FAVBET           | L   | 0.187      | -            | -                | -                | -         |    -5.52 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           21 |     4781 | 2026-05-06 | Butterfly        | L   | 0.186      | -            | -                | -                | -         |    -2.61 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           20 |     4812 | 2026-05-04 | MOUZ NXT         | W   | 0.173      | -            | -                | -                | -         |     0.33 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           19 |     4819 | 2026-05-04 | HYPERSPIRIT      | W   | 0.172      | -            | -                | -                | -         |     1.10 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           18 |     4851 | 2026-05-03 | HAVU             | W   | 0.165      | -            | -                | -                | -         |     2.52 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           17 |     4885 | 2026-05-02 | PsychoFace       | W   | 0.159      | -            | -                | -                | -         |     1.50 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           16 |     4948 | 2026-05-01 | STATE            | W   | 0.152      | -            | -                | -                | -         |     1.80 | 4X1s, Alv, karnez, riskyb0b, Salazar  |
|           15 |     5064 | 2026-04-28 | Lilmix           | L   | 0.134      | -            | -                | -                | -         |    -3.61 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           14 |     5116 | 2026-04-27 | BRUTE            | W   | 0.126      | -            | -                | -                | -         |     0.48 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           13 |     5186 | 2026-04-26 | Walczaki         | L   | 0.119      | -            | -                | -                | -         |    -2.13 | 4X1s, Alv, Jyo, karnez, Salazar       |
|           12 |     5292 | 2026-04-24 | BETBOOM          | W   | 0.107      | 0.435        | 0.377 (0.018)    | -                | -         |     3.19 | 4X1s, Alv, k0s, karnez, Salazar       |
|           11 |     5380 | 2026-04-22 | GenOne           | W   | 0.092      | -            | -                | -                | -         |     2.54 | 4X1s, Alv, k0s, karnez, Salazar       |
|           10 |     5388 | 2026-04-21 | Bebop            | W   | 0.085      | -            | -                | -                | -         |     0.20 | 4X1s, Alv, k0s, karnez, Salazar       |
|            9 |     5429 | 2026-04-19 | MOUZ NXT         | L   | 0.072      | -            | -                | -                | -         |    -2.12 | 4X1s, Alv, k0s, karnez, Salazar       |
|            8 |     5472 | 2026-04-16 | Walczaki         | L   | 0.052      | -            | -                | -                | -         |    -0.94 | 4X1s, Alv, k0s, karnez, Salazar       |
|            7 |     5492 | 2026-04-15 | Acend            | W   | 0.045      | -            | -                | -                | -         |     1.12 | 4X1s, Alv, k0s, karnez, Salazar       |
|            6 |     5547 | 2026-04-12 | Leo              | W   | 0.026      | -            | -                | -                | -         |     0.04 | 4X1s, Alv, k0s, karnez, Salazar       |
|            5 |     5573 | 2026-04-11 | ASTRAL           | W   | 0.019      | -            | -                | -                | -         |     0.38 | 4X1s, Alv, k0s, karnez, Salazar       |
|            4 |     5597 | 2026-04-10 | megoshort        | W   | 0.013      | -            | -                | -                | -         |     0.01 | 4X1s, Alv, k0s, karnez, Salazar       |
|            3 |     5604 | 2026-04-10 | Phantom          | L   | 0.012      | -            | -                | -                | -         |    -0.14 | 4X1s, Alv, k0s, karnez, Salazar       |
|            2 |     5623 | 2026-04-09 | BIG              | L   | 0.007      | -            | -                | -                | -         |    -0.01 | 4X1s, Alv, k0s, karnez, Salazar       |
|            1 |     5629 | 2026-04-09 | ASTRAL           | L   | 0.006      | -            | -                | -                | -         |    -0.07 | 4X1s, Alv, k0s, karnez, Salazar       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,979.52)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-27 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-09-23 |      1.000 | $750.00        | $750.00         |
| 2026-09-03 |      0.988 | $2,000.00      | $1,976.25       |
| 2026-08-08 |      0.814 | $2,500.00      | $2,035.81       |
| 2026-08-02 |      0.774 | $2,500.00      | $1,936.08       |
| 2026-04-27 |      0.127 | $2,000.00      | $253.81         |
| 2026-04-10 |      0.014 | $2,000.00      | $27.57          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
