### Roster Details<br />
Team Name: 5star eSports<br />
Roster: ariucle, clouden, hoolig4n, NEUZ, rate<br />
Global Rank: [109](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_22.md)<br />
Regional Rank: [12]( ../../standings_asia_2026_03_22.md)<br />
<br />
Final Rank Value:  983.4<br />
<br />
Final Rank Value (983.4) = Starting Rank Value (997.2) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.052[<sup>2</sup>](#table1)
- LAN Wins: 0.500[<sup>2</sup>](#table1)

The average of these factors is 0.299<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 997.2
- 400 + ( ( 0.299 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 997.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.208
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       26 | 2026-03-20 | NEXVOID                   | W   | 1.000      | 0.354        | 0.016 (0.006)    | 0.275 (0.097)    | 1 (1.000) |    22.07 | ariucle, clouden, hoolig4n, NEUZ, rate        |
|           13 |       29 | 2026-03-19 | The QUBE Esports          | W   | 1.000      | 0.354        | 0.008 (0.003)    | 0.189 (0.067)    | 1 (1.000) |     9.99 | ariucle, clouden, hoolig4n, NEUZ, rate        |
|           12 |       39 | 2026-03-19 | The Huns Esports          | W   | 1.000      | 0.354        | 0.016 (0.006)    | 0.511 (0.181)    | 1 (1.000) |    23.33 | ariucle, clouden, hoolig4n, NEUZ, rate        |
|           11 |       54 | 2026-03-18 | Sensation                 | L   | 1.000      | -            | -                | -                | -         |   -24.98 | ariucle, clouden, HenX, hoolig4n, NEUZ        |
|           10 |       57 | 2026-03-18 | BMZ                       | W   | 1.000      | 0.354        | 0.005 (0.002)    | 0.170 (0.060)    | 1 (1.000) |    17.34 | ariucle, clouden, hoolig4n, NEUZ, rate        |
|            9 |       61 | 2026-03-17 | NEXVOID                   | L   | 1.000      | -            | -                | -                | -         |    -7.60 | ariucle, clouden, hoolig4n, NEUZ, rate        |
|            8 |       73 | 2026-03-17 | Chinggis Warriors         | L   | 1.000      | -            | -                | -                | -         |   -12.11 | ariucle, clouden, HenX, hoolig4n, NEUZ        |
|            7 |      102 | 2026-03-15 | Chinggis Warriors         | W   | 1.000      | 0.354        | 0.015 (0.005)    | 0.284 (0.101)    | 1 (1.000) |    19.68 | ariucle, clouden, hoolig4n, NEUZ, rate        |
|            6 |     1325 | 2026-02-19 | The QUBE Esports          | L   | 0.991      | -            | -                | -                | -         |   -21.81 | ariucle, clouden, HenX, hoolig4n, kani        |
|            5 |     1380 | 2026-02-18 | Chinggis Warriors         | L   | 0.984      | -            | -                | -                | -         |    -9.43 | ariucle, clouden, HenX, hoolig4n, kani        |
|            4 |     1440 | 2026-02-17 | Just Swing (Chinese team) | W   | 0.977      | 0.333        | 0.002 (0.001)    | 0.046 (0.015)    | 0 (0.000) |     4.74 | ariucle, clouden, HenX, hoolig4n, kani        |
|            3 |     1896 | 2026-02-06 | Rare Atom                 | L   | 0.903      | -            | -                | -                | -         |   -14.12 | ariucle, clouden, HenX, hoolig4n, sergelen19k |
|            2 |     1919 | 2026-02-05 | BMZ                       | L   | 0.897      | -            | -                | -                | -         |   -13.37 | ariucle, clouden, HenX, hoolig4n, sergelen19k |
|            1 |     1926 | 2026-02-04 | The Huns Esports          | L   | 0.895      | -            | -                | -                | -         |    -7.48 | ariucle, clouden, HenX, hoolig4n, sergelen19k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,203.14)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-20 |      1.000 | $8,000.00      | $8,000.00       |
| 2026-02-06 |      0.903 | $225.00        | $203.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
