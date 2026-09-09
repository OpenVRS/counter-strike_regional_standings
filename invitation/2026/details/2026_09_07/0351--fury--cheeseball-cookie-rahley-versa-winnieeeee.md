### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rahley, versa, Winnieeeee<br />
Global Rank: [351](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_09_07.md)<br />
Regional Rank: [42]( ../../standings_asia_2026_09_07.md)<br />
<br />
Final Rank Value:  505.8<br />
<br />
Final Rank Value (505.8) = Starting Rank Value (492.0) + Head To Head Adjustments (13.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.190[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 492.0
- 400 + ( ( 0.048 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 492.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3601 | 2026-05-01 | Abyssal      | L   | 0.330      | -            | -                | -                | -         |    -2.73 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            4 |     3637 | 2026-04-30 | MARKandLARRY | W   | 0.324      | 0.278        | 0.000 (0.000)    | 0.105 (0.009)    | 0 (0.000) |     6.67 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            3 |     3689 | 2026-04-29 | Rooster      | W   | 0.317      | 0.278        | 0.006 (0.000)    | 0.271 (0.024)    | 0 (0.000) |     8.03 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            2 |     3723 | 2026-04-28 | Skele        | W   | 0.311      | 0.278        | 0.000 (0.000)    | 0.012 (0.001)    | 0 (0.000) |     3.70 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            1 |     3842 | 2026-04-26 | Mindfreak    | L   | 0.297      | -            | -                | -                | -         |    -1.82 | cheeseball, cookie, rahley, versa, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
