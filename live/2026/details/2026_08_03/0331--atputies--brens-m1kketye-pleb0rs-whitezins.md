### Roster Details<br />
Team Name: atputies<br />
Roster: Brens, m1kketye, Pleb0rs, whitezins<br />
Global Rank: [331](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [211]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  563.7<br />
<br />
Final Rank Value (563.7) = Starting Rank Value (549.0) + Head To Head Adjustments (14.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.116[<sup>2</sup>](#table1)

The average of these factors is 0.077<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 549.0
- 400 + ( ( 0.077 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 549.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      154 | 2026-07-27 | ASTRAL     | L   | 1.000      | -            | -                | -                | -         |    -2.57 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            4 |      156 | 2026-07-27 | Noir Verse | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.207 (0.063)    | 1 (1.000) |    27.02 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            3 |      160 | 2026-07-27 | PURE       | L   | 1.000      | -            | -                | -                | -         |    -4.59 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            2 |     1018 | 2026-06-13 | Noir Verse | L   | 0.859      | -            | -                | -                | -         |    -3.53 | Brens, hek, m1kketye, Pleb0rs, whitezins   |
|            1 |     1029 | 2026-06-13 | Metizport  | L   | 0.858      | -            | -                | -                | -         |    -1.61 | Brens, hek, m1kketye, Pleb0rs, whitezins   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
