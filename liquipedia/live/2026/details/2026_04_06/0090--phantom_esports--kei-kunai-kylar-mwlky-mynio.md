### Roster Details<br />
Team Name: Phantom Esports<br />
Roster: KEi, Kunai, Kylar, mwlky, mynio<br />
Global Rank: [90](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [64]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  1141.0<br />
<br />
Final Rank Value (1141.0) = Starting Rank Value (1322.3) + Head To Head Adjustments (-181.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.368[<sup>2</sup>](#table1)
- Opponent Network: 0.214[<sup>2</sup>](#table1)
- LAN Wins: 0.983[<sup>2</sup>](#table1)

The average of these factors is 0.471<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1322.3
- 400 + ( ( 0.471 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1322.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.634
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      170 | 2026-04-01 | B8                 | L   | 1.000      | -            | -                | -                | -         |    -3.94 | KEi, Kunai, Kylar, mwlky, mynio     |
|           54 |      195 | 2026-04-01 | AM Gaming          | W   | 1.000      | 0.341        | 0.025 (0.009)    | 0.767 (0.261)    | 1 (1.000) |    20.88 | KEi, Kunai, Kylar, mwlky, mynio     |
|           53 |      208 | 2026-04-01 | BESTIA             | L   | 1.000      | -            | -                | -                | -         |    -7.30 | KEi, Kunai, Kylar, mwlky, mynio     |
|           52 |      226 | 2026-03-31 | B8                 | L   | 1.000      | -            | -                | -                | -         |    -3.53 | KEi, Kunai, Kylar, mwlky, mynio     |
|           51 |      234 | 2026-03-31 | Z7 Esports         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.67 | KEi, Kunai, Kylar, mwlky, mynio     |
|           50 |      242 | 2026-03-31 | Máquinas           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.47 | KEi, Kunai, Kylar, mwlky, mynio     |
|           49 |      258 | 2026-03-31 | AM Gaming          | L   | 1.000      | -            | -                | -                | -         |    -9.53 | KEi, Kunai, Kylar, mwlky, mynio     |
|           48 |      279 | 2026-03-31 | WAZABI             | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.50 | KEi, Kunai, Kylar, mwlky, mynio     |
|           47 |      586 | 2026-03-24 | FOKUS              | L   | 1.000      | -            | -                | -                | -         |    -9.94 | KEi, Kunai, Kylar, mwlky, mynio     |
|           46 |      595 | 2026-03-24 | 3DMAX              | W   | 1.000      | 0.333        | 0.215 (0.072)    | -                | 1 (1.000) |    27.98 | KEi, Kunai, Kylar, mwlky, mynio     |
|           45 |      632 | 2026-03-24 | ASTRAL Esports     | W   | 1.000      | 0.333        | -                | 0.533 (0.178)    | 1 (1.000) |     9.54 | KEi, Kunai, Kylar, mwlky, mynio     |
|           44 |      682 | 2026-03-23 | EC BANGA           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.00 | KEi, Kunai, Kylar, mwlky, mynio     |
|           43 |      690 | 2026-03-23 | KUUSAMO.gg         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.48 | KEi, Kunai, Kylar, mwlky, mynio     |
|           42 |      693 | 2026-03-23 | No Surrender       | L   | 1.000      | -            | -                | -                | -         |   -26.71 | KEi, Kunai, Kylar, mwlky, mynio     |
|           41 |     1263 | 2026-03-11 | CYBERSHOKE Esports | L   | 1.000      | -            | -                | -                | -         |   -11.93 | KEi, Kunai, Kylar, mynio, parad17se |
|           40 |     1363 | 2026-03-09 | OMEGA              | W   | 1.000      | 0.435        | 0.025 (0.011)    | 0.588 (0.256)    | -         |    14.09 | KEi, Kunai, Kylar, mynio, parad17se |
|           39 |     1447 | 2026-03-08 | Leo Team           | L   | 1.000      | -            | -                | -                | -         |   -21.59 | KEi, Kunai, Kylar, mynio, parad17se |
|           38 |     1523 | 2026-03-06 | Oxuji Esports      | L   | 0.993      | -            | -                | -                | -         |   -18.81 | KEi, Kunai, Kylar, mwlky, mynio     |
|           37 |     1561 | 2026-03-05 | ASTRAL Esports     | W   | 0.987      | 0.435        | -                | 0.533 (0.229)    | -         |     7.81 | KEi, Kunai, Kylar, mynio, parad17se |
|           36 |     1692 | 2026-03-03 | Oxuji Esports      | W   | 0.971      | 0.435        | 0.011 (0.005)    | 0.474 (0.200)    | -         |    13.46 | KEi, Kunai, Kylar, mynio, parad17se |
|           35 |     1756 | 2026-03-01 | QWENTRY            | L   | 0.960      | -            | -                | -                | -         |   -17.81 | KEi, Kunai, Kylar, mynio, parad17se |
|           34 |     1932 | 2026-02-26 | Lazer Cats         | L   | 0.938      | -            | -                | -                | -         |   -20.31 | DGL, KEi, Kunai, Kylar, mynio       |
|           33 |     2044 | 2026-02-23 | ECSTATIC           | L   | 0.920      | -            | -                | -                | -         |    -8.83 | DGL, KEi, Kunai, Kylar, mynio       |
|           32 |     2055 | 2026-02-23 | Sashi Esport       | W   | 0.919      | 0.341        | 0.013 (0.004)    | 0.631 (0.198)    | 1 (0.919) |    16.28 | DGL, KEi, Kunai, Kylar, mynio       |
|           31 |     2063 | 2026-02-23 | Illwill            | L   | 0.918      | -            | -                | -                | -         |    -7.66 | DGL, KEi, Kunai, Kylar, mynio       |
|           30 |     2077 | 2026-02-22 | ECSTATIC           | L   | 0.915      | -            | -                | -                | -         |    -9.30 | DGL, KEi, Kunai, Kylar, mynio       |
|           29 |     2079 | 2026-02-22 | SINNERS Esports    | W   | 0.914      | 0.341        | 0.179 (0.056)    | 0.674 (0.211)    | 1 (0.914) |    24.81 | DGL, KEi, Kunai, Kylar, mynio       |
|           28 |     2083 | 2026-02-22 | GamerLegion        | L   | 0.914      | -            | -                | -                | -         |    -3.72 | DGL, KEi, Kunai, Kylar, mynio       |
|           27 |     2099 | 2026-02-22 | Ex-MINLATE         | W   | 0.913      | -            | -                | -                | -         |     7.86 | DGL, KEi, Kunai, Kylar, mynio       |
|           26 |     2110 | 2026-02-22 | Avanti Esport      | W   | 0.913      | -            | -                | -                | -         |     0.38 | DGL, KEi, Kunai, Kylar, mynio       |
|           25 |     2161 | 2026-02-21 | Young Ninjas       | L   | 0.907      | -            | -                | -                | -         |   -24.80 | DGL, KEi, Kunai, Kylar, mynio       |
|           24 |     2176 | 2026-02-21 | Acend              | L   | 0.906      | -            | -                | -                | -         |   -13.08 | DGL, KEi, Kunai, Kylar, mynio       |
|           23 |     2188 | 2026-02-21 | Tung Tung Sahur    | W   | 0.905      | 0.323        | 0.013 (0.004)    | -                | -         |     4.84 | DGL, KEi, Kunai, Kylar, mynio       |
|           22 |     2407 | 2026-02-17 | Alliance           | L   | 0.878      | -            | -                | -                | -         |    -6.32 | DGL, KEi, Kunai, Kylar, mynio       |
|           21 |     2441 | 2026-02-16 | ALGO Esports       | W   | 0.872      | 0.435        | 0.014 (0.005)    | 0.456 (0.173)    | -         |     6.78 | DGL, KEi, Kunai, Kylar, mynio       |
|           20 |     2527 | 2026-02-14 | Nexus Gaming       | W   | 0.860      | 0.435        | -                | 0.450 (0.168)    | -         |     7.06 | DGL, KEi, Kunai, Kylar, mynio       |
|           19 |     2601 | 2026-02-13 | TNC Esports        | L   | 0.853      | -            | -                | -                | -         |   -20.14 | DGL, KEi, Kunai, Kylar, mynio       |
|           18 |     2679 | 2026-02-11 | VP.Prodigy         | L   | 0.840      | -            | -                | -                | -         |   -17.87 | DGL, KEi, Kunai, Kylar, mynio       |
|           17 |     2753 | 2026-02-09 | SPARTA Esports     | W   | 0.825      | 0.435        | 0.063 (0.023)    | 0.732 (0.263)    | -         |    17.93 | DGL, KEi, Kunai, Kylar, mynio       |
|           16 |     2766 | 2026-02-08 | OG                 | L   | 0.820      | -            | -                | -                | -         |   -11.89 | DGL, KEi, Kunai, Kylar, mynio       |
|           15 |     2775 | 2026-02-08 | Lazer Cats         | W   | 0.820      | -            | -                | -                | -         |     6.45 | DGL, KEi, Kunai, Kylar, mynio       |
|           14 |     2987 | 2026-02-01 | WOPA Esport        | L   | 0.772      | -            | -                | -                | -         |   -19.40 | DGL, KEi, Kunai, Kylar, mynio       |
|           13 |     3208 | 2026-01-24 | AM Gaming          | L   | 0.719      | -            | -                | -                | -         |    -7.38 | DGL, KEi, Kunai, Kylar, mynio       |
|           12 |     3237 | 2026-01-23 | MASONIC            | L   | 0.714      | -            | -                | -                | -         |   -18.30 | DGL, KEi, Kunai, Kylar, mynio       |
|           11 |     3305 | 2026-01-22 | FORZE Reload       | W   | 0.705      | -            | -                | -                | -         |     2.83 | DGL, KEi, Kunai, Kylar, mynio       |
|           10 |     3366 | 2026-01-20 | FAVBET Team        | L   | 0.692      | -            | -                | -                | -         |   -18.64 | DGL, KEi, Kunai, Kylar, mynio       |
|            9 |     3401 | 2026-01-18 | Oramond            | L   | 0.680      | -            | -                | -                | -         |   -16.92 | DGL, KEi, Kunai, Kylar, mynio       |
|            8 |     3461 | 2026-01-17 | The Last Resort    | W   | 0.672      | -            | -                | -                | -         |     1.98 | DGL, KEi, Kunai, Kylar, mynio       |
|            7 |     3627 | 2026-01-10 | HYPERSPIRIT        | L   | 0.626      | -            | -                | -                | -         |   -17.52 | DGL, KEi, Kunai, Kylar, mynio       |
|            6 |     3741 | 2025-12-22 | GenOne             | L   | 0.500      | -            | -                | -                | -         |   -14.00 | DGL, KEi, Kunai, Kylar, mynio       |
|            5 |     3745 | 2025-12-21 | TNC Esports        | W   | 0.494      | 0.296        | 0.026 (0.004)    | -                | -         |     2.09 | DGL, KEi, Kunai, Kylar, mynio       |
|            4 |     3759 | 2025-12-21 | Ex-MINLATE         | W   | 0.491      | -            | -                | -                | -         |     2.37 | DGL, KEi, Kunai, Kylar, mynio       |
|            3 |     3771 | 2025-12-20 | VP.Prodigy         | W   | 0.487      | -            | -                | -                | -         |     3.26 | DGL, KEi, Kunai, Kylar, mynio       |
|            2 |     3781 | 2025-12-20 | No Surrender       | W   | 0.486      | -            | -                | -                | -         |     0.81 | DGL, KEi, Kunai, Kylar, mynio       |
|            1 |     4650 | 2025-11-10 | K27                | L   | 0.220      | -            | -                | -                | -         |    -1.74 | bnox, hades, KEi, Kylar, mynio      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,530.99)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-24 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-12-21 |      0.494 | $2,087.83      | $1,030.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
