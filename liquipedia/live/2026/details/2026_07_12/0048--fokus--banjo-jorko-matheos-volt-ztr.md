### Roster Details<br />
Team Name: FOKUS<br />
Roster: Banjo, Jorko, Matheos, volt, ztr<br />
Global Rank: [48](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [35]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  1243.4<br />
<br />
Final Rank Value (1243.4) = Starting Rank Value (1275.5) + Head To Head Adjustments (-32.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.482[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.240[<sup>2</sup>](#table1)
- LAN Wins: 0.695[<sup>2</sup>](#table1)

The average of these factors is 0.462<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1275.5
- 400 + ( ( 0.462 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 1275.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.599
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      287 | 2026-06-25 | INFINITE               | L   | 1.000      | -            | -                | -                | -         |   -14.43 | Banjo, Jorko, Matheos, volt, ztr |
|           46 |      302 | 2026-06-24 | Echo                   | L   | 1.000      | -            | -                | -                | -         |   -17.26 | Banjo, Jorko, Matheos, volt, ztr |
|           45 |      317 | 2026-06-23 | OG                     | W   | 1.000      | 0.548        | -                | 0.302 (0.166)    | 1 (1.000) |     9.02 | Banjo, Jorko, Matheos, volt, ztr |
|           44 |      331 | 2026-06-21 | Phantom Esports        | L   | 1.000      | -            | -                | -                | -         |   -23.98 | Banjo, Jorko, Matheos, volt, ztr |
|           43 |      350 | 2026-06-20 | CYBERSHOKE Esports     | W   | 1.000      | -            | -                | -                | -         |     7.55 | Banjo, Jorko, Matheos, volt, ztr |
|           42 |      383 | 2026-06-18 | Noir Verse             | W   | 1.000      | -            | -                | -                | -         |     2.15 | Banjo, Jorko, Matheos, volt, ztr |
|           41 |      775 | 2026-05-31 | Team Nemesis           | L   | 0.918      | -            | -                | -                | -         |   -12.37 | Banjo, Jorko, Matheos, volt, ztr |
|           40 |      788 | 2026-05-31 | Nemiga Gaming          | W   | 0.917      | 0.435        | 0.108 (0.043)    | 0.746 (0.297)    | -         |    11.71 | Banjo, Jorko, Matheos, volt, ztr |
|           39 |      827 | 2026-05-30 | Fnatic                 | W   | 0.911      | 0.435        | -                | 0.644 (0.255)    | -         |     7.20 | Banjo, Jorko, Matheos, volt, ztr |
|           38 |      935 | 2026-05-28 | Ursa                   | W   | 0.896      | 0.435        | -                | 0.890 (0.346)    | -         |     4.19 | Banjo, Jorko, Matheos, volt, ztr |
|           37 |     1068 | 2026-05-24 | Wildcard               | L   | 0.871      | -            | -                | -                | -         |   -11.52 | Banjo, Jorko, Matheos, volt, ztr |
|           36 |     1087 | 2026-05-24 | IC Esports             | W   | 0.870      | 0.435        | 0.145 (0.055)    | 0.688 (0.260)    | 1 (0.870) |    18.21 | Banjo, Jorko, Matheos, volt, ztr |
|           35 |     1102 | 2026-05-23 | Wildcard               | L   | 0.865      | -            | -                | -                | -         |   -11.62 | Banjo, Jorko, Matheos, volt, ztr |
|           34 |     1138 | 2026-05-23 | Sharks Esports         | W   | 0.863      | 0.435        | 0.052 (0.020)    | 0.578 (0.217)    | 1 (0.863) |    17.95 | Banjo, Jorko, Matheos, volt, ztr |
|           33 |     1167 | 2026-05-22 | Rebels Gaming          | W   | 0.858      | 0.435        | -                | 0.597 (0.222)    | 1 (0.858) |     6.78 | Banjo, Jorko, Matheos, volt, ztr |
|           32 |     1261 | 2026-05-20 | 1w Team                | L   | 0.844      | -            | -                | -                | -         |   -17.43 | Banjo, Jorko, Matheos, volt, ztr |
|           31 |     1284 | 2026-05-19 | Oxuji Esports          | W   | 0.838      | 0.435        | -                | 0.763 (0.278)    | -         |     7.03 | Banjo, Jorko, Matheos, volt, ztr |
|           30 |     1770 | 2026-05-02 | Gentle Mates           | L   | 0.723      | -            | -                | -                | -         |   -12.74 | Banjo, Jorko, Matheos, volt, ztr |
|           29 |     1843 | 2026-04-30 | Passion UA             | W   | 0.712      | -            | -                | -                | -         |     6.88 | Banjo, Jorko, Matheos, volt, ztr |
|           28 |     2108 | 2026-04-25 | KOLESIE                | L   | 0.678      | -            | -                | -                | -         |   -16.20 | Banjo, Jorko, Matheos, volt, ztr |
|           27 |     2534 | 2026-04-08 | EYEBALLERS             | L   | 0.562      | -            | -                | -                | -         |    -6.22 | Banjo, Jorko, Matheos, volt, ztr |
|           26 |     2560 | 2026-04-07 | BC.Game Esports        | W   | 0.556      | 1.000        | 0.038 (0.021)    | -                | 1 (0.556) |     1.73 | Banjo, Jorko, Matheos, volt, ztr |
|           25 |     2606 | 2026-04-06 | Wildcard               | L   | 0.549      | -            | -                | -                | -         |    -8.85 | Banjo, Jorko, Matheos, volt, ztr |
|           24 |     2647 | 2026-04-05 | PARIVISION             | L   | 0.543      | -            | -                | -                | -         |    -0.92 | Banjo, Jorko, Matheos, volt, ztr |
|           23 |     2741 | 2026-04-04 | 3DMAX                  | W   | 0.535      | 1.000        | 0.232 (0.124)    | 0.345 (0.185)    | 1 (0.535) |     9.50 | Banjo, Jorko, Matheos, volt, ztr |
|           22 |     3493 | 2026-03-24 | Phantom Esports        | W   | 0.466      | -            | -                | -                | 1 (0.466) |     2.67 | Banjo, Jorko, Matheos, volt, ztr |
|           21 |     3511 | 2026-03-24 | Hypewrld               | W   | 0.464      | -            | -                | -                | 1 (0.464) |     0.58 | Banjo, Jorko, Matheos, volt, ztr |
|           20 |     3525 | 2026-03-24 | Wildcard               | W   | 0.463      | -            | -                | -                | 1 (0.463) |     7.43 | Banjo, Jorko, Matheos, volt, ztr |
|           19 |     3613 | 2026-03-23 | 3DMAX                  | W   | 0.456      | 0.333        | 0.232 (0.035)    | -                | 1 (0.456) |     8.95 | Banjo, Jorko, Matheos, volt, ztr |
|           18 |     3619 | 2026-03-23 | FOKUS REALITY          | W   | 0.456      | -            | -                | -                | -         |     0.11 | Banjo, Jorko, Matheos, volt, ztr |
|           17 |     3623 | 2026-03-23 | GAMEHARMONY            | W   | 0.456      | -            | -                | -                | -         |     0.24 | Banjo, Jorko, Matheos, volt, ztr |
|           16 |     4270 | 2026-03-09 | Team Voca              | L   | 0.364      | -            | -                | -                | -         |    -8.47 | Banjo, Jorko, Matheos, volt, ztr |
|           15 |     4289 | 2026-03-09 | 100 Thieves            | L   | 0.363      | -            | -                | -                | -         |    -5.62 | Banjo, Jorko, Matheos, volt, ztr |
|           14 |     4311 | 2026-03-08 | 9INE                   | L   | 0.359      | -            | -                | -                | -         |    -8.98 | Banjo, Jorko, Matheos, volt, ztr |
|           13 |     4324 | 2026-03-08 | Team Voca              | L   | 0.358      | -            | -                | -                | -         |    -8.76 | Banjo, Jorko, Matheos, volt, ztr |
|           12 |     4334 | 2026-03-08 | KOLESIE                | W   | 0.358      | -            | -                | -                | -         |     0.65 | Banjo, Jorko, Matheos, volt, ztr |
|           11 |     4344 | 2026-03-08 | AM Gaming              | L   | 0.358      | -            | -                | -                | -         |    -8.30 | Banjo, Jorko, Matheos, volt, ztr |
|           10 |     4359 | 2026-03-08 | Avanti Esport          | W   | 0.357      | -            | -                | -                | -         |     0.07 | Banjo, Jorko, Matheos, volt, ztr |
|            9 |     4368 | 2026-03-08 | Betclic Apogee Esports | L   | 0.356      | -            | -                | -                | -         |    -7.30 | Banjo, Jorko, Matheos, volt, ztr |
|            8 |     4404 | 2026-03-07 | Walczaki               | W   | 0.351      | -            | -                | -                | -         |     3.77 | Banjo, Jorko, Matheos, volt, ztr |
|            7 |     4469 | 2026-03-05 | Passion UA             | W   | 0.339      | -            | -                | -                | -         |     2.57 | Banjo, Jorko, Matheos, volt, ztr |
|            6 |     4678 | 2026-03-01 | IC Esports             | W   | 0.311      | 0.769        | 0.145 (0.035)    | -                | -         |     7.05 | Banjo, Jorko, Matheos, volt, ztr |
|            5 |     4722 | 2026-02-28 | EYEBALLERS             | W   | 0.304      | 0.769        | 0.141 (0.033)    | -                | -         |     5.94 | Banjo, Jorko, Matheos, volt, ztr |
|            4 |     4756 | 2026-02-27 | IC Esports             | W   | 0.298      | 0.769        | 0.145 (0.033)    | -                | -         |     6.83 | Banjo, Jorko, Matheos, volt, ztr |
|            3 |     4810 | 2026-02-26 | BetBoom Team           | W   | 0.292      | 0.769        | 0.357 (0.080)    | 0.761 (0.171)    | -         |     8.66 | Banjo, Jorko, Matheos, volt, ztr |
|            2 |     5294 | 2026-02-17 | Rune Eaters Esports    | W   | 0.232      | -            | -                | -                | -         |     0.23 | Banjo, Jorko, Matheos, volt, ztr |
|            1 |     5310 | 2026-02-17 | JiJieHao               | W   | 0.231      | -            | -                | -                | -         |     3.14 | Banjo, Jorko, Matheos, volt, ztr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($45,065.88)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-05-31 |      0.918 | $10,000.00     | $9,181.71       |
| 2026-05-24 |      0.871 | $10,000.00     | $8,711.11       |
| 2026-05-21 |      0.851 | $2,000.00      | $1,701.25       |
| 2026-04-26 |      0.685 | $3,500.00      | $2,395.88       |
| 2026-04-11 |      0.584 | $31,250.00     | $18,246.53      |
| 2026-03-24 |      0.466 | $5,000.00      | $2,329.40       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
