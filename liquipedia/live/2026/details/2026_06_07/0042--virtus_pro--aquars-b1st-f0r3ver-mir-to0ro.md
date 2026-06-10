### Roster Details<br />
Team Name: Virtus.pro<br />
Roster: AquaRS, b1st, F0R3VER, mir, tO0RO<br />
Global Rank: [42](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [30]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1319.5<br />
<br />
Final Rank Value (1319.5) = Starting Rank Value (1236.5) + Head To Head Adjustments (83.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.385[<sup>1</sup>](#table2)
- Bounty Collected: 0.355[<sup>2</sup>](#table1)
- Opponent Network: 0.189[<sup>2</sup>](#table1)
- LAN Wins: 0.810[<sup>2</sup>](#table1)

The average of these factors is 0.435<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1236.5
- 400 + ( ( 0.435 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1236.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.224
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      193 | 2026-05-28 | ARCRED             | W   | 1.000      | 0.396        | 0.024 (0.009)    | 0.535 (0.212)    | 1 (1.000) |    11.88 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           14 |      214 | 2026-05-28 | K27                | W   | 1.000      | 0.396        | 0.090 (0.036)    | 0.646 (0.256)    | 1 (1.000) |    17.51 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           13 |      237 | 2026-05-27 | 33                 | W   | 1.000      | 0.396        | 0.033 (0.013)    | 0.599 (0.237)    | 1 (1.000) |     9.35 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           12 |      276 | 2026-05-26 | CYBERSHOKE Esports | W   | 1.000      | 0.396        | 0.023 (0.009)    | 0.566 (0.224)    | 1 (1.000) |    11.49 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           11 |      284 | 2026-05-26 | 1w Team            | W   | 1.000      | 0.396        | 0.089 (0.035)    | 0.611 (0.242)    | 1 (1.000) |    17.06 | AquaRS, b1st, F0R3VER, mir, tO0RO       |
|           10 |     3463 | 2026-03-11 | K27                | L   | 0.606      | -            | -                | -                | -         |    -6.98 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            9 |     3575 | 2026-03-09 | 1w Team            | W   | 0.591      | 0.371        | 0.089 (0.020)    | 0.611 (0.134)    | 1 (0.591) |     9.22 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            8 |     3590 | 2026-03-08 | Nuclear TigeRES    | W   | 0.591      | 0.371        | 0.045 (0.010)    | 0.711 (0.156)    | 1 (0.591) |    10.13 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            7 |     3725 | 2026-03-06 | SPARTA Esports     | L   | 0.573      | -            | -                | -                | -         |    -9.80 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            6 |     3736 | 2026-03-06 | Nuclear TigeRES    | W   | 0.572      | 0.333        | 0.045 (0.009)    | 0.711 (0.136)    | 1 (0.572) |    10.08 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            5 |     3749 | 2026-03-05 | WW TEAM            | L   | 0.569      | -            | -                | -                | -         |   -11.76 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            4 |     3771 | 2026-03-05 | SPARTA Esports     | W   | 0.567      | 0.333        | 0.036 (0.007)    | 0.781 (0.148)    | 1 (0.567) |     7.77 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            3 |     3838 | 2026-03-04 | ARCRED             | W   | 0.559      | 0.333        | 0.024 (0.004)    | -                | 1 (0.559) |     7.28 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            2 |     3849 | 2026-03-04 | Oxuji Esports      | W   | 0.558      | 0.333        | -                | 0.759 (0.141)    | -         |     9.21 | AquaRS, b1st, F0R3VER, tO0RO, TriBorgg1 |
|            1 |     4986 | 2026-02-08 | MOUZ NXT           | L   | 0.400      | -            | -                | -                | -         |    -9.45 | AquaRS, F0R3VER, fame, FL1T, mir        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,574.67)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      1.000 | $15,000.00     | $15,000.00      |
| 2026-03-06 |      0.575 | $1,000.00      | $574.67         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
