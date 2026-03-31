### Roster Details<br />
Team Name: BIG Academy<br />
Roster: D0nii, JBOEN, prosus, tripex17, w1dow<br />
Global Rank: [200](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [136]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  720.2<br />
<br />
Final Rank Value (720.2) = Starting Rank Value (661.6) + Head To Head Adjustments (58.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 661.6
- 400 + ( ( 0.131 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 661.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.221
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       13 | 2026-03-21 | Bebop                   | L   | 1.000      | -            | -                | -                | -         |    -4.92 | D0nii, JBOEN, prosus, tripex17, w1dow |
|           12 |       22 | 2026-03-20 | Lilmix                  | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.278 (0.040)    | 0 (0.000) |    21.84 | D0nii, JBOEN, prosus, tripex17, w1dow |
|           11 |       41 | 2026-03-19 | Aimclub (Romanian team) | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.188 (0.027)    | 0 (0.000) |    15.77 | D0nii, JBOEN, prosus, tripex17, w1dow |
|           10 |       58 | 2026-03-18 | Lilmix                  | L   | 1.000      | -            | -                | -                | -         |    -7.98 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            9 |      495 | 2026-03-08 | Wave Esports            | L   | 1.000      | -            | -                | -                | -         |   -16.16 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            8 |      504 | 2026-03-08 | Z7 Esports              | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     4.56 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            7 |      529 | 2026-03-07 | Lilmix                  | L   | 1.000      | -            | -                | -                | -         |    -8.60 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            6 |      545 | 2026-03-07 | LEO                     | W   | 1.000      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     4.59 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            5 |     2347 | 2026-01-22 | Team Nemesis            | L   | 0.804      | -            | -                | -                | -         |    -0.60 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            4 |     2370 | 2026-01-21 | 9INE                    | L   | 0.799      | -            | -                | -                | -         |    -0.74 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            3 |     2399 | 2026-01-21 | FUT Esports             | W   | 0.796      | 0.143        | 0.414 (0.047)    | 0.603 (0.069)    | 0 (0.000) |    24.94 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            2 |     2485 | 2026-01-17 | GenOne                  | W   | 0.772      | 0.143        | 0.022 (0.002)    | 0.610 (0.067)    | 0 (0.000) |    21.43 | D0nii, JBOEN, prosus, tripex17, w1dow |
|            1 |     2495 | 2026-01-17 | LFO (Turkish team)      | W   | 0.771      | 0.143        | 0.000 (0.000)    | 0.035 (0.004)    | 0 (0.000) |     4.49 | D0nii, JBOEN, prosus, tripex17, w1dow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
