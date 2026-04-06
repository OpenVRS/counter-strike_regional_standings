### Roster Details<br />
Team Name: MARKnLARRY<br />
Roster: BRACE, micalis, yourwombat<br />
Global Rank: [311](../../standings_global_.md)<br />
<br />
Region: [Asia]( ../../standings_asia_.md)<br />
Regional Rank: [38]( ../../standings_asia_.md)<br />
<br />
Final Rank Value:  522.5<br />
<br />
Final Rank Value (522.5) = Starting Rank Value (481.4) + Head To Head Adjustments (41.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.162[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 481.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.092
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      630 | 2026-03-24 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -2.53 | BRACE, micalis, Roflko, sav, yourwombat  |
|            4 |      706 | 2026-03-23 | Vantage Esports             | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.003 (0.001)    | 0 (0.000) |    13.83 | BRACE, micalis, sav, yourwombat, zeph    |
|            3 |      747 | 2026-03-22 | BBBMBCBS                    | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.120 (0.033)    | 0 (0.000) |    12.80 | BRACE, micalis, Roflko, yourwombat, zeph |
|            2 |      805 | 2026-03-21 | Mindfreak (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -2.09 | BRACE, micalis, Roflko, yourwombat, zeph |
|            1 |      863 | 2026-03-20 | LITE Esports                | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.048 (0.013)    | 0 (0.000) |    19.14 | BRACE, micalis, Roflko, yourwombat, zeph |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($457,592.01)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
