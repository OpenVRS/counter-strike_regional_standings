### Roster Details<br />
Team Name: LFO 8<br />
Roster: c4put, JiNxZiE, Myst, Supers, Zoot<br />
Global Rank: [310](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [35]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  572.0<br />
<br />
Final Rank Value (572.0) = Starting Rank Value (604.4) + Head To Head Adjustments (-32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.253[<sup>1</sup>](#table2)
- Bounty Collected: 0.173[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.107<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 604.4
- 400 + ( ( 0.107 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 604.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      385 | 2026-08-28 | MARKandLARRY  | L   | 1.000      | -            | -                | -                | -         |   -14.67 | c4put, junn, Mingovi, Supers, Zoot    |
|           14 |      475 | 2026-08-26 | Ground Zero   | L   | 1.000      | -            | -                | -                | -         |    -4.13 | c4put, junn, Mingovi, Supers, Zoot    |
|           13 |     1638 | 2026-07-17 | Arcade        | L   | 0.849      | -            | -                | -                | -         |   -11.41 | c4put, JiNxZiE, Mingovi, Supers, Zoot |
|           12 |     1642 | 2026-07-17 | FlyQuest      | L   | 0.849      | -            | -                | -                | -         |    -1.30 | c4put, JiNxZiE, Mingovi, Supers, Zoot |
|           11 |     2138 | 2026-06-17 | Rooster       | L   | 0.650      | -            | -                | -                | -         |    -6.33 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|           10 |     2147 | 2026-06-16 | MARKandLARRY  | W   | 0.643      | 0.306        | 0.000 (0.000)    | 0.106 (0.021)    | 0 (0.000) |    10.43 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            9 |     2163 | 2026-06-15 | Rooster       | L   | 0.636      | -            | -                | -                | -         |    -6.10 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            8 |     2272 | 2026-06-12 | Ding Cuts     | W   | 0.617      | 0.306        | 0.000 (0.000)    | 0.052 (0.010)    | 0 (0.000) |     9.94 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            7 |     2298 | 2026-06-11 | Masked Regime | W   | 0.609      | 0.306        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.83 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            6 |     2313 | 2026-06-10 | Ding Cuts     | L   | 0.603      | -            | -                | -                | -         |    -9.24 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            5 |     4071 | 2026-04-17 | Abyssal       | L   | 0.248      | -            | -                | -                | -         |    -3.13 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            4 |     4075 | 2026-04-17 | Ding Cuts     | L   | 0.247      | -            | -                | -                | -         |    -3.89 | c4put, JiNxZiE, Myst, Supers, Zoot    |
|            3 |     4196 | 2026-04-11 | Arcade        | W   | 0.203      | 0.305        | 0.000 (0.000)    | 0.176 (0.011)    | 0 (0.000) |     3.64 | c4put, Mingovi, Myst, Supers, Zoot    |
|            2 |     4202 | 2026-04-10 | MGLBROS       | W   | 0.202      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.54 | c4put, Mingovi, Myst, Supers, Zoot    |
|            1 |     4203 | 2026-04-10 | Abyssal       | L   | 0.201      | -            | -                | -                | -         |    -2.57 | c4put, Mingovi, Myst, Supers, Zoot    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($558.91)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-18 |      0.656 | $714.00        | $468.66         |
| 2026-04-19 |      0.256 | $352.00        | $90.25          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
