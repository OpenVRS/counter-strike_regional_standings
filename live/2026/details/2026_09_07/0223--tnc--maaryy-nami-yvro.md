### Roster Details<br />
Team Name: TNC<br />
Roster: maaryy, Nami, yvro<br />
Global Rank: [223](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [153]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  675.5<br />
<br />
Final Rank Value (675.5) = Starting Rank Value (642.2) + Head To Head Adjustments (33.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.266[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.2
- 400 + ( ( 0.127 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 642.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3176 | 2026-05-13 | Betclic    | W   | 0.419      | 0.384        | 0.004 (0.001)    | 0.177 (0.029)    | 0 (0.000) |     8.84 | aimy, maaryy, Markoś, Nami, yvro  |
|            4 |     3356 | 2026-05-08 | FAVBET     | W   | 0.386      | 0.384        | 0.001 (0.000)    | 0.070 (0.010)    | 0 (0.000) |     6.37 | aimy, maaryy, Markoś, Nami, yvro  |
|            3 |     3405 | 2026-05-06 | Lavked     | W   | 0.369      | 0.384        | 0.009 (0.001)    | 0.830 (0.118)    | 0 (0.000) |     9.54 | aimy, maaryy, Nami, POLO, yvro    |
|            2 |     3435 | 2026-05-04 | UNiTY      | W   | 0.357      | 0.384        | 0.006 (0.001)    | 0.537 (0.074)    | 0 (0.000) |     9.37 | AdrieN, maaryy, Nami, POLO, yvro  |
|            1 |     4366 | 2026-04-05 | PsychoFace | L   | 0.165      | -            | -                | -                | -         |    -0.80 | AdrieN, dixyi, maaryy, Nami, yvro |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($875.91)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-15 |      0.432 | $1,250.00      | $539.63         |
| 2026-04-09 |      0.192 | $1,750.00      | $336.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
