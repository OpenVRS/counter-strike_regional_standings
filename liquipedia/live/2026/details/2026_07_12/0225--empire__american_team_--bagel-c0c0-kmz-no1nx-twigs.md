### Roster Details<br />
Team Name: EMPIRE (American team)<br />
Roster: BAGEL, C0C0, KmZ, no1nx, twigs<br />
Global Rank: [225](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_07_12.md)<br />
Regional Rank: [52]( ../../standings_americas_2026_07_12.md)<br />
<br />
Final Rank Value:  696.6<br />
<br />
Final Rank Value (696.6) = Starting Rank Value (707.9) + Head To Head Adjustments (-11.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.268[<sup>1</sup>](#table2)
- Bounty Collected: 0.237[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 0.125[<sup>2</sup>](#table1)

The average of these factors is 0.162<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.9
- 400 + ( ( 0.162 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 707.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.162
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1960 | 2026-04-27 | Wanted Goons      | L   | 0.694      | -            | -                | -                | -         |   -10.40 | BAGEL, C0C0, KmZ, no1nx, Shawta |
|           18 |     2004 | 2026-04-26 | Ex-Team Aether    | L   | 0.687      | -            | -                | -                | -         |   -12.35 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           17 |     2077 | 2026-04-25 | Life's A Game     | L   | 0.680      | -            | -                | -                | -         |    -4.71 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           16 |     2082 | 2026-04-25 | Foxtrot Esports   | W   | 0.679      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.679) |     3.01 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           15 |     2094 | 2026-04-25 | Life's A Game     | L   | 0.678      | -            | -                | -                | -         |    -4.76 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           14 |     2350 | 2026-04-15 | Regain            | L   | 0.613      | -            | -                | -                | -         |    -8.47 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           13 |     2405 | 2026-04-12 | Team Aether       | W   | 0.594      | 0.333        | 0.003 (0.001)    | 0.162 (0.032)    | 0 (0.000) |     9.81 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           12 |     2485 | 2026-04-09 | Clockwork         | W   | 0.573      | 0.333        | 0.000 (0.000)    | 0.021 (0.004)    | 0 (0.000) |     2.69 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           11 |     2540 | 2026-04-07 | FarmVille         | L   | 0.560      | -            | -                | -                | -         |    -8.29 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|           10 |     2849 | 2026-04-02 | Zomblers          | L   | 0.526      | -            | -                | -                | -         |    -8.92 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            9 |     2945 | 2026-04-01 | Life's A Game     | W   | 0.520      | 0.333        | 0.023 (0.004)    | 0.540 (0.094)    | 0 (0.000) |    13.60 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            8 |     3268 | 2026-03-28 | Life's A Game     | L   | 0.493      | -            | -                | -                | -         |    -2.46 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            7 |     3287 | 2026-03-28 | Wanted Goons      | L   | 0.492      | -            | -                | -                | -         |    -8.10 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            6 |     3306 | 2026-03-28 | Life's A Game     | L   | 0.491      | -            | -                | -                | -         |    -2.62 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            5 |     3320 | 2026-03-28 | Wanted Goons      | W   | 0.491      | 0.354        | 0.000 (0.000)    | 0.172 (0.030)    | 1 (0.491) |     7.42 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            4 |     3350 | 2026-03-27 | ClayMakers Reborn | W   | 0.487      | 0.404        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.59 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            3 |     3830 | 2026-03-18 | Zomblers          | W   | 0.427      | 0.143        | 0.010 (0.001)    | 0.316 (0.019)    | 0 (0.000) |     6.90 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            2 |     3924 | 2026-03-16 | Wanted Goons      | W   | 0.413      | 0.143        | 0.000 (0.000)    | 0.172 (0.010)    | 0 (0.000) |     6.61 | BAGEL, C0C0, KmZ, no1nx, twigs  |
|            1 |     4006 | 2026-03-14 | Insane players    | W   | 0.400      | 0.143        | 0.010 (0.001)    | 0.263 (0.015)    | 0 (0.000) |     6.14 | BAGEL, C0C0, KmZ, no1nx, twigs  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,000.28)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.500 | $2,000.00      | $1,000.28       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
