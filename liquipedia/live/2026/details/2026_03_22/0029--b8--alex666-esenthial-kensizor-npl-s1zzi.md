### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, kensizor, npl, s1zzi<br />
Global Rank: [29](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [23]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  1375.4<br />
<br />
Final Rank Value (1375.4) = Starting Rank Value (1316.3) + Head To Head Adjustments (59.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.569[<sup>1</sup>](#table2)
- Bounty Collected: 0.615[<sup>2</sup>](#table1)
- Opponent Network: 0.176[<sup>2</sup>](#table1)
- LAN Wins: 0.478[<sup>2</sup>](#table1)

The average of these factors is 0.459<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1316.3
- 400 + ( ( 0.459 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 1316.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.202
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |      406 | 2026-03-09 | FUT Esports      | L   | 1.000      | -            | -                | -                | -         |    -6.46 | alex666, esenthial, kensizor, npl, s1zzi     |
|           34 |      487 | 2026-03-08 | Natus Vincere    | L   | 1.000      | -            | -                | -                | -         |    -2.85 | alex666, esenthial, kensizor, npl, s1zzi     |
|           33 |      513 | 2026-03-07 | Team Spirit      | L   | 1.000      | -            | -                | -                | -         |    -3.93 | alex666, esenthial, kensizor, npl, s1zzi     |
|           32 |      554 | 2026-03-06 | FURIA            | W   | 1.000      | 0.805        | 1.000 (0.805)    | 0.432 (0.348)    | -         |    29.88 | alex666, esenthial, kensizor, npl, s1zzi     |
|           31 |     1450 | 2026-02-17 | Aurora Gaming    | L   | 0.977      | -            | -                | -                | -         |    -2.73 | alex666, esenthial, kensizor, npl, s1zzi     |
|           30 |     1494 | 2026-02-16 | The MongolZ      | L   | 0.970      | -            | -                | -                | -         |    -7.38 | alex666, esenthial, kensizor, npl, s1zzi     |
|           29 |     1534 | 2026-02-15 | HEROIC           | W   | 0.965      | 1.000        | 0.303 (0.292)    | 0.442 (0.426)    | 1 (0.965) |    18.83 | alex666, esenthial, kensizor, npl, s1zzi     |
|           28 |     1573 | 2026-02-14 | FURIA            | L   | 0.958      | -            | -                | -                | -         |    -1.08 | alex666, esenthial, kensizor, npl, s1zzi     |
|           27 |     2131 | 2026-01-29 | PaiN Gaming      | L   | 0.850      | -            | -                | -                | -         |   -16.67 | alex666, esenthial, kensizor, npl, segukawa  |
|           26 |     2152 | 2026-01-28 | NRG              | L   | 0.844      | -            | -                | -                | -         |   -13.68 | alex666, esenthial, kensizor, npl, segukawa  |
|           25 |     3022 | 2025-12-07 | Natus Vincere    | L   | 0.497      | -            | -                | -                | -         |    -0.94 | alex666, esenthial, headtr1ck, kensizor, npl |
|           24 |     3048 | 2025-12-06 | PaiN Gaming      | W   | 0.491      | 1.000        | 0.274 (0.134)    | 0.227 (0.111)    | 1 (0.491) |     5.24 | alex666, esenthial, headtr1ck, kensizor, npl |
|           23 |     3073 | 2025-12-05 | Team Vitality    | L   | 0.484      | -            | -                | -                | -         |    -0.54 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     3089 | 2025-12-04 | MOUZ             | L   | 0.479      | -            | -                | -                | -         |    -0.73 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     3098 | 2025-12-04 | Team Falcons     | W   | 0.478      | 1.000        | 0.693 (0.331)    | 0.336 (0.160)    | 1 (0.478) |    13.53 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     3144 | 2025-12-01 | 3DMAX            | W   | 0.459      | 0.769        | 0.313 (0.111)    | 0.329 (0.116)    | 1 (0.459) |     8.41 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     3159 | 2025-11-30 | Natus Vincere    | L   | 0.452      | -            | -                | -                | -         |    -0.74 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     3193 | 2025-11-29 | Fnatic           | W   | 0.446      | 0.769        | -                | 0.369 (0.127)    | 1 (0.446) |     4.78 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     3206 | 2025-11-29 | Team Liquid      | W   | 0.444      | 0.769        | 0.254 (0.087)    | 0.315 (0.108)    | 1 (0.444) |     7.66 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     3278 | 2025-11-26 | Legacy           | W   | 0.424      | 0.624        | 0.423 (0.112)    | 0.349 (0.092)    | 1 (0.424) |     7.86 | alex666, esenthial, headtr1ck, kensizor, npl |
|           15 |     3300 | 2025-11-25 | PARIVISION       | W   | 0.417      | 0.624        | 1.000 (0.260)    | 0.530 (0.138)    | 1 (0.417) |    12.64 | alex666, esenthial, headtr1ck, kensizor, npl |
|           14 |     3319 | 2025-11-24 | The Huns Esports | W   | 0.412      | 0.624        | -                | 0.511 (0.131)    | 1 (0.412) |     4.83 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     3343 | 2025-11-24 | M80              | L   | 0.410      | -            | -                | -                | -         |    -6.13 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     4094 | 2025-10-31 | Aurora Gaming    | L   | 0.249      | -            | -                | -                | -         |    -0.41 | alex666, esenthial, headtr1ck, kensizor, npl |
|           11 |     4124 | 2025-10-29 | Legacy           | W   | 0.237      | 1.000        | 0.423 (0.100)    | -                | 1 (0.237) |     4.57 | alex666, esenthial, headtr1ck, kensizor, npl |
|           10 |     4156 | 2025-10-28 | PaiN Gaming      | L   | 0.231      | -            | -                | -                | -         |    -4.42 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     4188 | 2025-10-27 | 3DMAX            | W   | 0.225      | -            | -                | -                | -         |     4.69 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     4244 | 2025-10-26 | Astralis         | W   | 0.218      | 1.000        | 0.580 (0.126)    | -                | -         |     6.40 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     4617 | 2025-10-14 | FaZe Clan        | L   | 0.141      | -            | -                | -                | -         |    -1.20 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|            6 |     4643 | 2025-10-14 | HEROIC           | L   | 0.136      | -            | -                | -                | -         |    -1.28 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|            5 |     5115 | 2025-10-02 | FURIA            | L   | 0.058      | -            | -                | -                | -         |    -0.06 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     5168 | 2025-10-01 | GamerLegion      | L   | 0.050      | -            | -                | -                | -         |    -0.31 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     5210 | 2025-09-30 | G2 Esports       | W   | 0.043      | -            | -                | -                | -         |     1.10 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     5250 | 2025-09-29 | HOTU             | L   | 0.036      | -            | -                | -                | -         |    -0.38 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     5276 | 2025-09-28 | Legacy           | W   | 0.031      | -            | -                | -                | -         |     0.57 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,559.92)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.17) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-10 |      1.000 | $21,500.00     | $21,500.00      |
| 2026-02-22 |      1.000 | $18,750.00     | $18,750.00      |
| 2026-01-30 |      0.858 | $2,500.00      | $2,146.01       |
| 2025-12-14 |      0.545 | $20,000.00     | $10,894.44      |
| 2025-11-01 |      0.257 | $62,500.00     | $16,048.90      |
| 2025-10-19 |      0.169 | $5,000.00      | $843.06         |
| 2025-10-02 |      0.058 | $6,500.00      | $377.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
