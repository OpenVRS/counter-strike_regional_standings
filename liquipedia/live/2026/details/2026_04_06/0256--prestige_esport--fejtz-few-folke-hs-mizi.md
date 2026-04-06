### Roster Details<br />
Team Name: Prestige Esport<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [256](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_05.md)<br />
Regional Rank: [163]( ../../standings_europe_2026_04_05.md)<br />
<br />
Final Rank Value:  642.4<br />
<br />
Final Rank Value (642.4) = Starting Rank Value (604.7) + Head To Head Adjustments (37.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.105<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.7
- 400 + ( ( 0.105 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 604.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.061
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1117 | 2026-03-14 | Sashi Esport            | L   | 1.000      | -            | -                | -                | -         |    -1.65 | Brillo, fejtZ, Few, Folke, niko |
|            7 |     1124 | 2026-03-14 | ECSTATIC                | L   | 1.000      | -            | -                | -                | -         |    -0.63 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     3466 | 2026-01-17 | Megoshort               | L   | 0.671      | -            | -                | -                | -         |    -2.35 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     3481 | 2026-01-16 | WOPA Esport             | W   | 0.667      | 0.337        | 0.002 (0.000)    | 0.426 (0.096)    | 1 (0.667) |    18.63 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     3492 | 2026-01-16 | Infinite Gaming         | L   | 0.667      | -            | -                | -                | -         |   -13.99 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     3498 | 2026-01-16 | AaB esport              | W   | 0.667      | 0.337        | 0.000 (0.000)    | 0.706 (0.159)    | 1 (0.667) |    19.91 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     3506 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.666      | 0.337        | 0.000 (0.000)    | 0.271 (0.061)    | 1 (0.666) |    18.12 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     3522 | 2026-01-16 | Johnny Speeds           | L   | 0.665      | -            | -                | -                | -         |    -0.36 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
