### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, majky, nbqq, realzen<br />
Global Rank: [174](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [125]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  737.0<br />
<br />
Final Rank Value (737.0) = Starting Rank Value (669.6) + Head To Head Adjustments (67.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.261[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.6
- 400 + ( ( 0.142 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 669.6


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
|           24 |     2807 | 2026-05-25 | Phantom       | L   | 0.492      | -            | -                | -                | -         |    -1.94 | hfah, KAD1M, majky, nbqq, realzen  |
|           23 |     2947 | 2026-05-22 | PsychoFace    | W   | 0.472      | 0.384        | 0.009 (0.002)    | 0.381 (0.069)    | 0 (0.000) |    11.08 | hfah, KAD1M, majky, nbqq, realzen  |
|           22 |     2997 | 2026-05-21 | fnatic        | L   | 0.465      | -            | -                | -                | -         |    -0.47 | hfah, KAD1M, majky, nbqq, realzen  |
|           21 |     3100 | 2026-05-17 | Rune Eaters   | W   | 0.440      | 0.344        | 0.024 (0.004)    | 0.767 (0.116)    | 0 (0.000) |    12.63 | hfah, KAD1M, majky, nbqq, realzen  |
|           20 |     3164 | 2026-05-15 | Famalicão     | W   | 0.426      | -            | -                | -                | 0 (0.000) |     3.39 | hfah, KAD1M, majky, nbqq, realzen  |
|           19 |     3194 | 2026-05-14 | ex-MANA       | W   | 0.418      | 0.344        | 0.004 (0.001)    | 0.549 (0.079)    | 0 (0.000) |     7.50 | hfah, KAD1M, majky, nbqq, realzen  |
|           18 |     3330 | 2026-05-10 | INOX Division | L   | 0.393      | -            | -                | -                | -         |    -2.03 | hfah, KAD1M, majky, nbqq, realzen  |
|           17 |     3336 | 2026-05-10 | Atreides      | W   | 0.392      | 0.303        | 0.001 (0.000)    | 0.529 (0.063)    | 0 (0.000) |     7.88 | hfah, KAD1M, majky, nbqq, realzen  |
|           16 |     3372 | 2026-05-09 | INOX Division | L   | 0.385      | -            | -                | -                | -         |    -1.90 | hfah, KAD1M, majky, nbqq, realzen  |
|           15 |     3409 | 2026-05-07 | NEW VISION    | W   | 0.372      | 0.303        | 0.002 (0.000)    | 0.360 (0.041)    | 0 (0.000) |     6.67 | hfah, KAD1M, majky, nbqq, realzen  |
|           14 |     3458 | 2026-05-04 | Atreides      | W   | 0.353      | 0.303        | 0.001 (0.000)    | 0.529 (0.056)    | 0 (0.000) |     7.08 | hfah, KAD1M, majky, nbqq, realzen  |
|           13 |     3493 | 2026-05-03 | benched gods  | W   | 0.345      | 0.303        | 0.000 (0.000)    | 0.437 (0.046)    | 0 (0.000) |     6.08 | hfah, KAD1M, majky, nbqq, realzen  |
|           12 |     3725 | 2026-04-28 | STATE         | L   | 0.311      | -            | -                | -                | -         |    -1.64 | hfah, KAD1M, majky, nbqq, realzen  |
|           11 |     3764 | 2026-04-27 | Black Phoenix | L   | 0.305      | -            | -                | -                | -         |    -2.19 | hfah, majky, mASKED, nbqq, realzen |
|           10 |     3828 | 2026-04-26 | ex-RUSTEC     | L   | 0.298      | -            | -                | -                | -         |    -1.51 | hfah, KAD1M, majky, nbqq, realzen  |
|            9 |     3893 | 2026-04-25 | playersclub   | W   | 0.292      | -            | -                | -                | 0 (0.000) |     2.65 | hfah, KAD1M, majky, nbqq, realzen  |
|            8 |     3955 | 2026-04-24 | DONSTU        | W   | 0.285      | 0.303        | 0.004 (0.000)    | 0.449 (0.039)    | 0 (0.000) |     6.28 | hfah, KAD1M, majky, nbqq, realzen  |
|            7 |     3995 | 2026-04-23 | Atreides      | W   | 0.278      | 0.303        | 0.001 (0.000)    | 0.529 (0.045)    | -         |     5.83 | hfah, majky, mASKED, nbqq, realzen |
|            6 |     4020 | 2026-04-22 | aimclub       | W   | 0.272      | -            | -                | -                | -         |     2.84 | hfah, majky, mASKED, nbqq, realzen |
|            5 |     4041 | 2026-04-20 | playersclub   | L   | 0.259      | -            | -                | -                | -         |    -5.92 | hfah, majky, mASKED, nbqq, realzen |
|            4 |     4069 | 2026-04-19 | Young Ninjas  | W   | 0.252      | -            | -                | -                | -         |     3.61 | hfah, majky, mASKED, nbqq, realzen |
|            3 |     4299 | 2026-04-08 | Rune Eaters   | L   | 0.178      | -            | -                | -                | -         |    -0.34 | hfah, majky, mASKED, nbqq, realzen |
|            2 |     4329 | 2026-04-07 | Leo           | L   | 0.172      | -            | -                | -                | -         |    -3.12 | hfah, majky, mASKED, nbqq, realzen |
|            1 |     4368 | 2026-04-06 | Rune Eaters   | W   | 0.165      | 0.384        | 0.024 (0.002)    | 0.767 (0.049)    | -         |     4.91 | hfah, majky, mASKED, nbqq, realzen |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($738.17)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-10 |      0.393 | $1,500.00      | $588.76         |
| 2026-04-26 |      0.299 | $500.00        | $149.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
