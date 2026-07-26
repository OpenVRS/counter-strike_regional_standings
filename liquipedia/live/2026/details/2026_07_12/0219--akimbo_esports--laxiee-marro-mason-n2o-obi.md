### Roster Details<br />
Team Name: Akimbo Esports<br />
Roster: laxiee, Marro, mason, N2o, obi<br />
Global Rank: [219](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_12.md)<br />
Regional Rank: [25]( ../../standings_asia_2026_07_12.md)<br />
<br />
Final Rank Value:  707.3<br />
<br />
Final Rank Value (707.3) = Starting Rank Value (675.6) + Head To Head Adjustments (31.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.293[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.145<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 675.6
- 400 + ( ( 0.145 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 675.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.114
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |     2280 | 2026-04-19 | Insane players            | L   | 0.640      | -            | -                | -                | -         |    -9.10 | laxiee, Marro, mason, N2o, obi   |
|           15 |     2312 | 2026-04-18 | Regain                    | W   | 0.633      | 0.333        | 0.015 (0.003)    | 0.501 (0.106)    | 0 (0.000) |    11.90 | laxiee, Marro, mason, N2o, obi   |
|           14 |     2342 | 2026-04-16 | Incognito (American team) | W   | 0.620      | 0.333        | 0.000 (0.000)    | 0.120 (0.025)    | 0 (0.000) |     5.85 | laxiee, Marro, mason, N2o, obi   |
|           13 |     2406 | 2026-04-12 | Team Voca                 | L   | 0.593      | -            | -                | -                | -         |    -1.89 | laxiee, Marro, mason, N2o, obi   |
|           12 |     2460 | 2026-04-10 | Incognito (American team) | W   | 0.580      | 0.333        | 0.000 (0.000)    | 0.120 (0.023)    | 0 (0.000) |     5.36 | laxiee, Marro, mason, N2o, obi   |
|           11 |     2464 | 2026-04-10 | FarmVille                 | W   | 0.579      | 0.333        | 0.005 (0.001)    | 0.274 (0.053)    | 0 (0.000) |    10.74 | laxiee, Marro, mason, N2o, obi   |
|           10 |     2487 | 2026-04-09 | Iowa Stormboar            | W   | 0.573      | 0.333        | 0.012 (0.002)    | 0.432 (0.083)    | 0 (0.000) |    11.78 | laxiee, Marro, mason, N2o, obi   |
|            9 |     2572 | 2026-04-06 | Regain                    | L   | 0.554      | -            | -                | -                | -         |    -6.52 | laxiee, Marro, mason, N2o, obi   |
|            8 |     2578 | 2026-04-06 | FarmVille                 | L   | 0.553      | -            | -                | -                | -         |    -7.13 | laxiee, Marro, mason, N2o, obi   |
|            7 |     2675 | 2026-04-04 | FarmVille                 | W   | 0.540      | 0.333        | 0.005 (0.001)    | 0.274 (0.049)    | 0 (0.000) |     9.96 | laxiee, Marro, mason, N2o, obi   |
|            6 |     3031 | 2026-03-31 | BOSS                      | W   | 0.513      | 0.333        | 0.002 (0.000)    | 0.214 (0.037)    | 0 (0.000) |    11.14 | laxiee, Marro, mason, N2o, obi   |
|            5 |     3432 | 2026-03-25 | Regain                    | L   | 0.474      | -            | -                | -                | -         |    -6.15 | laxiee, Marro, mason, N2o, obi   |
|            4 |     5175 | 2026-02-19 | FlyQuest RED              | L   | 0.247      | -            | -                | -                | -         |    -4.94 | Marro, N2o, obi, Oczarka, Zamgaa |
|            3 |     5223 | 2026-02-18 | Regain                    | W   | 0.241      | 0.363        | 0.015 (0.001)    | 0.501 (0.044)    | 0 (0.000) |     4.53 | Marro, N2o, obi, Oczarka, Zamgaa |
|            2 |     5282 | 2026-02-17 | M80                       | L   | 0.234      | -            | -                | -                | -         |    -0.18 | Marro, N2o, obi, Oczarka, Zamgaa |
|            1 |     5444 | 2026-02-14 | BOSS                      | L   | 0.212      | -            | -                | -                | -         |    -3.72 | AJ, Marro, N2o, obi, Oczarka     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,071.63)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.640 | $3,000.00      | $1,920.00       |
| 2026-04-14 |      0.607 | $250.00        | $151.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
