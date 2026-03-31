### Roster Details<br />
Team Name: M1X<br />
Roster: juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX<br />
Global Rank: [301](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [183]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  511.5<br />
<br />
Final Rank Value (511.5) = Starting Rank Value (505.2) + Head To Head Adjustments (6.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.203[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.053<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 505.2
- 400 + ( ( 0.053 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 505.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.014
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           13 |     4509 | 2025-10-18 | ALGO Esports    | L   | 0.163      | -            | -                | -                | -         |    -3.37 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|           12 |     4524 | 2025-10-17 | FORZE Reload    | L   | 0.158      | -            | -                | -                | -         |    -0.71 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|           11 |     4536 | 2025-10-17 | RUBY            | L   | 0.156      | -            | -                | -                | -         |    -1.10 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|           10 |     4563 | 2025-10-16 | SPARTA Esports  | W   | 0.151      | 0.384        | 0.004 (0.000)    | 0.485 (0.028)    | 0 (0.000) |     4.01 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            9 |     4642 | 2025-10-14 | FAVBET Team     | L   | 0.136      | -            | -                | -                | -         |    -0.29 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            8 |     4666 | 2025-10-13 | RUBY            | L   | 0.129      | -            | -                | -                | -         |    -0.89 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            7 |     4844 | 2025-10-08 | Betera Esports  | W   | 0.096      | 0.384        | 0.007 (0.000)    | 0.091 (0.003)    | 0 (0.000) |     2.37 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            6 |     4868 | 2025-10-07 | ARCRED          | W   | 0.091      | 0.384        | 0.020 (0.001)    | 0.873 (0.031)    | 0 (0.000) |     2.86 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            5 |     5063 | 2025-10-04 | MANA eSports    | W   | 0.069      | 0.384        | 0.000 (0.000)    | 0.415 (0.011)    | 0 (0.000) |     1.91 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            4 |     5081 | 2025-10-03 | Nuclear TigeRES | L   | 0.065      | -            | -                | -                | -         |    -0.01 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            3 |     5123 | 2025-10-02 | MANA eSports    | W   | 0.057      | 0.384        | 0.000 (0.000)    | 0.415 (0.009)    | 0 (0.000) |     1.59 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            2 |     5420 | 2025-09-25 | AM Gaming       | L   | 0.011      | -            | -                | -                | -         |    -0.00 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |
|            1 |     5431 | 2025-09-25 | SINNERS Esports | L   | 0.010      | -            | -                | -                | -         |    -0.00 | juanflatroo, nawwk, SENER1, sinnopsyy, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
