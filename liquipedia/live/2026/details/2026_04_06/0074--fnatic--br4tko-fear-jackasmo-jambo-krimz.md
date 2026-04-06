### Roster Details<br />
Team Name: Fnatic<br />
Roster: Br4tkO, fear, jackasmo, jambo, KRIMZ<br />
Global Rank: [74](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [50]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  1197.7<br />
<br />
Final Rank Value (1197.7) = Starting Rank Value (1229.4) + Head To Head Adjustments (-31.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.410[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.762[<sup>2</sup>](#table1)

The average of these factors is 0.424<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1229.4
- 400 + ( ( 0.424 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1229.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.360
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      221 | 2026-03-31 | Alliance                | L   | 1.000      | -            | -                | -                | -         |    -6.32 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           46 |      238 | 2026-03-31 | FaZe Clan               | W   | 1.000      | 0.354        | 0.375 (0.133)    | 0.350 (0.124)    | 1 (1.000) |    25.88 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           45 |      296 | 2026-03-30 | INFINITE                | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.00 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           44 |      308 | 2026-03-30 | Sashi Esport            | L   | 1.000      | -            | -                | -                | -         |   -15.59 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           43 |      587 | 2026-03-24 | Aimclub (Romanian team) | L   | 1.000      | -            | -                | -                | -         |   -27.78 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           42 |      611 | 2026-03-24 | MOUZ NXT                | L   | 1.000      | -            | -                | -                | -         |   -15.22 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           41 |      626 | 2026-03-24 | Aimclub (Romanian team) | W   | 1.000      | 0.435        | -                | 0.271 (0.118)    | 1 (1.000) |     2.72 | Br4tkO, fear, jackasmo, jambo, KRIMZ |
|           40 |     1465 | 2026-03-07 | 9INE                    | L   | 1.000      | -            | -                | -                | -         |   -12.57 | fear, jackasmo, jambo, KRIMZ, maden  |
|           39 |     1568 | 2026-03-05 | ENCE                    | W   | 0.987      | 0.435        | 0.016 (0.007)    | 0.317 (0.136)    | -         |    12.56 | fear, jackasmo, jambo, KRIMZ, maden  |
|           38 |     1848 | 2026-02-27 | BetBoom Team            | L   | 0.946      | -            | -                | -                | -         |    -6.00 | fear, jackasmo, jambo, KRIMZ, maden  |
|           37 |     1908 | 2026-02-26 | Inner Circle Esports    | L   | 0.940      | -            | -                | -                | -         |   -18.06 | fear, jackasmo, jambo, KRIMZ, maden  |
|           36 |     2085 | 2026-02-22 | BetBoom Team            | L   | 0.914      | -            | -                | -                | -         |    -5.96 | fear, jackasmo, jambo, KRIMZ, maden  |
|           35 |     2103 | 2026-02-22 | HOTU                    | L   | 0.913      | -            | -                | -                | -         |    -9.25 | fear, jackasmo, jambo, KRIMZ, maden  |
|           34 |     2154 | 2026-02-21 | Monte                   | W   | 0.907      | 0.341        | 0.114 (0.035)    | 0.487 (0.151)    | 1 (0.907) |    24.07 | fear, jackasmo, jambo, KRIMZ, maden  |
|           33 |     2227 | 2026-02-20 | SAW                     | W   | 0.899      | -            | -                | -                | 1 (0.899) |     4.03 | fear, jackasmo, jambo, KRIMZ, maden  |
|           32 |     2233 | 2026-02-20 | BetBoom Team            | L   | 0.899      | -            | -                | -                | -         |    -5.45 | fear, jackasmo, jambo, KRIMZ, maden  |
|           31 |     2237 | 2026-02-20 | Oramond                 | W   | 0.898      | 0.341        | 0.049 (0.015)    | 0.473 (0.145)    | 1 (0.898) |    10.16 | fear, jackasmo, jambo, KRIMZ, maden  |
|           30 |     2645 | 2026-02-12 | SINNERS Esports         | L   | 0.846      | -            | -                | -                | -         |    -4.49 | fear, jackasmo, jambo, KRIMZ, maden  |
|           29 |     2673 | 2026-02-11 | ENCE                    | W   | 0.841      | -            | -                | -                | -         |     9.96 | fear, jackasmo, jambo, KRIMZ, maden  |
|           28 |     2682 | 2026-02-11 | 33                      | L   | 0.840      | -            | -                | -                | -         |    -9.13 | fear, jackasmo, jambo, KRIMZ, maden  |
|           27 |     2715 | 2026-02-10 | K27                     | W   | 0.834      | 0.143        | 0.157 (0.019)    | 0.975 (0.116)    | -         |    22.02 | fear, jackasmo, jambo, KRIMZ, maden  |
|           26 |     2730 | 2026-02-10 | OG                      | W   | 0.832      | -            | -                | -                | -         |    14.66 | fear, jackasmo, jambo, KRIMZ, maden  |
|           25 |     3315 | 2026-01-21 | GenOne                  | L   | 0.702      | -            | -                | -                | -         |   -17.26 | fear, jackasmo, jambo, KRIMZ, maden  |
|           24 |     3341 | 2026-01-21 | KOLESIE                 | L   | 0.699      | -            | -                | -                | -         |   -12.03 | fear, jackasmo, jambo, KRIMZ, maden  |
|           23 |     3591 | 2026-01-13 | Astralis                | L   | 0.646      | -            | -                | -                | -         |    -1.92 | fear, jackasmo, jambo, KRIMZ, maden  |
|           22 |     3775 | 2025-12-20 | ESC Gaming              | L   | 0.487      | -            | -                | -                | -         |    -9.52 | blameF, fear, jackasmo, jambo, KRIMZ |
|           21 |     3778 | 2025-12-20 | Illwill                 | W   | 0.486      | 0.339        | 0.042 (0.007)    | -                | 1 (0.486) |     3.32 | blameF, fear, jackasmo, jambo, KRIMZ |
|           20 |     3793 | 2025-12-19 | Lazer Cats              | W   | 0.481      | -            | -                | -                | 1 (0.481) |     3.64 | blameF, fear, jackasmo, jambo, KRIMZ |
|           19 |     3799 | 2025-12-19 | MOUZ NXT                | W   | 0.479      | 0.339        | 0.037 (0.006)    | 1.000 (0.163)    | 1 (0.479) |     7.11 | blameF, fear, jackasmo, jambo, KRIMZ |
|           18 |     3808 | 2025-12-19 | CYBERSHOKE Esports      | L   | 0.478      | -            | -                | -                | -         |    -7.36 | blameF, fear, jackasmo, jambo, KRIMZ |
|           17 |     3825 | 2025-12-18 | G2 Ares                 | W   | 0.471      | -            | -                | -                | 1 (0.471) |     1.26 | blameF, fear, jackasmo, jambo, KRIMZ |
|           16 |     4104 | 2025-12-01 | Passion UA              | L   | 0.359      | -            | -                | -                | -         |    -3.66 | blameF, fear, jackasmo, jambo, KRIMZ |
|           15 |     4116 | 2025-11-30 | Imperial Esports        | L   | 0.353      | -            | -                | -                | -         |    -4.66 | blameF, fear, jackasmo, jambo, KRIMZ |
|           14 |     4144 | 2025-11-29 | B8                      | L   | 0.348      | -            | -                | -                | -         |    -1.52 | blameF, fear, jackasmo, jambo, KRIMZ |
|           13 |     4176 | 2025-11-29 | 3DMAX                   | W   | 0.345      | 0.769        | 0.215 (0.057)    | 0.492 (0.131)    | -         |     9.46 | blameF, fear, jackasmo, jambo, KRIMZ |
|           12 |     4225 | 2025-11-26 | NRG                     | W   | 0.327      | -            | -                | -                | -         |     0.32 | blameF, fear, jackasmo, jambo, KRIMZ |
|           11 |     4249 | 2025-11-25 | Imperial Esports        | W   | 0.320      | 0.624        | 0.043 (0.009)    | 0.529 (0.106)    | -         |     5.95 | blameF, fear, jackasmo, jambo, KRIMZ |
|           10 |     4265 | 2025-11-24 | Fluxo W7M               | L   | 0.315      | -            | -                | -                | -         |    -3.00 | blameF, fear, jackasmo, jambo, KRIMZ |
|            9 |     4278 | 2025-11-24 | RED Canids              | W   | 0.313      | 0.624        | -                | 0.483 (0.095)    | -         |     5.71 | blameF, fear, jackasmo, jambo, KRIMZ |
|            8 |     5076 | 2025-10-29 | GamerLegion             | L   | 0.139      | -            | -                | -                | -         |    -0.67 | blameF, fear, jackasmo, jambo, KRIMZ |
|            7 |     5089 | 2025-10-28 | MIBR                    | W   | 0.134      | -            | -                | -                | -         |     0.09 | blameF, fear, jackasmo, jambo, KRIMZ |
|            6 |     5148 | 2025-10-27 | FlyQuest                | L   | 0.126      | -            | -                | -                | -         |    -1.79 | blameF, fear, jackasmo, jambo, KRIMZ |
|            5 |     5193 | 2025-10-26 | Aurora Gaming           | L   | 0.120      | -            | -                | -                | -         |    -0.09 | blameF, fear, jackasmo, jambo, KRIMZ |
|            4 |     5495 | 2025-10-16 | 3DMAX                   | L   | 0.057      | -            | -                | -                | -         |    -0.21 | blameF, fear, jackasmo, jambo, KRIMZ |
|            3 |     5528 | 2025-10-15 | HEROIC                  | L   | 0.050      | -            | -                | -                | -         |    -0.20 | blameF, fear, jackasmo, jambo, KRIMZ |
|            2 |     5566 | 2025-10-15 | TYLOO                   | W   | 0.044      | -            | -                | -                | -         |     1.09 | blameF, fear, jackasmo, jambo, KRIMZ |
|            1 |     5596 | 2025-10-13 | PaiN Gaming             | W   | 0.037      | 1.000        | 0.272 (0.010)    | -                | -         |     1.02 | blameF, fear, jackasmo, jambo, KRIMZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,566.21)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      0.914 | $1,178.90      | $1,077.42       |
| 2026-01-18 |      0.680 | $7,500.00      | $5,103.04       |
| 2025-12-21 |      0.493 | $1,124.38      | $554.66         |
| 2025-12-02 |      0.367 | $10,000.00     | $3,673.27       |
| 2025-11-01 |      0.159 | $18,750.00     | $2,978.10       |
| 2025-10-19 |      0.071 | $45,000.00     | $3,179.72       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
