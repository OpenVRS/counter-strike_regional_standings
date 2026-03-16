### Roster Details<br />
Team Name: BORING PLAYER<br />
Roster: Jun7, karl, Miszary, tutu, zdr<br />
Global Rank: [203](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_08.md)<br />
Regional Rank: [21]( ../../standings_asia_2026_03_08.md)<br />
<br />
Final Rank Value:  700.0<br />
<br />
Final Rank Value (700.0) = Starting Rank Value (689.9) + Head To Head Adjustments (10.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.271[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.080[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 689.9
- 400 + ( ( 0.151 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 689.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.127
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |      553 | 2026-02-21 | The QUBE Esports           | L   | 1.000      | -            | -                | -                | -         |   -16.93 | D1zzyg, karl, Miszary, tutu, zdr |
|           14 |      598 | 2026-02-20 | Morningstar                | L   | 1.000      | -            | -                | -                | -         |    -6.01 | D1zzyg, karl, Miszary, tutu, zdr |
|           13 |      694 | 2026-02-18 | Change The Game            | W   | 1.000      | 0.333        | 0.012 (0.004)    | 0.251 (0.084)    | 0 (0.000) |    17.24 | D1zzyg, karl, Miszary, tutu, zdr |
|           12 |      752 | 2026-02-17 | Deep Cross Gaming          | W   | 1.000      | 0.333        | 0.005 (0.002)    | 0.030 (0.010)    | 0 (0.000) |    14.03 | D1zzyg, karl, Miszary, tutu, zdr |
|           11 |     2855 | 2025-11-13 | 9INE                       | L   | 0.435      | -            | -                | -                | -         |    -0.39 | Jun7, karl, Miszary, tutu, zdr   |
|           10 |     2999 | 2025-11-08 | FengDa Gaming              | W   | 0.403      | 0.143        | 0.010 (0.001)    | 0.148 (0.008)    | 1 (0.403) |     8.24 | Jun7, karl, Miszary, tutu, zdr   |
|            9 |     3158 | 2025-11-06 | Unsettled Resentment       | W   | 0.389      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.389) |     2.09 | Jun7, karl, Miszary, tutu, zdr   |
|            8 |     3210 | 2025-11-05 | Last Bullet (Chinese team) | L   | 0.377      | -            | -                | -                | -         |    -5.49 | Jun7, karl, Miszary, tutu, zdr   |
|            7 |     3505 | 2025-10-26 | The QUBE Esports           | L   | 0.311      | -            | -                | -                | -         |    -5.38 | Jun7, karl, Miszary, tutu, zdr   |
|            6 |     3553 | 2025-10-25 | Last Bullet (Chinese team) | W   | 0.304      | 0.333        | 0.008 (0.001)    | 0.122 (0.012)    | 0 (0.000) |     5.17 | Jun7, karl, Miszary, tutu, zdr   |
|            5 |     3614 | 2025-10-24 | Nomads (Mongolian team)    | W   | 0.298      | 0.333        | 0.001 (0.000)    | 0.044 (0.004)    | 0 (0.000) |     3.77 | Jun7, karl, Miszary, tutu, zdr   |
|            4 |     3655 | 2025-10-23 | FengDa Gaming              | L   | 0.291      | -            | -                | -                | -         |    -3.18 | Jun7, karl, Miszary, tutu, zdr   |
|            3 |     4170 | 2025-10-06 | Last Bullet (Chinese team) | L   | 0.178      | -            | -                | -                | -         |    -2.62 | Jun7, karl, Miszary, tutu, zdr   |
|            2 |     4224 | 2025-10-05 | The Huns Esports           | L   | 0.171      | -            | -                | -                | -         |    -0.37 | Jun7, karl, Miszary, tutu, zdr   |
|            1 |     5157 | 2025-09-10 | The Huns Esports           | L   | 0.004      | -            | -                | -                | -         |    -0.01 | Jun7, Miszary, Mystic, tutu, zdr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($632.64)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-15 |      0.449 | $1,408.54      | $632.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
