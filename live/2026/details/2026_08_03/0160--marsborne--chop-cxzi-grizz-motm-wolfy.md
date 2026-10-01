### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Cxzi, Grizz, motm, WolfY<br />
Global Rank: [160](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [33]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  830.5<br />
<br />
Final Rank Value (830.5) = Starting Rank Value (802.5) + Head To Head Adjustments (28.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.270[<sup>2</sup>](#table1)
- Opponent Network: 0.044[<sup>2</sup>](#table1)
- LAN Wins: 0.193[<sup>2</sup>](#table1)

The average of these factors is 0.208<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 802.5
- 400 + ( ( 0.208 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 802.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     2468 | 2026-04-28 | Chicken Coop    | L   | 0.554      | -            | -                | -                | -         |    -5.60 | chop, Grizz, Lucid, motm, WolfY |
|           29 |     2501 | 2026-04-27 | insane players  | W   | 0.549      | 0.363        | 0.008 (0.002)    | 0.209 (0.042)    | 0 (0.000) |     5.70 | chop, Grizz, Lucid, motm, WolfY |
|           28 |     2547 | 2026-04-26 | Reign Above     | L   | 0.542      | -            | -                | -                | -         |   -12.97 | chop, Grizz, Lucid, motm, WolfY |
|           27 |     2907 | 2026-04-14 | Voca            | W   | 0.462      | 0.333        | 0.030 (0.005)    | 0.525 (0.081)    | 0 (0.000) |    10.71 | chop, Cxzi, Grizz, motm, WolfY  |
|           26 |     2928 | 2026-04-13 | Aether          | W   | 0.455      | 0.333        | 0.002 (0.000)    | 0.121 (0.018)    | 0 (0.000) |     4.69 | chop, Cxzi, Grizz, motm, WolfY  |
|           25 |     2973 | 2026-04-11 | insane players  | W   | 0.441      | 0.333        | 0.008 (0.001)    | 0.209 (0.031)    | -         |     4.80 | chop, Cxzi, Grizz, motm, WolfY  |
|           24 |     3326 | 2026-04-03 | Galorys         | L   | 0.387      | -            | -                | -                | -         |    -3.42 | chop, Cxzi, Grizz, motm, WolfY  |
|           23 |     3507 | 2026-04-01 | ALKA            | W   | 0.374      | 0.435        | -                | 0.394 (0.064)    | 1 (0.374) |     3.37 | chop, Cxzi, Grizz, motm, WolfY  |
|           22 |     3520 | 2026-04-01 | Galorys         | L   | 0.373      | -            | -                | -                | -         |    -3.33 | chop, Cxzi, Grizz, motm, WolfY  |
|           21 |     3814 | 2026-03-28 | Turma do Pagode | L   | 0.348      | -            | -                | -                | -         |    -3.86 | chop, Cxzi, Grizz, motm, WolfY  |
|           20 |     3932 | 2026-03-26 | 9z              | L   | 0.336      | -            | -                | -                | -         |    -0.02 | chop, Cxzi, Grizz, motm, WolfY  |
|           19 |     3938 | 2026-03-26 | Turma do Pagode | W   | 0.335      | 0.392        | 0.013 (0.002)    | 0.329 (0.043)    | 1 (0.335) |     6.93 | chop, Cxzi, Grizz, motm, WolfY  |
|           18 |     4849 | 2026-03-08 | 9z              | L   | 0.215      | -            | -                | -                | -         |    -0.01 | chop, Cxzi, Grizz, motm, WolfY  |
|           17 |     4914 | 2026-03-07 | Imperial        | W   | 0.209      | 0.384        | 0.067 (0.005)    | 0.579 (0.046)    | 1 (0.209) |     5.91 | chop, Cxzi, Grizz, motm, WolfY  |
|           16 |     4944 | 2026-03-07 | BESTIA          | W   | 0.206      | 0.384        | 0.019 (0.001)    | 0.652 (0.052)    | 1 (0.206) |     5.37 | chop, Cxzi, Grizz, motm, WolfY  |
|           15 |     4997 | 2026-03-05 | RED Canids      | W   | 0.196      | 0.384        | 0.023 (0.002)    | -                | 1 (0.196) |     3.91 | chop, Cxzi, Grizz, motm, WolfY  |
|           14 |     5004 | 2026-03-05 | Galorys         | W   | 0.195      | 0.384        | 0.010 (0.001)    | 0.409 (0.031)    | 1 (0.195) |     4.58 | chop, Cxzi, Grizz, motm, WolfY  |
|           13 |     5291 | 2026-02-27 | 9z              | L   | 0.154      | -            | -                | -                | -         |    -0.01 | chop, Cxzi, Grizz, motm, WolfY  |
|           12 |     5353 | 2026-02-26 | Fake do Biru    | W   | 0.147      | 0.435        | 0.016 (0.001)    | 0.468 (0.030)    | 1 (0.147) |     2.42 | chop, Cxzi, Grizz, motm, WolfY  |
|           11 |     5415 | 2026-02-25 | Fluxo           | L   | 0.140      | -            | -                | -                | -         |    -0.27 | chop, Cxzi, Grizz, motm, WolfY  |
|           10 |     5490 | 2026-02-23 | Voca            | L   | 0.130      | -            | -                | -                | -         |    -2.96 | chop, Cxzi, Grizz, motm, WolfY  |
|            9 |     5529 | 2026-02-22 | Rave            | W   | 0.123      | -            | -                | -                | -         |     0.97 | chop, Cxzi, Grizz, motm, WolfY  |
|            8 |     5605 | 2026-02-21 | Zomblers        | W   | 0.116      | -            | -                | -                | -         |     1.39 | chop, Cxzi, Grizz, motm, WolfY  |
|            7 |     5654 | 2026-02-20 | Voca            | L   | 0.110      | -            | -                | -                | -         |    -2.52 | chop, Cxzi, Grizz, motm, WolfY  |
|            6 |     5756 | 2026-02-18 | FlyQuest RED    | W   | 0.096      | -            | -                | -                | -         |     0.44 | chop, Cxzi, Grizz, motm, WolfY  |
|            5 |     5816 | 2026-02-17 | Iowa Stormboar  | W   | 0.090      | -            | -                | -                | -         |     1.17 | chop, Cxzi, Grizz, motm, WolfY  |
|            4 |     6165 | 2026-02-10 | Rave            | W   | 0.043      | -            | -                | -                | -         |     0.33 | chop, Cxzi, Grizz, motm, WolfY  |
|            3 |     6205 | 2026-02-09 | insane players  | W   | 0.035      | -            | -                | -                | -         |     0.40 | chop, Cxzi, Grizz, motm, WolfY  |
|            2 |     6254 | 2026-02-07 | Zomblers        | W   | 0.022      | -            | -                | -                | -         |     0.27 | chop, Cxzi, Grizz, motm, WolfY  |
|            1 |     6291 | 2026-02-06 | Voca            | L   | 0.015      | -            | -                | -                | -         |    -0.34 | chop, Cxzi, Grizz, motm, WolfY  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,086.44)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.462 | $5,000.00      | $2,312.43       |
| 2026-03-08 |      0.215 | $6,000.00      | $1,288.07       |
| 2026-02-24 |      0.137 | $2,000.00      | $273.28         |
| 2026-02-10 |      0.043 | $5,000.00      | $212.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
