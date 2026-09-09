### Roster Details<br />
Team Name: FaZe<br />
Roster: frozen, JBOEN, jcobbb, Neityu, Twistzz<br />
Global Rank: [10](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [7]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1597.6<br />
<br />
Final Rank Value (1597.6) = Starting Rank Value (1613.3) + Head To Head Adjustments (-15.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.757[<sup>1</sup>](#table2)
- Bounty Collected: 0.642[<sup>2</sup>](#table1)
- Opponent Network: 0.297[<sup>2</sup>](#table1)
- LAN Wins: 0.853[<sup>2</sup>](#table1)

The average of these factors is 0.637<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1613.3
- 400 + ( ( 0.637 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1613.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      670 | 2026-08-20 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -6.63 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           38 |      860 | 2026-08-13 | Legacy            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.454 (0.454)    | 1 (1.000) |    22.62 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           37 |      886 | 2026-08-12 | BETBOOM           | W   | 1.000      | 1.000        | 0.252 (0.252)    | 0.355 (0.355)    | 1 (1.000) |    13.57 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           36 |     1206 | 2026-08-01 | Spirit            | L   | 0.945      | -            | -                | -                | -         |    -2.29 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           35 |     1238 | 2026-07-31 | The MongolZ       | W   | 0.939      | 0.884        | 0.350 (0.290)    | 0.292 (0.242)    | 1 (0.939) |    10.28 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           34 |     1443 | 2026-07-25 | DENDELE           | W   | 0.898      | 0.903        | 0.130 (0.106)    | 0.407 (0.330)    | -         |     7.33 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           33 |     1534 | 2026-07-22 | EYEBALLERS        | W   | 0.878      | 0.903        | 0.107 (0.085)    | 0.327 (0.259)    | -         |     5.27 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           32 |     1782 | 2026-07-11 | PARIVISION        | L   | 0.806      | -            | -                | -                | -         |   -15.99 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           31 |     1801 | 2026-07-10 | BETBOOM           | W   | 0.799      | 1.000        | 0.252 (0.201)    | 0.355 (0.283)    | 1 (0.799) |    11.97 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           30 |     1862 | 2026-07-05 | EYEBALLERS        | W   | 0.766      | 1.000        | -                | 0.327 (0.251)    | 1 (0.766) |     4.73 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           29 |     1879 | 2026-07-04 | 3DMAX             | W   | 0.759      | 1.000        | 0.301 (0.228)    | 0.387 (0.294)    | 1 (0.759) |     4.39 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           28 |     1895 | 2026-07-03 | SINNERS           | W   | 0.752      | 1.000        | -                | 0.475 (0.357)    | 1 (0.752) |     1.59 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           27 |     1923 | 2026-07-02 | MIBR              | L   | 0.744      | -            | -                | -                | -         |   -15.60 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           26 |     1944 | 2026-07-01 | TYLOO             | L   | 0.737      | -            | -                | -                | -         |   -17.96 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           25 |     2610 | 2026-05-30 | Ninjas in Pyjamas | L   | 0.525      | -            | -                | -                | -         |   -13.36 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           24 |     2627 | 2026-05-29 | DENDELE           | W   | 0.520      | -            | -                | -                | 1 (0.520) |     3.50 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           23 |     2647 | 2026-05-29 | 9z                | W   | 0.518      | 0.500        | 0.653 (0.169)    | -                | 1 (0.518) |    10.05 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           22 |     2675 | 2026-05-28 | magic             | L   | 0.514      | -            | -                | -                | -         |   -12.28 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           21 |     2730 | 2026-05-27 | Alliance          | W   | 0.506      | -            | -                | -                | 1 (0.506) |     4.16 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           20 |     3212 | 2026-05-13 | Vitality          | L   | 0.413      | -            | -                | -                | -         |    -1.93 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           19 |     3253 | 2026-05-12 | NRG               | W   | 0.406      | 1.000        | -                | 0.356 (0.145)    | -         |     1.00 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           18 |     3292 | 2026-05-11 | paiN              | L   | 0.399      | -            | -                | -                | -         |   -10.42 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           17 |     3520 | 2026-05-02 | Natus Vincere     | L   | 0.340      | -            | -                | -                | -         |    -5.76 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           16 |     3560 | 2026-05-01 | G2                | W   | 0.334      | 1.000        | 0.539 (0.180)    | -                | -         |     7.25 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           15 |     3613 | 2026-04-30 | FURIA             | W   | 0.328      | 1.000        | 0.779 (0.255)    | -                | -         |     7.68 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           14 |     3661 | 2026-04-29 | Natus Vincere     | L   | 0.321      | -            | -                | -                | -         |    -5.42 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           13 |     4367 | 2026-04-06 | Inner Circle      | L   | 0.165      | -            | -                | -                | -         |    -3.09 | broky, frozen, jcobbb, karrigan, Twistzz |
|           12 |     4392 | 2026-04-05 | BIG               | L   | 0.160      | -            | -                | -                | -         |    -2.67 | broky, frozen, jcobbb, karrigan, Twistzz |
|           11 |     4405 | 2026-04-05 | illwill           | W   | 0.159      | -            | -                | -                | -         |     0.05 | broky, frozen, jcobbb, karrigan, Twistzz |
|           10 |     4433 | 2026-04-05 | CYBERSHOKE        | W   | 0.157      | -            | -                | -                | -         |     0.07 | broky, frozen, jcobbb, karrigan, Twistzz |
|            9 |     4440 | 2026-04-04 | Wildcard          | L   | 0.156      | -            | -                | -                | -         |    -4.66 | broky, frozen, jcobbb, karrigan, Twistzz |
|            8 |     4518 | 2026-04-04 | EYEBALLERS        | L   | 0.150      | -            | -                | -                | -         |    -4.03 | broky, frozen, jcobbb, karrigan, Twistzz |
|            7 |     4583 | 2026-04-03 | Drama             | W   | 0.145      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|            6 |     4596 | 2026-04-03 | BEE               | W   | 0.144      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|            5 |     4828 | 2026-03-31 | fnatic            | L   | 0.126      | -            | -                | -                | -         |    -3.09 | broky, frozen, jcobbb, karrigan, Twistzz |
|            4 |     4853 | 2026-03-31 | Passion UA        | L   | 0.125      | -            | -                | -                | -         |    -3.90 | broky, frozen, jcobbb, karrigan, Twistzz |
|            3 |     4928 | 2026-03-30 | aimclub           | W   | 0.119      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|            2 |     5540 | 2026-03-20 | TYLOO             | L   | 0.052      | -            | -                | -                | -         |    -1.36 | broky, frozen, jcobbb, karrigan, Twistzz |
|            1 |     5611 | 2026-03-18 | Aurora            | L   | 0.040      | -            | -                | -                | -         |    -0.77 | broky, frozen, jcobbb, karrigan, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($239,881.96)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $35,000.00     | $35,000.00      |
| 2026-08-02 |      0.952 | $68,125.00     | $64,851.68      |
| 2026-07-12 |      0.811 | $90,000.00     | $72,995.66      |
| 2026-05-30 |      0.526 | $13,500.00     | $7,106.75       |
| 2026-05-17 |      0.441 | $20,000.00     | $8,810.66       |
| 2026-05-03 |      0.347 | $130,000.00    | $45,106.33      |
| 2026-04-11 |      0.200 | $12,500.00     | $2,493.91       |
| 2026-04-05 |      0.160 | $8,000.00      | $1,282.58       |
| 2026-03-29 |      0.112 | $20,000.00     | $2,234.39       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
