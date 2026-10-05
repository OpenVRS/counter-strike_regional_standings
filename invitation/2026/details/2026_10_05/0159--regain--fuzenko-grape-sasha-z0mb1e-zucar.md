### Roster Details<br />
Team Name: regain<br />
Roster: fuzenko, grape, sasha, z0mb1e, Zucar<br />
Global Rank: [159](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [28]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  807.5<br />
<br />
Final Rank Value (807.5) = Starting Rank Value (808.9) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.332[<sup>1</sup>](#table2)
- Bounty Collected: 0.299[<sup>2</sup>](#table1)
- Opponent Network: 0.091[<sup>2</sup>](#table1)
- LAN Wins: 0.096[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 808.9
- 400 + ( ( 0.205 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 808.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      262 | 2026-09-28 | Marsborne        | L   | 1.000      | -            | -                | -                | -         |    -9.75 | fuzenko, grape, sasha, z0mb1e, Zucar  |
|           36 |      280 | 2026-09-27 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -7.29 | fuzenko, grape, sasha, z0mb1e, Zucar  |
|           35 |      417 | 2026-09-25 | Marsborne        | W   | 1.000      | 0.363        | 0.034 (0.012)    | 0.578 (0.210)    | 0 (0.000) |    21.77 | grape, marekiew, sasha, z0mb1e, Zucar |
|           34 |      550 | 2026-09-23 | FarmVille        | W   | 1.000      | 0.363        | 0.004 (0.001)    | 0.281 (0.102)    | 0 (0.000) |    11.95 | fuzenko, grape, sasha, z0mb1e, Zucar  |
|           33 |      623 | 2026-09-22 | Marca Registrada | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.17 | grape, marekiew, sasha, z0mb1e, Zucar |
|           32 |     1073 | 2026-09-11 | Marsborne        | L   | 1.000      | -            | -                | -                | -         |    -8.13 | dvrk, fuzenko, grape, sasha, Zucar    |
|           31 |     1113 | 2026-09-10 | LAG              | L   | 1.000      | -            | -                | -                | -         |    -6.26 | dvrk, fuzenko, grape, sasha, Zucar    |
|           30 |     1295 | 2026-09-06 | DETONATE         | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.219 (0.073)    | 0 (0.000) |    12.30 | fuzenko, grape, sasha, spud, Zucar    |
|           29 |     1331 | 2026-09-06 | Axial            | W   | 1.000      | 0.333        | -                | 0.034 (0.011)    | 0 (0.000) |     6.31 | fuzenko, grape, sasha, spud, Zucar    |
|           28 |     1352 | 2026-09-05 | NuTorious        | W   | 1.000      | 0.333        | -                | 0.196 (0.065)    | 0 (0.000) |     9.48 | fuzenko, grape, sasha, spud, Zucar    |
|           27 |     1402 | 2026-09-04 | FarmVille        | L   | 0.996      | -            | -                | -                | -         |   -19.39 | fuzenko, grape, sasha, spud, Zucar    |
|           26 |     1451 | 2026-09-03 | Without a Roof   | L   | 0.989      | -            | -                | -                | -         |    -9.24 | fuzenko, grape, sasha, spud, Zucar    |
|           25 |     1667 | 2026-08-30 | Desi Boyz        | L   | 0.957      | -            | -                | -                | -         |   -13.86 | dvrk, grape, H0NeST, sasha, Zucar     |
|           24 |     1669 | 2026-08-29 | Skyline          | W   | 0.957      | -            | -                | -                | 1 (0.957) |     2.67 | dvrk, grape, H0NeST, sasha, Zucar     |
|           23 |     1678 | 2026-08-29 | DETONATE         | L   | 0.956      | -            | -                | -                | -         |   -19.74 | dvrk, grape, H0NeST, sasha, Zucar     |
|           22 |     2573 | 2026-07-31 | Marsborne        | L   | 0.763      | -            | -                | -                | -         |    -9.20 | dvrk, grape, H0NeST, sasha, Zucar     |
|           21 |     2606 | 2026-07-30 | Chicken Coop     | W   | 0.756      | 0.624        | 0.022 (0.011)    | 0.210 (0.099)    | 0 (0.000) |    12.62 | dvrk, grape, H0NeST, sasha, Zucar     |
|           20 |     2664 | 2026-07-28 | Voca             | L   | 0.743      | -            | -                | -                | -         |    -4.00 | dvrk, grape, H0NeST, sasha, Zucar     |
|           19 |     3142 | 2026-07-10 | Voca             | L   | 0.623      | -            | -                | -                | -         |    -3.45 | bezymecc, grape, H0NeST, sasha, Zucar |
|           18 |     3160 | 2026-07-09 | Club 333         | W   | 0.616      | 0.303        | 0.010 (0.002)    | 0.136 (0.025)    | 0 (0.000) |     6.43 | dvrk, grape, H0NeST, sasha, Zucar     |
|           17 |     3166 | 2026-07-09 | Marsborne        | W   | 0.615      | 0.769        | 0.034 (0.016)    | 0.578 (0.273)    | 0 (0.000) |    12.18 | dvrk, grape, H0NeST, sasha, Zucar     |
|           16 |     3257 | 2026-07-02 | raisedbypixels   | W   | 0.569      | -            | -                | -                | -         |     2.40 | dvrk, grape, H0NeST, sasha, Zucar     |
|           15 |     3314 | 2026-06-29 | Villainous       | W   | 0.550      | 0.303        | 0.003 (0.000)    | 0.219 (0.037)    | -         |     7.26 | dvrk, grape, H0NeST, sasha, Zucar     |
|           14 |     4906 | 2026-05-01 | Zomblers         | L   | 0.156      | -            | -                | -                | -         |    -3.55 | dvrk, fuzenko, grape, sasha, Zucar    |
|           13 |     4957 | 2026-04-30 | FarmVille        | W   | 0.150      | 0.363        | 0.004 (0.000)    | 0.281 (0.015)    | -         |     1.65 | dvrk, fuzenko, grape, sasha, Zucar    |
|           12 |     5002 | 2026-04-29 | Chicken Coop     | W   | 0.143      | 0.363        | 0.022 (0.001)    | -                | -         |     2.35 | dvrk, fuzenko, grape, sasha, Zucar    |
|           11 |     5043 | 2026-04-28 | Wanted Goons     | W   | 0.136      | -            | -                | -                | -         |     1.40 | dvrk, fuzenko, grape, sasha, Zucar    |
|           10 |     5081 | 2026-04-27 | Zomblers         | L   | 0.130      | -            | -                | -                | -         |    -2.96 | dvrk, fuzenko, grape, sasha, Zucar    |
|            9 |     5128 | 2026-04-26 | Fisher College   | W   | 0.123      | 0.363        | 0.010 (0.000)    | -                | -         |     1.42 | dvrk, fuzenko, grape, sasha, Zucar    |
|            8 |     5316 | 2026-04-23 | Zomblers         | W   | 0.103      | -            | -                | -                | -         |     0.97 | dvrk, fuzenko, grape, sasha, Zucar    |
|            7 |     5403 | 2026-04-19 | ClayMakers       | W   | 0.077      | -            | -                | -                | -         |     0.53 | dvrk, fuzenko, grape, sasha, Zucar    |
|            6 |     5435 | 2026-04-18 | Club 333         | L   | 0.070      | -            | -                | -                | -         |    -1.66 | dvrk, fuzenko, grape, sasha, Zucar    |
|            5 |     5475 | 2026-04-15 | EMPIRE           | W   | 0.049      | -            | -                | -                | -         |     0.20 | dvrk, fuzenko, grape, sasha, Zucar    |
|            4 |     5514 | 2026-04-13 | Voca             | L   | 0.036      | -            | -                | -                | -         |    -0.18 | dvrk, fuzenko, grape, sasha, Zucar    |
|            3 |     5533 | 2026-04-12 | Zomblers         | W   | 0.029      | -            | -                | -                | -         |     0.27 | dvrk, fuzenko, grape, sasha, Zucar    |
|            2 |     5636 | 2026-04-08 | Iowa Stormboar   | L   | 0.003      | -            | -                | -                | -         |    -0.06 | dvrk, fuzenko, grape, sasha, Zucar    |
|            1 |     5638 | 2026-04-08 | FarmVille        | W   | 0.002      | -            | -                | -                | -         |     0.02 | dvrk, fuzenko, grape, sasha, Zucar    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,675.14)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-09-29 |      1.000 | $2,000.00      | $2,000.00       |
| 2026-09-13 |      1.000 | $200.00        | $200.00         |
| 2026-07-09 |      0.616 | $3,000.00      | $1,849.09       |
| 2026-05-03 |      0.170 | $1,500.00      | $254.65         |
| 2026-04-25 |      0.116 | $2,000.00      | $232.67         |
| 2026-04-19 |      0.076 | $1,000.00      | $76.02          |
| 2026-04-14 |      0.043 | $1,000.00      | $42.73          |
| 2026-04-09 |      0.010 | $2,000.00      | $19.97          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
