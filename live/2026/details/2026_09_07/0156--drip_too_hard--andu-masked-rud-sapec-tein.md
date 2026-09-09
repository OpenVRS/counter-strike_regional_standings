### Roster Details<br />
Team Name: Drip Too Hard<br />
Roster: aNdu, mASKED, rud, Sapec, tein<br />
Global Rank: [156](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  781.0<br />
<br />
Final Rank Value (781.0) = Starting Rank Value (724.6) + Head To Head Adjustments (56.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.143[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.6
- 400 + ( ( 0.170 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 724.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      476 | 2026-08-26 | UNiTY                | L   | 1.000      | -            | -                | -                | -         |    -9.89 | aNdu, mASKED, rud, Sapec, tein     |
|           30 |      526 | 2026-08-25 | Just Players         | L   | 1.000      | -            | -                | -                | -         |   -10.27 | aNdu, mASKED, rud, Sapec, tein     |
|           29 |      599 | 2026-08-23 | MASONIC              | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.207 (0.079)    | 0 (0.000) |    18.78 | aNdu, mASKED, rud, Sapec, tein     |
|           28 |      665 | 2026-08-20 | PCIFIC               | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.338 (0.130)    | 0 (0.000) |    20.55 | aNdu, mASKED, rud, Sapec, tein     |
|           27 |      685 | 2026-08-19 | HYPERSPIRIT          | L   | 1.000      | -            | -                | -                | -         |   -13.24 | aNdu, mASKED, rud, Sapec, tein     |
|           26 |     1102 | 2026-08-04 | UNiTY                | L   | 0.966      | -            | -                | -                | -         |   -11.24 | Dr3nquu, joeski, mASKED, rud, tein |
|           25 |     1131 | 2026-08-03 | SPARTA               | L   | 0.959      | -            | -                | -                | -         |   -10.20 | Dr3nquu, joeski, mASKED, rud, tein |
|           24 |     1233 | 2026-07-31 | Inner Circle Academy | W   | 0.939      | 0.384        | 0.007 (0.002)    | 0.744 (0.268)    | 0 (0.000) |    16.43 | Dr3nquu, joeski, mASKED, rud, tein |
|           23 |     1303 | 2026-07-29 | ex-RUSTEC            | W   | 0.926      | 0.384        | 0.018 (0.006)    | 0.908 (0.323)    | 0 (0.000) |    21.32 | Dr3nquu, joeski, mASKED, rud, tein |
|           22 |     1379 | 2026-07-27 | Just Players         | L   | 0.911      | -            | -                | -                | -         |    -8.19 | Dr3nquu, joeski, mASKED, rud, tein |
|           21 |     2193 | 2026-06-15 | 1win                 | L   | 0.630      | -            | -                | -                | -         |    -0.83 | joeski, mASKED, n0te, rud, tein    |
|           20 |     2304 | 2026-06-12 | aAa                  | W   | 0.611      | 0.371        | 0.002 (0.000)    | -                | 0 (0.000) |     7.85 | joeski, mASKED, n0te, rud, tein    |
|           19 |     2336 | 2026-06-10 | G2 Ares              | L   | 0.598      | -            | -                | -                | -         |    -4.28 | joeski, mASKED, n0te, rud, tein    |
|           18 |     2433 | 2026-06-06 | ex-RUSTEC            | W   | 0.571      | 0.371        | 0.018 (0.004)    | 0.908 (0.192)    | 0 (0.000) |    13.88 | joeski, mASKED, n0te, rud, tein    |
|           17 |     2509 | 2026-06-03 | Entropy              | W   | 0.551      | 0.333        | 0.001 (0.000)    | -                | 0 (0.000) |     6.92 | joeski, mASKED, n0te, rud, tein    |
|           16 |     2566 | 2026-05-31 | ex-RUSTEC            | L   | 0.532      | -            | -                | -                | -         |    -3.48 | joeski, mASKED, n0te, rud, tein    |
|           15 |     2616 | 2026-05-30 | WAZABI               | W   | 0.525      | -            | -                | -                | 0 (0.000) |     6.89 | joeski, mASKED, n0te, rud, tein    |
|           14 |     2628 | 2026-05-29 | Phantom              | W   | 0.520      | 0.384        | 0.037 (0.007)    | 0.502 (0.100)    | 0 (0.000) |    14.00 | joeski, mASKED, n0te, rud, tein    |
|           13 |     2668 | 2026-05-28 | Permitta             | W   | 0.516      | 0.333        | 0.004 (0.001)    | 0.683 (0.117)    | 0 (0.000) |    10.70 | joeski, mASKED, n0te, rud, tein    |
|           12 |     2676 | 2026-05-28 | Permitta             | L   | 0.513      | -            | -                | -                | -         |    -5.59 | joeski, mASKED, n0te, rud, tein    |
|           11 |     2683 | 2026-05-28 | Honvéd               | W   | 0.513      | 0.307        | 0.011 (0.002)    | 0.869 (0.137)    | -         |    10.83 | joeski, mASKED, n0te, rud, tein    |
|           10 |     2697 | 2026-05-28 | WAZABI               | L   | 0.512      | -            | -                | -                | -         |    -8.82 | joeski, mASKED, n0te, rud, tein    |
|            9 |     2700 | 2026-05-28 | Mai Tai              | W   | 0.512      | 0.307        | -                | 0.216 (0.034)    | -         |     7.93 | joeski, mASKED, n0te, rud, tein    |
|            8 |     2717 | 2026-05-27 | Wampirki             | W   | 0.507      | -            | -                | -                | -         |     4.00 | joeski, mASKED, n0te, rud, tein    |
|            7 |     2720 | 2026-05-27 | Permitta             | L   | 0.507      | -            | -                | -                | -         |    -5.91 | joeski, mASKED, n0te, rud, tein    |
|            6 |     2729 | 2026-05-27 | Lilmix               | W   | 0.506      | 0.333        | -                | 0.262 (0.044)    | -         |     7.96 | joeski, mASKED, n0te, rud, tein    |
|            5 |     3041 | 2026-05-20 | Misa                 | L   | 0.458      | -            | -                | -                | -         |   -10.94 | joeski, mASKED, n0te, rud, tein    |
|            4 |     3070 | 2026-05-19 | Hashiras             | L   | 0.451      | -            | -                | -                | -         |    -7.70 | mASKED, n0te, rud, tein, Vster     |
|            3 |     3126 | 2026-05-16 | ex-Zero Tenacity     | L   | 0.433      | -            | -                | -                | -         |    -3.75 | joeski, mASKED, n0te, rud, tein    |
|            2 |     3168 | 2026-05-15 | Hashiras             | W   | 0.425      | -            | -                | -                | -         |     6.17 | joeski, mASKED, n0te, rud, tein    |
|            1 |     3185 | 2026-05-14 | ex-Zero Tenacity     | L   | 0.419      | -            | -                | -                | -         |    -3.56 | joeski, mASKED, n0te, rud, tein    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($705.52)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      0.513 | $1,374.00      | $705.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
