### Roster Details<br />
Team Name: Gaimin Gladiators<br />
Roster: felps, HEN1, JOTA, Luken, NEKIZ<br />
Global Rank: [64](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_03_08.md)<br />
Regional Rank: [16]( ../../standings_americas_2026_03_08.md)<br />
<br />
Final Rank Value:  1122.0<br />
<br />
Final Rank Value (1122.0) = Starting Rank Value (1055.2) + Head To Head Adjustments (66.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.371[<sup>1</sup>](#table2)
- Bounty Collected: 0.365[<sup>2</sup>](#table1)
- Opponent Network: 0.102[<sup>2</sup>](#table1)
- LAN Wins: 0.528[<sup>2</sup>](#table1)

The average of these factors is 0.341<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1055.2
- 400 + ( ( 0.341 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1055.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.230
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           18 |     1170 | 2026-02-06 | 9z Team                | L   | 0.999      | -            | -                | -                | -         |    -5.45 | felps, HEN1, JOTA, Luken, NEKIZ |
|           17 |     1481 | 2026-01-25 | MIBR                   | L   | 0.920      | -            | -                | -                | -         |    -4.93 | felps, HEN1, JOTA, Luken, NEKIZ |
|           16 |     1512 | 2026-01-24 | 9z Team                | W   | 0.913      | 0.384        | 0.158 (0.056)    | 0.582 (0.204)    | 1 (0.913) |    24.12 | felps, HEN1, JOTA, Luken, NEKIZ |
|           15 |     1532 | 2026-01-24 | Sharks Esports         | W   | 0.911      | 0.384        | 0.207 (0.072)    | 0.827 (0.289)    | 1 (0.911) |    23.69 | felps, HEN1, JOTA, Luken, NEKIZ |
|           14 |     1597 | 2026-01-22 | BESTIA Academy         | W   | 0.900      | 0.384        | 0.000 (0.000)    | 0.108 (0.037)    | 1 (0.900) |     1.95 | felps, HEN1, JOTA, Luken, NEKIZ |
|           13 |     1604 | 2026-01-22 | A Fundação             | W   | 0.899      | 0.384        | 0.000 (0.000)    | -                | 1 (0.899) |     0.61 | felps, HEN1, JOTA, Luken, NEKIZ |
|           12 |     1795 | 2026-01-16 | Imperial Esports       | L   | 0.860      | -            | -                | -                | -         |    -6.01 | felps, HEN1, JOTA, Luken, NEKIZ |
|           11 |     1860 | 2026-01-15 | Game Hunters           | W   | 0.853      | 0.435        | 0.002 (0.001)    | 0.435 (0.161)    | 1 (0.853) |     3.63 | felps, HEN1, JOTA, Luken, NEKIZ |
|           10 |     1892 | 2026-01-14 | MIBR                   | L   | 0.846      | -            | -                | -                | -         |    -3.93 | felps, HEN1, JOTA, Luken, NEKIZ |
|            9 |     2709 | 2025-11-20 | 9z Team                | W   | 0.480      | 0.143        | 0.158 (0.011)    | 0.582 (0.040)    | 0 (0.000) |    13.66 | bsd, felps, JOTA, NEKIZ, shz    |
|            8 |     2764 | 2025-11-19 | BESTIA                 | W   | 0.474      | 0.143        | 0.049 (0.003)    | 0.489 (0.033)    | 0 (0.000) |    11.21 | bsd, felps, JOTA, NEKIZ, shz    |
|            7 |     2818 | 2025-11-15 | BESTIA                 | L   | 0.446      | -            | -                | -                | -         |    -3.52 | bsd, felps, JOTA, NEKIZ, shz    |
|            6 |     2845 | 2025-11-14 | Sharks Esports         | W   | 0.439      | 0.371        | 0.207 (0.034)    | 0.827 (0.134)    | 0 (0.000) |    12.55 | bsd, felps, JOTA, NEKIZ, shz    |
|            5 |     2889 | 2025-11-12 | Galorys                | W   | 0.427      | 0.371        | 0.009 (0.001)    | 0.337 (0.053)    | -         |     4.29 | bsd, felps, JOTA, NEKIZ, shz    |
|            4 |     3029 | 2025-11-08 | Sharks Esports         | L   | 0.398      | -            | -                | -                | -         |    -1.08 | bsd, felps, JOTA, NEKIZ, shz    |
|            3 |     3074 | 2025-11-07 | Bounty Hunters Esports | W   | 0.393      | 0.333        | 0.021 (0.003)    | 0.464 (0.061)    | 1 (0.393) |     4.07 | bsd, felps, JOTA, NEKIZ, shz    |
|            2 |     3162 | 2025-11-06 | Charrados FC           | W   | 0.388      | 0.333        | -                | 0.032 (0.004)    | 1 (0.388) |     0.32 | bsd, felps, JOTA, NEKIZ, shz    |
|            1 |     3163 | 2025-11-06 | Bounty Hunters Esports | L   | 0.387      | -            | -                | -                | -         |    -8.32 | bsd, felps, JOTA, NEKIZ, shz    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($6,187.74)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-01-25 |      0.920 | $6,000.00      | $5,517.92       |
| 2025-11-15 |      0.447 | $1,500.00      | $669.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
