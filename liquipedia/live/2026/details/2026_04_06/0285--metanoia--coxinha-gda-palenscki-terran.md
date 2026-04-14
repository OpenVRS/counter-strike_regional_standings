### Roster Details<br />
Team Name: Metanoia<br />
Roster: coxinha, GdA, palenscki, terran<br />
Global Rank: [285](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [74]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  595.3<br />
<br />
Final Rank Value (595.3) = Starting Rank Value (579.7) + Head To Head Adjustments (15.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.283[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.070[<sup>2</sup>](#table1)

The average of these factors is 0.092<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 579.7
- 400 + ( ( 0.092 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 579.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.021
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1626 | 2026-03-04 | ShindeN          | L   | 0.981      | -            | -                | -                | -         |    -0.71 | coxinha, GdA, Kaiserzy, palenscki, terran |
|            4 |     1645 | 2026-03-04 | Imperial Esports | L   | 0.980      | -            | -                | -                | -         |    -0.62 | coxinha, GdA, Kaiserzy, palenscki, terran |
|            3 |     3275 | 2026-01-23 | Sharks Esports   | L   | 0.713      | -            | -                | -                | -         |    -0.32 | coxinha, GdA, palenscki, spy1337, terran  |
|            2 |     3344 | 2026-01-21 | Game Hunters     | L   | 0.702      | -            | -                | -                | -         |    -4.52 | coxinha, GdA, palenscki, spy1337, terran  |
|            1 |     3349 | 2026-01-21 | Sharks Esports   | W   | 0.702      | 0.384        | 0.108 (0.029)    | 0.532 (0.144)    | 1 (0.702) |    21.83 | coxinha, GdA, palenscki, spy1337, terran  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
