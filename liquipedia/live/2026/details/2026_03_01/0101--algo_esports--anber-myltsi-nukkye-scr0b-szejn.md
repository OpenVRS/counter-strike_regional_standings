### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, myltsi, nukkye, Scr0b, szejn<br />
Global Rank: [101](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [76]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  946.7<br />
<br />
Final Rank Value (946.7) = Starting Rank Value (944.1) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.303[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.136[<sup>2</sup>](#table1)
- LAN Wins: 0.417[<sup>2</sup>](#table1)

The average of these factors is 0.288<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.1
- 400 + ( ( 0.288 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 944.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.383
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      420 | 2026-02-19 | Passion UA           | L   | 1.000      | -            | -                | -                | -         |    -4.12 | anber, myltsi, nukkye, Scr0b, szejn |
|           22 |      422 | 2026-02-19 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |    -2.56 | anber, myltsi, nukkye, Scr0b, szejn |
|           21 |      539 | 2026-02-17 | FC Famalicão Esports | L   | 1.000      | -            | -                | -                | -         |   -19.06 | anber, nukkye, Scr0b, Shara, szejn  |
|           20 |      598 | 2026-02-16 | SIXSEVEN             | W   | 1.000      | 0.384        | 0.019 (0.007)    | 0.467 (0.179)    | 0 (0.000) |    13.92 | anber, nukkye, Scr0b, Shara, szejn  |
|           19 |      602 | 2026-02-16 | Phantom Esports      | L   | 1.000      | -            | -                | -                | -         |    -9.50 | anber, Dytor, myltsi, nukkye, szejn |
|           18 |      657 | 2026-02-15 | ALLINNERS            | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.174 (0.067)    | 0 (0.000) |    10.81 | anber, nukkye, Scr0b, Shara, szejn  |
|           17 |      692 | 2026-02-14 | KOLESIE              | L   | 1.000      | -            | -                | -                | -         |    -6.21 | anber, nukkye, Scr0b, Shara, szejn  |
|           16 |      705 | 2026-02-14 | Ex-Zero Tenacity     | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.210 (0.091)    | 0 (0.000) |     7.50 | anber, Dytor, myltsi, nukkye, szejn |
|           15 |      751 | 2026-02-13 | FUZOS                | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.480 (0.184)    | 0 (0.000) |    13.79 | anber, nukkye, Scr0b, Shara, szejn  |
|           14 |      823 | 2026-02-12 | GenOne               | W   | 1.000      | 0.435        | 0.030 (0.013)    | 0.692 (0.301)    | 0 (0.000) |    20.20 | anber, Dytor, myltsi, nukkye, szejn |
|           13 |      884 | 2026-02-10 | Leo Team             | L   | 1.000      | -            | -                | -                | -         |   -17.89 | anber, myltsi, nukkye, Scr0b, szejn |
|           12 |      913 | 2026-02-09 | Metizport            | L   | 1.000      | -            | -                | -                | -         |   -13.81 | anber, myltsi, nukkye, Scr0b, szejn |
|           11 |     1704 | 2026-01-15 | Bebop                | L   | 0.891      | -            | -                | -                | -         |   -18.04 | anber, nopzy, nukkye, Scr0b, szejn  |
|           10 |     1737 | 2026-01-13 | Bushido Wildcats     | W   | 0.879      | 0.333        | -                | 0.294 (0.086)    | -         |     8.18 | anber, nopzy, nukkye, Scr0b, szejn  |
|            9 |     1748 | 2026-01-12 | Lilmix               | W   | 0.872      | -            | -                | -                | -         |     7.32 | anber, nopzy, nukkye, Scr0b, szejn  |
|            8 |     1773 | 2026-01-08 | MANA eSports         | L   | 0.845      | -            | -                | -                | -         |   -18.72 | anber, nopzy, nukkye, Scr0b, szejn  |
|            7 |     1779 | 2026-01-05 | MOUZ NXT             | L   | 0.826      | -            | -                | -                | -         |    -6.39 | anber, nopzy, nukkye, Scr0b, szejn  |
|            6 |     1781 | 2026-01-05 | Hypewrld             | W   | 0.825      | 0.314        | 0.004 (0.001)    | 0.223 (0.058)    | 1 (0.825) |     9.95 | anber, nopzy, nukkye, Scr0b, szejn  |
|            5 |     1788 | 2026-01-04 | CSDIILIT             | L   | 0.821      | -            | -                | -                | -         |   -22.00 | anber, nopzy, nukkye, Scr0b, szejn  |
|            4 |     1795 | 2026-01-04 | SemperFi Esports     | W   | 0.821      | 0.314        | 0.006 (0.002)    | 0.305 (0.078)    | 1 (0.821) |    11.06 | anber, nopzy, nukkye, Scr0b, szejn  |
|            3 |     1796 | 2026-01-04 | MOUZ NXT             | W   | 0.820      | 0.314        | 0.034 (0.009)    | 1.000 (0.257)    | 1 (0.820) |    19.24 | anber, nopzy, nukkye, Scr0b, szejn  |
|            2 |     1799 | 2026-01-04 | Hypewrld             | W   | 0.820      | 0.314        | 0.004 (0.001)    | 0.223 (0.057)    | 1 (0.820) |    10.13 | anber, nopzy, nukkye, Scr0b, szejn  |
|            1 |     1804 | 2026-01-04 | EC BANGA             | W   | 0.820      | 0.314        | 0.005 (0.001)    | -                | 1 (0.820) |     8.74 | anber, nopzy, nukkye, Scr0b, szejn  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,652.50)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.826 | $2,000.00      | $1,652.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
