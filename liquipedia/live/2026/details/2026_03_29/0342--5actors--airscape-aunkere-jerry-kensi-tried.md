### Roster Details<br />
Team Name: 5Actors<br />
Roster: airscape, Aunkere, Jerry, KENSi, tried<br />
Global Rank: [342](../../standings_global_2026_03_29.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_29.md)<br />
Regional Rank: [198]( ../../standings_europe_2026_03_29.md)<br />
<br />
Final Rank Value:  455.6<br />
<br />
Final Rank Value (455.6) = Starting Rank Value (449.7) + Head To Head Adjustments (6.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.100[<sup>2</sup>](#table1)

The average of these factors is 0.026<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 449.7
- 400 + ( ( 0.026 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 449.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.031
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      808 | 2026-03-10 | Nemiga Gaming  | L   | 1.000      | -            | -                | -                | -         |    -0.29 | airscape, Aunkere, Jerry, KENSi, tried |
|            4 |      816 | 2026-03-10 | SPARTA Esports | W   | 1.000      | 0.371        | 0.000 (0.000)    | 0.061 (0.023)    | 1 (1.000) |    22.06 | airscape, Aunkere, Jerry, KENSi, tried |
|            3 |      823 | 2026-03-10 | ARCRED         | L   | 1.000      | -            | -                | -                | -         |    -0.40 | airscape, Aunkere, Jerry, KENSi, tried |
|            2 |     1188 | 2026-03-03 | Younglings     | L   | 1.000      | -            | -                | -                | -         |   -15.11 | airscape, Aunkere, Jerry, KENSi, tried |
|            1 |     1218 | 2026-03-03 | SPARTA Esports | L   | 1.000      | -            | -                | -                | -         |    -0.30 | airscape, Aunkere, Jerry, KENSi, tried |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($491,244.66)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
