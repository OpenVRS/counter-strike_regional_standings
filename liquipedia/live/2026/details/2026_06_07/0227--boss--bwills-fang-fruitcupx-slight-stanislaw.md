### Roster Details<br />
Team Name: BOSS<br />
Roster: Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw<br />
Global Rank: [227](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [56]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  698.6<br />
<br />
Final Rank Value (698.6) = Starting Rank Value (677.0) + Head To Head Adjustments (21.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.030[<sup>2</sup>](#table1)
- LAN Wins: 0.021[<sup>2</sup>](#table1)

The average of these factors is 0.144<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 677.0
- 400 + ( ( 0.144 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 677.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.080
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     4463 | 2026-02-19 | Zomblers         | L   | 0.476      | -            | -                | -                | -         |    -6.09 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           13 |     4508 | 2026-02-18 | SkinRave Esports | L   | 0.469      | -            | -                | -                | -         |    -7.79 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           12 |     4570 | 2026-02-17 | Insane players   | W   | 0.463      | 0.363        | 0.013 (0.002)    | 0.348 (0.058)    | 0 (0.000) |     8.09 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           11 |     4675 | 2026-02-15 | Life's A Game    | L   | 0.449      | -            | -                | -                | -         |    -1.19 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|           10 |     4695 | 2026-02-15 | 900FPSvsECO      | W   | 0.447      | 0.303        | 0.003 (0.000)    | 0.183 (0.025)    | 0 (0.000) |     6.57 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            9 |     4733 | 2026-02-14 | Akimbo Esports   | W   | 0.441      | 0.303        | 0.005 (0.001)    | 0.136 (0.018)    | 0 (0.000) |     6.98 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            8 |     4884 | 2026-02-11 | Team Voca        | L   | 0.422      | -            | -                | -                | -         |    -0.67 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            7 |     4890 | 2026-02-11 | Fisher College   | W   | 0.421      | 0.769        | 0.048 (0.016)    | 0.454 (0.147)    | 0 (0.000) |    12.40 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            6 |     4919 | 2026-02-10 | Team mouse       | W   | 0.415      | 0.769        | 0.000 (0.000)    | 0.079 (0.025)    | 0 (0.000) |     4.19 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            5 |     4927 | 2026-02-10 | Insane players   | L   | 0.414      | -            | -                | -                | -         |    -5.12 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            4 |     5037 | 2026-02-06 | Passion UA       | L   | 0.388      | -            | -                | -                | -         |    -0.47 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            3 |     5842 | 2026-01-10 | Marsborne        | L   | 0.210      | -            | -                | -                | -         |    -0.83 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            2 |     5845 | 2026-01-10 | M80              | L   | 0.208      | -            | -                | -                | -         |    -0.14 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |
|            1 |     5853 | 2026-01-09 | Marsborne        | W   | 0.204      | 0.396        | 0.019 (0.002)    | 0.324 (0.026)    | 1 (0.204) |     5.64 | Bwills, FaNg, Fruitcupx, SLIGHT, stanislaw |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($718.29)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-15 |      0.449 | $1,000.00      | $448.56         |
| 2026-01-11 |      0.216 | $1,250.00      | $269.73         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
