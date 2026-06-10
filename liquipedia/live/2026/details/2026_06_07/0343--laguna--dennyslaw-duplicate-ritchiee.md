### Roster Details<br />
Team Name: LAGUNA<br />
Roster: dennyslaw, Duplicate, ritchiEE<br />
Global Rank: [343](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [207]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  444.6<br />
<br />
Final Rank Value (444.6) = Starting Rank Value (440.2) + Head To Head Adjustments (4.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.083[<sup>2</sup>](#table1)

The average of these factors is 0.021<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 440.2
- 400 + ( ( 0.021 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 440.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.027
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1727 | 2026-04-11 | Entropy Gaming            | L   | 0.814      | -            | -                | -                | -         |    -3.23 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            4 |     1737 | 2026-04-11 | Team Eclipse              | W   | 0.812      | 0.341        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.812) |    11.08 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            3 |     1741 | 2026-04-11 | Esport Academy Copenhagen | L   | 0.811      | -            | -                | -                | -         |    -0.44 | dennyslaw, Duplicate, Patrick, ritchiEE, S3NSEY |
|            2 |     4205 | 2026-02-24 | MANA eSports              | L   | 0.507      | -            | -                | -                | -         |    -1.19 | deb0, dennyslaw, Duplicate, fleav, ritchiEE     |
|            1 |     4234 | 2026-02-24 | BRUTE                     | L   | 0.505      | -            | -                | -                | -         |    -1.74 | deb0, dennyslaw, Duplicate, fleav, ritchiEE     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
