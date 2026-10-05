### Roster Details<br />
Team Name: ex-VP.Prodigy<br />
Roster: lasfas, rokilan, Stoynes, sun, TriBorgg1<br />
Global Rank: [345](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [228]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  489.0<br />
<br />
Final Rank Value (489.0) = Starting Rank Value (491.0) + Head To Head Adjustments (-2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.181[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.046<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 491.0
- 400 + ( ( 0.046 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 491.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1062 | 2026-09-11 | ZOTIX     | L   | 1.000      | -            | -                | -                | -         |   -14.04 | lasfas, MRcreed, rokilan, smith, TriBorgg1 |
|            6 |     1186 | 2026-09-09 | XI        | W   | 1.000      | 0.357        | 0.001 (0.000)    | 0.044 (0.016)    | 0 (0.000) |    18.75 | lasfas, MRcreed, rokilan, smith, TriBorgg1 |
|            5 |     3794 | 2026-06-05 | Clutchain | L   | 0.388      | -            | -                | -                | -         |    -6.26 | lasfas, rokilan, Stoynes, sun, TriBorgg1   |
|            4 |     3889 | 2026-06-01 | Lilmix    | L   | 0.361      | -            | -                | -                | -         |    -1.48 | lasfas, rokilan, Stoynes, sun, TriBorgg1   |
|            3 |     5375 | 2026-04-22 | Drama     | L   | 0.092      | -            | -                | -                | -         |    -0.43 | lasfas, rokilan, Stoynes, sun, TriBorgg1   |
|            2 |     5389 | 2026-04-20 | cirahvi   | W   | 0.084      | 0.303        | 0.001 (0.000)    | 0.025 (0.001)    | 0 (0.000) |     1.76 | lasfas, rokilan, Stoynes, sun, TriBorgg1   |
|            1 |     5442 | 2026-04-18 | DONSTU    | L   | 0.067      | -            | -                | -                | -         |    -0.33 | lasfas, rokilan, Stoynes, sun, TriBorgg1   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
