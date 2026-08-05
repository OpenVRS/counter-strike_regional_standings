### Roster Details<br />
Team Name: SportsBetExpert<br />
Roster: consti, Infinite, motm, Peeping, shane<br />
Global Rank: [105](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [20]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  980.0<br />
<br />
Final Rank Value (980.0) = Starting Rank Value (944.2) + Head To Head Adjustments (35.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.051[<sup>2</sup>](#table1)
- LAN Wins: 0.502[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 944.2
- 400 + ( ( 0.281 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 944.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |        1 | 2026-08-02 | NRG          | L   | 1.000      | -            | -                | -                | -         |    -6.76 | consti, Infinite, motm, Peeping, shane |
|           14 |       16 | 2026-08-01 | Marsborne    | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.403 (0.058)    | 0 (0.000) |    15.10 | consti, Infinite, motm, Peeping, shane |
|           13 |       46 | 2026-07-31 | LAG          | W   | 1.000      | 0.143        | 0.014 (0.002)    | 0.434 (0.062)    | 0 (0.000) |    10.89 | consti, Infinite, motm, Peeping, shane |
|           12 |       69 | 2026-07-30 | Voca         | L   | 1.000      | -            | -                | -                | -         |   -11.75 | consti, Infinite, motm, Peeping, shane |
|           11 |       97 | 2026-07-29 | Chicken Coop | W   | 1.000      | 0.143        | 0.037 (0.005)    | 0.412 (0.059)    | 0 (0.000) |    17.37 | consti, Infinite, motm, Peeping, shane |
|           10 |      508 | 2026-07-12 | NRG          | L   | 1.000      | -            | -                | -                | -         |    -5.84 | consti, dare, Infinite, Peeping, shane |
|            9 |      520 | 2026-07-12 | Villainous   | W   | 1.000      | 0.303        | 0.005 (0.001)    | 0.233 (0.071)    | 1 (1.000) |     7.59 | consti, dare, Infinite, Peeping, shane |
|            8 |      529 | 2026-07-12 | For Fun      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     1.36 | consti, dare, Infinite, Peeping, shane |
|            7 |     1318 | 2026-05-31 | Marsborne    | L   | 0.774      | -            | -                | -                | -         |   -12.18 | consti, dare, motm, Peeping, WolfY     |
|            6 |     1325 | 2026-05-31 | Reign Above  | W   | 0.773      | 0.294        | 0.000 (0.000)    | 0.180 (0.041)    | 1 (0.773) |     4.17 | consti, dare, motm, Peeping, WolfY     |
|            5 |     1341 | 2026-05-30 | LAG          | W   | 0.770      | 0.294        | 0.014 (0.003)    | 0.434 (0.098)    | 1 (0.770) |    10.26 | consti, dare, motm, Peeping, WolfY     |
|            4 |     1344 | 2026-05-30 | Chicken Coop | L   | 0.768      | -            | -                | -                | -         |   -11.88 | consti, dare, motm, Peeping, WolfY     |
|            3 |     1362 | 2026-05-30 | NXG          | W   | 0.767      | 0.294        | 0.000 (0.000)    | 0.036 (0.008)    | 1 (0.767) |     1.33 | consti, dare, motm, Peeping, WolfY     |
|            2 |     1594 | 2026-05-24 | ex-Aether    | W   | 0.729      | 0.278        | 0.003 (0.001)    | 0.138 (0.028)    | 0 (0.000) |     4.41 | consti, dare, Infinite, motm, Peeping  |
|            1 |     1597 | 2026-05-24 | Marsborne    | W   | 0.728      | 0.278        | 0.009 (0.002)    | 0.403 (0.081)    | 0 (0.000) |    11.73 | consti, dare, Infinite, motm, Peeping  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,903.58)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-05-31 |      0.775 | $400.00        | $310.01         |
| 2026-05-24 |      0.729 | $1,500.00      | $1,093.58       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
