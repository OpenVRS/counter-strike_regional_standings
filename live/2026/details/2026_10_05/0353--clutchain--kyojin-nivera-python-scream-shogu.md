### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [353](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [234]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  480.7<br />
<br />
Final Rank Value (480.7) = Starting Rank Value (477.8) + Head To Head Adjustments (2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.155[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.039<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 477.8
- 400 + ( ( 0.039 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 477.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3717 | 2026-06-08 | XI            | L   | 0.408      | -            | -                | -                | -         |    -4.62 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            6 |     3794 | 2026-06-05 | ex-VP.Prodigy | W   | 0.388      | 0.143        | 0.000 (0.000)    | 0.037 (0.002)    | 0 (0.000) |     6.26 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            5 |     5099 | 2026-04-27 | Walczaki      | L   | 0.128      | -            | -                | -                | -         |    -0.24 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            4 |     5290 | 2026-04-24 | los kogutos   | W   | 0.107      | 0.363        | 0.001 (0.000)    | 0.009 (0.000)    | 0 (0.000) |     2.31 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            3 |     5413 | 2026-04-19 | UNiTY         | L   | 0.074      | -            | -                | -                | -         |    -1.41 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            2 |     5488 | 2026-04-15 | SINNERS       | L   | 0.047      | -            | -                | -                | -         |    -0.01 | Kyojin, Nivera, Python, ScreaM, SHOGU |
|            1 |     5522 | 2026-04-13 | MOUZ NXT      | W   | 0.034      | 0.363        | 0.000 (0.000)    | 0.029 (0.000)    | 0 (0.000) |     0.59 | Kyojin, Nivera, Python, ScreaM, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
