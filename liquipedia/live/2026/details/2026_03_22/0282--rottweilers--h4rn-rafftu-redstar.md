### Roster Details<br />
Team Name: Rottweilers<br />
Roster: h4rn, rafftu, REDSTAR<br />
Global Rank: [282](../../standings_global_2026_03_22.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_22.md)<br />
Regional Rank: [175]( ../../standings_europe_2026_03_22.md)<br />
<br />
Final Rank Value:  570.6<br />
<br />
Final Rank Value (570.6) = Starting Rank Value (539.3) + Head To Head Adjustments (31.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.262[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.070<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 539.3
- 400 + ( ( 0.070 - 0.000 ) / ( 0.802 - 0.000 ) ) * 1600 = 539.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.056
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2239 | 2026-01-24 | FORZE Reload     | L   | 0.818      | -            | -                | -                | -         |    -3.26 | h4rn, Libido, rafftu, REDSTAR, SHiPZ        |
|            5 |     2314 | 2026-01-23 | Bushido Wildcats | W   | 0.809      | 0.384        | 0.001 (0.000)    | 0.242 (0.075)    | 0 (0.000) |    20.56 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ         |
|            4 |     2416 | 2026-01-20 | Team Pigeons     | W   | 0.789      | 0.384        | 0.049 (0.015)    | 0.326 (0.099)    | 0 (0.000) |    20.64 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ         |
|            3 |     2432 | 2026-01-19 | Hashiras         | L   | 0.783      | -            | -                | -                | -         |    -3.38 | Dytor, h4rn, rafftu, REDSTAR, SHiPZ         |
|            2 |     2883 | 2025-12-17 | HYPERSPIRIT      | L   | 0.564      | -            | -                | -                | -         |    -2.90 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |
|            1 |     2896 | 2025-12-17 | The Huns Esports | L   | 0.563      | -            | -                | -                | -         |    -0.38 | dennyslaw, Duplicate, h4rn, rafftu, REDSTAR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($404,624.76)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
