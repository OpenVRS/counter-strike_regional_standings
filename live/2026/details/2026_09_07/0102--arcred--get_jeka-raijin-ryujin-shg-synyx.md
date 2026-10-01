### Roster Details<br />
Team Name: ARCRED<br />
Roster: Get_Jeka, Raijin, Ryujin, shg, synyx<br />
Global Rank: [102](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [77]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  927.0<br />
<br />
Final Rank Value (927.0) = Starting Rank Value (959.2) + Head To Head Adjustments (-32.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.338[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.451[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 959.2
- 400 + ( ( 0.294 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 959.2


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
|           24 |      426 | 2026-08-27 | Endless Journey   | L   | 1.000      | -            | -                | -                | -         |   -20.30 | Get_Jeka, Raijin, Ryujin, shg, synyx  |
|           23 |     1067 | 2026-08-05 | Just Players      | L   | 0.976      | -            | -                | -                | -         |   -15.24 | Get_Jeka, Raijin, Ryujin, shg, synyx  |
|           22 |     1101 | 2026-08-03 | Butterfly         | L   | 0.965      | -            | -                | -                | -         |   -12.11 | Get_Jeka, Raijin, Ryujin, shg, synyx  |
|           21 |     1276 | 2026-07-29 | WW                | L   | 0.931      | -            | -                | -                | -         |   -10.84 | Get_Jeka, Raijin, Ryujin, shg, synyx  |
|           20 |     1352 | 2026-07-27 | CYBERSHOKE        | W   | 0.916      | 0.417        | 0.033 (0.013)    | 0.483 (0.185)    | 1 (0.916) |    14.19 | Get_Jeka, Raijin, Ryujin, shg, synyx  |
|           19 |     1356 | 2026-07-27 | flacons           | W   | 0.915      | 0.417        | 0.000 (0.000)    | 0.036 (0.014)    | 1 (0.915) |     1.47 | Get_Jeka, Raijin, Ryujin, shg, synyx  |
|           18 |     1539 | 2026-07-20 | Color             | L   | 0.870      | -            | -                | -                | -         |   -11.96 | DSSj, Raijin, Ryujin, shg, synyx      |
|           17 |     1643 | 2026-07-17 | The Last Resort   | W   | 0.849      | 0.371        | 0.011 (0.004)    | 0.444 (0.140)    | 0 (0.000) |    11.75 | DSSj, Raijin, Ryujin, shg, synyx      |
|           16 |     2315 | 2026-06-10 | Acend             | L   | 0.602      | -            | -                | -                | -         |    -3.08 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           15 |     2366 | 2026-06-07 | Walczaki          | L   | 0.584      | -            | -                | -                | -         |    -6.37 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           14 |     2398 | 2026-06-06 | ASTRAL            | W   | 0.577      | 0.435        | 0.010 (0.003)    | 0.769 (0.193)    | 0 (0.000) |    10.71 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           13 |     2480 | 2026-06-03 | INOX Division     | L   | 0.556      | -            | -                | -                | -         |    -8.26 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           12 |     2646 | 2026-05-28 | Virtus.pro        | L   | 0.519      | -            | -                | -                | -         |    -1.86 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           11 |     2678 | 2026-05-28 | Nuclear TigeRES   | W   | 0.516      | 0.396        | 0.105 (0.021)    | 0.859 (0.176)    | 1 (0.516) |    11.27 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           10 |     2709 | 2026-05-27 | CYBERSHOKE        | W   | 0.511      | 0.396        | 0.006 (0.001)    | 0.246 (0.050)    | 1 (0.511) |     5.90 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            9 |     2756 | 2026-05-26 | Aurora Young Blud | W   | 0.503      | 0.396        | -                | 0.032 (0.006)    | 1 (0.503) |     1.33 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            8 |     2763 | 2026-05-26 | 163NEWS           | W   | 0.502      | -            | -                | -                | 1 (0.502) |     0.66 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            7 |     4093 | 2026-04-16 | Metizport         | L   | 0.237      | -            | -                | -                | -         |    -2.64 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            6 |     4132 | 2026-04-14 | Lavked            | W   | 0.223      | 0.371        | 0.009 (0.001)    | 0.830 (0.068)    | 0 (0.000) |     2.94 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            5 |     4170 | 2026-04-12 | MOUZ NXT          | W   | 0.209      | 0.371        | 0.000 (0.000)    | 0.101 (0.008)    | -         |     0.99 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            4 |     4276 | 2026-04-08 | EAC               | W   | 0.183      | 0.371        | 0.024 (0.002)    | 0.775 (0.053)    | -         |     4.42 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            3 |     4501 | 2026-04-03 | WW                | L   | 0.154      | -            | -                | -                | -         |    -1.45 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            2 |     4513 | 2026-04-03 | HOTU              | L   | 0.153      | -            | -                | -                | -         |    -4.13 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            1 |     4538 | 2026-04-03 | Younglings        | W   | 0.151      | 0.435        | 0.001 (0.000)    | -                | 1 (0.151) |     0.37 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,522.40)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-30 |      0.939 | $750.00        | $704.48         |
| 2026-05-28 |      0.519 | $7,000.00      | $3,634.98       |
| 2026-04-16 |      0.237 | $5,000.00      | $1,182.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
