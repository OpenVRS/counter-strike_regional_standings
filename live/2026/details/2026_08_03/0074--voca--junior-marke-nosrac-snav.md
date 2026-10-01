### Roster Details<br />
Team Name: Voca<br />
Roster: junior, MarKE, nosraC, snav<br />
Global Rank: [74](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [16]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  1077.2<br />
<br />
Final Rank Value (1077.2) = Starting Rank Value (987.7) + Head To Head Adjustments (89.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.397[<sup>1</sup>](#table2)
- Bounty Collected: 0.350[<sup>2</sup>](#table1)
- Opponent Network: 0.074[<sup>2</sup>](#table1)
- LAN Wins: 0.393[<sup>2</sup>](#table1)

The average of these factors is 0.303<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 987.7
- 400 + ( ( 0.303 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 987.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |        0 | 2026-08-02 | NRG                 | L   | 1.000      | -            | -                | -                | -         |    -9.83 | dare, junior, MarKE, nosraC, snav      |
|           47 |       17 | 2026-08-01 | NRG                 | W   | 1.000      | 0.143        | 0.060 (0.009)    | 0.423 (0.060)    | -         |    21.89 | dare, junior, MarKE, nosraC, snav      |
|           46 |       69 | 2026-07-30 | SportsBetExpert     | W   | 1.000      | -            | -                | -                | -         |    11.75 | dare, junior, MarKE, nosraC, snav      |
|           45 |      109 | 2026-07-28 | regain              | W   | 1.000      | 0.143        | -                | 0.508 (0.073)    | -         |     6.96 | dare, junior, MarKE, nosraC, snav      |
|           44 |      540 | 2026-07-11 | M80                 | L   | 1.000      | -            | -                | -                | -         |    -4.43 | junior, kmrn, MarKE, nosraC, snav      |
|           43 |      555 | 2026-07-10 | regain              | W   | 1.000      | 0.143        | -                | 0.508 (0.073)    | -         |     7.27 | junior, kmrn, MarKE, nosraC, snav      |
|           42 |      577 | 2026-07-09 | NuTorious           | W   | 1.000      | -            | -                | -                | -         |     6.24 | junior, kmrn, MarKE, nosraC, snav      |
|           41 |     1432 | 2026-05-28 | M80                 | L   | 0.757      | -            | -                | -                | -         |    -4.16 | Jeorge, junior, nosraC, shane, snav    |
|           40 |     1479 | 2026-05-27 | Chicken Coop        | W   | 0.749      | -            | -                | -                | -         |     9.20 | Jeorge, junior, nosraC, shane, snav    |
|           39 |     2236 | 2026-05-03 | Wildcard            | W   | 0.590      | 0.363        | 0.166 (0.035)    | 0.497 (0.106)    | -         |    15.95 | Jeorge, junior, nosraC, shane, snav    |
|           38 |     2270 | 2026-05-02 | Zomblers            | W   | 0.583      | -            | -                | -                | -         |     3.31 | Jeorge, junior, nosraC, shane, snav    |
|           37 |     2320 | 2026-05-01 | Wildcard            | L   | 0.576      | -            | -                | -                | -         |    -2.45 | Jeorge, junior, nosraC, shane, snav    |
|           36 |     2416 | 2026-04-29 | Zomblers            | W   | 0.563      | -            | -                | -                | -         |     2.76 | Jeorge, junior, nosraC, shane, snav    |
|           35 |     2502 | 2026-04-27 | Chicken Coop        | W   | 0.549      | 0.363        | 0.037 (0.007)    | 0.412 (0.082)    | -         |     7.81 | Jeorge, junior, nosraC, shane, snav    |
|           34 |     2542 | 2026-04-26 | Surge               | W   | 0.543      | -            | -                | -                | -         |     1.02 | Jeorge, junior, nosraC, shane, snav    |
|           33 |     2615 | 2026-04-25 | Marsborne           | L   | 0.536      | -            | -                | -                | -         |    -9.78 | Jeorge, junior, nosraC, shane, snav    |
|           32 |     2623 | 2026-04-25 | Wildcard            | L   | 0.535      | -            | -                | -                | -         |    -2.41 | Jeorge, junior, nosraC, shane, snav    |
|           31 |     2634 | 2026-04-25 | Marsborne           | W   | 0.534      | 0.371        | -                | 0.403 (0.080)    | 1 (0.534) |     7.12 | Jeorge, junior, nosraC, shane, snav    |
|           30 |     2907 | 2026-04-14 | Marsborne           | L   | 0.462      | -            | -                | -                | -         |   -10.71 | Infinite, Jeorge, junior, nosraC, snav |
|           29 |     2927 | 2026-04-13 | regain              | W   | 0.456      | 0.333        | -                | 0.508 (0.077)    | -         |     2.71 | Infinite, Jeorge, junior, nosraC, snav |
|           28 |     2944 | 2026-04-12 | Club 333            | W   | 0.449      | -            | -                | -                | -         |     1.90 | Infinite, Jeorge, junior, nosraC, snav |
|           27 |     3124 | 2026-04-06 | BC.Game             | L   | 0.407      | -            | -                | -                | -         |   -10.36 | Jeorge, junior, nosraC, retchy, snav   |
|           26 |     3197 | 2026-04-05 | 3DMAX               | L   | 0.398      | -            | -                | -                | -         |    -1.10 | Jeorge, junior, nosraC, retchy, snav   |
|           25 |     3269 | 2026-04-04 | NRG                 | L   | 0.392      | -            | -                | -                | -         |    -3.13 | Jeorge, junior, nosraC, retchy, snav   |
|           24 |     3722 | 2026-03-29 | Fisher College      | W   | 0.356      | 0.354        | 0.036 (0.005)    | -                | 1 (0.356) |     4.74 | Infinite, Jeorge, junior, nosraC, snav |
|           23 |     3765 | 2026-03-29 | BOSS                | W   | 0.353      | -            | -                | -                | 1 (0.353) |     2.06 | Infinite, Jeorge, junior, nosraC, snav |
|           22 |     3808 | 2026-03-28 | NuTorious           | W   | 0.349      | -            | -                | -                | 1 (0.349) |     3.40 | Infinite, Jeorge, junior, nosraC, snav |
|           21 |     3843 | 2026-03-28 | Memeories           | W   | 0.347      | -            | -                | -                | 1 (0.347) |     0.42 | Infinite, Jeorge, junior, nosraC, snav |
|           20 |     3866 | 2026-03-28 | Oatzu's Hips        | W   | 0.346      | -            | -                | -                | 1 (0.346) |     0.33 | Infinite, Jeorge, junior, nosraC, snav |
|           19 |     4165 | 2026-03-22 | Imperial            | W   | 0.309      | 0.303        | 0.067 (0.006)    | -                | 1 (0.309) |     7.25 | Infinite, Jeorge, junior, nosraC, snav |
|           18 |     4209 | 2026-03-21 | West Coast Grinders | W   | 0.303      | -            | -                | -                | 1 (0.303) |     0.30 | Infinite, Jeorge, junior, nosraC, snav |
|           17 |     4642 | 2026-03-12 | Ninjas in Pyjamas   | L   | 0.242      | -            | -                | -                | -         |    -0.51 | Infinite, Jeorge, junior, nosraC, snav |
|           16 |     4645 | 2026-03-12 | EYEBALLERS          | L   | 0.241      | -            | -                | -                | -         |    -0.90 | Infinite, Jeorge, junior, nosraC, snav |
|           15 |     4653 | 2026-03-12 | SAW Youngsters      | W   | 0.241      | -            | -                | -                | 1 (0.241) |     1.99 | Infinite, Jeorge, junior, nosraC, snav |
|           14 |     4659 | 2026-03-12 | IDoPieca            | W   | 0.241      | -            | -                | -                | 1 (0.241) |     0.42 | Infinite, Jeorge, junior, nosraC, snav |
|           13 |     4776 | 2026-03-09 | AM                  | L   | 0.222      | -            | -                | -                | -         |    -3.99 | Infinite, Jeorge, junior, nosraC, snav |
|           12 |     4793 | 2026-03-09 | MASONIC             | W   | 0.221      | -            | -                | -                | -         |     3.83 | Infinite, Jeorge, junior, nosraC, snav |
|           11 |     4808 | 2026-03-09 | FOKUS               | W   | 0.220      | 0.433        | 0.155 (0.015)    | 0.608 (0.058)    | -         |     5.88 | Infinite, Jeorge, junior, nosraC, snav |
|           10 |     4827 | 2026-03-09 | Johnny Speeds       | L   | 0.218      | -            | -                | -                | -         |    -2.71 | Infinite, Jeorge, junior, nosraC, snav |
|            9 |     4850 | 2026-03-08 | Betclic             | W   | 0.215      | -            | -                | -                | -         |     3.82 | Infinite, Jeorge, junior, nosraC, snav |
|            8 |     4862 | 2026-03-08 | Avanti              | W   | 0.214      | -            | -                | -                | -         |     0.22 | Infinite, Jeorge, junior, nosraC, snav |
|            7 |     4866 | 2026-03-08 | FOKUS               | W   | 0.214      | 0.433        | 0.155 (0.014)    | -                | -         |     5.83 | Infinite, Jeorge, junior, nosraC, snav |
|            6 |     4885 | 2026-03-08 | KOLESIE             | W   | 0.213      | -            | -                | -                | -         |     1.15 | Infinite, Jeorge, junior, nosraC, snav |
|            5 |     4900 | 2026-03-08 | AM                  | L   | 0.212      | -            | -                | -                | -         |    -3.86 | Infinite, Jeorge, junior, nosraC, snav |
|            4 |     5191 | 2026-03-01 | Wildcard            | W   | 0.170      | 0.769        | 0.166 (0.022)    | 0.497 (0.065)    | -         |     4.69 | Infinite, Jeorge, junior, nosraC, snav |
|            3 |     5234 | 2026-02-28 | Wildcard            | W   | 0.163      | 0.769        | 0.166 (0.021)    | 0.497 (0.062)    | -         |     4.54 | Infinite, Jeorge, junior, nosraC, snav |
|            2 |     5279 | 2026-02-27 | LAG                 | W   | 0.157      | -            | -                | -                | -         |     0.84 | Infinite, Jeorge, junior, nosraC, snav |
|            1 |     5329 | 2026-02-26 | Fisher College      | W   | 0.150      | 0.769        | 0.036 (0.004)    | -                | -         |     2.24 | Infinite, Jeorge, junior, nosraC, snav |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,118.97)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      0.590 | $8,000.00      | $4,716.17       |
| 2026-04-14 |      0.462 | $2,000.00      | $924.97         |
| 2026-04-11 |      0.440 | $12,500.00     | $5,502.99       |
| 2026-03-29 |      0.356 | $8,250.00      | $2,937.52       |
| 2026-03-22 |      0.309 | $2,500.00      | $773.13         |
| 2026-03-10 |      0.227 | $1,164.00      | $264.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
