### Roster Details<br />
Team Name: Team Nemesis<br />
Roster: CRUC1AL, n0te, Nexius, tein, Thomas<br />
Global Rank: [212](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [137]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  722.8<br />
<br />
Final Rank Value (722.8) = Starting Rank Value (703.3) + Head To Head Adjustments (19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.298[<sup>1</sup>](#table2)
- Bounty Collected: 0.211[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.097[<sup>2</sup>](#table1)

The average of these factors is 0.155<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 703.3
- 400 + ( ( 0.155 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 703.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.075
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |     2495 | 2026-02-15 | SIXSEVEN           | L   | 0.866      | -            | -                | -                | -         |   -10.22 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           13 |     2606 | 2026-02-13 | VP.Prodigy         | L   | 0.853      | -            | -                | -                | -         |    -3.33 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           12 |     3737 | 2025-12-23 | GenOne             | L   | 0.507      | -            | -                | -                | -         |    -3.30 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           11 |     3738 | 2025-12-23 | FORZE Reload       | W   | 0.506      | 0.333        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.69 | CRUC1AL, n0te, Nexius, tein, Thomas |
|           10 |     3743 | 2025-12-22 | Sangal Esports     | W   | 0.498      | 0.333        | 0.006 (0.001)    | 0.222 (0.037)    | 0 (0.000) |    10.93 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            9 |     3782 | 2025-12-20 | UNiTY esports      | W   | 0.485      | 0.333        | 0.004 (0.001)    | 0.435 (0.070)    | 0 (0.000) |    10.84 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            8 |     4254 | 2025-11-25 | WW Team            | L   | 0.319      | -            | -                | -                | -         |    -0.16 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            7 |     4261 | 2025-11-25 | Infinite Gaming    | W   | 0.318      | 0.371        | 0.000 (0.000)    | 0.077 (0.009)    | 1 (0.318) |     2.59 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            6 |     4289 | 2025-11-24 | WW Team            | L   | 0.312      | -            | -                | -                | -         |    -0.14 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            5 |     4977 | 2025-11-02 | Ex-MINLATE         | W   | 0.166      | 0.305        | 0.001 (0.000)    | 0.445 (0.022)    | 1 (0.166) |     4.43 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            4 |     4985 | 2025-11-02 | Prestige Esport    | W   | 0.165      | 0.305        | 0.000 (0.000)    | 0.005 (0.000)    | 1 (0.165) |     1.79 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            3 |     4991 | 2025-11-01 | Phantom Esports    | W   | 0.161      | 0.305        | 0.000 (0.000)    | 0.012 (0.001)    | 1 (0.161) |     1.94 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            2 |     5002 | 2025-11-01 | Glitchtech Esports | W   | 0.160      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.160) |     1.17 | CRUC1AL, n0te, Nexius, tein, Thomas |
|            1 |     5011 | 2025-11-01 | Ex-MINLATE         | L   | 0.159      | -            | -                | -                | -         |    -0.74 | CRUC1AL, n0te, Nexius, tein, Thomas |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,023.42)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-12-23 |      0.507 | $3,000.00      | $1,521.98       |
| 2025-11-02 |      0.166 | $3,025.65      | $501.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
