### Roster Details<br />
Team Name: AM<br />
Roster: Altekz, k1to, kyuubii, L00m1, myltsi<br />
Global Rank: [183](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [129]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  729.0<br />
<br />
Final Rank Value (729.0) = Starting Rank Value (697.5) + Head To Head Adjustments (31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.057[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 697.5
- 400 + ( ( 0.156 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 697.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     3169 | 2026-05-15 | SPARTA          | L   | 0.425      | -            | -                | -                | -         |    -3.64 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           23 |     3215 | 2026-05-13 | Betclic         | W   | 0.412      | 0.435        | 0.004 (0.001)    | 0.175 (0.031)    | 0 (0.000) |     7.82 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           22 |     3295 | 2026-05-11 | Walczaki        | L   | 0.399      | -            | -                | -                | -         |    -1.58 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           21 |     3361 | 2026-05-09 | CYBERSHOKE      | L   | 0.386      | -            | -                | -                | -         |    -4.08 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           20 |     3396 | 2026-05-08 | MOUZ NXT        | L   | 0.378      | -            | -                | -                | -         |    -7.37 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           19 |     3412 | 2026-05-07 | BBL             | W   | 0.372      | 0.435        | 0.034 (0.006)    | 0.509 (0.082)    | 0 (0.000) |    10.63 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           18 |     3446 | 2026-05-05 | ASTRAL          | W   | 0.358      | 0.435        | 0.010 (0.002)    | 0.765 (0.119)    | 0 (0.000) |    10.35 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           17 |     3496 | 2026-05-03 | The Last Resort | W   | 0.345      | 0.435        | 0.011 (0.002)    | 0.441 (0.066)    | 0 (0.000) |     8.58 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           16 |     3649 | 2026-04-30 | megoshort       | W   | 0.323      | 0.435        | 0.002 (0.000)    | 0.204 (0.029)    | 0 (0.000) |     4.90 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           15 |     3677 | 2026-04-29 | INOX Division   | L   | 0.319      | -            | -                | -                | -         |    -1.97 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           14 |     4753 | 2026-04-01 | illwill         | L   | 0.132      | -            | -                | -                | -         |    -1.85 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           13 |     4765 | 2026-04-01 | Phantom         | L   | 0.132      | -            | -                | -                | -         |    -1.72 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           12 |     4780 | 2026-04-01 | EAC             | L   | 0.131      | -            | -                | -                | -         |    -0.28 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           11 |     4818 | 2026-03-31 | maquinas        | W   | 0.127      | -            | -                | -                | 1 (0.127) |     0.59 | Altekz, k1to, kyuubii, L00m1, myltsi |
|           10 |     4840 | 2026-03-31 | B8              | L   | 0.126      | -            | -                | -                | -         |    -0.05 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            9 |     4849 | 2026-03-31 | WAZABI          | W   | 0.125      | -            | -                | -                | 1 (0.125) |     1.95 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            8 |     4862 | 2026-03-31 | Phantom         | W   | 0.125      | 0.340        | 0.002 (0.000)    | 0.162 (0.007)    | 1 (0.125) |     2.35 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            7 |     4873 | 2026-03-31 | Z7              | W   | 0.125      | -            | -                | -                | 1 (0.125) |     0.63 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            6 |     4915 | 2026-03-30 | BBL             | W   | 0.120      | 0.435        | 0.034 (0.002)    | 0.509 (0.027)    | 0 (0.000) |     3.50 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            5 |     5219 | 2026-03-25 | ACROBATS        | L   | 0.087      | -            | -                | -                | -         |    -2.03 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            4 |     5228 | 2026-03-25 | mellren         | W   | 0.086      | 0.624        | 0.008 (0.000)    | 0.328 (0.018)    | -         |     1.53 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            3 |     5486 | 2026-03-21 | ALGO            | W   | 0.058      | -            | -                | -                | -         |     0.86 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            2 |     5566 | 2026-03-19 | ASTRAL          | W   | 0.047      | 0.435        | 0.010 (0.000)    | 0.765 (0.016)    | -         |     1.40 | Altekz, k1to, kyuubii, L00m1, myltsi |
|            1 |     5623 | 2026-03-18 | PsychoFace      | W   | 0.039      | 0.435        | 0.009 (0.000)    | 0.381 (0.006)    | -         |     0.97 | Altekz, k1to, kyuubii, L00m1, myltsi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,066.32)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-10 |      0.394 | $2,000.00      | $787.15         |
| 2026-04-02 |      0.140 | $2,000.00      | $279.17         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
