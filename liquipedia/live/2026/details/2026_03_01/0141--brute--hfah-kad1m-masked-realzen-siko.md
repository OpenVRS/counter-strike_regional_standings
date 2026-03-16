### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, mASKED, realzen, SiKO<br />
Global Rank: [141](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [102]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  826.4<br />
<br />
Final Rank Value (826.4) = Starting Rank Value (807.3) + Head To Head Adjustments (19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.310[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 807.3
- 400 + ( ( 0.215 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 807.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.316
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |      191 | 2026-02-24 | MANA eSports       | L   | 1.000      | -            | -                | -                | -         |   -13.41 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           26 |      206 | 2026-02-24 | 100 Thieves        | L   | 1.000      | -            | -                | -                | -         |    -2.44 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           25 |      221 | 2026-02-24 | LAGUNA             | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     2.44 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           24 |      452 | 2026-02-19 | ASTRAL Esports     | L   | 1.000      | -            | -                | -                | -         |   -12.99 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           23 |      571 | 2026-02-17 | Illwill            | L   | 1.000      | -            | -                | -                | -         |    -2.00 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           22 |      605 | 2026-02-16 | MOUZ NXT           | L   | 1.000      | -            | -                | -                | -         |    -6.21 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           21 |      722 | 2026-02-14 | FUZOS              | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.480 (0.184)    | 0 (0.000) |    17.36 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           20 |      877 | 2026-02-10 | Home               | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.171 (0.066)    | 0 (0.000) |    10.08 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           19 |      907 | 2026-02-09 | Bebop              | W   | 1.000      | 0.384        | 0.003 (0.001)    | 0.634 (0.244)    | 0 (0.000) |    16.75 | hfah, KAD1M, mASKED, realzen, SiKO      |
|           18 |     1238 | 2026-01-29 | ARCRED             | L   | 0.985      | -            | -                | -                | -         |    -6.47 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           17 |     1285 | 2026-01-27 | ALLINNERS          | W   | 0.971      | 0.435        | 0.008 (0.003)    | 0.174 (0.073)    | 0 (0.000) |    16.11 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           16 |     1312 | 2026-01-25 | Ex-RUBY            | L   | 0.960      | -            | -                | -                | -         |    -7.20 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           15 |     1346 | 2026-01-24 | AM Gaming          | L   | 0.953      | -            | -                | -                | -         |    -6.40 | hfah, KAD1M, realzen, The eLiVe, w4rden |
|           14 |     1501 | 2026-01-20 | MASONIC            | W   | 0.927      | 0.384        | 0.000 (0.000)    | 0.517 (0.184)    | 0 (0.000) |    18.06 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|           13 |     1549 | 2026-01-18 | Los kogutos        | W   | 0.912      | 0.384        | 0.037 (0.013)    | 1.000 (0.351)    | 0 (0.000) |    21.84 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|           12 |     1694 | 2026-01-15 | Team Pigeons       | W   | 0.892      | 0.384        | 0.066 (0.023)    | 0.399 (0.137)    | 0 (0.000) |    16.64 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|           11 |     1757 | 2026-01-11 | The Last Resort    | L   | 0.865      | -            | -                | -                | -         |   -14.39 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|           10 |     1775 | 2026-01-07 | HYPERSPIRIT        | L   | 0.838      | -            | -                | -                | -         |   -13.40 | KAD1M, realzen, SiKO, The eLiVe, w4rden |
|            9 |     1921 | 2025-12-20 | 33                 | L   | 0.718      | -            | -                | -                | -         |    -3.92 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            8 |     2313 | 2025-11-29 | UNiTY esports      | L   | 0.578      | -            | -                | -                | -         |    -6.71 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            7 |     2335 | 2025-11-28 | Ex-Fingers Crossed | L   | 0.573      | -            | -                | -                | -         |    -5.04 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            6 |     3787 | 2025-10-11 | Ex-Fingers Crossed | L   | 0.251      | -            | -                | -                | -         |    -2.25 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            5 |     3801 | 2025-10-10 | GLORE              | W   | 0.247      | 0.371        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.247) |     0.72 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            4 |     3868 | 2025-10-09 | SINNERS Esports    | L   | 0.239      | -            | -                | -                | -         |    -0.34 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            3 |     4356 | 2025-09-28 | UNiTY esports      | W   | 0.166      | 0.333        | 0.009 (0.000)    | 0.529 (0.029)    | 0 (0.000) |     3.17 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            2 |     4397 | 2025-09-27 | Dark Tigers        | W   | 0.161      | -            | -                | -                | -         |     0.47 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |
|            1 |     4500 | 2025-09-25 | Ex-Fingers Crossed | L   | 0.147      | -            | -                | -                | -         |    -1.37 | KAD1M, N1KOLAJ, realzen, SiKO, w4rden   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,978.09)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-29 |      0.579 | $2,402.98      | $1,392.00       |
| 2025-10-11 |      0.252 | $2,323.68      | $586.08         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
