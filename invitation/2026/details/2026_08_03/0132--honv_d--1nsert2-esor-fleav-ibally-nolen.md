### Roster Details<br />
Team Name: Honvéd<br />
Roster: 1NSERT2, esor, fleav, iBALLY, noleN<br />
Global Rank: [132](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [94]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  898.7<br />
<br />
Final Rank Value (898.7) = Starting Rank Value (831.7) + Head To Head Adjustments (67.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.354[<sup>1</sup>](#table2)
- Bounty Collected: 0.263[<sup>2</sup>](#table1)
- Opponent Network: 0.119[<sup>2</sup>](#table1)
- LAN Wins: 0.157[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 831.7
- 400 + ( ( 0.223 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 831.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           29 |      171 | 2026-07-26 | Privateer            | W   | 1.000      | 0.143        | 0.005 (0.001)    | -                | 0 (0.000) |     9.72 | esor, fleav, iBALLY, marTineZ, noleN     |
|           28 |      292 | 2026-07-22 | Mai Tai              | W   | 1.000      | -            | -                | -                | 0 (0.000) |     9.96 | 1NSERT2, esor, fleav, iBALLY, noleN      |
|           27 |      314 | 2026-07-21 | Misa                 | W   | 1.000      | 0.143        | -                | 0.728 (0.104)    | 0 (0.000) |    10.37 | 1NSERT2, esor, excien, iBALLY, noleN     |
|           26 |      320 | 2026-07-21 | Julie&Cie            | W   | 1.000      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     7.83 | 1NSERT2, esor, iBALLY, kszlim, noleN     |
|           25 |      355 | 2026-07-19 | Entropy              | L   | 1.000      | -            | -                | -                | -         |   -17.47 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           24 |      445 | 2026-07-16 | Subtop De France     | W   | 1.000      | 0.344        | 0.002 (0.001)    | 0.191 (0.066)    | 0 (0.000) |     7.66 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           23 |      468 | 2026-07-15 | Entropy              | L   | 1.000      | -            | -                | -                | -         |   -16.14 | 1NSERT2, Aaron, fleav, iBALLY, noleN     |
|           22 |      480 | 2026-07-14 | megoshort            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.33 | 1NSERT2, esor, fleav, iBALLY, noleN      |
|           21 |      490 | 2026-07-14 | GenOne               | L   | 1.000      | -            | -                | -                | -         |    -9.11 | 1NSERT2, excien, fleav, iBALLY, noleN    |
|           20 |      503 | 2026-07-13 | Julie&Cie            | W   | 1.000      | 0.143        | 0.003 (0.000)    | -                | 0 (0.000) |     7.33 | 1NSERT2, esor, excien, iBALLY, noleN     |
|           19 |      506 | 2026-07-13 | BRUTE                | L   | 1.000      | -            | -                | -                | -         |    -8.42 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           18 |      595 | 2026-07-09 | ex-RUSTEC            | W   | 1.000      | 0.371        | 0.006 (0.002)    | 0.713 (0.264)    | 0 (0.000) |    14.96 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           17 |      624 | 2026-07-05 | Phantom Academy      | W   | 1.000      | 0.333        | 0.007 (0.002)    | 0.208 (0.069)    | -         |    10.35 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           16 |      625 | 2026-07-05 | los kogutos          | W   | 1.000      | 0.333        | 0.014 (0.005)    | 0.673 (0.224)    | -         |    15.44 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           15 |      633 | 2026-07-05 | Inner Circle Academy | W   | 1.000      | 0.333        | 0.008 (0.003)    | 0.552 (0.184)    | -         |    18.00 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           14 |      640 | 2026-07-04 | LPH                  | W   | 1.000      | 0.333        | 0.002 (0.001)    | 0.186 (0.062)    | -         |     7.86 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           13 |      666 | 2026-07-03 | Subtop De France     | W   | 0.991      | 0.333        | 0.002 (0.001)    | 0.191 (0.063)    | -         |    10.67 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           12 |      772 | 2026-06-28 | OlyBet               | W   | 0.958      | -            | -                | -                | -         |     9.18 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|           11 |      846 | 2026-06-24 | ex-MANA              | L   | 0.931      | -            | -                | -                | -         |   -15.35 | 1NSERT2, iBALLY, Kamion, marTineZ, noleN |
|           10 |     1448 | 2026-05-28 | Young Ninjas         | L   | 0.753      | -            | -                | -                | -         |   -12.08 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            9 |     1463 | 2026-05-28 | los kogutos          | L   | 0.752      | -            | -                | -                | -         |    -9.57 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            8 |     1498 | 2026-05-27 | Mai Tai              | W   | 0.746      | 0.307        | -                | 0.390 (0.089)    | -         |     9.04 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            7 |     1879 | 2026-05-17 | MASONIC              | L   | 0.678      | -            | -                | -                | -         |    -6.62 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            6 |     1886 | 2026-05-16 | PURE                 | W   | 0.674      | 0.341        | -                | 0.260 (0.060)    | 1 (0.674) |    14.09 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            5 |     1896 | 2026-05-16 | Inner Circle Academy | L   | 0.673      | -            | -                | -                | -         |    -9.43 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            4 |     1908 | 2026-05-16 | A Great Chaos        | W   | 0.671      | -            | -                | -                | 1 (0.671) |     5.62 | 1NSERT2, esor, iBALLY, marTineZ, noleN   |
|            3 |     3729 | 2026-03-29 | HYPERSPIRIT          | L   | 0.355      | -            | -                | -                | -         |    -5.74 | Aaron, aidKiT, esor, marTineZ, noleN     |
|            2 |     3900 | 2026-03-27 | Drama                | W   | 0.341      | -            | -                | -                | -         |     1.69 | Aaron, aidKiT, esor, marTineZ, noleN     |
|            1 |     3944 | 2026-03-26 | ASTRAL               | L   | 0.334      | -            | -                | -                | -         |    -1.13 | Aaron, aidKiT, esor, marTineZ, noleN     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,423.74)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-05 |      1.000 | $6,000.00      | $6,000.00       |
| 2026-05-28 |      0.754 | $825.00        | $622.22         |
| 2026-05-17 |      0.681 | $1,177.00      | $801.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
