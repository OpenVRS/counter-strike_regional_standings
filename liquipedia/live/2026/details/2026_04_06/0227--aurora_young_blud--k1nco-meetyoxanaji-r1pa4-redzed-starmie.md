### Roster Details<br />
Team Name: Aurora Young Blud<br />
Roster: k1nco, meetyoxanaji, r1pa4, redzed, starmie<br />
Global Rank: [227](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [144]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  691.4<br />
<br />
Final Rank Value (691.4) = Starting Rank Value (577.2) + Head To Head Adjustments (114.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.265[<sup>2</sup>](#table1)
- Opponent Network: 0.097[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.091<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 577.2
- 400 + ( ( 0.091 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 577.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.225
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     1058 | 2026-03-15 | TNT             | L   | 1.000      | -            | -                | -                | -         |   -12.20 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           13 |     1072 | 2026-03-15 | Eternal premium | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.092 (0.013)    | 0 (0.000) |     6.52 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           12 |     1161 | 2026-03-13 | HAVU            | W   | 1.000      | 0.143        | 0.005 (0.001)    | 0.569 (0.081)    | 0 (0.000) |    25.89 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           11 |     1420 | 2026-03-08 | OLDBOYS         | L   | 1.000      | -            | -                | -                | -         |   -15.93 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|           10 |     1554 | 2026-03-05 | Megoshort       | W   | 0.987      | 0.143        | 0.004 (0.001)    | 0.336 (0.047)    | 0 (0.000) |    27.03 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            9 |     1787 | 2026-02-28 | Yngods          | L   | 0.954      | -            | -                | -                | -         |   -16.04 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            8 |     1801 | 2026-02-28 | HAVU            | L   | 0.953      | -            | -                | -                | -         |    -2.82 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            7 |     1843 | 2026-02-27 | G2 Ares         | W   | 0.947      | 0.278        | 0.002 (0.001)    | 0.143 (0.038)    | 0 (0.000) |    19.71 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            6 |     1888 | 2026-02-26 | Atreides        | L   | 0.941      | -            | -                | -                | -         |   -13.03 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            5 |     1906 | 2026-02-26 | MASONIC         | W   | 0.940      | 0.384        | 0.000 (0.000)    | 0.520 (0.188)    | 0 (0.000) |    25.75 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            4 |     1978 | 2026-02-25 | ENCE Academy    | W   | 0.931      | 0.384        | 0.001 (0.000)    | 0.513 (0.184)    | 0 (0.000) |    23.99 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            3 |     2798 | 2026-02-07 | TNC Esports     | L   | 0.814      | -            | -                | -                | -         |    -2.70 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            2 |     2917 | 2026-02-03 | Rebels Gaming   | W   | 0.786      | 0.384        | 0.014 (0.004)    | 0.540 (0.163)    | 0 (0.000) |    23.81 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |
|            1 |     2963 | 2026-02-02 | WW Team         | W   | 0.778      | 0.384        | 0.034 (0.010)    | 0.865 (0.259)    | 0 (0.000) |    24.23 | k1nco, meetyoxanaji, r1pa4, redzed, starmie |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
