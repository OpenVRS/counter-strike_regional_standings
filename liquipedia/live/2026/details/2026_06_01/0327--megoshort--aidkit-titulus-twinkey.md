### Roster Details<br />
Team Name: Megoshort<br />
Roster: aidKiT, titulus, Twinkey<br />
Global Rank: [327](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [202]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  505.2<br />
<br />
Final Rank Value (505.2) = Starting Rank Value (507.4) + Head To Head Adjustments (-2.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.207[<sup>2</sup>](#table1)
- Opponent Network: 0.019[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.056<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.4
- 400 + ( ( 0.056 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 507.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.026
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1236 | 2026-04-26 | Aimclub (Romanian team) | L   | 0.964      | -            | -                | -                | -         |    -4.87 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            4 |     1315 | 2026-04-25 | BASEMENT BOYS           | L   | 0.958      | -            | -                | -                | -         |    -1.54 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            3 |     1359 | 2026-04-24 | BankaPEPSI              | L   | 0.951      | -            | -                | -                | -         |    -8.56 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            2 |     1426 | 2026-04-22 | Aurora Young Blud       | L   | 0.938      | -            | -                | -                | -         |    -7.86 | aidKiT, b0denmaster, mogv, titulus, Twinkey |
|            1 |     2492 | 2026-03-28 | Cirahvi                 | W   | 0.772      | 0.435        | 0.004 (0.001)    | 0.562 (0.189)    | 0 (0.000) |    20.64 | 2high, aidKiT, robiin, titulus, Twinkey     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($625,058.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
