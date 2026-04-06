### Roster Details<br />
Team Name: Ding Cuts<br />
Roster: biebs, delkud, luffy, R3XY<br />
Global Rank: [330](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [41]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  480.1<br />
<br />
Final Rank Value (480.1) = Starting Rank Value (479.9) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.041<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 479.9
- 400 + ( ( 0.041 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 479.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.051
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2184 | 2026-02-21 | Skele                            | L   | 0.905      | -            | -                | -                | -         |   -11.06 | biebs, delkud, luffy, R3XY, Val |
|            5 |     2236 | 2026-02-20 | LITE Esports                     | W   | 0.898      | 0.318        | 0.000 (0.000)    | 0.048 (0.014)    | 0 (0.000) |    18.29 | biebs, delkud, luffy, R3XY, Val |
|            4 |     2348 | 2026-02-18 | Skele                            | L   | 0.884      | -            | -                | -                | -         |   -12.67 | biebs, delkud, luffy, R3XY, Val |
|            3 |     2991 | 2026-02-01 | Arcade Esports (Australian team) | L   | 0.771      | -            | -                | -                | -         |    -2.19 | biebs, delkud, luffy, R3XY, rev |
|            2 |     2994 | 2026-01-31 | Shanghai Sharks ESC              | W   | 0.770      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     9.23 | biebs, delkud, luffy, R3XY, rev |
|            1 |     2997 | 2026-01-31 | Mindfreak (Australian team)      | L   | 0.769      | -            | -                | -                | -         |    -1.40 | biebs, delkud, luffy, R3XY, rev |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
