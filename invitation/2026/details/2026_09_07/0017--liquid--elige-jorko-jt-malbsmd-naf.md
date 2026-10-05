### Roster Details<br />
Team Name: Liquid<br />
Roster: EliGE, Jorko, JT, malbsMd, NAF<br />
Global Rank: [17](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [4]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  1465.2<br />
<br />
Final Rank Value (1465.2) = Starting Rank Value (1484.9) + Head To Head Adjustments (-19.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.593[<sup>1</sup>](#table2)
- Bounty Collected: 0.548[<sup>2</sup>](#table1)
- Opponent Network: 0.260[<sup>2</sup>](#table1)
- LAN Wins: 0.880[<sup>2</sup>](#table1)

The average of these factors is 0.570<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1484.9
- 400 + ( ( 0.570 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1484.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      912 | 2026-08-09 | 1win              | L   | 1.000      | -            | -                | -                | -         |   -23.52 | EliGE, Jorko, JT, malbsMd, NAF       |
|           29 |      953 | 2026-08-08 | Metizport         | W   | 0.996      | 0.818        | 0.021 (0.017)    | 0.586 (0.478)    | 1 (0.996) |     2.57 | EliGE, Jorko, JT, malbsMd, NAF       |
|           28 |      980 | 2026-08-07 | Dhala             | W   | 0.992      | -            | -                | -                | 1 (0.992) |     0.06 | EliGE, Jorko, JT, malbsMd, NAF       |
|           27 |     1051 | 2026-08-05 | Betclic           | L   | 0.979      | -            | -                | -                | -         |   -21.20 | EliGE, Jorko, JT, malbsMd, NAF       |
|           26 |     1059 | 2026-08-05 | fnatic            | W   | 0.977      | 0.450        | 0.045 (0.020)    | 0.895 (0.394)    | 1 (0.977) |     8.25 | EliGE, Jorko, JT, malbsMd, NAF       |
|           25 |     1080 | 2026-08-04 | 9INE              | W   | 0.971      | 0.450        | -                | 0.316 (0.138)    | 1 (0.971) |     2.36 | EliGE, Jorko, JT, malbsMd, NAF       |
|           24 |     1172 | 2026-08-01 | Betclic           | W   | 0.951      | 0.450        | 0.059 (0.025)    | 0.356 (0.152)    | 1 (0.951) |     8.69 | EliGE, Jorko, JT, malbsMd, NAF       |
|           23 |     1187 | 2026-08-01 | atputies          | W   | 0.949      | -            | -                | -                | 1 (0.949) |     0.17 | EliGE, Jorko, JT, malbsMd, NAF       |
|           22 |     1246 | 2026-07-30 | Spirit            | L   | 0.937      | -            | -                | -                | -         |    -1.50 | EliGE, Jorko, JT, malbsMd, NAF       |
|           21 |     1407 | 2026-07-25 | G2                | W   | 0.904      | 0.903        | 0.538 (0.439)    | 0.394 (0.321)    | -         |    22.64 | EliGE, Jorko, JT, malbsMd, NAF       |
|           20 |     1440 | 2026-07-24 | Vitality          | W   | 0.898      | 0.903        | 0.862 (0.699)    | 0.423 (0.343)    | -         |    25.85 | EliGE, Jorko, JT, malbsMd, NAF       |
|           19 |     2426 | 2026-06-05 | FlyQuest          | L   | 0.571      | -            | -                | -                | -         |   -15.47 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           18 |     2438 | 2026-06-04 | HEROIC            | W   | 0.565      | 0.624        | 0.114 (0.040)    | 0.696 (0.246)    | 1 (0.565) |     6.06 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           17 |     2471 | 2026-06-03 | MIBR              | L   | 0.557      | -            | -                | -                | -         |    -9.68 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           16 |     2483 | 2026-06-02 | BETBOOM           | L   | 0.552      | -            | -                | -                | -         |    -8.46 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           15 |     2496 | 2026-06-02 | BIG               | W   | 0.551      | 0.624        | 0.151 (0.052)    | 0.569 (0.196)    | 1 (0.551) |    10.87 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           14 |     2970 | 2026-05-21 | The MongolZ       | L   | 0.470      | -            | -                | -                | -         |    -8.00 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           13 |     2993 | 2026-05-20 | 3DMAX             | W   | 0.468      | 1.000        | 0.301 (0.141)    | 0.389 (0.182)    | 1 (0.468) |     4.19 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           12 |     3179 | 2026-05-13 | GamerLegion       | L   | 0.419      | -            | -                | -                | -         |    -7.94 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           11 |     3209 | 2026-05-12 | M80               | W   | 0.414      | 1.000        | 0.130 (0.054)    | 0.353 (0.146)    | 1 (0.414) |     2.61 | EliGE, malbsMd, NAF, siuhy, ultimate |
|           10 |     3253 | 2026-05-11 | Astralis          | L   | 0.407      | -            | -                | -                | -         |    -6.94 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            9 |     4123 | 2026-04-14 | 3DMAX             | L   | 0.225      | -            | -                | -                | -         |    -5.18 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            8 |     4143 | 2026-04-13 | Spirit            | L   | 0.218      | -            | -                | -                | -         |    -0.36 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            7 |     4784 | 2026-03-31 | Sashi             | L   | 0.132      | -            | -                | -                | -         |    -3.31 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            6 |     4806 | 2026-03-31 | HAVU              | W   | 0.131      | -            | -                | -                | -         |     0.13 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            5 |     4840 | 2026-03-31 | M80               | L   | 0.130      | -            | -                | -                | -         |    -3.37 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            4 |     4918 | 2026-03-30 | Inner Circle      | W   | 0.124      | 0.354        | 0.178 (0.008)    | -                | -         |     2.21 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            3 |     5387 | 2026-03-22 | The MongolZ       | L   | 0.072      | -            | -                | -                | -         |    -1.35 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            2 |     5455 | 2026-03-21 | Ninjas in Pyjamas | W   | 0.064      | -            | -                | -                | -         |     0.02 | EliGE, malbsMd, NAF, siuhy, ultimate |
|            1 |     5555 | 2026-03-19 | Spirit            | L   | 0.051      | -            | -                | -                | -         |    -0.09 | EliGE, malbsMd, NAF, siuhy, ultimate |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($104,280.42)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.21) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-05 |      0.979 | $8,000.00      | $7,830.71       |
| 2026-08-02 |      0.957 | $81,250.00     | $77,790.10      |
| 2026-05-24 |      0.490 | $10,000.00     | $4,895.36       |
| 2026-05-17 |      0.446 | $20,000.00     | $8,919.97       |
| 2026-04-19 |      0.259 | $4,000.00      | $1,035.77       |
| 2026-03-29 |      0.117 | $32,500.00     | $3,808.51       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
