### Roster Details<br />
Team Name: Outfit 49<br />
Roster: Gabe, Grimblee, H0NeST, mds, Valter0k<br />
Global Rank: [292](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  603.0<br />
<br />
Final Rank Value (603.0) = Starting Rank Value (604.5) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.179[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.108<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.5
- 400 + ( ( 0.108 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 604.5


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


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5279 | 2026-02-17 | SkinRave Esports | L   | 0.234      | -            | -                | -                | -         |    -3.42 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            5 |     5742 | 2026-02-06 | Zomblers         | L   | 0.160      | -            | -                | -                | -         |    -1.67 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            4 |     5783 | 2026-02-05 | NuTorious        | W   | 0.154      | 0.333        | 0.005 (0.000)    | 0.316 (0.016)    | 0 (0.000) |     4.09 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            3 |     5805 | 2026-02-04 | Life's A Game    | L   | 0.147      | -            | -                | -                | -         |    -0.40 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            2 |     5826 | 2026-02-03 | OverKnight       | W   | 0.140      | 0.333        | 0.000 (0.000)    | 0.023 (0.001)    | 0 (0.000) |     1.51 | Gabe, Grimblee, H0NeST, mds, Valter0k |
|            1 |     5860 | 2026-02-02 | Team Aether      | L   | 0.134      | -            | -                | -                | -         |    -1.64 | Gabe, Grimblee, H0NeST, mds, Valter0k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($546.99)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      0.281 | $1,000.00      | $280.56         |
| 2026-02-22 |      0.266 | $1,000.00      | $266.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
