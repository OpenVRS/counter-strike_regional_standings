### Roster Details<br />
Team Name: Johnny Speeds<br />
Roster: HEAP, jocab, Lekr0, nawwk, titulus<br />
Global Rank: [112](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [85]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  880.8<br />
<br />
Final Rank Value (880.8) = Starting Rank Value (853.5) + Head To Head Adjustments (27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.304[<sup>2</sup>](#table1)
- Opponent Network: 0.101[<sup>2</sup>](#table1)
- LAN Wins: 0.180[<sup>2</sup>](#table1)

The average of these factors is 0.238<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 853.5
- 400 + ( ( 0.238 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 853.5


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
|           44 |     2022 | 2026-06-27 | roamsfiest       | L   | 0.712      | -            | -                | -                | -         |   -15.57 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           43 |     2036 | 2026-06-26 | ReThink          | L   | 0.706      | -            | -                | -                | -         |   -13.92 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           42 |     2084 | 2026-06-23 | train launcher   | W   | 0.687      | -            | -                | -                | 0 (0.000) |     4.49 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           41 |     2088 | 2026-06-23 | Entropy          | W   | 0.686      | -            | -                | -                | 0 (0.000) |     4.81 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           40 |     2413 | 2026-06-06 | 100 Thieves      | L   | 0.573      | -            | -                | -                | -         |    -1.18 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           39 |     2432 | 2026-06-06 | Color            | W   | 0.571      | 0.384        | 0.052 (0.011)    | 0.824 (0.181)    | 0 (0.000) |    11.65 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           38 |     2463 | 2026-06-05 | ex-Zero Tenacity | W   | 0.564      | 0.384        | 0.031 (0.007)    | 1.000 (0.217)    | -         |     8.69 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           37 |     2497 | 2026-06-03 | Permitta         | W   | 0.552      | 0.384        | 0.004 (0.001)    | 0.683 (0.145)    | -         |     7.33 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           36 |     2614 | 2026-05-30 | WW               | L   | 0.525      | -            | -                | -                | -         |    -3.56 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           35 |     2656 | 2026-05-29 | Nordic Partners  | W   | 0.518      | 0.384        | 0.008 (0.002)    | 0.320 (0.064)    | -         |     8.12 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           34 |     2681 | 2026-05-28 | DragonClaw       | L   | 0.513      | -            | -                | -                | -         |    -9.15 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           33 |     2752 | 2026-05-27 | Phantom          | W   | 0.504      | 0.384        | 0.037 (0.007)    | 0.502 (0.097)    | -         |    12.20 | HEAP, jocab, Lekr0, nawwk, titulus      |
|           32 |     3136 | 2026-05-16 | Butterfly        | L   | 0.432      | -            | -                | -                | -         |    -3.37 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           31 |     3163 | 2026-05-15 | ex-RUBY          | L   | 0.426      | -            | -                | -                | -         |    -3.60 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           30 |     3232 | 2026-05-13 | Walczaki         | W   | 0.410      | 0.435        | 0.063 (0.011)    | 0.774 (0.138)    | -         |     9.87 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           29 |     3301 | 2026-05-11 | Betclic          | W   | 0.398      | 0.435        | 0.004 (0.001)    | -                | -         |     5.35 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           28 |     3371 | 2026-05-09 | Eternal Fire     | L   | 0.385      | -            | -                | -                | -         |    -4.99 | jocab, nawwk, Sapec, Svedjehed, titulus |
|           27 |     3513 | 2026-05-02 | INFINITE         | L   | 0.340      | -            | -                | -                | -         |    -1.34 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           26 |     3529 | 2026-05-02 | G2 Ares          | W   | 0.339      | 0.303        | 0.014 (0.001)    | 0.684 (0.070)    | 1 (0.339) |     7.58 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           25 |     3541 | 2026-05-02 | MTX              | W   | 0.338      | -            | -                | -                | 1 (0.338) |     1.50 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           24 |     3575 | 2026-05-01 | Lilmix           | W   | 0.333      | -            | -                | -                | 1 (0.333) |     3.62 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           23 |     3577 | 2026-05-01 | INFINITE         | L   | 0.333      | -            | -                | -                | -         |    -1.25 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           22 |     3586 | 2026-05-01 | dJ uNT frIENDS   | W   | 0.332      | -            | -                | -                | 1 (0.332) |     0.77 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           21 |     3683 | 2026-04-29 | illwill          | L   | 0.318      | -            | -                | -                | -         |    -6.31 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           20 |     4038 | 2026-04-20 | BBL              | L   | 0.260      | -            | -                | -                | -         |    -1.44 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           19 |     4155 | 2026-04-14 | ECSTATIC         | L   | 0.219      | -            | -                | -                | -         |    -5.31 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           18 |     4168 | 2026-04-13 | SINNERS          | L   | 0.213      | -            | -                | -                | -         |    -1.45 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           17 |     4265 | 2026-04-09 | INOX Division    | L   | 0.187      | -            | -                | -                | -         |    -2.39 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           16 |     4321 | 2026-04-07 | PsychoFace       | W   | 0.173      | -            | -                | -                | -         |     3.32 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           15 |     4331 | 2026-04-07 | Black Phoenix    | L   | 0.172      | -            | -                | -                | -         |    -2.58 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           14 |     4399 | 2026-04-05 | ENCE             | W   | 0.160      | 0.384        | 0.012 (0.001)    | 0.511 (0.031)    | -         |     3.12 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           13 |     4555 | 2026-04-03 | ex-MANA          | W   | 0.146      | 0.384        | -                | 0.549 (0.031)    | -         |     1.61 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           12 |     4655 | 2026-04-02 | illwill          | W   | 0.140      | -            | -                | -                | -         |     1.54 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           11 |     4699 | 2026-04-02 | Nemesis          | W   | 0.137      | 0.435        | 0.167 (0.010)    | 0.572 (0.034)    | -         |     3.50 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|           10 |     4740 | 2026-04-01 | Privateer        | W   | 0.133      | -            | -                | -                | -         |     1.52 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            9 |     4769 | 2026-04-01 | ECSTATIC         | W   | 0.132      | -            | -                | -                | -         |     0.99 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            8 |     4844 | 2026-03-31 | The Last Resort  | W   | 0.126      | -            | -                | -                | -         |     2.59 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            7 |     4859 | 2026-03-31 | PsychoFace       | L   | 0.125      | -            | -                | -                | -         |    -1.51 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            6 |     4945 | 2026-03-30 | rottweilers      | W   | 0.118      | -            | -                | -                | -         |     0.47 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            5 |     5107 | 2026-03-28 | Alliance         | L   | 0.105      | -            | -                | -                | -         |    -0.14 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            4 |     5153 | 2026-03-27 | Betclic          | W   | 0.099      | -            | -                | -                | 1 (0.099) |     1.43 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            3 |     5276 | 2026-03-24 | Famalicão        | W   | 0.080      | -            | -                | -                | 1 (0.080) |     0.30 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            2 |     5288 | 2026-03-24 | M80              | L   | 0.079      | -            | -                | -                | -         |    -0.29 | HEAP, jocab, Lekr0, nawwk, Sapec        |
|            1 |     5300 | 2026-03-24 | Famalicão        | W   | 0.078      | -            | -                | -                | 1 (0.078) |     0.29 | HEAP, jocab, Lekr0, nawwk, Sapec        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,445.59)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-27 |      0.713 | $841.00        | $599.94         |
| 2026-06-06 |      0.573 | $5,000.00      | $2,865.66       |
| 2026-05-30 |      0.526 | $2,500.00      | $1,315.76       |
| 2026-05-02 |      0.340 | $1,000.00      | $340.35         |
| 2026-04-09 |      0.187 | $5,000.00      | $933.48         |
| 2026-04-02 |      0.140 | $22,000.00     | $3,070.89       |
| 2026-03-28 |      0.107 | $3,000.00      | $319.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
