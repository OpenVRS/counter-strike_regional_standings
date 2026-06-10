### Roster Details<br />
Team Name: 5Actors<br />
Roster: airscape, Aunkere, Jerry, KENSi, tried<br />
Global Rank: [299](../../standings_global_2026_06_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_07.md)<br />
Regional Rank: [190]( ../../standings_europe_2026_06_07.md)<br />
<br />
Final Rank Value:  545.9<br />
<br />
Final Rank Value (545.9) = Starting Rank Value (539.2) + Head To Head Adjustments (6.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.149[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.140[<sup>2</sup>](#table1)

The average of these factors is 0.072<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.2
- 400 + ( ( 0.072 - 0.000 ) / ( 0.831 - 0.000 ) ) * 1600 = 539.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.045
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |     2099 | 2026-04-03 | 33             | L   | 0.759      | -            | -                | -                | -         |    -0.52 | airscape, Aunkere, Jerry, KENSi, tried |
|            7 |     2115 | 2026-04-03 | Athlon         | W   | 0.758      | 0.435        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.758) |     7.34 | airscape, Aunkere, Jerry, KENSi, tried |
|            6 |     2121 | 2026-04-02 | Nemiga Gaming  | L   | 0.757      | -            | -                | -                | -         |    -0.31 | airscape, Aunkere, Jerry, KENSi, tried |
|            5 |     3484 | 2026-03-10 | Nemiga Gaming  | L   | 0.601      | -            | -                | -                | -         |    -0.30 | airscape, Aunkere, Jerry, KENSi, tried |
|            4 |     3492 | 2026-03-10 | SPARTA Esports | W   | 0.601      | 0.371        | 0.000 (0.000)    | 0.038 (0.008)    | 1 (0.601) |    12.44 | airscape, Aunkere, Jerry, KENSi, tried |
|            3 |     3499 | 2026-03-10 | ARCRED         | L   | 0.600      | -            | -                | -                | -         |    -0.39 | airscape, Aunkere, Jerry, KENSi, tried |
|            2 |     3864 | 2026-03-03 | Younglings     | L   | 0.554      | -            | -                | -                | -         |   -11.22 | airscape, Aunkere, Jerry, KENSi, tried |
|            1 |     3894 | 2026-03-03 | SPARTA Esports | L   | 0.552      | -            | -                | -                | -         |    -0.40 | airscape, Aunkere, Jerry, KENSi, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($618,382.51)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
