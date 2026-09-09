### Roster Details<br />
Team Name: Skele<br />
Roster: Arctic, lucas222, neo, tidy<br />
Global Rank: [398](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [48]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  398.5<br />
<br />
Final Rank Value (398.5) = Starting Rank Value (400.1) + Head To Head Adjustments (-1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.1
- 400 + ( ( 0.000 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 400.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3723 | 2026-04-28 | FURY         | L   | 0.311      | -            | -                | -                | -         |    -3.70 | Arctic, lucas222, motion, neo, tidy |
|            5 |     3769 | 2026-04-27 | Ground Zero  | L   | 0.304      | -            | -                | -                | -         |    -0.49 | Arctic, lucas222, motion, neo, tidy |
|            4 |     3836 | 2026-04-26 | Time Waves   | W   | 0.298      | 0.278        | 0.000 (0.000)    | 0.013 (0.001)    | 0 (0.000) |     4.71 | Arctic, lucas222, motion, neo, tidy |
|            3 |     4375 | 2026-04-06 | Rooster      | L   | 0.164      | -            | -                | -                | -         |    -0.62 | BaN4na, lucas222, motion, neo, tidy |
|            2 |     5385 | 2026-03-23 | MARKandLARRY | L   | 0.071      | -            | -                | -                | -         |    -0.52 | Arctic, BaN4na, lucas222, neo, tidy |
|            1 |     5493 | 2026-03-21 | Ground Zero  | L   | 0.058      | -            | -                | -                | -         |    -0.91 | Arctic, BaN4na, lucas222, neo, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
