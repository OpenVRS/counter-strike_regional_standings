### Roster Details<br />
Team Name: BAKS Esports<br />
Roster: k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA<br />
Global Rank: [220](../../standings_global_2026_07_12.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_12.md)<br />
Regional Rank: [146]( ../../standings_europe_2026_07_12.md)<br />
<br />
Final Rank Value:  706.6<br />
<br />
Final Rank Value (706.6) = Starting Rank Value (705.7) + Head To Head Adjustments (0.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.166[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.182[<sup>2</sup>](#table1)

The average of these factors is 0.161<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 705.7
- 400 + ( ( 0.161 - 0.000 ) / ( 0.844 - 0.000 ) ) * 1600 = 705.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight

- A team offers ownNetwork for other teams to collect for their network
- Own Network: 0.067
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      363 | 2026-06-19 | ReThink              | L   | 1.000      | -            | -                | -                | -         |   -10.03 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            4 |     1116 | 2026-05-23 | Oxuji Esports        | L   | 0.864      | -            | -                | -                | -         |    -3.27 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            3 |     1142 | 2026-05-23 | CYBERSHOKE Prospects | L   | 0.863      | -            | -                | -                | -         |    -2.53 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            2 |     1180 | 2026-05-22 | Eternal premium      | W   | 0.856      | 0.303        | 0.000 (0.000)    | 0.291 (0.075)    | 1 (0.856) |    12.66 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |
|            1 |     1190 | 2026-05-22 | X-CITY               | W   | 0.855      | 0.303        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.855) |     4.05 | k9ppy, Sa1nTy, turbo, whisper, xdENiSZERA |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,864.86)
- Divide that value by the 5th highest value among all rosters ($534,654.57)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-06-21 |      1.000 | $1,000.00      | $1,000.00       |
| 2026-05-23 |      0.865 | $1,000.00      | $864.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by Liquipedia.net_<br />
