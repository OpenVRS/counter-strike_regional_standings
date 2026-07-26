### Roster Details<br />
Team Name: WW Team<br />
Roster: ct0m, d1Ledez, deko, kelieN, StRoGo<br />
Global Rank: [146](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [99]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  849.9<br />
<br />
Final Rank Value (849.9) = Starting Rank Value (816.0) + Head To Head Adjustments (33.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.304[<sup>1</sup>](#table2)
- Bounty Collected: 0.303[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.229[<sup>2</sup>](#table1)

The average of these factors is 0.220<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 816.0
- 400 + ( ( 0.220 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 816.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.084
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2634 | 2026-04-05 | K27           | W   | 0.544      | 0.435        | 0.082 (0.019)    | 0.665 (0.157)    | 1 (0.544) |    15.70 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            5 |     2645 | 2026-04-05 | 1w Team       | L   | 0.543      | -            | -                | -                | -         |    -2.44 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            4 |     2689 | 2026-04-04 | Nemiga Gaming | W   | 0.538      | 0.435        | 0.108 (0.025)    | 0.746 (0.174)    | 1 (0.538) |    14.87 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            3 |     2758 | 2026-04-03 | ARCRED        | W   | 0.533      | 0.435        | 0.021 (0.005)    | 0.421 (0.098)    | 1 (0.533) |    13.89 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            2 |     2772 | 2026-04-03 | Younglings    | W   | 0.532      | 0.435        | 0.000 (0.000)    | 0.013 (0.003)    | 1 (0.532) |     1.73 | ct0m, d1Ledez, deko, kelieN, StRoGo |
|            1 |     2790 | 2026-04-03 | HOTU          | L   | 0.531      | -            | -                | -                | -         |    -9.85 | ct0m, d1Ledez, deko, kelieN, StRoGo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,722.69)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-04-05 |      0.545 | $5,000.00      | $2,722.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
