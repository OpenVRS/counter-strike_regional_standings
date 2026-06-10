### Roster Details<br />
Team Name: Rooster<br />
Roster: ADK, chelleos, ju1ces, rekonz, SkulL<br />
Global Rank: [194](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_07.md)<br />
Regional Rank: [24]( ../../standings_asia_2026_06_07.md)<br />
<br />
Final Rank Value:  754.9<br />
<br />
Final Rank Value (754.9) = Starting Rank Value (837.5) + Head To Head Adjustments (-82.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.306[<sup>1</sup>](#table2)
- Bounty Collected: 0.240[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.322[<sup>2</sup>](#table1)

The average of these factors is 0.227<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 837.5
- 400 + ( ( 0.227 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 837.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.326
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |     1017 | 2026-05-03 | Last Bullet (Chinese team)       | L   | 0.958      | -            | -                | -                | -         |    -9.67 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           44 |     1063 | 2026-05-02 | Alter Ego                        | L   | 0.951      | -            | -                | -                | -         |    -7.76 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           43 |     1119 | 2026-05-01 | Team ZevS                        | W   | 0.944      | -            | -                | -                | 1 (0.944) |    11.01 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           42 |     1155 | 2026-04-30 | WYDO Esports                     | W   | 0.938      | -            | -                | -                | 1 (0.938) |     3.45 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           41 |     1206 | 2026-04-29 | Ex-FURY                          | L   | 0.931      | -            | -                | -                | -         |   -24.09 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           40 |     1287 | 2026-04-27 | MARKandLARRY                     | L   | 0.918      | -            | -                | -                | -         |   -23.22 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           39 |     1598 | 2026-04-19 | Team Abyssal                     | L   | 0.864      | -            | -                | -                | -         |   -16.19 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           38 |     1618 | 2026-04-17 | Ding Cuts                        | W   | 0.856      | 0.306        | 0.001 (0.000)    | 0.130 (0.034)    | 0 (0.000) |     6.27 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           37 |     1621 | 2026-04-17 | Team Abyssal                     | W   | 0.856      | 0.306        | 0.004 (0.001)    | 0.258 (0.067)    | 0 (0.000) |    10.45 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           36 |     1715 | 2026-04-12 | Time Waves                       | W   | 0.818      | -            | -                | -                | 0 (0.000) |     2.71 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           35 |     1719 | 2026-04-11 | Ding Cuts                        | L   | 0.817      | -            | -                | -                | -         |   -20.24 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           34 |     1721 | 2026-04-11 | The Bardolphs (Australian team)  | W   | 0.816      | -            | -                | -                | 0 (0.000) |     2.21 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           33 |     1796 | 2026-04-09 | Ground Zero Gaming               | L   | 0.798      | -            | -                | -                | -         |    -9.21 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           32 |     1820 | 2026-04-08 | Team Abyssal                     | W   | 0.791      | 0.278        | 0.004 (0.001)    | 0.258 (0.057)    | 0 (0.000) |     8.78 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           31 |     1855 | 2026-04-07 | Arcade Esports (Australian team) | W   | 0.785      | 0.278        | 0.002 (0.000)    | 0.209 (0.045)    | 0 (0.000) |    10.11 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           30 |     1892 | 2026-04-06 | Skele                            | W   | 0.778      | -            | -                | -                | -         |     4.55 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           29 |     1945 | 2026-04-05 | Ground Zero Gaming               | L   | 0.771      | -            | -                | -                | -         |    -8.94 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           28 |     2109 | 2026-04-03 | Skele                            | W   | 0.758      | -            | -                | -                | -         |     2.15 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           27 |     2680 | 2026-03-27 | SemperFi Esports                 | L   | 0.712      | -            | -                | -                | -         |    -4.29 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           26 |     2718 | 2026-03-26 | Ground Zero Gaming               | W   | 0.705      | 0.278        | 0.008 (0.002)    | 0.243 (0.048)    | -         |    14.05 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           25 |     2771 | 2026-03-25 | Mindfreak (Australian team)      | W   | 0.698      | 0.278        | 0.005 (0.001)    | 0.184 (0.036)    | -         |    11.60 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           24 |     2828 | 2026-03-24 | Arcade Esports (Australian team) | W   | 0.692      | 0.278        | 0.002 (0.000)    | 0.209 (0.040)    | -         |    10.03 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           23 |     2905 | 2026-03-23 | SemperFi Esports                 | L   | 0.685      | -            | -                | -                | -         |    -3.75 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           22 |     3012 | 2026-03-21 | Arcade Esports (Australian team) | W   | 0.672      | 0.278        | 0.002 (0.000)    | 0.209 (0.039)    | -         |    10.10 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           21 |     3245 | 2026-03-16 | Ground Zero Gaming               | L   | 0.638      | -            | -                | -                | -         |    -6.23 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           20 |     3249 | 2026-03-15 | Time Waves                       | W   | 0.637      | -            | -                | -                | 1 (0.637) |     2.27 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           19 |     3251 | 2026-03-15 | Ground Zero Gaming               | L   | 0.637      | -            | -                | -                | -         |    -6.38 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           18 |     3440 | 2026-03-12 | Ground Zero Gaming               | L   | 0.611      | -            | -                | -                | -         |    -6.37 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           17 |     3443 | 2026-03-11 | Time Waves                       | W   | 0.610      | -            | -                | -                | 1 (0.610) |     2.09 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           16 |     3447 | 2026-03-11 | Ground Zero Gaming               | L   | 0.609      | -            | -                | -                | -         |    -6.52 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           15 |     4232 | 2026-02-24 | Skele                            | L   | 0.505      | -            | -                | -                | -         |   -12.79 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           14 |     4349 | 2026-02-22 | Team Abyssal                     | L   | 0.492      | -            | -                | -                | -         |   -10.24 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           13 |     4399 | 2026-02-21 | Skele                            | L   | 0.485      | -            | -                | -                | -         |   -12.81 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           12 |     4455 | 2026-02-20 | BBBMBCBS                         | W   | 0.478      | -            | -                | -                | -         |     2.01 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           11 |     4553 | 2026-02-18 | Skele                            | L   | 0.465      | -            | -                | -                | -         |   -12.48 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           10 |     5002 | 2026-02-08 | THUNDERdOWNUNDER                 | L   | 0.398      | -            | -                | -                | -         |    -1.45 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            9 |     5003 | 2026-02-07 | Mindfreak (Australian team)      | W   | 0.397      | 0.305        | 0.005 (0.001)    | -                | -         |     5.46 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            8 |     5029 | 2026-02-06 | Arcade Esports (Australian team) | W   | 0.390      | 0.305        | -                | 0.209 (0.025)    | -         |     5.06 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            7 |     5034 | 2026-02-06 | Mindfreak (Australian team)      | L   | 0.389      | -            | -                | -                | -         |    -6.95 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            6 |     5246 | 2026-01-31 | Team Abyssal                     | W   | 0.344      | 0.305        | 0.004 (0.000)    | 0.258 (0.027)    | -         |     3.31 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            5 |     5250 | 2026-01-30 | THUNDERdOWNUNDER                 | L   | 0.343      | -            | -                | -                | -         |    -1.24 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            4 |     5251 | 2026-01-30 | The Gentlemans Kennel            | W   | 0.342      | -            | -                | -                | -         |     0.86 | chelleos, ju1ces, rekonz, SkulL, viridian |
|            3 |     6095 | 2025-12-13 | Mindfreak (Australian team)      | L   | 0.023      | -            | -                | -                | -         |    -0.61 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            2 |     6106 | 2025-12-12 | Ground Zero Gaming               | W   | 0.017      | -            | -                | -                | -         |     0.33 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            1 |     6110 | 2025-12-12 | THUNDERdOWNUNDER                 | L   | 0.016      | -            | -                | -                | -         |    -0.06 | ADK, chelleos, ju1ces, Terryyy, viridian  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,323.66)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-19 |      0.864 | $1,435.02      | $1,240.43       |
| 2026-04-09 |      0.798 | $1,000.00      | $798.01         |
| 2026-03-27 |      0.712 | $1,000.00      | $711.62         |
| 2026-02-08 |      0.398 | $1,403.00      | $558.01         |
| 2025-12-13 |      0.023 | $666.00        | $15.60          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
