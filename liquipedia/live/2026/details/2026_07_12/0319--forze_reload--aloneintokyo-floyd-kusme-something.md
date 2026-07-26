### Roster Details<br />
Team Name: FORZE Reload<br />
Roster: aloneintokyo, floyd, KusMe, Something<br />
Global Rank: [319](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [199]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  555.2<br />
<br />
Final Rank Value (555.2) = Starting Rank Value (531.4) + Head To Head Adjustments (23.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.4
- 400 + ( ( 0.069 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 531.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.025
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4597 | 2026-03-03 | 33            | L   | 0.323      | -            | -                | -                | -         |    -0.49 | aloneintokyo, Goody, KusMe, maloii, Something |
|            5 |     4610 | 2026-03-03 | K27           | L   | 0.323      | -            | -                | -                | -         |    -0.23 | aloneintokyo, floyd, KusMe, Something, spirit |
|            4 |     4641 | 2026-03-02 | Ursa          | W   | 0.317      | 0.333        | 0.012 (0.001)    | 0.890 (0.094)    | 0 (0.000) |     8.55 | aloneintokyo, floyd, Goody, KusMe, Something  |
|            3 |     4651 | 2026-03-02 | Ex-RUBY       | W   | 0.316      | 0.371        | 0.036 (0.004)    | 1.000 (0.117)    | 0 (0.000) |     8.95 | aloneintokyo, floyd, KusMe, Something, spirit |
|            2 |     4889 | 2026-02-25 | Oxuji Esports | L   | 0.283      | -            | -                | -                | -         |    -0.26 | aloneintokyo, floyd, KusMe, Something, spirit |
|            1 |     5115 | 2026-02-21 | Ex-RUBY       | W   | 0.256      | 0.371        | 0.036 (0.003)    | 1.000 (0.095)    | 0 (0.000) |     7.28 | aloneintokyo, floyd, KusMe, Something, spirit |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
