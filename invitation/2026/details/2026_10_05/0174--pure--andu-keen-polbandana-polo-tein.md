### Roster Details<br />
Team Name: PURE<br />
Roster: aNdu, keen, Polbandana, POLO, tein<br />
Global Rank: [174](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [128]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  782.6<br />
<br />
Final Rank Value (782.6) = Starting Rank Value (729.9) + Head To Head Adjustments (52.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.400[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.9
- 400 + ( ( 0.165 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 729.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      127 | 2026-10-02 | NT            | L   | 1.000      | -            | -                | -                | -         |    -4.06 | aNdu, keen, Polbandana, POLO, tein  |
|            6 |      165 | 2026-10-01 | ABT           | W   | 1.000      | 0.349        | 0.000 (0.000)    | 0.097 (0.034)    | 1 (1.000) |    10.99 | aNdu, keen, Polbandana, POLO, tein  |
|            5 |      168 | 2026-10-01 | aimclub       | L   | 1.000      | -            | -                | -                | -         |    -3.89 | aNdu, keen, Polbandana, POLO, tein  |
|            4 |      174 | 2026-10-01 | NAVI Junior   | W   | 1.000      | 0.349        | 0.006 (0.002)    | 0.546 (0.190)    | 1 (1.000) |    22.49 | aNdu, keen, Polbandana, POLO, tein  |
|            3 |      178 | 2026-10-01 | Next Up       | W   | 1.000      | 0.349        | 0.000 (0.000)    | 0.034 (0.012)    | 1 (1.000) |     9.01 | aNdu, keen, Polbandana, POLO, tein  |
|            2 |      183 | 2026-10-01 | Falcons Force | W   | 1.000      | 0.349        | 0.002 (0.001)    | 0.460 (0.161)    | 1 (1.000) |    19.08 | aNdu, keen, Polbandana, POLO, tein  |
|            1 |     1633 | 2026-08-30 | Sangal        | L   | 0.960      | -            | -                | -                | -         |    -0.89 | aNdu, fr3nd, keen, Polbandana, tein |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
