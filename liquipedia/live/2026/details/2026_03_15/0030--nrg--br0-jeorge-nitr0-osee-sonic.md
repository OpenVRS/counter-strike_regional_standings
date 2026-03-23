### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Jeorge, nitr0, oSee, Sonic<br />
Global Rank: [30](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_15.md)<br />
Regional Rank: [5]( ../../standings_americas_2026_03_15.md)<br />
<br />
Final Rank Value:  1381.3<br />
<br />
Final Rank Value (1381.3) = Starting Rank Value (1301.5) + Head To Head Adjustments (79.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.449[<sup>1</sup>](#table2)
- Bounty Collected: 0.461[<sup>2</sup>](#table1)
- Opponent Network: 0.155[<sup>2</sup>](#table1)
- LAN Wins: 0.777[<sup>2</sup>](#table1)

The average of these factors is 0.461<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1301.5
- 400 + ( ( 0.461 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 1301.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.370
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent              | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      533 | 2026-03-03 | Ninjas in Pyjamas     | L   | 1.000      | -            | -                | -                | -         |   -16.25 | br0, Grim, nitr0, oSee, Sonic    |
|           30 |      605 | 2026-03-02 | Monte                 | L   | 1.000      | -            | -                | -                | -         |   -11.80 | br0, Grim, nitr0, oSee, Sonic    |
|           29 |      646 | 2026-03-01 | HEROIC                | L   | 1.000      | -            | -                | -                | -         |   -12.90 | br0, Grim, nitr0, oSee, Sonic    |
|           28 |     1643 | 2026-02-08 | Passion UA            | W   | 0.966      | 0.143        | 0.087 (0.012)    | -                | -         |     9.49 | br0, Jeorge, nitr0, oSee, Sonic  |
|           27 |     1673 | 2026-02-07 | Team Voca             | W   | 0.959      | 0.143        | -                | 0.608 (0.083)    | -         |     9.53 | br0, Jeorge, nitr0, oSee, Sonic  |
|           26 |     1710 | 2026-02-06 | Fisher College        | W   | 0.953      | -            | -                | -                | -         |     0.21 | br0, Jeorge, nitr0, oSee, Sonic  |
|           25 |     1821 | 2026-02-02 | Team Falcons          | L   | 0.925      | -            | -                | -                | -         |    -3.31 | br0, Jeorge, nitr0, oSee, Sonic  |
|           24 |     1857 | 2026-02-01 | MOUZ                  | L   | 0.918      | -            | -                | -                | -         |    -1.84 | br0, Jeorge, nitr0, oSee, Sonic  |
|           23 |     1929 | 2026-01-30 | Astralis              | W   | 0.905      | 0.783        | 0.576 (0.408)    | 0.418 (0.296)    | 1 (0.905) |    24.52 | br0, Jeorge, nitr0, oSee, Sonic  |
|           22 |     1977 | 2026-01-28 | B8                    | W   | 0.891      | 0.783        | 0.182 (0.127)    | 0.211 (0.147)    | 1 (0.891) |    15.07 | br0, Jeorge, nitr0, oSee, Sonic  |
|           21 |     2487 | 2026-01-11 | M80                   | L   | 0.781      | -            | -                | -                | -         |   -12.54 | br0, Jeorge, nitr0, oSee, Sonic  |
|           20 |     2488 | 2026-01-11 | Marsborne             | W   | 0.780      | 0.396        | 0.048 (0.015)    | 0.561 (0.173)    | 1 (0.780) |     7.00 | br0, Jeorge, nitr0, oSee, Sonic  |
|           19 |     2499 | 2026-01-10 | Team Voca             | W   | 0.773      | 0.396        | 0.026 (0.008)    | 0.608 (0.186)    | 1 (0.773) |     9.04 | br0, Jeorge, nitr0, oSee, Sonic  |
|           18 |     2508 | 2026-01-09 | Outfit 49             | W   | 0.768      | 0.396        | -                | 0.354 (0.108)    | 1 (0.768) |     0.52 | br0, Jeorge, nitr0, oSee, Sonic  |
|           17 |     2526 | 2026-01-04 | 9INE                  | W   | 0.735      | 0.323        | 0.049 (0.012)    | 0.668 (0.159)    | 1 (0.735) |    10.34 | br0, Jeorge, nitr0, oSee, Sonic  |
|           16 |     2532 | 2026-01-04 | GamerLegion           | W   | 0.733      | 0.323        | 0.246 (0.058)    | 0.528 (0.125)    | 1 (0.733) |    16.86 | br0, Jeorge, nitr0, oSee, Sonic  |
|           15 |     2543 | 2026-01-04 | Team Voca             | W   | 0.732      | 0.323        | -                | 0.608 (0.144)    | 1 (0.732) |     9.96 | br0, Jeorge, nitr0, oSee, Sonic  |
|           14 |     2582 | 2026-01-03 | Marsborne             | W   | 0.726      | 0.323        | 0.048 (0.011)    | 0.561 (0.131)    | 1 (0.726) |     9.05 | br0, Jeorge, nitr0, oSee, Sonic  |
|           13 |     2588 | 2026-01-03 | Kraken Seas           | W   | 0.725      | -            | -                | -                | 1 (0.725) |     0.13 | br0, Jeorge, nitr0, oSee, Sonic  |
|           12 |     3275 | 2025-11-20 | SkinRave Esports      | W   | 0.435      | -            | -                | -                | -         |     1.10 | br0, Jeorge, nitr0, Sonic, XotiC |
|           11 |     3534 | 2025-11-09 | M80                   | W   | 0.361      | 0.333        | 0.086 (0.010)    | -                | -         |     6.25 | br0, Jeorge, nitr0, Sonic, XotiC |
|           10 |     3541 | 2025-11-09 | BC.Game Esports       | W   | 0.359      | 0.333        | 0.141 (0.017)    | -                | -         |     7.91 | br0, Jeorge, nitr0, Sonic, XotiC |
|            9 |     3550 | 2025-11-09 | Mavrek Gaming         | W   | 0.359      | -            | -                | -                | -         |     0.09 | br0, Jeorge, nitr0, Sonic, XotiC |
|            8 |     3571 | 2025-11-08 | Reign Above           | W   | 0.354      | -            | -                | -                | -         |     0.20 | br0, Jeorge, nitr0, Sonic, XotiC |
|            7 |     3576 | 2025-11-08 | Outfit 49             | W   | 0.354      | -            | -                | -                | -         |     0.13 | br0, Jeorge, nitr0, Sonic, XotiC |
|            6 |     4051 | 2025-10-26 | Marsborne             | W   | 0.267      | -            | -                | -                | -         |     3.93 | br0, Jeorge, nitr0, Sonic, XotiC |
|            5 |     4072 | 2025-10-26 | Team Voca             | W   | 0.266      | -            | -                | -                | -         |     0.32 | br0, Jeorge, nitr0, Sonic, XotiC |
|            4 |     4111 | 2025-10-25 | SapphireKelownaDotCom | W   | 0.260      | -            | -                | -                | -         |     0.05 | br0, Jeorge, nitr0, Sonic, XotiC |
|            3 |     5024 | 2025-09-30 | Fluxo W7M             | L   | 0.092      | -            | -                | -                | -         |    -1.88 | br0, Jeorge, nitr0, Sonic, XotiC |
|            2 |     5064 | 2025-09-29 | Legacy                | L   | 0.085      | -            | -                | -                | -         |    -0.95 | br0, Jeorge, nitr0, Sonic, XotiC |
|            1 |     5109 | 2025-09-28 | GamerLegion           | L   | 0.078      | -            | -                | -                | -         |    -0.46 | br0, Jeorge, nitr0, Sonic, XotiC |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($25,172.42)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-05 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-02-08 |      0.966 | $10,000.00     | $9,655.79       |
| 2026-01-11 |      0.781 | $7,000.00      | $5,469.88       |
| 2026-01-04 |      0.735 | $5,000.00      | $3,674.65       |
| 2025-11-09 |      0.361 | $5,500.00      | $1,985.47       |
| 2025-10-26 |      0.267 | $4,000.00      | $1,068.98       |
| 2025-10-02 |      0.106 | $3,000.00      | $317.64         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
