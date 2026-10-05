### Roster Details<br />
Team Name: NRG<br />
Roster: Grim, hallzerk, Jeorge, nitr0, Sonic<br />
Global Rank: [50](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [9]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1166.5<br />
<br />
Final Rank Value (1166.5) = Starting Rank Value (1149.9) + Head To Head Adjustments (16.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.393[<sup>1</sup>](#table2)
- Bounty Collected: 0.347[<sup>2</sup>](#table1)
- Opponent Network: 0.128[<sup>2</sup>](#table1)
- LAN Wins: 0.708[<sup>2</sup>](#table1)

The average of these factors is 0.394<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1149.9
- 400 + ( ( 0.394 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1149.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      910 | 2026-08-09 | Phantom         | L   | 1.000      | -            | -                | -                | -         |   -19.28 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           29 |      950 | 2026-08-08 | Acend           | W   | 0.997      | 0.818        | 0.072 (0.059)    | 0.706 (0.576)    | 1 (0.997) |    19.42 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           28 |      977 | 2026-08-07 | Spirit HU       | W   | 0.992      | -            | -                | -                | 1 (0.992) |     0.51 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           27 |     1116 | 2026-08-02 | Voca            | W   | 0.961      | 0.143        | 0.030 (0.004)    | 0.377 (0.052)    | -         |     6.48 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           26 |     1117 | 2026-08-02 | SportsBetExpert | W   | 0.960      | 0.143        | 0.009 (0.001)    | 0.430 (0.059)    | -         |    13.43 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           25 |     1157 | 2026-08-01 | Voca            | L   | 0.953      | -            | -                | -                | -         |   -23.77 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           24 |     1262 | 2026-07-29 | Marsborne       | W   | 0.933      | 0.143        | 0.014 (0.002)    | 0.432 (0.058)    | -         |     5.37 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           23 |     1287 | 2026-07-28 | Iowa Stormboar  | W   | 0.926      | -            | -                | -                | -         |     2.02 | Grim, hallzerk, Jeorge, nitr0, Sonic |
|           22 |     1715 | 2026-07-12 | SportsBetExpert | W   | 0.820      | 0.303        | 0.009 (0.002)    | 0.430 (0.107)    | 1 (0.820) |    11.86 | daps, Grim, Jeorge, nitr0, Sonic     |
|           21 |     1729 | 2026-07-12 | NuTorious       | W   | 0.818      | 0.303        | -                | 0.196 (0.049)    | 1 (0.818) |     2.59 | daps, Grim, Jeorge, nitr0, Sonic     |
|           20 |     1739 | 2026-07-12 | Eh              | W   | 0.818      | -            | -                | -                | 1 (0.818) |     0.39 | daps, Grim, Jeorge, nitr0, Sonic     |
|           19 |     2417 | 2026-06-05 | BIG             | L   | 0.572      | -            | -                | -                | -         |    -1.86 | br0, Grim, nitr0, oSee, Sonic        |
|           18 |     2440 | 2026-06-04 | M80             | L   | 0.565      | -            | -                | -                | -         |    -6.60 | br0, Grim, nitr0, oSee, Sonic        |
|           17 |     2474 | 2026-06-03 | FlyQuest        | W   | 0.557      | 0.624        | 0.019 (0.007)    | 0.350 (0.122)    | 1 (0.557) |     8.10 | br0, Grim, nitr0, oSee, Sonic        |
|           16 |     2489 | 2026-06-02 | SINNERS         | W   | 0.552      | 0.624        | 0.102 (0.035)    | 0.477 (0.164)    | 1 (0.552) |     7.36 | br0, Grim, nitr0, oSee, Sonic        |
|           15 |     2498 | 2026-06-02 | GamerLegion     | L   | 0.551      | -            | -                | -                | -         |    -3.00 | br0, Grim, nitr0, oSee, Sonic        |
|           14 |     2994 | 2026-05-20 | MOUZ            | L   | 0.468      | -            | -                | -                | -         |    -0.20 | daps, Grim, nitr0, oSee, Sonic       |
|           13 |     3020 | 2026-05-19 | Legacy          | L   | 0.462      | -            | -                | -                | -         |    -0.32 | br0, Grim, nitr0, oSee, Sonic        |
|           12 |     3225 | 2026-05-12 | FaZe            | L   | 0.411      | -            | -                | -                | -         |    -1.02 | br0, Grim, nitr0, oSee, Sonic        |
|           11 |     3257 | 2026-05-11 | FUT             | L   | 0.406      | -            | -                | -                | -         |    -0.17 | br0, Grim, nitr0, oSee, Sonic        |
|           10 |     3817 | 2026-04-25 | Passion UA      | L   | 0.302      | -            | -                | -                | -         |    -8.21 | br0, Grim, nitr0, oSee, Sonic        |
|            9 |     3831 | 2026-04-25 | LAG             | W   | 0.299      | 0.371        | 0.016 (0.002)    | 0.360 (0.040)    | 1 (0.299) |     2.99 | br0, Grim, nitr0, oSee, Sonic        |
|            8 |     3856 | 2026-04-25 | Kodex           | W   | 0.299      | -            | -                | -                | 1 (0.299) |     0.14 | br0, Grim, nitr0, oSee, Sonic        |
|            7 |     4315 | 2026-04-07 | Legacy          | L   | 0.176      | -            | -                | -                | -         |    -0.12 | br0, Grim, nitr0, oSee, Sonic        |
|            6 |     4344 | 2026-04-06 | EYEBALLERS      | L   | 0.170      | -            | -                | -                | -         |    -1.67 | br0, Grim, nitr0, oSee, Sonic        |
|            5 |     4410 | 2026-04-05 | FUT             | L   | 0.162      | -            | -                | -                | -         |    -0.07 | br0, Grim, nitr0, oSee, Sonic        |
|            4 |     4476 | 2026-04-04 | Voca            | W   | 0.157      | 1.000        | 0.030 (0.005)    | 0.377 (0.059)    | 1 (0.157) |     0.73 | br0, Grim, nitr0, oSee, Sonic        |
|            3 |     5393 | 2026-03-22 | FURIA           | L   | 0.071      | -            | -                | -                | -         |    -0.06 | br0, Grim, nitr0, oSee, Sonic        |
|            2 |     5521 | 2026-03-20 | B8              | W   | 0.057      | 1.000        | 0.263 (0.015)    | -                | -         |     1.56 | br0, Grim, nitr0, oSee, Sonic        |
|            1 |     5613 | 2026-03-18 | Falcons         | L   | 0.043      | -            | -                | -                | -         |    -0.02 | br0, Grim, nitr0, oSee, Sonic        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($14,342.79)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-12 |      0.820 | $3,000.00      | $2,459.27       |
| 2026-05-24 |      0.490 | $5,000.00      | $2,447.68       |
| 2026-05-17 |      0.446 | $4,000.00      | $1,783.99       |
| 2026-04-11 |      0.205 | $18,750.00     | $3,843.34       |
| 2026-03-29 |      0.117 | $32,500.00     | $3,808.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
