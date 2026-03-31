### Roster Details<br />
Team Name: BOSS<br />
Roster: Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw<br />
Global Rank: [190](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [39]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  744.5<br />
<br />
Final Rank Value (744.5) = Starting Rank Value (720.4) + Head To Head Adjustments (24.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.068[<sup>2</sup>](#table1)

The average of these factors is 0.165<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.4
- 400 + ( ( 0.165 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 720.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.164
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1781 | 2026-02-19 | Zomblers         | L   | 0.947      | -            | -                | -                | -         |   -15.17 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           13 |     1826 | 2026-02-18 | SkinRave Esports | L   | 0.940      | -            | -                | -                | -         |   -11.53 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           12 |     1888 | 2026-02-17 | SportsBetExpert  | W   | 0.934      | 0.363        | 0.011 (0.004)    | 0.273 (0.093)    | 0 (0.000) |    13.75 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           11 |     1992 | 2026-02-15 | Life's A Game    | L   | 0.920      | -            | -                | -                | -         |    -8.55 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           10 |     2012 | 2026-02-15 | Outfit 49        | W   | 0.918      | 0.303        | 0.008 (0.002)    | 0.337 (0.094)    | 0 (0.000) |    11.64 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            9 |     2050 | 2026-02-14 | Akimbo Esports   | W   | 0.912      | 0.303        | 0.000 (0.000)    | 0.030 (0.008)    | 0 (0.000) |     5.63 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            8 |     2201 | 2026-02-11 | Team Voca        | L   | 0.893      | -            | -                | -                | -         |    -1.45 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            7 |     2207 | 2026-02-11 | Fisher College   | W   | 0.892      | 0.143        | 0.008 (0.001)    | 0.338 (0.043)    | 0 (0.000) |    20.16 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            6 |     2236 | 2026-02-10 | Team mouse       | W   | 0.886      | 0.143        | 0.000 (0.000)    | 0.054 (0.007)    | 0 (0.000) |     6.58 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            5 |     2244 | 2026-02-10 | SportsBetExpert  | L   | 0.885      | -            | -                | -                | -         |   -12.17 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            4 |     2354 | 2026-02-06 | Passion UA       | L   | 0.859      | -            | -                | -                | -         |    -2.24 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            3 |     3151 | 2026-01-10 | Marsborne        | L   | 0.681      | -            | -                | -                | -         |    -1.66 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            2 |     3154 | 2026-01-10 | M80              | L   | 0.679      | -            | -                | -                | -         |    -0.77 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            1 |     3162 | 2026-01-09 | Marsborne        | W   | 0.675      | 0.396        | 0.038 (0.010)    | 0.480 (0.128)    | 1 (0.675) |    19.80 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,778.09)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.920 | $1,000.00      | $919.58         |
| 2026-01-11 |      0.687 | $1,250.00      | $858.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
