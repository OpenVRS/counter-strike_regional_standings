### Roster Details<br />
Team Name: BBL<br />
Roster: Boye, IceBerg, leakz, NickyB, salazar<br />
Global Rank: [53](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [40]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1134.3<br />
<br />
Final Rank Value (1134.3) = Starting Rank Value (1153.2) + Head To Head Adjustments (-18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.406[<sup>1</sup>](#table2)
- Bounty Collected: 0.392[<sup>2</sup>](#table1)
- Opponent Network: 0.194[<sup>2</sup>](#table1)
- LAN Wins: 0.590[<sup>2</sup>](#table1)

The average of these factors is 0.396<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1153.2
- 400 + ( ( 0.396 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1153.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       35 | 2026-09-06 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -18.47 | Boye, IceBerg, leakz, NickyB, salazar |
|           56 |       46 | 2026-09-06 | UPGRADE           | W   | 1.000      | -            | -                | -                | -         |    10.19 | Boye, IceBerg, leakz, NickyB, salazar |
|           55 |       68 | 2026-09-05 | fnatic            | L   | 1.000      | -            | -                | -                | -         |    -8.60 | Boye, IceBerg, leakz, NickyB, salazar |
|           54 |      107 | 2026-09-04 | Walczaki          | W   | 1.000      | -            | -                | -                | -         |     8.48 | Boye, IceBerg, leakz, NickyB, salazar |
|           53 |      247 | 2026-08-31 | Black Phoenix     | L   | 1.000      | -            | -                | -                | -         |   -23.26 | Boye, IceBerg, leakz, NickyB, salazar |
|           52 |      559 | 2026-08-24 | CYBERSHOKE        | L   | 1.000      | -            | -                | -                | -         |   -21.58 | Boye, IceBerg, leakz, NickyB, salazar |
|           51 |      935 | 2026-08-09 | GenOne            | L   | 0.998      | -            | -                | -                | -         |   -19.88 | Boye, IceBerg, leakz, NickyB, salazar |
|           50 |      977 | 2026-08-08 | OG                | W   | 0.991      | 0.818        | 0.024 (0.019)    | 0.441 (0.358)    | 1 (0.991) |     7.76 | Boye, IceBerg, leakz, NickyB, salazar |
|           49 |     1010 | 2026-08-07 | Passion Chicha    | W   | 0.986      | -            | -                | -                | 1 (0.986) |     0.35 | Boye, IceBerg, leakz, NickyB, salazar |
|           48 |     1434 | 2026-07-25 | Aurora            | L   | 0.899      | -            | -                | -                | -         |    -3.41 | Boye, IceBerg, leakz, NickyB, salazar |
|           47 |     1475 | 2026-07-24 | Nuclear TigeRES   | W   | 0.892      | 0.143        | 0.105 (0.013)    | -                | -         |    11.89 | Boye, IceBerg, leakz, NickyB, salazar |
|           46 |     1498 | 2026-07-23 | Ninjas in Pyjamas | L   | 0.886      | -            | -                | -                | -         |    -8.54 | Altekz, Boye, IceBerg, leakz, salazar |
|           45 |     1522 | 2026-07-22 | Nuclear TigeRES   | W   | 0.880      | 0.143        | 0.105 (0.013)    | -                | -         |    11.46 | Altekz, Boye, IceBerg, leakz, salazar |
|           44 |     1580 | 2026-07-19 | Belgium           | W   | 0.859      | -            | -                | -                | -         |     0.30 | IceBerg, leakz, Lucky, salazar, Vster |
|           43 |     1997 | 2026-06-28 | DENDELE           | W   | 0.719      | 0.548        | 0.130 (0.051)    | 0.407 (0.161)    | 1 (0.719) |    16.18 | Boye, IceBerg, leakz, NickyB, salazar |
|           42 |     2010 | 2026-06-27 | Acend             | L   | 0.714      | -            | -                | -                | -         |    -8.36 | Boye, IceBerg, leakz, NickyB, salazar |
|           41 |     2048 | 2026-06-25 | Walczaki          | W   | 0.700      | 0.548        | 0.063 (0.024)    | 0.774 (0.297)    | 1 (0.700) |    10.29 | Boye, IceBerg, leakz, NickyB, salazar |
|           40 |     2075 | 2026-06-24 | FOKUS             | W   | 0.693      | 0.548        | 0.115 (0.044)    | 0.523 (0.199)    | 1 (0.693) |    11.81 | Boye, IceBerg, leakz, NickyB, salazar |
|           39 |     2092 | 2026-06-23 | Betclic           | W   | 0.685      | 0.548        | 0.059 (0.022)    | 0.355 (0.134)    | 1 (0.685) |    16.38 | Boye, IceBerg, leakz, NickyB, salazar |
|           38 |     2107 | 2026-06-21 | K27               | L   | 0.671      | -            | -                | -                | -         |    -4.33 | Boye, IceBerg, leakz, NickyB, salazar |
|           37 |     2120 | 2026-06-20 | Inner Circle      | W   | 0.665      | 0.435        | 0.179 (0.052)    | 0.553 (0.160)    | -         |    18.34 | Boye, IceBerg, leakz, NickyB, salazar |
|           36 |     2149 | 2026-06-18 | KOLESIE           | W   | 0.653      | 0.435        | -                | 0.490 (0.139)    | -         |     6.17 | Boye, IceBerg, leakz, NickyB, salazar |
|           35 |     2491 | 2026-06-03 | Phantom           | L   | 0.553      | -            | -                | -                | -         |   -10.67 | Boye, IceBerg, leakz, NickyB, salazar |
|           34 |     2611 | 2026-05-30 | Nemiga            | L   | 0.525      | -            | -                | -                | -         |   -10.26 | Boye, IceBerg, leakz, NickyB, salazar |
|           33 |     2631 | 2026-05-29 | Nordic Partners   | W   | 0.520      | -            | -                | -                | -         |     2.87 | Boye, IceBerg, leakz, NickyB, salazar |
|           32 |     2694 | 2026-05-28 | Just Players      | L   | 0.512      | -            | -                | -                | -         |   -11.73 | Boye, IceBerg, leakz, NickyB, salazar |
|           31 |     2987 | 2026-05-21 | Color             | L   | 0.466      | -            | -                | -                | -         |   -10.27 | Boye, IceBerg, leakz, NickyB, salazar |
|           30 |     2996 | 2026-05-21 | HOTU              | W   | 0.465      | 0.435        | 0.144 (0.029)    | 1.000 (0.202)    | -         |    12.18 | Boye, IceBerg, leakz, NickyB, salazar |
|           29 |     3027 | 2026-05-20 | Walczaki          | W   | 0.460      | 0.435        | 0.063 (0.013)    | 0.774 (0.155)    | -         |     6.03 | Boye, IceBerg, leakz, NickyB, salazar |
|           28 |     3078 | 2026-05-18 | BET-M             | W   | 0.446      | -            | -                | -                | -         |     3.52 | Boye, IceBerg, leakz, NickyB, salazar |
|           27 |     3209 | 2026-05-13 | ex-RUBY           | W   | 0.413      | 0.435        | -                | 0.764 (0.137)    | -         |     5.07 | Boye, IceBerg, leakz, NickyB, salazar |
|           26 |     3347 | 2026-05-10 | MOUZ NXT          | W   | 0.391      | -            | -                | -                | -         |     0.83 | Boye, IceBerg, leakz, NickyB, salazar |
|           25 |     3364 | 2026-05-09 | Walczaki          | W   | 0.386      | -            | -                | -                | -         |     4.97 | Boye, IceBerg, leakz, NickyB, salazar |
|           24 |     3412 | 2026-05-07 | AM                | L   | 0.372      | -            | -                | -                | -         |   -10.63 | Boye, IceBerg, leakz, NickyB, salazar |
|           23 |     3632 | 2026-04-30 | magic             | L   | 0.325      | -            | -                | -                | -         |    -2.43 | Boye, IceBerg, leakz, NickyB, salazar |
|           22 |     3711 | 2026-04-28 | Walczaki          | L   | 0.313      | -            | -                | -                | -         |    -6.69 | Boye, IceBerg, leakz, NickyB, salazar |
|           21 |     3925 | 2026-04-24 | SINNERS           | W   | 0.287      | -            | -                | -                | -         |     3.81 | Boye, IceBerg, leakz, NickyB, salazar |
|           20 |     3971 | 2026-04-23 | fnatic            | W   | 0.280      | -            | -                | -                | -         |     6.96 | Boye, IceBerg, leakz, NickyB, salazar |
|           19 |     4038 | 2026-04-20 | Johnny Speeds     | W   | 0.260      | -            | -                | -                | -         |     1.44 | Boye, IceBerg, leakz, NickyB, salazar |
|           18 |     4149 | 2026-04-14 | Young Ninjas      | L   | 0.220      | -            | -                | -                | -         |    -6.54 | Boye, IceBerg, leakz, NickyB, salazar |
|           17 |     4172 | 2026-04-13 | Alliance          | L   | 0.213      | -            | -                | -                | -         |    -1.21 | Boye, IceBerg, leakz, NickyB, salazar |
|           16 |     4275 | 2026-04-09 | Walczaki          | L   | 0.185      | -            | -                | -                | -         |    -3.98 | Boye, IceBerg, leakz, NickyB, salazar |
|           15 |     4301 | 2026-04-08 | ex-RUBY           | W   | 0.178      | -            | -                | -                | -         |     0.31 | Boye, IceBerg, leakz, NickyB, salazar |
|           14 |     4427 | 2026-04-05 | Sangal            | L   | 0.158      | -            | -                | -                | -         |    -4.59 | Boye, IceBerg, leakz, NickyB, salazar |
|           13 |     4571 | 2026-04-03 | BESTIA            | W   | 0.145      | -            | -                | -                | 1 (0.145) |     1.13 | Boye, IceBerg, leakz, NickyB, salazar |
|           12 |     4591 | 2026-04-03 | HAVENs            | W   | 0.144      | -            | -                | -                | 1 (0.144) |     0.07 | Boye, IceBerg, leakz, NickyB, salazar |
|           11 |     4915 | 2026-03-30 | AM                | L   | 0.120      | -            | -                | -                | -         |    -3.50 | Boye, IceBerg, leakz, NickyB, salazar |
|           10 |     5218 | 2026-03-25 | HOTU              | L   | 0.087      | -            | -                | -                | -         |    -0.45 | Boye, IceBerg, leakz, NickyB, salazar |
|            9 |     5236 | 2026-03-25 | HEROIC            | W   | 0.086      | -            | -                | -                | 1 (0.086) |     2.11 | Boye, IceBerg, leakz, NickyB, salazar |
|            8 |     5268 | 2026-03-24 | BASEMENT BOYS     | W   | 0.081      | -            | -                | -                | 1 (0.081) |     1.03 | Boye, IceBerg, leakz, NickyB, salazar |
|            7 |     5279 | 2026-03-24 | Passion UA        | W   | 0.080      | -            | -                | -                | -         |     0.32 | Boye, IceBerg, leakz, NickyB, salazar |
|            6 |     5310 | 2026-03-24 | BESTIA            | L   | 0.078      | -            | -                | -                | -         |    -1.92 | Boye, IceBerg, leakz, NickyB, salazar |
|            5 |     5759 | 2026-03-15 | Sashi             | W   | 0.019      | -            | -                | -                | -         |     0.37 | Boye, IceBerg, leakz, NickyB, salazar |
|            4 |     5768 | 2026-03-15 | ECSTATIC          | W   | 0.018      | -            | -                | -                | -         |     0.03 | Boye, IceBerg, leakz, NickyB, salazar |
|            3 |     5797 | 2026-03-14 | struggletony      | W   | 0.013      | -            | -                | -                | -         |     0.02 | Boye, IceBerg, leakz, NickyB, salazar |
|            2 |     5808 | 2026-03-14 | Fortress          | W   | 0.012      | -            | -                | -                | -         |     0.04 | Boye, IceBerg, leakz, NickyB, salazar |
|            1 |     5813 | 2026-03-14 | struggletony      | L   | 0.011      | -            | -                | -                | -         |    -0.33 | Boye, IceBerg, leakz, NickyB, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,286.14)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      0.721 | $15,000.00     | $10,811.59      |
| 2026-05-31 |      0.534 | $2,000.00      | $1,067.01       |
| 2026-05-21 |      0.466 | $10,000.00     | $4,656.47       |
| 2026-04-10 |      0.193 | $2,000.00      | $385.63         |
| 2026-04-05 |      0.160 | $1,000.00      | $159.82         |
| 2026-03-26 |      0.094 | $750.00        | $70.34          |
| 2026-03-15 |      0.019 | $7,055.00      | $135.28         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
