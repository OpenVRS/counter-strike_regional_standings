### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: efire, hasteka, ROUX, Tikuak, yAmi<br />
Global Rank: [82](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_07.md)<br />
Regional Rank: [8]( ../../standings_asia_2026_06_07.md)<br />
<br />
Final Rank Value:  1105.2<br />
<br />
Final Rank Value (1105.2) = Starting Rank Value (1152.1) + Head To Head Adjustments (-46.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.362[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.126[<sup>2</sup>](#table1)
- LAN Wins: 0.753[<sup>2</sup>](#table1)

The average of these factors is 0.391<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1152.1
- 400 + ( ( 0.391 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1152.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.461
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      742 | 2026-05-13 | 5star eSports              | L   | 1.000      | -            | -                | -                | -         |   -12.92 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           48 |      752 | 2026-05-12 | Ground Zero Gaming         | W   | 1.000      | 0.548        | 0.008 (0.004)    | 0.243 (0.133)    | 1 (1.000) |     8.86 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           47 |      795 | 2026-05-11 | JiJieHao                   | L   | 1.000      | -            | -                | -                | -         |    -7.71 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           46 |      834 | 2026-05-10 | NEXVOID                    | W   | 1.000      | 0.548        | 0.013 (0.007)    | 0.385 (0.211)    | 1 (1.000) |    16.36 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           45 |     1050 | 2026-05-02 | TYLOO                      | L   | 0.952      | -            | -                | -                | -         |    -4.92 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           44 |     1105 | 2026-05-01 | NEXVOID                    | L   | 0.946      | -            | -                | -                | -         |   -14.23 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           43 |     1196 | 2026-04-29 | TYLOO                      | W   | 0.932      | 0.333        | 0.091 (0.028)    | 0.598 (0.186)    | -         |    24.51 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           42 |     1278 | 2026-04-27 | Just Swing (Chinese team)  | W   | 0.919      | 0.333        | -                | 0.279 (0.086)    | -         |     4.53 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           41 |     1341 | 2026-04-26 | Legion (Pakistani team)    | W   | 0.912      | -            | -                | -                | -         |     2.73 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           40 |     1791 | 2026-04-09 | FengDa Gaming              | L   | 0.799      | -            | -                | -                | -         |   -19.82 | cool4st, efire, Redka, ROUX, Tikuak  |
|           39 |     1814 | 2026-04-08 | NEXVOID                    | W   | 0.792      | 0.333        | 0.013 (0.003)    | 0.385 (0.102)    | -         |    12.46 | cool4st, efire, Redka, ROUX, Tikuak  |
|           38 |     1846 | 2026-04-07 | FengDa Gaming              | L   | 0.786      | -            | -                | -                | -         |   -20.11 | cool4st, efire, Redka, ROUX, Tikuak  |
|           37 |     1929 | 2026-04-05 | Never Say Never-           | W   | 0.772      | -            | -                | -                | -         |     1.18 | cool4st, efire, Redka, ROUX, Tikuak  |
|           36 |     1958 | 2026-04-04 | TYLOO                      | L   | 0.770      | -            | -                | -                | -         |    -3.98 | cool4st, efire, ligroo, ROUX, Tikuak |
|           35 |     2028 | 2026-04-04 | FlyQuest                   | L   | 0.764      | -            | -                | -                | -         |   -10.10 | cool4st, efire, ligroo, ROUX, Tikuak |
|           34 |     2089 | 2026-04-03 | Team Arise                 | W   | 0.759      | -            | -                | -                | -         |     1.41 | cool4st, efire, Redka, ROUX, Tikuak  |
|           33 |     2187 | 2026-04-02 | 5star eSports              | W   | 0.753      | 0.333        | 0.022 (0.006)    | 0.378 (0.095)    | -         |    12.86 | cool4st, efire, Redka, ROUX, Tikuak  |
|           32 |     2224 | 2026-04-01 | The Huns Esports           | W   | 0.750      | 0.354        | 0.045 (0.012)    | 0.423 (0.112)    | 1 (0.750) |    13.36 | cool4st, efire, ligroo, ROUX, Tikuak |
|           31 |     2297 | 2026-04-01 | The Huns Esports           | L   | 0.745      | -            | -                | -                | -         |   -10.62 | cool4st, efire, ligroo, ROUX, Tikuak |
|           30 |     2312 | 2026-03-31 | Rare Atom                  | W   | 0.743      | 0.354        | -                | 0.316 (0.083)    | 1 (0.743) |    10.47 | cool4st, efire, ligroo, ROUX, Tikuak |
|           29 |     2381 | 2026-03-31 | VTM Esports                | W   | 0.739      | -            | -                | -                | -         |     0.45 | cool4st, efire, ligroo, ROUX, Tikuak |
|           28 |     2408 | 2026-03-31 | NEXVOID                    | L   | 0.738      | -            | -                | -                | -         |   -12.43 | cool4st, efire, ligroo, ROUX, Tikuak |
|           27 |     2629 | 2026-03-28 | Unsettled Resentment       | W   | 0.719      | -            | -                | -                | -         |     0.44 | cool4st, efire, ligroo, ROUX, Tikuak |
|           26 |     2634 | 2026-03-28 | Nas Esports                | W   | 0.718      | -            | -                | -                | -         |     0.86 | cool4st, efire, ligroo, ROUX, Tikuak |
|           25 |     2953 | 2026-03-22 | BMZ                        | W   | 0.678      | -            | -                | -                | 1 (0.678) |     6.90 | cool4st, efire, ligroo, ROUX, Tikuak |
|           24 |     3003 | 2026-03-21 | The QUBE Esports           | L   | 0.673      | -            | -                | -                | -         |   -18.28 | cool4st, efire, Redka, ROUX, Tikuak  |
|           23 |     3016 | 2026-03-21 | BMZ                        | W   | 0.671      | -            | -                | -                | 1 (0.671) |     6.05 | cool4st, efire, ligroo, ROUX, Tikuak |
|           22 |     3060 | 2026-03-20 | Never Say Never-           | L   | 0.666      | -            | -                | -                | -         |   -20.25 | cool4st, efire, Redka, ROUX, Tikuak  |
|           21 |     3113 | 2026-03-19 | NEXVOID                    | W   | 0.658      | 0.307        | 0.013 (0.003)    | -                | 1 (0.658) |     9.27 | cool4st, efire, ligroo, ROUX, Tikuak |
|           20 |     3119 | 2026-03-18 | The Huns Esports           | L   | 0.656      | -            | -                | -                | -         |    -8.95 | cool4st, efire, ligroo, ROUX, Tikuak |
|           19 |     3196 | 2026-03-17 | 5star eSports              | W   | 0.646      | 0.307        | 0.022 (0.004)    | -                | 1 (0.646) |    12.02 | cool4st, efire, ligroo, ROUX, Tikuak |
|           18 |     3204 | 2026-03-17 | 100RA                      | W   | 0.645      | -            | -                | -                | 1 (0.645) |     0.34 | cool4st, efire, ligroo, ROUX, Tikuak |
|           17 |     3248 | 2026-03-15 | 5star eSports              | L   | 0.637      | -            | -                | -                | -         |    -8.30 | cool4st, efire, ligroo, ROUX, Tikuak |
|           16 |     3426 | 2026-03-12 | Lynn Vision Gaming         | L   | 0.612      | -            | -                | -                | -         |    -3.68 | cool4st, efire, ligroo, ROUX, Tikuak |
|           15 |     3442 | 2026-03-11 | TYLOO                      | L   | 0.611      | -            | -                | -                | -         |    -2.68 | cool4st, efire, ligroo, ROUX, Tikuak |
|           14 |     3475 | 2026-03-10 | Alter Ego                  | W   | 0.604      | 0.769        | -                | 0.210 (0.098)    | -         |     4.22 | cool4st, efire, ligroo, ROUX, Tikuak |
|           13 |     3584 | 2026-03-09 | FlyQuest                   | W   | 0.591      | 0.769        | 0.017 (0.008)    | 0.349 (0.159)    | -         |    10.76 | cool4st, efire, ligroo, ROUX, Tikuak |
|           12 |     3593 | 2026-03-08 | Change The Game            | W   | 0.590      | -            | -                | -                | -         |     3.62 | cool4st, efire, ligroo, ROUX, Tikuak |
|           11 |     4026 | 2026-02-27 | The Huns Esports           | L   | 0.531      | -            | -                | -                | -         |    -6.81 | cool4st, efire, ligroo, ROUX, Tikuak |
|           10 |     4028 | 2026-02-27 | BMZ                        | W   | 0.530      | -            | -                | -                | 1 (0.530) |     4.48 | cool4st, efire, ligroo, ROUX, Tikuak |
|            9 |     4079 | 2026-02-26 | NEXVOID                    | W   | 0.524      | -            | -                | -                | -         |     7.48 | cool4st, efire, ligroo, ROUX, Tikuak |
|            8 |     4122 | 2026-02-26 | The Huns Esports           | L   | 0.519      | -            | -                | -                | -         |    -7.45 | cool4st, efire, ligroo, ROUX, Tikuak |
|            7 |     4138 | 2026-02-26 | The Huns Esports           | L   | 0.518      | -            | -                | -                | -         |    -7.78 | cool4st, efire, ligroo, ROUX, Tikuak |
|            6 |     4148 | 2026-02-25 | Lynn Vision Gaming         | L   | 0.517      | -            | -                | -                | -         |    -2.68 | cool4st, efire, ligroo, ROUX, Tikuak |
|            5 |     4386 | 2026-02-21 | Change The Game            | L   | 0.486      | -            | -                | -                | -         |   -12.84 | cool4st, efire, Redka, ROUX, Tikuak  |
|            4 |     4438 | 2026-02-20 | Last Bullet (Chinese team) | L   | 0.479      | -            | -                | -                | -         |   -11.34 | cool4st, efire, Redka, ROUX, Tikuak  |
|            3 |     4544 | 2026-02-18 | 5star eSports              | W   | 0.466      | 0.333        | 0.022 (0.003)    | -                | -         |     8.54 | cool4st, efire, Redka, ROUX, Tikuak  |
|            2 |     5475 | 2026-01-23 | FlyQuest                   | L   | 0.292      | -            | -                | -                | -         |    -4.41 | cool4st, efire, ROUX, Tikuak, yAmi   |
|            1 |     5690 | 2026-01-16 | Change The Game            | W   | 0.251      | -            | -                | -                | -         |     1.21 | cool4st, efire, ROUX, Tikuak, yAmi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,706.35)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-05-03 |      0.959 | $1,500.00      | $1,438.68       |
| 2026-04-09 |      0.799 | $2,500.00      | $1,997.79       |
| 2026-04-04 |      0.771 | $2,250.00      | $1,733.64       |
| 2026-03-22 |      0.678 | $2,510.00      | $1,701.10       |
| 2026-02-27 |      0.531 | $750.00        | $398.24         |
| 2026-01-25 |      0.305 | $1,434.00      | $436.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
