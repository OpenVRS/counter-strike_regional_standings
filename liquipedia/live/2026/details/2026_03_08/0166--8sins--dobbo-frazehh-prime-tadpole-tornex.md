### Roster Details<br />
Team Name: 8Sins<br />
Roster: dobbo, frazehh, Prime, Tadpole, TorNEX<br />
Global Rank: [166](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [117]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  780.4<br />
<br />
Final Rank Value (780.4) = Starting Rank Value (784.9) + Head To Head Adjustments (-4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.203[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 784.9
- 400 + ( ( 0.201 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 784.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.129
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      192 | 2026-02-28 | Oxuji Esports   | L   | 1.000      | -            | -                | -                | -         |    -5.96 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|           10 |      233 | 2026-02-27 | Team Pigeons    | W   | 1.000      | 0.143        | 0.063 (0.009)    | 0.344 (0.049)    | 0 (0.000) |    15.52 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            9 |      293 | 2026-02-26 | Ursa            | L   | 1.000      | -            | -                | -                | -         |    -9.73 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            8 |      357 | 2026-02-25 | Team Pigeons    | W   | 1.000      | 0.143        | 0.063 (0.009)    | 0.344 (0.049)    | 0 (0.000) |    15.33 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            7 |      498 | 2026-02-22 | The Last Resort | L   | 1.000      | -            | -                | -                | -         |   -17.45 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            6 |      522 | 2026-02-22 | CTRL Esports    | W   | 1.000      | 0.319        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     6.08 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            5 |      532 | 2026-02-21 | Nigel Mirage    | W   | 1.000      | 0.319        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     6.26 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            4 |     2320 | 2025-12-06 | The Last Resort | L   | 0.585      | -            | -                | -                | -         |    -9.20 | Bigun, dobbo, frazehh, Prime, Tadpole    |
|            3 |     2860 | 2025-11-13 | Coalesce        | W   | 0.433      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.46 | Bigun, dobbo, frazehh, Prime, Tadpole    |
|            2 |     3304 | 2025-11-01 | Phantom Esports | L   | 0.352      | -            | -                | -                | -         |    -7.26 | dobbo, frazehh, JAUSTERE, Prime, Tadpole |
|            1 |     5008 | 2025-09-13 | The Last Resort | W   | 0.024      | 0.288        | 0.018 (0.000)    | 0.179 (0.001)    | 1 (0.024) |     0.43 | Bigun, frazehh, JAUSTERE, Prime, Tadpole |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,266.18)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $1,550.14      | $1,550.14       |
| 2025-12-06 |      0.585 | $1,067.20      | $624.34         |
| 2025-11-02 |      0.358 | $98.66         | $35.31          |
| 2025-09-13 |      0.024 | $2,304.69      | $56.39          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
