### Roster Details<br />
Team Name: Rooster<br />
Roster: ADK, chelleos, ju1ces, rekonz, SkulL<br />
Global Rank: [171](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_22.md)<br />
Regional Rank: [18]( ../../standings_asia_2026_03_22.md)<br />
<br />
Final Rank Value:  788.1<br />
<br />
Final Rank Value (788.1) = Starting Rank Value (888.5) + Head To Head Adjustments (-100.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.049[<sup>2</sup>](#table1)
- LAN Wins: 0.378[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 888.5
- 400 + ( ( 0.245 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 888.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.262
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       99 | 2026-03-16 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |    -7.25 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           37 |      103 | 2026-03-15 | Time Waves                       | W   | 1.000      | 0.327        | 0.000 (0.000)    | 0.118 (0.039)    | 1 (1.000) |     4.25 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           36 |      105 | 2026-03-15 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |    -7.42 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           35 |      282 | 2026-03-12 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |    -7.99 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           34 |      285 | 2026-03-11 | Time Waves                       | W   | 1.000      | 0.350        | 0.000 (0.000)    | 0.118 (0.041)    | 1 (1.000) |     4.11 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           33 |      289 | 2026-03-11 | Ground Zero Gaming               | L   | 1.000      | -            | -                | -                | -         |    -8.22 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           32 |     1072 | 2026-02-24 | Skele                            | L   | 1.000      | -            | -                | -                | -         |   -26.52 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           31 |     1187 | 2026-02-22 | Team Abyssal                     | L   | 1.000      | -            | -                | -                | -         |   -22.51 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           30 |     1235 | 2026-02-21 | Skele                            | L   | 1.000      | -            | -                | -                | -         |   -24.35 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           29 |     1291 | 2026-02-20 | BBBMBCBS                         | W   | 0.996      | 0.278        | 0.000 (0.000)    | 0.154 (0.043)    | 0 (0.000) |     2.66 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           28 |     1390 | 2026-02-18 | Skele                            | L   | 0.983      | -            | -                | -                | -         |   -25.25 | ADK, chelleos, ju1ces, rekonz, SkulL      |
|           27 |     1837 | 2026-02-08 | THUNDERdOWNUNDER                 | L   | 0.916      | -            | -                | -                | -         |    -2.43 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           26 |     1838 | 2026-02-07 | Mindfreak (Australian team)      | W   | 0.915      | 0.305        | 0.018 (0.005)    | 0.416 (0.116)    | 0 (0.000) |    19.26 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           25 |     1864 | 2026-02-06 | Arcade Esports (Australian team) | W   | 0.908      | 0.305        | 0.005 (0.001)    | 0.302 (0.084)    | 0 (0.000) |    15.59 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           24 |     1869 | 2026-02-06 | Mindfreak (Australian team)      | L   | 0.907      | -            | -                | -                | -         |    -8.49 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           23 |     2080 | 2026-01-31 | Team Abyssal                     | W   | 0.862      | 0.305        | 0.001 (0.000)    | 0.203 (0.053)    | 0 (0.000) |     6.00 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           22 |     2084 | 2026-01-30 | THUNDERdOWNUNDER                 | L   | 0.861      | -            | -                | -                | -         |    -2.06 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           21 |     2085 | 2026-01-30 | The Gentlemans Kennel            | W   | 0.860      | 0.305        | 0.000 (0.000)    | -                | -         |     1.74 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           20 |     2921 | 2025-12-13 | Mindfreak (Australian team)      | L   | 0.541      | -            | -                | -                | -         |   -13.55 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           19 |     2932 | 2025-12-12 | Ground Zero Gaming               | W   | 0.535      | 0.303        | 0.016 (0.003)    | 0.153 (0.025)    | -         |    11.76 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           18 |     2936 | 2025-12-12 | THUNDERdOWNUNDER                 | L   | 0.534      | -            | -                | -                | -         |    -1.34 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           17 |     3031 | 2025-12-06 | FURY                             | W   | 0.495      | -            | -                | -                | -         |     1.74 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           16 |     3032 | 2025-12-06 | Animus Victoria                  | W   | 0.495      | -            | -                | -                | -         |     1.60 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           15 |     3035 | 2025-12-06 | Ground Zero Gaming               | L   | 0.494      | -            | -                | -                | -         |    -4.51 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           14 |     3183 | 2025-11-30 | Mindfreak (Australian team)      | L   | 0.449      | -            | -                | -                | -         |    -4.68 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           13 |     3188 | 2025-11-29 | Arcade Esports (Australian team) | W   | 0.447      | 0.279        | 0.005 (0.001)    | 0.302 (0.038)    | 1 (0.447) |     8.25 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           12 |     3190 | 2025-11-29 | Time Waves                       | W   | 0.447      | -            | -                | -                | 1 (0.447) |     1.19 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           11 |     3237 | 2025-11-28 | BBBMBCBS                         | W   | 0.442      | 0.279        | -                | 0.154 (0.019)    | 1 (0.442) |     1.06 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           10 |     3239 | 2025-11-28 | Arcade Esports (Australian team) | W   | 0.441      | 0.279        | 0.005 (0.001)    | 0.302 (0.037)    | 1 (0.441) |     8.32 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            9 |     3373 | 2025-11-23 | FURY                             | L   | 0.402      | -            | -                | -                | -         |   -11.32 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            8 |     3449 | 2025-11-21 | Ground Zero Gaming               | L   | 0.389      | -            | -                | -                | -         |    -3.90 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            7 |     3480 | 2025-11-20 | BO0STERS                         | W   | 0.383      | -            | -                | -                | -         |     0.78 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            6 |     3514 | 2025-11-18 | Mindfreak (Australian team)      | L   | 0.370      | -            | -                | -                | -         |    -3.87 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            5 |     3527 | 2025-11-17 | BO0STERS                         | W   | 0.362      | -            | -                | -                | -         |     0.71 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            4 |     4641 | 2025-10-14 | Rooster                          | L   | 0.136      | -            | -                | -                | -         |    -3.38 | ADK, cheeseball, cookie, rekonz, SkulL    |
|            3 |     4898 | 2025-10-07 | Animus Victoria                  | W   | 0.089      | -            | -                | -                | -         |     0.28 | ADK, cheeseball, cookie, rekonz, SkulL    |
|            2 |     4961 | 2025-10-06 | LE-LUX Esports                   | W   | 0.083      | -            | -                | -                | -         |     0.16 | ADK, cheeseball, cookie, rekonz, SkulL    |
|            1 |     5019 | 2025-10-05 | Ground Zero Gaming               | L   | 0.076      | -            | -                | -                | -         |    -0.75 | ADK, cheeseball, cookie, rekonz, SkulL    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,937.10)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      0.916 | $1,402.60      | $1,284.16       |
| 2025-12-13 |      0.541 | $665.70        | $360.31         |
| 2025-11-30 |      0.449 | $651.80        | $292.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
