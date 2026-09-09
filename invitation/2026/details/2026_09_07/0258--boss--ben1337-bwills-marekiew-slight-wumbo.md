### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, marekiew, SLIGHT, WUMBO<br />
Global Rank: [258](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [58]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  644.5<br />
<br />
Final Rank Value (644.5) = Starting Rank Value (641.4) + Head To Head Adjustments (3.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.230[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.049[<sup>2</sup>](#table1)

The average of these factors is 0.127<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 641.4
- 400 + ( ( 0.127 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 641.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           20 |     3607 | 2026-04-30 | ex-Aether      | L   | 0.328      | -            | -                | -                | -         |    -5.21 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           19 |     3734 | 2026-04-27 | Fisher College | L   | 0.308      | -            | -                | -                | -         |    -2.82 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           18 |     3784 | 2026-04-26 | Zomblers       | L   | 0.301      | -            | -                | -                | -         |    -4.62 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           17 |     4257 | 2026-04-09 | Aether         | W   | 0.189      | 0.333        | 0.001 (0.000)    | 0.032 (0.002)    | 0 (0.000) |     2.80 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           16 |     4313 | 2026-04-07 | LAG            | W   | 0.175      | 0.333        | 0.016 (0.001)    | 0.357 (0.021)    | 0 (0.000) |     4.93 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           15 |     4443 | 2026-04-04 | LAG            | L   | 0.156      | -            | -                | -                | -         |    -0.51 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           14 |     4448 | 2026-04-04 | Villainous     | W   | 0.154      | 0.333        | 0.003 (0.000)    | 0.195 (0.010)    | 0 (0.000) |     3.04 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           13 |     4526 | 2026-04-03 | FlyQuest RED   | W   | 0.149      | 0.363        | 0.000 (0.000)    | -                | 0 (0.000) |     0.94 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           12 |     4605 | 2026-04-02 | Fisher College | L   | 0.142      | -            | -                | -                | -         |    -1.38 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           11 |     4615 | 2026-04-02 | TSG            | L   | 0.141      | -            | -                | -                | -         |    -3.26 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           10 |     4620 | 2026-04-02 | regain         | W   | 0.141      | 0.769        | 0.009 (0.001)    | 0.301 (0.033)    | 0 (0.000) |     2.92 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            9 |     4708 | 2026-04-01 | LAG            | L   | 0.136      | -            | -                | -                | -         |    -0.43 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            8 |     4796 | 2026-03-31 | 900FPSvsECO    | W   | 0.129      | 0.769        | 0.000 (0.000)    | 0.023 (0.002)    | 0 (0.000) |     1.75 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            7 |     4801 | 2026-03-31 | Club 333       | L   | 0.128      | -            | -                | -                | -         |    -2.16 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            6 |     4962 | 2026-03-29 | LAG            | W   | 0.114      | 0.354        | 0.016 (0.001)    | 0.357 (0.014)    | 1 (0.114) |     3.25 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            5 |     5000 | 2026-03-29 | Voca           | L   | 0.112      | -            | -                | -                | -         |    -0.92 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            4 |     5041 | 2026-03-28 | Wanted Goons   | W   | 0.108      | 0.354        | 0.000 (0.000)    | 0.082 (0.003)    | 1 (0.108) |     1.96 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            3 |     5079 | 2026-03-28 | Elusive        | W   | 0.106      | 0.354        | 0.000 (0.000)    | 0.087 (0.003)    | 1 (0.106) |     1.14 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            2 |     5099 | 2026-03-28 | Demolition     | W   | 0.105      | 0.354        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.105) |     0.94 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            1 |     5320 | 2026-03-23 | Chicanery      | W   | 0.076      | 0.624        | -                | 0.021 (0.001)    | -         |     0.72 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($224.90)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.115 | $1,950.00      | $224.90         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
