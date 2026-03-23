### Roster Details<br />
Team Name: 5Actors<br />
Roster: airscape, Aunkere, Jerry, KENSi, tried<br />
Global Rank: [285](../../standings_global_2026_03_15.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_15.md)<br />
Regional Rank: [175]( ../../standings_europe_2026_03_15.md)<br />
<br />
Final Rank Value:  565.7<br />
<br />
Final Rank Value (565.7) = Starting Rank Value (558.2) + Head To Head Adjustments (7.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.018[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 558.2
- 400 + ( ( 0.081 - 0.000 ) / ( 0.817 - 0.000 ) ) * 1600 = 558.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.033
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      189 | 2026-03-10 | Nemiga Gaming  | L   | 1.000      | -            | -                | -                | -         |    -0.48 | airscape, Aunkere, Jerry, KENSi, tried |
|            4 |      197 | 2026-03-10 | SPARTA Esports | W   | 1.000      | 0.371        | 0.004 (0.001)    | 0.494 (0.183)    | 1 (1.000) |    28.75 | airscape, Aunkere, Jerry, KENSi, tried |
|            3 |      202 | 2026-03-10 | ARCRED         | L   | 1.000      | -            | -                | -                | -         |    -0.71 | airscape, Aunkere, Jerry, KENSi, tried |
|            2 |      536 | 2026-03-03 | Younglings     | L   | 1.000      | -            | -                | -                | -         |   -19.61 | airscape, Aunkere, Jerry, KENSi, tried |
|            1 |      566 | 2026-03-03 | WhiteBird      | L   | 1.000      | -            | -                | -                | -         |    -0.49 | airscape, Aunkere, Jerry, KENSi, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($426,498.89)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
