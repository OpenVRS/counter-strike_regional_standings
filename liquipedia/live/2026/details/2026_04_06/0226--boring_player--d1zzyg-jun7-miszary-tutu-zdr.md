### Roster Details<br />
Team Name: BORING PLAYER<br />
Roster: D1zzyg, Jun7, Miszary, tutu, zdr<br />
Global Rank: [226](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_04_06.md)<br />
Regional Rank: [28]( ../../standings_asia_2026_04_06.md)<br />
<br />
Final Rank Value:  700.3<br />
<br />
Final Rank Value (700.3) = Starting Rank Value (682.2) + Head To Head Adjustments (18.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.236[<sup>2</sup>](#table1)
- Opponent Network: 0.024[<sup>2</sup>](#table1)
- LAN Wins: 0.041[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.2
- 400 + ( ( 0.144 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 682.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.134
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |      215 | 2026-04-01 | Just Swing (Chinese team)  | L   | 1.000      | -            | -                | -                | -         |   -15.39 | D1zzyg, Jun7, Miszary, tutu, zdr |
|           17 |      299 | 2026-03-31 | Rare Atom                  | L   | 1.000      | -            | -                | -                | -         |    -2.71 | D1zzyg, Jun7, Miszary, tutu, zdr |
|           16 |      627 | 2026-03-24 | The QUBE Esports           | L   | 1.000      | -            | -                | -                | -         |    -8.30 | D1zzyg, Jun7, Miszary, tutu, zdr |
|           15 |      704 | 2026-03-23 | FengDa Gaming              | L   | 1.000      | -            | -                | -                | -         |   -12.67 | D1zzyg, Jun7, Miszary, tutu, zdr |
|           14 |      811 | 2026-03-21 | Alter Ego                  | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.214 (0.071)    | 0 (0.000) |    19.26 | D1zzyg, Jun7, Miszary, tutu, zdr |
|           13 |      869 | 2026-03-20 | Legion (Pakistani team)    | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.241 (0.080)    | 0 (0.000) |    17.04 | D1zzyg, Jun7, Miszary, tutu, zdr |
|           12 |     2198 | 2026-02-21 | The QUBE Esports           | L   | 0.906      | -            | -                | -                | -         |    -8.84 | D1zzyg, karl, Miszary, tutu, zdr |
|           11 |     2246 | 2026-02-20 | Morningstar                | L   | 0.900      | -            | -                | -                | -         |    -3.98 | D1zzyg, karl, Miszary, tutu, zdr |
|           10 |     2354 | 2026-02-18 | Change The Game            | W   | 0.887      | 0.333        | 0.010 (0.003)    | 0.252 (0.074)    | 0 (0.000) |    20.63 | D1zzyg, karl, Miszary, tutu, zdr |
|            9 |     2419 | 2026-02-17 | Deep Cross Gaming          | W   | 0.880      | 0.333        | 0.002 (0.001)    | 0.013 (0.004)    | 0 (0.000) |    11.15 | D1zzyg, karl, Miszary, tutu, zdr |
|            8 |     4578 | 2025-11-13 | 9INE                       | L   | 0.243      | -            | -                | -                | -         |    -0.17 | Jun7, karl, Miszary, tutu, zdr   |
|            7 |     4726 | 2025-11-08 | FengDa Gaming              | W   | 0.211      | 0.380        | 0.001 (0.000)    | 0.024 (0.002)    | 1 (0.211) |     2.95 | Jun7, karl, Miszary, tutu, zdr   |
|            6 |     4885 | 2025-11-06 | Unsettled Resentment       | W   | 0.198      | 0.380        | 0.000 (0.000)    | 0.061 (0.005)    | 1 (0.198) |     1.07 | Jun7, karl, Miszary, tutu, zdr   |
|            5 |     4940 | 2025-11-05 | Last Bullet (Chinese team) | L   | 0.185      | -            | -                | -                | -         |    -1.94 | Jun7, karl, Miszary, tutu, zdr   |
|            4 |     5241 | 2025-10-26 | The QUBE Esports           | L   | 0.120      | -            | -                | -                | -         |    -1.12 | Jun7, karl, Miszary, tutu, zdr   |
|            3 |     5295 | 2025-10-25 | Last Bullet (Chinese team) | W   | 0.113      | 0.333        | 0.008 (0.000)    | 0.185 (0.007)    | 0 (0.000) |     2.39 | Jun7, karl, Miszary, tutu, zdr   |
|            2 |     5359 | 2025-10-24 | Nomads (Mongolian team)    | W   | 0.106      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.57 | Jun7, karl, Miszary, tutu, zdr   |
|            1 |     5404 | 2025-10-23 | FengDa Gaming              | L   | 0.100      | -            | -                | -                | -         |    -1.77 | Jun7, karl, Miszary, tutu, zdr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,088.90)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $726.00        | $726.00         |
| 2025-11-15 |      0.258 | $1,409.00      | $362.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
