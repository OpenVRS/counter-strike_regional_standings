### Roster Details<br />
Team Name: Poland<br />
Roster: Demho, Prism, Qlocuu<br />
Global Rank: [150](../../standings_global_2026_08_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_08_03.md)<br />
Regional Rank: [109]( ../../standings_europe_2026_08_03.md)<br />
<br />
Final Rank Value:  857.2<br />
<br />
Final Rank Value (857.2) = Starting Rank Value (815.0) + Head To Head Adjustments (42.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.271[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.218[<sup>2</sup>](#table1)

The average of these factors is 0.214<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 815.0
- 400 + ( ( 0.214 - 0.000 ) / ( 0.826 - 0.000 ) ) * 1600 = 815.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      348 | 2026-07-19 | Kosovo   | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.09 | Demho, ex1st, Prism, Qlocuu, ultimate |
|            4 |      811 | 2026-06-25 | INFINITE | L   | 0.941      | -            | -                | -                | -         |    -2.29 | Demho, Dr3nquu, hades, Prism, Qlocuu  |
|            3 |      821 | 2026-06-25 | EAC      | W   | 0.939      | 0.548        | 0.014 (0.007)    | 0.758 (0.390)    | 1 (0.939) |    22.16 | Demho, Dr3nquu, hades, Prism, Qlocuu  |
|            2 |      834 | 2026-06-24 | OG       | W   | 0.935      | 0.548        | 0.026 (0.013)    | 0.270 (0.138)    | 1 (0.935) |    22.84 | Demho, Dr3nquu, hades, Prism, Qlocuu  |
|            1 |      857 | 2026-06-23 | Echo     | L   | 0.926      | -            | -                | -                | -         |    -2.60 | Demho, Dr3nquu, hades, Prism, Qlocuu  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,365.25)
- Divide that value by the 5th highest value among all rosters ($497,826.14)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-28 |      0.961 | $3,500.00      | $3,365.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
