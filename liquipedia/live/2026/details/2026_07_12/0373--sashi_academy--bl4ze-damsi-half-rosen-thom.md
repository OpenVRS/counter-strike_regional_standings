### Roster Details<br />
Team Name: Sashi Academy<br />
Roster: Bl4zE, Damsi, Half, rosen, Thom<br />
Global Rank: [373](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [229]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  433.6<br />
<br />
Final Rank Value (433.6) = Starting Rank Value (426.1) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.054[<sup>2</sup>](#table1)

The average of these factors is 0.014<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 426.1
- 400 + ( ( 0.014 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 426.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.020
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     3037 | 2026-03-31 | Aimhaus                   | W   | 0.512      | 0.341        | 0.000 (0.000)    | 0.039 (0.007)    | 1 (0.512) |    10.16 | Bl4zE, Damsi, Half, rosen, Thom |
|            4 |     3063 | 2026-03-31 | BESTIA                    | L   | 0.511      | -            | -                | -                | -         |    -0.23 | Bl4zE, Damsi, Half, rosen, Thom |
|            3 |     3068 | 2026-03-31 | Esport Academy Copenhagen | L   | 0.511      | -            | -                | -                | -         |    -0.27 | Bl4zE, Damsi, Half, rosen, Thom |
|            2 |     3082 | 2026-03-31 | Falcons Force             | L   | 0.510      | -            | -                | -                | -         |    -2.10 | Bl4zE, Damsi, Half, rosen, Thom |
|            1 |     3110 | 2026-03-31 | 3DMAX                     | L   | 0.509      | -            | -                | -                | -         |    -0.09 | Bl4zE, Damsi, Half, rosen, Thom |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
