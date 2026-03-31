### Roster Details<br />
Team Name: Akimbo Esports<br />
Roster: Marro, N2o, obi<br />
Global Rank: [322](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_29.md)<br />
Regional Rank: [40]( ../../standings_asia_2026_03_29.md)<br />
<br />
Final Rank Value:  498.4<br />
<br />
Final Rank Value (498.4) = Starting Rank Value (502.0) + Head To Head Adjustments (-3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 502.0
- 400 + ( ( 0.053 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 502.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.030
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      107 | 2026-03-25 | Regain       | L   | 1.000      | -            | -                | -                | -         |    -9.37 | laxiee, Marro, mason, N2o, obi   |
|            4 |     1783 | 2026-02-19 | FlyQuest RED | L   | 0.947      | -            | -                | -                | -         |    -9.54 | Marro, N2o, obi, Oczarka, Zamgaa |
|            3 |     1831 | 2026-02-18 | Regain       | W   | 0.940      | 0.363        | 0.003 (0.001)    | 0.238 (0.081)    | 0 (0.000) |    21.26 | Marro, N2o, obi, Oczarka, Zamgaa |
|            2 |     1890 | 2026-02-17 | M80          | L   | 0.934      | -            | -                | -                | -         |    -0.29 | Marro, N2o, obi, Oczarka, Zamgaa |
|            1 |     2050 | 2026-02-14 | BOSS         | L   | 0.912      | -            | -                | -                | -         |    -5.63 | AJ, Marro, N2o, obi, Oczarka     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
