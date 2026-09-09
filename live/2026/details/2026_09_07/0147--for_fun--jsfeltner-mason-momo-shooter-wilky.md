### Roster Details<br />
Team Name: For Fun<br />
Roster: jsfeltner, mason, Momo, Shooter, Wilky<br />
Global Rank: [147](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [26]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  807.3<br />
<br />
Final Rank Value (807.3) = Starting Rank Value (794.7) + Head To Head Adjustments (12.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.259[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.337[<sup>2</sup>](#table1)

The average of these factors is 0.207<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 794.7
- 400 + ( ( 0.207 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 794.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      230 | 2026-08-30 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |    -5.49 | jsfeltner, mason, Momo, Shooter, Wilky |
|            4 |      246 | 2026-08-30 | Wanted Goons    | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.083 (0.028)    | 1 (1.000) |     9.45 | jsfeltner, mason, Momo, Shooter, Wilky |
|            3 |      287 | 2026-08-30 | regain          | W   | 1.000      | 0.333        | 0.009 (0.003)    | 0.303 (0.101)    | 1 (1.000) |    14.79 | jsfeltner, mason, Momo, Shooter, Wilky |
|            2 |      291 | 2026-08-29 | Kodex           | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.17 | jsfeltner, mason, Momo, Shooter, Wilky |
|            1 |      297 | 2026-08-29 | LAG             | L   | 1.000      | -            | -                | -                | -         |    -9.34 | jsfeltner, mason, Momo, Shooter, Wilky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($700.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $700.00        | $700.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
