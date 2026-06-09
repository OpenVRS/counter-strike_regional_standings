### Roster Details<br />
Team Name: Vexa E-Sports<br />
Roster: hug1, neozix, nolkz, ryuzen, zock9<br />
Global Rank: [256](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [60]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  640.6<br />
<br />
Final Rank Value (640.6) = Starting Rank Value (565.6) + Head To Head Adjustments (75.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.087<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 565.6
- 400 + ( ( 0.087 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 565.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.190
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      390 | 2026-05-21 | LargadosyPelados          | L   | 1.000      | -            | -                | -                | -         |    -1.81 | hug1, neozix, nolkz, ryuzen, zock9 |
|           13 |      430 | 2026-05-20 | RED FEET                  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.077 (0.027)    | 0 (0.000) |    12.80 | hug1, neozix, nolkz, ryuzen, zock9 |
|           12 |      480 | 2026-05-18 | UNO MILLE                 | L   | 1.000      | -            | -                | -                | -         |    -5.04 | hug1, neozix, nolkz, ryuzen, zock9 |
|           11 |      483 | 2026-05-18 | Blitzkrieg (Mexican team) | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.107 (0.038)    | 0 (0.000) |    11.81 | hug1, neozix, nolkz, ryuzen, zock9 |
|           10 |      507 | 2026-05-17 | Isurus                    | L   | 1.000      | -            | -                | -                | -         |    -4.24 | hug1, neozix, nolkz, ryuzen, zock9 |
|            9 |      527 | 2026-05-16 | PaiN Gaming Academy       | L   | 1.000      | -            | -                | -                | -         |   -11.59 | hug1, neozix, nolkz, ryuzen, zock9 |
|            8 |      537 | 2026-05-16 | PaiN Gaming Academy       | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.483 (0.161)    | 0 (0.000) |    20.27 | hug1, neozix, nolkz, ryuzen, zock9 |
|            7 |      560 | 2026-05-15 | BESTIA Academy            | L   | 1.000      | -            | -                | -                | -         |   -12.35 | hug1, neozix, nolkz, ryuzen, zock9 |
|            6 |      618 | 2026-05-13 | Bounty Hunters Esports    | L   | 1.000      | -            | -                | -                | -         |    -2.14 | hug1, neozix, nolkz, ryuzen, zock9 |
|            5 |      626 | 2026-05-13 | Metanoia Wolves           | W   | 1.000      | 0.354        | 0.010 (0.003)    | 0.358 (0.127)    | 0 (0.000) |    23.02 | hug1, neozix, nolkz, ryuzen, zock9 |
|            4 |      687 | 2026-05-11 | Yawara E-Sports           | W   | 1.000      | 0.333        | 0.036 (0.012)    | 0.517 (0.172)    | 0 (0.000) |    29.05 | hug1, neozix, nolkz, ryuzen, zock9 |
|            3 |     2811 | 2026-03-22 | Game Hunters              | L   | 0.734      | -            | -                | -                | -         |    -4.15 | hug1, nolkz, rainny, ryuzen, zock9 |
|            2 |     2860 | 2026-03-21 | Isurus                    | W   | 0.727      | 0.363        | 0.038 (0.010)    | 0.597 (0.158)    | 0 (0.000) |    20.11 | hug1, nolkz, rainny, ryuzen, zock9 |
|            1 |     2918 | 2026-03-20 | LargadosyPelados          | L   | 0.721      | -            | -                | -                | -         |    -0.74 | hug1, nolkz, rainny, ryuzen, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
