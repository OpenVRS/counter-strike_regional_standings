### Roster Details<br />
Team Name: Iberian Soul<br />
Roster: alex, CRUC1AL, dav1g, mopoz, sausol<br />
Global Rank: [61](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [46]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1103.6<br />
<br />
Final Rank Value (1103.6) = Starting Rank Value (1137.9) + Head To Head Adjustments (-34.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.493[<sup>1</sup>](#table2)
- Bounty Collected: 0.384[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.482[<sup>2</sup>](#table1)

The average of these factors is 0.388<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1137.9
- 400 + ( ( 0.388 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1137.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           42 |      137 | 2026-09-03 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -17.25 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           41 |      153 | 2026-09-02 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -18.82 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           40 |      937 | 2026-08-09 | Inner Circle      | L   | 0.998      | -            | -                | -                | -         |    -3.73 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           39 |      952 | 2026-08-08 | 6666              | W   | 0.993      | 0.818        | -                | 0.218 (0.177)    | 1 (0.993) |     3.21 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           38 |     1023 | 2026-08-07 | FKOMAR            | W   | 0.985      | -            | -                | -                | 1 (0.985) |     0.48 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           37 |     1036 | 2026-08-07 | 6666              | L   | 0.985      | -            | -                | -                | -         |   -28.22 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           36 |     1427 | 2026-07-25 | magic             | L   | 0.899      | -            | -                | -                | -         |    -6.86 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           35 |     1469 | 2026-07-24 | Walczaki          | W   | 0.893      | 0.143        | 0.063 (0.008)    | -                | 0 (0.000) |    12.66 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           34 |     1495 | 2026-07-23 | paiN              | L   | 0.886      | -            | -                | -                | -         |    -9.68 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           33 |     1542 | 2026-07-21 | magic             | L   | 0.873      | -            | -                | -                | -         |    -6.42 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           32 |     1551 | 2026-07-21 | 3DMAX             | W   | 0.872      | 0.143        | 0.301 (0.037)    | -                | 0 (0.000) |    17.51 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           31 |     1661 | 2026-07-17 | 3DMAX             | L   | 0.844      | -            | -                | -                | -         |    -9.13 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           30 |     1683 | 2026-07-16 | Ninjas in Pyjamas | L   | 0.839      | -            | -                | -                | -         |    -7.76 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           29 |     1702 | 2026-07-15 | Wildcard          | W   | 0.833      | 0.500        | 0.138 (0.057)    | -                | 1 (0.833) |    11.85 | alex, CRUC1AL, dav1g, mopoz, sausol    |
|           28 |     2117 | 2026-06-20 | ex-RUBY           | L   | 0.666      | -            | -                | -                | -         |   -12.41 | alex, dav1g, MartinezSa, mopoz, sausol |
|           27 |     2155 | 2026-06-18 | KOLESIE           | W   | 0.652      | 0.384        | -                | 0.490 (0.123)    | -         |     5.10 | alex, dav1g, MartinezSa, mopoz, sausol |
|           26 |     2174 | 2026-06-16 | Nuclear TigeRES   | L   | 0.638      | -            | -                | -                | -         |   -11.65 | alex, dav1g, MartinezSa, mopoz, sausol |
|           25 |     2190 | 2026-06-15 | Acend             | W   | 0.631      | 0.435        | 0.072 (0.020)    | 0.703 (0.193)    | -         |    12.38 | alex, dav1g, MartinezSa, mopoz, sausol |
|           24 |     2562 | 2026-05-31 | Nemesis           | L   | 0.532      | -            | -                | -                | -         |    -8.98 | alex, dav1g, MartinezSa, mopoz, sausol |
|           23 |     2595 | 2026-05-30 | WW                | W   | 0.526      | 0.384        | 0.044 (0.009)    | -                | -         |     6.75 | alex, dav1g, MartinezSa, mopoz, sausol |
|           22 |     2609 | 2026-05-30 | GenOne            | W   | 0.525      | 0.384        | 0.055 (0.011)    | 1.000 (0.202)    | -         |     5.17 | alex, dav1g, MartinezSa, mopoz, sausol |
|           21 |     2617 | 2026-05-30 | Eternal Fire      | W   | 0.525      | 0.435        | -                | 0.704 (0.161)    | -         |     4.21 | alex, dav1g, MartinezSa, mopoz, sausol |
|           20 |     2635 | 2026-05-29 | Eternal Fire      | W   | 0.520      | 0.384        | -                | 0.704 (0.141)    | -         |     4.32 | alex, dav1g, MartinezSa, mopoz, sausol |
|           19 |     2699 | 2026-05-28 | GenOne            | W   | 0.512      | 0.435        | 0.055 (0.012)    | 1.000 (0.222)    | -         |     5.47 | alex, dav1g, MartinezSa, mopoz, sausol |
|           18 |     2734 | 2026-05-27 | ALGO              | W   | 0.506      | -            | -                | -                | -         |     1.22 | alex, dav1g, MartinezSa, mopoz, sausol |
|           17 |     3234 | 2026-05-13 | magic             | L   | 0.410      | -            | -                | -                | -         |    -3.18 | alex, dav1g, MartinezSa, mopoz, sausol |
|           16 |     3262 | 2026-05-12 | FURIA             | L   | 0.405      | -            | -                | -                | -         |    -0.40 | alex, dav1g, MartinezSa, mopoz, sausol |
|           15 |     3316 | 2026-05-10 | HEROIC            | W   | 0.396      | 1.000        | 0.114 (0.045)    | 0.695 (0.276)    | 1 (0.396) |     9.76 | alex, dav1g, MartinezSa, mopoz, sausol |
|           14 |     3353 | 2026-05-10 | K27               | W   | 0.390      | 1.000        | 0.078 (0.031)    | 0.805 (0.314)    | 1 (0.390) |    10.26 | alex, dav1g, MartinezSa, mopoz, sausol |
|           13 |     3376 | 2026-05-09 | MOUZ              | L   | 0.384      | -            | -                | -                | -         |    -0.14 | alex, dav1g, MartinezSa, mopoz, sausol |
|           12 |     3489 | 2026-05-03 | magic             | L   | 0.345      | -            | -                | -                | -         |    -2.54 | alex, dav1g, MartinezSa, mopoz, sausol |
|           11 |     3544 | 2026-05-02 | FOKUS             | W   | 0.338      | 0.435        | 0.115 (0.017)    | -                | -         |     6.23 | alex, dav1g, MartinezSa, mopoz, sausol |
|           10 |     3667 | 2026-04-29 | ASTRAL            | W   | 0.320      | 0.435        | -                | 0.765 (0.106)    | -         |     5.63 | alex, dav1g, MartinezSa, mopoz, sausol |
|            9 |     3803 | 2026-04-26 | SINNERS           | L   | 0.300      | -            | -                | -                | -         |    -5.28 | alex, dav1g, MartinezSa, mopoz, sausol |
|            8 |     3833 | 2026-04-26 | 9INE              | W   | 0.298      | -            | -                | -                | 1 (0.298) |     3.60 | alex, dav1g, MartinezSa, mopoz, sausol |
|            7 |     3894 | 2026-04-25 | ASTRAL            | W   | 0.292      | -            | -                | -                | 1 (0.292) |     5.22 | alex, dav1g, MartinezSa, mopoz, sausol |
|            6 |     4156 | 2026-04-14 | RED Canids        | L   | 0.219      | -            | -                | -                | -         |    -6.22 | alex, dav1g, MartinezSa, mopoz, sausol |
|            5 |     4173 | 2026-04-13 | G2                | L   | 0.212      | -            | -                | -                | -         |    -0.21 | alex, dav1g, MartinezSa, mopoz, sausol |
|            4 |     4672 | 2026-04-02 | 9INE              | L   | 0.139      | -            | -                | -                | -         |    -2.64 | alex, dav1g, MartinezSa, mopoz, sausol |
|            3 |     4727 | 2026-04-01 | Ninjas in Pyjamas | L   | 0.134      | -            | -                | -                | -         |    -3.90 | alex, dav1g, MartinezSa, mopoz, sausol |
|            2 |     5216 | 2026-03-25 | BIG               | L   | 0.087      | -            | -                | -                | -         |    -0.21 | alex, dav1g, MartinezSa, mopoz, sausol |
|            1 |     5230 | 2026-03-25 | HYPERSPIRIT       | W   | 0.086      | -            | -                | -                | 1 (0.086) |     0.30 | alex, dav1g, MartinezSa, mopoz, sausol |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($46,946.03)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.907 | $7,500.00      | $6,799.39       |
| 2026-07-18 |      0.853 | $9,000.00      | $7,678.66       |
| 2026-06-21 |      0.673 | $1,250.00      | $841.25         |
| 2026-06-17 |      0.646 | $2,000.00      | $1,292.68       |
| 2026-05-31 |      0.534 | $5,000.00      | $2,667.52       |
| 2026-05-30 |      0.526 | $10,000.00     | $5,263.06       |
| 2026-05-17 |      0.439 | $40,000.00     | $17,540.22      |
| 2026-04-26 |      0.300 | $9,000.00      | $2,700.58       |
| 2026-04-19 |      0.253 | $4,000.00      | $1,013.91       |
| 2026-04-04 |      0.153 | $7,500.00      | $1,148.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
