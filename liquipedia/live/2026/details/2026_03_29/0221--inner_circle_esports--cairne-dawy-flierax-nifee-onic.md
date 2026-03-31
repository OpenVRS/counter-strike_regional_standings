### Roster Details<br />
Team Name: Inner Circle Esports<br />
Roster: cairne, Dawy, Flierax, nifee, onic<br />
Global Rank: [221](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [143]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  689.9<br />
<br />
Final Rank Value (689.9) = Starting Rank Value (684.1) + Head To Head Adjustments (5.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.003[<sup>2</sup>](#table1)

The average of these factors is 0.146<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 684.1
- 400 + ( ( 0.146 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 684.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.007
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     5161 | 2025-10-12 | PARIVISION    | L   | 0.076      | -            | -                | -                | -         |    -0.00 | cairne, Dawy, Flierax, nifee, onic |
|            7 |     5171 | 2025-10-11 | Nemiga Gaming | W   | 0.071      | 0.435        | 0.131 (0.004)    | 0.983 (0.030)    | 0 (0.000) |     2.21 | cairne, Dawy, Flierax, nifee, onic |
|            6 |     5215 | 2025-10-10 | Monte         | W   | 0.064      | 0.435        | 0.105 (0.003)    | 0.412 (0.011)    | 0 (0.000) |     1.97 | cairne, Dawy, Flierax, nifee, onic |
|            5 |     5298 | 2025-10-08 | Eternal Fire  | W   | 0.051      | 0.435        | 0.001 (0.000)    | 0.120 (0.003)    | 0 (0.000) |     0.77 | cairne, Dawy, Flierax, nifee, onic |
|            4 |     5359 | 2025-10-07 | FaZe Clan     | L   | 0.045      | -            | -                | -                | -         |    -0.03 | cairne, Dawy, Flierax, nifee, onic |
|            3 |     5438 | 2025-10-06 | FURIA         | L   | 0.036      | -            | -                | -                | -         |    -0.00 | cairne, Dawy, Flierax, nifee, onic |
|            2 |     5504 | 2025-10-05 | The MongolZ   | W   | 0.029      | 1.000        | 0.554 (0.016)    | 0.317 (0.009)    | 1 (0.029) |     0.91 | cairne, Dawy, Flierax, nifee, onic |
|            1 |     5544 | 2025-10-04 | Team Spirit   | L   | 0.022      | -            | -                | -                | -         |    -0.00 | cairne, Dawy, Flierax, nifee, onic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,424.65)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      0.077 | $20,500.00     | $1,585.90       |
| 2025-10-12 |      0.076 | $11,000.00     | $838.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
