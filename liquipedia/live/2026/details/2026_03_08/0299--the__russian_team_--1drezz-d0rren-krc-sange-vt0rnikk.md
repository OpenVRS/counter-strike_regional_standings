### Roster Details<br />
Team Name: THE (Russian team)<br />
Roster: 1Drezz, d0RREN, krc, Sange, vt0rnikk<br />
Global Rank: [299](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [179]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  509.7<br />
<br />
Final Rank Value (509.7) = Starting Rank Value (501.5) + Head To Head Adjustments (8.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.206[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 501.5
- 400 + ( ( 0.053 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 501.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.012
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     4448 | 2025-09-29 | 1w Team                     | L   | 0.132      | -            | -                | -                | -         |    -0.07 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            6 |     4533 | 2025-09-27 | ALGO Esports                | W   | 0.119      | 0.384        | 0.005 (0.000)    | 0.316 (0.014)    | 0 (0.000) |     3.42 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            5 |     4579 | 2025-09-26 | ARCRED                      | W   | 0.112      | 0.384        | 0.027 (0.001)    | 0.881 (0.038)    | 0 (0.000) |     3.50 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            4 |     4833 | 2025-09-18 | Oramond                     | L   | 0.057      | -            | -                | -                | -         |    -0.12 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            3 |     4850 | 2025-09-17 | ComeBack (Kazakhstani team) | W   | 0.052      | 0.384        | 0.000 (0.000)    | 0.043 (0.001)    | 0 (0.000) |     1.07 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            2 |     4966 | 2025-09-14 | The Glecs                   | W   | 0.030      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.34 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |
|            1 |     4998 | 2025-09-13 | 1w Team                     | L   | 0.025      | -            | -                | -                | -         |    -0.01 | 1Drezz, d0RREN, krc, Sange, vt0rnikk |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
