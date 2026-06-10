### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Gabe, Grimblee, H0NeST, mds, Valter0k<br />
Global Rank: [260](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [63]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  622.1<br />
<br />
Final Rank Value (622.1) = Starting Rank Value (626.5) + Head To Head Adjustments (-4.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.5
- 400 + ( ( 0.118 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 626.5


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


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4569 | 2026-02-17 | SkinRave Esports | L   | 0.463      | -            | -                | -                | -         |    -6.11 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            8 |     5031 | 2026-02-06 | Zomblers         | L   | 0.389      | -            | -                | -                | -         |    -3.88 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            7 |     5072 | 2026-02-05 | F5 Esports       | W   | 0.382      | 0.333        | 0.006 (0.001)    | 0.320 (0.041)    | 0 (0.000) |     9.92 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            6 |     5094 | 2026-02-04 | Life's A Game    | L   | 0.376      | -            | -                | -                | -         |    -0.63 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            5 |     5115 | 2026-02-03 | OverKnight       | W   | 0.369      | 0.333        | 0.000 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     3.88 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            4 |     5149 | 2026-02-02 | Team Aether      | L   | 0.363      | -            | -                | -                | -         |    -4.22 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            3 |     5846 | 2026-01-10 | SkinRave Esports | L   | 0.207      | -            | -                | -                | -         |    -2.83 | Gabe, H0NeST, jchancE, mds, Valter0k  |
|            2 |     5856 | 2026-01-09 | NRG              | L   | 0.202      | -            | -                | -                | -         |    -0.17 | Gabe, H0NeST, jchancE, mds, Valter0k  |
|            1 |     6080 | 2025-12-15 | Regain           | L   | 0.036      | -            | -                | -                | -         |    -0.36 | Gabe, H0NeST, jchancE, mds, Redman    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,220.45)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.509 | $1,000.00      | $509.39         |
| 2026-02-22 |      0.495 | $1,000.00      | $495.27         |
| 2026-01-11 |      0.216 | $1,000.00      | $215.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
