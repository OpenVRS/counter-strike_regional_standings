### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy<br />
Global Rank: [330](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [91]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  411.7<br />
<br />
Final Rank Value (411.7) = Starting Rank Value (417.4) + Head To Head Adjustments (-5.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 417.4
- 400 + ( ( 0.009 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 417.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.012
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2571 | 2026-01-03 | F5 Esports  | L   | 0.728      | -            | -                | -                | -         |    -6.21 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            4 |     2575 | 2026-01-03 | 9INE        | L   | 0.727      | -            | -                | -                | -         |    -0.16 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            3 |     3567 | 2025-11-08 | Reign Above | L   | 0.355      | -            | -                | -                | -         |    -3.19 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            2 |     3570 | 2025-11-08 | Outfit 49   | W   | 0.354      | 0.333        | 0.000 (0.000)    | 0.015 (0.002)    | 1 (0.354) |     7.04 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            1 |     3580 | 2025-11-08 | Reign Above | L   | 0.353      | -            | -                | -                | -         |    -3.17 | AEROj, fatguy, Ounce, Slugy, Tiski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
