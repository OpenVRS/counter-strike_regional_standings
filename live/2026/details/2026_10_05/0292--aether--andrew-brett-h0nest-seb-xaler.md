### Roster Details<br />
Team Name: Aether<br />
Roster: Andrew, brett, H0NeST, Seb, xaler<br />
Global Rank: [292](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2026_10_05.md)<br />
Regional Rank: [67]( ../../standings_americas_2026_10_05.md)<br />
<br />
Final Rank Value:  585.3<br />
<br />
Final Rank Value (585.3) = Starting Rank Value (586.7) + Head To Head Adjustments (-1.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.198[<sup>1</sup>](#table2)
- Bounty Collected: 0.175[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.093<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 586.7
- 400 + ( ( 0.093 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 586.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |     5085 | 2026-04-27 | Wildcard       | L   | 0.129      | -            | -                | -                | -         |    -0.13 | Andrew, brett, H0NeST, Seb, xaler |
|            6 |     5493 | 2026-04-14 | insane players | L   | 0.043      | -            | -                | -                | -         |    -0.64 | Andrew, brett, H0NeST, Seb, xaler |
|            5 |     5515 | 2026-04-13 | Marsborne      | L   | 0.035      | -            | -                | -                | -         |    -0.52 | Andrew, brett, H0NeST, Seb, xaler |
|            4 |     5530 | 2026-04-12 | EMPIRE         | L   | 0.030      | -            | -                | -                | -         |    -0.62 | Andrew, brett, H0NeST, Seb, xaler |
|            3 |     5556 | 2026-04-11 | LAG            | W   | 0.023      | 0.333        | 0.026 (0.000)    | 0.475 (0.004)    | 0 (0.000) |     0.67 | Andrew, brett, H0NeST, Seb, xaler |
|            2 |     5609 | 2026-04-09 | BOSS           | L   | 0.010      | -            | -                | -                | -         |    -0.20 | Andrew, brett, H0NeST, Seb, xaler |
|            1 |     5637 | 2026-04-08 | 900FPSvsECO    | W   | 0.002      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.02 | Andrew, brett, H0NeST, Seb, xaler |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($42.73)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-14 |      0.043 | $1,000.00      | $42.73          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
