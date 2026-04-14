### Roster Details<br />
Team Name: Rottweilers<br />
Roster: bavar1n, h4rn, rafftu, REDSTAR, SHiPZ<br />
Global Rank: [225](../../standings_global_2026_04_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_04_06.md)<br />
Regional Rank: [146]( ../../standings_europe_2026_04_06.md)<br />
<br />
Final Rank Value:  704.1<br />
<br />
Final Rank Value (704.1) = Starting Rank Value (572.4) + Head To Head Adjustments (131.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.275[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 572.4
- 400 + ( ( 0.088 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 572.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.196
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |      441 | 2026-03-28 | ENCE Academy     | L   | 1.000      | -            | -                | -                | -         |    -6.67 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|           12 |      510 | 2026-03-27 | MASONIC          | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.520 (0.074)    | 0 (0.000) |    24.04 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|           11 |      651 | 2026-03-24 | Home             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.127 (0.018)    | 0 (0.000) |    13.97 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|           10 |      727 | 2026-03-23 | Ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -5.37 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|            9 |      803 | 2026-03-21 | MANA eSports     | L   | 1.000      | -            | -                | -                | -         |    -3.94 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            8 |      857 | 2026-03-20 | The Last Resort  | W   | 1.000      | 0.384        | 0.015 (0.006)    | 0.434 (0.167)    | 0 (0.000) |    26.79 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            7 |      897 | 2026-03-19 | Team Nemesis     | L   | 1.000      | -            | -                | -                | -         |    -0.61 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            6 |     1000 | 2026-03-17 | GenOne           | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.540 (0.207)    | 0 (0.000) |    28.46 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            5 |     1046 | 2026-03-16 | FORZE Reload     | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.472 (0.181)    | 0 (0.000) |    28.00 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            4 |     3217 | 2026-01-24 | FORZE Reload     | L   | 0.721      | -            | -                | -                | -         |    -2.85 | h4rn, Libido, rafftu, REDSTAR, SHiPZ  |
|            3 |     3295 | 2026-01-23 | Bushido Wildcats | W   | 0.712      | 0.384        | 0.001 (0.000)    | 0.228 (0.062)    | 0 (0.000) |    16.87 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ   |
|            2 |     3397 | 2026-01-20 | Team Pigeons     | W   | 0.692      | 0.384        | 0.037 (0.010)    | 0.248 (0.066)    | 0 (0.000) |    16.78 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ   |
|            1 |     3413 | 2026-01-19 | Hashiras         | L   | 0.685      | -            | -                | -                | -         |    -3.75 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($458,955.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
