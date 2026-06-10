### Roster Details<br />
Team Name: Sashi Esport<br />
Roster: acoR, Beccie, Cabbi, MistR, Zyphon<br />
Global Rank: [62](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [43]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  1183.9<br />
<br />
Final Rank Value (1183.9) = Starting Rank Value (1169.4) + Head To Head Adjustments (14.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.319[<sup>1</sup>](#table2)
- Bounty Collected: 0.343[<sup>2</sup>](#table1)
- Opponent Network: 0.246[<sup>2</sup>](#table1)
- LAN Wins: 0.691[<sup>2</sup>](#table1)

The average of these factors is 0.400<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1169.4
- 400 + ( ( 0.400 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1169.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.484
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      404 | 2026-05-23 | Walczaki                  | L   | 1.000      | -            | -                | -                | -         |   -11.31 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           51 |      451 | 2026-05-22 | EYEBALLERS                | L   | 1.000      | -            | -                | -                | -         |    -9.68 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           50 |      583 | 2026-05-19 | HOTU                      | L   | 1.000      | -            | -                | -                | -         |    -8.77 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           49 |      689 | 2026-05-15 | Oxuji Esports             | W   | 1.000      | 0.435        | 0.007 (0.003)    | 0.759 (0.330)    | -         |    12.86 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           48 |      771 | 2026-05-12 | TDK                       | W   | 1.000      | 0.435        | 0.036 (0.016)    | 0.818 (0.356)    | -         |    15.72 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           47 |      857 | 2026-05-10 | Ex-RUBY                   | L   | 1.000      | -            | -                | -                | -         |   -20.08 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           46 |      902 | 2026-05-08 | Lavked                    | W   | 0.994      | 0.435        | 0.018 (0.008)    | 0.979 (0.423)    | -         |    10.28 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           45 |     1559 | 2026-04-20 | SINNERS Esports           | W   | 0.873      | 0.362        | 0.114 (0.036)    | 0.548 (0.173)    | -         |    21.10 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           44 |     1648 | 2026-04-15 | TNC Esport                | W   | 0.840      | 0.362        | 0.021 (0.006)    | 1.000 (0.304)    | -         |     6.72 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           43 |     1705 | 2026-04-12 | Fnatic                    | W   | 0.820      | 0.362        | 0.015 (0.004)    | 0.628 (0.187)    | -         |    10.02 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           42 |     2275 | 2026-04-01 | Passion UA                | L   | 0.746      | -            | -                | -                | -         |    -8.42 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           41 |     2332 | 2026-03-31 | Team Liquid               | W   | 0.741      | 0.354        | 0.127 (0.033)    | -                | 1 (0.741) |    16.96 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           40 |     2362 | 2026-03-31 | Eternal Fire              | W   | 0.740      | 0.354        | -                | 0.741 (0.194)    | 1 (0.740) |    13.43 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           39 |     2391 | 2026-03-31 | Aurora Gaming             | L   | 0.739      | -            | -                | -                | -         |    -0.63 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           38 |     2447 | 2026-03-30 | Fnatic                    | W   | 0.733      | 0.354        | 0.015 (0.004)    | 0.628 (0.163)    | 1 (0.733) |     9.15 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           37 |     2532 | 2026-03-29 | HAVU                      | W   | 0.726      | -            | -                | -                | 1 (0.726) |     5.53 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           36 |     2540 | 2026-03-29 | Strael-Bora               | W   | 0.725      | -            | -                | -                | 1 (0.725) |     1.65 | acoR, Beccie, Cabbi, Fessor, MistR  |
|           35 |     3277 | 2026-03-15 | Looking for Org           | L   | 0.633      | -            | -                | -                | -         |    -7.52 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           34 |     3288 | 2026-03-15 | Esport Academy Copenhagen | W   | 0.632      | 0.356        | -                | 0.725 (0.163)    | 1 (0.632) |    11.39 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           33 |     3312 | 2026-03-14 | MASONIC                   | W   | 0.627      | -            | -                | -                | 1 (0.627) |     6.90 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           32 |     3324 | 2026-03-14 | Prestige Esport           | W   | 0.626      | -            | -                | -                | 1 (0.626) |     1.61 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           31 |     3330 | 2026-03-14 | MASONIC                   | L   | 0.625      | -            | -                | -                | -         |   -12.96 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           30 |     3505 | 2026-03-10 | Team Nemesis              | L   | 0.600      | -            | -                | -                | -         |    -6.29 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           29 |     3582 | 2026-03-09 | K27                       | L   | 0.591      | -            | -                | -                | -         |    -4.25 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           28 |     3598 | 2026-03-08 | Johnny Speeds             | L   | 0.588      | -            | -                | -                | -         |    -6.74 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           27 |     3603 | 2026-03-08 | Evo Novo                  | W   | 0.588      | -            | -                | -                | 1 (0.588) |     0.29 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           26 |     3623 | 2026-03-08 | MASONIC                   | W   | 0.587      | -            | -                | -                | 1 (0.587) |     6.23 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           25 |     3631 | 2026-03-08 | 100 Thieves               | L   | 0.586      | -            | -                | -                | -         |    -3.68 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           24 |     3648 | 2026-03-08 | Esport Academy Copenhagen | L   | 0.586      | -            | -                | -                | -         |    -8.42 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           23 |     3701 | 2026-03-07 | Oxuji Esports             | W   | 0.579      | 0.371        | -                | 0.759 (0.163)    | -         |    11.20 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           22 |     3847 | 2026-03-04 | ENCE                      | W   | 0.559      | -            | -                | -                | -         |     3.27 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           21 |     3965 | 2026-03-01 | Lazer Cats                | L   | 0.540      | -            | -                | -                | -         |   -13.62 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           20 |     3996 | 2026-02-28 | OMEGA                     | W   | 0.534      | 0.384        | 0.015 (0.003)    | -                | -         |     8.61 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           19 |     4069 | 2026-02-27 | VP.Prodigy                | W   | 0.525      | -            | -                | -                | -         |     1.18 | acoR, Beccie, Cabbi, MistR, Mol011  |
|           18 |     4265 | 2026-02-23 | Phantom Esports           | L   | 0.499      | -            | -                | -                | -         |    -8.14 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           17 |     4274 | 2026-02-23 | GamerLegion               | L   | 0.498      | -            | -                | -                | -         |    -0.61 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           16 |     4290 | 2026-02-22 | Illwill                   | L   | 0.494      | -            | -                | -                | -         |    -7.93 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           15 |     4300 | 2026-02-22 | MASONIC                   | W   | 0.494      | -            | -                | -                | -         |     5.61 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           14 |     4308 | 2026-02-22 | 9INE                      | L   | 0.494      | -            | -                | -                | -         |   -11.97 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           13 |     4316 | 2026-02-22 | BC.Game Esports           | W   | 0.493      | 0.341        | 0.046 (0.008)    | -                | -         |     6.51 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           12 |     4332 | 2026-02-22 | BOSS                      | W   | 0.493      | -            | -                | -                | -         |     2.73 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           11 |     4868 | 2026-02-12 | ECSTATIC                  | L   | 0.426      | -            | -                | -                | -         |    -7.55 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|           10 |     4875 | 2026-02-12 | KOLESIE                   | L   | 0.425      | -            | -                | -                | -         |    -6.15 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            9 |     5127 | 2026-02-03 | AM Gaming                 | L   | 0.366      | -            | -                | -                | -         |    -5.58 | Beccie, Cabbi, MistR, n1Xen, Zyphon |
|            8 |     5201 | 2026-02-01 | DragonClaw                | L   | 0.352      | -            | -                | -                | -         |    -8.59 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            7 |     5278 | 2026-01-30 | MASONIC                   | W   | 0.338      | -            | -                | -                | -         |     4.39 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            6 |     5687 | 2026-01-17 | Johnny Speeds             | L   | 0.251      | -            | -                | -                | -         |    -2.50 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            5 |     5706 | 2026-01-16 | SemperFi Esports          | W   | 0.247      | -            | -                | -                | -         |     2.70 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            4 |     5718 | 2026-01-16 | Looking for Org           | L   | 0.247      | -            | -                | -                | -         |    -3.02 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            3 |     5731 | 2026-01-16 | HEROIC Academy            | W   | 0.246      | -            | -                | -                | -         |     1.46 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            2 |     5739 | 2026-01-16 | Megoshort                 | W   | 0.246      | -            | -                | -                | -         |     1.24 | acoR, Beccie, Cabbi, MistR, Zyphon  |
|            1 |     5743 | 2026-01-16 | Hemmaplan                 | W   | 0.245      | -            | -                | -                | -         |     0.10 | acoR, Beccie, Cabbi, MistR, Zyphon  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,559.06)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-24 |      1.000 | $1,160.00      | $1,160.00       |
| 2026-03-15 |      0.633 | $3,134.00      | $1,983.62       |
| 2026-03-11 |      0.605 | $1,000.00      | $604.67         |
| 2026-03-01 |      0.541 | $1,500.00      | $810.76         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
