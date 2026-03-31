### Roster Details<br />
Team Name: Rottweilers<br />
Roster: bavar1n, h4rn, rafftu, REDSTAR, SHiPZ<br />
Global Rank: [219](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [141]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  695.8<br />
<br />
Final Rank Value (695.8) = Starting Rank Value (570.6) + Head To Head Adjustments (125.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.273[<sup>2</sup>](#table1)
- Opponent Network: 0.078[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 570.6
- 400 + ( ( 0.088 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 570.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.204
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |       38 | 2026-03-28 | ENCE Academy     | L   | 1.000      | -            | -                | -                | -         |    -6.90 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|           12 |       84 | 2026-03-27 | MASONIC          | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.563 (0.080)    | 0 (0.000) |    22.29 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|           11 |      202 | 2026-03-24 | Home             | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.142 (0.020)    | 0 (0.000) |    13.67 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|           10 |      271 | 2026-03-23 | Ex-Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |    -6.42 | bavar1n, rafftu, REDSTAR, shin, SHiPZ |
|            9 |      336 | 2026-03-21 | MANA eSports     | L   | 1.000      | -            | -                | -                | -         |    -5.19 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            8 |      386 | 2026-03-20 | The Last Resort  | W   | 1.000      | 0.384        | 0.010 (0.004)    | 0.342 (0.131)    | 0 (0.000) |    24.34 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            7 |      422 | 2026-03-19 | Team Nemesis     | L   | 1.000      | -            | -                | -                | -         |    -0.92 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            6 |      515 | 2026-03-17 | GenOne           | W   | 1.000      | 0.384        | 0.017 (0.006)    | 0.511 (0.196)    | 0 (0.000) |    27.98 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            5 |      559 | 2026-03-16 | FORZE Reload     | W   | 1.000      | 0.384        | 0.001 (0.000)    | 0.533 (0.205)    | 0 (0.000) |    27.70 | bavar1n, h4rn, rafftu, REDSTAR, SHiPZ |
|            4 |     2721 | 2026-01-24 | FORZE Reload     | L   | 0.772      | -            | -                | -                | -         |    -3.14 | h4rn, Libido, rafftu, REDSTAR, SHiPZ  |
|            3 |     2796 | 2026-01-23 | Bushido Wildcats | W   | 0.762      | 0.384        | 0.001 (0.000)    | 0.247 (0.072)    | 0 (0.000) |    18.17 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ   |
|            2 |     2898 | 2026-01-20 | Team Pigeons     | W   | 0.743      | 0.384        | 0.038 (0.011)    | 0.276 (0.079)    | 0 (0.000) |    18.07 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ   |
|            1 |     2914 | 2026-01-19 | Hashiras         | L   | 0.736      | -            | -                | -                | -         |    -4.46 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
