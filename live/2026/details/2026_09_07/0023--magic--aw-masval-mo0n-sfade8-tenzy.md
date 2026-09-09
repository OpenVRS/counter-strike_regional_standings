### Roster Details<br />
Team Name: magic<br />
Roster: AW, MaSvAl, mo0N, sFade8, tenzy<br />
Global Rank: [23](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [17]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1400.0<br />
<br />
Final Rank Value (1400.0) = Starting Rank Value (1353.9) + Head To Head Adjustments (46.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.589[<sup>1</sup>](#table2)
- Bounty Collected: 0.559[<sup>2</sup>](#table1)
- Opponent Network: 0.255[<sup>2</sup>](#table1)
- LAN Wins: 0.602[<sup>2</sup>](#table1)

The average of these factors is 0.501<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1353.9
- 400 + ( ( 0.501 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1353.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      124 | 2026-09-03 | HEROIC               | L   | 1.000      | -            | -                | -                | -         |   -18.31 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           42 |      132 | 2026-09-03 | BIG                  | W   | 1.000      | -            | -                | -                | -         |    19.24 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           41 |      157 | 2026-09-02 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |   -23.01 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           40 |      175 | 2026-09-02 | K27                  | W   | 1.000      | 0.143        | -                | 0.805 (0.115)    | -         |     9.99 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           39 |      688 | 2026-08-19 | FUT                  | L   | 1.000      | -            | -                | -                | -         |    -2.40 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           38 |      764 | 2026-08-16 | 9z                   | W   | 1.000      | 1.000        | 0.653 (0.653)    | 0.422 (0.422)    | 1 (1.000) |    24.65 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           37 |      799 | 2026-08-15 | 3DMAX                | W   | 1.000      | 1.000        | 0.301 (0.301)    | 0.387 (0.387)    | 1 (1.000) |    11.11 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           36 |      893 | 2026-08-12 | The MongolZ          | L   | 1.000      | -            | -                | -                | -         |   -12.77 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           35 |     1392 | 2026-07-26 | Ninjas in Pyjamas    | W   | 0.906      | 0.143        | 0.196 (0.025)    | -                | -         |    12.46 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           34 |     1427 | 2026-07-25 | Iberian Soul         | W   | 0.899      | -            | -                | -                | -         |     6.86 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           33 |     1481 | 2026-07-24 | 3DMAX                | L   | 0.891      | -            | -                | -                | -         |   -19.07 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           32 |     1542 | 2026-07-21 | Iberian Soul         | W   | 0.873      | -            | -                | -                | -         |     6.42 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           31 |     1557 | 2026-07-21 | Walczaki             | W   | 0.871      | -            | -                | -                | -         |     5.19 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           30 |     1797 | 2026-07-10 | Inner Circle         | L   | 0.800      | -            | -                | -                | -         |    -9.22 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           29 |     1816 | 2026-07-09 | EAC                  | W   | 0.794      | 0.769        | -                | 0.772 (0.471)    | -         |     3.65 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           28 |     2591 | 2026-05-30 | Ninjas in Pyjamas    | L   | 0.526      | -            | -                | -                | -         |    -9.47 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           27 |     2636 | 2026-05-29 | Ninjas in Pyjamas    | W   | 0.520      | 0.500        | 0.196 (0.051)    | 0.424 (0.110)    | 1 (0.520) |     6.84 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           26 |     2675 | 2026-05-28 | FaZe                 | W   | 0.514      | 0.500        | 0.477 (0.123)    | -                | 1 (0.514) |    12.28 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           25 |     2746 | 2026-05-27 | 3DMAX                | W   | 0.505      | 0.500        | 0.301 (0.076)    | -                | 1 (0.505) |     6.17 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           24 |     3115 | 2026-05-17 | MOUZ                 | L   | 0.437      | -            | -                | -                | -         |    -0.59 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           23 |     3134 | 2026-05-16 | Falcons              | L   | 0.432      | -            | -                | -                | -         |    -0.65 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           22 |     3167 | 2026-05-15 | 9z                   | W   | 0.425      | 1.000        | 0.653 (0.278)    | 0.422 (0.179)    | 1 (0.425) |    11.50 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           21 |     3234 | 2026-05-13 | Iberian Soul         | W   | 0.410      | 1.000        | 0.093 (0.038)    | 0.383 (0.157)    | 1 (0.410) |     3.18 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           20 |     3274 | 2026-05-12 | HEROIC               | W   | 0.403      | 1.000        | 0.114 (0.046)    | 0.695 (0.280)    | 1 (0.403) |     6.67 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           19 |     3304 | 2026-05-11 | K27                  | W   | 0.398      | 1.000        | 0.078 (0.031)    | 0.805 (0.321)    | 1 (0.398) |     7.59 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           18 |     3337 | 2026-05-10 | Luminosity           | L   | 0.392      | -            | -                | -                | -         |    -8.31 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           17 |     3378 | 2026-05-09 | The MongolZ          | L   | 0.384      | -            | -                | -                | -         |    -4.90 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           16 |     3489 | 2026-05-03 | Iberian Soul         | W   | 0.345      | -            | -                | -                | -         |     2.54 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           15 |     3536 | 2026-05-02 | Eternal Fire         | W   | 0.338      | 0.435        | -                | 0.704 (0.103)    | -         |     0.90 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           14 |     3632 | 2026-04-30 | BBL                  | W   | 0.325      | -            | -                | -                | -         |     2.43 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           13 |     3897 | 2026-04-25 | Nuclear TigeRES      | L   | 0.292      | -            | -                | -                | -         |    -7.68 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           12 |     4393 | 2026-04-05 | illwill              | L   | 0.160      | -            | -                | -                | -         |    -4.88 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           11 |     4403 | 2026-04-05 | BIG                  | L   | 0.159      | -            | -                | -                | -         |    -1.18 | AW, MaSvAl, mo0N, sFade8, tenzy |
|           10 |     4435 | 2026-04-05 | Drama                | W   | 0.157      | -            | -                | -                | 1 (0.157) |     0.04 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            9 |     4494 | 2026-04-04 | CYBERSHOKE           | W   | 0.152      | -            | -                | -                | -         |     0.23 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            8 |     4509 | 2026-04-04 | PIVOSQUAD            | W   | 0.151      | -            | -                | -                | -         |     0.02 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            7 |     4516 | 2026-04-04 | Re Di                | W   | 0.150      | -            | -                | -                | -         |     0.02 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            6 |     4551 | 2026-04-03 | K27                  | W   | 0.147      | -            | -                | -                | -         |     2.84 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            5 |     4664 | 2026-04-02 | K27                  | W   | 0.139      | -            | -                | -                | -         |     2.71 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            4 |     4735 | 2026-04-01 | ACROBATS             | W   | 0.133      | -            | -                | -                | -         |     0.04 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            3 |     4837 | 2026-03-31 | 100 Thieves          | W   | 0.126      | -            | -                | -                | -         |     2.37 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            2 |     5341 | 2026-03-23 | Nuclear TigeRES      | W   | 0.074      | -            | -                | -                | -         |     0.38 | AW, MaSvAl, mo0N, sFade8, tenzy |
|            1 |     5358 | 2026-03-23 | Inner Circle Academy | W   | 0.073      | -            | -                | -                | -         |     0.17 | AW, MaSvAl, mo0N, sFade8, tenzy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100,765.76)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.20) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $35,000.00     | $35,000.00      |
| 2026-07-26 |      0.907 | $7,500.00      | $6,799.39       |
| 2026-05-30 |      0.526 | $17,500.00     | $9,212.46       |
| 2026-05-17 |      0.439 | $112,000.00    | $49,112.62      |
| 2026-04-05 |      0.160 | $4,000.00      | $641.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
