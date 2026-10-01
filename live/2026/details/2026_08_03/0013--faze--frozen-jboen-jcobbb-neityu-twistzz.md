### Roster Details<br />
Team Name: FaZe<br />
Roster: frozen, JBOEN, jcobbb, Neityu, Twistzz<br />
Global Rank: [13](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [10]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1677.0<br />
<br />
Final Rank Value (1677.0) = Starting Rank Value (1777.9) + Head To Head Adjustments (-100.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.801[<sup>1</sup>](#table2)
- Bounty Collected: 0.628[<sup>2</sup>](#table1)
- Opponent Network: 0.429[<sup>2</sup>](#table1)
- LAN Wins: 0.987[<sup>2</sup>](#table1)

The average of these factors is 0.712<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1777.9
- 400 + ( ( 0.712 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1777.9


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
|           44 |       34 | 2026-08-01 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -3.84 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           43 |       58 | 2026-07-31 | The MongolZ       | W   | 1.000      | 0.884        | 0.492 (0.435)    | 0.447 (0.396)    | 1 (1.000) |    14.44 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           42 |      217 | 2026-07-25 | DENDELE           | W   | 1.000      | 0.903        | -                | 0.609 (0.549)    | -         |     7.14 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           41 |      299 | 2026-07-22 | EYEBALLERS        | W   | 1.000      | 0.903        | 0.141 (0.127)    | 0.385 (0.347)    | -         |     5.73 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           40 |      547 | 2026-07-11 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -14.58 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           39 |      566 | 2026-07-10 | BetBoom           | W   | 1.000      | 1.000        | 0.335 (0.335)    | 0.706 (0.706)    | 1 (1.000) |    19.81 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           38 |      627 | 2026-07-05 | EYEBALLERS        | W   | 1.000      | 1.000        | 0.141 (0.141)    | 0.385 (0.385)    | 1 (1.000) |     6.20 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           37 |      644 | 2026-07-04 | 3DMAX             | W   | 0.999      | 1.000        | 0.337 (0.336)    | 0.483 (0.483)    | 1 (0.999) |     7.22 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           36 |      660 | 2026-07-03 | SINNERS           | W   | 0.993      | 1.000        | 0.147 (0.146)    | 0.446 (0.442)    | 1 (0.993) |     2.37 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           35 |      688 | 2026-07-02 | MIBR              | L   | 0.985      | -            | -                | -                | -         |   -17.11 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           34 |      709 | 2026-07-01 | TYLOO             | L   | 0.978      | -            | -                | -                | -         |   -19.84 | frozen, JBOEN, jcobbb, Neityu, Twistzz   |
|           33 |     1375 | 2026-05-30 | Ninjas in Pyjamas | L   | 0.766      | -            | -                | -                | -         |   -18.35 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           32 |     1392 | 2026-05-29 | DENDELE           | W   | 0.761      | -            | -                | -                | 1 (0.761) |     4.67 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           31 |     1412 | 2026-05-29 | 9z                | W   | 0.759      | 0.500        | 0.783 (0.297)    | 0.758 (0.288)    | 1 (0.759) |    18.74 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           30 |     1440 | 2026-05-28 | magic             | L   | 0.754      | -            | -                | -                | -         |   -18.24 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           29 |     1495 | 2026-05-27 | Alliance          | W   | 0.747      | 0.500        | 0.279 (0.104)    | 0.937 (0.350)    | 1 (0.747) |     9.33 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           28 |     1977 | 2026-05-13 | Vitality          | L   | 0.653      | -            | -                | -                | -         |    -5.36 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           27 |     2018 | 2026-05-12 | NRG               | W   | 0.647      | -            | -                | -                | 1 (0.647) |     1.37 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           26 |     2057 | 2026-05-11 | paiN              | L   | 0.640      | -            | -                | -                | -         |   -14.97 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           25 |     2285 | 2026-05-02 | Natus Vincere     | L   | 0.581      | -            | -                | -                | -         |    -6.65 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           24 |     2325 | 2026-05-01 | G2                | W   | 0.575      | 1.000        | 0.439 (0.253)    | 0.600 (0.345)    | 1 (0.575) |     9.07 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           23 |     2378 | 2026-04-30 | FURIA             | W   | 0.568      | 1.000        | 0.677 (0.385)    | -                | -         |    10.49 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           22 |     2426 | 2026-04-29 | Natus Vincere     | L   | 0.561      | -            | -                | -                | -         |    -6.37 | broky, frozen, jcobbb, Neityu, Twistzz   |
|           21 |     3132 | 2026-04-06 | Inner Circle      | L   | 0.406      | -            | -                | -                | -         |   -10.19 | broky, frozen, jcobbb, karrigan, Twistzz |
|           20 |     3157 | 2026-04-05 | BIG               | L   | 0.401      | -            | -                | -                | -         |    -9.12 | broky, frozen, jcobbb, karrigan, Twistzz |
|           19 |     3170 | 2026-04-05 | illwill           | W   | 0.400      | -            | -                | -                | -         |     0.14 | broky, frozen, jcobbb, karrigan, Twistzz |
|           18 |     3198 | 2026-04-05 | CYBERSHOKE        | W   | 0.398      | -            | -                | -                | -         |     0.55 | broky, frozen, jcobbb, karrigan, Twistzz |
|           17 |     3205 | 2026-04-04 | Wildcard          | L   | 0.397      | -            | -                | -                | -         |   -11.25 | broky, frozen, jcobbb, karrigan, Twistzz |
|           16 |     3283 | 2026-04-04 | EYEBALLERS        | L   | 0.391      | -            | -                | -                | -         |   -10.78 | broky, frozen, jcobbb, karrigan, Twistzz |
|           15 |     3348 | 2026-04-03 | Drama             | W   | 0.385      | -            | -                | -                | -         |     0.02 | broky, frozen, jcobbb, karrigan, Twistzz |
|           14 |     3361 | 2026-04-03 | BEE               | W   | 0.385      | -            | -                | -                | -         |     0.01 | broky, frozen, jcobbb, karrigan, Twistzz |
|           13 |     3593 | 2026-03-31 | fnatic            | L   | 0.367      | -            | -                | -                | -         |   -11.27 | broky, frozen, jcobbb, karrigan, Twistzz |
|           12 |     3618 | 2026-03-31 | Passion UA        | L   | 0.366      | -            | -                | -                | -         |   -11.33 | broky, frozen, jcobbb, karrigan, Twistzz |
|           11 |     3693 | 2026-03-30 | aimclub           | W   | 0.360      | -            | -                | -                | -         |     0.02 | broky, frozen, jcobbb, karrigan, Twistzz |
|           10 |     4305 | 2026-03-20 | TYLOO             | L   | 0.293      | -            | -                | -                | -         |    -6.23 | broky, frozen, jcobbb, karrigan, Twistzz |
|            9 |     4376 | 2026-03-18 | Aurora            | L   | 0.281      | -            | -                | -                | -         |    -5.63 | broky, frozen, jcobbb, karrigan, Twistzz |
|            8 |     4795 | 2026-03-09 | Astralis          | L   | 0.221      | -            | -                | -                | -         |    -5.20 | broky, frozen, jcobbb, karrigan, Twistzz |
|            7 |     4899 | 2026-03-08 | Luminosity        | W   | 0.212      | -            | -                | -                | -         |     1.10 | broky, frozen, jcobbb, karrigan, Twistzz |
|            6 |     4947 | 2026-03-07 | paiN              | L   | 0.206      | -            | -                | -                | -         |    -5.39 | broky, frozen, jcobbb, karrigan, Twistzz |
|            5 |     4974 | 2026-03-06 | G2                | L   | 0.200      | -            | -                | -                | -         |    -3.90 | broky, frozen, jcobbb, karrigan, Twistzz |
|            4 |     5868 | 2026-02-17 | Astralis          | L   | 0.085      | -            | -                | -                | -         |    -2.06 | broky, frozen, jcobbb, karrigan, Twistzz |
|            3 |     5910 | 2026-02-16 | PARIVISION        | L   | 0.078      | -            | -                | -                | -         |    -1.28 | broky, frozen, jcobbb, karrigan, Twistzz |
|            2 |     5965 | 2026-02-15 | Falcons           | L   | 0.072      | -            | -                | -                | -         |    -0.62 | broky, frozen, jcobbb, karrigan, Twistzz |
|            1 |     6022 | 2026-02-14 | HEROIC            | W   | 0.066      | -            | -                | -                | -         |     0.26 | broky, frozen, jcobbb, karrigan, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($281,429.87)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.57) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $68,125.00     | $68,125.00      |
| 2026-07-12 |      1.000 | $90,000.00     | $90,000.00      |
| 2026-05-30 |      0.767 | $13,500.00     | $10,356.56      |
| 2026-05-17 |      0.681 | $20,000.00     | $13,625.20      |
| 2026-05-03 |      0.588 | $130,000.00    | $76,400.80      |
| 2026-04-11 |      0.440 | $12,500.00     | $5,502.99       |
| 2026-04-05 |      0.401 | $8,000.00      | $3,208.40       |
| 2026-03-29 |      0.352 | $20,000.00     | $7,048.92       |
| 2026-03-10 |      0.228 | $21,500.00     | $4,900.84       |
| 2026-02-22 |      0.121 | $18,750.00     | $2,261.16       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
