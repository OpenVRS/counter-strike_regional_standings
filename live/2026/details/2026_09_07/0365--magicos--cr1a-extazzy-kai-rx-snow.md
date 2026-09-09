### Roster Details<br />
Team Name: MAGICOS<br />
Roster: Cr1a, extazzy, kai, rx, snow<br />
Global Rank: [365](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [90]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  482.9<br />
<br />
Final Rank Value (482.9) = Starting Rank Value (481.5) + Head To Head Adjustments (1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.171[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.5
- 400 + ( ( 0.043 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 481.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4611 | 2026-04-02 | paiN Academy   | L   | 0.142      | -            | -                | -                | -         |    -1.56 | Cr1a, extazzy, kai, rx, snow |
|            4 |     4717 | 2026-04-01 | Pugdesonesto   | W   | 0.135      | 0.333        | 0.000 (0.000)    | 0.011 (0.000)    | 0 (0.000) |     2.83 | Cr1a, extazzy, kai, rx, snow |
|            3 |     4842 | 2026-03-31 | BESTIA Academy | L   | 0.126      | -            | -                | -                | -         |    -0.95 | Cr1a, extazzy, kai, rx, snow |
|            2 |     5122 | 2026-03-27 | Players        | L   | 0.102      | -            | -                | -                | -         |    -1.17 | Cr1a, extazzy, kai, rx, snow |
|            1 |     5169 | 2026-03-26 | Vasco          | W   | 0.095      | 0.333        | 0.004 (0.000)    | 0.085 (0.003)    | 0 (0.000) |     2.26 | Cr1a, extazzy, kai, rx, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
