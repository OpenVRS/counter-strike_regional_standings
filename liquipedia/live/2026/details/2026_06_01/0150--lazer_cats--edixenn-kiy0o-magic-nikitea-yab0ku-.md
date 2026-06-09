### Roster Details<br />
Team Name: Lazer Cats<br />
Roster: edixenn, Kiy0o, Magic, nikitea, yab0ku-<br />
Global Rank: [150](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [101]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  885.1<br />
<br />
Final Rank Value (885.1) = Starting Rank Value (875.5) + Head To Head Adjustments (9.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.201[<sup>2</sup>](#table1)
- LAN Wins: 0.201[<sup>2</sup>](#table1)

The average of these factors is 0.250<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 875.5
- 400 + ( ( 0.250 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 875.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.351
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           45 |      192 | 2026-05-26 | AM Gaming               | L   | 1.000      | -            | -                | -                | -         |    -5.61 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           44 |      206 | 2026-05-26 | TNC Esport              | L   | 1.000      | -            | -                | -                | -         |   -16.39 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           43 |      235 | 2026-05-25 | 2007                    | L   | 1.000      | -            | -                | -                | -         |   -15.95 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           42 |      258 | 2026-05-24 | SPARTA Esports          | W   | 1.000      | 0.384        | 0.039 (0.015)    | 0.828 (0.318)    | 0 (0.000) |    23.47 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           41 |      329 | 2026-05-23 | Leo Team                | L   | 1.000      | -            | -                | -                | -         |   -14.95 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           40 |      397 | 2026-05-21 | ALGO Esports            | L   | 1.000      | -            | -                | -                | -         |   -18.93 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           39 |      494 | 2026-05-18 | Ursa                    | W   | 1.000      | 0.384        | 0.016 (0.006)    | 0.951 (0.366)    | 0 (0.000) |    21.12 | edixenn, Kiy0o, Magic, nikitea, yab0ku- |
|           38 |     2313 | 2026-03-30 | HAVU                    | L   | 0.786      | -            | -                | -                | -         |   -12.01 | Kiy0o, Magic, nikitea, sdy, yab0ku-     |
|           37 |     2353 | 2026-03-30 | Alliance                | L   | 0.784      | -            | -                | -                | -         |    -1.63 | Kiy0o, Magic, nikitea, sdy, yab0ku-     |
|           36 |     2420 | 2026-03-29 | MOUZ NXT                | W   | 0.778      | 0.354        | 0.016 (0.004)    | 0.817 (0.225)    | 1 (0.778) |    19.10 | Kiy0o, Magic, nikitea, sdy, yab0ku-     |
|           35 |     2439 | 2026-03-29 | Aimclub (Romanian team) | W   | 0.777      | -            | -                | -                | 1 (0.777) |     7.82 | Kiy0o, Magic, nikitea, sdy, yab0ku-     |
|           34 |     3590 | 2026-03-07 | NOVAQ                   | L   | 0.631      | -            | -                | -                | -         |    -8.53 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           33 |     3635 | 2026-03-06 | PsychoFace              | L   | 0.624      | -            | -                | -                | -         |    -5.85 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           32 |     3709 | 2026-03-04 | TNC Esport              | W   | 0.613      | 0.435        | 0.022 (0.006)    | 1.000 (0.266)    | 0 (0.000) |    13.19 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           31 |     3780 | 2026-03-03 | Team Nemesis            | L   | 0.604      | -            | -                | -                | -         |    -2.41 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           30 |     3802 | 2026-03-02 | Leo Team                | L   | 0.600      | -            | -                | -                | -         |   -10.86 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           29 |     3844 | 2026-03-01 | KOLESIE                 | L   | 0.593      | -            | -                | -                | -         |    -3.53 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           28 |     3855 | 2026-03-01 | Sashi Esport            | W   | 0.592      | 0.384        | 0.008 (0.002)    | 0.517 (0.118)    | 0 (0.000) |    14.88 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           27 |     3911 | 2026-02-28 | FUZOS                   | W   | 0.584      | -            | -                | -                | -         |     6.13 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           26 |     3961 | 2026-02-27 | ENCE                    | L   | 0.577      | -            | -                | -                | -         |   -10.47 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           25 |     4014 | 2026-02-26 | SPARTA Esports          | W   | 0.571      | -            | -                | -                | -         |     2.32 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           24 |     4029 | 2026-02-26 | Phantom Esports         | W   | 0.570      | 0.384        | 0.007 (0.001)    | 0.736 (0.161)    | -         |    13.79 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           23 |     4079 | 2026-02-25 | Hypewrld                | W   | 0.564      | -            | -                | -                | -         |     7.27 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           22 |     4105 | 2026-02-24 | WW TEAM                 | L   | 0.559      | -            | -                | -                | -         |    -2.31 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           21 |     4143 | 2026-02-23 | AM Gaming               | L   | 0.553      | -            | -                | -                | -         |    -2.07 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           20 |     4147 | 2026-02-23 | Cirahvi                 | W   | 0.552      | 0.384        | -                | 0.562 (0.119)    | -         |     6.88 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           19 |     4273 | 2026-02-21 | Leo Team                | W   | 0.539      | 0.435        | 0.007 (0.002)    | 0.532 (0.125)    | -         |     7.52 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           18 |     4294 | 2026-02-21 | Clutchain Female        | W   | 0.537      | 0.384        | 0.012 (0.002)    | -                | -         |     4.60 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           17 |     4373 | 2026-02-19 | FUZOS                   | L   | 0.525      | -            | -                | -                | -         |   -10.80 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           16 |     4473 | 2026-02-17 | SINNERS Esports         | L   | 0.513      | -            | -                | -                | -         |    -0.80 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           15 |     4502 | 2026-02-17 | ENCE                    | W   | 0.511      | 0.384        | 0.010 (0.002)    | -                | -         |     7.22 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           14 |     4534 | 2026-02-16 | Hashiras                | W   | 0.505      | 0.435        | -                | 0.633 (0.139)    | -         |     6.30 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           13 |     4571 | 2026-02-15 | SPARTA Esports          | L   | 0.499      | -            | -                | -                | -         |    -2.39 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           12 |     4597 | 2026-02-15 | Nexus Gaming            | L   | 0.498      | -            | -                | -                | -         |   -10.17 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           11 |     4708 | 2026-02-13 | WW TEAM                 | L   | 0.485      | -            | -                | -                | -         |    -1.78 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|           10 |     4727 | 2026-02-13 | Ex-Zero Tenacity        | W   | 0.484      | 0.435        | -                | 0.814 (0.171)    | -         |     4.50 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            9 |     4799 | 2026-02-11 | Metizport               | L   | 0.470      | -            | -                | -                | -         |    -4.92 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            8 |     4854 | 2026-02-09 | Leo Team                | W   | 0.459      | 0.435        | 0.007 (0.001)    | -                | -         |     5.90 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            7 |     4879 | 2026-02-08 | Phantom Esports         | L   | 0.453      | -            | -                | -                | -         |    -2.62 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            6 |     5906 | 2025-12-19 | Fnatic                  | L   | 0.113      | -            | -                | -                | -         |    -0.82 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            5 |     5914 | 2025-12-19 | ENCE                    | W   | 0.112      | -            | -                | -                | 1 (0.112) |     1.85 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            4 |     5926 | 2025-12-18 | Nexus Gaming            | W   | 0.106      | -            | -                | -                | 1 (0.106) |     1.14 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            3 |     5933 | 2025-12-18 | BESTIA                  | L   | 0.105      | -            | -                | -                | -         |    -0.34 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            2 |     5953 | 2025-12-17 | SINQU Esports           | W   | 0.098      | -            | -                | -                | 1 (0.098) |     0.41 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |
|            1 |     5959 | 2025-12-17 | Japczany                | W   | 0.098      | -            | -                | -                | 1 (0.098) |     0.32 | Br4tkO, Kiy0o, Magic, nikitea, yab0ku-  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,963.89)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      0.593 | $5,000.00      | $2,963.89       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
