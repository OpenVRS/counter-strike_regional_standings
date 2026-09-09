### Roster Details<br />
Team Name: los kogutos<br />
Roster: AdrieN, maaryy, Markoś, Nami, yvro<br />
Global Rank: [231](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [160]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  666.1<br />
<br />
Final Rank Value (666.1) = Starting Rank Value (688.2) + Head To Head Adjustments (-22.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.281[<sup>1</sup>](#table2)
- Bounty Collected: 0.224[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.086[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 688.2
- 400 + ( ( 0.151 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 688.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |     1393 | 2026-07-26 | megoshort       | L   | 0.906      | -            | -                | -                | -         |   -14.18 | AdrieN, hotd0g, maaryy, Markoś, Melavi |
|           33 |     3191 | 2026-05-14 | Lavked          | L   | 0.418      | -            | -                | -                | -         |    -2.35 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           32 |     3938 | 2026-04-24 | Clutchain       | L   | 0.286      | -            | -                | -                | -         |    -6.79 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           31 |     3939 | 2026-04-24 | MASONIC         | L   | 0.286      | -            | -                | -                | -         |    -2.28 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           30 |     4044 | 2026-04-20 | brazylijski luz | L   | 0.259      | -            | -                | -                | -         |    -4.26 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           29 |     4050 | 2026-04-20 | RBLS            | W   | 0.257      | 0.341        | 0.003 (0.000)    | 0.207 (0.018)    | 1 (0.257) |     5.51 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           28 |     4057 | 2026-04-19 | XI              | W   | 0.253      | 0.341        | 0.001 (0.000)    | 0.079 (0.007)    | 1 (0.253) |     3.23 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           27 |     4062 | 2026-04-19 | brazylijski luz | L   | 0.252      | -            | -                | -                | -         |    -4.15 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           26 |     4066 | 2026-04-19 | Young Ninjas    | L   | 0.252      | -            | -                | -                | -         |    -4.61 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           25 |     4078 | 2026-04-19 | Phantom Academy | W   | 0.251      | 0.341        | 0.002 (0.000)    | -                | 1 (0.251) |     2.35 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           24 |     4133 | 2026-04-15 | Sashi           | L   | 0.226      | -            | -                | -                | -         |    -0.31 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           23 |     4193 | 2026-04-12 | ECSTATIC        | W   | 0.206      | 0.363        | 0.002 (0.000)    | -                | 0 (0.000) |     2.88 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           22 |     4319 | 2026-04-07 | INOX Division   | L   | 0.173      | -            | -                | -                | -         |    -1.13 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           21 |     4356 | 2026-04-06 | ex-MANA         | W   | 0.167      | 0.384        | 0.004 (0.000)    | 0.549 (0.035)    | 0 (0.000) |     3.11 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           20 |     4496 | 2026-04-04 | megoshort       | L   | 0.151      | -            | -                | -                | -         |    -3.48 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           19 |     4544 | 2026-04-03 | Just Players    | W   | 0.147      | 0.384        | -                | 0.061 (0.003)    | 0 (0.000) |     1.85 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           18 |     4581 | 2026-04-03 | ex-RUBY         | L   | 0.145      | -            | -                | -                | -         |    -2.64 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           17 |     4730 | 2026-04-01 | HEROIC Academy  | W   | 0.133      | 0.384        | 0.001 (0.000)    | 0.144 (0.007)    | 0 (0.000) |     2.03 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           16 |     4747 | 2026-04-01 | Persona Grata   | L   | 0.133      | -            | -                | -                | -         |    -3.14 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           15 |     4913 | 2026-03-30 | yngods          | W   | 0.120      | -            | -                | -                | 0 (0.000) |     1.00 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           14 |     4939 | 2026-03-30 | Persona Grata   | L   | 0.118      | -            | -                | -                | -         |    -2.81 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           13 |     4991 | 2026-03-29 | Rune Eaters     | W   | 0.113      | 0.435        | 0.024 (0.001)    | 0.767 (0.038)    | 0 (0.000) |     3.34 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           12 |     5100 | 2026-03-28 | Hashiras        | W   | 0.105      | 0.435        | -                | 0.164 (0.008)    | 0 (0.000) |     1.54 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           11 |     5188 | 2026-03-26 | PsychoFace      | L   | 0.093      | -            | -                | -                | -         |    -0.60 | AdrieN, maaryy, Markoś, Nami, yvro     |
|           10 |     5245 | 2026-03-25 | STATE           | L   | 0.085      | -            | -                | -                | -         |    -0.44 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            9 |     5348 | 2026-03-23 | TDK             | L   | 0.073      | -            | -                | -                | -         |    -1.25 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            8 |     5413 | 2026-03-22 | ex-RUBY         | W   | 0.067      | -            | -                | -                | -         |     0.89 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            7 |     5424 | 2026-03-22 | Omega           | W   | 0.065      | 0.435        | 0.027 (0.001)    | 0.395 (0.011)    | -         |     1.98 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            6 |     5455 | 2026-03-21 | STATE           | W   | 0.060      | 0.384        | 0.013 (0.000)    | 0.283 (0.007)    | -         |     1.60 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            5 |     5527 | 2026-03-20 | ENCE            | W   | 0.053      | 0.384        | 0.012 (0.000)    | 0.511 (0.010)    | -         |     1.37 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            4 |     5563 | 2026-03-19 | Black Phoenix   | L   | 0.047      | -            | -                | -                | -         |    -0.38 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            3 |     5660 | 2026-03-17 | IDoPieca        | W   | 0.033      | -            | -                | -                | -         |     0.25 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            2 |     5803 | 2026-03-14 | Sangal          | L   | 0.012      | -            | -                | -                | -         |    -0.19 | AdrieN, maaryy, Markoś, Nami, yvro     |
|            1 |     5887 | 2026-03-12 | ex-RUBY         | L   | 0.000      | -            | -                | -                | -         |    -0.01 | AdrieN, maaryy, Markoś, Nami, yvro     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,393.31)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-15 |      0.426 | $1,250.00      | $532.80         |
| 2026-04-20 |      0.260 | $1,767.00      | $458.76         |
| 2026-04-09 |      0.187 | $1,750.00      | $326.72         |
| 2026-03-27 |      0.100 | $750.00        | $75.04          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
