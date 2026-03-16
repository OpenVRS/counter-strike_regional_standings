### Roster Details<br />
Team Name: 500<br />
Roster: CeRq, Rainwaker, REDSTAR, volt<br />
Global Rank: [218](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [146]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  669.0<br />
<br />
Final Rank Value (669.0) = Starting Rank Value (661.8) + Head To Head Adjustments (7.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.260[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.8
- 400 + ( ( 0.136 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 661.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.011
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3221 | 2025-11-04 | Nuclear TigeRES | L   | 0.373      | -            | -                | -                | -         |    -0.18 | CeRq, POP0V, Rainwaker, REDSTAR, volt   |
|            4 |     3863 | 2025-10-14 | Team Nemesis    | L   | 0.232      | -            | -                | -                | -         |    -0.20 | CeRq, POP0V, Rainwaker, REDSTAR, volt   |
|            3 |     3950 | 2025-10-10 | Sangal Esports  | L   | 0.206      | -            | -                | -                | -         |    -0.95 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt |
|            2 |     4044 | 2025-10-08 | EYEBALLERS      | W   | 0.192      | 0.384        | 0.185 (0.014)    | 0.645 (0.048)    | 0 (0.000) |     5.79 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt |
|            1 |     4681 | 2025-09-23 | Tricked Esport  | W   | 0.092      | 0.435        | 0.015 (0.001)    | 0.363 (0.015)    | 0 (0.000) |     2.71 | CeRq, kRaSnaL, Rainwaker, REDSTAR, volt |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($811.44)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-09 |      0.406 | $2,000.00      | $811.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
