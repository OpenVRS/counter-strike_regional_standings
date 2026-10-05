### Roster Details<br />
Team Name: Rune Eaters<br />
Roster: demente, dukefissura, forkyz, her1tage, noni<br />
Global Rank: [75](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [57]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1044.5<br />
<br />
Final Rank Value (1044.5) = Starting Rank Value (1202.1) + Head To Head Adjustments (-157.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.382[<sup>1</sup>](#table2)
- Bounty Collected: 0.309[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.812[<sup>2</sup>](#table1)

The average of these factors is 0.422<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1202.1
- 400 + ( ( 0.422 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1202.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       80 | 2026-09-04 | 9INE             | L   | 1.000      | -            | -                | -                | -         |   -14.61 | demente, dukefissura, forkyz, her1tage, noni |
|           78 |       99 | 2026-09-03 | NOVAQ            | W   | 1.000      | 0.143        | 0.027 (0.004)    | -                | -         |    14.65 | demente, dukefissura, forkyz, her1tage, noni |
|           77 |      353 | 2026-08-28 | G2 Ares          | W   | 1.000      | -            | -                | -                | -         |    10.63 | demente, dukefissura, forkyz, her1tage, noni |
|           76 |      368 | 2026-08-28 | 9INE             | W   | 1.000      | -            | -                | -                | -         |    16.30 | demente, dukefissura, forkyz, her1tage, noni |
|           75 |      374 | 2026-08-28 | Black Phoenix    | L   | 1.000      | -            | -                | -                | -         |   -19.23 | demente, dukefissura, forkyz, her1tage, noni |
|           74 |      415 | 2026-08-27 | SPARTA           | L   | 1.000      | -            | -                | -                | -         |   -19.71 | demente, dukefissura, forkyz, her1tage, noni |
|           73 |      545 | 2026-08-24 | Walczaki         | W   | 1.000      | 0.143        | 0.064 (0.009)    | -                | -         |    14.39 | demente, dukefissura, forkyz, her1tage, noni |
|           72 |      567 | 2026-08-23 | K27              | L   | 1.000      | -            | -                | -                | -         |    -5.08 | demente, dukefissura, forkyz, her1tage, noni |
|           71 |      739 | 2026-08-16 | DNK              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.69 | demente, forkyz, her1tage, kumao, noni       |
|           70 |     1061 | 2026-08-05 | Butterfly        | L   | 0.977      | -            | -                | -                | -         |   -15.28 | demente, forkyz, her1tage, kumao, noni       |
|           69 |     1170 | 2026-08-01 | SPARTA           | W   | 0.951      | 0.384        | 0.011 (0.004)    | 0.906 (0.331)    | -         |     8.84 | demente, forkyz, her1tage, kumao, noni       |
|           68 |     1215 | 2026-07-31 | SINNERS          | L   | 0.944      | -            | -                | -                | -         |   -13.99 | demente, forkyz, her1tage, kumao, noni       |
|           67 |     1249 | 2026-07-30 | UNiTY            | W   | 0.937      | 0.384        | -                | 0.537 (0.193)    | -         |     7.69 | demente, forkyz, her1tage, kumao, noni       |
|           66 |     1273 | 2026-07-29 | Atreides         | W   | 0.931      | 0.384        | -                | 0.533 (0.191)    | -         |     6.22 | demente, forkyz, her1tage, kumao, noni       |
|           65 |     1310 | 2026-07-28 | ex-MANA          | W   | 0.924      | 0.384        | -                | 0.553 (0.196)    | -         |     3.80 | demente, forkyz, her1tage, kumao, noni       |
|           64 |     1337 | 2026-07-27 | SAW Youngsters   | W   | 0.918      | 0.384        | -                | 0.472 (0.167)    | -         |     4.71 | demente, forkyz, her1tage, kumao, noni       |
|           63 |     1371 | 2026-07-26 | NOVAQ            | L   | 0.911      | -            | -                | -                | -         |   -15.40 | demente, forkyz, her1tage, kumao, noni       |
|           62 |     1391 | 2026-07-25 | ex-RUSTEC        | L   | 0.906      | -            | -                | -                | -         |   -19.80 | demente, forkyz, her1tage, kumao, noni       |
|           61 |     1413 | 2026-07-25 | Omega            | W   | 0.904      | 0.396        | 0.027 (0.010)    | 0.397 (0.142)    | 1 (0.904) |    18.57 | demente, forkyz, her1tage, kumao, noni       |
|           60 |     1422 | 2026-07-25 | DEPO             | W   | 0.902      | 0.396        | 0.021 (0.008)    | 0.441 (0.158)    | 1 (0.902) |    18.11 | demente, forkyz, her1tage, kumao, noni       |
|           59 |     1428 | 2026-07-24 | ALTAY            | W   | 0.902      | -            | -                | -                | 1 (0.902) |     3.19 | demente, forkyz, her1tage, kumao, noni       |
|           58 |     1484 | 2026-07-23 | Entropy          | W   | 0.889      | -            | -                | -                | -         |     2.93 | demente, forkyz, her1tage, kumao, noni       |
|           57 |     1508 | 2026-07-22 | Black Phoenix    | L   | 0.883      | -            | -                | -                | -         |   -19.10 | demente, forkyz, her1tage, kumao, noni       |
|           56 |     1833 | 2026-07-05 | Omega            | L   | 0.772      | -            | -                | -                | -         |    -7.48 | dako, demente, forkyz, kumao, noni           |
|           55 |     2012 | 2026-06-26 | PCIFIC           | L   | 0.710      | -            | -                | -                | -         |   -16.43 | demente, forkyz, her1tage, kumao, noni       |
|           54 |     2022 | 2026-06-25 | NOVAQ            | W   | 0.705      | 0.324        | 0.027 (0.006)    | -                | 1 (0.705) |     8.23 | demente, forkyz, her1tage, kumao, noni       |
|           53 |     2032 | 2026-06-25 | Game Point       | W   | 0.703      | -            | -                | -                | 1 (0.703) |     0.88 | demente, forkyz, her1tage, kumao, noni       |
|           52 |     2036 | 2026-06-25 | NOVAQ            | L   | 0.703      | -            | -                | -                | -         |   -13.82 | demente, forkyz, her1tage, kumao, noni       |
|           51 |     2537 | 2026-05-31 | HOTU             | L   | 0.537      | -            | -                | -                | -         |    -2.07 | demente, forkyz, her1tage, kumao, noni       |
|           50 |     2543 | 2026-05-31 | Omega            | W   | 0.537      | 0.354        | 0.027 (0.005)    | -                | 1 (0.537) |    11.45 | demente, forkyz, her1tage, kumao, noni       |
|           49 |     2547 | 2026-05-31 | HOTU             | L   | 0.536      | -            | -                | -                | -         |    -1.99 | demente, forkyz, her1tage, kumao, noni       |
|           48 |     2587 | 2026-05-30 | Omega            | W   | 0.530      | 0.354        | 0.027 (0.005)    | -                | 1 (0.530) |    11.58 | demente, forkyz, her1tage, kumao, noni       |
|           47 |     2615 | 2026-05-29 | PCIFIC           | W   | 0.524      | -            | -                | -                | 1 (0.524) |     3.93 | demente, forkyz, her1tage, kumao, noni       |
|           46 |     2623 | 2026-05-29 | HOTU             | L   | 0.524      | -            | -                | -                | -         |    -1.87 | demente, forkyz, her1tage, kumao, noni       |
|           45 |     2631 | 2026-05-29 | RBLS             | L   | 0.523      | -            | -                | -                | -         |   -12.95 | demente, forkyz, her1tage, kumao, noni       |
|           44 |     2638 | 2026-05-29 | DNK              | W   | 0.522      | -            | -                | -                | 1 (0.522) |     1.11 | demente, forkyz, her1tage, kumao, noni       |
|           43 |     2723 | 2026-05-27 | Lavked           | L   | 0.509      | -            | -                | -                | -         |   -10.51 | demente, forkyz, her1tage, kumao, noni       |
|           42 |     2743 | 2026-05-26 | fnatic           | L   | 0.504      | -            | -                | -                | -         |    -3.36 | demente, forkyz, her1tage, kumao, noni       |
|           41 |     2753 | 2026-05-26 | Bebop            | L   | 0.504      | -            | -                | -                | -         |   -13.81 | demente, forkyz, her1tage, kumao, noni       |
|           40 |     2769 | 2026-05-25 | ex-RUBY          | L   | 0.499      | -            | -                | -                | -         |    -8.57 | demente, forkyz, her1tage, kumao, noni       |
|           39 |     2776 | 2026-05-25 | HEROIC Academy   | W   | 0.498      | -            | -                | -                | -         |     1.15 | demente, forkyz, her1tage, kumao, noni       |
|           38 |     2783 | 2026-05-25 | DragonClaw       | L   | 0.497      | -            | -                | -                | -         |   -13.28 | demente, forkyz, her1tage, kumao, noni       |
|           37 |     2805 | 2026-05-24 | Bebop            | W   | 0.492      | -            | -                | -                | -         |     1.84 | demente, forkyz, her1tage, kumao, noni       |
|           36 |     2864 | 2026-05-23 | EAC              | W   | 0.485      | 0.435        | 0.024 (0.005)    | 0.775 (0.163)    | -         |     7.90 | demente, forkyz, her1tage, kumao, noni       |
|           35 |     2908 | 2026-05-22 | Just Players     | W   | 0.479      | 0.344        | -                | 0.773 (0.127)    | -         |     4.37 | demente, forkyz, her1tage, kumao, noni       |
|           34 |     2946 | 2026-05-21 | Bushido Wildcats | W   | 0.472      | 0.344        | -                | 1.000 (0.163)    | -         |     2.75 | demente, forkyz, her1tage, kumao, noni       |
|           33 |     3003 | 2026-05-20 | ex-RUBY          | L   | 0.465      | -            | -                | -                | -         |    -8.40 | demente, forkyz, her1tage, kumao, noni       |
|           32 |     3041 | 2026-05-19 | Eternal Fire     | L   | 0.456      | -            | -                | -                | -         |   -10.59 | demente, forkyz, her1tage, kumao, noni       |
|           31 |     3072 | 2026-05-17 | BRUTE            | L   | 0.445      | -            | -                | -                | -         |   -12.78 | demente, forkyz, her1tage, kumao, noni       |
|           30 |     3112 | 2026-05-16 | MASONIC          | W   | 0.436      | -            | -                | -                | -         |     2.83 | demente, forkyz, her1tage, kumao, noni       |
|           29 |     3194 | 2026-05-13 | aAa              | W   | 0.417      | -            | -                | -                | -         |     1.11 | demente, forkyz, her1tage, kumao, noni       |
|           28 |     3221 | 2026-05-12 | MASONIC          | L   | 0.412      | -            | -                | -                | -         |   -10.42 | demente, forkyz, her1tage, kumao, noni       |
|           27 |     3777 | 2026-04-26 | OLDBOYS PL       | L   | 0.305      | -            | -                | -                | -         |    -9.07 | demente, forkyz, her1tage, kumao, noni       |
|           26 |     3815 | 2026-04-26 | Omega            | L   | 0.302      | -            | -                | -                | -         |    -3.77 | demente, forkyz, her1tage, kumao, noni       |
|           25 |     3858 | 2026-04-25 | fnatic           | L   | 0.299      | -            | -                | -                | -         |    -2.24 | demente, forkyz, her1tage, kumao, noni       |
|           24 |     3960 | 2026-04-23 | Permitta         | W   | 0.284      | -            | -                | -                | -         |     1.15 | demente, forkyz, her1tage, kumao, noni       |
|           23 |     3990 | 2026-04-22 | rottweilers      | W   | 0.277      | -            | -                | -                | -         |     0.22 | demente, forkyz, her1tage, kumao, noni       |
|           22 |     4154 | 2026-04-12 | Lavked           | L   | 0.213      | -            | -                | -                | -         |    -5.46 | fitch, forkyz, her1tage, kumao, noni         |
|           21 |     4271 | 2026-04-08 | BRUTE            | W   | 0.184      | -            | -                | -                | -         |     0.35 | fitch, forkyz, her1tage, kumao, noni         |
|           20 |     4311 | 2026-04-07 | INOX Division    | W   | 0.176      | 0.384        | 0.042 (0.003)    | -                | -         |     1.21 | fitch, forkyz, her1tage, kumao, noni         |
|           19 |     4332 | 2026-04-06 | Basement Bobs    | L   | 0.171      | -            | -                | -                | -         |    -5.26 | fitch, forkyz, her1tage, kumao, noni         |
|           18 |     4340 | 2026-04-06 | BRUTE            | L   | 0.171      | -            | -                | -                | -         |    -5.07 | fitch, forkyz, her1tage, kumao, noni         |
|           17 |     4443 | 2026-04-04 | ENCE             | L   | 0.159      | -            | -                | -                | -         |    -3.90 | fitch, forkyz, her1tage, kumao, noni         |
|           16 |     4564 | 2026-04-03 | Omega            | L   | 0.150      | -            | -                | -                | -         |    -1.98 | fitch, forkyz, her1tage, kumao, noni         |
|           15 |     4666 | 2026-04-02 | Lilmix           | W   | 0.143      | -            | -                | -                | -         |     0.08 | fitch, forkyz, her1tage, kumao, noni         |
|           14 |     4733 | 2026-04-01 | NEW VISION       | L   | 0.138      | -            | -                | -                | -         |    -4.00 | fitch, forkyz, her1tage, kumao, noni         |
|           13 |     4804 | 2026-03-31 | The Glecs        | W   | 0.132      | -            | -                | -                | -         |     0.05 | fitch, forkyz, her1tage, kumao, noni         |
|           12 |     4853 | 2026-03-31 | ALGO             | W   | 0.130      | -            | -                | -                | -         |     0.23 | fitch, forkyz, her1tage, kumao, noni         |
|           11 |     4904 | 2026-03-30 | ex-RUSTEC        | L   | 0.124      | -            | -                | -                | -         |    -2.94 | fitch, forkyz, her1tage, kumao, noni         |
|           10 |     4963 | 2026-03-29 | Permitta         | L   | 0.118      | -            | -                | -                | -         |    -3.27 | fitch, forkyz, her1tage, kumao, noni         |
|            9 |     4994 | 2026-03-29 | Basement Bobs    | L   | 0.117      | -            | -                | -                | -         |    -3.60 | dako, forkyz, her1tage, kumao, noni          |
|            8 |     5030 | 2026-03-28 | Bebop            | L   | 0.113      | -            | -                | -                | -         |    -3.27 | dako, forkyz, her1tage, kumao, noni          |
|            7 |     5175 | 2026-03-26 | OlyBet           | W   | 0.096      | -            | -                | -                | -         |     0.11 | dako, forkyz, her1tage, kumao, noni          |
|            6 |     5270 | 2026-03-24 | Black Phoenix    | L   | 0.084      | -            | -                | -                | -         |    -2.25 | dako, forkyz, her1tage, kumao, noni          |
|            5 |     5400 | 2026-03-22 | PsychoFace       | L   | 0.071      | -            | -                | -                | -         |    -1.81 | dako, forkyz, her1tage, kumao, noni          |
|            4 |     5402 | 2026-03-22 | Hashiras         | L   | 0.070      | -            | -                | -                | -         |    -2.10 | dako, forkyz, her1tage, kumao, noni          |
|            3 |     5567 | 2026-03-19 | The Last Resort  | L   | 0.050      | -            | -                | -                | -         |    -1.24 | dako, forkyz, her1tage, kumao, noni          |
|            2 |     5647 | 2026-03-17 | Inner Circle     | L   | 0.037      | -            | -                | -                | -         |    -0.15 | dako, forkyz, her1tage, kumao, noni          |
|            1 |     5839 | 2026-03-13 | STATE            | W   | 0.010      | -            | -                | -                | -         |     0.07 | dako, forkyz, her1tage, kumao, noni          |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,175.33)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-16 |      1.000 | $3,240.00      | $3,240.00       |
| 2026-07-26 |      0.911 | $6,000.00      | $5,466.82       |
| 2026-07-05 |      0.772 | $1,252.00      | $966.18         |
| 2026-06-26 |      0.711 | $1,023.00      | $727.08         |
| 2026-05-31 |      0.537 | $3,000.00      | $1,612.49       |
| 2026-04-26 |      0.304 | $536.00        | $162.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
