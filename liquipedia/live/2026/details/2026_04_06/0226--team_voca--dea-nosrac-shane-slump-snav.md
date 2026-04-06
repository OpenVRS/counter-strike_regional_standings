### Roster Details<br />
Team Name: Team Voca<br />
Roster: dea, nosraC, shane, slump, snav<br />
Global Rank: [226](../../standings_global_.md)<br />
<br />
Region: [Americas]( ../../standings_americas_.md)<br />
Regional Rank: [55]( ../../standings_americas_.md)<br />
<br />
Final Rank Value:  695.9<br />
<br />
Final Rank Value (695.9) = Starting Rank Value (667.1) + Head To Head Adjustments (28.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.294[<sup>1</sup>](#table2)
- Bounty Collected: 0.238[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 667.1
- 400 + ( ( 0.137 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 667.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.044
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           21 |     4500 | 2025-11-15 | Outfit 49              | W   | 0.255      | 0.303        | 0.008 (0.001)    | 0.311 (0.024)    | 0 (0.000) |     4.09 | dea, nosraC, shane, slump, snav |
|           20 |     4522 | 2025-11-14 | Marsborne              | L   | 0.249      | -            | -                | -                | -         |    -0.29 | dea, nosraC, shane, slump, snav |
|           19 |     4544 | 2025-11-13 | SkinRave Esports       | L   | 0.243      | -            | -                | -                | -         |    -2.79 | dea, nosraC, shane, slump, snav |
|           18 |     4634 | 2025-11-10 | Marsborne              | W   | 0.223      | 0.363        | 0.038 (0.003)    | 0.491 (0.040)    | 0 (0.000) |     6.76 | dea, nosraC, shane, slump, snav |
|           17 |     4659 | 2025-11-09 | SportsBetExpert        | W   | 0.215      | 0.278        | 0.011 (0.001)    | 0.255 (0.015)    | 0 (0.000) |     3.89 | dea, nosraC, shane, slump, snav |
|           16 |     4755 | 2025-11-07 | EMPIRE (American team) | W   | 0.202      | 0.278        | 0.004 (0.000)    | 0.122 (0.007)    | 0 (0.000) |     3.43 | dea, nosraC, shane, slump, snav |
|           15 |     4884 | 2025-11-05 | Marsborne              | L   | 0.189      | -            | -                | -                | -         |    -0.21 | dea, nosraC, shane, slump, snav |
|           14 |     4915 | 2025-11-04 | SportsBetExpert        | W   | 0.182      | 0.333        | 0.011 (0.001)    | 0.255 (0.016)    | 0 (0.000) |     3.35 | dea, nosraC, shane, slump, snav |
|           13 |     5047 | 2025-10-30 | Regain                 | W   | 0.148      | 0.333        | 0.003 (0.000)    | 0.210 (0.010)    | 0 (0.000) |     2.30 | dea, nosraC, shane, slump, snav |
|           12 |     5160 | 2025-10-26 | Chicanery              | W   | 0.123      | -            | -                | -                | 0 (0.000) |     1.00 | dea, nosraC, shane, slump, snav |
|           11 |     5198 | 2025-10-26 | NRG                    | L   | 0.120      | -            | -                | -                | -         |    -0.10 | dea, nosraC, shane, slump, snav |
|           10 |     5236 | 2025-10-25 | BOSS                   | W   | 0.114      | 0.303        | 0.009 (0.000)    | 0.269 (0.009)    | 0 (0.000) |     2.86 | dea, nosraC, shane, slump, snav |
|            9 |     5271 | 2025-10-24 | Team Kiri              | W   | 0.109      | -            | -                | -                | 0 (0.000) |     0.95 | dea, nosraC, shane, slump, snav |
|            8 |     5386 | 2025-10-22 | BOSS                   | W   | 0.095      | 0.333        | 0.009 (0.000)    | 0.269 (0.009)    | 0 (0.000) |     2.42 | dea, nosraC, shane, slump, snav |
|            7 |     5443 | 2025-10-18 | Regain                 | W   | 0.069      | 0.333        | 0.003 (0.000)    | 0.210 (0.005)    | -         |     1.10 | dea, nosraC, shane, slump, snav |
|            6 |     5496 | 2025-10-16 | Wildcard               | L   | 0.056      | -            | -                | -                | -         |    -1.00 | dea, nosraC, shane, slump, snav |
|            5 |     5533 | 2025-10-15 | BOSS                   | W   | 0.049      | 0.363        | 0.009 (0.000)    | 0.269 (0.005)    | -         |     1.24 | dea, nosraC, shane, slump, snav |
|            4 |     5571 | 2025-10-14 | SkinRave Esports       | L   | 0.042      | -            | -                | -                | -         |    -0.46 | dea, nosraC, shane, slump, snav |
|            3 |     5605 | 2025-10-13 | Anything else          | W   | 0.035      | -            | -                | -                | -         |     0.20 | dea, nosraC, shane, slump, snav |
|            2 |     5743 | 2025-10-08 | OverKnight             | W   | 0.002      | -            | -                | -                | -         |     0.02 | dea, nosraC, shane, slump, snav |
|            1 |     5751 | 2025-10-08 | Outfit 49              | W   | 0.002      | -            | -                | -                | -         |     0.03 | dea, nosraC, shane, slump, snav |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,838.93)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-11-16 |      0.261 | $1,000.00      | $261.49         |
| 2025-11-15 |      0.256 | $2,000.00      | $511.88         |
| 2025-11-09 |      0.215 | $1,750.00      | $376.92         |
| 2025-11-05 |      0.189 | $3,000.00      | $566.98         |
| 2025-10-19 |      0.076 | $1,500.00      | $113.49         |
| 2025-10-08 |      0.002 | $5,000.00      | $8.16           |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
