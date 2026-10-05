### Roster Details<br />
Team Name: HAVENs<br />
Roster: Brens, FABEN, Pleb0rs, whitezins<br />
Global Rank: [322](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [213]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  533.3<br />
<br />
Final Rank Value (533.3) = Starting Rank Value (535.8) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.073[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.8
- 400 + ( ( 0.068 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 535.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      236 | 2026-09-29 | Inner Circle Academy | L   | 1.000      | -            | -                | -                | -         |    -1.54 | FABEN, ledzh1t, Loodi, Pleb0rs, whitezins  |
|            7 |      240 | 2026-09-29 | KUUSAMO              | L   | 1.000      | -            | -                | -                | -         |    -7.11 | FABEN, ledzh1t, Loodi, Pleb0rs, whitezins  |
|            6 |      246 | 2026-09-29 | INFURITY             | L   | 1.000      | -            | -                | -                | -         |    -7.43 | FABEN, ledzh1t, Loodi, Pleb0rs, whitezins  |
|            5 |     2560 | 2026-08-01 | The Last Resort      | L   | 0.766      | -            | -                | -                | -         |    -1.93 | Atoks1l, Brens, FABEN, Pleb0rs, whitezins  |
|            4 |     2567 | 2026-08-01 | Liquid               | L   | 0.765      | -            | -                | -                | -         |    -0.08 | Atoks1l, Brens, FABEN, Pleb0rs, whitezins  |
|            3 |     2721 | 2026-07-27 | ASTRAL               | L   | 0.733      | -            | -                | -                | -         |    -1.66 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            2 |     2723 | 2026-07-27 | Noir Verse           | W   | 0.733      | 0.303        | 0.002 (0.000)    | 0.649 (0.144)    | 1 (0.733) |    20.11 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |
|            1 |     2729 | 2026-07-27 | Azuolas              | L   | 0.732      | -            | -                | -                | -         |    -2.79 | Brens, FABEN, m1kketye, Pleb0rs, whitezins |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
