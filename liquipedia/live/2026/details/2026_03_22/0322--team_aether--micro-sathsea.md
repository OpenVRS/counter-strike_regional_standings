### Roster Details<br />
Team Name: Team Aether<br />
Roster: micro, Sathsea<br />
Global Rank: [322](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [90]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  476.2<br />
<br />
Final Rank Value (476.2) = Starting Rank Value (492.0) + Head To Head Adjustments (-15.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.183[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.0
- 400 + ( ( 0.046 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 492.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.007
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3012 | 2025-12-07 | Life's A Game | L   | 0.500      | -            | -                | -                | -         |    -2.88 | micro, misha, Sathsea, Seb, Umar       |
|            4 |     3081 | 2025-12-04 | Wanted Goons  | L   | 0.481      | -            | -                | -                | -         |    -9.39 | micro, misha, Sathsea, Seb, Umar       |
|            3 |     3125 | 2025-12-02 | Take Flyte    | L   | 0.467      | -            | -                | -                | -         |    -7.22 | micro, misha, Sathsea, Seb, Umar       |
|            2 |     4169 | 2025-10-27 | BOSS          | L   | 0.227      | -            | -                | -                | -         |    -1.23 | ayaneuu, micro, Misha, Sathsea, Tender |
|            1 |     4322 | 2025-10-24 | Regain        | W   | 0.207      | 0.363        | 0.004 (0.000)    | 0.221 (0.017)    | 0 (0.000) |     4.89 | Arcade, micro, misha, Sathsea, Tender  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
