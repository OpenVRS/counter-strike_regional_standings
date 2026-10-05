### Roster Details<br />
Team Name: Beyond Limits<br />
Roster: Beastman, denz, doltn, flixxy, Pr0mise<br />
Global Rank: [301](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [69]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  561.3<br />
<br />
Final Rank Value (561.3) = Starting Rank Value (537.6) + Head To Head Adjustments (23.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 537.6
- 400 + ( ( 0.069 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 537.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1294 | 2026-09-06 | FarmVille      | L   | 1.000      | -            | -                | -                | -         |    -9.59 | Beastman, denz, doltn, flixxy, Pr0mise |
|            5 |     1306 | 2026-09-06 | Iowa Stormboar | L   | 1.000      | -            | -                | -                | -         |    -8.16 | Beastman, denz, doltn, flixxy, Pr0mise |
|            4 |     1359 | 2026-09-05 | Without a Roof | W   | 1.000      | 0.333        | 0.039 (0.013)    | 0.342 (0.114)    | 0 (0.000) |    28.00 | Beastman, denz, doltn, flixxy, Pr0mise |
|            3 |     1398 | 2026-09-04 | NuTorious      | W   | 0.996      | 0.333        | 0.000 (0.000)    | 0.196 (0.065)    | 0 (0.000) |    20.06 | Beastman, denz, doltn, flixxy, Pr0mise |
|            2 |     1454 | 2026-09-03 | LAG            | L   | 0.989      | -            | -                | -                | -         |    -1.63 | Beastman, denz, doltn, flixxy, Pr0mise |
|            1 |     3313 | 2026-06-29 | Club 333       | L   | 0.550      | -            | -                | -                | -         |    -5.02 | Beastman, denz, doltn, flixxy, Pr0mise |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
