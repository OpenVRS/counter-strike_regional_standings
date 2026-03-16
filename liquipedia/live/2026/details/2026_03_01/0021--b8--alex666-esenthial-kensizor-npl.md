### Roster Details<br />
Team Name: B8<br />
Roster: alex666, esenthial, kensizor, npl<br />
Global Rank: [21](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [17]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  1402.4<br />
<br />
Final Rank Value (1402.4) = Starting Rank Value (1364.3) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.597[<sup>1</sup>](#table2)
- Bounty Collected: 0.642[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.612[<sup>2</sup>](#table1)

The average of these factors is 0.510<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1364.3
- 400 + ( ( 0.510 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1364.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.249
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      562 | 2026-02-17 | Aurora Gaming     | L   | 1.000      | -            | -                | -                | -         |    -5.13 | alex666, esenthial, kensizor, npl, s1zzi     |
|           35 |      606 | 2026-02-16 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -9.08 | alex666, esenthial, kensizor, npl, s1zzi     |
|           34 |      646 | 2026-02-15 | HEROIC            | W   | 1.000      | 1.000        | 0.443 (0.443)    | 0.433 (0.433)    | 1 (1.000) |    17.70 | alex666, esenthial, kensizor, npl, s1zzi     |
|           33 |      684 | 2026-02-14 | FURIA             | L   | 1.000      | -            | -                | -                | -         |    -1.61 | alex666, esenthial, kensizor, npl, s1zzi     |
|           32 |     1232 | 2026-01-29 | PaiN Gaming       | L   | 0.986      | -            | -                | -                | -         |   -19.56 | alex666, esenthial, kensizor, npl, segukawa  |
|           31 |     1253 | 2026-01-28 | NRG               | L   | 0.979      | -            | -                | -                | -         |   -16.94 | alex666, esenthial, kensizor, npl, segukawa  |
|           30 |     2107 | 2025-12-07 | Natus Vincere     | L   | 0.633      | -            | -                | -                | -         |    -3.85 | alex666, esenthial, headtr1ck, kensizor, npl |
|           29 |     2133 | 2025-12-06 | PaiN Gaming       | W   | 0.626      | 1.000        | 0.369 (0.231)    | 0.178 (0.112)    | 1 (0.626) |     6.39 | alex666, esenthial, headtr1ck, kensizor, npl |
|           28 |     2158 | 2025-12-05 | Team Vitality     | L   | 0.619      | -            | -                | -                | -         |    -0.97 | alex666, esenthial, headtr1ck, kensizor, npl |
|           27 |     2174 | 2025-12-04 | MOUZ              | L   | 0.614      | -            | -                | -                | -         |    -1.15 | alex666, esenthial, headtr1ck, kensizor, npl |
|           26 |     2183 | 2025-12-04 | Team Falcons      | W   | 0.613      | 1.000        | 1.000 (0.613)    | 0.448 (0.275)    | 1 (0.613) |    17.89 | alex666, esenthial, headtr1ck, kensizor, npl |
|           25 |     2229 | 2025-12-01 | 3DMAX             | W   | 0.595      | 0.769        | 0.401 (0.183)    | 0.298 (0.136)    | 1 (0.595) |     9.81 | alex666, esenthial, headtr1ck, kensizor, npl |
|           24 |     2244 | 2025-11-30 | Natus Vincere     | L   | 0.588      | -            | -                | -                | -         |    -3.33 | alex666, esenthial, headtr1ck, kensizor, npl |
|           23 |     2278 | 2025-11-29 | Fnatic            | W   | 0.581      | 0.769        | -                | 0.504 (0.225)    | 1 (0.581) |     7.08 | alex666, esenthial, headtr1ck, kensizor, npl |
|           22 |     2291 | 2025-11-29 | Team Liquid       | W   | 0.580      | 0.769        | 0.441 (0.197)    | 0.229 (0.102)    | 1 (0.580) |     8.76 | alex666, esenthial, headtr1ck, kensizor, npl |
|           21 |     2363 | 2025-11-26 | Legacy            | W   | 0.559      | 0.624        | 0.619 (0.216)    | -                | 1 (0.559) |     8.95 | alex666, esenthial, headtr1ck, kensizor, npl |
|           20 |     2385 | 2025-11-25 | PARIVISION        | W   | 0.553      | 0.624        | 1.000 (0.345)    | 0.622 (0.214)    | 1 (0.553) |    16.62 | alex666, esenthial, headtr1ck, kensizor, npl |
|           19 |     2404 | 2025-11-24 | The Huns Esports  | W   | 0.548      | 0.624        | -                | 0.425 (0.145)    | 1 (0.548) |     3.42 | alex666, esenthial, headtr1ck, kensizor, npl |
|           18 |     2428 | 2025-11-24 | M80               | L   | 0.546      | -            | -                | -                | -         |    -9.90 | alex666, esenthial, headtr1ck, kensizor, npl |
|           17 |     3179 | 2025-10-31 | Aurora Gaming     | L   | 0.384      | -            | -                | -                | -         |    -1.42 | alex666, esenthial, headtr1ck, kensizor, npl |
|           16 |     3209 | 2025-10-29 | Legacy            | W   | 0.373      | 1.000        | 0.619 (0.231)    | -                | 1 (0.373) |     6.17 | alex666, esenthial, headtr1ck, kensizor, npl |
|           15 |     3241 | 2025-10-28 | PaiN Gaming       | L   | 0.366      | -            | -                | -                | -         |    -7.13 | alex666, esenthial, headtr1ck, kensizor, npl |
|           14 |     3273 | 2025-10-27 | 3DMAX             | W   | 0.360      | 1.000        | 0.401 (0.144)    | 0.298 (0.107)    | -         |     7.08 | alex666, esenthial, headtr1ck, kensizor, npl |
|           13 |     3329 | 2025-10-26 | Astralis          | W   | 0.353      | 1.000        | 0.468 (0.166)    | 0.375 (0.132)    | -         |     8.99 | alex666, esenthial, headtr1ck, kensizor, npl |
|           12 |     3702 | 2025-10-14 | FaZe Clan         | L   | 0.277      | -            | -                | -                | -         |    -2.00 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           11 |     3728 | 2025-10-14 | HEROIC            | L   | 0.271      | -            | -                | -                | -         |    -3.08 | alex666, esenthial, headtr1ck, kRaSnaL, npl  |
|           10 |     4200 | 2025-10-02 | FURIA             | L   | 0.194      | -            | -                | -                | -         |    -0.26 | alex666, esenthial, headtr1ck, kensizor, npl |
|            9 |     4253 | 2025-10-01 | GamerLegion       | L   | 0.185      | -            | -                | -                | -         |    -1.24 | alex666, esenthial, headtr1ck, kensizor, npl |
|            8 |     4295 | 2025-09-30 | G2 Esports        | W   | 0.179      | -            | -                | -                | -         |     4.26 | alex666, esenthial, headtr1ck, kensizor, npl |
|            7 |     4335 | 2025-09-29 | HOTU              | L   | 0.171      | -            | -                | -                | -         |    -2.45 | alex666, esenthial, headtr1ck, kensizor, npl |
|            6 |     4361 | 2025-09-28 | Legacy            | W   | 0.166      | -            | -                | -                | -         |     2.57 | alex666, esenthial, headtr1ck, kensizor, npl |
|            5 |     4610 | 2025-09-21 | Ninjas in Pyjamas | L   | 0.119      | -            | -                | -                | -         |    -2.25 | alex666, esenthial, headtr1ck, kensizor, npl |
|            4 |     4631 | 2025-09-20 | Gentle Mates      | W   | 0.114      | -            | -                | -                | -         |     2.34 | alex666, esenthial, headtr1ck, kensizor, npl |
|            3 |     4639 | 2025-09-20 | Passion UA        | W   | 0.112      | -            | -                | -                | -         |     1.35 | alex666, esenthial, headtr1ck, kensizor, npl |
|            2 |     4678 | 2025-09-19 | OG                | W   | 0.105      | -            | -                | -                | -         |     0.24 | alex666, esenthial, headtr1ck, kensizor, npl |
|            1 |     4712 | 2025-09-18 | PARIVISION        | L   | 0.098      | -            | -                | -                | -         |    -0.12 | alex666, esenthial, headtr1ck, kensizor, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,544.27)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $18,750.00     | $18,750.00      |
| 2026-01-30 |      0.994 | $2,500.00      | $2,484.90       |
| 2025-12-14 |      0.680 | $20,000.00     | $13,605.56      |
| 2025-11-01 |      0.392 | $62,500.00     | $24,521.12      |
| 2025-10-19 |      0.304 | $5,000.00      | $1,520.83       |
| 2025-10-02 |      0.194 | $6,500.00      | $1,258.62       |
| 2025-09-21 |      0.120 | $70,000.00     | $8,403.24       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
