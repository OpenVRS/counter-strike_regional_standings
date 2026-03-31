### Roster Details<br />
Team Name: Passion UA<br />
Roster: JT, Kvem, nicx, Senzu, try<br />
Global Rank: [76](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_29.md)<br />
Regional Rank: [17]( ../../standings_americas_2026_03_29.md)<br />
<br />
Final Rank Value:  1131.0<br />
<br />
Final Rank Value (1131.0) = Starting Rank Value (1133.3) + Head To Head Adjustments (-2.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.452[<sup>1</sup>](#table2)
- Bounty Collected: 0.428[<sup>2</sup>](#table1)
- Opponent Network: 0.127[<sup>2</sup>](#table1)
- LAN Wins: 0.504[<sup>2</sup>](#table1)

The average of these factors is 0.378<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1133.3
- 400 + ( ( 0.378 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1133.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.309
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           39 |      171 | 2026-03-24 | Tricked Esport    | L   | 1.000      | -            | -                | -                | -         |   -12.63 | JT, Kvem, nicx, Senzu, try     |
|           38 |      197 | 2026-03-24 | BASEMENT BOYS     | L   | 1.000      | -            | -                | -                | -         |   -27.74 | JT, Kvem, nicx, Senzu, try     |
|           37 |     1083 | 2026-03-05 | FOKUS             | L   | 1.000      | -            | -                | -                | -         |   -12.13 | JT, Kvem, nicx, Senzu, try     |
|           36 |     1148 | 2026-03-04 | HEROIC            | L   | 1.000      | -            | -                | -                | -         |    -7.54 | JT, Kvem, nicx, Senzu, try     |
|           35 |     1195 | 2026-03-03 | PaiN Gaming       | L   | 1.000      | -            | -                | -                | -         |   -15.09 | JT, Kvem, nicx, Senzu, try     |
|           34 |     1241 | 2026-03-02 | FUT Esports       | L   | 1.000      | -            | -                | -                | -         |    -4.20 | JT, Kvem, nicx, Senzu, try     |
|           33 |     1272 | 2026-03-01 | Team Liquid       | W   | 1.000      | 0.613        | 0.249 (0.153)    | 0.273 (0.167)    | -         |    22.55 | JT, Kvem, nicx, Senzu, try     |
|           32 |     1714 | 2026-02-21 | Gentle Mates      | L   | 0.956      | -            | -                | -                | -         |    -7.02 | Grim, JT, Kvem, nicx, try      |
|           31 |     1784 | 2026-02-19 | Rebels Gaming     | W   | 0.946      | 0.341        | 0.010 (0.003)    | 0.351 (0.113)    | 1 (0.946) |    11.15 | Grim, JT, Kvem, nicx, try      |
|           30 |     1790 | 2026-02-19 | ALGO Esports      | W   | 0.945      | 0.341        | -                | 0.267 (0.086)    | 1 (0.945) |     5.80 | Grim, JT, Kvem, nicx, try      |
|           29 |     1791 | 2026-02-19 | Rebels Gaming     | L   | 0.945      | -            | -                | -                | -         |   -18.54 | Grim, JT, Kvem, nicx, try      |
|           28 |     2160 | 2026-02-12 | Wildcard          | W   | 0.900      | -            | -                | -                | -         |     6.39 | Grim, hallzerk, JT, Kvem, nicx |
|           27 |     2200 | 2026-02-11 | Wildcard          | W   | 0.893      | -            | -                | -                | -         |     6.04 | Grim, hallzerk, JT, Kvem, nicx |
|           26 |     2230 | 2026-02-10 | SportsBetExpert   | W   | 0.887      | -            | -                | -                | -         |     2.67 | Grim, hallzerk, JT, Kvem, nicx |
|           25 |     2245 | 2026-02-10 | Team mouse        | W   | 0.885      | -            | -                | -                | -         |     0.67 | Grim, hallzerk, JT, Kvem, nicx |
|           24 |     2300 | 2026-02-08 | NRG               | L   | 0.871      | -            | -                | -                | -         |    -6.64 | Grim, hallzerk, JT, Kvem, nicx |
|           23 |     2325 | 2026-02-07 | M80               | W   | 0.866      | 0.143        | 0.071 (0.009)    | -                | -         |    19.23 | Grim, hallzerk, JT, Kvem, nicx |
|           22 |     2354 | 2026-02-06 | BOSS              | W   | 0.859      | -            | -                | -                | -         |     2.24 | Grim, hallzerk, JT, Kvem, nicx |
|           21 |     2608 | 2026-01-29 | Ninjas in Pyjamas | L   | 0.804      | -            | -                | -                | -         |    -6.71 | Grim, hallzerk, JT, Kvem, nicx |
|           20 |     2622 | 2026-01-28 | G2 Esports        | L   | 0.799      | -            | -                | -                | -         |    -3.53 | Grim, hallzerk, JT, Kvem, nicx |
|           19 |     3113 | 2026-01-14 | GamerLegion       | L   | 0.703      | -            | -                | -                | -         |    -3.56 | Grim, hallzerk, JT, Kvem, nicx |
|           18 |     3500 | 2025-12-07 | FaZe Clan         | L   | 0.451      | -            | -                | -                | -         |    -3.18 | Grim, hallzerk, JT, Kvem, nicx |
|           17 |     3523 | 2025-12-06 | Imperial Esports  | W   | 0.445      | 1.000        | 0.041 (0.018)    | 0.543 (0.242)    | 1 (0.445) |     8.24 | Grim, hallzerk, JT, Kvem, nicx |
|           16 |     3550 | 2025-12-05 | Team Liquid       | W   | 0.438      | 1.000        | 0.249 (0.109)    | 0.273 (0.120)    | 1 (0.438) |    10.44 | Grim, hallzerk, JT, Kvem, nicx |
|           15 |     3574 | 2025-12-04 | Team Falcons      | L   | 0.432      | -            | -                | -                | -         |    -0.47 | Grim, hallzerk, JT, Kvem, nicx |
|           14 |     3587 | 2025-12-04 | G2 Esports        | L   | 0.430      | -            | -                | -                | -         |    -1.79 | Grim, hallzerk, JT, Kvem, nicx |
|           13 |     3616 | 2025-12-02 | M80               | W   | 0.417      | 0.769        | 0.071 (0.023)    | 0.474 (0.152)    | 1 (0.417) |     9.58 | Grim, hallzerk, JT, Kvem, nicx |
|           12 |     3635 | 2025-12-01 | Fnatic            | W   | 0.410      | 0.769        | 0.043 (0.013)    | 0.336 (0.106)    | 1 (0.410) |     6.86 | Grim, hallzerk, JT, Kvem, nicx |
|           11 |     3652 | 2025-11-30 | 3DMAX             | L   | 0.404      | -            | -                | -                | -         |    -2.19 | Grim, hallzerk, JT, Kvem, nicx |
|           10 |     3676 | 2025-11-29 | MIBR              | W   | 0.399      | 0.769        | 0.077 (0.024)    | 0.447 (0.137)    | 1 (0.399) |     8.49 | Grim, hallzerk, JT, Kvem, nicx |
|            9 |     3696 | 2025-11-29 | FaZe Clan         | L   | 0.397      | -            | -                | -                | -         |    -2.80 | Grim, hallzerk, JT, Kvem, nicx |
|            8 |     3843 | 2025-11-23 | FUT Esports       | L   | 0.357      | -            | -                | -                | -         |    -1.23 | Grim, hallzerk, JT, Kvem, nicx |
|            7 |     3862 | 2025-11-22 | ECSTATIC          | L   | 0.351      | -            | -                | -                | -         |    -2.20 | Grim, hallzerk, JT, Kvem, nicx |
|            6 |     3881 | 2025-11-22 | Nexus Gaming      | W   | 0.349      | -            | -                | -                | 1 (0.349) |     4.64 | Grim, hallzerk, JT, Kvem, nicx |
|            5 |     3901 | 2025-11-21 | GenOne            | W   | 0.344      | -            | -                | -                | 1 (0.344) |     2.60 | Grim, hallzerk, JT, Kvem, nicx |
|            4 |     3930 | 2025-11-21 | Acend             | W   | 0.342      | 0.338        | 0.031 (0.004)    | 0.705 (0.082)    | 1 (0.342) |     5.51 | Grim, hallzerk, JT, Kvem, nicx |
|            3 |     4072 | 2025-11-14 | PaiN Gaming       | L   | 0.295      | -            | -                | -                | -         |    -4.43 | Grim, hallzerk, JT, Kvem, nicx |
|            2 |     4104 | 2025-11-12 | Team Falcons      | L   | 0.288      | -            | -                | -                | -         |    -0.27 | Grim, hallzerk, JT, Kvem, nicx |
|            1 |     4141 | 2025-11-11 | The MongolZ       | W   | 0.280      | 0.687        | 0.554 (0.107)    | 0.317 (0.061)    | -         |     8.44 | Grim, hallzerk, JT, Kvem, nicx |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($30,286.67)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-05 |      1.000 | $4,500.00      | $4,500.00       |
| 2026-01-30 |      0.812 | $2,500.00      | $2,028.99       |
| 2026-01-18 |      0.732 | $7,500.00      | $5,486.63       |
| 2025-12-14 |      0.498 | $20,000.00     | $9,958.33       |
| 2025-11-23 |      0.358 | $1,658.21      | $593.96         |
| 2025-11-16 |      0.309 | $25,000.00     | $7,718.75       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
