### Roster Details<br />
Team Name: 100 Thieves<br />
Roster: Ag1l, dev1ce, poiii, rain, sirah<br />
Global Rank: [36](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [28]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1314.4<br />
<br />
Final Rank Value (1314.4) = Starting Rank Value (1277.1) + Head To Head Adjustments (37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.343[<sup>1</sup>](#table2)
- Bounty Collected: 0.343[<sup>2</sup>](#table1)
- Opponent Network: 0.142[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.457<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1277.1
- 400 + ( ( 0.457 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1277.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.336
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      195 | 2026-02-28 | HEROIC                  | L   | 1.000      | -            | -                | -                | -         |   -10.00 | Ag1l, dev1ce, poiii, rain, sirah |
|           13 |      206 | 2026-02-28 | FlyQuest                | W   | 1.000      | 0.354        | 0.125 (0.044)    | 0.336 (0.119)    | 1 (1.000) |    15.32 | Ag1l, dev1ce, poiii, rain, sirah |
|           12 |      238 | 2026-02-27 | Eternal Fire            | W   | 1.000      | 0.354        | 0.005 (0.002)    | 0.534 (0.189)    | 1 (1.000) |     6.79 | Ag1l, dev1ce, poiii, rain, sirah |
|           11 |      249 | 2026-02-27 | CYBERSHOKE Esports      | W   | 1.000      | 0.354        | 0.043 (0.015)    | 0.676 (0.239)    | 1 (1.000) |    11.51 | Ag1l, dev1ce, poiii, rain, sirah |
|           10 |      282 | 2026-02-26 | Betclic Apogee Esports  | W   | 1.000      | 0.354        | 0.015 (0.005)    | 0.448 (0.158)    | 1 (1.000) |    10.12 | Ag1l, dev1ce, poiii, rain, sirah |
|            9 |      299 | 2026-02-26 | MANA eSports            | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.363 (0.129)    | 1 (1.000) |     3.47 | Ag1l, dev1ce, poiii, rain, sirah |
|            8 |      352 | 2026-02-25 | Aimclub (Romanian team) | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.178 (0.063)    | 1 (1.000) |     1.49 | Ag1l, dev1ce, poiii, rain, sirah |
|            7 |      360 | 2026-02-25 | ENCE                    | L   | 1.000      | -            | -                | -                | -         |   -19.05 | Ag1l, dev1ce, poiii, rain, sirah |
|            6 |      397 | 2026-02-24 | BRUTE                   | W   | 1.000      | 0.354        | 0.006 (0.002)    | 0.256 (0.091)    | 1 (1.000) |     2.02 | Ag1l, dev1ce, poiii, rain, sirah |
|            5 |      412 | 2026-02-24 | MANA eSports            | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.363 (0.129)    | 1 (1.000) |     2.81 | Ag1l, dev1ce, poiii, rain, sirah |
|            4 |      551 | 2026-02-21 | BetBoom Team            | L   | 1.000      | -            | -                | -                | -         |    -9.05 | Ag1l, dev1ce, poiii, rain, sirah |
|            3 |      580 | 2026-02-20 | Ninjas in Pyjamas       | W   | 1.000      | 0.341        | 0.107 (0.037)    | 0.392 (0.134)    | 1 (1.000) |    17.91 | Ag1l, dev1ce, poiii, rain, sirah |
|            2 |      582 | 2026-02-20 | BESTIA                  | W   | 1.000      | 0.341        | 0.049 (0.017)    | 0.489 (0.167)    | 1 (1.000) |    16.06 | Ag1l, dev1ce, poiii, rain, sirah |
|            1 |      593 | 2026-02-20 | Ninjas in Pyjamas       | L   | 1.000      | -            | -                | -                | -         |   -12.17 | Ag1l, dev1ce, poiii, rain, sirah |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,750.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-28 |      1.000 | $3,750.00      | $3,750.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
