### Roster Details<br />
Team Name: Drip Too Hard<br />
Roster: aNdu, mASKED, rud, Sapec, tein<br />
Global Rank: [155](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [114]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  781.6<br />
<br />
Final Rank Value (781.6) = Starting Rank Value (724.0) + Head To Head Adjustments (57.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.281[<sup>2</sup>](#table1)
- Opponent Network: 0.141[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.0
- 400 + ( ( 0.170 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 724.0


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
|           31 |      448 | 2026-08-26 | UNiTY                | L   | 1.000      | -            | -                | -                | -         |    -9.92 | aNdu, mASKED, rud, Sapec, tein     |
|           30 |      498 | 2026-08-25 | Just Players         | L   | 1.000      | -            | -                | -                | -         |   -10.16 | aNdu, mASKED, rud, Sapec, tein     |
|           29 |      571 | 2026-08-23 | MASONIC              | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.208 (0.080)    | 0 (0.000) |    18.90 | aNdu, mASKED, rud, Sapec, tein     |
|           28 |      637 | 2026-08-20 | PCIFIC               | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.259 (0.100)    | 0 (0.000) |    20.28 | aNdu, mASKED, rud, Sapec, tein     |
|           27 |      657 | 2026-08-19 | HYPERSPIRIT          | L   | 1.000      | -            | -                | -                | -         |   -13.20 | aNdu, mASKED, rud, Sapec, tein     |
|           26 |     1074 | 2026-08-04 | UNiTY                | L   | 0.972      | -            | -                | -                | -         |   -11.31 | Dr3nquu, joeski, mASKED, rud, tein |
|           25 |     1103 | 2026-08-03 | SPARTA               | L   | 0.965      | -            | -                | -                | -         |   -10.34 | Dr3nquu, joeski, mASKED, rud, tein |
|           24 |     1205 | 2026-07-31 | Inner Circle Academy | W   | 0.945      | 0.384        | 0.007 (0.002)    | 0.744 (0.270)    | 0 (0.000) |    16.42 | Dr3nquu, joeski, mASKED, rud, tein |
|           23 |     1275 | 2026-07-29 | ex-RUSTEC            | W   | 0.931      | 0.384        | 0.018 (0.006)    | 0.909 (0.325)    | 0 (0.000) |    21.43 | Dr3nquu, joeski, mASKED, rud, tein |
|           22 |     1351 | 2026-07-27 | Just Players         | L   | 0.916      | -            | -                | -                | -         |    -8.22 | Dr3nquu, joeski, mASKED, rud, tein |
|           21 |     2165 | 2026-06-15 | 1win                 | L   | 0.635      | -            | -                | -                | -         |    -0.87 | joeski, mASKED, n0te, rud, tein    |
|           20 |     2276 | 2026-06-12 | aAa                  | W   | 0.616      | 0.371        | 0.002 (0.000)    | -                | 0 (0.000) |     7.94 | joeski, mASKED, n0te, rud, tein    |
|           19 |     2308 | 2026-06-10 | G2 Ares              | L   | 0.604      | -            | -                | -                | -         |    -4.32 | joeski, mASKED, n0te, rud, tein    |
|           18 |     2405 | 2026-06-06 | ex-RUSTEC            | W   | 0.577      | 0.371        | 0.018 (0.004)    | 0.909 (0.194)    | 0 (0.000) |    14.01 | joeski, mASKED, n0te, rud, tein    |
|           17 |     2481 | 2026-06-03 | Entropy              | W   | 0.556      | 0.333        | 0.001 (0.000)    | -                | 0 (0.000) |     7.01 | joeski, mASKED, n0te, rud, tein    |
|           16 |     2538 | 2026-05-31 | ex-RUSTEC            | L   | 0.537      | -            | -                | -                | -         |    -3.51 | joeski, mASKED, n0te, rud, tein    |
|           15 |     2588 | 2026-05-30 | WAZABI               | W   | 0.530      | -            | -                | -                | 0 (0.000) |     7.00 | joeski, mASKED, n0te, rud, tein    |
|           14 |     2600 | 2026-05-29 | Phantom              | W   | 0.526      | 0.384        | 0.037 (0.007)    | 0.503 (0.102)    | 0 (0.000) |    14.14 | joeski, mASKED, n0te, rud, tein    |
|           13 |     2640 | 2026-05-28 | Permitta             | W   | 0.521      | 0.333        | 0.007 (0.001)    | 0.689 (0.120)    | 0 (0.000) |    11.04 | joeski, mASKED, n0te, rud, tein    |
|           12 |     2648 | 2026-05-28 | Permitta             | L   | 0.519      | -            | -                | -                | -         |    -5.40 | joeski, mASKED, n0te, rud, tein    |
|           11 |     2655 | 2026-05-28 | Honvéd               | W   | 0.518      | 0.307        | 0.011 (0.002)    | 0.869 (0.138)    | -         |    10.95 | joeski, mASKED, n0te, rud, tein    |
|           10 |     2669 | 2026-05-28 | WAZABI               | L   | 0.517      | -            | -                | -                | -         |    -8.87 | joeski, mASKED, n0te, rud, tein    |
|            9 |     2672 | 2026-05-28 | Mai Tai              | W   | 0.517      | 0.307        | -                | 0.217 (0.034)    | -         |     8.03 | joeski, mASKED, n0te, rud, tein    |
|            8 |     2689 | 2026-05-27 | Wampirki             | W   | 0.513      | -            | -                | -                | -         |     4.07 | joeski, mASKED, n0te, rud, tein    |
|            7 |     2692 | 2026-05-27 | Permitta             | L   | 0.512      | -            | -                | -                | -         |    -5.71 | joeski, mASKED, n0te, rud, tein    |
|            6 |     2701 | 2026-05-27 | Lilmix               | W   | 0.511      | 0.333        | -                | 0.264 (0.045)    | -         |     8.08 | joeski, mASKED, n0te, rud, tein    |
|            5 |     3013 | 2026-05-20 | Misa                 | L   | 0.463      | -            | -                | -                | -         |   -11.00 | joeski, mASKED, n0te, rud, tein    |
|            4 |     3042 | 2026-05-19 | Hashiras             | L   | 0.456      | -            | -                | -                | -         |    -7.73 | mASKED, n0te, rud, tein, Vster     |
|            3 |     3098 | 2026-05-16 | ex-Zero Tenacity     | L   | 0.438      | -            | -                | -                | -         |    -3.80 | joeski, mASKED, n0te, rud, tein    |
|            2 |     3140 | 2026-05-15 | Hashiras             | W   | 0.430      | -            | -                | -                | -         |     6.31 | joeski, mASKED, n0te, rud, tein    |
|            1 |     3157 | 2026-05-14 | ex-Zero Tenacity     | L   | 0.425      | -            | -                | -                | -         |    -3.60 | joeski, mASKED, n0te, rud, tein    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($713.03)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      0.519 | $1,374.00      | $713.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
