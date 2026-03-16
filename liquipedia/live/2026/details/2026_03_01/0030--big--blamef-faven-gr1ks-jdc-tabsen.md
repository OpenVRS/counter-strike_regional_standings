### Roster Details<br />
Team Name: BIG<br />
Roster: blameF, faveN, gr1ks, JDC, tabseN<br />
Global Rank: [30](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [23]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  1340.1<br />
<br />
Final Rank Value (1340.1) = Starting Rank Value (1369.3) + Head To Head Adjustments (-29.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.542[<sup>1</sup>](#table2)
- Bounty Collected: 0.363[<sup>2</sup>](#table1)
- Opponent Network: 0.253[<sup>2</sup>](#table1)
- LAN Wins: 0.892[<sup>2</sup>](#table1)

The average of these factors is 0.512<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1369.3
- 400 + ( ( 0.512 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1369.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.667
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |     1202 | 2026-01-30 | Nemiga Gaming          | L   | 0.993      | -            | -                | -                | -         |   -19.73 | blameF, gr1ks, JDC, prosus, tabseN  |
|           51 |     1220 | 2026-01-29 | 33                     | W   | 0.987      | 0.435        | 0.015 (0.006)    | 0.717 (0.307)    | -         |     6.73 | blameF, gr1ks, JDC, prosus, tabseN  |
|           50 |     1244 | 2026-01-28 | ARCRED                 | W   | 0.981      | 0.435        | -                | 0.942 (0.402)    | -         |     5.02 | blameF, gr1ks, JDC, prosus, tabseN  |
|           49 |     1317 | 2026-01-25 | HAVU                   | W   | 0.959      | 0.333        | -                | 0.530 (0.170)    | 1 (0.959) |     3.96 | blameF, faveN, gr1ks, JDC, tabseN   |
|           48 |     1336 | 2026-01-24 | Alliance               | W   | 0.954      | 0.333        | 0.124 (0.039)    | 0.943 (0.300)    | 1 (0.954) |    13.30 | blameF, faveN, gr1ks, JDC, tabseN   |
|           47 |     1356 | 2026-01-24 | Johnny Speeds          | W   | 0.952      | 0.333        | 0.021 (0.007)    | 0.909 (0.289)    | 1 (0.952) |     7.67 | blameF, faveN, gr1ks, JDC, tabseN   |
|           46 |     1409 | 2026-01-23 | LuleFlames             | W   | 0.945      | -            | -                | -                | 1 (0.945) |     0.17 | blameF, faveN, gr1ks, JDC, tabseN   |
|           45 |     1411 | 2026-01-23 | Lilmix                 | L   | 0.945      | -            | -                | -                | -         |   -28.45 | blameF, faveN, gr1ks, JDC, tabseN   |
|           44 |     1537 | 2026-01-18 | Betclic Apogee Esports | W   | 0.914      | 0.341        | -                | 0.481 (0.150)    | 1 (0.914) |     8.44 | blameF, faveN, gr1ks, JDC, tabseN   |
|           43 |     1543 | 2026-01-18 | Rebels Gaming          | W   | 0.913      | -            | -                | -                | 1 (0.913) |     6.03 | blameF, faveN, gr1ks, JDC, tabseN   |
|           42 |     1583 | 2026-01-17 | MANA eSports           | W   | 0.907      | -            | -                | -                | 1 (0.907) |     1.93 | blameF, faveN, gr1ks, JDC, tabseN   |
|           41 |     1629 | 2026-01-16 | HYPERSPIRIT            | W   | 0.901      | -            | -                | -                | 1 (0.901) |     1.30 | blameF, faveN, gr1ks, JDC, tabseN   |
|           40 |     1634 | 2026-01-16 | EXSAD Gaming           | W   | 0.900      | -            | -                | -                | 1 (0.900) |     0.19 | blameF, faveN, gr1ks, JDC, tabseN   |
|           39 |     1988 | 2025-12-16 | SPARTA Esports         | L   | 0.693      | -            | -                | -                | -         |   -19.56 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           38 |     1998 | 2025-12-14 | Magic (Russian team)   | W   | 0.681      | 0.435        | 0.136 (0.040)    | 0.870 (0.257)    | -         |     5.02 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           37 |     2001 | 2025-12-14 | 9INE                   | W   | 0.680      | 0.435        | 0.073 (0.021)    | 0.698 (0.206)    | -         |     9.35 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           36 |     2009 | 2025-12-13 | Oramond                | W   | 0.674      | 0.435        | 0.102 (0.030)    | 0.867 (0.254)    | -         |     4.91 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           35 |     2028 | 2025-12-12 | Sangal Esports         | W   | 0.666      | 0.435        | 0.025 (0.007)    | 0.693 (0.201)    | -         |     3.69 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           34 |     2509 | 2025-11-21 | Leo Team               | L   | 0.526      | -            | -                | -                | -         |   -15.33 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           33 |     2820 | 2025-11-09 | Mousquetaires          | W   | 0.445      | -            | -                | -                | 1 (0.445) |     0.56 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           32 |     2883 | 2025-11-07 | Team Arise             | W   | 0.437      | -            | -                | -                | -         |     0.27 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           31 |     2979 | 2025-11-07 | Team Nemesis Asia      | W   | 0.432      | -            | -                | -                | -         |     0.13 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           30 |     3106 | 2025-11-02 | M80                    | L   | 0.401      | -            | -                | -                | -         |    -6.96 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           29 |     3123 | 2025-11-01 | Imperial Esports       | W   | 0.395      | 0.333        | 0.080 (0.011)    | -                | -         |     4.54 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           28 |     3131 | 2025-11-01 | FlyQuest RED           | W   | 0.394      | -            | -                | -                | -         |     0.36 | FreeZe, JBOEN, JDC, prosus, tabseN  |
|           27 |     3495 | 2025-10-23 | Mousquetaires          | W   | 0.333      | -            | -                | -                | -         |     0.45 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           26 |     3531 | 2025-10-22 | BC.Game Esports        | W   | 0.325      | -            | -                | -                | -         |     0.47 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           25 |     3544 | 2025-10-21 | AM Gaming              | W   | 0.319      | -            | -                | -                | -         |     1.25 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           24 |     3553 | 2025-10-21 | Premdesant             | W   | 0.318      | -            | -                | -                | -         |     0.08 | FreeZe, gr1ks, JDC, prosus, tabseN  |
|           23 |     3588 | 2025-10-18 | 1w Team                | L   | 0.300      | -            | -                | -                | -         |    -7.69 | FreeZe, gr1ks, JDC, kyuubii, tabseN |
|           22 |     4117 | 2025-10-04 | Fnatic                 | L   | 0.208      | -            | -                | -                | -         |    -3.75 | hyped, JDC, Krimbo, prosus, tabseN  |
|           21 |     4136 | 2025-10-04 | KOLESIE                | W   | 0.206      | 0.333        | 0.088 (0.006)    | -                | -         |     2.22 | hyped, JDC, Krimbo, prosus, tabseN  |
|           20 |     4267 | 2025-09-30 | EYEBALLERS             | L   | 0.181      | -            | -                | -                | -         |    -3.75 | hyped, JDC, Krimbo, prosus, tabseN  |
|           19 |     4276 | 2025-09-30 | MOUZ NXT               | W   | 0.180      | -            | -                | -                | -         |     2.49 | hyped, JDC, Krimbo, prosus, tabseN  |
|           18 |     4287 | 2025-09-30 | OG                     | W   | 0.179      | -            | -                | -                | -         |     0.49 | hyped, JDC, Krimbo, prosus, tabseN  |
|           17 |     4297 | 2025-09-30 | Passion UA             | L   | 0.178      | -            | -                | -                | -         |    -3.48 | hyped, JDC, Krimbo, prosus, tabseN  |
|           16 |     4306 | 2025-09-30 | AaB esport             | W   | 0.177      | -            | -                | -                | -         |     0.14 | hyped, JDC, Krimbo, prosus, tabseN  |
|           15 |     4402 | 2025-09-27 | Phantom Esports        | L   | 0.160      | -            | -                | -                | -         |    -3.65 | hyped, JDC, Krimbo, prosus, tabseN  |
|           14 |     4419 | 2025-09-27 | Phantom Esports        | W   | 0.159      | -            | -                | -                | -         |     0.11 | hyped, JDC, Krimbo, prosus, tabseN  |
|           13 |     4442 | 2025-09-27 | Monte                  | L   | 0.158      | -            | -                | -                | -         |    -2.34 | hyped, JDC, Krimbo, prosus, tabseN  |
|           12 |     4471 | 2025-09-26 | SIXSEVEN               | W   | 0.152      | -            | -                | -                | -         |     0.24 | hyped, JDC, Krimbo, prosus, tabseN  |
|           11 |     4487 | 2025-09-26 | ATOMIK                 | W   | 0.151      | -            | -                | -                | -         |     0.02 | hyped, JDC, Krimbo, prosus, tabseN  |
|           10 |     4582 | 2025-09-22 | Friendly Campers       | L   | 0.126      | -            | -                | -                | -         |    -3.05 | hyped, JDC, Krimbo, prosus, tabseN  |
|            9 |     4608 | 2025-09-21 | Friendly Campers       | L   | 0.119      | -            | -                | -                | -         |    -2.92 | hyped, JDC, Krimbo, prosus, tabseN  |
|            8 |     4628 | 2025-09-20 | KOLESIE                | W   | 0.114      | -            | -                | -                | -         |     1.18 | hyped, JDC, Krimbo, prosus, tabseN  |
|            7 |     4669 | 2025-09-19 | RUBY                   | W   | 0.106      | -            | -                | -                | -         |     0.12 | hyped, JDC, Krimbo, prosus, tabseN  |
|            6 |     4828 | 2025-09-14 | ECSTATIC               | L   | 0.073      | -            | -                | -                | -         |    -1.10 | hyped, JDC, Krimbo, prosus, tabseN  |
|            5 |     4858 | 2025-09-13 | Inner Circle Esports   | W   | 0.068      | -            | -                | -                | -         |     0.42 | hyped, JDC, Krimbo, prosus, tabseN  |
|            4 |     4979 | 2025-09-11 | OG                     | L   | 0.053      | -            | -                | -                | -         |    -1.54 | hyped, JDC, Krimbo, prosus, tabseN  |
|            3 |     5089 | 2025-09-09 | BC.Game Esports        | W   | 0.039      | 0.729        | 0.224 (0.006)    | -                | -         |     0.79 | hyped, JDC, Krimbo, prosus, tabseN  |
|            2 |     5224 | 2025-09-04 | AaB esport             | W   | 0.007      | -            | -                | -                | -         |     0.01 | hyped, JDC, Krimbo, prosus, tabseN  |
|            1 |     5230 | 2025-09-04 | Friendly Campers       | W   | 0.006      | -            | -                | -                | -         |     0.04 | hyped, JDC, Krimbo, prosus, tabseN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($47,487.39)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.14) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-30 |      0.994 | $5,000.00      | $4,970.25       |
| 2026-01-25 |      0.959 | $7,000.00      | $6,714.17       |
| 2026-01-18 |      0.914 | $5,803.13      | $5,304.22       |
| 2025-12-14 |      0.681 | $22,000.00     | $14,972.22      |
| 2025-11-09 |      0.445 | $30,000.00     | $13,343.75      |
| 2025-11-02 |      0.401 | $3,000.00      | $1,201.67       |
| 2025-10-19 |      0.307 | $1,000.00      | $307.22         |
| 2025-09-21 |      0.120 | $5,000.00      | $600.00         |
| 2025-09-14 |      0.074 | $1,000.00      | $73.89          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
