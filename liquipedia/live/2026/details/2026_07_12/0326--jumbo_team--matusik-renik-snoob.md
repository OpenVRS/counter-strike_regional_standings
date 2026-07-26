### Roster Details<br />
Team Name: JUMBO TEAM<br />
Roster: matusik, reNIK, Snoob<br />
Global Rank: [326](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [204]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  540.0<br />
<br />
Final Rank Value (540.0) = Starting Rank Value (531.0) + Head To Head Adjustments (9.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.069[<sup>2</sup>](#table1)

The average of these factors is 0.069<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 531.0
- 400 + ( ( 0.069 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 531.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.025
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      672 | 2026-06-05 | Misa Esports | L   | 0.952      | -            | -                | -                | -         |    -4.91 | DeDe, kinyx, matusik, reNIK, str0ngl  |
|            6 |     2915 | 2026-04-02 | 1w Team      | L   | 0.523      | -            | -                | -                | -         |    -0.55 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            5 |     2919 | 2026-04-02 | NOVAQ        | W   | 0.523      | 0.435        | 0.005 (0.001)    | 0.197 (0.045)    | 1 (0.523) |    14.05 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            4 |     2930 | 2026-04-01 | 1w Team      | L   | 0.522      | -            | -                | -                | -         |    -0.49 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            3 |     5892 | 2026-02-01 | 33           | L   | 0.126      | -            | -                | -                | -         |    -0.18 | DeDe, matusik, Proper, reNIK, Snoob   |
|            2 |     5898 | 2026-02-01 | GLuck        | W   | 0.125      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.125) |     1.28 | DeDe, matusik, Proper, reNIK, Snoob   |
|            1 |     5914 | 2026-02-01 | 33           | L   | 0.123      | -            | -                | -                | -         |    -0.18 | DeDe, matusik, Proper, reNIK, Snoob   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
