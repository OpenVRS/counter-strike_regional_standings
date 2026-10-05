### Roster Details<br />
Team Name: BBL<br />
Roster: Boye, IceBerg, leakz, NickyB, salazar<br />
Global Rank: [37](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [31]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1385.8<br />
<br />
Final Rank Value (1385.8) = Starting Rank Value (1456.3) + Head To Head Adjustments (-70.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.432[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.261[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.528<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1456.3
- 400 + ( ( 0.528 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1456.3


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
|           66 |       35 | 2026-10-03 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -10.42 | Boye, IceBerg, leakz, NickyB, salazar |
|           65 |       42 | 2026-10-03 | BC.Game           | W   | 1.000      | -            | -                | -                | 1 (1.000) |    12.88 | Boye, IceBerg, leakz, NickyB, salazar |
|           64 |       49 | 2026-10-02 | FOKUS             | W   | 1.000      | 0.371        | 0.092 (0.034)    | 0.664 (0.246)    | 1 (1.000) |    13.60 | Boye, IceBerg, leakz, NickyB, salazar |
|           63 |       60 | 2026-10-02 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -10.69 | Boye, IceBerg, leakz, NickyB, salazar |
|           62 |       80 | 2026-10-02 | HAVU              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.11 | Boye, IceBerg, leakz, NickyB, salazar |
|           61 |      100 | 2026-10-02 | XEPT              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.13 | Boye, IceBerg, leakz, NickyB, salazar |
|           60 |      105 | 2026-10-02 | SportsBetExpert   | W   | 1.000      | 0.371        | -                | 0.518 (0.192)    | 1 (1.000) |     9.23 | Boye, IceBerg, leakz, NickyB, salazar |
|           59 |      114 | 2026-10-02 | Sangal            | L   | 1.000      | -            | -                | -                | -         |   -16.10 | Boye, IceBerg, leakz, NickyB, salazar |
|           58 |      305 | 2026-09-27 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -16.19 | Boye, IceBerg, leakz, NickyB, salazar |
|           57 |      439 | 2026-09-25 | BRUTE             | W   | 1.000      | -            | -                | -                | -         |     6.21 | Boye, IceBerg, leakz, NickyB, salazar |
|           56 |      462 | 2026-09-25 | 100 Thieves       | L   | 1.000      | -            | -                | -                | -         |   -12.17 | Boye, IceBerg, leakz, NickyB, salazar |
|           55 |      647 | 2026-09-22 | Johnny Speeds     | W   | 1.000      | -            | -                | -                | 1 (1.000) |     4.28 | Boye, IceBerg, leakz, NickyB, salazar |
|           54 |      667 | 2026-09-22 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |   -11.41 | Boye, IceBerg, leakz, NickyB, salazar |
|           53 |      678 | 2026-09-22 | Virtus.pro        | W   | 1.000      | 0.450        | -                | 0.616 (0.277)    | 1 (1.000) |    12.84 | Boye, IceBerg, leakz, NickyB, salazar |
|           52 |      749 | 2026-09-19 | Luminosity        | L   | 1.000      | -            | -                | -                | -         |   -10.15 | Boye, IceBerg, leakz, NickyB, salazar |
|           51 |      777 | 2026-09-18 | Liquid            | W   | 1.000      | 0.500        | 0.192 (0.096)    | 0.547 (0.274)    | 1 (1.000) |    20.25 | Boye, IceBerg, leakz, NickyB, salazar |
|           50 |      781 | 2026-09-18 | EYEBALLERS        | W   | 1.000      | 0.500        | 0.088 (0.044)    | -                | 1 (1.000) |    13.62 | Boye, IceBerg, leakz, NickyB, salazar |
|           49 |      786 | 2026-09-18 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |   -12.05 | Boye, IceBerg, leakz, NickyB, salazar |
|           48 |      801 | 2026-09-18 | INFINITE          | W   | 1.000      | 0.500        | -                | 0.609 (0.305)    | 1 (1.000) |    11.45 | Boye, IceBerg, leakz, NickyB, salazar |
|           47 |      806 | 2026-09-18 | Inner Circle      | L   | 1.000      | -            | -                | -                | -         |   -10.10 | Boye, IceBerg, leakz, NickyB, salazar |
|           46 |      991 | 2026-09-13 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -11.56 | Boye, IceBerg, leakz, NickyB, salazar |
|           45 |     1032 | 2026-09-12 | Wildcard          | W   | 1.000      | -            | -                | -                | -         |     9.55 | Boye, IceBerg, leakz, NickyB, salazar |
|           44 |     1133 | 2026-09-10 | 3DMAX             | W   | 1.000      | 0.143        | 0.330 (0.047)    | -                | -         |    20.54 | Boye, IceBerg, leakz, NickyB, salazar |
|           43 |     1193 | 2026-09-09 | 100 Thieves       | W   | 1.000      | 0.143        | 0.142 (0.020)    | -                | -         |    20.65 | Boye, IceBerg, leakz, NickyB, salazar |
|           42 |     1322 | 2026-09-06 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |   -17.88 | Boye, IceBerg, leakz, NickyB, salazar |
|           41 |     1337 | 2026-09-06 | UPGRADE           | W   | 1.000      | -            | -                | -                | -         |     7.84 | Boye, IceBerg, leakz, NickyB, salazar |
|           40 |     1384 | 2026-09-05 | fnatic            | L   | 0.999      | -            | -                | -                | -         |   -13.23 | Boye, IceBerg, leakz, NickyB, salazar |
|           39 |     1437 | 2026-09-04 | Walczaki          | W   | 0.993      | 0.435        | -                | 0.441 (0.190)    | -         |     3.50 | Boye, IceBerg, leakz, NickyB, salazar |
|           38 |     1599 | 2026-08-31 | Black Phoenix     | L   | 0.965      | -            | -                | -                | -         |   -26.58 | Boye, IceBerg, leakz, NickyB, salazar |
|           37 |     1911 | 2026-08-24 | CYBERSHOKE        | L   | 0.920      | -            | -                | -                | -         |   -21.19 | Boye, IceBerg, leakz, NickyB, salazar |
|           36 |     2287 | 2026-08-09 | GenOne            | L   | 0.819      | -            | -                | -                | -         |   -18.79 | Boye, IceBerg, leakz, NickyB, salazar |
|           35 |     2329 | 2026-08-08 | OG                | W   | 0.812      | 0.818        | -                | 0.316 (0.210)    | -         |     1.71 | Boye, IceBerg, leakz, NickyB, salazar |
|           34 |     2362 | 2026-08-07 | Passion Chicha    | W   | 0.807      | -            | -                | -                | -         |     0.08 | Boye, IceBerg, leakz, NickyB, salazar |
|           33 |     2786 | 2026-07-25 | Aurora            | L   | 0.720      | -            | -                | -                | -         |    -4.19 | Boye, IceBerg, leakz, NickyB, salazar |
|           32 |     2827 | 2026-07-24 | Nuclear TigeRES   | W   | 0.713      | 0.624        | 0.091 (0.040)    | 0.827 (0.368)    | -         |     6.49 | Boye, IceBerg, leakz, NickyB, salazar |
|           31 |     2850 | 2026-07-23 | Ninjas in Pyjamas | L   | 0.707      | -            | -                | -                | -         |    -6.79 | Altekz, Boye, IceBerg, leakz, salazar |
|           30 |     2874 | 2026-07-22 | Nuclear TigeRES   | W   | 0.701      | 0.624        | 0.091 (0.040)    | 0.827 (0.362)    | -         |     6.07 | Altekz, Boye, IceBerg, leakz, salazar |
|           29 |     2932 | 2026-07-19 | Belgium           | W   | 0.680      | -            | -                | -                | -         |     0.06 | IceBerg, leakz, Lucky, salazar, Vster |
|           28 |     3349 | 2026-06-28 | DENDELE           | W   | 0.540      | 0.548        | 0.120 (0.036)    | -                | -         |     6.55 | Boye, IceBerg, leakz, NickyB, salazar |
|           27 |     3362 | 2026-06-27 | Acend             | L   | 0.535      | -            | -                | -                | -         |   -12.80 | Boye, IceBerg, leakz, NickyB, salazar |
|           26 |     3400 | 2026-06-25 | Walczaki          | W   | 0.520      | -            | -                | -                | -         |     2.11 | Boye, IceBerg, leakz, NickyB, salazar |
|           25 |     3427 | 2026-06-24 | FOKUS             | W   | 0.514      | 0.548        | 0.092 (0.026)    | 0.664 (0.187)    | -         |     6.76 | Boye, IceBerg, leakz, NickyB, salazar |
|           24 |     3444 | 2026-06-23 | Betclic           | W   | 0.506      | -            | -                | -                | -         |     5.71 | Boye, IceBerg, leakz, NickyB, salazar |
|           23 |     3459 | 2026-06-21 | K27               | L   | 0.492      | -            | -                | -                | -         |    -6.74 | Boye, IceBerg, leakz, NickyB, salazar |
|           22 |     3472 | 2026-06-20 | Inner Circle      | W   | 0.486      | 0.435        | 0.173 (0.037)    | -                | -         |     9.47 | Boye, IceBerg, leakz, NickyB, salazar |
|           21 |     3501 | 2026-06-18 | KOLESIE           | W   | 0.474      | -            | -                | -                | -         |     0.77 | Boye, IceBerg, leakz, NickyB, salazar |
|           20 |     3843 | 2026-06-03 | Phantom           | L   | 0.374      | -            | -                | -                | -         |   -10.34 | Boye, IceBerg, leakz, NickyB, salazar |
|           19 |     3963 | 2026-05-30 | Nemiga            | L   | 0.346      | -            | -                | -                | -         |    -4.04 | Boye, IceBerg, leakz, NickyB, salazar |
|           18 |     3983 | 2026-05-29 | Nordic Partners   | W   | 0.341      | -            | -                | -                | -         |     0.95 | Boye, IceBerg, leakz, NickyB, salazar |
|           17 |     4046 | 2026-05-28 | Just Players      | L   | 0.333      | -            | -                | -                | -         |    -9.78 | Boye, IceBerg, leakz, NickyB, salazar |
|           16 |     4339 | 2026-05-21 | Color             | L   | 0.287      | -            | -                | -                | -         |    -8.37 | Boye, IceBerg, leakz, NickyB, salazar |
|           15 |     4348 | 2026-05-21 | HOTU              | W   | 0.286      | -            | -                | -                | -         |     4.20 | Boye, IceBerg, leakz, NickyB, salazar |
|           14 |     4379 | 2026-05-20 | Walczaki          | W   | 0.281      | -            | -                | -                | -         |     0.76 | Boye, IceBerg, leakz, NickyB, salazar |
|           13 |     4430 | 2026-05-18 | BET-M             | W   | 0.267      | -            | -                | -                | -         |     0.80 | Boye, IceBerg, leakz, NickyB, salazar |
|           12 |     4561 | 2026-05-13 | ex-RUBY           | W   | 0.234      | -            | -                | -                | -         |     0.19 | Boye, IceBerg, leakz, NickyB, salazar |
|           11 |     4699 | 2026-05-10 | MOUZ NXT          | W   | 0.212      | -            | -                | -                | -         |     0.04 | Boye, IceBerg, leakz, NickyB, salazar |
|           10 |     4716 | 2026-05-09 | Walczaki          | W   | 0.207      | -            | -                | -                | -         |     0.49 | Boye, IceBerg, leakz, NickyB, salazar |
|            9 |     4764 | 2026-05-07 | AM                | L   | 0.193      | -            | -                | -                | -         |    -6.00 | Boye, IceBerg, leakz, NickyB, salazar |
|            8 |     4984 | 2026-04-30 | magic             | L   | 0.146      | -            | -                | -                | -         |    -2.08 | Boye, IceBerg, leakz, NickyB, salazar |
|            7 |     5063 | 2026-04-28 | Walczaki          | L   | 0.134      | -            | -                | -                | -         |    -3.95 | Boye, IceBerg, leakz, NickyB, salazar |
|            6 |     5277 | 2026-04-24 | SINNERS           | W   | 0.108      | -            | -                | -                | -         |     1.52 | Boye, IceBerg, leakz, NickyB, salazar |
|            5 |     5323 | 2026-04-23 | fnatic            | W   | 0.101      | -            | -                | -                | -         |     1.55 | Boye, IceBerg, leakz, NickyB, salazar |
|            4 |     5390 | 2026-04-20 | Johnny Speeds     | W   | 0.081      | -            | -                | -                | -         |     0.05 | Boye, IceBerg, leakz, NickyB, salazar |
|            3 |     5501 | 2026-04-14 | Young Ninjas      | L   | 0.041      | -            | -                | -                | -         |    -1.27 | Boye, IceBerg, leakz, NickyB, salazar |
|            2 |     5524 | 2026-04-13 | Alliance          | L   | 0.033      | -            | -                | -                | -         |    -0.42 | Boye, IceBerg, leakz, NickyB, salazar |
|            1 |     5627 | 2026-04-09 | Walczaki          | L   | 0.006      | -            | -                | -                | -         |    -0.17 | Boye, IceBerg, leakz, NickyB, salazar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,178.85)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-10-03 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-09-28 |      1.000 | $1,200.00      | $1,200.00       |
| 2026-09-26 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-09-23 |      1.000 | $4,750.00      | $4,750.00       |
| 2026-06-28 |      0.542 | $15,000.00     | $8,126.15       |
| 2026-05-31 |      0.354 | $2,000.00      | $708.95         |
| 2026-05-21 |      0.287 | $10,000.00     | $2,866.18       |
| 2026-04-10 |      0.014 | $2,000.00      | $27.57          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
