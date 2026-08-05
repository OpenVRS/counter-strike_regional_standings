### Roster Details<br />
Team Name: Vitality<br />
Roster: apEX, flameZ, mezii, ropz, ZywOo<br />
Global Rank: [5](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [4]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  1836.4<br />
<br />
Final Rank Value (1836.4) = Starting Rank Value (1803.0) + Head To Head Adjustments (33.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.747[<sup>2</sup>](#table1)
- Opponent Network: 0.357[<sup>2</sup>](#table1)
- LAN Wins: 0.794[<sup>2</sup>](#table1)

The average of these factors is 0.724<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1803.0
- 400 + ( ( 0.724 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 1803.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           34 |      240 | 2026-07-24 | Liquid        | L   | 1.000      | -            | -                | -                | -         |   -29.66 | apEX, flameZ, mezii, ropz, ZywOo |
|           33 |      895 | 2026-06-19 | Falcons       | L   | 0.902      | -            | -                | -                | -         |   -11.17 | apEX, flameZ, mezii, ropz, ZywOo |
|           32 |      969 | 2026-06-14 | BetBoom       | W   | 0.867      | 1.000        | 0.335 (0.291)    | 0.706 (0.612)    | 1 (0.867) |     9.57 | apEX, flameZ, mezii, ropz, ZywOo |
|           31 |     1004 | 2026-06-13 | MOUZ          | W   | 0.860      | 1.000        | 1.000 (0.860)    | 0.595 (0.512)    | 1 (0.860) |    13.84 | apEX, flameZ, mezii, ropz, ZywOo |
|           30 |     1048 | 2026-06-12 | 9z            | L   | 0.854      | -            | -                | -                | -         |   -11.94 | apEX, flameZ, mezii, ropz, ZywOo |
|           29 |     1082 | 2026-06-11 | FUT           | W   | 0.846      | 1.000        | 0.589 (0.499)    | 0.342 (0.289)    | 1 (0.846) |     7.20 | apEX, flameZ, mezii, ropz, ZywOo |
|           28 |     1915 | 2026-05-15 | Natus Vincere | L   | 0.669      | -            | -                | -                | -         |   -12.67 | apEX, flameZ, mezii, ropz, ZywOo |
|           27 |     1967 | 2026-05-13 | B8            | W   | 0.655      | 1.000        | -                | 0.670 (0.439)    | 1 (0.655) |     4.33 | apEX, flameZ, mezii, ropz, ZywOo |
|           26 |     1977 | 2026-05-13 | FaZe          | W   | 0.653      | 1.000        | 0.565 (0.369)    | 0.540 (0.353)    | 1 (0.653) |     5.36 | apEX, flameZ, mezii, ropz, ZywOo |
|           25 |     2010 | 2026-05-12 | BetBoom       | L   | 0.648      | -            | -                | -                | -         |   -14.01 | apEX, flameZ, mezii, ropz, ZywOo |
|           24 |     2052 | 2026-05-11 | BC.Game       | W   | 0.641      | -            | -                | -                | 1 (0.641) |     0.17 | apEX, flameZ, mezii, ropz, ZywOo |
|           23 |     2242 | 2026-05-03 | Natus Vincere | W   | 0.588      | 1.000        | 1.000 (0.588)    | -                | 1 (0.588) |     7.45 | apEX, flameZ, mezii, ropz, ZywOo |
|           22 |     2277 | 2026-05-02 | GamerLegion   | W   | 0.581      | 1.000        | -                | 0.379 (0.220)    | 1 (0.581) |     3.02 | apEX, flameZ, mezii, ropz, ZywOo |
|           21 |     2382 | 2026-04-30 | G2            | W   | 0.568      | 1.000        | -                | 0.600 (0.341)    | 1 (0.568) |     5.14 | apEX, flameZ, mezii, ropz, ZywOo |
|           20 |     2437 | 2026-04-29 | FUT           | W   | 0.560      | 1.000        | 0.589 (0.330)    | -                | 1 (0.560) |     5.03 | apEX, flameZ, mezii, ropz, ZywOo |
|           19 |     2821 | 2026-04-19 | Spirit        | W   | 0.494      | 1.000        | 1.000 (0.494)    | 0.620 (0.307)    | -         |    10.72 | apEX, flameZ, mezii, ropz, ZywOo |
|           18 |     2851 | 2026-04-18 | FURIA         | W   | 0.488      | 1.000        | 0.677 (0.330)    | -                | -         |     6.19 | apEX, flameZ, mezii, ropz, ZywOo |
|           17 |     2871 | 2026-04-17 | Natus Vincere | W   | 0.481      | 1.000        | 1.000 (0.481)    | -                | -         |     6.67 | apEX, flameZ, mezii, ropz, ZywOo |
|           16 |     2891 | 2026-04-15 | Falcons       | L   | 0.468      | -            | -                | -                | -         |    -5.02 | apEX, flameZ, mezii, ropz, ZywOo |
|           15 |     2919 | 2026-04-14 | G2            | W   | 0.460      | 1.000        | -                | 0.600 (0.276)    | -         |     4.61 | apEX, flameZ, mezii, ropz, ZywOo |
|           14 |     2940 | 2026-04-13 | RED Canids    | W   | 0.453      | -            | -                | -                | -         |     0.08 | apEX, flameZ, mezii, ropz, ZywOo |
|           13 |     3777 | 2026-03-29 | Natus Vincere | W   | 0.352      | 1.000        | 1.000 (0.352)    | -                | -         |     5.02 | apEX, flameZ, mezii, ropz, ZywOo |
|           12 |     3858 | 2026-03-28 | Aurora        | W   | 0.346      | -            | -                | -                | -         |     3.27 | apEX, flameZ, mezii, ropz, ZywOo |
|           11 |     4112 | 2026-03-23 | PARIVISION    | W   | 0.314      | -            | -                | -                | -         |     4.20 | apEX, flameZ, mezii, ropz, ZywOo |
|           10 |     4214 | 2026-03-21 | The MongolZ   | W   | 0.302      | -            | -                | -                | -         |     2.42 | apEX, flameZ, mezii, ropz, ZywOo |
|            9 |     4332 | 2026-03-19 | 9z            | W   | 0.288      | 1.000        | -                | 0.758 (0.218)    | -         |     6.19 | apEX, flameZ, mezii, ropz, ZywOo |
|            8 |     5549 | 2026-02-22 | PARIVISION    | W   | 0.121      | -            | -                | -                | -         |     1.69 | apEX, flameZ, mezii, ropz, ZywOo |
|            7 |     5621 | 2026-02-21 | The MongolZ   | W   | 0.114      | -            | -                | -                | -         |     0.91 | apEX, flameZ, mezii, ropz, ZywOo |
|            6 |     5676 | 2026-02-20 | Aurora        | W   | 0.107      | -            | -                | -                | -         |     0.98 | apEX, flameZ, mezii, ropz, ZywOo |
|            5 |     5893 | 2026-02-16 | MOUZ          | W   | 0.080      | -            | -                | -                | -         |     1.67 | apEX, flameZ, mezii, ropz, ZywOo |
|            4 |     5935 | 2026-02-15 | The MongolZ   | W   | 0.074      | -            | -                | -                | -         |     0.59 | apEX, flameZ, mezii, ropz, ZywOo |
|            3 |     6001 | 2026-02-14 | G2            | W   | 0.067      | -            | -                | -                | -         |     0.74 | apEX, flameZ, mezii, ropz, ZywOo |
|            2 |     6229 | 2026-02-08 | FURIA         | W   | 0.028      | -            | -                | -                | -         |     0.39 | apEX, flameZ, mezii, ropz, ZywOo |
|            1 |     6259 | 2026-02-07 | MOUZ          | W   | 0.021      | -            | -                | -                | -         |     0.44 | apEX, flameZ, mezii, ropz, ZywOo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($542,368.46)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-26 |      1.000 | $7,500.00      | $7,500.00       |
| 2026-06-21 |      0.914 | $45,000.00     | $41,113.01      |
| 2026-05-17 |      0.681 | $67,500.00     | $45,985.04      |
| 2026-05-03 |      0.588 | $250,000.00    | $146,924.61     |
| 2026-04-19 |      0.494 | $295,000.00    | $145,789.91     |
| 2026-03-29 |      0.352 | $250,000.00    | $88,111.54      |
| 2026-02-22 |      0.121 | $450,000.00    | $54,267.88      |
| 2026-02-08 |      0.028 | $460,000.00    | $12,676.48      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
