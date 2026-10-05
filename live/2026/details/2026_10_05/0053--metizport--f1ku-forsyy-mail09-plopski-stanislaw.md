### Roster Details<br />
Team Name: Metizport<br />
Roster: F1KU, forsyy, MaiL09, Plopski, stanislaw<br />
Global Rank: [53](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [41]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1290.3<br />
<br />
Final Rank Value (1290.3) = Starting Rank Value (1306.9) + Head To Head Adjustments (-16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.412[<sup>1</sup>](#table2)
- Bounty Collected: 0.386[<sup>2</sup>](#table1)
- Opponent Network: 0.226[<sup>2</sup>](#table1)
- LAN Wins: 0.791[<sup>2</sup>](#table1)

The average of these factors is 0.454<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1306.9
- 400 + ( ( 0.454 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1306.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      302 | 2026-09-27 | Inner Circle Academy | W   | 1.000      | 0.345        | 0.013 (0.004)    | 0.802 (0.277)    | 1 (1.000) |     6.79 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           42 |      348 | 2026-09-26 | aimclub              | W   | 1.000      | -            | -                | -                | 1 (1.000) |    11.35 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           41 |      427 | 2026-09-25 | HAVU                 | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.05 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           40 |      461 | 2026-09-25 | Optibet              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.09 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           39 |      833 | 2026-09-17 | GamerLegion          | W   | 1.000      | 0.500        | 0.299 (0.149)    | 0.312 (0.156)    | 1 (1.000) |    23.89 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           38 |      837 | 2026-09-17 | M80                  | L   | 1.000      | -            | -                | -                | -         |    -4.83 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           37 |      841 | 2026-09-17 | Ninjas in Pyjamas    | L   | 1.000      | -            | -                | -                | -         |    -7.34 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           36 |      856 | 2026-09-17 | Luminosity           | L   | 1.000      | -            | -                | -                | -         |    -6.07 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           35 |      865 | 2026-09-17 | B8                   | L   | 1.000      | -            | -                | -                | -         |    -4.94 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           34 |      946 | 2026-09-14 | Nemiga               | L   | 1.000      | -            | -                | -                | -         |    -6.07 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           33 |      967 | 2026-09-13 | ex-Zero Tenacity     | W   | 1.000      | 0.384        | 0.037 (0.014)    | 1.000 (0.384)    | -         |     8.03 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           32 |     1091 | 2026-09-11 | Lavked               | W   | 1.000      | 0.384        | -                | 0.664 (0.255)    | -         |     4.94 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           31 |     1373 | 2026-09-05 | 9INE                 | W   | 1.000      | 0.435        | 0.011 (0.005)    | -                | -         |    10.95 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           30 |     1424 | 2026-09-04 | Sashi                | W   | 0.993      | 0.435        | 0.052 (0.023)    | 0.535 (0.231)    | -         |    14.47 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           29 |     1512 | 2026-09-02 | Walczaki             | W   | 0.980      | 0.435        | 0.044 (0.019)    | 0.441 (0.188)    | -         |     6.91 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           28 |     1540 | 2026-09-01 | PCIFIC               | W   | 0.975      | 0.435        | -                | 0.400 (0.169)    | -         |     3.83 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           27 |     1573 | 2026-08-31 | ASTRAL               | L   | 0.968      | -            | -                | -                | -         |   -22.30 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           26 |     1592 | 2026-08-31 | PCIFIC               | W   | 0.966      | 0.435        | -                | 0.400 (0.168)    | -         |     3.11 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           25 |     1758 | 2026-08-28 | Bushido Wildcats     | L   | 0.946      | -            | -                | -                | -         |   -22.77 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           24 |     2006 | 2026-08-20 | OG                   | W   | 0.895      | 0.317        | 0.020 (0.006)    | -                | -         |     5.42 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           23 |     2016 | 2026-08-20 | Color                | W   | 0.893      | 0.317        | 0.054 (0.015)    | 0.732 (0.207)    | -         |     6.76 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           22 |     2039 | 2026-08-19 | Fire Flux            | W   | 0.887      | 0.317        | 0.039 (0.011)    | -                | -         |     2.60 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           21 |     2060 | 2026-08-18 | SPARTA               | W   | 0.881      | 0.317        | -                | 0.788 (0.220)    | -         |     4.35 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           20 |     2078 | 2026-08-18 | DONSTU               | W   | 0.880      | -            | -                | -                | -         |     1.56 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           19 |     2319 | 2026-08-08 | Prestige             | L   | 0.813      | -            | -                | -                | -         |   -23.94 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           18 |     2333 | 2026-08-08 | Liquid               | L   | 0.812      | -            | -                | -                | -         |    -4.11 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           17 |     2353 | 2026-08-07 | Prestige             | W   | 0.807      | -            | -                | -                | 1 (0.807) |     1.46 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           16 |     2479 | 2026-08-03 | Johnny Speeds        | L   | 0.781      | -            | -                | -                | -         |   -19.66 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           15 |     2486 | 2026-08-03 | fnatic               | L   | 0.780      | -            | -                | -                | -         |    -8.07 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           14 |     2492 | 2026-08-03 | Johnny Speeds        | W   | 0.779      | -            | -                | -                | 1 (0.779) |     4.49 | F1KU, forsyy, MaiL09, Plopski, stanislaw |
|           13 |     3552 | 2026-06-14 | Alliance             | L   | 0.448      | -            | -                | -                | -         |    -3.33 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           12 |     3568 | 2026-06-14 | fnatic               | W   | 0.446      | 0.373        | 0.068 (0.011)    | -                | 1 (0.446) |     9.34 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           11 |     3592 | 2026-06-13 | Nexus                | W   | 0.440      | -            | -                | -                | 1 (0.440) |     2.77 | F1KU, forsyy, isak, Plopski, stanislaw   |
|           10 |     3599 | 2026-06-13 | EAC                  | W   | 0.440      | -            | -                | -                | 1 (0.440) |     3.14 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            9 |     3616 | 2026-06-13 | atputies             | W   | 0.438      | -            | -                | -                | -         |     0.10 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            8 |     4328 | 2026-05-21 | Betclic              | L   | 0.288      | -            | -                | -                | -         |    -8.68 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            7 |     4330 | 2026-05-21 | RBLS                 | L   | 0.287      | -            | -                | -                | -         |    -8.64 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            6 |     4337 | 2026-05-21 | OG                   | L   | 0.287      | -            | -                | -                | -         |    -7.93 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            5 |     4367 | 2026-05-21 | Passion UA           | W   | 0.284      | -            | -                | -                | -         |     0.27 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            4 |     5473 | 2026-04-16 | ARCRED               | W   | 0.052      | -            | -                | -                | -         |     0.08 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            3 |     5510 | 2026-04-14 | Phantom              | W   | 0.039      | -            | -                | -                | -         |     0.31 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            2 |     5528 | 2026-04-13 | ex-RUBY              | W   | 0.033      | -            | -                | -                | -         |     0.05 | F1KU, forsyy, isak, Plopski, stanislaw   |
|            1 |     5570 | 2026-04-11 | Basement Bobs        | W   | 0.019      | -            | -                | -                | -         |     0.00 | F1KU, forsyy, isak, Plopski, stanislaw   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,874.66)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-27 |      1.000 | $6,887.00      | $6,887.00       |
| 2026-09-23 |      1.000 | $1,750.00      | $1,750.00       |
| 2026-09-14 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-08-20 |      0.895 | $4,000.00      | $3,578.75       |
| 2026-08-05 |      0.794 | $1,000.00      | $794.34         |
| 2026-06-14 |      0.448 | $4,000.00      | $1,791.56       |
| 2026-04-16 |      0.052 | $11,000.00     | $573.01         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
