### Roster Details<br />
Team Name: SHISHKA<br />
Roster: danistzz, Krad, Norwi, shalfey, yiksrezo<br />
Global Rank: [247](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [163]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  684.4<br />
<br />
Final Rank Value (684.4) = Starting Rank Value (655.8) + Head To Head Adjustments (28.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.252[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.132<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 655.8
- 400 + ( ( 0.132 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 655.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      906 | 2026-06-19 | K27                  | L   | 0.899      | -            | -                | -                | -         |    -0.62 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            4 |     1156 | 2026-06-07 | CYBERSHOKE           | W   | 0.820      | 0.384        | 0.029 (0.009)    | 0.880 (0.277)    | 0 (0.000) |    24.23 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            3 |     1867 | 2026-05-17 | Endless Journey      | L   | 0.680      | -            | -                | -                | -         |    -7.13 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            2 |     1892 | 2026-05-16 | CYBERSHOKE Prospects | L   | 0.673      | -            | -                | -                | -         |    -1.49 | danistzz, Krad, Norwi, shalfey, yiksrezo |
|            1 |     1944 | 2026-05-14 | Endless Journey      | W   | 0.661      | 0.278        | 0.008 (0.001)    | 0.479 (0.088)    | 0 (0.000) |    13.63 | danistzz, Krad, Norwi, shalfey, yiksrezo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($340.44)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.681 | $500.00        | $340.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
