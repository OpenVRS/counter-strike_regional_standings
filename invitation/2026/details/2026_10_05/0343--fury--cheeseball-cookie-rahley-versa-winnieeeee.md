### Roster Details<br />
Team Name: FURY<br />
Roster: cheeseball, cookie, rahley, versa, Winnieeeee<br />
Global Rank: [343](../../standings_global_2026_10_05.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_10_05.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_10_05.md)<br />
<br />
Final Rank Value:  492.7<br />
<br />
Final Rank Value (492.7) = Starting Rank Value (486.5) + Head To Head Adjustments (6.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.172[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.5
- 400 + ( ( 0.043 - 0.000 ) / ( 0.800 - 0.000 ) ) * 1600 = 486.5


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
|            5 |     4953 | 2026-05-01 | Abyssal      | L   | 0.151      | -            | -                | -                | -         |    -1.17 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            4 |     4989 | 2026-04-30 | MARKandLARRY | W   | 0.145      | 0.278        | 0.000 (0.000)    | 0.066 (0.003)    | 0 (0.000) |     3.08 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            3 |     5041 | 2026-04-29 | Rooster      | W   | 0.138      | 0.278        | 0.004 (0.000)    | 0.208 (0.008)    | 0 (0.000) |     3.42 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            2 |     5075 | 2026-04-28 | Skele        | W   | 0.132      | 0.278        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.60 | cheeseball, cookie, rahley, versa, Winnieeeee |
|            1 |     5194 | 2026-04-26 | Mindfreak    | L   | 0.118      | -            | -                | -                | -         |    -0.78 | cheeseball, cookie, rahley, versa, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($479,090.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
