### Roster Details<br />
Team Name: Passion UA<br />
Roster: JT, Kvem, nicx, sdy, try<br />
Global Rank: [149](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [27]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  806.5<br />
<br />
Final Rank Value (806.5) = Starting Rank Value (811.3) + Head To Head Adjustments (-4.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.326[<sup>1</sup>](#table2)
- Bounty Collected: 0.285[<sup>2</sup>](#table1)
- Opponent Network: 0.021[<sup>2</sup>](#table1)
- LAN Wins: 0.233[<sup>2</sup>](#table1)

The average of these factors is 0.216<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 811.3
- 400 + ( ( 0.216 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 811.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |     2984 | 2026-05-21 | Betclic        | L   | 0.469      | -            | -                | -                | -         |    -7.87 | JT, Kvem, nicx, sdy, try   |
|           25 |     2985 | 2026-05-21 | OG             | L   | 0.469      | -            | -                | -                | -         |    -3.89 | JT, Kvem, nicx, sdy, try   |
|           24 |     2986 | 2026-05-21 | RBLS           | L   | 0.469      | -            | -                | -                | -         |    -7.36 | JT, Kvem, nicx, sdy, try   |
|           23 |     2987 | 2026-05-21 | Metizport      | L   | 0.469      | -            | -                | -                | -         |    -3.00 | JT, Kvem, nicx, sdy, try   |
|           22 |     3212 | 2026-05-12 | SINNERS        | L   | 0.414      | -            | -                | -                | -         |    -2.39 | JT, Kvem, nicx, sdy, try   |
|           21 |     3255 | 2026-05-11 | Natus Vincere  | L   | 0.406      | -            | -                | -                | -         |    -0.19 | JT, Kvem, nicx, sdy, try   |
|           20 |     3588 | 2026-04-30 | FOKUS          | L   | 0.332      | -            | -                | -                | -         |    -1.18 | JT, Kvem, nicx, sdy, try   |
|           19 |     3765 | 2026-04-26 | Marsborne      | W   | 0.306      | 0.371        | 0.014 (0.002)    | 0.432 (0.049)    | 1 (0.306) |     5.42 | JT, Kvem, nicx, Senzu, try |
|           18 |     3776 | 2026-04-26 | Wildcard       | L   | 0.306      | -            | -                | -                | -         |    -1.69 | JT, Kvem, nicx, Senzu, try |
|           17 |     3817 | 2026-04-25 | NRG            | W   | 0.302      | 0.371        | 0.028 (0.003)    | 0.358 (0.040)    | 1 (0.302) |     8.21 | JT, Kvem, nicx, Senzu, try |
|           16 |     3825 | 2026-04-25 | NuTorious      | W   | 0.300      | 0.371        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.300) |     0.91 | JT, Kvem, nicx, Senzu, try |
|           15 |     3834 | 2026-04-25 | Fisher College | L   | 0.299      | -            | -                | -                | -         |    -4.98 | JT, Kvem, nicx, Senzu, try |
|           14 |     3852 | 2026-04-25 | Celestial      | W   | 0.299      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.299) |     0.80 | JT, Kvem, nicx, Senzu, try |
|           13 |     4118 | 2026-04-14 | B8             | L   | 0.226      | -            | -                | -                | -         |    -0.17 | FaNg, JT, Kvem, nicx, try  |
|           12 |     4137 | 2026-04-13 | FURIA          | L   | 0.220      | -            | -                | -                | -         |    -0.03 | FaNg, JT, Kvem, nicx, try  |
|           11 |     4369 | 2026-04-05 | Sangal         | L   | 0.165      | -            | -                | -                | -         |    -3.42 | JT, Kvem, nicx, Senzu, try |
|           10 |     4387 | 2026-04-05 | BESTIA         | W   | 0.164      | 0.333        | 0.014 (0.001)    | 0.478 (0.026)    | 1 (0.164) |     3.48 | JT, Kvem, nicx, Senzu, try |
|            9 |     4458 | 2026-04-04 | ASTRAL         | W   | 0.157      | 0.333        | 0.010 (0.001)    | 0.769 (0.040)    | 1 (0.157) |     4.42 | JT, Kvem, nicx, Senzu, try |
|            8 |     4472 | 2026-04-04 | PURE           | W   | 0.157      | 0.333        | 0.000 (0.000)    | 0.017 (0.001)    | 1 (0.157) |     0.49 | JT, Kvem, nicx, Senzu, try |
|            7 |     4709 | 2026-04-01 | Alliance       | L   | 0.139      | -            | -                | -                | -         |    -0.15 | JT, Kvem, nicx, Senzu, try |
|            6 |     4732 | 2026-04-01 | Sashi          | W   | 0.138      | 0.354        | 0.055 (0.003)    | 0.623 (0.030)    | 1 (0.138) |     3.97 | JT, Kvem, nicx, Senzu, try |
|            5 |     4782 | 2026-03-31 | Luminosity     | L   | 0.132      | -            | -                | -                | -         |    -0.43 | JT, Kvem, nicx, Senzu, try |
|            4 |     4825 | 2026-03-31 | FaZe           | W   | 0.131      | 0.354        | 0.478 (0.022)    | 0.356 (0.016)    | 1 (0.131) |     4.07 | JT, Kvem, nicx, Senzu, try |
|            3 |     4910 | 2026-03-30 | Eternal Fire   | W   | 0.124      | 0.354        | 0.000 (0.000)    | 0.024 (0.001)    | 1 (0.124) |     1.08 | JT, Kvem, nicx, Senzu, try |
|            2 |     5251 | 2026-03-24 | BBL            | L   | 0.085      | -            | -                | -                | -         |    -0.34 | JT, Kvem, nicx, Senzu, try |
|            1 |     5284 | 2026-03-24 | BASEMENT BOYS  | L   | 0.083      | -            | -                | -                | -         |    -0.51 | JT, Kvem, nicx, Senzu, try |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,330.40)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      0.446 | $4,000.00      | $1,783.99       |
| 2026-04-26 |      0.306 | $2,600.00      | $796.43         |
| 2026-04-19 |      0.259 | $4,000.00      | $1,035.77       |
| 2026-04-05 |      0.165 | $3,000.00      | $495.85         |
| 2026-04-02 |      0.146 | $1,500.00      | $218.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
