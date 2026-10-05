### Roster Details<br />
Team Name: ARCRED<br />
Roster: DSSj, Get_Jeka, Raijin, Ryujin, synyx<br />
Global Rank: [166](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [123]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  799.2<br />
<br />
Final Rank Value (799.2) = Starting Rank Value (766.4) + Head To Head Adjustments (32.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.129[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 766.4
- 400 + ( ( 0.183 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 766.4


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
|           14 |     2919 | 2026-07-20 | Color             | L   | 0.686      | -            | -                | -                | -         |    -5.12 | DSSj, Raijin, Ryujin, shg, synyx      |
|           13 |     3023 | 2026-07-17 | The Last Resort   | W   | 0.664      | 0.371        | 0.014 (0.003)    | 0.422 (0.104)    | 0 (0.000) |    15.71 | DSSj, Raijin, Ryujin, shg, synyx      |
|           12 |     3695 | 2026-06-10 | Acend             | L   | 0.418      | -            | -                | -                | -         |    -1.16 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           11 |     3746 | 2026-06-07 | Walczaki          | L   | 0.400      | -            | -                | -                | -         |    -2.60 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|           10 |     3778 | 2026-06-06 | ASTRAL            | W   | 0.393      | 0.435        | 0.007 (0.001)    | 0.474 (0.081)    | 0 (0.000) |     9.94 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            9 |     3860 | 2026-06-03 | INOX Division     | L   | 0.372      | -            | -                | -                | -         |    -2.25 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            8 |     4026 | 2026-05-28 | Virtus.pro        | L   | 0.335      | -            | -                | -                | -         |    -0.78 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            7 |     4058 | 2026-05-28 | Nuclear TigeRES   | W   | 0.332      | 0.396        | 0.091 (0.012)    | 0.827 (0.109)    | 1 (0.332) |     9.80 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            6 |     4089 | 2026-05-27 | CYBERSHOKE        | W   | 0.326      | 0.396        | 0.004 (0.000)    | 0.123 (0.016)    | 1 (0.326) |     5.18 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            5 |     4136 | 2026-05-26 | Aurora Young Blud | W   | 0.319      | 0.396        | 0.000 (0.000)    | 0.014 (0.002)    | 1 (0.319) |     2.07 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            4 |     4143 | 2026-05-26 | 163NEWS           | W   | 0.317      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.317) |     1.13 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            3 |     5473 | 2026-04-16 | Metizport         | L   | 0.052      | -            | -                | -                | -         |    -0.08 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            2 |     5512 | 2026-04-14 | Lavked            | W   | 0.038      | 0.371        | 0.011 (0.000)    | 0.664 (0.009)    | 0 (0.000) |     0.80 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |
|            1 |     5550 | 2026-04-12 | MOUZ NXT          | W   | 0.025      | 0.371        | 0.000 (0.000)    | 0.029 (0.000)    | 0 (0.000) |     0.16 | DSSj, Get_Jeka, Raijin, Ryujin, synyx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,603.98)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      0.335 | $7,000.00      | $2,343.52       |
| 2026-04-16 |      0.052 | $5,000.00      | $260.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
