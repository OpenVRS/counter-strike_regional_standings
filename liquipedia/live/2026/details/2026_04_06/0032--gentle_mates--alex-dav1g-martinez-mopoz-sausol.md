### Roster Details<br />
Team Name: Gentle Mates<br />
Roster: alex, dav1g, Martinez, mopoz, sausol<br />
Global Rank: [32](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [23]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1393.1<br />
<br />
Final Rank Value (1393.1) = Starting Rank Value (1342.7) + Head To Head Adjustments (50.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.506[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.851[<sup>2</sup>](#table1)

The average of these factors is 0.482<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1342.7
- 400 + ( ( 0.482 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1342.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.430
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      150 | 2026-04-02 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -19.48 | alex, dav1g, Martinez, mopoz, sausol |
|           36 |      187 | 2026-04-01 | Ninjas in Pyjamas      | L   | 1.000      | -            | -                | -                | -         |   -14.62 | alex, dav1g, Martinez, mopoz, sausol |
|           35 |      554 | 2026-03-25 | BIG                    | L   | 1.000      | -            | -                | -                | -         |   -11.38 | alex, dav1g, Martinez, mopoz, sausol |
|           34 |      572 | 2026-03-25 | HYPERSPIRIT            | W   | 1.000      | 0.435        | -                | 0.479 (0.208)    | 1 (1.000) |     3.33 | alex, dav1g, Martinez, mopoz, sausol |
|           33 |     2107 | 2026-02-22 | HOTU                   | L   | 0.914      | -            | -                | -                | -         |   -15.67 | alex, dav1g, Martinez, mopoz, sausol |
|           32 |     2158 | 2026-02-22 | BetBoom Team           | W   | 0.912      | 0.341        | 0.115 (0.036)    | 0.748 (0.233)    | 1 (0.912) |    16.88 | alex, dav1g, Martinez, mopoz, sausol |
|           31 |     2207 | 2026-02-21 | Passion UA             | W   | 0.906      | 0.341        | 0.069 (0.021)    | 0.462 (0.143)    | 1 (0.906) |    11.80 | alex, dav1g, Martinez, mopoz, sausol |
|           30 |     2305 | 2026-02-19 | EYEBALLERS             | W   | 0.892      | 0.341        | 0.097 (0.030)    | 0.599 (0.183)    | 1 (0.892) |    12.58 | alex, dav1g, Martinez, mopoz, sausol |
|           29 |     2309 | 2026-02-19 | FC Famalicão Esports   | W   | 0.892      | -            | -                | -                | 1 (0.892) |     2.05 | alex, dav1g, Martinez, mopoz, sausol |
|           28 |     2551 | 2026-02-14 | HOTU                   | W   | 0.861      | 0.384        | 0.078 (0.026)    | 0.666 (0.220)    | 1 (0.861) |    12.91 | alex, dav1g, Martinez, mopoz, sausol |
|           27 |     2586 | 2026-02-14 | Magic (Russian team)   | W   | 0.859      | 0.384        | 0.085 (0.028)    | 0.770 (0.254)    | 1 (0.859) |    10.70 | alex, dav1g, Martinez, mopoz, sausol |
|           26 |     2645 | 2026-02-13 | Bushido Wildcats       | W   | 0.852      | -            | -                | -                | 1 (0.852) |     1.00 | alex, dav1g, Martinez, mopoz, sausol |
|           25 |     2686 | 2026-02-12 | LFO (Turkish team)     | W   | 0.846      | -            | -                | -                | 1 (0.846) |     0.11 | alex, dav1g, Martinez, mopoz, sausol |
|           24 |     2863 | 2026-02-06 | Ninjas in Pyjamas      | L   | 0.807      | -            | -                | -                | -         |   -11.08 | alex, dav1g, Martinez, mopoz, sausol |
|           23 |     3254 | 2026-01-23 | BetBoom Team           | W   | 0.715      | 0.143        | 0.115 (0.012)    | -                | -         |    13.75 | alex, dav1g, Martinez, mopoz, sausol |
|           22 |     3273 | 2026-01-23 | 9INE                   | W   | 0.714      | -            | -                | -                | -         |    10.87 | alex, dav1g, Martinez, mopoz, sausol |
|           21 |     3308 | 2026-01-22 | Ursa                   | W   | 0.708      | -            | -                | -                | -         |     2.35 | alex, dav1g, Martinez, mopoz, sausol |
|           20 |     3317 | 2026-01-22 | Team Nemesis           | W   | 0.707      | 0.143        | 0.109 (0.011)    | 1.000 (0.101)    | -         |    12.74 | alex, dav1g, Martinez, mopoz, sausol |
|           19 |     3329 | 2026-01-22 | GenOne                 | W   | 0.706      | -            | -                | -                | -         |     2.81 | alex, dav1g, Martinez, mopoz, sausol |
|           18 |     3354 | 2026-01-21 | HOTU                   | L   | 0.701      | -            | -                | -                | -         |   -10.28 | alex, dav1g, Martinez, mopoz, sausol |
|           17 |     3377 | 2026-01-21 | Nuclear TigeRES        | W   | 0.699      | -            | -                | -                | -         |    10.44 | alex, dav1g, Martinez, mopoz, sausol |
|           16 |     3485 | 2026-01-17 | Team Liquid            | L   | 0.673      | -            | -                | -                | -         |    -7.66 | alex, dav1g, Martinez, mopoz, sausol |
|           15 |     3592 | 2026-01-15 | M80                    | W   | 0.659      | 0.895        | 0.087 (0.051)    | 0.582 (0.343)    | -         |    13.65 | alex, dav1g, Martinez, mopoz, sausol |
|           14 |     3782 | 2025-12-21 | Ninjas in Pyjamas      | L   | 0.494      | -            | -                | -                | -         |    -5.66 | alex, dav1g, Martinez, mopoz, sausol |
|           13 |     3793 | 2025-12-21 | SAW                    | W   | 0.492      | -            | -                | -                | 1 (0.492) |     1.15 | alex, dav1g, Martinez, mopoz, sausol |
|           12 |     3819 | 2025-12-20 | Rebels Gaming          | W   | 0.486      | 0.309        | -                | 0.540 (0.081)    | -         |     5.14 | alex, dav1g, Martinez, mopoz, sausol |
|           11 |     3821 | 2025-12-20 | Flame Hard             | W   | 0.485      | -            | -                | -                | -         |     0.08 | alex, dav1g, Martinez, mopoz, sausol |
|           10 |     4531 | 2025-11-15 | 9INE                   | W   | 0.257      | -            | -                | -                | -         |     4.24 | alex, dav1g, Martinez, mopoz, sausol |
|            9 |     4556 | 2025-11-14 | Rare Atom              | L   | 0.250      | -            | -                | -                | -         |    -5.10 | alex, dav1g, Martinez, mopoz, sausol |
|            8 |     4609 | 2025-11-12 | Change The Game        | W   | 0.237      | -            | -                | -                | -         |     0.56 | alex, dav1g, Martinez, mopoz, sausol |
|            7 |     5099 | 2025-10-30 | GamerLegion            | L   | 0.145      | -            | -                | -                | -         |    -1.17 | alex, dav1g, Martinez, mopoz, sausol |
|            6 |     5117 | 2025-10-29 | BetBoom Team           | W   | 0.139      | 1.000        | 0.115 (0.016)    | 0.748 (0.104)    | -         |     3.07 | alex, dav1g, Martinez, mopoz, sausol |
|            5 |     5138 | 2025-10-28 | Ninjas in Pyjamas      | W   | 0.133      | 1.000        | 0.126 (0.017)    | -                | -         |     2.67 | alex, dav1g, Martinez, mopoz, sausol |
|            4 |     5192 | 2025-10-27 | Legacy                 | L   | 0.125      | -            | -                | -                | -         |    -1.46 | alex, dav1g, Martinez, mopoz, sausol |
|            3 |     5251 | 2025-10-26 | PaiN Gaming            | L   | 0.118      | -            | -                | -                | -         |    -0.80 | alex, dav1g, Martinez, mopoz, sausol |
|            2 |     5681 | 2025-10-11 | PARIVISION             | L   | 0.020      | -            | -                | -                | -         |    -0.03 | alex, dav1g, Martinez, mopoz, sausol |
|            1 |     5705 | 2025-10-10 | Betclic Apogee Esports | W   | 0.014      | -            | -                | -                | -         |     0.00 | alex, dav1g, Martinez, mopoz, sausol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,290.21)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-03-26 |      1.000 | $750.00        | $750.00         |
| 2026-02-22 |      0.914 | $2,947.00      | $2,694.97       |
| 2026-02-14 |      0.861 | $12,500.00     | $10,761.73      |
| 2026-01-18 |      0.681 | $28,750.00     | $19,577.64      |
| 2025-12-21 |      0.495 | $586.00        | $289.97         |
| 2025-11-15 |      0.258 | $6,338.00      | $1,632.41       |
| 2025-11-01 |      0.159 | $31,250.00     | $4,980.85       |
| 2025-10-12 |      0.026 | $4,000.00      | $102.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
