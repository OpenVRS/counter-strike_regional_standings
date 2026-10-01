### Roster Details<br />
Team Name: OLDBOYS PL<br />
Roster: Goofy, MICHU, rallen, ToM223, tudsoN<br />
Global Rank: [203](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [142]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  747.3<br />
<br />
Final Rank Value (747.3) = Starting Rank Value (681.4) + Head To Head Adjustments (65.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 681.4
- 400 + ( ( 0.145 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 681.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      964 | 2026-06-14 | Arch              | L   | 0.868      | -            | -                | -                | -         |   -17.36 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           16 |     1045 | 2026-06-12 | DONSTU            | W   | 0.854      | 0.143        | 0.002 (0.000)    | 0.678 (0.083)    | 0 (0.000) |    14.48 | Goofy, gwizdakk, MICHU, rallen, tudsoN |
|           15 |     1098 | 2026-06-10 | Falcons Force     | W   | 0.841      | 0.143        | 0.001 (0.000)    | 0.258 (0.031)    | 0 (0.000) |    14.10 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           14 |     1131 | 2026-06-08 | ROUNDS            | W   | 0.827      | 0.143        | 0.001 (0.000)    | 0.280 (0.033)    | 0 (0.000) |    12.38 | darko, gwizdakk, MICHU, ToM223, tudsoN |
|           13 |     1183 | 2026-06-06 | bankaPEPSI        | W   | 0.814      | 0.143        | 0.001 (0.000)    | 0.114 (0.013)    | 0 (0.000) |    10.74 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           12 |     1300 | 2026-06-01 | Arch              | L   | 0.781      | -            | -                | -                | -         |   -15.00 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           11 |     2518 | 2026-04-27 | BIG Academy       | L   | 0.547      | -            | -                | -                | -         |   -10.24 | darko, Goofy, rallen, ToM223, tudsoN   |
|           10 |     2570 | 2026-04-26 | Rune Eaters       | W   | 0.541      | 0.384        | 0.022 (0.005)    | 0.895 (0.186)    | 0 (0.000) |    15.40 | darko, Goofy, rallen, ToM223, tudsoN   |
|            9 |     2661 | 2026-04-25 | DONSTU            | W   | 0.533      | 0.384        | 0.002 (0.000)    | 0.678 (0.139)    | 0 (0.000) |    11.12 | darko, Goofy, rallen, ToM223, tudsoN   |
|            8 |     2716 | 2026-04-24 | rottweilers       | W   | 0.526      | 0.384        | -                | 0.101 (0.021)    | 0 (0.000) |     5.18 | darko, Goofy, rallen, ToM223, tudsoN   |
|            7 |     2742 | 2026-04-23 | Lavked            | L   | 0.520      | -            | -                | -                | -         |    -3.84 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            6 |     2772 | 2026-04-22 | MASONIC           | W   | 0.514      | 0.384        | 0.010 (0.002)    | 0.418 (0.082)    | 0 (0.000) |    13.46 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            5 |     3819 | 2026-03-28 | PsychoFace        | L   | 0.348      | -            | -                | -                | -         |    -1.13 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            4 |     3903 | 2026-03-27 | Enjoy             | W   | 0.341      | 0.400        | 0.006 (0.001)    | 0.495 (0.067)    | 0 (0.000) |     6.21 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            3 |     4790 | 2026-03-09 | DONSTU            | W   | 0.221      | 0.143        | 0.002 (0.000)    | 0.678 (0.021)    | 0 (0.000) |     4.74 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            2 |     4863 | 2026-03-08 | Aurora Young Blud | W   | 0.214      | -            | -                | -                | -         |     2.45 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            1 |     5010 | 2026-03-05 | Fire Flux         | W   | 0.194      | 0.143        | 0.014 (0.000)    | -                | -         |     3.17 | Goofy, MICHU, rallen, ToM223, tudsoN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($886.45)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.355 | $2,500.00      | $886.45         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
