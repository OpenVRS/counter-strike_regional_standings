### Roster Details<br />
Team Name: your end<br />
Roster: Cr1a, Lcs, rx, snow, zuzu<br />
Global Rank: [329](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [82]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  535.8<br />
<br />
Final Rank Value (535.8) = Starting Rank Value (514.4) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.218[<sup>2</sup>](#table1)
- Opponent Network: 0.023[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.4
- 400 + ( ( 0.060 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 514.4


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
|           19 |       49 | 2026-09-04 | Turma do Pagode | L   | 1.000      | -            | -                | -                | -         |   -13.31 | Cr1a, ghosT1, Lcs, Lukita, rx   |
|           18 |     1431 | 2026-07-24 | LP              | L   | 0.900      | -            | -                | -                | -         |    -2.40 | Cr1a, Lcs, rx, snow, zuzu       |
|           17 |     1488 | 2026-07-22 | Procyon         | W   | 0.886      | 0.354        | 0.000 (0.000)    | 0.343 (0.108)    | 0 (0.000) |    16.79 | Cr1a, Lcs, rx, snow, zuzu       |
|           16 |     1536 | 2026-07-20 | Blitzkrieg      | W   | 0.872      | 0.354        | 0.000 (0.000)    | 0.095 (0.029)    | 0 (0.000) |    12.47 | Cr1a, Lcs, rx, snow, zuzu       |
|           15 |     1577 | 2026-07-18 | Sementes do Mal | L   | 0.860      | -            | -                | -                | -         |   -12.78 | Cr1a, Lcs, rx, snow, zuzu       |
|           14 |     1607 | 2026-07-17 | BESTIA Academy  | L   | 0.853      | -            | -                | -                | -         |    -7.95 | Cr1a, Lcs, rx, snow, zuzu       |
|           13 |     1688 | 2026-07-14 | Vasco           | W   | 0.832      | 0.354        | 0.004 (0.001)    | 0.086 (0.025)    | 0 (0.000) |    15.35 | Cr1a, Lcs, rx, snow, zuzu       |
|           12 |     1829 | 2026-07-05 | ALKA            | L   | 0.773      | -            | -                | -                | -         |    -6.35 | ghosT1, Lcs, rx, snow, zuzu     |
|           11 |     1861 | 2026-07-03 | METANOIA Wolves | W   | 0.760      | 0.354        | 0.003 (0.001)    | 0.160 (0.043)    | 0 (0.000) |    16.43 | ghosT1, Lcs, rx, snow, zuzu     |
|           10 |     1899 | 2026-07-01 | ex-MIBR Academy | L   | 0.745      | -            | -                | -                | -         |    -5.87 | Cr1a, Lcs, rx, snow, zuzu       |
|            9 |     1921 | 2026-06-30 | BESTIA Academy  | L   | 0.739      | -            | -                | -                | -         |    -6.79 | Cr1a, Lcs, rx, snow, zuzu       |
|            8 |     1990 | 2026-06-27 | ex-KRÜ          | W   | 0.718      | 0.354        | 0.002 (0.000)    | 0.086 (0.022)    | 0 (0.000) |    15.11 | Cr1a, Lcs, rx, snow, zuzu       |
|            7 |     4431 | 2026-04-04 | ShindeN         | L   | 0.159      | -            | -                | -                | -         |    -0.57 | Cr1a, extazzy, ghosT1, rx, snow |
|            6 |     4519 | 2026-04-03 | desempleHADAS   | W   | 0.152      | 0.363        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.65 | Cr1a, extazzy, ghosT1, rx, snow |
|            5 |     4598 | 2026-04-02 | LP              | L   | 0.146      | -            | -                | -                | -         |    -0.42 | Cr1a, ghosT1, kai, rx, snow     |
|            4 |     5422 | 2026-03-21 | R2              | L   | 0.066      | -            | -                | -                | -         |    -1.13 | Cr1a, extazzy, ghosT1, rx, snow |
|            3 |     5533 | 2026-03-19 | paiN Academy    | W   | 0.053      | 0.371        | 0.001 (0.000)    | 0.029 (0.001)    | 0 (0.000) |     1.02 | Cr1a, extazzy, ghosT1, rx, snow |
|            2 |     5668 | 2026-03-16 | Charrados       | W   | 0.034      | 0.371        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     0.46 | Cr1a, extazzy, ghosT1, rx, snow |
|            1 |     5715 | 2026-03-15 | Pugdesonesto    | L   | 0.027      | -            | -                | -                | -         |    -0.31 | Cr1a, extazzy, ghosT1, rx, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
