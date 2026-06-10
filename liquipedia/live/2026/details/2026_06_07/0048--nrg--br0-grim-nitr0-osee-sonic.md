### Roster Details<br />
Team Name: NRG<br />
Roster: br0, Grim, nitr0, oSee, Sonic<br />
Global Rank: [48](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_07.md)<br />
Regional Rank: [10]( ../../standings_americas_2026_06_07.md)<br />
<br />
Final Rank Value:  1277.4<br />
<br />
Final Rank Value (1277.4) = Starting Rank Value (1254.0) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.489[<sup>1</sup>](#table2)
- Bounty Collected: 0.449[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.651[<sup>2</sup>](#table1)

The average of these factors is 0.444<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1254.0
- 400 + ( ( 0.444 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 1254.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.243
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |        8 | 2026-06-05 | BIG                    | L   | 1.000      | -            | -                | -                | -         |   -10.18 | br0, Grim, nitr0, oSee, Sonic   |
|           37 |       16 | 2026-06-04 | M80                    | L   | 1.000      | -            | -                | -                | -         |   -10.31 | br0, Grim, nitr0, oSee, Sonic   |
|           36 |       34 | 2026-06-03 | FlyQuest               | W   | 1.000      | -            | -                | -                | 1 (1.000) |    11.15 | br0, Grim, nitr0, oSee, Sonic   |
|           35 |       43 | 2026-06-02 | SINNERS Esports        | W   | 1.000      | 0.143        | 0.114 (0.016)    | 0.548 (0.078)    | 1 (1.000) |    18.18 | br0, Grim, nitr0, oSee, Sonic   |
|           34 |       51 | 2026-06-02 | GamerLegion            | L   | 1.000      | -            | -                | -                | -         |    -2.16 | br0, Grim, nitr0, oSee, Sonic   |
|           33 |      538 | 2026-05-20 | MOUZ                   | L   | 1.000      | -            | -                | -                | -         |    -1.19 | daps, Grim, nitr0, oSee, Sonic  |
|           32 |      565 | 2026-05-19 | Legacy                 | L   | 1.000      | -            | -                | -                | -         |    -1.28 | daps, Grim, nitr0, oSee, Sonic  |
|           31 |      769 | 2026-05-12 | FaZe Clan              | L   | 1.000      | -            | -                | -                | -         |    -8.27 | br0, Grim, nitr0, oSee, Sonic   |
|           30 |      803 | 2026-05-11 | FUT Esports            | L   | 1.000      | -            | -                | -                | -         |    -2.64 | br0, Grim, nitr0, oSee, Sonic   |
|           29 |     1365 | 2026-04-25 | Passion UA             | L   | 0.910      | -            | -                | -                | -         |   -16.24 | br0, Grim, nitr0, oSee, Sonic   |
|           28 |     1373 | 2026-04-25 | Life's A Game          | W   | 0.908      | 0.371        | 0.031 (0.010)    | 0.637 (0.214)    | 1 (0.908) |     4.40 | br0, Grim, nitr0, oSee, Sonic   |
|           27 |     1385 | 2026-04-25 | Foxtrot Esports        | W   | 0.907      | -            | -                | -                | 1 (0.907) |     0.19 | br0, Grim, nitr0, oSee, Sonic   |
|           26 |     1861 | 2026-04-07 | Legacy                 | L   | 0.784      | -            | -                | -                | -         |    -1.02 | br0, Grim, nitr0, oSee, Sonic   |
|           25 |     1889 | 2026-04-06 | EYEBALLERS             | L   | 0.778      | -            | -                | -                | -         |    -9.94 | br0, Grim, nitr0, oSee, Sonic   |
|           24 |     1955 | 2026-04-05 | FUT Esports            | L   | 0.771      | -            | -                | -                | -         |    -2.82 | br0, Grim, nitr0, oSee, Sonic   |
|           23 |     2019 | 2026-04-04 | Team Voca              | W   | 0.765      | 1.000        | 0.050 (0.038)    | 0.617 (0.472)    | 1 (0.765) |    10.91 | br0, Grim, nitr0, oSee, Sonic   |
|           22 |     2940 | 2026-03-22 | FURIA                  | L   | 0.680      | -            | -                | -                | -         |    -2.05 | br0, Grim, nitr0, oSee, Sonic   |
|           21 |     3069 | 2026-03-20 | B8                     | W   | 0.665      | 1.000        | 0.319 (0.212)    | 0.548 (0.364)    | 1 (0.665) |    18.13 | br0, Grim, nitr0, oSee, Sonic   |
|           20 |     3158 | 2026-03-18 | Team Falcons           | L   | 0.652      | -            | -                | -                | -         |    -0.42 | br0, Grim, nitr0, oSee, Sonic   |
|           19 |     3860 | 2026-03-03 | Ninjas in Pyjamas      | L   | 0.555      | -            | -                | -                | -         |    -5.95 | br0, Grim, nitr0, oSee, Sonic   |
|           18 |     3935 | 2026-03-02 | Monte                  | L   | 0.545      | -            | -                | -                | -         |    -4.90 | br0, Grim, nitr0, oSee, Sonic   |
|           17 |     3978 | 2026-03-01 | HEROIC                 | L   | 0.538      | -            | -                | -                | -         |    -5.11 | br0, Grim, nitr0, oSee, Sonic   |
|           16 |     4983 | 2026-02-08 | Passion UA             | W   | 0.400      | 0.769        | 0.030 (0.009)    | 0.390 (0.120)    | -         |     5.74 | br0, Jeorge, nitr0, oSee, Sonic |
|           15 |     5013 | 2026-02-07 | Team Voca              | W   | 0.394      | 0.769        | 0.050 (0.015)    | 0.617 (0.187)    | -         |     5.07 | br0, Jeorge, nitr0, oSee, Sonic |
|           14 |     5050 | 2026-02-06 | Fisher College         | W   | 0.387      | 0.769        | 0.048 (0.014)    | 0.454 (0.135)    | -         |     4.17 | br0, Jeorge, nitr0, oSee, Sonic |
|           13 |     5161 | 2026-02-02 | Team Falcons           | L   | 0.360      | -            | -                | -                | -         |    -0.22 | br0, Jeorge, nitr0, oSee, Sonic |
|           12 |     5198 | 2026-02-01 | MOUZ                   | L   | 0.352      | -            | -                | -                | -         |    -0.28 | br0, Jeorge, nitr0, oSee, Sonic |
|           11 |     5270 | 2026-01-30 | Astralis               | W   | 0.339      | 0.783        | 0.621 (0.165)    | 0.367 (0.098)    | 1 (0.339) |     9.76 | br0, Jeorge, nitr0, oSee, Sonic |
|           10 |     5318 | 2026-01-28 | B8                     | W   | 0.326      | 0.783        | 0.319 (0.081)    | 0.548 (0.140)    | 1 (0.326) |     9.24 | br0, Jeorge, nitr0, oSee, Sonic |
|            9 |     5834 | 2026-01-11 | M80                    | L   | 0.216      | -            | -                | -                | -         |    -2.52 | br0, Jeorge, nitr0, oSee, Sonic |
|            8 |     5835 | 2026-01-11 | Marsborne              | W   | 0.215      | -            | -                | -                | 1 (0.215) |     1.41 | br0, Jeorge, nitr0, oSee, Sonic |
|            7 |     5847 | 2026-01-10 | Team Voca              | W   | 0.207      | 0.396        | -                | 0.617 (0.051)    | 1 (0.207) |     2.92 | br0, Jeorge, nitr0, oSee, Sonic |
|            6 |     5856 | 2026-01-09 | Outfit 49              | W   | 0.202      | -            | -                | -                | -         |     0.17 | br0, Jeorge, nitr0, oSee, Sonic |
|            5 |     5875 | 2026-01-04 | 9INE                   | W   | 0.169      | -            | -                | -                | -         |     0.62 | br0, Jeorge, nitr0, oSee, Sonic |
|            4 |     5881 | 2026-01-04 | GamerLegion            | W   | 0.167      | 0.323        | 0.541 (0.029)    | -                | -         |     4.97 | br0, Jeorge, nitr0, oSee, Sonic |
|            3 |     5892 | 2026-01-04 | Team Voca              | W   | 0.166      | -            | -                | -                | -         |     2.42 | br0, Jeorge, nitr0, oSee, Sonic |
|            2 |     5931 | 2026-01-03 | Marsborne              | W   | 0.160      | -            | -                | -                | -         |     1.14 | br0, Jeorge, nitr0, oSee, Sonic |
|            1 |     5937 | 2026-01-03 | EMPIRE (American team) | W   | 0.160      | -            | -                | -                | -         |     0.28 | br0, Jeorge, nitr0, oSee, Sonic |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55,862.02)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.09) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-23 |      1.000 | $5,000.00      | $5,000.00       |
| 2026-05-17 |      1.000 | $4,000.00      | $4,000.00       |
| 2026-04-11 |      0.813 | $18,750.00     | $15,238.66      |
| 2026-03-29 |      0.725 | $32,500.00     | $23,565.41      |
| 2026-03-05 |      0.567 | $3,000.00      | $1,701.45       |
| 2026-02-08 |      0.400 | $10,000.00     | $3,999.51       |
| 2026-01-11 |      0.216 | $7,000.00      | $1,510.49       |
| 2026-01-04 |      0.169 | $5,000.00      | $846.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
