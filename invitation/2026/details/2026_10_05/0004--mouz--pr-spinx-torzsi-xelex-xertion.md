### Roster Details<br />
Team Name: MOUZ<br />
Roster: PR, Spinx, torzsi, xelex, xertioN<br />
Global Rank: [4](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [3]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1862.8<br />
<br />
Final Rank Value (1862.8) = Starting Rank Value (1914.6) + Head To Head Adjustments (-51.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.765[<sup>2</sup>](#table1)
- Opponent Network: 0.367[<sup>2</sup>](#table1)
- LAN Wins: 0.899[<sup>2</sup>](#table1)

The average of these factors is 0.758<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1914.6
- 400 + ( ( 0.758 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1914.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      743 | 2026-09-19 | FURIA           | L   | 1.000      | -            | -                | -                | -         |   -17.72 | PR, Spinx, torzsi, xelex, xertioN         |
|           39 |      796 | 2026-09-18 | Natus Vincere   | W   | 1.000      | 0.769        | 0.418 (0.321)    | -                | 1 (1.000) |     2.33 | PR, Spinx, torzsi, xelex, xertioN         |
|           38 |      850 | 2026-09-17 | NRG             | L   | 1.000      | -            | -                | -                | -         |   -30.19 | PR, Spinx, torzsi, xelex, xertioN         |
|           37 |     1319 | 2026-09-06 | Spirit          | L   | 1.000      | -            | -                | -                | -         |   -10.35 | PR, Spinx, torzsi, xelex, xertioN         |
|           36 |     1372 | 2026-09-05 | Vitality        | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.358 (0.358)    | 1 (1.000) |    15.51 | PR, Spinx, torzsi, xelex, xertioN         |
|           35 |     1578 | 2026-08-31 | Falcons         | W   | 0.967      | 1.000        | 1.000 (0.967)    | 0.308 (0.298)    | 1 (0.967) |    12.90 | PR, Spinx, torzsi, xelex, xertioN         |
|           34 |     1706 | 2026-08-29 | Inner Circle    | W   | 0.952      | 1.000        | -                | 0.526 (0.501)    | 1 (0.952) |     3.67 | PR, Spinx, torzsi, xelex, xertioN         |
|           33 |     1798 | 2026-08-27 | 9z              | W   | 0.939      | 1.000        | 0.563 (0.529)    | 0.278 (0.261)    | 1 (0.939) |     4.30 | PR, Spinx, torzsi, xelex, xertioN         |
|           32 |     2000 | 2026-08-21 | FUT             | L   | 0.899      | -            | -                | -                | -         |   -17.93 | PR, Spinx, torzsi, xelex, xertioN         |
|           31 |     2031 | 2026-08-19 | GamerLegion     | W   | 0.888      | 1.000        | 0.299 (0.265)    | 0.312 (0.277)    | 1 (0.888) |     3.15 | PR, Spinx, torzsi, xelex, xertioN         |
|           30 |     2122 | 2026-08-16 | PARIVISION      | W   | 0.866      | 1.000        | 0.320 (0.277)    | -                | 1 (0.866) |     1.73 | PR, Spinx, torzsi, xelex, xertioN         |
|           29 |     2186 | 2026-08-14 | FUT             | L   | 0.853      | -            | -                | -                | -         |   -18.29 | PR, Spinx, torzsi, xelex, xertioN         |
|           28 |     2230 | 2026-08-12 | Lynn Vision     | W   | 0.841      | -            | -                | -                | 1 (0.841) |     0.56 | PR, Spinx, torzsi, xelex, xertioN         |
|           27 |     2520 | 2026-08-02 | Spirit          | W   | 0.773      | 0.884        | 1.000 (0.684)    | 0.539 (0.369)    | 1 (0.773) |    15.64 | PR, Spinx, torzsi, xelex, xertioN         |
|           26 |     2549 | 2026-08-01 | Astralis        | W   | 0.767      | 0.884        | 0.344 (0.234)    | 0.478 (0.324)    | 1 (0.767) |     5.75 | PR, Spinx, torzsi, xelex, xertioN         |
|           25 |     2615 | 2026-07-30 | 3DMAX           | W   | 0.754      | 0.884        | 0.330 (0.220)    | 0.492 (0.328)    | -         |     2.74 | PR, Spinx, torzsi, xelex, xertioN         |
|           24 |     2772 | 2026-07-25 | FOKUS           | W   | 0.721      | 0.903        | -                | 0.664 (0.432)    | -         |     1.16 | PR, Spinx, torzsi, xelex, xertioN         |
|           23 |     2897 | 2026-07-21 | Nuclear TigeRES | W   | 0.694      | 0.903        | -                | 0.827 (0.518)    | -         |     0.65 | PR, Spinx, torzsi, xelex, xertioN         |
|           22 |     3562 | 2026-06-14 | FUT             | L   | 0.446      | -            | -                | -                | -         |    -9.18 | Brollan, Spinx, torzsi, xelex, xertioN    |
|           21 |     3591 | 2026-06-13 | Vitality        | L   | 0.440      | -            | -                | -                | -         |    -6.05 | Brollan, Spinx, torzsi, xelex, xertioN    |
|           20 |     3651 | 2026-06-12 | FURIA           | L   | 0.432      | -            | -                | -                | -         |    -7.29 | Brollan, Spinx, torzsi, xelex, xertioN    |
|           19 |     3670 | 2026-06-11 | Legacy          | W   | 0.426      | 1.000        | 1.000 (0.426)    | -                | -         |     7.51 | Brollan, Spinx, torzsi, xelex, xertioN    |
|           18 |     4220 | 2026-05-23 | MIBR            | W   | 0.303      | -            | -                | -                | -         |     1.61 | jL, Spinx, torzsi, xelex, xertioN         |
|           17 |     4276 | 2026-05-23 | Falcons         | L   | 0.298      | -            | -                | -                | -         |    -5.90 | jL, Spinx, torzsi, xelex, xertioN         |
|           16 |     4309 | 2026-05-22 | B8              | W   | 0.292      | -            | -                | -                | -         |     1.03 | jL, Spinx, torzsi, xelex, xertioN         |
|           15 |     4318 | 2026-05-21 | paiN            | W   | 0.291      | -            | -                | -                | -         |     0.48 | jL, Spinx, torzsi, xelex, xertioN         |
|           14 |     4352 | 2026-05-21 | M80             | W   | 0.286      | -            | -                | -                | -         |     0.97 | jL, Spinx, torzsi, xelex, xertioN         |
|           13 |     4374 | 2026-05-20 | NRG             | W   | 0.284      | -            | -                | -                | -         |     0.27 | jL, Spinx, torzsi, xelex, xertioN         |
|           12 |     4401 | 2026-05-19 | TYLOO           | L   | 0.277      | -            | -                | -                | -         |    -8.50 | jL, Spinx, torzsi, xelex, xertioN         |
|           11 |     4467 | 2026-05-17 | magic           | W   | 0.258      | -            | -                | -                | -         |     0.72 | jL, Spinx, torzsi, xelex, xertioN         |
|           10 |     4491 | 2026-05-16 | Spirit          | L   | 0.252      | -            | -                | -                | -         |    -2.98 | jL, Spinx, torzsi, xelex, xertioN         |
|            9 |     4526 | 2026-05-15 | Aurora          | W   | 0.244      | -            | -                | -                | -         |     1.74 | jL, Spinx, torzsi, xelex, xertioN         |
|            8 |     4627 | 2026-05-12 | Aurora          | W   | 0.224      | -            | -                | -                | -         |     1.62 | jL, Spinx, torzsi, xelex, xertioN         |
|            7 |     4655 | 2026-05-11 | 9z              | L   | 0.219      | -            | -                | -                | -         |    -6.11 | jL, Spinx, torzsi, xelex, xertioN         |
|            6 |     4704 | 2026-05-10 | G2              | W   | 0.211      | -            | -                | -                | -         |     3.12 | jL, Spinx, torzsi, xelex, xertioN         |
|            5 |     4728 | 2026-05-09 | Iberian Soul    | W   | 0.205      | -            | -                | -                | -         |     0.14 | jL, Spinx, torzsi, xelex, xertioN         |
|            4 |     5460 | 2026-04-17 | Spirit          | L   | 0.060      | -            | -                | -                | -         |    -0.73 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            3 |     5476 | 2026-04-15 | FURIA           | L   | 0.049      | -            | -                | -                | -         |    -0.81 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            2 |     5495 | 2026-04-14 | Aurora          | W   | 0.042      | -            | -                | -                | -         |     0.30 | Brollan, Jimpphat, Spinx, torzsi, xertioN |
|            1 |     5518 | 2026-04-13 | Legacy          | W   | 0.035      | -            | -                | -                | -         |     0.64 | Brollan, Jimpphat, Spinx, torzsi, xertioN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($545,220.68)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-20 |      1.000 | $20,000.00     | $20,000.00      |
| 2026-09-06 |      1.000 | $160,000.00    | $160,000.00     |
| 2026-08-23 |      0.914 | $60,000.00     | $54,810.90      |
| 2026-08-02 |      0.773 | $266,563.00    | $206,032.43     |
| 2026-06-21 |      0.494 | $20,000.00     | $9,877.33       |
| 2026-05-24 |      0.305 | $130,000.00    | $39,655.37      |
| 2026-05-17 |      0.259 | $192,000.00    | $49,819.47      |
| 2026-04-19 |      0.074 | $67,500.00     | $5,025.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
