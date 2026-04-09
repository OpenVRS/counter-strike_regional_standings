### Roster Details<br />
Team Name: BOSS<br />
Roster: Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw<br />
Global Rank: [201](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_04_06.md)<br />
Regional Rank: [43]( ../../standings_americas_2026_04_06.md)<br />
<br />
Final Rank Value:  746.8<br />
<br />
Final Rank Value (746.8) = Starting Rank Value (720.0) + Head To Head Adjustments (26.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.291[<sup>1</sup>](#table2)
- Bounty Collected: 0.267[<sup>2</sup>](#table1)
- Opponent Network: 0.034[<sup>2</sup>](#table1)
- LAN Wins: 0.062[<sup>2</sup>](#table1)

The average of these factors is 0.164<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 720.0
- 400 + ( ( 0.164 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 720.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.150
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2274 | 2026-02-19 | Zomblers         | L   | 0.896      | -            | -                | -                | -         |   -14.62 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           13 |     2319 | 2026-02-18 | SkinRave Esports | L   | 0.889      | -            | -                | -                | -         |   -11.18 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           12 |     2381 | 2026-02-17 | SportsBetExpert  | W   | 0.883      | 0.363        | 0.011 (0.004)    | 0.255 (0.082)    | 0 (0.000) |    13.21 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           11 |     2485 | 2026-02-15 | Life's A Game    | L   | 0.868      | -            | -                | -                | -         |    -7.25 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           10 |     2505 | 2026-02-15 | Outfit 49        | W   | 0.867      | 0.303        | 0.008 (0.002)    | 0.311 (0.082)    | 0 (0.000) |    10.96 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            9 |     2544 | 2026-02-14 | Akimbo Esports   | W   | 0.861      | 0.303        | 0.000 (0.000)    | 0.027 (0.007)    | 0 (0.000) |     5.28 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            8 |     2695 | 2026-02-11 | Team Voca        | L   | 0.841      | -            | -                | -                | -         |    -1.15 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            7 |     2701 | 2026-02-11 | Fisher College   | W   | 0.841      | 0.143        | 0.025 (0.003)    | 0.385 (0.046)    | 0 (0.000) |    20.43 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            6 |     2730 | 2026-02-10 | Team mouse       | W   | 0.835      | 0.143        | 0.000 (0.000)    | 0.050 (0.006)    | 0 (0.000) |     6.14 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            5 |     2738 | 2026-02-10 | SportsBetExpert  | L   | 0.834      | -            | -                | -                | -         |   -11.44 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            4 |     2848 | 2026-02-06 | Passion UA       | L   | 0.808      | -            | -                | -                | -         |    -0.72 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            3 |     3653 | 2026-01-10 | Marsborne        | L   | 0.629      | -            | -                | -                | -         |    -1.16 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            2 |     3656 | 2026-01-10 | M80              | L   | 0.628      | -            | -                | -                | -         |    -0.35 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            1 |     3664 | 2026-01-09 | Marsborne        | W   | 0.624      | 0.396        | 0.038 (0.009)    | 0.491 (0.121)    | 1 (0.624) |    18.63 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,663.01)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.868 | $1,000.00      | $868.44         |
| 2026-01-11 |      0.636 | $1,250.00      | $794.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
