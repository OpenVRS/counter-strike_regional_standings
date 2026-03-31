### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, Rainwaker, REDSTAR, volt<br />
Global Rank: [254](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [161]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  630.0<br />
<br />
Final Rank Value (630.0) = Starting Rank Value (628.2) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 628.2
- 400 + ( ( 0.118 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 628.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.003
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4449 | 2025-11-04 | Nuclear TigeRES | L   | 0.232      | -            | -                | -                | -         |    -0.13 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|            6 |     5111 | 2025-10-14 | Team Nemesis    | L   | 0.091      | -            | -                | -                | -         |    -0.05 | CeRq, POP0V, Rainwaker, REDSTAR, volt    |
|            5 |     5144 | 2025-10-13 | Oramond         | L   | 0.084      | -            | -                | -                | -         |    -0.47 | CeRq, chawzyyy, Rainwaker, REDSTAR, volt |
|            4 |     5202 | 2025-10-10 | Sangal Esports  | L   | 0.065      | -            | -                | -                | -         |    -0.54 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            3 |     5247 | 2025-10-09 | Leo Team        | W   | 0.058      | 0.384        | 0.016 (0.000)    | 0.508 (0.011)    | 0 (0.000) |     1.46 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            2 |     5300 | 2025-10-08 | EYEBALLERS      | W   | 0.051      | 0.384        | 0.100 (0.002)    | 0.663 (0.013)    | 0 (0.000) |     1.59 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |
|            1 |     5329 | 2025-10-08 | Nemiga Gaming   | L   | 0.049      | -            | -                | -                | -         |    -0.02 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($529.44)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.265 | $2,000.00      | $529.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
