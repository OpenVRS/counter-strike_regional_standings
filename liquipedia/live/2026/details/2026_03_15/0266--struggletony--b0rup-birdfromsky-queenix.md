### Roster Details<br />
Team Name: Struggletony<br />
Roster: b0RUP, birdfromsky, Queenix<br />
Global Rank: [266](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [169]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  596.0<br />
<br />
Final Rank Value (596.0) = Starting Rank Value (575.2) + Head To Head Adjustments (20.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.090<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 575.2
- 400 + ( ( 0.090 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 575.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |       40 | 2026-03-14 | Tricked Esport | L   | 1.000      | -            | -                | -                | -         |    -1.29 | b0RUP, birdfromsky, kristou, Q-Q, Queenix    |
|            4 |       46 | 2026-03-14 | AaB esport     | L   | 1.000      | -            | -                | -                | -         |    -2.05 | b0RUP, birdfromsky, kristou, Q-Q, Queenix    |
|            3 |       52 | 2026-03-14 | Tricked Esport | W   | 1.000      | 0.329        | 0.025 (0.008)    | 0.409 (0.135)    | 1 (1.000) |    30.39 | b0RUP, birdfromsky, kristou, Q-Q, Queenix    |
|            2 |      206 | 2026-03-10 | NOVAQ          | L   | 1.000      | -            | -                | -                | -         |    -2.31 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix |
|            1 |      251 | 2026-03-09 | HYPERSPIRIT    | L   | 1.000      | -            | -                | -                | -         |    -4.01 | b0RUP, birdfromsky, Burmylov, JACKZ, Queenix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
