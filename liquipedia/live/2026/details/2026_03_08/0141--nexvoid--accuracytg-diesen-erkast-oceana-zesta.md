### Roster Details<br />
Team Name: NEXVOID<br />
Roster: AccuracyTG, Diesen, erkaSt, OCEANA, Zesta<br />
Global Rank: [141](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_08.md)<br />
Regional Rank: [11]( ../../standings_asia_2026_03_08.md)<br />
<br />
Final Rank Value:  848.6<br />
<br />
Final Rank Value (848.6) = Starting Rank Value (829.5) + Head To Head Adjustments (19.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.259[<sup>2</sup>](#table1)
- Opponent Network: 0.026[<sup>2</sup>](#table1)
- LAN Wins: 0.299[<sup>2</sup>](#table1)

The average of these factors is 0.224<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 829.5
- 400 + ( ( 0.224 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 829.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.074
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      268 | 2026-02-26 | Chinggis Warriors | L   | 1.000      | -            | -                | -                | -         |   -18.60 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            4 |      332 | 2026-02-26 | BMZ               | L   | 1.000      | -            | -                | -                | -         |   -21.59 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            3 |     1183 | 2026-02-06 | The Huns Esports  | W   | 0.997      | 0.284        | 0.021 (0.006)    | 0.400 (0.113)    | 1 (0.997) |    22.41 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            2 |     1208 | 2026-02-05 | The Huns Esports  | W   | 0.990      | 0.284        | 0.021 (0.006)    | 0.400 (0.112)    | 1 (0.990) |    24.26 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |
|            1 |     1211 | 2026-02-04 | BMZ               | W   | 0.988      | 0.284        | 0.007 (0.002)    | 0.129 (0.036)    | 1 (0.988) |    12.66 | AccuracyTG, Diesen, erkaSt, OCEANA, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,870.07)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-27 |      1.000 | $225.00        | $225.00         |
| 2026-02-06 |      0.997 | $1,650.00      | $1,645.07       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
