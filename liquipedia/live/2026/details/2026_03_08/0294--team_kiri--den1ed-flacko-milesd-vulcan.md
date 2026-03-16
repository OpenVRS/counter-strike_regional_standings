### Roster Details<br />
Team Name: Team Kiri<br />
Roster: den1ed, flacko, milesd, VulcaN<br />
Global Rank: [294](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [81]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  515.1<br />
<br />
Final Rank Value (515.1) = Starting Rank Value (502.0) + Head To Head Adjustments (13.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.0
- 400 + ( ( 0.053 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 502.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.038
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     3421 | 2025-10-27 | Mythic               | L   | 0.321      | -            | -                | -                | -         |    -3.27 | den1ed, flacko, milesd, myline, VulcaN  |
|            7 |     3464 | 2025-10-26 | Regain               | W   | 0.315      | 0.363        | 0.007 (0.001)    | 0.280 (0.032)    | 0 (0.000) |     7.32 | den1ed, flacko, milesd, myline, VulcaN  |
|            6 |     3519 | 2025-10-25 | Chicken Coop Esports | W   | 0.308      | 0.363        | 0.000 (0.000)    | 0.175 (0.020)    | 0 (0.000) |     5.18 | den1ed, flacko, milesd, myline, VulcaN  |
|            5 |     3529 | 2025-10-25 | SkinRave Esports     | L   | 0.307      | -            | -                | -                | -         |    -1.20 | flacko, Freaky, milesd, myline, VulcaN  |
|            4 |     3856 | 2025-10-14 | Regain               | L   | 0.234      | -            | -                | -                | -         |    -1.85 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            3 |     3977 | 2025-10-09 | OverKnight           | W   | 0.201      | 0.363        | 0.000 (0.000)    | 0.118 (0.009)    | 0 (0.000) |     4.26 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            2 |     4076 | 2025-10-07 | FlyQuest RED         | W   | 0.188      | 0.363        | 0.008 (0.001)    | 0.150 (0.010)    | 0 (0.000) |     4.44 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            1 |     4191 | 2025-10-05 | OverKnight           | L   | 0.174      | -            | -                | -                | -         |    -1.80 | den1ed, flacko, HorizoN, milesd, VulcaN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
