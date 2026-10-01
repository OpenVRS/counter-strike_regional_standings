### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, marekiew, SLIGHT, WUMBO<br />
Global Rank: [204](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [41]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  746.8<br />
<br />
Final Rank Value (746.8) = Starting Rank Value (750.9) + Head To Head Adjustments (-4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.163[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 750.9
- 400 + ( ( 0.181 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 750.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     2372 | 2026-04-30 | ex-Aether      | L   | 0.569      | -            | -                | -                | -         |   -10.67 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           28 |     2499 | 2026-04-27 | Fisher College | L   | 0.549      | -            | -                | -                | -         |    -4.00 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           27 |     2549 | 2026-04-26 | Zomblers       | L   | 0.542      | -            | -                | -                | -         |   -10.29 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           26 |     3022 | 2026-04-09 | Aether         | W   | 0.429      | 0.333        | 0.002 (0.000)    | 0.121 (0.017)    | 0 (0.000) |     5.54 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           25 |     3078 | 2026-04-07 | LAG            | W   | 0.415      | 0.333        | 0.014 (0.002)    | 0.434 (0.060)    | 0 (0.000) |     9.66 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           24 |     3208 | 2026-04-04 | LAG            | L   | 0.396      | -            | -                | -                | -         |    -3.34 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           23 |     3213 | 2026-04-04 | Villainous     | W   | 0.395      | 0.333        | 0.005 (0.001)    | 0.233 (0.031)    | 0 (0.000) |     6.57 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           22 |     3291 | 2026-04-03 | FlyQuest RED   | W   | 0.389      | 0.363        | 0.000 (0.000)    | -                | 0 (0.000) |     2.18 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           21 |     3370 | 2026-04-02 | Fisher College | L   | 0.383      | -            | -                | -                | -         |    -3.00 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           20 |     3380 | 2026-04-02 | TSG            | L   | 0.382      | -            | -                | -                | -         |    -9.91 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           19 |     3385 | 2026-04-02 | regain         | W   | 0.382      | 0.769        | 0.014 (0.004)    | 0.508 (0.149)    | 0 (0.000) |     5.58 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           18 |     3473 | 2026-04-01 | LAG            | L   | 0.376      | -            | -                | -                | -         |    -3.11 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           17 |     3561 | 2026-03-31 | 900FPSvsECO    | W   | 0.370      | 0.769        | 0.001 (0.000)    | 0.099 (0.028)    | 0 (0.000) |     4.14 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           16 |     3566 | 2026-03-31 | Club 333       | L   | 0.369      | -            | -                | -                | -         |    -7.45 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           15 |     3727 | 2026-03-29 | LAG            | W   | 0.355      | 0.354        | 0.014 (0.002)    | 0.434 (0.055)    | 1 (0.355) |     8.46 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           14 |     3765 | 2026-03-29 | Voca           | L   | 0.353      | -            | -                | -                | -         |    -2.06 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           13 |     3806 | 2026-03-28 | Wanted Goons   | W   | 0.349      | 0.354        | 0.000 (0.000)    | 0.160 (0.020)    | 1 (0.349) |     4.69 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           12 |     3844 | 2026-03-28 | NuTorious      | W   | 0.347      | -            | -                | -                | 1 (0.347) |     2.68 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           11 |     3864 | 2026-03-28 | Demolition     | W   | 0.346      | -            | -                | -                | 1 (0.346) |     2.17 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           10 |     4085 | 2026-03-23 | Incognito      | W   | 0.316      | 0.624        | -                | 0.111 (0.022)    | -         |     2.14 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            9 |     5233 | 2026-02-28 | LAG            | L   | 0.163      | -            | -                | -                | -         |    -2.87 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            8 |     5236 | 2026-02-28 | Fisher College | W   | 0.163      | 0.769        | 0.036 (0.005)    | 0.323 (0.040)    | -         |     3.97 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            7 |     5280 | 2026-02-27 | Wildcard       | L   | 0.156      | -            | -                | -                | -         |    -0.16 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            6 |     5335 | 2026-02-26 | Aether         | W   | 0.149      | 0.769        | 0.002 (0.000)    | 0.121 (0.014)    | -         |     1.84 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            5 |     5546 | 2026-02-22 | BC.Game        | L   | 0.121      | -            | -                | -                | -         |    -1.71 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            4 |     5560 | 2026-02-22 | MASONIC        | L   | 0.120      | -            | -                | -                | -         |    -0.53 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            3 |     5568 | 2026-02-22 | illwill        | L   | 0.120      | -            | -                | -                | -         |    -1.78 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            2 |     5581 | 2026-02-22 | Sashi          | L   | 0.119      | -            | -                | -                | -         |    -0.40 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |
|            1 |     5595 | 2026-02-22 | 9INE           | L   | 0.119      | -            | -                | -                | -         |    -2.34 | ben1337, Bwills, FaNg, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($694.32)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.356 | $1,950.00      | $694.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
