### Roster Details<br />
Team Name: Skele<br />
Roster: motion, neo, Oath<br />
Global Rank: [291](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2026_03_29.md)<br />
Regional Rank: [33]( ../../standings_asia_2026_03_29.md)<br />
<br />
Final Rank Value:  567.0<br />
<br />
Final Rank Value (567.0) = Starting Rank Value (514.4) + Head To Head Adjustments (52.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.015[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.059<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 514.4
- 400 + ( ( 0.059 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 514.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.060
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      712 | 2026-03-12 | Arcade Esports (Australian team) | L   | 1.000      | -            | -                | -                | -         |    -5.80 | HUGHMUNGUS, Kiyo, motion, neo, Oath |
|            6 |      716 | 2026-03-12 | SemperFi Esports                 | L   | 1.000      | -            | -                | -                | -         |    -1.53 | HUGHMUNGUS, Kiyo, motion, neo, Oath |
|            5 |     1671 | 2026-02-22 | Mindfreak (Australian team)      | L   | 0.963      | -            | -                | -                | -         |    -2.82 | motion, neo, Oath, sunshinez, tidy  |
|            4 |     1715 | 2026-02-21 | Ding Cuts                        | W   | 0.956      | 0.318        | 0.000 (0.000)    | 0.056 (0.017)    | 0 (0.000) |    11.56 | Arctic, lucas, motion, neo, Oath    |
|            3 |     1717 | 2026-02-21 | Rooster                          | W   | 0.956      | 0.278        | 0.006 (0.002)    | 0.246 (0.065)    | 0 (0.000) |    25.60 | motion, neo, Oath, sunshinez, tidy  |
|            2 |     1770 | 2026-02-20 | THUNDERdOWNUNDER                 | L   | 0.949      | -            | -                | -                | -         |    -0.42 | motion, neo, Oath, sunshinez, tidy  |
|            1 |     1872 | 2026-02-18 | Rooster                          | W   | 0.936      | 0.278        | 0.006 (0.001)    | 0.246 (0.064)    | 0 (0.000) |    26.00 | motion, neo, Oath, sunshinez, tidy  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
