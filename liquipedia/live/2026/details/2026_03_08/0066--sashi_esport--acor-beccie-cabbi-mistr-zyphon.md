### Roster Details<br />
Team Name: Sashi Esport<br />
Roster: acoR, Beccie, Cabbi, MistR, Zyphon<br />
Global Rank: [66](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_08.md)<br />
Regional Rank: [48]( ../../standings_europe_2026_03_08.md)<br />
<br />
Final Rank Value:  1119.5<br />
<br />
Final Rank Value (1119.5) = Starting Rank Value (1209.6) + Head To Head Adjustments (-90.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.355[<sup>1</sup>](#table2)
- Bounty Collected: 0.358[<sup>2</sup>](#table1)
- Opponent Network: 0.174[<sup>2</sup>](#table1)
- LAN Wins: 0.800[<sup>2</sup>](#table1)

The average of these factors is 0.422<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1209.6
- 400 + ( ( 0.422 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 1209.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.569
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           64 |      166 | 2026-03-01 | Lazer Cats             | L   | 1.000      | -            | -                | -                | -         |   -19.63 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           63 |      189 | 2026-02-28 | OMEGA                  | W   | 1.000      | 0.384        | 0.036 (0.014)    | 0.630 (0.242)    | -         |    15.21 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           62 |      259 | 2026-02-27 | VP.Prodigy             | W   | 1.000      | 0.384        | -                | 0.539 (0.207)    | -         |     8.07 | acoR, Beccie, Cabbi, MistR, Mol011    |
|           61 |      441 | 2026-02-23 | Phantom Esports        | L   | 1.000      | -            | -                | -                | -         |   -17.91 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           60 |      448 | 2026-02-23 | GamerLegion            | L   | 1.000      | -            | -                | -                | -         |    -3.24 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           59 |      463 | 2026-02-22 | Illwill                | L   | 1.000      | -            | -                | -                | -         |    -8.21 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           58 |      474 | 2026-02-22 | MASONIC                | W   | 1.000      | 0.341        | -                | 0.558 (0.191)    | 1 (1.000) |     7.18 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           57 |      481 | 2026-02-22 | 9INE                   | L   | 1.000      | -            | -                | -                | -         |   -11.18 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           56 |      488 | 2026-02-22 | BC.Game Esports        | W   | 1.000      | 0.341        | 0.220 (0.075)    | 0.479 (0.164)    | 1 (1.000) |    25.53 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           55 |      504 | 2026-02-22 | BOSS                   | W   | 1.000      | 0.341        | 0.018 (0.006)    | 0.386 (0.132)    | 1 (1.000) |     4.76 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           54 |      994 | 2026-02-12 | ECSTATIC               | L   | 1.000      | -            | -                | -                | -         |    -8.02 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           53 |     1001 | 2026-02-12 | KOLESIE                | L   | 1.000      | -            | -                | -                | -         |   -12.35 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           52 |     1316 | 2026-02-01 | Oramond                | L   | 0.964      | -            | -                | -                | -         |   -14.95 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           51 |     1391 | 2026-01-30 | MASONIC                | W   | 0.950      | 0.371        | -                | 0.558 (0.197)    | -         |     6.79 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           50 |     1788 | 2026-01-17 | Johnny Speeds          | L   | 0.863      | -            | -                | -                | -         |   -14.47 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           49 |     1806 | 2026-01-16 | SemperFi Esports       | W   | 0.859      | 0.337        | -                | 0.268 (0.078)    | 1 (0.859) |     5.16 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           48 |     1817 | 2026-01-16 | Tricked Esport         | L   | 0.859      | -            | -                | -                | -         |   -14.47 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           47 |     1830 | 2026-01-16 | HEROIC Academy         | W   | 0.858      | -            | -                | -                | 1 (0.858) |     3.73 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           46 |     1838 | 2026-01-16 | Megoshort              | W   | 0.858      | -            | -                | -                | 1 (0.858) |     7.12 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           45 |     1845 | 2026-01-16 | Hemmaplan              | W   | 0.857      | -            | -                | -                | 1 (0.857) |     0.38 | acoR, Beccie, Cabbi, MistR, Zyphon    |
|           44 |     2246 | 2025-12-10 | SIXSEVEN               | L   | 0.612      | -            | -                | -                | -         |   -15.26 | Beccie, Cabbi, kristou, Lucky, MistR  |
|           43 |     2270 | 2025-12-08 | Ex-RUBY                | W   | 0.599      | 0.435        | 0.031 (0.008)    | 1.000 (0.260)    | -         |     4.32 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           42 |     2319 | 2025-12-06 | Sangal Esports         | L   | 0.585      | -            | -                | -                | -         |   -12.61 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           41 |     2353 | 2025-12-05 | SPARTA Esports         | L   | 0.577      | -            | -                | -                | -         |   -14.66 | Beccie, Cabbi, kristou, MistR, Zyphon |
|           40 |     2386 | 2025-12-03 | FORZE Reload           | W   | 0.566      | -            | -                | -                | -         |     1.04 | Beccie, Cabbi, kristou, MistR, Zyphon |
|           39 |     2473 | 2025-11-29 | Inner Circle Esports   | L   | 0.539      | -            | -                | -                | -         |   -10.65 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           38 |     2490 | 2025-11-29 | Team Nemesis           | W   | 0.538      | 0.333        | 0.044 (0.008)    | 0.849 (0.152)    | 1 (0.538) |    10.25 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           37 |     2625 | 2025-11-23 | AMKAL ESPORTS          | W   | 0.498      | -            | -                | -                | 1 (0.498) |     1.01 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           36 |     2655 | 2025-11-22 | FUZOS                  | W   | 0.491      | -            | -                | -                | 1 (0.491) |     2.58 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           35 |     3044 | 2025-11-08 | BetBoom Team           | L   | 0.398      | -            | -                | -                | -         |    -2.95 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           34 |     3053 | 2025-11-08 | Alliance               | W   | 0.397      | 0.336        | 0.130 (0.017)    | 0.882 (0.117)    | -         |     8.27 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           33 |     3070 | 2025-11-07 | BC.Game Esports        | W   | 0.393      | -            | -                | -                | -         |     1.30 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           32 |     3086 | 2025-11-07 | BetBoom Team           | L   | 0.392      | -            | -                | -                | -         |    -2.88 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           31 |     3106 | 2025-11-07 | 777 Esports            | W   | 0.392      | -            | -                | -                | -         |     0.35 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           30 |     3114 | 2025-11-07 | Boys N Da HUD          | W   | 0.391      | -            | -                | -                | -         |     0.14 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           29 |     3123 | 2025-11-07 | Betclic Apogee Esports | W   | 0.391      | -            | -                | -                | -         |     6.76 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           28 |     3141 | 2025-11-07 | Lilmix                 | W   | 0.391      | -            | -                | -                | -         |     3.41 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           27 |     3364 | 2025-10-30 | Team Spirit Academy    | L   | 0.337      | -            | -                | -                | -         |    -9.80 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           26 |     3393 | 2025-10-28 | KONO.ECF               | W   | 0.326      | -            | -                | -                | -         |     1.26 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           25 |     3500 | 2025-10-26 | Sangal Esports         | L   | 0.312      | -            | -                | -                | -         |    -7.12 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           24 |     3624 | 2025-10-24 | SPARTA Esports         | W   | 0.296      | -            | -                | -                | -         |     1.17 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           23 |     3705 | 2025-10-21 | Fire Flux Esports      | W   | 0.276      | -            | -                | -                | -         |     0.75 | Beccie, Cabbi, MistR, smooya, Zyphon  |
|           22 |     3918 | 2025-10-11 | RUBY                   | L   | 0.212      | -            | -                | -                | -         |    -6.06 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           21 |     3930 | 2025-10-11 | Johnny Speeds          | L   | 0.211      | -            | -                | -                | -         |    -3.10 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           20 |     3956 | 2025-10-10 | Partizan Esports       | L   | 0.206      | -            | -                | -                | -         |    -6.08 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           19 |     3960 | 2025-10-10 | CYBERSHOKE Esports     | W   | 0.205      | 0.435        | 0.043 (0.004)    | -                | -         |     3.13 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           18 |     3999 | 2025-10-09 | SPARTA Esports         | W   | 0.199      | -            | -                | -                | -         |     0.69 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           17 |     4090 | 2025-10-07 | Oramond                | W   | 0.186      | 0.384        | 0.105 (0.007)    | -                | -         |     1.20 | Beccie, Cabbi, MistR, rosen, Zyphon   |
|           16 |     4102 | 2025-10-07 | Monte                  | L   | 0.185      | -            | -                | -                | -         |    -1.65 | Beccie, Bl4zE, Cabbi, MistR, Zyphon   |
|           15 |     4162 | 2025-10-06 | Ex-Fingers Crossed     | L   | 0.178      | -            | -                | -                | -         |    -4.59 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           14 |     4211 | 2025-10-05 | NOVAQ                  | L   | 0.172      | -            | -                | -                | -         |    -3.27 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           13 |     4421 | 2025-09-30 | Friendly Campers       | L   | 0.137      | -            | -                | -                | -         |    -2.76 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           12 |     4493 | 2025-09-28 | SINNERS Esports        | W   | 0.124      | 0.435        | 0.251 (0.014)    | -                | -         |     2.91 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           11 |     4587 | 2025-09-26 | FORZE Reload           | W   | 0.111      | -            | -                | -                | -         |     0.33 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|           10 |     4651 | 2025-09-25 | HOTU                   | L   | 0.103      | -            | -                | -                | -         |    -0.79 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            9 |     4688 | 2025-09-23 | FORZE Reload           | W   | 0.091      | -            | -                | -                | -         |     0.27 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            8 |     4694 | 2025-09-23 | SINNERS Esports        | W   | 0.090      | 0.371        | 0.251 (0.008)    | -                | -         |     2.14 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            7 |     4734 | 2025-09-21 | Betclic Apogee Esports | W   | 0.077      | -            | -                | -                | -         |     0.09 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            6 |     4763 | 2025-09-20 | BetBoom Team           | L   | 0.071      | -            | -                | -                | -         |    -0.54 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            5 |     4778 | 2025-09-19 | HOTU                   | W   | 0.066      | -            | -                | -                | -         |     1.58 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            4 |     4835 | 2025-09-18 | Metizport              | W   | 0.056      | -            | -                | -                | -         |     0.66 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            3 |     4990 | 2025-09-13 | Nexus Gaming           | L   | 0.026      | -            | -                | -                | -         |    -0.53 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            2 |     5037 | 2025-09-12 | JiJieHao               | W   | 0.019      | -            | -                | -                | -         |     0.01 | Beccie, Cabbi, Lucky, MistR, Zyphon   |
|            1 |     5143 | 2025-09-10 | AaB esport             | W   | 0.006      | -            | -                | -                | -         |     0.01 | Beccie, Cabbi, Lucky, MistR, Zyphon   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,715.47)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-03-01 |      1.000 | $1,500.00      | $1,500.00       |
| 2025-11-23 |      0.498 | $2,590.96      | $1,290.50       |
| 2025-11-08 |      0.400 | $1,311.67      | $524.06         |
| 2025-10-12 |      0.219 | $2,000.00      | $437.27         |
| 2025-10-01 |      0.145 | $2,000.00      | $290.97         |
| 2025-09-25 |      0.103 | $5,000.00      | $515.39         |
| 2025-09-21 |      0.079 | $2,000.00      | $157.27         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
