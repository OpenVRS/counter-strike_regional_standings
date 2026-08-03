### Roster Details<br />
Team Name: Hashiras<br />
Roster: birdfromsky, Burmylov, c0llins, JACKZ, Queenix<br />
Global Rank: [181](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [127]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  779.7<br />
<br />
Final Rank Value (779.7) = Starting Rank Value (729.4) + Head To Head Adjustments (50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.247[<sup>1</sup>](#table2)
- Bounty Collected: 0.289[<sup>2</sup>](#table1)
- Opponent Network: 0.145[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.4
- 400 + ( ( 0.170 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 729.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |     1469 | 2026-05-28 | Misa                 | L   | 0.752      | -            | -                | -                | -         |   -13.03 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           63 |     1512 | 2026-05-27 | Julie&Cie            | W   | 0.745      | 0.303        | 0.003 (0.001)    | -                | 0 (0.000) |     9.69 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           62 |     1515 | 2026-05-27 | EAC                  | L   | 0.745      | -            | -                | -                | -         |    -4.10 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           61 |     1568 | 2026-05-25 | NEW VISION           | L   | 0.733      | -            | -                | -                | -         |   -11.79 | Burmylov, c0llins, JACKZ, Queenix, rilax       |
|           60 |     1616 | 2026-05-24 | Bushido Wildcats     | L   | 0.726      | -            | -                | -                | -         |   -11.88 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           59 |     1630 | 2026-05-24 | ex-MANA              | W   | 0.725      | 0.396        | -                | 0.637 (0.183)    | 0 (0.000) |    10.55 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           58 |     1648 | 2026-05-23 | EAC                  | L   | 0.721      | -            | -                | -                | -         |    -3.72 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           57 |     1675 | 2026-05-23 | Vexar                | W   | 0.719      | -            | -                | -                | 0 (0.000) |     7.78 | birdfromsky, Burmylov, JACKZ, Queenix, rilax   |
|           56 |     1797 | 2026-05-20 | Bebop                | W   | 0.700      | 0.344        | -                | 0.688 (0.166)    | 0 (0.000) |    13.05 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           55 |     1835 | 2026-05-19 | Young Ninjas         | W   | 0.691      | 0.344        | 0.003 (0.001)    | 0.583 (0.139)    | 0 (0.000) |    12.82 | birdfromsky, Burmylov, c0llins, JACKZ, Queenix |
|           54 |     1933 | 2026-05-15 | Young Ninjas         | L   | 0.666      | -            | -                | -                | -         |    -8.37 | Aaron, birdfromsky, JACKZ, Queenix, rilax      |
|           53 |     1945 | 2026-05-14 | Just Players         | L   | 0.661      | -            | -                | -                | -         |    -4.92 | Aaron, birdfromsky, Burmylov, JACKZ, Queenix   |
|           52 |     2435 | 2026-04-29 | Lavked               | L   | 0.560      | -            | -                | -                | -         |    -5.07 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           51 |     2473 | 2026-04-28 | CYBERSHOKE Prospects | W   | 0.554      | 0.384        | 0.013 (0.003)    | 0.722 (0.154)    | 0 (0.000) |    15.40 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           50 |     2514 | 2026-04-27 | Nemesis              | L   | 0.547      | -            | -                | -                | -         |    -0.66 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           49 |     2637 | 2026-04-25 | Phantom              | W   | 0.534      | 0.384        | 0.024 (0.005)    | 0.815 (0.167)    | 0 (0.000) |    14.01 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           48 |     2764 | 2026-04-23 | Walczaki             | W   | 0.518      | 0.384        | 0.096 (0.019)    | 1.000 (0.199)    | 0 (0.000) |    14.82 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           47 |     2782 | 2026-04-22 | ex-RUSTEC            | W   | 0.513      | 0.384        | 0.006 (0.001)    | 0.713 (0.140)    | 0 (0.000) |    11.30 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           46 |     2953 | 2026-04-12 | Bebop                | L   | 0.447      | -            | -                | -                | -         |    -4.38 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           45 |     2992 | 2026-04-11 | UNiTY                | W   | 0.438      | -            | -                | -                | 0 (0.000) |     4.57 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           44 |     3007 | 2026-04-10 | ex-MANA              | L   | 0.434      | -            | -                | -                | -         |    -5.78 | birdfromsky, Burmylov, JACKZ, Nexius, Queenix  |
|           43 |     3032 | 2026-04-09 | UNiTY                | W   | 0.427      | -            | -                | -                | -         |     4.38 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           42 |     3048 | 2026-04-09 | Lavked               | L   | 0.425      | -            | -                | -                | -         |    -6.51 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           41 |     3255 | 2026-04-04 | HEROIC Academy       | W   | 0.392      | -            | -                | -                | -         |     7.29 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           40 |     3653 | 2026-03-31 | Imperial Academy     | W   | 0.365      | -            | -                | -                | -         |     2.58 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           39 |     3865 | 2026-03-28 | los kogutos          | L   | 0.346      | -            | -                | -                | -         |    -2.97 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           38 |     3930 | 2026-03-27 | Persona Grata        | L   | 0.338      | -            | -                | -                | -         |    -7.81 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           37 |     3989 | 2026-03-25 | Lavked               | L   | 0.327      | -            | -                | -                | -         |    -5.48 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           36 |     4058 | 2026-03-24 | PsychoFace           | L   | 0.319      | -            | -                | -                | -         |    -1.42 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           35 |     4114 | 2026-03-23 | ex-RUSTEC            | L   | 0.314      | -            | -                | -                | -         |    -3.79 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           34 |     4195 | 2026-03-22 | Rune Eaters          | W   | 0.305      | 0.435        | 0.022 (0.003)    | 0.895 (0.119)    | -         |     9.13 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           33 |     4259 | 2026-03-21 | ex-Zero Tenacity     | W   | 0.298      | -            | -                | -                | -         |     5.70 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           32 |     4428 | 2026-03-17 | Butterfly            | W   | 0.274      | 0.384        | 0.007 (0.001)    | 0.889 (0.094)    | -         |     7.76 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           31 |     4495 | 2026-03-16 | Atreides             | W   | 0.265      | 0.384        | -                | 0.900 (0.092)    | -         |     5.28 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           30 |     4557 | 2026-03-14 | FAVBET               | L   | 0.254      | -            | -                | -                | -         |    -3.52 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           29 |     4697 | 2026-03-11 | OlyBet               | W   | 0.236      | -            | -                | -                | -         |     3.36 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           28 |     4751 | 2026-03-10 | NOVAQ                | L   | 0.227      | -            | -                | -                | -         |    -0.72 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           27 |     4761 | 2026-03-10 | Rune Eaters          | L   | 0.225      | -            | -                | -                | -         |    -0.30 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           26 |     4783 | 2026-03-09 | STATE                | L   | 0.221      | -            | -                | -                | -         |    -0.54 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           25 |     4806 | 2026-03-09 | HYPERSPIRIT          | L   | 0.220      | -            | -                | -                | -         |    -2.62 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           24 |     5039 | 2026-03-05 | Nemesis              | L   | 0.193      | -            | -                | -                | -         |    -0.20 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix   |
|           23 |     5183 | 2026-03-02 | Fuzos                | W   | 0.172      | -            | -                | -                | -         |     2.10 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           22 |     5373 | 2026-02-26 | TNC                  | L   | 0.146      | -            | -                | -                | -         |    -2.58 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           21 |     5390 | 2026-02-26 | MOUZ NXT             | L   | 0.145      | -            | -                | -                | -         |    -1.11 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           20 |     5472 | 2026-02-24 | WW                   | L   | 0.132      | -            | -                | -                | -         |    -0.17 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           19 |     5523 | 2026-02-23 | TDK                  | L   | 0.125      | -            | -                | -                | -         |    -1.26 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           18 |     5582 | 2026-02-22 | Romania              | W   | 0.119      | -            | -                | -                | -         |     1.26 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           17 |     5613 | 2026-02-21 | ASTRAL               | L   | 0.115      | -            | -                | -                | -         |    -0.17 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           16 |     5626 | 2026-02-21 | ARCRED               | L   | 0.114      | -            | -                | -                | -         |    -0.31 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           15 |     5668 | 2026-02-20 | ASTRAL               | W   | 0.108      | 0.435        | 0.014 (0.001)    | -                | -         |     3.24 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           14 |     5696 | 2026-02-20 | TDK                  | L   | 0.105      | -            | -                | -                | -         |    -1.09 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           13 |     5803 | 2026-02-18 | los kogutos          | L   | 0.092      | -            | -                | -                | -         |    -0.82 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           12 |     5858 | 2026-02-17 | Just Players         | W   | 0.086      | -            | -                | -                | -         |     1.05 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           11 |     5867 | 2026-02-17 | VP.Prodigy           | L   | 0.085      | -            | -                | -                | -         |    -2.05 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|           10 |     5890 | 2026-02-16 | Lazer Cats           | L   | 0.080      | -            | -                | -                | -         |    -0.80 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            9 |     5917 | 2026-02-15 | NEW VISION           | L   | 0.076      | -            | -                | -                | -         |    -1.21 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            8 |     5944 | 2026-02-15 | SPARTA               | W   | 0.074      | 0.384        | 0.023 (0.001)    | -                | -         |     1.88 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            7 |     5951 | 2026-02-15 | WW                   | L   | 0.073      | -            | -                | -                | -         |    -0.10 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            6 |     6011 | 2026-02-14 | Alliance             | L   | 0.067      | -            | -                | -                | -         |    -0.01 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            5 |     6023 | 2026-02-14 | Leo                  | W   | 0.066      | -            | -                | -                | -         |     0.97 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            4 |     6066 | 2026-02-13 | ex-Zero Tenacity     | W   | 0.060      | -            | -                | -                | -         |     1.09 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            3 |     6121 | 2026-02-12 | BIG EQUIPA           | W   | 0.052      | -            | -                | -                | -         |     0.50 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            2 |     6200 | 2026-02-10 | ASTRAL               | L   | 0.038      | -            | -                | -                | -         |    -0.05 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |
|            1 |     6250 | 2026-02-08 | Bulgaria             | L   | 0.025      | -            | -                | -                | -         |    -0.02 | b0RUP, birdfromsky, Burmylov, JACKZ, Keoz      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($440.51)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-03 |      0.587 | $750.00        | $440.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
