### Roster Details<br />
Team Name: G2 Ares<br />
Roster: hitori, Junyme, SHiNE, TMKj, yksjupe<br />
Global Rank: [129](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [95]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  912.6<br />
<br />
Final Rank Value (912.6) = Starting Rank Value (984.1) + Head To Head Adjustments (-71.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.335[<sup>2</sup>](#table1)
- Opponent Network: 0.254[<sup>2</sup>](#table1)
- LAN Wins: 0.244[<sup>2</sup>](#table1)

The average of these factors is 0.292<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 984.1
- 400 + ( ( 0.292 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 984.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |      300 | 2026-09-27 | Famalicão            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.89 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           78 |      385 | 2026-09-26 | STATE                | L   | 1.000      | -            | -                | -                | -         |   -14.98 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           77 |      456 | 2026-09-25 | The Last Resort      | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.88 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           76 |      600 | 2026-09-23 | NAVI Junior          | L   | 1.000      | -            | -                | -                | -         |   -12.61 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           75 |      615 | 2026-09-23 | INOX Division        | L   | 1.000      | -            | -                | -                | -         |    -8.67 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           74 |      653 | 2026-09-22 | Black Phoenix        | L   | 1.000      | -            | -                | -                | -         |   -11.35 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           73 |      688 | 2026-09-21 | Leo                  | W   | 1.000      | 0.396        | 0.017 (0.007)    | 0.625 (0.248)    | 0 (0.000) |    17.26 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           72 |      711 | 2026-09-20 | QUAZAR               | L   | 1.000      | -            | -                | -                | -         |    -8.19 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           71 |      725 | 2026-09-20 | Honvéd               | W   | 1.000      | 0.396        | -                | 0.697 (0.276)    | -         |    10.80 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           70 |      807 | 2026-09-18 | Leo                  | W   | 1.000      | 0.384        | 0.017 (0.007)    | 0.625 (0.240)    | -         |    19.34 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           69 |      819 | 2026-09-17 | BAKS                 | L   | 1.000      | -            | -                | -                | -         |    -7.89 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           68 |      858 | 2026-09-17 | Misa                 | L   | 1.000      | -            | -                | -                | -         |   -18.04 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           67 |      898 | 2026-09-15 | Azuolas              | W   | 1.000      | -            | -                | -                | -         |    14.39 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           66 |      904 | 2026-09-15 | Phantom              | L   | 1.000      | -            | -                | -                | -         |    -6.80 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           65 |      914 | 2026-09-15 | BRUTE                | L   | 1.000      | -            | -                | -                | -         |    -7.12 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           64 |      981 | 2026-09-13 | WBT Academy          | W   | 1.000      | 0.354        | 0.017 (0.006)    | 0.711 (0.252)    | -         |    13.07 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           63 |      993 | 2026-09-13 | Honvéd               | L   | 1.000      | -            | -                | -                | -         |   -16.22 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           62 |     1240 | 2026-09-08 | Azuolas              | W   | 1.000      | -            | -                | -                | -         |    15.80 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           61 |     1243 | 2026-09-08 | ex-Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -9.64 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           60 |     1270 | 2026-09-07 | WAZABI               | W   | 1.000      | -            | -                | -                | -         |     4.28 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           59 |     1351 | 2026-09-06 | Bushido Wildcats     | W   | 1.000      | 0.384        | 0.027 (0.010)    | 1.000 (0.384)    | -         |    21.05 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           58 |     1438 | 2026-09-04 | The Last Resort      | L   | 0.993      | -            | -                | -                | -         |   -14.01 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           57 |     1486 | 2026-09-03 | PsychoFace           | L   | 0.985      | -            | -                | -                | -         |   -18.22 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           56 |     1685 | 2026-08-29 | 9INE                 | L   | 0.954      | -            | -                | -                | -         |    -8.17 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           55 |     1733 | 2026-08-28 | Rune Eaters          | L   | 0.948      | -            | -                | -                | -         |    -7.34 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           54 |     1755 | 2026-08-28 | STATE                | W   | 0.946      | 0.435        | 0.017 (0.007)    | -                | -         |    15.00 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           53 |     1851 | 2026-08-26 | Bushido Wildcats     | L   | 0.932      | -            | -                | -                | -         |   -10.85 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           52 |     1883 | 2026-08-25 | ex-RUSTEC            | L   | 0.927      | -            | -                | -                | -         |   -11.56 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           51 |     1954 | 2026-08-23 | HYPERSPIRIT          | W   | 0.912      | -            | -                | -                | -         |    10.30 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           50 |     2030 | 2026-08-20 | Bebop                | W   | 0.892      | -            | -                | -                | -         |     4.86 | hitori, Junyme, SHiNE, TMKj, yksjupe |
|           49 |     2055 | 2026-08-19 | ex-Zero Tenacity     | L   | 0.886      | -            | -                | -                | -         |   -14.17 | hitori, Junyme, SHiNE, ta9z, yksjupe |
|           48 |     2087 | 2026-08-18 | Banda Chuya          | L   | 0.878      | -            | -                | -                | -         |   -17.26 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           47 |     2094 | 2026-08-17 | Nexus                | W   | 0.873      | -            | -                | -                | -         |    16.66 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           46 |     2117 | 2026-08-16 | Banda Chuya          | L   | 0.867      | -            | -                | -                | -         |   -17.26 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           45 |     2468 | 2026-08-04 | Johnny Speeds        | L   | 0.785      | -            | -                | -                | -         |    -9.64 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           44 |     2591 | 2026-07-31 | HOTU                 | W   | 0.760      | 0.450        | 0.119 (0.041)    | 0.910 (0.311)    | 1 (0.760) |    22.41 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           43 |     2597 | 2026-07-31 | EAC                  | W   | 0.759      | 0.450        | 0.019 (0.006)    | 0.596 (0.204)    | 1 (0.759) |    15.64 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           42 |     2648 | 2026-07-29 | Just Players         | L   | 0.747      | -            | -                | -                | -         |   -11.43 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           41 |     2659 | 2026-07-29 | ex-RUSTEC            | L   | 0.746      | -            | -                | -                | -         |    -9.80 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           40 |     2671 | 2026-07-28 | SPARTA               | L   | 0.741      | -            | -                | -                | -         |   -13.21 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           39 |     2691 | 2026-07-28 | Butterfly            | L   | 0.739      | -            | -                | -                | -         |   -10.24 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           38 |     2746 | 2026-07-26 | INOX Division        | L   | 0.727      | -            | -                | -                | -         |    -8.34 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           37 |     2796 | 2026-07-25 | Inner Circle Academy | W   | 0.719      | 0.435        | 0.013 (0.004)    | 0.802 (0.251)    | -         |    16.48 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           36 |     2815 | 2026-07-24 | Butterfly            | W   | 0.715      | 0.384        | 0.032 (0.009)    | -                | -         |    13.38 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           35 |     2830 | 2026-07-24 | Phantom              | L   | 0.712      | -            | -                | -                | -         |    -6.14 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           34 |     2910 | 2026-07-21 | UPGRADE              | W   | 0.692      | 0.384        | 0.026 (0.007)    | 0.755 (0.201)    | -         |    18.73 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           33 |     2927 | 2026-07-19 | megoshort            | W   | 0.681      | -            | -                | -                | -         |     4.47 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           32 |     3014 | 2026-07-17 | Misa                 | W   | 0.665      | 0.384        | -                | 0.691 (0.177)    | -         |     7.14 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           31 |     3039 | 2026-07-16 | Lilmix               | W   | 0.659      | -            | -                | -                | -         |     3.45 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           30 |     3533 | 2026-06-15 | SPARTA               | L   | 0.454      | -            | -                | -                | -         |    -8.24 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           29 |     3541 | 2026-06-15 | Walczaki             | L   | 0.452      | -            | -                | -                | -         |    -5.27 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           28 |     3595 | 2026-06-13 | PsychoFace           | L   | 0.440      | -            | -                | -                | -         |    -9.20 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           27 |     3657 | 2026-06-12 | ex-RUBY              | L   | 0.432      | -            | -                | -                | -         |    -7.90 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           26 |     3682 | 2026-06-10 | illwill              | W   | 0.421      | -            | -                | -                | -         |     1.89 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           25 |     3688 | 2026-06-10 | Drip Too Hard        | W   | 0.419      | -            | -                | -                | -         |     2.68 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           24 |     3789 | 2026-06-06 | aAa                  | W   | 0.391      | -            | -                | -                | -         |     1.04 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           23 |     3907 | 2026-05-31 | Enjoy                | L   | 0.354      | -            | -                | -                | -         |    -8.18 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           22 |     3922 | 2026-05-31 | Vexar                | W   | 0.352      | -            | -                | -                | -         |     3.31 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           21 |     3925 | 2026-05-31 | Drama                | L   | 0.352      | -            | -                | -                | -         |    -7.68 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           20 |     3964 | 2026-05-30 | Enjoy                | L   | 0.346      | -            | -                | -                | -         |    -8.25 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           19 |     4045 | 2026-05-28 | NEW VISION           | W   | 0.333      | -            | -                | -                | -         |     1.22 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           18 |     4091 | 2026-05-27 | Lilmix               | W   | 0.326      | -            | -                | -                | -         |     1.63 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           17 |     4125 | 2026-05-26 | Misa                 | W   | 0.320      | -            | -                | -                | -         |     0.85 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           16 |     4135 | 2026-05-26 | Entropy              | W   | 0.319      | -            | -                | -                | -         |     3.27 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           15 |     4151 | 2026-05-25 | Lilmix               | L   | 0.314      | -            | -                | -                | -         |    -8.34 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           14 |     4198 | 2026-05-24 | DONSTU               | W   | 0.307      | -            | -                | -                | -         |     2.44 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           13 |     4252 | 2026-05-23 | Phantom Academy      | W   | 0.299      | -            | -                | -                | 1 (0.299) |     0.71 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           12 |     4464 | 2026-05-17 | Falcons Force        | L   | 0.259      | -            | -                | -                | -         |    -5.49 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           11 |     4557 | 2026-05-13 | MASONIC              | W   | 0.234      | -            | -                | -                | -         |     1.97 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|           10 |     4607 | 2026-05-12 | aAa                  | W   | 0.227      | -            | -                | -                | -         |     0.54 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            9 |     4871 | 2026-05-02 | Lilmix               | W   | 0.161      | -            | -                | -                | 1 (0.161) |     0.83 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            8 |     4881 | 2026-05-02 | Johnny Speeds        | L   | 0.160      | -            | -                | -                | -         |    -3.89 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            7 |     4910 | 2026-05-01 | SAW Youngsters       | W   | 0.155      | -            | -                | -                | 1 (0.155) |     1.98 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            6 |     4916 | 2026-05-01 | ROUNDS               | W   | 0.155      | -            | -                | -                | 1 (0.155) |     0.44 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            5 |     4921 | 2026-05-01 | MTX                  | W   | 0.155      | -            | -                | -                | 1 (0.155) |     0.49 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            4 |     5162 | 2026-04-26 | Lavked               | L   | 0.121      | -            | -                | -                | -         |    -2.40 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            3 |     5258 | 2026-04-25 | MASONIC              | W   | 0.112      | -            | -                | -                | -         |     0.92 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            2 |     5288 | 2026-04-24 | overTIME             | W   | 0.107      | -            | -                | -                | -         |     0.22 | hitori, Junyme, SHiNE, tAk, yksjupe  |
|            1 |     5361 | 2026-04-22 | DONSTU               | L   | 0.094      | -            | -                | -                | -         |    -2.22 | hitori, Junyme, SHiNE, tAk, yksjupe  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,004.43)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-05 |      0.794 | $4,000.00      | $3,177.38       |
| 2026-05-31 |      0.354 | $1,500.00      | $530.49         |
| 2026-05-23 |      0.299 | $4,061.00      | $1,215.90       |
| 2026-05-02 |      0.161 | $500.00        | $80.66          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
