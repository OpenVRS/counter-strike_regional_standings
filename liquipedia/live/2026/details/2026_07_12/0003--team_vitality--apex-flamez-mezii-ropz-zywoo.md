### Roster Details<br />
Team Name: Team Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [3](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [3]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1926.8<br />
<br />
Final Rank Value (1926.8) = Starting Rank Value (1866.3) + Head To Head Adjustments (60.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.801[<sup>2</sup>](#table1)
- Opponent Network: 0.417[<sup>2</sup>](#table1)
- LAN Wins: 0.878[<sup>2</sup>](#table1)

The average of these factors is 0.774<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1866.3
- 400 + ( ( 0.774 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1866.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.444
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      357 | 2026-06-19 | Team Falcons    | L   | 1.000      | -            | -                | -                | -         |   -13.77 | apEX, flameZ, mezii, ropz, ZywOo |
|           39 |      432 | 2026-06-14 | BetBoom Team    | W   | 1.000      | 1.000        | 0.357 (0.357)    | 0.761 (0.761)    | 1 (1.000) |     8.87 | apEX, flameZ, mezii, ropz, ZywOo |
|           38 |      468 | 2026-06-13 | MOUZ            | W   | 1.000      | 1.000        | 0.775 (0.775)    | 0.407 (0.407)    | 1 (1.000) |    10.74 | apEX, flameZ, mezii, ropz, ZywOo |
|           37 |      513 | 2026-06-12 | 9z Team         | L   | 0.998      | -            | -                | -                | -         |   -18.31 | apEX, flameZ, mezii, ropz, ZywOo |
|           36 |      545 | 2026-06-11 | FUT Esports     | W   | 0.990      | 1.000        | 0.663 (0.656)    | 0.332 (0.329)    | 1 (0.990) |     7.22 | apEX, flameZ, mezii, ropz, ZywOo |
|           35 |     1378 | 2026-05-15 | Natus Vincere   | L   | 0.813      | -            | -                | -                | -         |   -15.85 | apEX, flameZ, mezii, ropz, ZywOo |
|           34 |     1429 | 2026-05-13 | B8              | W   | 0.799      | 1.000        | -                | 0.680 (0.543)    | 1 (0.799) |     3.81 | apEX, flameZ, mezii, ropz, ZywOo |
|           33 |     1440 | 2026-05-13 | FaZe Clan       | W   | 0.798      | 1.000        | 0.472 (0.377)    | 0.478 (0.381)    | 1 (0.798) |     2.88 | apEX, flameZ, mezii, ropz, ZywOo |
|           32 |     1473 | 2026-05-12 | BetBoom Team    | L   | 0.792      | -            | -                | -                | -         |   -19.59 | apEX, flameZ, mezii, ropz, ZywOo |
|           31 |     1514 | 2026-05-11 | BC.Game Esports | W   | 0.785      | -            | -                | -                | 1 (0.785) |     0.06 | apEX, flameZ, mezii, ropz, ZywOo |
|           30 |     1707 | 2026-05-03 | Natus Vincere   | W   | 0.732      | 1.000        | 1.000 (0.732)    | -                | 1 (0.732) |     8.54 | apEX, flameZ, mezii, ropz, ZywOo |
|           29 |     1739 | 2026-05-02 | GamerLegion     | W   | 0.726      | 1.000        | -                | 0.432 (0.313)    | 1 (0.726) |     2.95 | apEX, flameZ, mezii, ropz, ZywOo |
|           28 |     1848 | 2026-04-30 | G2 Esports      | W   | 0.711      | 1.000        | -                | 0.611 (0.434)    | 1 (0.711) |     5.26 | apEX, flameZ, mezii, ropz, ZywOo |
|           27 |     1900 | 2026-04-29 | FUT Esports     | W   | 0.704      | 1.000        | 0.663 (0.467)    | -                | 1 (0.704) |     5.46 | apEX, flameZ, mezii, ropz, ZywOo |
|           26 |     2287 | 2026-04-19 | Team Spirit     | W   | 0.638      | 1.000        | 1.000 (0.638)    | 0.465 (0.297)    | -         |    11.16 | apEX, flameZ, mezii, ropz, ZywOo |
|           25 |     2315 | 2026-04-18 | FURIA           | W   | 0.632      | 1.000        | 0.810 (0.512)    | -                | -         |     7.22 | apEX, flameZ, mezii, ropz, ZywOo |
|           24 |     2335 | 2026-04-17 | Natus Vincere   | W   | 0.625      | 1.000        | 1.000 (0.625)    | -                | -         |     8.28 | apEX, flameZ, mezii, ropz, ZywOo |
|           23 |     2355 | 2026-04-15 | Team Falcons    | L   | 0.612      | -            | -                | -                | -         |    -7.77 | apEX, flameZ, mezii, ropz, ZywOo |
|           22 |     2382 | 2026-04-14 | G2 Esports      | W   | 0.604      | 1.000        | -                | 0.611 (0.369)    | -         |     5.07 | apEX, flameZ, mezii, ropz, ZywOo |
|           21 |     2402 | 2026-04-13 | RED Canids      | W   | 0.597      | -            | -                | -                | -         |     0.11 | apEX, flameZ, mezii, ropz, ZywOo |
|           20 |     3252 | 2026-03-29 | Natus Vincere   | W   | 0.496      | 1.000        | 1.000 (0.496)    | -                | -         |     6.83 | apEX, flameZ, mezii, ropz, ZywOo |
|           19 |     3327 | 2026-03-28 | Aurora Gaming   | W   | 0.491      | -            | -                | -                | -         |     4.95 | apEX, flameZ, mezii, ropz, ZywOo |
|           18 |     3581 | 2026-03-23 | PARIVISION      | W   | 0.458      | -            | -                | -                | -         |     5.23 | apEX, flameZ, mezii, ropz, ZywOo |
|           17 |     3684 | 2026-03-21 | The MongolZ     | W   | 0.446      | -            | -                | -                | -         |     3.23 | apEX, flameZ, mezii, ropz, ZywOo |
|           16 |     3790 | 2026-03-19 | 9z Team         | W   | 0.432      | 1.000        | -                | 0.778 (0.336)    | -         |     7.29 | apEX, flameZ, mezii, ropz, ZywOo |
|           15 |     5023 | 2026-02-22 | PARIVISION      | W   | 0.264      | -            | -                | -                | -         |     3.33 | apEX, flameZ, mezii, ropz, ZywOo |
|           14 |     5082 | 2026-02-21 | The MongolZ     | W   | 0.258      | -            | -                | -                | -         |     1.91 | apEX, flameZ, mezii, ropz, ZywOo |
|           13 |     5144 | 2026-02-20 | Aurora Gaming   | W   | 0.251      | -            | -                | -                | -         |     2.53 | apEX, flameZ, mezii, ropz, ZywOo |
|           12 |     5352 | 2026-02-16 | MOUZ            | W   | 0.224      | -            | -                | -                | -         |     2.97 | apEX, flameZ, mezii, ropz, ZywOo |
|           11 |     5403 | 2026-02-15 | The MongolZ     | W   | 0.218      | -            | -                | -                | -         |     1.57 | apEX, flameZ, mezii, ropz, ZywOo |
|           10 |     5469 | 2026-02-14 | G2 Esports      | W   | 0.211      | -            | -                | -                | -         |     2.19 | apEX, flameZ, mezii, ropz, ZywOo |
|            9 |     5704 | 2026-02-08 | FURIA           | W   | 0.171      | -            | -                | -                | -         |     2.46 | apEX, flameZ, mezii, ropz, ZywOo |
|            8 |     5721 | 2026-02-07 | MOUZ            | W   | 0.165      | -            | -                | -                | -         |     2.23 | apEX, flameZ, mezii, ropz, ZywOo |
|            7 |     5833 | 2026-02-03 | Aurora Gaming   | W   | 0.139      | -            | -                | -                | -         |     1.49 | apEX, flameZ, mezii, ropz, ZywOo |
|            6 |     5879 | 2026-02-02 | 3DMAX           | W   | 0.130      | -            | -                | -                | -         |     0.22 | apEX, flameZ, mezii, ropz, ZywOo |
|            5 |     5930 | 2026-01-31 | BC.Game Esports | W   | 0.119      | -            | -                | -                | -         |     0.02 | apEX, flameZ, mezii, ropz, ZywOo |
|            4 |     6128 | 2026-01-24 | Team Falcons    | L   | 0.071      | -            | -                | -                | -         |    -0.72 | apEX, flameZ, mezii, ropz, ZywOo |
|            3 |     6179 | 2026-01-23 | GamerLegion     | W   | 0.064      | -            | -                | -                | -         |     0.40 | apEX, flameZ, mezii, ropz, ZywOo |
|            2 |     6327 | 2026-01-18 | EYEBALLERS      | W   | 0.031      | -            | -                | -                | -         |     0.07 | apEX, flameZ, mezii, ropz, ZywOo |
|            1 |     6501 | 2026-01-14 | Virtus.pro      | W   | 0.005      | -            | -                | -                | -         |     0.00 | apEX, flameZ, mezii, ropz, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($799,147.57)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $45,000.00     | $45,000.00      |
| 2026-05-17 |      0.825 | $67,500.00     | $55,695.31      |
| 2026-05-03 |      0.732 | $250,000.00    | $182,881.94     |
| 2026-04-19 |      0.638 | $295,000.00    | $188,226.39     |
| 2026-03-29 |      0.496 | $250,000.00    | $124,062.50     |
| 2026-02-22 |      0.264 | $450,000.00    | $119,000.00     |
| 2026-02-08 |      0.171 | $460,000.00    | $78,711.11      |
| 2026-01-25 |      0.077 | $71,875.00     | $5,570.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
