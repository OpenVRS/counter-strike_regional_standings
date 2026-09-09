### Roster Details<br />
Team Name: MIBR Academy<br />
Roster: brn$, fl4sh, Jerr1, lkz, stormzyn<br />
Global Rank: [206](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [43]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  700.1<br />
<br />
Final Rank Value (700.1) = Starting Rank Value (676.7) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 676.7
- 400 + ( ( 0.145 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 676.7


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
|           39 |     1777 | 2026-07-11 | BESTIA          | L   | 0.808      | -            | -                | -                | -         |    -4.70 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           38 |     1793 | 2026-07-10 | Yawara          | W   | 0.801      | 0.371        | 0.024 (0.007)    | 0.472 (0.140)    | 0 (0.000) |    16.30 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           37 |     1810 | 2026-07-09 | METANOIA Wolves | W   | 0.795      | 0.371        | 0.003 (0.001)    | 0.158 (0.047)    | 0 (0.000) |    11.10 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           36 |     1834 | 2026-07-08 | Keyd Stars      | L   | 0.788      | -            | -                | -                | -         |    -7.63 | fl4sh, Jerr1, lkz, shazn, stormzyn   |
|           35 |     2935 | 2026-05-22 | Bounty Hunters  | L   | 0.473      | -            | -                | -                | -         |    -2.91 | fl4sh, Jerr1, Lacerda, lkz, stormzyn |
|           34 |     3030 | 2026-05-20 | R2              | W   | 0.460      | 0.354        | -                | 0.080 (0.013)    | 0 (0.000) |     3.81 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           33 |     3054 | 2026-05-19 | Procyon         | L   | 0.455      | -            | -                | -                | -         |    -8.25 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           32 |     3097 | 2026-05-17 | ALKA            | L   | 0.440      | -            | -                | -                | -         |    -6.27 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           31 |     3151 | 2026-05-15 | Red Feet        | W   | 0.428      | -            | -                | -                | 0 (0.000) |     2.14 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           30 |     3210 | 2026-05-13 | Crashers        | W   | 0.413      | 0.354        | 0.001 (0.000)    | 0.059 (0.009)    | 0 (0.000) |     4.70 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           29 |     3508 | 2026-05-02 | Keyd Stars      | L   | 0.341      | -            | -                | -                | -         |    -3.80 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           28 |     3656 | 2026-04-29 | ShindeN         | L   | 0.321      | -            | -                | -                | -         |    -2.62 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           27 |     3697 | 2026-04-28 | LP              | W   | 0.314      | 0.363        | 0.036 (0.004)    | 0.539 (0.061)    | 0 (0.000) |     7.63 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           26 |     3744 | 2026-04-27 | Galorys         | L   | 0.308      | -            | -                | -                | -         |    -1.88 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           25 |     3783 | 2026-04-26 | Fluxo           | W   | 0.301      | 0.363        | 0.065 (0.007)    | 0.485 (0.053)    | 0 (0.000) |     8.98 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           24 |     3821 | 2026-04-26 | paiN Academy    | W   | 0.299      | 0.362        | 0.001 (0.000)    | -                | 0 (0.000) |     3.58 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           23 |     3917 | 2026-04-24 | Bounty Hunters  | L   | 0.288      | -            | -                | -                | -         |    -1.63 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           22 |     3931 | 2026-04-24 | Galorys         | L   | 0.287      | -            | -                | -                | -         |    -1.79 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           21 |     4053 | 2026-04-19 | UNO MILLE       | L   | 0.255      | -            | -                | -                | -         |    -4.08 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           20 |     4085 | 2026-04-18 | Vasco           | W   | 0.247      | 0.278        | 0.004 (0.000)    | 0.085 (0.006)    | 0 (0.000) |     3.89 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           19 |     4114 | 2026-04-16 | UNO MILLE       | W   | 0.235      | 0.278        | 0.002 (0.000)    | -                | 0 (0.000) |     3.62 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           18 |     4290 | 2026-04-08 | Fake do Biru    | L   | 0.181      | -            | -                | -                | -         |    -2.37 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           17 |     4318 | 2026-04-07 | Players         | W   | 0.174      | -            | -                | -                | -         |     2.02 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           16 |     4719 | 2026-04-01 | BESTIA Academy  | W   | 0.135      | 0.333        | -                | 0.417 (0.019)    | -         |     2.18 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           15 |     4750 | 2026-04-01 | LP              | L   | 0.132      | -            | -                | -                | -         |    -0.83 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           14 |     4817 | 2026-03-31 | Turma do Pagode | L   | 0.127      | -            | -                | -                | -         |    -1.68 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           13 |     4900 | 2026-03-30 | UNO MILLE       | L   | 0.122      | -            | -                | -                | -         |    -2.01 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           12 |     4992 | 2026-03-29 | Crashers        | W   | 0.113      | -            | -                | -                | -         |     1.46 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           11 |     5171 | 2026-03-26 | Keyd Stars      | W   | 0.094      | 0.333        | 0.011 (0.000)    | 0.464 (0.015)    | -         |     1.95 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|           10 |     5211 | 2026-03-25 | Isurus          | W   | 0.088      | 0.624        | 0.026 (0.001)    | 0.701 (0.039)    | -         |     1.88 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            9 |     5359 | 2026-03-23 | Fluxo           | L   | 0.073      | -            | -                | -                | -         |    -0.11 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            8 |     5461 | 2026-03-21 | Crashers        | W   | 0.060      | -            | -                | -                | -         |     0.79 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            7 |     5524 | 2026-03-20 | Isurus          | L   | 0.053      | -            | -                | -                | -         |    -0.53 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            6 |     5560 | 2026-03-19 | Galorys         | L   | 0.048      | -            | -                | -                | -         |    -0.29 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            5 |     5604 | 2026-03-18 | Keyd Stars      | W   | 0.041      | -            | -                | -                | -         |     0.49 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            4 |     5626 | 2026-03-18 | paiN Academy    | W   | 0.039      | -            | -                | -                | -         |     0.47 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            3 |     5651 | 2026-03-17 | Galorys         | L   | 0.034      | -            | -                | -                | -         |    -0.21 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            2 |     5750 | 2026-03-15 | R2              | W   | 0.020      | -            | -                | -                | -         |     0.16 | brn$, fl4sh, Jerr1, lkz, stormzyn    |
|            1 |     5783 | 2026-03-14 | UNO MILLE       | L   | 0.014      | -            | -                | -                | -         |    -0.23 | brn$, fl4sh, Jerr1, lkz, stormzyn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($942.68)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      0.815 | $750.00        | $611.30         |
| 2026-04-19 |      0.255 | $750.00        | $191.18         |
| 2026-04-09 |      0.187 | $750.00        | $140.20         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
