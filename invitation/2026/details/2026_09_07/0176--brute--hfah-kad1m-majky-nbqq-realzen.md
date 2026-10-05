### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, majky, nbqq, realzen<br />
Global Rank: [176](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [126]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  738.7<br />
<br />
Final Rank Value (738.7) = Starting Rank Value (670.4) + Head To Head Adjustments (68.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 670.4
- 400 + ( ( 0.142 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 670.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     2779 | 2026-05-25 | Phantom       | L   | 0.498      | -            | -                | -                | -         |    -1.98 | hfah, KAD1M, majky, nbqq, realzen  |
|           23 |     2919 | 2026-05-22 | PsychoFace    | W   | 0.478      | 0.384        | 0.009 (0.002)    | 0.383 (0.070)    | 0 (0.000) |    11.23 | hfah, KAD1M, majky, nbqq, realzen  |
|           22 |     2969 | 2026-05-21 | fnatic        | L   | 0.470      | -            | -                | -                | -         |    -0.48 | hfah, KAD1M, majky, nbqq, realzen  |
|           21 |     3072 | 2026-05-17 | Rune Eaters   | W   | 0.445      | 0.344        | 0.024 (0.004)    | 0.769 (0.118)    | 0 (0.000) |    12.78 | hfah, KAD1M, majky, nbqq, realzen  |
|           20 |     3136 | 2026-05-15 | Famalicão     | W   | 0.431      | -            | -                | -                | 0 (0.000) |     3.43 | hfah, KAD1M, majky, nbqq, realzen  |
|           19 |     3166 | 2026-05-14 | ex-MANA       | W   | 0.423      | 0.344        | 0.004 (0.001)    | 0.553 (0.081)    | 0 (0.000) |     7.47 | hfah, KAD1M, majky, nbqq, realzen  |
|           18 |     3302 | 2026-05-10 | INOX Division | L   | 0.398      | -            | -                | -                | -         |    -2.06 | hfah, KAD1M, majky, nbqq, realzen  |
|           17 |     3308 | 2026-05-10 | Atreides      | W   | 0.397      | 0.303        | 0.001 (0.000)    | 0.533 (0.064)    | 0 (0.000) |     7.97 | hfah, KAD1M, majky, nbqq, realzen  |
|           16 |     3344 | 2026-05-09 | INOX Division | L   | 0.390      | -            | -                | -                | -         |    -1.92 | hfah, KAD1M, majky, nbqq, realzen  |
|           15 |     3381 | 2026-05-07 | NEW VISION    | W   | 0.378      | 0.303        | 0.002 (0.000)    | 0.362 (0.041)    | 0 (0.000) |     6.77 | hfah, KAD1M, majky, nbqq, realzen  |
|           14 |     3430 | 2026-05-04 | Atreides      | W   | 0.358      | 0.303        | 0.001 (0.000)    | 0.533 (0.058)    | 0 (0.000) |     7.18 | hfah, KAD1M, majky, nbqq, realzen  |
|           13 |     3465 | 2026-05-03 | benched gods  | W   | 0.350      | 0.303        | 0.000 (0.000)    | 0.437 (0.046)    | 0 (0.000) |     6.17 | hfah, KAD1M, majky, nbqq, realzen  |
|           12 |     3697 | 2026-04-28 | STATE         | L   | 0.316      | -            | -                | -                | -         |    -1.66 | hfah, KAD1M, majky, nbqq, realzen  |
|           11 |     3736 | 2026-04-27 | Black Phoenix | L   | 0.311      | -            | -                | -                | -         |    -2.23 | hfah, majky, mASKED, nbqq, realzen |
|           10 |     3800 | 2026-04-26 | ex-RUSTEC     | L   | 0.304      | -            | -                | -                | -         |    -1.55 | hfah, KAD1M, majky, nbqq, realzen  |
|            9 |     3865 | 2026-04-25 | playersclub   | W   | 0.298      | -            | -                | -                | 0 (0.000) |     2.71 | hfah, KAD1M, majky, nbqq, realzen  |
|            8 |     3927 | 2026-04-24 | DONSTU        | W   | 0.290      | 0.303        | 0.004 (0.000)    | 0.451 (0.040)    | 0 (0.000) |     6.39 | hfah, KAD1M, majky, nbqq, realzen  |
|            7 |     3967 | 2026-04-23 | Atreides      | W   | 0.284      | 0.303        | 0.001 (0.000)    | 0.533 (0.046)    | -         |     5.94 | hfah, majky, mASKED, nbqq, realzen |
|            6 |     3992 | 2026-04-22 | aimclub       | W   | 0.277      | -            | -                | -                | -         |     2.87 | hfah, majky, mASKED, nbqq, realzen |
|            5 |     4013 | 2026-04-20 | playersclub   | L   | 0.265      | -            | -                | -                | -         |    -6.05 | hfah, majky, mASKED, nbqq, realzen |
|            4 |     4041 | 2026-04-19 | Young Ninjas  | W   | 0.257      | -            | -                | -                | -         |     3.75 | hfah, majky, mASKED, nbqq, realzen |
|            3 |     4271 | 2026-04-08 | Rune Eaters   | L   | 0.184      | -            | -                | -                | -         |    -0.35 | hfah, majky, mASKED, nbqq, realzen |
|            2 |     4301 | 2026-04-07 | Leo           | L   | 0.178      | -            | -                | -                | -         |    -3.18 | hfah, majky, mASKED, nbqq, realzen |
|            1 |     4340 | 2026-04-06 | Rune Eaters   | W   | 0.171      | 0.384        | 0.024 (0.002)    | 0.769 (0.050)    | -         |     5.07 | hfah, majky, mASKED, nbqq, realzen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($749.11)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-10 |      0.398 | $1,500.00      | $596.95         |
| 2026-04-26 |      0.304 | $500.00        | $152.15         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
