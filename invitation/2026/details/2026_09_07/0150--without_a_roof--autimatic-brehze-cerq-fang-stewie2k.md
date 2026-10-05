### Roster Details<br />
Team Name: Without a Roof<br />
Roster: autimatic, Brehze, CeRq, FaNg, Stewie2K<br />
Global Rank: [150](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [28]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  793.2<br />
<br />
Final Rank Value (793.2) = Starting Rank Value (755.1) + Head To Head Adjustments (38.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.279[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.225[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 755.1
- 400 + ( ( 0.187 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 755.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |       41 | 2026-09-04 | EMPIRE          | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.156 (0.022)    | 0 (0.000) |    10.71 | autimatic, Brehze, CeRq, FaNg, Stewie2K |
|            5 |       46 | 2026-09-04 | Celestial       | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.17 | autimatic, Brehze, CeRq, FaNg, Stewie2K |
|            4 |      225 | 2026-08-30 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |    -4.69 | autimatic, Brehze, CeRq, FaNg, Stewie2K |
|            3 |      244 | 2026-08-30 | LAG             | L   | 1.000      | -            | -                | -                | -         |    -8.76 | autimatic, Brehze, CeRq, FaNg, Stewie2K |
|            2 |      296 | 2026-08-29 | Wanted Goons    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.083 (0.028)    | 1 (1.000) |    10.62 | autimatic, Brehze, CeRq, FaNg, Stewie2K |
|            1 |      300 | 2026-08-29 | SportsBetExpert | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.430 (0.143)    | 1 (1.000) |    27.10 | autimatic, Brehze, CeRq, FaNg, Stewie2K |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,300.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $1,300.00      | $1,300.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
