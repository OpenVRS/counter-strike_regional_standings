### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, myltsi, nukkye, Scr0b, szejn<br />
Global Rank: [123](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [91]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  898.3<br />
<br />
Final Rank Value (898.3) = Starting Rank Value (924.9) + Head To Head Adjustments (-26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.287[<sup>2</sup>](#table1)
- Opponent Network: 0.111[<sup>2</sup>](#table1)
- LAN Wins: 0.392[<sup>2</sup>](#table1)

The average of these factors is 0.273<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 924.9
- 400 + ( ( 0.273 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 924.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.316
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      632 | 2026-02-19 | Passion UA           | L   | 1.000      | -            | -                | -                | -         |    -3.52 | anber, myltsi, nukkye, Scr0b, szejn    |
|           32 |      634 | 2026-02-19 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |    -1.88 | anber, myltsi, nukkye, Scr0b, szejn    |
|           31 |      737 | 2026-02-17 | FC Famalicão Esports | L   | 1.000      | -            | -                | -                | -         |   -17.22 | anber, nukkye, Scr0b, Shara, szejn     |
|           30 |      794 | 2026-02-16 | Phantom Esports      | L   | 1.000      | -            | -                | -                | -         |    -9.65 | anber, myltsi, nukkye, Scr0b, szejn    |
|           29 |      880 | 2026-02-14 | KOLESIE              | L   | 1.000      | -            | -                | -                | -         |    -5.35 | anber, nukkye, Scr0b, Shara, szejn     |
|           28 |      893 | 2026-02-14 | Ex-Zero Tenacity     | W   | 1.000      | 0.435        | 0.002 (0.001)    | 0.333 (0.145)    | 0 (0.000) |     8.40 | anber, Dytor, myltsi, nukkye, szejn    |
|           27 |      940 | 2026-02-13 | FUZOS                | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.426 (0.164)    | 0 (0.000) |    14.90 | anber, nukkye, Scr0b, Shara, szejn     |
|           26 |     1005 | 2026-02-12 | GenOne               | W   | 1.000      | 0.435        | 0.031 (0.014)    | 0.705 (0.307)    | 0 (0.000) |    23.59 | anber, Dytor, myltsi, nukkye, szejn    |
|           25 |     1063 | 2026-02-10 | Leo Team             | L   | 1.000      | -            | -                | -                | -         |   -15.85 | anber, myltsi, nukkye, Scr0b, szejn    |
|           24 |     1091 | 2026-02-09 | Metizport            | L   | 1.000      | -            | -                | -                | -         |   -12.23 | anber, myltsi, nukkye, Scr0b, szejn    |
|           23 |     1884 | 2026-01-15 | Bebop                | L   | 0.850      | -            | -                | -                | -         |   -16.33 | anber, nopzy, nukkye, Scr0b, szejn     |
|           22 |     1917 | 2026-01-13 | Bushido Wildcats     | W   | 0.838      | 0.143        | 0.002 (0.000)    | 0.244 (0.029)    | 0 (0.000) |     8.91 | anber, nopzy, nukkye, Scr0b, szejn     |
|           21 |     1927 | 2026-01-12 | Lilmix               | W   | 0.831      | 0.143        | 0.012 (0.001)    | 0.279 (0.033)    | 0 (0.000) |    14.89 | anber, nopzy, nukkye, Scr0b, szejn     |
|           20 |     1957 | 2026-01-08 | MANA eSports         | L   | 0.803      | -            | -                | -                | -         |   -16.37 | anber, nopzy, nukkye, Scr0b, szejn     |
|           19 |     1963 | 2026-01-05 | MOUZ NXT             | L   | 0.785      | -            | -                | -                | -         |    -4.42 | anber, nopzy, nukkye, Scr0b, szejn     |
|           18 |     1965 | 2026-01-05 | Hypewrld             | W   | 0.784      | 0.314        | 0.004 (0.001)    | 0.192 (0.047)    | 1 (0.784) |    10.25 | anber, nopzy, nukkye, Scr0b, szejn     |
|           17 |     1972 | 2026-01-04 | CSDIILIT             | L   | 0.780      | -            | -                | -                | -         |   -19.99 | anber, nopzy, nukkye, Scr0b, szejn     |
|           16 |     1979 | 2026-01-04 | SemperFi Esports     | W   | 0.779      | 0.314        | 0.005 (0.001)    | 0.268 (0.066)    | 1 (0.779) |    12.14 | anber, nopzy, nukkye, Scr0b, szejn     |
|           15 |     1980 | 2026-01-04 | MOUZ NXT             | W   | 0.779      | 0.314        | 0.036 (0.009)    | 1.000 (0.244)    | 1 (0.779) |    20.19 | anber, nopzy, nukkye, Scr0b, szejn     |
|           14 |     1983 | 2026-01-04 | Hypewrld             | W   | 0.779      | 0.314        | 0.004 (0.001)    | 0.192 (0.047)    | 1 (0.779) |    10.48 | anber, nopzy, nukkye, Scr0b, szejn     |
|           13 |     1988 | 2026-01-04 | EC BANGA             | W   | 0.778      | 0.314        | 0.006 (0.001)    | 0.133 (0.032)    | 1 (0.778) |    10.11 | anber, nopzy, nukkye, Scr0b, szejn     |
|           12 |     3246 | 2025-11-03 | Nuclear TigeRES      | L   | 0.366      | -            | -                | -                | -         |    -0.59 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           11 |     3442 | 2025-10-27 | MASONIC              | L   | 0.318      | -            | -                | -                | -         |    -5.34 | anber, Dengzoe, Griller, nukkye, Scr0b |
|           10 |     3479 | 2025-10-26 | NOVAQ                | L   | 0.313      | -            | -                | -                | -         |    -2.35 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            9 |     3535 | 2025-10-25 | ENCE Academy         | L   | 0.306      | -            | -                | -                | -         |    -6.11 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            8 |     3555 | 2025-10-25 | Square Sausages      | W   | 0.304      | -            | -                | -                | -         |     0.55 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            7 |     3595 | 2025-10-24 | The Glecs            | L   | 0.299      | -            | -                | -                | -         |    -8.50 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            6 |     3717 | 2025-10-19 | The Last Resort      | L   | 0.266      | -            | -                | -                | -         |    -5.20 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            5 |     3744 | 2025-10-18 | M1X                  | W   | 0.257      | -            | -                | -                | -         |     1.59 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            4 |     3764 | 2025-10-17 | The Last Resort      | L   | 0.252      | -            | -                | -                | -         |    -4.97 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            3 |     4477 | 2025-09-28 | Mousquetaires        | L   | 0.126      | -            | -                | -                | -         |    -3.60 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            2 |     4533 | 2025-09-27 | THE (Russian team)   | L   | 0.119      | -            | -                | -                | -         |    -3.42 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            1 |     4592 | 2025-09-26 | Mousquetaires        | W   | 0.111      | -            | -                | -                | -         |     0.31 | anber, Dengzoe, Griller, nukkye, Scr0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,569.77)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-05 |      0.785 | $2,000.00      | $1,569.77       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
