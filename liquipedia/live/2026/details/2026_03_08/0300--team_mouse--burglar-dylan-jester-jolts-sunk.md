### Roster Details<br />
Team Name: Team mouse<br />
Roster: Burglar, DYLAN, Jester, Jolts, Sunk<br />
Global Rank: [300](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [84]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  507.4<br />
<br />
Final Rank Value (507.4) = Starting Rank Value (491.9) + Head To Head Adjustments (15.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.9
- 400 + ( ( 0.048 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 491.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.074
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      805 | 2026-02-15 | Life's A Game | L   | 1.000      | -            | -                | -                | -         |    -4.45 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |     1043 | 2026-02-10 | BOSS          | L   | 1.000      | -            | -                | -                | -         |    -4.81 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |     1052 | 2026-02-10 | Passion UA    | L   | 1.000      | -            | -                | -                | -         |    -0.42 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            4 |     1096 | 2026-02-08 | F5 Esports    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.081 (0.012)    | 0 (0.000) |    18.30 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            3 |     1159 | 2026-02-06 | Regain        | L   | 1.000      | -            | -                | -                | -         |    -7.38 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     1194 | 2026-02-05 | Mythic        | W   | 0.994      | 0.333        | 0.001 (0.000)    | 0.071 (0.023)    | 0 (0.000) |    21.51 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     1268 | 2026-02-02 | Regain        | L   | 0.974      | -            | -                | -                | -         |    -7.30 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
