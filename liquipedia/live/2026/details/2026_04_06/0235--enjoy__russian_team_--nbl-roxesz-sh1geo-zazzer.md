### Roster Details<br />
Team Name: ENJOY (Russian team)<br />
Roster: nbl, roxesz, sh1geo, zazzer<br />
Global Rank: [235](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [150]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  670.0<br />
<br />
Final Rank Value (670.0) = Starting Rank Value (651.5) + Head To Head Adjustments (18.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.129<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 651.5
- 400 + ( ( 0.129 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 651.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.026
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      471 | 2026-03-27 | OLDBOYS      | L   | 1.000      | -            | -                | -                | -         |   -14.41 | nbl, roxesz, sh1geo, spiker, zazzer |
|            5 |     1141 | 2026-03-13 | Young Ninjas | L   | 1.000      | -            | -                | -                | -         |    -9.31 | kurosa, nbl, roxesz, sh1geo, zazzer |
|            4 |     2526 | 2026-02-14 | TDK          | L   | 0.860      | -            | -                | -                | -         |    -1.46 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            3 |     2622 | 2026-02-13 | VP.Prodigy   | W   | 0.851      | 0.384        | 0.003 (0.001)    | 0.441 (0.144)    | 0 (0.000) |    24.44 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            2 |     2724 | 2026-02-10 | QWENTRY      | L   | 0.833      | -            | -                | -                | -         |    -4.64 | nbl, reyoz, roxesz, sh1geo, zazzer  |
|            1 |     2754 | 2026-02-09 | VP.Prodigy   | W   | 0.825      | 0.384        | 0.003 (0.001)    | 0.441 (0.140)    | 0 (0.000) |    23.85 | nbl, reyoz, roxesz, sh1geo, zazzer  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      1.000 | $1,000.00      | $1,000.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
