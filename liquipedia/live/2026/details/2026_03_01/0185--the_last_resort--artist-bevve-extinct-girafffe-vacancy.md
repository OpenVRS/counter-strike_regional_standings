### Roster Details<br />
Team Name: The Last Resort<br />
Roster: arTisT, bevve, Extinct, Girafffe, Vacancy<br />
Global Rank: [185](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_01.md)<br />
Regional Rank: [127]( ../../standings_europe_2026_03_01.md)<br />
<br />
Final Rank Value:  736.7<br />
<br />
Final Rank Value (736.7) = Starting Rank Value (822.7) + Head To Head Adjustments (-86.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.361[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.025[<sup>2</sup>](#table1)
- LAN Wins: 0.267[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 822.7
- 400 + ( ( 0.223 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 822.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.192
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           37 |      296 | 2026-02-22 | 8Sins                                     | W   | 1.000      | 0.319        | 0.007 (0.002)    | 0.135 (0.043)    | 1 (1.000) |    17.67 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           36 |      339 | 2026-02-21 | CTRL Esports                              | W   | 1.000      | 0.319        | 0.003 (0.001)    | 0.000 (0.000)    | 1 (1.000) |     8.18 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           35 |      443 | 2026-02-19 | FUZOS                                     | L   | 1.000      | -            | -                | -                | -         |    -8.64 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           34 |      889 | 2026-02-10 | Bebop                                     | L   | 1.000      | -            | -                | -                | -         |   -10.65 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           33 |      904 | 2026-02-09 | Home                                      | L   | 1.000      | -            | -                | -                | -         |   -17.45 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           32 |     1742 | 2026-01-13 | HYPERSPIRIT                               | L   | 0.878      | -            | -                | -                | -         |   -12.93 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           31 |     1757 | 2026-01-11 | BRUTE                                     | W   | 0.865      | 0.333        | 0.006 (0.002)    | 0.316 (0.091)    | 0 (0.000) |    14.39 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           30 |     1774 | 2026-01-07 | CSDIILIT                                  | L   | 0.839      | -            | -                | -                | -         |   -15.47 | arTisT, bevve, Extinct, Girafffe, Vacancy  |
|           29 |     2130 | 2025-12-06 | 8Sins                                     | W   | 0.626      | 0.288        | 0.007 (0.001)    | 0.135 (0.024)    | 1 (0.626) |    10.44 | arTisT, bevve, Extinct, Unicorn, Vacancy   |
|           28 |     2352 | 2025-11-27 | ENCE Academy                              | L   | 0.566      | -            | -                | -                | -         |    -7.89 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           27 |     2358 | 2025-11-26 | FORZE Reload                              | L   | 0.561      | -            | -                | -                | -         |    -6.01 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           26 |     2413 | 2025-11-24 | Fire Flux Esports                         | L   | 0.547      | -            | -                | -                | -         |    -6.37 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           25 |     2469 | 2025-11-22 | MOUZ NXT                                  | L   | 0.533      | -            | -                | -                | -         |    -1.00 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           24 |     2488 | 2025-11-22 | ENCE Academy                              | L   | 0.531      | -            | -                | -                | -         |    -7.76 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           23 |     2499 | 2025-11-21 | Square Sausages                           | W   | 0.527      | 0.344        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     2.75 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           22 |     2538 | 2025-11-20 | Eternal Fire                              | W   | 0.521      | 0.299        | 0.002 (0.000)    | 0.274 (0.043)    | 0 (0.000) |     8.05 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           21 |     2561 | 2025-11-20 | AaB esport                                | L   | 0.519      | -            | -                | -                | -         |    -9.36 | arTisT, bevve, Extinct, rafaxF, Vacancy    |
|           20 |     2683 | 2025-11-13 | Wasted Talent                             | W   | 0.474      | 0.265        | 0.000 (0.000)    | -                | 0 (0.000) |     1.61 | arTisT, bevve, Extinct, Unicorn, Vacancy   |
|           19 |     3146 | 2025-11-01 | Nexus Gaming                              | L   | 0.392      | -            | -                | -                | -         |    -2.69 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           18 |     3185 | 2025-10-30 | SIXSEVEN                                  | L   | 0.380      | -            | -                | -                | -         |    -4.53 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           17 |     3218 | 2025-10-29 | Home                                      | L   | 0.371      | -            | -                | -                | -         |    -7.30 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           16 |     3224 | 2025-10-28 | Fire Flux Esports                         | L   | 0.367      | -            | -                | -                | -         |    -5.96 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           15 |     3249 | 2025-10-28 | Home                                      | L   | 0.365      | -            | -                | -                | -         |    -7.41 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           14 |     3268 | 2025-10-27 | FORZE Reload                              | L   | 0.361      | -            | -                | -                | -         |    -5.04 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           13 |     3379 | 2025-10-25 | AMKAL ESPORTS                             | W   | 0.347      | 0.384        | 0.002 (0.000)    | 0.176 (0.023)    | 0 (0.000) |     4.41 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           12 |     3391 | 2025-10-25 | ARCRED                                    | L   | 0.346      | -            | -                | -                | -         |    -2.51 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           11 |     3443 | 2025-10-24 | SIXSEVEN                                  | L   | 0.340      | -            | -                | -                | -         |    -4.63 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|           10 |     3508 | 2025-10-23 | CYBERSHOKE Esports                        | L   | 0.332      | -            | -                | -                | -         |    -1.17 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            9 |     3540 | 2025-10-21 | Ex-Zero Tenacity                          | L   | 0.319      | -            | -                | -                | -         |    -5.74 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            8 |     3548 | 2025-10-21 | AM Gaming                                 | L   | 0.318      | -            | -                | -                | -         |    -2.77 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            7 |     3556 | 2025-10-20 | AMKAL ESPORTS                             | W   | 0.314      | 0.384        | 0.002 (0.000)    | 0.176 (0.021)    | 0 (0.000) |     3.72 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            6 |     3566 | 2025-10-19 | ALGO Esports                              | W   | 0.307      | 0.384        | 0.000 (0.000)    | 0.037 (0.004)    | 0 (0.000) |     1.40 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            5 |     3586 | 2025-10-18 | FORZE Reload                              | L   | 0.300      | -            | -                | -                | -         |    -4.32 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            4 |     3614 | 2025-10-17 | ALGO Esports                              | W   | 0.293      | 0.384        | -                | 0.037 (0.004)    | -         |     1.29 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            3 |     4888 | 2025-09-13 | 8Sins                                     | L   | 0.066      | -            | -                | -                | -         |    -1.15 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            2 |     4992 | 2025-09-11 | Copenhagen Wolves (American organization) | L   | 0.051      | -            | -                | -                | -         |    -0.98 | arTisT, Extinct, Girafffe, nestee, Vacancy |
|            1 |     5161 | 2025-09-07 | Metizport                                 | L   | 0.025      | -            | -                | -                | -         |    -0.13 | arTisT, Extinct, nestee, Rezst, Vacancy    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,674.66)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $3,909.06      | $3,909.06       |
| 2025-12-06 |      0.626 | $2,267.80      | $1,420.53       |
| 2025-11-24 |      0.547 | $500.00        | $273.68         |
| 2025-09-13 |      0.066 | $1,084.56      | $71.40          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
