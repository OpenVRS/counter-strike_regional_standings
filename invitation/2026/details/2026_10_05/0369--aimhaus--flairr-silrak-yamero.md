### Roster Details<br />
Team Name: Aimhaus<br />
Roster: flairr, silrak, Yamero<br />
Global Rank: [369](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [242]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  420.7<br />
<br />
Final Rank Value (420.7) = Starting Rank Value (426.9) + Head To Head Adjustments (-6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.013<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 426.9
- 400 + ( ( 0.013 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 426.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      221 | 2026-09-29 | ENCE        | L   | 1.000      | -            | -                | -                | -         |    -1.05 | BRK, Ed1m, flairr, silrak, Yamero          |
|            6 |      226 | 2026-09-29 | Sangal      | L   | 1.000      | -            | -                | -                | -         |    -0.17 | BRK, Ed1m, flairr, silrak, Yamero          |
|            5 |      230 | 2026-09-29 | HYPERSPIRIT | L   | 1.000      | -            | -                | -                | -         |    -2.75 | BRK, Ed1m, flairr, silrak, Yamero          |
|            4 |     3329 | 2026-06-29 | BERG        | L   | 0.545      | -            | -                | -                | -         |    -1.38 | blazekiNho, flairr, nisker, silrak, Yamero |
|            3 |     3351 | 2026-06-28 | Coalesce    | L   | 0.539      | -            | -                | -                | -         |    -7.77 | blazekiNho, flairr, nisker, silrak, Yamero |
|            2 |     3355 | 2026-06-28 | GAMEHARMONY | W   | 0.539      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.539) |     7.60 | blazekiNho, flairr, nisker, silrak, Yamero |
|            1 |     3356 | 2026-06-28 | Leo         | L   | 0.539      | -            | -                | -                | -         |    -0.67 | blazekiNho, flairr, nisker, silrak, Yamero |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
