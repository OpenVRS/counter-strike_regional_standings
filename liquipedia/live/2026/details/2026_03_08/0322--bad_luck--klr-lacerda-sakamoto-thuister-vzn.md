### Roster Details<br />
Team Name: Bad Luck<br />
Roster: KLR, Lacerda, Sakamoto, Thuister, vzn<br />
Global Rank: [322](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [91]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  429.6<br />
<br />
Final Rank Value (429.6) = Starting Rank Value (403.1) + Head To Head Adjustments (26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.002<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 403.1
- 400 + ( ( 0.002 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 403.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.098
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1605 | 2026-01-22 | Bounty Hunters Esports | L   | 0.899      | -            | -                | -                | -         |    -1.68 | KLR, Lacerda, Sakamoto, Thuister, vzn |
|            5 |     1640 | 2026-01-21 | Metanoia               | W   | 0.893      | 0.371        | 0.000 (0.000)    | 0.102 (0.034)    | 0 (0.000) |    13.43 | KLR, Lacerda, Sakamoto, Thuister, vzn |
|            4 |     1685 | 2026-01-20 | Prison Breakers        | L   | 0.885      | -            | -                | -                | -         |    -8.92 | KLR, Lacerda, Sakamoto, Thuister, vzn |
|            3 |     1718 | 2026-01-18 | Charrados FC           | W   | 0.872      | 0.371        | 0.000 (0.000)    | 0.032 (0.010)    | 0 (0.000) |    13.09 | KLR, Lacerda, Sakamoto, Thuister, vzn |
|            2 |     1804 | 2026-01-16 | Isurus                 | L   | 0.859      | -            | -                | -                | -         |    -2.23 | KLR, Lacerda, Sakamoto, Thuister, vzn |
|            1 |     1890 | 2026-01-14 | HereWeGoAgain          | W   | 0.846      | 0.371        | 0.000 (0.000)    | 0.065 (0.020)    | 0 (0.000) |    12.82 | KLR, Lacerda, Sakamoto, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
