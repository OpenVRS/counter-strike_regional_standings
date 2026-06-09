### Roster Details<br />
Team Name: Just Swing (Chinese team)<br />
Roster: gas, Purely, qqGOD, sATOR1, skrr<br />
Global Rank: [174](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  816.7<br />
<br />
Final Rank Value (816.7) = Starting Rank Value (814.8) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.262[<sup>1</sup>](#table2)
- Bounty Collected: 0.256[<sup>2</sup>](#table1)
- Opponent Network: 0.050[<sup>2</sup>](#table1)
- LAN Wins: 0.303[<sup>2</sup>](#table1)

The average of these factors is 0.218<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 814.8
- 400 + ( ( 0.218 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 814.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.296
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      942 | 2026-05-02 | Last Bullet (Chinese team) | L   | 1.000      | -            | -                | -                | -         |   -12.69 | gas, Purely, qqGOD, sATOR1, skrr |
|           30 |      958 | 2026-05-01 | Team ZevS                  | W   | 1.000      | 0.471        | 0.000 (0.000)    | 0.033 (0.015)    | 1 (1.000) |     9.10 | gas, Purely, qqGOD, sATOR1, skrr |
|           29 |      992 | 2026-05-01 | Chaos Gaming General       | W   | 0.998      | 0.471        | 0.001 (0.000)    | 0.000 (0.000)    | 1 (0.998) |     4.69 | gas, Purely, qqGOD, sATOR1, skrr |
|           28 |     1036 | 2026-04-30 | The Huns Esports           | L   | 0.991      | -            | -                | -                | -         |    -4.06 | gas, Purely, qqGOD, sATOR1, skrr |
|           27 |     1039 | 2026-04-30 | Alter Ego                  | L   | 0.991      | -            | -                | -                | -         |   -10.48 | gas, Purely, qqGOD, sATOR1, skrr |
|           26 |     1087 | 2026-04-29 | Last Bullet (Chinese team) | W   | 0.985      | 0.333        | 0.003 (0.001)    | 0.255 (0.084)    | 0 (0.000) |    18.33 | gas, Purely, qqGOD, sATOR1, skrr |
|           25 |     1127 | 2026-04-28 | BORING PLAYER              | W   | 0.978      | 0.333        | 0.001 (0.000)    | 0.213 (0.070)    | 0 (0.000) |    13.45 | gas, Purely, qqGOD, sATOR1, skrr |
|           24 |     1168 | 2026-04-27 | Chinggis Warriors          | L   | 0.971      | -            | -                | -                | -         |    -4.84 | gas, Purely, qqGOD, sATOR1, skrr |
|           23 |     1232 | 2026-04-26 | Rare Atom                  | W   | 0.965      | 0.333        | 0.011 (0.003)    | 0.340 (0.109)    | 0 (0.000) |    24.92 | gas, Purely, qqGOD, sATOR1, skrr |
|           22 |     1822 | 2026-04-05 | The QUBE Esports           | L   | 0.825      | -            | -                | -                | -         |   -10.38 | gas, Purely, qqGOD, sATOR1, skrr |
|           21 |     1899 | 2026-04-04 | Team Arise                 | W   | 0.818      | 0.333        | 0.000 (0.000)    | 0.077 (0.021)    | 0 (0.000) |     7.80 | gas, Purely, qqGOD, sATOR1, skrr |
|           20 |     1984 | 2026-04-03 | 100RA                      | W   | 0.811      | -            | -                | -                | 0 (0.000) |     2.69 | gas, Purely, qqGOD, sATOR1, skrr |
|           19 |     2085 | 2026-04-02 | FengDa Gaming              | L   | 0.805      | -            | -                | -                | -         |   -11.66 | gas, Purely, qqGOD, sATOR1, skrr |
|           18 |     2088 | 2026-04-02 | Rare Atom                  | L   | 0.804      | -            | -                | -                | -         |    -4.18 | gas, Purely, qqGOD, sATOR1, skrr |
|           17 |     2184 | 2026-04-01 | BORING PLAYER              | W   | 0.797      | 0.352        | 0.001 (0.000)    | 0.213 (0.060)    | 1 (0.797) |    12.12 | gas, Purely, qqGOD, sATOR1, skrr |
|           16 |     2302 | 2026-03-30 | TYLOO                      | L   | 0.789      | -            | -                | -                | -         |    -0.55 | gas, Purely, qqGOD, sATOR1, skrr |
|           15 |     2443 | 2026-03-29 | TEAM XDM                   | L   | 0.777      | -            | -                | -                | -         |   -20.31 | gas, Purely, qqGOD, sATOR1, skrr |
|           14 |     2521 | 2026-03-28 | SemperFi Esports           | L   | 0.771      | -            | -                | -                | -         |    -4.13 | gas, Purely, qqGOD, sATOR1, skrr |
|           13 |     2527 | 2026-03-27 | Team Unitronic             | W   | 0.769      | 0.320        | -                | 0.033 (0.008)    | 0 (0.000) |     4.42 | gas, Purely, qqGOD, sATOR1, skrr |
|           12 |     2667 | 2026-03-24 | Last Bullet (Chinese team) | L   | 0.749      | -            | -                | -                | -         |    -7.90 | gas, Purely, qqGOD, sATOR1, skrr |
|           11 |     2699 | 2026-03-24 | Alter Ego                  | L   | 0.745      | -            | -                | -                | -         |    -7.32 | gas, Purely, qqGOD, sATOR1, skrr |
|           10 |     2726 | 2026-03-23 | Kaleido Gaming             | L   | 0.742      | -            | -                | -                | -         |    -6.45 | gas, Purely, qqGOD, sATOR1, skrr |
|            9 |     2778 | 2026-03-23 | BMZ                        | L   | 0.738      | -            | -                | -                | -         |    -6.68 | gas, Purely, qqGOD, sATOR1, skrr |
|            8 |     2890 | 2026-03-21 | 5star eSports              | W   | 0.725      | 0.333        | 0.023 (0.005)    | 0.394 (0.095)    | -         |    20.22 | gas, Purely, qqGOD, sATOR1, skrr |
|            7 |     2952 | 2026-03-20 | Haunted House              | W   | 0.718      | 0.333        | 0.005 (0.001)    | 0.164 (0.039)    | -         |    12.13 | gas, Purely, qqGOD, sATOR1, skrr |
|            6 |     4376 | 2026-02-19 | Legion (Pakistani team)    | L   | 0.525      | -            | -                | -                | -         |   -11.04 | Daniel, gas, qqGOD, sATOR1, skrr |
|            5 |     4494 | 2026-02-17 | 5star eSports              | L   | 0.512      | -            | -                | -                | -         |    -1.47 | Daniel, gas, qqGOD, sATOR1, skrr |
|            4 |     5524 | 2026-01-17 | JiJieHao                   | L   | 0.310      | -            | -                | -                | -         |    -0.42 | gas, Purely, qqGOD, sATOR1, skrr |
|            3 |     5839 | 2025-12-29 | FengDa Gaming              | L   | 0.178      | -            | -                | -                | -         |    -3.31 | gas, Purely, qqGOD, sATOR1, skrr |
|            2 |     5841 | 2025-12-28 | Shika                      | W   | 0.171      | 0.371        | 0.000 (0.000)    | -                | 1 (0.171) |     0.79 | gas, Purely, qqGOD, sATOR1, skrr |
|            1 |     5847 | 2025-12-27 | Rare Atom                  | L   | 0.164      | -            | -                | -                | -         |    -0.90 | gas, Purely, qqGOD, sATOR1, skrr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($952.10)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.824 | $726.00        | $598.55         |
| 2026-03-25 |      0.755 | $225.00        | $169.94         |
| 2025-12-30 |      0.184 | $1,000.00      | $183.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
