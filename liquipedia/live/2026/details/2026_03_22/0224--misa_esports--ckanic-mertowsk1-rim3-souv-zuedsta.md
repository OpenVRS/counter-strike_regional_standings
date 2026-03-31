### Roster Details<br />
Team Name: Misa Esports<br />
Roster: Ckanic, Mertowsk1, rim3, souv, Zuedsta<br />
Global Rank: [224](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [149]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  681.1<br />
<br />
Final Rank Value (681.1) = Starting Rank Value (604.5) + Head To Head Adjustments (76.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.031[<sup>2</sup>](#table1)
- LAN Wins: 0.094[<sup>2</sup>](#table1)

The average of these factors is 0.102<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.5
- 400 + ( ( 0.102 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 604.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.172
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      150 | 2026-03-14 | Young Ninjas         | L   | 1.000      | -            | -                | -                | -         |    -9.94 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            7 |      203 | 2026-03-13 | Inner Circle Academy | W   | 1.000      | 0.278        | 0.004 (0.001)    | 0.068 (0.019)    | 0 (0.000) |    13.38 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            6 |      245 | 2026-03-12 | Donstu Esports       | L   | 1.000      | -            | -                | -                | -         |   -14.45 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            5 |      380 | 2026-03-09 | TNT                  | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.223 (0.032)    | 0 (0.000) |    18.57 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            4 |      450 | 2026-03-08 | Yngods               | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.209 (0.030)    | 0 (0.000) |    15.14 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            3 |      604 | 2026-03-05 | HAVU                 | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.520 (0.074)    | 0 (0.000) |    27.81 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            2 |     1661 | 2026-02-13 | Magic (Russian team) | L   | 0.950      | -            | -                | -                | -         |    -0.91 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |
|            1 |     1712 | 2026-02-12 | Inner Circle Esports | W   | 0.943      | 0.384        | 0.078 (0.028)    | 0.425 (0.154)    | 1 (0.943) |    27.03 | Ckanic, Mertowsk1, rim3, souv, Zuedsta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
