### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: HEAP, jocab, Lekr0, nawwk, titulus<br />
Global Rank: [111](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [84]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  883.8<br />
<br />
Final Rank Value (883.8) = Starting Rank Value (856.6) + Head To Head Adjustments (27.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.368[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.103[<sup>2</sup>](#table1)
- LAN Wins: 0.184[<sup>2</sup>](#table1)

The average of these factors is 0.240<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 856.6
- 400 + ( ( 0.240 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 856.6


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
|           44 |     1994 | 2026-06-27 | roamsfiest       | L   | 0.717      | -            | -                | -                | -         |   -15.76 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           43 |     2008 | 2026-06-26 | ReThink          | L   | 0.711      | -            | -                | -                | -         |   -14.12 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           42 |     2056 | 2026-06-23 | train launcher   | W   | 0.692      | -            | -                | -                | 0 (0.000) |     4.46 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           41 |     2060 | 2026-06-23 | Entropy          | W   | 0.691      | -            | -                | -                | 0 (0.000) |     4.77 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           40 |     2385 | 2026-06-06 | 100 Thieves      | L   | 0.579      | -            | -                | -                | -         |    -1.22 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           39 |     2404 | 2026-06-06 | Color            | W   | 0.577      | 0.384        | 0.052 (0.012)    | 0.825 (0.183)    | 0 (0.000) |    11.73 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           38 |     2435 | 2026-06-05 | ex-Zero Tenacity | W   | 0.569      | 0.384        | 0.031 (0.007)    | 1.000 (0.219)    | -         |     8.69 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           37 |     2469 | 2026-06-03 | Permitta         | W   | 0.558      | 0.384        | 0.007 (0.002)    | 0.689 (0.148)    | -         |     7.58 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           36 |     2586 | 2026-05-30 | WW               | L   | 0.530      | -            | -                | -                | -         |    -3.56 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           35 |     2628 | 2026-05-29 | Nordic Partners  | W   | 0.523      | 0.384        | 0.008 (0.002)    | 0.320 (0.064)    | -         |     8.17 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           34 |     2653 | 2026-05-28 | DragonClaw       | L   | 0.519      | -            | -                | -                | -         |    -9.30 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           33 |     2724 | 2026-05-27 | Phantom          | W   | 0.509      | 0.384        | 0.037 (0.007)    | 0.503 (0.098)    | -         |    12.28 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           32 |     3108 | 2026-05-16 | Butterfly        | L   | 0.437      | -            | -                | -                | -         |    -3.43 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           31 |     3135 | 2026-05-15 | ex-RUBY          | L   | 0.431      | -            | -                | -                | -         |    -3.69 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           30 |     3204 | 2026-05-13 | Walczaki         | W   | 0.416      | 0.435        | 0.064 (0.011)    | 0.780 (0.141)    | -         |     9.99 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           29 |     3273 | 2026-05-11 | Betclic          | W   | 0.404      | 0.435        | 0.004 (0.001)    | -                | -         |     5.40 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           28 |     3343 | 2026-05-09 | Eternal Fire     | L   | 0.390      | -            | -                | -                | -         |    -5.10 | jocab, nawwk, Sapec, Svedjehed, titulus |
|           27 |     3485 | 2026-05-02 | INFINITE         | L   | 0.346      | -            | -                | -                | -         |    -1.37 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           26 |     3501 | 2026-05-02 | G2 Ares          | W   | 0.344      | 0.303        | 0.014 (0.001)    | 0.686 (0.072)    | 1 (0.344) |     7.68 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           25 |     3513 | 2026-05-02 | MTX              | W   | 0.343      | -            | -                | -                | 1 (0.343) |     1.50 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           24 |     3547 | 2026-05-01 | Lilmix           | W   | 0.339      | -            | -                | -                | 1 (0.339) |     3.65 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           23 |     3549 | 2026-05-01 | INFINITE         | L   | 0.338      | -            | -                | -                | -         |    -1.28 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           22 |     3558 | 2026-05-01 | dJ uNT frIENDS   | W   | 0.338      | -            | -                | -                | 1 (0.338) |     0.77 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           21 |     3655 | 2026-04-29 | illwill          | L   | 0.323      | -            | -                | -                | -         |    -6.42 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           20 |     4010 | 2026-04-20 | BBL              | L   | 0.266      | -            | -                | -                | -         |    -1.48 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           19 |     4127 | 2026-04-14 | ECSTATIC         | L   | 0.224      | -            | -                | -                | -         |    -5.44 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           18 |     4140 | 2026-04-13 | SINNERS          | L   | 0.219      | -            | -                | -                | -         |    -1.48 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           17 |     4237 | 2026-04-09 | INOX Division    | L   | 0.192      | -            | -                | -                | -         |    -2.48 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           16 |     4293 | 2026-04-07 | PsychoFace       | W   | 0.179      | -            | -                | -                | -         |     3.42 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           15 |     4303 | 2026-04-07 | Black Phoenix    | L   | 0.177      | -            | -                | -                | -         |    -2.68 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           14 |     4371 | 2026-04-05 | ENCE             | W   | 0.165      | 0.384        | 0.012 (0.001)    | 0.513 (0.033)    | -         |     3.19 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           13 |     4527 | 2026-04-03 | ex-MANA          | W   | 0.152      | 0.384        | -                | 0.553 (0.032)    | -         |     1.61 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           12 |     4627 | 2026-04-02 | illwill          | W   | 0.145      | -            | -                | -                | -         |     1.59 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           11 |     4671 | 2026-04-02 | Nemesis          | W   | 0.143      | 0.435        | 0.168 (0.010)    | 0.575 (0.036)    | -         |     3.63 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           10 |     4712 | 2026-04-01 | Privateer        | W   | 0.139      | -            | -                | -                | -         |     1.56 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            9 |     4741 | 2026-04-01 | ECSTATIC         | W   | 0.137      | -            | -                | -                | -         |     1.03 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            8 |     4816 | 2026-03-31 | The Last Resort  | W   | 0.131      | -            | -                | -                | -         |     2.69 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            7 |     4831 | 2026-03-31 | PsychoFace       | L   | 0.130      | -            | -                | -                | -         |    -1.58 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            6 |     4917 | 2026-03-30 | rottweilers      | W   | 0.124      | -            | -                | -                | -         |     0.49 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            5 |     5079 | 2026-03-28 | Alliance         | L   | 0.110      | -            | -                | -                | -         |    -0.15 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            4 |     5125 | 2026-03-27 | Betclic          | W   | 0.104      | -            | -                | -                | 1 (0.104) |     1.51 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            3 |     5248 | 2026-03-24 | Famalicão        | W   | 0.085      | -            | -                | -                | 1 (0.085) |     0.32 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            2 |     5260 | 2026-03-24 | M80              | L   | 0.084      | -            | -                | -                | -         |    -0.32 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            1 |     5272 | 2026-03-24 | Famalicão        | W   | 0.084      | -            | -                | -                | 1 (0.084) |     0.31 | HEAP, jocab, Lekr0, nawwk, Sapec        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,660.60)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-27 |      0.719 | $841.00        | $604.54         |
| 2026-06-06 |      0.579 | $5,000.00      | $2,892.98       |
| 2026-05-30 |      0.532 | $2,500.00      | $1,329.43       |
| 2026-05-02 |      0.346 | $1,000.00      | $345.82         |
| 2026-04-09 |      0.192 | $5,000.00      | $960.80         |
| 2026-04-02 |      0.145 | $22,000.00     | $3,191.13       |
| 2026-03-28 |      0.112 | $3,000.00      | $335.91         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
