### Roster Details<br />
Team Name: Ding Cuts<br />
Roster: biebs, delkud, luffy, R3XY<br />
Global Rank: [312](../../standings_global_2026_03_01.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_01.md)<br />
Regional Rank: [41]( ../../standings_asia_2026_03_01.md)<br />
<br />
Final Rank Value:  486.1<br />
<br />
Final Rank Value (486.1) = Starting Rank Value (483.7) + Head To Head Adjustments (2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.174[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.044<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 483.7
- 400 + ( ( 0.044 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 483.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.076
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      351 | 2026-02-21 | Skele                            | L   | 1.000      | -            | -                | -                | -         |    -8.73 | biebs, delkud, luffy, R3XY, Val |
|            5 |      398 | 2026-02-20 | LITE Esports                     | W   | 1.000      | 0.318        | 0.001 (0.000)    | 0.104 (0.033)    | 0 (0.000) |    19.85 | biebs, delkud, luffy, R3XY, Val |
|            4 |      509 | 2026-02-18 | Skele                            | L   | 1.000      | -            | -                | -                | -         |    -9.36 | biebs, delkud, luffy, R3XY, Val |
|            3 |     1144 | 2026-02-01 | Arcade Esports (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -7.49 | biebs, delkud, luffy, R3XY, rev |
|            2 |     1147 | 2026-01-31 | Shanghai Sharks ESC              | W   | 1.000      | 0.305        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    11.58 | biebs, delkud, luffy, R3XY, rev |
|            1 |     1150 | 2026-01-31 | Mindfreak (Australian team)      | L   | 1.000      | -            | -                | -                | -         |    -3.50 | biebs, delkud, luffy, R3XY, rev |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($333,631.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
