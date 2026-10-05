### Roster Details<br />
Team Name: FaZe Up Next<br />
Roster: Cher1on, k0rdy, klyrO, rec1se, yoom<br />
Global Rank: [253](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_10_05.md)<br />
Regional Rank: [172]( ../../standings_europe_2026_10_05.md)<br />
<br />
Final Rank Value:  639.5<br />
<br />
Final Rank Value (639.5) = Starting Rank Value (618.0) + Head To Head Adjustments (21.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.219[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.200[<sup>2</sup>](#table1)

The average of these factors is 0.109<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 618.0
- 400 + ( ( 0.109 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 618.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      457 | 2026-09-25 | MOUZ NXT | L   | 1.000      | -            | -                | -                | -         |    -6.71 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            5 |      468 | 2026-09-25 | GenOne   | L   | 1.000      | -            | -                | -                | -         |    -1.38 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            4 |      476 | 2026-09-25 | MOUZ NXT | W   | 1.000      | 0.406        | 0.007 (0.003)    | 0.436 (0.177)    | 1 (1.000) |    25.25 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            3 |      818 | 2026-09-17 | NT       | L   | 1.000      | -            | -                | -                | -         |    -1.43 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            2 |      855 | 2026-09-17 | 7o7      | W   | 1.000      | 0.362        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.99 | Cher1on, k0rdy, klyrO, rec1se, yoom |
|            1 |      862 | 2026-09-17 | NT       | L   | 1.000      | -            | -                | -                | -         |    -1.29 | Cher1on, k0rdy, klyrO, rec1se, yoom |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
