### Roster Details<br />
Team Name: Team mouse<br />
Roster: Burglar, DYLAN, Jester, Jolts, Sunk<br />
Global Rank: [307](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [85]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  504.5<br />
<br />
Final Rank Value (504.5) = Starting Rank Value (490.2) + Head To Head Adjustments (14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.2
- 400 + ( ( 0.046 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 490.2


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


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1326 | 2026-02-15 | Life's A Game | L   | 1.000      | -            | -                | -                | -         |    -4.48 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |     1579 | 2026-02-10 | BOSS          | L   | 0.981      | -            | -                | -                | -         |    -4.86 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |     1588 | 2026-02-10 | Passion UA    | L   | 0.980      | -            | -                | -                | -         |    -0.44 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            4 |     1634 | 2026-02-08 | F5 Esports    | W   | 0.968      | 0.143        | 0.000 (0.000)    | 0.068 (0.009)    | 0 (0.000) |    17.70 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            3 |     1698 | 2026-02-06 | Regain        | L   | 0.954      | -            | -                | -                | -         |    -7.34 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     1733 | 2026-02-05 | Mythic        | W   | 0.947      | 0.333        | 0.001 (0.000)    | 0.080 (0.025)    | 0 (0.000) |    20.94 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     1812 | 2026-02-02 | Regain        | L   | 0.927      | -            | -                | -                | -         |    -7.26 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
