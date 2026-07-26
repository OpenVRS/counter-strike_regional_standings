### Roster Details<br />
Team Name: Prestige Esport<br />
Roster: fejtZ, Few, Folke, HS, Mizi<br />
Global Rank: [300](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [187]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  594.2<br />
<br />
Final Rank Value (594.2) = Starting Rank Value (595.8) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.236[<sup>1</sup>](#table2)
- Bounty Collected: 0.170[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.006[<sup>2</sup>](#table1)

The average of these factors is 0.103<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 595.8
- 400 + ( ( 0.103 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 595.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.002
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     4034 | 2026-03-14 | Sashi Esport            | L   | 0.397      | -            | -                | -                | -         |    -0.82 | Brillo, fejtZ, Few, Folke, niko |
|            7 |     4041 | 2026-03-14 | ECSTATIC                | L   | 0.396      | -            | -                | -                | -         |    -1.37 | Brillo, fejtZ, Few, Folke, niko |
|            6 |     6396 | 2026-01-17 | Megoshort               | L   | 0.023      | -            | -                | -                | -         |    -0.22 | fejtZ, Few, Folke, HS, Mizi     |
|            5 |     6412 | 2026-01-16 | WOPA Esport             | W   | 0.019      | 0.337        | 0.020 (0.000)    | 0.550 (0.003)    | 1 (0.019) |     0.57 | fejtZ, Few, Folke, HS, Mizi     |
|            4 |     6423 | 2026-01-16 | Infinite Gaming         | L   | 0.018      | -            | -                | -                | -         |    -0.35 | fejtZ, Few, Folke, HS, Mizi     |
|            3 |     6430 | 2026-01-16 | AaB esport              | W   | 0.018      | 0.337        | 0.000 (0.000)    | 0.025 (0.000)    | 1 (0.018) |     0.21 | fejtZ, Few, Folke, HS, Mizi     |
|            2 |     6438 | 2026-01-16 | Aimclub (Romanian team) | W   | 0.017      | 0.337        | 0.001 (0.000)    | 0.294 (0.002)    | 1 (0.017) |     0.46 | fejtZ, Few, Folke, HS, Mizi     |
|            1 |     6457 | 2026-01-16 | Johnny Speeds           | L   | 0.017      | -            | -                | -                | -         |    -0.02 | fejtZ, Few, Folke, HS, Mizi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($316.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.404 | $782.00        | $316.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
