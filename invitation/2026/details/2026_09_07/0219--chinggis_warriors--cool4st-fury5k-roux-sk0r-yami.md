### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: cool4st, fury5k, ROUX, sk0R, yAmi<br />
Global Rank: [219](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [22]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  682.0<br />
<br />
Final Rank Value (682.0) = Starting Rank Value (636.9) + Head To Head Adjustments (45.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.243[<sup>2</sup>](#table1)
- Opponent Network: 0.022[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.124<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 636.9
- 400 + ( ( 0.124 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 636.9


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
|           15 |      128 | 2026-09-03 | 5star         | L   | 1.000      | -            | -                | -                | -         |    -8.60 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           14 |      138 | 2026-09-03 | Rare Atom     | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.338 (0.048)    | 0 (0.000) |    22.00 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           13 |      144 | 2026-09-03 | NEXVOID       | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.359 (0.051)    | 0 (0.000) |    23.26 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           12 |      165 | 2026-09-02 | The Huns      | W   | 1.000      | 0.143        | 0.025 (0.004)    | 0.359 (0.051)    | 0 (0.000) |    21.54 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           11 |      200 | 2026-09-01 | Just Swing    | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.266 (0.038)    | 0 (0.000) |    20.31 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|           10 |      233 | 2026-08-31 | 5star         | L   | 1.000      | -            | -                | -                | -         |    -7.26 | cool4st, fury5k, ROUX, sk0R, yAmi      |
|            9 |      348 | 2026-08-29 | Just Swing    | L   | 1.000      | -            | -                | -                | -         |   -10.87 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            8 |      394 | 2026-08-28 | NEXVOID       | L   | 1.000      | -            | -                | -                | -         |    -7.79 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            7 |      492 | 2026-08-26 | XDM           | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.048 (0.016)    | 0 (0.000) |    11.80 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            6 |      535 | 2026-08-25 | Haunted House | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.044 (0.015)    | 0 (0.000) |    18.96 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            5 |      579 | 2026-08-24 | NEXVOID       | L   | 1.000      | -            | -                | -                | -         |    -7.96 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            4 |      608 | 2026-08-22 | The Huns      | L   | 1.000      | -            | -                | -                | -         |    -6.69 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            3 |      631 | 2026-08-22 | Vitalem Aerem | L   | 1.000      | -            | -                | -                | -         |   -12.27 | Aceari, hasteka, ROUX, sk0R, yAmi      |
|            2 |     1482 | 2026-07-24 | 5star         | L   | 0.891      | -            | -                | -                | -         |    -5.63 | hasteka, ROUX, sergelen19k, sk0R, yAmi |
|            1 |     1509 | 2026-07-23 | The Huns      | L   | 0.885      | -            | -                | -                | -         |    -5.69 | hasteka, ROUX, sergelen19k, sk0R, yAmi |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($250.41)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-25 |      0.898 | $279.00        | $250.41         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
