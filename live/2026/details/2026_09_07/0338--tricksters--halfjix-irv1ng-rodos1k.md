### Roster Details<br />
Team Name: Tricksters<br />
Roster: halfjix, iRV1NG, Rodos1k<br />
Global Rank: [338](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [216]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  521.4<br />
<br />
Final Rank Value (521.4) = Starting Rank Value (529.4) + Head To Head Adjustments (-8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.068<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 529.4
- 400 + ( ( 0.068 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 529.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      317 | 2026-08-29 | DONSTU     | L   | 1.000      | -            | -                | -                | -         |    -8.08 | halfjix, iRV1NG, Leowaron, rmbooo, Rodos1k |
|            4 |     1730 | 2026-07-12 | mellren    | L   | 0.818      | -            | -                | -                | -         |    -6.16 | halfjix, iRV1NG, k3lpi, L1GHTN, Rodos1k    |
|            3 |     1751 | 2026-07-11 | The Boys   | W   | 0.813      | 0.278        | 0.000 (0.000)    | 0.031 (0.007)    | 0 (0.000) |     8.51 | halfjix, iRV1NG, k3lpi, L1GHTN, Rodos1k    |
|            2 |     2766 | 2026-05-25 | PsychoFace | L   | 0.499      | -            | -                | -                | -         |    -1.79 | adaRAN, boq, halfjix, iRV1NG, Rodos1k      |
|            1 |     2774 | 2026-05-25 | WW         | L   | 0.498      | -            | -                | -                | -         |    -0.58 | adaRAN, boq, halfjix, iRV1NG, Rodos1k      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,047.46)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $638.00        | $638.00         |
| 2026-07-12 |      0.819 | $500.00        | $409.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
