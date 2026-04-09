### Roster Details<br />
Team Name: MONEY CREW<br />
Roster: N2o, obi, taggy<br />
Global Rank: [331](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [39]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  488.7<br />
<br />
Final Rank Value (488.7) = Starting Rank Value (487.0) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.177[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 487.0
- 400 + ( ( 0.044 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 487.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.005
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     5201 | 2025-10-26 | Chicken Coop Esports | L   | 0.122      | -            | -                | -                | -         |    -0.77 | Ethex, N2o, obi, taggy, Zamgaa  |
|            4 |     5318 | 2025-10-24 | BOSS                 | L   | 0.108      | -            | -                | -                | -         |    -0.26 | N2o, obi, taggy, Zamgaa, zy     |
|            3 |     5437 | 2025-10-21 | Outfit 49            | W   | 0.089      | 0.333        | 0.008 (0.000)    | 0.311 (0.009)    | 0 (0.000) |     2.17 | N2o, obi, taggy, Zamgaa, zy     |
|            2 |     5478 | 2025-10-18 | Anything else        | W   | 0.069      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.83 | Ethex, N2o, obi, taggy, zy      |
|            1 |     5636 | 2025-10-13 | Regain               | L   | 0.035      | -            | -                | -                | -         |    -0.29 | dantemoren, N2o, obi, taggy, zy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
