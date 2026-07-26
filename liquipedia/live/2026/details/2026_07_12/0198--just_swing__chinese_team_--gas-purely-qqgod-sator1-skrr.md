### Roster Details<br />
Team Name: Just Swing (Chinese team)<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [198](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_12.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_07_12.md)<br />
<br />
Final Rank Value:  743.6<br />
<br />
Final Rank Value (743.6) = Starting Rank Value (740.4) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.208[<sup>2</sup>](#table1)

The average of these factors is 0.180<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.4
- 400 + ( ( 0.180 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 740.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.232
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |     1762 | 2026-05-02 | Last Bullet (Chinese team) | L   | 0.723      | -            | -                | -                | -         |    -9.79 | gas, Purely, qqGOD, sATOR1, skrr |
|           27 |     1778 | 2026-05-01 | Team ZevS                  | W   | 0.722      | 0.471        | 0.000 (0.000)    | 0.028 (0.009)    | 1 (0.722) |     7.92 | gas, Purely, qqGOD, sATOR1, skrr |
|           26 |     1812 | 2026-05-01 | Chaos Gaming General       | W   | 0.717      | 0.471        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.717) |     4.71 | gas, Purely, qqGOD, sATOR1, skrr |
|           25 |     1856 | 2026-04-30 | The Huns Esports           | L   | 0.710      | -            | -                | -                | -         |    -3.17 | gas, Purely, qqGOD, sATOR1, skrr |
|           24 |     1859 | 2026-04-30 | Alter Ego                  | L   | 0.710      | -            | -                | -                | -         |    -8.03 | gas, Purely, qqGOD, sATOR1, skrr |
|           23 |     1907 | 2026-04-29 | Last Bullet (Chinese team) | W   | 0.704      | 0.333        | 0.002 (0.000)    | 0.202 (0.047)    | 0 (0.000) |    12.74 | gas, Purely, qqGOD, sATOR1, skrr |
|           22 |     1947 | 2026-04-28 | BORING PLAYER              | W   | 0.697      | 0.333        | 0.001 (0.000)    | 0.164 (0.038)    | 0 (0.000) |    10.16 | gas, Purely, qqGOD, sATOR1, skrr |
|           21 |     1988 | 2026-04-27 | Chinggis Warriors          | L   | 0.690      | -            | -                | -                | -         |    -4.15 | gas, Purely, qqGOD, sATOR1, skrr |
|           20 |     2052 | 2026-04-26 | Rare Atom                  | W   | 0.684      | 0.333        | 0.005 (0.001)    | 0.239 (0.055)    | 0 (0.000) |    16.23 | gas, Purely, qqGOD, sATOR1, skrr |
|           19 |     2642 | 2026-04-05 | The QUBE Esports           | L   | 0.544      | -            | -                | -                | -         |    -7.60 | gas, Purely, qqGOD, sATOR1, skrr |
|           18 |     2719 | 2026-04-04 | Team Arise                 | W   | 0.537      | 0.333        | 0.000 (0.000)    | 0.042 (0.008)    | 0 (0.000) |     5.54 | gas, Purely, qqGOD, sATOR1, skrr |
|           17 |     2804 | 2026-04-03 | 100RA                      | W   | 0.530      | 0.333        | 0.000 (0.000)    | -                | 0 (0.000) |     2.39 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     2905 | 2026-04-02 | FengDa Gaming              | L   | 0.524      | -            | -                | -                | -         |    -8.07 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     2908 | 2026-04-02 | Rare Atom                  | L   | 0.523      | -            | -                | -                | -         |    -4.05 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     3004 | 2026-04-01 | BORING PLAYER              | W   | 0.516      | 0.352        | 0.001 (0.000)    | 0.164 (0.030)    | 1 (0.516) |     8.06 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     3122 | 2026-03-30 | TYLOO                      | L   | 0.508      | -            | -                | -                | -         |    -0.10 | gas, Purely, qqGOD, sATOR1, skrr |
|           12 |     3263 | 2026-03-29 | TEAM XDM                   | L   | 0.495      | -            | -                | -                | -         |   -12.33 | gas, Purely, qqGOD, sATOR1, skrr |
|           11 |     3341 | 2026-03-28 | SemperFi Esports           | L   | 0.489      | -            | -                | -                | -         |    -3.30 | gas, Purely, qqGOD, sATOR1, skrr |
|           10 |     3347 | 2026-03-27 | Team Unitronic             | W   | 0.488      | 0.320        | -                | 0.028 (0.004)    | 0 (0.000) |     3.43 | gas, Purely, qqGOD, sATOR1, skrr |
|            9 |     3487 | 2026-03-24 | Last Bullet (Chinese team) | L   | 0.468      | -            | -                | -                | -         |    -5.41 | gas, Purely, qqGOD, sATOR1, skrr |
|            8 |     3519 | 2026-03-24 | Alter Ego                  | L   | 0.464      | -            | -                | -                | -         |    -5.15 | gas, Purely, qqGOD, sATOR1, skrr |
|            7 |     3546 | 2026-03-23 | Kaleido Gaming             | L   | 0.461      | -            | -                | -                | -         |    -5.10 | gas, Purely, qqGOD, sATOR1, skrr |
|            6 |     3598 | 2026-03-23 | BMZ                        | L   | 0.457      | -            | -                | -                | -         |    -5.03 | gas, Purely, qqGOD, sATOR1, skrr |
|            5 |     3710 | 2026-03-21 | 5star eSports              | W   | 0.444      | 0.333        | 0.019 (0.003)    | 0.357 (0.053)    | 0 (0.000) |    11.94 | gas, Purely, qqGOD, sATOR1, skrr |
|            4 |     3772 | 2026-03-20 | Haunted House              | W   | 0.437      | 0.333        | 0.005 (0.001)    | 0.119 (0.017)    | -         |     7.26 | gas, Purely, qqGOD, sATOR1, skrr |
|            3 |     5196 | 2026-02-19 | Legion (Pakistani team)    | L   | 0.244      | -            | -                | -                | -         |    -4.97 | Daniel, gas, qqGOD, sATOR1, skrr |
|            2 |     5315 | 2026-02-17 | 5star eSports              | L   | 0.231      | -            | -                | -                | -         |    -0.96 | Daniel, gas, qqGOD, sATOR1, skrr |
|            1 |     6345 | 2026-01-17 | JiJieHao                   | L   | 0.029      | -            | -                | -                | -         |    -0.05 | gas, Purely, qqGOD, sATOR1, skrr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($501.15)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.543 | $726.00        | $394.46         |
| 2026-03-25 |      0.474 | $225.00        | $106.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
