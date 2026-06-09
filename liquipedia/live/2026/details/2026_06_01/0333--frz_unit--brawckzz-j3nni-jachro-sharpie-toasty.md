### Roster Details<br />
Team Name: FRZ Unit<br />
Roster: brawckzz, j3nni, Jachro, Sharpie, toasty<br />
Global Rank: [333](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [87]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  491.5<br />
<br />
Final Rank Value (491.5) = Starting Rank Value (486.7) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.181[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.7
- 400 + ( ( 0.046 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 486.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.059
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       31 | 2026-05-30 | F5 Esports                   | L   | 1.000      | -            | -                | -                | -         |    -3.73 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            7 |       36 | 2026-05-30 | NXG Esports                  | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.033 (0.010)    | 1 (1.000) |    14.14 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            6 |       51 | 2026-05-30 | Reign Above                  | L   | 1.000      | -            | -                | -                | -         |    -7.71 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            5 |     1265 | 2026-04-25 | Marsborne                    | L   | 0.960      | -            | -                | -                | -         |    -1.60 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            4 |     1286 | 2026-04-25 | Wildcard                     | L   | 0.959      | -            | -                | -                | -         |    -0.20 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            3 |     2464 | 2026-03-28 | F5 Esports                   | L   | 0.773      | -            | -                | -                | -         |    -2.70 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            2 |     2479 | 2026-03-28 | AURA Esports (American team) | W   | 0.773      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.773) |     9.12 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            1 |     2504 | 2026-03-28 | F5 Esports                   | L   | 0.772      | -            | -                | -                | -         |    -2.59 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
