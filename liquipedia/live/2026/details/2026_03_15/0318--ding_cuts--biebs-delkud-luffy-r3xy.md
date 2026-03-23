### Roster Details<br />
Team Name: Ding Cuts<br />
Roster: biebs, delkud, luffy, R3XY<br />
Global Rank: [318](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_15.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_03_15.md)<br />
<br />
Final Rank Value:  483.8<br />
<br />
Final Rank Value (483.8) = Starting Rank Value (483.6) + Head To Head Adjustments (0.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.168[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.6
- 400 + ( ( 0.043 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 483.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.063
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1058 | 2026-02-21 | Skele                            | L   | 1.000      | -            | -                | -                | -         |    -8.58 | biebs, delkud, luffy, R3XY, Val |
|            5 |     1110 | 2026-02-20 | LITE Esports                     | W   | 1.000      | 0.318        | 0.000 (0.000)    | 0.076 (0.024)    | 0 (0.000) |    20.20 | biebs, delkud, luffy, R3XY, Val |
|            4 |     1222 | 2026-02-18 | Skele                            | L   | 1.000      | -            | -                | -                | -         |   -14.23 | biebs, delkud, luffy, R3XY, Val |
|            3 |     1865 | 2026-02-01 | Arcade Esports (Australian team) | L   | 0.917      | -            | -                | -                | -         |    -5.74 | biebs, delkud, luffy, R3XY, rev |
|            2 |     1868 | 2026-01-31 | Shanghai Sharks ESC              | W   | 0.916      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.67 | biebs, delkud, luffy, R3XY, rev |
|            1 |     1871 | 2026-01-31 | Mindfreak (Australian team)      | L   | 0.915      | -            | -                | -                | -         |    -2.13 | biebs, delkud, luffy, R3XY, rev |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
