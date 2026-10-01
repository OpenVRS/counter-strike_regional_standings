### Roster Details<br />
Team Name: QUAZAR<br />
Roster: gehji, kaiori, Ne1XXX, newt, Porya<br />
Global Rank: [80](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [61]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  1018.2<br />
<br />
Final Rank Value (1018.2) = Starting Rank Value (929.5) + Head To Head Adjustments (88.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.379[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.150[<sup>2</sup>](#table1)
- LAN Wins: 0.288[<sup>2</sup>](#table1)

The average of these factors is 0.278<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 929.5
- 400 + ( ( 0.278 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 929.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |       37 | 2026-09-05 | INFINITE         | L   | 1.000      | -            | -                | -                | -         |    -8.43 | gehji, kaiori, Ne1XXX, newt, Porya |
|           32 |       83 | 2026-09-04 | SINNERS          | W   | 1.000      | 0.143        | 0.102 (0.015)    | -                | 0 (0.000) |    18.01 | gehji, kaiori, Ne1XXX, newt, Porya |
|           31 |       88 | 2026-09-03 | Omega            | W   | 1.000      | 0.143        | 0.027 (0.004)    | -                | 0 (0.000) |    21.67 | gehji, kaiori, Ne1XXX, newt, Porya |
|           30 |      399 | 2026-08-27 | BASEMENT BOYS    | W   | 1.000      | 0.143        | 0.016 (0.002)    | -                | 0 (0.000) |    17.29 | gehji, kaiori, Ne1XXX, newt, Porya |
|           29 |      409 | 2026-08-27 | EAC              | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.775 (0.111)    | 0 (0.000) |    18.24 | gehji, kaiori, Ne1XXX, newt, Porya |
|           28 |      533 | 2026-08-24 | Nemiga           | L   | 1.000      | -            | -                | -                | -         |   -11.53 | gehji, kaiori, Ne1XXX, newt, Porya |
|           27 |     1373 | 2026-07-26 | NEW VISION       | L   | 0.911      | -            | -                | -                | -         |   -24.16 | gehji, kaiori, Ne1XXX, newt, Porya |
|           26 |     1489 | 2026-07-22 | SAW Youngsters   | W   | 0.886      | 0.344        | -                | 0.472 (0.144)    | 0 (0.000) |     6.29 | gehji, kaiori, Ne1XXX, newt, Porya |
|           25 |     1519 | 2026-07-21 | Enjoy            | W   | 0.878      | 0.344        | -                | 0.535 (0.162)    | 0 (0.000) |     7.51 | gehji, kaiori, Ne1XXX, newt, Porya |
|           24 |     1588 | 2026-07-18 | PsychoFace       | L   | 0.858      | -            | -                | -                | -         |   -17.55 | gehji, kaiori, Ne1XXX, newt, Porya |
|           23 |     1593 | 2026-07-18 | Just Players     | W   | 0.857      | 0.303        | 0.011 (0.003)    | 0.773 (0.201)    | 1 (0.857) |    12.25 | gehji, kaiori, Ne1XXX, newt, Porya |
|           22 |     1609 | 2026-07-17 | Wingman          | W   | 0.853      | -            | -                | -                | 1 (0.853) |     2.56 | gehji, kaiori, Ne1XXX, newt, Porya |
|           21 |     1614 | 2026-07-17 | Enjoy            | W   | 0.852      | 0.303        | -                | 0.535 (0.138)    | 1 (0.852) |     7.68 | gehji, kaiori, Ne1XXX, newt, Porya |
|           20 |     1622 | 2026-07-17 | Spirit Academy   | L   | 0.851      | -            | -                | -                | -         |   -17.32 | gehji, kaiori, Ne1XXX, newt, Porya |
|           19 |     1690 | 2026-07-14 | BRUTE            | W   | 0.831      | 0.317        | 0.007 (0.002)    | 0.412 (0.109)    | 0 (0.000) |    18.75 | gehji, kaiori, Ne1XXX, newt, Porya |
|           18 |     1695 | 2026-07-14 | HOTU             | L   | 0.830      | -            | -                | -                | -         |    -1.98 | gehji, kaiori, Ne1XXX, newt, Porya |
|           17 |     1703 | 2026-07-13 | Bushido Wildcats | W   | 0.826      | 0.317        | 0.017 (0.004)    | 1.000 (0.262)    | -         |    10.02 | gehji, kaiori, Ne1XXX, newt, Porya |
|           16 |     1706 | 2026-07-13 | The Last Resort  | W   | 0.824      | 0.317        | 0.011 (0.003)    | 0.444 (0.116)    | -         |    12.36 | gehji, kaiori, Ne1XXX, newt, Porya |
|           15 |     1717 | 2026-07-12 | Misa             | W   | 0.820      | 0.317        | -                | 0.642 (0.167)    | -         |     5.42 | gehji, kaiori, Ne1XXX, newt, Porya |
|           14 |     1737 | 2026-07-12 | The Last Resort  | L   | 0.818      | -            | -                | -                | -         |   -13.39 | gehji, kaiori, Ne1XXX, newt, Porya |
|           13 |     2071 | 2026-06-21 | Fire Flux        | W   | 0.679      | 0.400        | 0.010 (0.003)    | 0.354 (0.096)    | -         |     5.81 | gehji, kaiori, Ne1XXX, newt, Porya |
|           12 |     2086 | 2026-06-20 | ReThink          | W   | 0.672      | 0.400        | 0.009 (0.003)    | -                | -         |     6.88 | gehji, kaiori, Ne1XXX, newt, Porya |
|           11 |     2109 | 2026-06-19 | Hermine          | W   | 0.665      | -            | -                | -                | -         |     1.83 | gehji, kaiori, Ne1XXX, newt, Porya |
|           10 |     2422 | 2026-06-05 | ReThink          | W   | 0.572      | -            | -                | -                | -         |     5.76 | gehji, kaiori, Ne1XXX, newt, Porya |
|            9 |     2461 | 2026-06-03 | Falcons Force    | W   | 0.559      | -            | -                | -                | -         |     4.03 | gehji, kaiori, Ne1XXX, newt, Porya |
|            8 |     2508 | 2026-06-01 | eternal premium  | W   | 0.546      | -            | -                | -                | -         |     2.85 | gehji, kaiori, Ne1XXX, newt, Porya |
|            7 |     4428 | 2026-04-04 | INOX Division    | L   | 0.159      | -            | -                | -                | -         |    -2.49 | 1zz, gehji, kaiori, Ne1XXX, newt   |
|            6 |     4515 | 2026-04-03 | Atreides         | W   | 0.152      | -            | -                | -                | -         |     1.50 | 1zz, gehji, kaiori, Ne1XXX, newt   |
|            5 |     4615 | 2026-04-02 | cirahvi          | W   | 0.146      | -            | -                | -                | -         |     0.72 | 1zz, gehji, kaiori, Ne1XXX, newt   |
|            4 |     4701 | 2026-04-01 | ENCE             | L   | 0.139      | -            | -                | -                | -         |    -2.09 | 1zz, gehji, kaiori, Ne1XXX, newt   |
|            3 |     4907 | 2026-03-30 | Lavked           | W   | 0.124      | -            | -                | -                | -         |     1.73 | 1zz, gehji, kaiori, Ne1XXX, newt   |
|            2 |     4966 | 2026-03-29 | M1X KS           | W   | 0.118      | -            | -                | -                | -         |     0.34 | 1zz, gehji, kaiori, Ne1XXX, newt   |
|            1 |     5318 | 2026-03-23 | WBT              | L   | 0.079      | -            | -                | -                | -         |    -1.81 | 1zz, gehji, kaiori, Ne1XXX, newt   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,661.07)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-18 |      0.859 | $750.00        | $643.99         |
| 2026-07-14 |      0.831 | $1,000.00      | $831.37         |
| 2026-06-21 |      0.679 | $15,000.00     | $10,185.71      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
