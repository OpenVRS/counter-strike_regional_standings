### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: felps, HEN1, JOTA, Luken, NEKIZ<br />
Global Rank: [55](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [13]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  1234.9<br />
<br />
Final Rank Value (1234.9) = Starting Rank Value (1212.9) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.386[<sup>1</sup>](#table2)
- Bounty Collected: 0.390[<sup>2</sup>](#table1)
- Opponent Network: 0.158[<sup>2</sup>](#table1)
- LAN Wins: 0.774[<sup>2</sup>](#table1)

The average of these factors is 0.427<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1212.9
- 400 + ( ( 0.427 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1212.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.307
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |      334 | 2026-05-22 | IC Esports             | L   | 1.000      | -            | -                | -                | -         |   -13.42 | fer, HEN1, JOTA, Luken, NEKIZ   |
|           30 |      356 | 2026-05-22 | Acend                  | L   | 1.000      | -            | -                | -                | -         |   -17.14 | fer, HEN1, JOTA, Luken, NEKIZ   |
|           29 |     1798 | 2026-04-05 | PaiN Gaming            | L   | 0.827      | -            | -                | -                | -         |    -4.28 | felps, HEN1, JOTA, Luken, NEKIZ |
|           28 |     1854 | 2026-04-04 | Bounty Hunters Esports | W   | 0.821      | 0.435        | 0.035 (0.012)    | 0.652 (0.233)    | 1 (0.821) |     7.65 | felps, HEN1, JOTA, Luken, NEKIZ |
|           27 |     1870 | 2026-04-04 | RED Canids             | W   | 0.819      | 0.435        | 0.042 (0.015)    | 0.341 (0.122)    | 1 (0.819) |    10.66 | felps, HEN1, JOTA, Luken, NEKIZ |
|           26 |     1937 | 2026-04-03 | Game Hunters           | W   | 0.814      | 0.435        | -                | 0.390 (0.138)    | 1 (0.814) |     2.29 | felps, HEN1, JOTA, Luken, NEKIZ |
|           25 |     2026 | 2026-04-02 | Turma do Pagode        | L   | 0.808      | -            | -                | -                | -         |   -13.50 | felps, HEN1, JOTA, Luken, NEKIZ |
|           24 |     2042 | 2026-04-02 | Yawara E-Sports        | W   | 0.807      | 0.435        | 0.036 (0.013)    | 0.517 (0.181)    | 1 (0.807) |     3.92 | felps, HEN1, JOTA, Luken, NEKIZ |
|           23 |     2330 | 2026-03-30 | PaiN Gaming            | L   | 0.786      | -            | -                | -                | -         |    -4.18 | felps, HEN1, JOTA, Luken, NEKIZ |
|           22 |     2365 | 2026-03-29 | Legacy                 | L   | 0.781      | -            | -                | -                | -         |    -0.69 | felps, HEN1, JOTA, Luken, NEKIZ |
|           21 |     2394 | 2026-03-29 | LargadosyPelados       | W   | 0.779      | 0.393        | 0.061 (0.019)    | 0.885 (0.271)    | 1 (0.779) |     9.74 | felps, HEN1, JOTA, Luken, NEKIZ |
|           20 |     2589 | 2026-03-26 | MIBR                   | W   | 0.759      | 0.393        | 0.256 (0.076)    | 0.429 (0.128)    | 1 (0.759) |    19.44 | felps, HEN1, JOTA, Luken, NEKIZ |
|           19 |     2598 | 2026-03-26 | ShindeN                | W   | 0.758      | 0.393        | 0.049 (0.015)    | 0.609 (0.182)    | 1 (0.758) |    11.32 | felps, HEN1, JOTA, Luken, NEKIZ |
|           18 |     3208 | 2026-03-14 | Ninjas in Pyjamas      | L   | 0.678      | -            | -                | -                | -         |    -5.53 | felps, HEN1, JOTA, Luken, NEKIZ |
|           17 |     3254 | 2026-03-13 | Team Liquid            | W   | 0.672      | 0.349        | 0.137 (0.032)    | -                | 1 (0.672) |    12.76 | felps, HEN1, JOTA, Luken, NEKIZ |
|           16 |     3259 | 2026-03-13 | BESTIA                 | W   | 0.672      | 0.349        | -                | 0.660 (0.155)    | 1 (0.672) |    10.59 | felps, HEN1, JOTA, Luken, NEKIZ |
|           15 |     3262 | 2026-03-13 | FC Famalicão Esports   | W   | 0.671      | -            | -                | -                | 1 (0.671) |     1.81 | felps, HEN1, JOTA, Luken, NEKIZ |
|           14 |     3268 | 2026-03-13 | Hypewrld               | L   | 0.671      | -            | -                | -                | -         |   -19.33 | felps, HEN1, JOTA, Luken, NEKIZ |
|           13 |     3722 | 2026-03-04 | Ninjas in Pyjamas      | L   | 0.612      | -            | -                | -                | -         |    -4.93 | felps, HEN1, JOTA, Luken, NEKIZ |
|           12 |     3764 | 2026-03-03 | 3DMAX                  | L   | 0.605      | -            | -                | -                | -         |    -3.48 | felps, HEN1, JOTA, Luken, NEKIZ |
|           11 |     3801 | 2026-03-02 | Team Liquid            | W   | 0.600      | 0.613        | 0.137 (0.050)    | 0.240 (0.088)    | -         |    11.66 | felps, HEN1, JOTA, Luken, NEKIZ |
|           10 |     3859 | 2026-03-01 | G2 Esports             | L   | 0.591      | -            | -                | -                | -         |    -1.20 | felps, HEN1, JOTA, Luken, NEKIZ |
|            9 |     4939 | 2026-02-06 | 9z Team                | L   | 0.439      | -            | -                | -                | -         |    -1.56 | felps, HEN1, JOTA, Luken, NEKIZ |
|            8 |     5260 | 2026-01-25 | MIBR                   | L   | 0.360      | -            | -                | -                | -         |    -1.87 | felps, HEN1, JOTA, Luken, NEKIZ |
|            7 |     5291 | 2026-01-24 | 9z Team                | W   | 0.353      | 0.384        | 0.253 (0.034)    | 0.590 (0.080)    | -         |    10.02 | felps, HEN1, JOTA, Luken, NEKIZ |
|            6 |     5312 | 2026-01-24 | Sharks Esports         | W   | 0.351      | 0.384        | 0.060 (0.008)    | -                | -         |     6.85 | felps, HEN1, JOTA, Luken, NEKIZ |
|            5 |     5381 | 2026-01-22 | BESTIA Academy         | W   | 0.341      | -            | -                | -                | -         |     0.78 | felps, HEN1, JOTA, Luken, NEKIZ |
|            4 |     5388 | 2026-01-22 | A Fundação             | W   | 0.340      | -            | -                | -                | -         |     0.12 | felps, HEN1, JOTA, Luken, NEKIZ |
|            3 |     5584 | 2026-01-16 | Imperial Esports       | L   | 0.301      | -            | -                | -                | -         |    -5.32 | felps, HEN1, JOTA, Luken, NEKIZ |
|            2 |     5651 | 2026-01-15 | Game Hunters           | W   | 0.293      | -            | -                | -                | -         |     0.23 | felps, HEN1, JOTA, Luken, NEKIZ |
|            1 |     5683 | 2026-01-14 | MIBR                   | L   | 0.286      | -            | -                | -                | -         |    -1.45 | felps, HEN1, JOTA, Luken, NEKIZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,964.34)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $500.00        | $500.00         |
| 2026-04-05 |      0.827 | $10,000.00     | $8,265.28       |
| 2026-03-30 |      0.787 | $2,863.00      | $2,252.23       |
| 2026-03-05 |      0.619 | $4,500.00      | $2,787.40       |
| 2026-01-25 |      0.360 | $6,000.00      | $2,159.44       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
