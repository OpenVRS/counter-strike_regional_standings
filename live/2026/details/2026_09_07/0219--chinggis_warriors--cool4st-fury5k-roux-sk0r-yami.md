### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: cool4st, fury5k, ROUX, sk0R, yAmi<br />
Global Rank: [219](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  682.5<br />
<br />
Final Rank Value (682.5) = Starting Rank Value (636.8) + Head To Head Adjustments (45.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.8
- 400 + ( ( 0.124 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 636.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      100 | 2026-09-03 | 5star         | L   | 1.000      | -            | -                | -                | -         |    -8.55 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           14 |      110 | 2026-09-03 | Rare Atom     | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.337 (0.048)    | 0 (0.000) |    22.01 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           13 |      116 | 2026-09-03 | NEXVOID       | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.360 (0.051)    | 0 (0.000) |    23.32 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           12 |      137 | 2026-09-02 | The Huns      | W   | 1.000      | 0.143        | 0.025 (0.004)    | 0.361 (0.052)    | 0 (0.000) |    21.58 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           11 |      172 | 2026-09-01 | Just Swing    | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.267 (0.038)    | 0 (0.000) |    20.32 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           10 |      205 | 2026-08-31 | 5star         | L   | 1.000      | -            | -                | -                | -         |    -7.21 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|            9 |      320 | 2026-08-29 | Just Swing    | L   | 1.000      | -            | -                | -                | -         |   -10.87 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            8 |      366 | 2026-08-28 | NEXVOID       | L   | 1.000      | -            | -                | -                | -         |    -7.72 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            7 |      464 | 2026-08-26 | XDM           | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.048 (0.016)    | 0 (0.000) |    11.81 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            6 |      507 | 2026-08-25 | Haunted House | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.045 (0.015)    | 0 (0.000) |    18.99 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            5 |      551 | 2026-08-24 | NEXVOID       | L   | 1.000      | -            | -                | -                | -         |    -7.87 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            4 |      580 | 2026-08-22 | The Huns      | L   | 1.000      | -            | -                | -                | -         |    -6.63 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            3 |      603 | 2026-08-22 | Vitalem Aerem | L   | 1.000      | -            | -                | -                | -         |   -12.22 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            2 |     1454 | 2026-07-24 | 5star         | L   | 0.897      | -            | -                | -                | -         |    -5.60 | hasteka, ROUX, sergelen19k, sk0R, yAmi |
|            1 |     1481 | 2026-07-23 | The Huns      | L   | 0.890      | -            | -                | -                | -         |    -5.67 | hasteka, ROUX, sergelen19k, sk0R, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($251.94)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-25 |      0.903 | $279.00        | $251.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
