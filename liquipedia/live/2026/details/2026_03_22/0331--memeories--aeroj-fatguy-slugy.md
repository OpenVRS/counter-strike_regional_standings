### Roster Details<br />
Team Name: Memeories<br />
Roster: AEROj, fatguy, Slugy<br />
Global Rank: [331](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [91]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  409.9<br />
<br />
Final Rank Value (409.9) = Starting Rank Value (415.4) + Head To Head Adjustments (-5.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.031[<sup>2</sup>](#table1)

The average of these factors is 0.008<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 415.4
- 400 + ( ( 0.008 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 415.4


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


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2746 | 2026-01-03 | F5 Esports  | L   | 0.680      | -            | -                | -                | -         |    -5.87 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            4 |     2750 | 2026-01-03 | 9INE        | L   | 0.679      | -            | -                | -                | -         |    -0.15 | AEROj, fatguy, Fezera, Slugy, Tisky |
|            3 |     3742 | 2025-11-08 | Reign Above | L   | 0.307      | -            | -                | -                | -         |    -2.78 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            2 |     3745 | 2025-11-08 | Outfit 49   | W   | 0.306      | 0.333        | 0.000 (0.000)    | 0.013 (0.001)    | 1 (0.306) |     6.11 | AEROj, fatguy, Ounce, Slugy, Tiski  |
|            1 |     3755 | 2025-11-08 | Reign Above | L   | 0.305      | -            | -                | -                | -         |    -2.76 | AEROj, fatguy, Ounce, Slugy, Tiski  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
