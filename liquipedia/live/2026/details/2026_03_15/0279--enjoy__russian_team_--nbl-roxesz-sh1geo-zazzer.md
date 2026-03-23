### Roster Details<br />
Team Name: ENJOY (Russian team)<br />
Roster: nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [279](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [172]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  573.2<br />
<br />
Final Rank Value (573.2) = Starting Rank Value (527.2) + Head To Head Adjustments (46.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 527.2
- 400 + ( ( 0.065 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 527.2


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
|            5 |       71 | 2026-03-13 | Young Ninjas | L   | 1.000      | -            | -                | -                | -         |    -7.00 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     1400 | 2026-02-14 | TDK          | L   | 1.000      | -            | -                | -                | -         |    -1.98 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     1496 | 2026-02-13 | VP.Prodigy   | W   | 0.997      | 0.384        | 0.004 (0.001)    | 0.536 (0.205)    | 0 (0.000) |    29.75 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     1598 | 2026-02-10 | QWENTRY      | L   | 0.979      | -            | -                | -                | -         |    -3.91 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     1628 | 2026-02-09 | VP.Prodigy   | W   | 0.970      | 0.384        | 0.004 (0.001)    | 0.536 (0.200)    | 0 (0.000) |    29.17 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
