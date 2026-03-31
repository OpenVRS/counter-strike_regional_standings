### Roster Details<br />
Team Name: FRZ Unit<br />
Roster: Jachro, Sharpie, toasty<br />
Global Rank: [333](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [97]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  481.4<br />
<br />
Final Rank Value (481.4) = Starting Rank Value (473.7) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.152[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 473.7
- 400 + ( ( 0.038 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 473.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.039
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       19 | 2026-03-28 | F5 Esports                   | L   | 1.000      | -            | -                | -                | -         |    -6.10 | FRIZZY, j3nni, Jachro, Sharpie, toasty |
|            6 |       28 | 2026-03-28 | AURA Esports (American team) | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |    11.67 | FRIZZY, j3nni, Jachro, Sharpie, toasty |
|            5 |       46 | 2026-03-28 | F5 Esports                   | L   | 1.000      | -            | -                | -                | -         |    -5.87 | FRIZZY, j3nni, Jachro, Sharpie, toasty |
|            4 |     4207 | 2025-11-09 | NRG                          | L   | 0.264      | -            | -                | -                | -         |    -0.09 | Austin, duhpe, Jachro, Sharpie, toasty |
|            3 |     4239 | 2025-11-08 | NuTorious                    | W   | 0.258      | 0.333        | 0.000 (0.000)    | 0.011 (0.001)    | 1 (0.258) |     4.08 | Austin, duhpe, Jachro, Sharpie, toasty |
|            2 |     4246 | 2025-11-08 | M80                          | L   | 0.258      | -            | -                | -                | -         |    -0.07 | Austin, duhpe, Jachro, Sharpie, toasty |
|            1 |     4254 | 2025-11-08 | NuTorious                    | W   | 0.257      | 0.333        | 0.000 (0.000)    | 0.011 (0.001)    | 1 (0.257) |     4.11 | Austin, duhpe, Jachro, Sharpie, toasty |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
