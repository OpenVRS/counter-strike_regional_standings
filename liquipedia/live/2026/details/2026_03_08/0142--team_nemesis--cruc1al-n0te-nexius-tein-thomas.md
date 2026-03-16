### Roster Details<br />
Team Name: Team Nemesis<br />
Roster: CRUC1AL, n0te, Nexius, tein, Thomas<br />
Global Rank: [142](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [102]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  843.1<br />
<br />
Final Rank Value (843.1) = Starting Rank Value (792.9) + Head To Head Adjustments (50.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.032[<sup>2</sup>](#table1)
- LAN Wins: 0.205[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 792.9
- 400 + ( ( 0.205 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 792.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.153
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     2055 | 2025-12-23 | GenOne                  | L   | 0.699      | -            | -                | -                | -         |    -4.25 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           14 |     2056 | 2025-12-23 | FORZE Reload            | W   | 0.698      | 0.333        | 0.002 (0.001)    | 0.000 (0.000)    | 0 (0.000) |     3.22 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           13 |     2060 | 2025-12-22 | Sangal Esports          | W   | 0.690      | 0.333        | 0.025 (0.006)    | 0.631 (0.145)    | 0 (0.000) |    16.72 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           12 |     2096 | 2025-12-20 | UNiTY esports           | W   | 0.678      | 0.333        | 0.008 (0.002)    | 0.413 (0.093)    | 0 (0.000) |    14.60 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           11 |     2568 | 2025-11-25 | WW Team                 | L   | 0.511      | -            | -                | -                | -         |    -1.40 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           10 |     2574 | 2025-11-25 | Infinite Gaming         | W   | 0.510      | 0.371        | 0.000 (0.000)    | 0.107 (0.020)    | 1 (0.510) |     4.10 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            9 |     2601 | 2025-11-24 | WW Team                 | L   | 0.504      | -            | -                | -                | -         |    -1.29 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            8 |     3278 | 2025-11-02 | MINLATE (European team) | W   | 0.358      | 0.305        | 0.003 (0.000)    | 0.397 (0.043)    | 1 (0.358) |     9.32 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            7 |     3286 | 2025-11-02 | Prestige Esport         | W   | 0.357      | 0.305        | 0.001 (0.000)    | 0.109 (0.012)    | 1 (0.357) |     5.32 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            6 |     3292 | 2025-11-01 | Phantom Esports         | W   | 0.353      | 0.305        | 0.001 (0.000)    | 0.051 (0.006)    | 1 (0.353) |     3.78 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            5 |     3303 | 2025-11-01 | Glitchtech Esports      | W   | 0.352      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.352) |     1.79 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            4 |     3312 | 2025-11-01 | MINLATE (European team) | L   | 0.351      | -            | -                | -                | -         |    -1.83 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            3 |     4574 | 2025-09-26 | Friendly Campers        | L   | 0.113      | -            | -                | -                | -         |    -0.50 | bevve, CRUC1AL, Frip, tein, Thomas  |
|            2 |     4589 | 2025-09-26 | Phantom Esports         | L   | 0.111      | -            | -                | -                | -         |    -0.37 | bevve, CRUC1AL, Frip, tein, Thomas  |
|            1 |     4605 | 2025-09-26 | Betclic Apogee Esports  | W   | 0.110      | 0.378        | 0.001 (0.000)    | 0.024 (0.001)    | 1 (0.110) |     1.02 | bevve, CRUC1AL, Frip, tein, Thomas  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,181.19)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      0.699 | $3,000.00      | $2,098.40       |
| 2025-11-02 |      0.358 | $3,025.65      | $1,082.79       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
