### Roster Details<br />
Team Name: Alliance<br />
Roster: avid, bobeksde, eraa, twist, upE<br />
Global Rank: [22](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [16]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1401.8<br />
<br />
Final Rank Value (1401.8) = Starting Rank Value (1413.1) + Head To Head Adjustments (-11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.595[<sup>1</sup>](#table2)
- Bounty Collected: 0.513[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.766[<sup>2</sup>](#table1)

The average of these factors is 0.532<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1413.1
- 400 + ( ( 0.532 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1413.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |     1540 | 2026-07-21 | Wildcard          | L   | 0.873      | -            | -                | -                | -         |   -22.81 | avid, bobeksde, eraa, twist, upE |
|           49 |     1786 | 2026-07-11 | 9z                | L   | 0.804      | -            | -                | -                | -         |    -5.96 | avid, bobeksde, eraa, twist, upE |
|           48 |     1829 | 2026-07-09 | Nemesis           | W   | 0.792      | 1.000        | 0.167 (0.133)    | 0.572 (0.453)    | 1 (0.792) |     6.08 | avid, bobeksde, eraa, twist, upE |
|           47 |     1881 | 2026-07-04 | 9z                | W   | 0.758      | 1.000        | 0.653 (0.495)    | 0.422 (0.320)    | 1 (0.758) |    18.58 | avid, bobeksde, eraa, twist, upE |
|           46 |     1896 | 2026-07-03 | B8                | W   | 0.752      | 1.000        | 0.262 (0.197)    | 0.567 (0.427)    | 1 (0.752) |    14.28 | avid, bobeksde, eraa, twist, upE |
|           45 |     1924 | 2026-07-02 | Ninjas in Pyjamas | W   | 0.744      | 1.000        | 0.196 (0.146)    | 0.424 (0.315)    | 1 (0.744) |     9.94 | avid, bobeksde, eraa, twist, upE |
|           44 |     1935 | 2026-07-01 | PARIVISION        | L   | 0.739      | -            | -                | -                | -         |   -10.34 | avid, bobeksde, eraa, twist, upE |
|           43 |     2200 | 2026-06-14 | Metizport         | W   | 0.627      | 0.373        | -                | 0.586 (0.137)    | 1 (0.627) |     2.90 | avid, bobeksde, eraa, twist, upE |
|           42 |     2206 | 2026-06-14 | fnatic            | W   | 0.626      | 0.373        | -                | 0.893 (0.209)    | 1 (0.626) |     7.32 | avid, bobeksde, eraa, twist, upE |
|           41 |     2215 | 2026-06-14 | Nexus             | W   | 0.625      | -            | -                | -                | 1 (0.625) |     2.10 | avid, bobeksde, eraa, twist, upE |
|           40 |     2219 | 2026-06-14 | BASEMENT BOYS     | W   | 0.624      | 0.373        | -                | 0.847 (0.197)    | 1 (0.624) |     3.08 | avid, bobeksde, eraa, twist, upE |
|           39 |     2228 | 2026-06-13 | EAC               | W   | 0.620      | 0.373        | -                | 0.772 (0.179)    | 1 (0.620) |     3.25 | avid, bobeksde, eraa, twist, upE |
|           38 |     2237 | 2026-06-13 | 6666              | W   | 0.619      | -            | -                | -                | 1 (0.619) |     0.10 | avid, bobeksde, eraa, twist, upE |
|           37 |     2246 | 2026-06-13 | Nexus             | L   | 0.619      | -            | -                | -                | -         |   -17.57 | avid, bobeksde, eraa, twist, upE |
|           36 |     2270 | 2026-06-13 | SAAB              | W   | 0.617      | -            | -                | -                | -         |     0.07 | avid, bobeksde, eraa, twist, upE |
|           35 |     2638 | 2026-05-29 | DENDELE           | L   | 0.519      | -            | -                | -                | -         |    -9.34 | avid, eraa, MaiL09, twist, upE   |
|           34 |     2701 | 2026-05-28 | 3DMAX             | W   | 0.512      | 0.500        | 0.301 (0.077)    | -                | -         |     5.61 | avid, eraa, MaiL09, twist, upE   |
|           33 |     2730 | 2026-05-27 | FaZe              | L   | 0.506      | -            | -                | -                | -         |    -4.16 | avid, eraa, MaiL09, twist, upE   |
|           32 |     2835 | 2026-05-24 | EYEBALLERS        | W   | 0.487      | 0.407        | 0.107 (0.021)    | -                | -         |     5.61 | avid, eraa, MaiL09, twist, upE   |
|           31 |     2852 | 2026-05-24 | Walczaki          | W   | 0.485      | 0.407        | 0.063 (0.013)    | 0.774 (0.153)    | -         |     2.36 | avid, eraa, MaiL09, twist, upE   |
|           30 |     2877 | 2026-05-23 | EYEBALLERS        | L   | 0.480      | -            | -                | -                | -         |    -9.78 | avid, eraa, MaiL09, twist, upE   |
|           29 |     2943 | 2026-05-22 | Walczaki          | W   | 0.472      | 0.407        | 0.063 (0.012)    | 0.774 (0.149)    | -         |     2.13 | avid, eraa, MaiL09, twist, upE   |
|           28 |     3373 | 2026-05-09 | Nuclear TigeRES   | L   | 0.385      | -            | -                | -                | -         |   -10.39 | avid, eraa, MaiL09, twist, upE   |
|           27 |     3389 | 2026-05-08 | Lavked            | W   | 0.379      | -            | -                | -                | -         |     0.77 | avid, eraa, MaiL09, twist, upE   |
|           26 |     3809 | 2026-04-26 | Nuclear TigeRES   | L   | 0.300      | -            | -                | -                | -         |    -8.23 | avid, eraa, MaiL09, twist, upE   |
|           25 |     3954 | 2026-04-24 | Butterfly         | W   | 0.285      | -            | -                | -                | -         |     1.21 | avid, eraa, MaiL09, twist, upE   |
|           24 |     4030 | 2026-04-21 | KOLESIE           | W   | 0.266      | -            | -                | -                | -         |     0.48 | avid, eraa, MaiL09, twist, upE   |
|           23 |     4128 | 2026-04-15 | UNiTY             | W   | 0.227      | -            | -                | -                | -         |     0.09 | avid, eraa, MaiL09, twist, upE   |
|           22 |     4172 | 2026-04-13 | BBL               | W   | 0.213      | -            | -                | -                | -         |     1.21 | avid, eraa, MaiL09, twist, upE   |
|           21 |     4669 | 2026-04-02 | M80               | L   | 0.139      | -            | -                | -                | -         |    -3.30 | avid, eraa, MaiL09, twist, upE   |
|           20 |     4737 | 2026-04-01 | Passion UA        | W   | 0.133      | -            | -                | -                | -         |     0.14 | avid, eraa, MaiL09, twist, upE   |
|           19 |     4754 | 2026-04-01 | Aurora            | W   | 0.132      | 0.354        | 0.413 (0.019)    | -                | -         |     2.78 | avid, eraa, MaiL09, twist, upE   |
|           18 |     4808 | 2026-03-31 | fnatic            | W   | 0.127      | -            | -                | -                | -         |     1.85 | avid, eraa, MaiL09, twist, upE   |
|           17 |     4835 | 2026-03-31 | Inner Circle      | W   | 0.126      | -            | -                | -                | -         |     2.63 | avid, eraa, MaiL09, twist, upE   |
|           16 |     4866 | 2026-03-31 | Luminosity        | L   | 0.125      | -            | -                | -                | -         |    -3.02 | avid, eraa, MaiL09, twist, upE   |
|           15 |     4943 | 2026-03-30 | Lazer Cats        | W   | 0.118      | -            | -                | -                | -         |     0.12 | avid, eraa, MaiL09, twist, upE   |
|           14 |     5072 | 2026-03-28 | EYEBALLERS        | W   | 0.107      | -            | -                | -                | -         |     1.13 | avid, eraa, MaiL09, twist, upE   |
|           13 |     5107 | 2026-03-28 | Johnny Speeds     | W   | 0.105      | -            | -                | -                | -         |     0.14 | avid, eraa, MaiL09, twist, upE   |
|           12 |     5162 | 2026-03-27 | GamerLegion       | W   | 0.098      | 0.396        | 0.341 (0.013)    | -                | -         |     1.43 | avid, eraa, MaiL09, twist, upE   |
|           11 |     5182 | 2026-03-26 | Young Ninjas      | W   | 0.093      | -            | -                | -                | -         |     0.04 | avid, eraa, MaiL09, twist, upE   |
|           10 |     5186 | 2026-03-26 | EYEBALLERS        | L   | 0.093      | -            | -                | -                | -         |    -1.95 | avid, eraa, MaiL09, twist, upE   |
|            9 |     5199 | 2026-03-26 | ReThink           | W   | 0.092      | -            | -                | -                | -         |     0.09 | avid, eraa, MaiL09, twist, upE   |
|            8 |     5616 | 2026-03-18 | FAVBET            | L   | 0.040      | -            | -                | -                | -         |    -1.23 | avid, eraa, MaiL09, twist, upE   |
|            7 |     5746 | 2026-03-15 | Liquid            | W   | 0.021      | -            | -                | -                | -         |     0.01 | avid, eraa, MaiL09, twist, upE   |
|            6 |     5754 | 2026-03-15 | Ninjas in Pyjamas | L   | 0.020      | -            | -                | -                | -         |    -0.60 | avid, eraa, MaiL09, twist, upE   |
|            5 |     5784 | 2026-03-14 | 9INE              | W   | 0.014      | -            | -                | -                | -         |     0.05 | avid, eraa, MaiL09, twist, upE   |
|            4 |     5823 | 2026-03-13 | OG                | W   | 0.008      | -            | -                | -                | -         |     0.02 | avid, eraa, MaiL09, twist, upE   |
|            3 |     5830 | 2026-03-13 | GRINGOS           | W   | 0.007      | -            | -                | -                | -         |     0.00 | avid, eraa, MaiL09, twist, upE   |
|            2 |     5834 | 2026-03-13 | BC.Game           | W   | 0.007      | -            | -                | -                | -         |     0.00 | avid, eraa, MaiL09, twist, upE   |
|            1 |     5840 | 2026-03-13 | Romania           | L   | 0.007      | -            | -                | -                | -         |    -0.20 | avid, eraa, MaiL09, twist, upE   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($104,974.10)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      0.907 | $7,500.00      | $6,799.39       |
| 2026-07-12 |      0.811 | $90,000.00     | $72,995.66      |
| 2026-06-14 |      0.627 | $10,000.00     | $6,269.19       |
| 2026-05-30 |      0.526 | $9,000.00      | $4,737.83       |
| 2026-05-24 |      0.487 | $23,329.00     | $11,356.38      |
| 2026-05-10 |      0.394 | $2,000.00      | $787.15         |
| 2026-04-27 |      0.306 | $2,000.00      | $611.87         |
| 2026-04-02 |      0.140 | $2,250.00      | $315.24         |
| 2026-03-28 |      0.107 | $10,000.00     | $1,065.04       |
| 2026-03-15 |      0.021 | $1,743.00      | $36.36          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
