### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, nukkye, Scr0b, szejn<br />
Global Rank: [121](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [85]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  939.6<br />
<br />
Final Rank Value (939.6) = Starting Rank Value (923.0) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.288[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.343[<sup>2</sup>](#table1)

The average of these factors is 0.262<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 923.0
- 400 + ( ( 0.262 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 923.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.314
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      866 | 2026-02-28 | OMEGA                | L   | 1.000      | -            | -                | -                | -         |    -6.10 | anber, aNdu, nukkye, rendysky, szejn |
|           24 |     1081 | 2026-02-24 | QWENTRY              | L   | 1.000      | -            | -                | -                | -         |   -12.88 | anber, aNdu, nukkye, rendysky, szejn |
|           23 |     1308 | 2026-02-19 | Passion UA           | L   | 0.992      | -            | -                | -                | -         |    -5.28 | anber, myltsi, nukkye, Scr0b, szejn  |
|           22 |     1310 | 2026-02-19 | HOTU                 | L   | 0.992      | -            | -                | -                | -         |    -2.38 | anber, myltsi, nukkye, Scr0b, szejn  |
|           21 |     1427 | 2026-02-17 | FC Famalicão Esports | L   | 0.978      | -            | -                | -                | -         |   -14.96 | anber, nukkye, Scr0b, Shara, szejn   |
|           20 |     1486 | 2026-02-16 | SIXSEVEN             | W   | 0.971      | 0.384        | 0.012 (0.004)    | 0.301 (0.112)    | 0 (0.000) |    11.45 | anber, nukkye, Scr0b, Shara, szejn   |
|           19 |     1490 | 2026-02-16 | Phantom Esports      | L   | 0.970      | -            | -                | -                | -         |   -10.13 | anber, Dytor, myltsi, nukkye, szejn  |
|           18 |     1545 | 2026-02-15 | ALLINNERS            | W   | 0.964      | 0.384        | 0.005 (0.002)    | 0.138 (0.051)    | 0 (0.000) |    10.98 | anber, nukkye, Scr0b, Shara, szejn   |
|           17 |     1581 | 2026-02-14 | KOLESIE              | L   | 0.958      | -            | -                | -                | -         |    -4.87 | anber, nukkye, Scr0b, Shara, szejn   |
|           16 |     1595 | 2026-02-14 | Ex-Zero Tenacity     | W   | 0.957      | 0.435        | -                | 0.483 (0.201)    | 0 (0.000) |     8.12 | anber, Dytor, myltsi, nukkye, szejn  |
|           15 |     1642 | 2026-02-13 | FUZOS                | W   | 0.952      | 0.384        | 0.006 (0.002)    | 0.482 (0.176)    | 0 (0.000) |    13.86 | anber, nukkye, Scr0b, Shara, szejn   |
|           14 |     1714 | 2026-02-12 | GenOne               | W   | 0.943      | 0.435        | 0.022 (0.009)    | 0.610 (0.250)    | 0 (0.000) |    20.80 | anber, Dytor, myltsi, nukkye, szejn  |
|           13 |     1775 | 2026-02-10 | Leo Team             | L   | 0.931      | -            | -                | -                | -         |   -15.02 | anber, myltsi, nukkye, Scr0b, szejn  |
|           12 |     1804 | 2026-02-09 | Metizport            | L   | 0.922      | -            | -                | -                | -         |   -10.04 | anber, myltsi, nukkye, Scr0b, szejn  |
|           11 |     2613 | 2026-01-15 | Bebop                | L   | 0.756      | -            | -                | -                | -         |   -14.23 | anber, nopzy, nukkye, Scr0b, szejn   |
|           10 |     2646 | 2026-01-13 | Bushido Wildcats     | W   | 0.743      | 0.333        | -                | 0.242 (0.060)    | -         |     7.39 | anber, nopzy, nukkye, Scr0b, szejn   |
|            9 |     2657 | 2026-01-12 | Lilmix               | W   | 0.737      | 0.333        | 0.009 (0.002)    | 0.278 (0.068)    | -         |    12.30 | anber, nopzy, nukkye, Scr0b, szejn   |
|            8 |     2688 | 2026-01-08 | MANA eSports         | L   | 0.709      | -            | -                | -                | -         |   -15.15 | anber, nopzy, nukkye, Scr0b, szejn   |
|            7 |     2694 | 2026-01-05 | MOUZ NXT             | L   | 0.691      | -            | -                | -                | -         |    -4.36 | anber, nopzy, nukkye, Scr0b, szejn   |
|            6 |     2696 | 2026-01-05 | Hypewrld             | W   | 0.690      | 0.314        | 0.003 (0.001)    | 0.212 (0.046)    | 1 (0.690) |    10.23 | anber, nopzy, nukkye, Scr0b, szejn   |
|            5 |     2703 | 2026-01-04 | CSDIILIT             | L   | 0.685      | -            | -                | -                | -         |   -17.34 | anber, nopzy, nukkye, Scr0b, szejn   |
|            4 |     2710 | 2026-01-04 | SemperFi Esports     | W   | 0.685      | 0.314        | 0.024 (0.005)    | 0.365 (0.078)    | 1 (0.685) |    17.82 | anber, nopzy, nukkye, Scr0b, szejn   |
|            3 |     2711 | 2026-01-04 | MOUZ NXT             | W   | 0.685      | 0.314        | 0.044 (0.010)    | 1.000 (0.215)    | 1 (0.685) |    17.50 | anber, nopzy, nukkye, Scr0b, szejn   |
|            2 |     2714 | 2026-01-04 | Hypewrld             | W   | 0.685      | 0.314        | 0.003 (0.001)    | -                | 1 (0.685) |    10.52 | anber, nopzy, nukkye, Scr0b, szejn   |
|            1 |     2719 | 2026-01-04 | EC BANGA             | W   | 0.684      | 0.314        | 0.004 (0.001)    | -                | 1 (0.684) |     8.38 | anber, nopzy, nukkye, Scr0b, szejn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,381.39)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.691 | $2,000.00      | $1,381.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
