### Roster Details<br />
Team Name: HEROIC Academy<br />
Roster: HOLY, Hrdina, Muciek, St0m4k, Yoghi<br />
Global Rank: [108](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [73]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  1022.8<br />
<br />
Final Rank Value (1022.8) = Starting Rank Value (1078.9) + Head To Head Adjustments (-56.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.314[<sup>1</sup>](#table2)
- Bounty Collected: 0.328[<sup>2</sup>](#table1)
- Opponent Network: 0.153[<sup>2</sup>](#table1)
- LAN Wins: 0.593[<sup>2</sup>](#table1)

The average of these factors is 0.347<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1078.9
- 400 + ( ( 0.347 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1078.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.333
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      427 | 2026-03-28 | EYEBALLERS             | L   | 1.000      | -            | -                | -                | -         |    -3.94 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           29 |      475 | 2026-03-27 | M80                    | W   | 1.000      | 0.396        | 0.087 (0.035)    | 0.582 (0.231)    | 1 (1.000) |    28.21 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           28 |      547 | 2026-03-25 | Västerås Esport        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     3.44 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           27 |      560 | 2026-03-25 | BC.Game Esports        | W   | 1.000      | 0.396        | 0.077 (0.031)    | 0.310 (0.123)    | 1 (1.000) |    24.66 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           26 |      571 | 2026-03-25 | Betclic Apogee Esports | L   | 1.000      | -            | -                | -                | -         |    -4.21 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           25 |      937 | 2026-03-18 | The Last Resort        | L   | 1.000      | -            | -                | -                | -         |   -17.79 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           24 |     1027 | 2026-03-16 | Ex-Zero Tenacity       | L   | 1.000      | -            | -                | -                | -         |   -17.50 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           23 |     1066 | 2026-03-15 | The Last Resort        | L   | 1.000      | -            | -                | -                | -         |   -21.50 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           22 |     1168 | 2026-03-13 | KOLESIE                | L   | 1.000      | -            | -                | -                | -         |    -9.44 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           21 |     1261 | 2026-03-11 | EC BANGA               | W   | 1.000      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |     5.28 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           20 |     1295 | 2026-03-10 | Ex-Zero Tenacity       | W   | 1.000      | 0.384        | 0.000 (0.000)    | 0.547 (0.210)    | 0 (0.000) |    12.05 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           19 |     1304 | 2026-03-10 | QWENTRY                | L   | 1.000      | -            | -                | -                | -         |   -11.45 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           18 |     1361 | 2026-03-09 | EC BANGA               | W   | 1.000      | 0.384        | 0.004 (0.001)    | -                | -         |     5.26 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           17 |     1412 | 2026-03-08 | CSDIILIT               | W   | 1.000      | 0.384        | -                | 0.634 (0.243)    | -         |     6.84 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           16 |     1510 | 2026-03-06 | Tung Tung Sahur        | L   | 0.994      | -            | -                | -                | -         |   -20.50 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           15 |     1522 | 2026-03-06 | CSDIILIT               | L   | 0.993      | -            | -                | -                | -         |   -24.46 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           14 |     1591 | 2026-03-05 | FC Famalicão Esports   | W   | 0.985      | 0.384        | 0.002 (0.001)    | 0.182 (0.069)    | -         |     9.16 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           13 |     1610 | 2026-03-04 | WW Team                | W   | 0.980      | 0.384        | 0.034 (0.013)    | 0.865 (0.326)    | -         |    20.57 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           12 |     1645 | 2026-03-04 | QUAZAR                 | L   | 0.978      | -            | -                | -                | -         |   -28.30 | doto, HOLY, Muciek, St0m4k, Yoghi   |
|           11 |     1707 | 2026-03-02 | NOVAQ                  | L   | 0.967      | -            | -                | -                | -         |   -15.91 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|           10 |     3467 | 2026-01-17 | WOPA Esport            | L   | 0.671      | -            | -                | -                | -         |   -13.43 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            9 |     3496 | 2026-01-16 | Megoshort              | W   | 0.667      | 0.337        | 0.004 (0.001)    | 0.336 (0.075)    | 1 (0.667) |     8.09 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            8 |     3502 | 2026-01-16 | SemperFi Esports       | W   | 0.666      | 0.337        | 0.023 (0.005)    | 0.443 (0.100)    | 1 (0.666) |    14.20 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            7 |     3510 | 2026-01-16 | Sashi Esport           | L   | 0.666      | -            | -                | -                | -         |    -4.62 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            6 |     3517 | 2026-01-16 | Hemmaplan              | W   | 0.666      | -            | -                | -                | 1 (0.666) |     0.46 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            5 |     3523 | 2026-01-16 | Tricked Esport         | L   | 0.665      | -            | -                | -                | -         |    -3.92 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            4 |     3814 | 2025-12-18 | The Huns Esports       | L   | 0.474      | -            | -                | -                | -         |    -5.17 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            3 |     3823 | 2025-12-18 | ESC Gaming             | L   | 0.471      | -            | -                | -                | -         |    -6.55 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            2 |     3839 | 2025-12-17 | The Huns Esports       | W   | 0.466      | 0.339        | 0.011 (0.002)    | 0.487 (0.077)    | 1 (0.466) |     9.83 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |
|            1 |     3850 | 2025-12-17 | HYPERSPIRIT            | W   | 0.465      | 0.339        | -                | 0.479 (0.075)    | 1 (0.465) |     4.48 | HOLY, Hrdina, Muciek, St0m4k, Yoghi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,000.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-28 |      1.000 | $3,000.00      | $3,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
