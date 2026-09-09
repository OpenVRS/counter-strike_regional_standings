### Roster Details<br />
Team Name: ARCRED<br />
Roster: DSSj, Get_Jeka, Raijin, Ryujin, synyx<br />
Global Rank: [114](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [87]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  877.6<br />
<br />
Final Rank Value (877.6) = Starting Rank Value (841.5) + Head To Head Adjustments (36.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.069[<sup>2</sup>](#table1)
- LAN Wins: 0.243[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 841.5
- 400 + ( ( 0.232 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 841.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1567 | 2026-07-20 | Color             | L   | 0.865      | -            | -                | -                | -         |    -8.66 | DSSj, Raijin, Ryujin, shg, synyx      |
|           17 |     1671 | 2026-07-17 | The Last Resort   | W   | 0.843      | 0.371        | 0.011 (0.003)    | 0.441 (0.138)    | 0 (0.000) |    15.24 | DSSj, Raijin, Ryujin, shg, synyx      |
|           16 |     2343 | 2026-06-10 | Acend             | L   | 0.597      | -            | -                | -                | -         |    -1.88 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           15 |     2394 | 2026-06-07 | Walczaki          | L   | 0.579      | -            | -                | -                | -         |    -4.26 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           14 |     2426 | 2026-06-06 | ASTRAL            | W   | 0.572      | 0.435        | 0.010 (0.002)    | 0.765 (0.190)    | 0 (0.000) |    12.97 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           13 |     2508 | 2026-06-03 | INOX Division     | L   | 0.551      | -            | -                | -                | -         |    -5.77 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           12 |     2674 | 2026-05-28 | Virtus.pro        | L   | 0.514      | -            | -                | -                | -         |    -1.06 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           11 |     2706 | 2026-05-28 | Nuclear TigeRES   | W   | 0.511      | 0.396        | 0.105 (0.021)    | 0.858 (0.174)    | 1 (0.511) |    12.94 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           10 |     2737 | 2026-05-27 | CYBERSHOKE        | W   | 0.505      | 0.396        | 0.006 (0.001)    | 0.244 (0.049)    | 1 (0.505) |     8.22 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            9 |     2784 | 2026-05-26 | Aurora Young Blud | W   | 0.498      | 0.396        | 0.000 (0.000)    | 0.031 (0.006)    | 1 (0.498) |     2.29 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            8 |     2791 | 2026-05-26 | 163NEWS           | W   | 0.496      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.496) |     1.18 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            7 |     4121 | 2026-04-16 | Metizport         | L   | 0.231      | -            | -                | -                | -         |    -1.64 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            6 |     4160 | 2026-04-14 | Lavked            | W   | 0.217      | 0.371        | 0.009 (0.001)    | 0.826 (0.066)    | 0 (0.000) |     3.98 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            5 |     4198 | 2026-04-12 | MOUZ NXT          | W   | 0.204      | 0.371        | 0.000 (0.000)    | 0.099 (0.008)    | 0 (0.000) |     1.56 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            4 |     4304 | 2026-04-08 | EAC               | W   | 0.178      | 0.371        | 0.024 (0.002)    | 0.772 (0.051)    | 0 (0.000) |     4.83 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            3 |     4529 | 2026-04-03 | WW                | L   | 0.148      | -            | -                | -                | -         |    -0.87 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            2 |     4541 | 2026-04-03 | HOTU              | L   | 0.147      | -            | -                | -                | -         |    -3.54 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            1 |     4566 | 2026-04-03 | Younglings        | W   | 0.146      | 0.435        | 0.001 (0.000)    | 0.078 (0.005)    | 1 (0.146) |     0.65 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,752.33)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      0.514 | $7,000.00      | $3,596.73       |
| 2026-04-16 |      0.231 | $5,000.00      | $1,155.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
