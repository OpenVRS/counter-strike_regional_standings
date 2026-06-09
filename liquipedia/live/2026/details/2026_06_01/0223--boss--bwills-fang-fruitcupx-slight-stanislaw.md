### Roster Details<br />
Team Name: BOSS<br />
Roster: Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw<br />
Global Rank: [223](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [56]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  708.5<br />
<br />
Final Rank Value (708.5) = Starting Rank Value (683.8) + Head To Head Adjustments (24.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.036[<sup>2</sup>](#table1)
- LAN Wins: 0.026[<sup>2</sup>](#table1)

The average of these factors is 0.149<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 683.8
- 400 + ( ( 0.149 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 683.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.090
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     4353 | 2026-02-19 | Zomblers         | L   | 0.528      | -            | -                | -                | -         |    -6.81 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           13 |     4398 | 2026-02-18 | SkinRave Esports | L   | 0.522      | -            | -                | -                | -         |    -8.64 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           12 |     4460 | 2026-02-17 | Insane players   | W   | 0.515      | 0.363        | 0.013 (0.003)    | 0.373 (0.070)    | 0 (0.000) |     8.90 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           11 |     4565 | 2026-02-15 | Life's A Game    | L   | 0.501      | -            | -                | -                | -         |    -1.31 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           10 |     4585 | 2026-02-15 | 900FPSvsECO      | W   | 0.499      | 0.303        | 0.003 (0.000)    | 0.197 (0.030)    | 0 (0.000) |     7.18 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            9 |     4623 | 2026-02-14 | Akimbo Esports   | W   | 0.493      | 0.303        | 0.005 (0.001)    | 0.143 (0.021)    | 0 (0.000) |     7.67 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            8 |     4774 | 2026-02-11 | Team Voca        | L   | 0.474      | -            | -                | -                | -         |    -0.69 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            7 |     4780 | 2026-02-11 | Fisher College   | W   | 0.473      | 0.769        | 0.049 (0.018)    | 0.482 (0.175)    | 0 (0.000) |    14.01 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            6 |     4809 | 2026-02-10 | Team mouse       | W   | 0.467      | 0.769        | 0.000 (0.000)    | 0.086 (0.031)    | 0 (0.000) |     4.64 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            5 |     4817 | 2026-02-10 | Insane players   | L   | 0.466      | -            | -                | -                | -         |    -5.77 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            4 |     4927 | 2026-02-06 | Passion UA       | L   | 0.441      | -            | -                | -                | -         |    -0.47 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            3 |     5732 | 2026-01-10 | Marsborne        | L   | 0.262      | -            | -                | -                | -         |    -0.94 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            2 |     5735 | 2026-01-10 | M80              | L   | 0.260      | -            | -                | -                | -         |    -0.21 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            1 |     5743 | 2026-01-09 | Marsborne        | W   | 0.256      | 0.396        | 0.021 (0.002)    | 0.353 (0.036)    | 1 (0.256) |     7.19 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($835.90)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.501 | $1,000.00      | $500.83         |
| 2026-01-11 |      0.268 | $1,250.00      | $335.07         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
