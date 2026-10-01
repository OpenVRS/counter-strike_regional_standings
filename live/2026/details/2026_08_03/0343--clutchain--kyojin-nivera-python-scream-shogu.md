### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [343](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [220]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  540.1<br />
<br />
Final Rank Value (540.1) = Starting Rank Value (519.1) + Head To Head Adjustments (20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.225[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.1
- 400 + ( ( 0.062 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 519.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1130 | 2026-06-08 | XI              | L   | 0.827      | -            | -                | -                | -         |    -9.22 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            8 |     1207 | 2026-06-05 | VP.Prodigy      | W   | 0.808      | 0.143        | 0.000 (0.000)    | 0.055 (0.006)    | 0 (0.000) |    12.18 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            7 |     2512 | 2026-04-27 | Walczaki        | L   | 0.547      | -            | -                | -                | -         |    -0.54 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            6 |     2703 | 2026-04-24 | los kogutos     | W   | 0.527      | 0.363        | 0.014 (0.003)    | 0.673 (0.129)    | 0 (0.000) |    14.49 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            5 |     2826 | 2026-04-19 | UNiTY           | L   | 0.493      | -            | -                | -                | -         |    -3.86 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            4 |     2901 | 2026-04-15 | SINNERS         | L   | 0.466      | -            | -                | -                | -         |    -0.28 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            3 |     2935 | 2026-04-13 | MOUZ NXT        | W   | 0.454      | 0.363        | 0.005 (0.001)    | 0.457 (0.075)    | 0 (0.000) |    13.08 | Kyojin, Nivera, Python, ScreaM, SHOGU             |
|            2 |     4789 | 2026-03-09 | LFO 6           | L   | 0.221      | -            | -                | -                | -         |    -4.58 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |
|            1 |     5017 | 2026-03-05 | The Last Resort | L   | 0.194      | -            | -                | -                | -         |    -0.32 | Gauthierlelelele, Kyojin, Nivera, red1many, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
