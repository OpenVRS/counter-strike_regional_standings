### Roster Details<br />
Team Name: Haunted House<br />
Roster: fr0k, icyvl0ne, malinov<br />
Global Rank: [191](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [23]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  760.6<br />
<br />
Final Rank Value (760.6) = Starting Rank Value (737.4) + Head To Head Adjustments (23.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.244[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.174[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 737.4
- 400 + ( ( 0.172 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 737.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.175
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      201 | 2026-04-01 | DEPO                      | L   | 1.000      | -            | -                | -                | -         |   -18.05 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|           11 |      261 | 2026-03-31 | Legion (Pakistani team)   | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.241 (0.034)    | 0 (0.000) |    14.21 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|           10 |      288 | 2026-03-31 | THE UNIT                  | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.15 | fr0k, icyvlone, malinov, SasukeQO, Schwarzkopf |
|            9 |      707 | 2026-03-23 | Alter Ego                 | L   | 1.000      | -            | -                | -                | -         |   -13.33 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            8 |      758 | 2026-03-22 | Never Say Never-          | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.034 (0.011)    | 0 (0.000) |     6.89 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            7 |      817 | 2026-03-21 | Change The Game           | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.252 (0.084)    | 0 (0.000) |    21.46 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            6 |      873 | 2026-03-20 | Just Swing (Chinese team) | L   | 1.000      | -            | -                | -                | -         |   -16.93 | chrizm, fr0k, icyvl0ne, malinov, shoma         |
|            5 |     3714 | 2026-01-04 | HOTU                      | L   | 0.586      | -            | -                | -                | -         |    -0.52 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            4 |     3728 | 2026-01-03 | ALLINNERS                 | W   | 0.585      | 0.303        | 0.001 (0.000)    | 0.035 (0.006)    | 1 (0.585) |     7.95 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            3 |     3741 | 2026-01-03 | NOVAQ                     | W   | 0.581      | 0.303        | 0.022 (0.004)    | 0.525 (0.092)    | 1 (0.581) |    15.37 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            2 |     3754 | 2026-01-03 | WINNERS Esports           | W   | 0.579      | 0.303        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.579) |     4.22 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |
|            1 |     3757 | 2026-01-02 | OMEGA                     | L   | 0.577      | -            | -                | -                | -         |    -1.16 | fr0k, icyvl0ne, malinov, shoxs, wetfy          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($440.03)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-04 |      0.587 | $750.00        | $440.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
