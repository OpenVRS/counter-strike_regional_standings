### Roster Details<br />
Team Name: Tricksters<br />
Roster: Halfjix, iRV1NG<br />
Global Rank: [291](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  626.3<br />
<br />
Final Rank Value (626.3) = Starting Rank Value (612.4) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.110<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 612.4
- 400 + ( ( 0.110 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 612.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      523 | 2026-07-12 | mellren    | L   | 1.000      | -            | -                | -                | -         |   -14.89 | Halfjix, iRV1NG, k3lpi, L1GHTN, Rodos1k |
|            4 |      544 | 2026-07-11 | The Boys   | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.047 (0.013)    | 0 (0.000) |     6.73 | Halfjix, iRV1NG, k3lpi, L1GHTN, Rodos1k |
|            3 |      563 | 2026-07-10 | PURE       | W   | 1.000      | 0.278        | 0.001 (0.000)    | 0.260 (0.072)    | 0 (0.000) |    25.18 | boq, Halfjix, iRV1NG, k3lpi, L1GHTN     |
|            2 |     1559 | 2026-05-25 | PsychoFace | L   | 0.734      | -            | -                | -                | -         |    -2.36 | adaRAN, boq, Halfjix, iRV1NG, Rodos1k   |
|            1 |     1567 | 2026-05-25 | WW         | L   | 0.734      | -            | -                | -                | -         |    -0.75 | adaRAN, boq, Halfjix, iRV1NG, Rodos1k   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($500.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      1.000 | $500.00        | $500.00         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
