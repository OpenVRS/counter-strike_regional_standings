### Roster Details<br />
Team Name: THE UNIT<br />
Roster: ad0rfin, kyrosawa, nesh<br />
Global Rank: [214](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_08_03.md)<br />
Regional Rank: [23]( ../../standings_asia_2026_08_03.md)<br />
<br />
Final Rank Value:  741.0<br />
<br />
Final Rank Value (741.0) = Starting Rank Value (740.8) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.274[<sup>1</sup>](#table2)
- Bounty Collected: 0.194[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.233[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 740.8
- 400 + ( ( 0.176 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 740.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |       14 | 2026-08-02 | DEPO           | L   | 1.000      | -            | -                | -                | -         |    -3.83 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            7 |       28 | 2026-08-01 | Trouble makers | W   | 1.000      | 0.342        | 0.001 (0.000)    | 0.047 (0.016)    | 1 (1.000) |    12.48 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            6 |       35 | 2026-08-01 | Omega          | L   | 1.000      | -            | -                | -                | -         |    -3.23 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            5 |       41 | 2026-08-01 | Trouble makers | W   | 1.000      | 0.342        | 0.001 (0.000)    | 0.047 (0.016)    | 1 (1.000) |    13.02 | ad0rfin, enzero, kyrosawa, mareefishy, nesh |
|            4 |     2858 | 2026-04-18 | DNK            | L   | 0.486      | -            | -                | -                | -         |    -9.68 | ad0rfin, imyGDx, kyrosawa, nesh, nursSSS    |
|            3 |     2863 | 2026-04-18 | DEPO           | L   | 0.484      | -            | -                | -                | -         |    -1.19 | ad0rfin, imyGDx, kyrosawa, nesh, nursSSS    |
|            2 |     5385 | 2026-02-26 | Biryani        | L   | 0.145      | -            | -                | -                | -         |    -3.69 | ad0rfin, GThug, imyGDx, kyrosawa, nesh      |
|            1 |     5397 | 2026-02-25 | ScarX          | L   | 0.144      | -            | -                | -                | -         |    -3.65 | ad0rfin, GThug, imyGDx, kyrosawa, nesh      |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,121.58)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-08-02 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-04-19 |      0.492 | $247.00        | $121.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
