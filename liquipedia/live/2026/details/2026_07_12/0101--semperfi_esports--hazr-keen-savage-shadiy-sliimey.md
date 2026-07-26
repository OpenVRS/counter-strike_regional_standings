### Roster Details<br />
Team Name: SemperFi Esports<br />
Roster: HaZR, keen, SaVage, shadiy, sliimey<br />
Global Rank: [101](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_07_12.md)<br />
Regional Rank: [10]( ../../standings_asia_2026_07_12.md)<br />
<br />
Final Rank Value:  971.0<br />
<br />
Final Rank Value (971.0) = Starting Rank Value (943.2) + Head To Head Adjustments (27.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.320[<sup>1</sup>](#table2)
- Bounty Collected: 0.298[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.479[<sup>2</sup>](#table1)

The average of these factors is 0.287<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 943.2
- 400 + ( ( 0.287 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 943.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.234
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      921 | 2026-05-28 | TYLOO                            | L   | 0.897      | -            | -                | -                | -         |    -1.38 | HaZR, keen, SaVage, shadiy, sliimey |
|           39 |      964 | 2026-05-27 | THUNDERdOWNUNDER                 | W   | 0.890      | 0.143        | 0.030 (0.004)    | 0.344 (0.044)    | -         |    19.37 | HaZR, keen, SaVage, shadiy, sliimey |
|           38 |     1459 | 2026-05-12 | THUNDERdOWNUNDER                 | L   | 0.795      | -            | -                | -                | -         |    -7.66 | HaZR, keen, SaVage, shadiy, sliimey |
|           37 |     1500 | 2026-05-12 | Kaleido Gaming                   | L   | 0.789      | -            | -                | -                | -         |   -15.80 | HaZR, keen, SaVage, shadiy, sliimey |
|           36 |     1527 | 2026-05-11 | Change The Game                  | W   | 0.783      | 0.548        | 0.003 (0.001)    | 0.135 (0.058)    | 1 (0.783) |     6.42 | HaZR, keen, SaVage, shadiy, sliimey |
|           35 |     2747 | 2026-04-03 | Rare Atom                        | L   | 0.534      | -            | -                | -                | -         |    -9.73 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           34 |     2935 | 2026-04-01 | FlyQuest                         | L   | 0.521      | -            | -                | -                | -         |    -6.15 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           33 |     3020 | 2026-03-31 | TYLOO                            | W   | 0.515      | 0.354        | 0.173 (0.031)    | 0.778 (0.142)    | 1 (0.515) |    15.79 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           32 |     3341 | 2026-03-28 | Just Swing (Chinese team)        | W   | 0.489      | 0.320        | -                | 0.232 (0.036)    | -         |     3.30 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           31 |     3348 | 2026-03-27 | TEAM XDM                         | W   | 0.488      | -            | -                | -                | -         |     0.96 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           30 |     3390 | 2026-03-27 | Rooster                          | W   | 0.483      | 0.278        | 0.009 (0.001)    | 0.394 (0.053)    | -         |     3.99 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           29 |     3480 | 2026-03-25 | Ground Zero Gaming               | W   | 0.469      | 0.278        | 0.003 (0.000)    | -                | -         |     3.96 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           28 |     3615 | 2026-03-23 | Rooster                          | W   | 0.456      | 0.278        | 0.009 (0.001)    | 0.394 (0.050)    | -         |     3.63 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           27 |     3723 | 2026-03-21 | Muttley Crew                     | W   | 0.443      | -            | -                | -                | -         |     0.63 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           26 |     3918 | 2026-03-17 | THUNDERdOWNUNDER                 | L   | 0.415      | -            | -                | -                | -         |    -3.97 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           25 |     3920 | 2026-03-16 | Arcade Esports (Australian team) | W   | 0.415      | 0.327        | -                | 0.154 (0.021)    | 1 (0.415) |     2.55 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           24 |     3922 | 2026-03-16 | THUNDERdOWNUNDER                 | L   | 0.414      | -            | -                | -                | -         |    -4.04 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           23 |     3927 | 2026-03-16 | Ground Zero Gaming               | W   | 0.413      | 0.327        | 0.003 (0.000)    | -                | 1 (0.413) |     3.55 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           22 |     3966 | 2026-03-15 | Mindfreak (Australian team)      | W   | 0.407      | -            | -                | -                | 1 (0.407) |     3.06 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           21 |     3969 | 2026-03-15 | Arcade Esports (Australian team) | W   | 0.407      | 0.327        | -                | 0.154 (0.021)    | 1 (0.407) |     2.37 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           20 |     4005 | 2026-03-14 | THUNDERdOWNUNDER                 | L   | 0.402      | -            | -                | -                | -         |    -3.96 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           19 |     4044 | 2026-03-13 | THUNDERdOWNUNDER                 | W   | 0.394      | 0.350        | 0.030 (0.004)    | 0.344 (0.047)    | 1 (0.394) |     8.69 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           18 |     4046 | 2026-03-13 | Ground Zero Gaming               | W   | 0.393      | 0.350        | 0.003 (0.000)    | -                | 1 (0.393) |     3.42 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           17 |     4099 | 2026-03-12 | Mindfreak (Australian team)      | W   | 0.388      | 0.350        | 0.003 (0.000)    | 0.125 (0.017)    | 1 (0.388) |     3.09 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           16 |     4102 | 2026-03-12 | Skele                            | W   | 0.387      | -            | -                | -                | 1 (0.387) |     0.57 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           15 |     4593 | 2026-03-03 | Team Liquid                      | L   | 0.324      | -            | -                | -                | -         |    -1.60 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           14 |     4637 | 2026-03-02 | 3DMAX                            | L   | 0.317      | -            | -                | -                | -         |    -0.96 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           13 |     4689 | 2026-03-01 | PARIVISION                       | L   | 0.310      | -            | -                | -                | -         |    -0.07 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           12 |     6101 | 2026-01-25 | Alliance                         | L   | 0.076      | -            | -                | -                | -         |    -0.04 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           11 |     6113 | 2026-01-24 | HAVU                             | L   | 0.072      | -            | -                | -                | -         |    -1.53 | ADDICT, HaZR, keen, SaVage, shadiy  |
|           10 |     6139 | 2026-01-24 | Lilmix                           | W   | 0.070      | -            | -                | -                | -         |     0.48 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            9 |     6175 | 2026-01-23 | INFURITY Gaming                  | W   | 0.064      | -            | -                | -                | -         |     0.10 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            8 |     6180 | 2026-01-23 | EXEN                             | W   | 0.064      | -            | -                | -                | -         |     0.09 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            7 |     6184 | 2026-01-23 | Johnny Speeds                    | L   | 0.064      | -            | -                | -                | -         |    -0.45 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            6 |     6409 | 2026-01-16 | Megoshort                        | L   | 0.019      | -            | -                | -                | -         |    -0.45 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            5 |     6417 | 2026-01-16 | Sashi Esport                     | L   | 0.018      | -            | -                | -                | -         |    -0.16 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            4 |     6434 | 2026-01-16 | HEROIC Academy                   | L   | 0.018      | -            | -                | -                | -         |    -0.37 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            3 |     6439 | 2026-01-16 | Hemmaplan                        | W   | 0.017      | -            | -                | -                | -         |     0.03 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            2 |     6447 | 2026-01-16 | Echo                             | W   | 0.017      | -            | -                | -                | -         |     0.47 | ADDICT, HaZR, keen, SaVage, shadiy  |
|            1 |     6453 | 2026-01-16 | Megoshort                        | L   | 0.017      | -            | -                | -                | -         |    -0.39 | ADDICT, HaZR, keen, SaVage, shadiy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,021.98)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-27 |      0.483 | $1,500.00      | $724.17         |
| 2026-03-17 |      0.415 | $2,119.00      | $880.27         |
| 2026-03-14 |      0.402 | $3,493.00      | $1,402.62       |
| 2026-03-05 |      0.338 | $3,000.00      | $1,014.93       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
