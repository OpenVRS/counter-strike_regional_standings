### Roster Details<br />
Team Name: FRZ<br />
Roster: brawckzz, j3nni, Jachro, Sharpie, toasty<br />
Global Rank: [379](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [98]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  467.4<br />
<br />
Final Rank Value (467.4) = Starting Rank Value (463.2) + Head To Head Adjustments (4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.130[<sup>2</sup>](#table1)

The average of these factors is 0.033<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 463.2
- 400 + ( ( 0.033 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 463.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1343 | 2026-05-30 | NuTorious   | L   | 0.768      | -            | -                | -                | -         |    -2.48 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            7 |     1354 | 2026-05-30 | NXG         | W   | 0.768      | 0.294        | 0.000 (0.000)    | 0.036 (0.008)    | 1 (0.768) |    11.58 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            6 |     1366 | 2026-05-30 | Reign Above | L   | 0.766      | -            | -                | -                | -         |    -6.22 | BATSPEED, brawckzz, Jachro, Sharpie, toasty |
|            5 |     2625 | 2026-04-25 | Marsborne   | L   | 0.535      | -            | -                | -                | -         |    -1.04 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            4 |     2648 | 2026-04-25 | Wildcard    | L   | 0.534      | -            | -                | -                | -         |    -0.13 | brawckzz, j3nni, Jachro, Sharpie, toasty    |
|            3 |     3825 | 2026-03-28 | NuTorious   | L   | 0.348      | -            | -                | -                | -         |    -1.00 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            2 |     3841 | 2026-03-28 | Aura        | W   | 0.347      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.347) |     4.49 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |
|            1 |     3855 | 2026-03-28 | NuTorious   | L   | 0.346      | -            | -                | -                | -         |    -0.97 | FRIZZY, j3nni, Jachro, Sharpie, toasty      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
