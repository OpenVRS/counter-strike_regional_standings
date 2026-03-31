### Roster Details<br />
Team Name: ENJOY (Russian team)<br />
Roster: nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [280](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [174]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  573.4<br />
<br />
Final Rank Value (573.4) = Starting Rank Value (528.8) + Head To Head Adjustments (44.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.039[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.8
- 400 + ( ( 0.065 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 528.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      193 | 2026-03-13 | Young Ninjas | L   | 1.000      | -            | -                | -                | -         |    -6.53 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     1575 | 2026-02-14 | TDK          | L   | 0.958      | -            | -                | -                | -         |    -1.79 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     1671 | 2026-02-13 | VP.Prodigy   | W   | 0.949      | 0.384        | 0.004 (0.001)    | 0.547 (0.199)    | 0 (0.000) |    28.48 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     1773 | 2026-02-10 | QWENTRY      | L   | 0.931      | -            | -                | -                | -         |    -3.46 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     1803 | 2026-02-09 | VP.Prodigy   | W   | 0.922      | 0.384        | 0.004 (0.001)    | 0.547 (0.194)    | 0 (0.000) |    27.86 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
