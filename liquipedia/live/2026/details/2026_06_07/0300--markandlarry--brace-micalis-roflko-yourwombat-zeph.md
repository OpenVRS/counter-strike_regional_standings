### Roster Details<br />
Team Name: MARKandLARRY<br />
Roster: BRACE, micalis, Roflko, yourwombat, zeph<br />
Global Rank: [300](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_06_07.md)<br />
Regional Rank: [36]( ../../standings_asia_2026_06_07.md)<br />
<br />
Final Rank Value:  538.0<br />
<br />
Final Rank Value (538.0) = Starting Rank Value (506.6) + Head To Head Adjustments (31.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.6
- 400 + ( ( 0.055 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 506.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.098
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     1159 | 2026-04-30 | Ex-FURY                     | L   | 0.938      | -            | -                | -                | -         |   -15.87 | BRACE, micalis, Roflko, yourwombat, zeph |
|            7 |     1203 | 2026-04-29 | Ground Zero Gaming          | L   | 0.931      | -            | -                | -                | -         |    -3.15 | BRACE, micalis, Roflko, yourwombat, zeph |
|            6 |     1287 | 2026-04-27 | Rooster                     | W   | 0.918      | 0.278        | 0.005 (0.001)    | 0.326 (0.083)    | 0 (0.000) |    23.22 | BRACE, micalis, Roflko, yourwombat, zeph |
|            5 |     2829 | 2026-03-24 | Mindfreak (Australian team) | L   | 0.692      | -            | -                | -                | -         |    -3.76 | BRACE, micalis, Roflko, sav, yourwombat  |
|            4 |     2907 | 2026-03-23 | Skele                       | W   | 0.685      | 0.278        | 0.000 (0.000)    | 0.063 (0.012)    | 0 (0.000) |    11.48 | BRACE, micalis, sav, yourwombat, zeph    |
|            3 |     2950 | 2026-03-22 | BBBMBCBS                    | W   | 0.678      | 0.278        | 0.000 (0.000)    | 0.089 (0.017)    | 0 (0.000) |     9.55 | BRACE, micalis, Roflko, yourwombat, zeph |
|            2 |     3010 | 2026-03-21 | Mindfreak (Australian team) | L   | 0.672      | -            | -                | -                | -         |    -3.29 | BRACE, micalis, Roflko, yourwombat, zeph |
|            1 |     3070 | 2026-03-20 | Ding Cuts                   | W   | 0.665      | 0.278        | 0.001 (0.000)    | 0.130 (0.024)    | 0 (0.000) |    13.21 | BRACE, micalis, Roflko, yourwombat, zeph |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
