### Roster Details<br />
Team Name: atputies<br />
Roster: Brens, FABEN, m1kketye, Pleb0rs, whitezins<br />
Global Rank: [318](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [203]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  557.0<br />
<br />
Final Rank Value (557.0) = Starting Rank Value (546.1) + Head To Head Adjustments (10.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 546.1
- 400 + ( ( 0.077 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 546.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1180 | 2026-08-01 | The Last Resort | L   | 0.950      | -            | -                | -                | -         |    -3.18 | Atoks1l, Brens, FABEN, Pleb0rs, whitezins  |
|            6 |     1187 | 2026-08-01 | Liquid          | L   | 0.949      | -            | -                | -                | -         |    -0.17 | Atoks1l, Brens, FABEN, Pleb0rs, whitezins  |
|            5 |     1341 | 2026-07-27 | ASTRAL          | L   | 0.917      | -            | -                | -                | -         |    -2.27 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            4 |     1343 | 2026-07-27 | Noir Verse      | W   | 0.917      | 0.303        | 0.002 (0.001)    | 0.519 (0.144)    | 1 (0.917) |    24.75 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            3 |     1349 | 2026-07-27 | Azuolas         | L   | 0.917      | -            | -                | -                | -         |    -4.57 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            2 |     2225 | 2026-06-13 | Noir Verse      | L   | 0.624      | -            | -                | -                | -         |    -2.48 | Brens, hek, m1kketye, Pleb0rs, whitezins   |
|            1 |     2236 | 2026-06-13 | Metizport       | L   | 0.623      | -            | -                | -                | -         |    -1.14 | Brens, hek, m1kketye, Pleb0rs, whitezins   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
