### Roster Details<br />
Team Name: SHISHKA<br />
Roster: danistzz, Krad, Norwi, shalfey, yiksrezo<br />
Global Rank: [269](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [180]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  634.3<br />
<br />
Final Rank Value (634.3) = Starting Rank Value (616.7) + Head To Head Adjustments (17.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.229[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.114<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 616.7
- 400 + ( ( 0.114 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 616.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2141 | 2026-06-19 | K27             | L   | 0.658      | -            | -                | -                | -         |    -0.29 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            4 |     2391 | 2026-06-07 | CYBERSHOKE      | W   | 0.579      | 0.384        | 0.006 (0.001)    | 0.244 (0.054)    | 0 (0.000) |    14.67 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            3 |     3102 | 2026-05-17 | Endless Journey | L   | 0.440      | -            | -                | -                | -         |    -4.51 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            2 |     3127 | 2026-05-16 | UPGRADE         | L   | 0.433      | -            | -                | -                | -         |    -1.18 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            1 |     3179 | 2026-05-14 | Endless Journey | W   | 0.420      | 0.278        | 0.007 (0.001)    | 0.504 (0.059)    | 0 (0.000) |     8.86 | danistzz, Krad, Norwi, shalfey, yiksrezo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($220.08)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.440 | $500.00        | $220.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
