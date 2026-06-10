### Roster Details<br />
Team Name: EMPIRE (American team)<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [212](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [49]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  721.6<br />
<br />
Final Rank Value (721.6) = Starting Rank Value (751.8) + Head To Head Adjustments (-30.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.276[<sup>1</sup>](#table2)
- Bounty Collected: 0.253[<sup>2</sup>](#table1)
- Opponent Network: 0.035[<sup>2</sup>](#table1)
- LAN Wins: 0.167[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 751.8
- 400 + ( ( 0.183 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 751.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.200
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     1250 | 2026-04-27 | Wanted Goons      | L   | 0.922      | -            | -                | -                | -         |   -17.05 | BAGEL, C0C0, KmZ, no1nx, Shawta   |
|           21 |     1294 | 2026-04-26 | Ex-Team Aether    | L   | 0.916      | -            | -                | -                | -         |   -17.46 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           20 |     1367 | 2026-04-25 | Life's A Game     | L   | 0.909      | -            | -                | -                | -         |    -6.07 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           19 |     1372 | 2026-04-25 | Foxtrot Esports   | W   | 0.908      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.908) |     3.33 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           18 |     1384 | 2026-04-25 | Life's A Game     | L   | 0.907      | -            | -                | -                | -         |    -6.18 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           17 |     1640 | 2026-04-15 | Regain            | L   | 0.842      | -            | -                | -                | -         |   -11.98 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           16 |     1695 | 2026-04-12 | Team Aether       | W   | 0.823      | 0.333        | 0.004 (0.001)    | 0.222 (0.061)    | 0 (0.000) |    14.02 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           15 |     1775 | 2026-04-09 | Clockwork         | W   | 0.802      | 0.333        | 0.000 (0.000)    | 0.026 (0.007)    | 0 (0.000) |     3.22 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           14 |     1830 | 2026-04-07 | FarmVille         | L   | 0.788      | -            | -                | -                | -         |   -11.73 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           13 |     2139 | 2026-04-02 | Zomblers          | L   | 0.755      | -            | -                | -                | -         |   -13.32 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           12 |     2235 | 2026-04-01 | Life's A Game     | W   | 0.749      | 0.333        | 0.031 (0.008)    | 0.637 (0.159)    | 0 (0.000) |    20.21 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           11 |     2558 | 2026-03-28 | Life's A Game     | L   | 0.722      | -            | -                | -                | -         |    -2.87 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           10 |     2577 | 2026-03-28 | Wanted Goons      | L   | 0.721      | -            | -                | -                | -         |   -15.05 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            9 |     2596 | 2026-03-28 | Life's A Game     | L   | 0.720      | -            | -                | -                | -         |    -3.19 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            8 |     2610 | 2026-03-28 | Wanted Goons      | W   | 0.719      | 0.354        | 0.000 (0.000)    | 0.155 (0.039)    | 1 (0.719) |     7.39 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            7 |     2640 | 2026-03-27 | ClayMakers Reborn | W   | 0.716      | 0.404        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.37 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            6 |     3120 | 2026-03-18 | Zomblers          | W   | 0.656      | 0.143        | 0.012 (0.001)    | 0.408 (0.038)    | 0 (0.000) |    10.46 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            5 |     3214 | 2026-03-16 | Wanted Goons      | W   | 0.642      | 0.143        | 0.000 (0.000)    | 0.155 (0.014)    | 0 (0.000) |     6.94 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            4 |     3296 | 2026-03-14 | Insane players    | W   | 0.629      | 0.143        | 0.013 (0.001)    | 0.348 (0.031)    | 0 (0.000) |     9.21 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            3 |     5930 | 2026-01-03 | Reign Above       | L   | 0.160      | -            | -                | -                | -         |    -4.09 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            2 |     5937 | 2026-01-03 | NRG               | L   | 0.160      | -            | -                | -                | -         |    -0.28 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            1 |     6111 | 2025-12-12 | Life's A Game     | L   | 0.016      | -            | -                | -                | -         |    -0.05 | BAGEL, C0C0, Laboom, no1nx, twigs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,457.96)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.729 | $2,000.00      | $1,457.96       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
