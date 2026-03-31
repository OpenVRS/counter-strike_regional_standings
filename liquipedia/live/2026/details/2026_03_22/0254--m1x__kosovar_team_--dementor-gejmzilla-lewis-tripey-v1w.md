### Roster Details<br />
Team Name: M1x (Kosovar team)<br />
Roster: Dementor, gejmzilla, Lewis, tripey, v1w<br />
Global Rank: [254](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [164]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  623.8<br />
<br />
Final Rank Value (623.8) = Starting Rank Value (599.1) + Head To Head Adjustments (24.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.100<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 599.1
- 400 + ( ( 0.100 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 599.1


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


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1044 | 2026-02-24 | HYPERSPIRIT       | L   | 1.000      | -            | -                | -                | -         |    -5.01 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            4 |     1049 | 2026-02-24 | Insiders Esport   | W   | 1.000      | 0.354        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (1.000) |     6.82 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            3 |     1063 | 2026-02-24 | HYPERSPIRIT       | L   | 1.000      | -            | -                | -                | -         |    -4.86 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            2 |     1860 | 2026-02-07 | Ninjas in Pyjamas | L   | 0.909      | -            | -                | -                | -         |    -0.37 | Dementor, gejmzilla, Lewis, tripey, v1w |
|            1 |     1898 | 2026-02-06 | 3DMAX             | W   | 0.903      | 0.143        | 0.313 (0.040)    | 0.329 (0.042)    | 0 (0.000) |    28.14 | Dementor, gejmzilla, Lewis, tripey, v1w |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
