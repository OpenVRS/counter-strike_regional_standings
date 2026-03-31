### Roster Details<br />
Team Name: Wildcard<br />
Roster: CLASIA, HexT, mhL, Peeping, reck<br />
Global Rank: [113](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [21]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  963.5<br />
<br />
Final Rank Value (963.5) = Starting Rank Value (877.8) + Head To Head Adjustments (85.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.083[<sup>2</sup>](#table1)
- LAN Wins: 0.327[<sup>2</sup>](#table1)

The average of these factors is 0.246<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 877.8
- 400 + ( ( 0.246 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 877.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.365
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      187 | 2026-03-24 | FOKUS                     | L   | 1.000      | -            | -                | -                | -         |    -5.93 | HexT, mhL, nEMANHA, Peeping, reck |
|           25 |      213 | 2026-03-23 | AaB esport                | L   | 1.000      | -            | -                | -                | -         |   -12.09 | HexT, mhL, nEMANHA, Peeping, reck |
|           24 |      221 | 2026-03-23 | Exilium                   | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.16 | HexT, mhL, nEMANHA, Peeping, reck |
|           23 |      224 | 2026-03-23 | Esport BERG               | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.53 | HexT, mhL, nEMANHA, Peeping, reck |
|           22 |     1268 | 2026-03-01 | Team Voca                 | L   | 1.000      | -            | -                | -                | -         |    -5.35 | CLASIA, HexT, mhL, Peeping, reck  |
|           21 |     1271 | 2026-03-01 | Life's A Game             | W   | 1.000      | 0.143        | 0.027 (0.004)    | 0.728 (0.104)    | 0 (0.000) |    14.67 | CLASIA, HexT, mhL, Peeping, reck  |
|           20 |     1309 | 2026-02-28 | Team Voca                 | L   | 1.000      | -            | -                | -                | -         |    -5.25 | CLASIA, HexT, mhL, Peeping, reck  |
|           19 |     1354 | 2026-02-27 | BOSS                      | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.296 (0.042)    | 0 (0.000) |    12.99 | CLASIA, HexT, mhL, Peeping, reck  |
|           18 |     1413 | 2026-02-26 | Sakura Esports            | W   | 0.993      | 0.143        | 0.022 (0.003)    | -                | 0 (0.000) |     4.60 | CLASIA, HexT, mhL, Peeping, reck  |
|           17 |     1730 | 2026-02-20 | Life's A Game             | L   | 0.953      | -            | -                | -                | -         |   -16.92 | CLASIA, HexT, mhL, Peeping, reck  |
|           16 |     1832 | 2026-02-18 | Blitzkrieg (Mexican team) | W   | 0.940      | 0.333        | -                | 0.084 (0.026)    | 0 (0.000) |     2.79 | CLASIA, HexT, mhL, Peeping, reck  |
|           15 |     1984 | 2026-02-15 | ClayMakers Reborn         | W   | 0.921      | -            | -                | -                | 0 (0.000) |     2.25 | CLASIA, HexT, mhL, Peeping, reck  |
|           14 |     2160 | 2026-02-12 | Passion UA                | L   | 0.900      | -            | -                | -                | -         |    -6.39 | CLASIA, HexT, mhL, Peeping, reck  |
|           13 |     2199 | 2026-02-11 | Team Voca                 | W   | 0.894      | 0.143        | 0.042 (0.005)    | 0.739 (0.094)    | 0 (0.000) |    23.70 | CLASIA, HexT, mhL, Peeping, reck  |
|           12 |     2200 | 2026-02-11 | Passion UA                | L   | 0.893      | -            | -                | -                | -         |    -6.04 | CLASIA, HexT, mhL, Peeping, reck  |
|           11 |     2229 | 2026-02-10 | Fisher College            | W   | 0.887      | 0.143        | 0.008 (0.001)    | 0.338 (0.043)    | -         |    12.83 | CLASIA, HexT, mhL, Peeping, reck  |
|           10 |     2242 | 2026-02-10 | Team Voca                 | W   | 0.885      | 0.143        | 0.042 (0.005)    | 0.739 (0.093)    | -         |    24.41 | CLASIA, HexT, mhL, Peeping, reck  |
|            9 |     2272 | 2026-02-09 | Regain                    | W   | 0.880      | 0.333        | 0.003 (0.001)    | 0.238 (0.070)    | -         |     6.12 | CLASIA, HexT, mhL, Peeping, reck  |
|            8 |     2288 | 2026-02-08 | ClayMakers Reborn         | W   | 0.873      | -            | -                | -                | -         |     2.89 | CLASIA, HexT, mhL, Peeping, reck  |
|            7 |     2353 | 2026-02-06 | M80                       | L   | 0.860      | -            | -                | -                | -         |    -2.28 | CLASIA, HexT, mhL, Peeping, reck  |
|            6 |     2387 | 2026-02-05 | Life's A Game             | W   | 0.853      | 0.333        | 0.027 (0.008)    | 0.728 (0.207)    | -         |    13.25 | CLASIA, HexT, mhL, Peeping, reck  |
|            5 |     2468 | 2026-02-02 | FlyQuest RED              | W   | 0.834      | 0.333        | 0.007 (0.002)    | 0.086 (0.024)    | -         |     5.76 | CLASIA, HexT, mhL, Peeping, reck  |
|            4 |     3203 | 2026-01-04 | 9INE                      | L   | 0.637      | -            | -                | -                | -         |    -2.05 | CLASIA, mhL, Peeping, reck, sSen  |
|            3 |     3226 | 2026-01-03 | Sharks Esports            | W   | 0.634      | 0.323        | 0.110 (0.022)    | 0.601 (0.123)    | 1 (0.634) |    18.61 | CLASIA, mhL, Peeping, reck, sSen  |
|            2 |     3230 | 2026-01-03 | Beyond Limits             | W   | 0.633      | -            | -                | -                | 1 (0.633) |     1.65 | CLASIA, mhL, Peeping, reck, sSen  |
|            1 |     3234 | 2026-01-03 | Sharks Esports            | L   | 0.632      | -            | -                | -                | -         |    -1.23 | CLASIA, mhL, Peeping, reck, sSen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($966.30)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      0.966 | $1,000.00      | $966.30         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
