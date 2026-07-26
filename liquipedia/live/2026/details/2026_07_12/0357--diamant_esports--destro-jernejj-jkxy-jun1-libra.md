### Roster Details<br />
Team Name: Diamant Esports<br />
Roster: Destro, jernejj, jkXy, JuN1, Libra<br />
Global Rank: [357](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [223]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  486.6<br />
<br />
Final Rank Value (486.6) = Starting Rank Value (495.1) + Head To Head Adjustments (-8.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.029[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.1
- 400 + ( ( 0.050 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 495.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.028
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       99 | 2026-07-04 | Phantom Esports Academy | L   | 1.000      | -            | -                | -                | -         |    -6.96 | Damsi, Destro, jernejj, jkXy, Libra |
|            6 |     3498 | 2026-03-24 | Rottweilers             | L   | 0.465      | -            | -                | -                | -         |    -5.63 | Destro, jernejj, jkXy, JuN1, Libra  |
|            5 |     3638 | 2026-03-22 | FIGHTERS                | W   | 0.452      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.24 | Destro, jernejj, jkXy, JuN1, Libra  |
|            4 |     3762 | 2026-03-20 | Rottweilers             | L   | 0.438      | -            | -                | -                | -         |    -5.61 | Destro, jernejj, jkXy, JuN1, Libra  |
|            3 |     4904 | 2026-02-24 | Aimclub (Romanian team) | L   | 0.279      | -            | -                | -                | -         |    -0.91 | Destro, jernejj, jkXy, JuN1, Libra  |
|            2 |     4929 | 2026-02-24 | Nexus Gaming            | L   | 0.277      | -            | -                | -                | -         |    -2.50 | Destro, jernejj, jkXy, JuN1, Libra  |
|            1 |     4945 | 2026-02-24 | Aimclub (Romanian team) | W   | 0.276      | 0.354        | 0.001 (0.000)    | 0.294 (0.029)    | 1 (0.276) |     7.84 | Destro, jernejj, jkXy, JuN1, Libra  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
