### Roster Details<br />
Team Name: Team Spirit Academy<br />
Roster: Kiryasoo, kurosse, Mokuj1n, robo, SYPH0<br />
Global Rank: [223](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [145]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  684.6<br />
<br />
Final Rank Value (684.6) = Starting Rank Value (664.8) + Head To Head Adjustments (19.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.285[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.136<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.8
- 400 + ( ( 0.136 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 664.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.027
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     4407 | 2025-11-06 | Sangal Esports  | L   | 0.243      | -            | -                | -                | -         |    -2.28 | Kiryasoo, Mokuj1n, robo, S0tF1k, SYPH0  |
|           10 |     4431 | 2025-11-05 | SINNERS Esports | L   | 0.237      | -            | -                | -                | -         |    -0.08 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            9 |     4481 | 2025-11-03 | 33              | W   | 0.224      | 0.435        | 0.035 (0.003)    | 0.684 (0.067)    | 0 (0.000) |     6.64 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            8 |     4530 | 2025-11-01 | Nemiga Gaming   | L   | 0.212      | -            | -                | -                | -         |    -0.10 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            7 |     4587 | 2025-10-30 | Betera Esports  | W   | 0.197      | 0.435        | 0.004 (0.000)    | 0.060 (0.005)    | 0 (0.000) |     3.43 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            6 |     4594 | 2025-10-30 | Sashi Esport    | W   | 0.196      | 0.435        | 0.013 (0.001)    | 0.530 (0.045)    | 0 (0.000) |     5.95 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            5 |     4681 | 2025-10-27 | Home            | W   | 0.177      | 0.435        | 0.000 (0.000)    | 0.142 (0.011)    | 0 (0.000) |     2.89 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            4 |     5147 | 2025-10-13 | BetBoom Team    | L   | 0.083      | -            | -                | -                | -         |    -0.05 | kurosse, Mokuj1n, robo, S0tF1k, SYPH0   |
|            3 |     5160 | 2025-10-12 | Betera Esports  | W   | 0.076      | 0.485        | 0.004 (0.000)    | 0.060 (0.002)    | 0 (0.000) |     1.31 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            2 |     5185 | 2025-10-11 | EYEBALLERS      | W   | 0.069      | 0.485        | 0.100 (0.003)    | 0.663 (0.022)    | 0 (0.000) |     2.13 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |
|            1 |     5264 | 2025-10-09 | 1w Team         | L   | 0.056      | -            | -                | -                | -         |    -0.06 | Kiryasoo, kurosse, Mokuj1n, robo, SYPH0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,540.09)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-06 |      0.244 | $2,500.00      | $610.53         |
| 2025-11-02 |      0.218 | $2,000.00      | $436.76         |
| 2025-10-13 |      0.085 | $5,803.89      | $492.79         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
