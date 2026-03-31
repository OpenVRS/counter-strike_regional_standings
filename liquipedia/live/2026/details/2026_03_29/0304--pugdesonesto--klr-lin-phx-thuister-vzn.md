### Roster Details<br />
Team Name: Pugdesonesto<br />
Roster: KLR, Lin, phx, Thuister, vzn<br />
Global Rank: [304](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  534.3<br />
<br />
Final Rank Value (534.3) = Starting Rank Value (510.4) + Head To Head Adjustments (23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.057<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 510.4
- 400 + ( ( 0.057 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 510.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.063
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                 | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      872 | 2026-03-09 | R2 Esports Club          | L   | 1.000      | -            | -                | -                | -         |    -7.53 | KLR, Lin, phx, Thuister, vzn |
|            4 |      968 | 2026-03-08 | Procyon Team             | L   | 1.000      | -            | -                | -                | -         |    -5.34 | KLR, Lin, phx, Thuister, vzn |
|            3 |      991 | 2026-03-07 | Players (Brazilian team) | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.320 (0.107)    | 0 (0.000) |    19.67 | KLR, Lin, phx, Thuister, vzn |
|            2 |     1159 | 2026-03-04 | Keyd Stars               | L   | 1.000      | -            | -                | -                | -         |    -5.48 | KLR, Lin, phx, Thuister, vzn |
|            1 |     1194 | 2026-03-03 | FURIA Female             | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.129 (0.043)    | 0 (0.000) |    22.57 | KLR, Lin, phx, Thuister, vzn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
