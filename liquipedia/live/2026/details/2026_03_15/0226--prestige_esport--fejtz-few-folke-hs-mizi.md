### Roster Details<br />
Team Name: Prestige Esport<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [226](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [150]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  665.8<br />
<br />
Final Rank Value (665.8) = Starting Rank Value (629.1) + Head To Head Adjustments (36.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.244[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 629.1
- 400 + ( ( 0.117 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 629.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.081
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       49 | 2026-03-14 | Sashi Esport            | L   | 1.000      | -            | -                | -                | -         |    -2.33 | Brillo, fejtZ, Few, Folke, niko |
|            7 |       55 | 2026-03-14 | ECSTATIC                | L   | 1.000      | -            | -                | -                | -         |    -0.77 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     2340 | 2026-01-17 | Megoshort               | L   | 0.817      | -            | -                | -                | -         |    -3.43 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     2355 | 2026-01-16 | WOPA Esport             | W   | 0.813      | 0.337        | 0.003 (0.001)    | 0.314 (0.086)    | 1 (0.813) |    21.95 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     2366 | 2026-01-16 | Infinite Gaming         | L   | 0.813      | -            | -                | -                | -         |   -17.50 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     2372 | 2026-01-16 | AaB esport              | W   | 0.812      | 0.337        | 0.000 (0.000)    | 0.591 (0.162)    | 1 (0.812) |    23.66 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     2380 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.812      | 0.337        | 0.000 (0.000)    | 0.185 (0.051)    | 1 (0.812) |    16.10 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     2396 | 2026-01-16 | Johnny Speeds           | L   | 0.811      | -            | -                | -                | -         |    -0.91 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
