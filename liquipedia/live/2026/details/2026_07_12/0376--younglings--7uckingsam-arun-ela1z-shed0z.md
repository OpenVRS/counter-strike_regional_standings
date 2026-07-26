### Roster Details<br />
Team Name: Younglings<br />
Roster: 7uckingSam, arun, eLa1z, Shed0Z<br />
Global Rank: [376](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [232]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  419.6<br />
<br />
Final Rank Value (419.6) = Starting Rank Value (416.6) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.035[<sup>2</sup>](#table1)

The average of these factors is 0.009<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 416.6
- 400 + ( ( 0.009 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 416.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.013
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2772 | 2026-04-03 | WW Team         | L   | 0.532      | -            | -                | -                | -         |    -1.73 | 7uckingSam, arun, eLa1z, hurtfrisk, Shed0Z |
|            4 |     2792 | 2026-04-03 | ARCRED          | L   | 0.531      | -            | -                | -                | -         |    -0.35 | 7uckingSam, arun, eLa1z, hurtfrisk, Shed0Z |
|            3 |     4568 | 2026-03-03 | SPARTA Esports  | L   | 0.326      | -            | -                | -                | -         |    -0.26 | 7uckingSam, arun, eLa1z, SBolt, Shed0Z     |
|            2 |     4574 | 2026-03-03 | 5Actors         | W   | 0.325      | 0.333        | 0.000 (0.000)    | 0.035 (0.004)    | 1 (0.325) |     5.51 | 7uckingSam, arun, eLa1z, SBolt, Shed0Z     |
|            1 |     4612 | 2026-03-02 | Nuclear TigeRES | L   | 0.322      | -            | -                | -                | -         |    -0.11 | 7uckingSam, arun, eLa1z, SBolt, Shed0Z     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
