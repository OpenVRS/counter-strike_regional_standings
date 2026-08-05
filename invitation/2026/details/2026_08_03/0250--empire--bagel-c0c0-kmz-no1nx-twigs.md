### Roster Details<br />
Team Name: EMPIRE<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [250](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [57]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  676.6<br />
<br />
Final Rank Value (676.6) = Starting Rank Value (687.9) + Head To Head Adjustments (-11.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.103[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.9
- 400 + ( ( 0.149 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 687.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     2493 | 2026-04-27 | Wanted Goons   | L   | 0.550      | -            | -                | -                | -         |    -8.24 | BAGEL, C0C0, KmZ, no1nx, Shawta |
|           18 |     2543 | 2026-04-26 | ex-Aether      | L   | 0.543      | -            | -                | -                | -         |    -9.30 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           17 |     2613 | 2026-04-25 | LAG            | L   | 0.536      | -            | -                | -                | -         |    -3.96 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           16 |     2617 | 2026-04-25 | Foxtrot        | W   | 0.535      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.535) |     2.69 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           15 |     2633 | 2026-04-25 | LAG            | L   | 0.534      | -            | -                | -                | -         |    -3.99 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           14 |     2888 | 2026-04-15 | regain         | L   | 0.469      | -            | -                | -                | -         |    -6.32 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           13 |     2943 | 2026-04-12 | Aether         | W   | 0.450      | 0.333        | 0.002 (0.000)    | 0.121 (0.018)    | 0 (0.000) |     7.21 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           12 |     3021 | 2026-04-09 | Clockwork      | W   | 0.429      | 0.333        | 0.000 (0.000)    | 0.019 (0.003)    | 0 (0.000) |     2.24 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           11 |     3077 | 2026-04-07 | FarmVille      | L   | 0.416      | -            | -                | -                | -         |    -6.20 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           10 |     3377 | 2026-04-02 | Zomblers       | L   | 0.382      | -            | -                | -                | -         |    -6.23 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            9 |     3479 | 2026-04-01 | LAG            | W   | 0.376      | 0.333        | 0.014 (0.002)    | 0.434 (0.054)    | 0 (0.000) |     9.52 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            8 |     3811 | 2026-03-28 | LAG            | L   | 0.349      | -            | -                | -                | -         |    -2.10 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            7 |     3827 | 2026-03-28 | Wanted Goons   | L   | 0.348      | -            | -                | -                | -         |    -5.60 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            6 |     3842 | 2026-03-28 | LAG            | L   | 0.347      | -            | -                | -                | -         |    -2.18 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            5 |     3857 | 2026-03-28 | Wanted Goons   | W   | 0.346      | 0.354        | 0.000 (0.000)    | 0.160 (0.020)    | 1 (0.346) |     5.38 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            4 |     3892 | 2026-03-27 | ClayMakers     | W   | 0.342      | 0.398        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.82 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            3 |     4367 | 2026-03-18 | Zomblers       | W   | 0.283      | 0.143        | 0.008 (0.000)    | 0.259 (0.010)    | 0 (0.000) |     4.64 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            2 |     4458 | 2026-03-16 | Wanted Goons   | W   | 0.270      | 0.143        | 0.000 (0.000)    | 0.160 (0.006)    | 0 (0.000) |     4.35 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            1 |     4543 | 2026-03-14 | insane players | W   | 0.256      | 0.143        | 0.008 (0.000)    | 0.209 (0.008)    | 0 (0.000) |     4.03 | BAGEL, C0C0, KmZ, no1nx, twigs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($708.81)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.354 | $2,000.00      | $708.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
