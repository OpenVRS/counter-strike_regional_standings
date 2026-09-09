### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: brn$, fl4sh, Jerr1, lkz, stormzyn<br />
Global Rank: [205](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [43]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  701.3<br />
<br />
Final Rank Value (701.3) = Starting Rank Value (677.4) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.269[<sup>1</sup>](#table2)
- Bounty Collected: 0.274[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.4
- 400 + ( ( 0.146 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 677.4


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
|           39 |     1749 | 2026-07-11 | BESTIA          | L   | 0.813      | -            | -                | -                | -         |    -4.68 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           38 |     1765 | 2026-07-10 | Yawara          | W   | 0.806      | 0.371        | 0.024 (0.007)    | 0.474 (0.142)    | 0 (0.000) |    16.41 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           37 |     1782 | 2026-07-09 | METANOIA Wolves | W   | 0.800      | 0.371        | 0.003 (0.001)    | 0.160 (0.047)    | 0 (0.000) |    11.15 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           36 |     1806 | 2026-07-08 | Keyd Stars      | L   | 0.794      | -            | -                | -                | -         |    -7.68 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           35 |     2907 | 2026-05-22 | Bounty Hunters  | L   | 0.479      | -            | -                | -                | -         |    -2.94 | fl4sh, Jerr1, Lacerda, lkz, stormzyn |
|           34 |     3002 | 2026-05-20 | R2              | W   | 0.465      | 0.354        | -                | 0.082 (0.014)    | 0 (0.000) |     3.85 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           33 |     3026 | 2026-05-19 | Procyon         | L   | 0.460      | -            | -                | -                | -         |    -8.37 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           32 |     3069 | 2026-05-17 | ALKA            | L   | 0.446      | -            | -                | -                | -         |    -6.37 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           31 |     3123 | 2026-05-15 | Red Feet        | W   | 0.433      | -            | -                | -                | 0 (0.000) |     2.16 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           30 |     3182 | 2026-05-13 | Crashers        | W   | 0.419      | 0.354        | 0.001 (0.000)    | 0.061 (0.009)    | 0 (0.000) |     4.75 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           29 |     3480 | 2026-05-02 | Keyd Stars      | L   | 0.347      | -            | -                | -                | -         |    -3.87 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           28 |     3628 | 2026-04-29 | ShindeN         | L   | 0.327      | -            | -                | -                | -         |    -2.65 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           27 |     3669 | 2026-04-28 | LP              | W   | 0.320      | 0.363        | 0.036 (0.004)    | 0.542 (0.063)    | 0 (0.000) |     7.77 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           26 |     3716 | 2026-04-27 | Galorys         | L   | 0.313      | -            | -                | -                | -         |    -1.91 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           25 |     3755 | 2026-04-26 | Fluxo           | W   | 0.307      | 0.363        | 0.065 (0.007)    | 0.486 (0.054)    | 0 (0.000) |     9.14 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           24 |     3793 | 2026-04-26 | paiN Academy    | W   | 0.304      | 0.362        | 0.001 (0.000)    | -                | 0 (0.000) |     3.64 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           23 |     3889 | 2026-04-24 | Bounty Hunters  | L   | 0.293      | -            | -                | -                | -         |    -1.66 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           22 |     3903 | 2026-04-24 | Galorys         | L   | 0.292      | -            | -                | -                | -         |    -1.83 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           21 |     4025 | 2026-04-19 | UNO MILLE       | L   | 0.260      | -            | -                | -                | -         |    -4.16 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           20 |     4057 | 2026-04-18 | Vasco           | W   | 0.253      | 0.278        | 0.004 (0.000)    | -                | 0 (0.000) |     3.97 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           19 |     4086 | 2026-04-16 | UNO MILLE       | W   | 0.241      | 0.278        | 0.003 (0.000)    | 0.092 (0.006)    | 0 (0.000) |     3.71 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           18 |     4262 | 2026-04-08 | Fake do Biru    | L   | 0.186      | -            | -                | -                | -         |    -2.43 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           17 |     4290 | 2026-04-07 | Players         | W   | 0.179      | -            | -                | -                | -         |     2.08 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           16 |     4691 | 2026-04-01 | BESTIA Academy  | W   | 0.140      | 0.333        | -                | 0.419 (0.020)    | -         |     2.27 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           15 |     4722 | 2026-04-01 | LP              | L   | 0.138      | -            | -                | -                | -         |    -0.86 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           14 |     4789 | 2026-03-31 | Turma do Pagode | L   | 0.132      | -            | -                | -                | -         |    -1.74 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           13 |     4872 | 2026-03-30 | UNO MILLE       | L   | 0.127      | -            | -                | -                | -         |    -2.09 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           12 |     4964 | 2026-03-29 | Crashers        | W   | 0.118      | -            | -                | -                | -         |     1.53 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           11 |     5143 | 2026-03-26 | Keyd Stars      | W   | 0.100      | 0.333        | 0.011 (0.000)    | 0.466 (0.015)    | -         |     2.06 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           10 |     5183 | 2026-03-25 | Isurus          | W   | 0.094      | 0.624        | 0.026 (0.002)    | 0.703 (0.041)    | -         |     2.00 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            9 |     5331 | 2026-03-23 | Fluxo           | L   | 0.078      | -            | -                | -                | -         |    -0.12 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            8 |     5433 | 2026-03-21 | Crashers        | W   | 0.066      | -            | -                | -                | -         |     0.86 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            7 |     5496 | 2026-03-20 | Isurus          | L   | 0.059      | -            | -                | -                | -         |    -0.58 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            6 |     5532 | 2026-03-19 | Galorys         | L   | 0.054      | -            | -                | -                | -         |    -0.33 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            5 |     5576 | 2026-03-18 | Keyd Stars      | W   | 0.047      | -            | -                | -                | -         |     0.56 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            4 |     5598 | 2026-03-18 | paiN Academy    | W   | 0.044      | -            | -                | -                | -         |     0.54 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            3 |     5623 | 2026-03-17 | Galorys         | L   | 0.040      | -            | -                | -                | -         |    -0.24 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            2 |     5722 | 2026-03-15 | R2              | W   | 0.026      | -            | -                | -                | -         |     0.21 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            1 |     5755 | 2026-03-14 | UNO MILLE       | L   | 0.019      | -            | -                | -                | -         |    -0.32 | brn$, fl4sh, Jerr1, lkz, stormzyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($954.97)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      0.821 | $750.00        | $615.40         |
| 2026-04-19 |      0.260 | $750.00        | $195.28         |
| 2026-04-09 |      0.192 | $750.00        | $144.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
