### Roster Details<br />
Team Name: OG<br />
Roster: adamb, arrozdoce, cadiaN, FL4MUS, spooke<br />
Global Rank: [89](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [66]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  994.4<br />
<br />
Final Rank Value (994.4) = Starting Rank Value (910.9) + Head To Head Adjustments (83.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.431[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.063[<sup>2</sup>](#table1)
- LAN Wins: 0.264[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 910.9
- 400 + ( ( 0.270 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 910.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.221
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      847 | 2026-02-11 | Alliance          | L   | 1.000      | -            | -                | -                | -         |    -5.37 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           32 |      866 | 2026-02-10 | Team Nemesis      | W   | 1.000      | 0.143        | 0.037 (0.005)    | 0.784 (0.112)    | -         |    23.73 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           31 |      888 | 2026-02-10 | Fnatic            | L   | 1.000      | -            | -                | -                | -         |    -5.60 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           30 |      924 | 2026-02-08 | Phantom Esports   | W   | 1.000      | 0.143        | -                | 0.498 (0.071)    | -         |    22.66 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           29 |      932 | 2026-02-08 | Metizport         | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.475 (0.068)    | -         |    17.63 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           28 |     1739 | 2026-01-13 | FUT Esports       | L   | 0.879      | -            | -                | -                | -         |    -0.97 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           27 |     2031 | 2025-12-12 | SIXSEVEN          | L   | 0.666      | -            | -                | -                | -         |   -10.48 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           26 |     2263 | 2025-11-30 | Monte             | L   | 0.585      | -            | -                | -                | -         |    -1.81 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           25 |     2284 | 2025-11-29 | KOLESIE           | W   | 0.580      | 0.333        | 0.088 (0.017)    | 0.720 (0.139)    | 1 (0.580) |    14.92 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           24 |     2303 | 2025-11-29 | Infinite Gaming   | W   | 0.579      | -            | -                | -                | 1 (0.579) |     2.54 | adamb, arrozdoce, cadiaN, FL4MUS, spooke   |
|           23 |     3652 | 2025-10-16 | 9z Team           | L   | 0.285      | -            | -                | -                | -         |    -5.26 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           22 |     3697 | 2025-10-15 | FURIA             | L   | 0.278      | -            | -                | -                | -         |    -0.04 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           21 |     3954 | 2025-10-07 | Team Nemesis      | L   | 0.227      | -            | -                | -                | -         |    -0.85 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           20 |     4067 | 2025-10-05 | ECSTATIC          | W   | 0.215      | 0.333        | 0.143 (0.010)    | 0.700 (0.050)    | 1 (0.215) |     6.23 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           19 |     4085 | 2025-10-05 | Fnatic            | L   | 0.213      | -            | -                | -                | -         |    -0.75 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           18 |     4119 | 2025-10-04 | Wildcard          | W   | 0.208      | -            | -                | -                | 1 (0.208) |     1.51 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           17 |     4134 | 2025-10-04 | SkinRave Esports  | W   | 0.206      | 0.333        | -                | 0.376 (0.026)    | 1 (0.206) |     2.49 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           16 |     4287 | 2025-09-30 | BIG               | L   | 0.179      | -            | -                | -                | -         |    -0.49 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           15 |     4288 | 2025-09-30 | Alliance          | W   | 0.179      | 0.323        | 0.124 (0.007)    | 0.943 (0.054)    | 1 (0.179) |     5.07 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           14 |     4305 | 2025-09-30 | MOUZ NXT          | L   | 0.178      | -            | -                | -                | -         |    -0.58 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           13 |     4345 | 2025-09-28 | Passion UA        | W   | 0.167      | 0.339        | 0.120 (0.007)    | 0.479 (0.027)    | 1 (0.167) |     4.62 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           12 |     4408 | 2025-09-27 | BASEMENT BOYS     | W   | 0.160      | -            | -                | -                | 1 (0.160) |     1.09 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           11 |     4456 | 2025-09-26 | ECSTATIC          | W   | 0.154      | 0.339        | 0.143 (0.007)    | 0.700 (0.036)    | 1 (0.154) |     4.50 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|           10 |     4482 | 2025-09-26 | SINNERS Esports   | W   | 0.151      | 0.339        | 0.248 (0.013)    | 0.891 (0.046)    | 1 (0.151) |     4.43 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            9 |     4515 | 2025-09-25 | AM Gaming         | W   | 0.146      | -            | -                | -                | -         |     2.84 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            8 |     4678 | 2025-09-19 | B8                | L   | 0.105      | -            | -                | -                | -         |    -0.24 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            7 |     4706 | 2025-09-18 | Ninjas in Pyjamas | L   | 0.099      | -            | -                | -                | -         |    -0.33 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            6 |     4873 | 2025-09-13 | HOTU              | L   | 0.067      | -            | -                | -                | -         |    -0.13 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            5 |     4922 | 2025-09-12 | Tricked Esport    | W   | 0.060      | -            | -                | -                | -         |     0.16 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            4 |     4968 | 2025-09-11 | BC.Game Esports   | L   | 0.054      | -            | -                | -                | -         |    -1.13 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            3 |     4979 | 2025-09-11 | BIG               | W   | 0.053      | 0.729        | 0.142 (0.005)    | -                | -         |     1.54 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            2 |     5037 | 2025-09-10 | M80               | W   | 0.046      | 0.729        | 0.109 (0.004)    | -                | -         |     1.30 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |
|            1 |     5070 | 2025-09-09 | AaB esport        | W   | 0.040      | -            | -                | -                | -         |     0.32 | adamb, arrozdoce, Chr1zN, nicoodoz, spooke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,993.17)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-18 |      0.914 | $7,500.00      | $6,854.34       |
| 2025-11-30 |      0.586 | $1,000.00      | $586.04         |
| 2025-10-19 |      0.307 | $20,000.00     | $6,132.87       |
| 2025-10-05 |      0.215 | $1,300.00      | $280.13         |
| 2025-09-28 |      0.167 | $5,617.22      | $939.32         |
| 2025-09-21 |      0.120 | $10,000.00     | $1,200.46       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
