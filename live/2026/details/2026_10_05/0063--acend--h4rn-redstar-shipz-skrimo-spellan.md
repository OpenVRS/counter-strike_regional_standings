### Roster Details<br />
Team Name: Acend<br />
Roster: h4rn, REDSTAR, SHiPZ, Skrimo, SPELLAN<br />
Global Rank: [63](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [47]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1196.6<br />
<br />
Final Rank Value (1196.6) = Starting Rank Value (1249.1) + Head To Head Adjustments (-52.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.383[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.637[<sup>2</sup>](#table1)

The average of these factors is 0.425<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1249.1
- 400 + ( ( 0.425 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1249.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           55 |      315 | 2026-09-27 | BET-M             | L   | 1.000      | -            | -                | -                | -         |   -19.58 | h4rn, REDSTAR, SHiPZ, Skrimo, SPELLAN      |
|           54 |      455 | 2026-09-25 | Black Phoenix     | W   | 1.000      | 0.396        | 0.035 (0.014)    | 1.000 (0.396)    | -         |     9.95 | h4rn, REDSTAR, SHiPZ, Skrimo, SPELLAN      |
|           53 |     1077 | 2026-09-11 | INOX Division     | L   | 1.000      | -            | -                | -                | -         |   -17.55 | KalubeR, REDSTAR, SHiPZ, Skrimo, SPELLAN   |
|           52 |     1134 | 2026-09-10 | 100 Thieves       | L   | 1.000      | -            | -                | -                | -         |    -6.51 | KalubeR, REDSTAR, SHiPZ, Skrimo, SPELLAN   |
|           51 |     1211 | 2026-09-09 | 3DMAX             | L   | 1.000      | -            | -                | -                | -         |    -5.79 | KalubeR, REDSTAR, SHiPZ, Skrimo, SPELLAN   |
|           50 |     1699 | 2026-08-29 | GenOne            | L   | 0.953      | -            | -                | -                | -         |   -15.83 | AwaykeN, KalubeR, REDSTAR, Skrimo, SPELLAN |
|           49 |     1788 | 2026-08-27 | UNiTY             | W   | 0.940      | 0.384        | 0.021 (0.007)    | 0.660 (0.238)    | -         |     8.55 | AwaykeN, KalubeR, REDSTAR, Skrimo, SPELLAN |
|           48 |     1906 | 2026-08-24 | Nemiga            | L   | 0.921      | -            | -                | -                | -         |    -6.15 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           47 |     1910 | 2026-08-24 | Phantom           | W   | 0.920      | -            | -                | -                | -         |    10.23 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           46 |     2273 | 2026-08-09 | 1win              | L   | 0.820      | -            | -                | -                | -         |   -11.09 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           45 |     2288 | 2026-08-09 | FOKUS             | W   | 0.819      | 0.818        | 0.092 (0.062)    | 0.664 (0.445)    | 1 (0.819) |    17.30 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           44 |     2320 | 2026-08-08 | Spirit HU         | W   | 0.813      | -            | -                | -                | 1 (0.813) |     0.29 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           43 |     2330 | 2026-08-08 | NRG               | L   | 0.812      | -            | -                | -                | -         |   -10.55 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           42 |     2358 | 2026-08-07 | Vandulken         | W   | 0.807      | -            | -                | -                | 1 (0.807) |     0.22 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           41 |     2465 | 2026-08-04 | Betclic           | L   | 0.786      | -            | -                | -                | -         |    -9.94 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           40 |     2515 | 2026-08-02 | BRUTE             | W   | 0.773      | 0.450        | -                | 0.472 (0.164)    | 1 (0.773) |    11.20 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           39 |     2533 | 2026-08-02 | 6666              | W   | 0.772      | -            | -                | -                | 1 (0.772) |     3.25 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           38 |     2933 | 2026-07-19 | ex-Zero Tenacity  | W   | 0.680      | -            | -                | -                | -         |     2.91 | REDSTAR, shaiK, SHiPZ, Skrimo, SPELLAN     |
|           37 |     3337 | 2026-06-28 | Inner Circle      | L   | 0.542      | -            | -                | -                | -         |    -3.15 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           36 |     3362 | 2026-06-27 | BBL               | W   | 0.535      | 0.548        | 0.048 (0.014)    | 0.779 (0.228)    | 1 (0.535) |    12.80 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           35 |     3390 | 2026-06-26 | INFINITE          | W   | 0.526      | 0.548        | 0.038 (0.011)    | 0.609 (0.176)    | 1 (0.526) |    11.31 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           34 |     3399 | 2026-06-25 | DENDELE           | L   | 0.521      | -            | -                | -                | -         |    -5.39 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           33 |     3430 | 2026-06-24 | Sashi             | W   | 0.513      | 0.548        | 0.052 (0.015)    | 0.535 (0.150)    | 1 (0.513) |     7.36 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           32 |     3435 | 2026-06-23 | GamerLegion       | W   | 0.508      | 0.548        | 0.299 (0.083)    | -                | 1 (0.508) |    13.95 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           31 |     3470 | 2026-06-20 | K27               | L   | 0.487      | -            | -                | -                | -         |    -2.75 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           30 |     3485 | 2026-06-19 | BET-M             | W   | 0.481      | 0.435        | -                | 0.611 (0.128)    | -         |     4.26 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           29 |     3492 | 2026-06-19 | INOX Division     | L   | 0.479      | -            | -                | -                | -         |   -10.52 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           28 |     3517 | 2026-06-17 | Lavked            | W   | 0.465      | -            | -                | -                | -         |     2.77 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           27 |     3542 | 2026-06-15 | Iberian Soul      | L   | 0.452      | -            | -                | -                | -         |    -5.90 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           26 |     3676 | 2026-06-11 | INOX Division     | W   | 0.425      | 0.435        | 0.063 (0.012)    | 1.000 (0.185)    | -         |     3.74 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           25 |     3695 | 2026-06-10 | ARCRED            | W   | 0.418      | -            | -                | -                | -         |     1.16 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           24 |     3714 | 2026-06-08 | ex-RUBY           | L   | 0.408      | -            | -                | -                | -         |   -11.10 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           23 |     3742 | 2026-06-07 | Phantom           | L   | 0.400      | -            | -                | -                | -         |    -8.61 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           22 |     3811 | 2026-06-05 | Black Phoenix     | W   | 0.386      | 0.435        | 0.035 (0.006)    | 1.000 (0.168)    | -         |     2.49 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           21 |     3828 | 2026-06-04 | CYBERSHOKE        | L   | 0.380      | -            | -                | -                | -         |   -11.11 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           20 |     4062 | 2026-05-28 | Just Players      | L   | 0.332      | -            | -                | -                | -         |    -8.63 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           19 |     4224 | 2026-05-23 | Inner Circle      | L   | 0.302      | -            | -                | -                | -         |    -1.70 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           18 |     4242 | 2026-05-23 | Betclic           | W   | 0.300      | -            | -                | -                | 1 (0.300) |     0.54 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           17 |     4261 | 2026-05-23 | Wildcard          | L   | 0.299      | -            | -                | -                | -         |    -5.25 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           16 |     4301 | 2026-05-22 | Gaimin Gladiators | W   | 0.293      | -            | -                | -                | -         |     0.15 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           15 |     4347 | 2026-05-21 | INFINITE          | W   | 0.286      | -            | -                | -                | -         |     6.07 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           14 |     4351 | 2026-05-21 | HAVU              | W   | 0.286      | -            | -                | -                | -         |     1.79 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           13 |     4355 | 2026-05-21 | Inner Circle      | W   | 0.285      | 0.435        | 0.173 (0.021)    | -                | -         |     7.57 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           12 |     4360 | 2026-05-21 | KOLESIE           | L   | 0.285      | -            | -                | -                | -         |    -8.15 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           11 |     4368 | 2026-05-21 | CHAOS             | W   | 0.284      | -            | -                | -                | -         |     0.08 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|           10 |     4642 | 2026-05-11 | BASEMENT BOYS     | L   | 0.221      | -            | -                | -                | -         |    -4.67 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|            9 |     4652 | 2026-05-11 | 100 Thieves       | L   | 0.220      | -            | -                | -                | -         |    -1.06 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|            8 |     4685 | 2026-05-10 | Gatorian          | W   | 0.213      | -            | -                | -                | -         |     0.06 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|            7 |     4703 | 2026-05-10 | HAFO              | W   | 0.211      | -            | -                | -                | -         |     0.06 | h4rn, KalubeR, REDSTAR, Skrimo, SPELLAN    |
|            6 |     5311 | 2026-04-24 | BIG               | L   | 0.105      | -            | -                | -                | -         |    -0.60 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN      |
|            5 |     5371 | 2026-04-22 | MOUZ NXT          | W   | 0.093      | -            | -                | -                | -         |     0.05 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN      |
|            4 |     5397 | 2026-04-20 | Nuclear TigeRES   | L   | 0.080      | -            | -                | -                | -         |    -1.28 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN      |
|            3 |     5446 | 2026-04-18 | GenOne            | W   | 0.066      | -            | -                | -                | -         |     1.34 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN      |
|            2 |     5462 | 2026-04-17 | FAVBET            | W   | 0.059      | -            | -                | -                | -         |     0.03 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN      |
|            1 |     5492 | 2026-04-15 | Black Phoenix     | L   | 0.045      | -            | -                | -                | -         |    -1.12 | h4rn, KalubeR, shaiK, Skrimo, SPELLAN      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($29,194.51)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-28 |      1.000 | $1,200.00      | $1,200.00       |
| 2026-08-30 |      0.960 | $1,250.00      | $1,200.60       |
| 2026-08-09 |      0.821 | $7,750.00      | $6,361.35       |
| 2026-08-05 |      0.794 | $4,000.00      | $3,177.38       |
| 2026-06-28 |      0.542 | $30,000.00     | $16,252.31      |
| 2026-05-24 |      0.308 | $2,000.00      | $615.08         |
| 2026-05-11 |      0.221 | $1,753.00      | $387.80         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
