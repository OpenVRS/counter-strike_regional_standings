### Roster Details<br />
Team Name: GamerLegion<br />
Roster: FL4MUS, hypex, REZ, Snax, Tauson<br />
Global Rank: [28](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [21]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1343.0<br />
<br />
Final Rank Value (1343.0) = Starting Rank Value (1381.7) + Head To Head Adjustments (-38.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.682[<sup>1</sup>](#table2)
- Bounty Collected: 0.547[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.648[<sup>2</sup>](#table1)

The average of these factors is 0.516<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1381.7
- 400 + ( ( 0.516 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1381.7


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
|           32 |      158 | 2026-09-02 | K27               | L   | 1.000      | -            | -                | -                | -         |   -18.71 | FL4MUS, hypex, Maden, REZ, Snax  |
|           31 |      177 | 2026-09-02 | Nuclear TigeRES   | L   | 1.000      | -            | -                | -                | -         |   -22.48 | FL4MUS, hypex, Maden, REZ, Snax  |
|           30 |      679 | 2026-08-19 | MOUZ              | L   | 1.000      | -            | -                | -                | -         |    -1.75 | FL4MUS, hypex, REZ, Snax, Tauson |
|           29 |      869 | 2026-08-13 | JiJieHao          | W   | 1.000      | 1.000        | 0.070 (0.070)    | 0.422 (0.422)    | 1 (1.000) |    16.30 | FL4MUS, hypex, REZ, Snax, Tauson |
|           28 |      900 | 2026-08-12 | Luminosity        | W   | 1.000      | 1.000        | 0.145 (0.145)    | 0.181 (0.181)    | 1 (1.000) |    10.11 | FL4MUS, hypex, REZ, Snax, Tauson |
|           27 |     1523 | 2026-07-22 | HOTU              | L   | 0.879      | -            | -                | -                | -         |   -11.37 | FL4MUS, hypex, REZ, Snax, Tauson |
|           26 |     2072 | 2026-06-24 | 9INE              | L   | 0.694      | -            | -                | -                | -         |   -19.18 | hypex, PR, REZ, Snax, Tauson     |
|           25 |     2083 | 2026-06-23 | Acend             | L   | 0.687      | -            | -                | -                | -         |   -15.22 | hypex, PR, REZ, Snax, Tauson     |
|           24 |     2387 | 2026-06-07 | B8                | L   | 0.580      | -            | -                | -                | -         |    -7.37 | hypex, PR, REZ, Snax, Tauson     |
|           23 |     2412 | 2026-06-06 | BETBOOM           | L   | 0.573      | -            | -                | -                | -         |    -7.30 | hypex, PR, REZ, Snax, Tauson     |
|           22 |     2436 | 2026-06-06 | Astralis          | L   | 0.571      | -            | -                | -                | -         |    -8.65 | hypex, PR, REZ, Snax, Tauson     |
|           21 |     2472 | 2026-06-04 | BIG               | W   | 0.559      | 0.624        | 0.150 (0.052)    | 0.566 (0.197)    | 1 (0.559) |    11.72 | hypex, PR, REZ, Snax, Tauson     |
|           20 |     2495 | 2026-06-03 | BETBOOM           | L   | 0.552      | -            | -                | -                | -         |    -7.29 | hypex, PR, REZ, Snax, Tauson     |
|           19 |     2514 | 2026-06-02 | FlyQuest          | W   | 0.547      | -            | -                | -                | 1 (0.547) |     2.75 | hypex, PR, REZ, Snax, Tauson     |
|           18 |     2526 | 2026-06-02 | NRG               | W   | 0.545      | 0.624        | -                | 0.356 (0.121)    | 1 (0.545) |     2.97 | hypex, PR, REZ, Snax, Tauson     |
|           17 |     3096 | 2026-05-17 | Natus Vincere     | L   | 0.441      | -            | -                | -                | -         |    -3.85 | hypex, PR, REZ, Snax, Tauson     |
|           16 |     3122 | 2026-05-16 | Legacy            | W   | 0.433      | 1.000        | 1.000 (0.433)    | 0.454 (0.197)    | 1 (0.433) |    12.45 | hypex, PR, REZ, Snax, Tauson     |
|           15 |     3155 | 2026-05-15 | paiN              | W   | 0.427      | 1.000        | 0.300 (0.128)    | 0.318 (0.136)    | 1 (0.427) |     5.24 | hypex, PR, REZ, Snax, Tauson     |
|           14 |     3200 | 2026-05-13 | Astralis          | W   | 0.415      | 1.000        | 0.375 (0.156)    | 0.314 (0.130)    | 1 (0.415) |     7.34 | hypex, PR, REZ, Snax, Tauson     |
|           13 |     3207 | 2026-05-13 | Liquid            | W   | 0.413      | 1.000        | 0.206 (0.085)    | 0.387 (0.160)    | 1 (0.413) |     7.86 | hypex, PR, REZ, Snax, Tauson     |
|           12 |     3241 | 2026-05-12 | Natus Vincere     | L   | 0.408      | -            | -                | -                | -         |    -3.39 | hypex, PR, REZ, Snax, Tauson     |
|           11 |     3282 | 2026-05-11 | SINNERS           | W   | 0.401      | 1.000        | 0.102 (0.041)    | 0.475 (0.191)    | 1 (0.401) |     2.02 | hypex, PR, REZ, Snax, Tauson     |
|           10 |     3512 | 2026-05-02 | Vitality          | L   | 0.341      | -            | -                | -                | -         |    -0.57 | hypex, PR, REZ, Snax, Tauson     |
|            9 |     3556 | 2026-05-01 | Astralis          | W   | 0.335      | 1.000        | 0.375 (0.126)    | -                | -         |     6.10 | hypex, PR, REZ, Snax, Tauson     |
|            8 |     3609 | 2026-04-30 | Natus Vincere     | L   | 0.328      | -            | -                | -                | -         |    -2.76 | hypex, PR, REZ, Snax, Tauson     |
|            7 |     3654 | 2026-04-29 | FURIA             | W   | 0.322      | 1.000        | 0.779 (0.251)    | 0.375 (0.120)    | -         |     9.18 | hypex, PR, REZ, Snax, Tauson     |
|            6 |     4487 | 2026-04-04 | BETBOOM           | L   | 0.152      | -            | -                | -                | -         |    -1.86 | hypex, PR, REZ, Snax, Tauson     |
|            5 |     4565 | 2026-04-03 | G2                | L   | 0.146      | -            | -                | -                | -         |    -0.55 | hypex, PR, REZ, Snax, Tauson     |
|            4 |     4635 | 2026-04-02 | Ninjas in Pyjamas | W   | 0.140      | -            | -                | -                | -         |     0.09 | hypex, PR, REZ, Snax, Tauson     |
|            3 |     4746 | 2026-04-01 | 9INE              | W   | 0.133      | -            | -                | -                | -         |     0.59 | hypex, PR, REZ, Snax, Tauson     |
|            2 |     5162 | 2026-03-27 | Alliance          | L   | 0.098      | -            | -                | -                | -         |    -1.43 | hypex, PR, REZ, Snax, Tauson     |
|            1 |     5366 | 2026-03-23 | Metizport         | W   | 0.073      | -            | -                | -                | -         |     0.35 | hypex, PR, REZ, Snax, Tauson     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($171,505.07)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $35,000.00     | $35,000.00      |
| 2026-07-26 |      0.907 | $7,500.00      | $6,799.39       |
| 2026-06-28 |      0.721 | $2,000.00      | $1,441.55       |
| 2026-06-09 |      0.593 | $10,000.00     | $5,933.16       |
| 2026-05-17 |      0.441 | $170,000.00    | $74,890.63      |
| 2026-05-03 |      0.347 | $130,000.00    | $45,106.33      |
| 2026-04-04 |      0.153 | $13,500.00     | $2,067.76       |
| 2026-03-28 |      0.107 | $2,500.00      | $266.26         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
