### Roster Details<br />
Team Name: Gentle Mates<br />
Roster: alex, dav1g, Martinez, mopoz, sausol<br />
Global Rank: [22](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [18]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  1395.0<br />
<br />
Final Rank Value (1395.0) = Starting Rank Value (1348.4) + Head To Head Adjustments (46.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.495[<sup>1</sup>](#table2)
- Bounty Collected: 0.382[<sup>2</sup>](#table1)
- Opponent Network: 0.180[<sup>2</sup>](#table1)
- LAN Wins: 0.898[<sup>2</sup>](#table1)

The average of these factors is 0.489<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1348.4
- 400 + ( ( 0.489 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1348.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.476
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |      117 | 2026-03-25 | BIG                    | L   | 1.000      | -            | -                | -                | -         |   -14.31 | alex, dav1g, Martinez, mopoz, sausol |
|           40 |      134 | 2026-03-25 | HYPERSPIRIT            | W   | 1.000      | 0.435        | -                | 0.513 (0.223)    | 1 (1.000) |     3.27 | alex, dav1g, Martinez, mopoz, sausol |
|           39 |     1617 | 2026-02-22 | HOTU                   | L   | 0.965      | -            | -                | -                | -         |   -16.55 | alex, dav1g, Martinez, mopoz, sausol |
|           38 |     1667 | 2026-02-22 | BetBoom Team           | W   | 0.963      | 0.341        | 0.075 (0.025)    | 0.634 (0.208)    | 1 (0.963) |    14.86 | alex, dav1g, Martinez, mopoz, sausol |
|           37 |     1714 | 2026-02-21 | Passion UA             | W   | 0.956      | 0.341        | 0.062 (0.020)    | 0.309 (0.101)    | 1 (0.956) |     7.02 | alex, dav1g, Martinez, mopoz, sausol |
|           36 |     1812 | 2026-02-19 | EYEBALLERS             | W   | 0.943      | 0.341        | 0.100 (0.032)    | 0.663 (0.214)    | 1 (0.943) |    12.47 | alex, dav1g, Martinez, mopoz, sausol |
|           35 |     1816 | 2026-02-19 | FC Famalicão Esports   | W   | 0.943      | -            | -                | -                | 1 (0.943) |     2.39 | alex, dav1g, Martinez, mopoz, sausol |
|           34 |     2056 | 2026-02-14 | HOTU                   | W   | 0.912      | 0.384        | 0.078 (0.027)    | 0.652 (0.228)    | 1 (0.912) |    13.36 | alex, dav1g, Martinez, mopoz, sausol |
|           33 |     2091 | 2026-02-14 | Magic (Russian team)   | W   | 0.910      | 0.384        | 0.076 (0.027)    | 0.619 (0.216)    | 1 (0.910) |     8.04 | alex, dav1g, Martinez, mopoz, sausol |
|           32 |     2150 | 2026-02-13 | Bushido Wildcats       | W   | 0.903      | -            | -                | -                | 1 (0.903) |     1.18 | alex, dav1g, Martinez, mopoz, sausol |
|           31 |     2191 | 2026-02-12 | LFO (Turkish team)     | W   | 0.896      | -            | -                | -                | 1 (0.896) |     0.13 | alex, dav1g, Martinez, mopoz, sausol |
|           30 |     2368 | 2026-02-06 | Ninjas in Pyjamas      | L   | 0.858      | -            | -                | -                | -         |   -14.39 | alex, dav1g, Martinez, mopoz, sausol |
|           29 |     2756 | 2026-01-23 | BetBoom Team           | W   | 0.765      | 0.143        | 0.075 (0.008)    | -                | -         |    11.05 | alex, dav1g, Martinez, mopoz, sausol |
|           28 |     2774 | 2026-01-23 | 9INE                   | W   | 0.764      | -            | -                | -                | -         |    10.16 | alex, dav1g, Martinez, mopoz, sausol |
|           27 |     2809 | 2026-01-22 | Ursa                   | W   | 0.759      | -            | -                | -                | -         |     2.60 | alex, dav1g, Martinez, mopoz, sausol |
|           26 |     2818 | 2026-01-22 | Team Nemesis           | W   | 0.758      | 0.143        | -                | 0.917 (0.099)    | -         |    10.82 | alex, dav1g, Martinez, mopoz, sausol |
|           25 |     2830 | 2026-01-22 | GenOne                 | W   | 0.757      | -            | -                | -                | -         |     3.03 | alex, dav1g, Martinez, mopoz, sausol |
|           24 |     2855 | 2026-01-21 | HOTU                   | L   | 0.752      | -            | -                | -                | -         |   -11.24 | alex, dav1g, Martinez, mopoz, sausol |
|           23 |     2878 | 2026-01-21 | Nuclear TigeRES        | W   | 0.749      | 0.143        | -                | 0.849 (0.091)    | -         |    10.13 | alex, dav1g, Martinez, mopoz, sausol |
|           22 |     2985 | 2026-01-17 | Team Liquid            | L   | 0.724      | -            | -                | -                | -         |   -10.48 | alex, dav1g, Martinez, mopoz, sausol |
|           21 |     3090 | 2026-01-15 | M80                    | W   | 0.710      | 0.895        | 0.071 (0.045)    | 0.474 (0.301)    | -         |    11.20 | alex, dav1g, Martinez, mopoz, sausol |
|           20 |     3278 | 2025-12-21 | Ninjas in Pyjamas      | L   | 0.544      | -            | -                | -                | -         |    -8.29 | alex, dav1g, Martinez, mopoz, sausol |
|           19 |     3289 | 2025-12-21 | SAW                    | W   | 0.543      | -            | -                | -                | 1 (0.543) |     1.03 | alex, dav1g, Martinez, mopoz, sausol |
|           18 |     3315 | 2025-12-20 | Rebels Gaming          | W   | 0.536      | -            | -                | -                | -         |     4.59 | alex, dav1g, Martinez, mopoz, sausol |
|           17 |     3317 | 2025-12-20 | Flame Hard             | W   | 0.536      | -            | -                | -                | -         |     0.09 | alex, dav1g, Martinez, mopoz, sausol |
|           16 |     4027 | 2025-11-15 | 9INE                   | W   | 0.307      | -            | -                | -                | -         |     4.32 | alex, dav1g, Martinez, mopoz, sausol |
|           15 |     4052 | 2025-11-14 | Rare Atom              | L   | 0.301      | -            | -                | -                | -         |    -7.72 | alex, dav1g, Martinez, mopoz, sausol |
|           14 |     4105 | 2025-11-12 | Change The Game        | W   | 0.287      | -            | -                | -                | -         |     0.27 | alex, dav1g, Martinez, mopoz, sausol |
|           13 |     4595 | 2025-10-30 | GamerLegion            | L   | 0.195      | -            | -                | -                | -         |    -1.91 | alex, dav1g, Martinez, mopoz, sausol |
|           12 |     4613 | 2025-10-29 | BetBoom Team           | W   | 0.189      | 1.000        | 0.075 (0.014)    | 0.634 (0.120)    | -         |     3.13 | alex, dav1g, Martinez, mopoz, sausol |
|           11 |     4634 | 2025-10-28 | Ninjas in Pyjamas      | W   | 0.184      | 1.000        | 0.104 (0.019)    | -                | -         |     3.00 | alex, dav1g, Martinez, mopoz, sausol |
|           10 |     4688 | 2025-10-27 | Legacy                 | L   | 0.175      | -            | -                | -                | -         |    -3.23 | alex, dav1g, Martinez, mopoz, sausol |
|            9 |     4747 | 2025-10-26 | PaiN Gaming            | L   | 0.169      | -            | -                | -                | -         |    -4.04 | alex, dav1g, Martinez, mopoz, sausol |
|            8 |     5177 | 2025-10-11 | PARIVISION             | L   | 0.070      | -            | -                | -                | -         |    -0.11 | alex, dav1g, Martinez, mopoz, sausol |
|            7 |     5201 | 2025-10-10 | Betclic Apogee Esports | W   | 0.065      | -            | -                | -                | -         |     0.03 | alex, dav1g, Martinez, mopoz, sausol |
|            6 |     5321 | 2025-10-08 | TNC Esports            | W   | 0.050      | -            | -                | -                | -         |     0.19 | alex, dav1g, Martinez, mopoz, sausol |
|            5 |     5367 | 2025-10-07 | The MongolZ            | L   | 0.044      | -            | -                | -                | -         |    -0.19 | alex, dav1g, Martinez, mopoz, sausol |
|            4 |     5444 | 2025-10-06 | Aurora Gaming          | L   | 0.036      | -            | -                | -                | -         |    -0.06 | alex, dav1g, Martinez, mopoz, sausol |
|            3 |     5496 | 2025-10-05 | MOUZ                   | L   | 0.030      | -            | -                | -                | -         |    -0.08 | alex, dav1g, Martinez, mopoz, sausol |
|            2 |     5528 | 2025-10-04 | Team Vitality          | W   | 0.024      | 1.000        | 1.000 (0.024)    | -                | -         |     0.73 | alex, dav1g, Martinez, mopoz, sausol |
|            1 |     5634 | 2025-10-01 | Legacy                 | W   | 0.005      | -            | -                | -                | -         |     0.06 | alex, dav1g, Martinez, mopoz, sausol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,745.74)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-26 |      1.000 | $750.00        | $750.00         |
| 2026-02-22 |      0.965 | $2,947.24      | $2,844.30       |
| 2026-02-14 |      0.912 | $12,500.00     | $11,394.10      |
| 2026-01-18 |      0.732 | $28,750.00     | $21,032.09      |
| 2025-12-21 |      0.545 | $585.61        | $319.40         |
| 2025-11-15 |      0.308 | $6,338.43      | $1,953.18       |
| 2025-11-01 |      0.210 | $31,250.00     | $6,561.78       |
| 2025-10-12 |      0.077 | $20,500.00     | $1,585.90       |
| 2025-10-12 |      0.076 | $4,000.00      | $305.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
