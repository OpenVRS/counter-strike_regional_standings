### Roster Details<br />
Team Name: Metizport<br />
Roster: F1KU, forsyy, isak, Plopski, stanislaw<br />
Global Rank: [76](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [54]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1076.2<br />
<br />
Final Rank Value (1076.2) = Starting Rank Value (1060.0) + Head To Head Adjustments (16.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.290[<sup>2</sup>](#table1)
- Opponent Network: 0.114[<sup>2</sup>](#table1)
- LAN Wins: 0.582[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1060.0
- 400 + ( ( 0.341 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1060.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      965 | 2026-06-14 | Alliance      | L   | 0.868      | -            | -                | -                | -         |    -1.67 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           42 |      981 | 2026-06-14 | fnatic        | W   | 0.865      | 0.373        | 0.021 (0.007)    | 0.824 (0.266)    | 1 (0.865) |    14.39 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           41 |     1005 | 2026-06-13 | Nexus         | W   | 0.860      | 0.373        | -                | 0.121 (0.039)    | 1 (0.860) |     8.05 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           40 |     1012 | 2026-06-13 | EAC           | W   | 0.860      | 0.373        | 0.014 (0.004)    | 0.758 (0.243)    | 1 (0.860) |    13.82 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           39 |     1029 | 2026-06-13 | atputies      | W   | 0.858      | -            | -                | -                | 1 (0.858) |     1.61 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           38 |     1741 | 2026-05-21 | Betclic       | L   | 0.707      | -            | -                | -                | -         |   -12.58 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           37 |     1743 | 2026-05-21 | Rebels        | L   | 0.707      | -            | -                | -                | -         |   -12.92 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           36 |     1750 | 2026-05-21 | OG            | L   | 0.707      | -            | -                | -                | -         |   -12.05 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           35 |     1780 | 2026-05-21 | Passion UA    | W   | 0.704      | 0.435        | 0.018 (0.005)    | 0.234 (0.072)    | 1 (0.704) |    10.26 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           34 |     2886 | 2026-04-16 | ARCRED        | W   | 0.472      | 0.371        | 0.019 (0.003)    | 0.446 (0.078)    | 0 (0.000) |     9.48 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           33 |     2923 | 2026-04-14 | Phantom       | W   | 0.459      | 0.371        | 0.024 (0.004)    | 0.815 (0.138)    | -         |     8.29 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           32 |     2941 | 2026-04-13 | ex-RUBY       | W   | 0.452      | 0.371        | 0.011 (0.002)    | 0.310 (0.052)    | -         |     3.59 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           31 |     2983 | 2026-04-11 | Basement Bobs | W   | 0.439      | -            | -                | -                | -         |     0.85 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           30 |     3241 | 2026-04-04 | Bebop         | L   | 0.393      | -            | -                | -                | -         |    -9.24 | Dragon, forsyy, isak, Plopski, stanislaw |
|           29 |     3414 | 2026-04-02 | PsychoFace    | L   | 0.381      | -            | -                | -                | -         |    -5.48 | Dragon, forsyy, isak, Plopski, stanislaw |
|           28 |     3552 | 2026-04-01 | ENCE          | W   | 0.371      | 0.435        | 0.016 (0.003)    | 0.634 (0.102)    | -         |     4.36 | Dragon, forsyy, isak, Plopski, stanislaw |
|           27 |     3793 | 2026-03-29 | ex-RUSTEC     | L   | 0.352      | -            | -                | -                | -         |    -8.44 | Dragon, forsyy, isak, Plopski, stanislaw |
|           26 |     3897 | 2026-03-27 | EYEBALLERS    | L   | 0.341      | -            | -                | -                | -         |    -1.62 | Dragon, forsyy, isak, Plopski, stanislaw |
|           25 |     4118 | 2026-03-23 | UNiTY         | W   | 0.314      | -            | -                | -                | 1 (0.314) |     1.13 | Dragon, forsyy, isak, Plopski, stanislaw |
|           24 |     4131 | 2026-03-23 | GamerLegion   | L   | 0.313      | -            | -                | -                | -         |    -0.57 | Dragon, forsyy, isak, Plopski, stanislaw |
|           23 |     4141 | 2026-03-23 | UNiTY         | W   | 0.312      | -            | -                | -                | 1 (0.312) |     1.13 | Dragon, forsyy, isak, Plopski, stanislaw |
|           22 |     4513 | 2026-03-15 | Nemiga        | L   | 0.261      | -            | -                | -                | -         |    -2.91 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           21 |     4525 | 2026-03-15 | illwill       | W   | 0.260      | -            | -                | -                | -         |     1.54 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           20 |     4567 | 2026-03-14 | KOLESIE       | W   | 0.253      | 0.384        | 0.024 (0.002)    | 0.893 (0.087)    | -         |     3.80 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           19 |     4679 | 2026-03-12 | ENCE          | W   | 0.239      | 0.384        | -                | 0.634 (0.058)    | -         |     2.96 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           18 |     4738 | 2026-03-10 | K27           | L   | 0.228      | -            | -                | -                | -         |    -0.88 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           17 |     4780 | 2026-03-09 | NOVAQ         | W   | 0.221      | 0.435        | 0.033 (0.003)    | -                | -         |     4.11 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           16 |     4871 | 2026-03-08 | PsychoFace    | L   | 0.214      | -            | -                | -                | -         |    -3.19 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           15 |     4972 | 2026-03-06 | FAVBET        | L   | 0.200      | -            | -                | -                | -         |    -5.31 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           14 |     5127 | 2026-03-03 | Leo           | W   | 0.180      | -            | -                | -                | -         |     0.73 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           13 |     5145 | 2026-03-03 | JiJieHao      | L   | 0.179      | -            | -                | -                | -         |    -1.80 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           12 |     5179 | 2026-03-02 | TNC           | W   | 0.172      | -            | -                | -                | -         |     0.58 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           11 |     5230 | 2026-03-01 | aimclub       | W   | 0.165      | -            | -                | -                | -         |     0.42 | Dragon, forsyy, isak, Jackinho, Plopski  |
|           10 |     5617 | 2026-02-21 | Bulgaria      | L   | 0.114      | -            | -                | -                | -         |    -0.44 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            9 |     5639 | 2026-02-21 | Young Ninjas  | W   | 0.113      | -            | -                | -                | 1 (0.113) |     0.65 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            8 |     5647 | 2026-02-21 | EAC           | W   | 0.112      | -            | -                | -                | 1 (0.112) |     2.23 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            7 |     5731 | 2026-02-19 | Alliance      | L   | 0.100      | -            | -                | -                | -         |    -0.09 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            6 |     5782 | 2026-02-18 | Johnny Speeds | W   | 0.094      | 0.435        | 0.039 (0.002)    | -                | -         |     1.59 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            5 |     5963 | 2026-02-15 | VP.Prodigy    | W   | 0.072      | -            | -                | -                | -         |     0.10 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            4 |     6070 | 2026-02-13 | Bulgaria      | L   | 0.059      | -            | -                | -                | -         |    -0.22 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            3 |     6158 | 2026-02-11 | Lazer Cats    | W   | 0.045      | -            | -                | -                | -         |     0.37 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            2 |     6218 | 2026-02-09 | ALGO          | W   | 0.032      | -            | -                | -                | -         |     0.04 | Dragon, forsyy, isak, Jackinho, Plopski  |
|            1 |     6242 | 2026-02-08 | OG            | L   | 0.027      | -            | -                | -                | -         |    -0.47 | Dragon, forsyy, isak, Jackinho, Plopski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,231.88)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-14 |      0.868 | $4,000.00      | $3,470.58       |
| 2026-04-16 |      0.472 | $11,000.00     | $5,190.33       |
| 2026-03-28 |      0.347 | $2,500.00      | $868.08         |
| 2026-03-15 |      0.261 | $5,000.00      | $1,305.32       |
| 2026-02-21 |      0.114 | $1,600.00      | $182.92         |
| 2026-02-20 |      0.107 | $2,000.00      | $214.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
