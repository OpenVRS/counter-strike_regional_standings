### Roster Details<br />
Team Name: FRZ Unit<br />
Roster: brawckzz, j3nni, Jachro, Sharpie, toasty<br />
Global Rank: [330](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [86]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  490.3<br />
<br />
Final Rank Value (490.3) = Starting Rank Value (485.6) + Head To Head Adjustments (4.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 485.6
- 400 + ( ( 0.044 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 485.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.057
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      101 | 2026-05-30 | F5 Esports                   | L   | 1.000      | -            | -                | -                | -         |    -3.72 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            7 |      106 | 2026-05-30 | NXG Esports                  | W   | 1.000      | 0.294        | 0.000 (0.000)    | 0.033 (0.010)    | 1 (1.000) |    14.23 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            6 |      122 | 2026-05-30 | Reign Above                  | L   | 1.000      | -            | -                | -                | -         |    -7.71 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            5 |     1375 | 2026-04-25 | Marsborne                    | L   | 0.908      | -            | -                | -                | -         |    -1.53 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            4 |     1396 | 2026-04-25 | Wildcard                     | L   | 0.907      | -            | -                | -                | -         |    -0.20 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            3 |     2574 | 2026-03-28 | F5 Esports                   | L   | 0.721      | -            | -                | -                | -         |    -2.50 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            2 |     2589 | 2026-03-28 | AURA Esports (American team) | W   | 0.720      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.720) |     8.55 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            1 |     2614 | 2026-03-28 | F5 Esports                   | L   | 0.719      | -            | -                | -                | -         |    -2.40 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
