### Roster Details<br />
Team Name: Arcade Esports (Australian team)<br />
Roster: 74LOR, Jynx, Kras, Mechanical, N1ghtraid<br />
Global Rank: [215](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_01.md)<br />
Regional Rank: [25]( ../../standings_asia_2026_03_01.md)<br />
<br />
Final Rank Value:  660.9<br />
<br />
Final Rank Value (660.9) = Starting Rank Value (726.2) + Head To Head Adjustments (-65.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.176[<sup>2</sup>](#table1)

The average of these factors is 0.172<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 726.2
- 400 + ( ( 0.172 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 726.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.217
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      144 | 2026-02-26 | Team Abyssal                | L   | 1.000      | -            | -                | -                | -         |   -14.80 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           23 |      228 | 2026-02-24 | BBBMBCBS                    | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.181 (0.057)    | 0 (0.000) |     9.09 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           22 |      256 | 2026-02-23 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -10.82 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           21 |      352 | 2026-02-21 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -9.54 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           20 |      403 | 2026-02-20 | Time Waves                  | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.136 (0.038)    | 0 (0.000) |     7.85 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           19 |      453 | 2026-02-19 | Time Waves                  | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.136 (0.043)    | 0 (0.000) |     8.00 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           18 |      503 | 2026-02-18 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -11.75 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           17 |      563 | 2026-02-17 | Shanghai Sharks ESC         | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.96 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           16 |      970 | 2026-02-06 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |   -12.23 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           15 |      976 | 2026-02-06 | THUNDERdOWNUNDER            | L   | 1.000      | -            | -                | -                | -         |    -9.47 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           14 |     1144 | 2026-02-01 | Ding Cuts                   | W   | 1.000      | 0.305        | 0.000 (0.000)    | 0.076 (0.023)    | 0 (0.000) |     7.49 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           13 |     1148 | 2026-01-31 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -9.02 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           12 |     1149 | 2026-01-31 | Shanghai Sharks ESC         | W   | 1.000      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.92 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           11 |     2272 | 2025-11-29 | Mindfreak (Australian team) | L   | 0.583      | -            | -                | -                | -         |    -5.50 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|           10 |     2273 | 2025-11-29 | Rooster                     | L   | 0.582      | -            | -                | -                | -         |    -7.08 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            9 |     2276 | 2025-11-29 | Mindfreak (Australian team) | W   | 0.582      | 0.279        | 0.021 (0.003)    | 0.428 (0.070)    | 1 (0.582) |    12.98 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            8 |     2315 | 2025-11-29 | BBBMBCBS                    | W   | 0.578      | 0.279        | 0.000 (0.000)    | 0.181 (0.029)    | 1 (0.578) |     4.56 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            7 |     2321 | 2025-11-28 | Blingus                     | W   | 0.578      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.578) |     2.90 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            6 |     2324 | 2025-11-28 | Rooster                     | L   | 0.577      | -            | -                | -                | -         |    -7.00 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            5 |     2392 | 2025-11-25 | Ground Zero Gaming          | L   | 0.552      | -            | -                | -                | -         |    -7.84 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            4 |     2454 | 2025-11-23 | Vantage Esports             | W   | 0.539      | 0.312        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.61 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            3 |     2491 | 2025-11-22 | LITE Esports                | L   | 0.531      | -            | -                | -                | -         |   -10.65 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            2 |     3466 | 2025-10-24 | Animus Victoria             | L   | 0.338      | -            | -                | -                | -         |    -8.38 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |
|            1 |     3512 | 2025-10-23 | Skele                       | L   | 0.331      | -            | -                | -                | -         |    -6.60 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($541.14)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      1.000 | $350.65        | $350.65         |
| 2025-11-30 |      0.585 | $325.90        | $190.49         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
