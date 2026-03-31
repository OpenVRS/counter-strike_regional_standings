### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: cairne, r1nkle, sjuush, Snappi, xKacpersky<br />
Global Rank: [28](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [23]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  1352.4<br />
<br />
Final Rank Value (1352.4) = Starting Rank Value (1360.6) + Head To Head Adjustments (-8.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.504[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.163[<sup>2</sup>](#table1)
- LAN Wins: 0.885[<sup>2</sup>](#table1)

The average of these factors is 0.495<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1360.6
- 400 + ( ( 0.495 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1360.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.484
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      353 | 2026-03-21 | Team Liquid                | L   | 1.000      | -            | -                | -                | -         |   -18.82 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           40 |      445 | 2026-03-19 | PARIVISION                 | L   | 1.000      | -            | -                | -                | -         |    -3.15 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           39 |      585 | 2026-03-15 | OG                         | W   | 1.000      | 0.349        | -                | 0.298 (0.104)    | 1 (1.000) |     8.73 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           38 |      594 | 2026-03-15 | Alliance                   | W   | 1.000      | 0.349        | 0.095 (0.033)    | 0.881 (0.308)    | 1 (1.000) |    17.48 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           37 |      642 | 2026-03-14 | Gaimin Gladiators          | W   | 1.000      | 0.349        | -                | 0.237 (0.083)    | 1 (1.000) |    10.15 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           36 |      717 | 2026-03-12 | Team Voca                  | W   | 1.000      | 0.349        | 0.042 (0.015)    | 0.739 (0.258)    | 1 (1.000) |    12.18 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           35 |      721 | 2026-03-12 | SAW                        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.23 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           34 |      726 | 2026-03-12 | EYEBALLERS                 | L   | 1.000      | -            | -                | -                | -         |   -17.80 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           33 |      737 | 2026-03-12 | Dziuseppe                  | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.51 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           32 |     1107 | 2026-03-05 | G2 Esports                 | L   | 1.000      | -            | -                | -                | -         |    -9.48 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           31 |     1156 | 2026-03-04 | Gaimin Gladiators          | W   | 1.000      | 0.613        | -                | 0.237 (0.145)    | -         |     9.86 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           30 |     1184 | 2026-03-03 | NRG                        | W   | 1.000      | 0.613        | 0.111 (0.068)    | 0.303 (0.186)    | -         |    16.83 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           29 |     1245 | 2026-03-02 | M80                        | L   | 1.000      | -            | -                | -                | -         |   -14.96 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           28 |     1285 | 2026-03-01 | Legacy                     | L   | 1.000      | -            | -                | -                | -         |   -19.09 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           27 |     1735 | 2026-02-20 | 100 Thieves                | L   | 0.953      | -            | -                | -                | -         |   -17.35 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           26 |     1738 | 2026-02-20 | Monte                      | L   | 0.952      | -            | -                | -                | -         |   -10.99 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           25 |     1748 | 2026-02-20 | 100 Thieves                | W   | 0.951      | 0.341        | -                | 0.466 (0.151)    | 1 (0.951) |    11.47 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           24 |     2313 | 2026-02-08 | GamerLegion                | W   | 0.870      | 0.143        | 0.182 (0.023)    | -                | -         |    17.82 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           23 |     2342 | 2026-02-07 | M1x (Kosovar team)         | W   | 0.863      | -            | -                | -                | -         |     0.42 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           22 |     2368 | 2026-02-06 | Gentle Mates               | W   | 0.858      | -            | -                | -                | -         |    14.39 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           21 |     2581 | 2026-01-30 | BC.Game Esports            | L   | 0.811      | -            | -                | -                | -         |   -14.00 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           20 |     2608 | 2026-01-29 | Passion UA                 | W   | 0.804      | 0.783        | 0.062 (0.039)    | 0.309 (0.195)    | 1 (0.804) |     6.71 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           19 |     2626 | 2026-01-28 | Team Liquid                | L   | 0.798      | -            | -                | -                | -         |   -11.56 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           18 |     3079 | 2026-01-15 | Team Liquid                | L   | 0.711      | -            | -                | -                | -         |   -11.29 | cairne, r1nkle, sjuush, Snappi, xKacpersky  |
|           17 |     3275 | 2025-12-21 | BC.Game Esports            | W   | 0.545      | 0.309        | 0.089 (0.015)    | -                | 1 (0.545) |     8.12 | maden, r1nkle, sjuush, Snappi, xKacpersky   |
|           16 |     3278 | 2025-12-21 | Gentle Mates               | W   | 0.544      | 0.309        | 0.095 (0.016)    | -                | 1 (0.544) |     8.29 | maden, r1nkle, sjuush, Snappi, xKacpersky   |
|           15 |     3288 | 2025-12-21 | FC Famalicão Esports       | W   | 0.543      | -            | -                | -                | -         |     1.67 | maden, r1nkle, sjuush, Snappi, xKacpersky   |
|           14 |     3299 | 2025-12-20 | ASTRAL Esports             | W   | 0.539      | 0.309        | -                | 0.511 (0.085)    | -         |     2.45 | maden, r1nkle, sjuush, Snappi, xKacpersky   |
|           13 |     3304 | 2025-12-20 | Team USA (Portuguese team) | W   | 0.538      | -            | -                | -                | -         |     0.10 | maden, r1nkle, sjuush, Snappi, xKacpersky   |
|           12 |     3610 | 2025-12-02 | 3DMAX                      | L   | 0.418      | -            | -                | -                | -         |    -5.32 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|           11 |     3634 | 2025-12-01 | PARIVISION                 | L   | 0.410      | -            | -                | -                | -         |    -0.74 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|           10 |     3645 | 2025-11-30 | FaZe Clan                  | L   | 0.404      | -            | -                | -                | -         |    -6.00 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            9 |     3684 | 2025-11-29 | TYLOO                      | W   | 0.398      | 0.769        | 0.088 (0.027)    | -                | -         |     1.28 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            8 |     3706 | 2025-11-29 | Astralis                   | W   | 0.397      | 0.769        | 0.457 (0.139)    | 0.364 (0.111)    | -         |    10.59 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            7 |     3761 | 2025-11-26 | Fluxo W7M                  | W   | 0.377      | -            | -                | -                | -         |     2.99 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            6 |     3779 | 2025-11-25 | FaZe Clan                  | W   | 0.371      | 0.624        | 0.366 (0.085)    | -                | -         |     6.20 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            5 |     3797 | 2025-11-24 | Lynn Vision Gaming         | W   | 0.366      | -            | -                | -                | -         |     1.69 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            4 |     3817 | 2025-11-24 | NRG                        | L   | 0.364      | -            | -                | -                | -         |   -11.28 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            3 |     4634 | 2025-10-28 | Gentle Mates               | L   | 0.184      | -            | -                | -                | -         |    -3.00 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            2 |     4685 | 2025-10-27 | BC.Game Esports            | L   | 0.176      | -            | -                | -                | -         |    -2.99 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |
|            1 |     4743 | 2025-10-26 | HEROIC                     | L   | 0.170      | -            | -                | -                | -         |    -2.54 | ewjerkz, r1nkle, sjuush, Snappi, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,925.69)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-03-15 |      1.000 | $6,880.42      | $6,880.42       |
| 2026-03-05 |      1.000 | $6,500.00      | $6,500.00       |
| 2026-01-30 |      0.812 | $4,500.00      | $3,652.19       |
| 2026-01-18 |      0.732 | $7,500.00      | $5,486.63       |
| 2025-12-21 |      0.545 | $2,928.07      | $1,597.02       |
| 2025-12-02 |      0.418 | $10,000.00     | $4,184.72       |
| 2025-11-01 |      0.210 | $12,500.00     | $2,624.71       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
