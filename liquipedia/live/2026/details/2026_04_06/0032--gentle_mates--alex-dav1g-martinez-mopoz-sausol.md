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
Final Rank Value (1393.1) = Starting Rank Value (1342.6) + Head To Head Adjustments (50.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.506[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.187[<sup>2</sup>](#table1)
- LAN Wins: 0.851[<sup>2</sup>](#table1)

The average of these factors is 0.482<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1342.6
- 400 + ( ( 0.482 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1342.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.429
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      150 | 2026-04-02 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -19.47 | alex, dav1g, Martinez, mopoz, sausol |
|           36 |      187 | 2026-04-01 | Ninjas in Pyjamas      | L   | 1.000      | -            | -                | -                | -         |   -14.62 | alex, dav1g, Martinez, mopoz, sausol |
|           35 |      554 | 2026-03-25 | BIG                    | L   | 1.000      | -            | -                | -                | -         |   -11.38 | alex, dav1g, Martinez, mopoz, sausol |
|           34 |      572 | 2026-03-25 | HYPERSPIRIT            | W   | 1.000      | 0.435        | -                | 0.479 (0.208)    | 1 (1.000) |     3.34 | alex, dav1g, Martinez, mopoz, sausol |
|           33 |     2107 | 2026-02-22 | HOTU                   | L   | 0.914      | -            | -                | -                | -         |   -15.65 | alex, dav1g, Martinez, mopoz, sausol |
|           32 |     2158 | 2026-02-22 | BetBoom Team           | W   | 0.912      | 0.341        | 0.116 (0.036)    | 0.748 (0.233)    | 1 (0.912) |    16.88 | alex, dav1g, Martinez, mopoz, sausol |
|           31 |     2207 | 2026-02-21 | Passion UA             | W   | 0.905      | 0.341        | 0.070 (0.021)    | 0.462 (0.143)    | 1 (0.905) |    11.80 | alex, dav1g, Martinez, mopoz, sausol |
|           30 |     2305 | 2026-02-19 | EYEBALLERS             | W   | 0.892      | 0.341        | 0.097 (0.030)    | 0.599 (0.182)    | 1 (0.892) |    12.59 | alex, dav1g, Martinez, mopoz, sausol |
|           29 |     2309 | 2026-02-19 | FC Famalicão Esports   | W   | 0.891      | -            | -                | -                | 1 (0.891) |     2.04 | alex, dav1g, Martinez, mopoz, sausol |
|           28 |     2550 | 2026-02-14 | HOTU                   | W   | 0.860      | 0.384        | 0.078 (0.026)    | 0.666 (0.220)    | 1 (0.860) |    12.91 | alex, dav1g, Martinez, mopoz, sausol |
|           27 |     2585 | 2026-02-14 | Magic (Russian team)   | W   | 0.859      | 0.384        | 0.085 (0.028)    | 0.770 (0.254)    | 1 (0.859) |    10.69 | alex, dav1g, Martinez, mopoz, sausol |
|           26 |     2644 | 2026-02-13 | Bushido Wildcats       | W   | 0.852      | -            | -                | -                | 1 (0.852) |     1.00 | alex, dav1g, Martinez, mopoz, sausol |
|           25 |     2685 | 2026-02-12 | LFO (Turkish team)     | W   | 0.845      | -            | -                | -                | 1 (0.845) |     0.11 | alex, dav1g, Martinez, mopoz, sausol |
|           24 |     2862 | 2026-02-06 | Ninjas in Pyjamas      | L   | 0.807      | -            | -                | -                | -         |   -11.06 | alex, dav1g, Martinez, mopoz, sausol |
|           23 |     3253 | 2026-01-23 | BetBoom Team           | W   | 0.714      | 0.143        | 0.116 (0.012)    | -                | -         |    13.75 | alex, dav1g, Martinez, mopoz, sausol |
|           22 |     3272 | 2026-01-23 | 9INE                   | W   | 0.713      | -            | -                | -                | -         |    10.86 | alex, dav1g, Martinez, mopoz, sausol |
|           21 |     3307 | 2026-01-22 | Ursa                   | W   | 0.708      | -            | -                | -                | -         |     2.35 | alex, dav1g, Martinez, mopoz, sausol |
|           20 |     3316 | 2026-01-22 | Team Nemesis           | W   | 0.707      | 0.143        | 0.109 (0.011)    | 1.000 (0.101)    | -         |    12.74 | alex, dav1g, Martinez, mopoz, sausol |
|           19 |     3328 | 2026-01-22 | GenOne                 | W   | 0.706      | -            | -                | -                | -         |     2.81 | alex, dav1g, Martinez, mopoz, sausol |
|           18 |     3353 | 2026-01-21 | HOTU                   | L   | 0.701      | -            | -                | -                | -         |   -10.27 | alex, dav1g, Martinez, mopoz, sausol |
|           17 |     3376 | 2026-01-21 | Nuclear TigeRES        | W   | 0.698      | -            | -                | -                | -         |    10.44 | alex, dav1g, Martinez, mopoz, sausol |
|           16 |     3484 | 2026-01-17 | Team Liquid            | L   | 0.672      | -            | -                | -                | -         |    -7.65 | alex, dav1g, Martinez, mopoz, sausol |
|           15 |     3591 | 2026-01-15 | M80                    | W   | 0.658      | 0.895        | 0.087 (0.051)    | 0.582 (0.343)    | -         |    13.64 | alex, dav1g, Martinez, mopoz, sausol |
|           14 |     3781 | 2025-12-21 | Ninjas in Pyjamas      | L   | 0.493      | -            | -                | -                | -         |    -5.65 | alex, dav1g, Martinez, mopoz, sausol |
|           13 |     3792 | 2025-12-21 | SAW                    | W   | 0.491      | -            | -                | -                | 1 (0.491) |     1.15 | alex, dav1g, Martinez, mopoz, sausol |
|           12 |     3818 | 2025-12-20 | Rebels Gaming          | W   | 0.485      | 0.309        | -                | 0.540 (0.081)    | -         |     5.13 | alex, dav1g, Martinez, mopoz, sausol |
|           11 |     3820 | 2025-12-20 | Flame Hard             | W   | 0.485      | -            | -                | -                | -         |     0.08 | alex, dav1g, Martinez, mopoz, sausol |
|           10 |     4530 | 2025-11-15 | 9INE                   | W   | 0.256      | -            | -                | -                | -         |     4.23 | alex, dav1g, Martinez, mopoz, sausol |
|            9 |     4555 | 2025-11-14 | Rare Atom              | L   | 0.250      | -            | -                | -                | -         |    -5.09 | alex, dav1g, Martinez, mopoz, sausol |
|            8 |     4608 | 2025-11-12 | Change The Game        | W   | 0.236      | -            | -                | -                | -         |     0.56 | alex, dav1g, Martinez, mopoz, sausol |
|            7 |     5098 | 2025-10-30 | GamerLegion            | L   | 0.144      | -            | -                | -                | -         |    -1.17 | alex, dav1g, Martinez, mopoz, sausol |
|            6 |     5116 | 2025-10-29 | BetBoom Team           | W   | 0.138      | 1.000        | 0.116 (0.016)    | 0.748 (0.103)    | -         |     3.06 | alex, dav1g, Martinez, mopoz, sausol |
|            5 |     5137 | 2025-10-28 | Ninjas in Pyjamas      | W   | 0.133      | 1.000        | 0.127 (0.017)    | -                | -         |     2.66 | alex, dav1g, Martinez, mopoz, sausol |
|            4 |     5191 | 2025-10-27 | Legacy                 | L   | 0.124      | -            | -                | -                | -         |    -1.46 | alex, dav1g, Martinez, mopoz, sausol |
|            3 |     5250 | 2025-10-26 | PaiN Gaming            | L   | 0.118      | -            | -                | -                | -         |    -0.80 | alex, dav1g, Martinez, mopoz, sausol |
|            2 |     5680 | 2025-10-11 | PARIVISION             | L   | 0.019      | -            | -                | -                | -         |    -0.03 | alex, dav1g, Martinez, mopoz, sausol |
|            1 |     5704 | 2025-10-10 | Betclic Apogee Esports | W   | 0.013      | -            | -                | -                | -         |     0.00 | alex, dav1g, Martinez, mopoz, sausol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,242.23)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-04 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-03-26 |      1.000 | $750.00        | $750.00         |
| 2026-02-22 |      0.914 | $2,947.00      | $2,693.34       |
| 2026-02-14 |      0.860 | $12,500.00     | $10,754.78      |
| 2026-01-18 |      0.680 | $28,750.00     | $19,561.67      |
| 2025-12-21 |      0.494 | $586.00        | $289.64         |
| 2025-11-15 |      0.257 | $6,338.00      | $1,628.89       |
| 2025-11-01 |      0.159 | $31,250.00     | $4,963.49       |
| 2025-10-12 |      0.025 | $4,000.00      | $100.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
