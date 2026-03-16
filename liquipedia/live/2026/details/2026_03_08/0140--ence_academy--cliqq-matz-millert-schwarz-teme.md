### Roster Details<br />
Team Name: ENCE Academy<br />
Roster: Cliqq, Matz, millert, Schwarz, teme<br />
Global Rank: [140](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [101]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  851.1<br />
<br />
Final Rank Value (851.1) = Starting Rank Value (799.3) + Head To Head Adjustments (51.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.169[<sup>2</sup>](#table1)
- LAN Wins: 0.076[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 799.3
- 400 + ( ( 0.208 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 799.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.400
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      242 | 2026-02-27 | Ex-Fingers Crossed | L   | 1.000      | -            | -                | -                | -         |   -10.88 | Cliqq, Matz, millert, Schwarz, teme  |
|           50 |      243 | 2026-02-27 | MASONIC            | L   | 1.000      | -            | -                | -                | -         |   -13.68 | Cliqq, Matz, millert, Schwarz, teme  |
|           49 |      328 | 2026-02-26 | CSDIILIT           | W   | 1.000      | 0.143        | -                | 0.385 (0.055)    | 0 (0.000) |     9.73 | Cliqq, Matz, millert, Schwarz, teme  |
|           48 |      371 | 2026-02-25 | Aurora Young Blud  | L   | 1.000      | -            | -                | -                | -         |   -26.09 | Cliqq, Matz, millert, Schwarz, teme  |
|           47 |      426 | 2026-02-23 | Los kogutos        | W   | 1.000      | 0.384        | 0.040 (0.015)    | 1.000 (0.384)    | 0 (0.000) |    23.11 | Cliqq, Matz, millert, Schwarz, teme  |
|           46 |      595 | 2026-02-20 | Home               | W   | 1.000      | 0.384        | -                | 0.161 (0.062)    | 0 (0.000) |     8.28 | Cliqq, Matz, millert, Schwarz, teme  |
|           45 |      617 | 2026-02-20 | Home               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.88 | Cliqq, Matz, millert, Schwarz, teme  |
|           44 |      678 | 2026-02-18 | BASEMENT BOYS      | L   | 1.000      | -            | -                | -                | -         |   -21.09 | Cliqq, Matz, millert, Schwarz, teme  |
|           43 |      701 | 2026-02-18 | ARCRED             | W   | 1.000      | 0.384        | 0.027 (0.011)    | 0.881 (0.339)    | 0 (0.000) |    26.98 | Cliqq, Matz, millert, Schwarz, teme  |
|           42 |      738 | 2026-02-17 | Rebels Gaming      | L   | 1.000      | -            | -                | -                | -         |    -8.06 | Cliqq, HENU, millert, Schwarz, teme  |
|           41 |      758 | 2026-02-17 | Lazer Cats         | L   | 1.000      | -            | -                | -                | -         |   -10.74 | Cliqq, Matz, millert, Schwarz, teme  |
|           40 |      792 | 2026-02-16 | Hypewrld           | W   | 1.000      | 0.384        | 0.004 (0.002)    | 0.192 (0.074)    | 0 (0.000) |    17.38 | Cliqq, HENU, millert, Schwarz, teme  |
|           39 |      800 | 2026-02-16 | VP.Prodigy         | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.539 (0.077)    | 0 (0.000) |    20.65 | Cliqq, Matz, millert, Schwarz, teme  |
|           38 |      847 | 2026-02-15 | BASEMENT BOYS      | W   | 1.000      | 0.384        | -                | 0.340 (0.131)    | -         |    11.92 | Cliqq, HENU, millert, Schwarz, teme  |
|           37 |      861 | 2026-02-15 | CSDIILIT           | W   | 1.000      | 0.143        | -                | 0.385 (0.055)    | -         |    10.41 | Cliqq, Matz, millert, Schwarz, teme  |
|           36 |      879 | 2026-02-14 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -4.53 | Cliqq, HENU, millert, Schwarz, teme  |
|           35 |      939 | 2026-02-13 | Los kogutos        | W   | 1.000      | 0.384        | 0.040 (0.015)    | 1.000 (0.384)    | -         |    24.66 | Cliqq, HENU, millert, Schwarz, teme  |
|           34 |     2443 | 2025-11-30 | BASEMENT BOYS      | L   | 0.544      | -            | -                | -                | -         |   -11.67 | blick, Cliqq, millert, Schwarz, teme |
|           33 |     2516 | 2025-11-28 | HAVU               | L   | 0.532      | -            | -                | -                | -         |    -4.42 | blick, Cliqq, millert, Schwarz, teme |
|           32 |     2533 | 2025-11-27 | The Last Resort    | W   | 0.524      | 0.143        | 0.018 (0.001)    | -                | -         |     7.94 | blick, Cliqq, millert, Schwarz, teme |
|           31 |     2541 | 2025-11-26 | BASEMENT BOYS      | L   | 0.519      | -            | -                | -                | -         |   -11.35 | blick, Cliqq, millert, Schwarz, teme |
|           30 |     2603 | 2025-11-24 | MOUZ NXT           | L   | 0.504      | -            | -                | -                | -         |    -1.13 | blick, Cliqq, millert, Schwarz, teme |
|           29 |     2620 | 2025-11-23 | Smuuttikusilkki    | W   | 0.498      | -            | -                | -                | -         |     2.60 | blick, Cliqq, millert, Schwarz, teme |
|           28 |     2644 | 2025-11-22 | HAVU               | L   | 0.492      | -            | -                | -                | -         |    -3.80 | blick, Cliqq, millert, Schwarz, teme |
|           27 |     2680 | 2025-11-21 | AaB esport         | L   | 0.485      | -            | -                | -                | -         |   -10.17 | blick, Cliqq, millert, Schwarz, teme |
|           26 |     2714 | 2025-11-20 | Square Sausages    | W   | 0.479      | -            | -                | -                | -         |     2.02 | blick, Cliqq, millert, Schwarz, teme |
|           25 |     3099 | 2025-11-07 | JiJieHao           | L   | 0.392      | -            | -                | -                | -         |    -3.42 | blick, Cliqq, millert, Schwarz, teme |
|           24 |     3176 | 2025-11-06 | ARCRED             | W   | 0.385      | 0.384        | 0.027 (0.004)    | 0.881 (0.130)    | -         |    11.05 | blick, Cliqq, millert, Schwarz, teme |
|           23 |     3260 | 2025-11-03 | Nuclear TigeRES    | L   | 0.364      | -            | -                | -                | -         |    -0.38 | blick, Cliqq, millert, Schwarz, teme |
|           22 |     3284 | 2025-11-02 | Oramond            | L   | 0.357      | -            | -                | -                | -         |    -3.53 | blick, Cliqq, millert, Schwarz, teme |
|           21 |     3338 | 2025-10-31 | KONO.ECF           | W   | 0.344      | -            | -                | -                | -         |     6.02 | blick, Cliqq, millert, Schwarz, teme |
|           20 |     3360 | 2025-10-30 | Eternal Fire       | W   | 0.338      | 0.344        | 0.002 (0.000)    | -                | -         |     4.28 | blick, Cliqq, millert, Schwarz, teme |
|           19 |     3369 | 2025-10-29 | GenOne             | L   | 0.333      | -            | -                | -                | -         |    -2.08 | blick, Cliqq, millert, Schwarz, teme |
|           18 |     3374 | 2025-10-29 | MASONIC            | L   | 0.332      | -            | -                | -                | -         |    -4.23 | blick, Cliqq, millert, Schwarz, teme |
|           17 |     3416 | 2025-10-28 | Eternal Fire       | W   | 0.323      | -            | -                | -                | -         |     4.02 | blick, Cliqq, millert, Schwarz, teme |
|           16 |     3430 | 2025-10-27 | Team Nemesis       | L   | 0.319      | -            | -                | -                | -         |    -0.58 | blick, Cliqq, millert, Schwarz, teme |
|           15 |     3507 | 2025-10-26 | RUBY               | L   | 0.311      | -            | -                | -                | -         |    -4.65 | blick, Cliqq, millert, Schwarz, teme |
|           14 |     3535 | 2025-10-25 | ALGO Esports       | W   | 0.306      | 0.384        | 0.005 (0.001)    | -                | -         |     6.11 | blick, Cliqq, millert, Schwarz, teme |
|           13 |     3635 | 2025-10-23 | Nuclear TigeRES    | L   | 0.292      | -            | -                | -                | -         |    -0.26 | blick, Cliqq, millert, Schwarz, teme |
|           12 |     3673 | 2025-10-22 | NIP Impact         | W   | 0.286      | 0.384        | 0.024 (0.003)    | -                | -         |     4.17 | blick, Cliqq, millert, Schwarz, teme |
|           11 |     3733 | 2025-10-18 | Universe           | L   | 0.259      | -            | -                | -                | -         |    -5.39 | blick, Cliqq, millert, Schwarz, teme |
|           10 |     3745 | 2025-10-18 | TOOMUCHVIDEOGAMES  | W   | 0.257      | -            | -                | -                | 1 (0.257) |     2.03 | blick, Cliqq, millert, Schwarz, teme |
|            9 |     3761 | 2025-10-17 | Universe           | W   | 0.252      | -            | -                | -                | 1 (0.252) |     2.69 | blick, Cliqq, millert, Schwarz, teme |
|            8 |     3774 | 2025-10-17 | CSDIILIT           | W   | 0.250      | -            | -                | -                | 1 (0.250) |     2.32 | blick, Cliqq, millert, Schwarz, teme |
|            7 |     4484 | 2025-09-28 | Dziuseppe          | L   | 0.125      | -            | -                | -                | -         |    -2.60 | Blick, Cliqq, millert, Schwarz, teme |
|            6 |     4563 | 2025-09-27 | FORZE Reload       | L   | 0.116      | -            | -                | -                | -         |    -1.80 | Blick, Cliqq, millert, Schwarz, teme |
|            5 |     4614 | 2025-09-26 | Dziuseppe          | W   | 0.110      | -            | -                | -                | -         |     1.16 | Blick, Cliqq, millert, Schwarz, teme |
|            4 |     4729 | 2025-09-21 | HAVU               | L   | 0.078      | -            | -                | -                | -         |    -0.59 | Blick, Cliqq, millert, Schwarz, teme |
|            3 |     4737 | 2025-09-21 | CSDIILIT           | W   | 0.077      | -            | -                | -                | -         |     0.70 | Blick, Cliqq, millert, Schwarz, teme |
|            2 |     4758 | 2025-09-20 | HAVU               | L   | 0.071      | -            | -                | -                | -         |    -0.54 | Blick, Cliqq, millert, Schwarz, teme |
|            1 |     4777 | 2025-09-19 | Team spargo-       | W   | 0.066      | -            | -                | -                | -         |     0.33 | Blick, Cliqq, millert, Schwarz, teme |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($879.99)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-28 |      0.533 | $869.68        | $463.24         |
| 2025-10-18 |      0.259 | $1,166.04      | $302.39         |
| 2025-09-21 |      0.078 | $1,468.20      | $114.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
