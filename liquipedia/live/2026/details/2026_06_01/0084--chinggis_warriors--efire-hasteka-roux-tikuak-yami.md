### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: efire, hasteka, ROUX, Tikuak, yAmi<br />
Global Rank: [84](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_01.md)<br />
Regional Rank: [9]( ../../standings_asia_2026_06_01.md)<br />
<br />
Final Rank Value:  1111.6<br />
<br />
Final Rank Value (1111.6) = Starting Rank Value (1168.5) + Head To Head Adjustments (-56.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.364[<sup>1</sup>](#table2)
- Bounty Collected: 0.327[<sup>2</sup>](#table1)
- Opponent Network: 0.132[<sup>2</sup>](#table1)
- LAN Wins: 0.791[<sup>2</sup>](#table1)

The average of these factors is 0.404<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1168.5
- 400 + ( ( 0.404 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1168.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.486
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |      632 | 2026-05-13 | 5star eSports              | L   | 1.000      | -            | -                | -                | -         |   -13.03 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           48 |      642 | 2026-05-12 | Ground Zero Gaming         | W   | 1.000      | 0.548        | 0.008 (0.005)    | 0.256 (0.140)    | 1 (1.000) |     8.92 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           47 |      685 | 2026-05-11 | JiJieHao                   | L   | 1.000      | -            | -                | -                | -         |    -8.12 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           46 |      724 | 2026-05-10 | NEXVOID                    | W   | 1.000      | 0.548        | 0.013 (0.007)    | 0.408 (0.224)    | 1 (1.000) |    16.90 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           45 |      940 | 2026-05-02 | TYLOO                      | L   | 1.000      | -            | -                | -                | -         |    -5.69 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           44 |      995 | 2026-05-01 | NEXVOID                    | L   | 0.998      | -            | -                | -                | -         |   -14.42 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           43 |     1086 | 2026-04-29 | TYLOO                      | W   | 0.985      | 0.333        | 0.094 (0.031)    | 0.529 (0.174)    | -         |    25.27 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           42 |     1168 | 2026-04-27 | Just Swing (Chinese team)  | W   | 0.971      | 0.333        | -                | 0.296 (0.096)    | -         |     4.84 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           41 |     1231 | 2026-04-26 | Legion (Pakistani team)    | W   | 0.965      | -            | -                | -                | -         |     2.90 | efire, hasteka, ROUX, Tikuak, yAmi   |
|           40 |     1681 | 2026-04-09 | FengDa Gaming              | L   | 0.851      | -            | -                | -                | -         |   -20.81 | cool4st, efire, Redka, ROUX, Tikuak  |
|           39 |     1704 | 2026-04-08 | NEXVOID                    | W   | 0.845      | 0.333        | 0.013 (0.004)    | 0.408 (0.115)    | -         |    13.76 | cool4st, efire, Redka, ROUX, Tikuak  |
|           38 |     1736 | 2026-04-07 | FengDa Gaming              | L   | 0.838      | -            | -                | -                | -         |   -21.19 | cool4st, efire, Redka, ROUX, Tikuak  |
|           37 |     1819 | 2026-04-05 | Never Say Never-           | W   | 0.825      | -            | -                | -                | -         |     1.25 | cool4st, efire, Redka, ROUX, Tikuak  |
|           36 |     1848 | 2026-04-04 | TYLOO                      | L   | 0.822      | -            | -                | -                | -         |    -4.71 | cool4st, efire, ligroo, ROUX, Tikuak |
|           35 |     1918 | 2026-04-04 | FlyQuest                   | L   | 0.817      | -            | -                | -                | -         |   -13.45 | cool4st, efire, ligroo, ROUX, Tikuak |
|           34 |     1979 | 2026-04-03 | Team Arise                 | W   | 0.811      | -            | -                | -                | -         |     1.47 | cool4st, efire, Redka, ROUX, Tikuak  |
|           33 |     2077 | 2026-04-02 | 5star eSports              | W   | 0.805      | 0.333        | 0.023 (0.006)    | 0.394 (0.106)    | -         |    13.60 | cool4st, efire, Redka, ROUX, Tikuak  |
|           32 |     2114 | 2026-04-01 | The Huns Esports           | W   | 0.802      | 0.354        | 0.045 (0.013)    | 0.455 (0.129)    | 1 (0.802) |    14.46 | cool4st, efire, ligroo, ROUX, Tikuak |
|           31 |     2187 | 2026-04-01 | The Huns Esports           | L   | 0.797      | -            | -                | -                | -         |   -11.18 | cool4st, efire, ligroo, ROUX, Tikuak |
|           30 |     2202 | 2026-03-31 | Rare Atom                  | W   | 0.795      | 0.354        | 0.011 (0.003)    | -                | 1 (0.795) |    11.55 | cool4st, efire, ligroo, ROUX, Tikuak |
|           29 |     2271 | 2026-03-31 | VTM Esports                | W   | 0.791      | -            | -                | -                | -         |     0.46 | cool4st, efire, ligroo, ROUX, Tikuak |
|           28 |     2298 | 2026-03-31 | NEXVOID                    | L   | 0.790      | -            | -                | -                | -         |   -12.80 | cool4st, efire, ligroo, ROUX, Tikuak |
|           27 |     2519 | 2026-03-28 | Unsettled Resentment       | W   | 0.771      | -            | -                | -                | -         |     0.45 | cool4st, efire, ligroo, ROUX, Tikuak |
|           26 |     2524 | 2026-03-28 | Nas Esports                | W   | 0.770      | -            | -                | -                | -         |     0.90 | cool4st, efire, ligroo, ROUX, Tikuak |
|           25 |     2843 | 2026-03-22 | BMZ                        | W   | 0.730      | -            | -                | -                | 1 (0.730) |     7.70 | cool4st, efire, ligroo, ROUX, Tikuak |
|           24 |     2893 | 2026-03-21 | The QUBE Esports           | L   | 0.725      | -            | -                | -                | -         |   -19.67 | cool4st, efire, Redka, ROUX, Tikuak  |
|           23 |     2906 | 2026-03-21 | BMZ                        | W   | 0.724      | -            | -                | -                | 1 (0.724) |     6.73 | cool4st, efire, ligroo, ROUX, Tikuak |
|           22 |     2950 | 2026-03-20 | Never Say Never-           | L   | 0.718      | -            | -                | -                | -         |   -21.87 | cool4st, efire, Redka, ROUX, Tikuak  |
|           21 |     3003 | 2026-03-19 | NEXVOID                    | W   | 0.710      | -            | -                | -                | 1 (0.710) |    10.47 | cool4st, efire, ligroo, ROUX, Tikuak |
|           20 |     3009 | 2026-03-18 | The Huns Esports           | L   | 0.709      | -            | -                | -                | -         |    -9.41 | cool4st, efire, ligroo, ROUX, Tikuak |
|           19 |     3086 | 2026-03-17 | 5star eSports              | W   | 0.698      | 0.307        | 0.023 (0.005)    | -                | 1 (0.698) |    12.95 | cool4st, efire, ligroo, ROUX, Tikuak |
|           18 |     3094 | 2026-03-17 | 100RA                      | W   | 0.697      | -            | -                | -                | 1 (0.697) |     0.34 | cool4st, efire, ligroo, ROUX, Tikuak |
|           17 |     3138 | 2026-03-15 | 5star eSports              | L   | 0.690      | -            | -                | -                | -         |    -9.01 | cool4st, efire, ligroo, ROUX, Tikuak |
|           16 |     3316 | 2026-03-12 | Lynn Vision Gaming         | L   | 0.665      | -            | -                | -                | -         |    -4.57 | cool4st, efire, ligroo, ROUX, Tikuak |
|           15 |     3332 | 2026-03-11 | TYLOO                      | L   | 0.663      | -            | -                | -                | -         |    -3.33 | cool4st, efire, ligroo, ROUX, Tikuak |
|           14 |     3365 | 2026-03-10 | Alter Ego                  | W   | 0.656      | 0.769        | -                | 0.222 (0.112)    | -         |     4.59 | cool4st, efire, ligroo, ROUX, Tikuak |
|           13 |     3474 | 2026-03-09 | FlyQuest                   | W   | 0.643      | 0.769        | 0.019 (0.010)    | 0.268 (0.133)    | -         |     9.23 | cool4st, efire, ligroo, ROUX, Tikuak |
|           12 |     3483 | 2026-03-08 | Change The Game            | W   | 0.642      | 0.769        | -                | 0.196 (0.097)    | -         |     3.92 | cool4st, efire, ligroo, ROUX, Tikuak |
|           11 |     3916 | 2026-02-27 | The Huns Esports           | L   | 0.583      | -            | -                | -                | -         |    -7.28 | cool4st, efire, ligroo, ROUX, Tikuak |
|           10 |     3918 | 2026-02-27 | BMZ                        | W   | 0.582      | -            | -                | -                | 1 (0.582) |     5.02 | cool4st, efire, ligroo, ROUX, Tikuak |
|            9 |     3969 | 2026-02-26 | NEXVOID                    | W   | 0.576      | -            | -                | -                | -         |     8.64 | cool4st, efire, ligroo, ROUX, Tikuak |
|            8 |     4012 | 2026-02-26 | The Huns Esports           | L   | 0.571      | -            | -                | -                | -         |    -8.02 | cool4st, efire, ligroo, ROUX, Tikuak |
|            7 |     4028 | 2026-02-26 | The Huns Esports           | L   | 0.570      | -            | -                | -                | -         |    -8.42 | cool4st, efire, ligroo, ROUX, Tikuak |
|            6 |     4038 | 2026-02-25 | Lynn Vision Gaming         | L   | 0.569      | -            | -                | -                | -         |    -3.46 | cool4st, efire, ligroo, ROUX, Tikuak |
|            5 |     4276 | 2026-02-21 | Change The Game            | L   | 0.538      | -            | -                | -                | -         |   -14.27 | cool4st, efire, Redka, ROUX, Tikuak  |
|            4 |     4328 | 2026-02-20 | Last Bullet (Chinese team) | L   | 0.532      | -            | -                | -                | -         |   -12.57 | cool4st, efire, Redka, ROUX, Tikuak  |
|            3 |     4434 | 2026-02-18 | 5star eSports              | W   | 0.518      | 0.333        | 0.023 (0.004)    | -                | -         |     9.39 | cool4st, efire, Redka, ROUX, Tikuak  |
|            2 |     5365 | 2026-01-23 | FlyQuest                   | L   | 0.345      | -            | -                | -                | -         |    -6.78 | cool4st, efire, ROUX, Tikuak, yAmi   |
|            1 |     5580 | 2026-01-16 | Change The Game            | W   | 0.303      | -            | -                | -                | -         |     1.41 | cool4st, efire, ROUX, Tikuak, yAmi   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,261.33)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-17 |      1.000 | $3,000.00      | $3,000.00       |
| 2026-05-03 |      1.000 | $1,500.00      | $1,500.00       |
| 2026-04-09 |      0.851 | $2,500.00      | $2,128.47       |
| 2026-04-04 |      0.823 | $2,250.00      | $1,851.25       |
| 2026-03-22 |      0.730 | $2,510.00      | $1,832.30       |
| 2026-02-27 |      0.583 | $750.00        | $437.45         |
| 2026-01-25 |      0.357 | $1,434.00      | $511.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
