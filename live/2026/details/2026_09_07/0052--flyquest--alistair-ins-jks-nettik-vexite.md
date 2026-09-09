### Roster Details<br />
Team Name: FlyQuest<br />
Roster: aliStair, INS, jks, nettik, Vexite<br />
Global Rank: [52](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [4]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  1149.7<br />
<br />
Final Rank Value (1149.7) = Starting Rank Value (1131.0) + Head To Head Adjustments (18.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.367[<sup>1</sup>](#table2)
- Bounty Collected: 0.348[<sup>2</sup>](#table1)
- Opponent Network: 0.089[<sup>2</sup>](#table1)
- LAN Wins: 0.732[<sup>2</sup>](#table1)

The average of these factors is 0.384<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1131.0
- 400 + ( ( 0.384 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 1131.0


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
|           27 |       81 | 2026-09-04 | TYLOO             | L   | 1.000      | -            | -                | -                | -         |    -7.51 | aliStair, INS, jks, nettik, Vexite      |
|           26 |       98 | 2026-09-03 | Rare Atom         | W   | 1.000      | -            | -                | -                | -         |     4.11 | aliStair, INS, jks, nettik, Vexite      |
|           25 |      111 | 2026-09-03 | DEPO              | W   | 1.000      | 0.143        | 0.021 (0.003)    | 0.441 (0.063)    | -         |    14.64 | aliStair, INS, jks, nettik, Vexite      |
|           24 |      117 | 2026-09-03 | Kaleido           | W   | 1.000      | 0.143        | 0.006 (0.001)    | -                | -         |     2.90 | aliStair, INS, jks, nettik, Vexite      |
|           23 |      133 | 2026-09-02 | Rare Atom         | L   | 1.000      | -            | -                | -                | -         |   -27.04 | aliStair, INS, jks, nettik, Vexite      |
|           22 |      150 | 2026-09-02 | NEXVOID           | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.360 (0.051)    | -         |     4.95 | aliStair, INS, jks, nettik, Vexite      |
|           21 |     1576 | 2026-07-18 | Ground Zero       | W   | 0.861      | 0.316        | 0.014 (0.004)    | 0.375 (0.102)    | 1 (0.861) |     5.74 | Gratisfaction, INS, jks, nettik, Vexite |
|           20 |     1602 | 2026-07-17 | THUNDER dOWNUNDER | W   | 0.855      | 0.316        | 0.015 (0.004)    | 0.213 (0.058)    | 1 (0.855) |     9.40 | Gratisfaction, INS, jks, nettik, Vexite |
|           19 |     1604 | 2026-07-17 | Mindfreak         | W   | 0.854      | 0.316        | -                | 0.212 (0.057)    | 1 (0.854) |     2.83 | Gratisfaction, INS, jks, nettik, Vexite |
|           18 |     1639 | 2026-07-17 | Ground Zero       | W   | 0.849      | 0.316        | 0.014 (0.004)    | 0.375 (0.101)    | 1 (0.849) |     5.70 | Gratisfaction, INS, jks, nettik, Vexite |
|           17 |     1642 | 2026-07-17 | LFO 8             | W   | 0.849      | -            | -                | -                | 1 (0.849) |     1.30 | Gratisfaction, INS, jks, nettik, Vexite |
|           16 |     2364 | 2026-06-07 | paiN              | L   | 0.585      | -            | -                | -                | -         |    -4.91 | INS, jks, nettik, story, Vexite         |
|           15 |     2386 | 2026-06-06 | Legacy            | L   | 0.579      | -            | -                | -                | -         |    -0.41 | INS, jks, nettik, story, Vexite         |
|           14 |     2406 | 2026-06-06 | 9z                | L   | 0.576      | -            | -                | -                | -         |    -0.95 | INS, jks, nettik, story, Vexite         |
|           13 |     2426 | 2026-06-05 | Liquid            | W   | 0.571      | 0.624        | 0.206 (0.073)    | 0.388 (0.138)    | 1 (0.571) |    15.47 | INS, jks, nettik, story, Vexite         |
|           12 |     2449 | 2026-06-04 | THUNDER dOWNUNDER | W   | 0.564      | 0.624        | 0.015 (0.005)    | 0.213 (0.075)    | 1 (0.564) |     6.62 | INS, jks, nettik, story, Vexite         |
|           11 |     2474 | 2026-06-03 | NRG               | L   | 0.557      | -            | -                | -                | -         |    -8.10 | INS, jks, nettik, story, Vexite         |
|           10 |     2486 | 2026-06-02 | GamerLegion       | L   | 0.552      | -            | -                | -                | -         |    -2.75 | INS, jks, nettik, story, Vexite         |
|            9 |     2503 | 2026-06-02 | SINNERS           | W   | 0.550      | 0.624        | 0.102 (0.035)    | 0.477 (0.164)    | 1 (0.550) |     8.02 | INS, jks, nettik, story, Vexite         |
|            8 |     3207 | 2026-05-12 | 5star             | L   | 0.415      | -            | -                | -                | -         |   -10.52 | INS, jks, nettik, story, Vexite         |
|            7 |     3239 | 2026-05-12 | NEXVOID           | W   | 0.410      | 0.548        | 0.015 (0.003)    | 0.360 (0.081)    | 1 (0.410) |     1.63 | INS, jks, nettik, story, Vexite         |
|            6 |     3287 | 2026-05-11 | JiJieHao          | L   | 0.402      | -            | -                | -                | -         |    -2.07 | INS, jks, nettik, story, Vexite         |
|            5 |     4408 | 2026-04-05 | TYLOO             | L   | 0.163      | -            | -                | -                | -         |    -1.29 | INS, jks, nettik, story, Vexite         |
|            4 |     4482 | 2026-04-04 | Chinggis Warriors | W   | 0.156      | -            | -                | -                | 1 (0.156) |     0.58 | INS, jks, nettik, story, Vexite         |
|            3 |     4679 | 2026-04-01 | SemperFi          | W   | 0.141      | -            | -                | -                | -         |     0.34 | INS, jks, nettik, story, Vexite         |
|            2 |     4769 | 2026-03-31 | UR                | W   | 0.135      | -            | -                | -                | -         |     0.07 | INS, jks, nettik, story, Vexite         |
|            1 |     5899 | 2026-03-11 | Alter Ego         | L   | 0.002      | -            | -                | -                | -         |    -0.05 | INS, jks, nettik, story, Vexite         |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($9,564.97)
- Divide that value by the 5th highest value among all rosters ($506,225.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-18 |      0.861 | $3,448.00      | $2,967.30       |
| 2026-06-09 |      0.599 | $10,000.00     | $5,987.81       |
| 2026-04-05 |      0.163 | $3,750.00      | $609.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
