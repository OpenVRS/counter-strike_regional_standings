### Roster Details<br />
Team Name: LAG<br />
Roster: consti, djay, kmrn, Sandman, Wolffe<br />
Global Rank: [227](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [47]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  722.3<br />
<br />
Final Rank Value (722.3) = Starting Rank Value (693.0) + Head To Head Adjustments (29.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.248[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 693.0
- 400 + ( ( 0.151 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 693.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |     3889 | 2026-03-27 | Sola           | W   | 0.343      | 0.398        | 0.001 (0.000)    | -                | 0 (0.000) |     2.61 | consti, djay, kmrn, Sandman, Wolffe |
|           23 |     4727 | 2026-03-10 | Chicken Coop   | W   | 0.229      | 0.143        | 0.037 (0.001)    | 0.412 (0.013)    | 0 (0.000) |     5.98 | consti, djay, kmrn, Sandman, Wolffe |
|           22 |     4844 | 2026-03-08 | Wanted Goons   | W   | 0.216      | 0.143        | -                | 0.160 (0.005)    | 0 (0.000) |     3.33 | consti, djay, kmrn, Sandman, Wolffe |
|           21 |     5198 | 2026-03-01 | Wildcard       | L   | 0.168      | -            | -                | -                | -         |    -0.15 | consti, djay, kmrn, Sandman, Wolffe |
|           20 |     5233 | 2026-02-28 | BOSS           | W   | 0.163      | 0.769        | 0.001 (0.000)    | 0.183 (0.023)    | 0 (0.000) |     2.87 | consti, djay, kmrn, Sandman, Wolffe |
|           19 |     5238 | 2026-02-28 | Aether         | W   | 0.162      | 0.769        | 0.002 (0.000)    | 0.121 (0.015)    | 0 (0.000) |     2.27 | consti, djay, kmrn, Sandman, Wolffe |
|           18 |     5279 | 2026-02-27 | Voca           | L   | 0.157      | -            | -                | -                | -         |    -0.84 | consti, djay, kmrn, Sandman, Wolffe |
|           17 |     5331 | 2026-02-26 | FlyQuest RED   | W   | 0.150      | -            | -                | -                | 0 (0.000) |     1.07 | consti, djay, kmrn, Sandman, Wolffe |
|           16 |     5533 | 2026-02-22 | FarmVille      | W   | 0.122      | 0.333        | 0.003 (0.000)    | 0.242 (0.010)    | 0 (0.000) |     1.92 | consti, djay, kmrn, Sandman, Wolffe |
|           15 |     5657 | 2026-02-20 | Wildcard       | W   | 0.110      | 0.333        | 0.166 (0.006)    | 0.497 (0.018)    | 0 (0.000) |     3.36 | consti, djay, kmrn, Sandman, Wolffe |
|           14 |     5709 | 2026-02-19 | Iowa Stormboar | L   | 0.103      | -            | -                | -                | -         |    -1.44 | consti, djay, kmrn, Sandman, Wolffe |
|           13 |     5754 | 2026-02-18 | M80            | L   | 0.096      | -            | -                | -                | -         |    -0.10 | consti, djay, kmrn, Sandman, Wolffe |
|           12 |     5758 | 2026-02-18 | Aether         | W   | 0.096      | -            | -                | -                | 0 (0.000) |     1.37 | consti, djay, kmrn, Sandman, Wolffe |
|           11 |     5826 | 2026-02-17 | regain         | W   | 0.088      | 0.363        | 0.014 (0.000)    | 0.508 (0.016)    | 0 (0.000) |     1.55 | consti, djay, kmrn, Sandman, Wolffe |
|           10 |     5912 | 2026-02-16 | Villainous     | W   | 0.078      | 0.624        | 0.005 (0.000)    | 0.233 (0.011)    | -         |     1.52 | consti, djay, kmrn, Sandman, Wolffe |
|            9 |     5920 | 2026-02-15 | BOSS           | W   | 0.076      | -            | -                | -                | -         |     0.90 | consti, djay, kmrn, Sandman, Wolffe |
|            8 |     5927 | 2026-02-15 | FarmVille      | W   | 0.075      | -            | -                | -                | -         |     0.84 | consti, djay, kmrn, Sandman, Wolffe |
|            7 |     5977 | 2026-02-14 | OverKnight     | W   | 0.069      | -            | -                | -                | -         |     0.47 | consti, djay, kmrn, Sandman, Wolffe |
|            6 |     6089 | 2026-02-12 | insane players | W   | 0.056      | 0.333        | 0.008 (0.000)    | 0.209 (0.004)    | -         |     0.89 | consti, djay, kmrn, Sandman, Wolffe |
|            5 |     6161 | 2026-02-10 | Chicken Coop   | W   | 0.043      | 0.333        | 0.037 (0.001)    | 0.412 (0.006)    | -         |     1.14 | consti, djay, kmrn, Sandman, Wolffe |
|            4 |     6204 | 2026-02-09 | Rave           | L   | 0.035      | -            | -                | -                | -         |    -0.69 | consti, djay, kmrn, Sandman, Wolffe |
|            3 |     6253 | 2026-02-07 | Shimmer        | W   | 0.023      | -            | -                | -                | -         |     0.38 | consti, djay, kmrn, Sandman, Wolffe |
|            2 |     6318 | 2026-02-05 | Wildcard       | L   | 0.010      | -            | -                | -                | -         |    -0.01 | consti, djay, kmrn, Sandman, Wolffe |
|            1 |     6342 | 2026-02-04 | Outfit 49      | W   | 0.003      | -            | -                | -                | -         |     0.03 | consti, djay, kmrn, Sandman, Wolffe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,273.08)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.354 | $15,000.00     | $5,316.09       |
| 2026-02-22 |      0.122 | $5,000.00      | $611.19         |
| 2026-02-15 |      0.076 | $4,000.00      | $303.26         |
| 2026-02-10 |      0.043 | $1,000.00      | $42.53          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
