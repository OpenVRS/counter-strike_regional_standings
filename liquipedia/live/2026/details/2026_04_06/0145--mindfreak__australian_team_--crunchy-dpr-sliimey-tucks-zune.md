### Roster Details<br />
Team Name: Mindfreak (Australian team)<br />
Roster: Crunchy, dpr, sliimey, tucks, zune<br />
Global Rank: [145](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [17]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  887.1<br />
<br />
Final Rank Value (887.1) = Starting Rank Value (975.2) + Head To Head Adjustments (-88.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.073[<sup>2</sup>](#table1)
- LAN Wins: 0.473[<sup>2</sup>](#table1)

The average of these factors is 0.294<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 975.2
- 400 + ( ( 0.294 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 975.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.355
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |      284 | 2026-03-31 | Team Abyssal                     | L   | 1.000      | -            | -                | -                | -         |   -23.55 | BRACE, Crunchy, Dpr, Kairo, zune    |
|           56 |      290 | 2026-03-30 | 11mins                           | L   | 1.000      | -            | -                | -                | -         |   -28.56 | BRACE, Crunchy, Dpr, Kairo, zune    |
|           55 |      574 | 2026-03-25 | Rooster                          | L   | 1.000      | -            | -                | -                | -         |   -21.17 | Crunchy, dpr, sliimey, tucks, zune  |
|           54 |      630 | 2026-03-24 | MARKnLARRY                       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.53 | Crunchy, dpr, sliimey, tucks, zune  |
|           53 |      703 | 2026-03-23 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |   -15.08 | Crunchy, dpr, sliimey, tucks, zune  |
|           52 |      805 | 2026-03-21 | MARKnLARRY                       | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.09 | Crunchy, dpr, sliimey, tucks, zune  |
|           51 |     1039 | 2026-03-16 | Arcade Esports (Australian team) | L   | 1.000      | -            | -                | -                | -         |   -21.29 | Crunchy, dpr, sliimey, tucks, zune  |
|           50 |     1049 | 2026-03-15 | SemperFi Esports                 | L   | 1.000      | -            | -                | -                | -         |    -8.14 | Crunchy, dpr, sliimey, tucks, zune  |
|           49 |     1051 | 2026-03-15 | Team Abyssal                     | W   | 1.000      | 0.327        | -                | 0.224 (0.073)    | 1 (1.000) |     5.31 | Crunchy, dpr, sliimey, tucks, zune  |
|           48 |     1128 | 2026-03-13 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |   -16.43 | Crunchy, dpr, sliimey, tucks, zune  |
|           47 |     1130 | 2026-03-13 | THUNDERdOWNUNDER                 | L   | 1.000      | -            | -                | -                | -         |    -6.08 | Crunchy, dpr, sliimey, tucks, zune  |
|           46 |     1180 | 2026-03-12 | Arcade Esports (Australian team) | W   | 1.000      | 0.350        | 0.004 (0.001)    | 0.279 (0.098)    | 1 (1.000) |     8.59 | Crunchy, dpr, sliimey, tucks, zune  |
|           45 |     1182 | 2026-03-12 | SemperFi Esports                 | L   | 1.000      | -            | -                | -                | -         |    -9.80 | Crunchy, dpr, sliimey, tucks, zune  |
|           44 |     1183 | 2026-03-12 | Arcade Esports (Australian team) | W   | 1.000      | 0.350        | 0.004 (0.001)    | 0.279 (0.098)    | 1 (1.000) |     8.65 | Crunchy, dpr, sliimey, tucks, zune  |
|           43 |     1820 | 2026-02-27 | THUNDERdOWNUNDER                 | W   | 0.951      | 0.318        | 0.043 (0.013)    | 0.327 (0.099)    | -         |    25.41 | Crunchy, dpr, sliimey, Texta, zune  |
|           42 |     1860 | 2026-02-27 | Ground Zero Gaming               | W   | 0.945      | 0.318        | 0.013 (0.004)    | 0.213 (0.064)    | -         |    15.84 | Crunchy, dpr, sliimey, Texta, zune  |
|           41 |     1867 | 2026-02-27 | Team Abyssal                     | W   | 0.944      | 0.318        | -                | 0.224 (0.067)    | -         |     5.96 | Crunchy, dpr, sliimey, Texta, zune  |
|           40 |     1875 | 2026-02-26 | THUNDERdOWNUNDER                 | L   | 0.943      | -            | -                | -                | -         |    -3.43 | Crunchy, dpr, sliimey, Texta, zune  |
|           39 |     1879 | 2026-02-26 | Team Abyssal                     | W   | 0.942      | -            | -                | -                | -         |     6.19 | Crunchy, dpr, sliimey, Texta, zune  |
|           38 |     1939 | 2026-02-26 | Skele                            | W   | 0.938      | -            | -                | -                | -         |     2.50 | Crunchy, dpr, sliimey, Texta, zune  |
|           37 |     1943 | 2026-02-25 | THUNDERdOWNUNDER                 | L   | 0.936      | -            | -                | -                | -         |    -3.37 | Crunchy, dpr, sliimey, Texta, zune  |
|           36 |     1948 | 2026-02-25 | Team Abyssal                     | W   | 0.936      | -            | -                | -                | -         |     5.24 | Crunchy, dpr, sliimey, Texta, zune  |
|           35 |     1977 | 2026-02-25 | Ground Zero Gaming               | L   | 0.932      | -            | -                | -                | -         |   -11.71 | Crunchy, dpr, sliimey, Texta, zune  |
|           34 |     2062 | 2026-02-23 | Ground Zero Gaming               | L   | 0.918      | -            | -                | -                | -         |   -12.29 | Crunchy, dpr, sliimey, Texta, zune  |
|           33 |     2140 | 2026-02-22 | Skele                            | W   | 0.911      | -            | -                | -                | -         |     2.68 | Crunchy, dpr, sliimey, Texta, zune  |
|           32 |     2144 | 2026-02-22 | BBBMBCBS                         | W   | 0.911      | 0.318        | -                | 0.120 (0.035)    | -         |     1.52 | Crunchy, dpr, sliimey, Texta, zune  |
|           31 |     2185 | 2026-02-21 | Arcade Esports (Australian team) | W   | 0.905      | 0.278        | 0.004 (0.001)    | 0.279 (0.070)    | -         |    10.65 | Crunchy, dpr, sliimey, Texta, zune  |
|           30 |     2240 | 2026-02-20 | Ground Zero Gaming               | L   | 0.898      | -            | -                | -                | -         |   -12.58 | Crunchy, dpr, sliimey, Texta, zune  |
|           29 |     2343 | 2026-02-18 | Time Waves                       | W   | 0.885      | -            | -                | -                | -         |     1.50 | Crunchy, dpr, sliimey, Texta, zune  |
|           28 |     2789 | 2026-02-07 | Rooster                          | L   | 0.817      | -            | -                | -                | -         |   -16.42 | Crunchy, dpr, sliimey, Texta, zune  |
|           27 |     2814 | 2026-02-06 | THUNDERdOWNUNDER                 | L   | 0.810      | -            | -                | -                | -         |    -3.87 | Crunchy, dpr, sliimey, Texta, zune  |
|           26 |     2820 | 2026-02-06 | Rooster                          | W   | 0.809      | 0.305        | 0.006 (0.001)    | 0.229 (0.057)    | -         |     8.55 | Crunchy, dpr, sliimey, Texta, zune  |
|           25 |     2995 | 2026-01-31 | Arcade Esports (Australian team) | W   | 0.770      | 0.305        | 0.004 (0.001)    | 0.279 (0.065)    | -         |     9.55 | Crunchy, dpr, sliimey, Texta, zune  |
|           24 |     2997 | 2026-01-31 | Ding Cuts                        | W   | 0.769      | -            | -                | -                | -         |     1.40 | Crunchy, dpr, sliimey, Texta, zune  |
|           23 |     3871 | 2025-12-13 | THUNDERdOWNUNDER                 | L   | 0.443      | -            | -                | -                | -         |    -2.04 | dpr, swerzieN, Texta, tucks, zune   |
|           22 |     3884 | 2025-12-12 | THUNDERdOWNUNDER                 | L   | 0.436      | -            | -                | -                | -         |    -2.04 | dpr, Kiyo, swerzieN, tucks, zune    |
|           21 |     3886 | 2025-12-12 | Ground Zero Gaming               | W   | 0.436      | 0.303        | 0.013 (0.002)    | -                | -         |     7.56 | dpr, swerzieN, Texta, tucks, zune   |
|           20 |     4009 | 2025-12-05 | THUNDERdOWNUNDER                 | L   | 0.390      | -            | -                | -                | -         |    -1.80 | dpr, swerzieN, Texta, tucks, zune   |
|           19 |     4012 | 2025-12-05 | LITE Esports                     | W   | 0.389      | -            | -                | -                | -         |     1.43 | dpr, swerzieN, Texta, tucks, zune   |
|           18 |     4134 | 2025-11-30 | Rooster                          | W   | 0.351      | 0.279        | 0.006 (0.001)    | -                | 1 (0.351) |     4.09 | dpr, swerzieN, Texta, tucks, zune   |
|           17 |     4138 | 2025-11-29 | Arcade Esports (Australian team) | W   | 0.350      | -            | -                | -                | 1 (0.350) |     4.67 | dpr, swerzieN, Texta, tucks, zune   |
|           16 |     4140 | 2025-11-29 | Time Waves                       | W   | 0.349      | -            | -                | -                | 1 (0.349) |     0.55 | dpr, swerzieN, Texta, tucks, zune   |
|           15 |     4142 | 2025-11-29 | Arcade Esports (Australian team) | L   | 0.349      | -            | -                | -                | -         |    -6.36 | dpr, swerzieN, Texta, tucks, zune   |
|           14 |     4192 | 2025-11-28 | Time Waves                       | W   | 0.343      | -            | -                | -                | 1 (0.343) |     0.51 | dpr, swerzieN, Texta, tucks, zune   |
|           13 |     4194 | 2025-11-28 | DXA Esports                      | W   | 0.342      | -            | -                | -                | 1 (0.342) |     0.43 | dpr, swerzieN, Texta, tucks, zune   |
|           12 |     4234 | 2025-11-26 | Ground Zero Gaming               | L   | 0.325      | -            | -                | -                | -         |    -4.80 | dpr, swerzieN, Texta, tucks, zune   |
|           11 |     4239 | 2025-11-25 | THUNDERdOWNUNDER                 | L   | 0.323      | -            | -                | -                | -         |    -1.45 | dpr, sliimey, swerzieN, tucks, zune |
|           10 |     4302 | 2025-11-24 | Ground Zero Gaming               | W   | 0.311      | 0.312        | 0.013 (0.001)    | -                | -         |     5.21 | dpr, swerzieN, Texta, tucks, zune   |
|            9 |     4348 | 2025-11-22 | FURY                             | W   | 0.298      | -            | -                | -                | -         |     0.61 | dpr, swerzieN, Texta, tucks, zune   |
|            8 |     4465 | 2025-11-18 | Rooster                          | W   | 0.272      | -            | -                | -                | -         |     3.20 | dpr, swerzieN, Texta, tucks, zune   |
|            7 |     4476 | 2025-11-17 | WannaNOW?                        | W   | 0.265      | -            | -                | -                | -         |     0.34 | dpr, swerzieN, Texta, tucks, zune   |
|            6 |     4656 | 2025-11-10 | Rooster                          | L   | 0.218      | -            | -                | -                | -         |    -6.00 | dpr, swerzieN, Texta, tucks, zune   |
|            5 |     5266 | 2025-10-25 | Animus Victoria                  | W   | 0.111      | -            | -                | -                | -         |     0.22 | dpr, Drox, swerzieN, tucks, zune    |
|            4 |     5329 | 2025-10-24 | Ground Zero Gaming               | L   | 0.105      | -            | -                | -                | -         |    -1.53 | dpr, Drox, swerzieN, tucks, zune    |
|            3 |     5376 | 2025-10-23 | Rooster                          | W   | 0.098      | -            | -                | -                | -         |     0.38 | dpr, Drox, swerzieN, tucks, zune    |
|            2 |     5523 | 2025-10-16 | Rooster                          | L   | 0.051      | -            | -                | -                | -         |    -1.42 | dpr, Drox, swerzieN, tucks, zune    |
|            1 |     5561 | 2025-10-15 | SemperFi Esports                 | L   | 0.045      | -            | -                | -                | -         |    -0.23 | dpr, Drox, swerzieN, tucks, zune    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,418.86)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-14 |      1.000 | $698.70        | $698.70         |
| 2026-02-27 |      0.951 | $3,907.75      | $3,714.94       |
| 2026-02-08 |      0.818 | $701.30        | $573.39         |
| 2025-12-13 |      0.443 | $1,331.40      | $590.21         |
| 2025-11-30 |      0.351 | $1,629.50      | $571.97         |
| 2025-11-26 |      0.331 | $815.51        | $269.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
