### Roster Details<br />
Team Name: Vexar<br />
Roster: ADntZ, Bottega666, datet, KEEMBO, obsward<br />
Global Rank: [135](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [100]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  880.4<br />
<br />
Final Rank Value (880.4) = Starting Rank Value (803.5) + Head To Head Adjustments (76.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.270[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.228[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.202<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 803.5
- 400 + ( ( 0.202 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 803.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |      387 | 2026-09-26 | Bushido Wildcats     | L   | 1.000      | -            | -                | -                | -         |    -9.62 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           47 |      636 | 2026-09-22 | WW                   | L   | 1.000      | -            | -                | -                | -         |    -6.77 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           46 |      683 | 2026-09-22 | INOX Division        | W   | 1.000      | 0.371        | 0.063 (0.023)    | 1.000 (0.371)    | 0 (0.000) |    23.76 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           45 |      714 | 2026-09-20 | Lavked               | W   | 1.000      | 0.371        | 0.011 (0.004)    | 0.664 (0.246)    | 0 (0.000) |    17.28 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           44 |      721 | 2026-09-20 | Entropy              | W   | 1.000      | 0.371        | 0.009 (0.003)    | 0.684 (0.253)    | 0 (0.000) |    16.33 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           43 |      755 | 2026-09-19 | DragonClaw           | W   | 1.000      | 0.371        | 0.009 (0.003)    | -                | 0 (0.000) |    11.70 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           42 |      853 | 2026-09-17 | Teletubisie          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     7.36 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           41 |      886 | 2026-09-16 | Illyrians            | W   | 1.000      | 0.371        | 0.024 (0.009)    | 0.611 (0.227)    | 0 (0.000) |    15.21 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           40 |      912 | 2026-09-15 | Entropy              | L   | 1.000      | -            | -                | -                | -         |   -13.09 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           39 |      970 | 2026-09-13 | benched gods         | L   | 1.000      | -            | -                | -                | -         |   -13.58 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           38 |     1083 | 2026-09-11 | Saint Sinners        | W   | 1.000      | 0.371        | 0.005 (0.002)    | 0.424 (0.157)    | 0 (0.000) |    15.94 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           37 |     1284 | 2026-09-07 | Dark Moon            | L   | 1.000      | -            | -                | -                | -         |   -21.48 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           36 |     1318 | 2026-09-06 | BASEMENT BOYS        | L   | 1.000      | -            | -                | -                | -         |    -6.73 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           35 |     1349 | 2026-09-06 | Noir Verse           | W   | 1.000      | 0.317        | -                | 0.649 (0.206)    | 0 (0.000) |    15.38 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           34 |     1796 | 2026-08-27 | Sashi                | L   | 0.940      | -            | -                | -                | -         |    -2.56 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           33 |     1841 | 2026-08-26 | Falcons Force        | W   | 0.933      | 0.371        | -                | 0.460 (0.159)    | 0 (0.000) |    14.92 | ADntZ, Bottega666, datet, KarmaN, obsward |
|           32 |     1924 | 2026-08-24 | Lavked               | L   | 0.919      | -            | -                | -                | -         |   -10.06 | ADntZ, Bottega666, datet, KarmaN, obsward |
|           31 |     1956 | 2026-08-23 | Raccoons             | W   | 0.911      | -            | -                | -                | 0 (0.000) |     7.79 | ADntZ, Bottega666, datet, KarmaN, obsward |
|           30 |     1999 | 2026-08-21 | Banda Chuya          | W   | 0.899      | 0.371        | 0.013 (0.004)    | 0.727 (0.242)    | -         |    15.00 | ADntZ, Bottega666, datet, KarmaN, obsward |
|           29 |     2073 | 2026-08-18 | ex-Zero Tenacity     | L   | 0.880      | -            | -                | -                | -         |    -9.51 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           28 |     2098 | 2026-08-17 | NEW VISION           | W   | 0.873      | -            | -                | -                | -         |     8.32 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           27 |     2133 | 2026-08-16 | ROUNDS               | W   | 0.865      | -            | -                | -                | -         |     5.66 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           26 |     2211 | 2026-08-13 | Subtop De France     | W   | 0.847      | -            | -                | -                | -         |     3.99 | ADntZ, Bottega666, datet, KarmaN, KEEMBO  |
|           25 |     2237 | 2026-08-12 | Raccoons             | L   | 0.840      | -            | -                | -                | -         |   -20.64 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           24 |     2504 | 2026-08-02 | Inner Circle Academy | L   | 0.774      | -            | -                | -                | -         |    -5.70 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           23 |     2524 | 2026-08-02 | Leo                  | L   | 0.773      | -            | -                | -                | -         |    -6.67 | ADntZ, Bottega666, datet, KEEMBO, obsward |
|           22 |     2589 | 2026-07-31 | ex-RUSTEC            | L   | 0.760      | -            | -                | -                | -         |   -13.92 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           21 |     2660 | 2026-07-29 | BET-M                | W   | 0.745      | 0.435        | 0.020 (0.006)    | 0.611 (0.198)    | -         |    17.01 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           20 |     2682 | 2026-07-28 | Phantom              | L   | 0.740      | -            | -                | -                | -         |    -3.59 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           19 |     2769 | 2026-07-25 | Honvéd               | W   | 0.721      | 0.435        | 0.009 (0.003)    | 0.697 (0.218)    | -         |    12.88 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           18 |     2825 | 2026-07-24 | PRIVATE              | L   | 0.713      | -            | -                | -                | -         |    -4.69 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           17 |     2953 | 2026-07-19 | BIG Academy          | W   | 0.678      | -            | -                | -                | -         |     5.34 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           16 |     2975 | 2026-07-18 | SAW Youngsters       | W   | 0.672      | 0.384        | 0.004 (0.001)    | -                | -         |    12.88 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           15 |     2997 | 2026-07-17 | ROUNDS               | L   | 0.667      | -            | -                | -                | -         |   -16.37 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           14 |     3045 | 2026-07-16 | SAW Youngsters       | W   | 0.658      | -            | -                | -                | -         |    12.57 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           13 |     3105 | 2026-07-12 | Inner Circle Academy | L   | 0.634      | -            | -                | -                | -         |    -1.69 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           12 |     3121 | 2026-07-12 | HOTU                 | L   | 0.633      | -            | -                | -                | -         |    -0.67 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           11 |     3922 | 2026-05-31 | G2 Ares              | L   | 0.352      | -            | -                | -                | -         |    -3.31 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|           10 |     3960 | 2026-05-30 | Mai Tai              | W   | 0.346      | -            | -                | -                | -         |     3.19 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            9 |     3993 | 2026-05-29 | NEW VISION           | W   | 0.340      | -            | -                | -                | -         |     2.72 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            8 |     4057 | 2026-05-28 | Dripmen              | W   | 0.332      | -            | -                | -                | -         |     2.99 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            7 |     4093 | 2026-05-27 | overTIME             | W   | 0.326      | -            | -                | -                | -         |     1.67 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            6 |     4130 | 2026-05-26 | Lilmix               | W   | 0.319      | -            | -                | -                | -         |     3.50 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            5 |     4262 | 2026-05-23 | Hashiras             | L   | 0.299      | -            | -                | -                | -         |    -6.51 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            4 |     5535 | 2026-04-12 | Enjoy                | L   | 0.028      | -            | -                | -                | -         |    -0.49 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            3 |     5541 | 2026-04-12 | UPGRADE              | W   | 0.027      | -            | -                | -                | -         |     0.81 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            2 |     5559 | 2026-04-11 | ZOTIX                | W   | 0.021      | -            | -                | -                | -         |     0.16 | ADntZ, datet, KarmaN, KEEMBO, obsward     |
|            1 |     5591 | 2026-04-10 | Young TigeRES        | W   | 0.014      | -            | -                | -                | -         |     0.16 | ADntZ, datet, KarmaN, KEEMBO, obsward     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($947.78)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-23 |      1.000 | $750.00        | $750.00         |
| 2026-05-31 |      0.354 | $500.00        | $176.83         |
| 2026-04-12 |      0.028 | $750.00        | $20.95          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
