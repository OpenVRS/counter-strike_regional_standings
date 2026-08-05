### Roster Details<br />
Team Name: Pugdesonesto<br />
Roster: KLR, LIN, phx, Thuister, vzn<br />
Global Rank: [375](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [94]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  474.1<br />
<br />
Final Rank Value (474.1) = Starting Rank Value (471.9) + Head To Head Adjustments (2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.148[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 471.9
- 400 + ( ( 0.037 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 471.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4796 | 2026-03-09 | R2         | L   | 0.220      | -            | -                | -                | -         |    -1.94 | KLR, LIN, phx, Thuister, vzn |
|            4 |     4890 | 2026-03-08 | Procyon    | L   | 0.213      | -            | -                | -                | -         |    -1.41 | KLR, LIN, phx, Thuister, vzn |
|            3 |     4995 | 2026-03-05 | Players    | W   | 0.196      | 0.333        | 0.000 (0.000)    | 0.022 (0.001)    | 0 (0.000) |     3.01 | KLR, LIN, phx, Thuister, vzn |
|            2 |     5085 | 2026-03-04 | Keyd Stars | L   | 0.186      | -            | -                | -                | -         |    -1.28 | KLR, LIN, phx, Thuister, vzn |
|            1 |     5117 | 2026-03-03 | FURIA fe   | W   | 0.181      | 0.333        | 0.000 (0.000)    | 0.045 (0.003)    | 0 (0.000) |     3.83 | KLR, LIN, phx, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
