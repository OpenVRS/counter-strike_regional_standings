### Roster Details<br />
Team Name: Clutchain<br />
Roster: Kyojin, Nivera, Python, ScreaM, SHOGU<br />
Global Rank: [288](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [183]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  577.2<br />
<br />
Final Rank Value (577.2) = Starting Rank Value (548.2) + Head To Head Adjustments (29.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 548.2
- 400 + ( ( 0.077 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 548.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.058
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1263 | 2026-04-27 | Walczaki           | L   | 0.921      | -            | -                | -                | -         |    -1.14 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            6 |     1462 | 2026-04-24 | TNC Esport         | W   | 0.900      | 0.362        | 0.021 (0.007)    | 1.000 (0.326)    | 0 (0.000) |    24.94 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            5 |     1578 | 2026-04-19 | UNiTY esports      | L   | 0.867      | -            | -                | -                | -         |    -3.61 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            4 |     1651 | 2026-04-15 | SINNERS Esports    | L   | 0.840      | -            | -                | -                | -         |    -0.23 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            3 |     1686 | 2026-04-13 | MOUZ NXT           | W   | 0.827      | 0.362        | 0.014 (0.004)    | 0.743 (0.223)    | 0 (0.000) |    24.76 | Kyojin, Nivera, Python, ScreaM, SHOGU         |
|            2 |     3540 | 2026-03-09 | LFO (Turkish team) | L   | 0.594      | -            | -                | -                | -         |   -12.82 | Gauthierlele, Kyojin, Nivera, Red1many, SHOGU |
|            1 |     3764 | 2026-03-05 | The Last Resort    | L   | 0.567      | -            | -                | -                | -         |    -2.85 | Gauthierlele, Kyojin, Nivera, Red1many, SHOGU |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
