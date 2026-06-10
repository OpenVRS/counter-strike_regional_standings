### Roster Details<br />
Team Name: Sangal Esports<br />
Roster: clax, danistzz, h0kz, Patsi, R4DYX<br />
Global Rank: [211](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [136]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  722.5<br />
<br />
Final Rank Value (722.5) = Starting Rank Value (684.3) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.256[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.3
- 400 + ( ( 0.148 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 684.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.065
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     4646 | 2026-02-16 | TNC Esport      | W   | 0.453      | 0.384        | 0.021 (0.004)    | 1.000 (0.174)    | 0 (0.000) |    12.05 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           13 |     5159 | 2026-02-02 | Nemiga Gaming   | W   | 0.361      | 0.435        | 0.131 (0.020)    | 0.949 (0.149)    | 0 (0.000) |    11.02 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           12 |     5365 | 2026-01-26 | 1w Team         | L   | 0.312      | -            | -                | -                | -         |    -0.37 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           11 |     5387 | 2026-01-25 | Ex-RUBY         | L   | 0.306      | -            | -                | -                | -         |    -1.86 | clax, danistzz, h0kz, Patsi, R4DYX   |
|           10 |     5467 | 2026-01-23 | FAVBET Team     | W   | 0.293      | 0.435        | 0.014 (0.002)    | 0.464 (0.059)    | 0 (0.000) |     6.66 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            9 |     5546 | 2026-01-21 | Nuclear TigeRES | L   | 0.280      | -            | -                | -                | -         |    -0.24 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            8 |     5566 | 2026-01-21 | HOTU            | L   | 0.278      | -            | -                | -                | -         |    -0.17 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            7 |     5579 | 2026-01-20 | FORZE Reload    | W   | 0.273      | 0.435        | 0.000 (0.000)    | 0.082 (0.010)    | 0 (0.000) |     4.33 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            6 |     5625 | 2026-01-18 | Illwill         | L   | 0.259      | -            | -                | -                | -         |    -0.90 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            5 |     5652 | 2026-01-17 | KOLESIE         | W   | 0.254      | 0.624        | 0.031 (0.005)    | 0.707 (0.112)    | 0 (0.000) |     7.55 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            4 |     5665 | 2026-01-17 | BULGARIAPEEK    | W   | 0.254      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.36 | clax, danistzz, h0kz, Patsi, R4DYX   |
|            3 |     5966 | 2025-12-22 | Team Nemesis    | L   | 0.078      | -            | -                | -                | -         |    -1.55 | danistzz, h0kz, Norwi, Patsi, R4DYX  |
|            2 |     5984 | 2025-12-21 | Mousquetaires   | W   | 0.071      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.38 | danistzz, h0kz, Norwi, Patsi, R4DYX  |
|            1 |     6117 | 2025-12-12 | BIG             | L   | 0.013      | -            | -                | -                | -         |    -0.01 | clax, danistzz, Norwi, Patsi, r3salt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($759.35)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-05 |      0.380 | $2,000.00      | $759.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
