### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [350](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [224]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  507.6<br />
<br />
Final Rank Value (507.6) = Starting Rank Value (496.8) + Head To Head Adjustments (10.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.195[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 496.8
- 400 + ( ( 0.051 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 496.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2337 | 2026-06-08 | XI         | L   | 0.592      | -            | -                | -                | -         |    -6.73 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            6 |     2414 | 2026-06-05 | VP.Prodigy | W   | 0.572      | 0.143        | 0.000 (0.000)    | 0.010 (0.001)    | 0 (0.000) |     8.33 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            5 |     3719 | 2026-04-27 | Walczaki   | L   | 0.312      | -            | -                | -                | -         |    -0.54 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            4 |     3910 | 2026-04-24 | Permitta   | W   | 0.292      | 0.363        | 0.007 (0.001)    | 0.689 (0.073)    | 0 (0.000) |     7.82 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            3 |     4033 | 2026-04-19 | UNiTY      | L   | 0.258      | -            | -                | -                | -         |    -2.65 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            2 |     4108 | 2026-04-15 | SINNERS    | L   | 0.231      | -            | -                | -                | -         |    -0.24 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            1 |     4142 | 2026-04-13 | MOUZ NXT   | W   | 0.218      | 0.363        | 0.000 (0.000)    | 0.101 (0.008)    | 0 (0.000) |     4.81 | Kyojin, Nivera, Python, ScreaM, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
