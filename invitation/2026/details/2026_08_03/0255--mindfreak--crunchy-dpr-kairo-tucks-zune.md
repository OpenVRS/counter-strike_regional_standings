### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Crunchy, dpr, kairo, tucks, zune<br />
Global Rank: [255](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [30]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  667.9<br />
<br />
Final Rank Value (667.9) = Starting Rank Value (680.7) + Head To Head Adjustments (-12.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.264[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.013[<sup>2</sup>](#table1)
- LAN Wins: 0.087[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 680.7
- 400 + ( ( 0.145 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 680.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |     3136 | 2026-04-06 | Arcade            | L   | 0.405      | -            | -                | -                | -         |    -5.56 | BRACE, Crunchy, dpr, kairo, zune   |
|           32 |     3190 | 2026-04-05 | Abyssal           | L   | 0.399      | -            | -                | -                | -         |    -6.53 | BRACE, Crunchy, dpr, kairo, zune   |
|           31 |     3359 | 2026-04-03 | Time Waves        | W   | 0.385      | 0.278        | -                | 0.047 (0.005)    | 0 (0.000) |     2.18 | Crunchy, dpr, JiNxZiE, kairo, zune |
|           30 |     3659 | 2026-03-31 | Abyssal           | L   | 0.364      | -            | -                | -                | -         |    -6.27 | BRACE, Crunchy, dpr, kairo, zune   |
|           29 |     3662 | 2026-03-30 | 11mins            | L   | 0.363      | -            | -                | -                | -         |    -8.63 | BRACE, Crunchy, dpr, kairo, zune   |
|           28 |     4015 | 2026-03-25 | Rooster           | L   | 0.326      | -            | -                | -                | -         |    -3.46 | Crunchy, dpr, sliimey, tucks, zune |
|           27 |     4072 | 2026-03-24 | MARKandLARRY      | W   | 0.319      | 0.278        | 0.001 (0.000)    | 0.147 (0.013)    | 0 (0.000) |     4.12 | Crunchy, dpr, sliimey, tucks, zune |
|           26 |     4147 | 2026-03-23 | Ground Zero       | L   | 0.312      | -            | -                | -                | -         |    -4.41 | Crunchy, dpr, sliimey, tucks, zune |
|           25 |     4256 | 2026-03-21 | MARKandLARRY      | W   | 0.299      | 0.278        | 0.001 (0.000)    | 0.147 (0.012)    | 0 (0.000) |     3.82 | Crunchy, dpr, sliimey, tucks, zune |
|           24 |     4493 | 2026-03-16 | Arcade            | L   | 0.266      | -            | -                | -                | -         |    -3.85 | Crunchy, dpr, sliimey, tucks, zune |
|           23 |     4504 | 2026-03-15 | SemperFi          | L   | 0.263      | -            | -                | -                | -         |    -2.16 | Crunchy, dpr, sliimey, tucks, zune |
|           22 |     4506 | 2026-03-15 | Abyssal           | W   | 0.262      | 0.328        | 0.003 (0.000)    | 0.210 (0.018)    | 1 (0.262) |     3.68 | Crunchy, dpr, sliimey, tucks, zune |
|           21 |     4582 | 2026-03-13 | Ground Zero       | L   | 0.250      | -            | -                | -                | -         |    -3.65 | Crunchy, dpr, sliimey, Texta, zune |
|           20 |     4584 | 2026-03-13 | THUNDER dOWNUNDER | L   | 0.249      | -            | -                | -                | -         |    -0.49 | Crunchy, dpr, sliimey, Texta, zune |
|           19 |     4635 | 2026-03-13 | Arcade            | W   | 0.244      | 0.351        | 0.001 (0.000)    | 0.166 (0.014)    | 1 (0.244) |     4.18 | Crunchy, dpr, sliimey, Texta, zune |
|           18 |     4636 | 2026-03-12 | SemperFi          | L   | 0.244      | -            | -                | -                | -         |    -2.09 | Crunchy, dpr, sliimey, Texta, zune |
|           17 |     4638 | 2026-03-12 | Arcade            | W   | 0.243      | 0.351        | 0.001 (0.000)    | 0.166 (0.014)    | 1 (0.243) |     4.22 | Crunchy, dpr, sliimey, Texta, zune |
|           16 |     5275 | 2026-02-28 | THUNDER dOWNUNDER | W   | 0.158      | 0.317        | 0.025 (0.001)    | 0.393 (0.020)    | 0 (0.000) |     4.69 | Crunchy, dpr, sliimey, Texta, zune |
|           15 |     5315 | 2026-02-27 | Ground Zero       | W   | 0.152      | 0.317        | 0.002 (0.000)    | -                | 0 (0.000) |     2.64 | Crunchy, dpr, sliimey, Texta, zune |
|           14 |     5321 | 2026-02-27 | Abyssal           | W   | 0.152      | 0.317        | 0.003 (0.000)    | 0.210 (0.010)    | 0 (0.000) |     2.22 | Crunchy, dpr, sliimey, Texta, zune |
|           13 |     5396 | 2026-02-25 | Skele             | W   | 0.144      | -            | -                | -                | 0 (0.000) |     1.25 | Crunchy, dpr, sliimey, Texta, zune |
|           12 |     5398 | 2026-02-25 | THUNDER dOWNUNDER | L   | 0.144      | -            | -                | -                | -         |    -0.24 | Crunchy, dpr, sliimey, Texta, zune |
|           11 |     5402 | 2026-02-25 | Abyssal           | W   | 0.143      | 0.624        | 0.003 (0.000)    | 0.210 (0.019)    | -         |     2.11 | Crunchy, dpr, sliimey, Texta, zune |
|           10 |     5424 | 2026-02-25 | Ground Zero       | L   | 0.139      | -            | -                | -                | -         |    -1.93 | Crunchy, dpr, sliimey, Texta, zune |
|            9 |     5517 | 2026-02-23 | Ground Zero       | L   | 0.126      | -            | -                | -                | -         |    -1.76 | Crunchy, dpr, sliimey, Texta, zune |
|            8 |     5598 | 2026-02-22 | Skele             | W   | 0.119      | -            | -                | -                | -         |     1.01 | Crunchy, dpr, sliimey, Texta, zune |
|            7 |     5603 | 2026-02-22 | BBBMBCBS          | W   | 0.118      | -            | -                | -                | -         |     0.92 | Crunchy, dpr, sliimey, Texta, zune |
|            6 |     5642 | 2026-02-21 | Arcade            | W   | 0.112      | 0.278        | -                | 0.166 (0.005)    | -         |     2.04 | Crunchy, dpr, sliimey, Texta, zune |
|            5 |     5694 | 2026-02-20 | Ground Zero       | L   | 0.106      | -            | -                | -                | -         |    -1.49 | Crunchy, dpr, sliimey, Texta, zune |
|            4 |     5800 | 2026-02-18 | Time Waves        | W   | 0.092      | -            | -                | -                | -         |     0.51 | Crunchy, dpr, sliimey, Texta, zune |
|            3 |     6252 | 2026-02-07 | Rooster           | L   | 0.024      | -            | -                | -                | -         |    -0.22 | Crunchy, dpr, sliimey, Texta, zune |
|            2 |     6277 | 2026-02-06 | THUNDER dOWNUNDER | L   | 0.017      | -            | -                | -                | -         |    -0.03 | Crunchy, dpr, sliimey, Texta, zune |
|            1 |     6282 | 2026-02-06 | Rooster           | W   | 0.016      | 0.305        | 0.008 (0.000)    | -                | -         |     0.36 | Crunchy, dpr, sliimey, Texta, zune |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($812.69)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-15 |      0.258 | $706.00        | $181.98         |
| 2026-02-28 |      0.158 | $3,891.00      | $613.34         |
| 2026-02-08 |      0.025 | $704.00        | $17.36          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
