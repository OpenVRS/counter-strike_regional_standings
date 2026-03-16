### Roster Details<br />
Team Name: The Glecs<br />
Roster: crickeyyy, hAw, hodix, jackast<br />
Global Rank: [304](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [180]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  495.0<br />
<br />
Final Rank Value (495.0) = Starting Rank Value (512.4) + Head To Head Adjustments (-17.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.229[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 512.4
- 400 + ( ( 0.059 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 512.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.035
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1728 | 2026-01-13 | 777 Esports                               | L   | 0.881      | -            | -                | -                | -         |   -12.70 | crickeyyy, hAw, jackast, julius, v1ze     |
|           14 |     1749 | 2026-01-12 | ARCRED                                    | L   | 0.872      | -            | -                | -                | -         |    -1.72 | crickeyyy, hAw, jackast, julius, v1ze     |
|           13 |     2526 | 2025-11-21 | Mousquetaires                             | L   | 0.525      | -            | -                | -                | -         |    -3.11 | crickeyyy, hAw, hodix, jackast, Yats1k    |
|           12 |     2549 | 2025-11-20 | Fire Flux Esports                         | L   | 0.520      | -            | -                | -                | -         |    -2.32 | crickeyyy, hAw, hodix, jackast, Yats1k    |
|           11 |     3225 | 2025-10-28 | Copenhagen Wolves (American organization) | L   | 0.367      | -            | -                | -                | -         |    -2.57 | crickeyyy, hAw, hodix, jackast, nat1ve    |
|           10 |     3274 | 2025-10-27 | ALLINNERS                                 | L   | 0.360      | -            | -                | -                | -         |    -3.15 | crickeyyy, hAw, hodix, jackast, L1seYoung |
|            9 |     3312 | 2025-10-26 | KONO.ECF                                  | L   | 0.354      | -            | -                | -                | -         |    -1.75 | crickeyyy, hAw, hodix, jackast, L1seYoung |
|            8 |     3373 | 2025-10-25 | NOVAQ                                     | W   | 0.347      | 0.384        | 0.033 (0.004)    | 0.597 (0.080)    | 0 (0.000) |    10.55 | crickeyyy, hAw, hodix, jackast, L1seYoung |
|            7 |     3438 | 2025-10-24 | ALGO Esports                              | W   | 0.340      | 0.384        | 0.000 (0.000)    | 0.037 (0.005)    | 0 (0.000) |     5.22 | crickeyyy, hAw, hodix, jackast, nat1ve    |
|            6 |     3590 | 2025-10-18 | HubaBuba                                  | L   | 0.299      | -            | -                | -                | -         |    -5.08 | crickeyyy, hAw, hodix, jackast, L1seYoung |
|            5 |     3628 | 2025-10-17 | Copenhagen Wolves (American organization) | L   | 0.291      | -            | -                | -                | -         |    -1.90 | crickeyyy, hAw, hodix, jackast, L1seYoung |
|            4 |     3852 | 2025-10-09 | Bebop                                     | L   | 0.240      | -            | -                | -                | -         |    -1.30 | crickeyyy, hAw, hodix, jackast, Yats1k    |
|            3 |     3955 | 2025-10-07 | HOTU                                      | W   | 0.227      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.48 | crickeyyy, hAw, hodix, jackast, Yats1k    |
|            2 |     4012 | 2025-10-06 | Monte                                     | L   | 0.220      | -            | -                | -                | -         |    -0.06 | crickeyyy, HAw, hodix, jackast, Mad1nho   |
|            1 |     4291 | 2025-09-30 | K27                                       | L   | 0.179      | -            | -                | -                | -         |    -0.04 | crickeyyy, hAw, hodix, jackast, mad1nho   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
