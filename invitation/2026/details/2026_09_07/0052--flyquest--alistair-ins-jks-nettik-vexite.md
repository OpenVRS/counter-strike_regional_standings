### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, INS, jks, nettik, Vexite<br />
Global Rank: [52](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [4]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  1148.2<br />
<br />
Final Rank Value (1148.2) = Starting Rank Value (1129.5) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.088[<sup>2</sup>](#table1)
- LAN Wins: 0.729[<sup>2</sup>](#table1)

The average of these factors is 0.383<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1129.5
- 400 + ( ( 0.383 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 1129.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           26 |      109 | 2026-09-04 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -7.54 | aliStair, INS, jks, nettik, Vexite      |
|           25 |      126 | 2026-09-03 | Rare Atom         | W   | 1.000      | -            | -                | -                | -         |     4.13 | aliStair, INS, jks, nettik, Vexite      |
|           24 |      139 | 2026-09-03 | DEPO              | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.440 (0.063)    | -         |    14.82 | aliStair, INS, jks, nettik, Vexite      |
|           23 |      145 | 2026-09-03 | Kaleido           | W   | 1.000      | 0.143        | 0.006 (0.001)    | -                | -         |     2.90 | aliStair, INS, jks, nettik, Vexite      |
|           22 |      161 | 2026-09-02 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -27.01 | aliStair, INS, jks, nettik, Vexite      |
|           21 |      178 | 2026-09-02 | NEXVOID           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.359 (0.051)    | -         |     4.94 | aliStair, INS, jks, nettik, Vexite      |
|           20 |     1604 | 2026-07-18 | Ground Zero       | W   | 0.855      | 0.316        | 0.014 (0.004)    | 0.374 (0.101)    | 1 (0.855) |     5.72 | Gratisfaction, INS, jks, nettik, Vexite |
|           19 |     1630 | 2026-07-17 | THUNDER dOWNUNDER | W   | 0.849      | 0.316        | 0.015 (0.004)    | 0.212 (0.057)    | 1 (0.849) |     9.33 | Gratisfaction, INS, jks, nettik, Vexite |
|           18 |     1632 | 2026-07-17 | Mindfreak         | W   | 0.848      | 0.316        | -                | 0.212 (0.057)    | 1 (0.848) |     2.83 | Gratisfaction, INS, jks, nettik, Vexite |
|           17 |     1667 | 2026-07-17 | Ground Zero       | W   | 0.844      | 0.316        | 0.014 (0.004)    | 0.374 (0.100)    | 1 (0.844) |     5.68 | Gratisfaction, INS, jks, nettik, Vexite |
|           16 |     1670 | 2026-07-17 | LFO 8             | W   | 0.843      | -            | -                | -                | 1 (0.843) |     1.31 | Gratisfaction, INS, jks, nettik, Vexite |
|           15 |     2392 | 2026-06-07 | paiN              | L   | 0.579      | -            | -                | -                | -         |    -4.89 | INS, jks, nettik, story, Vexite         |
|           14 |     2414 | 2026-06-06 | Legacy            | L   | 0.573      | -            | -                | -                | -         |    -0.40 | INS, jks, nettik, story, Vexite         |
|           13 |     2434 | 2026-06-06 | 9z                | L   | 0.571      | -            | -                | -                | -         |    -0.95 | INS, jks, nettik, story, Vexite         |
|           12 |     2454 | 2026-06-05 | Liquid            | W   | 0.566      | 0.624        | 0.206 (0.073)    | 0.387 (0.137)    | 1 (0.566) |    15.33 | INS, jks, nettik, story, Vexite         |
|           11 |     2477 | 2026-06-04 | THUNDER dOWNUNDER | W   | 0.558      | 0.624        | 0.015 (0.005)    | 0.212 (0.074)    | 1 (0.558) |     6.54 | INS, jks, nettik, story, Vexite         |
|           10 |     2502 | 2026-06-03 | NRG               | L   | 0.552      | -            | -                | -                | -         |    -8.05 | INS, jks, nettik, story, Vexite         |
|            9 |     2514 | 2026-06-02 | GamerLegion       | L   | 0.547      | -            | -                | -                | -         |    -2.75 | INS, jks, nettik, story, Vexite         |
|            8 |     2531 | 2026-06-02 | SINNERS           | W   | 0.544      | 0.624        | 0.102 (0.035)    | 0.475 (0.162)    | 1 (0.544) |     7.89 | INS, jks, nettik, story, Vexite         |
|            7 |     3235 | 2026-05-12 | 5star             | L   | 0.410      | -            | -                | -                | -         |   -10.39 | INS, jks, nettik, story, Vexite         |
|            6 |     3267 | 2026-05-12 | NEXVOID           | W   | 0.404      | 0.548        | 0.015 (0.003)    | 0.359 (0.080)    | 1 (0.404) |     1.60 | INS, jks, nettik, story, Vexite         |
|            5 |     3315 | 2026-05-11 | JiJieHao          | L   | 0.396      | -            | -                | -                | -         |    -2.00 | INS, jks, nettik, story, Vexite         |
|            4 |     4436 | 2026-04-05 | TYLOO             | L   | 0.157      | -            | -                | -                | -         |    -1.25 | INS, jks, nettik, story, Vexite         |
|            3 |     4510 | 2026-04-04 | Chinggis Warriors | W   | 0.151      | -            | -                | -                | 1 (0.151) |     0.55 | INS, jks, nettik, story, Vexite         |
|            2 |     4707 | 2026-04-01 | SemperFi          | W   | 0.136      | -            | -                | -                | -         |     0.32 | INS, jks, nettik, story, Vexite         |
|            1 |     4797 | 2026-03-31 | UR                | W   | 0.129      | -            | -                | -                | -         |     0.07 | INS, jks, nettik, story, Vexite         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,470.97)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-18 |      0.855 | $3,448.00      | $2,948.46       |
| 2026-06-09 |      0.593 | $10,000.00     | $5,933.16       |
| 2026-04-05 |      0.157 | $3,750.00      | $589.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
