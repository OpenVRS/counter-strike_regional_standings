### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski-, VireZ<br />
Global Rank: [144](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [97]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  907.2<br />
<br />
Final Rank Value (907.2) = Starting Rank Value (949.4) + Head To Head Adjustments (-42.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.277[<sup>1</sup>](#table2)
- Bounty Collected: 0.329[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.518[<sup>2</sup>](#table1)

The average of these factors is 0.289<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 949.4
- 400 + ( ( 0.289 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 949.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.201
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |       60 | 2026-05-30 | Young Ninjas              | L   | 1.000      | -            | -                | -                | -         |   -16.23 | BacH, BangBang, Laykinn, m0vski-, mAnGo |
|           15 |       98 | 2026-05-29 | Atreides                  | L   | 1.000      | -            | -                | -                | -         |   -12.88 | BacH, BangBang, Laykinn, m0vski-, mAnGo |
|           14 |      125 | 2026-05-28 | Young Ninjas              | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.548 (0.078)    | 0 (0.000) |    13.82 | BacH, BangBang, Laykinn, m0vski-, mAnGo |
|           13 |     1249 | 2026-04-26 | MASONIC                   | L   | 0.963      | -            | -                | -                | -         |   -17.08 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|           12 |     1282 | 2026-04-25 | IMMAPROBLEM               | W   | 0.960      | 0.322        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.960) |     1.40 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|           11 |     1599 | 2026-04-12 | Entropy Gaming            | L   | 0.872      | -            | -                | -                | -         |   -18.54 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|           10 |     1601 | 2026-04-12 | Esport Academy Copenhagen | L   | 0.871      | -            | -                | -                | -         |    -6.27 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            9 |     1621 | 2026-04-11 | Entropy Gaming            | W   | 0.865      | 0.341        | 0.004 (0.001)    | 0.115 (0.034)    | 1 (0.865) |     7.83 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            8 |     1629 | 2026-04-11 | SAW                       | W   | 0.863      | 0.341        | 0.001 (0.000)    | 0.207 (0.061)    | 1 (0.863) |     8.60 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            7 |     2180 | 2026-04-01 | Falcons Force             | L   | 0.798      | -            | -                | -                | -         |   -16.76 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            6 |     2190 | 2026-04-01 | 3DMAX                     | L   | 0.797      | -            | -                | -                | -         |    -1.34 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            5 |     2219 | 2026-03-31 | Z7 Esports                | W   | 0.793      | 0.341        | 0.000 (0.000)    | 0.026 (0.007)    | 1 (0.793) |     1.32 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            4 |     2227 | 2026-03-31 | Máquinas                  | W   | 0.793      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.793) |     0.96 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            3 |     2250 | 2026-03-31 | AM Gaming                 | L   | 0.792      | -            | -                | -                | -         |    -3.85 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            2 |     2275 | 2026-03-31 | B8                        | W   | 0.791      | 0.341        | 0.330 (0.089)    | 0.468 (0.126)    | 1 (0.791) |    24.22 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            1 |     2291 | 2026-03-31 | Phantom Esports           | L   | 0.791      | -            | -                | -                | -         |    -7.41 | BacH, BangBang, Laykinn, m0vski-, VireZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,534.82)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-12 |      0.873 | $1,759.11      | $1,534.82       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
