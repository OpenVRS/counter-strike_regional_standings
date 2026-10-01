### Roster Details<br />
Team Name: Chinggis Warriors<br />
Roster: Efire, hasteka, ROUX, tikuak, yAmi<br />
Global Rank: [168](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [16]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  815.5<br />
<br />
Final Rank Value (815.5) = Starting Rank Value (789.5) + Head To Head Adjustments (26.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.046[<sup>2</sup>](#table1)
- LAN Wins: 0.150[<sup>2</sup>](#table1)

The average of these factors is 0.201<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.5
- 400 + ( ( 0.201 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 789.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      252 | 2026-07-24 | 5star       | L   | 1.000      | -            | -                | -                | -         |    -7.74 | hasteka, ROUX, sergelen19k, sk0R, yAmi |
|           10 |      275 | 2026-07-23 | The Huns    | L   | 1.000      | -            | -                | -                | -         |    -7.17 | hasteka, ROUX, sergelen19k, sk0R, yAmi |
|            9 |     1990 | 2026-05-13 | 5star       | L   | 0.652      | -            | -                | -                | -         |    -5.14 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            8 |     2001 | 2026-05-12 | Ground Zero | W   | 0.650      | 0.548        | 0.008 (0.003)    | 0.402 (0.143)    | 1 (0.650) |    14.59 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            7 |     2041 | 2026-05-11 | JiJieHao    | L   | 0.644      | -            | -                | -                | -         |    -2.17 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            6 |     2078 | 2026-05-11 | NEXVOID     | W   | 0.637      | 0.548        | 0.010 (0.004)    | 0.344 (0.120)    | 1 (0.637) |    13.01 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            5 |     2293 | 2026-05-02 | TYLOO       | L   | 0.580      | -            | -                | -                | -         |    -0.27 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            4 |     2352 | 2026-05-01 | NEXVOID     | L   | 0.573      | -            | -                | -                | -         |    -6.37 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            3 |     2440 | 2026-04-29 | TYLOO       | W   | 0.560      | 0.333        | 0.183 (0.034)    | 0.819 (0.153)    | 0 (0.000) |    17.39 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            2 |     2524 | 2026-04-27 | Just Swing  | W   | 0.546      | 0.333        | 0.001 (0.000)    | 0.212 (0.039)    | 0 (0.000) |     6.60 | Efire, hasteka, ROUX, tikuak, yAmi     |
|            1 |     2588 | 2026-04-26 | Legion      | W   | 0.539      | 0.333        | 0.000 (0.000)    | 0.048 (0.009)    | 0 (0.000) |     3.27 | Efire, hasteka, ROUX, tikuak, yAmi     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,195.89)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-07-25 |      1.000 | $279.00        | $279.00         |
| 2026-05-17 |      0.679 | $3,000.00      | $2,037.23       |
| 2026-05-03 |      0.586 | $1,500.00      | $879.66         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
