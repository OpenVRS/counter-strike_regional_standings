### Roster Details<br />
Team Name: EMPIRE<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [274](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [65]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  622.9<br />
<br />
Final Rank Value (622.9) = Starting Rank Value (627.1) + Head To Head Adjustments (-4.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.119<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 627.1
- 400 + ( ( 0.119 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 627.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3700 | 2026-04-27 | Wanted Goons   | L   | 0.314      | -            | -                | -                | -         |    -4.00 | BAGEL, C0C0, KmZ, no1nx, Shawta |
|           18 |     3750 | 2026-04-26 | ex-Aether      | L   | 0.307      | -            | -                | -                | -         |    -4.79 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           17 |     3820 | 2026-04-25 | LAG            | L   | 0.301      | -            | -                | -                | -         |    -1.02 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           16 |     3824 | 2026-04-25 | Kodex          | W   | 0.300      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.300) |     2.03 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           15 |     3840 | 2026-04-25 | LAG            | L   | 0.299      | -            | -                | -                | -         |    -0.99 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           14 |     4095 | 2026-04-15 | regain         | L   | 0.234      | -            | -                | -                | -         |    -2.39 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           13 |     4150 | 2026-04-12 | Aether         | W   | 0.214      | 0.333        | 0.001 (0.000)    | 0.033 (0.002)    | 0 (0.000) |     3.45 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           12 |     4228 | 2026-04-09 | Clockwork      | W   | 0.194      | 0.333        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     1.34 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           11 |     4284 | 2026-04-07 | FarmVille      | L   | 0.180      | -            | -                | -                | -         |    -2.71 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           10 |     4584 | 2026-04-02 | Zomblers       | L   | 0.147      | -            | -                | -                | -         |    -2.10 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            9 |     4686 | 2026-04-01 | LAG            | W   | 0.141      | 0.333        | 0.016 (0.001)    | 0.360 (0.017)    | 0 (0.000) |     4.03 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            8 |     5018 | 2026-03-28 | LAG            | L   | 0.113      | -            | -                | -                | -         |    -0.31 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            7 |     5034 | 2026-03-28 | Wanted Goons   | L   | 0.112      | -            | -                | -                | -         |    -1.45 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            6 |     5049 | 2026-03-28 | LAG            | L   | 0.112      | -            | -                | -                | -         |    -0.31 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            5 |     5064 | 2026-03-28 | Wanted Goons   | W   | 0.111      | 0.354        | 0.000 (0.000)    | 0.083 (0.003)    | 1 (0.111) |     2.08 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            4 |     5099 | 2026-03-27 | ClayMakers     | W   | 0.107      | 0.398        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.11 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            3 |     5574 | 2026-03-18 | Zomblers       | W   | 0.048      | 0.143        | 0.006 (0.000)    | 0.209 (0.001)    | 0 (0.000) |     0.85 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            2 |     5665 | 2026-03-16 | Wanted Goons   | W   | 0.034      | 0.143        | 0.000 (0.000)    | 0.083 (0.000)    | 0 (0.000) |     0.65 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            1 |     5750 | 2026-03-14 | insane players | W   | 0.021      | 0.143        | 0.004 (0.000)    | 0.068 (0.000)    | 0 (0.000) |     0.35 | BAGEL, C0C0, KmZ, no1nx, twigs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($238.29)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.119 | $2,000.00      | $238.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
