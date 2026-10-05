### Roster Details<br />
Team Name: ex-RUBY<br />
Roster: danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN<br />
Global Rank: [231](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [159]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  665.7<br />
<br />
Final Rank Value (665.7) = Starting Rank Value (640.8) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.234[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.8
- 400 + ( ( 0.127 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 640.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           31 |     3863 | 2026-04-25 | Nemiga           | L   | 0.298      | -            | -                | -                | -         |    -1.30 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           30 |     3914 | 2026-04-24 | ex-RUSTEC        | L   | 0.291      | -            | -                | -                | -         |    -1.33 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           29 |     3945 | 2026-04-23 | playersclub      | L   | 0.285      | -            | -                | -                | -         |    -6.40 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           28 |     4014 | 2026-04-20 | Butterfly        | W   | 0.265      | 0.435        | 0.034 (0.004)    | 0.841 (0.097)    | 0 (0.000) |     7.62 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           27 |     4063 | 2026-04-18 | 1win             | L   | 0.251      | -            | -                | -                | -         |    -0.16 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           26 |     4081 | 2026-04-17 | MOUZ NXT         | W   | 0.244      | 0.435        | -                | 0.101 (0.011)    | 0 (0.000) |     3.72 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           25 |     4125 | 2026-04-14 | Phantom          | W   | 0.225      | 0.435        | 0.002 (0.000)    | 0.165 (0.016)    | 0 (0.000) |     4.71 | H4SAN4TOR, Kaide, riskyb0b, sh1nejezzz, YumsaN |
|           24 |     4148 | 2026-04-13 | Metizport        | L   | 0.217      | -            | -                | -                | -         |    -0.63 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           23 |     4194 | 2026-04-11 | STATE            | W   | 0.203      | 0.371        | 0.013 (0.001)    | 0.286 (0.022)    | 0 (0.000) |     5.50 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           22 |     4273 | 2026-04-08 | BBL              | L   | 0.183      | -            | -                | -                | -         |    -0.34 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           21 |     4378 | 2026-04-05 | STATE            | W   | 0.165      | 0.435        | 0.013 (0.001)    | 0.286 (0.020)    | 0 (0.000) |     4.49 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           20 |     4553 | 2026-04-03 | Permitta         | W   | 0.150      | 0.435        | 0.007 (0.000)    | 0.689 (0.045)    | 0 (0.000) |     3.49 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           19 |     4758 | 2026-04-01 | Lavked           | L   | 0.136      | -            | -                | -                | -         |    -0.89 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           18 |     4783 | 2026-03-31 | Nuclear TigeRES  | L   | 0.132      | -            | -                | -                | -         |    -0.37 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           17 |     4859 | 2026-03-31 | Bebop            | W   | 0.130      | -            | -                | -                | 0 (0.000) |     1.17 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           16 |     4925 | 2026-03-30 | PsychoFace       | L   | 0.123      | -            | -                | -                | -         |    -0.62 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           15 |     5346 | 2026-03-23 | ex-MANA          | W   | 0.077      | 0.435        | 0.004 (0.000)    | 0.553 (0.019)    | 0 (0.000) |     1.55 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           14 |     5385 | 2026-03-22 | Permitta         | L   | 0.072      | -            | -                | -                | -         |    -0.59 | fozil, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN    |
|           13 |     5428 | 2026-03-21 | K27              | L   | 0.066      | -            | -                | -                | -         |    -0.02 | fozil, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN    |
|           12 |     5444 | 2026-03-21 | Black Phoenix    | W   | 0.065      | 0.435        | 0.017 (0.000)    | 0.952 (0.027)    | 0 (0.000) |     1.62 | danistzz, H4SAN4TOR, Kaide, sh1nejezzz, YumsaN |
|           11 |     5545 | 2026-03-19 | Omega            | W   | 0.052      | 0.384        | 0.027 (0.001)    | 0.397 (0.008)    | 0 (0.000) |     1.60 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|           10 |     5561 | 2026-03-19 | cirahvi          | W   | 0.050      | -            | -                | -                | -         |     0.76 | H4SAN4TOR, Kaide, riskyb0b, sh1nejezzz, YumsaN |
|            9 |     5615 | 2026-03-18 | The Last Resort  | L   | 0.043      | -            | -                | -                | -         |    -0.19 | H4SAN4TOR, Kaide, riskyb0b, sh1nejezzz, YumsaN |
|            8 |     5624 | 2026-03-17 | Walczaki         | L   | 0.039      | -            | -                | -                | -         |    -0.13 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            7 |     5651 | 2026-03-17 | megoshort        | W   | 0.037      | -            | -                | -                | -         |     0.38 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            6 |     5736 | 2026-03-15 | ex-Zero Tenacity | W   | 0.024      | 0.435        | 0.031 (0.000)    | 1.000 (0.010)    | -         |     0.63 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            5 |     5804 | 2026-03-13 | HOTU             | W   | 0.012      | -            | -                | -                | -         |     0.19 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            4 |     5827 | 2026-03-13 | CYBERSHOKE       | W   | 0.011      | -            | -                | -                | -         |     0.25 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            3 |     5859 | 2026-03-12 | Permitta         | W   | 0.006      | -            | -                | -                | -         |     0.14 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            2 |     5875 | 2026-03-12 | K27              | W   | 0.004      | 0.435        | 0.079 (0.000)    | -                | -         |     0.14 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |
|            1 |     5884 | 2026-03-12 | Eternal Fire     | L   | 0.004      | -            | -                | -                | -         |    -0.06 | H4SAN4TOR, Kaide, robo, sh1nejezzz, YumsaN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($271.60)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-13 |      0.012 | $22,000.00     | $271.60         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
