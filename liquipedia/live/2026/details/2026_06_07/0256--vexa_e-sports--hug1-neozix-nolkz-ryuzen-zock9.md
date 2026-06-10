### Roster Details<br />
Team Name: Vexa E-Sports<br />
Roster: hug1, neozix, nolkz, ryuzen, zock9<br />
Global Rank: [256](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [61]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  637.2<br />
<br />
Final Rank Value (637.2) = Starting Rank Value (564.9) + Head To Head Adjustments (72.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.278[<sup>2</sup>](#table1)
- Opponent Network: 0.065[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.086<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 564.9
- 400 + ( ( 0.086 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 564.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.189
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      500 | 2026-05-21 | LargadosyPelados          | L   | 1.000      | -            | -                | -                | -         |    -1.86 | hug1, neozix, nolkz, ryuzen, zock9 |
|           13 |      540 | 2026-05-20 | RED FEET                  | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.076 (0.027)    | 0 (0.000) |    12.73 | hug1, neozix, nolkz, ryuzen, zock9 |
|           12 |      590 | 2026-05-18 | UNO MILLE                 | L   | 1.000      | -            | -                | -                | -         |    -5.19 | hug1, neozix, nolkz, ryuzen, zock9 |
|           11 |      593 | 2026-05-18 | Blitzkrieg (Mexican team) | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.101 (0.036)    | 0 (0.000) |    11.77 | hug1, neozix, nolkz, ryuzen, zock9 |
|           10 |      617 | 2026-05-17 | Isurus                    | L   | 1.000      | -            | -                | -                | -         |    -4.36 | hug1, neozix, nolkz, ryuzen, zock9 |
|            9 |      637 | 2026-05-16 | PaiN Gaming Academy       | L   | 1.000      | -            | -                | -                | -         |   -11.76 | hug1, neozix, nolkz, ryuzen, zock9 |
|            8 |      647 | 2026-05-16 | PaiN Gaming Academy       | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.466 (0.155)    | 0 (0.000) |    20.09 | hug1, neozix, nolkz, ryuzen, zock9 |
|            7 |      670 | 2026-05-15 | BESTIA Academy            | L   | 1.000      | -            | -                | -                | -         |   -12.46 | hug1, neozix, nolkz, ryuzen, zock9 |
|            6 |      728 | 2026-05-13 | Bounty Hunters Esports    | L   | 1.000      | -            | -                | -                | -         |    -2.30 | hug1, neozix, nolkz, ryuzen, zock9 |
|            5 |      736 | 2026-05-13 | Metanoia Wolves           | W   | 1.000      | 0.354        | 0.009 (0.003)    | 0.347 (0.123)    | 0 (0.000) |    22.85 | hug1, neozix, nolkz, ryuzen, zock9 |
|            4 |      797 | 2026-05-11 | Yawara E-Sports           | W   | 1.000      | 0.333        | 0.036 (0.012)    | 0.499 (0.166)    | 0 (0.000) |    28.88 | hug1, neozix, nolkz, ryuzen, zock9 |
|            3 |     2921 | 2026-03-22 | Game Hunters              | L   | 0.682      | -            | -                | -                | -         |    -4.00 | hug1, nolkz, rainny, ryuzen, zock9 |
|            2 |     2970 | 2026-03-21 | Isurus                    | W   | 0.675      | 0.363        | 0.037 (0.009)    | 0.575 (0.141)    | 0 (0.000) |    18.59 | hug1, nolkz, rainny, ryuzen, zock9 |
|            1 |     3028 | 2026-03-20 | LargadosyPelados          | L   | 0.668      | -            | -                | -                | -         |    -0.71 | hug1, nolkz, rainny, ryuzen, zock9 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
