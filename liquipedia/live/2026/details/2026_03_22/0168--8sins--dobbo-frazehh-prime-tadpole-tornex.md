### Roster Details<br />
Team Name: 8Sins<br />
Roster: dobbo, frazehh, Prime, Tadpole, TorNEX<br />
Global Rank: [168](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [118]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  810.7<br />
<br />
Final Rank Value (810.7) = Starting Rank Value (814.9) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.033[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.9
- 400 + ( ( 0.208 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 814.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.186
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |        9 | 2026-03-21 | CSDIILIT        | L   | 1.000      | -            | -                | -                | -         |   -14.68 | dobbo, frazehh, Prime, Tadpole, wfn      |
|           13 |       24 | 2026-03-20 | FUZOS           | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.482 (0.069)    | 0 (0.000) |    17.04 | dobbo, frazehh, Prime, Tadpole, wfn      |
|           12 |       74 | 2026-03-17 | EC BANGA        | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.85 | dobbo, frazehh, Prime, Tadpole, wfn      |
|           11 |       94 | 2026-03-16 | Bebop           | L   | 1.000      | -            | -                | -                | -         |    -8.23 | dobbo, frazehh, Prime, Tadpole, wfn      |
|           10 |      841 | 2026-02-28 | Oxuji Esports   | L   | 1.000      | -            | -                | -                | -         |    -5.11 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            9 |      885 | 2026-02-27 | Team Pigeons    | W   | 1.000      | 0.384        | 0.049 (0.019)    | 0.326 (0.125)    | 0 (0.000) |    15.24 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            8 |      946 | 2026-02-26 | Ursa            | L   | 1.000      | -            | -                | -                | -         |    -8.07 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            7 |     1012 | 2026-02-25 | Team Pigeons    | W   | 1.000      | 0.384        | 0.049 (0.019)    | 0.326 (0.125)    | 0 (0.000) |    15.05 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            6 |     1164 | 2026-02-22 | The Last Resort | L   | 1.000      | -            | -                | -                | -         |   -16.78 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            5 |     1190 | 2026-02-22 | CTRL Esports    | W   | 1.000      | 0.319        | 0.002 (0.001)    | 0.035 (0.011)    | 1 (1.000) |     5.34 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            4 |     1201 | 2026-02-21 | Nigel Mirage    | W   | 1.000      | 0.319        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     5.45 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            3 |     3045 | 2025-12-06 | The Last Resort | L   | 0.491      | -            | -                | -                | -         |    -7.39 | Bigun, dobbo, frazehh, Prime, Tadpole    |
|            2 |     3597 | 2025-11-13 | Coalesce        | W   | 0.339      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.98 | Bigun, dobbo, frazehh, Prime, Tadpole    |
|            1 |     4052 | 2025-11-01 | Phantom Esports | L   | 0.258      | -            | -                | -                | -         |    -5.88 | dobbo, frazehh, JAUSTERE, Prime, Tadpole |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,099.98)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $1,550.14      | $1,550.14       |
| 2025-12-06 |      0.491 | $1,067.20      | $523.82         |
| 2025-11-02 |      0.264 | $98.66         | $26.02          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
