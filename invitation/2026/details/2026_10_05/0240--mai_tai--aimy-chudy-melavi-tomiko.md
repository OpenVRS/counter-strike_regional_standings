### Roster Details<br />
Team Name: Mai Tai<br />
Roster: aimy, chudy, Melavi, tomiko<br />
Global Rank: [240](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [165]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  655.3<br />
<br />
Final Rank Value (655.3) = Starting Rank Value (646.5) + Head To Head Adjustments (8.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.232[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.022[<sup>2</sup>](#table1)

The average of these factors is 0.123<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 646.5
- 400 + ( ( 0.123 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 646.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1280 | 2026-09-07 | Spirit Academy | L   | 1.000      | -            | -                | -                | -         |    -5.19 | chudy, Melavi, sEIS, tomiko, wazak   |
|           14 |     1348 | 2026-09-06 | NAVI Junior    | L   | 1.000      | -            | -                | -                | -         |    -3.50 | chudy, Melavi, sEIS, tomiko, wazak   |
|           13 |     2759 | 2026-07-26 | Misa           | W   | 0.726      | 0.344        | 0.006 (0.002)    | 0.691 (0.173)    | 0 (0.000) |    16.21 | chudy, Melavi, Nami, Pelle, wazak    |
|           12 |     3292 | 2026-07-01 | DONSTU         | L   | 0.559      | -            | -                | -                | -         |    -6.10 | chudy, Maze, Melavi, Nami, tomiko    |
|           11 |     3321 | 2026-06-29 | Entropy        | L   | 0.546      | -            | -                | -                | -         |    -4.95 | chudy, Maze, Melavi, Nami, tomiko    |
|           10 |     3373 | 2026-06-27 | megoshort      | W   | 0.533      | 0.303        | 0.003 (0.000)    | 0.405 (0.065)    | 0 (0.000) |    10.43 | aimy, chudy, Melavi, Nami, tomiko    |
|            9 |     3960 | 2026-05-30 | Vexar          | L   | 0.346      | -            | -                | -                | -         |    -3.19 | aimy, chudy, Melavi, next1me, tomiko |
|            8 |     4005 | 2026-05-29 | Misa           | W   | 0.339      | 0.303        | 0.000 (0.000)    | 0.131 (0.013)    | 0 (0.000) |     4.20 | aimy, chudy, Melavi, next1me, tomiko |
|            7 |     4040 | 2026-05-28 | Enjoy          | L   | 0.333      | -            | -                | -                | -         |    -3.54 | aimy, chudy, Melavi, next1me, tomiko |
|            6 |     4260 | 2026-05-23 | Julie&Cie      | W   | 0.299      | 0.303        | 0.000 (0.000)    | 0.011 (0.001)    | 0 (0.000) |     1.86 | aimy, chudy, Melavi, next1me, tomiko |
|            5 |     5391 | 2026-04-20 | INFINITE       | L   | 0.081      | -            | -                | -                | -         |    -0.04 | aimy, chudy, Melavi, next1me, tomiko |
|            4 |     5396 | 2026-04-20 | los kogutos    | W   | 0.080      | 0.341        | 0.001 (0.000)    | 0.009 (0.000)    | 1 (0.080) |     1.15 | aimy, chudy, Melavi, next1me, tomiko |
|            3 |     5400 | 2026-04-20 | INFINITE       | L   | 0.079      | -            | -                | -                | -         |    -0.04 | aimy, chudy, Melavi, next1me, tomiko |
|            2 |     5414 | 2026-04-19 | los kogutos    | W   | 0.073      | 0.341        | 0.001 (0.000)    | 0.009 (0.000)    | 1 (0.073) |     1.06 | aimy, chudy, Melavi, next1me, tomiko |
|            1 |     5431 | 2026-04-19 | ImmuNe         | W   | 0.072      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.072) |     0.45 | aimy, chudy, Melavi, next1me, tomiko |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($237.35)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-20 |      0.081 | $2,945.00      | $237.35         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
