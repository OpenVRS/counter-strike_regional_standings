### Roster Details<br />
Team Name: struggletony<br />
Roster: birdfromsky, Q-Q, Queenix<br />
Global Rank: [255](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [171]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  643.5<br />
<br />
Final Rank Value (643.5) = Starting Rank Value (642.5) + Head To Head Adjustments (1.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.250[<sup>1</sup>](#table2)
- Bounty Collected: 0.186[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.071[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 642.5
- 400 + ( ( 0.127 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 642.5


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
|            6 |     2235 | 2026-06-13 | MASONIC  | L   | 0.623      | -            | -                | -                | -         |    -4.26 | Altekz, birdfromsky, Q-Q, Queenix, Twinx  |
|            5 |     2256 | 2026-06-12 | XI       | W   | 0.619      | 0.357        | 0.001 (0.000)    | 0.079 (0.017)    | 1 (0.619) |     8.87 | Altekz, birdfromsky, Q-Q, Queenix, Twinx  |
|            4 |     2261 | 2026-06-12 | MASONIC  | L   | 0.618      | -            | -                | -                | -         |    -3.96 | Altekz, birdfromsky, Q-Q, Queenix, Twinx  |
|            3 |     5769 | 2026-03-14 | BBL      | L   | 0.018      | -            | -                | -                | -         |    -0.03 | b0RUP, birdfromsky, Kristou, Q-Q, Queenix |
|            2 |     5776 | 2026-03-14 | EAC      | L   | 0.017      | -            | -                | -                | -         |    -0.03 | b0RUP, birdfromsky, Kristou, Q-Q, Queenix |
|            1 |     5785 | 2026-03-14 | BBL      | W   | 0.017      | 0.356        | 0.035 (0.000)    | 0.512 (0.003)    | 1 (0.017) |     0.49 | b0RUP, birdfromsky, Kristou, Q-Q, Queenix |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($512.76)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-13 |      0.625 | $789.00        | $493.49         |
| 2026-03-15 |      0.025 | $782.00        | $19.27          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
