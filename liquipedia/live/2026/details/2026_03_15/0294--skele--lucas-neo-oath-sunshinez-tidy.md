### Roster Details<br />
Team Name: Skele<br />
Roster: lucas, neo, Oath, sunshinez, tidy<br />
Global Rank: [294](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_15.md)<br />
Regional Rank: [38]( ../../standings_asia_2026_03_15.md)<br />
<br />
Final Rank Value:  531.3<br />
<br />
Final Rank Value (531.3) = Starting Rank Value (506.8) + Head To Head Adjustments (24.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.208[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 506.8
- 400 + ( ( 0.055 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 506.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.066
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      814 | 2026-02-26 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -3.59 | lucas, neo, Oath, sunshinez, tidy |
|            4 |      897 | 2026-02-24 | Rooster                     | W   | 1.000      | 0.318        | 0.005 (0.002)    | 0.264 (0.084)    | 0 (0.000) |    24.89 | lucas, neo, Oath, sunshinez, tidy |
|            3 |      935 | 2026-02-23 | THUNDERdOWNUNDER            | L   | 1.000      | -            | -                | -                | -         |    -1.12 | lucas, neo, Oath, sunshinez, tidy |
|            2 |     1157 | 2026-02-19 | Team Abyssal                | L   | 1.000      | -            | -                | -                | -         |    -9.87 | lucas, neo, Oath, sunshinez, tidy |
|            1 |     1222 | 2026-02-18 | Ding Cuts                   | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.063 (0.020)    | 0 (0.000) |    14.23 | lucas, neo, Oath, sunshinez, tidy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
