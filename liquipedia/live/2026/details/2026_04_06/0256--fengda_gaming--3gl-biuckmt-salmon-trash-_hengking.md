### Roster Details<br />
Team Name: FengDa Gaming<br />
Roster: 3gl, Biuckmt, salmon, Trash, сhengking<br />
Global Rank: [256](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  642.9<br />
<br />
Final Rank Value (642.9) = Starting Rank Value (634.6) + Head To Head Adjustments (8.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.249[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.6
- 400 + ( ( 0.120 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 634.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.024
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |     4628 | 2025-11-12 | Morningstar         | L   | 0.233      | -            | -                | -                | -         |    -0.89 | 3gl, Biuckmt, salmon, Trash, сhengking |
|           11 |     4688 | 2025-11-10 | Change The Game     | W   | 0.220      | 0.333        | 0.010 (0.001)    | 0.252 (0.018)    | 0 (0.000) |     5.63 | 3gl, Biuckmt, salmon, Trash, сhengking |
|           10 |     4726 | 2025-11-08 | BORING PLAYER       | L   | 0.211      | -            | -                | -                | -         |    -2.95 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            9 |     4774 | 2025-11-08 | Change The Game     | L   | 0.205      | -            | -                | -                | -         |    -1.23 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            8 |     4914 | 2025-11-06 | Ever Growing Gaming | W   | 0.192      | 0.380        | 0.000 (0.000)    | 0.006 (0.000)    | 1 (0.192) |     1.30 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            7 |     5181 | 2025-10-27 | The QUBE Esports    | W   | 0.126      | 0.333        | 0.009 (0.000)    | 0.217 (0.009)    | 0 (0.000) |     3.00 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            6 |     5239 | 2025-10-26 | Chinggis Warriors   | L   | 0.120      | -            | -                | -                | -         |    -0.15 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            5 |     5355 | 2025-10-24 | ScarX               | W   | 0.106      | 0.333        | 0.000 (0.000)    | 0.061 (0.002)    | 0 (0.000) |     0.70 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            4 |     5404 | 2025-10-23 | BORING PLAYER       | W   | 0.100      | 0.333        | 0.002 (0.000)    | 0.134 (0.004)    | 0 (0.000) |     1.77 | 3gl, Biuckmt, salmon, Trash, сhengking |
|            3 |     5552 | 2025-10-16 | Rare Atom           | L   | 0.053      | -            | -                | -                | -         |    -0.06 | 3gl, Biuckmt, p5p, salmon, сhengking   |
|            2 |     5622 | 2025-10-14 | Morningstar         | W   | 0.040      | 0.333        | 0.027 (0.000)    | 0.316 (0.004)    | 0 (0.000) |     1.10 | 3gl, Biuckmt, p5p, salmon, сhengking   |
|            1 |     5766 | 2025-10-09 | DEPO                | W   | 0.006      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.07 | 3gl, Biuckmt, p5p, salmon, сhengking   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($449.06)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-13 |      0.240 | $1,500.00      | $359.74         |
| 2025-10-17 |      0.060 | $1,500.00      | $89.32          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
