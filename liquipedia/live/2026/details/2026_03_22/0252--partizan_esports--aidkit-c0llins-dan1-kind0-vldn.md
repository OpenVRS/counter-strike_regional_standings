### Roster Details<br />
Team Name: Partizan Esports<br />
Roster: aidKiT, c0llins, dan1, Kind0, VLDN<br />
Global Rank: [252](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [163]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  625.2<br />
<br />
Final Rank Value (625.2) = Starting Rank Value (634.8) + Head To Head Adjustments (-9.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.240[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.011[<sup>2</sup>](#table1)

The average of these factors is 0.118<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 634.8
- 400 + ( ( 0.118 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 634.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.020
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1527 | 2026-02-15 | WW Team         | L   | 0.965      | -            | -                | -                | -         |    -0.63 | aidKiT, dan1, emi, Kind0, VLDN       |
|           18 |     1645 | 2026-02-13 | Nexus Gaming    | L   | 0.952      | -            | -                | -                | -         |    -2.85 | aidKiT, dan1, emi, Kind0, VLDN       |
|           17 |     2795 | 2025-12-21 | FORZE Reload    | L   | 0.592      | -            | -                | -                | -         |    -4.43 | aidKiT, choiv7, dan1, Kind0, VLDN    |
|           16 |     2908 | 2025-12-15 | ARCRED          | L   | 0.551      | -            | -                | -                | -         |    -0.48 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|           15 |     3006 | 2025-12-08 | SIXSEVEN        | L   | 0.503      | -            | -                | -                | -         |    -3.38 | aidKiT, c0llins, dan1, KiMaRR, Kind0 |
|           14 |     3040 | 2025-12-06 | Tung Tung Sahur | L   | 0.492      | -            | -                | -                | -         |    -2.45 | aidKiT, c0llins, dan1, KiMaRR, Kind0 |
|           13 |     3064 | 2025-12-05 | Oramond         | L   | 0.485      | -            | -                | -                | -         |    -1.33 | aidKiT, c0llins, dan1, KiMaRR, Kind0 |
|           12 |     3122 | 2025-12-03 | FORZE Reload    | L   | 0.469      | -            | -                | -                | -         |    -5.46 | aidKiT, dan1, KiMaRR, Kind0, VLDN    |
|           11 |     3130 | 2025-12-02 | BASEMENT BOYS   | W   | 0.465      | 0.435        | 0.000 (0.000)    | 0.314 (0.063)    | 0 (0.000) |     8.82 | aidKiT, dan1, KiMaRR, Kind0, VLDN    |
|           10 |     4687 | 2025-10-11 | SINNERS Esports | L   | 0.118      | -            | -                | -                | -         |    -0.06 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            9 |     4701 | 2025-10-11 | BetBoom Team    | L   | 0.116      | -            | -                | -                | -         |    -0.06 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            8 |     5268 | 2025-09-28 | Team Liquid     | L   | 0.031      | -            | -                | -                | -         |    -0.02 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            7 |     5283 | 2025-09-28 | Phantom Esports | L   | 0.030      | -            | -                | -                | -         |    -0.04 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            6 |     5293 | 2025-09-28 | Monte           | W   | 0.029      | 0.354        | 0.133 (0.001)    | 0.458 (0.005)    | 1 (0.029) |     0.89 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            5 |     5341 | 2025-09-27 | Phantom Esports | W   | 0.023      | 0.354        | 0.003 (0.000)    | 0.531 (0.004)    | 1 (0.023) |     0.70 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            4 |     5349 | 2025-09-27 | KOLESIE         | W   | 0.022      | 0.354        | 0.061 (0.000)    | 0.697 (0.006)    | 1 (0.022) |     0.69 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            3 |     5370 | 2025-09-26 | AaB esport      | W   | 0.018      | 0.378        | 0.001 (0.000)    | 0.083 (0.001)    | 1 (0.018) |     0.33 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            2 |     5378 | 2025-09-26 | Johnny Speeds   | L   | 0.017      | -            | -                | -                | -         |    -0.01 | aidKiT, c0llins, Dragon, Kind0, VLDN |
|            1 |     5394 | 2025-09-26 | Capybara Esport | W   | 0.016      | 0.378        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.016) |     0.11 | aidKiT, c0llins, Dragon, Kind0, VLDN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($280.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-10-12 |      0.124 | $2,000.00      | $248.89         |
| 2025-09-28 |      0.031 | $1,000.00      | $31.11          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
