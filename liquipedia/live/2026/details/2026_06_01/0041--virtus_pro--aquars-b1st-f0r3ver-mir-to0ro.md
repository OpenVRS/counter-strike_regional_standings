### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: AquaRS, b1st, F0R3VER, mir, tO0RO<br />
Global Rank: [41](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [30]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  1330.4<br />
<br />
Final Rank Value (1330.4) = Starting Rank Value (1246.0) + Head To Head Adjustments (84.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.384[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.833[<sup>2</sup>](#table1)

The average of these factors is 0.444<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1246.0
- 400 + ( ( 0.444 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1246.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.228
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      111 | 2026-05-28 | ARCRED             | W   | 1.000      | 0.396        | 0.025 (0.010)    | 0.577 (0.229)    | 1 (1.000) |    11.90 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           14 |      130 | 2026-05-28 | K27                | W   | 1.000      | 0.396        | 0.096 (0.038)    | 0.690 (0.274)    | 1 (1.000) |    17.53 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           13 |      149 | 2026-05-27 | 33                 | W   | 1.000      | 0.396        | 0.035 (0.014)    | 0.645 (0.256)    | 1 (1.000) |     9.47 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           12 |      181 | 2026-05-26 | CYBERSHOKE Esports | W   | 1.000      | 0.396        | 0.025 (0.010)    | 0.599 (0.238)    | 1 (1.000) |    11.58 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           11 |      188 | 2026-05-26 | 1w Team            | W   | 1.000      | 0.396        | 0.088 (0.035)    | 0.577 (0.229)    | 1 (1.000) |    16.98 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           10 |     3353 | 2026-03-11 | K27                | L   | 0.659      | -            | -                | -                | -         |    -7.38 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            9 |     3465 | 2026-03-09 | 1w Team            | W   | 0.644      | 0.371        | 0.088 (0.021)    | 0.577 (0.138)    | 1 (0.644) |     9.93 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            8 |     3480 | 2026-03-08 | Nuclear TigeRES    | W   | 0.643      | 0.371        | 0.047 (0.011)    | 0.748 (0.178)    | 1 (0.643) |    10.93 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            7 |     3615 | 2026-03-06 | SPARTA Esports     | L   | 0.625      | -            | -                | -                | -         |   -10.44 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            6 |     3626 | 2026-03-06 | Nuclear TigeRES    | W   | 0.624      | 0.333        | 0.047 (0.010)    | 0.748 (0.156)    | 1 (0.624) |    10.94 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            5 |     3639 | 2026-03-05 | WW TEAM            | L   | 0.621      | -            | -                | -                | -         |   -12.90 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            4 |     3661 | 2026-03-05 | SPARTA Esports     | W   | 0.619      | 0.333        | 0.039 (0.008)    | 0.828 (0.171)    | 1 (0.619) |     8.69 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            3 |     3728 | 2026-03-04 | ARCRED             | W   | 0.611      | 0.333        | 0.025 (0.005)    | -                | 1 (0.611) |     7.97 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            2 |     3739 | 2026-03-04 | Oxuji Esports      | W   | 0.611      | 0.333        | -                | 0.789 (0.161)    | -         |     9.63 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            1 |     4876 | 2026-02-08 | MOUZ NXT           | L   | 0.453      | -            | -                | -                | -         |   -10.42 | AquaRS, F0R3VER, fame, FL1T, mir        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,626.94)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      1.000 | $15,000.00     | $15,000.00      |
| 2026-03-06 |      0.627 | $1,000.00      | $626.94         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
