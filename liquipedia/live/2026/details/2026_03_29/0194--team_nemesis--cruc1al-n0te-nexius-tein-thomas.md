### Roster Details<br />
Team Name: Team Nemesis<br />
Roster: CRUC1AL, n0te, Nexius, tein, Thomas<br />
Global Rank: [194](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [130]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  738.9<br />
<br />
Final Rank Value (738.9) = Starting Rank Value (717.7) + Head To Head Adjustments (21.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.123[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 717.7
- 400 + ( ( 0.164 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 717.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.090
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2026 | 2026-02-15 | SIXSEVEN                | L   | 0.917      | -            | -                | -                | -         |   -11.01 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           13 |     2137 | 2026-02-13 | VP.Prodigy              | L   | 0.904      | -            | -                | -                | -         |    -4.22 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           12 |     3268 | 2025-12-23 | GenOne                  | L   | 0.558      | -            | -                | -                | -         |    -4.01 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           11 |     3269 | 2025-12-23 | FORZE Reload            | W   | 0.557      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.74 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           10 |     3274 | 2025-12-22 | Sangal Esports          | W   | 0.549      | 0.333        | 0.007 (0.001)    | 0.177 (0.032)    | 0 (0.000) |    11.96 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            9 |     3313 | 2025-12-20 | UNiTY esports           | W   | 0.537      | 0.333        | 0.004 (0.001)    | 0.479 (0.086)    | 0 (0.000) |    11.99 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            8 |     3785 | 2025-11-25 | WW Team                 | L   | 0.370      | -            | -                | -                | -         |    -0.29 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            7 |     3792 | 2025-11-25 | Infinite Gaming         | W   | 0.369      | 0.371        | 0.000 (0.000)    | 0.084 (0.011)    | 1 (0.369) |     2.88 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            6 |     3820 | 2025-11-24 | WW Team                 | L   | 0.363      | -            | -                | -                | -         |    -0.26 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            5 |     4508 | 2025-11-02 | MINLATE (European team) | W   | 0.217      | 0.305        | 0.001 (0.000)    | 0.362 (0.024)    | 1 (0.217) |     5.47 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            4 |     4516 | 2025-11-02 | Prestige Esport         | W   | 0.216      | 0.305        | 0.001 (0.000)    | 0.007 (0.000)    | 1 (0.216) |     2.27 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            3 |     4522 | 2025-11-01 | Phantom Esports         | W   | 0.212      | 0.305        | 0.000 (0.000)    | 0.017 (0.001)    | 1 (0.212) |     2.50 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            2 |     4533 | 2025-11-01 | Glitchtech Esports      | W   | 0.211      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.211) |     1.46 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            1 |     4542 | 2025-11-01 | MINLATE (European team) | L   | 0.210      | -            | -                | -                | -         |    -1.30 | CRUC1AL, n0te, Nexius, tein, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,331.60)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      0.558 | $3,000.00      | $1,675.42       |
| 2025-11-02 |      0.217 | $3,025.65      | $656.19         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
