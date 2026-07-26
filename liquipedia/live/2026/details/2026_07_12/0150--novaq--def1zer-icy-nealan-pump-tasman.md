### Roster Details<br />
Team Name: NOVAQ<br />
Roster: def1zer, ICY, neaLaN, Pump, tasman<br />
Global Rank: [150](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [103]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  838.2<br />
<br />
Final Rank Value (838.2) = Starting Rank Value (824.2) + Head To Head Adjustments (14.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.305[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.085[<sup>2</sup>](#table1)
- LAN Wins: 0.238[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 824.2
- 400 + ( ( 0.224 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 824.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.197
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      279 | 2026-06-25 | Rune Eaters Esports     | L   | 1.000      | -            | -                | -                | -         |   -12.96 | AdreN, kAlash, neaLaN, Pump, tasman  |
|           27 |      285 | 2026-06-25 | The Huns Esports        | L   | 1.000      | -            | -                | -                | -         |    -7.03 | AdreN, kAlash, neaLaN, Pump, tasman  |
|           26 |      293 | 2026-06-24 | Rune Eaters Esports     | W   | 1.000      | 0.324        | 0.010 (0.003)    | 0.678 (0.220)    | 1 (1.000) |    18.34 | AdreN, kAlash, neaLaN, Pump, tasman  |
|           25 |     2919 | 2026-04-02 | JUMBO TEAM              | L   | 0.523      | -            | -                | -                | -         |   -14.05 | def1zer, ICY, neaLaN, Pump, tasman   |
|           24 |     2931 | 2026-04-01 | K27                     | L   | 0.522      | -            | -                | -                | -         |    -1.46 | def1zer, ICY, neaLaN, Pump, tasman   |
|           23 |     3977 | 2026-03-15 | Ex-MANA eSports         | L   | 0.405      | -            | -                | -                | -         |    -7.61 | def1zer, ICY, neaLaN, Pump, tasman   |
|           22 |     4001 | 2026-03-15 | OMEGA                   | L   | 0.403      | -            | -                | -                | -         |    -3.38 | def1zer, ICY, neaLaN, Pump, tasman   |
|           21 |     4017 | 2026-03-14 | Illwill                 | L   | 0.398      | -            | -                | -                | -         |    -4.77 | def1zer, ICY, neaLaN, Pump, tasman   |
|           20 |     4120 | 2026-03-12 | HAVU                    | W   | 0.385      | 0.384        | -                | 0.373 (0.055)    | 0 (0.000) |     4.81 | def1zer, ICY, neaLaN, Pump, tasman   |
|           19 |     4179 | 2026-03-11 | Aimclub (Romanian team) | W   | 0.376      | 0.384        | 0.001 (0.000)    | -                | 0 (0.000) |     6.09 | def1zer, ICY, neaLaN, Pump, tasman   |
|           18 |     4213 | 2026-03-10 | Hashiras                | W   | 0.371      | 0.384        | 0.001 (0.000)    | 0.487 (0.069)    | 0 (0.000) |     3.94 | def1zer, ICY, neaLaN, Pump, tasman   |
|           17 |     4246 | 2026-03-09 | Metizport               | L   | 0.365      | -            | -                | -                | -         |    -2.36 | def1zer, ICY, neaLaN, Pump, tasman   |
|           16 |     4254 | 2026-03-09 | Aimclub (Romanian team) | L   | 0.365      | -            | -                | -                | -         |    -5.57 | def1zer, ICY, neaLaN, Pump, tasman   |
|           15 |     4410 | 2026-03-07 | Lazer Cats              | W   | 0.350      | 0.435        | 0.003 (0.000)    | -                | 0 (0.000) |     4.20 | def1zer, ICY, neaLaN, Pump, tasman   |
|           14 |     4447 | 2026-03-06 | ENCE                    | W   | 0.343      | 0.384        | 0.010 (0.001)    | 0.485 (0.064)    | -         |     4.36 | def1zer, ICY, neaLaN, Pump, tasman   |
|           13 |     4475 | 2026-03-05 | Ex-Zero Tenacity        | W   | 0.338      | 0.384        | 0.002 (0.000)    | 0.866 (0.113)    | -         |     4.50 | def1zer, ICY, neaLaN, Pump, tasman   |
|           12 |     4509 | 2026-03-05 | Oxuji Esports           | W   | 0.336      | 0.435        | 0.006 (0.001)    | 0.763 (0.111)    | -         |     8.89 | def1zer, ICY, neaLaN, Pump, tasman   |
|           11 |     4579 | 2026-03-03 | OMEGA                   | L   | 0.325      | -            | -                | -                | -         |    -2.31 | def1zer, ICY, neaLaN, Pump, tasman   |
|           10 |     4624 | 2026-03-02 | HEROIC Academy          | W   | 0.318      | 0.384        | 0.003 (0.000)    | 0.409 (0.050)    | -         |     4.67 | def1zer, ICY, neaLaN, Pump, tasman   |
|            9 |     4650 | 2026-03-02 | Acend                   | L   | 0.316      | -            | -                | -                | -         |    -0.41 | def1zer, ICY, neaLaN, Pump, tasman   |
|            8 |     4775 | 2026-02-27 | OMEGA                   | W   | 0.296      | 0.351        | 0.016 (0.002)    | 0.457 (0.048)    | 1 (0.296) |     7.54 | def1zer, ICY, neaLaN, Pump, tasman   |
|            7 |     4787 | 2026-02-26 | Donstu Esports          | W   | 0.295      | 0.351        | -                | 0.559 (0.058)    | 1 (0.295) |     2.91 | def1zer, ICY, neaLaN, Pump, tasman   |
|            6 |     4829 | 2026-02-26 | Rune Eaters Esports     | W   | 0.291      | -            | -                | -                | 1 (0.291) |     2.65 | def1zer, ICY, neaLaN, Pump, tasman   |
|            5 |     5031 | 2026-02-22 | Nemiga Gaming           | W   | 0.264      | 0.333        | 0.108 (0.010)    | 0.746 (0.066)    | 1 (0.264) |     7.11 | def1zer, ICY, neaLaN, Pump, tasman   |
|            4 |     5056 | 2026-02-22 | Team Nemesis            | L   | 0.263      | -            | -                | -                | -         |    -0.45 | def1zer, ICY, neaLaN, Pump, tasman   |
|            3 |     6050 | 2026-01-27 | Rune Eaters Esports     | L   | 0.091      | -            | -                | -                | -         |    -2.04 | def1zer, k4zmo, neaLaN, Pump, tasman |
|            2 |     6059 | 2026-01-27 | Altay Esports           | W   | 0.090      | -            | -                | -                | 1 (0.090) |     0.41 | def1zer, k4zmo, neaLaN, Pump, tasman |
|            1 |     6064 | 2026-01-27 | Rune Eaters Esports     | L   | 0.089      | -            | -                | -                | -         |    -2.01 | def1zer, k4zmo, neaLaN, Pump, tasman |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,805.21)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.405 | $500.00        | $202.50         |
| 2026-03-15 |      0.403 | $511.00        | $206.10         |
| 2026-02-27 |      0.296 | $7,016.00      | $2,079.47       |
| 2026-02-22 |      0.264 | $1,200.00      | $317.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
