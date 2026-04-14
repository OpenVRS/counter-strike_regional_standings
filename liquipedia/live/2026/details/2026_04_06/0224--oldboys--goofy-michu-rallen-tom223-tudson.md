### Roster Details<br />
Team Name: OLDBOYS<br />
Roster: Goofy, MICHU, rallen, ToM223, tudsoN<br />
Global Rank: [224](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [145]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  712.0<br />
<br />
Final Rank Value (712.0) = Starting Rank Value (653.4) + Head To Head Adjustments (58.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.130<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 653.4
- 400 + ( ( 0.130 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 653.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.122
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      423 | 2026-03-28 | QWENTRY              | L   | 1.000      | -            | -                | -                | -         |    -2.64 | Goofy, MICHU, rallen, ToM223, tudsoN |
|            4 |      489 | 2026-03-27 | ENJOY (Russian team) | W   | 1.000      | 0.407        | 0.002 (0.001)    | 0.026 (0.011)    | 0 (0.000) |    14.42 | Goofy, MICHU, rallen, ToM223, tudsoN |
|            3 |     1348 | 2026-03-09 | Donstu Esports       | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.150 (0.021)    | 0 (0.000) |    17.22 | Goofy, MICHU, rallen, ToM223, tudsoN |
|            2 |     1438 | 2026-03-08 | Aurora Young Blud    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.225 (0.032)    | 0 (0.000) |    16.00 | Goofy, MICHU, rallen, ToM223, tudsoN |
|            1 |     1578 | 2026-03-05 | Fire Flux Esports    | W   | 0.988      | 0.143        | 0.001 (0.000)    | 0.071 (0.010)    | 0 (0.000) |    13.68 | Goofy, MICHU, rallen, ToM223, tudsoN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,500.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $2,500.00      | $2,500.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
