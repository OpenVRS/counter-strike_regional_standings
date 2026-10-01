### Roster Details<br />
Team Name: Sashi<br />
Roster: acoR, Beccie, Cabbi, MistR, Zyphon<br />
Global Rank: [55](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [41]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1179.3<br />
<br />
Final Rank Value (1179.3) = Starting Rank Value (1130.1) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.237[<sup>2</sup>](#table1)
- LAN Wins: 0.516[<sup>2</sup>](#table1)

The average of these factors is 0.377<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1130.1
- 400 + ( ( 0.377 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1130.1


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
|           53 |        5 | 2026-08-02 | SINNERS         | W   | 1.000      | 0.384        | 0.147 (0.057)    | 0.446 (0.171)    | -         |    17.24 | acoR, Anlelele, Cabbi, MistR, Zyphon |
|           52 |       13 | 2026-08-02 | Black Phoenix   | W   | 1.000      | 0.384        | 0.015 (0.006)    | 1.000 (0.384)    | -         |     8.17 | acoR, Anlelele, Cabbi, MistR, Zyphon |
|           51 |       25 | 2026-08-01 | Just Players    | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.819 (0.315)    | -         |    10.40 | acoR, Anlelele, Cabbi, MistR, Zyphon |
|           50 |       77 | 2026-07-30 | EAC             | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.758 (0.291)    | -         |    12.01 | acoR, Anlelele, Cabbi, MistR, Zyphon |
|           49 |      809 | 2026-06-25 | Inner Circle    | L   | 0.942      | -            | -                | -                | -         |    -5.60 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           48 |      823 | 2026-06-25 | Nordic Partners | W   | 0.939      | 0.548        | 0.007 (0.003)    | 0.355 (0.183)    | 1 (0.939) |     7.47 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           47 |      843 | 2026-06-24 | Bulgaria        | L   | 0.933      | -            | -                | -                | -         |    -9.51 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           46 |      856 | 2026-06-23 | 9INE            | W   | 0.926      | 0.548        | 0.018 (0.009)    | -                | 1 (0.926) |     8.96 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           45 |      908 | 2026-06-19 | KOLESIE         | L   | 0.898      | -            | -                | -                | -         |   -16.78 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           44 |      941 | 2026-06-16 | HYPERSPIRIT     | W   | 0.878      | 0.371        | -                | 0.427 (0.139)    | -         |     4.41 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           43 |     1651 | 2026-05-23 | Walczaki        | L   | 0.720      | -            | -                | -                | -         |    -8.79 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           42 |     1699 | 2026-05-22 | EYEBALLERS      | L   | 0.714      | -            | -                | -                | -         |    -5.40 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           41 |     1833 | 2026-05-19 | HOTU            | L   | 0.692      | -            | -                | -                | -         |    -6.23 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           40 |     1938 | 2026-05-15 | Butterfly       | W   | 0.665      | 0.435        | -                | 0.889 (0.257)    | -         |     8.53 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           39 |     2017 | 2026-05-12 | TDK             | W   | 0.647      | 0.435        | 0.049 (0.014)    | 0.902 (0.254)    | -         |     9.17 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           38 |     2106 | 2026-05-10 | ex-RUBY         | L   | 0.632      | -            | -                | -                | -         |   -10.35 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           37 |     2152 | 2026-05-08 | Lavked          | W   | 0.620      | 0.435        | -                | 0.889 (0.240)    | -         |     5.59 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           36 |     2805 | 2026-04-20 | SINNERS         | W   | 0.500      | 0.363        | 0.147 (0.027)    | -                | -         |     9.72 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           35 |     2898 | 2026-04-15 | los kogutos     | W   | 0.467      | -            | -                | -                | -         |     3.03 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           34 |     2955 | 2026-04-12 | fnatic          | W   | 0.447      | 0.363        | 0.021 (0.003)    | 0.824 (0.133)    | -         |     6.16 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|           33 |     3525 | 2026-04-01 | Passion UA      | L   | 0.373      | -            | -                | -                | -         |    -7.54 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           32 |     3577 | 2026-03-31 | Liquid          | W   | 0.368      | 0.354        | 0.232 (0.030)    | -                | 1 (0.368) |     8.72 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           31 |     3596 | 2026-03-31 | Eternal Fire    | W   | 0.367      | -            | -                | -                | 1 (0.367) |     2.60 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           30 |     3632 | 2026-03-31 | Aurora          | L   | 0.365      | -            | -                | -                | -         |    -0.53 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           29 |     3688 | 2026-03-30 | fnatic          | W   | 0.360      | -            | -                | -                | 1 (0.360) |     4.88 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           28 |     3780 | 2026-03-29 | HAVU            | W   | 0.352      | -            | -                | -                | 1 (0.352) |     2.38 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           27 |     3791 | 2026-03-29 | Strael Bora     | W   | 0.352      | -            | -                | -                | 1 (0.352) |     2.66 | acoR, Beccie, Cabbi, Fessor, MistR   |
|           26 |     4524 | 2026-03-15 | Echo            | L   | 0.260      | -            | -                | -                | -         |    -2.50 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           25 |     4535 | 2026-03-15 | EAC             | W   | 0.259      | -            | -                | -                | 1 (0.259) |     4.51 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           24 |     4559 | 2026-03-14 | MASONIC         | W   | 0.254      | -            | -                | -                | 1 (0.254) |     3.21 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           23 |     4572 | 2026-03-14 | Prestige        | W   | 0.253      | -            | -                | -                | 1 (0.253) |     0.26 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           22 |     4580 | 2026-03-14 | MASONIC         | L   | 0.252      | -            | -                | -                | -         |    -4.76 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           21 |     4747 | 2026-03-10 | Nemesis         | L   | 0.227      | -            | -                | -                | -         |    -1.68 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           20 |     4829 | 2026-03-09 | K27             | L   | 0.218      | -            | -                | -                | -         |    -1.12 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           19 |     4851 | 2026-03-08 | Johnny Speeds   | L   | 0.215      | -            | -                | -                | -         |    -3.79 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           18 |     4860 | 2026-03-08 | Evo Novo        | W   | 0.214      | -            | -                | -                | -         |     0.12 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           17 |     4876 | 2026-03-08 | MASONIC         | W   | 0.214      | -            | -                | -                | -         |     2.77 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           16 |     4886 | 2026-03-08 | 100 Thieves     | L   | 0.213      | -            | -                | -                | -         |    -1.39 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           15 |     4901 | 2026-03-08 | EAC             | L   | 0.212      | -            | -                | -                | -         |    -3.05 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           14 |     4949 | 2026-03-07 | Butterfly       | W   | 0.206      | -            | -                | -                | -         |     3.33 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           13 |     5086 | 2026-03-04 | ENCE            | W   | 0.186      | -            | -                | -                | -         |     1.85 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           12 |     5215 | 2026-03-01 | Lazer Cats      | L   | 0.167      | -            | -                | -                | -         |    -4.20 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           11 |     5243 | 2026-02-28 | Omega           | W   | 0.161      | -            | -                | -                | -         |     3.71 | acoR, Beccie, Cabbi, MistR, Mol011   |
|           10 |     5320 | 2026-02-27 | VP.Prodigy      | W   | 0.152      | -            | -                | -                | -         |     0.17 | acoR, Beccie, Cabbi, MistR, Mol011   |
|            9 |     5510 | 2026-02-23 | Phantom         | L   | 0.126      | -            | -                | -                | -         |    -2.05 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            8 |     5525 | 2026-02-23 | GamerLegion     | L   | 0.125      | -            | -                | -                | -         |    -0.31 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            7 |     5543 | 2026-02-22 | illwill         | L   | 0.121      | -            | -                | -                | -         |    -3.35 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            6 |     5551 | 2026-02-22 | MASONIC         | W   | 0.121      | -            | -                | -                | -         |     1.62 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            5 |     5559 | 2026-02-22 | 9INE            | L   | 0.120      | -            | -                | -                | -         |    -3.53 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            4 |     5565 | 2026-02-22 | BC.Game         | W   | 0.120      | -            | -                | -                | -         |     0.48 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            3 |     5581 | 2026-02-22 | BOSS            | W   | 0.119      | -            | -                | -                | -         |     0.40 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            2 |     6116 | 2026-02-12 | ECSTATIC        | L   | 0.053      | -            | -                | -                | -         |    -1.38 | acoR, Beccie, Cabbi, MistR, Zyphon   |
|            1 |     6126 | 2026-02-12 | KOLESIE         | L   | 0.052      | -            | -                | -                | -         |    -1.49 | acoR, Beccie, Cabbi, MistR, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,511.60)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-06-28 |      0.961 | $3,500.00      | $3,365.25       |
| 2026-05-24 |      0.728 | $1,166.00      | $848.29         |
| 2026-03-15 |      0.260 | $3,134.00      | $814.53         |
| 2026-03-11 |      0.232 | $1,000.00      | $232.32         |
| 2026-03-01 |      0.167 | $1,500.00      | $251.21         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
