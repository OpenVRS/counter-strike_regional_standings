### Roster Details<br />
Team Name: EMPIRE (American team)<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [215](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [51]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  724.9<br />
<br />
Final Rank Value (724.9) = Starting Rank Value (757.8) + Head To Head Adjustments (-32.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.278[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.177[<sup>2</sup>](#table1)

The average of these factors is 0.188<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 757.8
- 400 + ( ( 0.188 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 757.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.213
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           22 |     1140 | 2026-04-27 | Wanted Goons      | L   | 0.975      | -            | -                | -                | -         |   -17.92 | BAGEL, C0C0, KmZ, no1nx, Shawta   |
|           21 |     1184 | 2026-04-26 | Ex-Team Aether    | L   | 0.968      | -            | -                | -                | -         |   -18.57 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           20 |     1257 | 2026-04-25 | Life's A Game     | L   | 0.961      | -            | -                | -                | -         |    -6.47 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           19 |     1262 | 2026-04-25 | Foxtrot Esports   | W   | 0.960      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.960) |     3.42 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           18 |     1274 | 2026-04-25 | Life's A Game     | L   | 0.960      | -            | -                | -                | -         |    -6.58 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           17 |     1530 | 2026-04-15 | Regain            | L   | 0.894      | -            | -                | -                | -         |   -12.62 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           16 |     1585 | 2026-04-12 | Team Aether       | W   | 0.875      | 0.333        | 0.004 (0.001)    | 0.240 (0.070)    | 0 (0.000) |    15.05 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           15 |     1665 | 2026-04-09 | Clockwork         | W   | 0.854      | 0.333        | 0.000 (0.000)    | 0.027 (0.008)    | 0 (0.000) |     3.35 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           14 |     1720 | 2026-04-07 | FarmVille         | L   | 0.841      | -            | -                | -                | -         |   -12.35 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           13 |     2029 | 2026-04-02 | Zomblers          | L   | 0.807      | -            | -                | -                | -         |   -14.26 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           12 |     2125 | 2026-04-01 | Life's A Game     | W   | 0.801      | 0.333        | 0.033 (0.009)    | 0.682 (0.182)    | 0 (0.000) |    21.66 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           11 |     2448 | 2026-03-28 | Life's A Game     | L   | 0.775      | -            | -                | -                | -         |    -3.01 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|           10 |     2467 | 2026-03-28 | Wanted Goons      | L   | 0.773      | -            | -                | -                | -         |   -16.19 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            9 |     2486 | 2026-03-28 | Life's A Game     | L   | 0.772      | -            | -                | -                | -         |    -3.36 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            8 |     2500 | 2026-03-28 | Wanted Goons      | W   | 0.772      | 0.354        | 0.000 (0.000)    | 0.163 (0.045)    | 1 (0.772) |     7.82 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            7 |     2530 | 2026-03-27 | ClayMakers Reborn | W   | 0.768      | 0.404        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     4.53 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            6 |     3010 | 2026-03-18 | Zomblers          | W   | 0.708      | 0.143        | 0.012 (0.001)    | 0.436 (0.044)    | 0 (0.000) |    11.35 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            5 |     3104 | 2026-03-16 | Wanted Goons      | W   | 0.695      | 0.143        | 0.000 (0.000)    | 0.163 (0.016)    | 0 (0.000) |     7.43 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            4 |     3186 | 2026-03-14 | Insane players    | W   | 0.681      | 0.143        | 0.013 (0.001)    | 0.373 (0.036)    | 0 (0.000) |     9.96 | BAGEL, C0C0, KmZ, no1nx, twigs    |
|            3 |     5820 | 2026-01-03 | Reign Above       | L   | 0.213      | -            | -                | -                | -         |    -5.44 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            2 |     5827 | 2026-01-03 | NRG               | L   | 0.212      | -            | -                | -                | -         |    -0.50 | BAGEL, C0C0, Laboom, no1nx, twigs |
|            1 |     6001 | 2025-12-12 | Life's A Game     | L   | 0.068      | -            | -                | -                | -         |    -0.21 | BAGEL, C0C0, Laboom, no1nx, twigs |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,562.50)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.781 | $2,000.00      | $1,562.50       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
