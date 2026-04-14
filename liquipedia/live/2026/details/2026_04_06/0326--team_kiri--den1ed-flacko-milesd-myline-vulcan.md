### Roster Details<br />
Team Name: Team Kiri<br />
Roster: den1ed, flacko, milesd, myline, VulcaN<br />
Global Rank: [326](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [93]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  501.5<br />
<br />
Final Rank Value (501.5) = Starting Rank Value (497.6) + Head To Head Adjustments (3.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.050<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 497.6
- 400 + ( ( 0.050 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 497.6


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


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     5156 | 2025-10-27 | Mythic               | L   | 0.130      | -            | -                | -                | -         |    -1.29 | den1ed, flacko, milesd, myline, VulcaN  |
|            8 |     5200 | 2025-10-26 | Regain               | W   | 0.123      | 0.363        | 0.003 (0.000)    | 0.237 (0.011)    | 0 (0.000) |     2.81 | den1ed, flacko, milesd, myline, VulcaN  |
|            7 |     5258 | 2025-10-25 | Chicken Coop Esports | W   | 0.116      | 0.363        | 0.017 (0.001)    | 0.186 (0.008)    | 0 (0.000) |     2.91 | den1ed, flacko, milesd, myline, VulcaN  |
|            6 |     5270 | 2025-10-25 | SkinRave Esports     | L   | 0.115      | -            | -                | -                | -         |    -0.58 | flacko, Freaky, milesd, myline, VulcaN  |
|            5 |     5306 | 2025-10-24 | Team Voca            | L   | 0.110      | -            | -                | -                | -         |    -0.95 | den1ed, flacko, milesd, myline, VulcaN  |
|            4 |     5372 | 2025-10-23 | Ex-Arrival Seven     | W   | 0.103      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.19 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            3 |     5608 | 2025-10-14 | Regain               | L   | 0.043      | -            | -                | -                | -         |    -0.36 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            2 |     5733 | 2025-10-09 | OverKnight           | W   | 0.010      | 0.363        | 0.000 (0.000)    | 0.075 (0.000)    | 0 (0.000) |     0.16 | Brashi, den1ed, flacko, milesd, VulcaN  |
|            1 |     5782 | 2025-10-08 | NuTorious            | W   | 0.003      | 0.363        | 0.000 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.05 | Brashi, den1ed, flacko, HorizoN, milesd |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
