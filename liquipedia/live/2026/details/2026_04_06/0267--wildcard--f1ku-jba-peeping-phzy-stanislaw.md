### Roster Details<br />
Team Name: Wildcard<br />
Roster: F1KU, JBa, Peeping, phzy, stanislaw<br />
Global Rank: [267](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [68]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  619.6<br />
<br />
Final Rank Value (619.6) = Starting Rank Value (616.3) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.239[<sup>1</sup>](#table2)
- Bounty Collected: 0.201[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.111<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.3
- 400 + ( ( 0.111 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 616.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.005
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     5429 | 2025-10-19 | SkinRave Esports        | L   | 0.076      | -            | -                | -                | -         |    -0.68 | F1KU, JBa, Peeping, phzy, stanislaw |
|            5 |     5445 | 2025-10-18 | Marsborne               | W   | 0.069      | 0.363        | 0.038 (0.001)    | 0.491 (0.012)    | 0 (0.000) |     2.12 | F1KU, JBa, Peeping, phzy, stanislaw |
|            4 |     5496 | 2025-10-16 | Team Voca               | W   | 0.056      | 0.363        | 0.004 (0.000)    | 0.044 (0.001)    | 0 (0.000) |     1.00 | F1KU, JBa, Peeping, phzy, stanislaw |
|            3 |     5534 | 2025-10-15 | Regain                  | W   | 0.049      | 0.363        | 0.003 (0.000)    | 0.210 (0.004)    | 0 (0.000) |     0.89 | F1KU, JBa, Peeping, phzy, stanislaw |
|            2 |     5570 | 2025-10-14 | Marsborne               | L   | 0.042      | -            | -                | -                | -         |    -0.03 | F1KU, JBa, Peeping, phzy, stanislaw |
|            1 |     5741 | 2025-10-08 | Phoenix (American team) | W   | 0.002      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.02 | F1KU, JBa, Peeping, phzy, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($302.64)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-19 |      0.076 | $4,000.00      | $302.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
