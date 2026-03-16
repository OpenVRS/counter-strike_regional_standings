### Roster Details<br />
Team Name: WhiteBird<br />
Roster: El1an, Forester, Lack1, NickelBack, TRAVIS<br />
Global Rank: [41](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [31]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1269.1<br />
<br />
Final Rank Value (1269.1) = Starting Rank Value (1422.7) + Head To Head Adjustments (-153.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.504[<sup>1</sup>](#table2)
- Bounty Collected: 0.419[<sup>2</sup>](#table1)
- Opponent Network: 0.347[<sup>2</sup>](#table1)
- LAN Wins: 0.861[<sup>2</sup>](#table1)

The average of these factors is 0.533<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1422.7
- 400 + ( ( 0.533 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1422.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.882
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           44 |       34 | 2026-03-06 | WW Team              | L   | 1.000      | -            | -                | -                | -         |   -22.28 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           43 |       37 | 2026-03-06 | VP.Prodigy           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.43 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           42 |       41 | 2026-03-06 | 1w Team              | W   | 1.000      | 0.333        | 0.047 (0.016)    | 0.748 (0.249)    | 1 (1.000) |    11.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           41 |       45 | 2026-03-05 | TDK                  | W   | 1.000      | 0.333        | 0.073 (0.024)    | 0.851 (0.284)    | 1 (1.000) |    14.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           40 |       57 | 2026-03-05 | VP.Prodigy           | L   | 1.000      | -            | -                | -                | -         |   -26.37 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           39 |      111 | 2026-03-03 | Younglings           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.31 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           38 |      121 | 2026-03-03 | Nuclear TigeRES      | L   | 1.000      | -            | -                | -                | -         |   -17.38 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           37 |      129 | 2026-03-03 | 5Actors              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           36 |      151 | 2026-03-02 | HOTU                 | L   | 1.000      | -            | -                | -                | -         |   -11.22 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           35 |      210 | 2026-02-28 | MOUZ NXT             | W   | 1.000      | 0.435        | 0.036 (0.016)    | 1.000 (0.435)    | 0 (0.000) |     8.08 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           34 |      239 | 2026-02-27 | TDK                  | W   | 1.000      | 0.435        | 0.073 (0.032)    | 0.851 (0.370)    | -         |    14.51 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           33 |      247 | 2026-02-27 | SINNERS Esports      | W   | 1.000      | 0.435        | 0.251 (0.109)    | 0.808 (0.351)    | -         |    19.78 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           32 |      305 | 2026-02-26 | BASEMENT BOYS        | W   | 1.000      | -            | -                | -                | -         |     1.59 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           31 |      315 | 2026-02-26 | Alliance             | W   | 1.000      | 0.435        | 0.130 (0.056)    | 0.882 (0.383)    | -         |    18.52 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           30 |      393 | 2026-02-24 | Leo Team             | L   | 1.000      | -            | -                | -                | -         |   -27.15 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           29 |      410 | 2026-02-24 | Magic (Russian team) | W   | 1.000      | 0.435        | 0.155 (0.068)    | 0.876 (0.381)    | -         |    13.78 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           28 |      436 | 2026-02-23 | CSDIILIT             | W   | 1.000      | -            | -                | -                | -         |     1.85 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           27 |      472 | 2026-02-22 | Los kogutos          | W   | 1.000      | 0.435        | 0.040 (0.017)    | 1.000 (0.435)    | -         |     8.66 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           26 |      620 | 2026-02-20 | Ex-RUBY              | L   | 1.000      | -            | -                | -                | -         |   -20.39 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           25 |      639 | 2026-02-19 | OMEGA                | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.630 (0.274)    | -         |     7.91 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           24 |      689 | 2026-02-18 | HAVU                 | W   | 1.000      | -            | -                | -                | -         |     5.94 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           23 |      732 | 2026-02-17 | Ex-Zero Tenacity     | W   | 1.000      | -            | -                | -                | -         |     1.44 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           22 |      754 | 2026-02-17 | Inner Circle Esports | W   | 1.000      | 0.435        | 0.130 (0.056)    | -                | -         |     8.80 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           21 |      795 | 2026-02-16 | FUZOS                | W   | 1.000      | -            | -                | -                | -         |     3.58 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           20 |      802 | 2026-02-16 | ARCRED               | L   | 1.000      | -            | -                | -                | -         |   -19.09 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           19 |      821 | 2026-02-15 | Lazer Cats           | W   | 1.000      | -            | -                | -                | -         |     4.27 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           18 |      824 | 2026-02-15 | KONO.ECF             | L   | 1.000      | -            | -                | -                | -         |   -28.74 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           17 |      855 | 2026-02-15 | MASONIC              | W   | 1.000      | -            | -                | -                | -         |     3.52 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           16 |      909 | 2026-02-14 | Oxuji Esports        | L   | 1.000      | -            | -                | -                | -         |   -27.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           15 |      920 | 2026-02-14 | K27                  | L   | 1.000      | -            | -                | -                | -         |   -12.53 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           14 |      936 | 2026-02-13 | UNiTY esports        | L   | 1.000      | -            | -                | -                | -         |   -27.33 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           13 |     1058 | 2026-02-10 | GenOne               | W   | 1.000      | 0.435        | -                | 0.705 (0.307)    | -         |     6.47 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           12 |     1089 | 2026-02-09 | Phantom Esports      | L   | 1.000      | -            | -                | -                | -         |   -26.12 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           11 |     1138 | 2026-02-07 | Rebels Gaming        | W   | 1.000      | -            | -                | -                | -         |     5.03 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|           10 |     1198 | 2026-02-05 | Los kogutos          | W   | 0.993      | -            | -                | -                | -         |     4.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            9 |     1219 | 2026-02-04 | FUZOS                | W   | 0.986      | -            | -                | -                | -         |     2.20 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            8 |     1258 | 2026-02-03 | Nuclear TigeRES      | L   | 0.977      | -            | -                | -                | -         |   -16.05 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            7 |     1280 | 2026-02-02 | RUSTEC               | W   | 0.972      | -            | -                | -                | 1 (0.972) |     0.64 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            6 |     1292 | 2026-02-02 | ARCRED               | L   | 0.970      | -            | -                | -                | -         |   -23.32 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            5 |     1332 | 2026-01-31 | FORZE Reload         | W   | 0.960      | -            | -                | -                | 1 (0.960) |     1.87 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            4 |     1351 | 2026-01-31 | K27                  | L   | 0.958      | -            | -                | -                | -         |   -15.35 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            3 |     1357 | 2026-01-31 | FORZE Reload         | W   | 0.957      | -            | -                | -                | 1 (0.957) |     1.74 | El1an, Forester, Lack1, NickelBack, TRAVIS |
|            2 |     2069 | 2025-12-21 | K27                  | L   | 0.684      | -            | -                | -                | -         |   -10.94 | El1an, Forester, Lack1, NickelBack, sugaR  |
|            1 |     2077 | 2025-12-21 | Oxuji Esports        | W   | 0.683      | -            | -                | -                | 1 (0.683) |     1.87 | El1an, Forester, Lack1, NickelBack, sugaR  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($32,112.76)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-06 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-02-27 |      1.000 | $22,000.00     | $22,000.00      |
| 2026-02-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2025-12-21 |      0.684 | $9,661.17      | $6,612.76       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
