### Roster Details<br />
Team Name: OLDBOYS PL<br />
Roster: Goofy, MICHU, rallen, ToM223, tudsoN<br />
Global Rank: [224](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [154]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  674.7<br />
<br />
Final Rank Value (674.7) = Starting Rank Value (634.9) + Head To Head Adjustments (39.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.230[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.9
- 400 + ( ( 0.123 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 634.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2171 | 2026-06-14 | Arch          | L   | 0.632      | -            | -                | -                | -         |   -11.74 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           13 |     2252 | 2026-06-12 | DONSTU        | W   | 0.619      | 0.143        | 0.004 (0.000)    | 0.451 (0.040)    | 0 (0.000) |    12.72 | Goofy, gwizdakk, MICHU, rallen, tudsoN |
|           12 |     2305 | 2026-06-10 | Falcons Force | W   | 0.605      | 0.143        | 0.000 (0.000)    | 0.222 (0.019)    | 0 (0.000) |    10.65 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|           11 |     2338 | 2026-06-08 | ROUNDS        | W   | 0.592      | 0.143        | 0.000 (0.000)    | 0.222 (0.019)    | 0 (0.000) |     9.72 | darko, gwizdakk, MICHU, ToM223, tudsoN |
|           10 |     2390 | 2026-06-06 | bankaPEPSI    | W   | 0.578      | 0.143        | 0.000 (0.000)    | 0.040 (0.003)    | 0 (0.000) |     8.12 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            9 |     2507 | 2026-06-01 | Arch          | L   | 0.546      | -            | -                | -                | -         |    -9.70 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            8 |     3725 | 2026-04-27 | BIG Academy   | L   | 0.312      | -            | -                | -                | -         |    -5.70 | darko, Goofy, rallen, ToM223, tudsoN   |
|            7 |     3777 | 2026-04-26 | Rune Eaters   | W   | 0.305      | 0.384        | 0.024 (0.003)    | 0.769 (0.090)    | 0 (0.000) |     9.07 | darko, Goofy, rallen, ToM223, tudsoN   |
|            6 |     3868 | 2026-04-25 | DONSTU        | W   | 0.298      | 0.384        | 0.004 (0.000)    | 0.451 (0.052)    | 0 (0.000) |     6.86 | darko, Goofy, rallen, ToM223, tudsoN   |
|            5 |     3923 | 2026-04-24 | rottweilers   | W   | 0.291      | 0.384        | 0.000 (0.000)    | 0.020 (0.002)    | 0 (0.000) |     2.93 | darko, Goofy, rallen, ToM223, tudsoN   |
|            4 |     3949 | 2026-04-23 | Lavked        | L   | 0.285      | -            | -                | -                | -         |    -1.78 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            3 |     3979 | 2026-04-22 | MASONIC       | W   | 0.279      | 0.384        | 0.006 (0.001)    | 0.208 (0.022)    | 0 (0.000) |     7.11 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            2 |     5026 | 2026-03-28 | PsychoFace    | L   | 0.113      | -            | -                | -                | -         |    -0.55 | Goofy, MICHU, rallen, ToM223, tudsoN   |
|            1 |     5110 | 2026-03-27 | Enjoy         | W   | 0.106      | 0.400        | 0.004 (0.000)    | 0.535 (0.023)    | 0 (0.000) |     2.16 | Goofy, MICHU, rallen, ToM223, tudsoN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($298.30)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.119 | $2,500.00      | $298.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
