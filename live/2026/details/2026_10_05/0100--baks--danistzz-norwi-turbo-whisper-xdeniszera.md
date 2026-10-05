### Roster Details<br />
Team Name: BAKS<br />
Roster: danistzz, Norwi, turbo, whisper, xdENiSZERA<br />
Global Rank: [100](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [73]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  1044.5<br />
<br />
Final Rank Value (1044.5) = Starting Rank Value (1143.7) + Head To Head Adjustments (-99.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.351[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.230[<sup>2</sup>](#table1)
- LAN Wins: 0.581[<sup>2</sup>](#table1)

The average of these factors is 0.372<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1143.7
- 400 + ( ( 0.372 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 1143.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |      187 | 2026-09-30 | CYBERSHOKE           | L   | 1.000      | -            | -                | -                | -         |    -9.20 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           32 |      191 | 2026-09-30 | CRUISER AURORA       | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.74 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           31 |      195 | 2026-09-30 | K27                  | L   | 1.000      | -            | -                | -                | -         |    -4.04 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           30 |      347 | 2026-09-26 | Leo                  | L   | 1.000      | -            | -                | -                | -         |   -18.30 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           29 |      424 | 2026-09-25 | STATE                | W   | 1.000      | 0.384        | 0.017 (0.006)    | -                | 0 (0.000) |     9.82 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           28 |      436 | 2026-09-25 | Spirit Academy Green | L   | 1.000      | -            | -                | -                | -         |   -27.44 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           27 |      676 | 2026-09-22 | INOX Division        | L   | 1.000      | -            | -                | -                | -         |   -16.64 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           26 |      705 | 2026-09-20 | Black Phoenix        | W   | 1.000      | 0.384        | 0.035 (0.014)    | 1.000 (0.384)    | 0 (0.000) |    13.95 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           25 |      734 | 2026-09-19 | Black Phoenix        | L   | 1.000      | -            | -                | -                | -         |   -18.10 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           24 |      768 | 2026-09-18 | ex-RUSTEC            | W   | 1.000      | 0.384        | 0.025 (0.010)    | 0.778 (0.299)    | -         |    12.81 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           23 |      819 | 2026-09-17 | G2 Ares              | W   | 1.000      | 0.396        | 0.010 (0.004)    | 0.731 (0.290)    | -         |     7.89 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           22 |      889 | 2026-09-16 | SPARTA               | L   | 1.000      | -            | -                | -                | -         |   -18.50 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           21 |      901 | 2026-09-15 | Spirit Academy       | W   | 1.000      | 0.384        | 0.011 (0.004)    | 0.560 (0.215)    | -         |     8.86 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           20 |      911 | 2026-09-15 | CYBERSHOKE           | L   | 1.000      | -            | -                | -                | -         |   -11.09 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           19 |      987 | 2026-09-13 | FORZE Reload         | W   | 1.000      | 0.417        | 0.016 (0.007)    | 0.364 (0.152)    | 1 (1.000) |    15.24 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           18 |      998 | 2026-09-13 | PRIVATE              | W   | 1.000      | 0.417        | -                | 0.409 (0.171)    | 1 (1.000) |    14.72 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           17 |     1572 | 2026-08-31 | WBT Academy          | L   | 0.968      | -            | -                | -                | -         |   -23.05 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           16 |     1582 | 2026-08-31 | Misa                 | W   | 0.967      | 0.317        | -                | 0.691 (0.212)    | -         |     5.12 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           15 |     1622 | 2026-08-30 | MOUZ NXT             | W   | 0.961      | -            | -                | -                | -         |     7.28 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           14 |     1631 | 2026-08-30 | Misa                 | L   | 0.960      | -            | -                | -                | -         |   -25.36 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           13 |     1918 | 2026-08-24 | Color                | L   | 0.920      | -            | -                | -                | -         |   -17.35 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           12 |     2142 | 2026-08-15 | BASEMENT BOYS        | L   | 0.861      | -            | -                | -                | -         |   -15.98 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           11 |     2177 | 2026-08-14 | OG                   | W   | 0.854      | 0.317        | 0.020 (0.005)    | -                | -         |     7.05 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|           10 |     2190 | 2026-08-14 | Fire Flux            | W   | 0.853      | 0.317        | 0.039 (0.011)    | 0.546 (0.148)    | -         |     4.57 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|            9 |     2624 | 2026-07-30 | Virtus.pro           | L   | 0.753      | -            | -                | -                | -         |    -7.93 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|            8 |     2644 | 2026-07-29 | K28                  | W   | 0.748      | -            | -                | -                | 1 (0.748) |     2.21 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|            7 |     2675 | 2026-07-28 | BET-M                | W   | 0.741      | 0.417        | 0.020 (0.006)    | 0.611 (0.189)    | 1 (0.741) |     7.81 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|            6 |     2680 | 2026-07-28 | 1win                 | W   | 0.740      | 0.417        | 0.056 (0.017)    | 0.792 (0.244)    | 1 (0.740) |    16.45 | danistzz, Norwi, turbo, whisper, xdENiSZERA |
|            5 |     3484 | 2026-06-19 | Lilmix               | L   | 0.481      | -            | -                | -                | -         |   -12.73 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA   |
|            4 |     4240 | 2026-05-23 | Butterfly            | L   | 0.300      | -            | -                | -                | -         |    -5.93 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA   |
|            3 |     4265 | 2026-05-23 | UPGRADE              | L   | 0.299      | -            | -                | -                | -         |    -2.72 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA   |
|            2 |     4306 | 2026-05-22 | eternal premium      | W   | 0.292      | -            | -                | -                | 1 (0.292) |     0.33 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA   |
|            1 |     4316 | 2026-05-22 | Xcity                | W   | 0.291      | -            | -                | -                | 1 (0.291) |     0.27 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,815.01)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-30 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-09-27 |      1.000 | $1,250.00      | $1,250.00       |
| 2026-09-16 |      1.000 | $750.00        | $750.00         |
| 2026-07-30 |      0.755 | $4,000.00      | $3,019.24       |
| 2026-06-21 |      0.495 | $1,000.00      | $494.55         |
| 2026-05-23 |      0.301 | $1,000.00      | $301.22         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
