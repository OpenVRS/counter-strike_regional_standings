### Roster Details<br />
Team Name: Team mouse<br />
Roster: Burglar, DYLAN, Jester, Jolts, Sunk<br />
Global Rank: [317](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_05.md)<br />
Regional Rank: [89]( ../../standings_americas_2026_04_05.md)<br />
<br />
Final Rank Value:  509.0<br />
<br />
Final Rank Value (509.0) = Starting Rank Value (492.5) + Head To Head Adjustments (16.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.5
- 400 + ( ( 0.047 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 492.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.050
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     2452 | 2026-02-15 | Life's A Game | L   | 0.870      | -            | -                | -                | -         |    -2.44 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            6 |     2705 | 2026-02-10 | BOSS          | L   | 0.835      | -            | -                | -                | -         |    -6.19 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            5 |     2714 | 2026-02-10 | Passion UA    | L   | 0.834      | -            | -                | -                | -         |    -0.22 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            4 |     2760 | 2026-02-08 | F5 Esports    | W   | 0.822      | 0.143        | 0.002 (0.000)    | 0.203 (0.024)    | 0 (0.000) |    20.89 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            3 |     2824 | 2026-02-06 | Regain        | L   | 0.808      | -            | -                | -                | -         |    -6.40 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            2 |     2859 | 2026-02-05 | Mythic        | W   | 0.802      | 0.333        | 0.001 (0.000)    | 0.044 (0.012)    | 0 (0.000) |    17.25 | Burglar, DYLAN, Jester, Jolts, Sunk |
|            1 |     2938 | 2026-02-02 | Regain        | L   | 0.782      | -            | -                | -                | -         |    -6.35 | Burglar, DYLAN, Jester, Jolts, Sunk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
