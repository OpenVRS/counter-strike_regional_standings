### Roster Details<br />
Team Name: Drama<br />
Roster: andr1x, choiv7, d0jca, miwo, nopzy<br />
Global Rank: [342](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [219]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  541.6<br />
<br />
Final Rank Value (541.6) = Starting Rank Value (535.1) + Head To Head Adjustments (6.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.188[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 535.1
- 400 + ( ( 0.070 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 535.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3200 | 2026-04-05 | magic        | L   | 0.398      | -            | -                | -                | -         |    -0.09 | andr1x, choiv7, d0jca, miwo, nopzy |
|            8 |     3348 | 2026-04-03 | FaZe         | L   | 0.385      | -            | -                | -                | -         |    -0.02 | andr1x, choiv7, d0jca, miwo, nopzy |
|            7 |     3364 | 2026-04-03 | BEE          | W   | 0.384      | 0.396        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.384) |     3.80 | andr1x, choiv7, d0jca, miwo, nopzy |
|            6 |     3736 | 2026-03-29 | INFINITE     | L   | 0.354      | -            | -                | -                | -         |    -0.15 | andr1x, choiv7, d0jca, miwo, nopzy |
|            5 |     3758 | 2026-03-29 | HYPERSPIRIT  | W   | 0.353      | 0.354        | 0.004 (0.000)    | 0.427 (0.053)    | 1 (0.353) |     9.36 | andr1x, choiv7, d0jca, miwo, nopzy |
|            4 |     3786 | 2026-03-29 | Eternal Fire | L   | 0.352      | -            | -                | -                | -         |    -1.25 | andr1x, choiv7, d0jca, miwo, nopzy |
|            3 |     3900 | 2026-03-27 | Honvéd       | L   | 0.341      | -            | -                | -                | -         |    -1.69 | andr1x, choiv7, d0jca, miwo, nopzy |
|            2 |     3937 | 2026-03-26 | HYPERSPIRIT  | L   | 0.335      | -            | -                | -                | -         |    -1.68 | andr1x, choiv7, d0jca, miwo, nopzy |
|            1 |     5288 | 2026-02-27 | yngods       | L   | 0.155      | -            | -                | -                | -         |    -1.78 | andr1x, choiv7, d0jca, miwo, VLDN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
