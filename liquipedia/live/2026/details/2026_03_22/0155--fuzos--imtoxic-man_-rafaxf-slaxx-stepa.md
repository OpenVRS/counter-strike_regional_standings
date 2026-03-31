### Roster Details<br />
Team Name: FUZOS<br />
Roster: imTOXIC, Mané, rafaxF, Slaxx, StepA<br />
Global Rank: [155](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [108]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  837.5<br />
<br />
Final Rank Value (837.5) = Starting Rank Value (951.0) + Head To Head Adjustments (-113.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.312[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.165[<sup>2</sup>](#table1)
- LAN Wins: 0.304[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.0
- 400 + ( ( 0.276 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 951.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.482
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |       24 | 2026-03-20 | 8Sins                | L   | 1.000      | -            | -                | -                | -         |   -17.04 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           46 |       69 | 2026-03-17 | Bebop                | L   | 1.000      | -            | -                | -                | -         |    -8.67 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           45 |       92 | 2026-03-16 | EC BANGA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.17 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           44 |      209 | 2026-03-13 | Mousquetaires        | L   | 1.000      | -            | -                | -                | -         |   -21.23 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           43 |      261 | 2026-03-12 | CSDIILIT             | L   | 1.000      | -            | -                | -                | -         |   -19.85 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           42 |      494 | 2026-03-08 | WW Team              | L   | 1.000      | -            | -                | -                | -         |    -6.29 | Mané, pr, rafaxF, Slaxx, StepA       |
|           41 |      518 | 2026-03-07 | Lilmix               | W   | 1.000      | 0.384        | 0.009 (0.003)    | 0.278 (0.107)    | 0 (0.000) |    14.96 | Mané, pr, rafaxF, Slaxx, StepA       |
|           40 |      685 | 2026-03-04 | OMEGA                | L   | 1.000      | -            | -                | -                | -         |    -6.21 | Mané, pr, rafaxF, Slaxx, StepA       |
|           39 |      719 | 2026-03-03 | Megoshort            | L   | 1.000      | -            | -                | -                | -         |   -11.49 | Mané, pr, rafaxF, Slaxx, StepA       |
|           38 |      740 | 2026-03-03 | WW Team              | L   | 1.000      | -            | -                | -                | -         |    -4.72 | Mané, pr, rafaxF, Slaxx, StepA       |
|           37 |      774 | 2026-03-02 | Eternal Fire         | L   | 1.000      | -            | -                | -                | -         |    -7.59 | Mané, pr, rafaxF, Slaxx, StepA       |
|           36 |      776 | 2026-03-02 | Hashiras             | L   | 1.000      | -            | -                | -                | -         |   -18.02 | Mané, pr, rafaxF, Slaxx, StepA       |
|           35 |      808 | 2026-03-01 | Rebels Gaming        | L   | 1.000      | -            | -                | -                | -         |    -9.48 | Mané, pr, rafaxF, Slaxx, StepA       |
|           34 |      862 | 2026-02-28 | FC Famalicão Esports | W   | 1.000      | 0.318        | 0.003 (0.001)    | -                | 1 (1.000) |    16.89 | Mané, pr, rafaxF, Slaxx, StepA       |
|           33 |      863 | 2026-02-28 | Lazer Cats           | L   | 1.000      | -            | -                | -                | -         |   -12.38 | Mané, pr, rafaxF, Slaxx, StepA       |
|           32 |      904 | 2026-02-27 | HAVU                 | L   | 1.000      | -            | -                | -                | -         |   -12.89 | Mané, pr, rafaxF, Slaxx, StepA       |
|           31 |      965 | 2026-02-26 | BIG EQUIPA           | W   | 1.000      | 0.384        | 0.090 (0.035)    | -                | 0 (0.000) |    11.15 | Mané, pr, rafaxF, Slaxx, StepA       |
|           30 |      985 | 2026-02-26 | Nexus Gaming         | W   | 1.000      | 0.371        | -                | 0.605 (0.224)    | 0 (0.000) |    18.78 | Mané, pr, rafaxF, Slaxx, StepA       |
|           29 |     1069 | 2026-02-24 | EC BANGA             | W   | 1.000      | -            | -                | -                | 0 (0.000) |     1.54 | Mané, pr, rafaxF, Slaxx, StepA       |
|           28 |     1090 | 2026-02-23 | QWENTRY              | L   | 1.000      | -            | -                | -                | -         |   -12.66 | Mané, pr, rafaxF, Slaxx, StepA       |
|           27 |     1106 | 2026-02-23 | Ex-Zero Tenacity     | W   | 1.000      | 0.384        | -                | 0.483 (0.185)    | -         |     9.17 | Mané, pr, rafaxF, Slaxx, StepA       |
|           26 |     1191 | 2026-02-22 | Los kogutos          | L   | 1.000      | -            | -                | -                | -         |    -7.65 | Mané, pr, rafaxF, Slaxx, StepA       |
|           25 |     1279 | 2026-02-20 | OMEGA                | L   | 0.997      | -            | -                | -                | -         |    -6.78 | Mané, Pedrinho, rafaxF, Slaxx, StepA |
|           24 |     1319 | 2026-02-19 | Lazer Cats           | W   | 0.991      | 0.384        | 0.013 (0.005)    | 0.502 (0.191)    | -         |    17.09 | Mané, pr, rafaxF, Slaxx, StepA       |
|           23 |     1331 | 2026-02-19 | The Last Resort      | W   | 0.990      | 0.333        | 0.013 (0.004)    | 0.321 (0.106)    | -         |     9.30 | Mané, pr, rafaxF, Slaxx, StepA       |
|           22 |     1457 | 2026-02-17 | Bushido Wildcats     | L   | 0.976      | -            | -                | -                | -         |   -19.52 | Mané, pr, rafaxF, Slaxx, StepA       |
|           21 |     1479 | 2026-02-16 | ARCRED               | W   | 0.971      | 0.384        | 0.020 (0.007)    | 0.873 (0.326)    | -         |    26.44 | Mané, pr, rafaxF, Slaxx, StepA       |
|           20 |     1491 | 2026-02-16 | WhiteBird            | L   | 0.970      | -            | -                | -                | -         |    -3.60 | Mané, pr, rafaxF, Slaxx, StepA       |
|           19 |     1518 | 2026-02-15 | Bushido Wildcats     | W   | 0.965      | 0.384        | 0.001 (0.000)    | 0.242 (0.090)    | -         |    10.93 | Mané, pr, rafaxF, Slaxx, StepA       |
|           18 |     1524 | 2026-02-15 | Illwill              | L   | 0.965      | -            | -                | -                | -         |    -1.55 | Mané, pr, rafaxF, Slaxx, StepA       |
|           17 |     1613 | 2026-02-14 | BRUTE                | L   | 0.957      | -            | -                | -                | -         |   -17.51 | Mané, pr, rafaxF, Slaxx, StepA       |
|           16 |     1642 | 2026-02-13 | ALGO Esports         | L   | 0.952      | -            | -                | -                | -         |   -13.86 | Mané, pr, rafaxF, Slaxx, StepA       |
|           15 |     1649 | 2026-02-13 | Ursa                 | W   | 0.951      | 0.384        | 0.014 (0.005)    | 0.536 (0.196)    | -         |    17.60 | Mané, pr, rafaxF, Slaxx, StepA       |
|           14 |     1713 | 2026-02-12 | Team Pigeons         | W   | 0.943      | 0.384        | 0.049 (0.018)    | 0.326 (0.118)    | -         |    10.51 | Mané, pr, rafaxF, Slaxx, StepA       |
|           13 |     1743 | 2026-02-11 | HYPERSPIRIT          | L   | 0.936      | -            | -                | -                | -         |   -15.35 | Mané, pr, rafaxF, Slaxx, StepA       |
|           12 |     1920 | 2026-02-05 | CSDIILIT             | L   | 0.897      | -            | -                | -                | -         |   -20.52 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|           11 |     1935 | 2026-02-04 | WhiteBird            | L   | 0.892      | -            | -                | -                | -         |    -2.39 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|           10 |     2600 | 2026-01-15 | MANA eSports         | L   | 0.757      | -            | -                | -                | -         |   -15.48 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            9 |     2606 | 2026-01-15 | MOUZ NXT             | L   | 0.757      | -            | -                | -                | -         |    -4.63 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            8 |     2609 | 2026-01-15 | MANA eSports         | W   | 0.756      | 0.341        | -                | 0.415 (0.107)    | 1 (0.756) |     8.13 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            7 |     2802 | 2025-12-21 | BC.Game Esports      | L   | 0.590      | -            | -                | -                | -         |    -1.30 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            6 |     2826 | 2025-12-20 | Rebels Gaming        | W   | 0.584      | 0.309        | 0.012 (0.002)    | -                | 1 (0.584) |    14.93 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            5 |     2832 | 2025-12-20 | Flame Hard           | W   | 0.583      | -            | -                | -                | 1 (0.583) |     0.82 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            4 |     2834 | 2025-12-20 | Rebels Gaming        | L   | 0.583      | -            | -                | -                | -         |    -3.31 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            3 |     3394 | 2025-11-22 | Sashi Esport         | L   | 0.397      | -            | -                | -                | -         |    -1.47 | Didjey, rafaxF, Slaxx, Sprayy, StepA |
|            2 |     4691 | 2025-10-11 | Rebels Gaming        | L   | 0.118      | -            | -                | -                | -         |    -0.69 | Didjey, rafaxF, Slaxx, Sprayy, StepA |
|            1 |     4715 | 2025-10-10 | CarritoSpain         | W   | 0.111      | -            | -                | -                | 1 (0.111) |     0.26 | Didjey, rafaxF, Slaxx, Sprayy, StepA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,540.38)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $500.00        | $500.00         |
| 2026-03-01 |      1.000 | $1,772.62      | $1,772.62       |
| 2025-11-23 |      0.404 | $431.83        | $174.41         |
| 2025-10-12 |      0.124 | $755.20        | $93.35          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
