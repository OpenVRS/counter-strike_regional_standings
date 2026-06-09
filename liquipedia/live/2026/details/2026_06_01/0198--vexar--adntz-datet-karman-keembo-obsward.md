### Roster Details<br />
Team Name: Vexar<br />
Roster: ADntZ, datet, KarmaN, keembo, obsward<br />
Global Rank: [198](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [127]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  754.6<br />
<br />
Final Rank Value (754.6) = Starting Rank Value (669.9) + Head To Head Adjustments (84.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.061[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 669.9
- 400 + ( ( 0.142 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 669.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.252
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |       20 | 2026-06-01 | G2 Ares              | L   | 1.000      | -            | -                | -                | -         |    -6.89 | ADntZ, datet, KarmaN, keembo, obsward    |
|           11 |       55 | 2026-05-30 | Brazylijski luz      | W   | 1.000      | 0.303        | 0.005 (0.002)    | 0.414 (0.125)    | 0 (0.000) |    20.33 | ADntZ, datet, KarmaN, keembo, obsward    |
|           10 |       84 | 2026-05-29 | NEW VISION           | W   | 1.000      | 0.303        | 0.009 (0.003)    | 0.395 (0.120)    | 0 (0.000) |    19.94 | ADntZ, datet, KarmaN, keembo, obsward    |
|            9 |      134 | 2026-05-28 | Dripmen              | W   | 1.000      | 0.303        | 0.001 (0.000)    | 0.247 (0.075)    | 0 (0.000) |    15.07 | ADntZ, datet, KarmaN, keembo, obsward    |
|            8 |      164 | 2026-05-27 | Project 91 Team      | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.119 (0.036)    | 0 (0.000) |    15.92 | ADntZ, datet, KarmaN, keembo, obsward    |
|            7 |      200 | 2026-05-26 | Lilmix               | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.409 (0.124)    | 0 (0.000) |    18.81 | ADntZ, datet, KarmaN, keembo, obsward    |
|            6 |      314 | 2026-05-23 | Hashiras             | L   | 1.000      | -            | -                | -                | -         |    -6.73 | ADntZ, datet, KarmaN, keembo, obsward    |
|            5 |     1589 | 2026-04-12 | ENJOY (Russian team) | L   | 0.873      | -            | -                | -                | -         |   -11.72 | ADntZ, datet, KarmaN, keembo, obsward    |
|            4 |     1596 | 2026-04-12 | CYBERSHOKE Prospects | W   | 0.872      | 0.278        | 0.006 (0.002)    | 0.499 (0.121)    | 0 (0.000) |    23.04 | ADntZ, datet, KarmaN, keembo, obsward    |
|            3 |     1615 | 2026-04-11 | ZOTIX                | W   | 0.866      | 0.278        | 0.000 (0.000)    | 0.028 (0.007)    | 0 (0.000) |     7.83 | ADntZ, datet, KarmaN, keembo, obsward    |
|            2 |     1651 | 2026-04-10 | Young TigeRES        | W   | 0.859      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     5.13 | ADntZ, datet, KarmaN, keembo, obsward    |
|            1 |     2603 | 2026-03-26 | Basement Bobs        | L   | 0.758      | -            | -                | -                | -         |   -16.03 | ADntZ, KarmaN, keembo, observerward, xds |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,154.64)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-01 |      1.000 | $500.00        | $500.00         |
| 2026-04-12 |      0.873 | $750.00        | $654.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
