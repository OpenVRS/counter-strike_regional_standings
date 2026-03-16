### Roster Details<br />
Team Name: 100 Thieves<br />
Roster: Ag1l, dev1ce, poiii, rain, sirah<br />
Global Rank: [37](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [27]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  1306.1<br />
<br />
Final Rank Value (1306.1) = Starting Rank Value (1264.4) + Head To Head Adjustments (41.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.144[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.457<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1264.4
- 400 + ( ( 0.457 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 1264.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.343
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |       34 | 2026-02-28 | HEROIC                  | L   | 1.000      | -            | -                | -                | -         |    -9.16 | Ag1l, dev1ce, poiii, rain, sirah |
|           13 |       41 | 2026-02-28 | FlyQuest                | W   | 1.000      | 0.354        | 0.123 (0.044)    | 0.360 (0.127)    | 1 (1.000) |    16.07 | Ag1l, dev1ce, poiii, rain, sirah |
|           12 |       69 | 2026-02-27 | Eternal Fire            | W   | 1.000      | 0.354        | 0.004 (0.002)    | 0.405 (0.143)    | 1 (1.000) |     5.96 | Ag1l, dev1ce, poiii, rain, sirah |
|           11 |       78 | 2026-02-27 | CYBERSHOKE Esports      | W   | 1.000      | 0.354        | 0.038 (0.013)    | 0.703 (0.249)    | 1 (1.000) |    11.48 | Ag1l, dev1ce, poiii, rain, sirah |
|           10 |      108 | 2026-02-26 | Betclic Apogee Esports  | W   | 1.000      | 0.354        | 0.015 (0.005)    | 0.481 (0.170)    | 1 (1.000) |    11.18 | Ag1l, dev1ce, poiii, rain, sirah |
|            9 |      123 | 2026-02-26 | MANA eSports            | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.383 (0.136)    | 1 (1.000) |     3.67 | Ag1l, dev1ce, poiii, rain, sirah |
|            8 |      169 | 2026-02-25 | Aimclub (Romanian team) | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.188 (0.067)    | 1 (1.000) |     1.38 | Ag1l, dev1ce, poiii, rain, sirah |
|            7 |      175 | 2026-02-25 | ENCE                    | L   | 1.000      | -            | -                | -                | -         |   -19.03 | Ag1l, dev1ce, poiii, rain, sirah |
|            6 |      206 | 2026-02-24 | BRUTE                   | W   | 1.000      | 0.354        | 0.006 (0.002)    | 0.316 (0.112)    | 1 (1.000) |     2.44 | Ag1l, dev1ce, poiii, rain, sirah |
|            5 |      220 | 2026-02-24 | MANA eSports            | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.383 (0.136)    | 1 (1.000) |     3.01 | Ag1l, dev1ce, poiii, rain, sirah |
|            4 |      343 | 2026-02-21 | BetBoom Team            | L   | 1.000      | -            | -                | -                | -         |    -8.48 | Ag1l, dev1ce, poiii, rain, sirah |
|            3 |      369 | 2026-02-20 | Ninjas in Pyjamas       | W   | 1.000      | 0.341        | 0.120 (0.041)    | 0.423 (0.144)    | 1 (1.000) |    19.22 | Ag1l, dev1ce, poiii, rain, sirah |
|            2 |      371 | 2026-02-20 | BESTIA                  | W   | 1.000      | 0.341        | 0.051 (0.018)    | 0.468 (0.160)    | 1 (1.000) |    14.77 | Ag1l, dev1ce, poiii, rain, sirah |
|            1 |      381 | 2026-02-20 | Ninjas in Pyjamas       | L   | 1.000      | -            | -                | -                | -         |   -10.82 | Ag1l, dev1ce, poiii, rain, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,750.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-28 |      1.000 | $3,750.00      | $3,750.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
