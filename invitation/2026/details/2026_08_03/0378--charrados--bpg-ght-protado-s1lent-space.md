### Roster Details<br />
Team Name: Charrados<br />
Roster: bpg, ght, protado, s1lent, space<br />
Global Rank: [378](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [97]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  471.8<br />
<br />
Final Rank Value (471.8) = Starting Rank Value (481.8) + Head To Head Adjustments (-10.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.8
- 400 + ( ( 0.042 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 481.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     3305 | 2026-04-03 | Blitzkrieg      | L   | 0.388      | -            | -                | -                | -         |    -5.28 | bpg, ght, protado, s1lent, space         |
|            8 |     3398 | 2026-04-02 | ShindeN         | L   | 0.381      | -            | -                | -                | -         |    -0.45 | bpg, ght, protado, s1lent, space         |
|            7 |     3485 | 2026-04-01 | ALKA            | L   | 0.375      | -            | -                | -                | -         |    -3.18 | balencyy, protado, RoDfps, s1lent, space |
|            6 |     3571 | 2026-03-31 | Crashers        | L   | 0.368      | -            | -                | -                | -         |    -2.84 | balencyy, protado, RoDfps, s1lent, space |
|            5 |     3739 | 2026-03-29 | Fake do Biru    | L   | 0.354      | -            | -                | -                | -         |    -1.41 | balencyy, protado, RoDfps, s1lent, space |
|            4 |     3948 | 2026-03-26 | METANOIA Wolves | W   | 0.334      | 0.333        | 0.001 (0.000)    | 0.059 (0.007)    | 0 (0.000) |     7.70 | balencyy, protado, RoDfps, s1lent, space |
|            3 |     4461 | 2026-03-16 | MAGICOS         | L   | 0.269      | -            | -                | -                | -         |    -3.57 | bpg, ght, RoDfps, s1lent, space          |
|            2 |     4547 | 2026-03-14 | Isurus          | L   | 0.255      | -            | -                | -                | -         |    -0.70 | bpg, ght, RoDfps, s1lent, space          |
|            1 |     4575 | 2026-03-14 | LP              | L   | 0.252      | -            | -                | -                | -         |    -0.25 | bpg, ght, RoDfps, s1lent, space          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
