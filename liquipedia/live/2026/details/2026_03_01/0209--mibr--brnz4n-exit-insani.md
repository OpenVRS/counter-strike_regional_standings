### Roster Details<br />
Team Name: MIBR<br />
Roster: brnz4n, exit, insani<br />
Global Rank: [209](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_01.md)<br />
Regional Rank: [47]( ../../standings_americas_2026_03_01.md)<br />
<br />
Final Rank Value:  677.3<br />
<br />
Final Rank Value (677.3) = Starting Rank Value (673.7) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 673.7
- 400 + ( ( 0.145 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 673.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.006
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3223 | 2025-10-28 | Fnatic       | L   | 0.367      | -            | -                | -                | -         |    -0.34 | brn$, brnz4n, exit, insani, Qikert |
|            4 |     3275 | 2025-10-27 | Astralis     | L   | 0.360      | -            | -                | -                | -         |    -0.06 | brn$, brnz4n, exit, insani, Qikert |
|            3 |     3341 | 2025-10-26 | BetBoom Team | L   | 0.352      | -            | -                | -                | -         |    -0.16 | brn$, brnz4n, exit, insani, Qikert |
|            2 |     4724 | 2025-09-17 | RED Canids   | W   | 0.095      | 0.363        | 0.050 (0.002)    | 0.675 (0.023)    | 0 (0.000) |     2.90 | Brn, brnz4n, exit, insani, nicks   |
|            1 |     4955 | 2025-09-11 | Keyd Stars   | W   | 0.055      | 0.363        | 0.013 (0.000)    | 0.169 (0.003)    | 0 (0.000) |     1.20 | Brn, brnz4n, exit, insani, nicks   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,928.67)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-01 |      0.392 | $12,500.00     | $4,904.22       |
| 2025-09-22 |      0.128 | $8,000.00      | $1,024.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
