### Roster Details<br />
Team Name: Team Voca<br />
Roster: dea, Infinite, nosraC, shane, snav<br />
Global Rank: [234](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [54]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  680.6<br />
<br />
Final Rank Value (680.6) = Starting Rank Value (649.2) + Head To Head Adjustments (31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.272[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 649.2
- 400 + ( ( 0.131 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 649.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.051
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     4901 | 2026-02-24 | M80              | L   | 0.281      | -            | -                | -                | -         |    -0.23 | dea, Infinite, nosraC, shane, snav |
|           12 |     4954 | 2026-02-23 | Marsborne        | W   | 0.274      | 0.363        | 0.013 (0.001)    | 0.222 (0.022)    | 0 (0.000) |     6.54 | dea, Infinite, nosraC, shane, snav |
|           11 |     4991 | 2026-02-22 | M80              | L   | 0.267      | -            | -                | -                | -         |    -0.21 | dea, Infinite, nosraC, shane, snav |
|           10 |     5118 | 2026-02-20 | Marsborne        | W   | 0.254      | 0.363        | 0.013 (0.001)    | 0.222 (0.020)    | 0 (0.000) |     6.13 | dea, Infinite, nosraC, shane, snav |
|            9 |     5217 | 2026-02-18 | Mythic           | W   | 0.241      | 0.363        | 0.000 (0.000)    | 0.009 (0.001)    | 0 (0.000) |     2.13 | dea, Infinite, nosraC, shane, snav |
|            8 |     5278 | 2026-02-17 | Zomblers         | W   | 0.234      | 0.363        | 0.010 (0.001)    | 0.316 (0.027)    | 0 (0.000) |     4.39 | dea, Infinite, nosraC, shane, snav |
|            7 |     5593 | 2026-02-11 | Wildcard         | L   | 0.194      | -            | -                | -                | -         |    -0.15 | dea, Infinite, nosraC, shane, snav |
|            6 |     5595 | 2026-02-11 | BOSS             | W   | 0.193      | 0.769        | 0.000 (0.000)    | 0.041 (0.006)    | 0 (0.000) |     2.84 | dea, Infinite, nosraC, shane, snav |
|            5 |     5600 | 2026-02-11 | Insane players   | W   | 0.192      | 0.769        | 0.010 (0.002)    | 0.263 (0.039)    | 0 (0.000) |     3.56 | dea, Infinite, nosraC, shane, snav |
|            4 |     5629 | 2026-02-10 | SkinRave Esports | W   | 0.186      | 0.769        | 0.001 (0.000)    | 0.042 (0.006)    | 0 (0.000) |     2.82 | dea, Infinite, nosraC, shane, snav |
|            3 |     5636 | 2026-02-10 | Wildcard         | L   | 0.185      | -            | -                | -                | -         |    -0.13 | dea, Infinite, nosraC, shane, snav |
|            2 |     5724 | 2026-02-07 | NRG              | L   | 0.165      | -            | -                | -                | -         |    -0.17 | dea, Infinite, nosraC, shane, snav |
|            1 |     5754 | 2026-02-06 | Marsborne        | W   | 0.159      | 0.769        | 0.013 (0.002)    | 0.222 (0.027)    | 0 (0.000) |     3.91 | dea, Infinite, nosraC, shane, snav |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,122.22)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.281 | $4,000.00      | $1,122.22       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
