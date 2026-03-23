### Roster Details<br />
Team Name: Team Aether<br />
Roster: micro, misha, Sathsea<br />
Global Rank: [283](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  569.7<br />
<br />
Final Rank Value (569.7) = Starting Rank Value (590.6) + Head To Head Adjustments (-20.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.199[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.097<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 590.6
- 400 + ( ( 0.097 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 590.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.009
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2837 | 2025-12-07 | Life's A Game | L   | 0.548      | -            | -                | -                | -         |    -4.89 | micro, misha, Sathsea, Seb, Umar      |
|            5 |     2906 | 2025-12-04 | Wanted Goons  | L   | 0.529      | -            | -                | -                | -         |   -10.92 | micro, misha, Sathsea, Seb, Umar      |
|            4 |     2950 | 2025-12-02 | Take Flyte    | L   | 0.515      | -            | -                | -                | -         |   -10.15 | micro, misha, Sathsea, Seb, Umar      |
|            3 |     4147 | 2025-10-24 | Regain        | W   | 0.255      | 0.363        | 0.005 (0.000)    | 0.235 (0.022)    | 0 (0.000) |     5.08 | Arcade, micro, misha, Sathsea, Tender |
|            2 |     5423 | 2025-09-18 | Wildcard      | L   | 0.015      | -            | -                | -                | -         |    -0.18 | juna, micro, misha, Sathsea, Tender   |
|            1 |     5459 | 2025-09-17 | BOSS          | W   | 0.008      | 0.363        | 0.012 (0.000)    | 0.356 (0.001)    | 0 (0.000) |     0.19 | juna, micro, misha, Sathsea, Tender   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($41.41)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-09-22 |      0.041 | $1,000.00      | $41.41          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
