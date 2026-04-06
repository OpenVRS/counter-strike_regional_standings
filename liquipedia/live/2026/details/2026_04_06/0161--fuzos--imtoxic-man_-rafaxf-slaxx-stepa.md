### Roster Details<br />
Team Name: FUZOS<br />
Roster: imTOXIC, Mané, rafaxF, Slaxx, StepA<br />
Global Rank: [161](../../standings_global_.md)<br />
<br />
Region: [Europe]( ../../standings_europe_.md)<br />
Regional Rank: [107]( ../../standings_europe_.md)<br />
<br />
Final Rank Value:  839.4<br />
<br />
Final Rank Value (839.4) = Starting Rank Value (900.8) + Head To Head Adjustments (-61.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.311[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.259[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 900.8
- 400 + ( ( 0.256 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 900.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.414
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           47 |      859 | 2026-03-20 | 8Sins                | L   | 1.000      | -            | -                | -                | -         |   -17.23 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           46 |      966 | 2026-03-17 | Bebop                | L   | 1.000      | -            | -                | -                | -         |    -8.84 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           45 |     1013 | 2026-03-16 | EC BANGA             | W   | 1.000      | 0.384        | 0.004 (0.001)    | -                | 0 (0.000) |    10.81 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           44 |     1159 | 2026-03-13 | Mousquetaires        | L   | 1.000      | -            | -                | -                | -         |   -20.87 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           43 |     1212 | 2026-03-12 | CSDIILIT             | L   | 1.000      | -            | -                | -                | -         |   -19.30 | imTOXIC, Mané, rafaxF, Slaxx, StepA  |
|           42 |     1445 | 2026-03-08 | WW Team              | L   | 1.000      | -            | -                | -                | -         |    -5.34 | Mané, pr, rafaxF, Slaxx, StepA       |
|           41 |     1469 | 2026-03-07 | Lilmix               | W   | 1.000      | 0.384        | 0.008 (0.003)    | 0.259 (0.100)    | 0 (0.000) |    15.19 | Mané, pr, rafaxF, Slaxx, StepA       |
|           40 |     1636 | 2026-03-04 | OMEGA                | L   | 0.979      | -            | -                | -                | -         |    -6.06 | Mané, pr, rafaxF, Slaxx, StepA       |
|           39 |     1670 | 2026-03-03 | Megoshort            | L   | 0.973      | -            | -                | -                | -         |   -10.60 | Mané, pr, rafaxF, Slaxx, StepA       |
|           38 |     1691 | 2026-03-03 | WW Team              | L   | 0.971      | -            | -                | -                | -         |    -3.99 | Mané, pr, rafaxF, Slaxx, StepA       |
|           37 |     1725 | 2026-03-02 | Eternal Fire         | L   | 0.965      | -            | -                | -                | -         |    -4.01 | Mané, pr, rafaxF, Slaxx, StepA       |
|           36 |     1727 | 2026-03-02 | Hashiras             | L   | 0.965      | -            | -                | -                | -         |   -17.41 | Mané, pr, rafaxF, Slaxx, StepA       |
|           35 |     1759 | 2026-03-01 | Rebels Gaming        | L   | 0.959      | -            | -                | -                | -         |    -7.71 | Mané, pr, rafaxF, Slaxx, StepA       |
|           34 |     1813 | 2026-02-28 | FC Famalicão Esports | W   | 0.952      | 0.318        | 0.002 (0.001)    | -                | 1 (0.952) |    15.57 | Mané, pr, rafaxF, Slaxx, StepA       |
|           33 |     1814 | 2026-02-28 | Lazer Cats           | L   | 0.951      | -            | -                | -                | -         |    -9.96 | Mané, pr, rafaxF, Slaxx, StepA       |
|           32 |     1855 | 2026-02-27 | HAVU                 | L   | 0.945      | -            | -                | -                | -         |    -9.27 | Mané, pr, rafaxF, Slaxx, StepA       |
|           31 |     1916 | 2026-02-26 | BIG EQUIPA           | W   | 0.939      | 0.384        | 0.063 (0.023)    | -                | 0 (0.000) |     9.46 | Mané, pr, rafaxF, Slaxx, StepA       |
|           30 |     1936 | 2026-02-26 | Nexus Gaming         | W   | 0.938      | 0.371        | -                | 0.450 (0.156)    | 0 (0.000) |    18.10 | Mané, pr, rafaxF, Slaxx, StepA       |
|           29 |     2020 | 2026-02-24 | EC BANGA             | W   | 0.925      | -            | -                | -                | 0 (0.000) |     4.46 | Mané, pr, rafaxF, Slaxx, StepA       |
|           28 |     2041 | 2026-02-23 | QWENTRY              | L   | 0.920      | -            | -                | -                | -         |    -9.95 | Mané, pr, rafaxF, Slaxx, StepA       |
|           27 |     2057 | 2026-02-23 | Ex-Zero Tenacity     | W   | 0.919      | 0.384        | -                | 0.547 (0.193)    | -         |    10.07 | Mané, pr, rafaxF, Slaxx, StepA       |
|           26 |     2142 | 2026-02-22 | TNC Esports          | L   | 0.911      | -            | -                | -                | -         |    -6.72 | Mané, pr, rafaxF, Slaxx, StepA       |
|           25 |     2230 | 2026-02-20 | OMEGA                | L   | 0.899      | -            | -                | -                | -         |    -6.28 | Mané, Pedrinho, rafaxF, Slaxx, StepA |
|           24 |     2270 | 2026-02-19 | Lazer Cats           | W   | 0.893      | 0.384        | 0.011 (0.004)    | 0.461 (0.158)    | -         |    18.06 | Mané, pr, rafaxF, Slaxx, StepA       |
|           23 |     2282 | 2026-02-19 | The Last Resort      | W   | 0.892      | 0.333        | 0.010 (0.003)    | 0.412 (0.122)    | -         |    12.22 | Mané, pr, rafaxF, Slaxx, StepA       |
|           22 |     2408 | 2026-02-17 | Bushido Wildcats     | L   | 0.878      | -            | -                | -                | -         |   -17.43 | Mané, pr, rafaxF, Slaxx, StepA       |
|           21 |     2430 | 2026-02-16 | ARCRED               | W   | 0.873      | 0.384        | 0.017 (0.006)    | 0.704 (0.236)    | -         |    24.65 | Mané, pr, rafaxF, Slaxx, StepA       |
|           20 |     2442 | 2026-02-16 | SPARTA Esports       | L   | 0.872      | -            | -                | -                | -         |    -2.72 | Mané, pr, rafaxF, Slaxx, StepA       |
|           19 |     2469 | 2026-02-15 | Bushido Wildcats     | W   | 0.867      | -            | -                | -                | -         |    10.09 | Mané, pr, rafaxF, Slaxx, StepA       |
|           18 |     2475 | 2026-02-15 | Illwill              | L   | 0.867      | -            | -                | -                | -         |    -1.71 | Mané, pr, rafaxF, Slaxx, StepA       |
|           17 |     2564 | 2026-02-14 | BRUTE                | L   | 0.859      | -            | -                | -                | -         |   -15.98 | Mané, pr, rafaxF, Slaxx, StepA       |
|           16 |     2593 | 2026-02-13 | ALGO Esports         | L   | 0.854      | -            | -                | -                | -         |    -9.85 | Mané, pr, rafaxF, Slaxx, StepA       |
|           15 |     2600 | 2026-02-13 | Ursa                 | W   | 0.853      | 0.384        | 0.020 (0.007)    | 0.700 (0.229)    | -         |    16.49 | Mané, pr, rafaxF, Slaxx, StepA       |
|           14 |     2664 | 2026-02-12 | Team Pigeons         | W   | 0.845      | 0.384        | 0.037 (0.012)    | 0.248 (0.081)    | -         |     9.46 | Mané, pr, rafaxF, Slaxx, StepA       |
|           13 |     2694 | 2026-02-11 | HYPERSPIRIT          | L   | 0.838      | -            | -                | -                | -         |    -9.78 | Mané, pr, rafaxF, Slaxx, StepA       |
|           12 |     2871 | 2026-02-05 | CSDIILIT             | L   | 0.799      | -            | -                | -                | -         |   -17.57 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|           11 |     2886 | 2026-02-04 | SPARTA Esports       | L   | 0.794      | -            | -                | -                | -         |    -1.79 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|           10 |     3551 | 2026-01-15 | MANA eSports         | L   | 0.659      | -            | -                | -                | -         |   -11.41 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            9 |     3557 | 2026-01-15 | MOUZ NXT             | L   | 0.659      | -            | -                | -                | -         |    -3.10 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            8 |     3560 | 2026-01-15 | MANA eSports         | W   | 0.658      | 0.341        | -                | 0.637 (0.143)    | 1 (0.658) |     9.31 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            7 |     3753 | 2025-12-21 | BC.Game Esports      | L   | 0.492      | -            | -                | -                | -         |    -1.34 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            6 |     3777 | 2025-12-20 | Rebels Gaming        | W   | 0.486      | 0.309        | 0.014 (0.002)    | 0.540 (0.081)    | 1 (0.486) |    13.06 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            5 |     3783 | 2025-12-20 | Flame Hard           | W   | 0.485      | -            | -                | -                | 1 (0.485) |     0.88 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            4 |     3785 | 2025-12-20 | Rebels Gaming        | L   | 0.485      | -            | -                | -                | -         |    -2.15 | pr, rafaxF, Slaxx, Sprayy, StepA     |
|            3 |     4345 | 2025-11-22 | Sashi Esport         | L   | 0.299      | -            | -                | -                | -         |    -0.79 | Didjey, rafaxF, Slaxx, Sprayy, StepA |
|            2 |     5642 | 2025-10-11 | Rebels Gaming        | L   | 0.020      | -            | -                | -                | -         |    -0.09 | Didjey, rafaxF, Slaxx, Sprayy, StepA |
|            1 |     5666 | 2025-10-10 | CarritoSpain         | W   | 0.013      | -            | -                | -                | 1 (0.013) |     0.04 | Didjey, rafaxF, Slaxx, Sprayy, StepA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,332.11)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      0.960 | $500.00        | $480.19         |
| 2026-03-01 |      0.959 | $1,772.62      | $1,700.43       |
| 2025-11-23 |      0.306 | $431.83        | $132.11         |
| 2025-10-12 |      0.026 | $755.20        | $19.38          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
