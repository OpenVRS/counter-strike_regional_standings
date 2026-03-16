### Roster Details<br />
Team Name: KZG<br />
Roster: dearlucid, Mingovi, vinhy<br />
Global Rank: [328](../../standings_global_2026_03_08.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_08.md)<br />
Regional Rank: [44]( ../../standings_asia_2026_03_08.md)<br />
<br />
Final Rank Value:  397.6<br />
<br />
Final Rank Value (397.6) = Starting Rank Value (400.0) + Head To Head Adjustments (-2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.833 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.000
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4182 | 2025-10-06 | Rooster                     | L   | 0.177      | -            | -                | -                | -         |    -1.07 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|            4 |     4237 | 2025-10-05 | Mindfreak (Australian team) | L   | 0.170      | -            | -                | -                | -         |    -1.18 | dearlucid, JiNxZiE, Mingovi, vinhy, w0mbat |
|            3 |     4831 | 2025-09-18 | Ground Zero Gaming          | L   | 0.057      | -            | -                | -                | -         |    -0.25 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            2 |     5163 | 2025-09-10 | FURY                        | W   | 0.003      | 0.278        | 0.000 (0.000)    | 0.047 (0.000)    | 0 (0.000) |     0.07 | dearlucid, dpr, Drox, Mingovi, vinhy       |
|            1 |     5167 | 2025-09-10 | Rooster                     | L   | 0.003      | -            | -                | -                | -         |    -0.02 | dearlucid, dpr, Drox, Mingovi, vinhy       |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($309,028.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
