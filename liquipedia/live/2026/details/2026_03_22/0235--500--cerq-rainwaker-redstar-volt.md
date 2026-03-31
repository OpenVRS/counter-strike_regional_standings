### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, Rainwaker, REDSTAR, volt<br />
Global Rank: [235](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  654.0<br />
<br />
Final Rank Value (654.0) = Starting Rank Value (650.0) + Head To Head Adjustments (4.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.234[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.125<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 650.0
- 400 + ( ( 0.125 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 650.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.007
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     3967 | 2025-11-04 | Nuclear TigeRES | L   | 0.278      | -            | -                | -                | -         |    -0.12 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|            6 |     4629 | 2025-10-14 | Team Nemesis    | L   | 0.138      | -            | -                | -                | -         |    -0.06 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|            5 |     4662 | 2025-10-13 | Oramond         | L   | 0.131      | -            | -                | -                | -         |    -0.66 | CeRq, chawzyyy, Rainwaker, REDSTAR, volt |
|            4 |     4720 | 2025-10-10 | Sangal Esports  | L   | 0.111      | -            | -                | -                | -         |    -0.83 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            3 |     4765 | 2025-10-09 | Leo Team        | W   | 0.105      | 0.384        | 0.020 (0.001)    | 0.528 (0.021)    | 0 (0.000) |     2.69 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            2 |     4818 | 2025-10-08 | EYEBALLERS      | W   | 0.098      | 0.384        | 0.121 (0.005)    | 0.649 (0.024)    | 0 (0.000) |     3.01 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            1 |     4847 | 2025-10-08 | Nemiga Gaming   | L   | 0.096      | -            | -                | -                | -         |    -0.03 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($623.06)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.312 | $2,000.00      | $623.06         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
