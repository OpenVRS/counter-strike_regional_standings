### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, mASKED, realzen, SiKO<br />
Global Rank: [160](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [115]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  801.9<br />
<br />
Final Rank Value (801.9) = Starting Rank Value (781.3) + Head To Head Adjustments (20.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.309[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.071[<sup>2</sup>](#table1)
- LAN Wins: 0.121[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 781.3
- 400 + ( ( 0.199 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 781.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.256
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           24 |      379 | 2026-02-24 | MANA eSports       | L   | 1.000      | -            | -                | -                | -         |   -12.48 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           23 |      397 | 2026-02-24 | 100 Thieves        | L   | 1.000      | -            | -                | -                | -         |    -2.02 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           22 |      413 | 2026-02-24 | LAGUNA             | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.79 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           21 |      545 | 2026-02-21 | KOLESIE            | L   | 1.000      | -            | -                | -                | -         |    -3.93 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           20 |      659 | 2026-02-19 | ASTRAL Esports     | L   | 1.000      | -            | -                | -                | -         |   -11.80 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           19 |      767 | 2026-02-17 | Illwill            | L   | 1.000      | -            | -                | -                | -         |    -1.90 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           18 |      797 | 2026-02-16 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -5.03 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           17 |      911 | 2026-02-14 | FUZOS              | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.426 (0.061)    | 0 (0.000) |    18.25 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           16 |     1057 | 2026-02-10 | Home               | W   | 1.000      | 0.143        | 0.001 (0.000)    | 0.161 (0.023)    | 0 (0.000) |    11.71 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           15 |     1085 | 2026-02-09 | Bebop              | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.696 (0.099)    | 0 (0.000) |    18.21 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           14 |     1416 | 2026-01-29 | ARCRED             | L   | 0.943      | -            | -                | -                | -         |    -3.20 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           13 |     1461 | 2026-01-27 | ALLINNERS          | W   | 0.930      | 0.435        | 0.009 (0.004)    | 0.193 (0.078)    | 0 (0.000) |    18.73 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           12 |     1489 | 2026-01-25 | Ex-RUBY            | L   | 0.918      | -            | -                | -                | -         |    -5.67 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           11 |     1526 | 2026-01-24 | AM Gaming          | L   | 0.912      | -            | -                | -                | -         |    -3.71 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           10 |     1727 | 2026-01-18 | Los kogutos        | W   | 0.871      | 0.384        | 0.040 (0.013)    | 1.000 (0.335)    | 0 (0.000) |    21.01 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|            9 |     1874 | 2026-01-15 | Team Pigeons       | W   | 0.851      | 0.384        | 0.063 (0.021)    | 0.344 (0.112)    | 0 (0.000) |    16.19 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|            8 |     1937 | 2026-01-11 | The Last Resort    | L   | 0.823      | -            | -                | -                | -         |   -12.19 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|            7 |     1959 | 2026-01-07 | HYPERSPIRIT        | L   | 0.797      | -            | -                | -                | -         |   -11.37 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|            6 |     2101 | 2025-12-20 | 33                 | L   | 0.677      | -            | -                | -                | -         |    -3.23 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            5 |     2497 | 2025-11-29 | UNiTY esports      | L   | 0.537      | -            | -                | -                | -         |    -4.48 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            4 |     2517 | 2025-11-28 | Ex-Fingers Crossed | L   | 0.532      | -            | -                | -                | -         |    -4.46 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            3 |     3932 | 2025-10-11 | Ex-Fingers Crossed | L   | 0.210      | -            | -                | -                | -         |    -1.88 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            2 |     3946 | 2025-10-10 | GLORE              | W   | 0.206      | 0.371        | 0.000 (0.000)    | 0.007 (0.001)    | 1 (0.206) |     1.24 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            1 |     4011 | 2025-10-09 | SINNERS Esports    | L   | 0.197      | -            | -                | -                | -         |    -0.20 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,782.57)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      0.538 | $2,402.98      | $1,292.60       |
| 2025-10-11 |      0.211 | $2,323.68      | $489.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
