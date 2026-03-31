### Roster Details<br />
Team Name: Team mouse<br />
Roster: Burglar, DYLAN, Jester, Jolts, Sunk<br />
Global Rank: [315](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [90]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  510.0<br />
<br />
Final Rank Value (510.0) = Starting Rank Value (492.5) + Head To Head Adjustments (17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.5
- 400 + ( ( 0.048 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 492.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.054
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1983 | 2026-02-15 | Life's A Game | L   | 0.922      | -            | -                | -                | -         |    -2.63 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |     2236 | 2026-02-10 | BOSS          | L   | 0.886      | -            | -                | -                | -         |    -6.58 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |     2245 | 2026-02-10 | Passion UA    | L   | 0.885      | -            | -                | -                | -         |    -0.67 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            4 |     2291 | 2026-02-08 | F5 Esports    | W   | 0.873      | 0.143        | 0.002 (0.000)    | 0.213 (0.027)    | 0 (0.000) |    22.27 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            3 |     2355 | 2026-02-06 | Regain        | L   | 0.859      | -            | -                | -                | -         |    -6.72 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     2390 | 2026-02-05 | Mythic        | W   | 0.853      | 0.333        | 0.001 (0.000)    | 0.056 (0.016)    | 0 (0.000) |    18.51 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     2469 | 2026-02-02 | Regain        | L   | 0.833      | -            | -                | -                | -         |    -6.69 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
