### Roster Details<br />
Team Name: 8Sins<br />
Roster: dobbo, frazehh, Prime, Tadpole, TorNEX<br />
Global Rank: [167](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [116]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  777.8<br />
<br />
Final Rank Value (777.8) = Starting Rank Value (783.6) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.318[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.210[<sup>2</sup>](#table1)

The average of these factors is 0.203<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 783.6
- 400 + ( ( 0.203 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 783.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.135
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |       32 | 2026-02-28 | Oxuji Esports   | L   | 1.000      | -            | -                | -                | -         |    -7.03 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|           10 |       65 | 2026-02-27 | Team Pigeons    | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.399 (0.057)    | 0 (0.000) |    16.21 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            9 |      118 | 2026-02-26 | Ursa            | L   | 1.000      | -            | -                | -                | -         |   -10.09 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            8 |      173 | 2026-02-25 | Team Pigeons    | W   | 1.000      | 0.143        | 0.066 (0.009)    | 0.399 (0.057)    | 0 (0.000) |    16.11 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            7 |      296 | 2026-02-22 | The Last Resort | L   | 1.000      | -            | -                | -                | -         |   -17.67 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            6 |      318 | 2026-02-22 | CTRL Esports    | W   | 1.000      | 0.319        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     6.05 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            5 |      327 | 2026-02-21 | Nigel Mirage    | W   | 1.000      | 0.319        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     6.25 | dobbo, frazehh, Prime, Tadpole, TorNEX   |
|            4 |     2130 | 2025-12-06 | The Last Resort | L   | 0.626      | -            | -                | -                | -         |   -10.44 | Bigun, dobbo, frazehh, Prime, Tadpole    |
|            3 |     2682 | 2025-11-13 | Coalesce        | W   | 0.475      | 0.265        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.61 | Bigun, dobbo, frazehh, Prime, Tadpole    |
|            2 |     3137 | 2025-11-01 | Phantom Esports | L   | 0.394      | -            | -                | -                | -         |    -7.97 | dobbo, frazehh, JAUSTERE, Prime, Tadpole |
|            1 |     4888 | 2025-09-13 | The Last Resort | W   | 0.066      | 0.288        | 0.017 (0.000)    | 0.192 (0.004)    | 1 (0.066) |     1.15 | Bigun, frazehh, JAUSTERE, Prime, Tadpole |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,409.74)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $1,550.14      | $1,550.14       |
| 2025-12-06 |      0.626 | $1,067.20      | $668.48         |
| 2025-11-02 |      0.399 | $98.66         | $39.39          |
| 2025-09-13 |      0.066 | $2,304.69      | $151.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
