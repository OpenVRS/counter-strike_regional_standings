### Roster Details<br />
Team Name: OG<br />
Roster: adamb, bodyy, cadiaN, pr1metapz, spooke<br />
Global Rank: [85](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [63]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1031.6<br />
<br />
Final Rank Value (1031.6) = Starting Rank Value (1022.1) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.483[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1022.1
- 400 + ( ( 0.321 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1022.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      257 | 2026-07-23 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.12 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           30 |      834 | 2026-06-24 | Poland            | L   | 0.935      | -            | -                | -                | -         |   -22.84 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           29 |      851 | 2026-06-23 | FOKUS             | L   | 0.927      | -            | -                | -                | -         |    -5.95 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           28 |     1334 | 2026-05-31 | TDK               | L   | 0.772      | -            | -                | -                | -         |    -8.90 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           27 |     1385 | 2026-05-30 | Just Players      | W   | 0.765      | 0.396        | 0.009 (0.003)    | 0.819 (0.248)    | -         |    11.07 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           26 |     1413 | 2026-05-29 | EAC               | W   | 0.759      | 0.396        | 0.014 (0.004)    | 0.758 (0.228)    | -         |    12.30 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           25 |     1721 | 2026-05-22 | Inner Circle      | L   | 0.712      | -            | -                | -                | -         |    -2.38 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           24 |     1742 | 2026-05-21 | Rebels            | W   | 0.707      | 0.435        | 0.006 (0.002)    | 0.522 (0.160)    | 1 (0.707) |    10.09 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           23 |     1744 | 2026-05-21 | Betclic           | L   | 0.707      | -            | -                | -                | -         |   -12.92 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           22 |     1750 | 2026-05-21 | Metizport         | W   | 0.707      | 0.435        | 0.023 (0.007)    | 0.388 (0.119)    | 1 (0.707) |    12.05 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           21 |     1778 | 2026-05-21 | Passion UA        | W   | 0.704      | 0.435        | 0.018 (0.005)    | 0.234 (0.072)    | 1 (0.704) |    10.74 | adamb, bodyy, cadiaN, pr1metapz, spooke  |
|           20 |     3509 | 2026-04-01 | ALGO              | L   | 0.374      | -            | -                | -                | -         |    -9.66 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           19 |     3717 | 2026-03-30 | BESTIA            | L   | 0.358      | -            | -                | -                | -         |    -4.58 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           18 |     3782 | 2026-03-29 | BIG               | W   | 0.352      | 0.341        | 0.170 (0.020)    | 0.725 (0.087)    | 1 (0.352) |    10.46 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           17 |     3792 | 2026-03-29 | JiJieHao          | W   | 0.352      | 0.341        | 0.048 (0.006)    | 0.426 (0.051)    | 1 (0.352) |     8.14 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           16 |     3794 | 2026-03-29 | SINNERS           | L   | 0.351      | -            | -                | -                | -         |    -2.80 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           15 |     4031 | 2026-03-24 | 9INE              | L   | 0.322      | -            | -                | -                | -         |    -5.43 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           14 |     4047 | 2026-03-24 | INFINITE Talent   | W   | 0.320      | -            | -                | -                | 1 (0.320) |     0.28 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           13 |     4064 | 2026-03-24 | Inner Circle      | L   | 0.319      | -            | -                | -                | -         |    -0.77 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           12 |     4509 | 2026-03-15 | Ninjas in Pyjamas | L   | 0.262      | -            | -                | -                | -         |    -0.59 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           11 |     4528 | 2026-03-15 | Liquid            | W   | 0.259      | 0.350        | 0.018 (0.002)    | -                | 1 (0.259) |     1.58 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|           10 |     4556 | 2026-03-14 | JiJieHao          | W   | 0.254      | 0.350        | 0.048 (0.004)    | 0.426 (0.038)    | 1 (0.254) |     5.85 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            9 |     4587 | 2026-03-13 | BC.Game           | W   | 0.249      | -            | -                | -                | 1 (0.249) |     1.57 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            8 |     4588 | 2026-03-13 | Alliance          | L   | 0.248      | -            | -                | -                | -         |    -0.21 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            7 |     4593 | 2026-03-13 | Romania           | W   | 0.248      | -            | -                | -                | 1 (0.248) |     0.74 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            6 |     4604 | 2026-03-13 | GRINGOS           | W   | 0.247      | -            | -                | -                | -         |     0.23 | adamb, arrozdoce, bodyy, cadiaN, spooke  |
|            5 |     6151 | 2026-02-11 | Alliance          | L   | 0.046      | -            | -                | -                | -         |    -0.04 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            4 |     6167 | 2026-02-10 | Nemesis           | W   | 0.042      | 0.769        | 0.230 (0.007)    | 0.899 (0.029)    | -         |     1.13 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            3 |     6193 | 2026-02-10 | fnatic            | L   | 0.040      | -            | -                | -                | -         |    -0.51 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            2 |     6228 | 2026-02-08 | Phantom           | W   | 0.028      | 0.624        | -                | 0.815 (0.014)    | -         |     0.55 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |
|            1 |     6242 | 2026-02-08 | Metizport         | W   | 0.027      | -            | -                | -                | -         |     0.47 | adamb, arrozdoce, cadiaN, FL4MUS, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,808.82)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-06-28 |      0.961 | $2,000.00      | $1,923.00       |
| 2026-05-31 |      0.774 | $3,000.00      | $2,322.22       |
| 2026-03-15 |      0.262 | $4,066.00      | $1,063.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
