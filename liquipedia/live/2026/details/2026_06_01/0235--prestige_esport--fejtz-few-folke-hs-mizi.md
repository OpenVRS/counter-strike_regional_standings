### Roster Details<br />
Team Name: Prestige Esport<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [235](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [149]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  687.0<br />
<br />
Final Rank Value (687.0) = Starting Rank Value (674.5) + Head To Head Adjustments (12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.246[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 674.5
- 400 + ( ( 0.144 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 674.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.030
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3214 | 2026-03-14 | Sashi Esport              | L   | 0.678      | -            | -                | -                | -         |    -1.78 | Brillo, fejtZ, Few, Folke, niko |
|            7 |     3221 | 2026-03-14 | ECSTATIC                  | L   | 0.677      | -            | -                | -                | -         |    -1.25 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     5575 | 2026-01-17 | Megoshort                 | L   | 0.304      | -            | -                | -                | -         |    -2.30 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     5591 | 2026-01-16 | WOPA Esport               | W   | 0.300      | 0.337        | 0.020 (0.002)    | 0.633 (0.064)    | 1 (0.300) |     8.89 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     5602 | 2026-01-16 | Infinite Gaming           | L   | 0.299      | -            | -                | -                | -         |    -6.28 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     5609 | 2026-01-16 | Esport Academy Copenhagen | W   | 0.299      | 0.337        | 0.011 (0.001)    | 0.769 (0.078)    | 1 (0.299) |     9.02 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     5617 | 2026-01-16 | Aimclub (Romanian team)   | W   | 0.299      | 0.337        | 0.000 (0.000)    | 0.308 (0.031)    | 1 (0.299) |     6.47 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     5636 | 2026-01-16 | Johnny Speeds             | L   | 0.298      | -            | -                | -                | -         |    -0.25 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($535.83)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.685 | $782.00        | $535.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
