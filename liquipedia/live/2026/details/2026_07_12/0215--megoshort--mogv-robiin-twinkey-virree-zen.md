### Roster Details<br />
Team Name: Megoshort<br />
Roster: mogv, robiin, Twinkey, virree, zen<br />
Global Rank: [215](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [145]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  712.6<br />
<br />
Final Rank Value (712.6) = Starting Rank Value (743.6) + Head To Head Adjustments (-31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.242[<sup>1</sup>](#table2)
- Bounty Collected: 0.277[<sup>2</sup>](#table1)
- Opponent Network: 0.123[<sup>2</sup>](#table1)
- LAN Wins: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.181<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 743.6
- 400 + ( ( 0.181 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 743.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.238
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |      205 | 2026-06-29 | SAW Youngsters            | L   | 1.000      | -            | -                | -                | -         |   -16.29 | mogv, robiin, Twinkey, virree, zen          |
|           52 |     1064 | 2026-05-24 | GenOne                    | L   | 0.871      | -            | -                | -                | -         |    -7.24 | mogv, robiin, Twinkey, virree, zen          |
|           51 |     1086 | 2026-05-24 | ASTRAL Esports            | L   | 0.870      | -            | -                | -                | -         |    -5.77 | mogv, robiin, Twinkey, virree, zen          |
|           50 |     1123 | 2026-05-23 | ALGO Esports              | L   | 0.864      | -            | -                | -                | -         |   -12.56 | mogv, robiin, Twinkey, virree, zen          |
|           49 |     1187 | 2026-05-22 | Fnatic                    | L   | 0.856      | -            | -                | -                | -         |    -3.58 | mogv, robiin, Twinkey, virree, zen          |
|           48 |     1230 | 2026-05-21 | Esport Academy Copenhagen | W   | 0.850      | 0.435        | 0.015 (0.006)    | 0.675 (0.249)    | 0 (0.000) |    23.49 | mogv, robiin, Twinkey, virree, zen          |
|           47 |     1312 | 2026-05-18 | AM Gaming                 | L   | 0.830      | -            | -                | -                | -         |    -3.04 | mogv, robiin, Twinkey, virree, zen          |
|           46 |     1689 | 2026-05-04 | CYBERSHOKE Esports        | L   | 0.736      | -            | -                | -                | -         |    -3.30 | mogv, robiin, Twinkey, virree, zen          |
|           45 |     1706 | 2026-05-03 | Los kogutos               | W   | 0.732      | 0.435        | 0.019 (0.006)    | 0.940 (0.299)    | 0 (0.000) |    15.13 | mogv, robiin, Twinkey, virree, zen          |
|           44 |     1872 | 2026-04-30 | AM Gaming                 | L   | 0.709      | -            | -                | -                | -         |    -2.37 | mogv, robiin, Twinkey, virree, zen          |
|           43 |     1929 | 2026-04-28 | SPARTA Esports            | L   | 0.699      | -            | -                | -                | -         |    -2.73 | mogv, robiin, Twinkey, virree, zen          |
|           42 |     2467 | 2026-04-10 | Ursa                      | L   | 0.578      | -            | -                | -                | -         |    -4.44 | aidKiT, mogv, REDSTAR, robiin, Twinkey      |
|           41 |     2497 | 2026-04-09 | Lavked                    | L   | 0.571      | -            | -                | -                | -         |    -5.10 | aidKiT, mogv, REDSTAR, robiin, Twinkey      |
|           40 |     2598 | 2026-04-06 | OMEGA                     | L   | 0.550      | -            | -                | -                | -         |    -3.86 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           39 |     2604 | 2026-04-06 | Bebop                     | L   | 0.549      | -            | -                | -                | -         |    -6.19 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           38 |     2724 | 2026-04-04 | Los kogutos               | W   | 0.536      | 0.435        | 0.019 (0.004)    | 0.940 (0.219)    | 0 (0.000) |    12.01 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           37 |     2893 | 2026-04-02 | ASTRAL Esports            | L   | 0.524      | -            | -                | -                | -         |    -2.42 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           36 |     2914 | 2026-04-02 | Ursa                      | L   | 0.523      | -            | -                | -                | -         |    -3.96 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           35 |     3079 | 2026-03-31 | Ursa                      | L   | 0.511      | -            | -                | -                | -         |    -3.85 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           34 |     3141 | 2026-03-30 | Leo Team                  | L   | 0.505      | -            | -                | -                | -         |    -7.37 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           33 |     3249 | 2026-03-29 | Hypewrld                  | W   | 0.496      | 0.435        | -                | 0.141 (0.030)    | 0 (0.000) |     6.93 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           32 |     3338 | 2026-03-28 | WW TEAM                   | W   | 0.490      | 0.371        | 0.015 (0.003)    | 0.449 (0.082)    | -         |    12.82 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           31 |     3425 | 2026-03-26 | OMEGA                     | W   | 0.477      | 0.435        | 0.016 (0.003)    | 0.457 (0.095)    | -         |    12.38 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           30 |     3500 | 2026-03-24 | PsychoFace                | L   | 0.465      | -            | -                | -                | -         |    -2.76 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           29 |     3542 | 2026-03-24 | Persona Grata             | L   | 0.463      | -            | -                | -                | -         |    -9.88 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           28 |     3639 | 2026-03-22 | Cirahvi                   | W   | 0.452      | 0.435        | 0.004 (0.001)    | 0.373 (0.073)    | -         |     7.05 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           27 |     3640 | 2026-03-22 | Rebels Gaming             | L   | 0.452      | -            | -                | -                | -         |    -2.08 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           26 |     3748 | 2026-03-20 | PsychoFace                | L   | 0.438      | -            | -                | -                | -         |    -2.83 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           25 |     3842 | 2026-03-18 | BIG Academy               | L   | 0.425      | -            | -                | -                | -         |    -8.66 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           24 |     3903 | 2026-03-17 | Ex-RUBY                   | L   | 0.417      | -            | -                | -                | -         |    -2.92 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           23 |     3916 | 2026-03-17 | ALGO Esports              | L   | 0.416      | -            | -                | -                | -         |    -6.45 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           22 |     3949 | 2026-03-16 | Fingers Crossed Female    | W   | 0.411      | -            | -                | -                | -         |     3.56 | aidKiT, mogv, robiin, titulus, Twinkey      |
|           21 |     4063 | 2026-03-13 | Yngods                    | L   | 0.392      | -            | -                | -                | -         |    -7.88 | mogv, nawwk, robiin, titulus, Twinkey       |
|           20 |     4128 | 2026-03-12 | MOUZ NXT                  | L   | 0.384      | -            | -                | -                | -         |    -3.16 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           19 |     4167 | 2026-03-11 | Fire Flux Esports         | W   | 0.378      | 0.143        | 0.014 (0.001)    | -                | -         |     4.90 | mogv, nawwk, robiin, titulus, Twinkey       |
|           18 |     4253 | 2026-03-09 | Ex-Zero Tenacity          | W   | 0.365      | 0.384        | 0.002 (0.000)    | 0.866 (0.122)    | -         |     7.02 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           17 |     4265 | 2026-03-09 | Millennium Esports        | W   | 0.364      | -            | -                | -                | -         |     1.44 | mogv, nawwk, robiin, titulus, Twinkey       |
|           16 |     4320 | 2026-03-08 | Lilmix                    | L   | 0.359      | -            | -                | -                | -         |    -6.39 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           15 |     4380 | 2026-03-07 | Lilmix                    | W   | 0.352      | 0.303        | 0.002 (0.000)    | -                | 1 (0.352) |     4.83 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           14 |     4398 | 2026-03-07 | Wave Esports              | W   | 0.351      | -            | -                | -                | 1 (0.351) |     3.95 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           13 |     4453 | 2026-03-06 | Eternal Fire              | L   | 0.343      | -            | -                | -                | -         |    -1.73 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           12 |     4471 | 2026-03-05 | Aurora Young Blud         | L   | 0.338      | -            | -                | -                | -         |    -7.36 | mogv, nawwk, robiin, titulus, Twinkey       |
|           11 |     4488 | 2026-03-05 | Cirahvi                   | W   | 0.338      | 0.384        | 0.004 (0.001)    | 0.373 (0.048)    | -         |     4.75 | b0denmaster, mogv, robiin, titulus, Twinkey |
|           10 |     4587 | 2026-03-03 | FUZOS                     | W   | 0.324      | 0.384        | -                | 0.127 (0.016)    | -         |     4.18 | b0denmaster, mogv, robiin, titulus, Twinkey |
|            9 |     6369 | 2026-01-17 | WOPA Esport               | L   | 0.025      | -            | -                | -                | -         |    -0.05 | mogv, nawwk, robiin, titulus, Twinkey       |
|            8 |     6387 | 2026-01-17 | Echo                      | L   | 0.023      | -            | -                | -                | -         |    -0.03 | mogv, nawwk, robiin, titulus, Twinkey       |
|            7 |     6396 | 2026-01-17 | Prestige Esport           | W   | 0.023      | -            | -                | -                | 1 (0.023) |     0.22 | mogv, nawwk, robiin, titulus, Twinkey       |
|            6 |     6409 | 2026-01-16 | SemperFi Esports          | W   | 0.019      | -            | -                | -                | 1 (0.019) |     0.45 | mogv, nawwk, robiin, titulus, Twinkey       |
|            5 |     6428 | 2026-01-16 | HEROIC Academy            | L   | 0.018      | -            | -                | -                | -         |    -0.23 | mogv, nawwk, robiin, titulus, Twinkey       |
|            4 |     6435 | 2026-01-16 | Hemmaplan                 | W   | 0.018      | -            | -                | -                | 1 (0.018) |     0.07 | mogv, nawwk, robiin, titulus, Twinkey       |
|            3 |     6441 | 2026-01-16 | Echo                      | L   | 0.017      | -            | -                | -                | -         |    -0.02 | mogv, nawwk, robiin, titulus, Twinkey       |
|            2 |     6450 | 2026-01-16 | Sashi Esport              | L   | 0.017      | -            | -                | -                | -         |    -0.06 | mogv, nawwk, robiin, titulus, Twinkey       |
|            1 |     6453 | 2026-01-16 | SemperFi Esports          | W   | 0.017      | -            | -                | -                | 1 (0.017) |     0.39 | mogv, nawwk, robiin, titulus, Twinkey       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($393.49)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-08 |      0.359 | $1,000.00      | $358.61         |
| 2026-01-17 |      0.026 | $1,355.00      | $34.88          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
