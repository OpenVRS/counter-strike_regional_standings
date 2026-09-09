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
Final Rank Value (1043.5) = Starting Rank Value (919.8) + Head To Head Adjustments (123.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.399[<sup>1</sup>](#table2)
- Bounty Collected: 0.361[<sup>2</sup>](#table1)
- Opponent Network: 0.316[<sup>2</sup>](#table1)
- LAN Wins: 0.017[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 919.8
- 400 + ( ( 0.273 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 919.8


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
|           92 |      181 | 2026-09-01 | Honvéd               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.90 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           91 |      231 | 2026-08-30 | Bushido Wildcats     | W   | 1.000      | 0.371        | 0.017 (0.006)    | 1.000 (0.371)    | 0 (0.000) |    13.02 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           90 |      245 | 2026-08-30 | INOX Division        | L   | 1.000      | -            | -                | -                | -         |   -11.72 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           89 |      266 | 2026-08-30 | Phantom              | W   | 1.000      | 0.384        | 0.037 (0.014)    | -                | 0 (0.000) |    19.02 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           88 |      284 | 2026-08-30 | INOX Division        | W   | 1.000      | 0.371        | 0.042 (0.015)    | 1.000 (0.371)    | 0 (0.000) |    20.30 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           87 |      313 | 2026-08-29 | STATE                | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.00 | brutmonster, Cjoffo, emi, Kind0, VLDN    |
|           86 |      336 | 2026-08-29 | SINNERS              | W   | 1.000      | 0.384        | 0.102 (0.039)    | -                | 0 (0.000) |    20.64 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           85 |      358 | 2026-08-28 | HAVU                 | W   | 1.000      | -            | -                | -                | 0 (0.000) |    11.24 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           84 |      376 | 2026-08-28 | OG                   | W   | 1.000      | 0.384        | 0.024 (0.009)    | -                | 0 (0.000) |    18.54 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           83 |      403 | 2026-08-27 | FOKUS                | W   | 1.000      | 0.371        | 0.116 (0.043)    | 0.525 (0.195)    | 0 (0.000) |    25.57 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           82 |      405 | 2026-08-27 | Honvéd               | L   | 1.000      | -            | -                | -                | -         |   -20.18 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           81 |      425 | 2026-08-27 | WBT                  | W   | 1.000      | -            | -                | -                | -         |    11.55 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           80 |      450 | 2026-08-26 | Honvéd               | W   | 1.000      | 0.371        | -                | 0.869 (0.322)    | -         |    11.45 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           79 |      467 | 2026-08-26 | HYPERSPIRIT          | L   | 1.000      | -            | -                | -                | -         |   -18.55 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           78 |      515 | 2026-08-25 | Black Phoenix        | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.952 (0.353)    | -         |    17.92 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           77 |      524 | 2026-08-24 | UPGRADE              | L   | 1.000      | -            | -                | -                | -         |    -9.77 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           76 |      556 | 2026-08-23 | Just Players         | W   | 1.000      | 0.384        | -                | 0.773 (0.297)    | -         |    16.91 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           75 |      564 | 2026-08-23 | Endless Journey      | L   | 1.000      | -            | -                | -                | -         |   -20.47 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           74 |      601 | 2026-08-22 | GenOne               | W   | 1.000      | 0.435        | 0.055 (0.024)    | 1.000 (0.435)    | -         |    23.92 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           73 |      613 | 2026-08-21 | MASONIC              | W   | 1.000      | -            | -                | -                | -         |    15.54 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           72 |      644 | 2026-08-20 | benched gods         | L   | 1.000      | -            | -                | -                | -         |   -19.94 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           71 |      666 | 2026-08-19 | Enjoy                | W   | 1.000      | 0.384        | -                | 0.535 (0.206)    | -         |    14.26 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           70 |      675 | 2026-08-19 | G2 Ares              | W   | 1.000      | 0.384        | 0.014 (0.005)    | 0.686 (0.264)    | -         |    17.86 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           69 |      693 | 2026-08-18 | Vexar                | W   | 1.000      | -            | -                | -                | -         |    11.36 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           68 |      702 | 2026-08-18 | ex-RUSTEC            | W   | 1.000      | 0.384        | 0.018 (0.007)    | 0.909 (0.349)    | -         |    20.46 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           67 |      719 | 2026-08-17 | Inner Circle Academy | L   | 1.000      | -            | -                | -                | -         |   -16.68 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           66 |      735 | 2026-08-16 | DragonClaw           | W   | 1.000      | -            | -                | -                | -         |    13.21 | brutmonster, Cjoffo, Dragon, Kind0, VLDN |
|           65 |     1553 | 2026-07-19 | Acend                | L   | 0.864      | -            | -                | -                | -         |    -2.21 | andr1x, Dragon, emi, Kind0, VLDN         |
|           64 |     1564 | 2026-07-19 | Romania              | L   | 0.864      | -            | -                | -                | -         |   -23.46 | andr1x, Dragon, emi, Kind0, VLDN         |
|           63 |     2346 | 2026-06-08 | Mai Tai              | L   | 0.590      | -            | -                | -                | -         |   -14.94 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           62 |     2383 | 2026-06-06 | BIG Academy          | W   | 0.579      | -            | -                | -                | -         |     3.53 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           61 |     2424 | 2026-06-05 | aAa                  | W   | 0.572      | -            | -                | -                | -         |     4.84 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           60 |     2435 | 2026-06-05 | Johnny Speeds        | L   | 0.569      | -            | -                | -                | -         |    -8.69 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           59 |     2479 | 2026-06-03 | illwill              | W   | 0.556      | -            | -                | -                | -         |     6.18 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           58 |     2500 | 2026-06-02 | RBLS                 | W   | 0.550      | -            | -                | -                | -         |     8.39 | aVN, Cjoffo, Dragon, Kind0, RiiL3        |
|           57 |     2513 | 2026-06-01 | Black Phoenix        | L   | 0.545      | -            | -                | -                | -         |    -8.00 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           56 |     2576 | 2026-05-30 | ex-RUBY              | L   | 0.531      | -            | -                | -                | -         |    -4.15 | aVN, Cjoffo, Dragon, Kind0, RiiL3        |
|           55 |     2621 | 2026-05-29 | aAa                  | L   | 0.524      | -            | -                | -                | -         |   -12.40 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           54 |     2649 | 2026-05-28 | KOLESIE              | W   | 0.519      | -            | -                | -                | -         |     9.76 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           53 |     2684 | 2026-05-28 | INOX Division        | L   | 0.516      | -            | -                | -                | -         |    -5.72 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           52 |     2703 | 2026-05-27 | Permitta             | L   | 0.511      | -            | -                | -                | -         |    -9.88 | aVN, Cjoffo, Dragon, Kind0, RiiL3        |
|           51 |     2737 | 2026-05-26 | Just Players         | L   | 0.505      | -            | -                | -                | -         |    -6.80 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           50 |     2770 | 2026-05-25 | ASTRAL               | L   | 0.499      | -            | -                | -                | -         |    -3.82 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           49 |     2778 | 2026-05-25 | 6666                 | W   | 0.498      | -            | -                | -                | -         |     3.30 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           48 |     2790 | 2026-05-25 | Permitta             | W   | 0.497      | -            | -                | -                | -         |     5.71 | aVN, brutmonster, Cjoffo, Dragon, Kind0  |
|           47 |     2833 | 2026-05-24 | UPGRADE              | W   | 0.490      | -            | -                | -                | -         |    11.05 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           46 |     2867 | 2026-05-23 | Julie&Cie            | W   | 0.484      | -            | -                | -                | -         |     0.92 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           45 |     2879 | 2026-05-23 | ALGO                 | W   | 0.484      | -            | -                | -                | -         |     3.87 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           44 |     2914 | 2026-05-22 | SAW Youngsters       | L   | 0.478      | -            | -                | -                | -         |   -10.95 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           43 |     2974 | 2026-05-21 | Subtop De France     | W   | 0.470      | -            | -                | -                | -         |     1.44 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           42 |     3009 | 2026-05-20 | Lavked               | L   | 0.464      | -            | -                | -                | -         |    -6.19 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           41 |     3059 | 2026-05-18 | fnatic               | L   | 0.450      | -            | -                | -                | -         |    -1.06 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           40 |     3076 | 2026-05-17 | GenOne               | L   | 0.445      | -            | -                | -                | -         |    -4.68 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           39 |     3098 | 2026-05-16 | Drip Too Hard        | W   | 0.438      | -            | -                | -                | -         |     3.80 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           38 |     3129 | 2026-05-15 | Just Players         | L   | 0.432      | -            | -                | -                | -         |    -6.11 | andr1x, aVN, brutmonster, Cjoffo, Kind0  |
|           37 |     3157 | 2026-05-14 | Drip Too Hard        | W   | 0.425      | -            | -                | -                | -         |     3.60 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           36 |     3377 | 2026-05-07 | Nuclear TigeRES      | L   | 0.379      | -            | -                | -                | -         |    -3.26 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           35 |     3403 | 2026-05-06 | benched gods         | L   | 0.370      | -            | -                | -                | -         |    -8.62 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           34 |     3413 | 2026-05-05 | INOX Division        | L   | 0.365      | -            | -                | -                | -         |    -4.64 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           33 |     3476 | 2026-05-03 | Lilmix               | W   | 0.349      | -            | -                | -                | -         |     2.88 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           32 |     3506 | 2026-05-02 | ASTRAL               | W   | 0.344      | -            | -                | -                | -         |     8.78 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           31 |     3565 | 2026-05-01 | Lavked               | W   | 0.337      | -            | -                | -                | -         |     5.42 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           30 |     3686 | 2026-04-28 | CYBERSHOKE           | W   | 0.318      | -            | -                | -                | -         |     4.13 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           29 |     3904 | 2026-04-24 | Mai Tai              | L   | 0.292      | -            | -                | -                | -         |    -7.20 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           28 |     3962 | 2026-04-23 | The Last Resort      | L   | 0.284      | -            | -                | -                | -         |    -4.00 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           27 |     3999 | 2026-04-22 | Endless Journey      | W   | 0.276      | -            | -                | -                | -         |     2.64 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           26 |     4389 | 2026-04-05 | BIG                  | L   | 0.164      | -            | -                | -                | -         |    -0.12 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           25 |     4411 | 2026-04-05 | brazylijski luz      | L   | 0.162      | -            | -                | -                | -         |    -3.99 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           24 |     4529 | 2026-04-03 | illwill              | L   | 0.152      | -            | -                | -                | -         |    -3.38 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           23 |     4542 | 2026-04-03 | Deorum               | W   | 0.151      | -            | -                | -                | 1 (0.151) |     0.26 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           22 |     4551 | 2026-04-03 | STATE                | L   | 0.150      | -            | -                | -                | -         |    -1.91 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           21 |     4624 | 2026-04-02 | ex-RUSTEC            | L   | 0.145      | -            | -                | -                | -         |    -1.81 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           20 |     4747 | 2026-04-01 | Ryvex                | W   | 0.137      | -            | -                | -                | -         |     0.81 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           19 |     4881 | 2026-03-30 | Black Phoenix        | L   | 0.126      | -            | -                | -                | -         |    -2.13 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           18 |     4922 | 2026-03-30 | brazylijski luz      | W   | 0.123      | -            | -                | -                | -         |     0.82 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           17 |     4944 | 2026-03-29 | ReThink              | W   | 0.119      | -            | -                | -                | -         |     1.29 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           16 |     5077 | 2026-03-28 | Bebop                | L   | 0.111      | -            | -                | -                | -         |    -2.52 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           15 |     5257 | 2026-03-24 | MASONIC              | W   | 0.085      | -            | -                | -                | -         |     0.34 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           14 |     5355 | 2026-03-23 | rottweilers          | W   | 0.077      | -            | -                | -                | -         |     0.22 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           13 |     5466 | 2026-03-21 | Hashiras             | L   | 0.063      | -            | -                | -                | -         |    -1.59 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           12 |     5491 | 2026-03-20 | HAVU                 | L   | 0.059      | -            | -                | -                | -         |    -1.08 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           11 |     5505 | 2026-03-20 | home                 | W   | 0.058      | -            | -                | -                | -         |     0.13 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|           10 |     5557 | 2026-03-19 | SINQU                | W   | 0.051      | -            | -                | -                | -         |     0.14 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            9 |     5563 | 2026-03-19 | MASONIC              | W   | 0.050      | -            | -                | -                | -         |     0.20 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            8 |     5584 | 2026-03-18 | BIG                  | L   | 0.046      | -            | -                | -                | -         |    -0.03 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            7 |     5590 | 2026-03-18 | Clutchain fe         | W   | 0.045      | -            | -                | -                | -         |     0.28 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            6 |     5591 | 2026-03-18 | yngods               | L   | 0.045      | -            | -                | -                | -         |    -1.29 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            5 |     5639 | 2026-03-17 | Nemesis              | L   | 0.038      | -            | -                | -                | -         |    -0.30 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            4 |     5677 | 2026-03-16 | Omega                | W   | 0.032      | -            | -                | -                | -         |     0.88 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            3 |     5687 | 2026-03-16 | HEROIC Academy       | W   | 0.031      | -            | -                | -                | -         |     0.20 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            2 |     5736 | 2026-03-15 | ex-RUBY              | L   | 0.024      | -            | -                | -                | -         |    -0.63 | aVN, brutmonster, Cjoffo, emi, Kind0     |
|            1 |     5823 | 2026-03-13 | Sangal               | W   | 0.011      | -            | -                | -                | -         |     0.08 | aVN, brutmonster, Cjoffo, emi, Kind0     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,723.25)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $10,000.00     | $10,000.00      |
| 2026-08-30 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-06-06 |      0.579 | $1,250.00      | $723.25         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
