### Roster Details<br />
Team Name: Train launcher<br />
Roster: bsover, Leon1das, majkn, Timothybtw<br />
Global Rank: [213](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [144]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  713.8<br />
<br />
Final Rank Value (713.8) = Starting Rank Value (692.2) + Head To Head Adjustments (21.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.275[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.106[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 692.2
- 400 + ( ( 0.154 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 692.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.117
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      244 | 2026-06-27 | Roamsfiest     | L   | 1.000      | -            | -                | -                | -         |   -11.24 | bsover, Leon1das, majkn, siz, Timothybtw  |
|            5 |      256 | 2026-06-26 | ReThink        | L   | 1.000      | -            | -                | -                | -         |    -9.98 | bsover, Leon1das, majkn, siz, Timothybtw  |
|            4 |      259 | 2026-06-26 | Roamsfiest     | W   | 1.000      | 0.324        | 0.004 (0.001)    | 0.156 (0.050)    | 1 (1.000) |    19.12 | bsover, Leon1das, majkn, siz, Timothybtw  |
|            3 |      297 | 2026-06-24 | Entropy Gaming | W   | 1.000      | 0.311        | 0.004 (0.001)    | 0.333 (0.104)    | 0 (0.000) |    18.55 | agoz, bsover, Leon1das, majkn, Timothybtw |
|            2 |      311 | 2026-06-23 | Johnny Speeds  | L   | 1.000      | -            | -                | -                | -         |    -2.91 | agoz, bsover, Leon1das, majkn, Timothybtw |
|            1 |      314 | 2026-06-23 | LEO            | W   | 1.000      | 0.311        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     8.00 | agoz, bsover, Leon1das, majkn, Timothybtw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,232.34)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-27 |      1.000 | $1,232.34      | $1,232.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
