### Roster Details<br />
Team Name: Mai Tai<br />
Roster: chudy, darchevile, Melavi, Nami, Pelle<br />
Global Rank: [212](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [148]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  741.9<br />
<br />
Final Rank Value (741.9) = Starting Rank Value (707.2) + Head To Head Adjustments (34.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.245[<sup>1</sup>](#table2)
- Bounty Collected: 0.261[<sup>2</sup>](#table1)
- Opponent Network: 0.129[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 707.2
- 400 + ( ( 0.159 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 707.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           23 |      135 | 2026-07-28 | Entropy         | L   | 1.000      | -            | -                | -                | -         |   -10.74 | chudy, darchevile, Nami, Pelle, wazak    |
|           22 |      157 | 2026-07-27 | UNiTY           | L   | 1.000      | -            | -                | -                | -         |   -18.82 | chudy, darchevile, Nami, Pelle, wazak    |
|           21 |      185 | 2026-07-26 | Misa            | W   | 1.000      | 0.143        | 0.002 (0.000)    | 0.728 (0.104)    | 0 (0.000) |    15.72 | chudy, Melavi, Nami, Pelle, wazak        |
|           20 |      235 | 2026-07-24 | eternal premium | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.303 (0.043)    | 0 (0.000) |    14.36 | chudy, darchevile, Melavi, Nami, Pelle   |
|           19 |      292 | 2026-07-22 | Honvéd          | L   | 1.000      | -            | -                | -                | -         |    -9.96 | chudy, darchevile, Melavi, Nami, Pelle   |
|           18 |      324 | 2026-07-21 | eternal premium | W   | 1.000      | 0.143        | 0.000 (0.000)    | -                | 0 (0.000) |    14.62 | chudy, darchevile, Melavi, Nami, Pelle   |
|           17 |      333 | 2026-07-20 | benched gods    | L   | 1.000      | -            | -                | -                | -         |   -15.23 | chudy, darchevile, Melavi, Nami, Pelle   |
|           16 |      368 | 2026-07-19 | ROUNDS          | W   | 1.000      | 0.344        | 0.001 (0.000)    | 0.280 (0.096)    | 0 (0.000) |    15.31 | chudy, darchevile, Melavi, Nami, Pelle   |
|           15 |      449 | 2026-07-16 | SAW Youngsters  | L   | 1.000      | -            | -                | -                | -         |   -12.89 | chudy, darchevile, Melavi, Nami, Pelle   |
|           14 |      477 | 2026-07-15 | ROUNDS          | W   | 1.000      | 0.344        | 0.001 (0.000)    | 0.280 (0.096)    | 0 (0.000) |    13.73 | chudy, darchevile, Melavi, Nami, Pelle   |
|           13 |      492 | 2026-07-14 | Julie&Cie       | L   | 1.000      | -            | -                | -                | -         |   -18.75 | chudy, darchevile, Melavi, Nami, next1me |
|           12 |      502 | 2026-07-13 | megoshort       | L   | 1.000      | -            | -                | -                | -         |   -18.76 | chudy, darchevile, Melavi, Nami, next1me |
|           11 |     1165 | 2026-06-07 | ENCE            | W   | 0.818      | 0.344        | 0.016 (0.005)    | 0.634 (0.179)    | 0 (0.000) |    18.51 | aimy, chudy, Nami, next1me, Pelle        |
|           10 |     1298 | 2026-06-02 | Atreides        | W   | 0.785      | 0.333        | 0.002 (0.001)    | 0.900 (0.235)    | 0 (0.000) |    17.38 | aimy, chudy, Nami, next1me, Pelle        |
|            9 |     1465 | 2026-05-28 | Young Ninjas    | L   | 0.752      | -            | -                | -                | -         |    -9.33 | aimy, chudy, Nami, next1me, Pelle        |
|            8 |     1491 | 2026-05-27 | White Tigers    | W   | 0.747      | -            | -                | -                | 0 (0.000) |     2.96 | aimy, chudy, Nami, next1me, Pelle        |
|            7 |     1498 | 2026-05-27 | Honvéd          | L   | 0.746      | -            | -                | -                | -         |    -9.04 | aimy, chudy, Nami, next1me, Pelle        |
|            6 |     1505 | 2026-05-27 | DONSTU          | W   | 0.746      | 0.333        | 0.002 (0.001)    | 0.678 (0.169)    | 0 (0.000) |    13.78 | aimy, chudy, Nami, next1me, Pelle        |
|            5 |     1518 | 2026-05-27 | ASTRAL          | L   | 0.745      | -            | -                | -                | -         |    -3.23 | aimy, chudy, Nami, next1me, Pelle        |
|            4 |     1540 | 2026-05-26 | Wampirki        | W   | 0.739      | 0.303        | -                | 0.221 (0.049)    | 0 (0.000) |     7.30 | aimy, chudy, Nami, next1me, Pelle        |
|            3 |     1553 | 2026-05-26 | Falcons Force   | W   | 0.738      | 0.384        | 0.001 (0.000)    | 0.258 (0.073)    | -         |    13.15 | aimy, chudy, Nami, next1me, Pelle        |
|            2 |     1579 | 2026-05-25 | ASTRAL          | L   | 0.732      | -            | -                | -                | -         |    -2.66 | aimy, chudy, Nami, next1me, Pelle        |
|            1 |     1632 | 2026-05-23 | GenOne          | W   | 0.723      | 0.333        | 0.033 (0.008)    | 1.000 (0.241)    | -         |    17.29 | aimy, chudy, Nami, next1me, Pelle        |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($414.81)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-28 |      0.754 | $550.00        | $414.81         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
