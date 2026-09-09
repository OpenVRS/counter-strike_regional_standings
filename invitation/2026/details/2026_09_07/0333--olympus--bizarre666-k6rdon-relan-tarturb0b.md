### Roster Details<br />
Team Name: Olympus<br />
Roster: Bizarre666, k6rdon, relan, tarturb0b<br />
Global Rank: [333](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [213]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  528.8<br />
<br />
Final Rank Value (528.8) = Starting Rank Value (500.2) + Head To Head Adjustments (28.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 500.2
- 400 + ( ( 0.053 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 500.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2166 | 2026-06-14 | Club 333       | L   | 0.634      | -            | -                | -                | -         |    -6.12 | Bizarre666, botanix666, k6rdon, relan, tarturb0b |
|            7 |     2194 | 2026-06-13 | Wanted Goons   | W   | 0.627      | 0.143        | 0.000 (0.000)    | 0.083 (0.007)    | 0 (0.000) |    13.79 | Bizarre666, botanix666, k6rdon, relan, tarturb0b |
|            6 |     2246 | 2026-06-12 | LAG            | W   | 0.621      | 0.143        | 0.016 (0.001)    | 0.360 (0.032)    | 0 (0.000) |    18.19 | Bizarre666, botanix666, k6rdon, relan, tarturb0b |
|            5 |     4590 | 2026-04-02 | Fisher College | L   | 0.147      | -            | -                | -                | -         |    -0.76 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3    |
|            4 |     4687 | 2026-04-01 | 900FPSvsECO    | W   | 0.140      | 0.769        | 0.000 (0.000)    | 0.024 (0.003)    | 0 (0.000) |     2.78 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3    |
|            3 |     4770 | 2026-03-31 | LAG            | L   | 0.134      | -            | -                | -                | -         |    -0.19 | Bizarre666, k6rdon, relan, tarturb0b, tw1nkl3    |
|            2 |     5178 | 2026-03-25 | AVANT          | W   | 0.095      | 0.624        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.09 | Bizarre666, k6rdon, kodua, relan, tarturb0b      |
|            1 |     5751 | 2026-03-14 | Fisher College | L   | 0.021      | -            | -                | -                | -         |    -0.10 | Bizarre666, botanix666, k6rdon, relan, tarturb0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
