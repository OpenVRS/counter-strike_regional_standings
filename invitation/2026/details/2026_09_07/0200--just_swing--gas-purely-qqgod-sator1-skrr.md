### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [200](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [19]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  709.6<br />
<br />
Final Rank Value (709.6) = Starting Rank Value (706.8) + Head To Head Adjustments (2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.090[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.8
- 400 + ( ( 0.161 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 706.8


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
|           34 |      200 | 2026-09-01 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -20.31 | gas, Purely, qqGOD, sATOR1, skrr |
|           33 |      234 | 2026-08-31 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -13.37 | gas, Purely, qqGOD, sATOR1, skrr |
|           32 |      243 | 2026-08-31 | NEXVOID           | L   | 1.000      | -            | -                | -                | -         |   -11.53 | gas, Purely, qqGOD, sATOR1, skrr |
|           31 |      283 | 2026-08-30 | Alter Ego         | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.279 (0.093)    | 0 (0.000) |    18.89 | gas, Purely, qqGOD, sATOR1, skrr |
|           30 |      348 | 2026-08-29 | Chinggis Warriors | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.235 (0.078)    | 0 (0.000) |    10.87 | gas, Purely, qqGOD, sATOR1, skrr |
|           29 |      397 | 2026-08-28 | Vitalem Aerem     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.183 (0.061)    | 0 (0.000) |    15.03 | gas, Purely, qqGOD, sATOR1, skrr |
|           28 |      442 | 2026-08-27 | NSN               | W   | 1.000      | 0.333        | -                | 0.047 (0.016)    | 0 (0.000) |     7.96 | gas, Purely, qqGOD, sATOR1, skrr |
|           27 |      494 | 2026-08-26 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -13.57 | gas, Purely, qqGOD, sATOR1, skrr |
|           26 |      541 | 2026-08-25 | Kaleido           | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.267 (0.089)    | 0 (0.000) |    17.28 | gas, Purely, qqGOD, sATOR1, skrr |
|           25 |     3531 | 2026-05-02 | Vitalem Aerem     | L   | 0.339      | -            | -                | -                | -         |    -5.43 | gas, Purely, qqGOD, sATOR1, skrr |
|           24 |     3549 | 2026-05-02 | LEGAM             | W   | 0.337      | -            | -                | -                | 1 (0.337) |     3.67 | gas, Purely, qqGOD, sATOR1, skrr |
|           23 |     3585 | 2026-05-01 | Chaos             | W   | 0.333      | 0.471        | 0.000 (0.000)    | -                | 1 (0.333) |     2.58 | gas, Purely, qqGOD, sATOR1, skrr |
|           22 |     3630 | 2026-04-30 | The Huns          | L   | 0.325      | -            | -                | -                | -         |    -3.08 | gas, Purely, qqGOD, sATOR1, skrr |
|           21 |     3631 | 2026-04-30 | Alter Ego         | L   | 0.325      | -            | -                | -                | -         |    -4.63 | gas, Purely, qqGOD, sATOR1, skrr |
|           20 |     3676 | 2026-04-29 | Vitalem Aerem     | W   | 0.319      | 0.333        | 0.000 (0.000)    | 0.183 (0.019)    | 0 (0.000) |     4.96 | gas, Purely, qqGOD, sATOR1, skrr |
|           19 |     3719 | 2026-04-28 | BORING PLAYERS    | W   | 0.312      | 0.333        | 0.000 (0.000)    | 0.056 (0.006)    | 0 (0.000) |     4.09 | gas, Purely, qqGOD, sATOR1, skrr |
|           18 |     3759 | 2026-04-27 | Chinggis Warriors | L   | 0.306      | -            | -                | -                | -         |    -3.93 | gas, Purely, qqGOD, sATOR1, skrr |
|           17 |     3816 | 2026-04-26 | Rare Atom         | W   | 0.299      | 0.333        | 0.005 (0.000)    | 0.338 (0.034)    | -         |     4.97 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     4412 | 2026-04-05 | QuantumX          | L   | 0.159      | -            | -                | -                | -         |    -3.07 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     4499 | 2026-04-04 | Arise             | W   | 0.151      | -            | -                | -                | -         |     0.77 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     4585 | 2026-04-03 | Eruption          | W   | 0.144      | -            | -                | -                | -         |     0.72 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     4678 | 2026-04-02 | FengDa            | L   | 0.138      | -            | -                | -                | -         |    -2.56 | gas, Purely, qqGOD, sATOR1, skrr |
|           12 |     4682 | 2026-04-02 | Rare Atom         | L   | 0.138      | -            | -                | -                | -         |    -2.41 | gas, Purely, qqGOD, sATOR1, skrr |
|           11 |     4771 | 2026-04-01 | BORING PLAYERS    | W   | 0.132      | 0.352        | -                | 0.056 (0.003)    | 1 (0.132) |     1.73 | gas, Purely, qqGOD, sATOR1, skrr |
|           10 |     4892 | 2026-03-31 | TYLOO             | L   | 0.124      | -            | -                | -                | -         |    -0.11 | gas, Purely, qqGOD, sATOR1, skrr |
|            9 |     5036 | 2026-03-29 | XDM               | L   | 0.110      | -            | -                | -                | -         |    -2.59 | gas, Purely, qqGOD, sATOR1, skrr |
|            8 |     5115 | 2026-03-28 | SemperFi          | L   | 0.104      | -            | -                | -                | -         |    -1.77 | gas, Purely, qqGOD, sATOR1, skrr |
|            7 |     5119 | 2026-03-27 | Unitronics        | W   | 0.103      | -            | -                | -                | -         |     0.54 | gas, Purely, qqGOD, sATOR1, skrr |
|            6 |     5261 | 2026-03-24 | Vitalem Aerem     | L   | 0.082      | -            | -                | -                | -         |    -1.28 | gas, Purely, qqGOD, sATOR1, skrr |
|            5 |     5289 | 2026-03-24 | Alter Ego         | L   | 0.079      | -            | -                | -                | -         |    -1.13 | gas, Purely, qqGOD, sATOR1, skrr |
|            4 |     5316 | 2026-03-23 | Kaleido           | L   | 0.076      | -            | -                | -                | -         |    -1.13 | gas, Purely, qqGOD, sATOR1, skrr |
|            3 |     5370 | 2026-03-23 | BMZ               | L   | 0.072      | -            | -                | -                | -         |    -1.48 | gas, Purely, qqGOD, sATOR1, skrr |
|            2 |     5477 | 2026-03-21 | 5star             | W   | 0.059      | 0.333        | 0.008 (0.000)    | 0.321 (0.006)    | -         |     1.31 | gas, Purely, qqGOD, sATOR1, skrr |
|            1 |     5541 | 2026-03-20 | Haunted House     | W   | 0.052      | 0.333        | 0.003 (0.000)    | -                | -         |     0.78 | gas, Purely, qqGOD, sATOR1, skrr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,633.90)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-01 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-04-05 |      0.158 | $719.00        | $113.69         |
| 2026-03-25 |      0.090 | $225.00        | $20.21          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
