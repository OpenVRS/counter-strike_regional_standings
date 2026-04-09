### Roster Details<br />
Team Name: WAZABI<br />
Roster: BacH, BangBang, Laykinn, m0vski-, VireZ<br />
Global Rank: [213](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [139]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  730.9<br />
<br />
Final Rank Value (730.9) = Starting Rank Value (706.1) + Head To Head Adjustments (24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.300[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.1
- 400 + ( ( 0.156 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 706.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.092
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      211 | 2026-04-01 | Falcons Force   | L   | 1.000      | -            | -                | -                | -         |   -11.00 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            6 |      221 | 2026-04-01 | 3DMAX           | L   | 1.000      | -            | -                | -                | -         |    -0.51 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            5 |      242 | 2026-03-31 | Z7 Esports      | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.031 (0.010)    | 1 (1.000) |     5.13 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            4 |      250 | 2026-03-31 | Máquinas        | W   | 1.000      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     3.86 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            3 |      265 | 2026-03-31 | AM Gaming       | L   | 1.000      | -            | -                | -                | -         |    -1.32 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            2 |      283 | 2026-03-31 | B8              | W   | 1.000      | 0.341        | 0.187 (0.064)    | 0.349 (0.119)    | 1 (1.000) |    31.13 | BacH, BangBang, Laykinn, m0vski-, VireZ |
|            1 |      297 | 2026-03-31 | Phantom Esports | L   | 1.000      | -            | -                | -                | -         |    -2.47 | BacH, BangBang, Laykinn, m0vski-, VireZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
