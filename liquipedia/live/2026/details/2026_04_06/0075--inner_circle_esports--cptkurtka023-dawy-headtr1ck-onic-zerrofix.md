### Roster Details<br />
Team Name: Inner Circle Esports<br />
Roster: cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX<br />
Global Rank: [75](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [51]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  1196.7<br />
<br />
Final Rank Value (1196.7) = Starting Rank Value (1193.2) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.648[<sup>2</sup>](#table1)

The average of these factors is 0.405<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1193.2
- 400 + ( ( 0.405 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1193.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.484
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      269 | 2026-03-31 | Alliance               | L   | 1.000      | -            | -                | -                | -         |    -6.45 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           48 |      312 | 2026-03-30 | BASEMENT BOYS          | W   | 1.000      | 0.354        | -                | 0.338 (0.120)    | 1 (1.000) |     4.60 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           47 |      334 | 2026-03-30 | Team Liquid            | L   | 1.000      | -            | -                | -                | -         |    -8.16 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           46 |      349 | 2026-03-29 | Partizan Esports       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.11 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           45 |      365 | 2026-03-29 | Nexus Gaming           | W   | 1.000      | 0.354        | -                | 0.450 (0.159)    | 1 (1.000) |     6.97 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           44 |      392 | 2026-03-29 | Partizan Esports       | L   | 1.000      | -            | -                | -                | -         |   -30.50 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           43 |      573 | 2026-03-25 | HOTU                   | L   | 1.000      | -            | -                | -                | -         |   -10.52 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           42 |      625 | 2026-03-24 | 9INE                   | W   | 1.000      | 0.435        | 0.054 (0.023)    | 0.606 (0.263)    | 1 (1.000) |    19.54 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           41 |      635 | 2026-03-24 | OG                     | W   | 1.000      | 0.435        | 0.024 (0.010)    | 0.311 (0.135)    | 1 (1.000) |    18.91 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           40 |      926 | 2026-03-19 | K27                    | L   | 1.000      | -            | -                | -                | -         |    -5.96 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           39 |     1010 | 2026-03-17 | Rune Eaters Esports    | W   | 1.000      | 0.435        | -                | 0.394 (0.171)    | -         |     7.51 | cptkurtka023, Dawy, headtr1ck, onic, zeRRoFIX |
|           38 |     1607 | 2026-03-05 | ESC Gaming             | L   | 0.985      | -            | -                | -                | -         |   -18.20 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           37 |     1778 | 2026-03-01 | FOKUS                  | L   | 0.959      | -            | -                | -                | -         |   -12.73 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           36 |     1788 | 2026-03-01 | EYEBALLERS             | W   | 0.958      | 0.143        | 0.097 (0.013)    | 0.599 (0.082)    | -         |    20.25 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           35 |     1809 | 2026-02-28 | BetBoom Team           | W   | 0.954      | 0.143        | 0.116 (0.016)    | 0.748 (0.102)    | -         |    24.93 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           34 |     1829 | 2026-02-28 | Tricked Esport         | W   | 0.952      | 0.143        | 0.027 (0.004)    | -                | -         |    20.32 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           33 |     1856 | 2026-02-27 | FOKUS                  | L   | 0.947      | -            | -                | -                | -         |   -11.69 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           32 |     1926 | 2026-02-26 | Fnatic                 | W   | 0.940      | 0.143        | 0.036 (0.005)    | -                | -         |    18.05 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           31 |     2051 | 2026-02-24 | TDK                    | L   | 0.925      | -            | -                | -                | -         |   -10.07 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           30 |     2420 | 2026-02-17 | SPARTA Esports         | L   | 0.879      | -            | -                | -                | -         |    -9.65 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           29 |     2488 | 2026-02-15 | Eternal Fire           | W   | 0.868      | 0.143        | -                | 0.761 (0.094)    | -         |    16.32 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           28 |     2512 | 2026-02-15 | Japczany               | W   | 0.867      | -            | -                | -                | -         |     1.62 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           27 |     2688 | 2026-02-12 | Misa Esports           | L   | 0.845      | -            | -                | -                | -         |   -24.34 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           26 |     2709 | 2026-02-11 | Johnny Speeds          | L   | 0.840      | -            | -                | -                | -         |    -9.44 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           25 |     2716 | 2026-02-11 | CYBERSHOKE Esports     | W   | 0.839      | 0.143        | 0.031 (0.004)    | -                | -         |    15.16 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           24 |     2732 | 2026-02-10 | 33                     | L   | 0.835      | -            | -                | -                | -         |    -7.62 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           23 |     2754 | 2026-02-10 | Tricked Esport         | W   | 0.832      | 0.143        | 0.027 (0.003)    | -                | -         |    19.35 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           22 |     2974 | 2026-02-02 | Betclic Apogee Esports | L   | 0.780      | -            | -                | -                | -         |    -8.03 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           21 |     3052 | 2026-01-31 | FAVBET Team            | L   | 0.765      | -            | -                | -                | -         |   -18.02 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           20 |     3141 | 2026-01-28 | Tung Tung Sahur        | W   | 0.745      | 0.371        | 0.013 (0.004)    | 0.316 (0.087)    | -         |     3.94 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           19 |     3154 | 2026-01-27 | Team Nemesis           | L   | 0.739      | -            | -                | -                | -         |    -5.36 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           18 |     3434 | 2026-01-18 | Team Spirit            | L   | 0.679      | -            | -                | -                | -         |    -1.32 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           17 |     3585 | 2026-01-15 | 3DMAX                  | W   | 0.659      | 0.895        | 0.215 (0.127)    | 0.492 (0.290)    | -         |    18.54 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           16 |     3846 | 2025-12-18 | MOUZ NXT               | L   | 0.474      | -            | -                | -                | -         |    -6.92 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           15 |     3851 | 2025-12-18 | Illwill                | L   | 0.473      | -            | -                | -                | -         |   -11.17 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           14 |     4010 | 2025-12-07 | FUT Esports            | L   | 0.399      | -            | -                | -                | -         |    -1.60 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           13 |     4065 | 2025-12-05 | FORZE Reload           | W   | 0.385      | -            | -                | -                | -         |     1.72 | cptkurtka023, Dawy, Flierax, onic, zeRRoFIX   |
|           12 |     4164 | 2025-11-30 | FUT Esports            | L   | 0.351      | -            | -                | -                | -         |    -1.38 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|           11 |     4189 | 2025-11-29 | Sashi Esport           | W   | 0.347      | -            | -                | -                | 1 (0.347) |     7.62 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|           10 |     4207 | 2025-11-29 | AaB esport             | W   | 0.346      | -            | -                | -                | 1 (0.346) |     0.60 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            9 |     4385 | 2025-11-22 | FUT Esports            | L   | 0.298      | -            | -                | -                | -         |    -1.21 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            8 |     4398 | 2025-11-21 | GenOne                 | W   | 0.294      | -            | -                | -                | 1 (0.294) |     1.84 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            7 |     4420 | 2025-11-21 | Betclic Apogee Esports | W   | 0.292      | -            | -                | -                | 1 (0.292) |     6.37 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            6 |     4424 | 2025-11-21 | Illwill                | L   | 0.291      | -            | -                | -                | -         |    -2.11 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            5 |     4805 | 2025-11-07 | Johnny Speeds          | L   | 0.200      | -            | -                | -                | -         |    -1.67 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            4 |     4818 | 2025-11-07 | Metizport              | W   | 0.200      | -            | -                | -                | 1 (0.200) |     0.54 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            3 |     4845 | 2025-11-07 | Young Ninjas           | L   | 0.199      | -            | -                | -                | -         |    -6.12 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            2 |     4852 | 2025-11-07 | Acend                  | L   | 0.199      | -            | -                | -                | -         |    -2.13 | cairne, Dawy, Flierax, onic, zeRRoFIX         |
|            1 |     4871 | 2025-11-07 | Minkens finest         | W   | 0.198      | -            | -                | -                | -         |     0.07 | cairne, Dawy, Flierax, onic, zeRRoFIX         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($27,635.32)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-20 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-01-18 |      0.680 | $36,250.00     | $24,664.71      |
| 2025-12-09 |      0.412 | $1,500.00      | $618.07         |
| 2025-11-30 |      0.353 | $1,000.00      | $352.54         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
