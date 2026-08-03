### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [230](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [27]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  717.1<br />
<br />
Final Rank Value (717.1) = Starting Rank Value (719.5) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 719.5
- 400 + ( ( 0.165 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 719.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |     2296 | 2026-05-02 | Last Bullet       | L   | 0.579      | -            | -                | -                | -         |    -7.87 | gas, Purely, qqGOD, sATOR1, skrr |
|           26 |     2314 | 2026-05-02 | ZEVS              | W   | 0.577      | 0.471        | 0.000 (0.000)    | 0.027 (0.007)    | 1 (0.577) |     6.85 | gas, Purely, qqGOD, sATOR1, skrr |
|           25 |     2350 | 2026-05-01 | Chaos             | W   | 0.573      | 0.471        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.573) |     4.27 | gas, Purely, qqGOD, sATOR1, skrr |
|           24 |     2395 | 2026-04-30 | The Huns          | L   | 0.566      | -            | -                | -                | -         |    -2.73 | gas, Purely, qqGOD, sATOR1, skrr |
|           23 |     2396 | 2026-04-30 | Alter Ego         | L   | 0.566      | -            | -                | -                | -         |    -6.75 | gas, Purely, qqGOD, sATOR1, skrr |
|           22 |     2441 | 2026-04-29 | Last Bullet       | W   | 0.560      | 0.333        | 0.001 (0.000)    | 0.183 (0.034)    | 0 (0.000) |    10.17 | gas, Purely, qqGOD, sATOR1, skrr |
|           21 |     2484 | 2026-04-28 | BORING PLAYERS    | W   | 0.553      | 0.333        | 0.001 (0.000)    | 0.143 (0.026)    | 0 (0.000) |     8.34 | gas, Purely, qqGOD, sATOR1, skrr |
|           20 |     2524 | 2026-04-27 | Chinggis Warriors | L   | 0.546      | -            | -                | -                | -         |    -6.60 | gas, Purely, qqGOD, sATOR1, skrr |
|           19 |     2581 | 2026-04-26 | Rare Atom         | W   | 0.540      | 0.333        | 0.004 (0.001)    | 0.199 (0.036)    | 0 (0.000) |    12.04 | gas, Purely, qqGOD, sATOR1, skrr |
|           18 |     3177 | 2026-04-05 | The QUBE          | L   | 0.400      | -            | -                | -                | -         |    -6.01 | gas, Purely, qqGOD, sATOR1, skrr |
|           17 |     3264 | 2026-04-04 | Arise             | W   | 0.392      | 0.333        | 0.000 (0.000)    | 0.027 (0.004)    | 0 (0.000) |     2.87 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     3350 | 2026-04-03 | Eruption          | W   | 0.385      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     1.88 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     3443 | 2026-04-02 | FengDa            | L   | 0.379      | -            | -                | -                | -         |    -6.08 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     3447 | 2026-04-02 | Rare Atom         | L   | 0.379      | -            | -                | -                | -         |    -3.55 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     3536 | 2026-04-01 | BORING PLAYERS    | W   | 0.372      | 0.352        | 0.001 (0.000)    | 0.143 (0.019)    | 1 (0.372) |     5.83 | gas, Purely, qqGOD, sATOR1, skrr |
|           12 |     3657 | 2026-03-31 | TYLOO             | L   | 0.364      | -            | -                | -                | -         |    -0.07 | gas, Purely, qqGOD, sATOR1, skrr |
|           11 |     3801 | 2026-03-29 | XDM               | L   | 0.351      | -            | -                | -                | -         |    -8.62 | gas, Purely, qqGOD, sATOR1, skrr |
|           10 |     3880 | 2026-03-28 | SemperFi          | L   | 0.345      | -            | -                | -                | -         |    -2.83 | gas, Purely, qqGOD, sATOR1, skrr |
|            9 |     3884 | 2026-03-27 | Unitronics        | W   | 0.344      | 0.320        | -                | 0.026 (0.003)    | 0 (0.000) |     1.85 | gas, Purely, qqGOD, sATOR1, skrr |
|            8 |     4026 | 2026-03-24 | Last Bullet       | L   | 0.323      | -            | -                | -                | -         |    -3.93 | gas, Purely, qqGOD, sATOR1, skrr |
|            7 |     4054 | 2026-03-24 | Alter Ego         | L   | 0.320      | -            | -                | -                | -         |    -3.84 | gas, Purely, qqGOD, sATOR1, skrr |
|            6 |     4081 | 2026-03-23 | Kaleido           | L   | 0.317      | -            | -                | -                | -         |    -3.89 | gas, Purely, qqGOD, sATOR1, skrr |
|            5 |     4135 | 2026-03-23 | BMZ               | L   | 0.313      | -            | -                | -                | -         |    -3.89 | gas, Purely, qqGOD, sATOR1, skrr |
|            4 |     4242 | 2026-03-21 | 5star             | W   | 0.300      | 0.333        | 0.016 (0.002)    | 0.365 (0.036)    | 0 (0.000) |     7.93 | gas, Purely, qqGOD, sATOR1, skrr |
|            3 |     4306 | 2026-03-20 | Haunted House     | W   | 0.293      | 0.333        | 0.004 (0.000)    | 0.109 (0.011)    | -         |     4.97 | gas, Purely, qqGOD, sATOR1, skrr |
|            2 |     5735 | 2026-02-19 | Legion            | L   | 0.100      | -            | -                | -                | -         |    -2.34 | Daniel, gas, qqGOD, sATOR1, skrr |
|            1 |     5860 | 2026-02-17 | 5star             | L   | 0.086      | -            | -                | -                | -         |    -0.41 | Daniel, gas, qqGOD, sATOR1, skrr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($361.14)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.399 | $719.00        | $286.78         |
| 2026-03-25 |      0.331 | $225.00        | $74.37          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
