### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, nukkye, Scr0b, szejn<br />
Global Rank: [135](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [95]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  906.3<br />
<br />
Final Rank Value (906.3) = Starting Rank Value (884.2) + Head To Head Adjustments (22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.117[<sup>2</sup>](#table1)
- LAN Wins: 0.320[<sup>2</sup>](#table1)

The average of these factors is 0.249<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 884.2
- 400 + ( ( 0.249 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 884.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.267
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |     1348 | 2026-02-28 | OMEGA                | L   | 1.000      | -            | -                | -                | -         |    -6.42 | anber, aNdu, nukkye, rendysky, szejn |
|           24 |     1563 | 2026-02-24 | QWENTRY              | L   | 0.976      | -            | -                | -                | -         |   -11.48 | anber, aNdu, nukkye, rendysky, szejn |
|           23 |     1790 | 2026-02-19 | Passion UA           | L   | 0.945      | -            | -                | -                | -         |    -5.80 | anber, myltsi, nukkye, Scr0b, szejn  |
|           22 |     1792 | 2026-02-19 | HOTU                 | L   | 0.945      | -            | -                | -                | -         |    -2.64 | anber, myltsi, nukkye, Scr0b, szejn  |
|           21 |     1909 | 2026-02-17 | FC Famalicão Esports | L   | 0.932      | -            | -                | -                | -         |   -14.10 | anber, nukkye, Scr0b, Shara, szejn   |
|           20 |     1968 | 2026-02-16 | SIXSEVEN             | W   | 0.924      | 0.384        | 0.009 (0.003)    | 0.235 (0.084)    | 0 (0.000) |    10.26 | anber, nukkye, Scr0b, Shara, szejn   |
|           19 |     1972 | 2026-02-16 | Phantom Esports      | L   | 0.923      | -            | -                | -                | -         |    -6.42 | anber, Dytor, myltsi, nukkye, szejn  |
|           18 |     2027 | 2026-02-15 | ALLINNERS            | W   | 0.917      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |    10.47 | anber, nukkye, Scr0b, Shara, szejn   |
|           17 |     2063 | 2026-02-14 | KOLESIE              | L   | 0.912      | -            | -                | -                | -         |    -4.93 | anber, nukkye, Scr0b, Shara, szejn   |
|           16 |     2077 | 2026-02-14 | Ex-Zero Tenacity     | W   | 0.911      | 0.435        | -                | 0.545 (0.216)    | 0 (0.000) |     7.94 | anber, Dytor, myltsi, nukkye, szejn  |
|           15 |     2124 | 2026-02-13 | FUZOS                | W   | 0.905      | 0.384        | 0.005 (0.002)    | 0.449 (0.156)    | 0 (0.000) |    13.35 | anber, nukkye, Scr0b, Shara, szejn   |
|           14 |     2196 | 2026-02-12 | GenOne               | W   | 0.896      | 0.435        | 0.017 (0.007)    | 0.511 (0.199)    | 0 (0.000) |    19.51 | anber, Dytor, myltsi, nukkye, szejn  |
|           13 |     2257 | 2026-02-10 | Leo Team             | L   | 0.884      | -            | -                | -                | -         |   -14.46 | anber, myltsi, nukkye, Scr0b, szejn  |
|           12 |     2286 | 2026-02-09 | Metizport            | L   | 0.876      | -            | -                | -                | -         |    -9.43 | anber, myltsi, nukkye, Scr0b, szejn  |
|           11 |     3095 | 2026-01-15 | Bebop                | L   | 0.709      | -            | -                | -                | -         |   -13.32 | anber, nopzy, nukkye, Scr0b, szejn   |
|           10 |     3128 | 2026-01-13 | Bushido Wildcats     | W   | 0.697      | 0.333        | 0.001 (0.000)    | 0.247 (0.057)    | -         |     7.28 | anber, nopzy, nukkye, Scr0b, szejn   |
|            9 |     3139 | 2026-01-12 | Lilmix               | W   | 0.690      | 0.333        | 0.007 (0.002)    | 0.275 (0.063)    | -         |    11.59 | anber, nopzy, nukkye, Scr0b, szejn   |
|            8 |     3170 | 2026-01-08 | MANA eSports         | L   | 0.662      | -            | -                | -                | -         |   -13.57 | anber, nopzy, nukkye, Scr0b, szejn   |
|            7 |     3176 | 2026-01-05 | MOUZ NXT             | L   | 0.644      | -            | -                | -                | -         |    -3.85 | anber, nopzy, nukkye, Scr0b, szejn   |
|            6 |     3178 | 2026-01-05 | Hypewrld             | W   | 0.643      | 0.314        | 0.004 (0.001)    | 0.275 (0.056)    | 1 (0.643) |    13.28 | anber, nopzy, nukkye, Scr0b, szejn   |
|            5 |     3185 | 2026-01-04 | CSDIILIT             | L   | 0.639      | -            | -                | -                | -         |   -15.61 | anber, nopzy, nukkye, Scr0b, szejn   |
|            4 |     3192 | 2026-01-04 | SemperFi Esports     | W   | 0.638      | 0.314        | 0.022 (0.004)    | 0.440 (0.088)    | 1 (0.638) |    16.72 | anber, nopzy, nukkye, Scr0b, szejn   |
|            3 |     3193 | 2026-01-04 | MOUZ NXT             | W   | 0.638      | 0.314        | 0.036 (0.007)    | 1.000 (0.200)    | 1 (0.638) |    16.61 | anber, nopzy, nukkye, Scr0b, szejn   |
|            2 |     3196 | 2026-01-04 | Hypewrld             | W   | 0.638      | 0.314        | 0.004 (0.001)    | 0.275 (0.055)    | 1 (0.638) |    14.02 | anber, nopzy, nukkye, Scr0b, szejn   |
|            1 |     3201 | 2026-01-04 | EC BANGA             | W   | 0.637      | -            | -                | -                | 1 (0.637) |     3.12 | anber, nopzy, nukkye, Scr0b, szejn   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,287.78)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.644 | $2,000.00      | $1,287.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
