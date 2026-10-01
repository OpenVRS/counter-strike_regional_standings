### Roster Details<br />
Team Name: Spirit<br />
Roster: donk, magixx, sh1ro, tN1R, zont1x<br />
Global Rank: [1](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [1]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  2011.1<br />
<br />
Final Rank Value (2011.1) = Starting Rank Value (2000.0) + Head To Head Adjustments (11.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.804[<sup>2</sup>](#table1)
- Opponent Network: 0.500[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.826<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 2000.0
- 400 + ( ( 0.826 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 2000.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |       10 | 2026-08-02 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |   -22.42 | donk, magixx, sh1ro, tN1R, zont1x |
|           35 |       34 | 2026-08-01 | FaZe          | W   | 1.000      | 0.884        | 0.565 (0.500)    | 0.540 (0.477)    | 1 (1.000) |     3.84 | donk, magixx, sh1ro, tN1R, zont1x |
|           34 |       82 | 2026-07-30 | Liquid        | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.89 | donk, magixx, sh1ro, tN1R, zont1x |
|           33 |      170 | 2026-07-26 | 100 Thieves   | W   | 1.000      | 0.903        | -                | 0.761 (0.686)    | -         |     0.55 | donk, magixx, sh1ro, tN1R, zont1x |
|           32 |      257 | 2026-07-23 | OG            | W   | 1.000      | -            | -                | -                | -         |     0.12 | donk, magixx, sh1ro, tN1R, zont1x |
|           31 |      877 | 2026-06-20 | Falcons       | L   | 0.908      | -            | -                | -                | -         |   -17.22 | donk, magixx, sh1ro, tN1R, zont1x |
|           30 |      901 | 2026-06-19 | G2            | W   | 0.900      | 1.000        | -                | 0.600 (0.541)    | 1 (0.900) |     3.90 | donk, magixx, sh1ro, tN1R, zont1x |
|           29 |      990 | 2026-06-13 | 9z            | W   | 0.862      | 1.000        | 0.783 (0.674)    | 0.758 (0.653)    | 1 (0.862) |     8.75 | donk, magixx, sh1ro, tN1R, zont1x |
|           28 |     1047 | 2026-06-12 | Aurora        | W   | 0.854      | 1.000        | 0.492 (0.420)    | 0.557 (0.476)    | 1 (0.854) |     3.04 | donk, magixx, sh1ro, tN1R, zont1x |
|           27 |     1075 | 2026-06-11 | Natus Vincere | W   | 0.848      | 1.000        | 1.000 (0.848)    | -                | 1 (0.848) |     6.22 | donk, magixx, sh1ro, tN1R, zont1x |
|           26 |     1153 | 2026-06-07 | 9z            | W   | 0.820      | 0.809        | 0.783 (0.519)    | 0.758 (0.503)    | 1 (0.820) |     8.49 | donk, magixx, sh1ro, tN1R, zont1x |
|           25 |     1174 | 2026-06-06 | MIBR          | W   | 0.814      | 0.809        | -                | 0.615 (0.405)    | 1 (0.814) |     2.86 | donk, magixx, sh1ro, tN1R, zont1x |
|           24 |     1190 | 2026-06-06 | BetBoom       | W   | 0.813      | 0.809        | -                | 0.706 (0.464)    | 1 (0.813) |     4.58 | donk, magixx, sh1ro, tN1R, zont1x |
|           23 |     1874 | 2026-05-17 | Falcons       | W   | 0.679      | 1.000        | 1.000 (0.679)    | -                | 1 (0.679) |     9.22 | donk, magixx, sh1ro, tN1R, zont1x |
|           22 |     1904 | 2026-05-16 | MOUZ          | W   | 0.672      | 1.000        | 1.000 (0.672)    | 0.595 (0.400)    | -         |     7.89 | donk, magixx, sh1ro, tN1R, zont1x |
|           21 |     1937 | 2026-05-15 | G2            | W   | 0.665      | 1.000        | -                | 0.600 (0.399)    | -         |     3.27 | donk, magixx, sh1ro, tN1R, zont1x |
|           20 |     2061 | 2026-05-11 | FURIA         | W   | 0.640      | 1.000        | 0.677 (0.433)    | -                | -         |     4.14 | donk, magixx, sh1ro, tN1R, zont1x |
|           19 |     2110 | 2026-05-10 | The MongolZ   | W   | 0.632      | -            | -                | -                | -         |     2.53 | donk, magixx, sh1ro, tN1R, zont1x |
|           18 |     2140 | 2026-05-09 | The Huns      | W   | 0.625      | -            | -                | -                | -         |     0.09 | donk, magixx, sh1ro, tN1R, zont1x |
|           17 |     2821 | 2026-04-19 | Vitality      | L   | 0.494      | -            | -                | -                | -         |   -10.72 | donk, magixx, sh1ro, tN1R, zont1x |
|           16 |     2853 | 2026-04-18 | Falcons       | W   | 0.487      | 1.000        | 1.000 (0.487)    | -                | -         |     7.00 | donk, magixx, sh1ro, tN1R, zont1x |
|           15 |     2873 | 2026-04-17 | MOUZ          | W   | 0.480      | 1.000        | 1.000 (0.480)    | -                | -         |     5.96 | donk, magixx, sh1ro, tN1R, zont1x |
|           14 |     2892 | 2026-04-15 | G2            | W   | 0.467      | -            | -                | -                | -         |     2.54 | donk, magixx, sh1ro, tN1R, zont1x |
|           13 |     2900 | 2026-04-15 | RED Canids    | W   | 0.466      | -            | -                | -                | -         |     0.04 | donk, magixx, sh1ro, tN1R, zont1x |
|           12 |     2915 | 2026-04-14 | Falcons       | L   | 0.460      | -            | -                | -                | -         |    -7.98 | donk, magixx, sh1ro, tN1R, zont1x |
|           11 |     2936 | 2026-04-13 | Liquid        | W   | 0.453      | -            | -                | -                | -         |     0.35 | donk, magixx, sh1ro, tN1R, zont1x |
|           10 |     4099 | 2026-03-23 | The MongolZ   | L   | 0.315      | -            | -                | -                | -         |    -8.78 | donk, magixx, sh1ro, tN1R, zont1x |
|            9 |     4171 | 2026-03-22 | 9z            | W   | 0.308      | -            | -                | -                | -         |     4.28 | donk, magixx, sh1ro, tN1R, zont1x |
|            8 |     4223 | 2026-03-21 | PARIVISION    | L   | 0.301      | -            | -                | -                | -         |    -7.47 | donk, magixx, sh1ro, tN1R, zont1x |
|            7 |     4348 | 2026-03-19 | Liquid        | W   | 0.286      | -            | -                | -                | -         |     0.21 | donk, magixx, sh1ro, tN1R, zont1x |
|            6 |     4591 | 2026-03-13 | Astralis      | L   | 0.248      | -            | -                | -                | -         |    -7.14 | donk, magixx, sh1ro, tN1R, zont1x |
|            5 |     4856 | 2026-03-08 | G2            | W   | 0.214      | -            | -                | -                | -         |     1.03 | donk, magixx, sh1ro, tN1R, zont1x |
|            4 |     4916 | 2026-03-07 | B8            | W   | 0.208      | -            | -                | -                | -         |     0.94 | donk, magixx, sh1ro, tN1R, zont1x |
|            3 |     4978 | 2026-03-06 | 3DMAX         | W   | 0.200      | -            | -                | -                | -         |     0.31 | donk, magixx, sh1ro, tN1R, zont1x |
|            2 |     6249 | 2026-02-08 | MOUZ          | W   | 0.026      | -            | -                | -                | -         |     0.32 | donk, magixx, sh1ro, tN1R, zont1x |
|            1 |     6263 | 2026-02-07 | FURIA         | L   | 0.020      | -            | -                | -                | -         |    -0.50 | donk, magixx, sh1ro, tN1R, zont1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($635,821.98)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $97,188.00     | $97,188.00      |
| 2026-06-21 |      0.914 | $80,000.00     | $73,089.79      |
| 2026-05-17 |      0.679 | $512,000.00    | $347,766.91     |
| 2026-04-19 |      0.494 | $170,000.00    | $84,014.52      |
| 2026-03-29 |      0.352 | $50,000.00     | $17,622.31      |
| 2026-03-15 |      0.261 | $48,000.00     | $12,530.40      |
| 2026-02-08 |      0.028 | $131,000.00    | $3,610.04       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
