### Roster Details<br />
Team Name: Omega<br />
Roster: adai, Aldikon, Botpa1, dan4o, def1zer<br />
Global Rank: [55](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [41]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1127.6<br />
<br />
Final Rank Value (1127.6) = Starting Rank Value (1257.1) + Head To Head Adjustments (-129.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.390[<sup>1</sup>](#table2)
- Bounty Collected: 0.291[<sup>2</sup>](#table1)
- Opponent Network: 0.121[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.450<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1257.1
- 400 + ( ( 0.450 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1257.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           48 |       88 | 2026-09-03 | QUAZAR           | L   | 1.000      | -            | -                | -                | -         |   -21.67 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           47 |      279 | 2026-08-30 | DEPO             | W   | 1.000      | 0.301        | 0.021 (0.006)    | 0.441 (0.133)    | 1 (1.000) |    14.51 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           46 |      285 | 2026-08-30 | Total Domination | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.17 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           45 |      681 | 2026-08-18 | Entropy          | L   | 1.000      | -            | -                | -                | -         |   -27.68 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           44 |      697 | 2026-08-18 | Fire Flux        | L   | 1.000      | -            | -                | -                | -         |   -28.72 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           43 |     1145 | 2026-08-02 | DEPO             | W   | 0.957      | 0.342        | 0.021 (0.007)    | 0.441 (0.145)    | 1 (0.957) |    12.70 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           42 |     1155 | 2026-08-02 | DONSTU           | W   | 0.956      | 0.342        | 0.004 (0.001)    | 0.451 (0.148)    | 1 (0.956) |     2.48 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           41 |     1182 | 2026-08-01 | THE UNIT         | W   | 0.950      | -            | -                | -                | 1 (0.950) |     2.29 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           40 |     1186 | 2026-08-01 | ZWAW             | W   | 0.950      | -            | -                | -                | 1 (0.950) |     0.76 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           39 |     1413 | 2026-07-25 | Rune Eaters      | L   | 0.904      | -            | -                | -                | -         |   -18.57 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           38 |     1420 | 2026-07-25 | Orda             | W   | 0.903      | -            | -                | -                | 1 (0.903) |     1.48 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           37 |     1424 | 2026-07-25 | NOVAQ            | L   | 0.902      | -            | -                | -                | -         |   -21.79 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           36 |     1430 | 2026-07-24 | AimAssasins      | W   | 0.902      | -            | -                | -                | 1 (0.902) |     0.61 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           35 |     1833 | 2026-07-05 | Rune Eaters      | W   | 0.772      | 0.288        | 0.024 (0.005)    | 0.769 (0.171)    | 1 (0.772) |     7.48 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           34 |     2543 | 2026-05-31 | Rune Eaters      | L   | 0.537      | -            | -                | -                | -         |   -11.45 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           33 |     2578 | 2026-05-30 | DEPO             | W   | 0.531      | 0.354        | 0.021 (0.004)    | 0.441 (0.083)    | 1 (0.531) |     8.13 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           32 |     2587 | 2026-05-30 | Rune Eaters      | L   | 0.530      | -            | -                | -                | -         |   -11.58 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           31 |     2596 | 2026-05-30 | 1win             | L   | 0.529      | -            | -                | -                | -         |    -6.12 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           30 |     2624 | 2026-05-29 | DEPO             | W   | 0.524      | 0.354        | 0.021 (0.004)    | 0.441 (0.082)    | -         |     8.05 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           29 |     2637 | 2026-05-29 | Dark Moon        | W   | 0.523      | -            | -                | -                | -         |     0.55 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           28 |     2668 | 2026-05-28 | ex-RUBY          | W   | 0.517      | 0.396        | 0.017 (0.003)    | 0.766 (0.157)    | -         |     5.57 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           27 |     2806 | 2026-05-24 | ALGO             | W   | 0.492      | -            | -                | -                | -         |     0.79 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           26 |     2877 | 2026-05-23 | ASTRAL           | W   | 0.484      | 0.396        | 0.010 (0.002)    | 0.769 (0.147)    | -         |     5.52 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           25 |     3335 | 2026-05-09 | HAVU             | L   | 0.391      | -            | -                | -                | -         |   -10.88 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           24 |     3366 | 2026-05-08 | INOX Division    | L   | 0.384      | -            | -                | -                | -         |    -9.43 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           23 |     3409 | 2026-05-05 | UNiTY            | W   | 0.365      | 0.384        | -                | 0.537 (0.075)    | -         |     1.83 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           22 |     3470 | 2026-05-03 | Lavked           | L   | 0.350      | -            | -                | -                | -         |    -9.43 | adai, Aldikon, Botpa1, dan4o, Maison    |
|           21 |     3803 | 2026-04-26 | DEPO             | L   | 0.304      | -            | -                | -                | -         |    -5.17 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           20 |     3815 | 2026-04-26 | Rune Eaters      | W   | 0.302      | 0.297        | 0.024 (0.002)    | 0.769 (0.069)    | -         |     3.77 | adai, Aldikon, Botpa1, dan4o, def1zer   |
|           19 |     4292 | 2026-04-07 | EYEBALLERS       | L   | 0.179      | -            | -                | -                | -         |    -2.35 | adai, Botpa1, dan4o, Maison, modeSavage |
|           18 |     4348 | 2026-04-06 | megoshort        | W   | 0.170      | -            | -                | -                | -         |     0.10 | adai, Botpa1, dan4o, Maison, modeSavage |
|           17 |     4372 | 2026-04-05 | ASTRAL           | L   | 0.165      | -            | -                | -                | -         |    -2.97 | adai, Botpa1, dan4o, Maison, modeSavage |
|           16 |     4564 | 2026-04-03 | Rune Eaters      | W   | 0.150      | 0.435        | 0.024 (0.002)    | -                | -         |     1.98 | adai, Botpa1, dan4o, Maison, modeSavage |
|           15 |     4819 | 2026-03-31 | M1X KS           | L   | 0.131      | -            | -                | -                | -         |    -4.05 | adai, Botpa1, dan4o, Maison, modeSavage |
|           14 |     4865 | 2026-03-31 | OlyBet           | W   | 0.129      | -            | -                | -                | -         |     0.11 | adai, Botpa1, dan4o, Maison, modeSavage |
|           13 |     4883 | 2026-03-30 | G2 Ares          | L   | 0.126      | -            | -                | -                | -         |    -3.03 | adai, Botpa1, dan4o, Maison, modeSavage |
|           12 |     4916 | 2026-03-30 | Black Phoenix    | L   | 0.124      | -            | -                | -                | -         |    -3.43 | adai, Botpa1, dan4o, Maison, modeSavage |
|           11 |     5166 | 2026-03-26 | megoshort        | L   | 0.097      | -            | -                | -                | -         |    -3.02 | adai, Botpa1, dan4o, Maison, modeSavage |
|           10 |     5269 | 2026-03-24 | ALGO             | L   | 0.084      | -            | -                | -                | -         |    -2.54 | adai, Botpa1, dan4o, Maison, modeSavage |
|            9 |     5396 | 2026-03-22 | Permitta         | L   | 0.071      | -            | -                | -                | -         |    -2.04 | adai, Botpa1, dan4o, Maison, noni       |
|            8 |     5502 | 2026-03-20 | Sangal           | L   | 0.059      | -            | -                | -                | -         |    -1.77 | adai, Botpa1, dan4o, Maison, noni       |
|            7 |     5545 | 2026-03-19 | ex-RUBY          | L   | 0.052      | -            | -                | -                | -         |    -1.60 | adai, Botpa1, dan4o, Maison, noni       |
|            6 |     5641 | 2026-03-17 | MASONIC          | W   | 0.038      | -            | -                | -                | -         |     0.03 | adai, Botpa1, dan4o, Maison, noni       |
|            5 |     5677 | 2026-03-16 | ex-Zero Tenacity | L   | 0.032      | -            | -                | -                | -         |    -0.88 | adai, Botpa1, dan4o, Maison, modeSavage |
|            4 |     5727 | 2026-03-15 | Eternal Fire     | L   | 0.025      | -            | -                | -                | -         |    -0.76 | adai, Botpa1, dan4o, Maison, modeSavage |
|            3 |     5741 | 2026-03-15 | DEPO             | W   | 0.024      | -            | -                | -                | -         |     0.33 | adai, Botpa1, dan4o, Maison, modeSavage |
|            2 |     5745 | 2026-03-15 | NOVAQ            | W   | 0.023      | -            | -                | -                | -         |     0.13 | adai, Botpa1, dan4o, Maison, modeSavage |
|            1 |     5870 | 2026-03-12 | FAVBET           | W   | 0.005      | -            | -                | -                | -         |     0.01 | adai, Botpa1, dan4o, Maison, modeSavage |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,780.69)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-30 |      1.000 | $2,160.00      | $2,160.00       |
| 2026-08-02 |      0.957 | $6,000.00      | $5,743.86       |
| 2026-07-26 |      0.911 | $2,500.00      | $2,277.84       |
| 2026-07-05 |      0.772 | $2,088.00      | $1,611.33       |
| 2026-05-31 |      0.539 | $1,000.00      | $538.81         |
| 2026-05-31 |      0.537 | $2,000.00      | $1,074.99       |
| 2026-04-26 |      0.304 | $1,072.00      | $325.51         |
| 2026-03-15 |      0.024 | $2,036.00      | $48.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
