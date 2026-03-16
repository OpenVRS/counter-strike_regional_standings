### Roster Details<br />
Team Name: Rooster<br />
Roster: chelleos, ju1ces, rekonz, SkulL, viridian<br />
Global Rank: [169](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_08.md)<br />
Regional Rank: [15]( ../../standings_asia_2026_03_08.md)<br />
<br />
Final Rank Value:  777.2<br />
<br />
Final Rank Value (777.2) = Starting Rank Value (782.9) + Head To Head Adjustments (-5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.317[<sup>1</sup>](#table2)
- Bounty Collected: 0.239[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.216[<sup>2</sup>](#table1)

The average of these factors is 0.199<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 782.9
- 400 + ( ( 0.199 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 782.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.271
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     1124 | 2026-02-08 | THUNDERdOWNUNDER                 | L   | 1.000      | -            | -                | -                | -         |   -12.88 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           19 |     1125 | 2026-02-07 | Mindfreak (Australian team)      | W   | 1.000      | 0.143        | 0.022 (0.003)    | 0.412 (0.059)    | 0 (0.000) |    18.90 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           18 |     1150 | 2026-02-06 | Arcade Esports (Australian team) | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.207 (0.030)    | 0 (0.000) |    12.27 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           17 |     1155 | 2026-02-06 | Mindfreak (Australian team)      | L   | 1.000      | -            | -                | -                | -         |   -11.06 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           16 |     1360 | 2026-01-31 | Team Abyssal                     | W   | 0.956      | 0.143        | 0.001 (0.000)    | 0.148 (0.020)    | 0 (0.000) |     9.44 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           15 |     1364 | 2026-01-30 | THUNDERdOWNUNDER                 | L   | 0.955      | -            | -                | -                | -         |   -13.34 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           14 |     1365 | 2026-01-30 | The Gentlemans Kennel            | W   | 0.954      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |     3.30 | chelleos, ju1ces, rekonz, SkulL, viridian |
|           13 |     2202 | 2025-12-13 | Mindfreak (Australian team)      | L   | 0.635      | -            | -                | -                | -         |    -7.90 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           12 |     2213 | 2025-12-12 | Ground Zero Gaming               | W   | 0.629      | 0.303        | 0.014 (0.003)    | 0.180 (0.034)    | 0 (0.000) |     9.29 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           11 |     2217 | 2025-12-12 | THUNDERdOWNUNDER                 | L   | 0.628      | -            | -                | -                | -         |   -10.10 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|           10 |     2306 | 2025-12-06 | FURY                             | W   | 0.590      | 0.303        | 0.000 (0.000)    | 0.047 (0.008)    | 0 (0.000) |     3.30 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            9 |     2307 | 2025-12-06 | Animus Victoria                  | W   | 0.589      | 0.303        | 0.000 (0.000)    | 0.034 (0.006)    | -         |     3.03 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            8 |     2310 | 2025-12-06 | Ground Zero Gaming               | L   | 0.588      | -            | -                | -                | -         |   -10.05 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            7 |     2452 | 2025-11-30 | Mindfreak (Australian team)      | L   | 0.543      | -            | -                | -                | -         |    -7.22 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            6 |     2457 | 2025-11-29 | Arcade Esports (Australian team) | W   | 0.541      | 0.279        | 0.002 (0.000)    | 0.207 (0.031)    | 1 (0.541) |     6.78 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            5 |     2459 | 2025-11-29 | Time Waves                       | W   | 0.541      | 0.279        | 0.000 (0.000)    | 0.057 (0.009)    | 1 (0.541) |     2.42 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            4 |     2504 | 2025-11-28 | BBBMBCBS                         | W   | 0.536      | 0.279        | -                | 0.137 (0.020)    | 1 (0.536) |     2.82 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            3 |     2506 | 2025-11-28 | Arcade Esports (Australian team) | W   | 0.536      | 0.279        | 0.002 (0.000)    | 0.207 (0.031)    | 1 (0.536) |     6.72 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            2 |     2634 | 2025-11-23 | FURY                             | L   | 0.496      | -            | -                | -                | -         |   -12.99 | ADK, chelleos, ju1ces, Terryyy, viridian  |
|            1 |     2792 | 2025-11-17 | BO0STERS                         | W   | 0.456      | -            | -                | -                | -         |     1.50 | ADK, chelleos, ju1ces, Terryyy, viridian  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,179.64)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-08 |      1.000 | $1,402.60      | $1,402.60       |
| 2025-12-13 |      0.635 | $665.70        | $423.01         |
| 2025-11-30 |      0.543 | $651.80        | $354.02         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
