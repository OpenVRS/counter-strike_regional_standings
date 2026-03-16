### Roster Details<br />
Team Name: Arcade Esports (Australian team)<br />
Roster: 74LOR, Jynx, Kras, Mechanical, N1ghtraid<br />
Global Rank: [219](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_08.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_03_08.md)<br />
<br />
Final Rank Value:  666.5<br />
<br />
Final Rank Value (666.5) = Starting Rank Value (720.2) + Head To Head Adjustments (-53.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.265[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.162[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.2
- 400 + ( ( 0.167 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 720.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.207
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |      323 | 2026-02-26 | Team Abyssal                | L   | 1.000      | -            | -                | -                | -         |   -16.85 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           21 |      420 | 2026-02-24 | BBBMBCBS                    | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.137 (0.043)    | 0 (0.000) |     8.26 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           20 |      453 | 2026-02-23 | Ground Zero Gaming          | L   | 1.000      | -            | -                | -                | -         |   -12.41 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           19 |      563 | 2026-02-21 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -9.88 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           18 |      616 | 2026-02-20 | Time Waves                  | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.057 (0.016)    | 0 (0.000) |     6.67 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           17 |      660 | 2026-02-19 | Time Waves                  | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.057 (0.018)    | 0 (0.000) |     7.09 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           16 |      760 | 2026-02-17 | Shanghai Sharks ESC         | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.88 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           15 |     1150 | 2026-02-06 | Rooster                     | L   | 1.000      | -            | -                | -                | -         |   -12.27 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           14 |     1156 | 2026-02-06 | THUNDERdOWNUNDER            | L   | 1.000      | -            | -                | -                | -         |   -10.49 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           13 |     1321 | 2026-02-01 | Ding Cuts                   | W   | 0.963      | 0.143        | 0.000 (0.000)    | 0.036 (0.005)    | 0 (0.000) |     5.02 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           12 |     1325 | 2026-01-31 | Mindfreak (Australian team) | L   | 0.962      | -            | -                | -                | -         |    -8.68 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           11 |     1326 | 2026-01-31 | Shanghai Sharks ESC         | W   | 0.961      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.64 | 74LOR, Jynx, Kras, Mechanical, N1ghtraid   |
|           10 |     2456 | 2025-11-29 | Mindfreak (Australian team) | L   | 0.542      | -            | -                | -                | -         |    -5.48 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            9 |     2457 | 2025-11-29 | Rooster                     | L   | 0.541      | -            | -                | -                | -         |    -6.78 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            8 |     2460 | 2025-11-29 | Mindfreak (Australian team) | W   | 0.541      | 0.279        | 0.022 (0.003)    | 0.412 (0.062)    | 1 (0.541) |    11.68 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            7 |     2499 | 2025-11-29 | BBBMBCBS                    | W   | 0.537      | 0.279        | 0.000 (0.000)    | 0.137 (0.020)    | 1 (0.537) |     3.99 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            6 |     2503 | 2025-11-28 | Blingus                     | W   | 0.536      | 0.279        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.536) |     2.62 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            5 |     2506 | 2025-11-28 | Rooster                     | L   | 0.536      | -            | -                | -                | -         |    -6.72 | 74LOR, Jynx, Mechanical, N1ghtraid, w0mbat |
|            4 |     2572 | 2025-11-25 | Ground Zero Gaming          | L   | 0.511      | -            | -                | -                | -         |    -7.82 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            3 |     2630 | 2025-11-23 | Vantage Esports             | W   | 0.497      | 0.312        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.35 | 74LOR, Mechanical, Myst, N1ghtraid, w0mbat |
|            2 |     3622 | 2025-10-24 | Animus Victoria             | L   | 0.297      | -            | -                | -                | -         |    -7.30 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |
|            1 |     3664 | 2025-10-23 | Skele                       | L   | 0.290      | -            | -                | -                | -         |    -6.21 | 74LOR, Mechanical, Myst, N1ghtraid, RoyaL  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($527.66)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      1.000 | $350.65        | $350.65         |
| 2025-11-30 |      0.543 | $325.90        | $177.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
