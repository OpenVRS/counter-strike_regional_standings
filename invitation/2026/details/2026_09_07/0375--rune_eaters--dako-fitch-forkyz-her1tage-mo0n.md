### Roster Details<br />
Team Name: Rune Eaters<br />
Roster: dako, fitch, forkyz, her1tage, mo0N<br />
Global Rank: [375](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [238]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  470.6<br />
<br />
Final Rank Value (470.6) = Starting Rank Value (469.6) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.146[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.037<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 469.6
- 400 + ( ( 0.037 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 469.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5306 | 2026-03-24 | cirahvi         | L   | 0.078      | -            | -                | -                | -         |    -0.73 | dako, fitch, her1tage, kumao, noni  |
|            7 |     5588 | 2026-03-19 | HYPERSPIRIT     | L   | 0.045      | -            | -                | -                | -         |    -0.23 | dako, fitch, forkyz, her1tage, mo0N |
|            6 |     5614 | 2026-03-18 | hindsight       | W   | 0.040      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.51 | dako, fitch, forkyz, her1tage, mo0N |
|            5 |     5655 | 2026-03-17 | Leo             | W   | 0.034      | 0.435        | 0.000 (0.000)    | 0.072 (0.001)    | 0 (0.000) |     0.73 | dako, forkyz, her1tage, kumao, mo0N |
|            4 |     5678 | 2026-03-17 | RBLS            | L   | 0.031      | -            | -                | -                | -         |    -0.12 | dako, fitch, forkyz, her1tage, mo0N |
|            3 |     5718 | 2026-03-16 | AKA HERO KAJO   | W   | 0.025      | 0.384        | 0.000 (0.000)    | 0.005 (0.000)    | 0 (0.000) |     0.32 | dako, fitch, forkyz, her1tage, mo0N |
|            2 |     5752 | 2026-03-15 | brazylijski luz | W   | 0.020      | 0.435        | 0.002 (0.000)    | 0.075 (0.001)    | 0 (0.000) |     0.48 | dako, forkyz, her1tage, kumao, mo0N |
|            1 |     5837 | 2026-03-13 | Nemiga          | L   | 0.007      | -            | -                | -                | -         |    -0.01 | dako, forkyz, her1tage, kumao, mo0N |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
