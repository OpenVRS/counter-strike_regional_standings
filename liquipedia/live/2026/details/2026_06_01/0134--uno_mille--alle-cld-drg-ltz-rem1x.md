### Roster Details<br />
Team Name: UNO MILLE<br />
Roster: ALLE, cLd, drg, Ltz, rem1x<br />
Global Rank: [134](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_06_01.md)<br />
Regional Rank: [31]( ../../standings_americas_2026_06_01.md)<br />
<br />
Final Rank Value:  931.0<br />
<br />
Final Rank Value (931.0) = Starting Rank Value (800.0) + Head To Head Adjustments (131.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.175[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.210<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 800.0
- 400 + ( ( 0.210 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 800.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.487
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           27 |       37 | 2026-05-30 | Yawara E-Sports        | L   | 1.000      | -            | -                | -                | -         |   -12.36 | ALLE, cLd, drg, pancc, rem1x |
|           26 |      255 | 2026-05-24 | LargadosyPelados       | L   | 1.000      | -            | -                | -                | -         |    -6.93 | ALLE, cLd, drg, Ltz, rem1x   |
|           25 |      307 | 2026-05-23 | Galorys                | W   | 1.000      | 0.354        | 0.014 (0.005)    | 0.470 (0.167)    | 0 (0.000) |    21.98 | ALLE, cLd, drg, Ltz, rem1x   |
|           24 |      333 | 2026-05-22 | ALKA GAMING            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     6.87 | ALLE, cLd, drg, Ltz, rem1x   |
|           23 |      376 | 2026-05-21 | Fake do Biru           | L   | 1.000      | -            | -                | -                | -         |    -9.40 | ALLE, cLd, drg, Ltz, rem1x   |
|           22 |      480 | 2026-05-18 | Vexa E-Sports          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.04 | ALLE, cLd, drg, Ltz, rem1x   |
|           21 |      498 | 2026-05-17 | Guará eSports          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.16 | ALLE, cLd, drg, Ltz, rem1x   |
|           20 |      523 | 2026-05-16 | Yawara E-Sports        | L   | 1.000      | -            | -                | -                | -         |   -11.40 | ALLE, cLd, drg, Ltz, rem1x   |
|           19 |      606 | 2026-05-13 | Galorys                | L   | 1.000      | -            | -                | -                | -         |    -8.84 | ALLE, cLd, drg, Ltz, rem1x   |
|           18 |      645 | 2026-05-12 | PaiN Gaming Academy    | W   | 1.000      | 0.333        | 0.003 (0.001)    | 0.483 (0.161)    | 0 (0.000) |     8.25 | ALLE, cLd, drg, Ltz, rem1x   |
|           17 |      726 | 2026-05-10 | Galorys                | W   | 1.000      | 0.398        | 0.014 (0.005)    | 0.470 (0.187)    | 0 (0.000) |    23.78 | ALLE, cLd, drg, pancc, rem1x |
|           16 |      764 | 2026-05-09 | Imperial Esports       | W   | 1.000      | 0.398        | 0.027 (0.011)    | 0.486 (0.193)    | 0 (0.000) |    26.39 | ALLE, cLd, drg, pancc, rem1x |
|           15 |      794 | 2026-05-08 | LargadosyPelados       | L   | 1.000      | -            | -                | -                | -         |    -8.19 | ALLE, cLd, drg, Ltz, rem1x   |
|           14 |      846 | 2026-05-05 | Isurus                 | W   | 1.000      | 0.354        | 0.038 (0.014)    | 0.597 (0.212)    | 0 (0.000) |    17.15 | ALLE, cLd, drg, Ltz, rem1x   |
|           13 |      884 | 2026-05-03 | Yawara E-Sports        | L   | 1.000      | -            | -                | -                | -         |   -10.25 | ALLE, cLd, drg, Ltz, rem1x   |
|           12 |      885 | 2026-05-03 | Keyd Stars             | W   | 1.000      | 0.398        | 0.021 (0.008)    | 0.625 (0.249)    | 0 (0.000) |    19.79 | ALLE, cLd, drg, pancc, rem1x |
|           11 |      916 | 2026-05-02 | QUINTESSÊNCIA          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.04 | ALLE, cLd, drg, pancc, rem1x |
|           10 |      967 | 2026-05-01 | ELITES                 | W   | 1.000      | -            | -                | -                | -         |     4.13 | ALLE, cLd, drg, Ltz, rem1x   |
|            9 |     1063 | 2026-04-29 | Crashers               | W   | 0.987      | 0.354        | 0.002 (0.001)    | 0.433 (0.151)    | -         |     9.55 | ALLE, cLd, drg, Ltz, rem1x   |
|            8 |     1272 | 2026-04-25 | Fake do Biru           | L   | 0.960      | -            | -                | -                | -         |    -7.66 | ALLE, cLd, drg, pancc, rem1x |
|            7 |     1327 | 2026-04-24 | Galorys                | L   | 0.954      | -            | -                | -                | -         |    -5.48 | ALLE, cLd, drg, pancc, rem1x |
|            6 |     1331 | 2026-04-24 | Bounty Hunters Esports | W   | 0.953      | 0.398        | 0.035 (0.013)    | 0.652 (0.247)    | -         |    23.77 | ALLE, cLd, drg, pancc, rem1x |
|            5 |     1461 | 2026-04-19 | MIBR Academy           | W   | 0.921      | 0.278        | -                | 0.361 (0.092)    | -         |    14.84 | ALLE, cLd, CloN7, Ltz, rem1x |
|            4 |     1462 | 2026-04-19 | Vasco eSports          | W   | 0.920      | 0.278        | 0.011 (0.003)    | 0.368 (0.094)    | -         |    13.43 | ALLE, cLd, CloN7, Ltz, rem1x |
|            3 |     1493 | 2026-04-18 | Procyon Team           | W   | 0.914      | 0.278        | 0.007 (0.002)    | -                | -         |    12.38 | ALLE, cLd, CloN7, Ltz, rem1x |
|            2 |     1513 | 2026-04-17 | ALKA GAMING            | W   | 0.908      | -            | -                | -                | -         |     9.02 | ALLE, cLd, CloN7, Ltz, rem1x |
|            1 |     1524 | 2026-04-16 | MIBR Academy           | L   | 0.901      | -            | -                | -                | -         |   -13.02 | ALLE, cLd, CloN7, Ltz, rem1x |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,231.30)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-30 |      1.000 | $5,955.00      | $5,955.00       |
| 2026-05-24 |      1.000 | $375.00        | $375.00         |
| 2026-05-24 |      1.000 | $1,750.00      | $1,750.00       |
| 2026-04-19 |      0.921 | $1,250.00      | $1,151.30       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
