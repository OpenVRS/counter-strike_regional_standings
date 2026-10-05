### Roster Details<br />
Team Name: QUAZAR<br />
Roster: gehji, kaiori, Ne1XXX, newt, Porya<br />
Global Rank: [89](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [65]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1080.4<br />
<br />
Final Rank Value (1080.4) = Starting Rank Value (992.8) + Head To Head Adjustments (87.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.277[<sup>2</sup>](#table1)
- LAN Wins: 0.201[<sup>2</sup>](#table1)

The average of these factors is 0.297<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 992.8
- 400 + ( ( 0.297 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 992.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      345 | 2026-09-26 | SINNERS          | L   | 1.000      | -            | -                | -                | -         |    -5.67 | gehji, kaiori, Ne1XXX, newt, Porya |
|           35 |      454 | 2026-09-25 | Butterfly        | L   | 1.000      | -            | -                | -                | -         |   -16.24 | gehji, kaiori, Ne1XXX, newt, Porya |
|           34 |      609 | 2026-09-23 | Misa             | L   | 1.000      | -            | -                | -                | -         |   -24.37 | gehji, kaiori, Ne1XXX, newt, Porya |
|           33 |      693 | 2026-09-21 | Black Phoenix    | W   | 1.000      | 0.396        | 0.035 (0.014)    | 1.000 (0.396)    | 0 (0.000) |    12.61 | gehji, kaiori, Ne1XXX, newt, Porya |
|           32 |      711 | 2026-09-20 | G2 Ares          | W   | 1.000      | 0.384        | 0.010 (0.004)    | 0.731 (0.281)    | 0 (0.000) |     8.19 | gehji, kaiori, Ne1XXX, newt, Porya |
|           31 |      748 | 2026-09-19 | Drama            | W   | 1.000      | 0.396        | -                | 0.627 (0.249)    | 0 (0.000) |     6.14 | gehji, kaiori, Ne1XXX, newt, Porya |
|           30 |      787 | 2026-09-18 | NAVI Junior      | W   | 1.000      | 0.384        | -                | 0.546 (0.210)    | 0 (0.000) |    11.61 | gehji, kaiori, Ne1XXX, newt, Porya |
|           29 |      859 | 2026-09-17 | BRUTE            | L   | 1.000      | -            | -                | -                | -         |   -13.37 | gehji, kaiori, Ne1XXX, newt, Porya |
|           28 |      881 | 2026-09-16 | ex-RUSTEC        | W   | 1.000      | 0.396        | 0.025 (0.010)    | 0.778 (0.308)    | 0 (0.000) |    13.35 | gehji, kaiori, Ne1XXX, newt, Porya |
|           27 |      915 | 2026-09-15 | Banda Chuya      | W   | 1.000      | 0.384        | 0.013 (0.005)    | 0.727 (0.280)    | 0 (0.000) |     5.35 | gehji, kaiori, Ne1XXX, newt, Porya |
|           26 |     1379 | 2026-09-05 | INFINITE         | L   | 1.000      | -            | -                | -                | -         |    -6.24 | gehji, kaiori, Ne1XXX, newt, Porya |
|           25 |     1442 | 2026-09-04 | SINNERS          | W   | 0.992      | 0.435        | 0.106 (0.046)    | 0.705 (0.304)    | 0 (0.000) |    24.33 | gehji, kaiori, Ne1XXX, newt, Porya |
|           24 |     1460 | 2026-09-03 | Omega            | W   | 0.988      | 0.435        | 0.037 (0.016)    | -                | -         |    19.45 | gehji, kaiori, Ne1XXX, newt, Porya |
|           23 |     1779 | 2026-08-27 | BASEMENT BOYS    | W   | 0.941      | 0.435        | 0.020 (0.008)    | 0.735 (0.301)    | -         |    17.12 | gehji, kaiori, Ne1XXX, newt, Porya |
|           22 |     1789 | 2026-08-27 | EAC              | W   | 0.940      | 0.435        | 0.019 (0.008)    | 0.596 (0.244)    | -         |    16.13 | gehji, kaiori, Ne1XXX, newt, Porya |
|           21 |     1913 | 2026-08-24 | Nemiga           | L   | 0.920      | -            | -                | -                | -         |    -2.01 | gehji, kaiori, Ne1XXX, newt, Porya |
|           20 |     2753 | 2026-07-26 | NEW VISION       | L   | 0.727      | -            | -                | -                | -         |   -21.09 | gehji, kaiori, Ne1XXX, newt, Porya |
|           19 |     2869 | 2026-07-22 | SAW Youngsters   | W   | 0.701      | -            | -                | -                | -         |     6.60 | gehji, kaiori, Ne1XXX, newt, Porya |
|           18 |     2899 | 2026-07-21 | Enjoy            | W   | 0.694      | -            | -                | -                | -         |     4.68 | gehji, kaiori, Ne1XXX, newt, Porya |
|           17 |     2968 | 2026-07-18 | PsychoFace       | L   | 0.673      | -            | -                | -                | -         |   -15.85 | gehji, kaiori, Ne1XXX, newt, Porya |
|           16 |     2973 | 2026-07-18 | Just Players     | W   | 0.673      | -            | -                | -                | 1 (0.673) |     8.54 | gehji, kaiori, Ne1XXX, newt, Porya |
|           15 |     2989 | 2026-07-17 | Wingman          | W   | 0.669      | -            | -                | -                | 1 (0.669) |     1.25 | gehji, kaiori, Ne1XXX, newt, Porya |
|           14 |     2994 | 2026-07-17 | Enjoy            | W   | 0.668      | -            | -                | -                | 1 (0.668) |     4.57 | gehji, kaiori, Ne1XXX, newt, Porya |
|           13 |     3002 | 2026-07-17 | Spirit Academy   | L   | 0.667      | -            | -                | -                | -         |   -13.32 | gehji, kaiori, Ne1XXX, newt, Porya |
|           12 |     3070 | 2026-07-14 | BRUTE            | W   | 0.647      | -            | -                | -                | -         |    14.85 | gehji, kaiori, Ne1XXX, newt, Porya |
|           11 |     3075 | 2026-07-14 | HOTU             | L   | 0.646      | -            | -                | -                | -         |    -2.06 | gehji, kaiori, Ne1XXX, newt, Porya |
|           10 |     3083 | 2026-07-13 | Bushido Wildcats | W   | 0.641      | 0.317        | 0.027 (0.006)    | 1.000 (0.203)    | -         |    10.39 | gehji, kaiori, Ne1XXX, newt, Porya |
|            9 |     3086 | 2026-07-13 | The Last Resort  | W   | 0.640      | -            | -                | -                | -         |     9.75 | gehji, kaiori, Ne1XXX, newt, Porya |
|            8 |     3097 | 2026-07-12 | Misa             | W   | 0.635      | -            | -                | -                | -         |     5.22 | gehji, kaiori, Ne1XXX, newt, Porya |
|            7 |     3117 | 2026-07-12 | The Last Resort  | L   | 0.633      | -            | -                | -                | -         |   -10.32 | gehji, kaiori, Ne1XXX, newt, Porya |
|            6 |     3451 | 2026-06-21 | Fire Flux        | W   | 0.495      | 0.400        | 0.039 (0.008)    | -                | -         |     4.66 | gehji, kaiori, Ne1XXX, newt, Porya |
|            5 |     3466 | 2026-06-20 | Lilmix           | W   | 0.488      | -            | -                | -                | -         |     4.50 | gehji, kaiori, Ne1XXX, newt, Porya |
|            4 |     3489 | 2026-06-19 | Hermine          | W   | 0.480      | -            | -                | -                | -         |     0.98 | gehji, kaiori, Ne1XXX, newt, Porya |
|            3 |     3802 | 2026-06-05 | Lilmix           | W   | 0.387      | -            | -                | -                | -         |     3.48 | gehji, kaiori, Ne1XXX, newt, Porya |
|            2 |     3841 | 2026-06-03 | Falcons Force    | W   | 0.374      | -            | -                | -                | -         |     3.51 | gehji, kaiori, Ne1XXX, newt, Porya |
|            1 |     3888 | 2026-06-01 | eternal premium  | W   | 0.361      | -            | -                | -                | -         |     0.90 | gehji, kaiori, Ne1XXX, newt, Porya |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,570.78)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-18 |      0.674 | $750.00        | $505.62         |
| 2026-07-14 |      0.647 | $1,000.00      | $646.88         |
| 2026-06-21 |      0.495 | $15,000.00     | $7,418.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
