### Roster Details<br />
Team Name: ex-Zero Tenacity<br />
Roster: brutmonster, Cjoffo, Dragon, Kind0, VLDN<br />
Global Rank: [76](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [58]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1043.5<br />
<br />
Final Rank Value (1043.5) = Starting Rank Value (919.9) + Head To Head Adjustments (123.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.316[<sup>2</sup>](#table1)
- LAN Wins: 0.016[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 919.9
- 400 + ( ( 0.273 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 919.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           92 |      209 | 2026-09-01 | Honvéd               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.93 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           91 |      259 | 2026-08-30 | Bushido Wildcats     | W   | 1.000      | 0.371        | 0.017 (0.006)    | 1.000 (0.371)    | 0 (0.000) |    13.10 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           90 |      273 | 2026-08-30 | INOX Division        | L   | 1.000      | -            | -                | -                | -         |   -11.72 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           89 |      294 | 2026-08-30 | Phantom              | W   | 1.000      | 0.384        | 0.037 (0.014)    | -                | 0 (0.000) |    19.00 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           88 |      312 | 2026-08-30 | INOX Division        | W   | 1.000      | 0.371        | 0.042 (0.015)    | 1.000 (0.371)    | 0 (0.000) |    20.30 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           87 |      341 | 2026-08-29 | STATE                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    12.94 | brutmonster, Cjoffo, emi, Kind0, VLDN    |
|           86 |      364 | 2026-08-29 | SINNERS              | W   | 1.000      | 0.384        | 0.102 (0.039)    | -                | 0 (0.000) |    20.55 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           85 |      386 | 2026-08-28 | HAVU                 | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.38 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           84 |      404 | 2026-08-28 | OG                   | W   | 1.000      | 0.384        | 0.024 (0.009)    | -                | 0 (0.000) |    18.50 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           83 |      431 | 2026-08-27 | FOKUS                | W   | 1.000      | 0.371        | 0.115 (0.043)    | 0.523 (0.194)    | 0 (0.000) |    25.51 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           82 |      433 | 2026-08-27 | Honvéd               | L   | 1.000      | -            | -                | -                | -         |   -20.15 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           81 |      453 | 2026-08-27 | WBT Academy          | W   | 1.000      | -            | -                | -                | -         |    11.88 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           80 |      478 | 2026-08-26 | Honvéd               | W   | 1.000      | 0.371        | -                | 0.869 (0.322)    | -         |    11.49 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           79 |      495 | 2026-08-26 | HYPERSPIRIT          | L   | 1.000      | -            | -                | -                | -         |   -18.60 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           78 |      543 | 2026-08-25 | Black Phoenix        | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.948 (0.351)    | -         |    17.87 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           77 |      552 | 2026-08-24 | UPGRADE              | L   | 1.000      | -            | -                | -                | -         |    -9.79 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           76 |      584 | 2026-08-23 | Just Players         | W   | 1.000      | 0.384        | -                | 0.772 (0.297)    | -         |    16.76 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           75 |      592 | 2026-08-23 | Endless Journey      | L   | 1.000      | -            | -                | -                | -         |   -20.51 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           74 |      629 | 2026-08-22 | GenOne               | W   | 1.000      | 0.435        | 0.055 (0.024)    | 1.000 (0.435)    | -         |    23.90 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           73 |      641 | 2026-08-21 | MASONIC              | W   | 1.000      | -            | -                | -                | -         |    15.38 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           72 |      672 | 2026-08-20 | benched gods         | L   | 1.000      | -            | -                | -                | -         |   -19.96 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           71 |      694 | 2026-08-19 | Enjoy                | W   | 1.000      | 0.384        | -                | 0.535 (0.205)    | -         |    14.45 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           70 |      703 | 2026-08-19 | G2 Ares              | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.684 (0.263)    | -         |    17.82 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           69 |      721 | 2026-08-18 | Vexar                | W   | 1.000      | -            | -                | -                | -         |    11.41 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           68 |      730 | 2026-08-18 | ex-RUSTEC            | W   | 1.000      | 0.384        | 0.018 (0.007)    | 0.908 (0.349)    | -         |    20.45 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           67 |      747 | 2026-08-17 | Inner Circle Academy | L   | 1.000      | -            | -                | -                | -         |   -16.61 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           66 |      763 | 2026-08-16 | DragonClaw           | W   | 1.000      | -            | -                | -                | -         |    13.21 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           65 |     1581 | 2026-07-19 | Acend                | L   | 0.859      | -            | -                | -                | -         |    -2.21 | andr1x, Dragon, emi, Kind0, VLDN         |
|           64 |     1592 | 2026-07-19 | Romania              | L   | 0.858      | -            | -                | -                | -         |   -23.35 | andr1x, Dragon, emi, Kind0, VLDN         |
|           63 |     2374 | 2026-06-08 | Mai Tai              | L   | 0.585      | -            | -                | -                | -         |   -14.83 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           62 |     2411 | 2026-06-06 | BIG Academy          | W   | 0.573      | -            | -                | -                | -         |     3.48 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           61 |     2452 | 2026-06-05 | aAa                  | W   | 0.566      | -            | -                | -                | -         |     4.77 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           60 |     2463 | 2026-06-05 | Johnny Speeds        | L   | 0.564      | -            | -                | -                | -         |    -8.69 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           59 |     2507 | 2026-06-03 | illwill              | W   | 0.551      | -            | -                | -                | -         |     6.06 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           58 |     2528 | 2026-06-02 | RBLS                 | W   | 0.545      | -            | -                | -                | -         |     8.26 | aVN, Cjoffo, Dragon, Kind0, RiiL3        |
|           57 |     2541 | 2026-06-01 | Black Phoenix        | L   | 0.539      | -            | -                | -                | -         |    -7.97 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           56 |     2604 | 2026-05-30 | ex-RUBY              | L   | 0.526      | -            | -                | -                | -         |    -4.13 | aVN, Cjoffo, Dragon, Kind0, RiiL3        |
|           55 |     2649 | 2026-05-29 | aAa                  | L   | 0.518      | -            | -                | -                | -         |   -12.29 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           54 |     2677 | 2026-05-28 | KOLESIE              | W   | 0.513      | -            | -                | -                | -         |     9.62 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           53 |     2712 | 2026-05-28 | INOX Division        | L   | 0.511      | -            | -                | -                | -         |    -5.70 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           52 |     2731 | 2026-05-27 | Permitta             | L   | 0.506      | -            | -                | -                | -         |   -10.04 | aVN, Cjoffo, Dragon, Kind0, RiiL3        |
|           51 |     2765 | 2026-05-26 | Just Players         | L   | 0.499      | -            | -                | -                | -         |    -6.76 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           50 |     2798 | 2026-05-25 | ASTRAL               | L   | 0.493      | -            | -                | -                | -         |    -3.77 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           49 |     2806 | 2026-05-25 | 6666                 | W   | 0.492      | -            | -                | -                | -         |     3.27 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           48 |     2818 | 2026-05-25 | Permitta             | W   | 0.491      | -            | -                | -                | -         |     5.38 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           47 |     2861 | 2026-05-24 | UPGRADE              | W   | 0.484      | -            | -                | -                | -         |    10.90 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           46 |     2895 | 2026-05-23 | Julie&Cie            | W   | 0.479      | -            | -                | -                | -         |     0.91 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           45 |     2907 | 2026-05-23 | ALGO                 | W   | 0.478      | -            | -                | -                | -         |     3.79 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           44 |     2942 | 2026-05-22 | SAW Youngsters       | L   | 0.472      | -            | -                | -                | -         |   -10.87 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           43 |     3002 | 2026-05-21 | Subtop De France     | W   | 0.464      | -            | -                | -                | -         |     1.42 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           42 |     3037 | 2026-05-20 | Lavked               | L   | 0.458      | -            | -                | -                | -         |    -6.17 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           41 |     3087 | 2026-05-18 | fnatic               | L   | 0.444      | -            | -                | -                | -         |    -1.04 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           40 |     3104 | 2026-05-17 | GenOne               | L   | 0.439      | -            | -                | -                | -         |    -4.61 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           39 |     3126 | 2026-05-16 | Drip Too Hard        | W   | 0.433      | -            | -                | -                | -         |     3.75 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           38 |     3157 | 2026-05-15 | Just Players         | L   | 0.426      | -            | -                | -                | -         |    -6.07 | andr1x, aVN, brutmonster, Cjoffo, Kind0  |
|           37 |     3185 | 2026-05-14 | Drip Too Hard        | W   | 0.419      | -            | -                | -                | -         |     3.56 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           36 |     3405 | 2026-05-07 | Nuclear TigeRES      | L   | 0.373      | -            | -                | -                | -         |    -3.24 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           35 |     3431 | 2026-05-06 | benched gods         | L   | 0.365      | -            | -                | -                | -         |    -8.51 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           34 |     3441 | 2026-05-05 | INOX Division        | L   | 0.359      | -            | -                | -                | -         |    -4.61 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           33 |     3504 | 2026-05-03 | Lilmix               | W   | 0.344      | -            | -                | -                | -         |     2.81 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           32 |     3534 | 2026-05-02 | ASTRAL               | W   | 0.338      | -            | -                | -                | -         |     8.64 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           31 |     3593 | 2026-05-01 | Lavked               | W   | 0.331      | -            | -                | -                | -         |     5.33 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           30 |     3714 | 2026-04-28 | CYBERSHOKE           | W   | 0.312      | -            | -                | -                | -         |     4.02 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           29 |     3932 | 2026-04-24 | Mai Tai              | L   | 0.287      | -            | -                | -                | -         |    -7.07 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           28 |     3990 | 2026-04-23 | The Last Resort      | L   | 0.279      | -            | -                | -                | -         |    -3.94 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           27 |     4027 | 2026-04-22 | Endless Journey      | W   | 0.271      | -            | -                | -                | -         |     2.56 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           26 |     4417 | 2026-04-05 | BIG                  | L   | 0.158      | -            | -                | -                | -         |    -0.12 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           25 |     4439 | 2026-04-05 | brazylijski luz      | L   | 0.157      | -            | -                | -                | -         |    -3.90 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           24 |     4557 | 2026-04-03 | illwill              | L   | 0.146      | -            | -                | -                | -         |    -3.28 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           23 |     4570 | 2026-04-03 | Deorum               | W   | 0.145      | -            | -                | -                | 1 (0.145) |     0.25 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           22 |     4579 | 2026-04-03 | STATE                | L   | 0.145      | -            | -                | -                | -         |    -1.86 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           21 |     4652 | 2026-04-02 | ex-RUSTEC            | L   | 0.140      | -            | -                | -                | -         |    -1.75 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           20 |     4775 | 2026-04-01 | Ryvex                | W   | 0.131      | -            | -                | -                | -         |     0.78 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           19 |     4909 | 2026-03-30 | Black Phoenix        | L   | 0.120      | -            | -                | -                | -         |    -2.04 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           18 |     4950 | 2026-03-30 | brazylijski luz      | W   | 0.117      | -            | -                | -                | -         |     0.75 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           17 |     4972 | 2026-03-29 | ReThink              | W   | 0.113      | -            | -                | -                | -         |     1.22 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           16 |     5105 | 2026-03-28 | Bebop                | L   | 0.105      | -            | -                | -                | -         |    -2.41 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           15 |     5285 | 2026-03-24 | MASONIC              | W   | 0.079      | -            | -                | -                | -         |     0.31 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           14 |     5383 | 2026-03-23 | rottweilers          | W   | 0.071      | -            | -                | -                | -         |     0.20 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           13 |     5494 | 2026-03-21 | Hashiras             | L   | 0.058      | -            | -                | -                | -         |    -1.46 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           12 |     5519 | 2026-03-20 | HAVU                 | L   | 0.054      | -            | -                | -                | -         |    -0.97 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           11 |     5533 | 2026-03-20 | home                 | W   | 0.053      | -            | -                | -                | -         |     0.12 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           10 |     5585 | 2026-03-19 | SINQU                | W   | 0.046      | -            | -                | -                | -         |     0.12 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            9 |     5591 | 2026-03-19 | MASONIC              | W   | 0.045      | -            | -                | -                | -         |     0.18 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            8 |     5612 | 2026-03-18 | BIG                  | L   | 0.040      | -            | -                | -                | -         |    -0.03 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            7 |     5618 | 2026-03-18 | Clutchain fe         | W   | 0.040      | -            | -                | -                | -         |     0.25 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            6 |     5619 | 2026-03-18 | yngods               | L   | 0.039      | -            | -                | -                | -         |    -1.13 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            5 |     5667 | 2026-03-17 | Nemesis              | L   | 0.033      | -            | -                | -                | -         |    -0.26 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            4 |     5705 | 2026-03-16 | Omega                | W   | 0.027      | -            | -                | -                | -         |     0.73 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            3 |     5715 | 2026-03-16 | HEROIC Academy       | W   | 0.026      | -            | -                | -                | -         |     0.16 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            2 |     5764 | 2026-03-15 | ex-RUBY              | L   | 0.019      | -            | -                | -                | -         |    -0.49 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            1 |     5851 | 2026-03-13 | Sangal               | W   | 0.005      | -            | -                | -                | -         |     0.04 | aVN, brutmonster, Cjoffo, emi, Kind0     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,716.41)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-08-30 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-06-06 |      0.573 | $1,250.00      | $716.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
