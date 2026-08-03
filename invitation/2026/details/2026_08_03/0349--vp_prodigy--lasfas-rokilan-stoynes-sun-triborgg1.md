### Roster Details<br />
Team Name: VP.Prodigy<br />
Roster: lasfas, rokilan, Stoynes, sun, TriBorgg1<br />
Global Rank: [349](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [224]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  519.6<br />
<br />
Final Rank Value (519.6) = Starting Rank Value (514.3) + Head To Head Adjustments (5.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.3
- 400 + ( ( 0.059 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 514.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |     1207 | 2026-06-05 | Clutchain        | L   | 0.808      | -            | -                | -                | -         |   -12.18 | lasfas, rokilan, Stoynes, sun, TriBorgg1    |
|           28 |     1302 | 2026-06-01 | ReThink          | L   | 0.781      | -            | -                | -                | -         |    -3.33 | lasfas, rokilan, Stoynes, sun, TriBorgg1    |
|           27 |     2788 | 2026-04-22 | Atreides         | L   | 0.512      | -            | -                | -                | -         |    -2.91 | lasfas, rokilan, Stoynes, sun, TriBorgg1    |
|           26 |     2802 | 2026-04-20 | cirahvi          | W   | 0.504      | 0.303        | 0.004 (0.001)    | 0.290 (0.044)    | 0 (0.000) |    11.52 | lasfas, rokilan, Stoynes, sun, TriBorgg1    |
|           25 |     2855 | 2026-04-18 | DONSTU           | L   | 0.486      | -            | -                | -                | -         |    -2.39 | lasfas, rokilan, Stoynes, sun, TriBorgg1    |
|           24 |     5320 | 2026-02-27 | Sashi            | L   | 0.152      | -            | -                | -                | -         |    -0.17 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           23 |     5463 | 2026-02-24 | home             | W   | 0.133      | -            | -                | -                | 0 (0.000) |     1.98 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           22 |     5589 | 2026-02-22 | Bushido Wildcats | W   | 0.119      | 0.384        | 0.002 (0.000)    | 0.416 (0.019)    | 0 (0.000) |     2.96 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           21 |     5638 | 2026-02-21 | los kogutos      | L   | 0.113      | -            | -                | -                | -         |    -0.38 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           20 |     5741 | 2026-02-19 | Omega            | L   | 0.099      | -            | -                | -                | -         |    -0.04 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           19 |     5778 | 2026-02-18 | ECSTATIC         | L   | 0.094      | -            | -                | -                | -         |    -0.42 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           18 |     5859 | 2026-02-17 | cirahvi          | L   | 0.086      | -            | -                | -                | -         |    -0.77 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           17 |     5867 | 2026-02-17 | Hashiras         | W   | 0.085      | 0.384        | -                | 0.420 (0.014)    | 0 (0.000) |     2.05 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           16 |     5880 | 2026-02-16 | ASTRAL           | W   | 0.081      | 0.435        | 0.014 (0.001)    | 1.000 (0.035)    | 0 (0.000) |     2.52 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           15 |     5897 | 2026-02-16 | illwill          | L   | 0.080      | -            | -                | -                | -         |    -0.54 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           14 |     5908 | 2026-02-16 | ENCE             | L   | 0.078      | -            | -                | -                | -         |    -0.18 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           13 |     5936 | 2026-02-15 | Bushido Wildcats | W   | 0.074      | 0.384        | 0.002 (0.000)    | 0.416 (0.012)    | 0 (0.000) |     1.85 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           12 |     5945 | 2026-02-15 | Rebels           | W   | 0.074      | 0.384        | 0.006 (0.000)    | 0.522 (0.015)    | 0 (0.000) |     2.19 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           11 |     5963 | 2026-02-15 | Metizport        | L   | 0.072      | -            | -                | -                | -         |    -0.10 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|           10 |     6013 | 2026-02-14 | GenOne           | L   | 0.066      | -            | -                | -                | -         |    -0.22 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            9 |     6049 | 2026-02-13 | FAVBET           | L   | 0.061      | -            | -                | -                | -         |    -0.40 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            8 |     6084 | 2026-02-13 | Enjoy            | L   | 0.058      | -            | -                | -                | -         |    -0.39 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            7 |     6098 | 2026-02-12 | ex-Nemesis       | W   | 0.054      | -            | -                | -                | 0 (0.000) |     0.58 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            6 |     6138 | 2026-02-11 | Phantom          | W   | 0.048      | 0.435        | 0.024 (0.001)    | 0.815 (0.017)    | 0 (0.000) |     1.46 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            5 |     6201 | 2026-02-10 | MASONIC          | W   | 0.038      | 0.384        | 0.010 (0.000)    | 0.418 (0.006)    | 0 (0.000) |     1.16 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            4 |     6217 | 2026-02-09 | Enjoy            | L   | 0.032      | -            | -                | -                | -         |    -0.21 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            3 |     6238 | 2026-02-08 | GenOne           | W   | 0.027      | 0.435        | 0.033 (0.000)    | 1.000 (0.012)    | -         |     0.76 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            2 |     6271 | 2026-02-07 | MASONIC          | W   | 0.019      | 0.384        | 0.010 (0.000)    | -                | -         |     0.58 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |
|            1 |     6307 | 2026-02-06 | QUAZAR           | W   | 0.013      | 0.384        | 0.031 (0.000)    | 0.666 (0.003)    | -         |     0.37 | AquaRS, F0R3VER, lasfas, rokilan, TriBorgg1 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
