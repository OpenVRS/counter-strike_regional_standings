### Roster Details<br />
Team Name: Revenge<br />
Roster: aRon, imyGDx, Northwest, nursSSS<br />
Global Rank: [236](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  658.9<br />
<br />
Final Rank Value (658.9) = Starting Rank Value (656.2) + Head To Head Adjustments (2.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.244[<sup>1</sup>](#table2)
- Bounty Collected: 0.189[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.077[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 656.2
- 400 + ( ( 0.128 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 656.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     1138 | 2026-09-10 | DEPO     | L   | 1.000      | -            | -                | -                | -         |    -2.82 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            6 |     1152 | 2026-09-10 | Legion   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.103 (0.015)    | 0 (0.000) |    10.11 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            5 |     1200 | 2026-09-09 | DEPO     | L   | 1.000      | -            | -                | -                | -         |    -2.75 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            4 |     1209 | 2026-09-09 | Legion   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.103 (0.015)    | 0 (0.000) |    10.39 | aRon, Hezza, imyGDx, Northwest, nursSSS   |
|            3 |     2551 | 2026-08-01 | THE UNIT | L   | 0.767      | -            | -                | -                | -         |    -9.93 | aRon, imyGDx, Lunatik, Northwest, nursSSS |
|            2 |     2555 | 2026-08-01 | ZWAW     | W   | 0.766      | 0.342        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (0.766) |     7.96 | aRon, imyGDx, Lunatik, Northwest, nursSSS |
|            1 |     2569 | 2026-08-01 | THE UNIT | L   | 0.765      | -            | -                | -                | -         |   -10.26 | aRon, imyGDx, Lunatik, Northwest, nursSSS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($386.41)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      0.773 | $500.00        | $386.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
