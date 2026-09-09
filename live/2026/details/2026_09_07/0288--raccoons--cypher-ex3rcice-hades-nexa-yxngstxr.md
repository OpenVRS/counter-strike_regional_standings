### Roster Details<br />
Team Name: Raccoons<br />
Roster: CYPHER, Ex3rcice, hades, nexa, yxngstxr<br />
Global Rank: [288](../../standings_global_2026_09_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_09_07.md)<br />
Regional Rank: [191]( ../../standings_europe_2026_09_07.md)<br />
<br />
Final Rank Value:  607.0<br />
<br />
Final Rank Value (607.0) = Starting Rank Value (553.2) + Head To Head Adjustments (53.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.250[<sup>2</sup>](#table1)
- Opponent Network: 0.072[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.080<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 553.2
- 400 + ( ( 0.080 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 553.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      268 | 2026-08-30 | Eternal Fire     | L   | 1.000      | -            | -                | -                | -         |    -2.91 | CYPHER, dycha, Ex3rcice, hades, nexa    |
|            8 |      302 | 2026-08-30 | LP               | L   | 1.000      | -            | -                | -                | -         |    -3.91 | CYPHER, dycha, Ex3rcice, hades, nexa    |
|            7 |      542 | 2026-08-25 | Mai Tai          | L   | 1.000      | -            | -                | -                | -         |   -15.32 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            6 |      604 | 2026-08-23 | Vexar            | L   | 1.000      | -            | -                | -                | -         |    -9.80 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            5 |      677 | 2026-08-20 | Bushido Wildcats | L   | 1.000      | -            | -                | -                | -         |    -4.25 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            4 |      702 | 2026-08-19 | Black Phoenix    | W   | 1.000      | 0.371        | 0.017 (0.006)    | 0.948 (0.351)    | 0 (0.000) |    27.14 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            3 |      743 | 2026-08-17 | Fire Flux        | W   | 1.000      | 0.333        | 0.010 (0.003)    | 0.354 (0.118)    | 0 (0.000) |    22.26 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            2 |      864 | 2026-08-13 | ROUNDS           | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.221 (0.074)    | 0 (0.000) |    17.46 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |
|            1 |      885 | 2026-08-12 | Vexar            | W   | 1.000      | 0.333        | 0.001 (0.000)    | 0.516 (0.172)    | 0 (0.000) |    23.15 | CYPHER, Ex3rcice, hades, nexa, yxngstxr |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($502,597.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
