### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [172](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_22.md)<br />
Regional Rank: [19]( ../../standings_asia_2026_03_22.md)<br />
<br />
Final Rank Value:  788.0<br />
<br />
Final Rank Value (788.0) = Starting Rank Value (738.1) + Head To Head Adjustments (49.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.325[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.059[<sup>2</sup>](#table1)

The average of these factors is 0.169<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 738.1
- 400 + ( ( 0.169 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 738.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.286
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      362 | 2026-03-10 | Morningstar                | L   | 1.000      | -            | -                | -                | -         |    -8.62 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           22 |      368 | 2026-03-09 | Chaos Gaming General       | W   | 1.000      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.08 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           21 |      435 | 2026-03-08 | Chinggis Warriors          | L   | 1.000      | -            | -                | -                | -         |    -6.10 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           20 |     1058 | 2026-02-24 | Morningstar                | L   | 1.000      | -            | -                | -                | -         |    -8.76 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           19 |     1100 | 2026-02-23 | Last Bullet (Chinese team) | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.134 (0.045)    | 0 (0.000) |    12.74 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           18 |     1167 | 2026-02-22 | The QUBE Esports           | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.189 (0.063)    | 0 (0.000) |    17.16 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           17 |     1222 | 2026-02-21 | Chinggis Warriors          | W   | 1.000      | 0.333        | 0.015 (0.005)    | 0.284 (0.095)    | 0 (0.000) |    26.77 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           16 |     1275 | 2026-02-20 | Legion (Pakistani team)    | W   | 0.997      | 0.333        | 0.004 (0.001)    | 0.266 (0.088)    | 0 (0.000) |    14.34 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           15 |     1323 | 2026-02-19 | 100RA                      | W   | 0.991      | -            | -                | -                | 0 (0.000) |     4.00 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           14 |     1379 | 2026-02-18 | BORING PLAYER              | L   | 0.984      | -            | -                | -                | -         |   -17.26 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |     1442 | 2026-02-17 | Team Arise                 | W   | 0.977      | 0.333        | 0.002 (0.001)    | 0.138 (0.045)    | 0 (0.000) |    10.75 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     2520 | 2026-01-16 | Chinggis Warriors          | L   | 0.769      | -            | -                | -                | -         |    -2.71 | 957, Hack1ng, LaiKeXu, lyrics3, VanceKK   |
|           11 |     3623 | 2025-11-12 | Gentle Mates               | L   | 0.334      | -            | -                | -                | -         |    -0.25 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|           10 |     3702 | 2025-11-10 | FengDa Gaming              | L   | 0.317      | -            | -                | -                | -         |    -5.93 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            9 |     3788 | 2025-11-08 | FengDa Gaming              | W   | 0.303      | 0.380        | 0.002 (0.000)    | 0.060 (0.007)    | 1 (0.303) |     4.01 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            8 |     3932 | 2025-11-05 | Team GATERON               | W   | 0.289      | 0.380        | -                | 0.010 (0.001)    | 1 (0.289) |     1.79 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            7 |     4194 | 2025-10-27 | Eruption                   | W   | 0.224      | 0.333        | 0.003 (0.000)    | 0.046 (0.003)    | 0 (0.000) |     2.70 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            6 |     4254 | 2025-10-26 | Just Swing (Chinese team)  | W   | 0.217      | 0.333        | 0.002 (0.000)    | 0.046 (0.003)    | -         |     2.81 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            5 |     4308 | 2025-10-25 | IHC Esports                | W   | 0.210      | -            | -                | -                | -         |     1.38 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            4 |     4372 | 2025-10-24 | Legion (Pakistani team)    | W   | 0.204      | 0.333        | 0.004 (0.000)    | 0.266 (0.018)    | -         |     2.70 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            3 |     4417 | 2025-10-23 | Eruption                   | L   | 0.197      | -            | -                | -                | -         |    -3.83 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            2 |     5092 | 2025-10-03 | Morningstar                | L   | 0.063      | -            | -                | -                | -         |    -0.54 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            1 |     5137 | 2025-10-02 | Rare Atom                  | L   | 0.056      | -            | -                | -                | -         |    -0.39 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,365.19)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-24 |      1.000 | $2,500.00      | $2,500.00       |
| 2025-11-15 |      0.355 | $1,408.54      | $499.97         |
| 2025-11-13 |      0.337 | $1,000.00      | $337.22         |
| 2025-10-04 |      0.070 | $400.00        | $28.00          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
