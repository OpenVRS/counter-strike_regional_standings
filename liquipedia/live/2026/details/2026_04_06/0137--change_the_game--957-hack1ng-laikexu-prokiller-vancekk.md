### Roster Details<br />
Team Name: Change The Game<br />
Roster: 957, Hack1ng, LaiKeXu, ProKiller, VanceKK<br />
Global Rank: [137](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [15]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  922.3<br />
<br />
Final Rank Value (922.3) = Starting Rank Value (897.1) + Head To Head Adjustments (25.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.331[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.340[<sup>2</sup>](#table1)

The average of these factors is 0.254<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 897.1
- 400 + ( ( 0.254 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 897.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.252
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |       49 | 2026-04-04 | TYLOO                      | L   | 1.000      | -            | -                | -                | -         |    -1.58 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           28 |       95 | 2026-04-03 | Rare Atom                  | W   | 1.000      | 0.352        | 0.032 (0.011)    | 0.404 (0.142)    | 1 (1.000) |    23.50 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           27 |      102 | 2026-04-03 | TYLOO                      | L   | 1.000      | -            | -                | -                | -         |    -1.32 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           26 |      154 | 2026-04-02 | Last Bullet (Chinese team) | W   | 1.000      | 0.352        | 0.008 (0.003)    | 0.185 (0.065)    | 1 (1.000) |    11.41 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           25 |      310 | 2026-03-30 | Lynn Vision Gaming         | L   | 1.000      | -            | -                | -                | -         |    -3.21 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           24 |      318 | 2026-03-30 | Last Bullet (Chinese team) | W   | 1.000      | 0.352        | 0.008 (0.003)    | 0.185 (0.065)    | 1 (1.000) |    12.02 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           23 |      799 | 2026-03-21 | Haunted House              | L   | 1.000      | -            | -                | -                | -         |   -21.46 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           22 |      854 | 2026-03-20 | 5star eSports              | L   | 1.000      | -            | -                | -                | -         |    -7.47 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           21 |     1313 | 2026-03-10 | Morningstar                | L   | 1.000      | -            | -                | -                | -         |    -9.72 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           20 |     1319 | 2026-03-09 | Chaos Gaming General       | W   | 1.000      | 0.143        | 0.002 (0.000)    | -                | 0 (0.000) |     3.16 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           19 |     1386 | 2026-03-08 | Chinggis Warriors          | L   | 1.000      | -            | -                | -                | -         |    -6.98 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           18 |     2009 | 2026-02-24 | Morningstar                | L   | 0.926      | -            | -                | -                | -         |    -9.79 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           17 |     2051 | 2026-02-23 | Last Bullet (Chinese team) | W   | 0.919      | 0.333        | 0.008 (0.002)    | 0.185 (0.057)    | 0 (0.000) |    10.79 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           16 |     2118 | 2026-02-22 | The QUBE Esports           | W   | 0.913      | 0.333        | 0.009 (0.003)    | 0.218 (0.066)    | 0 (0.000) |    11.75 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           15 |     2173 | 2026-02-21 | Chinggis Warriors          | W   | 0.906      | 0.333        | 0.017 (0.005)    | 0.384 (0.116)    | 0 (0.000) |    23.60 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           14 |     2226 | 2026-02-20 | Legion (Pakistani team)    | W   | 0.899      | 0.333        | 0.003 (0.001)    | 0.241 (0.072)    | 0 (0.000) |     7.88 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           13 |     2274 | 2026-02-19 | 100RA                      | W   | 0.893      | -            | -                | -                | -         |     1.77 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           12 |     2330 | 2026-02-18 | BORING PLAYER              | L   | 0.886      | -            | -                | -                | -         |   -20.62 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           11 |     2393 | 2026-02-17 | Team Arise                 | W   | 0.879      | 0.333        | 0.002 (0.001)    | 0.106 (0.031)    | -         |     5.33 | 957, Hack1ng, LaiKeXu, ProKiller, VanceKK |
|           10 |     3471 | 2026-01-16 | Chinggis Warriors          | L   | 0.671      | -            | -                | -                | -         |    -3.11 | 957, Hack1ng, LaiKeXu, lyrics3, VanceKK   |
|            9 |     4574 | 2025-11-12 | Gentle Mates               | L   | 0.236      | -            | -                | -                | -         |    -0.56 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            8 |     4653 | 2025-11-10 | FengDa Gaming              | L   | 0.219      | -            | -                | -                | -         |    -5.62 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            7 |     4739 | 2025-11-08 | FengDa Gaming              | W   | 0.205      | -            | -                | -                | 1 (0.205) |     1.22 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            6 |     4883 | 2025-11-05 | Team GATERON               | W   | 0.191      | -            | -                | -                | 1 (0.191) |     0.34 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            5 |     5145 | 2025-10-27 | BMZ                        | W   | 0.126      | 0.333        | 0.012 (0.001)    | 0.275 (0.012)    | -         |     2.68 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            4 |     5205 | 2025-10-26 | Just Swing (Chinese team)  | W   | 0.119      | -            | -                | -                | -         |     1.13 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            3 |     5259 | 2025-10-25 | IHC Esports                | W   | 0.112      | -            | -                | -                | -         |     0.33 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            2 |     5323 | 2025-10-24 | Legion (Pakistani team)    | W   | 0.106      | 0.333        | -                | 0.241 (0.009)    | -         |     0.73 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |
|            1 |     5368 | 2025-10-23 | BMZ                        | L   | 0.099      | -            | -                | -                | -         |    -1.00 | 957, Hack1ng, LaiKeXu, VanceKK, zero      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,354.12)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      1.000 | $1,438.00      | $1,438.00       |
| 2026-02-24 |      0.926 | $2,500.00      | $2,314.85       |
| 2025-11-15 |      0.257 | $1,408.54      | $362.00         |
| 2025-11-13 |      0.239 | $1,000.00      | $239.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
