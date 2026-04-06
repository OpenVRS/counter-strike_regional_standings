### Roster Details<br />
Team Name: ALGO Esports<br />
Roster: anber, Dengzoe, Griller, nukkye, Scr0b<br />
Global Rank: [339](../../standings_global_2026_04_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_05.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_04_05.md)<br />
<br />
Final Rank Value:  463.8<br />
<br />
Final Rank Value (463.8) = Starting Rank Value (463.6) + Head To Head Adjustments (0.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.130[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.032<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 463.6
- 400 + ( ( 0.032 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 463.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.005
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     4944 | 2025-11-03 | Nuclear TigeRES | L   | 0.174      | -            | -                | -                | -         |    -0.03 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            8 |     5143 | 2025-10-27 | MASONIC         | L   | 0.126      | -            | -                | -                | -         |    -0.16 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            7 |     5180 | 2025-10-26 | NOVAQ           | L   | 0.121      | -            | -                | -                | -         |    -0.11 | anber, Griller, nukkye, Scr0b, St0m4k  |
|            6 |     5241 | 2025-10-25 | ENCE Academy    | L   | 0.113      | -            | -                | -                | -         |    -0.43 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            5 |     5262 | 2025-10-25 | Square Sausages | W   | 0.112      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.45 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            4 |     5304 | 2025-10-24 | The Glecs       | L   | 0.107      | -            | -                | -                | -         |    -1.53 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            3 |     5432 | 2025-10-19 | The Last Resort | L   | 0.074      | -            | -                | -                | -         |    -0.13 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            2 |     5460 | 2025-10-18 | M1X             | W   | 0.065      | 0.384        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     1.35 | anber, Dengzoe, Griller, nukkye, Scr0b |
|            1 |     5480 | 2025-10-17 | The Last Resort | L   | 0.060      | -            | -                | -                | -         |    -0.11 | anber, Dengzoe, Griller, nukkye, Scr0b |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
