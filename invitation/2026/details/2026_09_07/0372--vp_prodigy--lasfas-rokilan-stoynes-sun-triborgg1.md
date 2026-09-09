### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: lasfas, rokilan, Stoynes, sun, TriBorgg1<br />
Global Rank: [372](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [237]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  475.1<br />
<br />
Final Rank Value (475.1) = Starting Rank Value (482.8) + Head To Head Adjustments (-7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 482.8
- 400 + ( ( 0.043 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 482.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2442 | 2026-06-05 | Clutchain | L   | 0.567      | -            | -                | -                | -         |    -8.52 | lasfas, rokilan, Stoynes, sun, TriBorgg1 |
|            4 |     2537 | 2026-06-01 | ReThink   | L   | 0.540      | -            | -                | -                | -         |    -2.54 | lasfas, rokilan, Stoynes, sun, TriBorgg1 |
|            3 |     4023 | 2026-04-22 | Atreides  | L   | 0.271      | -            | -                | -                | -         |    -1.35 | lasfas, rokilan, Stoynes, sun, TriBorgg1 |
|            2 |     4037 | 2026-04-20 | cirahvi   | W   | 0.263      | 0.303        | 0.002 (0.000)    | 0.071 (0.006)    | 0 (0.000) |     5.70 | lasfas, rokilan, Stoynes, sun, TriBorgg1 |
|            1 |     4090 | 2026-04-18 | DONSTU    | L   | 0.246      | -            | -                | -                | -         |    -0.98 | lasfas, rokilan, Stoynes, sun, TriBorgg1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
