### Roster Details<br />
Team Name: BC.Game<br />
Roster: electroNic, Magisk, mzinho, s1mple, Senzu<br />
Global Rank: [81](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [59]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1051.1<br />
<br />
Final Rank Value (1051.1) = Starting Rank Value (1021.0) + Head To Head Adjustments (30.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.396[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.582[<sup>2</sup>](#table1)

The average of these factors is 0.321<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1021.0
- 400 + ( ( 0.321 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1021.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       23 | 2026-08-01 | ENCE        | W   | 1.000      | 0.362        | 0.016 (0.006)    | 0.634 (0.229)    | 1 (1.000) |     9.75 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            8 |       33 | 2026-08-01 | SINQU       | W   | 1.000      | 0.362        | 0.005 (0.002)    | 0.184 (0.067)    | 1 (1.000) |     7.34 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            7 |       57 | 2026-07-31 | Trainwrecks | W   | 1.000      | 0.362        | 0.000 (0.000)    | 0.047 (0.017)    | 1 (1.000) |     2.09 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            6 |       62 | 2026-07-31 | HAVU        | W   | 1.000      | 0.362        | 0.005 (0.002)    | 0.399 (0.144)    | 1 (1.000) |     9.03 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            5 |       65 | 2026-07-31 | ROUNDS      | W   | 1.000      | 0.362        | 0.001 (0.000)    | 0.280 (0.101)    | 1 (1.000) |     4.33 | electroNic, Magisk, mzinho, s1mple, Senzu |
|            4 |     1776 | 2026-05-21 | paiN        | L   | 0.704      | -            | -                | -                | -         |    -1.45 | electroNic, krazy, s1mple, ScrunK, Senzu  |
|            3 |     1812 | 2026-05-20 | Falcons     | L   | 0.697      | -            | -                | -                | -         |    -0.12 | electroNic, krazy, s1mple, ScrunK, Senzu  |
|            2 |     2019 | 2026-05-12 | B8          | L   | 0.647      | -            | -                | -                | -         |    -0.68 | electroNic, krazy, s1mple, ScrunK, Senzu  |
|            1 |     2052 | 2026-05-11 | Vitality    | L   | 0.641      | -            | -                | -                | -         |    -0.17 | electroNic, krazy, s1mple, ScrunK, Senzu  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,931.02)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-01 |      1.000 | $8,582.00      | $8,582.00       |
| 2026-05-24 |      0.725 | $5,000.00      | $3,623.99       |
| 2026-05-17 |      0.681 | $4,000.00      | $2,725.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
