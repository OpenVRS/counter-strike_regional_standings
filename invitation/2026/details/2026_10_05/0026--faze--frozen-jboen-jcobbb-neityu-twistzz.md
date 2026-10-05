### Roster Details<br />
Team Name: FaZe<br />
Roster: frozen, JBOEN, jcobbb, Neityu, Twistzz<br />
Global Rank: [26](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [20]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1482.0<br />
<br />
Final Rank Value (1482.0) = Starting Rank Value (1467.3) + Head To Head Adjustments (14.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.720[<sup>1</sup>](#table2)
- Bounty Collected: 0.607[<sup>2</sup>](#table1)
- Opponent Network: 0.227[<sup>2</sup>](#table1)
- LAN Wins: 0.581[<sup>2</sup>](#table1)

The average of these factors is 0.534<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1467.3
- 400 + ( ( 0.534 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1467.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |       92 | 2026-10-02 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -9.71 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           29 |      141 | 2026-10-01 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -14.64 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           28 |     1232 | 2026-09-09 | magic             | L   | 1.000      | -            | -                | -                | -         |   -15.85 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           27 |     1259 | 2026-09-08 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -16.28 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           26 |     2022 | 2026-08-20 | Vitality          | L   | 0.893      | -            | -                | -                | -         |    -3.26 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           25 |     2212 | 2026-08-13 | Legacy            | W   | 0.847      | 1.000        | 1.000 (0.847)    | 0.399 (0.338)    | 1 (0.847) |    23.94 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           24 |     2238 | 2026-08-12 | BETBOOM           | W   | 0.840      | 1.000        | 0.377 (0.317)    | 0.277 (0.233)    | 1 (0.840) |    15.66 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           23 |     2558 | 2026-08-01 | Spirit            | L   | 0.766      | -            | -                | -                | -         |    -1.31 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           22 |     2590 | 2026-07-31 | The MongolZ       | W   | 0.760      | 0.884        | 0.258 (0.173)    | 0.176 (0.118)    | 1 (0.760) |     6.70 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           21 |     2795 | 2026-07-25 | DENDELE           | W   | 0.719      | 0.903        | 0.120 (0.078)    | 0.431 (0.280)    | -         |     7.76 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           20 |     2886 | 2026-07-22 | EYEBALLERS        | W   | 0.699      | 0.903        | -                | 0.292 (0.184)    | -         |     7.32 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           19 |     3134 | 2026-07-11 | PARIVISION        | L   | 0.627      | -            | -                | -                | -         |   -12.19 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           18 |     3153 | 2026-07-10 | BETBOOM           | W   | 0.619      | 1.000        | 0.377 (0.234)    | 0.277 (0.172)    | 1 (0.619) |    12.55 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           17 |     3214 | 2026-07-05 | EYEBALLERS        | W   | 0.587      | 1.000        | -                | 0.292 (0.171)    | 1 (0.587) |     6.49 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           16 |     3231 | 2026-07-04 | 3DMAX             | W   | 0.580      | 1.000        | 0.330 (0.191)    | 0.492 (0.285)    | 1 (0.580) |    11.48 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           15 |     3247 | 2026-07-03 | SINNERS           | W   | 0.573      | 1.000        | 0.106 (0.061)    | 0.705 (0.404)    | 1 (0.573) |     7.00 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           14 |     3275 | 2026-07-02 | MIBR              | L   | 0.565      | -            | -                | -                | -         |    -5.69 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           13 |     3296 | 2026-07-01 | TYLOO             | L   | 0.558      | -            | -                | -                | -         |   -12.60 | frozen, JBOEN, jcobbb, Neityu, Twistzz |
|           12 |     3962 | 2026-05-30 | Ninjas in Pyjamas | L   | 0.346      | -            | -                | -                | -         |    -3.44 | broky, frozen, jcobbb, Neityu, Twistzz |
|           11 |     3979 | 2026-05-29 | DENDELE           | W   | 0.341      | -            | -                | -                | 1 (0.341) |     3.39 | broky, frozen, jcobbb, Neityu, Twistzz |
|           10 |     3999 | 2026-05-29 | 9z                | W   | 0.339      | 0.500        | 0.563 (0.096)    | -                | 1 (0.339) |     6.50 | broky, frozen, jcobbb, Neityu, Twistzz |
|            9 |     4027 | 2026-05-28 | magic             | L   | 0.335      | -            | -                | -                | -         |    -4.81 | broky, frozen, jcobbb, Neityu, Twistzz |
|            8 |     4082 | 2026-05-27 | Alliance          | W   | 0.327      | -            | -                | -                | 1 (0.327) |     5.84 | broky, frozen, jcobbb, Neityu, Twistzz |
|            7 |     4564 | 2026-05-13 | Vitality          | L   | 0.234      | -            | -                | -                | -         |    -0.44 | broky, frozen, jcobbb, Neityu, Twistzz |
|            6 |     4605 | 2026-05-12 | NRG               | W   | 0.227      | 1.000        | -                | 0.383 (0.087)    | -         |     1.89 | broky, frozen, jcobbb, Neityu, Twistzz |
|            5 |     4644 | 2026-05-11 | paiN              | L   | 0.220      | -            | -                | -                | -         |    -4.32 | broky, frozen, jcobbb, Neityu, Twistzz |
|            4 |     4872 | 2026-05-02 | Natus Vincere     | L   | 0.161      | -            | -                | -                | -         |    -3.24 | broky, frozen, jcobbb, Neityu, Twistzz |
|            3 |     4912 | 2026-05-01 | G2                | W   | 0.155      | 1.000        | 0.775 (0.120)    | -                | -         |     4.48 | broky, frozen, jcobbb, Neityu, Twistzz |
|            2 |     4965 | 2026-04-30 | FURIA             | W   | 0.149      | 1.000        | 0.914 (0.136)    | -                | -         |     4.28 | broky, frozen, jcobbb, Neityu, Twistzz |
|            1 |     5013 | 2026-04-29 | Natus Vincere     | L   | 0.142      | -            | -                | -                | -         |    -2.86 | broky, frozen, jcobbb, Neityu, Twistzz |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($195,763.85)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-04 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-09-13 |      1.000 | $15,000.00     | $15,000.00      |
| 2026-08-23 |      0.914 | $35,000.00     | $31,973.03      |
| 2026-08-02 |      0.773 | $68,125.00     | $52,655.32      |
| 2026-07-12 |      0.632 | $90,000.00     | $56,883.03      |
| 2026-05-30 |      0.347 | $13,500.00     | $4,689.86       |
| 2026-05-17 |      0.262 | $20,000.00     | $5,230.08       |
| 2026-05-03 |      0.168 | $130,000.00    | $21,832.54      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
