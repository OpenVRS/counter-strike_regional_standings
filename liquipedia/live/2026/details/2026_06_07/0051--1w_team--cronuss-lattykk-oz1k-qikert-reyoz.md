### Roster Details<br />
Team Name: 1w Team<br />
Roster: cronuss, lattykk, oz1k, Qikert, reyoz<br />
Global Rank: [51](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [37]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1241.1<br />
<br />
Final Rank Value (1241.1) = Starting Rank Value (1297.9) + Head To Head Adjustments (-56.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.488[<sup>1</sup>](#table2)
- Bounty Collected: 0.373[<sup>2</sup>](#table1)
- Opponent Network: 0.276[<sup>2</sup>](#table1)
- LAN Wins: 0.729[<sup>2</sup>](#table1)

The average of these factors is 0.467<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1297.9
- 400 + ( ( 0.467 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1297.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.611
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |        7 | 2026-06-06 | Johnny Speeds          | L   | 1.000      | -            | -                | -                | -         |   -19.64 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           58 |       13 | 2026-06-05 | Betclic Apogee Esports | W   | 1.000      | -            | -                | -                | -         |     8.73 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           57 |       35 | 2026-06-03 | Lavked                 | W   | 1.000      | 0.384        | -                | 0.979 (0.376)    | -         |     9.55 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           56 |      203 | 2026-05-28 | AM Gaming              | L   | 1.000      | -            | -                | -                | -         |   -20.46 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           55 |      274 | 2026-05-26 | CYBERSHOKE Esports     | L   | 1.000      | -            | -                | -                | -         |   -19.76 | cronuss, KENSi, lattykk, oz1k, reyoz   |
|           54 |      275 | 2026-05-26 | Dark Moon              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.90 | cronuss, KENSi, lattykk, oz1k, reyoz   |
|           53 |      284 | 2026-05-26 | Virtus.pro             | L   | 1.000      | -            | -                | -                | -         |   -17.06 | cronuss, KENSi, lattykk, oz1k, reyoz   |
|           52 |      505 | 2026-05-21 | Looking for Org        | W   | 1.000      | 0.435        | 0.034 (0.015)    | 0.548 (0.238)    | -         |    14.79 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           51 |      532 | 2026-05-21 | Nuclear TigeRES        | W   | 1.000      | 0.435        | 0.045 (0.020)    | 0.711 (0.309)    | -         |    17.75 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           50 |      551 | 2026-05-20 | FOKUS                  | W   | 1.000      | 0.435        | 0.087 (0.038)    | 0.556 (0.242)    | -         |    19.71 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           49 |      603 | 2026-05-18 | Eternal Fire           | W   | 1.000      | 0.435        | -                | 0.741 (0.322)    | -         |    13.74 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           48 |     1554 | 2026-04-21 | GenOne                 | L   | 0.879      | -            | -                | -                | -         |   -24.52 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           47 |     1584 | 2026-04-19 | CYBERSHOKE Esports     | L   | 0.866      | -            | -                | -                | -         |   -18.13 | cronuss, lattykk, nbl, oz1k, reyoz     |
|           46 |     1636 | 2026-04-16 | Nuclear TigeRES        | L   | 0.846      | -            | -                | -                | -         |   -14.41 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           45 |     1666 | 2026-04-14 | Bebop                  | W   | 0.834      | 0.435        | -                | 0.788 (0.286)    | -         |     3.65 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           44 |     1917 | 2026-04-05 | 33                     | W   | 0.773      | 0.435        | 0.033 (0.011)    | -                | 1 (0.773) |    10.89 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           43 |     1935 | 2026-04-05 | WW TEAM                | W   | 0.772      | 0.435        | -                | 0.646 (0.217)    | 1 (0.772) |     7.58 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           42 |     1995 | 2026-04-04 | TDK                    | W   | 0.766      | 0.435        | 0.036 (0.012)    | 0.818 (0.273)    | 1 (0.766) |    10.30 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           41 |     2205 | 2026-04-02 | JUMBO TEAM             | W   | 0.752      | -            | -                | -                | 1 (0.752) |     0.54 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           40 |     2211 | 2026-04-02 | K27                    | L   | 0.751      | -            | -                | -                | -         |    -7.95 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           39 |     2220 | 2026-04-01 | JUMBO TEAM             | W   | 0.751      | -            | -                | -                | 1 (0.751) |     0.46 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           38 |     2659 | 2026-03-27 | Nemiga Gaming          | L   | 0.714      | -            | -                | -                | -         |    -9.84 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           37 |     2741 | 2026-03-25 | K27                    | W   | 0.701      | 0.384        | 0.090 (0.024)    | -                | -         |    14.87 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           36 |     2866 | 2026-03-23 | Ursa                   | W   | 0.687      | 0.384        | -                | 0.952 (0.251)    | -         |     4.02 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           35 |     2984 | 2026-03-21 | Nemiga Gaming          | W   | 0.674      | 0.384        | 0.131 (0.034)    | 0.949 (0.246)    | -         |    11.75 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           34 |     3084 | 2026-03-19 | Eternal Fire           | W   | 0.661      | -            | -                | -                | -         |     9.30 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           33 |     3180 | 2026-03-17 | EC BANGA               | W   | 0.647      | -            | -                | -                | -         |     0.19 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           32 |     3565 | 2026-03-09 | Nuclear TigeRES        | L   | 0.592      | -            | -                | -                | -         |    -8.53 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           31 |     3575 | 2026-03-09 | Virtus.pro             | L   | 0.591      | -            | -                | -                | -         |    -9.22 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           30 |     3589 | 2026-03-08 | Donstu Esports         | W   | 0.591      | -            | -                | -                | 1 (0.591) |     0.96 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           29 |     3735 | 2026-03-06 | SPARTA Esports         | L   | 0.572      | -            | -                | -                | -         |   -10.33 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           28 |     3755 | 2026-03-05 | ARCRED                 | L   | 0.568      | -            | -                | -                | -         |   -10.76 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           27 |     3784 | 2026-03-05 | Nemiga Gaming          | W   | 0.566      | 0.333        | 0.131 (0.025)    | -                | 1 (0.566) |     9.52 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           26 |     3811 | 2026-03-04 | MUERTA TEAM            | W   | 0.561      | -            | -                | -                | 1 (0.561) |     0.27 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           25 |     3837 | 2026-03-04 | TDK                    | L   | 0.559      | -            | -                | -                | -         |   -10.04 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           24 |     3855 | 2026-03-03 | Eternal premium        | W   | 0.557      | -            | -                | -                | 1 (0.557) |     0.69 | cronuss, lattykk, oz1k, Qikert, reyoz  |
|           23 |     4686 | 2026-02-15 | TNC Esport             | L   | 0.447      | -            | -                | -                | -         |   -11.55 | cronuss, HObbit, interz, lattykk, oz1k |
|           22 |     4702 | 2026-02-15 | Nuclear TigeRES        | L   | 0.446      | -            | -                | -                | -         |    -6.49 | cronuss, HObbit, interz, lattykk, oz1k |
|           21 |     4753 | 2026-02-14 | Nuclear TigeRES        | W   | 0.440      | -            | -                | -                | -         |     7.50 | cronuss, HObbit, interz, lattykk, oz1k |
|           20 |     4766 | 2026-02-14 | Rebels Gaming          | L   | 0.439      | -            | -                | -                | -         |    -8.38 | cronuss, HObbit, interz, lattykk, oz1k |
|           19 |     4772 | 2026-02-14 | K27                    | W   | 0.439      | 0.371        | 0.090 (0.015)    | -                | -         |     8.31 | cronuss, HObbit, interz, lattykk, oz1k |
|           18 |     4788 | 2026-02-14 | Oxuji Esports          | W   | 0.438      | -            | -                | -                | -         |     6.43 | cronuss, HObbit, interz, lattykk, oz1k |
|           17 |     5140 | 2026-02-03 | EYEBALLERS             | L   | 0.365      | -            | -                | -                | -         |    -4.02 | cronuss, HObbit, interz, lattykk, oz1k |
|           16 |     5170 | 2026-02-02 | Johnny Speeds          | W   | 0.359      | -            | -                | -                | -         |     5.92 | cronuss, HObbit, interz, lattykk, oz1k |
|           15 |     5205 | 2026-02-01 | Magic                  | L   | 0.351      | -            | -                | -                | -         |    -1.58 | cronuss, HObbit, interz, lattykk, oz1k |
|           14 |     5228 | 2026-01-31 | Leo Team               | W   | 0.346      | -            | -                | -                | -         |     0.75 | cronuss, HObbit, interz, lattykk, oz1k |
|           13 |     5275 | 2026-01-30 | SINNERS Esports        | L   | 0.339      | -            | -                | -                | -         |    -3.82 | cronuss, HObbit, interz, lattykk, oz1k |
|           12 |     5283 | 2026-01-29 | Tung Tung Sahur        | L   | 0.334      | -            | -                | -                | -         |   -10.29 | cronuss, HObbit, interz, lattykk, oz1k |
|           11 |     5300 | 2026-01-29 | Illwill                | W   | 0.332      | -            | -                | -                | -         |     2.53 | cronuss, HObbit, interz, lattykk, oz1k |
|           10 |     5305 | 2026-01-29 | UNiTY esports          | W   | 0.331      | -            | -                | -                | -         |     0.71 | cronuss, HObbit, interz, lattykk, oz1k |
|            9 |     5315 | 2026-01-28 | EYEBALLERS             | W   | 0.326      | 0.435        | 0.118 (0.017)    | -                | -         |     6.73 | cronuss, HObbit, interz, lattykk, oz1k |
|            8 |     5333 | 2026-01-27 | Ursa                   | W   | 0.321      | -            | -                | -                | -         |     1.37 | cronuss, HObbit, interz, lattykk, oz1k |
|            7 |     5365 | 2026-01-26 | Sangal Esports         | W   | 0.312      | -            | -                | -                | -         |     0.37 | cronuss, HObbit, interz, lattykk, oz1k |
|            6 |     5372 | 2026-01-25 | Nemiga Gaming          | L   | 0.307      | -            | -                | -                | -         |    -4.63 | cronuss, HObbit, interz, lattykk, oz1k |
|            5 |     5391 | 2026-01-25 | Persona Grata          | L   | 0.305      | -            | -                | -                | -         |    -9.01 | cronuss, HObbit, interz, lattykk, oz1k |
|            4 |     5502 | 2026-01-22 | AM Gaming              | W   | 0.287      | -            | -                | -                | -         |     3.59 | cronuss, HObbit, interz, lattykk, oz1k |
|            3 |     5575 | 2026-01-20 | GenOne                 | W   | 0.274      | -            | -                | -                | -         |     0.82 | cronuss, HObbit, interz, lattykk, oz1k |
|            2 |     5631 | 2026-01-18 | Ex-RUBY                | L   | 0.258      | -            | -                | -                | -         |    -7.10 | cronuss, HObbit, interz, lattykk, oz1k |
|            1 |     5660 | 2026-01-17 | Team Nemesis           | L   | 0.254      | -            | -                | -                | -         |    -4.45 | cronuss, HObbit, interz, lattykk, oz1k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,205.53)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-06 |      1.000 | $2,500.00      | $2,500.00       |
| 2026-05-21 |      1.000 | $22,000.00     | $22,000.00      |
| 2026-04-05 |      0.773 | $30,000.00     | $23,201.29      |
| 2026-03-27 |      0.714 | $5,000.00      | $3,569.20       |
| 2026-02-15 |      0.446 | $5,000.00      | $2,231.70       |
| 2026-01-30 |      0.341 | $5,000.00      | $1,703.34       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
