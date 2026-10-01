### Roster Details<br />
Team Name: FOKUS<br />
Roster: Banjo, Jorko, Matheos, volt, ztr<br />
Global Rank: [43](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [30]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1285.3<br />
<br />
Final Rank Value (1285.3) = Starting Rank Value (1322.7) + Head To Head Adjustments (-37.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.553[<sup>1</sup>](#table2)
- Bounty Collected: 0.479[<sup>2</sup>](#table1)
- Opponent Network: 0.273[<sup>2</sup>](#table1)
- LAN Wins: 0.601[<sup>2</sup>](#table1)

The average of these factors is 0.476<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1322.7
- 400 + ( ( 0.476 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1322.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      196 | 2026-07-25 | MOUZ          | L   | 1.000      | -            | -                | -                | -         |    -1.34 | Banjo, jocab, Matheos, podi, ztr |
|           50 |      262 | 2026-07-23 | HEROIC        | L   | 1.000      | -            | -                | -                | -         |   -10.23 | Banjo, jocab, Matheos, podi, ztr |
|           49 |      274 | 2026-07-23 | Aurora        | W   | 1.000      | 0.903        | 0.492 (0.444)    | 0.557 (0.503)    | -         |    28.70 | Banjo, jocab, Matheos, podi, ztr |
|           48 |      308 | 2026-07-21 | Astralis      | L   | 1.000      | -            | -                | -                | -         |    -4.66 | Banjo, jocab, Matheos, podi, ztr |
|           47 |      826 | 2026-06-25 | INFINITE      | L   | 0.938      | -            | -                | -                | -         |   -14.37 | Banjo, Jorko, Matheos, volt, ztr |
|           46 |      840 | 2026-06-24 | Echo          | L   | 0.933      | -            | -                | -                | -         |   -17.08 | Banjo, Jorko, Matheos, volt, ztr |
|           45 |      851 | 2026-06-23 | OG            | W   | 0.927      | -            | -                | -                | 1 (0.927) |     5.95 | Banjo, Jorko, Matheos, volt, ztr |
|           44 |      867 | 2026-06-21 | Phantom       | L   | 0.913      | -            | -                | -                | -         |   -21.89 | Banjo, Jorko, Matheos, volt, ztr |
|           43 |      888 | 2026-06-20 | CYBERSHOKE    | W   | 0.905      | 0.435        | -                | 0.880 (0.346)    | -         |     7.60 | Banjo, Jorko, Matheos, volt, ztr |
|           42 |      922 | 2026-06-18 | Noir Verse    | W   | 0.892      | -            | -                | -                | -         |     2.47 | Banjo, Jorko, Matheos, volt, ztr |
|           41 |     1313 | 2026-05-31 | Nemesis       | L   | 0.774      | -            | -                | -                | -         |   -11.23 | Banjo, Jorko, Matheos, volt, ztr |
|           40 |     1323 | 2026-05-31 | Nemiga        | W   | 0.773      | 0.435        | 0.102 (0.034)    | 0.713 (0.240)    | -         |     9.54 | Banjo, Jorko, Matheos, volt, ztr |
|           39 |     1364 | 2026-05-30 | fnatic        | W   | 0.767      | 0.435        | -                | 0.824 (0.275)    | -         |     5.26 | Banjo, Jorko, Matheos, volt, ztr |
|           38 |     1476 | 2026-05-28 | Black Phoenix | W   | 0.751      | 0.435        | -                | 1.000 (0.327)    | -         |     3.23 | Banjo, Jorko, Matheos, volt, ztr |
|           37 |     1603 | 2026-05-24 | Wildcard      | L   | 0.727      | -            | -                | -                | -         |    -9.81 | Banjo, Jorko, Matheos, volt, ztr |
|           36 |     1618 | 2026-05-24 | Inner Circle  | W   | 0.726      | 0.435        | 0.141 (0.044)    | 0.736 (0.232)    | 1 (0.726) |    15.36 | Banjo, Jorko, Matheos, volt, ztr |
|           35 |     1643 | 2026-05-23 | Wildcard      | L   | 0.721      | -            | -                | -                | -         |    -9.86 | Banjo, Jorko, Matheos, volt, ztr |
|           34 |     1667 | 2026-05-23 | DENDELE       | W   | 0.719      | 0.435        | 0.115 (0.036)    | 0.609 (0.190)    | 1 (0.719) |    15.20 | Banjo, Jorko, Matheos, volt, ztr |
|           33 |     1705 | 2026-05-22 | Rebels        | W   | 0.713      | 0.435        | -                | 0.522 (0.162)    | 1 (0.713) |     4.04 | Banjo, Jorko, Matheos, volt, ztr |
|           32 |     1798 | 2026-05-20 | ex-1win       | L   | 0.700      | -            | -                | -                | -         |   -15.74 | Banjo, Jorko, Matheos, volt, ztr |
|           31 |     1821 | 2026-05-19 | Butterfly     | W   | 0.694      | 0.435        | -                | 0.889 (0.268)    | -         |     5.19 | Banjo, Jorko, Matheos, volt, ztr |
|           30 |     2309 | 2026-05-02 | Gentle Mates  | L   | 0.578      | -            | -                | -                | -         |   -10.97 | Banjo, Jorko, Matheos, volt, ztr |
|           29 |     2381 | 2026-04-30 | Passion UA    | W   | 0.568      | -            | -                | -                | -         |     3.52 | Banjo, Jorko, Matheos, volt, ztr |
|           28 |     2643 | 2026-04-25 | KOLESIE       | L   | 0.534      | -            | -                | -                | -         |   -13.70 | Banjo, Jorko, Matheos, volt, ztr |
|           27 |     3070 | 2026-04-08 | EYEBALLERS    | L   | 0.418      | -            | -                | -                | -         |    -5.44 | Banjo, Jorko, Matheos, volt, ztr |
|           26 |     3099 | 2026-04-07 | BC.Game       | W   | 0.412      | -            | -                | -                | 1 (0.412) |     0.57 | Banjo, Jorko, Matheos, volt, ztr |
|           25 |     3142 | 2026-04-06 | Wildcard      | L   | 0.405      | -            | -                | -                | -         |    -6.33 | Banjo, Jorko, Matheos, volt, ztr |
|           24 |     3181 | 2026-04-05 | PARIVISION    | L   | 0.399      | -            | -                | -                | -         |    -0.99 | Banjo, Jorko, Matheos, volt, ztr |
|           23 |     3276 | 2026-04-04 | 3DMAX         | W   | 0.391      | 1.000        | 0.337 (0.132)    | 0.483 (0.189)    | 1 (0.391) |     8.25 | Banjo, Jorko, Matheos, volt, ztr |
|           22 |     4029 | 2026-03-24 | Phantom       | W   | 0.322      | -            | -                | -                | 1 (0.322) |     2.37 | Banjo, Jorko, Matheos, volt, ztr |
|           21 |     4048 | 2026-03-24 | OlyBet        | W   | 0.320      | -            | -                | -                | 1 (0.320) |     0.28 | Banjo, Jorko, Matheos, volt, ztr |
|           20 |     4061 | 2026-03-24 | Wildcard      | W   | 0.319      | 0.333        | 0.166 (0.018)    | -                | 1 (0.319) |     5.28 | Banjo, Jorko, Matheos, volt, ztr |
|           19 |     4154 | 2026-03-23 | 3DMAX         | W   | 0.312      | 0.333        | 0.337 (0.035)    | -                | 1 (0.312) |     7.07 | Banjo, Jorko, Matheos, volt, ztr |
|           18 |     4157 | 2026-03-23 | FOKUS REALITY | W   | 0.311      | -            | -                | -                | -         |     0.06 | Banjo, Jorko, Matheos, volt, ztr |
|           17 |     4159 | 2026-03-23 | GAMEHARMONY   | W   | 0.311      | -            | -                | -                | -         |     0.12 | Banjo, Jorko, Matheos, volt, ztr |
|           16 |     4808 | 2026-03-09 | Voca          | L   | 0.220      | -            | -                | -                | -         |    -5.88 | Banjo, Jorko, Matheos, volt, ztr |
|           15 |     4822 | 2026-03-09 | 100 Thieves   | L   | 0.219      | -            | -                | -                | -         |    -2.97 | Banjo, Jorko, Matheos, volt, ztr |
|           14 |     4846 | 2026-03-08 | 9INE          | L   | 0.215      | -            | -                | -                | -         |    -5.86 | Banjo, Jorko, Matheos, volt, ztr |
|           13 |     4866 | 2026-03-08 | Voca          | L   | 0.214      | -            | -                | -                | -         |    -5.83 | Banjo, Jorko, Matheos, volt, ztr |
|           12 |     4875 | 2026-03-08 | KOLESIE       | W   | 0.214      | -            | -                | -                | -         |     0.21 | Banjo, Jorko, Matheos, volt, ztr |
|           11 |     4887 | 2026-03-08 | AM            | L   | 0.213      | -            | -                | -                | -         |    -6.02 | Banjo, Jorko, Matheos, volt, ztr |
|           10 |     4902 | 2026-03-08 | Avanti        | W   | 0.212      | -            | -                | -                | -         |     0.04 | Banjo, Jorko, Matheos, volt, ztr |
|            9 |     4907 | 2026-03-08 | Betclic       | L   | 0.212      | -            | -                | -                | -         |    -5.58 | Banjo, Jorko, Matheos, volt, ztr |
|            8 |     4941 | 2026-03-07 | Walczaki      | W   | 0.206      | -            | -                | -                | -         |     1.93 | Banjo, Jorko, Matheos, volt, ztr |
|            7 |     5016 | 2026-03-05 | Passion UA    | W   | 0.194      | -            | -                | -                | -         |     0.90 | Banjo, Jorko, Matheos, volt, ztr |
|            6 |     5207 | 2026-03-01 | Inner Circle  | W   | 0.167      | 0.769        | 0.141 (0.018)    | -                | -         |     3.71 | Banjo, Jorko, Matheos, volt, ztr |
|            5 |     5255 | 2026-02-28 | EYEBALLERS    | W   | 0.160      | 0.769        | 0.141 (0.017)    | -                | -         |     2.82 | Banjo, Jorko, Matheos, volt, ztr |
|            4 |     5287 | 2026-02-27 | Inner Circle  | W   | 0.155      | -            | -                | -                | -         |     3.44 | Banjo, Jorko, Matheos, volt, ztr |
|            3 |     5346 | 2026-02-26 | BetBoom       | W   | 0.148      | 0.769        | 0.335 (0.038)    | -                | -         |     4.31 | Banjo, Jorko, Matheos, volt, ztr |
|            2 |     5836 | 2026-02-17 | Rune Eaters   | W   | 0.088      | -            | -                | -                | -         |     0.05 | Banjo, Jorko, Matheos, volt, ztr |
|            1 |     5849 | 2026-02-17 | JiJieHao      | W   | 0.087      | -            | -                | -                | -         |     0.91 | Banjo, Jorko, Matheos, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($77,342.01)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      1.000 | $41,250.00     | $41,250.00      |
| 2026-06-28 |      0.961 | $2,500.00      | $2,403.75       |
| 2026-05-31 |      0.774 | $10,000.00     | $7,742.30       |
| 2026-05-24 |      0.727 | $10,000.00     | $7,272.96       |
| 2026-05-21 |      0.706 | $2,000.00      | $1,412.75       |
| 2026-04-26 |      0.541 | $3,500.00      | $1,892.77       |
| 2026-04-11 |      0.440 | $31,250.00     | $13,757.48      |
| 2026-03-24 |      0.322 | $5,000.00      | $1,610.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
