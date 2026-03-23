### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, nukkye, Scr0b, szejn<br />
Global Rank: [115](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [86]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  938.1<br />
<br />
Final Rank Value (938.1) = Starting Rank Value (927.1) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.292[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.367[<sup>2</sup>](#table1)

The average of these factors is 0.269<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 927.1
- 400 + ( ( 0.269 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 927.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.315
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      692 | 2026-02-28 | OMEGA                | L   | 1.000      | -            | -                | -                | -         |    -6.64 | anber, aNdu, nukkye, rendysky, szejn |
|           24 |      906 | 2026-02-24 | QWENTRY              | L   | 1.000      | -            | -                | -                | -         |   -13.45 | anber, aNdu, nukkye, rendysky, szejn |
|           23 |     1133 | 2026-02-19 | Passion UA           | L   | 1.000      | -            | -                | -                | -         |    -4.94 | anber, myltsi, nukkye, Scr0b, szejn  |
|           22 |     1135 | 2026-02-19 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |    -2.44 | anber, myltsi, nukkye, Scr0b, szejn  |
|           21 |     1252 | 2026-02-17 | FC Famalicão Esports | L   | 1.000      | -            | -                | -                | -         |   -15.26 | anber, nukkye, Scr0b, Shara, szejn   |
|           20 |     1311 | 2026-02-16 | SIXSEVEN             | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.327 (0.126)    | 0 (0.000) |    12.45 | anber, nukkye, Scr0b, Shara, szejn   |
|           19 |     1315 | 2026-02-16 | Phantom Esports      | L   | 1.000      | -            | -                | -                | -         |   -10.60 | anber, Dytor, myltsi, nukkye, szejn  |
|           18 |     1370 | 2026-02-15 | ALLINNERS            | W   | 1.000      | 0.384        | 0.006 (0.002)    | 0.140 (0.054)    | 0 (0.000) |    11.05 | anber, nukkye, Scr0b, Shara, szejn   |
|           17 |     1406 | 2026-02-14 | KOLESIE              | L   | 1.000      | -            | -                | -                | -         |    -5.14 | anber, nukkye, Scr0b, Shara, szejn   |
|           16 |     1420 | 2026-02-14 | Ex-Zero Tenacity     | W   | 1.000      | 0.435        | -                | 0.411 (0.179)    | 0 (0.000) |     7.98 | anber, Dytor, myltsi, nukkye, szejn  |
|           15 |     1467 | 2026-02-13 | FUZOS                | W   | 0.999      | 0.384        | 0.006 (0.002)    | 0.471 (0.181)    | 0 (0.000) |    14.06 | anber, nukkye, Scr0b, Shara, szejn   |
|           14 |     1539 | 2026-02-12 | GenOne               | W   | 0.990      | 0.435        | 0.022 (0.009)    | 0.623 (0.268)    | 0 (0.000) |    21.99 | anber, Dytor, myltsi, nukkye, szejn  |
|           13 |     1600 | 2026-02-10 | Leo Team             | L   | 0.979      | -            | -                | -                | -         |   -16.19 | anber, myltsi, nukkye, Scr0b, szejn  |
|           12 |     1629 | 2026-02-09 | Metizport            | L   | 0.970      | -            | -                | -                | -         |   -10.83 | anber, myltsi, nukkye, Scr0b, szejn  |
|           11 |     2438 | 2026-01-15 | Bebop                | L   | 0.804      | -            | -                | -                | -         |   -16.65 | anber, nopzy, nukkye, Scr0b, szejn   |
|           10 |     2471 | 2026-01-13 | Bushido Wildcats     | W   | 0.791      | 0.333        | -                | 0.241 (0.064)    | -         |     7.50 | anber, nopzy, nukkye, Scr0b, szejn   |
|            9 |     2482 | 2026-01-12 | Lilmix               | W   | 0.785      | 0.333        | 0.009 (0.002)    | 0.273 (0.071)    | -         |    12.60 | anber, nopzy, nukkye, Scr0b, szejn   |
|            8 |     2513 | 2026-01-08 | MANA eSports         | L   | 0.757      | -            | -                | -                | -         |   -16.43 | anber, nopzy, nukkye, Scr0b, szejn   |
|            7 |     2519 | 2026-01-05 | MOUZ NXT             | L   | 0.738      | -            | -                | -                | -         |    -5.07 | anber, nopzy, nukkye, Scr0b, szejn   |
|            6 |     2521 | 2026-01-05 | Hypewrld             | W   | 0.738      | 0.314        | 0.003 (0.001)    | 0.212 (0.049)    | 1 (0.738) |    10.82 | anber, nopzy, nukkye, Scr0b, szejn   |
|            5 |     2528 | 2026-01-04 | CSDIILIT             | L   | 0.733      | -            | -                | -                | -         |   -19.00 | anber, nopzy, nukkye, Scr0b, szejn   |
|            4 |     2535 | 2026-01-04 | SemperFi Esports     | W   | 0.733      | 0.314        | 0.018 (0.004)    | 0.332 (0.076)    | 1 (0.733) |    17.23 | anber, nopzy, nukkye, Scr0b, szejn   |
|            3 |     2536 | 2026-01-04 | MOUZ NXT             | W   | 0.733      | 0.314        | 0.043 (0.010)    | 1.000 (0.230)    | 1 (0.733) |    18.23 | anber, nopzy, nukkye, Scr0b, szejn   |
|            2 |     2539 | 2026-01-04 | Hypewrld             | W   | 0.732      | 0.314        | 0.003 (0.001)    | -                | 1 (0.732) |    11.14 | anber, nopzy, nukkye, Scr0b, szejn   |
|            1 |     2544 | 2026-01-04 | EC BANGA             | W   | 0.732      | 0.314        | 0.004 (0.001)    | -                | 1 (0.732) |     8.54 | anber, nopzy, nukkye, Scr0b, szejn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,476.99)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.738 | $2,000.00      | $1,476.99       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
