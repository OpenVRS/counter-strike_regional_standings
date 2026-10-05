### Roster Details<br />
Team Name: Just Swing<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [200](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [19]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  710.1<br />
<br />
Final Rank Value (710.1) = Starting Rank Value (707.4) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.287[<sup>1</sup>](#table2)
- Bounty Collected: 0.227[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.092[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.4
- 400 + ( ( 0.162 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 707.4


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
|           34 |      172 | 2026-09-01 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -20.32 | gas, Purely, qqGOD, sATOR1, skrr |
|           33 |      206 | 2026-08-31 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -13.38 | gas, Purely, qqGOD, sATOR1, skrr |
|           32 |      215 | 2026-08-31 | NEXVOID           | L   | 1.000      | -            | -                | -                | -         |   -11.45 | gas, Purely, qqGOD, sATOR1, skrr |
|           31 |      255 | 2026-08-30 | Alter Ego         | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.279 (0.093)    | 0 (0.000) |    18.92 | gas, Purely, qqGOD, sATOR1, skrr |
|           30 |      320 | 2026-08-29 | Chinggis Warriors | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.234 (0.078)    | 0 (0.000) |    10.87 | gas, Purely, qqGOD, sATOR1, skrr |
|           29 |      369 | 2026-08-28 | Vitalem Aerem     | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.184 (0.061)    | 0 (0.000) |    15.07 | gas, Purely, qqGOD, sATOR1, skrr |
|           28 |      414 | 2026-08-27 | NSN               | W   | 1.000      | 0.333        | -                | 0.047 (0.016)    | 0 (0.000) |     7.97 | gas, Purely, qqGOD, sATOR1, skrr |
|           27 |      466 | 2026-08-26 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -13.58 | gas, Purely, qqGOD, sATOR1, skrr |
|           26 |      513 | 2026-08-25 | Kaleido           | W   | 1.000      | 0.333        | 0.006 (0.002)    | 0.267 (0.089)    | 0 (0.000) |    17.32 | gas, Purely, qqGOD, sATOR1, skrr |
|           25 |     3503 | 2026-05-02 | Vitalem Aerem     | L   | 0.344      | -            | -                | -                | -         |    -5.50 | gas, Purely, qqGOD, sATOR1, skrr |
|           24 |     3521 | 2026-05-02 | LEGAM             | W   | 0.342      | -            | -                | -                | 1 (0.342) |     3.73 | gas, Purely, qqGOD, sATOR1, skrr |
|           23 |     3557 | 2026-05-01 | Chaos             | W   | 0.338      | 0.471        | 0.000 (0.000)    | -                | 1 (0.338) |     2.62 | gas, Purely, qqGOD, sATOR1, skrr |
|           22 |     3602 | 2026-04-30 | The Huns          | L   | 0.331      | -            | -                | -                | -         |    -3.11 | gas, Purely, qqGOD, sATOR1, skrr |
|           21 |     3603 | 2026-04-30 | Alter Ego         | L   | 0.330      | -            | -                | -                | -         |    -4.70 | gas, Purely, qqGOD, sATOR1, skrr |
|           20 |     3648 | 2026-04-29 | Vitalem Aerem     | W   | 0.324      | 0.333        | 0.000 (0.000)    | 0.184 (0.020)    | 0 (0.000) |     5.06 | gas, Purely, qqGOD, sATOR1, skrr |
|           19 |     3691 | 2026-04-28 | BORING PLAYERS    | W   | 0.317      | 0.333        | 0.000 (0.000)    | 0.057 (0.006)    | 0 (0.000) |     4.17 | gas, Purely, qqGOD, sATOR1, skrr |
|           18 |     3731 | 2026-04-27 | Chinggis Warriors | L   | 0.311      | -            | -                | -                | -         |    -3.96 | gas, Purely, qqGOD, sATOR1, skrr |
|           17 |     3788 | 2026-04-26 | Rare Atom         | W   | 0.304      | 0.333        | 0.005 (0.001)    | 0.337 (0.034)    | -         |     5.06 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     4384 | 2026-04-05 | QuantumX          | L   | 0.164      | -            | -                | -                | -         |    -3.16 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     4471 | 2026-04-04 | Arise             | W   | 0.157      | -            | -                | -                | -         |     0.79 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     4557 | 2026-04-03 | Eruption          | W   | 0.150      | -            | -                | -                | -         |     0.75 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     4650 | 2026-04-02 | FengDa            | L   | 0.144      | -            | -                | -                | -         |    -2.66 | gas, Purely, qqGOD, sATOR1, skrr |
|           12 |     4654 | 2026-04-02 | Rare Atom         | L   | 0.144      | -            | -                | -                | -         |    -2.48 | gas, Purely, qqGOD, sATOR1, skrr |
|           11 |     4743 | 2026-04-01 | BORING PLAYERS    | W   | 0.137      | 0.352        | -                | 0.057 (0.003)    | 1 (0.137) |     1.81 | gas, Purely, qqGOD, sATOR1, skrr |
|           10 |     4864 | 2026-03-31 | TYLOO             | L   | 0.129      | -            | -                | -                | -         |    -0.11 | gas, Purely, qqGOD, sATOR1, skrr |
|            9 |     5008 | 2026-03-29 | XDM               | L   | 0.116      | -            | -                | -                | -         |    -2.72 | gas, Purely, qqGOD, sATOR1, skrr |
|            8 |     5087 | 2026-03-28 | SemperFi          | L   | 0.110      | -            | -                | -                | -         |    -1.83 | gas, Purely, qqGOD, sATOR1, skrr |
|            7 |     5091 | 2026-03-27 | Unitronics        | W   | 0.108      | -            | -                | -                | -         |     0.57 | gas, Purely, qqGOD, sATOR1, skrr |
|            6 |     5233 | 2026-03-24 | Vitalem Aerem     | L   | 0.088      | -            | -                | -                | -         |    -1.36 | gas, Purely, qqGOD, sATOR1, skrr |
|            5 |     5261 | 2026-03-24 | Alter Ego         | L   | 0.084      | -            | -                | -                | -         |    -1.21 | gas, Purely, qqGOD, sATOR1, skrr |
|            4 |     5288 | 2026-03-23 | Kaleido           | L   | 0.081      | -            | -                | -                | -         |    -1.21 | gas, Purely, qqGOD, sATOR1, skrr |
|            3 |     5342 | 2026-03-23 | BMZ               | L   | 0.078      | -            | -                | -                | -         |    -1.58 | gas, Purely, qqGOD, sATOR1, skrr |
|            2 |     5449 | 2026-03-21 | 5star             | W   | 0.065      | 0.333        | 0.008 (0.000)    | 0.322 (0.007)    | -         |     1.44 | gas, Purely, qqGOD, sATOR1, skrr |
|            1 |     5513 | 2026-03-20 | Haunted House     | W   | 0.058      | 0.333        | 0.003 (0.000)    | -                | -         |     0.86 | gas, Purely, qqGOD, sATOR1, skrr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,639.06)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-01 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-04-05 |      0.164 | $719.00        | $117.62         |
| 2026-03-25 |      0.095 | $225.00        | $21.43          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
