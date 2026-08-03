### Roster Details<br />
Team Name: Chicken Coop<br />
Roster: Crisp, Drop, jared, mds, REKMEISTER<br />
Global Rank: [108](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_08_03.md)<br />
Regional Rank: [22]( ../../standings_americas_2026_08_03.md)<br />
<br />
Final Rank Value:  970.0<br />
<br />
Final Rank Value (970.0) = Starting Rank Value (997.3) + Head To Head Adjustments (-27.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.411[<sup>1</sup>](#table2)
- Bounty Collected: 0.272[<sup>2</sup>](#table1)
- Opponent Network: 0.068[<sup>2</sup>](#table1)
- LAN Wins: 0.484[<sup>2</sup>](#table1)

The average of these factors is 0.308<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 997.3
- 400 + ( ( 0.308 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 997.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |       67 | 2026-07-30 | regain          | L   | 1.000      | -            | -                | -                | -         |   -21.96 | Crisp, Drop, jared, Panic, REKMEISTER  |
|           33 |       97 | 2026-07-29 | SportsBetExpert | L   | 1.000      | -            | -                | -                | -         |   -17.37 | Crisp, Drop, jared, mds, REKMEISTER    |
|           32 |      863 | 2026-06-21 | Club 333        | W   | 0.916      | 0.398        | 0.017 (0.006)    | 0.293 (0.107)    | 0 (0.000) |     5.02 | Crisp, Drop, jared, mds, REKMEISTER    |
|           31 |      875 | 2026-06-20 | Overtake Sector | W   | 0.909      | 0.398        | 0.005 (0.002)    | 0.135 (0.049)    | 0 (0.000) |     3.38 | Crisp, Drop, jared, mds, REKMEISTER    |
|           30 |      893 | 2026-06-19 | dice            | W   | 0.903      | -            | -                | -                | 0 (0.000) |     1.90 | Crisp, Drop, jared, mds, REKMEISTER    |
|           29 |     1123 | 2026-06-08 | Club 333        | W   | 0.830      | 0.143        | 0.017 (0.002)    | 0.293 (0.035)    | 0 (0.000) |     4.19 | Crisp, Drop, jared, mds, REKMEISTER    |
|           28 |     1147 | 2026-06-07 | Third Prime     | W   | 0.823      | -            | -                | -                | -         |     0.90 | Crisp, Drop, jared, mds, REKMEISTER    |
|           27 |     1310 | 2026-05-31 | Marsborne       | W   | 0.775      | 0.294        | 0.009 (0.002)    | 0.403 (0.092)    | 1 (0.775) |    11.38 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           26 |     1326 | 2026-05-31 | Marsborne       | W   | 0.773      | 0.294        | 0.009 (0.002)    | 0.403 (0.092)    | 1 (0.773) |    11.73 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           25 |     1344 | 2026-05-30 | SportsBetExpert | W   | 0.768      | 0.294        | 0.006 (0.001)    | 0.341 (0.077)    | 1 (0.768) |    11.88 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           24 |     1359 | 2026-05-30 | NuTorious       | W   | 0.767      | 0.294        | 0.004 (0.001)    | 0.299 (0.068)    | 1 (0.767) |     8.96 | Crisp, Drop, Fessor, jared, REKMEISTER |
|           23 |     1479 | 2026-05-27 | Voca            | L   | 0.749      | -            | -                | -                | -         |    -9.20 | Crisp, Drop, jared, mds, REKMEISTER    |
|           22 |     2415 | 2026-04-29 | regain          | L   | 0.563      | -            | -                | -                | -         |   -13.21 | Crisp, Drop, jared, mds, REKMEISTER    |
|           21 |     2468 | 2026-04-28 | Marsborne       | W   | 0.554      | 0.363        | 0.008 (0.002)    | 0.167 (0.034)    | -         |     5.60 | Crisp, Drop, jared, mds, REKMEISTER    |
|           20 |     2502 | 2026-04-27 | Voca            | L   | 0.549      | -            | -                | -                | -         |    -7.81 | Crisp, Drop, jared, mds, REKMEISTER    |
|           19 |     2540 | 2026-04-26 | NuTorious       | W   | 0.543      | 0.363        | -                | 0.299 (0.059)    | -         |     6.38 | Crisp, Drop, jared, mds, REKMEISTER    |
|           18 |     2612 | 2026-04-25 | Wildcard        | L   | 0.536      | -            | -                | -                | -         |    -1.91 | Crisp, Drop, jared, mds, REKMEISTER    |
|           17 |     2616 | 2026-04-25 | Iowa Stormboar  | W   | 0.536      | 0.371        | 0.010 (0.002)    | 0.324 (0.064)    | 1 (0.536) |     4.17 | Crisp, Drop, jared, mds, REKMEISTER    |
|           16 |     2622 | 2026-04-25 | It's a Secret   | W   | 0.535      | -            | -                | -                | 1 (0.535) |     0.68 | Crisp, Drop, jared, mds, REKMEISTER    |
|           15 |     2642 | 2026-04-25 | Iowa Stormboar  | L   | 0.534      | -            | -                | -                | -         |   -12.93 | Crisp, Drop, jared, mds, REKMEISTER    |
|           14 |     3886 | 2026-03-27 | insane players  | W   | 0.343      | 0.363        | 0.008 (0.001)    | -                | -         |     1.97 | colin, Crisp, Drop, jared, REKMEISTER  |
|           13 |     3931 | 2026-03-26 | Aether          | W   | 0.337      | -            | -                | -                | -         |     1.75 | colin, Crisp, Drop, jared, REKMEISTER  |
|           12 |     3974 | 2026-03-25 | insane players  | L   | 0.330      | -            | -                | -                | -         |    -8.59 | colin, Crisp, Drop, jared, REKMEISTER  |
|           11 |     4082 | 2026-03-23 | Aether          | W   | 0.317      | -            | -                | -                | -         |     1.51 | colin, Crisp, Drop, jared, REKMEISTER  |
|           10 |     4088 | 2026-03-23 | Fisher College  | L   | 0.316      | -            | -                | -                | -         |    -5.23 | colin, Crisp, Drop, jared, REKMEISTER  |
|            9 |     4203 | 2026-03-21 | OverKnight      | W   | 0.303      | -            | -                | -                | -         |     0.49 | colin, Crisp, Drop, jared, REKMEISTER  |
|            8 |     4269 | 2026-03-20 | 900FPSvsECO     | W   | 0.296      | -            | -                | -                | -         |     1.21 | colin, Crisp, Drop, jared, REKMEISTER  |
|            7 |     4368 | 2026-03-18 | Fisher College  | L   | 0.283      | -            | -                | -                | -         |    -4.78 | colin, Crisp, Drop, jared, REKMEISTER  |
|            6 |     4727 | 2026-03-10 | LAG             | L   | 0.229      | -            | -                | -                | -         |    -5.98 | colin, Crisp, Drop, jared, REKMEISTER  |
|            5 |     4843 | 2026-03-08 | insane players  | W   | 0.216      | -            | -                | -                | -         |     1.04 | colin, Crisp, Drop, jared, REKMEISTER  |
|            4 |     5914 | 2026-02-15 | FarmVille       | L   | 0.077      | -            | -                | -                | -         |    -2.03 | CoJoMo, Crisp, Drop, jared, REKMEISTER |
|            3 |     6086 | 2026-02-12 | NuTorious       | W   | 0.056      | -            | -                | -                | -         |     0.63 | Crisp, Drop, jared, Panic, REKMEISTER  |
|            2 |     6161 | 2026-02-10 | LAG             | L   | 0.043      | -            | -                | -                | -         |    -1.14 | Crisp, Drop, jared, Panic, REKMEISTER  |
|            1 |     6280 | 2026-02-06 | Iowa Stormboar  | W   | 0.016      | -            | -                | -                | -         |     0.10 | Crisp, Drop, jared, Panic, REKMEISTER  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,343.96)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      0.916 | $15,000.00     | $13,739.92      |
| 2026-05-31 |      0.775 | $2,400.00      | $1,860.03       |
| 2026-03-27 |      0.343 | $8,000.00      | $2,744.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
