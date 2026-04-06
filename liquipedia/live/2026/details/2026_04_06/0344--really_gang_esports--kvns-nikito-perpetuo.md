### Roster Details<br />
Team Name: Really Gang Esports<br />
Roster: KvNs, nikito, Perpetuo<br />
Global Rank: [344](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [99]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  450.7<br />
<br />
Final Rank Value (450.7) = Starting Rank Value (448.9) + Head To Head Adjustments (1.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.025<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 448.9
- 400 + ( ( 0.025 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 448.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       29 | 2026-04-04 | Isurus          | L   | 1.000      | -            | -                | -                | -         |    -2.52 | GordoReally, KvNs, nikito, Perpetuo, Rivo |
|            4 |       68 | 2026-04-03 | Hacha Esports   | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    12.73 | GordoReally, KvNs, nikito, Perpetuo, Rivo |
|            3 |       76 | 2026-04-03 | Despedidos      | L   | 1.000      | -            | -                | -                | -         |    -3.33 | GordoReally, KvNs, nikito, Perpetuo, Rivo |
|            2 |     1247 | 2026-03-11 | R2 Esports Club | L   | 1.000      | -            | -                | -                | -         |    -4.78 | daker, F4QQ, KvNs, nikito, Perpetuo       |
|            1 |     1278 | 2026-03-10 | ShindeN         | L   | 1.000      | -            | -                | -                | -         |    -0.34 | daker, F4QQ, KvNs, nikito, Perpetuo       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
