### Roster Details<br />
Team Name: BOSS<br />
Roster: ben1337, Bwills, marekiew, SLIGHT, WUMBO<br />
Global Rank: [253](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_09_07.md)<br />
Regional Rank: [58]( ../../standings_americas_2026_09_07.md)<br />
<br />
Final Rank Value:  646.6<br />
<br />
Final Rank Value (646.6) = Starting Rank Value (643.3) + Head To Head Adjustments (3.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.231[<sup>1</sup>](#table2)
- Bounty Collected: 0.220[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.051[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 643.3
- 400 + ( ( 0.128 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 643.3


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
|           20 |     3579 | 2026-04-30 | ex-Aether      | L   | 0.334      | -            | -                | -                | -         |    -5.32 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           19 |     3706 | 2026-04-27 | Fisher College | L   | 0.313      | -            | -                | -                | -         |    -2.86 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           18 |     3756 | 2026-04-26 | Zomblers       | L   | 0.307      | -            | -                | -                | -         |    -4.74 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           17 |     4229 | 2026-04-09 | Aether         | W   | 0.194      | 0.333        | 0.001 (0.000)    | 0.033 (0.002)    | 0 (0.000) |     2.88 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           16 |     4285 | 2026-04-07 | LAG            | W   | 0.180      | 0.333        | 0.016 (0.001)    | 0.360 (0.022)    | 0 (0.000) |     5.08 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           15 |     4415 | 2026-04-04 | LAG            | L   | 0.161      | -            | -                | -                | -         |    -0.54 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           14 |     4420 | 2026-04-04 | Villainous     | W   | 0.160      | 0.333        | 0.003 (0.000)    | 0.195 (0.010)    | 0 (0.000) |     3.13 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           13 |     4498 | 2026-04-03 | FlyQuest RED   | W   | 0.154      | 0.363        | 0.000 (0.000)    | -                | 0 (0.000) |     0.96 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           12 |     4577 | 2026-04-02 | Fisher College | L   | 0.148      | -            | -                | -                | -         |    -1.42 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           11 |     4587 | 2026-04-02 | TSG            | L   | 0.147      | -            | -                | -                | -         |    -3.39 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|           10 |     4592 | 2026-04-02 | regain         | W   | 0.147      | 0.769        | 0.009 (0.001)    | 0.303 (0.034)    | 0 (0.000) |     3.02 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            9 |     4680 | 2026-04-01 | LAG            | L   | 0.141      | -            | -                | -                | -         |    -0.45 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            8 |     4768 | 2026-03-31 | 900FPSvsECO    | W   | 0.135      | 0.769        | 0.000 (0.000)    | 0.024 (0.002)    | 0 (0.000) |     1.82 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            7 |     4773 | 2026-03-31 | Club 333       | L   | 0.134      | -            | -                | -                | -         |    -2.26 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            6 |     4934 | 2026-03-29 | LAG            | W   | 0.120      | 0.354        | 0.016 (0.001)    | 0.360 (0.015)    | 1 (0.120) |     3.40 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            5 |     4972 | 2026-03-29 | Voca           | L   | 0.118      | -            | -                | -                | -         |    -0.96 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            4 |     5013 | 2026-03-28 | Wanted Goons   | W   | 0.114      | 0.354        | 0.000 (0.000)    | 0.083 (0.003)    | 1 (0.114) |     2.05 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            3 |     5051 | 2026-03-28 | Elusive        | W   | 0.112      | 0.354        | 0.000 (0.000)    | 0.087 (0.003)    | 1 (0.112) |     1.19 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            2 |     5071 | 2026-03-28 | Demolition     | W   | 0.111      | 0.354        | 0.000 (0.000)    | 0.004 (0.000)    | 1 (0.111) |     0.99 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |
|            1 |     5292 | 2026-03-23 | Chicanery      | W   | 0.081      | 0.624        | -                | 0.021 (0.001)    | -         |     0.77 | ben1337, Bwills, marekiew, SLIGHT, WUMBO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($235.56)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-29 |      0.121 | $1,950.00      | $235.56         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
