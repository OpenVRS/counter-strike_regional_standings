### Roster Details<br />
Team Name: EMPIRE (American team)<br />
Roster: BAGEL, C0C0, no1nx, twigs<br />
Global Rank: [290](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_22.md)<br />
Regional Rank: [76]( ../../standings_americas_2026_03_22.md)<br />
<br />
Final Rank Value:  547.3<br />
<br />
Final Rank Value (547.3) = Starting Rank Value (503.9) + Head To Head Adjustments (43.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.200[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 503.9
- 400 + ( ( 0.052 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 503.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.104
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |       46 | 2026-03-18 | Zomblers        | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.295 (0.042)    | 0 (0.000) |    24.09 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            6 |       88 | 2026-03-16 | Wanted Goons    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.059 (0.008)    | 0 (0.000) |    11.01 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            5 |      146 | 2026-03-14 | SportsBetExpert | W   | 1.000      | 0.143        | 0.004 (0.001)    | 0.237 (0.034)    | 0 (0.000) |    21.98 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            4 |     2756 | 2026-01-03 | Reign Above     | L   | 0.678      | -            | -                | -                | -         |    -8.07 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            3 |     2763 | 2026-01-03 | NRG             | L   | 0.678      | -            | -                | -                | -         |    -0.23 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            2 |     2937 | 2025-12-12 | Life's A Game   | L   | 0.534      | -            | -                | -                | -         |    -3.21 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            1 |     3804 | 2025-11-07 | Team Voca       | L   | 0.300      | -            | -                | -                | -         |    -2.13 | BAGEL, C0C0, Laboom, no1nx, twigs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
