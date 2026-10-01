### Roster Details<br />
Team Name: FaZe<br />
Roster: frozen, JBOEN, jcobbb, Neityu, Twistzz<br />
Global Rank: [10](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [7]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1598.7<br />
<br />
Final Rank Value (1598.7) = Starting Rank Value (1615.1) + Head To Head Adjustments (-16.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.757[<sup>1</sup>](#table2)
- Bounty Collected: 0.643[<sup>2</sup>](#table1)
- Opponent Network: 0.300[<sup>2</sup>](#table1)
- LAN Wins: 0.854[<sup>2</sup>](#table1)

The average of these factors is 0.639<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1615.1
- 400 + ( ( 0.639 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1615.1


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
|           39 |      642 | 2026-08-20 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -6.66 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           38 |      832 | 2026-08-13 | Legacy            | W   | 1.000      | 1.000        | 1.000 (1.000)    | 0.456 (0.456)    | 1 (1.000) |    22.54 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           37 |      858 | 2026-08-12 | BETBOOM           | W   | 1.000      | 1.000        | 0.252 (0.252)    | 0.358 (0.358)    | 1 (1.000) |    13.65 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           36 |     1178 | 2026-08-01 | Spirit            | L   | 0.950      | -            | -                | -                | -         |    -2.32 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           35 |     1210 | 2026-07-31 | The MongolZ       | W   | 0.944      | 0.884        | 0.352 (0.294)    | 0.293 (0.245)    | 1 (0.944) |    10.41 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           34 |     1415 | 2026-07-25 | DENDELE           | W   | 0.904      | 0.903        | 0.130 (0.106)    | 0.409 (0.333)    | -         |     7.41 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           33 |     1506 | 2026-07-22 | EYEBALLERS        | W   | 0.883      | 0.903        | 0.108 (0.086)    | 0.330 (0.263)    | -         |     5.33 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           32 |     1754 | 2026-07-11 | PARIVISION        | L   | 0.812      | -            | -                | -                | -         |   -16.03 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           31 |     1773 | 2026-07-10 | BETBOOM           | W   | 0.804      | 1.000        | 0.252 (0.203)    | 0.358 (0.288)    | 1 (0.804) |    12.14 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           30 |     1834 | 2026-07-05 | EYEBALLERS        | W   | 0.771      | 1.000        | -                | 0.330 (0.255)    | 1 (0.771) |     4.80 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           29 |     1851 | 2026-07-04 | 3DMAX             | W   | 0.764      | 1.000        | 0.301 (0.230)    | 0.389 (0.297)    | 1 (0.764) |     4.46 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           28 |     1867 | 2026-07-03 | SINNERS           | W   | 0.757      | 1.000        | -                | 0.477 (0.361)    | 1 (0.757) |     1.63 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           27 |     1895 | 2026-07-02 | MIBR              | L   | 0.750      | -            | -                | -                | -         |   -15.66 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           26 |     1916 | 2026-07-01 | TYLOO             | L   | 0.743      | -            | -                | -                | -         |   -18.05 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           25 |     2582 | 2026-05-30 | Ninjas in Pyjamas | L   | 0.531      | -            | -                | -                | -         |   -13.48 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           24 |     2599 | 2026-05-29 | DENDELE           | W   | 0.526      | -            | -                | -                | 1 (0.526) |     3.56 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           23 |     2619 | 2026-05-29 | 9z                | W   | 0.524      | 0.500        | 0.653 (0.171)    | -                | 1 (0.524) |    10.19 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           22 |     2647 | 2026-05-28 | magic             | L   | 0.519      | -            | -                | -                | -         |   -12.38 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           21 |     2702 | 2026-05-27 | Alliance          | W   | 0.511      | -            | -                | -                | 1 (0.511) |     4.19 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           20 |     3184 | 2026-05-13 | Vitality          | L   | 0.418      | -            | -                | -                | -         |    -1.96 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           19 |     3225 | 2026-05-12 | NRG               | W   | 0.411      | 1.000        | -                | 0.358 (0.147)    | -         |     1.02 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           18 |     3264 | 2026-05-11 | paiN              | L   | 0.405      | -            | -                | -                | -         |   -10.54 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           17 |     3492 | 2026-05-02 | Natus Vincere     | L   | 0.345      | -            | -                | -                | -         |    -5.81 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           16 |     3532 | 2026-05-01 | G2                | W   | 0.340      | 1.000        | 0.538 (0.183)    | -                | -         |     7.36 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           15 |     3585 | 2026-04-30 | FURIA             | W   | 0.333      | 1.000        | 0.779 (0.259)    | -                | -         |     7.80 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           14 |     3633 | 2026-04-29 | Natus Vincere     | L   | 0.326      | -            | -                | -                | -         |    -5.47 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           13 |     4339 | 2026-04-06 | Inner Circle      | L   | 0.171      | -            | -                | -                | -         |    -3.19 | broky, frozen, jcobbb, karrigan, Twistzz |
|           12 |     4364 | 2026-04-05 | BIG               | L   | 0.166      | -            | -                | -                | -         |    -2.76 | broky, frozen, jcobbb, karrigan, Twistzz |
|           11 |     4377 | 2026-04-05 | illwill           | W   | 0.165      | -            | -                | -                | -         |     0.05 | broky, frozen, jcobbb, karrigan, Twistzz |
|           10 |     4405 | 2026-04-05 | CYBERSHOKE        | W   | 0.163      | -            | -                | -                | -         |     0.07 | broky, frozen, jcobbb, karrigan, Twistzz |
|            9 |     4412 | 2026-04-04 | Wildcard          | L   | 0.162      | -            | -                | -                | -         |    -4.82 | broky, frozen, jcobbb, karrigan, Twistzz |
|            8 |     4490 | 2026-04-04 | EYEBALLERS        | L   | 0.155      | -            | -                | -                | -         |    -4.18 | broky, frozen, jcobbb, karrigan, Twistzz |
|            7 |     4555 | 2026-04-03 | Drama             | W   | 0.150      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|            6 |     4568 | 2026-04-03 | BEE               | W   | 0.149      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|            5 |     4800 | 2026-03-31 | fnatic            | L   | 0.132      | -            | -                | -                | -         |    -3.24 | broky, frozen, jcobbb, karrigan, Twistzz |
|            4 |     4825 | 2026-03-31 | Passion UA        | L   | 0.131      | -            | -                | -                | -         |    -4.07 | broky, frozen, jcobbb, karrigan, Twistzz |
|            3 |     4900 | 2026-03-30 | aimclub           | W   | 0.124      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|            2 |     5512 | 2026-03-20 | TYLOO             | L   | 0.058      | -            | -                | -                | -         |    -1.50 | broky, frozen, jcobbb, karrigan, Twistzz |
|            1 |     5583 | 2026-03-18 | Aurora            | L   | 0.046      | -            | -                | -                | -         |    -0.87 | broky, frozen, jcobbb, karrigan, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($241,861.13)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.48) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-23 |      1.000 | $35,000.00     | $35,000.00      |
| 2026-08-02 |      0.957 | $68,125.00     | $65,224.01      |
| 2026-07-12 |      0.817 | $90,000.00     | $73,487.55      |
| 2026-05-30 |      0.532 | $13,500.00     | $7,180.53       |
| 2026-05-17 |      0.446 | $20,000.00     | $8,919.97       |
| 2026-05-03 |      0.352 | $130,000.00    | $45,816.83      |
| 2026-04-11 |      0.205 | $12,500.00     | $2,562.23       |
| 2026-04-05 |      0.166 | $8,000.00      | $1,326.31       |
| 2026-03-29 |      0.117 | $20,000.00     | $2,343.70       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
