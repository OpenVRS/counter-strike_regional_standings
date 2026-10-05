### Roster Details<br />
Team Name: FAFO<br />
Roster: nibito, whitezins, ynrii<br />
Global Rank: [304](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [199]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  555.0<br />
<br />
Final Rank Value (555.0) = Starting Rank Value (542.9) + Head To Head Adjustments (12.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.184[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.071<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 542.9
- 400 + ( ( 0.071 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 542.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      502 | 2026-09-24 | aimclub     | L   | 1.000      | -            | -                | -                | -         |    -1.05 | bonce, nibito, s1mbalance, whitezins, ynrii |
|            5 |      528 | 2026-09-24 | INFURITY    | L   | 1.000      | -            | -                | -                | -         |    -7.95 | bonce, nibito, s1mbalance, whitezins, ynrii |
|            4 |      578 | 2026-09-23 | Diamant     | W   | 1.000      | 0.345        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     8.89 | bonce, nibito, s1mbalance, whitezins, ynrii |
|            3 |     1277 | 2026-09-07 | WBT Academy | L   | 1.000      | -            | -                | -                | -         |    -4.85 | nibito, Pleb0rs, R1N7331, whitezins, ynrii  |
|            2 |     1316 | 2026-09-06 | Banda Chuya | L   | 1.000      | -            | -                | -                | -         |    -5.73 | nibito, Pleb0rs, R1N7331, whitezins, ynrii  |
|            1 |     1329 | 2026-09-06 | Gothic      | W   | 1.000      | 0.317        | 0.001 (0.000)    | 0.050 (0.016)    | 0 (0.000) |    22.80 | nibito, Pleb0rs, R1N7331, whitezins, ynrii  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
